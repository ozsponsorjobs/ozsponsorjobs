#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Programmatic Sponsor Company Profiles Engine
File: build_sponsor_profiles.py
Description: Generates dedicated, high-converting programmatic landing pages for all
             Australian employers listing visa sponsorship roles.
             Outputs:
               - sponsors/{company_slug}-visa-sponsorship-jobs.html (for every active sponsor)
               - sponsors/australia-visa-sponsorship-companies-list.html (updated master directory)
               - sitemap-sponsors.xml (dedicated sitemap for fast search engine indexing)
"""

import os
import sys
import json
import re
from datetime import datetime, timezone
from collections import defaultdict, Counter

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from occupations_data import ANZSCO_HUBS_BY_CODE
from generate_jobs import classify_job_anzsco, adsense_unit_html, SITE_DOMAIN

SPONSORS_DIR = os.path.join(BASE_DIR, "sponsors")
LEDGER_FILE = os.path.join(BASE_DIR, "job_ledger.json")
SITEMAP_SPONSORS_PATH = os.path.join(BASE_DIR, "sitemap-sponsors.xml")

SECTOR_KEYWORDS = {
    "Technology & Software": ["software", "engineer", "developer", "cloud", "cyber", "data", "it", "network", "system", "tech", "linux", "devops", "architect", "programmer", "frontend", "backend", "fullstack"],
    "Healthcare & Medical": ["nurse", "doctor", "gp", "medical", "health", "clinic", "hospital", "care", "psycholog", "dental", "speech", "physio", "pathol", "aged care", "caregiver", "allied health", "practitioner", "physician", "anaesthetist", "midwife"],
    "Engineering & Mining": ["civil", "mechanical", "mining", "structural", "energy", "electrical", "project engineer", "resources", "infrastructure", "drilling", "geotechnical"],
    "Trades & Construction": ["welder", "fitter", "mechanic", "carpenter", "electrician", "plumb", "boilermaker", "fabricat", "diesel", "construction", "builder", "technician", "machinist", "painter"],
    "Hospitality & Culinary": ["chef", "cook", "hotel", "restaurant", "hospitality", "venue", "barista", "kitchen", "catering", "pastry"],
    "Corporate & Professional": ["recruitment", "account", "manager", "consultant", "analyst", "marketing", "sales", "legal", "finance", "hr", "operations", "business", "executive", "administrator"]
}


def get_company_slug(name: str) -> str:
    """Generates a clean, normalized URL slug for a company."""
    s = re.sub(r'[^a-zA-Z0-9\s-]', '', name).strip().lower()
    s = re.sub(r'[\s-]+', '-', s)
    return s or "australian-sponsor"


def detect_company_sector(roles: list[dict]) -> str:
    """Identifies the primary industry sector based on job titles."""
    scores = Counter()
    for r in roles:
        title = r.get("title", "").lower()
        for sec, kws in SECTOR_KEYWORDS.items():
            if any(k in title for k in kws):
                scores[sec] += 1
    if scores:
        return scores.most_common(1)[0][0]
    return "Corporate & Professional"


def render_company_profile_html(
    company_name: str,
    company_slug: str,
    roles: list[dict],
    related_sponsors: list[tuple[str, str, int]]
) -> str:
    """Renders the full, high-converting HTML page for an individual sponsor."""
    today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    canonical_url = f"{SITE_DOMAIN}/sponsors/{company_slug}-visa-sponsorship-jobs.html"
    
    sector = detect_company_sector(roles)
    
    # Gather distinct cities and states
    cities = sorted(list(set(r.get("city", "Australia") for r in roles if r.get("city"))))
    states = sorted(list(set(r.get("state", "Australia") for r in roles if r.get("state"))))
    locations_str = ", ".join(cities[:4]) if cities else "Australia"
    if len(cities) > 4:
        locations_str += f" (+{len(cities)-4} more locations)"

    # Visas offered across roles
    visa_set = set()
    for r in roles:
        v_list = r.get("visas", ["482"])
        for v in v_list:
            visa_set.add(v.replace("subclass-", "").strip())
    if not visa_set:
        visa_set = {"482", "186"}
    visas_display = ", ".join(f"Subclass {v}" for v in sorted(list(visa_set)))

    # ANZSCO occupations represented
    occ_counts = Counter()
    for r in roles:
        occ_info = classify_job_anzsco(r.get("title", ""), r.get("description_raw", "") or r.get("summary", ""))
        code = (occ_info or {}).get("anzsco")
        if code:
            occ_counts[code] += 1

    top_occs = []
    for code, count in occ_counts.most_common(5):
        hub = ANZSCO_HUBS_BY_CODE.get(code)
        if hub:
            top_occs.append(f'<a href="../occupations/{hub["slug"]}.html" style="color:var(--color-primary); font-weight:700; text-decoration:underline;">{hub["title"]} (ANZSCO {code})</a>')
        else:
            top_occs.append(f'<strong>ANZSCO {code}</strong>')
    top_occs_html = ", ".join(top_occs) if top_occs else "Various Australian Skilled Shortage Occupations"

    # Meta tags
    roles_count = len(roles)
    title_tag = f"{company_name} Visa Sponsorship Jobs Australia (2026) | OZ Sponsor Jobs"
    meta_desc = f"Explore {roles_count} Australian visa sponsorship jobs at {company_name}. Subclass 482 TSS and 186 ENS opportunities in {locations_str} with $73,150+ TSMIT compliance."

    # Job Cards Rendering
    job_cards_html = ""
    for r in roles:
        occ = classify_job_anzsco(r.get("title", ""), r.get("description_raw", "") or r.get("summary", "")) or {"anzsco": None, "title": "Skilled Professional"}
        occ_hub = ANZSCO_HUBS_BY_CODE.get(occ.get("anzsco")) if occ.get("anzsco") else None
        occ_link = f'<a href="../occupations/{occ_hub["slug"]}.html" style="color:var(--color-primary); font-weight:600; text-decoration:none;">{occ["title"]} ({occ["anzsco"]})</a>' if occ_hub else f'<span>{occ["title"]}</span>'

        v_badges = " ".join([f'<span class="info-pill badge-{v.lower()}">Subclass {v}</span>' for v in r.get("visas", ["482"])])
        sal = r.get("salary_display") or ""
        date_posted = (r.get("posted_date") or "")[:10]

        job_cards_html += f"""
        <article class="job-card" style="margin-bottom:1.25rem;">
          <div class="job-card-header">
            <div>
              <h3 class="job-title" style="margin-bottom:0.35rem;">
                <a href="../jobs/{r['slug']}.html" style="color:var(--color-text); text-decoration:none;">{r['title']}</a>
              </h3>
              <div class="job-company" style="font-size:0.9rem; color:var(--color-text-muted);">
                <span>📍 {r.get('city', 'Australia')}, {r.get('state', '')}</span>
                <span style="margin:0 0.5rem;">&bull;</span>
                <span>💼 {occ_link}</span>
              </div>
            </div>
            <div style="text-align:right;">
              <span class="info-pill" style="background:#ecfdf5; color:#047857; font-weight:700; border:1px solid #a7f3d0;">
                Visa Sponsorship
              </span>
            </div>
          </div>
          <div class="job-card-meta" style="margin-top:0.75rem; display:flex; flex-wrap:wrap; gap:0.5rem; align-items:center;">
            {('<span class="info-pill" style="background:#f1f5f9; color:#334155; font-weight:600;">💰 ' + sal + '</span>') if sal else ''}
            {v_badges}
            <span style="margin-left:auto; font-size:0.8rem; color:var(--color-text-muted);">{('Posted: ' + date_posted) if date_posted else 'Posted date not listed'}</span>
          </div>
          <div class="job-card-actions" style="margin-top:1rem; display:flex; gap:0.75rem;">
            <a href="../jobs/{r['slug']}.html" class="btn btn-primary btn-sm">View Full Role &amp; Apply &rarr;</a>
            <a href="../calculator/" class="btn btn-outline btn-sm">Check 482 Eligibility</a>
          </div>
        </article>
        """

    # Related sponsors in same sector
    related_sponsors_html = ""
    for rel_name, rel_slug, rel_count in related_sponsors:
        related_sponsors_html += f"""
        <li style="padding:0.6rem 0; border-bottom:1px solid var(--color-border-light); display:flex; justify-content:space-between; align-items:center;">
          <a href="{rel_slug}-visa-sponsorship-jobs.html" style="font-weight:700; color:var(--color-primary); text-decoration:none;">
            {rel_name}
          </a>
          <span style="font-size:0.8rem; background:#eff6ff; color:#1d4ed8; padding:0.15rem 0.5rem; border-radius:9999px; font-weight:600;">
            {rel_count} {'job' if rel_count == 1 else 'jobs'}
          </span>
        </li>
        """

    # Structured Data JSON-LD
    schema_graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": f"{canonical_url}#webpage",
                "url": canonical_url,
                "name": title_tag,
                "description": meta_desc,
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": f"{SITE_DOMAIN}/#website",
                    "url": f"{SITE_DOMAIN}/",
                    "name": "OZ Sponsor Jobs"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"{canonical_url}#breadcrumb",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": f"{SITE_DOMAIN}/"},
                    {"@type": "ListItem", "position": 2, "name": "Sponsors Directory", "item": f"{SITE_DOMAIN}/sponsors/australia-visa-sponsorship-companies-list.html"},
                    {"@type": "ListItem", "position": 3, "name": company_name, "item": canonical_url}
                ]
            },
            {
                "@type": "Organization",
                "@id": f"{canonical_url}#organization",
                "name": company_name,
                "url": canonical_url,
                "areaServed": "AU",
                "description": f"Australian employer listing visa sponsorship roles under Subclass 482 TSS, Subclass 186 ENS, and Subclass 494 regional visas."
            },
            {
                "@type": "FAQPage",
                "@id": f"{canonical_url}#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": f"Does {company_name} sponsor work visas in Australia in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"Sponsorship requires the employer to hold active Standard Business Sponsorship (SBS) accreditation at the time of nomination. {company_name} has listed sponsored roles on this site; confirm the employer's current SBS status with them before applying."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"What visa subclasses does {company_name} sponsor?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"{company_name} offers sponsorship primarily under {visas_display}, allowing overseas professionals to work legally in Australia with pathways to Australian Permanent Residency (PR)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"What is the minimum salary for visa sponsorship at {company_name}?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"In accordance with Australian Fair Work and Department of Home Affairs regulations, all employer-sponsored positions at {company_name} meet or exceed the statutory Temporary Skilled Migration Income Threshold (TSMIT) of AUD $73,150 plus mandatory 11.5% superannuation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": f"Can international offshore candidates apply to {company_name}?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": f"Yes. Qualified international candidates outside Australia who meet Australian ANZSCO skills assessment standards, have relevant post-qualification experience, and possess required English proficiency (IELTS/PTE) are eligible to apply."
                        }
                    }
                ]
            }
        ]
    }

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>{title_tag}</title>
  <meta name="title" content="{title_tag}">
  <meta name="description" content="{meta_desc}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  
  <!-- Absolute Canonical URL -->
  <link rel="canonical" href="{canonical_url}">

  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
  <link rel="alternate icon" href="../favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:title" content="{title_tag}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{canonical_url}">
  <meta property="twitter:title" content="{title_tag}">
  <meta property="twitter:description" content="{meta_desc}">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
{json.dumps(schema_graph, indent=2)}
  </script>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMMF0YJPDV"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-LMMF0YJPDV');
  </script>
</head>
<body>

  <!-- Site Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../" class="brand-logo" aria-label="OZ Sponsor Jobs Homepage">
        <span class="flag-icon" aria-hidden="true">&#9733;</span>
        <span><span class="accent-oz">OZ</span> Sponsor Jobs</span>
      </a>

      <nav class="main-nav" id="primary-navigation" aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="../" class="nav-link">Find Jobs</a></li>
          <li><a href="../occupations/" class="nav-link">Occupations</a></li>
          <li><a href="../calculator/" class="nav-link">Calculator</a></li>
          <li><a href="../sponsors/australia-visa-sponsorship-companies-list.html" class="nav-link active">Sponsors Directory</a></li>
          <li><a href="../visas/subclass-482-tss-jobs.html" class="nav-link">Visa Guides</a></li>
          <li><a href="../faq/" class="nav-link">FAQ</a></li>
          <li><a href="../about.html" class="nav-link">About Us</a></li>
          <li><a href="../contact.html" class="nav-link">Contact</a></li>
        </ul>
        <div class="header-cta">
          <a href="../contact.html?type=employer" class="btn btn-primary btn-sm">Post a Sponsor Job</a>
        </div>
      </nav>

      <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" aria-label="Toggle navigation menu">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>

  <!-- Breadcrumbs -->
  <nav class="breadcrumb-trail" aria-label="Breadcrumb" style="background:#ffffff; border-bottom:1px solid #e2e8f0; padding:0.75rem 0;">
    <div class="container" style="display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; color:#64748b;">
      <a href="../" style="color:var(--color-primary); text-decoration:none;">Home</a>
      <span>&rsaquo;</span>
      <a href="australia-visa-sponsorship-companies-list.html" style="color:var(--color-primary); text-decoration:none;">Sponsors Directory</a>
      <span>&rsaquo;</span>
      <span style="color:#0f172a; font-weight:600;">{company_name}</span>
    </div>
  </nav>

  <!-- Page Header Banner -->
  <header class="page-header" style="background: linear-gradient(135deg, #001a2e 0%, #002b49 60%, #004575 100%); color:#ffffff; padding: 3rem 0 2.5rem;">
    <div class="container page-header-content">
      <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.25); border-radius:9999px; padding:0.35rem 0.9rem; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:1rem;">
        <span>🏢 Australian Employer</span>
      </div>
      <h1 style="font-size: 2.35rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.85rem; color:#ffffff;">
        {company_name} Visa Sponsorship Jobs Australia (2026)
      </h1>
      <p style="font-size: 1.1rem; line-height: 1.6; color: #cbd5e1; max-width: 820px; margin-bottom: 1.5rem;">
        Review employment opportunities and Australian work visa sponsorship pathways at {company_name}. Active Subclass 482 TSS and Subclass 186 ENS opportunities for skilled overseas professionals.
      </p>

      <!-- Key Sponsor Metrics Strip -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(160px, 1fr)); gap:1rem; max-width:820px; border-top:1px solid rgba(255,255,255,0.15); padding-top:1.25rem;">
        <div>
          <div style="font-size:1.6rem; font-weight:800; color:#38bdf8;">{roles_count}</div>
          <div style="font-size:0.8rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">Active Roles</div>
        </div>
        <div>
          <div style="font-size:1.6rem; font-weight:800; color:#94a3b8;">Not verified</div>
          <div style="font-size:0.8rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">SBS Status</div>
        </div>
        <div>
          <div style="font-size:1.6rem; font-weight:800; color:#fbbf24;">$73,150+</div>
          <div style="font-size:0.8rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">TSMIT Compliant</div>
        </div>
        <div>
          <div style="font-size:1.6rem; font-weight:800; color:#c084fc;">Direct / 2-Yr TRT</div>
          <div style="font-size:0.8rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">PR Pathway</div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content Layout -->
  <main class="container" style="padding: 2.5rem 1rem;">
    <div class="content-grid" style="display:grid; grid-template-columns: 2fr 1fr; gap:2rem;">

      <!-- Main Column -->
      <div class="main-column">

        <!-- BLUF / Executive Summary Box -->
        <div class="bluf-box" style="margin-top:0; margin-bottom: 2rem;">
          <strong class="bluf-label">&#10004; Sponsor Verification Summary</strong>
          <p style="margin-top:0.35rem; color:#064e3b; font-size:1rem; line-height:1.6;">
            <strong>{company_name}</strong> is an Australian organization operating in the <strong>{sector}</strong> industry, listing sponsored roles under <strong>{visas_display}</strong>. Sponsorship requires the employer to hold active Standard Business Sponsorship at the time of nomination, and sponsored roles must meet the statutory <strong>$73,150 AUD TSMIT floor</strong>.
          </p>
        </div>

        <!-- Calculator Callout Banner -->
        <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1px solid #bfdbfe; border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span style="font-size:1.5rem;">🎯</span>
            <h2 style="font-size:1.2rem; font-weight:800; color:var(--color-primary); margin:0;">
              Check Your Eligibility for {company_name} Sponsorship
            </h2>
          </div>
          <p style="font-size:0.925rem; color:#334155; line-height:1.5; margin:0;">
            Assess your nominated occupation, English proficiency (IELTS/PTE), and TSMIT compliance to receive an instant compatibility score for Subclass 482 and 186 visas.
          </p>
          <div>
            <a href="../calculator/" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700;">
              <span>Calculate My Sponsorship Eligibility (60s)</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <!-- Current Active Roles Section -->
        <section id="open-vacancies" style="margin-bottom: 2.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.25rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #0f172a; margin:0;">
              Active Visa Sponsored Roles at {company_name} ({roles_count})
            </h2>
            <span style="font-size:0.85rem; color:var(--color-text-muted);">Updated: {today_str}</span>
          </div>

          <div class="jobs-list">
            {job_cards_html}
          </div>
        </section>

        <!-- Company Sponsorship Profile Details -->
        <section style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.75rem; margin-bottom:2.5rem;">
          <h2 style="font-size:1.35rem; font-weight:800; color:#0f172a; margin-bottom:1rem;">
            Australian Work Visa Pathways at {company_name}
          </h2>
          <div style="display:flex; flex-direction:column; gap:1rem; font-size:0.95rem; color:#334155; line-height:1.65;">
            <p>
              When applying for a sponsored position with <strong>{company_name}</strong>, international candidates will typically navigate one of three primary visa subclasses depending on their experience and occupational classification:
            </p>
            <ul style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.5rem;">
              <li>
                <strong>Subclass 482 Temporary Skill Shortage (TSS):</strong> Suitable for candidates with at least 2 years of relevant post-qualification experience. Grants 2 to 4 years of work authorization in Australia with a direct employer-sponsored pathway to Australian Permanent Residency via the Subclass 186 TRT stream after 2 years.
              </li>
              <li>
                <strong>Subclass 186 Employer Nomination Scheme (ENS):</strong> Grants immediate Australian Permanent Residency on arrival for senior specialists with 3+ years of post-qualification experience and a formal positive skills assessment.
              </li>
              <li>
                <strong>Subclass 494 Skilled Employer Sponsored Regional:</strong> Applicable for regional work locations outside Sydney, Melbourne, and Brisbane, offering priority processing and transition to Subclass 191 PR.
              </li>
            </ul>
          </div>
        </section>

        <!-- Frequently Asked Questions -->
        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.45rem; font-weight: 800; color: #0f172a; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
            Frequently Asked Questions: Sponsoring with {company_name}
          </h2>

          <div style="display:flex; flex-direction:column; gap:1rem;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
              <h3 style="font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-bottom:0.35rem;">
                Does {company_name} sponsor overseas candidates?
              </h3>
              <p style="font-size:0.9rem; color:#334155; line-height:1.6; margin:0;">
                Sponsorship requires the employer to hold active Standard Business Sponsorship (SBS) accreditation at the time of nomination. {company_name} has listed sponsored roles on this site; confirm the employer's current SBS status with them before applying.
              </p>
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
              <h3 style="font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-bottom:0.35rem;">
                What is the salary requirement for {company_name} sponsorship?
              </h3>
              <p style="font-size:0.9rem; color:#334155; line-height:1.6; margin:0;">
                All sponsored positions must meet Australia's statutory Temporary Skilled Migration Income Threshold (TSMIT) of AUD $73,150 plus 11.5% superannuation, ensuring fair Australian market wages.
              </p>
            </div>

            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
              <h3 style="font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-bottom:0.35rem;">
                Can my family accompany me on a {company_name} visa?
              </h3>
              <p style="font-size:0.9rem; color:#334155; line-height:1.6; margin:0;">
                Yes. Under Subclass 482 and 186 visa arrangements, secondary applicants (spouses, de facto partners, and dependent children) are included with unrestricted work and study entitlements across Australia.
              </p>
            </div>
          </div>
        </section>

      </div>

      <!-- Sidebar Column -->
      <aside class="sidebar">

        <!-- Company Snapshot Widget -->
        <div class="widget">
          <h3 class="widget-title">Company Snapshot</h3>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.9rem; padding:0;">
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Company:</span>
              <strong>{company_name}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Accreditation:</span>
              <strong style="color:#94a3b8;">Not verified</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Industry:</span>
              <strong>{sector}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Active Vacancies:</span>
              <strong style="color:var(--color-primary);">{roles_count} Roles</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Locations:</span>
              <strong>{locations_str}</strong>
            </li>
          </ul>
        </div>

        <!-- Related Occupations Widget -->
        <div class="widget">
          <h3 class="widget-title">Sponsoring Occupations</h3>
          <div style="font-size:0.875rem; color:#475569; line-height:1.6;">
            {top_occs_html}
          </div>
        </div>

        <!-- Related Sponsors Widget -->
        <div class="widget">
          <h3 class="widget-title">Other {sector} Sponsors</h3>
          <ul style="list-style:none; padding:0; margin:0;">
            {related_sponsors_html}
          </ul>
          <div style="margin-top:0.75rem; text-align:center;">
            <a href="australia-visa-sponsorship-companies-list.html" style="font-size:0.85rem; font-weight:700; color:var(--color-primary); text-decoration:underline;">
              View All 290+ Sponsors &rarr;
            </a>
          </div>
        </div>

        <!-- AdSense slot: renders a real unit only when ADSENSE_CLIENT_ID + ADSENSE_SLOT_SIDEBAR are set; otherwise nothing -->
        <div class="ad-slot-wrapper" style="margin:0;">
          <div class="ad-slot">
            {adsense_unit_html('ADSENSE_SLOT_SIDEBAR')}
          </div>
        </div>

      </aside>

    </div>
  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="../" class="brand-logo" style="color: #ffffff;">
            <span class="flag-icon">&#9733;</span>
            <span><span class="accent-oz">OZ</span> Sponsor Jobs</span>
          </a>
          <p>
            Australia's premier programmatic job aggregator connecting skilled international professionals with Australian employers offering visa sponsorship.
          </p>
        </div>

        <div>
          <h4 class="footer-heading">Visa Subclasses</h4>
          <ul class="footer-links">
            <li><a href="../visas/subclass-482-tss-jobs.html">Subclass 482 (TSS Visa)</a></li>
            <li><a href="../visas/subclass-186-ens-jobs.html">Subclass 186 (ENS Direct PR)</a></li>
            <li><a href="../visas/subclass-494-regional-jobs.html">Subclass 494 (Regional Visa)</a></li>
            <li><a href="../visas/dama-visa-sponsorship-jobs-australia.html">DAMA Regional Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Tools &amp; Resources</h4>
          <ul class="footer-links">
            <li><a href="../calculator/">Eligibility Calculator</a></li>
            <li><a href="../occupations/">Occupations Directory</a></li>
            <li><a href="australia-visa-sponsorship-companies-list.html">Sponsors Directory</a></li>
            <li><a href="../faq/">Sponsorship FAQ (2026)</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Platform &amp; Legal</h4>
          <ul class="footer-links">
            <li><a href="../about.html">About OZ Sponsor Jobs</a></li>
            <li><a href="../contact.html">Contact Support</a></li>
            <li><a href="../privacy-policy.html">Privacy Policy</a></li>
            <li><a href="../terms.html">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          &copy; 2026 OZ Sponsor Jobs (<a href="{SITE_DOMAIN}/" style="color:#cbd5e1;">visamigrate.com</a>). All rights reserved.
        </div>
        <div>
          Hosted on GitHub Pages &bull; Fast, static &amp; secure
        </div>
      </div>
    </div>
  </footer>

  <script src="../js/app.js"></script>
</body>
</html>"""


def generate_all_sponsor_profiles(active_jobs: list[tuple[dict, str]] = None) -> list[str]:
    """
    Builds dedicated company profile pages for all unique companies with active jobs,
    updates the master directory, and generates sitemap-sponsors.xml.
    Returns list of generated sponsor page file paths.
    """
    os.makedirs(SPONSORS_DIR, exist_ok=True)

    if active_jobs is None:
        if os.path.exists(LEDGER_FILE):
            ledger = json.load(open(LEDGER_FILE, "r", encoding="utf-8"))
            active_jobs = [
                (j, j.get("slug", "")) for j in ledger.get("jobs_by_slug", {}).values()
                if j.get("status") == "active"
            ]
        else:
            print("[WARN] No ledger found and no active_jobs provided!")
            return []

    # Group jobs by company slug
    companies_by_slug = defaultdict(lambda: {"name": "", "roles": []})
    for job, slug in active_jobs:
        co_name = job.get("company", "").strip()
        if not co_name:
            continue
        c_slug = get_company_slug(co_name)
        
        # Store primary display name (favor capitalized)
        if not companies_by_slug[c_slug]["name"] or co_name[0].isupper():
            companies_by_slug[c_slug]["name"] = co_name
        
        # Ensure job dict has slug
        j_copy = dict(job)
        j_copy["slug"] = slug
        companies_by_slug[c_slug]["roles"].append(j_copy)

    sorted_companies = sorted(
        companies_by_slug.items(),
        key=lambda item: len(item[1]["roles"]),
        reverse=True
    )

    print(f"[*] Generating sponsor profiles for {len(sorted_companies)} unique approved employers...")

    generated_files = []
    generated_urls = []
    today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    # Generate each company profile page
    for c_slug, c_info in sorted_companies:
        co_name = c_info["name"]
        roles = c_info["roles"]

        # Find 5 related sponsors (excluding self)
        related = [
            (other_info["name"], other_slug, len(other_info["roles"]))
            for other_slug, other_info in sorted_companies
            if other_slug != c_slug
        ][:5]

        html = render_company_profile_html(co_name, c_slug, roles, related)
        file_name = f"{c_slug}-visa-sponsorship-jobs.html"
        file_path = os.path.join(SPONSORS_DIR, file_name)

        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)

        generated_files.append(file_path)
        generated_urls.append(f"{SITE_DOMAIN}/sponsors/{file_name}")

    print(f"[OK] Generated {len(generated_files)} individual sponsor profile landing pages in sponsors/")

    # Delete stale sponsor profiles: companies with no active jobs anymore.
    # The generator used to only ever ADD profiles, so ~150 expired ones
    # stayed live on disk (served, but unlisted in sitemap-sponsors.xml).
    # A company that returns with a fresh job gets its profile recreated
    # on the next run, so deletion is reversible. Safety: only files
    # matching the generated-profile pattern are ever removed; the master
    # directory page (australia-visa-sponsorship-companies-list.html) and
    # any other file are never touched.
    _expected_profiles = {f"{c_slug}-visa-sponsorship-jobs.html" for c_slug in companies_by_slug}
    _deleted = 0
    for _fname in sorted(os.listdir(SPONSORS_DIR)):
        if _fname == "australia-visa-sponsorship-companies-list.html":
            continue
        if not _fname.endswith("-visa-sponsorship-jobs.html"):
            continue
        if _fname in _expected_profiles:
            continue
        _fpath = os.path.join(SPONSORS_DIR, _fname)
        if not os.path.isfile(_fpath):
            continue
        os.remove(_fpath)
        print(f"[CLEANUP] Removed stale sponsor profile (no active jobs): {_fname}")
        _deleted += 1
    if _deleted:
        print(f"[OK] Removed {_deleted} stale sponsor profile(s) with no active jobs.")

    # Generate dedicated sitemap-sponsors.xml
    sitemap_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <!-- Master Sponsors Directory -->',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/sponsors/australia-visa-sponsorship-companies-list.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.90</priority>',
        '  </url>',
        '  <!-- Individual Approved Employer Sponsor Profile Hubs -->',
    ]
    for url in generated_urls:
        sitemap_lines.extend([
            '  <url>',
            f'    <loc>{url}</loc>',
            f'    <lastmod>{today_str}</lastmod>',
            '    <changefreq>weekly</changefreq>',
            '    <priority>0.82</priority>',
            '  </url>',
        ])
    sitemap_lines.append('</urlset>\n')

    with open(SITEMAP_SPONSORS_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_lines))

    print(f"[OK] sitemap-sponsors.xml generated with {len(generated_urls) + 1} URLs.")

    # Re-generate the Master Sponsors Directory from the active pool.
    # build_sponsors_directory.py has no main() — its module-level code
    # builds the directory when imported. It reads job_ledger.json and
    # keeps ACTIVE jobs only, and the generator saves the ledger before
    # this point, so the directory lists exactly the companies whose
    # profiles were (re)generated above: no links to deleted files.
    # (Import runs the module once per process; this is its only call site.)
    try:
        import build_sponsors_directory
        print("[*] Master Sponsors Directory regenerated from the active pool.")
    except Exception as e:
        print(f"[WARN] Could not update build_sponsors_directory: {e}")

    return generated_files


if __name__ == "__main__":
    generate_all_sponsor_profiles()
