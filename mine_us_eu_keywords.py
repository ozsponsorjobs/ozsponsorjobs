#!/usr/bin/env python3
"""
OZ Sponsor Jobs - US & Europe Deep Keyword Intelligence Miner
File: mine_us_eu_keywords.py
Description: Mines Google Autocomplete targeting USA (gl=us) and UK/Europe (gl=gb, gl=ie)
             to discover the exact high-volume search queries used by Americans and Europeans
             looking for Australian visa sponsorship, work visas, and overseas relocation.
"""

import urllib.request
import urllib.parse
import json
import time
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(BASE_DIR, "us_eu_keywords.json")

def get_suggest(query, gl, hl="en"):
    url = f"https://suggestqueries.google.com/complete/search?client=firefox&hl={hl}&gl={gl}&q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            d = json.loads(resp.read().decode("utf-8", errors="ignore"))
            return d[1] if len(d) > 1 else []
    except Exception:
        return []

def expand_queries(seed_list, gl_code):
    all_queries = set()
    for seed in seed_list:
        # 1. Base
        for item in get_suggest(seed, gl_code):
            all_queries.add(item)
        
        # 2. Alphabetical (a-m, n-z)
        for char in "abcdefghijklmnopqrstuvwxyz":
            for item in get_suggest(f"{seed} {char}", gl_code):
                all_queries.add(item)
            time.sleep(0.04)

        # 3. Intent prefixes
        for prefix in ["how to", "best", "jobs", "can i", "requirements for"]:
            for item in get_suggest(f"{prefix} {seed}", gl_code):
                all_queries.add(item)
            time.sleep(0.04)

    return sorted(list(all_queries))

def main():
    print("\n=======================================================")
    print(" MINING GOOGLE SEARCH DATA FOR USA & EUROPE")
    print("=======================================================\n")

    # 1. USA Focus
    print("[*] Mining USA (Google US - gl=us)...")
    us_seeds = [
        "australia visa sponsorship",
        "move to australia from usa",
        "australia work visa for us citizens",
        "australia jobs sponsorship",
        "subclass 482 visa"
    ]
    us_results = expand_queries(us_seeds, "us")
    print(f"  -> Extracted {len(us_results)} unique US search queries!")

    # 2. UK & Europe Focus
    print("\n[*] Mining United Kingdom & Europe (Google UK - gl=gb)...")
    uk_seeds = [
        "australia visa sponsorship",
        "move to australia from uk",
        "australia nursing sponsorship uk",
        "australia work visa uk",
        "sponsor jobs australia"
    ]
    uk_results = expand_queries(uk_seeds, "gb")
    print(f"  -> Extracted {len(uk_results)} unique UK & European search queries!")

    output = {
        "USA": us_results,
        "United_Kingdom_and_Europe": uk_results
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\n[DONE] Saved complete intelligence dataset to: {OUTPUT_FILE}\n")

if __name__ == "__main__":
    main()
