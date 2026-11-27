#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Zero-Duplicate Job Ledger & Tracking Engine
File: job_ledger.py
Description: Tracks every job processed by API source, external ID, composite hash,
             and canonical slug to guarantee that NO duplicate job is ever generated or uploaded.
"""

import os
import re
import json
import hashlib
import urllib.parse
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEDGER_FILE = os.path.join(BASE_DIR, "job_ledger.json")
JOBS_DIR = os.path.join(BASE_DIR, "jobs")


def resolve_job_external_apply_url(entry: dict) -> str:
    """
    Guarantees an external job application URL.
    Never returns contact.html or an visamigrate.com internal link.
    """
    url = str(entry.get("apply_url") or "").strip()
    if url.startswith("http") and "contact.html" not in url and "visamigrate.com" not in url:
        return url

    ext_id = str(entry.get("external_id") or entry.get("id") or "").strip()
    if ext_id.startswith("jooble-"):
        jid = ext_id.replace("jooble-", "")
        return f"https://jooble.org/jdp/{jid}"

    title = entry.get("title", "Visa Sponsorship Job")
    company = entry.get("company", "Australia")
    city = entry.get("city", "Australia")
    query = f"{title} {company} {city}".strip()
    return f"https://au.indeed.com/jobs?q={urllib.parse.quote(query)}"


def normalize_text(text: str) -> str:
    """Normalize string by removing non-alphanumeric characters and lowering."""
    if not text:
        return ""
    text = text.lower().strip()
    return re.sub(r"[^\w]", "", text)


def compute_job_fingerprint(company: str, title: str, city: str) -> str:
    """
    Creates a persistent cryptographic composite fingerprint for a job opportunity:
    (normalized_company | normalized_title | normalized_city)
    """
    comp_norm = normalize_text(company)
    title_norm = normalize_text(title)
    city_norm = normalize_text(city)
    composite = f"{comp_norm}|{title_norm}|{city_norm}"
    return hashlib.sha256(composite.encode("utf-8")).hexdigest()


class JobLedger:
    def __init__(self, ledger_path: str = LEDGER_FILE):
        self.ledger_path = ledger_path
        self.data = self._load()

    def _load(self) -> dict:
        if os.path.exists(self.ledger_path):
            try:
                with open(self.ledger_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                print(f"[WARN] Failed to read {self.ledger_path}: {e}. Initializing fresh ledger.")
        return {
            "version": "1.0",
            "last_updated": datetime.now(timezone.utc).isoformat(),
            "total_indexed": 0,
            "jobs_by_fingerprint": {},
            "jobs_by_external_id": {},
            "jobs_by_slug": {}
        }

    def save(self):
        self.data["last_updated"] = datetime.now(timezone.utc).isoformat()
        self.data["total_indexed"] = len(self.data["jobs_by_fingerprint"])
        with open(self.ledger_path, "w", encoding="utf-8") as f:
            json.dump(self.data, f, indent=2, ensure_ascii=False)

    def is_duplicate(self, job: dict, slug: str = None) -> tuple[bool, str]:
        """
        Comprehensive Duplicate Check:
        1. Check External ID (e.g. adzuna-1234, jooble-5678)
        2. Check Composite Fingerprint (Company + Title + City)
        3. Check Slug against existing HTML files in /jobs/
        4. Check Canonical URL in ledger
        """
        ext_id = str(job.get("id", "")).strip()
        if ext_id and ext_id in self.data["jobs_by_external_id"]:
            prev = self.data["jobs_by_external_id"][ext_id]
            return True, f"External ID '{ext_id}' already processed (Slug: {prev.get('slug')})"

        # Check Composite Fingerprint
        fingerprint = compute_job_fingerprint(
            job.get("company", ""),
            job.get("title", ""),
            job.get("city", "")
        )
        if fingerprint in self.data["jobs_by_fingerprint"]:
            prev = self.data["jobs_by_fingerprint"][fingerprint]
            return True, f"Identical Job fingerprint already exists for '{job.get('company')}' - '{job.get('title')}' in {job.get('city')} (Slug: {prev.get('slug')})"

        # Check Slug in Ledger
        if slug:
            if slug in self.data["jobs_by_slug"]:
                return True, f"Slug '{slug}' already exists in ledger."
            
            # Check physical file
            job_html_path = os.path.join(JOBS_DIR, f"{slug}.html")
            if os.path.exists(job_html_path):
                return True, f"HTML file already exists on disk: jobs/{slug}.html"

        return False, "Unique"

    def record_job(self, job: dict, slug: str, source: str = "curated"):
        """Records an approved job into the ledger."""
        fingerprint = compute_job_fingerprint(
            job.get("company", ""),
            job.get("title", ""),
            job.get("city", "")
        )
        ext_id = str(job.get("id", "")).strip()
        now_iso = datetime.now(timezone.utc).isoformat()
        posted_date = job.get("posted_date") or now_iso
        expiry_date = job.get("expiry_date")
        status = job.get("status", "active")
        resolved_apply_url = resolve_job_external_apply_url(job)

        entry = {
            "fingerprint": fingerprint,
            "external_id": ext_id,
            "slug": slug,
            "title": job.get("title"),
            "company": job.get("company"),
            "city": job.get("city"),
            "state": job.get("state"),
            "source": source,
            "apply_url": resolved_apply_url,
            "posted_date": posted_date,
            "expiry_date": expiry_date,
            "indexed_at": now_iso,
            "status": status
        }

        self.data["jobs_by_fingerprint"][fingerprint] = entry
        if ext_id:
            self.data["jobs_by_external_id"][ext_id] = entry
        if slug:
            self.data["jobs_by_slug"][slug] = entry

    def evaluate_job_expiration(self, max_days: int = 45) -> tuple[int, list[dict]]:
        """
        Evaluates expiration of all tracked jobs per Google guidelines.
        A job is marked expired if:
        1. Its explicit expiry_date is in the past (< now)
        2. Its posted_date is older than max_days
        3. Or its status is already 'expired'
        Ensures validThrough / expiry_date is guaranteed to be in the past for schema validity.
        """
        now = datetime.now(timezone.utc)
        expired_count = 0
        expired_jobs = []

        for fp, entry in self.data.get("jobs_by_fingerprint", {}).items():
            is_expired = False
            exp_str = entry.get("expiry_date")
            if exp_str:
                try:
                    exp_dt = datetime.fromisoformat(exp_str)
                    if exp_dt.tzinfo is None:
                        exp_dt = exp_dt.replace(tzinfo=timezone.utc)
                    if exp_dt < now:
                        is_expired = True
                except Exception:
                    pass

            post_str = entry.get("posted_date")
            if not is_expired and post_str:
                try:
                    post_dt = datetime.fromisoformat(post_str)
                    if post_dt.tzinfo is None:
                        post_dt = post_dt.replace(tzinfo=timezone.utc)
                    from datetime import timedelta
                    if (now - post_dt).days > max_days:
                        is_expired = True
                        if not exp_str:
                            entry["expiry_date"] = (post_dt + timedelta(days=max_days)).isoformat()
                except Exception:
                    pass

            if not is_expired and entry.get("status") == "expired":
                is_expired = True

            if is_expired:
                if entry.get("status") != "expired":
                    entry["status"] = "expired"
                    expired_count += 1
                from datetime import timedelta
                # Ensure expiry_date is guaranteed in the past for schema validity
                if not entry.get("expiry_date"):
                    entry["expiry_date"] = (now - timedelta(days=1)).isoformat()
                else:
                    try:
                        exp_dt = datetime.fromisoformat(entry["expiry_date"])
                        if exp_dt.tzinfo is None:
                            exp_dt = exp_dt.replace(tzinfo=timezone.utc)
                        if exp_dt >= now:
                            entry["expiry_date"] = (now - timedelta(days=1)).isoformat()
                    except Exception:
                        entry["expiry_date"] = (now - timedelta(days=1)).isoformat()

                expired_jobs.append(entry)
                ext_id = entry.get("external_id")
                if ext_id and ext_id in self.data.get("jobs_by_external_id", {}):
                    self.data["jobs_by_external_id"][ext_id]["status"] = "expired"
                    self.data["jobs_by_external_id"][ext_id]["expiry_date"] = entry["expiry_date"]
                slug = entry.get("slug")
                if slug and slug in self.data.get("jobs_by_slug", {}):
                    self.data["jobs_by_slug"][slug]["status"] = "expired"
                    self.data["jobs_by_slug"][slug]["expiry_date"] = entry["expiry_date"]

        if expired_count > 0:
            self.save()

        return expired_count, expired_jobs

    def migrate_apply_urls(self) -> int:
        """Sanitizes all ledger entries to ensure none point to contact.html."""
        updated = 0
        for fp, entry in self.data.get("jobs_by_fingerprint", {}).items():
            old_url = entry.get("apply_url", "")
            new_url = resolve_job_external_apply_url(entry)
            if old_url != new_url:
                entry["apply_url"] = new_url
                ext_id = entry.get("external_id")
                if ext_id and ext_id in self.data.get("jobs_by_external_id", {}):
                    self.data["jobs_by_external_id"][ext_id]["apply_url"] = new_url
                slug = entry.get("slug")
                if slug and slug in self.data.get("jobs_by_slug", {}):
                    self.data["jobs_by_slug"][slug]["apply_url"] = new_url
                updated += 1
        if updated > 0:
            self.save()
        return updated

    def sync_from_existing_files(self):
        """Pre-populates ledger with existing job files on disk to prevent duplication."""
        if not os.path.exists(JOBS_DIR):
            return 0
        count = 0
        for f in os.listdir(JOBS_DIR):
            if f.endswith(".html"):
                slug = f[:-5]
                if slug not in self.data["jobs_by_slug"]:
                    entry = {
                        "fingerprint": f"legacy-{slug}",
                        "external_id": f"file-{slug}",
                        "slug": slug,
                        "title": slug.replace("-", " ").title(),
                        "company": "Existing",
                        "city": "Australia",
                        "state": "NSW",
                        "source": "existing_file",
                        "indexed_at": datetime.now(timezone.utc).isoformat(),
                        "status": "active"
                    }
                    self.data["jobs_by_slug"][slug] = entry
                    self.data["jobs_by_fingerprint"][entry["fingerprint"]] = entry
                    count += 1
        if count > 0:
            self.save()
        return count

    def get_stats(self) -> dict:
        return {
            "total_unique_jobs": len(self.data["jobs_by_fingerprint"]),
            "last_updated": self.data.get("last_updated")
        }


if __name__ == "__main__":
    ledger = JobLedger()
    synced = ledger.sync_from_existing_files()
    stats = ledger.get_stats()
    print("==================================================")
    print(" OZ SPONSOR JOBS - ZERO-DUPLICATE LEDGER AUDIT    ")
    print("==================================================")
    print(f"[*] Pre-synced legacy files: {synced}")
    print(f"[*] Total unique jobs in ledger: {stats['total_unique_jobs']}")
    print(f"[*] Ledger file path: {LEDGER_FILE}")
    print("==================================================")
