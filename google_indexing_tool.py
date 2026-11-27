#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Google Search Console URL Inspector and Fast Indexing Engine
File: google_indexing_tool.py
Description: Pure-Python, zero-dependency tool that:
             1. Authenticates securely via Google OAuth 2.0 (Installed App).
             2. Inspects URLs in sitemap.xml via Search Console URL Inspection API.
             3. Automatically submits unindexed URLs to Google Indexing API (URL_UPDATED).
             4. Generates an indexing audit report (indexing_report.json).
"""

import os
import sys
import time
import json
import argparse
import webbrowser
import urllib.request
import urllib.parse
import urllib.error
import re
import socket
import xml.etree.ElementTree as ET

# Ensure reliable DNS on Windows by prioritizing IPv4 over unreachable IPv6 AAAA records
_orig_getaddrinfo = socket.getaddrinfo
def _ipv4_getaddrinfo(host, port, family=0, *args, **kwargs):
    if family == 0:
        family = socket.AF_INET
    try:
        return _orig_getaddrinfo(host, port, family, *args, **kwargs)
    except socket.gaierror:
        return _orig_getaddrinfo(host, port, socket.AF_INET, *args, **kwargs)
socket.getaddrinfo = _ipv4_getaddrinfo

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CLIENT_SECRET_FILE = os.path.join(BASE_DIR, "google_client_secret.json")
TOKEN_FILE = os.path.join(BASE_DIR, "google_tokens.json")
SITEMAP_FILE = os.path.join(BASE_DIR, "sitemap.xml")
REPORT_FILE = os.path.join(BASE_DIR, "indexing_report.json")
HISTORY_FILE = os.path.join(BASE_DIR, "indexing_history.json")
SITE_URL = "https://www.visamigrate.com/"

SCOPES = [
    "https://www.googleapis.com/auth/indexing",
    "https://www.googleapis.com/auth/webmasters.readonly"
]


def load_history():
    """Loads previously submitted URLs and timestamps from indexing_history.json."""
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[WARN] Could not read history file: {e}")
            return {}
    return {}


def save_history(history):
    """Saves submitted URLs ledger to indexing_history.json."""
    try:
        with open(HISTORY_FILE, "w", encoding="utf-8") as f:
            json.dump(history, f, indent=2)
    except Exception as e:
        print(f"[WARN] Could not save history file: {e}")


def is_recently_submitted(history, url, days_threshold=7):
    """Checks if a URL has already been submitted within the threshold in days."""
    record = history.get(url)
    if not record:
        return False, None
    submitted_at_str = record.get("submitted_at")
    if not submitted_at_str:
        return True, "previously (no timestamp)"
    try:
        # Strip trailing Z and parse ISO string e.g. 2026-09-11T12:00:00
        clean_ts = submitted_at_str.replace("Z", "")
        t_struct = time.strptime(clean_ts[:19], "%Y-%m-%dT%H:%M:%S")
        elapsed_sec = time.time() - time.mktime(t_struct)
        elapsed_days = elapsed_sec / (24 * 3600)
        if elapsed_days < days_threshold:
            return True, f"{elapsed_days:.1f} days ago ({submitted_at_str[:10]})"
    except Exception:
        return True, submitted_at_str
    return False, None


def load_client_credentials():
    if not os.path.exists(CLIENT_SECRET_FILE):
        print(f"[ERROR] Missing {CLIENT_SECRET_FILE}. Please ensure client secret exists.")
        sys.exit(1)
    with open(CLIENT_SECRET_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    info = data.get("installed", data.get("web", {}))
    return info.get("client_id"), info.get("client_secret")


def refresh_access_token(client_id, client_secret, refresh_token):
    token_url = "https://oauth2.googleapis.com/token"
    data = urllib.parse.urlencode({
        "client_id": client_id,
        "client_secret": client_secret,
        "refresh_token": refresh_token,
        "grant_type": "refresh_token"
    }).encode("utf-8")
    req = urllib.request.Request(token_url, data=data, headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            token_resp = json.loads(resp.read().decode("utf-8"))
            token_resp["refresh_token"] = refresh_token
            token_resp["expires_at"] = time.time() + token_resp.get("expires_in", 3600)
            with open(TOKEN_FILE, "w", encoding="utf-8") as tf:
                json.dump(token_resp, tf, indent=2)
            return token_resp["access_token"]
    except Exception as e:
        print(f"[WARN] Token refresh failed: {e}")
        return None


def get_auth_url(client_id):
    redirect_uri = "http://localhost"
    scope_str = " ".join(SCOPES)
    auth_params = {
        "client_id": client_id,
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "scope": scope_str,
        "access_type": "offline",
        "prompt": "consent"
    }
    return "https://accounts.google.com/o/oauth2/auth?" + urllib.parse.urlencode(auth_params, quote_via=urllib.parse.quote)


def exchange_auth_code(client_id, client_secret, user_input):
    redirect_uri = "http://localhost"
    # Extract code from pasted URL or direct string
    if "code=" in user_input:
        parsed = urllib.parse.urlparse(user_input)
        q = urllib.parse.parse_qs(parsed.query)
        code = q.get("code", [""])[0]
    else:
        code = user_input.split("&")[0].strip()

    if not code:
        print("[ERROR] Could not find authorization code in the input. Aborting.")
        sys.exit(1)

    token_url = "https://oauth2.googleapis.com/token"
    data = urllib.parse.urlencode({
        "code": code,
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code"
    }).encode("utf-8")

    req = urllib.request.Request(token_url, data=data, headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            token_resp = json.loads(resp.read().decode("utf-8"))
            token_resp["expires_at"] = time.time() + token_resp.get("expires_in", 3600)
            with open(TOKEN_FILE, "w", encoding="utf-8") as tf:
                json.dump(token_resp, tf, indent=2)
            print("\n[OK] Authentication successful! Tokens saved in google_tokens.json.")
            print("[OK] Future runs will execute automatically without asking for login.\n")
            return token_resp["access_token"]
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8", errors="ignore")
        print(f"\n[ERROR] Failed to exchange code for token (HTTP {e.code}): {err_msg}")
        sys.exit(1)


def get_service_account_token():
    """Attempts to authenticate via Google Service Account JSON key (inspired by google-indexing-script)."""
    for sa_name in ["service_account.json", "google_service_account.json"]:
        sa_path = os.path.join(BASE_DIR, sa_name)
        if os.path.exists(sa_path):
            try:
                from google.oauth2 import service_account
                import google.auth.transport.requests
                creds = service_account.Credentials.from_service_account_file(
                    sa_path,
                    scopes=SCOPES
                )
                request = google.auth.transport.requests.Request()
                creds.refresh(request)
                print(f"[AUTH] Successfully authenticated via Google Service Account: {sa_name}")
                return creds.token
            except Exception as e:
                print(f"[WARN] Failed to authenticate with Service Account {sa_name}: {e}")
    return None


def get_authenticated_access_token(auth_code=None):
    # 0. Check for Service Account Key first (zero-maintenance, perpetual authentication)
    sa_token = get_service_account_token()
    if sa_token:
        return sa_token

    client_id, client_secret = load_client_credentials()

    if auth_code:
        return exchange_auth_code(client_id, client_secret, auth_code)

    # 1. Check if valid or refreshable tokens already exist
    if os.path.exists(TOKEN_FILE):
        try:
            with open(TOKEN_FILE, "r", encoding="utf-8") as f:
                tokens = json.load(f)
            if tokens.get("access_token") and tokens.get("expires_at", 0) > time.time() + 60:
                return tokens["access_token"]
            if tokens.get("refresh_token"):
                refreshed = refresh_access_token(client_id, client_secret, tokens["refresh_token"])
                if refreshed:
                    return refreshed
        except Exception as e:
            print(f"[WARN] Could not read existing token: {e}")

    # 2. Construct Clean Google OAuth Authorization URL
    auth_url = get_auth_url(client_id)

    print("\n=======================================================")
    print(" GOOGLE SEARCH CONSOLE & INDEXING API AUTHENTICATION  ")
    print("=======================================================")
    print("\n[Step 1] Open this clean authorization URL in your browser:")
    print(f"\n{auth_url}\n")
    print("[Step 2] Sign in with the Google Account that manages the Search Console property.")
    print("         Click 'Continue' or 'Allow'.")
    print("\n[Step 3] After approving, your browser will redirect to:")
    print("         http://localhost/?code=4/0AX4X... (or similar)")
    print("         Note: If the browser shows 'This site can't be reached', that is completely normal!")
    print("\n[Step 4] Copy the entire URL from the browser's address bar, and paste it below:\n")

    if not sys.stdin.isatty():
        print("[NOTICE] Running non-interactively. Please authenticate using the URL above,")
        print("         then run with: python google_indexing_tool.py --auth-code \"<URL_OR_CODE>\"")
        sys.exit(0)

    try:
        webbrowser.open(auth_url)
    except Exception:
        pass

    user_input = input("Paste the redirected URL (or code) here: ").strip()
    if not user_input:
        print("[ERROR] No input provided. Aborting.")
        sys.exit(1)

    return exchange_auth_code(client_id, client_secret, user_input)


def validate_url(url, base_dir=BASE_DIR, check_live_http=True):
    """
    Verifies URL health, existence, and indexability prior to submitting:
    1. Maps URL to local file and checks file existence on disk.
    2. Inspects HTML content to ensure no 'noindex' meta tag exists (e.g. expired jobs).
    3. Executes a live HTTP GET request to ensure server returns HTTP 200 OK.
    Returns: (is_valid: bool, status_message: str, details: dict)
    """
    rel = url.replace(SITE_URL, "")
    if rel == "" or rel == "index.html":
        local_path = os.path.join(base_dir, "index.html")
    else:
        rel_clean = rel.lstrip("/\\").replace("/", os.sep)
        local_path = os.path.join(base_dir, rel_clean)
        if os.path.isdir(local_path):
            local_path = os.path.join(local_path, "index.html")

    # Check 1: Local file existence on disk
    if not os.path.exists(local_path):
        return False, f"Local static file not found on disk (would 404): {rel}", {"check": "file_exists", "status_code": 404}

    # Check 2: Check for noindex directive in head
    try:
        with open(local_path, "r", encoding="utf-8", errors="ignore") as f:
            head_content = f.read(4096)
        if re.search(r'meta\s+name=["\']robots["\']\s+content=["\'][^"\']*noindex', head_content, re.I):
            return False, "Page marked 'noindex' (e.g. expired vacancy)", {"check": "robots_meta", "noindex": True}
    except Exception as e:
        return False, f"Could not inspect local file: {e}", {"check": "file_read_error"}

    # Check 3: Live HTTP test
    if check_live_http:
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"})
            with urllib.request.urlopen(req, timeout=6) as resp:
                code = resp.getcode()
                if code != 200:
                    return False, f"Server returned non-200 HTTP status: {code}", {"check": "http_status", "status_code": code}
        except urllib.error.HTTPError as e:
            return False, f"Live HTTP Error {e.code} (e.g. 404 / 500)", {"check": "http_status", "status_code": e.code}
        except Exception as e:
            return False, f"Live connection failed: {e}", {"check": "connection_error"}

    return True, "200 OK & Verified Indexable", {"check": "all_passed", "status_code": 200}


def get_sitemap_urls():
    if not os.path.exists(SITEMAP_FILE):
        print(f"[ERROR] Sitemap not found at {SITEMAP_FILE}")
        sys.exit(1)
    tree = ET.parse(SITEMAP_FILE)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [u.find("sm:loc", ns).text.strip() for u in root.findall("sm:url", ns)]


def inspect_url(access_token, url):
    """Queries Search Console URL Inspection API."""
    api_url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
    payload = json.dumps({
        "inspectionUrl": url,
        "siteUrl": SITE_URL
    }).encode("utf-8")

    req = urllib.request.Request(
        api_url,
        data=payload,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            res = json.loads(resp.read().decode("utf-8"))
            idx_res = res.get("inspectionResult", {}).get("indexStatusResult", {})
            verdict = idx_res.get("verdict", "UNKNOWN")
            coverage = idx_res.get("coverageState", "Unknown")
            is_indexed = (verdict == "PASS" or "indexed" in coverage.lower()) and ("not indexed" not in coverage.lower())
            return {
                "status": "success",
                "is_indexed": is_indexed,
                "verdict": verdict,
                "coverage": coverage,
                "last_crawl": idx_res.get("lastCrawlTime", "Never")
            }
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="ignore")
        return {"status": "error", "code": e.code, "message": err_body, "is_indexed": False}
    except Exception as e:
        return {"status": "error", "code": 500, "message": str(e), "is_indexed": False}


def submit_to_indexing_api(access_token, url, action="URL_UPDATED"):
    """Sends URL to Google Indexing API for immediate crawling and indexing."""
    api_url = "https://indexing.googleapis.com/v3/urlNotifications:publish"
    payload = json.dumps({
        "url": url,
        "type": action
    }).encode("utf-8")

    req = urllib.request.Request(
        api_url,
        data=payload,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json"
        }
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            res = json.loads(resp.read().decode("utf-8"))
            notify_time = res.get("urlNotificationMetadata", {}).get("latestUpdate", {}).get("notifyTime", "")
            return {"status": "success", "notify_time": notify_time}
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="ignore")
        return {"status": "error", "code": e.code, "message": err_body}
    except Exception as e:
        return {"status": "error", "code": 500, "message": str(e)}


def main():
    parser = argparse.ArgumentParser(description="OZ Sponsor Jobs - Google URL Inspection & Fast Indexer")
    parser.add_argument("--mode", choices=["auto", "inspect", "index-all"], default="auto",
                        help="'auto': Inspect URLs and submit unindexed ones. 'inspect': Only check index status. 'index-all': Fast submit all URLs.")
    parser.add_argument("--limit", type=int, default=105, help="Maximum number of URLs to process (default: 105)")
    parser.add_argument("--start-from", type=int, default=1, help="1-based index to start processing from (e.g. 34 to resume)")
    parser.add_argument("--delay", type=float, default=0.3, help="Delay in seconds between API requests (default: 0.3s)")
    parser.add_argument("--force", action="store_true", help="Force submission even if URL was recently submitted (bypasses history)")
    parser.add_argument("--reindex-after-days", type=int, default=7, help="Days before re-submitting a previously submitted URL (default: 7)")
    parser.add_argument("--clear-history", action="store_true", help="Clear the indexing history file before running")
    parser.add_argument("--auth-code", type=str, default=None, help="Directly exchange an authorization code or redirect URL")
    parser.add_argument("--print-auth-url", action="store_true", help="Print the OAuth authorization URL and exit")
    parser.add_argument("--no-validate", action="store_true", help="Skip pre-submission URL health & SEO validation")
    parser.add_argument("--no-live-check", action="store_true", help="Skip remote HTTP 200 check during validation (check local file & noindex only)")
    args = parser.parse_args()

    if args.print_auth_url:
        client_id, _ = load_client_credentials()
        print(get_auth_url(client_id))
        sys.exit(0)

    if args.clear_history:
        if os.path.exists(HISTORY_FILE):
            os.remove(HISTORY_FILE)
            print("[INFO] Indexing history cleared.")

    history = load_history()
    access_token = get_authenticated_access_token(auth_code=args.auth_code)
    all_urls = get_sitemap_urls()
    
    start_idx = max(1, args.start_from) - 1
    urls = all_urls[start_idx:start_idx + args.limit]
    total_in_sitemap = len(all_urls)

    print(f"\n=======================================================")
    print(f" PROCESSING SITEMAP URLS (Mode: {args.mode.upper()})")
    print(f" Range: {args.start_from} to {min(len(all_urls), start_idx + len(urls))} of {total_in_sitemap} total URLs")
    print(f" Target Property: {SITE_URL}")
    print(f" Quota Ledger: {len(history)} URLs currently tracked")
    print(f" Validation: {'DISABLED' if args.no_validate else 'ENABLED (Live 200 OK + Local File + Noindex Filter)'}")
    if args.force:
        print(" Quota Check: FORCED (History check disabled)")
    else:
        print(f" Quota Check: ENABLED (Skip if submitted within {args.reindex_after_days} days)")
    print(f"=======================================================")

    results = {
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "total_urls": len(urls),
        "validation_passed_count": 0,
        "validation_failed_count": 0,
        "quota_saved_count": 0,
        "indexed_count": 0,
        "unindexed_count": 0,
        "submitted_count": 0,
        "errors": [],
        "urls_detail": []
    }

    try:
        for idx_offset, url in enumerate(urls):
            current_num = start_idx + idx_offset + 1
            rel_slug = url.replace(SITE_URL, "/")
            print(f"\n[{current_num}/{total_in_sitemap}] Processing: {rel_slug}")

            # 1. Pre-submission Health & Indexability Validation
            if not args.no_validate:
                is_valid, val_reason, val_details = validate_url(url, BASE_DIR, check_live_http=not args.no_live_check)
                if not is_valid:
                    print(f"  -> [VALIDATION FAILED] {val_reason}. Skipping submission to preserve quota!")
                    results["validation_failed_count"] += 1
                    results["urls_detail"].append({
                        "url": url,
                        "status": "validation_failed",
                        "reason": val_reason
                    })
                    continue
                else:
                    print(f"  -> [VALIDATED OK] {val_reason}")
                    results["validation_passed_count"] += 1

            # 2. Fast check for index-all mode: skip if recently submitted
            if args.mode == "index-all" and not args.force:
                is_recent, detail = is_recently_submitted(history, url, args.reindex_after_days)
                if is_recent:
                    print(f"  -> [QUOTA SAVED] Already submitted {detail}. Skipping API request.")
                    results["quota_saved_count"] += 1
                    results["urls_detail"].append({
                        "url": url,
                        "status": "quota_saved",
                        "last_submitted": history.get(url, {}).get("submitted_at")
                    })
                    continue

            should_submit = False

            if args.mode in ["auto", "inspect"]:
                insp = inspect_url(access_token, url)
                if insp["status"] == "success":
                    if insp["is_indexed"]:
                        print(f"  -> [INDEXED] Verdict: {insp['verdict']} | Status: {insp['coverage']}")
                        results["indexed_count"] += 1
                        results["urls_detail"].append({"url": url, "indexed": True, "coverage": insp["coverage"]})
                        history[url] = {
                            "submitted_at": history.get(url, {}).get("submitted_at") or time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                            "status": "indexed",
                            "coverage": insp["coverage"]
                        }
                        save_history(history)
                        continue
                    else:
                        print(f"  -> [NOT INDEXED] Status: {insp['coverage']} (Last Crawl: {insp['last_crawl']})")
                        results["unindexed_count"] += 1
                        should_submit = True
                else:
                    print(f"  -> [INSPECTION NOTICE] Code {insp.get('code')}: {insp.get('message')[:120]}")
                    results["unindexed_count"] += 1
                    should_submit = True

            if args.mode == "index-all":
                should_submit = True

            # In auto mode, check if unindexed URL was already submitted recently to preserve 200/day quota
            if should_submit and args.mode == "auto" and not args.force:
                is_recent, detail = is_recently_submitted(history, url, args.reindex_after_days)
                if is_recent:
                    print(f"  -> [QUOTA SAVED] Already queued to Googlebot {detail}. Awaiting crawl. Skipping re-submission.")
                    results["quota_saved_count"] += 1
                    results["urls_detail"].append({
                        "url": url,
                        "status": "quota_saved",
                        "last_submitted": history.get(url, {}).get("submitted_at")
                    })
                    continue

            if should_submit and args.mode in ["auto", "index-all"]:
                print(f"  -> Submitting to Google Indexing API (URL_UPDATED)...")
                sub = submit_to_indexing_api(access_token, url)
                if sub["status"] == "success":
                    notify_t = sub.get("notify_time", "")
                    print(f"  -> [SUBMITTED OK] Googlebot queued! Timestamp: {notify_t}")
                    results["submitted_count"] += 1
                    results["urls_detail"].append({"url": url, "submitted": True, "notify_time": notify_t})
                    # Record in persistent history immediately
                    history[url] = {
                        "submitted_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                        "status": "submitted",
                        "notify_time": notify_t
                    }
                    save_history(history)
                else:
                    print(f"  -> [SUBMIT NOTICE] Code {sub.get('code')}: {sub.get('message')[:150]}")
                    results["errors"].append({"url": url, "error": sub.get("message")})

            time.sleep(args.delay)
    except KeyboardInterrupt:
        print("\n\n[!] Operation paused by user. Saving current progress...")

    # Save detailed report
    with open(REPORT_FILE, "w", encoding="utf-8") as rf:
        json.dump(results, rf, indent=2)

    print(f"\n=======================================================")
    print(f" INDEXING AUTOMATION SUMMARY REPORT SAVED             ")
    print(f"=======================================================")
    print(f" Total In Sitemap : {total_in_sitemap} URLs")
    print(f" URLs Processed   : {len(urls)}")
    print(f" Validated URLs   : {results['validation_passed_count']}")
    print(f" Validation Failed: {results['validation_failed_count']} (Skipped 404/Noindex)")
    print(f" Quota Saved      : {results['quota_saved_count']} (Already queued recently)")
    print(f" Already Indexed  : {results['indexed_count']}")
    print(f" Not Yet Indexed  : {results['unindexed_count']}")
    print(f" Sent to Googlebot: {results['submitted_count']}")
    print(f" Errors / Warnings: {len(results['errors'])}")
    print(f" Detailed Audit   : {REPORT_FILE}")
    print(f" Persistent Ledger: {HISTORY_FILE}")
    print(f"=======================================================\n")


if __name__ == "__main__":
    main()
