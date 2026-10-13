#!/usr/bin/env python3
"""
OZ Sponsor Jobs -> Visa Migrate (visamigrate.com) Master Migration Engine
Safely updates all domains, canonicals, schemas, sitemaps, and scripts.
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OLD_DOMAIN_WWW = "https://www.ozsponsorjobs.site"
OLD_DOMAIN_BARE = "https://ozsponsorjobs.site"
OLD_HOST = "ozsponsorjobs.site"

NEW_DOMAIN_WWW = "https://www.visamigrate.com"
NEW_DOMAIN_BARE = "https://visamigrate.com"
NEW_HOST = "visamigrate.com"

# 1. Update CNAME file
cname_path = os.path.join(BASE_DIR, "CNAME")
with open(cname_path, "w", encoding="utf-8") as f:
    f.write("www.visamigrate.com\n")
print(f"[OK] CNAME updated to: www.visamigrate.com")

# 2. Update Python scripts
python_scripts = [
    "generate_jobs.py",
    "google_indexing_tool.py",
    "indexnow_submitter.py",
    "telegram_publisher.py",
    "job_ledger.py",
    "build_dama_hub.py",
    "build_sponsors_directory.py",
    "generate_faq.py"
]

for script in python_scripts:
    sp = os.path.join(BASE_DIR, script)
    if os.path.exists(sp):
        with open(sp, "r", encoding="utf-8") as f:
            content = f.read()
        updated = content.replace(OLD_DOMAIN_WWW, NEW_DOMAIN_WWW)
        updated = updated.replace(OLD_DOMAIN_BARE, NEW_DOMAIN_WWW)
        updated = updated.replace(OLD_HOST, NEW_HOST)
        with open(sp, "w", encoding="utf-8") as f:
            f.write(updated)
        print(f"[OK] Updated script: {script}")

# 3. Batch replace across all HTML, JS, XML files
modified_files = 0
for root, dirs, files in os.walk(BASE_DIR):
    if ".git" in root or ".system_generated" in root or ".gemini" in root:
        continue
    for f in files:
        if f.endswith((".html", ".xml", ".js", ".json")):
            fp = os.path.join(root, f)
            try:
                with open(fp, "r", encoding="utf-8") as file_in:
                    text = file_in.read()
                
                if OLD_HOST in text:
                    text = text.replace(OLD_DOMAIN_WWW, NEW_DOMAIN_WWW)
                    text = text.replace(OLD_DOMAIN_BARE, NEW_DOMAIN_WWW)
                    text = text.replace(OLD_HOST, NEW_HOST)
                    
                    with open(fp, "w", encoding="utf-8") as file_out:
                        file_out.write(text)
                    modified_files += 1
            except Exception as e:
                print(f"[WARN] Error updating {fp}: {e}")

print(f"[OK] Batch replacement complete: {modified_files} HTML/JS/XML files updated to {NEW_HOST}.")
