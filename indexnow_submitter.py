#!/usr/bin/env python3
"""
OZ Sponsor Jobs - IndexNow Instant Submission Engine
File: indexnow_submitter.py
Description: Pure-Python, zero-dependency tool that submits URLs directly to the IndexNow API
             (Microsoft Bing, Yahoo, Yandex, Seznam) for near-instant crawling and indexing.
"""

import os
import sys
import json
import urllib.request
import urllib.parse
import urllib.error
import xml.etree.ElementTree as ET

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
KEY = "e8f41c2a0b394d679015c8e3f2a71b4d"
KEY_LOCATION = f"https://www.ozsponsorjobs.site/{KEY}.txt"
HOST = "www.ozsponsorjobs.site"
SITEMAP_FILE = os.path.join(BASE_DIR, "sitemap.xml")

INDEXNOW_ENDPOINTS = [
    ("IndexNow Central Hub", "https://api.indexnow.org/indexnow"),
    ("Microsoft Bing & Yahoo", "https://www.bing.com/indexnow"),
    ("Seznam.cz", "https://search.seznam.cz/indexnow"),
    ("Yandex", "https://yandex.com/indexnow")
]


def get_sitemap_urls(limit=None):
    """Extracts all active URLs from sitemap.xml."""
    if not os.path.exists(SITEMAP_FILE):
        print(f"[ERROR] Sitemap file not found: {SITEMAP_FILE}")
        return []

    try:
        tree = ET.parse(SITEMAP_FILE)
        root = tree.getroot()
        urls = [
            elem.text.strip()
            for elem in root.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
            if elem.text
        ]
        if limit:
            return urls[:limit]
        return urls
    except Exception as e:
        print(f"[ERROR] Failed to parse sitemap: {e}")
        return []


def submit_urls_indexnow(urls):
    """Submits a list of URLs to IndexNow endpoints."""
    if not urls:
        print("[WARN] No URLs provided for IndexNow submission.")
        return False

    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }

    data = json.dumps(payload).encode("utf-8")
    headers = {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "OZSponsorJobs-IndexNow/1.0"
    }

    all_success = True
    for name, endpoint in INDEXNOW_ENDPOINTS:
        print(f"[*] Pinging {name} ({endpoint}) with {len(urls)} URLs...")
        req = urllib.request.Request(endpoint, data=data, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                status = resp.getcode()
                if status in (200, 202):
                    print(f"  -> [SUCCESS] HTTP {status} (URLs accepted for fast crawl)!")
                else:
                    print(f"  -> [INFO] HTTP {status}")
        except urllib.error.HTTPError as e:
            # 202 Accepted might raise or return depending on python version
            if e.code in (200, 202):
                print(f"  -> [SUCCESS] HTTP {e.code} (Accepted)")
            else:
                err_msg = e.read().decode("utf-8", errors="ignore")
                print(f"  -> [ERROR] HTTP {e.code}: {err_msg}")
                all_success = False
        except Exception as e:
            print(f"  -> [ERROR] Connection failed: {e}")
            all_success = False

    return all_success


def main():
    import argparse
    parser = argparse.ArgumentParser(description="Submit URLs to IndexNow")
    parser.add_argument("--limit", type=int, default=100, help="Number of newest URLs to submit (default: 100)")
    parser.add_argument("--all", action="store_true", help="Submit all URLs in sitemap")
    args = parser.parse_args()

    urls = get_sitemap_urls()
    print(f"\n=======================================================")
    print(f" INDEXNOW INSTANT SEARCH ENGINE SUBMISSION")
    print(f" Total in sitemap: {len(urls)} URLs")
    print(f" Host: {HOST}")
    print(f" Verification Key: {KEY_LOCATION}")
    print(f"=======================================================\n")

    if args.all:
        selected_urls = urls
    else:
        # Submit newest URLs (last N in sitemap)
        selected_urls = urls[-args.limit:] if len(urls) >= args.limit else urls

    submit_urls_indexnow(selected_urls)


if __name__ == "__main__":
    main()
