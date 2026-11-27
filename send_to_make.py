#!/usr/bin/env python3
"""
One-off test script: send a test job payload to the Make.com webhook.

NOT part of the site build — nothing in generate_jobs.py imports or calls
this file, and deploy.yml does not run it. It exists only so the site
manager can manually verify the Make.com scenario still accepts posts.

Credentials come ONLY from environment variables (never hard-coded):
    MAKE_WEBHOOK_URL  — the Make.com webhook URL for this scenario
    MAKE_API_KEY      — the API key the scenario expects

Usage:
    MAKE_WEBHOOK_URL=https://hook.make.com/... MAKE_API_KEY=... python send_to_make.py

If either variable is missing the script exits with a clear message and
sends nothing.
"""

import json
import os
import sys
import urllib.error
import urllib.request

MAKE_WEBHOOK_URL = os.environ.get("MAKE_WEBHOOK_URL", "")
MAKE_API_KEY = os.environ.get("MAKE_API_KEY", "")

# Sample payload (same shape as the original test script). Edit the fields
# below to test a different job; the URL and key always come from env.
PAYLOAD = {
    "title": "Senior Full Stack Software Engineer (482/186 Visa Sponsorship)",
    "company": "Atlassian Partner Network",
    "location": "Sydney, NSW, Australia",
    "city": "Sydney",
    "state": "NSW",
    "visa_type": "Subclass 482 TSS / 186 ENS PR",
    "salary": "A$140,000 - A$170,000 + Super",
    "description": "Leading Australian enterprise actively seeking an experienced Senior Full Stack Software Engineer. Genuine employer visa sponsorship provided with comprehensive relocation assistance.",
    "url": "https://www.visamigrate.com/jobs/sydney-senior-full-stack-software-engineer-482-186-sponsorship.html",
    "hashtags": "#AustraliaJobs #VisaSponsorship #Subclass482 #SydneyJobs #WorkInAustralia #TechJobs",
}


def main() -> int:
    if not MAKE_WEBHOOK_URL:
        print("MAKE_WEBHOOK_URL is not set — nothing sent. "
              "Export it before running this test script.")
        return 2
    if not MAKE_API_KEY:
        print("MAKE_API_KEY is not set — nothing sent. "
              "Export it before running this test script.")
        return 2

    data = json.dumps(PAYLOAD).encode("utf-8")
    headers = {
        "Content-Type": "application/json",
        "x-make-apikey": MAKE_API_KEY,
        "User-Agent": "VisaMigrate-MakePublisher/1.0",
    }
    req = urllib.request.Request(MAKE_WEBHOOK_URL, data=data, headers=headers)

    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            print("[SUCCESS] Data received by Make.com!")
            print("HTTP Status:", resp.getcode())
            print("Response:", resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        print(f"[HTTPError {exc.code}]:", exc.read().decode("utf-8"))
        return 1
    except Exception as exc:  # noqa: BLE001 - test script, report and exit
        print("[Error]:", exc)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
