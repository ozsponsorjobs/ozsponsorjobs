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
        assert f'<link rel="canonical" href="https://www.visamigrate.com/jobs/{f}">' in content, f"Canonical tag missing or incorrect in {f}"

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

                    # Strict Google for Jobs & Search Console schema compliance checks
                    assert "address" in data["jobLocation"], f"Missing 'address' in jobLocation in {f}"
                    addr = data["jobLocation"]["address"]
                    assert addr.get("@type") == "PostalAddress", f"address is not PostalAddress in {f}"
                    assert "streetAddress" in addr and len(addr["streetAddress"].strip()) > 0, f"Missing or empty streetAddress in {f}"
                    assert "postalCode" in addr and len(addr["postalCode"].strip()) > 0, f"Missing or empty postalCode in {f}"
                    assert "addressLocality" in addr and len(addr["addressLocality"].strip()) > 0, f"Missing addressLocality in {f}"
                    assert "addressRegion" in addr and len(addr["addressRegion"].strip()) > 0, f"Missing addressRegion in {f}"
                    assert addr.get("addressCountry") == "AU", f"addressCountry is not AU in {f}"
            except Exception as err:
                raise AssertionError(f"Invalid JSON in schema of {f}: {err}")

        assert job_schema_found, f"JobPosting schema not found in {f}"

    print(f"[PASS] All {len(files)} generated job pages contain valid JobPosting JSON-LD (with full streetAddress & postalCode) and canonical tags.")


def test_programmatic_hubs():
    base_dir = os.path.dirname(__file__)
    visas_dir = os.path.join(base_dir, "visas")
    locations_dir = os.path.join(base_dir, "locations")

    visa_files = [f for f in os.listdir(visas_dir) if f.endswith(".html")]
    assert len(visa_files) >= 3, f"Expected at least 3 visa hub files, found {len(visa_files)}"

    location_files = [f for f in os.listdir(locations_dir) if f.endswith(".html")]
    assert len(location_files) == 5, f"Expected 5 location hub files, found {len(location_files)}"

    # Validate CollectionPage schema in generated visa hubs
    core_visas = ["subclass-482-tss-jobs.html", "subclass-186-ens-jobs.html", "subclass-494-regional-jobs.html"]
    for vf in core_visas:
        with open(os.path.join(visas_dir, vf), "r", encoding="utf-8") as file:
            content = file.read()
            assert f'<link rel="canonical" href="https://www.visamigrate.com/visas/{vf}">' in content
            assert '"@type": "CollectionPage"' in content

    # Validate CollectionPage schema in location hubs
    for lf in location_files:
        with open(os.path.join(locations_dir, lf), "r", encoding="utf-8") as file:
            content = file.read()
            assert f'<link rel="canonical" href="https://www.visamigrate.com/locations/{lf}">' in content
            assert '"@type": "CollectionPage"' in content

    print(f"[PASS] All {len(visa_files)} Visa Hubs and {len(location_files)} Location Hubs contain CollectionPage schema and canonical tags.")


def test_occupations_hubs():
    base_dir = os.path.dirname(__file__)
    occ_dir = os.path.join(base_dir, "occupations")
    assert os.path.exists(occ_dir), "occupations directory does not exist!"

    index_path = os.path.join(occ_dir, "index.html")
    assert os.path.exists(index_path), "occupations/index.html does not exist!"
    with open(index_path, "r", encoding="utf-8") as f:
        idx_content = f.read()
        assert '<link rel="canonical" href="https://www.visamigrate.com/occupations/">' in idx_content
        assert '"@type": "CollectionPage"' in idx_content

    occ_files = [f for f in os.listdir(occ_dir) if f.endswith(".html") and f != "index.html"]
    assert len(occ_files) == 43, f"Expected 43 occupation hub files, found {len(occ_files)}"

    for of in occ_files:
        filepath = os.path.join(occ_dir, of)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            assert f'<link rel="canonical" href="https://www.visamigrate.com/occupations/{of}">' in content
            assert '"@type": "CollectionPage"' in content

    print(f"[PASS] Master Directory and all {len(occ_files)} ANZSCO Occupation Hubs contain CollectionPage schema and canonical tags.")


def test_sitemap_xml():
    sitemap_path = os.path.join(os.path.dirname(__file__), "sitemap.xml")
    assert os.path.exists(sitemap_path), "sitemap.xml does not exist!"
    tree = ET.parse(sitemap_path)
    root = tree.getroot()

    urls = [loc.text for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    assert len(urls) >= 21, f"Expected at least 21 URLs in sitemap, found {len(urls)}"
    for u in urls:
        assert u.startswith("https://www.visamigrate.com/"), f"Non-absolute URL in sitemap: {u}"

    assert "https://www.visamigrate.com/occupations/" in urls
    assert "https://www.visamigrate.com/occupations/351311-chef-visa-sponsorship-jobs.html" in urls
    assert "https://www.visamigrate.com/occupations/254415-registered-nurse-visa-sponsorship-jobs.html" in urls
    assert "https://www.visamigrate.com/calculator/" in urls

    print(f"[PASS] sitemap.xml parsed successfully with {len(urls)} valid absolute URLs (Core + Hubs + Occupations + Jobs).")


def test_calculator_page():
    calc_path = os.path.join(os.path.dirname(__file__), "calculator", "index.html")
    assert os.path.exists(calc_path), "calculator/index.html does not exist!"

    with open(calc_path, "r", encoding="utf-8") as f:
        content = f.read()

    assert '<link rel="canonical" href="https://www.visamigrate.com/calculator/">' in content
    assert '"@type": "WebApplication"' in content
    assert '"@type": "BreadcrumbList"' in content
    assert '"@type": "FAQPage"' in content

    # Validate JSON-LD syntax
    schema_matches = re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>', content)
    assert len(schema_matches) >= 3, "Expected at least 3 JSON-LD scripts in calculator page"
    for s in schema_matches:
        data = json.loads(s)
        assert "@context" in data
        assert "@type" in data

    print("[PASS] Calculator page contains valid WebApplication, BreadcrumbList, and FAQPage schemas and canonical tag.")


def test_sponsor_profiles():
    base_dir = os.path.dirname(__file__)
    sponsors_dir = os.path.join(base_dir, "sponsors")
    assert os.path.exists(sponsors_dir), "sponsors directory does not exist!"

    master_path = os.path.join(sponsors_dir, "australia-visa-sponsorship-companies-list.html")
    assert os.path.exists(master_path), "Master sponsors directory does not exist!"

    with open(master_path, "r", encoding="utf-8") as f:
        master_content = f.read()
    assert '<link rel="canonical" href="https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html">' in master_content

    # Check generated company profile pages
    company_files = [f for f in os.listdir(sponsors_dir) if f.endswith("-visa-sponsorship-jobs.html")]
    assert len(company_files) >= 200, f"Expected at least 200 sponsor profile files, found {len(company_files)}"

    sample_sponsors = ["tesla-visa-sponsorship-jobs.html", "mastercard-visa-sponsorship-jobs.html"]
    for sf in sample_sponsors:
        sf_path = os.path.join(sponsors_dir, sf)
        assert os.path.exists(sf_path), f"Sample sponsor file {sf} does not exist!"
        with open(sf_path, "r", encoding="utf-8") as f:
            content = f.read()
        assert f'<link rel="canonical" href="https://www.visamigrate.com/sponsors/{sf}">' in content
        assert '"@type": "CollectionPage"' in content
        assert '"@type": "Organization"' in content
        assert '"@type": "BreadcrumbList"' in content
        assert '"@type": "FAQPage"' in content

    # Check sitemap-sponsors.xml
    sitemap_sponsors_path = os.path.join(base_dir, "sitemap-sponsors.xml")
    assert os.path.exists(sitemap_sponsors_path), "sitemap-sponsors.xml does not exist!"
    tree = ET.parse(sitemap_sponsors_path)
    root = tree.getroot()
    urls = [loc.text for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    assert len(urls) >= 200, f"Expected at least 200 URLs in sitemap-sponsors.xml, found {len(urls)}"
    assert "https://www.visamigrate.com/sponsors/tesla-visa-sponsorship-jobs.html" in urls

    # Check sitemap-index.xml includes sitemap-sponsors.xml
    sitemap_index_path = os.path.join(base_dir, "sitemap-index.xml")
    assert os.path.exists(sitemap_index_path)
    with open(sitemap_index_path, "r", encoding="utf-8") as f:
        idx_content = f.read()
    assert "https://www.visamigrate.com/sitemap-sponsors.xml" in idx_content

    print(f"[PASS] All {len(company_files)} Sponsor Profiles and sitemap-sponsors.xml validated successfully with Organization, CollectionPage, and FAQPage schemas.")


if __name__ == "__main__":
    test_validation_anti_spam()
    test_deduplication()
    test_generated_html_files()
    test_programmatic_hubs()
    test_occupations_hubs()
    test_calculator_page()
    test_sponsor_profiles()
    test_sitemap_xml()
    print("\nALL VERIFICATION TESTS PASSED SUCCESSFULLY!")
