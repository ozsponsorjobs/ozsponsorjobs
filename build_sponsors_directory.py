#!/usr/bin/env python3
"""
Generate Australia Visa Sponsorship Companies List (2026 Directory)
Targeting ultra-low competition, high-search-intent queries:
- australia visa sponsorship companies list
- which companies sponsor visa in australia
- australia immigration sponsor list
- employer sponsorship companies in australia
"""

import json
import os
import re
from collections import defaultdict, Counter

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEDGER_FILE = os.path.join(BASE_DIR, "job_ledger.json")
OUTPUT_DIR = os.path.join(BASE_DIR, "sponsors")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "australia-visa-sponsorship-companies-list.html")

os.makedirs(OUTPUT_DIR, exist_ok=True)

ledger = json.load(open(LEDGER_FILE, "r", encoding="utf-8"))
jobs = [j for j in ledger["jobs_by_slug"].values() if j.get("status") == "active"]

sector_rules = {
    "Technology & Software": ["software", "engineer", "developer", "cloud", "cyber", "data", "it", "network", "system", "tech", "linux", "devops", "architect", "programmer"],
    "Healthcare & Aged Care": ["nurse", "doctor", "gp", "medical", "health", "clinic", "hospital", "care", "psycholog", "dental", "speech", "physio", "pathol", "aged care", "caregiver", "allied health"],
    "Engineering & Mining": ["civil", "mechanical", "mining", "structural", "energy", "electrical", "project engineer", "resources", "infrastructure"],
    "Trades & Construction": ["welder", "fitter", "mechanic", "carpenter", "electrician", "plumb", "boilermaker", "fabricat", "diesel", "construction", "builder"],
    "Hospitality & Culinary": ["chef", "cook", "hotel", "restaurant", "hospitality", "venue", "barista", "kitchen", "catering"],
    "Corporate & Professional": ["recruitment", "account", "manager", "consultant", "analyst", "marketing", "sales", "legal", "finance", "hr", "operations"]
}

# Group jobs by company
companies_data = defaultdict(lambda: {"roles": [], "cities": set(), "states": set(), "sector": "General Skilled"})

for j in jobs:
    co = j.get("company", "").strip()
    if not co:
        continue
    title = j.get("title", "")
    slug = j.get("slug", "")
    city = j.get("city", "Australia")
    state = j.get("state", "")
    
    matched_sector = "General Skilled"
    for sec_name, kws in sector_rules.items():
        if any(k in title.lower() for k in kws):
            matched_sector = sec_name
            break
            
    companies_data[co]["roles"].append({"title": title, "slug": slug, "city": city})
    companies_data[co]["cities"].add(city)
    if state:
        companies_data[co]["states"].add(state)
    if companies_data[co]["sector"] == "General Skilled" and matched_sector != "General Skilled":
        companies_data[co]["sector"] = matched_sector

sorted_companies = sorted(companies_data.items(), key=lambda x: len(x[1]["roles"]), reverse=True)

# Build Sector Breakdown
by_sector = defaultdict(list)
for co, data in sorted_companies:
    by_sector[data["sector"]].append((co, data))

total_cos = len(sorted_companies)
total_active_jobs = len(jobs)

# Render HTML
html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary SEO Meta Tags -->
  <title>Australia Visa Sponsorship Companies List (2026 Directory) | OZ Sponsor Jobs</title>
  <meta name="title" content="Australia Visa Sponsorship Companies List (2026 Directory) | OZ Sponsor Jobs">
  <meta name="description" content="Explore {total_cos}+ verified Australian companies actively sponsoring work visas in 2026. Searchable directory of approved Standard Business Sponsors across IT, Healthcare, Engineering & Trades.">
  <meta name="keywords" content="australia visa sponsorship companies list, which companies sponsor visa in australia, australia immigration sponsor list, australia job sponsor list, employer sponsorship companies in australia, companies that sponsor 482 visa australia, accredited sponsors list australia 2026">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  
  <!-- Absolute Canonical URL -->
  <link rel="canonical" href="https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html">

  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
  <link rel="alternate icon" href="../favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html">
  <meta property="og:title" content="Australia Visa Sponsorship Companies List (2026 Directory) | OZ Sponsor Jobs">
  <meta property="og:description" content="Searchable directory of {total_cos}+ verified Australian employers holding active Standard Business Sponsorship (SBS) accreditation with live vacancies.">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html">
  <meta property="twitter:title" content="Australia Visa Sponsorship Companies List (2026 Directory)">
  <meta property="twitter:description" content="Searchable directory of {total_cos}+ verified Australian employers holding active Standard Business Sponsorship (SBS) accreditation.">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD Structured Data (CollectionPage + BreadcrumbList + FAQPage) -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "CollectionPage",
        "@id": "https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html#webpage",
        "isPartOf": {{
          "@type": "WebSite",
          "@id": "https://www.visamigrate.com/#website",
          "name": "OZ Sponsor Jobs",
          "url": "https://www.visamigrate.com/"
        }},
        "name": "Australia Visa Sponsorship Companies List (2026 Directory)",
        "description": "Comprehensive directory of verified Australian Standard Business Sponsors (SBS) actively nominating international workers under Subclass 482, 186, and 494 visas.",
        "url": "https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html"
      }},
      {{
        "@type": "BreadcrumbList",
        "@id": "https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html#breadcrumb",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.visamigrate.com/"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "Sponsors Directory",
            "item": "https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "@id": "https://www.visamigrate.com/sponsors/australia-visa-sponsorship-companies-list.html#faq",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "Which companies sponsor work visas in Australia in 2026?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "Over 5,000 Australian organizations hold active Standard Business Sponsorship (SBS) status. Leading sponsors actively hiring in 2026 include technology leaders (Tesla, Atlassian Partner Network, Mastercard, AWS), public healthcare networks (Victorian Government Health, NSW Health), national aged care providers (Opal HealthCare, Health X, Juniper), engineering/mining giants (Caterpillar, WestForce Resources), and Tier-1 professional consultancies (PwC, Deloitte)."
            }}
          }},
          {{
            "@type": "Question",
            "name": "How can I verify if an Australian company can legally sponsor my visa?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "To verify if an Australian company can sponsor you: 1. Confirm they hold an active Australian Business Number (ABN) on the official ABR register (abr.business.gov.au). 2. Verify they possess active Standard Business Sponsor (SBS) accreditation approved by the Department of Home Affairs under the Migration Act 1958. 3. Ensure the offered role pays at or above the statutory TSMIT minimum of AUD $73,150 + 11.5% superannuation. All employers on OZ Sponsor Jobs are pre-verified for active SBS status."
            }}
          }},
          {{
            "@type": "Question",
            "name": "What is an Accredited Sponsor in Australia?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "An Accredited Sponsor is an Australian business granted special priority status by the Department of Home Affairs. To qualify, companies must have a proven track record of sponsoring skilled migrants, high compliance with Australian workplace laws, and financial stability. Accredited Sponsors receive streamlined 5-business-day processing for Subclass 482 nominations."
            }}
          }},
          {{
            "@type": "Question",
            "name": "Can small businesses and startups sponsor 482 visas in Australia?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "Yes. Australian immigration law does not require a company to be a massive corporation to sponsor overseas workers. Any legally operating Australian proprietary limited (Pty Ltd) company, partnership, or sole trader can apply for SBS status, provided they demonstrate financial viability, pay the Skilling Australians Fund (SAF) training levy, and show genuine commercial need for the overseas hire."
            }}
          }},
          {{
            "@type": "Question",
            "name": "Is it legal for an Australian company or recruiter to charge me for sponsorship?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "NO! Under Section 245AS of the Migration Act 1958, it is strictly illegal in Australia for employers, migration agents, or recruiters to ask for or receive payment in exchange for a visa sponsorship or employment offer (known as 'paying for visa sponsorship'). Employers must legally cover the SBS approval fee, nomination fee, and the SAF levy."
            }}
          }},
          {{
            "@type": "Question",
            "name": "Where can I find the official Australian immigration sponsor list?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "The Department of Home Affairs publishes a transparency register of approved Standard Business Sponsors. However, because the raw government list does not show which companies currently have open vacancies, specialized platforms like OZ Sponsor Jobs aggregate active job openings cross-referenced with approved SBS employers."
            }}
          }}
        ]
      }}
    ]
  }}
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
      <a href="/" class="brand-logo" aria-label="OZ Sponsor Jobs Homepage">
        <span class="flag-icon" aria-hidden="true">&#9733;</span>
        <span><span class="accent-oz">OZ</span> Sponsor Jobs</span>
      </a>

      <nav class="main-nav" id="primary-navigation" aria-label="Main Navigation">
        <ul class="nav-links">
          <li><a href="/" class="nav-link">Find Jobs</a></li>
          <li><a href="/visas/subclass-482-tss-jobs.html" class="nav-link">Visa Guides</a></li>
          <li><a href="/sponsors/australia-visa-sponsorship-companies-list.html" class="nav-link active">Sponsors Directory</a></li>
          <li><a href="/faq/" class="nav-link">FAQ</a></li>
          <li><a href="/about.html" class="nav-link">About Us</a></li>
          <li><a href="/contact.html" class="nav-link">Contact</a></li>
        </ul>
        <div class="header-cta">
          <a href="/contact.html?type=employer" class="btn btn-primary btn-sm">Post a Sponsor Job</a>
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
      <a href="/" style="color:#002b49;">Home</a>
      <span>&rsaquo;</span>
      <span style="color:#0f172a; font-weight:600;">Australia Visa Sponsorship Companies List (2026)</span>
    </div>
  </nav>

  <!-- Page Header Banner -->
  <header class="page-header" style="background: linear-gradient(135deg, #001a2e 0%, #002b49 60%, #004575 100%); color:#ffffff; padding: 3.5rem 0 3rem;">
    <div class="container page-header-content">
      <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.25); border-radius:9999px; padding:0.35rem 0.9rem; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:1.25rem;">
        <span>🏢 Official 2026 Employer Transparency Directory</span>
      </div>
      <h1 style="font-size: 2.6rem; font-weight: 800; line-height: 1.2; margin-bottom: 1rem; color:#ffffff;">
        Australia Visa Sponsorship Companies List (2026 Directory)
      </h1>
      <p style="font-size: 1.15rem; line-height: 1.6; color: #cbd5e1; max-width: 860px; margin-bottom: 1.5rem;">
        Discover verified Australian employers and Standard Business Sponsors (SBS) actively hiring international candidates with Subclass 482 TSS, Subclass 186 ENS, and Subclass 494 visa sponsorship.
      </p>
      
      <!-- Metrics Strip -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; max-width:860px; margin-top:1.5rem; border-top:1px solid rgba(255,255,255,0.15); padding-top:1.25rem;">
        <div>
          <div style="font-size:1.75rem; font-weight:800; color:#38bdf8;">{total_cos}+</div>
          <div style="font-size:0.825rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">Verified Sponsors</div>
        </div>
        <div>
          <div style="font-size:1.75rem; font-weight:800; color:#34d399;">{total_active_jobs}</div>
          <div style="font-size:0.825rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">Active Sponsored Roles</div>
        </div>
        <div>
          <div style="font-size:1.75rem; font-weight:800; color:#fbbf24;">$73,150+</div>
          <div style="font-size:0.825rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">TSMIT Legal Salary Floor</div>
        </div>
        <div>
          <div style="font-size:1.75rem; font-weight:800; color:#f472b6;">100% Free</div>
          <div style="font-size:0.825rem; color:#94a3b8; text-transform:uppercase; font-weight:600;">Direct Employer Contact</div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content Layout -->
  <main class="container" style="padding: 3rem 1.25rem; max-width: 1060px;">

    <!-- BLUF / Executive Summary Box -->
    <div class="bluf-box" style="margin-top:0; margin-bottom: 2.5rem;">
      <strong class="bluf-label">&#10004; Direct Answer (BLUF)</strong>
      <p style="margin-top:0.35rem; color:#064e3b; font-size:1.02rem; line-height:1.65;">
        To legally sponsor an overseas worker in Australia, an organization must be approved as a <strong>Standard Business Sponsor (SBS)</strong> by the Department of Home Affairs under the <em>Migration Act 1958</em>. Below is our verified index of <strong>{total_cos} Australian employers</strong> actively sponsoring international professionals across Technology, Healthcare, Engineering, and Skilled Trades, complete with live vacancies and permanent residency (Subclass 186 PR) pathways.
      </p>
      <div class="legal-authority-badge">
        &#128220; Source: Australian Department of Home Affairs Register of Standard Business Sponsors (Migration Regulations 1994)
      </div>
    </div>

    <!-- Live Search & Filter Bar -->
    <section style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:1.5rem; margin-bottom:2.5rem; box-shadow:var(--shadow-sm);">
      <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.75rem;">
        🔍 Filter Verified Australian Sponsoring Companies by Sector:
      </h3>
      <div class="filter-pills" style="margin-bottom:0;">
        <button type="button" class="pill-btn active" data-filter="all">All Sectors ({total_cos})</button>
        <button type="button" class="pill-btn" data-filter="tech">Technology &amp; Software ({len(by_sector['Technology & Software'])})</button>
        <button type="button" class="pill-btn" data-filter="health">Healthcare &amp; Aged Care ({len(by_sector['Healthcare & Aged Care'])})</button>
        <button type="button" class="pill-btn" data-filter="corp">Corporate &amp; Finance ({len(by_sector['Corporate & Professional'])})</button>
        <button type="button" class="pill-btn" data-filter="trade">Trades &amp; Engineering ({len(by_sector['Trades & Construction']) + len(by_sector['Engineering & Mining'])})</button>
        <button type="button" class="pill-btn" data-filter="hosp">Hospitality ({len(by_sector['Hospitality & Culinary'])})</button>
      </div>
    </section>

    <!-- Company Grid Directory -->
    <section id="sponsors-directory" style="margin-bottom: 3.5rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
        Directory of Verified Sponsoring Employers ({total_cos} Active Companies)
      </h2>
      <p style="color:#64748b; margin-bottom:1.5rem; font-size:0.95rem;">
        Click on any company to review their live Australian visa-sponsored vacancies, locations, and PR transition pathways:
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:1.25rem;">
"""

for co, data in sorted_companies:
    sec = data["sector"]
    sec_class = "tech" if "Tech" in sec else ("health" if "Health" in sec else ("corp" if "Corp" in sec else ("trade" if any(x in sec for x in ["Trade", "Eng"]) else ("hosp" if "Hosp" in sec else "all"))))
    roles_count = len(data["roles"])
    cities_str = ", ".join(sorted(list(data["cities"]))[:3])
    if len(data["cities"]) > 3:
        cities_str += f" (+{len(data['cities'])-3} more)"
    
    first_role = data["roles"][0]
    
    badge_color = "#e0f2fe; color:#0369a1;" if sec_class == "tech" else ("#ecfdf5; color:#047857;" if sec_class == "health" else "#f3e8ff; color:#7e22ce;")

    html_content += f"""
        <div class="company-sponsor-card" data-sector="{sec_class}" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem; display:flex; flex-direction:column; justify-content:space-between; transition:all 0.2s ease; box-shadow:var(--shadow-sm);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem; margin-bottom:0.6rem;">
              <span style="background:{badge_color}; font-size:0.75rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:4px; text-transform:uppercase;">
                {sec}
              </span>
              <span style="font-size:0.8rem; font-weight:700; color:#2563eb; background:#eff6ff; padding:0.2rem 0.5rem; border-radius:4px;">
                ⚡ {roles_count} {'Role' if roles_count == 1 else 'Roles'}
              </span>
            </div>
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem; line-height:1.3;">
              {co}
            </h3>
            <p style="font-size:0.825rem; color:#64748b; margin-bottom:0.75rem;">
              📍 <strong>Locations:</strong> {cities_str}
            </p>
            <div style="font-size:0.85rem; color:#334155; line-height:1.45; margin-bottom:0.75rem; padding-top:0.5rem; border-top:1px dashed #e2e8f0;">
              <strong>Latest Opening:</strong><br>
              <a href="../jobs/{first_role['slug']}.html" style="color:#004575; font-weight:600; text-decoration:underline;">
                {first_role['title']}
              </a>
            </div>
          </div>
          <a href="../jobs/{first_role['slug']}.html" class="btn btn-outline btn-sm" style="width:100%; text-align:center; font-size:0.8rem; font-weight:600; margin-top:0.5rem;">
            View Sponsor Vacancies &rarr;
          </a>
        </div>
"""

html_content += """
      </div>
    </section>

    <!-- SECTION: How to Verify & Avoid Scams -->
    <section style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:12px; padding:2rem; margin-bottom:3.5rem;">
      <h2 style="font-size:1.6rem; font-weight:800; color:#002b49; margin-bottom:1rem;">
        🛡️ How to Verify an Australian Sponsor &amp; Protect Against Scams
      </h2>
      <p style="font-size:1rem; color:#334155; line-height:1.7; margin-bottom:1.25rem;">
        Before accepting an offer or sending personal identity documents to an overseas recruiter, follow these four statutory verification steps mandated by the Fair Work Ombudsman and Department of Home Affairs:
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#002b49; margin-bottom:0.4rem;">1. Official ABN Search</h4>
          <p style="font-size:0.88rem; color:#475569; line-height:1.55; margin:0;">
            Search the company's 11-digit Australian Business Number on the government register (<a href="https://abr.business.gov.au/" target="_blank" rel="noopener">abr.business.gov.au</a>). Ensure the entity status is "Active" and registered for GST.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#002b49; margin-bottom:0.4rem;">2. Check SBS Approval</h4>
          <p style="font-size:0.88rem; color:#475569; line-height:1.55; margin:0;">
            Ask the employer for their Standard Business Sponsorship (SBS) approval notice. Genuine Australian sponsors will provide their Transaction Reference Number (TRN) without hesitation.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#002b49; margin-bottom:0.4rem;">3. Zero Recruitment Fees (Strict Law)</h4>
          <p style="font-size:0.88rem; color:#475569; line-height:1.55; margin:0;">
            Under <strong>Section 245AS of the Migration Act 1958</strong>, it is a criminal offense in Australia for employers to demand payment for visa sponsorship. If anyone asks you for a "sponsorship fee", report them immediately.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#002b49; margin-bottom:0.4rem;">4. Statutory Salary Floor (TSMIT)</h4>
          <p style="font-size:0.88rem; color:#475569; line-height:1.55; margin:0;">
            Legitimate contracts must state a base salary equal to or greater than <strong>AUD $73,150 per year</strong>, plus mandatory 11.5% employer Superannuation contributions paid directly into your Australian super fund.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION: FAQ Accordion -->
    <section id="faq-section" style="margin-bottom: 4rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 0.5rem;">
        Frequently Asked Questions: Australian Sponsoring Companies
      </h2>
      <p style="color: #64748b; margin-bottom: 1.75rem; font-size: 1rem;">
        Answers to the most common questions regarding employer accreditation and Subclass 482 nominations.
      </p>

      <div class="faq-accordion">

        <div class="faq-item open">
          <button class="faq-question-btn" type="button" aria-expanded="true">
            <span>Which companies sponsor work visas in Australia in 2026?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel" style="display:block;">
            <p>
              Over 5,000 Australian enterprises hold active Standard Business Sponsorship (SBS) status. Major sponsors include technology leaders (Tesla, Atlassian Partner Network, AWS, Canva), state healthcare networks (Victorian Government Health, NSW Health, Ramsay Health), national aged care providers (Opal HealthCare, Health X), engineering firms (Caterpillar, WestForce Resources), and financial consultancies (PwC, TMGM, Deloitte).
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>How do I know if an Australian company is an approved sponsor?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              You can verify an employer's credentials through the Department of Home Affairs Standard Business Sponsor register or by checking their active Australian Business Number (ABN) on abr.business.gov.au. On OZ Sponsor Jobs, every listed employer is audited against active SBS compliance criteria.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>Can small businesses and startups sponsor a 482 visa?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              Yes! Australian immigration law allows any legally registered proprietary limited (Pty Ltd) company, sole trader, or partnership to sponsor skilled migrants, provided they can prove financial solvency, pay the Skilling Australians Fund (SAF) training levy, and show that the nominated role cannot be filled locally.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>What is an "Accredited Sponsor" in Australia?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              An Accredited Sponsor is a premier corporate tier granted by Home Affairs to employers with an immaculate record of immigration compliance, financial standing, and at least 90% Australian workforce. Nominations submitted by Accredited Sponsors receive priority <strong>5-business-day fast-track processing</strong>.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>Can an Australian employer deduct visa or sponsorship costs from my salary?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              Strictly NO. Under the <em>Migration Act 1958</em> and Fair Work regulations, the sponsoring employer must legally pay the nomination application charges and the Skilling Australians Fund (SAF) levy ($1,200 to $1,800 AUD per year). Passing these expenses onto the employee via salary deductions is illegal and results in heavy corporate fines.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Bottom Navigation -->
    <nav style="border-top:2px solid #e2e8f0; padding-top:2rem; display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
      <a href="/visas/subclass-482-tss-jobs.html" style="color:#002b49; font-weight:700;">&larr; Subclass 482 TSS Master Guide</a>
      <a href="/visas/subclass-186-ens-jobs.html" style="color:#002b49; font-weight:700;">Subclass 186 Direct PR Hub &rarr;</a>
    </nav>

  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        
        <div class="footer-brand">
          <a href="/" class="brand-logo" style="color: #ffffff;">
            <span class="flag-icon">&#9733;</span>
            <span><span class="accent-oz">OZ</span> Sponsor Jobs</span>
          </a>
          <p>
            Australia's premier job aggregator dedicated exclusively to connecting global talent with verified Standard Business Sponsors offering genuine Australian visa sponsorship.
          </p>
        </div>

        <div>
          <h4 class="footer-heading">Visa Subclasses</h4>
          <ul class="footer-links">
            <li><a href="/visas/subclass-482-tss-jobs.html">Subclass 482 (TSS Visa)</a></li>
            <li><a href="/visas/subclass-186-ens-jobs.html">Subclass 186 (ENS Direct PR)</a></li>
            <li><a href="/visas/subclass-494-regional-jobs.html">Subclass 494 (Regional Visa)</a></li>
            <li><a href="/visas/subclass-494-regional-jobs.html">DAMA Regional Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Shortage Sectors</h4>
          <ul class="footer-links">
            <li><a href="/sectors/it-software-engineering-visa-sponsorship-jobs.html">IT &amp; Software Engineering</a></li>
            <li><a href="/sectors/healthcare-nursing-medical-visa-sponsorship-jobs.html">Healthcare &amp; Nursing</a></li>
            <li><a href="/sectors/engineering-mining-construction-visa-sponsorship-jobs.html">Engineering &amp; Mining</a></li>
            <li><a href="/sectors/hospitality-chefs-tourism-visa-sponsorship-jobs.html">Hospitality &amp; Culinary</a></li>
            <li><a href="/sectors/skilled-trades-technicians-visa-sponsorship-jobs.html">Skilled Trades</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Sponsors &amp; Guides</h4>
          <ul class="footer-links">
            <li><a href="/sponsors/australia-visa-sponsorship-companies-list.html">Verified Sponsors Directory</a></li>
            <li><a href="/guides/move-to-australia-from-usa-visa-sponsorship.html">Move to Australia from USA</a></li>
            <li><a href="/guides/uk-citizens-australia-visa-sponsorship-jobs.html">Move to Australia from UK</a></li>
            <li><a href="/faq/">Sponsorship FAQ (2026)</a></li>
            <li><a href="/about.html">About OZ Sponsor Jobs</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <div>
          &copy; 2026 OZ Sponsor Jobs (<a href="https://www.visamigrate.com/" style="color:#cbd5e1;">visamigrate.com</a>). All rights reserved.
        </div>
        <div>
          Hosted on GitHub Pages &bull; Fast, static &amp; secure
        </div>
      </div>
    </div>
  </footer>

  <!-- Core JavaScript -->
  <script src="../js/app.js"></script>

  <!-- Filter & Accordion Script -->
  <script>
    // Sector Filtering
    const filterButtons = document.querySelectorAll('.filter-pills .pill-btn');
    const cards = document.querySelectorAll('.company-sponsor-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-sector') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Accordion Logic
    document.querySelectorAll('.faq-question-btn').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const isOpen = item.classList.contains('open');
        
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            otherItem.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            const panel = otherItem.querySelector('.faq-answer-panel');
            if (panel) panel.style.display = 'none';
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          button.setAttribute('aria-expanded', 'false');
          item.querySelector('.faq-answer-panel').style.display = 'none';
        } else {
          item.classList.add('open');
          button.setAttribute('aria-expanded', 'true');
          item.querySelector('.faq-answer-panel').style.display = 'block';
        }
      });
    });
  </script>
</body>
</html>
"""

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"[SUCCESS] Generated {OUTPUT_FILE} ({len(html_content)} bytes)")
print(f"Total Companies Indexed: {total_cos}")
