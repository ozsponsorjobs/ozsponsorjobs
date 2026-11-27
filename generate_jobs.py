#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Automated Job Generator & Programmatic SEO Engine
File: generate_jobs.py
Description: Ingests Australian visa sponsorship jobs from multi-source APIs (Adzuna & Jooble),
             validates anti-spam rules, enforces Zero-Duplicate ledger verification,
             generates programmatic HTML job articles with Dual Schema.org (JobPosting + Article),
             creates dense cross-article internal linking (Topic Clusters & Related Vacancies),
             generates Programmatic Category & Location Directory Hubs,
             updates sitemap.xml, and dynamically refreshes index.html & js/app.js.
"""

import os
import sys
import time
import re
import json
import hashlib
import unicodedata
import urllib.request
import urllib.parse
import socket
from datetime import datetime, timezone, timedelta

# Ensure reliable DNS on Windows by prioritizing IPv4 over unreachable IPv6 AAAA records
_orig_getaddrinfo = socket.getaddrinfo
def _ipv4_getaddrinfo(host, port, family=0, *args, **kwargs):
    if family == 0:
        family = socket.AF_INET
    try:
        return _orig_getaddrinfo(host, port, family, *args, **kwargs)
    except socket.gaierror:
        return _orig_getaddrinfo(host, port, socket.AF_INET, *args, **kwargs)
socket.getaddrinfo = _ipv4_getaddrinfo

# ---------------------------------------------------------------------------
# Global Constants & Paths
# ---------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

from job_ledger import JobLedger, compute_job_fingerprint, resolve_job_external_apply_url
from anzsco_classifier import classify_job_anzsco, clean_job_title
from occupations_data import ANZSCO_HUBS, ANZSCO_HUBS_BY_CODE


def build_external_apply_url(job: dict) -> str:
    """
    Returns a guaranteed external application URL for the job.
    Never returns contact.html or an visamigrate.com link.
    """
    return resolve_job_external_apply_url(job)

JOBS_DIR = os.path.join(BASE_DIR, "jobs")
VISAS_DIR = os.path.join(BASE_DIR, "visas")
LOCATIONS_DIR = os.path.join(BASE_DIR, "locations")
SECTORS_DIR = os.path.join(BASE_DIR, "sectors")
OCCUPATIONS_DIR = os.path.join(BASE_DIR, "occupations")
INDEX_PATH = os.path.join(BASE_DIR, "index.html")
SITEMAP_PATH = os.path.join(BASE_DIR, "sitemap.xml")
SITEMAP_RECENT_PATH = os.path.join(BASE_DIR, "sitemap-recent.xml")
SITEMAP_HUBS_PATH = os.path.join(BASE_DIR, "sitemap-hubs.xml")
SITEMAP_INDEX_PATH = os.path.join(BASE_DIR, "sitemap-index.xml")
JS_APP_PATH = os.path.join(BASE_DIR, "js", "app.js")
SITE_DOMAIN = "https://www.visamigrate.com"

# API Keys — environment variables ONLY, no hard-coded fallbacks.
# Set them as GitHub Secrets (ADZUNA_APP_ID, ADZUNA_APP_KEY, JOOBLE_API_KEY,
# CAREERJET_API_KEY) or local environment variables. A missing key skips that
# source gracefully instead of crashing (see fetch_external_jobs()).
ADZUNA_APP_ID = os.getenv("ADZUNA_APP_ID", "")
ADZUNA_APP_KEY = os.getenv("ADZUNA_APP_KEY", "")
JOOBLE_API_KEY = os.getenv("JOOBLE_API_KEY", "")
CAREERJET_API_KEY = os.getenv("CAREERJET_API_KEY", "")

# Optional AdSense Publisher ID (e.g. ca-pub-1234567890123456)
ADSENSE_CLIENT_ID = os.getenv("ADSENSE_CLIENT_ID", "")

# Google Analytics 4 (GA4) Tag
GA_TAG_SCRIPT = """  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMMF0YJPDV"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-LMMF0YJPDV');
  </script>"""

GSC_VERIFICATION_META = '  <!-- Google Search Console Verification -->\n  <meta name="google-site-verification" content="google45237157fc71c402">'

AU_STATES = {"NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"}
VALID_VISA_KEYWORDS = ["482", "186", "494", "tss", "dama", "sponsorship", "sponsor"]

BLOCKED_PATTERNS = [
    r"^how\s+to",
    r"^guide\s+to",
    r"^top\s+\d+",
    r"^tips\s+for",
    r"^best\s+ways",
    r"^everything\s+you\s+need",
    r"what\s+is\s+a",
    r"^overview\s+of",
]

OCCUPATION_MAP = {
    "technology": {
        "anzsco": "261313",
        "title": "Software and Applications Programmers",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)"
    },
    "engineering": {
        "anzsco": "233512",
        "title": "Mechanical Engineer / Civil Engineer",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)"
    },
    "healthcare": {
        "anzsco": "254415",
        "title": "Registered Nurse / Healthcare Specialist",
        "authority": "Australian Nursing and Midwifery Accreditation Council (ANMAC)",
        "skills_list": "Priority Migration Skilled Occupation List (PMSOL)"
    },
    "trades": {
        "anzsco": "321212",
        "title": "Diesel Motor Mechanic / Heavy Machinery Specialist",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Designated Area Migration Agreement (DAMA) & MLTSSL"
    },
    "hospitality": {
        "anzsco": "351311",
        "title": "Chef / Executive Hospitality",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)"
    },
    "finance": {
        "anzsco": "221111",
        "title": "Accountant / Corporate Finance Professional",
        "authority": "CPA Australia / Chartered Accountants ANZ (CA ANZ)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)"
    },
    "management": {
        "anzsco": "222311",
        "title": "Business Development & Operations Manager",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Stream / Regional Employer Sponsor"
    }
}

SECTOR_COMPETENCIES = {
    "healthcare": [
        ("Clinical Governance & AHPRA Standards", "Strict compliance with the Health Practitioner Regulation National Law, National Safety and Quality Health Service (NSQHS) Standards, infection control protocols, and ongoing CPD compliance."),
        ("Medical Records & Diagnostic Systems", "Accurate charting in Electronic Medical Record (EMR) systems (e.g., Best Practice, MedicalDirector, Epic), adhering to Australian Digital Health Agency privacy and security frameworks."),
        ("Multidisciplinary Care Delivery", "Collaborative patient management across acute, primary, and community care teams, coordinating referrals with medical specialists, allied health practitioners, and case managers.")
    ],
    "hospitality": [
        ("Food Safety & HACCP Hygiene Compliance", "Rigorous enforcement of the Australia New Zealand Food Standards Code, temperature logging, culinary cross-contamination controls, and local council environmental health inspections."),
        ("Workplace Health & Liquor Licensing", "Strict observation of state liquor licensing laws, Responsible Service of Alcohol (RSA) mandates, and SafeWork Australia ergonomics and commercial kitchen safety."),
        ("Commercial Inventory & Kitchen Economics", "Monitoring food cost percentages, gross margins, recipe yield optimization, supplier procurement, and First-In First-Out (FIFO) stock management.")
    ],
    "engineering": [
        ("Australian Standards (AS/NZS) Compliance", "Preparation and review of engineering documentation, technical specifications, and calculations strictly aligned with Standards Australia (AS/NZS) and the National Construction Code (NCC)."),
        ("Safety in Design & Risk Assessment", "Conducting HAZOP, Safe Work Method Statements (SWMS), job safety analyses (JSA), and environmental impact assessments to ensure zero-harm project delivery."),
        ("Technical Software & Modeling Proficiency", "Application of industry-standard design, structural analysis, and modeling software (e.g., AutoCAD, Revit, SolidWorks, MicroStation, or specialized simulation suites).")
    ],
    "trades": [
        ("Trade Precision & Australian Building Codes", "Execution of skilled craftsmanship in compliance with the National Construction Code (NCC), Australian trade regulations, and engineering tolerances."),
        ("SafeWork Australia Protocol Adherence", "Comprehensive site safety practice, including PPE compliance, hazardous materials handling (COSHH), machinery isolation (LOTO), and working at heights procedures."),
        ("Tooling Calibration & Quality Assurance", "Operating, maintaining, and calibrating specialized heavy machinery, precision diagnostic instruments, and fabrication apparatus.")
    ],
    "technology": [
        ("Software Engineering & Architecture Standards", "Adherence to clean architecture principles, automated unit/integration testing, CI/CD automated deployment pipelines, and Git version control workflows."),
        ("Cybersecurity & Australian Privacy Principles", "Designing systems compliant with the Australian Privacy Principles (APPs), ACS technical standards, and Essential Eight cyber security strategies."),
        ("Cloud Infrastructure & Observability", "Deploying and managing scalable workloads on cloud environments (AWS, Azure, GCP) with robust telemetry, logging, and performance monitoring.")
    ],
    "management": [
        ("Corporate Governance & Regulatory Compliance", "Operating in strict accordance with the Fair Work Act 2009, Corporations Act 2001, Australian consumer protection laws, and industry codes of conduct."),
        ("Commercial Strategy & P&L Accountability", "Tracking operational KPIs, financial budgeting, headcount planning, vendor contract management, and executive stakeholder reporting."),
        ("Cross-Functional Leadership & Team Development", "Mentoring onshore and offshore team members, leading talent retention initiatives, and fostering a safe, inclusive workplace culture.")
    ],
    "finance": [
        ("Australian Accounting Standards (AASB / IFRS)", "Preparation of statutory financial statements, tax reporting, and audit workpapers strictly aligned with AASB and international financial standards."),
        ("ATO Compliance & Tax Governance", "Ensuring timely compliance with Australian Taxation Office (ATO) requirements, including GST, PAYG, FBT, and superannuation guarantee mandates."),
        ("Financial Modeling & Risk Management", "Designing quantitative financial models, risk assessments, cash flow forecasts, and commercial variance analysis for executive leadership.")
    ]
}

DEFAULT_SECTOR_DUTIES = {
    "healthcare": [
        "Delivering patient-centered clinical care and health assessment in accordance with Australian clinical governance standards.",
        "Administering therapeutic treatments, documenting clinical interventions, and maintaining electronic medical records.",
        "Participating in multidisciplinary clinical handovers and collaborating with doctors, nurses, and allied health professionals.",
        "Complying with National Safety and Quality Health Service (NSQHS) standards, infection control, and medication safety."
    ],
    "hospitality": [
        "Directing dining room or kitchen operations to deliver exceptional culinary and customer service standards.",
        "Enforcing food safety programs, HACCP compliance, and state liquor licensing legislation.",
        "Coordinating team rosters, supply procurement, inventory stock control, and supplier delivery logistics.",
        "Monitoring operational food/beverage costs, gross margins, and guest satisfaction metrics."
    ],
    "engineering": [
        "Preparing engineering calculations, technical designs, and compliance specifications aligned with Australian Standards (AS/NZS).",
        "Ensuring structural integrity, functional safety, and adherence to the National Construction Code (NCC).",
        "Conducting risk assessments, safety reviews, and site technical inspections with relevant contractors.",
        "Liaising with project managers, structural engineers, and regulatory bodies across project milestones."
    ],
    "trades": [
        "Executing skilled diagnostic, mechanical, fabrication, or assembly tasks to precision trade tolerances.",
        "Interpreting technical blueprints, wiring schematics, and manufacturer service specifications.",
        "Operating specialized trade tooling, heavy machinery, and computerized diagnostic apparatus.",
        "Strictly maintaining SafeWork Australia workplace health and safety (WHS) protocols and PPE compliance."
    ],
    "technology": [
        "Architecting, developing, and deploying resilient software applications and cloud-native services.",
        "Writing clean, modular, and maintainable code adhering to automated unit/integration testing standards.",
        "Participating in agile sprints, technical architecture reviews, and automated CI/CD release cycles.",
        "Troubleshooting complex production incidents and optimizing application scalability, security, and latency."
    ],
    "management": [
        "Overseeing operational workflows, commercial objectives, and strategic project execution.",
        "Tracking business KPIs, department budgets, regulatory compliance, and operational efficiency.",
        "Managing client relationships, stakeholder engagements, and external commercial vendor agreements.",
        "Leading and mentoring diverse team members to cultivate a productive, compliant workplace culture."
    ],
    "finance": [
        "Preparing statutory financial statements, tax reconciliations, and detailed management accounting reports.",
        "Auditing commercial transactions to verify compliance with AASB accounting standards and ATO regulations.",
        "Formulating cash flow projections, variance analysis, and financial risk mitigation models.",
        "Delivering strategic commercial and financial recommendations to executive leadership."
    ]
}

DEFAULT_SECTOR_ASSESSMENT = {
    "healthcare": "Assessed by the relevant Australian health regulatory authority (AHPRA / ANMAC / AMC / OTC / APC). Overseas practitioners generally require recognized degree qualifications, English proficiency (IELTS 7.0+ or OET Grade B), and registration eligibility.",
    "hospitality": "Assessed by Trades Recognition Australia (TRA) for culinary occupations or VETASSESS for hospitality management. Requires relevant AQF trade certificate or diploma plus verifiable commercial employment history.",
    "engineering": "Assessed by Engineers Australia (EA). Applicants holding accredited Washington/Sydney Accord degrees or Competency Demonstration Reports (CDR) demonstrating continuous professional experience can achieve positive skills assessment.",
    "trades": "Assessed by Trades Recognition Australia (TRA) under the Migration Skills Assessment (MSA) or TSS assessment program. Requires AQF Certificate III/IV equivalence and documented post-qualification experience.",
    "technology": "Assessed by the Australian Computer Society (ACS). Requires an ICT major degree or recognized diploma, along with 2 to 4 years of relevant post-qualification industry experience.",
    "management": "Assessed by VETASSESS under professional occupation groups. Requires an AQF Bachelor degree or higher in a highly relevant field, accompanied by at least 1-2 years of relevant post-qualification employment.",
    "finance": "Assessed by CPA Australia, CA ANZ, or IPA for accountants, or VETASSESS for financial analysts. Requires relevant degree in accounting/finance and English proficiency."
}

DEFAULT_SECTOR_PR_PATHWAYS = {
    "healthcare": "Immediate Direct Entry PR via Subclass 186 ENS, Subclass 482 TSS with fast-track TRT pathway after 2 years, and Subclass 189/190 points-tested skilled visas.",
    "hospitality": "Subclass 482 TSS with transition to Subclass 186 PR after 2 years, Subclass 494 Regional to Subclass 191 PR, and regional DAMA agreements.",
    "engineering": "Subclass 186 Employer Nomination PR, Subclass 482 TSS with TRT transition, Subclass 189/190 independent points visas, and Subclass 494 regional.",
    "trades": "Subclass 482 TSS transitioning to Subclass 186 TRT PR, Subclass 494 Regional SESR to Subclass 191 PR, and Designated Area Migration Agreements (DAMA).",
    "technology": "Subclass 186 ENS Direct Entry and TRT stream, Subclass 482 TSS, Subclass 189 Skilled Independent, Subclass 190 State Nominated, and Subclass 494.",
    "management": "Subclass 482 TSS with pathway to Subclass 186 PR via TRT stream, and Subclass 494 Regional Employer Sponsored to Subclass 191 Permanent Residency.",
    "finance": "Subclass 186 Employer Nomination Scheme, Subclass 482 TSS to 186 TRT, Subclass 190 State Nominated PR, and Subclass 494 Regional."
}

CITY_STATE_MAP = {
    "sydney": ("Sydney", "NSW"),
    "melbourne": ("Melbourne", "VIC"),
    "brisbane": ("Brisbane", "QLD"),
    "perth": ("Perth", "WA"),
    "adelaide": ("Adelaide", "SA"),
    "hobart": ("Hobart", "TAS"),
    "darwin": ("Darwin", "NT"),
    "canberra": ("Canberra", "ACT"),
    "geelong": ("Geelong", "VIC"),
    "gold coast": ("Gold Coast", "QLD"),
    "newcastle": ("Newcastle", "NSW"),
    "cairns": ("Cairns", "QLD"),
    "wollongong": ("Wollongong", "NSW"),
    "burnie": ("Burnie", "TAS"),
    "devonport": ("Devonport", "TAS"),
}

STATE_CAPITALS = {
    "NSW": "Sydney",
    "VIC": "Melbourne",
    "QLD": "Brisbane",
    "WA": "Perth",
    "SA": "Adelaide",
    "TAS": "Hobart",
    "ACT": "Canberra",
    "NT": "Darwin",
}

# ---------------------------------------------------------------------------
# Australian City & State Postal Address Mappings (Google Jobs Structured Data)
# ---------------------------------------------------------------------------
AU_CITY_POSTAL_DATA = {
    "sydney": {"postal_code": "2000", "street_address": "George Street, Sydney CBD"},
    "melbourne": {"postal_code": "3000", "street_address": "Collins Street, Melbourne CBD"},
    "brisbane": {"postal_code": "4000", "street_address": "Queen Street, Brisbane CBD"},
    "perth": {"postal_code": "6000", "street_address": "St Georges Terrace, Perth CBD"},
    "adelaide": {"postal_code": "5000", "street_address": "King William Street, Adelaide CBD"},
    "canberra": {"postal_code": "2601", "street_address": "London Circuit, Canberra City"},
    "hobart": {"postal_code": "7000", "street_address": "Macquarie Street, Hobart CBD"},
    "darwin": {"postal_code": "0800", "street_address": "Mitchell Street, Darwin CBD"},
    "geelong": {"postal_code": "3220", "street_address": "Moorabool Street, Geelong City Centre"},
    "gold coast": {"postal_code": "4217", "street_address": "Surfers Paradise Boulevard, Gold Coast"},
    "newcastle": {"postal_code": "2300", "street_address": "Hunter Street, Newcastle CBD"},
    "cairns": {"postal_code": "4870", "street_address": "Abbott Street, Cairns City Centre"},
    "wollongong": {"postal_code": "2500", "street_address": "Crown Street, Wollongong CBD"},
    "burnie": {"postal_code": "7320", "street_address": "Cattley Street, Burnie City Centre"},
    "devonport": {"postal_code": "7310", "street_address": "Rooke Street, Devonport City Centre"},
}

AU_STATE_DEFAULTS = {
    "NSW": {"postal_code": "2000", "street_address": "George Street, Sydney CBD"},
    "VIC": {"postal_code": "3000", "street_address": "Collins Street, Melbourne CBD"},
    "QLD": {"postal_code": "4000", "street_address": "Queen Street, Brisbane CBD"},
    "WA": {"postal_code": "6000", "street_address": "St Georges Terrace, Perth CBD"},
    "SA": {"postal_code": "5000", "street_address": "King William Street, Adelaide CBD"},
    "TAS": {"postal_code": "7000", "street_address": "Macquarie Street, Hobart CBD"},
    "ACT": {"postal_code": "2601", "street_address": "London Circuit, Canberra City"},
    "NT": {"postal_code": "0800", "street_address": "Mitchell Street, Darwin CBD"},
}


def resolve_australian_postal_address(city: str, state: str) -> tuple[str, str]:
    """
    DEPRECATED (2026-11-27): no longer called — the addresses it returned were
    fabricated. Job location is city/state/country only; do not re-enable this.
    """
    c_key = (city or "").lower().strip()
    s_key = (state or "").upper().strip()

    if c_key in AU_CITY_POSTAL_DATA:
        data = AU_CITY_POSTAL_DATA[c_key]
        return data["postal_code"], data["street_address"]

    if s_key in AU_STATE_DEFAULTS:
        data = AU_STATE_DEFAULTS[s_key]
        return data["postal_code"], f"{city} Central Business District"

    return "2000", f"{city} Central Business District"


VISA_HUBS = [
    {
        "slug": "subclass-482-tss-jobs",
        "visa_code": "482",
        "title": "Subclass 482 Visa Sponsorship Jobs Australia (TSS)",
        "heading": "Subclass 482 (Temporary Skill Shortage) Jobs in Australia",
        "meta_desc": "Browse Australian employers actively sponsoring international candidates under the Subclass 482 TSS visa. Find sponsors with direct PR pathways.",
        "badge": "Subclass 482 TSS",
        "overview_html": """
          <p>The <strong>Subclass 482 Temporary Skill Shortage (TSS) visa</strong> is Australia's premier employer-sponsored work visa. It empowers approved Australian businesses holding Standard Business Sponsorship (SBS) accreditation to recruit qualified overseas professionals when skilled domestic workers are unavailable.</p>
          <h4>Key Advantages for Skilled Candidates:</h4>
          <ul>
            <li><strong>Duration:</strong> Granted for up to 2 to 4 years depending on the occupation stream (Core Skills, Specialist Skills, or Labor Agreements).</li>
            <li><strong>Permanent Residency Transition:</strong> Under current Australian migration regulations, Subclass 482 visa holders can transition directly to Australian Permanent Residency via the <strong>Subclass 186 Temporary Residence Transition (TRT)</strong> stream after 2 years of qualifying service with their sponsoring employer.</li>
            <li><strong>Family Inclusion:</strong> Sponsoring arrangements allow secondary applicants (spouses, de facto partners, and children) with full unrestricted work and education rights in Australia.</li>
          </ul>
        """
    },
    {
        "slug": "subclass-186-ens-jobs",
        "visa_code": "186",
        "title": "Subclass 186 ENS Permanent Residency Jobs Australia",
        "heading": "Subclass 186 (Employer Nomination Scheme) Direct PR Jobs",
        "meta_desc": "Explore Australian employers offering direct permanent residency sponsorship under the Subclass 186 ENS visa. Immediate PR opportunities for skilled global migrants.",
        "badge": "Subclass 186 ENS Direct PR",
        "overview_html": """
          <p>The <strong>Subclass 186 Employer Nomination Scheme (ENS) visa</strong> represents the premier pathway for skilled international professionals migrating to Australia. Upon visa grant, the applicant and their family receive immediate, unconditional <strong>Australian Permanent Residency (PR)</strong>.</p>
          <h4>Program Streams:</h4>
          <ul>
            <li><strong>Direct Entry (DE) Stream:</strong> For highly experienced professionals nominated by an Australian employer, possessing at least 3 years of relevant post-qualification experience and a formal positive skills assessment.</li>
            <li><strong>Temporary Residence Transition (TRT) Stream:</strong> For skilled workers already in Australia holding a Subclass 482 visa who have completed 2 years of full-time employment with their nominating employer.</li>
            <li><strong>Medicare & Social Benefits:</strong> Immediate enrollment in Australia's public healthcare system (Medicare) and full rights to live, work, and purchase property throughout Australia.</li>
          </ul>
        """
    },
    {
        "slug": "subclass-494-regional-jobs",
        "visa_code": "494",
        "title": "Subclass 494 Regional Visa Sponsorship Jobs Australia",
        "heading": "Subclass 494 (Skilled Employer Sponsored Regional) Jobs",
        "meta_desc": "Discover regional Australian employers offering Subclass 494 visa sponsorship. Lower nomination thresholds and direct pathways to Subclass 191 Permanent Residency.",
        "badge": "Subclass 494 Regional",
        "overview_html": """
          <p>The <strong>Subclass 494 Skilled Employer Sponsored Regional (SESR) visa</strong> assists Australian businesses across regional areas (any location outside the major metropolitan cities of Sydney, Melbourne, and Brisbane) in addressing acute talent shortages.</p>
          <h4>Regional Sponsorship Benefits:</h4>
          <ul>
            <li><strong>5-Year Provisional Residency:</strong> Live, work, and thrive in dynamic regional centers across Western Australia, South Australia, Queensland, regional Victoria, and the Northern Territory.</li>
            <li><strong>Pathway to Subclass 191 PR:</strong> After completing 3 years living and working in a designated regional area while meeting the minimum income threshold, visa holders transition directly to permanent residency via Subclass 191.</li>
            <li><strong>Broader Shortage Occupations:</strong> Access to an expanded list of eligible occupations, frequently supported by Designated Area Migration Agreements (DAMA) offering age, salary, and English concessions.</li>
          </ul>
        """
    }
]

LOCATION_HUBS = [
    {
        "slug": "sydney-nsw-visa-sponsorship-jobs",
        "state": "NSW",
        "city": "Sydney",
        "title": "Visa Sponsorship Jobs in Sydney & NSW Australia",
        "heading": "Australian Visa Sponsorship Jobs in Sydney & New South Wales",
        "meta_desc": "Find Sydney and New South Wales employers offering Subclass 482 and 186 visa sponsorship for tech, healthcare, finance, and engineering talent.",
        "overview_html": """
          <p>Sydney and New South Wales (NSW) represent Australia's financial and technological capital, hosting multinational corporate headquarters, Tier-1 engineering consultancies, and innovative tech hubs. NSW employers actively sponsor international talent across software engineering, corporate finance, infrastructure, and acute healthcare.</p>
        """
    },
    {
        "slug": "melbourne-vic-visa-sponsorship-jobs",
        "state": "VIC",
        "city": "Melbourne",
        "title": "Visa Sponsorship Jobs in Melbourne & Victoria Australia",
        "heading": "Australian Visa Sponsorship Jobs in Melbourne & Victoria",
        "meta_desc": "Browse visa sponsorship jobs in Melbourne and regional Victoria. Accredited employers sponsoring Subclass 482, 186, and 494 visas.",
        "overview_html": """
          <p>Victoria's vibrant economy is powered by digital transformation, advanced manufacturing, medical research, and education. Employers in Melbourne and regional economic centers like Geelong actively sponsor international workers across cloud architecture, healthcare, and civil infrastructure.</p>
        """
    },
    {
        "slug": "brisbane-qld-visa-sponsorship-jobs",
        "state": "QLD",
        "city": "Brisbane",
        "title": "Visa Sponsorship Jobs in Brisbane & Queensland Australia",
        "heading": "Australian Visa Sponsorship Jobs in Brisbane & Queensland",
        "meta_desc": "Discover employer-sponsored jobs in Brisbane and Queensland. Subclass 482 and 494 regional sponsorship in hospitality, tourism, engineering, and healthcare.",
        "overview_html": """
          <p>Queensland's booming economy—gearing up for the Brisbane 2032 Olympic Games—is creating historic demand across civil infrastructure, mechanical engineering, hospitality, and healthcare. Sponsoring employers offer both vibrant metropolitan and fast-track regional opportunities.</p>
        """
    },
    {
        "slug": "perth-wa-visa-sponsorship-jobs",
        "state": "WA",
        "city": "Perth",
        "title": "Visa Sponsorship Jobs in Perth & Western Australia",
        "heading": "Australian Visa Sponsorship Jobs in Perth & Western Australia",
        "meta_desc": "Search mining, energy, engineering, and trades visa sponsorship jobs in Perth and Western Australia under Subclass 482 and 494.",
        "overview_html": """
          <p>Western Australia's mining and renewable energy sectors drive the nation's resource export economy. WA employers provide lucrative remuneration packages, FIFO rosters, and generous relocation assistance for mechanical engineers, heavy diesel mechanics, and platform leaders.</p>
        """
    },
    {
        "slug": "adelaide-sa-visa-sponsorship-jobs",
        "state": "SA",
        "city": "Adelaide",
        "title": "Visa Sponsorship Jobs in Adelaide & South Australia",
        "heading": "Australian Visa Sponsorship Jobs in Adelaide & South Australia",
        "meta_desc": "Apply for Subclass 494 and 186 visa sponsorship jobs in Adelaide, South Australia. High regional priority with direct permanent residency transitions.",
        "overview_html": """
          <p>Entirely designated as a regional migration zone, South Australia offers favorable migration priority, a balanced cost of living, and thriving space, defense, civil engineering, and renewable tech sectors.</p>
        """
    }
]

SECTOR_HUBS = [
    {
        "slug": "it-software-engineering-visa-sponsorship-jobs",
        "category": "technology",
        "title": "IT & Software Engineering Visa Sponsorship Jobs Australia",
        "heading": "Australian IT, Software & Cloud Engineering Visa Sponsorship Jobs",
        "meta_desc": "Browse accredited Australian tech employers offering Subclass 482, 186, and 494 visa sponsorship for software engineers, cloud architects, and data specialists.",
        "badge": "IT & Software Engineering",
        "overview_html": """
          <p>Australia's digital economy is experiencing sustained demand for high-caliber international software engineers, DevOps specialists, cybersecurity architects, and data leaders. Australian employers in Sydney, Melbourne, and Brisbane offer Subclass 482 TSS and Subclass 186 Direct PR pathways with competitive compensation above market benchmarks.</p>
        """
    },
    {
        "slug": "healthcare-nursing-medical-visa-sponsorship-jobs",
        "category": "healthcare",
        "title": "Healthcare, Nursing & Medical Visa Sponsorship Jobs Australia",
        "heading": "Healthcare, Nursing & Medical Visa Sponsorship Jobs in Australia",
        "meta_desc": "Explore Australian hospital networks and medical centers sponsoring international Registered Nurses, General Practitioners, and allied health clinicians.",
        "badge": "Healthcare & Nursing",
        "overview_html": """
          <p>The Australian healthcare system offers priority migration processing under the Priority Migration Skilled Occupation List (PMSOL). Hospital health services and regional clinics actively sponsor qualified overseas Registered Nurses, Medical Practitioners, and Allied Health specialists with fast-track PR nominations.</p>
        """
    },
    {
        "slug": "engineering-mining-construction-visa-sponsorship-jobs",
        "category": "engineering",
        "title": "Engineering, Mining & Construction Visa Sponsorship Jobs Australia",
        "heading": "Engineering, Mining & Infrastructure Visa Sponsorship Jobs in Australia",
        "meta_desc": "Find Australian engineering sponsors offering Subclass 482 and 494 visa pathways for mechanical, civil, structural, and FIFO mining engineers.",
        "badge": "Engineering & Mining",
        "overview_html": """
          <p>Driven by national infrastructure projects and major resource operations across Western Australia and Queensland, accredited Australian employers actively sponsor skilled mechanical, electrical, and civil engineers on competitive FIFO and metropolitan rosters.</p>
        """
    },
    {
        "slug": "hospitality-chefs-tourism-visa-sponsorship-jobs",
        "category": "hospitality",
        "title": "Hospitality, Chefs & Culinary Visa Sponsorship Jobs Australia",
        "heading": "Hospitality & Executive Chef Visa Sponsorship Jobs in Australia",
        "meta_desc": "Discover Australian hotel groups, luxury resorts, and dining establishments offering TSS 482 and ENS 186 visa sponsorship for qualified international chefs and venue managers.",
        "badge": "Hospitality & Chefs",
        "overview_html": """
          <p>Australia's world-renowned culinary and tourism industry actively recruits experienced Head Chefs, Sous Chefs, and Hospitality Managers with employer sponsorship across capital cities and premier holiday destinations.</p>
        """
    },
    {
        "slug": "skilled-trades-technicians-visa-sponsorship-jobs",
        "category": "trades",
        "title": "Skilled Trades & Technicians Visa Sponsorship Jobs Australia",
        "heading": "Skilled Trades, Mechanics & Technicians Visa Sponsorship Jobs in Australia",
        "meta_desc": "Search Australian sponsors for diesel mechanics, autoglaziers, electricians, and tradespeople with regional Subclass 494 and 482 visa pathways.",
        "badge": "Skilled Trades",
        "overview_html": """
          <p>Critical skills shortages across automotive maintenance, heavy transport, construction cladding, and electrical systems enable skilled tradespeople holding formal Trade Recognition Australia (TRA) qualifications to secure accredited visa sponsorship with permanent residency progression.</p>
        """
    },
    {
        "slug": "corporate-management-business-visa-sponsorship-jobs",
        "category": "management",
        "title": "Corporate Management & Operations Visa Sponsorship Jobs Australia",
        "heading": "Australian Corporate Management & Business Administration Sponsorship Jobs",
        "meta_desc": "Browse accredited Australian employers offering Subclass 482, 186, and 494 visa sponsorship for project administrators, operations managers, and business specialists.",
        "badge": "Management & Business",
        "overview_html": """
          <p>Australian corporate enterprises and regional operations actively recruit experienced project administrators, operations managers, and business consultants under employer sponsorship programs with clear pathways to permanent residency.</p>
        """
    },
    {
        "slug": "accounting-finance-banking-visa-sponsorship-jobs",
        "category": "finance",
        "title": "Accounting, Finance & Banking Visa Sponsorship Jobs Australia",
        "heading": "Accounting, Audit & Corporate Finance Visa Sponsorship Jobs in Australia",
        "meta_desc": "Discover Australian accounting firms and financial institutions sponsoring international CPAs, financial analysts, and corporate auditors under Subclass 482 and 186.",
        "badge": "Finance & Accounting",
        "overview_html": """
          <p>Australia's thriving financial services sector offers accredited visa sponsorship for skilled accountants, external auditors, and financial analysts holding recognized CA ANZ or CPA Australia skills assessment certifications.</p>
        """
    }
]

DATASET_SOURCE = [
    {
        "id": "osj-2026-001",
        "title": "Senior Full Stack Software Engineer",
        "company": "Atlassian Partner Network",
        "city": "Sydney",
        "state": "NSW",
        "category": "technology",
        "visas": ["482", "186"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 186 ENS"],
        "anzsco": "261313",
        "salary_min": 135000,
        "salary_max": 160000,
        "salary_currency": "AUD",
        "salary_display": "$135,000 - $160,000 AUD + Super",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-05T08:00:00+10:00",
        "expiry_date": "2026-11-30T23:59:59+10:00",
        "apply_url": "https://au.indeed.com/jobs?q=Senior%20Full%20Stack%20Software%20Engineer%20Atlassian%20Partner%20Network%20Sydney",
        "summary": "Employer in Australia ready to sponsor eligible offshore or onshore software engineers under Subclass 482 TSS with PR nomination pathway.",
        "description_raw": "We are seeking a seasoned Senior Full Stack Software Engineer to join an accredited Australian technology consultancy in Sydney. The successful candidate will architect scalable cloud-native web applications using TypeScript, React, and Node.js. Includes full sponsorship under Subclass 482/186."
    },
    {
        "id": "osj-2026-002",
        "title": "Registered Nurse - Critical Care / ICU",
        "company": "St. Jude Regional Health Group",
        "city": "Geelong",
        "state": "VIC",
        "category": "healthcare",
        "visas": ["482", "494", "186"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 494 SESR", "Subclass 186 ENS"],
        "anzsco": "254415",
        "salary_min": 88000,
        "salary_max": 108000,
        "salary_currency": "AUD",
        "salary_display": "$88,000 - $108,000 AUD + Penalties",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-06T09:00:00+10:00",
        "expiry_date": "2026-11-30T23:59:59+10:00",
        "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20Critical%20Care%20ICU%20St%20Jude%20Regional%20Health%20Group%20Geelong",
        "summary": "AHPRA registered or internationally qualified nurses eligible for registration. Direct visa sponsorship available under regional Subclass 494 and fast-track ENS 186 pathway.",
        "description_raw": "St. Jude Regional Health Group invites applications from compassionate and skilled Critical Care & ICU Registered Nurses to join our modern regional medical center in Geelong, Victoria. Full visa sponsorship under regional Subclass 494 and fast-track ENS 186."
    },
    {
        "id": "osj-2026-003",
        "title": "Mechanical Project Engineer (Mining & Energy)",
        "company": "WestForce Resources",
        "city": "Perth",
        "state": "WA",
        "category": "engineering",
        "visas": ["482", "494"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 494 SESR"],
        "anzsco": "233512",
        "salary_min": 145000,
        "salary_max": 180000,
        "salary_currency": "AUD",
        "salary_display": "$145,000 - $180,000 AUD + FIFO Allowance",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-06T11:00:00+08:00",
        "expiry_date": "2026-11-30T23:59:59+08:00",
        "apply_url": "https://au.indeed.com/jobs?q=Mechanical%20Project%20Engineer%20WestForce%20Resources%20Perth",
        "summary": "FIFO roster from Perth with employer sponsorship under Subclass 482/494 for qualified mechanical mining engineers.",
        "description_raw": "WestForce Resources is seeking an ambitious Mechanical Project Engineer for our Western Australian mineral processing operations. This position offers an 8/6 FIFO roster from Perth, excellent camp amenities, and full visa sponsorship under Subclass 482/494."
    },
    {
        "id": "osj-2026-004",
        "title": "Head Chef - Modern Australian / European",
        "company": "Crown Culinary Group",
        "city": "Brisbane",
        "state": "QLD",
        "category": "hospitality",
        "visas": ["482"],
        "visa_labels": ["Subclass 482 TSS"],
        "anzsco": "351311",
        "salary_min": 82000,
        "salary_max": 98000,
        "salary_currency": "AUD",
        "salary_display": "$82,000 - $98,000 AUD + Bonus",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-07T10:00:00+10:00",
        "expiry_date": "2026-11-30T23:59:59+10:00",
        "apply_url": "https://au.indeed.com/jobs?q=Head%20Chef%20Crown%20Culinary%20Group%20Brisbane",
        "summary": "Fine dining culinary destination in Brisbane offering employer sponsorship under Subclass 482 for passionate Head Chefs.",
        "description_raw": "Premier dining institution in Brisbane seeking an inspiring Head Chef with international culinary flair. Employer offering Subclass 482 TSS nomination."
    },
    {
        "id": "osj-2026-005",
        "title": "Civil Infrastructure Structural Engineer",
        "company": "Apex Infrastructure Australia",
        "city": "Adelaide",
        "state": "SA",
        "category": "engineering",
        "visas": ["482", "494", "186"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 494 SESR", "Subclass 186 ENS"],
        "anzsco": "233211",
        "salary_min": 115000,
        "salary_max": 138000,
        "salary_currency": "AUD",
        "salary_display": "$115,000 - $138,000 AUD + Relocation",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-07T14:30:00+09:30",
        "expiry_date": "2026-11-30T23:59:59+09:30",
        "apply_url": "https://au.indeed.com/jobs?q=Civil%20Infrastructure%20Structural%20Engineer%20Apex%20Infrastructure%20Adelaide",
        "summary": "Civil and structural design consultancy in South Australia offering Subclass 494 Regional nomination with guaranteed ENS 186 PR support.",
        "description_raw": "Apex Infrastructure Australia is expanding its civil structural engineering consultancy team in Adelaide, South Australia. Subclass 494 regional sponsorship with direct transition support for permanent residency."
    },
    {
        "id": "osj-2026-006",
        "title": "Senior Cloud & DevOps Architect",
        "company": "Novus Digital Solutions",
        "city": "Melbourne",
        "state": "VIC",
        "category": "technology",
        "visas": ["482", "186"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 186 ENS"],
        "anzsco": "261313",
        "salary_min": 140000,
        "salary_max": 165000,
        "salary_currency": "AUD",
        "salary_display": "$140,000 - $165,000 AUD + Equity",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-08T08:30:00+10:00",
        "expiry_date": "2026-11-30T23:59:59+10:00",
        "apply_url": "https://au.indeed.com/jobs?q=Senior%20Cloud%20DevOps%20Architect%20Novus%20Digital%20Solutions%20Melbourne",
        "summary": "Enterprise cloud architecture in Melbourne. Employer ready to sponsor offshore DevOps specialists with fast-track PR transition.",
        "description_raw": "Leading Australian enterprise cloud transformation consultancy seeking an experienced Senior Cloud & DevOps Architect in Melbourne. Employer offering Subclass 482/186 sponsorship."
    },
    {
        "id": "osj-2026-007",
        "title": "Heavy Diesel Field Service Technician",
        "company": "Terra Heavy Machinery",
        "city": "Darwin",
        "state": "NT",
        "category": "trades",
        "visas": ["482", "494"],
        "visa_labels": ["Subclass 482 TSS", "Subclass 494 SESR"],
        "anzsco": "321212",
        "salary_min": 115000,
        "salary_max": 140000,
        "salary_currency": "AUD",
        "salary_display": "$115,000 - $140,000 AUD + Service Vehicle",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-08T10:15:00+09:30",
        "expiry_date": "2026-11-30T23:59:59+09:30",
        "apply_url": "https://au.indeed.com/jobs?q=Heavy%20Diesel%20Field%20Service%20Technician%20Terra%20Heavy%20Machinery%20Darwin",
        "summary": "Caterpillar & Komatsu equipment maintenance. Full employer visa sponsorship under Northern Territory DAMA / Subclass 494.",
        "description_raw": "Terra Heavy Machinery Darwin is recruiting certified Heavy Diesel Mechanics and Field Service Technicians for earthmoving equipment. Employer nomination under Northern Territory DAMA Subclass 494."
    },
    {
        "id": "osj-2026-008",
        "title": "Senior Corporate Financial Accountant",
        "company": "Meridian Financial Partners",
        "city": "Sydney",
        "state": "NSW",
        "category": "finance",
        "visas": ["482"],
        "visa_labels": ["Subclass 482 TSS"],
        "anzsco": "221111",
        "salary_min": 110000,
        "salary_max": 130000,
        "salary_currency": "AUD",
        "salary_display": "$110,000 - $130,000 AUD + Performance Bonus",
        "type": "Full-time",
        "verified_sponsor": False,
        "posted_date": "2026-09-08T11:45:00+10:00",
        "expiry_date": "2026-11-30T23:59:59+10:00",
        "apply_url": "https://au.indeed.com/jobs?q=Senior%20Corporate%20Financial%20Accountant%20Meridian%20Financial%20Partners%20Sydney",
        "summary": "Sydney CBD corporate financial advisory offering Subclass 482 TSS sponsorship for qualified CA/CPA international accountants.",
        "description_raw": "Meridian Financial Partners is seeking an accomplished Senior Corporate Financial Accountant for our Sydney CBD practice. Full employer sponsorship under Subclass 482 TSS."
    }
]


def deduplicate_jobs(jobs: list[dict]) -> list[dict]:
    """Deduplicates jobs based on normalized company, title, and city fingerprint."""
    seen = set()
    unique = []
    for j in jobs:
        fp = compute_job_fingerprint(j.get("company", ""), j.get("title", ""), j.get("city", ""))
        if fp not in seen:
            seen.add(fp)
            unique.append(j)
    return unique


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_-]+", "-", text)
    return text.strip("-")


def generate_job_slug(job: dict) -> str:
    city_slug = slugify(job.get("city", "australia"))
    title_slug = slugify(job.get("title", "job"))
    visas = "-".join(job.get("visas", ["482"]))
    raw_slug = f"{city_slug}-{title_slug}-{visas}-sponsorship"
    return slugify(raw_slug)


def detect_location(loc_text: str, snippet: str = "") -> tuple[str, str]:
    combined = f"{loc_text} {snippet}".lower()
    for city_key, (city_name, state_code) in CITY_STATE_MAP.items():
        if re.search(r"\b" + re.escape(city_key) + r"\b", combined):
            return city_name, state_code
    for state_code in AU_STATES:
        if re.search(r"\b" + state_code.lower() + r"\b", combined):
            return STATE_CAPITALS.get(state_code, "Sydney"), state_code
    return "Sydney", "NSW"


# ---------------------------------------------------------------------------
# Salary normalisation (added 2026-11-27 — fixes invented/default salaries).
# All pay figures are normalised to ANNUAL AUD. If the pay unit cannot be
# determined, or the figure cannot plausibly be an annual salary, the salary
# is OMITTED (None) — never invented, never displayed raw ("$10 per day").
# ---------------------------------------------------------------------------
_PAY_UNIT_PATTERNS = [
    ("hour", [r"per\s*hour", r"/\s*hour", r"/hr\b", r"hourly", r"per\s*hr\b"]),
    ("day", [r"per\s*day", r"/\s*day", r"daily", r"per\s*diem"]),
    ("week", [r"per\s*week", r"/\s*week", r"weekly"]),
    ("month", [r"per\s*month", r"/\s*month", r"monthly", r"per\s*calendar\s*month"]),
    ("year", [r"per\s*annum", r"per\s*year", r"/\s*year", r"annual", r"\bp\.a\.?\b"]),
]
_PAY_UNIT_MULTIPLIER = {"hour": 38 * 52, "day": 5 * 52, "week": 52, "month": 12, "year": 1}
# Plausible annual AUD range for a sponsored full-time role.
_MIN_PLAUSIBLE_ANNUAL = 30000
_MAX_PLAUSIBLE_ANNUAL = 1000000


def _detect_pay_unit(text: str):
    """Detects the pay unit (hour/day/week/month/year) from free text, or None."""
    if not text:
        return None
    low = text.lower()
    for unit, patterns in _PAY_UNIT_PATTERNS:
        for pat in patterns:
            if re.search(pat, low):
                return unit
    return None


def _parse_pay_number(raw: str):
    """Parses one pay figure: strips $, commas, spaces; handles a 'k' suffix."""
    if raw is None:
        return None
    s = raw.strip().lower().replace(",", "").replace("$", "").replace("aud", "").strip()
    if not s:
        return None
    mult = 1
    if s.endswith("k"):
        mult = 1000
        s = s[:-1].strip()
    try:
        return float(s) * mult
    except ValueError:
        return None


def normalize_salary_range(sal_min, sal_max, text_hint: str = ""):
    """
    Normalises a (min, max) pay pair to ANNUAL AUD.
    Returns (min_annual, max_annual, display_string) or (None, None, None)
    when the figures are unusable (unknown unit, implausible values).
    A single figure (min == max) is returned as a single-value display.
    """
    if sal_min is None and sal_max is None:
        return None, None, None
    try:
        lo = float(sal_min) if sal_min is not None else None
        hi = float(sal_max) if sal_max is not None else None
    except (TypeError, ValueError):
        return None, None, None
    if lo is not None and hi is not None and lo > hi:
        lo, hi = hi, lo
    if lo is None:
        lo = hi
    if hi is None:
        hi = lo
    if lo is None or hi is None or lo <= 0:
        return None, None, None
    unit = _detect_pay_unit(text_hint or "")
    if unit is None:
        # No unit given: only accept figures that are already plausible annual
        # salaries. Anything smaller is a rate (hourly/daily) — drop it.
        if lo < _MIN_PLAUSIBLE_ANNUAL:
            return None, None, None
        mult = 1
    else:
        mult = _PAY_UNIT_MULTIPLIER[unit]
    lo_a = int(round(lo * mult))
    hi_a = int(round(hi * mult))
    if lo_a < _MIN_PLAUSIBLE_ANNUAL or hi_a > _MAX_PLAUSIBLE_ANNUAL or hi_a < lo_a:
        return None, None, None
    if lo_a == hi_a:
        return lo_a, hi_a, f"${lo_a:,} AUD"
    return lo_a, hi_a, f"${lo_a:,} - ${hi_a:,} AUD"


def parse_free_text_salary(text: str):
    """
    Parses a free-text salary such as "$10 per day", "$90,000 - $140,000",
    "$118.85k" or "$50 per hour" into an annual AUD range.
    Returns (None, None, None) when the text carries no usable figure.
    Bare numbers (e.g. a year) are ignored — a figure must carry $ or a k suffix.
    """
    if not text:
        return None, None, None
    amounts = []
    for m in re.finditer(r"(\$)?\s*([\d,]+(?:\.\d+)?)\s*(k)?\b", text, flags=re.IGNORECASE):
        has_dollar, num, has_k = m.group(1), m.group(2), m.group(3)
        if not has_dollar and not has_k:
            continue
        val = _parse_pay_number(num + ("k" if has_k else ""))
        if val is not None:
            amounts.append(val)
    if not amounts:
        return None, None, None
    lo = min(amounts)
    hi = max(amounts)
    return normalize_salary_range(lo, hi, text)


# Salary pairs the old (pre-v1) pipeline hard-coded as defaults for every job
# whose real pay was unknown. They were baked into the frozen js/app.js
# baseline as plain "$90,000 - $140,000 AUD" strings, so a stored pair exactly
# equal to one of them is not evidence of a real advertised salary.
_LEGACY_DEFAULT_SALARY_PAIRS = {(90000, 140000), (95000, 130000)}


def _is_legacy_default_salary(sal_min, sal_max, raw_text: str) -> bool:
    """True when a parsed (min, max) pair is exactly one of the old pipeline's
    hard-coded salary defaults and the source string carries no explicit
    annual marker (per annum / p.a. / per year / yearly / annual) that would
    corroborate it as a genuinely advertised annual range. This guards
    stored baseline strings only — fresh API data never passes through it."""
    if sal_min is None or sal_max is None:
        return False
    try:
        pair = (int(sal_min), int(sal_max))
    except (TypeError, ValueError):
        return False
    if pair not in _LEGACY_DEFAULT_SALARY_PAIRS:
        return False
    low = (raw_text or "").lower()
    return not any(m in low for m in ("per annum", "per year", "yearly", "annual", "p.a.", "p/a"))


def salary_display_for(job: dict) -> str:
    """Display string for the salary pill, or '' when the job has no salary."""
    return job.get("salary_display") or ""


def adsense_unit_html(slot_env_var: str) -> str:
    """
    Renders a real AdSense <ins> unit only when ADSENSE_CLIENT_ID and the named
    slot secret are both set. Returns "" otherwise — no fake placeholder is ever
    rendered (the old static "Advertisement" boxes looked like ads and would
    mislead users and reviewers). Slot secrets (optional GitHub Secrets):
    ADSENSE_SLOT_LEADERBOARD, ADSENSE_SLOT_IN_FEED, ADSENSE_SLOT_SIDEBAR.
    """
    slot = os.getenv(slot_env_var, "")
    if not ADSENSE_CLIENT_ID or not slot:
        return ""
    return (
        f'<ins class="adsbygoogle" style="display:block" data-ad-client="{ADSENSE_CLIENT_ID}" '
        f'data-ad-slot="{slot}" data-ad-format="auto" data-full-width-responsive="true"></ins>'
        f'<script>(adsbygoogle = window.adsbygoogle || []).push({{}});</script>'
    )


def detect_category(title: str, snippet: str = "") -> str:
    occ = classify_job_anzsco(title, snippet)
    return occ["sector"] if occ else "management"


def load_baseline_jobs(ledger: JobLedger) -> list[dict]:
    """
    Loads existing baseline jobs from js/app.js (and DATASET_SOURCE) into master catalog,
    ensuring they are registered in the ledger and never lost or duplicated.
    """
    baseline_catalog = []
    now = datetime.now(timezone.utc)
    expiry = (now + timedelta(days=60)).strftime("%Y-%m-%dT23:59:59+10:00")

    if os.path.exists(JS_APP_PATH):
        try:
            with open(JS_APP_PATH, "r", encoding="utf-8") as f:
                js_content = f.read()
            m = re.search(r"const JOBS_DATA = (\[[\s\S]*?\]);", js_content)
            if m:
                raw_existing = json.loads(m.group(1))
                for item in raw_existing:
                    city = item.get("location", "Sydney, NSW").split(",")[0].strip()
                    slug = item.get("slug")
                    if not slug:
                        slug = f"{slugify(city)}-{slugify(item['title'])}-sponsorship"
                    prev_entry = ledger.data.get("jobs_by_external_id", {}).get(item["id"]) or ledger.data.get("jobs_by_slug", {}).get(slug)
                    stored_posted = (prev_entry.get("posted_date") if (prev_entry and prev_entry.get("posted_date")) else None)
                    stored_expiry = (prev_entry.get("expiry_date") if (prev_entry and prev_entry.get("expiry_date")) else expiry)
                    stored_status = (prev_entry.get("status") if (prev_entry and prev_entry.get("status")) else "active")

                    # Re-classify the title and re-parse the stored salary string:
                    # the old js/app.js data carries baked-in defaults (261313 /
                    # "$95,000+ AUD") that must not be trusted or re-published.
                    _occ = classify_job_anzsco(item["title"], item.get("description", ""))
                    _sal_min, _sal_max, _sal_display = parse_free_text_salary(item.get("salary"))
                    # Legacy-default guard: a stored pair exactly equal to one
                    # of the old pipeline's invented defaults is not a real
                    # advertised salary — drop it (see _is_legacy_default_salary).
                    if _is_legacy_default_salary(_sal_min, _sal_max, item.get("salary")):
                        _sal_min, _sal_max, _sal_display = None, None, None
                    job_entry = {
                        "id": item["id"],
                        "title": item["title"],
                        "company": item["company"],
                        "city": city,
                        "state": item.get("state", "NSW"),
                        "category": _occ["sector"] if _occ else "management",
                        "visas": item.get("visas", ["482"]),
                        "visa_labels": item.get("visaLabels", ["Subclass 482 TSS"]),
                        "anzsco": _occ["anzsco"] if _occ else None,
                        "salary_min": _sal_min,
                        "salary_max": _sal_max,
                        "salary_currency": "AUD",
                        "salary_display": _sal_display,
                        "type": item.get("type", "Full-time"),
                        "verified_sponsor": False,
                        "posted_date": stored_posted,
                        "expiry_date": stored_expiry,
                        "status": stored_status,
                        "apply_url": (
                            ledger.data.get("jobs_by_external_id", {}).get(item["id"], {}).get("apply_url")
                            or ledger.data.get("jobs_by_slug", {}).get(slug, {}).get("apply_url")
                            or build_external_apply_url(item)
                        ),
                        "summary": item.get("description", ""),
                        "description_raw": item.get("description", ""),
                        "source": "curated" if "osj" in item["id"] else "jooble",
                        "slug": slug
                    }
                    ledger.record_job(job_entry, slug, source=job_entry["source"])
                    baseline_catalog.append(job_entry)
        except Exception as e:
            print(f"[WARN] Error loading baseline jobs from js/app.js: {e}")

    # Retain any ledger-tracked expired jobs so their pages can be generated with noindex per Google
    seen_ids = {j["id"] for j in baseline_catalog}
    for slug, entry in ledger.data.get("jobs_by_slug", {}).items():
        if entry.get("status") == "expired" and entry.get("external_id") not in seen_ids:
            # Re-classify the title: expired pages are noindexed, but they
            # must still not carry a fabricated ANZSCO code or salary.
            _exp_occ = classify_job_anzsco(entry.get("title") or "", "")
            exp_job = {
                "id": entry.get("external_id") or f"exp-{slug}",
                "title": entry.get("title") or slug.replace("-", " ").title(),
                "company": entry.get("company", "Australian Sponsor"),
                "city": entry.get("city", "Australia"),
                "state": entry.get("state", "NSW"),
                "category": _exp_occ["sector"] if _exp_occ else "management",
                "visas": ["482"],
                "visa_labels": ["Subclass 482 TSS"],
                "anzsco": _exp_occ["anzsco"] if _exp_occ else None,
                "salary_min": None,
                "salary_max": None,
                "salary_currency": "AUD",
                "salary_display": None,
                "type": "Full-time",
                "verified_sponsor": False,
                "posted_date": entry.get("posted_date"),
                "expiry_date": entry.get("expiry_date") or (now - timedelta(days=1)).isoformat(),
                "status": "expired",
                "apply_url": resolve_job_external_apply_url(entry),
                "summary": "This Australian visa sponsorship job vacancy has closed or expired.",
                "description_raw": "This Australian visa sponsorship job vacancy has closed or expired.",
                "source": entry.get("source", "archived"),
                "slug": slug
            }
            baseline_catalog.append(exp_job)
            seen_ids.add(exp_job["id"])

    # Fallback to DATASET_SOURCE if baseline was empty
    if not baseline_catalog:
        for job in DATASET_SOURCE:
            slug = generate_job_slug(job)
            ledger.record_job(job, slug, source="curated")
            job_copy = dict(job)
            # No SBS verification exists for any employer: never claim it.
            job_copy["verified_sponsor"] = False
            # Rebuild the display string from the same normalised numbers the
            # JSON-LD baseSalary uses, so visible pay and schema pay match.
            _n_min, _n_max, _n_disp = normalize_salary_range(job.get("salary_min"), job.get("salary_max"), job.get("salary_display", ""))
            if _n_disp:
                job_copy["salary_min"], job_copy["salary_max"], job_copy["salary_display"] = _n_min, _n_max, _n_disp
            job_copy["slug"] = slug
            baseline_catalog.append(job_copy)

    print(f"[*] Baseline Catalog: {len(baseline_catalog)} total jobs retained ({sum(1 for j in baseline_catalog if j.get('status') == 'expired')} expired).")
    return baseline_catalog


def fetch_external_jobs() -> list[dict]:
    """
    Ingests live Australian visa sponsorship jobs from Adzuna AU API and Jooble API,
    enforcing zero-duplicate verification via JobLedger, and combines with baseline catalog.
    """
      ledger = JobLedger()
    master_catalog = load_baseline_jobs(ledger)
    
    now = datetime.now(timezone.utc)
    expiry = (now + timedelta(days=60)).strftime("%Y-%m-%dT23:59:59+10:00")
    accepted_new = 0
    duplicates_skipped = 0

    # 1. Adzuna AU Ingestion
    if ADZUNA_APP_ID and ADZUNA_APP_KEY:
        print("[*] Ingestion: Connecting to Adzuna AU API for live sponsorship postings...")
        adzuna_queries = [
            "visa sponsorship",
            "employer sponsorship",
            "482 sponsorship",
            "sponsorship available",
            "subclass 186",
            "subclass 494",
            "tss visa"
        ]
        for query in adzuna_queries:
            for page in [1, 2, 3]:
                try:
                    query_encoded = urllib.parse.quote(query)
                    url = f"https://api.adzuna.com/v1/api/jobs/au/search/{page}?app_id={ADZUNA_APP_ID}&app_key={ADZUNA_APP_KEY}&results_per_page=30&what={query_encoded}"
                    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
                    with urllib.request.urlopen(req, timeout=12) as response:
                        data = json.loads(response.read().decode("utf-8"))
                        for item in data.get("results", []):
                            title = clean_job_title(item.get("title", "").strip())
                            company = item.get("company", {}).get("display_name", "Australian Sponsor").strip()
                            loc_name = item.get("location", {}).get("display_name", "")
                            desc = item.get("description", "")
                            city, state = detect_location(loc_name, desc)
                            occ = classify_job_anzsco(title, desc)
                            category = (occ["sector"] if occ else "management")
                            # Normalise the API pay figures to annual AUD; unknown
                            # units or implausible figures are dropped (None).
                            sal_min, sal_max, sal_display = normalize_salary_range(item.get("salary_min"), item.get("salary_max"), desc)


                            
                            is_regional = state in ["SA", "WA", "TAS", "NT", "QLD"]
                            visas = ["482", "494"] if is_regional else ["482", "186"]
                            labels = ["Subclass 482 TSS", "Subclass 494 SESR"] if is_regional else ["Subclass 482 TSS", "Subclass 186 ENS"]

                            job_cand = {
                                "id": f"adzuna-{item.get('id')}",
                                "title": title,
                                "company": company,
                                "city": city,
                                "state": state,
                                "category": category,
                                "visas": visas,
                                "visa_labels": labels,
                                "anzsco": occ["anzsco"] if occ else None,
                                "salary_min": sal_min,
                                "salary_max": sal_max,
                                "salary_currency": "AUD",
                                "salary_display": sal_display,
                                "type": "Full-time",
                                "verified_sponsor": False,
                                "posted_date": item.get("created", now.isoformat()),
                                "expiry_date": expiry,
                                "apply_url": item.get("redirect_url") or f"https://www.adzuna.com.au/search?q={urllib.parse.quote(title + ' ' + company)}",
                                "summary": desc[:220] + "...",
                                "description_raw": desc,
                                "source": "adzuna"
                            }

                            is_valid, _ = validate_job(job_cand)
                            if not is_valid:
                                continue

                            slug = generate_job_slug(job_cand)
                            is_dup, _ = ledger.is_duplicate(job_cand, slug=slug)
                            if is_dup:
                                duplicates_skipped += 1
                                continue

                            ledger.record_job(job_cand, slug, source="adzuna")
                            job_cand["slug"] = slug
                            master_catalog.append(job_cand)
                            accepted_new += 1
                except Exception as e:
                    print(f"[WARN] Adzuna fetch '{query}' page {page} error: {e}")

    # 2. Jooble Ingestion
    if JOOBLE_API_KEY:
        print("[*] Ingestion: Connecting to Jooble API for live sponsorship postings...")
        jooble_queries = [
            "visa sponsorship",
            "482 visa",
            "employer sponsorship",
            "subclass 186",
            "subclass 494",
            "dama sponsorship"
        ]
        for q in jooble_queries:
            for page in [1, 2, 3]:
                try:
                    url = f"https://jooble.org/api/{JOOBLE_API_KEY}"
                    payload = {"keywords": q, "location": "Australia", "page": page}
                    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json", "User-Agent": "OZ-Sponsor-Jobs-Bot/1.0"})
                    with urllib.request.urlopen(req, timeout=12) as res:
                        d = json.loads(res.read().decode("utf-8"))
                        for item in d.get("jobs", []):
                            title = clean_job_title(item.get("title", "").strip())
                            company = item.get("company", "").strip() or "Australian Sponsor"
                            loc_str = item.get("location", "")
                            snippet = item.get("snippet", "")
                            city, state = detect_location(loc_str, snippet)
                            occ = classify_job_anzsco(title, snippet)
                            category = occ["sector"] if occ else "management"
                            
                            is_regional = state in ["SA", "WA", "TAS", "NT", "QLD"]
                            visas = ["482", "494"] if is_regional else ["482", "186"]
                            labels = ["Subclass 482 TSS", "Subclass 494 SESR"] if is_regional else ["Subclass 482 TSS", "Subclass 186 ENS"]
                            
                            # Parse the free-text salary; unparseable pay is omitted (None).
                            sal_min, sal_max, sal_display = parse_free_text_salary(item.get("salary", ""))
                            job_cand = {
                                "id": f"jooble-{item.get('id')}",
                                "title": title,
                                "company": company,
                                "city": city,
                                "state": state,
                                "category": category,
                                "visas": visas,
                                "visa_labels": labels,
                                "anzsco": occ["anzsco"] if occ else None,
                                "salary_min": sal_min,
                                "salary_max": sal_max,
                                "salary_currency": "AUD",
                                "salary_display": sal_display,
                                "type": item.get("type", "Full-time") or "Full-time",
                                "verified_sponsor": False,
                                # Jooble supplies `updated`, not a posting date: use a real
                                # posted/created field when present, else first-seen (now).
                                "posted_date": item.get("created") or item.get("posted") or now.isoformat(),
                                "expiry_date": expiry,
                                "apply_url": item.get("link") or f"https://jooble.org/jdp/{item.get('id')}",
                                "summary": snippet[:220] + "...",
                                "description_raw": snippet,
                                "source": "jooble"
                            }

                            is_valid, _ = validate_job(job_cand)
                            if not is_valid:
                                continue

                            slug = generate_job_slug(job_cand)
                            is_dup, _ = ledger.is_duplicate(job_cand, slug=slug)
                            if is_dup:
                                duplicates_skipped += 1
                                continue

                            ledger.record_job(job_cand, slug, source="jooble")
                            job_cand["slug"] = slug
                            master_catalog.append(job_cand)
                            accepted_new += 1
                except Exception as e:
                    print(f"[WARN] Jooble fetch '{q}' page {page} error: {e}")

    ledger.save()
    print(f"[OK] Ledger: Total active catalog = {len(master_catalog)} jobs ({accepted_new} NEW accepted, {duplicates_skipped} duplicates caught & prevented).")
    return master_catalog



def validate_job(job: dict) -> tuple[bool, str]:
    title = job.get("title", "").strip()
    desc = job.get("description_raw", "").strip()
    state = job.get("state", "").upper().strip()
    visas = [v.lower() for v in job.get("visas", [])]

    for pattern in BLOCKED_PATTERNS:
        if re.search(pattern, title, re.IGNORECASE):
            return False, f"Blocked informational/article pattern: {title}"

    if len(title) < 5 or len(title) > 130:
        return False, f"Invalid title length: {title}"

    if len(desc) < 40:
        return False, "Job description too brief."

    if state not in AU_STATES:
        return False, f"Invalid state: {state}"

    has_valid_visa = any(v in ["482", "186", "494", "tss", "dama", "sponsorship", "sponsor"] for v in visas)
    if not has_valid_visa:
        return False, "No valid sponsorship visa."

    # Salary backstop: a job with a degenerate or negative pay range is rejected
    # rather than published with an invented figure.
    _smin, _smax = job.get("salary_min"), job.get("salary_max")
    if _smin is not None and (_smin <= 0 or (_smax is not None and _smax < _smin)):
        return False, "Invalid salary range."

    return True, "Valid"


def build_rich_article_content(job: dict, location_breadcrumb_url: str) -> tuple[str, dict, dict]:
    """
    Constructs high-depth E-E-A-T article content with strong contextual interlinking,
    and returns (article_html, job_schema, article_schema).
    """
    occ = classify_job_anzsco(job.get("title", ""), job.get("description_raw", ""))
    if occ is None:
        # Unclassified occupation: generic sector content; the ANZSCO code is
        # omitted everywhere (no occupationalCategory, no ANZSCO pill/table).
        occ = {"anzsco": None, "title": "Skilled Professional", "sector": "management",
               "authority": "Relevant assessing authority", "skills_list": "Skilled Occupation List"}
    cat_key = occ["sector"]
    
    city = job.get("city", "Sydney")
    state = job.get("state", "NSW")
    company = job.get("company", "Australian Sponsor")
    title = job.get("title", "Skilled Professional")
    visas = job.get("visas", ["482", "186"])

    # Expired jobs must not read as open vacancies: the page already carries
    # an "Applications Closed / Expired" banner, so the article lead below
    # must say the same thing instead of "currently open". Same expiry test
    # as render_job_page_html (status flag, or an expiry date already passed).
    _is_expired = (job.get("status") == "expired")
    if not _is_expired and job.get("expiry_date"):
        try:
            _exp_dt = datetime.fromisoformat(job["expiry_date"])
            if _exp_dt.tzinfo is None:
                _exp_dt = _exp_dt.replace(tzinfo=timezone.utc)
            if _exp_dt < datetime.now(timezone.utc):
                _is_expired = True
        except Exception:
            pass
    
    is_regional = state in ["SA", "WA", "TAS", "NT", "QLD"] or city in [
        "Geelong", "Darwin", "Adelaide", "Hobart", "Newcastle", "Cairns",
        "Katherine", "Townsville", "Toowoomba", "Ballarat", "Bendigo"
    ]

    # Sector Hub Lookup for Topic Cluster Linking
    sector_slug = "it-software-engineering-visa-sponsorship-jobs"
    for s_hub in SECTOR_HUBS:
        if s_hub["category"] == cat_key:
            sector_slug = s_hub["slug"]
            break
    link_sector = f'<a href="../sectors/{sector_slug}.html" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">{occ["title"]} sponsorship directory</a>'

    # Occupation Hub Lookup for Topic Cluster Linking
    occ_hub = ANZSCO_HUBS_BY_CODE.get(occ["anzsco"])
    if occ_hub:
        link_occ = f'<a href="../occupations/{occ_hub["slug"]}.html" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">{occ["title"]} (ANZSCO {occ["anzsco"]}) Sponsorship Hub</a>'
    else:
        link_occ = f'<a href="../occupations/" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">In-Demand Skilled Occupations</a>'

    # Contextual Interlinking URLs
    link_482 = '<a href="../visas/subclass-482-tss-jobs.html" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">Subclass 482 (TSS Visa)</a>'
    link_186 = '<a href="../visas/subclass-186-ens-jobs.html" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">Subclass 186 (ENS Direct PR)</a>'
    link_494 = '<a href="../visas/subclass-494-regional-jobs.html" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">Subclass 494 (Regional Visa)</a>'
    link_loc = f'<a href="{location_breadcrumb_url}" style="color:var(--color-primary); font-weight:600; text-decoration:underline;">{city}, {state} sponsorship directory</a>'

    # Company Sponsor Hub Lookup for Topic Cluster Linking
    co_slug = re.sub(r'[^a-zA-Z0-9\s-]', '', company).strip().lower()
    co_slug = re.sub(r'[\s-]+', '-', co_slug) or "australian-sponsor"
    link_company = f'<a href="../sponsors/{co_slug}-visa-sponsorship-jobs.html" style="color:var(--color-primary); font-weight:700; text-decoration:underline;">{company}</a>'

    # Compute TSMIT and Remuneration figures
    # Remuneration: only the job's own normalised salary is used. When the job
    # has no salary, every pay figure is omitted — never an invented range.
    sal_min = job.get('salary_min')
    sal_max = job.get('salary_max')
    sal_display = job.get('salary_display')
    est_super = int(sal_min * 0.115) if sal_min else None
    total_package = (sal_min + est_super) if sal_min else None





    # Retrieve official duties, assessment tips, and PR pathways
    duties_list = []
    if occ_hub and occ_hub.get("duties"):
        duties_list = occ_hub["duties"]
    else:
        duties_list = DEFAULT_SECTOR_DUTIES.get(cat_key, DEFAULT_SECTOR_DUTIES["management"])

    assessment_tips_text = (
        occ_hub.get("assessment_tips")
        if occ_hub and occ_hub.get("assessment_tips")
        else DEFAULT_SECTOR_ASSESSMENT.get(cat_key, DEFAULT_SECTOR_ASSESSMENT["management"])
    )

    pr_pathways_text = (
        occ_hub.get("pr_pathways")
        if occ_hub and occ_hub.get("pr_pathways")
        else DEFAULT_SECTOR_PR_PATHWAYS.get(cat_key, DEFAULT_SECTOR_PR_PATHWAYS["management"])
    )

    salary_guide_text = (
        occ_hub.get("salary_guide")
        if occ_hub and occ_hub.get("salary_guide")
        else "TSMIT $73,150 AUD + Super (the minimum salary threshold for sponsored roles)"
    )

    # Format official duties list
    duties_items = "".join([f'<li style="margin-bottom:0.6rem;">{d}</li>' for d in duties_list])

    # Format sector competencies
    comps = SECTOR_COMPETENCIES.get(cat_key, SECTOR_COMPETENCIES["management"])
    comps_items = "".join([
        f'<li style="margin-bottom:0.75rem;"><strong>{c[0]}:</strong> {c[1]}</li>'
        for c in comps
    ])

    # Dynamic role overview paragraph
    # ANZSCO phrase for the role overview: omitted when the occupation is unclassified.
    _anzsco_phrase = f"Positioned under ANZSCO unit group <strong>{occ['anzsco']} ({occ['title']})</strong>, " if occ['anzsco'] else ""
    role_overview_p = (
        f"The appointment of a qualified <strong>{title}</strong> at <strong>{link_company}</strong> represents a key operational role "
        f"within their {city}, {state} operations. {_anzsco_phrase}"
        f"the successful applicant will execute core operational deliverables conforming to Australian workplace standards, "
        f"collaborate with internal and external stakeholders, and uphold mandatory workplace health and safety (WHS) and quality benchmarks. "
        f"Supported by employer nomination under {', '.join(job.get('visa_labels', ['Subclass 482 TSS']))}, this vacancy provides "
        f"a formal, legally compliant migration pathway for suitably credentialed onshore or international candidates."
    )

    # Employer specific description if available and genuine
    raw_desc = job.get("description_raw", "") or job.get("summary", "")
    clean_desc = re.sub(r"<[^>]+>", " ", raw_desc).strip()
    clean_desc = re.sub(r"\s+", " ", clean_desc)
    employer_desc_html = ""
    if clean_desc and len(clean_desc) > 80 and "As a skilled contributor working within" not in clean_desc:
        employer_desc_html = f"""
        <div style="background:#ffffff; border:1px solid var(--color-border-light); border-radius:var(--radius-md); padding:1.25rem 1.5rem; margin:1.25rem 0; line-height:1.7;">
          <h3 style="font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-top:0; margin-bottom:0.5rem;">
            Employer Position Brief & Specific Requirements
          </h3>
          <p style="margin:0; font-size:0.95rem; color:var(--color-text);">{clean_desc}</p>
        </div>
        """

    regional_p = (
        f'<p style="font-size:0.925rem; color:var(--color-text-secondary); margin-top:0.75rem; line-height:1.6;"><em>Regional Sponsoring Concessions:</em> Located in {city}, {state}, this position falls within a designated regional migration zone, granting candidates access to Subclass 494 regional quotas, priority Home Affairs processing, and accelerated 3-year pathways to Subclass 191 Permanent Residency.</p>'
        if is_regional else ""
    )

    # Dynamic qualifications guidance based on authority & sector
    if any(auth_key in occ["authority"] for auth_key in ["ANMAC", "AMC", "MBA", "AHPRA", "OTC", "APC", "SPA", "ADC"]):
        qual_text = f"Recognized Bachelor or Master degree in clinical discipline, plus eligibility for registration with the Medical Board of Australia / AHPRA / {occ['authority']}."
        eng_text = "Proficient / Superior English proficiency (IELTS Academic minimum 7.0 in each component or OET Grade B / PTE Academic 65+), as mandated by Australian healthcare registration boards."
    elif "TRA" in occ["authority"]:
        qual_text = f"Relevant Australian Certificate III / IV, trade diploma, or equivalent international trade qualification assessed positively by {occ['authority']}."
        eng_text = "IELTS minimum 5.0 - 6.0 in each band, PTE Academic 36 - 50+, or holding a passport from an exempt English-speaking country."
    elif "EA" in occ["authority"] or "Engineers Australia" in occ["authority"]:
        qual_text = "Four-year Bachelor of Engineering degree accredited under the Washington Accord or verified via an Engineers Australia Competency Demonstration Report (CDR)."
        eng_text = "IELTS minimum 6.0 overall (minimum 6.0 per component) or PTE Academic 50+, meeting Engineers Australia migration requirements."
    elif "ACS" in occ["authority"]:
        qual_text = "Bachelor degree or higher with an ICT major, or recognized diploma accompanied by verified industry experience."
        eng_text = "Competent English (IELTS 6.0 or PTE 50+) or passport exemption from the UK, USA, Ireland, Canada, or New Zealand."
    else:
        qual_text = f"Relevant tertiary degree, Advanced Diploma, or recognized vocational qualification accredited by {occ['authority']} under Australian Qualifications Framework (AQF) guidelines."
        eng_text = "Competent English proficiency (IELTS minimum 6.0 or PTE Academic 50+) or statutory passport exemption."

    # Section 1 lead: expired jobs must not read as open vacancies (see
    # _is_expired above); active jobs keep the "currently open" wording.
    overview_lead = (
        f'This vacancy for a <strong>{title}</strong> with <strong>{link_company}</strong> in <strong>{city}, {state}, Australia</strong> has now closed. '
        f'The details below describe the role and its visa sponsorship pathways for reference — browse our current openings to find similar live roles.'
        if _is_expired else
        f'An active opportunity for a <strong>{title}</strong> is currently open with <strong>{link_company}</strong> in <strong>{city}, {state}, Australia</strong>.'
    )

    article_html = f"""
    <div class="prose" style="font-size:1.025rem; line-height:1.8; color:var(--color-text);">

      <!-- Section 1: Executive Sponsorship Overview -->
      <div style="background:linear-gradient(135deg, var(--color-primary-subtle), #ffffff); border-left:4px solid var(--color-primary); padding:1.35rem 1.65rem; margin-bottom:2rem; border-radius:0 var(--radius-md) var(--radius-md) 0; box-shadow:var(--shadow-sm);">
        <h2 style="font-size:1.35rem; font-weight:700; color:var(--color-primary); margin-bottom:0.6rem;">Executive Role & Visa Sponsorship Overview</h2>
        <p>
          {overview_lead}
          This role features employer sponsorship eligibility under Australian immigration frameworks ({link_482} / {link_186}), enabling migration pathways for qualified onshore or international professionals seeking to build their career in {link_loc}, explore our {link_occ}, or discover related opportunities in our {link_sector}.
        </p>
      </div>

      <!-- Section 2: Visa Subclasses & Australian Legal Pathways -->
      <h2>1. Australian Visa Sponsorship & Nomination Pathways</h2>
      <p>
        Under the <em>Migration Act 1958 (Australia)</em>, only approved Australian businesses holding Standard Business Sponsorship (SBS) accreditation may sponsor overseas professionals. For this vacancy, supported pathways include:
      </p>
      <ul>
        <li>
          <strong>{link_482}:</strong> Grants an initial 2 to 4-year temporary work authorization. The sponsoring employer ({company}) nominates the applicant. Full unrestricted secondary work and study rights are granted to family members (spouse and dependent children).
        </li>
        <li>
          <strong>{link_186}:</strong> Provides immediate, unconditional Australian Permanent Residency (PR). High-caliber candidates with 3+ years of post-qualification experience may qualify for Direct Entry (DE), or transition via the Temporary Residence Transition (TRT) stream after 2 years with the sponsor.
        </li>
        {"<li><strong>" + link_494 + ":</strong> 5-year provisional regional employer sponsorship providing a fast-track pathway to Subclass 191 Permanent Residency after 3 years living and working in designated regional zones.</li>" if is_regional else ""}
      </ul>

      <!-- Interactive Visa Subclass Comparison Matrix -->
      <div class="visa-comparison-wrapper">
        <table class="visa-comparison-table">
          <thead>
            <tr>
              <th>Visa Pathway</th>
              <th>Direct PR?</th>
              <th>Min. Experience</th>
              <th>Location Scope</th>
              <th>Key Sponsorship Benefit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color:var(--color-primary);">Subclass 482 (TSS)</strong></td>
              <td><span style="color:#059669; font-weight:600;">Yes (TRT after 2 yrs)</span></td>
              <td>2+ Years</td>
              <td>All Australia</td>
              <td>Rapid 1-3 month processing; secondary family work rights</td>
            </tr>
            <tr>
              <td><strong style="color:#7e22ce;">Subclass 186 (ENS)</strong></td>
              <td><span style="color:#059669; font-weight:700;">Immediate Direct PR</span></td>
              <td>3+ Years</td>
              <td>All Australia</td>
              <td>Permanent residency granted on arrival with Medicare access</td>
            </tr>
            <tr>
              <td><strong style="color:#b45309;">Subclass 494 (Regional)</strong></td>
              <td><span style="color:#059669; font-weight:600;">Yes (Subclass 191 PR)</span></td>
              <td>3+ Years</td>
              <td>Designated Regional</td>
              <td>Priority regional processing & DAMA age/salary concessions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 3: Occupation Classification & Skills Assessment -->
      {('<h2>2. ANZSCO Classification & Skills Assessment</h2>' if occ['anzsco'] else '<h2>2. Skills Assessment & PR Pathways</h2>')}
      <p>
        {('This position is mapped against the Australian Bureau of Statistics ANZSCO occupation code:' if occ['anzsco'] else 'This occupation is not mapped to a single ANZSCO code in our directory; skills assessment is arranged through the relevant assessing authority.')}
      </p>
      <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.25rem 1.5rem; margin:1.25rem 0;">
        <ul style="list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; font-size:0.925rem;">
          {('<li><strong>ANZSCO Code:</strong> <span style="color:var(--color-primary); font-weight:700;">' + occ['anzsco'] + '</span></li>') if occ['anzsco'] else ''}
          <li><strong>Occupation Group:</strong> {occ['title']}</li>
          <li><strong>Assessing Authority:</strong> <span style="font-weight:600;">{occ['authority']}</span></li>
          <li><strong>Eligible Skilled List:</strong> {occ['skills_list']}</li>
        </ul>
      </div>

      <div style="background:#f8fafc; border-left:4px solid #0284c7; padding:1.15rem 1.35rem; margin:1.25rem 0; border-radius:0 var(--radius-md) var(--radius-md) 0;">
        <h3 style="font-size:1.05rem; font-weight:700; color:#0369a1; margin-top:0; margin-bottom:0.4rem;">
          Skills Assessment Requirements ({(occ['authority'] if occ['anzsco'] else 'the relevant assessing authority')})
        </h3>
        <p style="font-size:0.925rem; line-height:1.65; margin:0; color:var(--color-text);">
          {assessment_tips_text}
        </p>
      </div>

      <p style="font-size:0.95rem; margin-top:0.75rem; margin-bottom:0.5rem;">
        <strong>Australian PR Pathways:</strong> {pr_pathways_text}
      </p>

      <p style="font-size:0.95rem; margin-top:0.5rem;">
        Explore all current vacancies, salary benchmarks, and PR requirements in our dedicated {link_occ} &rarr;
      </p>

      <!-- Section 4: Role Description & Scope -->
      <h2>3. Position Responsibilities & Commercial Scope</h2>
      <p>{role_overview_p}</p>

      <div style="background:#ffffff; border:1px solid var(--color-border-light); border-radius:var(--radius-md); padding:1.35rem 1.5rem; margin:1.25rem 0; box-shadow:var(--shadow-sm);">
        <h3 style="font-size:1.1rem; font-weight:700; color:var(--color-primary); margin-top:0; margin-bottom:0.6rem;">
          {('ANZSCO ' + occ['anzsco'] + ' Core Duties & Operating Standards') if occ['anzsco'] else 'Core Duties & Operating Standards'}
        </h3>
        <p style="font-size:0.925rem; color:var(--color-text-secondary); margin-bottom:0.75rem;">
          In accordance with the Australian Bureau of Statistics (ABS) occupational taxonomy for <strong>{occ['title']}</strong>, day-to-day responsibilities in this role encompass:
        </p>
        <ul style="padding-left:1.25rem; line-height:1.7; font-size:0.95rem; margin-bottom:0;">
          {duties_items}
        </ul>
      </div>

      {employer_desc_html}

      <div style="background:var(--color-bg); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.35rem 1.5rem; margin:1.25rem 0;">
        <h3 style="font-size:1.1rem; font-weight:700; color:var(--color-primary); margin-top:0; margin-bottom:0.6rem;">
          Industry Frameworks & Technical Competencies
        </h3>
        <p style="font-size:0.925rem; color:var(--color-text-secondary); margin-bottom:0.75rem;">
          To ensure strict alignment with Australian regulatory and commercial requirements, the candidate will operate within the following framework:
        </p>
        <ul style="padding-left:1.25rem; line-height:1.7; font-size:0.95rem; margin-bottom:0;">
          {comps_items}
        </ul>
      </div>

      <!-- Section 5: Remuneration & TSMIT Compliance -->
      <h2>4. Remuneration & Australian Fair Work Standards</h2>
      <p>
        All Standard Business Sponsors in Australia must guarantee that employee remuneration satisfies the <strong>Temporary Skilled Migration Income Threshold (TSMIT - $73,150+ AUD)</strong> and complies with the Annual Market Salary Rate (AMSR):
      </p>
      
      <!-- Interactive TSMIT Remuneration & Compliance Assessment Box -->
      <div class="tsmit-box">
        <div class="tsmit-header">
          <span style="font-weight:700; color:var(--color-primary); font-size:1.05rem;">
            &#10004; TSMIT Remuneration & Migration Compliance Assessment
          </span>
          <span class="tsmit-badge-pass">TSMIT baseline: $73,150 AUD</span>
        </div>
        <p style="font-size:0.9rem; color:var(--color-text-secondary); margin-bottom:0.75rem;">
          The Australian Department of Home Affairs mandates that all employer-sponsored overseas workers earn at or above the statutory <strong>TSMIT ($73,150 AUD)</strong> baseline:
        </p>
        <div class="tsmit-grid">
          <div class="tsmit-col">
            <span class="label">Offered Base Salary</span>
            {('<span class="value">' + sal_display + '</span>') if sal_display else '<span class="value">Not specified in the listing</span>'}
          </div>
          <div class="tsmit-col">
            <span class="label">TSMIT Legal Floor</span>
            <span class="value">$73,150 AUD</span>
          </div>
          <div class="tsmit-col">
            <span class="label">Statutory Super (11.5%)</span>
            {('<span class="value">+' + format(est_super, ',') + ' AUD</span>') if est_super is not None else '<span class="value">—</span>'}
          </div>
          <div class="tsmit-col">
            <span class="label">Est. Total Package</span>
            {('<span class="value">$' + format(total_package, ',') + '+ AUD</span>') if total_package is not None else '<span class="value">—</span>'}
          </div>
        </div>
      </div>

      <ul>
        {('<li><strong>Offered Salary:</strong> ' + sal_display + '</li>') if sal_display else '<li><strong>Offered Salary:</strong> Not specified in the listing.</li>'}
        <li><strong>Superannuation:</strong> In accordance with Australian statutory requirements, an additional 11.5% - 12% employer superannuation fund contribution is paid over and above base earnings into an approved complying fund.</li>
        <li><strong>Industry Benchmark:</strong> {salary_guide_text}</li>
      </ul>
      {regional_p}

      <!-- Section 6: Candidate Eligibility Checklist -->
      <h2>5. Candidate Requirements & Eligibility Checklist</h2>
      <ul>
        <li><strong>Professional Experience:</strong> Minimum 2 to 3 years of documented full-time commercial experience {('closely aligned with ANZSCO ' + occ['anzsco'] + ' (' + occ['title'] + ').') if occ['anzsco'] else 'closely aligned with this occupation.'}</li>
        <li><strong>Formal Qualifications:</strong> {qual_text}</li>
        <li><strong>Skills Assessment Outcome:</strong> Positive migration outcome letter or registration eligibility with {occ['authority']}.</li>
        <li><strong>English Language Proficiency:</strong> {eng_text}</li>
        <li><strong>Health & Character Clearances:</strong> Capacity to supply clean National Police Certificates and satisfy Department of Home Affairs medical examinations.</li>
      </ul>

    </div>
    """

    canonical_url = f"{SITE_DOMAIN}/jobs/{job.get('slug')}.html"

    now_utc = datetime.now(timezone.utc)
    is_expired = (job.get("status") == "expired")
    if not is_expired and job.get("expiry_date"):
        try:
            exp_dt = datetime.fromisoformat(job["expiry_date"])
            if exp_dt.tzinfo is None:
                exp_dt = exp_dt.replace(tzinfo=timezone.utc)
            if exp_dt < now_utc:
                is_expired = True
        except Exception:
            pass

    expiry_dt_str = job.get("expiry_date")
    if is_expired:
        if not expiry_dt_str:
            expiry_dt_str = (now_utc - timedelta(days=1)).isoformat()
        else:
            try:
                exp_dt = datetime.fromisoformat(expiry_dt_str)
                if exp_dt.tzinfo is None:
                    exp_dt = exp_dt.replace(tzinfo=timezone.utc)
                if exp_dt >= now_utc:
                    expiry_dt_str = (now_utc - timedelta(days=1)).isoformat()
            except Exception:
                expiry_dt_str = (now_utc - timedelta(days=1)).isoformat()

    # Schema 1: JobPosting Schema (Google for Jobs)
    # NOTE: no street address or postal code is emitted — the generator has no
    # real address data, and fabricating one would be false structured data.
    # Job location is city/state/country only.

    duties_summary_for_schema = " ".join(duties_list[:3])
    schema_job_description = f"""<p><strong>{title}</strong> with employer visa sponsorship at <strong>{company}</strong> in <strong>{city}, {state}, Australia</strong>.</p>
<p><strong>Australian Visa Pathways:</strong> Supported under {', '.join(job.get('visa_labels', ['Subclass 482 TSS', 'Subclass 186 ENS']))}. Eligible for accredited employer nomination and permanent residency transition.</p>
<p><strong>ANZSCO Classification:</strong> {('ANZSCO ' + occ['anzsco'] + ' - ' + occ['title'] + ' (Assessing Authority: ' + occ['authority'] + ').') if occ['anzsco'] else 'Occupation not classified under ANZSCO.'}</p>
<p><strong>Core Responsibilities:</strong> {duties_summary_for_schema}</p>
<p><strong>Remuneration:</strong> {('Offered salary ' + sal_display + ' (compliant with the TSMIT $73,150+ AUD statutory minimum plus statutory superannuation).') if sal_display else 'Salary not specified in the listing; the role must meet the TSMIT $73,150+ AUD statutory minimum.'}</p>
<p><strong>Candidate Requirements:</strong> {qual_text} {eng_text}</p>"""

    job_schema = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": title,
        "description": schema_job_description,
        "identifier": {
            "@type": "PropertyValue",
            "name": company,
            "value": str(job.get("id"))
        },
        "datePosted": job.get("posted_date"),
        "validThrough": expiry_dt_str,
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": company,

            "logo": f"{SITE_DOMAIN}/assets/logo.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",

                "addressLocality": city,
                "addressRegion": state,

                "addressCountry": "AU"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "AUD",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": job.get("salary_min"),
                "maxValue": job.get("salary_max") or job.get("salary_min"),
                "unitText": "YEAR"
            }
        },
        "occupationalCategory": occ["anzsco"],
        "directApply": not is_expired
    }

    # Schema 2: Article Schema (Google Search Index)
    # Omit schema fields we cannot truthfully fill — never emit null/false values.
    if not job.get("posted_date"):
        job_schema.pop("datePosted", None)
    if not job.get("salary_min"):
        job_schema.pop("baseSalary", None)
    if not occ["anzsco"]:
        job_schema.pop("occupationalCategory", None)
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": f"{title} (Visa Sponsorship AU) | {company} in {city}, {state}",
        "description": f"Australian visa sponsorship ({', '.join(job.get('visa_labels', ['Subclass 482']))}) guide for {title} at {company} ({city}, {state}). Official application details.",
        "author": {
            "@type": "Organization",
            "name": "OZ Sponsor Jobs Intelligence & Migration Research",
            "url": f"{SITE_DOMAIN}/about.html"
        },
        "publisher": {
            "@type": "Organization",
            "name": "OZ Sponsor Jobs",
            "logo": {
                "@type": "ImageObject",
                "url": f"{SITE_DOMAIN}/assets/logo.png"
            }
        },
        "datePublished": job.get("posted_date"),
        "dateModified": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "mainEntityOfPage": canonical_url
    }

    if not job.get("posted_date"):
        article_schema.pop("datePublished", None)

    return article_html, job_schema, article_schema


def render_job_page_html(job: dict, slug: str, related_jobs: list[tuple[dict, str]] = None, fresh_jobs: list[tuple[dict, str]] = None) -> str:
    """
    Renders an individual programmatic job page with Dual Schema.org JSON-LD
    and dense interlinking with related jobs and directory hubs.
    Fully compliant with Google Search Central guidelines for active and expired jobs.
    """
    now_utc = datetime.now(timezone.utc)
    is_expired = (job.get("status") == "expired")
    if not is_expired and job.get("expiry_date"):
        try:
            exp_dt = datetime.fromisoformat(job["expiry_date"])
            if exp_dt.tzinfo is None:
                exp_dt = exp_dt.replace(tzinfo=timezone.utc)
            if exp_dt < now_utc:
                is_expired = True
        except Exception:
            pass

    canonical_url = f"{SITE_DOMAIN}/jobs/{slug}.html"
    title_seo = f"{job['title']} (Visa Sponsorship AU) | {job['company']} | OZ Sponsor Jobs"
    meta_desc = (
        f"Apply for {job['title']} in {job['city']}, {job['state']}, Australia at {job['company']}. "
        f"Australian visa sponsorship ({', '.join(job.get('visa_labels', ['Subclass 482']))}) "
        f"for qualified international candidates."
    )

    # Calculate safe location breadcrumb URL
    loc_hub_slug = f"{slugify(job.get('city', ''))}-{slugify(job.get('state', ''))}-visa-sponsorship-jobs"
    if any(h['slug'] == loc_hub_slug for h in LOCATION_HUBS):
        location_breadcrumb_url = f"../locations/{loc_hub_slug}.html"
    else:
        location_breadcrumb_url = "../"

    # Safe External Apply URL resolution (Guaranteed NEVER contact.html)
    target_apply_url = build_external_apply_url(job)

    # Build rich article content and dual schemas
    job_with_slug = dict(job)
    job_with_slug["slug"] = slug
    article_html, job_schema, article_schema = build_rich_article_content(job_with_slug, location_breadcrumb_url)
    occ = classify_job_anzsco(job.get("title", ""), job.get("description_raw", ""))
    if occ is None:
        occ = {"anzsco": None, "title": "Skilled Professional", "sector": "management",
               "authority": "Relevant assessing authority", "skills_list": "Skilled Occupation List"}


    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": f"{SITE_DOMAIN}/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Jobs",
                "item": f"{SITE_DOMAIN}/#jobs-feed-section"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": f"{job['city']}, {job['state']}",
                "item": f"{SITE_DOMAIN}/{location_breadcrumb_url.replace('../', '')}"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": job["title"],
                "item": canonical_url
            }
        ]
    }

    visa_badges_html = "".join([
        f'<span class="info-pill badge-482" style="font-weight:700;">{lbl}</span>'
        if "482" in lbl else
        f'<span class="info-pill badge-186" style="font-weight:700;">{lbl}</span>'
        if "186" in lbl else
        f'<span class="info-pill badge-494" style="font-weight:700;">{lbl}</span>'
        for lbl in job.get("visa_labels", [])
    ])

    adsense_header_script = f'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADSENSE_CLIENT_ID}" crossorigin="anonymous"></script>' if ADSENSE_CLIENT_ID else ''

    company_raw = job.get("company", "")
    co_slug = re.sub(r'[^a-zA-Z0-9\s-]', '', company_raw).strip().lower()
    co_slug = re.sub(r'[\s-]+', '-', co_slug) or "australian-sponsor"
    company_profile_url = f"../sponsors/{co_slug}-visa-sponsorship-jobs.html"

    # Google-compliant Robots Meta
    robots_meta = '<meta name="robots" content="noindex, follow">' if is_expired else '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">'

    # Status Badge
    if is_expired:
        status_badge_html = '<span class="info-pill" style="background:#fee2e2; color:#991b1b; font-weight:700; border:1px solid #fca5a5;">Applications Closed / Expired</span>'
    else:
        status_badge_html = '''<span class="verified-badge">
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" style="width:14px;height:14px;">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Visa Sponsorship Listed
              </span>'''

    # Sponsorship Callout vs Expired Notice Banner
    if is_expired:
        sponsorship_callout_html = f"""
          <!-- Expired Job Notice (Google Search Central Compliant) -->
          <div class="expired-job-banner" style="background:#fffbeb; border:1px solid #fde68a; border-left:4px solid #f59e0b; border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">
            <div style="display:flex; align-items:flex-start; gap:0.85rem;">
              <svg style="width:26px;height:26px;color:#d97706;flex-shrink:0;margin-top:2px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <div>
                <h2 style="font-size:1.2rem; font-weight:700; color:#92400e; margin-bottom:0.4rem;">
                  Notice: This Australian Visa Sponsorship Position Has Expired
                </h2>
                <p style="font-size:0.95rem; color:#78350f; margin-bottom:0.85rem; line-height:1.55;">
                  The recruitment and nomination window for <strong>{job['title']}</strong> at <strong>{job['company']}</strong> in {job['city']}, {job['state']} has closed, or the position has been filled. Applications are no longer being accepted for this specific listing.
                </p>
                <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                  <a href="../#jobs-feed-section" class="btn btn-primary btn-sm">
                    Explore Active Visa Sponsorship Vacancies &rarr;
                  </a>
                  <span style="font-size:0.85rem; color:#b45309;">
                    Closed: <strong>{job.get('expiry_date', '')[:10]}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        """
    else:
        sponsorship_callout_html = f"""
          <!-- Visa Sponsorship Callout Card -->
          <div style="background:linear-gradient(135deg, var(--color-primary-subtle), #ffffff); border:1px solid #bfdbfe; border-radius:var(--radius-md); padding:1.5rem; margin-bottom:2rem;">
            <h2 style="font-size:1.15rem; font-weight:700; color:var(--color-primary); margin-bottom:0.6rem; display:flex; align-items:center; gap:0.5rem;">
              <svg style="width:20px;height:20px;color:var(--color-accent);" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Australian Visa Sponsorship
            </h2>
            <p style="font-size:0.925rem; color:var(--color-text-secondary); margin-bottom:0.75rem; line-height:1.55;">
              This listing offers nomination under 
              <strong>{', '.join(job.get('visa_labels', ['Subclass 482']))}</strong>. Eligible overseas and onshore applicants with relevant skills credentials may apply.
            </p>
            <div style="font-size:0.85rem; color:var(--color-text-muted);">
              <span>Application Deadline: <strong>{job.get('expiry_date', '')[:10]}</strong></span> &bull; 
              <span>ANZSCO Occupation Group: {('<strong>' + (job.get('anzsco') or occ['anzsco']) + '</strong>') if (job.get('anzsco') or occ['anzsco']) else '<strong>Not classified</strong>'}</span>
            </div>
          </div>
        """

    # Apply Actions Footer: Disabled button if expired, Active link if open
    if is_expired:
        apply_actions_html = f"""
          <div style="border-top:1px solid var(--color-border); padding-top:2rem; margin-top:1.5rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1.25rem;">
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.75rem;">
              <button type="button" disabled class="btn" style="background:#e2e8f0; color:#64748b; border:1px solid #cbd5e1; cursor:not-allowed; padding:0.85rem 1.75rem; font-size:1rem; font-weight:600;">
                Applications Closed / Expired
              </button>
              <a href="../#jobs-feed-section" class="btn btn-primary" style="padding:0.85rem 1.75rem; font-size:1rem;">
                Browse Active Opportunities &rarr;
              </a>
            </div>

            <div style="display:flex; gap:0.75rem;">
              <a href="../" class="btn btn-outline btn-sm">&larr; Back to Job Search</a>
              <button type="button" class="btn btn-outline btn-sm" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!');">Share Job</button>
            </div>
          </div>
        """
    else:
        # Determine source transparency & partner attribution
        if "jooble.org" in target_apply_url.lower():
            partner_badge = "Partner listing (Jooble)"
            btn_text = "Apply via Partner Listing &rarr;"
        elif "adzuna.com" in target_apply_url.lower():
            partner_badge = "Partner listing (Adzuna)"
            btn_text = "Apply via Partner Listing &rarr;"
        else:
            partner_badge = "External job listing"
            btn_text = "Apply on Employer Site &rarr;"

        company_clean = job.get('company', 'Sponsor').replace('"', '').strip()
        title_clean = clean_job_title(job.get('title', 'Role')).replace('"', '').strip()
        company_search_query = urllib.parse.quote(f"{company_clean} Australia official careers {title_clean}")
        company_search_url = f"https://www.google.com/search?q={company_search_query}"

        apply_actions_html = f"""
          <!-- High-Value Migration Consultation & Resume Readiness Callout -->
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-left:4px solid var(--color-accent); border-radius:var(--radius-md); padding:1.25rem 1.5rem; margin:2rem 0 1.5rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
              <div>
                <h4 style="font-size:1.05rem; font-weight:700; color:var(--color-primary); margin-bottom:0.25rem;">
                  Applying for Australian Visa Sponsorship?
                </h4>
                <p style="font-size:0.875rem; color:var(--color-text-secondary); margin:0;">
                  {('Ensure your resume aligns strictly with official ANZSCO ' + occ['anzsco'] + ' criteria and Australian Fair Work standards to pass automated ATS screening.') if occ['anzsco'] else 'Ensure your resume aligns with Australian Fair Work standards and the occupation requirements to pass automated ATS screening.'}
                </p>
              </div>
              <a href="../visas/subclass-482-tss-jobs.html" class="btn btn-outline btn-sm" style="font-weight:600;">
                Review Visa Criteria &rarr;
              </a>
            </div>
          </div>

          <div style="border-top:1px solid var(--color-border); padding-top:1.75rem; margin-top:1rem;">
            <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem;">
              <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.75rem;">
                <a href="{target_apply_url}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="padding:0.85rem 1.75rem; font-size:1rem; font-weight:700;">
                  {btn_text}
                </a>
                <a href="{company_search_url}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-outline" style="padding:0.85rem 1.4rem; font-size:0.925rem; font-weight:600;">
                  Search {company_clean} Careers Portal &#8599;
                </a>
              </div>

              <div style="display:flex; gap:0.75rem;">
                <a href="../" class="btn btn-outline btn-sm">&larr; Back to Job Search</a>
                <button type="button" class="btn btn-outline btn-sm" onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!');">Share Job</button>
              </div>
            </div>

            <!-- Transparency & Sourcing Disclosure -->
            <div style="margin-top:1rem; padding:0.75rem 1rem; background:var(--color-bg); border-radius:var(--radius-sm); font-size:0.825rem; color:var(--color-text-muted); line-height:1.5;">
              <strong>Application Transparency:</strong> Sourced via {partner_badge}. International applicants can apply through the partner listing above or explore direct corporate recruitment channels via the employer search portal.
            </div>
          </div>
        """

    # Render Related Jobs Section (Strong Internal Linking)
    related_cards_markup = ""
    if related_jobs:
        related_cards = []
        for r_job, r_slug in related_jobs[:3]:
            r_visas = "".join([f'<span class="info-pill badge-482" style="font-size:0.75rem;">{v}</span>' for v in r_job.get("visa_labels", [])[:2]])
            related_cards.append(f"""
            <div style="background:#ffffff; border:1px solid var(--color-border); border-radius:var(--radius-md); padding:1.25rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:var(--shadow-sm);">
              <div>
                <div style="margin-bottom:0.5rem;">{r_visas}</div>
                <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.35rem;">
                  <a href="{r_slug}.html" style="color:var(--color-primary);">{r_job['title']}</a>
                </h4>
                <div style="font-size:0.85rem; color:var(--color-text-secondary); margin-bottom:0.75rem;">
                  <strong>{r_job['company']}</strong> &bull; {r_job['city']}, {r_job['state']}
                </div>
              </div>
              <a href="{r_slug}.html" class="btn btn-outline btn-sm" style="align-self:flex-start; font-size:0.825rem;">View Role & PR Pathway &rarr;</a>
            </div>
            """)
        related_cards_markup = f"""
        <!-- Related Australian Visa Sponsorship Vacancies (Strong Internal Linking) -->
        <div style="border-top:1px solid var(--color-border); padding-top:2.25rem; margin-top:2.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <h3 style="font-size:1.35rem; font-weight:700; color:var(--color-primary); margin-bottom:0.25rem;">
                Related Australian Visa Sponsorship Vacancies
              </h3>
              <p style="font-size:0.9rem; color:var(--color-text-secondary); margin:0;">
                Australian employers actively recruiting qualified international candidates:
              </p>
            </div>
            <a href="../#jobs-feed-section" style="font-size:0.875rem; font-weight:600; color:var(--color-primary); text-decoration:underline;">Browse All Jobs &rarr;</a>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.25rem;">
            {"".join(related_cards)}
          </div>
        </div>
        """

    # Render Fresh Jobs Section (Fast Indexing & Discovery Network)
    fresh_cards_markup = ""
    if fresh_jobs:
        f_cards = []
        for f_job, f_slug in fresh_jobs[:4]:
            f_visas = "".join([f'<span class="info-pill badge-482" style="font-size:0.75rem;">{v}</span>' for v in f_job.get("visa_labels", [])[:2]])
            f_cards.append(f"""
            <div style="background:#ffffff; border:1px solid rgba(239, 68, 68, 0.25); border-radius:var(--radius-md); padding:1rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:var(--shadow-sm);">
              <div>
                <div style="margin-bottom:0.4rem; display:flex; justify-content:space-between; align-items:center;">
                  <div>{f_visas}</div>
                  <span style="font-size:0.7rem; color:#b91c1c; font-weight:700;">NEW TODAY</span>
                </div>
                <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.25rem; line-height:1.3;">
                  <a href="{f_slug}.html" style="color:var(--color-primary);">{f_job['title']}</a>
                </h4>
                <div style="font-size:0.8rem; color:var(--color-text-secondary); margin-bottom:0.5rem;">
                  <strong>{f_job['company']}</strong> &bull; {f_job['city']}, {f_job['state']}
                </div>
              </div>
              <a href="{f_slug}.html" class="btn btn-outline btn-sm" style="align-self:flex-start; font-size:0.75rem; padding:0.35rem 0.65rem;">View Vacancy &rarr;</a>
            </div>
            """)
        fresh_cards_markup = f"""
        <!-- Fresh Australian Visa Sponsorship Vacancies Added Today (Fast Discovery & Indexing Network) -->
        <div style="background:linear-gradient(135deg, rgba(239, 68, 68, 0.04) 0%, rgba(249, 115, 22, 0.04) 100%); border:1px solid rgba(239, 68, 68, 0.2); border-radius:var(--radius-md); padding:1.5rem; margin-top:2rem;">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.2rem;">
                <span style="font-size:1.1rem;">🔥</span>
                <h3 style="font-size:1.15rem; font-weight:800; color:#b91c1c; margin:0;">
                  Recently Added Visa Sponsorship Jobs
                </h3>
              </div>
              <p style="font-size:0.85rem; color:var(--color-text-secondary); margin:0;">
                Latest Australian employer visa sponsorship opportunities added to the directory:
              </p>
            </div>
            <a href="../#jobs-feed-section" style="font-size:0.825rem; font-weight:600; color:#b91c1c; text-decoration:underline;">View Live Feed &rarr;</a>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem;">
            {"".join(f_cards)}
          </div>
        </div>
        """

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>{title_seo}</title>
  <meta name="title" content="{title_seo}">
  <meta name="description" content="{meta_desc}">
  {robots_meta}
  
  <!-- Absolute Canonical URL -->
  <link rel="canonical" href="{canonical_url}">

  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">
  <link rel="alternate icon" href="../favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="../assets/apple-touch-icon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="{canonical_url}">
  <meta property="og:title" content="{title_seo}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{canonical_url}">
  <meta property="twitter:title" content="{title_seo}">
  <meta property="twitter:description" content="{meta_desc}">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  {adsense_header_script}

  <!-- CRITICAL SEO: Dual Schema.org JSON-LD (JobPosting + Article + Breadcrumbs) -->
  <script type="application/ld+json">
{json.dumps(job_schema, indent=2)}
  </script>
  <script type="application/ld+json">
{json.dumps(article_schema, indent=2)}
  </script>
  <script type="application/ld+json">
{json.dumps(breadcrumb_schema, indent=2)}
  </script>

{GA_TAG_SCRIPT}
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

  <!-- Breadcrumbs Bar -->
  <div style="background:#ffffff; border-bottom:1px solid var(--color-border); padding:0.75rem 0; font-size:0.85rem;">
    <div class="container" style="display:flex; align-items:center; gap:0.5rem; color:var(--color-text-muted); flex-wrap:wrap;">
      <a href="../" style="color:var(--color-primary);">Home</a>
      <span>&rsaquo;</span>
      <a href="../#jobs-feed-section" style="color:var(--color-primary);">Jobs</a>
      <span>&rsaquo;</span>
      <a href="{location_breadcrumb_url}" style="color:var(--color-primary);">{job['city']}, {job['state']}</a>
      <span>&rsaquo;</span>
      <span style="color:var(--color-text); font-weight:600;">{job['title']}</span>
    </div>
  </div>

  <!-- AdSense slot: renders a real unit only when ADSENSE_CLIENT_ID + ADSENSE_SLOT_LEADERBOARD are set; otherwise nothing -->
  <div class="container" style="margin-top:1.5rem;">
    <div class="ad-slot-wrapper" style="margin:0;">

      <div class="ad-slot">
        {adsense_unit_html('ADSENSE_SLOT_LEADERBOARD')}

      </div>
    </div>
  </div>

  <!-- Main Job Content Layout -->
  <main class="main-layout" style="padding-top:1.75rem;">
    <div class="container layout-grid">

      <!-- Job Details Article Column -->
      <article class="feed-column">
        
        <div class="content-card" style="padding:2.25rem; margin:0;">
          
          <!-- Job Header -->
          <div style="border-bottom:1px solid var(--color-border-light); padding-bottom:1.5rem; margin-bottom:1.75rem;">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.75rem; flex-wrap:wrap;">
              {visa_badges_html}
              {('<span class="info-pill badge-salary">' + job.get('salary_display') + '</span>') if job.get('salary_display') else ''}
            </div>

            <h1 style="font-size:2.1rem; font-weight:800; color:var(--color-primary); line-height:1.2; margin-bottom:0.65rem;">
              {job['title']}
            </h1>

            <div style="display:flex; align-items:center; flex-wrap:wrap; gap:1rem; font-size:0.95rem; color:var(--color-text-secondary);">
              <span><strong>{job['company']}</strong></span>
              <span>&bull;</span>
              <span>{job['city']}, {job['state']}, Australia</span>
              <span>&bull;</span>
              {('<span>ANZSCO: <strong>' + (job.get('anzsco') or occ['anzsco']) + '</strong></span>') if (job.get('anzsco') or occ['anzsco']) else '<span>ANZSCO: <strong>Not classified</strong></span>'}
              {('<span>&bull;</span><span>Posted ' + (job.get('posted_date') or '')[:10] + '</span>') if job.get('posted_date') else '<span>&bull;</span><span>Posted date not listed</span>'}
              
              {status_badge_html}
            </div>
          </div>

          {sponsorship_callout_html}

          <!-- Body Description & High E-E-A-T Article -->
          {article_html}

          <!-- AdSense slot: renders a real unit only when ADSENSE_CLIENT_ID + ADSENSE_SLOT_IN_FEED are set; otherwise nothing -->
          <div class="ad-slot-wrapper" style="margin:2.5rem 0 1.5rem;">

            <div class="ad-slot">
              {adsense_unit_html('ADSENSE_SLOT_IN_FEED')}

            </div>
          </div>

          {apply_actions_html}

          {related_cards_markup}

          {fresh_cards_markup}

          <!-- Regulatory Disclaimer -->
          <div class="disclaimer-callout" style="margin-top:2.5rem; margin-bottom:0;">
            <p>
              <strong>Migration Regulatory Disclaimer:</strong> OZ Sponsor Jobs is an independent job aggregator and intelligence platform. We are not a migration agency or law firm registered with OMARA. Employer sponsorship and visa grants remain subject to the sole discretion of sponsoring employers and the Australian Department of Home Affairs under the <em>Migration Act 1958</em>.
            </p>
          </div>

        </div>
      </article>

      <!-- Sidebar Column -->
      <aside class="sidebar">

        <div class="widget">
          <h3 class="widget-title">Sponsorship Summary</h3>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.85rem; font-size:0.9rem;">
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Sponsoring Employer:</span>
              <strong><a href="{company_profile_url}" style="color:var(--color-primary); font-weight:700; text-decoration:underline;">{job['company']}</a></strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Work Location:</span>
              <strong>{job['city']}, {job['state']}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Visa Subclasses:</span>
              <strong>{', '.join(job.get('visas', ['482']))}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">ANZSCO Code:</span>
              <strong>{job.get('anzsco', occ['anzsco'])}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">Assessing Body:</span>
              <strong>{occ['authority']}</strong>
            </li>
            <li style="display:flex; justify-content:space-between; border-bottom:1px solid var(--color-border-light); padding-bottom:0.5rem;">
              <span style="color:var(--color-text-muted);">PR Transition:</span>
              <strong style="color:var(--color-accent);">Direct / 2-Year TRT</strong>
            </li>
          </ul>
        </div>

        <!-- Eligibility Calculator Interactive Widget -->
        <div class="widget" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1px solid #bfdbfe; border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
            <span style="font-size:1.35rem;">🎯</span>
            <h3 style="font-size:1.05rem; font-weight:800; color:var(--color-primary); margin:0;">Check Sponsorship Eligibility</h3>
          </div>
          <p style="font-size:0.85rem; color:#334155; line-height:1.45; margin-bottom:0.85rem;">
            Wondering if you qualify for Subclass 482 TSS or 186 ENS? Check your occupation, salary threshold ($73,150 TSMIT), and visa eligibility in under 2 minutes.
          </p>
          <a href="../calculator/" class="btn btn-primary" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; width:100%; font-size:0.875rem; font-weight:700; padding:0.65rem 1rem; text-decoration:none; box-shadow:0 2px 4px rgba(0,0,0,0.08); border-radius:var(--radius-md);">
            <span>Launch Eligibility Quiz</span>
            <span>&rarr;</span>
          </a>
        </div>

        <div class="widget">
          <h3 class="widget-title">Visa Pathway Guides</h3>
          <ul class="visa-guide-list">
            <li class="visa-guide-item subclass-482">
              <a href="../visas/subclass-482-tss-jobs.html" style="font-weight:700; color:var(--color-primary);">Subclass 482 (TSS Visa) &rarr;</a>
              <p class="visa-guide-desc">2-4 year work visa with clear pathway to Australian Permanent Residency.</p>
            </li>
            <li class="visa-guide-item subclass-186">
              <a href="../visas/subclass-186-ens-jobs.html" style="font-weight:700; color:var(--color-primary);">Subclass 186 (ENS Direct PR) &rarr;</a>
              <p class="visa-guide-desc">Immediate permanent residency sponsored by an Australian employer.</p>
            </li>
            <li class="visa-guide-item subclass-494">
              <a href="../visas/subclass-494-regional-jobs.html" style="font-weight:700; color:var(--color-primary);">Subclass 494 (Regional Visa) &rarr;</a>
              <p class="visa-guide-desc">5-year regional sponsorship leading to Subclass 191 PR.</p>
            </li>
          </ul>
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
            <li><a href="../visas/subclass-494-regional-jobs.html">DAMA Regional Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Shortage Sectors</h4>
          <ul class="footer-links">
            <li><a href="../sectors/it-software-engineering-visa-sponsorship-jobs.html">IT & Software Engineering</a></li>
            <li><a href="../sectors/healthcare-nursing-medical-visa-sponsorship-jobs.html">Healthcare & Nursing</a></li>
            <li><a href="../sectors/engineering-mining-construction-visa-sponsorship-jobs.html">Engineering & Mining</a></li>
            <li><a href="../sectors/hospitality-chefs-tourism-visa-sponsorship-jobs.html">Hospitality & Culinary</a></li>
            <li><a href="../sectors/skilled-trades-technicians-visa-sponsorship-jobs.html">Skilled Trades</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Platform & Legal</h4>
          <ul class="footer-links">
            <li><a href="../calculator/">Eligibility Calculator</a></li>
            <li><a href="../occupations/">Occupations Directory</a></li>
            <li><a href="../faq/">Sponsorship FAQ (2026)</a></li>
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
          Hosted on GitHub Pages &bull; Fast, static & secure
        </div>
      </div>
    </div>
  </footer>

  <script src="../js/app.js"></script>
</body>
</html>
"""


def render_hub_page_html(hub: dict, matching_jobs: list[tuple[dict, str]], hub_type: str) -> str:
    canonical_url = f"{SITE_DOMAIN}/{hub_type}/{hub['slug']}.html"
    title_seo = f"{hub['title']} | OZ Sponsor Jobs"
    meta_desc = hub["meta_desc"]

    item_elements = []
    for idx, (job, slug) in enumerate(matching_jobs[:10]):
        item_elements.append({
            "@type": "ListItem",
            "position": idx + 1,
            "url": f"{SITE_DOMAIN}/jobs/{slug}.html",
            "name": job["title"]
        })

    collection_schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": hub["heading"],
        "description": meta_desc,
        "url": canonical_url,
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": item_elements
        }
    }

    if hub_type == "visas":
        parent_name = "Visa Programs"
        parent_url = f"{SITE_DOMAIN}/#jobs-feed-section"
    elif hub_type == "sectors":
        parent_name = "Industry Sectors"
        parent_url = f"{SITE_DOMAIN}/#jobs-feed-section"
    elif hub_type == "occupations":
        parent_name = "In-Demand Occupations"
        parent_url = f"{SITE_DOMAIN}/occupations/"
    else:
        parent_name = "Locations"
        parent_url = f"{SITE_DOMAIN}/#jobs-feed-section"

    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": f"{SITE_DOMAIN}/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": parent_name,
                "item": parent_url
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": hub["heading"],
                "item": canonical_url
            }
        ]
    }

    job_cards_html = []
    for job, slug in matching_jobs:
        visa_badges = "".join([
            f'<span class="info-pill badge-482">{v}</span>' if "482" in v else
            f'<span class="info-pill badge-186">{v}</span>' if "186" in v else
            f'<span class="info-pill badge-494">{v}</span>'
            for v in job.get("visa_labels", [])
        ])

        job_cards_html.append(f"""
          <article class="job-card" data-id="{job['id']}">
            <div class="job-card-top">
              <div class="company-logo" aria-hidden="true">{job['company'][0]}</div>
              <div class="job-meta-main">
                <div class="job-title-row">
                  <h3 class="job-title"><a href="../jobs/{slug}.html">{job['title']}</a></h3>
                </div>
                <div class="company-details">
                  <span><strong>{job['company']}</strong></span>
                  <span>&bull;</span>
                  <span>{job['city']}, {job['state']}</span>
                  <span class="verified-badge">
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" style="width:14px;height:14px;">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    Visa Sponsorship
                  </span>
                </div>
              </div>
            </div>
            <div class="job-info-pills">
              {visa_badges}
              {('<span class="info-pill badge-salary">' + job.get('salary_display') + '</span>') if job.get('salary_display') else ''}
              {('<span class="info-pill">ANZSCO: ' + job.get('anzsco') + '</span>') if job.get('anzsco') else ''}
              <span class="info-pill">{job.get('type', 'Full-time')}</span>
            </div>
            <p class="job-snippet">{job.get('summary', '')}</p>
            <div class="job-card-bottom">
              <div class="posted-date">
                <span>{('Posted ' + (job.get('posted_date') or '')[:10]) if job.get('posted_date') else 'Posted date not listed'}</span>
              </div>
              <div class="card-actions">
                <a href="../jobs/{slug}.html" class="btn btn-primary btn-sm">View Role & PR Pathway &rarr;</a>
              </div>
            </div>
          </article>
        """)

    job_cards_rendered = "\n".join(job_cards_html) if job_cards_html else '<p style="color:var(--color-text-muted); font-size:1.1rem; padding:2rem 0;">No active vacancies currently open in this category. Check back shortly!</p>'

    other_hubs_links = []
    if hub_type == "visas":
        for v in VISA_HUBS:
            if v["slug"] != hub["slug"]:
                other_hubs_links.append(f'<li><a href="{v["slug"]}.html" style="color:var(--color-primary); font-weight:600;">&rarr; {v["heading"]}</a></li>')
    elif hub_type == "sectors":
        for s in SECTOR_HUBS:
            if s["slug"] != hub["slug"]:
                other_hubs_links.append(f'<li><a href="{s["slug"]}.html" style="color:var(--color-primary); font-weight:600;">&rarr; {s["heading"]}</a></li>')
    elif hub_type == "occupations":
        same_sector_hubs = [o for o in ANZSCO_HUBS if o.get("sector") == hub.get("sector") and o["slug"] != hub["slug"]]
        for o in same_sector_hubs[:6]:
            other_hubs_links.append(f'<li><a href="{o["slug"]}.html" style="color:var(--color-primary); font-weight:600;">&rarr; {o["occupation_name"]} (ANZSCO {o["anzsco"]})</a></li>')
        other_hubs_links.append('<li><a href="index.html" style="color:var(--color-primary); font-weight:700;">&rarr; View All 43 In-Demand Occupations</a></li>')
    else:
        for loc in LOCATION_HUBS:
            if loc["slug"] != hub["slug"]:
                other_hubs_links.append(f'<li><a href="{loc["slug"]}.html" style="color:var(--color-primary); font-weight:600;">&rarr; {loc["heading"]}</a></li>')

    if "overview_html" in hub:
        overview_content = hub["overview_html"]
    elif hub_type == "occupations":
        duties_lis = "".join([f"<li>{d}</li>" for d in hub.get("duties", [])])
        overview_content = f"""
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
            <div style="background:var(--color-bg); padding:1rem 1.25rem; border-radius:var(--radius-md); border:1px solid var(--color-border);">
              <span style="color:var(--color-primary); display:block; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">ANZSCO Unit Code</span>
              <strong style="font-size:1.2rem; color:var(--color-text);">{hub.get('anzsco', '')}</strong>
            </div>
            <div style="background:var(--color-bg); padding:1rem 1.25rem; border-radius:var(--radius-md); border:1px solid var(--color-border);">
              <span style="color:var(--color-primary); display:block; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">Assessing Authority</span>
              <strong style="font-size:1.05rem; color:var(--color-text);">{hub.get('authority', 'VETASSESS')}</strong>
            </div>
            <div style="background:var(--color-bg); padding:1rem 1.25rem; border-radius:var(--radius-md); border:1px solid var(--color-border);">
              <span style="color:var(--color-primary); display:block; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">Migration Skills List</span>
              <strong style="font-size:0.95rem; color:var(--color-text);">{hub.get('skills_list', 'MLTSSL')}</strong>
            </div>
            <div style="background:var(--color-bg); padding:1rem 1.25rem; border-radius:var(--radius-md); border:1px solid var(--color-border);">
              <span style="color:var(--color-primary); display:block; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">Remuneration Benchmark</span>
              <strong style="font-size:0.95rem; color:var(--color-text);">{hub.get('salary_guide', 'TSMIT $73,150+ AUD')}</strong>
            </div>
          </div>

          <h3>Australian Visa Sponsorship Pathways</h3>
          <p>{hub.get('pr_pathways', '')}</p>
          <p>
            Under current Department of Home Affairs guidelines, qualified overseas candidates nominated for <strong>ANZSCO {hub.get('anzsco', '')}</strong> by an approved Standard Business Sponsor (SBS) may access:
          </p>
          <ul>
            <li><strong>Subclass 482 (TSS Visa):</strong> Employer-sponsored 2 to 4 year work authorization with full family secondary work and schooling rights.</li>
            <li><strong>Subclass 186 (ENS PR):</strong> Permanent residency transition via the Temporary Residence Transition (TRT) stream after 2 years or direct entry nomination.</li>
            <li><strong>Subclass 494 (Regional SESR):</strong> 5-year provisional regional visa leading directly to Subclass 191 Permanent Residency after 3 qualifying years.</li>
          </ul>

          <h3>Official Australian Workplace Scope & Duties</h3>
          <ul>
            {duties_lis}
          </ul>

          <h3>Skills Assessment & Qualification Standards</h3>
          <p>{hub.get('assessment_tips', '')}</p>

          <div style="background:linear-gradient(135deg, var(--color-primary-subtle), #ffffff); border-left:4px solid var(--color-primary); padding:1.15rem 1.35rem; border-radius:0 var(--radius-md) var(--radius-md) 0; margin-top:1.5rem;">
            <strong style="color:var(--color-primary);">📋 Candidate Compliance Tip:</strong>
            <p style="margin:0.35rem 0 0 0; font-size:0.95rem;">
              Australian employers require verified proof of English proficiency (IELTS/PTE), genuine qualifications, and an official skills assessment outcome letter from <strong>{hub.get('authority', '')}</strong> to lodge Subclass 482/186 nominations.
            </p>
          </div>
        """
    else:
        overview_content = hub.get("overview_html", "")

    other_hubs_rendered = "\n".join(other_hubs_links)
    adsense_header_script = f'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADSENSE_CLIENT_ID}" crossorigin="anonymous"></script>' if ADSENSE_CLIENT_ID else ''

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>{title_seo}</title>
  <meta name="title" content="{title_seo}">
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
  <meta property="og:title" content="{title_seo}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{canonical_url}">
  <meta property="twitter:title" content="{title_seo}">
  <meta property="twitter:description" content="{meta_desc}">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  {adsense_header_script}

  <!-- Schema.org JSON-LD (CollectionPage & Breadcrumbs) -->
  <script type="application/ld+json">
{json.dumps(collection_schema, indent=2)}
  </script>
  <script type="application/ld+json">
{json.dumps(breadcrumb_schema, indent=2)}
  </script>

{GA_TAG_SCRIPT}
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

  <!-- Hub Header Banner -->
  <section class="page-header" style="background:linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);">
    <div class="container page-header-content">
      <div style="margin-bottom:0.75rem;">
        <span class="info-pill" style="background:rgba(255,255,255,0.15); color:#ffffff; font-weight:700; border:1px solid rgba(255,255,255,0.25);">
          {hub.get('badge', hub['heading'])}
        </span>
      </div>
      <h1 style="color:#ffffff; font-size:2.35rem; font-weight:800; line-height:1.2; margin-bottom:0.75rem;">
        {hub['heading']}
      </h1>
      <p style="color:#e2e8f0; font-size:1.1rem; max-width:820px; line-height:1.6;">
        {meta_desc}
      </p>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="main-layout" style="padding-top:1.75rem;">
    <div class="container layout-grid">

      <div class="feed-column">
        
        <!-- Guide Box -->
        <div class="content-card prose" style="padding:2rem; margin:0 0 2rem 0;">
          <h2>Program Overview & Sponsorship Criteria</h2>
          {overview_content}
        </div>

        <div class="feed-header">
          <div class="feed-title-wrap">
            <h2>Current Openings ({len(matching_jobs)})</h2>
            <p>Australian employers offering visa sponsorship</p>
          </div>
        </div>

        <section class="jobs-list">
          {job_cards_rendered}
        </section>

      </div>

      <aside class="sidebar">

        <!-- Eligibility Calculator Interactive Widget -->
        <div class="widget" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border: 1px solid #bfdbfe; border-radius: var(--radius-lg); padding: 1.25rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
            <span style="font-size:1.35rem;">🎯</span>
            <h3 style="font-size:1.05rem; font-weight:800; color:var(--color-primary); margin:0;">Check Sponsorship Eligibility</h3>
          </div>
          <p style="font-size:0.85rem; color:#334155; line-height:1.45; margin-bottom:0.85rem;">
            Wondering if you qualify for Australian employer visa sponsorship? Assess your occupation, TSMIT salary compliance, and visa streams in 60 seconds.
          </p>
          <a href="../calculator/" class="btn btn-primary" style="display:flex; align-items:center; justify-content:center; gap:0.4rem; width:100%; font-size:0.875rem; font-weight:700; padding:0.65rem 1rem; text-decoration:none; box-shadow:0 2px 4px rgba(0,0,0,0.08); border-radius:var(--radius-md);">
            <span>Launch Eligibility Quiz</span>
            <span>&rarr;</span>
          </a>
        </div>

        <div class="widget">
          <h3 class="widget-title">Related Directory Hubs</h3>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.9rem;">
            {other_hubs_rendered}
          </ul>
        </div>

        <!-- AdSense slot: renders a real unit only when ADSENSE_CLIENT_ID + ADSENSE_SLOT_SIDEBAR are set; otherwise nothing -->
        <div class="ad-slot-wrapper" style="margin:0;">

          <div class="ad-slot">
            {adsense_unit_html('ADSENSE_SLOT_SIDEBAR')}

          </div>
        </div>

        <div class="alert-box">
          <strong>Need Custom Eligibility Advice?</strong>
          <p>Only registered migration agents (OMARA) or Australian legal practitioners may give immigration advice under Section 280 of the Migration Act 1958.</p>
          <a href="../about.html" style="font-weight:600; color:var(--color-primary); text-decoration:underline;">Learn more &rarr;</a>
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
            Connecting skilled professionals worldwide with Australian employers providing Subclass 482, 186, and 494 visa sponsorship.
          </p>
        </div>

        <div>
          <h4 class="footer-heading">Visa Subclasses</h4>
          <ul class="footer-links">
            <li><a href="../visas/subclass-482-tss-jobs.html">Subclass 482 (TSS Visa)</a></li>
            <li><a href="../visas/subclass-186-ens-jobs.html">Subclass 186 (ENS Direct PR)</a></li>
            <li><a href="../visas/subclass-494-regional-jobs.html">Subclass 494 (Regional Visa)</a></li>
            <li><a href="../visas/subclass-494-regional-jobs.html">DAMA Regional Programs</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Shortage Sectors</h4>
          <ul class="footer-links">
            <li><a href="../sectors/it-software-engineering-visa-sponsorship-jobs.html">IT & Software Engineering</a></li>
            <li><a href="../sectors/healthcare-nursing-medical-visa-sponsorship-jobs.html">Healthcare & Nursing</a></li>
            <li><a href="../sectors/engineering-mining-construction-visa-sponsorship-jobs.html">Engineering & Mining</a></li>
            <li><a href="../sectors/hospitality-chefs-tourism-visa-sponsorship-jobs.html">Hospitality & Culinary</a></li>
            <li><a href="../sectors/skilled-trades-technicians-visa-sponsorship-jobs.html">Skilled Trades</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Platform & Legal</h4>
          <ul class="footer-links">
            <li><a href="../calculator/">Eligibility Calculator</a></li>
            <li><a href="../occupations/">Occupations Directory</a></li>
            <li><a href="../faq/">Sponsorship FAQ (2026)</a></li>
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
          Hosted on GitHub Pages &bull; Fast, static & secure
        </div>
      </div>
    </div>
  </footer>

  <script src="../js/app.js"></script>
</body>
</html>
"""


def render_occupations_index_html(active_jobs: list[tuple[dict, str]]) -> str:
    canonical_url = f"{SITE_DOMAIN}/occupations/"
    title_seo = "In-Demand Australian Skilled Occupations & Visa Sponsorship Directory (ANZSCO 2026) | OZ Sponsor Jobs"
    meta_desc = "Explore the complete directory of 43 in-demand Australian skilled visa sponsorship occupations (ANZSCO codes). Compare assessing authorities, salary thresholds, and live job openings."

    # Compute live job counts per ANZSCO code
    occ_counts = {}
    for job, slug in active_jobs:
        occ = classify_job_anzsco(job.get("title", ""), job.get("description_raw", "") or job.get("summary", ""))
        if occ is None:
            continue
        code = occ["anzsco"]
        occ_counts[code] = occ_counts.get(code, 0) + 1

    # Group occupations by sector
    sectors_map = {
        "healthcare": ("🏥 Healthcare, Medical & Nursing", []),
        "technology": ("💻 IT & Software Engineering", []),
        "engineering": ("⚙️ Engineering, Mining & Resources", []),
        "trades": ("🔧 Skilled Trades & Construction", []),
        "hospitality": ("🍳 Hospitality, Chefs & Culinary", []),
        "management": ("📊 Corporate Management, HR & Administration", []),
        "finance": ("📈 Accounting & Finance", []),
    }

    for hub in ANZSCO_HUBS:
        sec = hub.get("sector", "management")
        if sec in sectors_map:
            sectors_map[sec][1].append(hub)

    sector_sections_html = []
    for sec_key, (sec_title, hubs_list) in sectors_map.items():
        cards_html = []
        for h in hubs_list:
            cnt = occ_counts.get(h["anzsco"], 0)
            badge_cnt = f'<span class="info-pill badge-482" style="background:#059669; color:#fff;">{cnt} Active Roles</span>' if cnt > 0 else '<span class="info-pill" style="color:var(--color-text-muted);">Sponsorship Open</span>'
            cards_html.append(f"""
              <div class="content-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:1.5rem; border:1px solid var(--color-border); border-radius:var(--radius-md); background:#ffffff;">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; gap:0.5rem; flex-wrap:wrap;">
                    <span class="info-pill" style="font-weight:700; background:var(--color-primary-subtle); color:var(--color-primary);">ANZSCO {h['anzsco']}</span>
                    {badge_cnt}
                  </div>
                  <h3 style="font-size:1.2rem; font-weight:700; margin-bottom:0.5rem; line-height:1.3;">
                    <a href="{h['slug']}.html" style="color:var(--color-text);">{h['occupation_name']}</a>
                  </h3>
                  <p style="font-size:0.875rem; color:var(--color-text-secondary); margin-bottom:0.75rem;">
                    <strong>Authority:</strong> {h['authority']}
                  </p>
                  <p style="font-size:0.875rem; color:var(--color-text-muted); line-height:1.5; margin-bottom:1rem;">
                    {h['salary_guide']}
                  </p>
                </div>
                <div>
                  <a href="{h['slug']}.html" class="btn btn-outline btn-sm" style="width:100%; text-align:center; display:block;">
                    View Sponsorship Guide &amp; Roles &rarr;
                  </a>
                </div>
              </div>
            """)
        
        cards_grid = "".join(cards_html)
        sector_sections_html.append(f"""
          <section style="margin-bottom:3rem;">
            <div style="border-bottom:2px solid var(--color-border); padding-bottom:0.75rem; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:1rem;">
              <h2 style="font-size:1.6rem; font-weight:800; color:var(--color-text); margin:0;">{sec_title}</h2>
              <span style="color:var(--color-text-muted); font-size:0.95rem; font-weight:600;">{len(hubs_list)} In-Demand Occupations</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:1.5rem;">
              {cards_grid}
            </div>
          </section>
        """)

    sectors_rendered = "\n".join(sector_sections_html)

    collection_schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Australian In-Demand Skilled Occupations Directory (ANZSCO 2026)",
        "description": meta_desc,
        "url": canonical_url
    }

    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": f"{SITE_DOMAIN}/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "In-Demand Occupations",
                "item": canonical_url
            }
        ]
    }

    adsense_header_script = f'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADSENSE_CLIENT_ID}" crossorigin="anonymous"></script>' if ADSENSE_CLIENT_ID else ''

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>{title_seo}</title>
  <meta name="title" content="{title_seo}">
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
  <meta property="og:title" content="{title_seo}">
  <meta property="og:description" content="{meta_desc}">
  <meta property="og:site_name" content="OZ Sponsor Jobs">
  <meta property="og:locale" content="en_AU">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{canonical_url}">
  <meta property="twitter:title" content="{title_seo}">
  <meta property="twitter:description" content="{meta_desc}">

  <!-- Fonts & Stylesheet -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">

  {adsense_header_script}

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
{json.dumps(collection_schema, indent=2)}
  </script>
  <script type="application/ld+json">
{json.dumps(breadcrumb_schema, indent=2)}
  </script>

{GA_TAG_SCRIPT}
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
          <li><a href="../occupations/" class="nav-link active">Occupations</a></li>
          <li><a href="../calculator/" class="nav-link">Calculator</a></li>
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

  <!-- Hub Header Banner -->
  <section class="page-header" style="background:linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);">
    <div class="container page-header-content">
      <div style="margin-bottom:0.75rem;">
        <span class="info-pill" style="background:rgba(255,255,255,0.15); color:#ffffff; font-weight:700; border:1px solid rgba(255,255,255,0.25);">
          Official ANZSCO Migration Directory (2026)
        </span>
      </div>
      <h1 style="color:#ffffff; font-size:2.35rem; font-weight:800; line-height:1.2; margin-bottom:0.75rem;">
        In-Demand Australian Skilled Occupations &amp; Visa Sponsorship Directory
      </h1>
      <p style="color:#e2e8f0; font-size:1.1rem; max-width:860px; line-height:1.6;">
        Explore 43 Australian skilled occupations eligible for employer sponsorship under Subclass 482 TSS, Subclass 186 ENS Direct PR, and Subclass 494 Regional visas. Compare assessing authorities, salary thresholds (TSMIT $73,150+), and live open vacancies.
      </p>
    </div>
  </section>

  <!-- Main Content Layout -->
  <main class="main-layout" style="padding-top:2.5rem; padding-bottom:4rem;">
    <div class="container">
      {sectors_rendered}
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
            Connecting skilled professionals worldwide with Australian employers providing Subclass 482, 186, and 494 visa sponsorship.
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
          <h4 class="footer-heading">In-Demand Occupations</h4>
          <ul class="footer-links">
            <li><a href="351311-chef-visa-sponsorship-jobs.html">Chefs (ANZSCO 351311)</a></li>
            <li><a href="254415-registered-nurse-visa-sponsorship-jobs.html">Registered Nurses (ANZSCO 254415)</a></li>
            <li><a href="261313-software-programmer-engineer-visa-sponsorship-jobs.html">Software Engineers (ANZSCO 261313)</a></li>
            <li><a href="321212-diesel-motor-mechanic-visa-sponsorship-jobs.html">Diesel Mechanics (ANZSCO 321212)</a></li>
            <li><a href="index.html">View All 43 Occupations &rarr;</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Platform &amp; Legal</h4>
          <ul class="footer-links">
            <li><a href="../calculator/">Eligibility Calculator</a></li>
            <li><a href="index.html">Occupations Directory</a></li>
            <li><a href="../faq/">Sponsorship FAQ (2026)</a></li>
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


def generate_hubs(valid_jobs_with_slugs: list[tuple[dict, str]]):
    os.makedirs(VISAS_DIR, exist_ok=True)
    os.makedirs(LOCATIONS_DIR, exist_ok=True)
    os.makedirs(SECTORS_DIR, exist_ok=True)
    os.makedirs(OCCUPATIONS_DIR, exist_ok=True)

    # Only include active jobs in directory hubs
    active_jobs = [item for item in valid_jobs_with_slugs if item[0].get("status") != "expired"]

    for v_hub in VISA_HUBS:
        visa_code = v_hub["visa_code"]
        matching = [
            (job, slug) for job, slug in active_jobs
            if visa_code in job.get("visas", [])
        ]
        html = render_hub_page_html(v_hub, matching, "visas")
        file_path = os.path.join(VISAS_DIR, f"{v_hub['slug']}.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"[HUB] Generated /visas/{v_hub['slug']}.html ({len(matching)} active matching jobs)")

    for loc_hub in LOCATION_HUBS:
        state_code = loc_hub["state"]
        matching = [
            (job, slug) for job, slug in active_jobs
            if job.get("state") == state_code
        ]
        html = render_hub_page_html(loc_hub, matching, "locations")
        file_path = os.path.join(LOCATIONS_DIR, f"{loc_hub['slug']}.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"[HUB] Generated /locations/{loc_hub['slug']}.html ({len(matching)} active matching jobs)")

    for s_hub in SECTOR_HUBS:
        cat = s_hub["category"]
        matching = [
            (job, slug) for job, slug in active_jobs
            if job.get("category") == cat
        ]
        html = render_hub_page_html(s_hub, matching, "sectors")
        file_path = os.path.join(SECTORS_DIR, f"{s_hub['slug']}.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"[HUB] Generated /sectors/{s_hub['slug']}.html ({len(matching)} active matching jobs)")

    for o_hub in ANZSCO_HUBS:
        code = o_hub["anzsco"]
        matching = [
            (job, slug) for job, slug in active_jobs
            if (classify_job_anzsco(job.get("title", ""), job.get("description_raw", "") or job.get("summary", "")) or {}).get("anzsco") == code
        ]
        html = render_hub_page_html(o_hub, matching, "occupations")
        file_path = os.path.join(OCCUPATIONS_DIR, f"{o_hub['slug']}.html")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"[HUB] Generated /occupations/{o_hub['slug']}.html ({len(matching)} active matching jobs)")

    index_html = render_occupations_index_html(active_jobs)
    index_file_path = os.path.join(OCCUPATIONS_DIR, "index.html")
    with open(index_file_path, "w", encoding="utf-8") as f:
        f.write(index_html)
    print(f"[HUB] Generated /occupations/index.html (Master Occupations Directory)")


def update_sitemap(valid_jobs_with_slugs: list[tuple[dict, str]]):
    today_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    # Strictly include only active jobs in sitemap.xml per Google guidelines
    active_jobs = [item for item in valid_jobs_with_slugs if item[0].get("status") != "expired"]

    # Core site pages
    core_xml_lines = [
        '  <!-- Core Site Pages -->',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>daily</changefreq>',
        '    <priority>1.0</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/about.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/contact.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.7</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/privacy-policy.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>yearly</changefreq>',
        '    <priority>0.5</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/terms.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>yearly</changefreq>',
        '    <priority>0.5</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/faq/</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.85</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/calculator/</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.90</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/sponsors/australia-visa-sponsorship-companies-list.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.88</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/visas/dama-visa-sponsorship-jobs-australia.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>weekly</changefreq>',
        '    <priority>0.85</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/move-to-australia-from-usa-visa-sponsorship.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/uk-citizens-australia-visa-sponsorship-jobs.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/find-482-visa-sponsorship-job-australia.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/482-vs-186-vs-494-which-visa-fits-you.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/core-skills-income-threshold-csit-explained.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/check-genuine-standard-business-sponsor-australia.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/guides/skilled-occupation-lists-csol-mltssl-stsol-rol-explained.html</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.8</priority>',
        '  </url>',
    ]

    hubs_xml_lines = [
        '  <!-- Programmatic Visa Category Hubs -->',
    ]
    for v_hub in VISA_HUBS:
        hubs_xml_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/visas/{v_hub["slug"]}.html</loc>',
            f'    <lastmod>{today_str}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.85</priority>',
            '  </url>',
        ])

    hubs_xml_lines.append('  <!-- Programmatic Location Hubs -->')
    for loc_hub in LOCATION_HUBS:
        hubs_xml_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/locations/{loc_hub["slug"]}.html</loc>',
            f'    <lastmod>{today_str}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.85</priority>',
            '  </url>',
        ])

    hubs_xml_lines.append('  <!-- Programmatic Industry Sector Hubs -->')
    for s_hub in SECTOR_HUBS:
        hubs_xml_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/sectors/{s_hub["slug"]}.html</loc>',
            f'    <lastmod>{today_str}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.88</priority>',
            '  </url>',
        ])

    hubs_xml_lines.append('  <!-- Programmatic In-Demand Occupation Hubs (ANZSCO) -->')
    hubs_xml_lines.extend([
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/occupations/</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '    <changefreq>daily</changefreq>',
        '    <priority>0.92</priority>',
        '  </url>',
    ])
    for o_hub in ANZSCO_HUBS:
        hubs_xml_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/occupations/{o_hub["slug"]}.html</loc>',
            f'    <lastmod>{today_str}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.90</priority>',
            '  </url>',
        ])

    # 1. Full Master sitemap.xml
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    xml_lines.extend(core_xml_lines)
    xml_lines.extend(hubs_xml_lines)
    xml_lines.append('  <!-- Programmatic Visa Sponsorship Jobs (Active Only) -->')
    for job, slug in active_jobs:
        posted_date_clean = today_str  # every job page is rewritten each run, so lastmod is the generation date
        xml_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/jobs/{slug}.html</loc>',
            f'    <lastmod>{posted_date_clean}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.9</priority>',
            '  </url>',
        ])
    xml_lines.append('</urlset>\n')

    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(xml_lines))

    # 2. Fast-Track sitemap-recent.xml (Freshest 35 Jobs + Homepage with Priority 1.0)
    recent_jobs = active_jobs[:35]
    recent_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <!-- Homepage -->',
        '  <url>',
        f'    <loc>{SITE_DOMAIN}/</loc>',
        f'    <lastmod>{now_iso}</lastmod>',
        '    <changefreq>hourly</changefreq>',
        '    <priority>1.0</priority>',
        '  </url>',
        '  <!-- Freshest 35 Visa Sponsorship Jobs (Fast Indexing) -->',
    ]
    for job, slug in recent_jobs:
        p_date = job.get("posted_date") or now_iso
        p_date_clean = p_date[:10] if len(p_date) >= 10 else today_str
        recent_lines.extend([
            '  <url>',
            f'    <loc>{SITE_DOMAIN}/jobs/{slug}.html</loc>',
            f'    <lastmod>{p_date_clean}</lastmod>',
            '    <changefreq>hourly</changefreq>',
            '    <priority>1.0</priority>',
            '  </url>',
        ])
    recent_lines.append('</urlset>\n')

    with open(SITEMAP_RECENT_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(recent_lines))

    # 3. Category & Location Hubs Sitemap (sitemap-hubs.xml)
    hubs_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    hubs_lines.extend(core_xml_lines)
    hubs_lines.extend(hubs_xml_lines)
    hubs_lines.append('</urlset>\n')

    with open(SITEMAP_HUBS_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(hubs_lines))

    # 4. Master Sitemap Index (sitemap-index.xml)
    sitemap_index_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <sitemap>',
        f'    <loc>{SITE_DOMAIN}/sitemap-recent.xml</loc>',
        f'    <lastmod>{now_iso}</lastmod>',
        '  </sitemap>',
        '  <sitemap>',
        f'    <loc>{SITE_DOMAIN}/sitemap-hubs.xml</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '  </sitemap>',
        '  <sitemap>',
        f'    <loc>{SITE_DOMAIN}/sitemap-sponsors.xml</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '  </sitemap>',
        '  <sitemap>',
        f'    <loc>{SITE_DOMAIN}/sitemap.xml</loc>',
        f'    <lastmod>{today_str}</lastmod>',
        '  </sitemap>',
        '</sitemapindex>\n',
    ]
    with open(SITEMAP_INDEX_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(sitemap_index_lines))

    total_active_urls = 10 + len(VISA_HUBS) + len(LOCATION_HUBS) + len(SECTOR_HUBS) + 1 + len(ANZSCO_HUBS) + len(active_jobs)
    print(f"[OK] sitemap.xml updated with {total_active_urls} total indexed active URLs ({len(valid_jobs_with_slugs) - len(active_jobs)} expired jobs excluded).")
    print(f"[OK] sitemap-recent.xml generated with {len(recent_jobs) + 1} fast-track crawl URLs.")
    print(f"[OK] sitemap-hubs.xml generated.")
    print(f"[OK] sitemap-index.xml generated.")


def generate_rss_feed(active_jobs: list[tuple[dict, str]]):
    """Generates a valid RSS 2.0 feed of the freshest 50 jobs."""
    rss_path = os.path.join(BASE_DIR, "feed.xml")
    items = []
    for job, slug in active_jobs[:50]:
        pub_date = job.get("posted_date") or job.get("date_posted") or datetime.now(timezone.utc).isoformat()
        title = (job.get("title") or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        company = (job.get("company") or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        desc = (job.get("summary") or "").replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        url = f"https://www.visamigrate.com/jobs/{slug}.html"
        items.append(f"""    <item>
      <title>{title} at {company} ({job.get('city')}, {job.get('state')})</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <description>{desc}</description>
      <pubDate>{pub_date}</pubDate>
      <category>Australian Visa Sponsorship Jobs</category>
    </item>""")
    items_joined = "\n".join(items)
    rss_xml = f"""<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OZ Sponsor Jobs - Latest Australian Visa Sponsorship Postings</title>
    <link>https://www.visamigrate.com/</link>
    <description>Australian visa sponsorship vacancies offering Subclass 482 TSS, Subclass 186 ENS, and Subclass 494 Regional work visas.</description>
    <language>en-AU</language>
    <lastBuildDate>{datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")}</lastBuildDate>
    <atom:link href="https://www.visamigrate.com/feed.xml" rel="self" type="application/rss+xml" />
{items_joined}
  </channel>
</rss>
"""
    with open(rss_path, "w", encoding="utf-8") as f:
        f.write(rss_xml)
    print(f"[OK] feed.xml generated with {min(50, len(active_jobs))} latest jobs.")


def generate_html_sitemap(active_jobs: list[tuple[dict, str]]):
    """Generates an HTML sitemap for human visitors and Googlebot deep navigation."""
    sitemap_html_path = os.path.join(BASE_DIR, "sitemap.html")
    
    jobs_by_loc = {}
    for job, slug in active_jobs:
        loc = f"{job.get('city')}, {job.get('state')}"
        jobs_by_loc.setdefault(loc, []).append((job, slug))

    loc_sections = []
    for loc, jlist in sorted(jobs_by_loc.items(), key=lambda x: len(x[1]), reverse=True)[:15]:
        links = "\n".join([f'<li><a href="jobs/{s}.html">{j["title"]} ({j["company"]})</a></li>' for j, s in jlist[:15]])
        loc_sections.append(f"""
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
          <h3 style="font-size:1.05rem; color:#1e293b; margin-bottom:0.6rem;">📍 {loc} ({len(jlist)} roles)</h3>
          <ul style="list-style:none; padding:0; margin:0; line-height:1.8; font-size:0.88rem;">{links}</ul>
        </div>""")

    html = f"""<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Sitemap - All Australian Visa Sponsorship Jobs &amp; Guides | OZ Sponsor Jobs</title>
  <meta name="description" content="Complete directory and HTML sitemap of all Australian visa sponsorship jobs, subclass 482, 186 PR, and 494 regional vacancies.">
  <link rel="canonical" href="https://www.visamigrate.com/sitemap.html">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header">
    <div class="container header-container">
      <a href="/" class="logo">
        <span class="logo-accent">OZ</span> Sponsor Jobs
      </a>
      <nav class="nav-links">
        <a href="/">Home</a>
        <a href="visas/subclass-482-tss-jobs.html">482 TSS Visa</a>
        <a href="visas/subclass-186-ens-jobs.html">186 ENS PR</a>
        <a href="faq/">FAQ</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>

  <main class="container" style="padding: 2.5rem 1rem;">
    <div style="margin-bottom: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;">HTML Site Directory &amp; Job Index</h1>
      <p style="color: #475569;">Comprehensive structural directory linking all visa guides, Australian shortage sectors, metropolitan locations, and active sponsorship roles.</p>
    </div>

    <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
        <h2 style="font-size:1.15rem; color:#1e3a8a; margin-bottom:0.75rem;">🛂 Visa Subclass Hubs</h2>
        <ul style="list-style:none; padding:0; margin:0; line-height:2;">
          <li><a href="visas/subclass-482-tss-jobs.html"><strong>Subclass 482 TSS Visa Jobs</strong></a></li>
          <li><a href="visas/subclass-186-ens-jobs.html"><strong>Subclass 186 ENS Permanent Residency Jobs</strong></a></li>
          <li><a href="visas/subclass-494-regional-jobs.html"><strong>Subclass 494 Regional Employer Sponsored Jobs</strong></a></li>
          <li><a href="calculator/"><strong>Visa Sponsorship Eligibility Calculator (2026)</strong></a></li>
        </ul>
      </div>

      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
        <h2 style="font-size:1.15rem; color:#1e3a8a; margin-bottom:0.75rem;">🏙️ Location Hubs</h2>
        <ul style="list-style:none; padding:0; margin:0; line-height:2;">
          <li><a href="locations/sydney-nsw-visa-sponsorship-jobs.html">Sydney &amp; New South Wales (NSW)</a></li>
          <li><a href="locations/melbourne-vic-visa-sponsorship-jobs.html">Melbourne &amp; Victoria (VIC)</a></li>
          <li><a href="locations/brisbane-qld-visa-sponsorship-jobs.html">Brisbane &amp; Queensland (QLD)</a></li>
          <li><a href="locations/perth-wa-visa-sponsorship-jobs.html">Perth &amp; Western Australia (WA)</a></li>
          <li><a href="locations/adelaide-sa-visa-sponsorship-jobs.html">Adelaide &amp; South Australia (SA)</a></li>
        </ul>
      </div>

      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
        <h2 style="font-size:1.15rem; color:#1e3a8a; margin-bottom:0.75rem;">💼 In-Demand Occupations (ANZSCO)</h2>
        <ul style="list-style:none; padding:0; margin:0; line-height:2;">
          <li><a href="occupations/"><strong>Master Occupations Directory (All 43 Roles)</strong></a></li>
          <li><a href="occupations/351311-chef-visa-sponsorship-jobs.html">Chef (ANZSCO 351311)</a></li>
          <li><a href="occupations/254415-registered-nurse-visa-sponsorship-jobs.html">Registered Nurse (ANZSCO 254415)</a></li>
          <li><a href="occupations/261313-software-programmer-engineer-visa-sponsorship-jobs.html">Software Engineer (ANZSCO 261313)</a></li>
          <li><a href="occupations/321212-diesel-motor-mechanic-visa-sponsorship-jobs.html">Diesel Motor Mechanic (ANZSCO 321212)</a></li>
          <li><a href="occupations/233211-civil-engineer-visa-sponsorship-jobs.html">Civil Engineer (ANZSCO 233211)</a></li>
        </ul>
      </div>

      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
        <h2 style="font-size:1.15rem; color:#1e3a8a; margin-bottom:0.75rem;">🏭 Shortage Sectors</h2>
        <ul style="list-style:none; padding:0; margin:0; line-height:2;">
          <li><a href="sectors/it-software-engineering-visa-sponsorship-jobs.html">IT &amp; Software Engineering</a></li>
          <li><a href="sectors/healthcare-nursing-medical-visa-sponsorship-jobs.html">Healthcare, Doctors &amp; Nursing</a></li>
          <li><a href="sectors/engineering-mining-construction-visa-sponsorship-jobs.html">Mining, Resources &amp; Construction</a></li>
          <li><a href="sectors/hospitality-chefs-tourism-visa-sponsorship-jobs.html">Hospitality, Chefs &amp; Tourism</a></li>
          <li><a href="sectors/skilled-trades-technicians-visa-sponsorship-jobs.html">Skilled Trades &amp; Technicians</a></li>
        </ul>
      </div>
    </section>

    <h2 style="font-size: 1.5rem; font-weight: 700; color: #0f172a; margin-bottom: 1.25rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem;">Sponsorship Jobs Directory ({len(active_jobs)} Active Roles)</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
      {"".join(loc_sections)}
    </div>
  </main>

  <footer class="site-footer">
    <div class="container footer-bottom">
      <p>&copy; 2026 OZ Sponsor Jobs. Australian visa sponsorship vacancy directory.</p>
      <div class="footer-legal">
        <a href="/">Home</a>
        <a href="faq/">FAQ</a>
        <a href="sitemap.html">HTML Sitemap</a>
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </div>
    </div>
  </footer>
</body>
</html>"""
    with open(sitemap_html_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[OK] sitemap.html generated with structural links to all active hubs & roles.")


def sync_homepage_and_js(valid_jobs_with_slugs: list[tuple[dict, str]]):
    # Strictly filter active jobs for homepage feed and client app
    active_jobs = [item for item in valid_jobs_with_slugs if item[0].get("status") != "expired"]

    # Sort active jobs so the freshest jobs are at the top (PageRank channel)
    active_jobs.sort(
        key=lambda item: (item[0].get("posted_date") or item[0].get("date_posted") or item[0].get("indexed_at") or ""),
        reverse=True
    )

    # 1. Generate XML Feed and HTML Sitemap
    generate_rss_feed(active_jobs)
    generate_html_sitemap(active_jobs)

    js_jobs = []
    for job, slug in active_jobs:
        js_jobs.append({
            "id": job["id"],
            "title": job["title"],
            "company": job["company"],
            "logoInitial": job["company"][0].upper() if job.get("company") else "A",
            "location": f"{job['city']}, {job['state']}",
            "state": job["state"],
            "category": job.get("category", "technology"),
            "visas": job.get("visas", ["482"]),
            "visaLabels": job.get("visa_labels", ["Subclass 482 TSS"]),
            "salary": job.get("salary_display") or "",
            "type": job.get("type", "Full-time"),
            "verifiedSponsor": bool(job.get("verified_sponsor")),
            "anzsco": job.get("anzsco") or "",
            "posted": (job.get("posted_date") or "")[:10],
            "slug": slug,
            "url": f"jobs/{slug}.html",
            "apply_url": build_external_apply_url(job),
            "description": job.get("summary", "")
        })

    if os.path.exists(JS_APP_PATH):
        with open(JS_APP_PATH, "r", encoding="utf-8") as f:
            js_content = f.read()

        new_jobs_json = json.dumps(js_jobs, indent=2, ensure_ascii=False)
        js_content_updated = re.sub(
            r"const JOBS_DATA = \[[\s\S]*?\];\n",
            lambda m: f"const JOBS_DATA = {new_jobs_json};\n",
            js_content
        )

        js_content_updated = js_content_updated.replace(
            '<h3 class="job-title"><a href="#job-modal-${job.id}">${job.title}</a></h3>',
            '<h3 class="job-title"><a href="${job.url || `jobs/${job.slug}.html`}">${job.title}</a></h3>'
        )
        js_content_updated = js_content_updated.replace(
            '<a href="contact.html?job=${encodeURIComponent(job.title)}" class="btn btn-primary btn-sm">Apply with Sponsor &rarr;</a>',
            '<a href="${job.url || `jobs/${job.slug}.html`}" class="btn btn-primary btn-sm">View Role & PR Pathway &rarr;</a>'
        )

        with open(JS_APP_PATH, "w", encoding="utf-8") as f:
            f.write(js_content_updated)
        print(f"[OK] js/app.js updated with {len(active_jobs)} active jobs and direct page URLs.")

    if os.path.exists(INDEX_PATH):
        with open(INDEX_PATH, "r", encoding="utf-8") as f:
            index_content = f.read()

        # Build PageRank Channeling Injection Grid (Top 16 Freshest Jobs)
        fresh_jobs = active_jobs[:16]
        fresh_items_html = []
        for fjob, fslug in fresh_jobs:
            visas = fjob.get("visas", ["482"])
            vbadge = "Subclass 482" if "482" in visas else ("Subclass 186" if "186" in visas else "Subclass 494")
            vclass = "pr-badge-482" if "482" in visas else ("pr-badge-186" if "186" in visas else "pr-badge-494")
            fresh_items_html.append(f"""
            <a href="jobs/{fslug}.html" class="pagerank-job-item">
              <span class="pr-badge {vclass}">{vbadge}</span>
              <strong class="pr-title">{fjob['title']}</strong>
              <span class="pr-meta">{fjob['company']} &bull; {fjob['city']}, {fjob['state']}</span>
              <span class="pr-cta">View Role &amp; PR Pathway &rarr;</span>
            </a>""")

        fresh_box_html = f"""<!-- PageRank Channeling: Latest Sponsorship Roles -->
        <section class="pagerank-injection-box" aria-label="Fresh Australian Sponsorship Vacancies">
          <div class="pr-box-header">
            <div class="pr-live-tag">
              <span class="pr-live-dot"></span>
              <span>FAST-TRACK INDEXING FEED &bull; UPDATED DAILY</span>
            </div>
            <span class="pr-counter-tag">⚡ {len(fresh_jobs)} Fresh Vacancies</span>
          </div>
          <h3 class="pr-box-title">🔥 Newly Added Australian Visa Sponsorship Jobs</h3>
          <p class="pr-box-desc">Recently listed employer-sponsored roles across Subclass 482 TSS, Subclass 186 ENS, and Subclass 494 Regional visas.</p>
          <div class="pagerank-jobs-grid">
            {"".join(fresh_items_html)}
          </div>
        </section>"""

        cards_html = []
        for job, slug in active_jobs:
            visa_badges = "".join([
                f'<span class="info-pill badge-482">{v}</span>' if "482" in v else
                f'<span class="info-pill badge-186">{v}</span>' if "186" in v else
                f'<span class="info-pill badge-494">{v}</span>'
                for v in job.get("visa_labels", [])
            ])

            cards_html.append(f"""
          <!-- Programmatic Job Card: {job['title']} -->
          <article class="job-card" data-id="{job['id']}">
            <div class="job-card-top">
              <div class="company-logo" aria-hidden="true">{job['company'][0]}</div>
              <div class="job-meta-main">
                <div class="job-title-row">
                  <h3 class="job-title"><a href="jobs/{slug}.html">{job['title']}</a></h3>
                </div>
                <div class="company-details">
                  <span><strong>{job['company']}</strong></span>
                  <span>&bull;</span>
                  <span>{job['city']}, {job['state']}</span>
                  <span class="verified-badge">
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" style="width:14px;height:14px;">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    Visa Sponsorship
                  </span>
                </div>
              </div>
            </div>
            <div class="job-info-pills">
              {visa_badges}
              {('<span class="info-pill badge-salary">' + job.get('salary_display') + '</span>') if job.get('salary_display') else ''}
              {('<span class="info-pill">ANZSCO: ' + job.get('anzsco') + '</span>') if job.get('anzsco') else ''}
              <span class="info-pill">{job.get('type', 'Full-time')}</span>
            </div>
            <p class="job-snippet">{job.get('summary', '')}</p>
            <div class="job-card-bottom">
              <div class="posted-date">
                <span>{('Posted ' + (job.get('posted_date') or '')[:10]) if job.get('posted_date') else 'Posted date not listed'}</span>
              </div>
              <div class="card-actions">
                <a href="jobs/{slug}.html" class="btn btn-primary btn-sm">View Role & Apply &rarr;</a>
              </div>
            </div>
          </article>
            """)

        pre_rendered_feed = "\n".join(cards_html)

        feed_pattern = r'(<section class="jobs-list" id="jobs-feed"[^>]*>)([\s\S]*?)(</section>)'
        index_content_updated = re.sub(
            feed_pattern,
            lambda m: m.group(1) + "\n" + pre_rendered_feed + "\n        " + m.group(3),
            index_content
        )

        # Inject or update the PageRank Channeling Box
        if 'class="pagerank-injection-box"' in index_content_updated:
            index_content_updated = re.sub(
                r'<!-- PageRank Channeling:.*?-->\s*<section class="pagerank-injection-box"[\s\S]*?</section>',
                fresh_box_html,
                index_content_updated
            )
        else:
            index_content_updated = re.sub(
                r'(<div class="feed-header">)',
                lambda m: fresh_box_html + "\n\n        " + m.group(1),
                index_content_updated,
                count=1
            )

        # Ensure RSS feed link is in head
        if 'type="application/rss+xml"' not in index_content_updated:
            index_content_updated = index_content_updated.replace(
                '</head>',
                '  <link rel="alternate" type="application/rss+xml" title="OZ Sponsor Jobs RSS Feed" href="https://www.visamigrate.com/feed.xml">\n</head>'
            )

        # Ensure HTML sitemap link is in footer
        if 'sitemap.html' not in index_content_updated:
            index_content_updated = index_content_updated.replace(
                '<a href="faq/">FAQ</a>',
                '<a href="faq/">FAQ</a>\n        <a href="sitemap.html">HTML Sitemap</a>'
            )

        sector_links_html = """          <h4 class="footer-heading">Shortage Sectors</h4>
          <ul class="footer-links">
            <li><a href="sectors/it-software-engineering-visa-sponsorship-jobs.html">IT & Software Engineering</a></li>
            <li><a href="sectors/healthcare-nursing-medical-visa-sponsorship-jobs.html">Healthcare & Nursing</a></li>
            <li><a href="sectors/engineering-mining-construction-visa-sponsorship-jobs.html">Engineering & Mining</a></li>
            <li><a href="sectors/hospitality-chefs-tourism-visa-sponsorship-jobs.html">Hospitality & Culinary</a></li>
            <li><a href="sectors/skilled-trades-technicians-visa-sponsorship-jobs.html">Skilled Trades</a></li>
          </ul>"""
        index_content_updated = re.sub(
            r'<h4 class="footer-heading">Shortage Sectors</h4>\s*<ul class="footer-links">[\s\S]*?</ul>',
            sector_links_html,
            index_content_updated
        )

        written = False
        for attempt in range(5):
            try:
                with open(INDEX_PATH, "w", encoding="utf-8") as f:
                    f.write(index_content_updated)
                written = True
                break
            except OSError:
                time.sleep(0.5)
        if not written:
            with open(INDEX_PATH, "w", encoding="utf-8") as f:
                f.write(index_content_updated)

        print(f"[OK] index.html updated with PageRank Channeling Box and {len(active_jobs)} static job cards.")


def main():
    print("================================================================")
    print(" OZ SPONSOR JOBS - MULTI-SOURCE INGESTION & ZERO-DUPLICATE SEO  ")
    print("================================================================")

    os.makedirs(JOBS_DIR, exist_ok=True)
    os.makedirs(VISAS_DIR, exist_ok=True)
    os.makedirs(LOCATIONS_DIR, exist_ok=True)
    os.makedirs(SECTORS_DIR, exist_ok=True)

    rebuild_only = "--rebuild-only" in sys.argv or "--regenerate-only" in sys.argv

    # 0. Pre-evaluate Job Expiration per Google Guidelines
    ledger = JobLedger()
    exp_count, expired_jobs = ledger.evaluate_job_expiration(max_days=45)
    print(f"[*] Google Expiration Audit: {exp_count} jobs flagged as expired (past closing date or >45 days).")

    # 1. Multi-source ingestion & Ledger deduplication
    if rebuild_only:
        print("[*] Rebuild Mode: Loading jobs directly from catalog ledger...")
        raw_jobs = load_baseline_jobs(ledger)
    else:
        raw_jobs = fetch_external_jobs()
    print(f"[*] Total unique approved jobs to process: {len(raw_jobs)}")

    valid_jobs_with_slugs = []
    seen_slugs = set()
    for job in raw_jobs:
        slug = job.get("slug") or generate_job_slug(job)
        if slug in seen_slugs:
            continue
        seen_slugs.add(slug)
        valid_jobs_with_slugs.append((job, slug))

    # 2. Build map for related jobs interlinking & fast crawling discovery network
    active_pool = [item for item in valid_jobs_with_slugs if item[0].get("status") != "expired"]
    fresh_pool = active_pool[:6]

    generated_count = 0
    for idx, (job, slug) in enumerate(valid_jobs_with_slugs):
        # Pick 3 related jobs from ACTIVE jobs only (expired jobs are never suggested).
        cat = job.get("category")
        state = job.get("state")
        related = [
            (rj, rslug) for rj, rslug in active_pool
            if rslug != slug and (rj.get("category") == cat or rj.get("state") == state)
        ]
        if len(related) < 3:
            related = [(rj, rslug) for rj, rslug in active_pool if rslug != slug]
        
        # Rank related jobs: same occupation first, then same category, then same state.
        _anz = job.get("anzsco")
        related = sorted(related, key=lambda _t: (0 if (_anz and _t[0].get("anzsco") == _anz) else 1 if _t[0].get("category") == cat else 2 if _t[0].get("state") == state else 3))
        fresh_for_page = [item for item in fresh_pool if item[1] != slug][:4]
        file_path = os.path.join(JOBS_DIR, f"{slug}.html")
        html_content = render_job_page_html(job, slug, related_jobs=related[:3], fresh_jobs=fresh_for_page)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html_content)

        generated_count += 1

    print(f"[OK] Successfully rendered {generated_count} high-E-E-A-T article job pages with dual Schema & interlinks.")

    # 2.5 Generate AI-Optimized Master FAQ Hub
    try:
        import generate_faq
        generate_faq.main()
    except Exception as e:
        print(f"[WARN] Could not generate FAQ hub: {e}")

    # 3. Category & Location Hubs
    generate_hubs(valid_jobs_with_slugs)

    # Persist the ledger first: the sponsors directory builder reads
    # job_ledger.json from disk, so it must see this run's in-memory
    # updates (expiry flips + newly recorded jobs) to match the profiles.
    ledger.save()

    # 3.5 Generate Programmatic Sponsor Company Profiles Hubs
    try:
        import build_sponsor_profiles
        build_sponsor_profiles.generate_all_sponsor_profiles(active_pool)
    except Exception as e:
        print(f"[WARN] Sponsor profiles generation failed: {e}")

    # 4. Sitemap
    update_sitemap(valid_jobs_with_slugs)

    # 5. Homepage & JS Data
    sync_homepage_and_js(valid_jobs_with_slugs)

    # 6. Telegram Channel Auto-Broadcast
    if not rebuild_only:
        try:
            import telegram_publisher
            telegram_publisher.publish_jobs(limit=5)
        except Exception as e:
            print(f"[WARN] Telegram auto-broadcast skipped: {e}")

        # 7. X / Twitter Auto-Broadcast
        try:
            import x_publisher
            x_publisher.publish_jobs(limit=2)
        except Exception as e:
            print(f"[WARN] X/Twitter auto-broadcast skipped: {e}")

    print("================================================================")
    print(" [DONE] Multi-source ingestion, Article SEO & Interlinking complete!")
    print("================================================================")


if __name__ == "__main__":
    main()
