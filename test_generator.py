"""
Verification Test Suite for generate_jobs.py
Tests validation rules, anti-spam safeguards, deduplication, hub pages, schema.org compliance, and sitemap integrity.
"""

import os
import sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import re
import json
import xml.etree.ElementTree as ET
from generate_jobs import validate_job, generate_job_slug, deduplicate_jobs

def test_validation_anti_spam():
    # 1. Informational / How-To title must be rejected
    spam_job = {
        "title": "How to get a Subclass 482 Visa in Sydney",
        "description_html": "<p>A detailed article explaining visa steps for candidates moving to Australia.</p>" * 5,
        "state": "NSW",
        "visas": ["482"],
        "expiry_date": "2026-12-31T00:00:00Z"
    }
    is_valid, reason = validate_job(spam_job)
    assert not is_valid, "Failed: Spam/How-To title was not rejected!"
    print("[PASS] Anti-spam: How-To informational article rejected correctly.")

    # 2. Invalid state must be rejected
    bad_state_job = {
        "title": "Software Engineer",
        "description_html": "<p>Valid job description with plenty of technical specifications and visa requirements.</p>" * 5,
        "state": "CALIFORNIA",
        "visas": ["482"],
        "expiry_date": "2026-12-31T00:00:00Z"
    }
    is_valid, reason = validate_job(bad_state_job)
    assert not is_valid, "Failed: Non-AU state was not rejected!"
    print("[PASS] Geographic safeguard: Non-AU state rejected correctly.")

    # 3. Missing sponsorship visa subclass must be rejected
    no_visa_job = {
        "title": "Retail Sales Assistant",
        "description_html": "<p>Standard local retail job with no visa sponsorship available for overseas applicants.</p>" * 5,
        "state": "NSW",
        "visas": ["local-only"],
        "expiry_date": "2026-12-31T00:00:00Z"
    }
    is_valid, reason = validate_job(no_visa_job)
    assert not is_valid, "Failed: Job without sponsorship visa was not rejected!"
    print("[PASS] Visa safeguard: Job without sponsorship visa rejected correctly.")

    # 4. Short/empty description must be rejected
    short_desc_job = {
        "title": "Civil Structural Engineer",
        "description_html": "<p>Too short</p>",
        "state": "VIC",
        "visas": ["482"],
        "expiry_date": "2026-12-31T00:00:00Z"
    }
    is_valid, reason = validate_job(short_desc_job)
    assert not is_valid, "Failed: Short description was not rejected!"
    print("[PASS] Quality safeguard: Insufficient description rejected correctly.")


def test_deduplication():
    sample_jobs = [
        {"company": "Atlassian Partner Network", "title": "Senior Engineer", "city": "Sydney"},
        {"company": "Atlassian Partner Network ", "title": "senior engineer", "city": "sydney "}, # duplicate
        {"company": "Atlassian Partner Network", "title": "Senior Engineer", "city": "Melbourne"}, # distinct city
    ]
    unique = deduplicate_jobs(sample_jobs)
    assert len(unique) == 2, f"Expected 2 unique jobs, got {len(unique)}"
    print("[PASS] Deduplication: Case-insensitive normalized hashing functions correctly.")


def test_generated_html_files():
    jobs_dir = os.path.join(os.path.dirname(__file__), "jobs")
    files = [f for f in os.listdir(jobs_dir) if f.endswith(".html")]
    assert len(files) >= 8, f"Expected at least 8 generated job files, found {len(files)}"

    for f in files:
        filepath = os.path.join(jobs_dir, f)
        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

        # Check Canonical
        assert f'<link rel="canonical" href="https://www.ozsponsorjobs.site/jobs/{f}">' in content, f"Canonical tag missing or incorrect in {f}"

        # Check Schema.org JobPosting
        schema_matches = re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>', content)
        assert len(schema_matches) >= 2, f"Expected at least 2 schema scripts in {f}"

        job_schema_found = False
        for s in schema_matches:
            try:
                data = json.loads(s)
                if data.get("@type") == "JobPosting":
                    job_schema_found = True
                    assert "title" in data and len(data["title"]) > 0
                    assert "datePosted" in data
                    assert "validThrough" in data
                    assert "hiringOrganization" in data
                    assert "jobLocation" in data
                    assert "baseSalary" in data
            except Exception as err:
                raise AssertionError(f"Invalid JSON in schema of {f}: {err}")

        assert job_schema_found, f"JobPosting schema not found in {f}"

    print(f"[PASS] All {len(files)} generated job pages contain valid JobPosting JSON-LD and canonical tags.")


def test_programmatic_hubs():
    base_dir = os.path.dirname(__file__)
    visas_dir = os.path.join(base_dir, "visas")
    locations_dir = os.path.join(base_dir, "locations")

    visa_files = [f for f in os.listdir(visas_dir) if f.endswith(".html")]
    assert len(visa_files) == 3, f"Expected 3 visa hub files, found {len(visa_files)}"

    location_files = [f for f in os.listdir(locations_dir) if f.endswith(".html")]
    assert len(location_files) == 5, f"Expected 5 location hub files, found {len(location_files)}"

    # Validate CollectionPage schema in visa hubs
    for vf in visa_files:
        with open(os.path.join(visas_dir, vf), "r", encoding="utf-8") as file:
            content = file.read()
            assert f'<link rel="canonical" href="https://www.ozsponsorjobs.site/visas/{vf}">' in content
            assert '"@type": "CollectionPage"' in content

    # Validate CollectionPage schema in location hubs
    for lf in location_files:
        with open(os.path.join(locations_dir, lf), "r", encoding="utf-8") as file:
            content = file.read()
            assert f'<link rel="canonical" href="https://www.ozsponsorjobs.site/locations/{lf}">' in content
            assert '"@type": "CollectionPage"' in content

    print(f"[PASS] All {len(visa_files)} Visa Hubs and {len(location_files)} Location Hubs contain CollectionPage schema and canonical tags.")


def test_sitemap_xml():
    sitemap_path = os.path.join(os.path.dirname(__file__), "sitemap.xml")
    assert os.path.exists(sitemap_path), "sitemap.xml does not exist!"
    tree = ET.parse(sitemap_path)
    root = tree.getroot()

    urls = [loc.text for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    assert len(urls) >= 21, f"Expected at least 21 URLs in sitemap, found {len(urls)}"
    for u in urls:
        assert u.startswith("https://www.ozsponsorjobs.site/"), f"Non-absolute URL in sitemap: {u}"

    print(f"[PASS] sitemap.xml parsed successfully with {len(urls)} valid absolute URLs (Core + Hubs + Jobs).")


if __name__ == "__main__":
    test_validation_anti_spam()
    test_deduplication()
    test_generated_html_files()
    test_programmatic_hubs()
    test_sitemap_xml()
    print("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY!")
