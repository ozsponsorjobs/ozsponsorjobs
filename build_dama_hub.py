#!/usr/bin/env python3
"""
Generate DAMA Visa Sponsorship Jobs & Regional Employers Guide (2026)
Targeting ultra-low competition, high-search-intent queries:
- 482 dama visa sponsorship jobs
- dama australia jobs sponsorship
- subclass 482 dama visa
- dama australia visa sponsorship
- south australia dama approved employers
- regional australia sponsorship jobs
"""

import json
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LEDGER_FILE = os.path.join(BASE_DIR, "job_ledger.json")
OUTPUT_DIR = os.path.join(BASE_DIR, "visas")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "dama-visa-sponsorship-jobs-australia.html")

ledger = json.load(open(LEDGER_FILE, "r", encoding="utf-8"))
jobs = [j for j in ledger["jobs_by_slug"].values() if j.get("status") == "active"]

# Find regional jobs (Perth, Adelaide, Darwin, Hobart, Geelong, regional NSW/QLD)
regional_cities = ["adelaide", "perth", "darwin", "hobart", "geelong", "burnie", "devonport", "gladstone", "cairns", "townsville", "toowoomba", "newcastle", "wollongong"]
regional_jobs = []

for j in jobs:
    city = j.get("city", "").lower()
    title = j.get("title", "").lower()
    if any(rc in city for rc in regional_cities) or "regional" in title or "494" in j.get("slug", ""):
        regional_jobs.append(j)

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary SEO Meta Tags -->
  <title>DAMA Visa Sponsorship Jobs Australia: 482 &amp; 494 Regional Guide (2026) | OZ Sponsor Jobs</title>
  <meta name="title" content="DAMA Visa Sponsorship Jobs Australia: 482 &amp; 494 Regional Guide (2026) | OZ Sponsor Jobs">
  <meta name="description" content="Comprehensive 2026 guide to DAMA visa sponsorship jobs in Australia: Age concessions up to 55, lower English &amp; TSMIT salary thresholds, 12 regional agreements &amp; PR pathways.">
  <meta name="keywords" content="482 dama visa sponsorship jobs, dama australia jobs sponsorship, subclass 482 dama visa, dama australia visa sponsorship, sponsorship visa australia dama, south australia dama approved employers, regional australia sponsorship jobs, dama occupation list 2026">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  
  <!-- Absolute Canonical URL -->
  <link rel="canonical" href="https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html">

  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
  <link rel="alternate icon" href="../favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html">
  <meta property="og:title" content="DAMA Visa Sponsorship Jobs Australia: 482 &amp; 494 Regional Guide (2026)">
  <meta property="og:description" content="Complete guide to Designated Area Migration Agreements (DAMA) in Australia: Age limit up to 55, lower English requirements, regional employer lists, and direct PR.">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html">
  <meta property="twitter:title" content="DAMA Visa Sponsorship Jobs Australia: 482 &amp; 494 Regional Guide (2026)">
  <meta property="twitter:description" content="Complete guide to Designated Area Migration Agreements (DAMA) in Australia: Age limit up to 55, lower English requirements, regional employer lists, and direct PR.">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  <!-- Schema.org JSON-LD Structured Data (Article + BreadcrumbList + FAQPage) -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "Article",
        "@id": "https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html#article",
        "isPartOf": {{
          "@type": "WebSite",
          "@id": "https://www.visamigrate.com/#website",
          "name": "OZ Sponsor Jobs",
          "url": "https://www.visamigrate.com/"
        }},
        "headline": "DAMA Visa Sponsorship Jobs Australia: 482 & 494 Regional Employers Guide (2026)",
        "description": "Comprehensive legal and operational guide to Designated Area Migration Agreement (DAMA) visa sponsorship in Australia, detailing age concessions to 55, English and TSMIT concessions, and Subclass 186 Labour Agreement PR pathways.",
        "inLanguage": "en-AU",
        "url": "https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html",
        "datePublished": "2026-10-12T11:00:00+10:00",
        "dateModified": "2026-10-12T11:00:00+10:00",
        "author": {{
          "@type": "Organization",
          "name": "OZ Sponsor Jobs Regional Migration Editorial",
          "url": "https://www.visamigrate.com/about.html"
        }},
        "publisher": {{
          "@type": "Organization",
          "name": "OZ Sponsor Jobs",
          "url": "https://www.visamigrate.com/",
          "logo": {{
            "@type": "ImageObject",
            "url": "https://www.visamigrate.com/assets/favicon.svg"
          }}
        }}
      }},
      {{
        "@type": "BreadcrumbList",
        "@id": "https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html#breadcrumb",
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
            "name": "Visa Guides",
            "item": "https://www.visamigrate.com/visas/subclass-482-tss-jobs.html"
          }},
          {{
            "@type": "ListItem",
            "position": 3,
            "name": "DAMA Visa Sponsorship Jobs",
            "item": "https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html"
          }}
        ]
      }},
      {{
        "@type": "FAQPage",
        "@id": "https://www.visamigrate.com/visas/dama-visa-sponsorship-jobs-australia.html#faq",
        "mainEntity": [
          {{
            "@type": "Question",
            "name": "What is a DAMA visa in Australia?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "A DAMA (Designated Area Migration Agreement) is a formal two-tier agreement between the Australian Department of Home Affairs and designated regional state/territory bodies. It enables regional Australian employers to sponsor skilled and semi-skilled overseas workers under the Subclass 482 Labour Agreement stream and Subclass 494 visa with special concessions not available under standard migration programs."
            }}
          }},
          {{
            "@type": "Question",
            "name": "What concessions does a DAMA visa offer over standard 482 visas?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "DAMA agreements offer four critical concessions: 1. Age Concessions: Nominees can be sponsored and transition to Permanent Residency up to age 50 or 55 (compared to the strict 45-year cutoff for standard 186/482 PR). 2. English Concessions: Lower English test scores accepted (e.g., IELTS 4.5 or 5.0 overall). 3. TSMIT Salary Concessions: Up to a 10% reduction on the statutory $73,150 AUD salary threshold. 4. Expanded Occupation Lists: Access to hundreds of occupations not on the standard skilled lists (such as truck drivers, farm supervisors, aged care workers, and hospitality supervisors)."
            }}
          }},
          {{
            "@type": "Question",
            "name": "Can a DAMA visa lead to Australian Permanent Residency (PR)?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "Yes! Unlike temporary work permits in other nations, every DAMA agreement includes a formal pathway to Australian Permanent Residency. Workers sponsored under the Subclass 482 Labour Agreement stream can transition to Permanent Residency through the Subclass 186 ENS (Labour Agreement stream) after 3 years. Subclass 494 regional holders transition to Subclass 191 Permanent Residency."
            }}
          }},
          {{
            "@type": "Question",
            "name": "Which regions in Australia have active DAMA agreements?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "There are 12 active DAMA regions across Australia: 1. South Australia (Adelaide City & Regional SA). 2. Northern Territory (entire territory). 3. Western Australia (Pilbara, Goldfields, Kimberley, South West). 4. New South Wales (Orana Region). 5. Victoria (Great South Coast / Warrnambool). 6. Queensland (Far North Queensland / Cairns, Townsville). 7. Tasmania (statewide)."
            }}
          }},
          {{
            "@type": "Question",
            "name": "How do I find a job with a DAMA approved employer?",
            "acceptedAnswer": {{
              "@type": "Answer",
              "text": "To obtain DAMA sponsorship, you must secure a job offer from an employer endorsed by the Designated Area Representative (DAR) in that specific region. Browse regional vacancies on OZ Sponsor Jobs across Adelaide, Perth, Darwin, and regional hubs, and confirm the employer holds active Labour Agreement sponsorship with the Department of Home Affairs."
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
          <li><a href="/visas/dama-visa-sponsorship-jobs-australia.html" class="nav-link active">DAMA Hub</a></li>
          <li><a href="/sponsors/australia-visa-sponsorship-companies-list.html" class="nav-link">Sponsors Directory</a></li>
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
      <a href="/visas/subclass-482-tss-jobs.html" style="color:#002b49;">Visa Guides</a>
      <span>&rsaquo;</span>
      <span style="color:#0f172a; font-weight:600;">DAMA Visa Sponsorship Jobs</span>
    </div>
  </nav>

  <!-- Page Header Banner -->
  <header class="page-header" style="background: linear-gradient(135deg, #001a2e 0%, #002b49 60%, #004575 100%); color:#ffffff; padding: 3.5rem 0 3rem;">
    <div class="container page-header-content">
      <div style="display:inline-flex; align-items:center; gap:0.5rem; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.25); border-radius:9999px; padding:0.35rem 0.9rem; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:1.25rem;">
        <span>🌏 Regional Migration Priority Program</span>
      </div>
      <h1 style="font-size: 2.6rem; font-weight: 800; line-height: 1.2; margin-bottom: 1rem; color:#ffffff;">
        DAMA Visa Sponsorship Jobs Australia: 482 &amp; 494 Regional Guide (2026)
      </h1>
      <p style="font-size: 1.15rem; line-height: 1.6; color: #cbd5e1; max-width: 860px; margin-bottom: 1.5rem;">
        Unlock Australia's most flexible employer sponsorship pathway. Explore Designated Area Migration Agreements (DAMA) offering age limits up to 55, English score concessions, reduced salary floors, and direct Permanent Residency (PR) across South Australia, Western Australia, NT, and regional corridors.
      </p>
      <div style="display:flex; flex-wrap:wrap; gap:1.5rem; font-size:0.85rem; color:#94a3b8; border-top:1px solid rgba(255,255,255,0.15); padding-top:1.25rem;">
        <span><strong>Updated:</strong> October 2026</span>
        <span><strong>Legal Basis:</strong> Migration Regulations 1994 (Labour Agreement Stream)</span>
        <span><strong>Coverage:</strong> 12 Active Australian DAMA Regions</span>
      </div>
    </div>
  </header>

  <!-- Main Editorial Content Area -->
  <main class="container" style="padding: 3rem 1.25rem; max-width: 1000px;">

    <!-- BLUF / Executive Summary Box -->
    <div class="bluf-box" style="margin-top:0; margin-bottom: 2.5rem;">
      <strong class="bluf-label">&#10004; Direct Answer (BLUF)</strong>
      <p style="margin-top:0.35rem; color:#064e3b; font-size:1.02rem; line-height:1.65;">
        A <strong>Designated Area Migration Agreement (DAMA)</strong> is Australia's premier regional sponsorship mechanism. Unlike standard Subclass 482 or 186 visas which enforce a strict 45-year age limit and $73,150 TSMIT salary floor, DAMA permits regional employers in designated zones (like South Australia, Pilbara, Goldfields, and NT) to sponsor candidates <strong>up to age 50 or 55</strong>, with <strong>lower IELTS/PTE English scores</strong> and a <strong>10% TSMIT concession</strong>, backed by a statutory pathway to Permanent Residency (Subclass 186 Labour Agreement stream) after 3 years.
      </p>
      <div class="legal-authority-badge">
        &#128220; Source: Australian Department of Home Affairs - Designated Area Migration Agreements Framework
      </div>
    </div>

    <!-- Quick Navigation Anchor Links -->
    <section style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem 1.5rem; margin-bottom:2.5rem;">
      <h3 style="font-size:1rem; text-transform:uppercase; letter-spacing:0.05em; color:#002b49; margin-bottom:0.75rem; font-weight:700;">In This DAMA Sponsorship Guide:</h3>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:0.5rem; font-size:0.92rem;">
        <a href="#what-is-dama" style="color:#004575; font-weight:500;">&bull; 1. What is DAMA &amp; How It Works</a>
        <a href="#dama-concessions" style="color:#004575; font-weight:500;">&bull; 2. Key Concessions (Age 55 &amp; English)</a>
        <a href="#active-regions" style="color:#004575; font-weight:500;">&bull; 3. The 12 Active DAMA Regions</a>
        <a href="#pr-pathway" style="color:#004575; font-weight:500;">&bull; 4. Permanent Residency (Subclass 186)</a>
        <a href="#regional-jobs" style="color:#004575; font-weight:500;">&bull; 5. Active Regional Sponsorship Jobs</a>
        <a href="#faq-section" style="color:#004575; font-weight:500;">&bull; 6. Frequently Asked Questions (FAQ)</a>
      </div>
    </section>

    <!-- SECTION 1: What is DAMA -->
    <section id="what-is-dama" style="margin-bottom: 3.5rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
        1. How DAMA Visa Sponsorship Works in Australia
      </h2>
      <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 1.25rem;">
        Australia faces acute economic shortages outside its main capital cities. While Sydney and Melbourne have intense competition, regional cities and mining hubs desperately need skilled technicians, healthcare workers, truck drivers, chefs, and machine operators.
      </p>
      <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 1.5rem;">
        Because standard visa lists (MLTSSL/STSOL) are often too rigid for regional businesses, the Australian Government created <strong>DAMA</strong> as a tailored agreement between Home Affairs and regional economic bodies (known as the <strong>Designated Area Representative - DAR</strong>).
      </p>

      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:1.75rem; box-shadow:var(--shadow-sm);">
        <h3 style="font-size:1.25rem; font-weight:700; color:#002b49; margin-bottom:0.75rem;">
          The Two-Tier DAMA Application Structure:
        </h3>
        <ol style="color:#334155; line-height:1.75; padding-left:1.5rem;">
          <li><strong>Tier 1: Regional DAR Endorsement:</strong> The Australian employer applies to their regional Designated Area Representative (e.g. Migration SA, Northern Territory Government, or RDA Orana) for endorsement to access specific occupation quotas and concessions.</li>
          <li><strong>Tier 2: Labour Agreement &amp; Visa Lodgement:</strong> Once endorsed, the employer requests a DAMA Labour Agreement with the Department of Home Affairs, and nominates you under the <strong>Subclass 482 Labour Agreement stream</strong> or <strong>Subclass 494 Regional visa</strong>.</li>
        </ol>
      </div>
    </section>

    <!-- SECTION 2: Concessions Comparison -->
    <section id="dama-concessions" style="margin-bottom: 3.5rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
        2. Key DAMA Concessions vs Standard Subclass 482 / 186
      </h2>
      <p style="font-size: 1.05rem; line-height: 1.7; color: #334155; margin-bottom: 1.5rem;">
        DAMA is the only visa pathway in Australia that legally bends standard immigration parameters to allow older candidates and non-traditional occupations to obtain permanent residence:
      </p>

      <div class="visa-comparison-wrapper">
        <table class="visa-comparison-table">
          <thead>
            <tr>
              <th>Criteria / Requirement</th>
              <th>Standard Subclass 482 / 186</th>
              <th>DAMA Regional Labour Agreement</th>
              <th>DAMA Strategic Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Maximum Age Cutoff</strong></td>
              <td>Strictly under 45 years old</td>
              <td><strong>Up to 50 or 55 years old</strong></td>
              <td><span style="color:#047857; font-weight:700;">Enables PR for older skilled expat candidates</span></td>
            </tr>
            <tr>
              <td><strong>English Proficiency Floor</strong></td>
              <td>IELTS 5.0 - 6.0 (or PTE 36 - 50)</td>
              <td><strong>IELTS 4.5 or 5.0 overall</strong> (no band &lt; 4.0)</td>
              <td><span style="color:#047857; font-weight:700;">Lower English threshold</span></td>
            </tr>
            <tr>
              <td><strong>TSMIT Minimum Salary</strong></td>
              <td>Strict AUD $73,150 + Super</td>
              <td><strong>Up to 10% TSMIT Concession</strong> (~$65,835 AUD)</td>
              <td><span style="color:#047857; font-weight:700;">Realistic regional business wage</span></td>
            </tr>
            <tr>
              <td><strong>Occupation List Scope</strong></td>
              <td>Restricted to MLTSSL / STSOL</td>
              <td><strong>Includes 100+ Semi-Skilled Roles</strong></td>
              <td><span style="color:#047857; font-weight:700;">Includes Drivers, Ag Supervisors, Mechanics</span></td>
            </tr>
            <tr>
              <td><strong>Permanent Residency (PR)</strong></td>
              <td>Subclass 186 TRT after 2 years</td>
              <td><strong>Subclass 186 (Labour Agreement) after 3 years</strong></td>
              <td><span style="color:#047857; font-weight:700;">Statutory permanent settlement</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 3: The 12 Active DAMA Regions -->
    <section id="active-regions" style="margin-bottom: 3.5rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 1rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">
        3. The 12 Active DAMA Regional Agreements in Australia
      </h2>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.25rem;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">🍷 South Australia (SA DAMA)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Covers Greater Adelaide and Regional South Australia. Over 200 eligible occupations in advanced manufacturing, aged care, healthcare, agriculture, and hospitality.
          </p>
          <a href="/locations/adelaide-sa-visa-sponsorship-jobs.html" style="font-size:0.85rem; font-weight:700; color:#004575;">View Adelaide &amp; SA Roles &rarr;</a>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">🐊 Northern Territory (NT DAMA)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Covers Darwin, Alice Springs, and regional NT. Huge concessions for healthcare workers, mechanical fitters, early childhood educators, and tourism operators.
          </p>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">⛏️ Western Australia (Pilbara &amp; Goldfields)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Covers Karratha, Port Hedland, Kalgoorlie, and South West WA. Massive demand for diesel mechanics, boilermakers, mining technicians, and crane operators.
          </p>
          <a href="/locations/perth-wa-visa-sponsorship-jobs.html" style="font-size:0.85rem; font-weight:700; color:#004575;">View WA &amp; Perth Roles &rarr;</a>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">🌾 New South Wales (Orana DAMA)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Covers Dubbo, Cobar, Mudgee, and central-west NSW. Extensive shortages in civil engineering, trades, automotive repair, and healthcare.
          </p>
          <a href="/locations/sydney-nsw-visa-sponsorship-jobs.html" style="font-size:0.85rem; font-weight:700; color:#004575;">View NSW Jobs &rarr;</a>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">🐠 Queensland (Far North QLD / Cairns)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Encompasses Cairns, Port Douglas, and the Cassowary Coast. Strong focus on marine engineering, hospitality management, commercial cookery, and health.
          </p>
          <a href="/locations/brisbane-qld-visa-sponsorship-jobs.html" style="font-size:0.85rem; font-weight:700; color:#004575;">View QLD Vacancies &rarr;</a>
        </div>

        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#002b49; margin-bottom:0.4rem;">🌊 Victoria (Great South Coast)</h3>
          <p style="font-size:0.88rem; color:#475569; line-height:1.6; margin-bottom:0.5rem;">
            Centering on Warrnambool and the Great Ocean Road corridor. High demand across agriculture, dairy processing, trades, and nursing.
          </p>
          <a href="/locations/melbourne-vic-visa-sponsorship-jobs.html" style="font-size:0.85rem; font-weight:700; color:#004575;">View Victoria Jobs &rarr;</a>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Live Regional Jobs Injection -->
    <section class="pagerank-injection-box" style="margin-bottom: 3.5rem;">
      <div class="pr-box-header">
        <span class="pr-live-tag">
          <span class="pr-live-dot"></span> Regional &amp; DAMA Eligible Roles
        </span>
        <span class="pr-counter-tag">{len(regional_jobs)} Live Regional Roles</span>
      </div>
      <h3 class="pr-box-title">Explore Active Regional Australian Visa Sponsorship Roles</h3>
      <p class="pr-box-desc">
        Australian employers in designated regional zones offering Subclass 482, Subclass 494, and direct PR pathways:
      </p>

      <div class="pagerank-jobs-grid">
"""

for j in regional_jobs[:6]:
    html_content += f"""
        <a href="../jobs/{j['slug']}.html" class="pagerank-job-item">
          <span class="pr-badge pr-badge-494">Regional &bull; {j.get('city', 'Australia')}</span>
          <span class="pr-title">{j['title']}</span>
          <span class="pr-meta">{j.get('company', '')} &bull; {j.get('city', '')}</span>
          <span class="pr-cta">View Role &amp; PR Pathway &rarr;</span>
        </a>
"""

html_content += """
      </div>
    </section>

    <!-- SECTION 5: FAQ Accordion -->
    <section id="faq-section" style="margin-bottom: 4rem;">
      <h2 style="font-size: 1.85rem; font-weight: 800; color: #002b49; margin-bottom: 0.5rem;">
        Frequently Asked Questions: DAMA Regional Visas
      </h2>
      <p style="color: #64748b; margin-bottom: 1.75rem; font-size: 1rem;">
        Essential statutory facts about Designated Area Migration Agreements in 2026.
      </p>

      <div class="faq-accordion">

        <div class="faq-item open">
          <button class="faq-question-btn" type="button" aria-expanded="true">
            <span>Can I apply for a DAMA visa directly myself?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel" style="display:block;">
            <p>
              No. DAMA is strictly an employer-sponsored program. You must first secure a genuine full-time job offer from an eligible Australian business operating within an endorsed DAMA region. The employer requests endorsement from the regional Designated Area Representative (DAR), and once approved, lodges your visa nomination with the Department of Home Affairs.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>What happens if I turn 46 or 48 years old? Can I still get PR under DAMA?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              YES! This is the single biggest advantage of DAMA. While standard Subclass 186 and Skilled Independent visas enforce a strict cutoff at age 45, DAMA agreements (such as South Australia, Northern Territory, and Goldfields) grant age concessions <strong>up to age 50 or 55</strong> for transition to Australian Permanent Residency.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>What is the English language concession under DAMA?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              Under standard 482 regulations, candidates must score IELTS 5.0 (with no band under 5.0 for Medium-term). Under DAMA, many regional occupations allow a concession requiring only an overall IELTS score of <strong>4.5 or 5.0</strong>, with no band score below 4.0, significantly easing entry for international trade workers and technicians.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question-btn" type="button" aria-expanded="false">
            <span>Can my partner and children work in regional Australia?</span>
            <svg class="faq-icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="faq-answer-panel">
            <p>
              Yes. Spouses, de facto partners, and dependent children are included as secondary visa holders. Your partner receives unrestricted work rights to work for any regional business, school, or hospital.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Bottom Navigation -->
    <nav style="border-top:2px solid #e2e8f0; padding-top:2rem; display:flex; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
      <a href="/visas/subclass-494-regional-jobs.html" style="color:#002b49; font-weight:700;">&larr; Subclass 494 Regional Hub</a>
      <a href="/sponsors/australia-visa-sponsorship-companies-list.html" style="color:#002b49; font-weight:700;">Verified Sponsors Directory &rarr;</a>
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
            <li><a href="/visas/dama-visa-sponsorship-jobs-australia.html">DAMA Regional Programs</a></li>
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
            <li><a href="/visas/dama-visa-sponsorship-jobs-australia.html">DAMA Regional Guide</a></li>
            <li><a href="/guides/move-to-australia-from-usa-visa-sponsorship.html">Move to Australia from USA</a></li>
            <li><a href="/guides/uk-citizens-australia-visa-sponsorship-jobs.html">Move to Australia from UK</a></li>
            <li><a href="/faq/">Sponsorship FAQ (2026)</a></li>
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

  <!-- Interactive Accordion Script -->
  <script>
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
print(f"Total Regional Roles Featured: {len(regional_jobs)}")
