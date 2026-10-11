#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Google Suggest / Autocomplete Intelligence Engine
File: google_suggest_tool.py
Description: Pure-Python, zero-dependency tool that mines Google's live Autocomplete/Suggest API
             to uncover real-time long-tail keywords, user search queries, and high-ranking topics.
"""

import urllib.request
import urllib.parse
import json
import time
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(BASE_DIR, "suggested_keywords.json")

def fetch_suggestions(query, lang="en", country="au"):
    """Queries Google Suggest API for a specific query string."""
    encoded = urllib.parse.quote(query)
    url = f"https://suggestqueries.google.com/complete/search?client=firefox&hl={lang}&gl={country}&q={encoded}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8", errors="ignore"))
            if len(data) >= 2 and isinstance(data[1], list):
                return data[1]
    except Exception:
        pass
    return []


def expand_keyword(seed_keyword, depth="quick"):
    """
    Expands seed keyword using Alphabetical expansion (a-z) and Question modifiers (how, what, where).
    """
    results = set()
    
    # 1. Base suggestions
    base = fetch_suggestions(seed_keyword)
    for b in base:
        results.add(b)

    # 2. Question modifiers
    questions = ["how to get", "can i get", "which companies", "where to find", "what is", "best"]
    for q in questions:
        q_results = fetch_suggestions(f"{q} {seed_keyword}")
        for r in q_results:
            results.add(r)
        time.sleep(0.1)

    # 3. Alphabetical expansion (a-z)
    letters = "abcdefghijklmnopqrstuvwxyz"
    for char in letters:
        c_results = fetch_suggestions(f"{seed_keyword} {char}")
        for r in c_results:
            results.add(r)
        time.sleep(0.05)

    return sorted(list(results))


def run_intelligence(seed_terms=None):
    if not seed_terms:
        seed_terms = [
            "visa sponsorship australia",
            "482 visa jobs",
            "employer sponsorship australia"
        ]

    all_data = {}
    total_found = 0

    print("\n=======================================================")
    print(" GOOGLE AUTOCOMPLETE / SUGGEST INTELLIGENCE ENGINE")
    print(f" Target Region: Australia (gl=au, hl=en)")
    print(f" Seed Keywords: {', '.join(seed_terms)}")
    print("=======================================================\n")

    for seed in seed_terms:
        print(f"[*] Mining Google Autocomplete for: '{seed}'...")
        expanded = expand_keyword(seed)
        all_data[seed] = expanded
        total_found += len(expanded)
        print(f"  -> Extracted {len(expanded)} unique real-time search queries!")

    # Save to file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(all_data, f, indent=2, ensure_ascii=False)

    print(f"\n[DONE] Successfully harvested {total_found} high-intent search queries!")
    print(f"[SAVED] Results saved to: {OUTPUT_FILE}\n")

    # Print top 15 sample high-intent queries
    print("--- TOP SAMPLE HIGH-INTENT QUERIES DISCOVERED ---")
    flat_list = [item for sublist in all_data.values() for item in sublist]
    for idx, q in enumerate(flat_list[:15], start=1):
        print(f" {idx:2d}. {q}")
    print("------------------------------------------------\n")


if __name__ == "__main__":
    seeds = sys.argv[1:] if len(sys.argv) > 1 else None
    run_intelligence(seeds)
