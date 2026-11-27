/**
 * OZ Sponsor Jobs - Core JavaScript Application
 * High-performance search, filtering, and responsive controls
 */

// Sample Australian Visa Sponsorship jobs
const JOBS_DATA = [
  {
    "id": "adzuna-5946736579",
    "title": "Year 1 Primary Teacher",
    "company": "HARKE Recruitment",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-30",
    "slug": "sydney-year-1-primary-teacher-482-186-sponsorship",
    "url": "jobs/sydney-year-1-primary-teacher-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5946736579?utm_medium=api&utm_source=13c876f1",
    "description": "Year 1 Primary Teacher | Northern Territory | 2027 Full-Time | 12-Month Contract | Commencing January 2027 Earn $100,000–$142,000  super from March 2027 $3,000 relocation support plus three days' accommodation upon arriv..."
  },
  {
    "id": "adzuna-5946574130",
    "title": "Education Support",
    "company": "Government schools",
    "logoInitial": "G",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-30",
    "slug": "melbourne-education-support-482-186-sponsorship",
    "url": "jobs/melbourne-education-support-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5946574130?utm_medium=api&utm_source=13c876f1",
    "description": "Location Profile Nganboo Borron School is located at 2 Frome Cr, Werribee, and supports students with mild to profound intellectual disabilities in the Wyndham area. Students access specialised education services and hig..."
  },
  {
    "id": "jooble-6602566445014611949",
    "title": "Electrical Engineer",
    "company": "Entura",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "engineering",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$118,850 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "233311",
    "posted": "2026-10-30",
    "slug": "sydney-electrical-engineer-482-186-sponsorship",
    "url": "jobs/sydney-electrical-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6602566445014611949",
    "description": " Help shape sustainable water and renewable energy solutions through innovative projects with a leading specialist consultancy. \r\n Actively contribute to effective and experienced team \r\n Further develop your skills and ..."
  },
  {
    "id": "jooble-4753273206233396639",
    "title": "Procurement Category Manager, Data Center Sourcing and Procurement (DCSP)",
    "company": "Amazon",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-30",
    "slug": "sydney-procurement-category-manager-data-center-sourcing-and-procurement-dcsp-482-186-sponsorship",
    "url": "jobs/sydney-procurement-category-manager-data-center-sourcing-and-procurement-dcsp-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4753273206233396639",
    "description": "AWS Infrastructure Services owns the design, planning, delivery, and operation of all AWS global infrastructure. In other words, we’re the people who keep the cloud running. We support all AWS data centers and all of the..."
  },
  {
    "id": "adzuna-5945811511",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "melbourne-occupational-therapists-australia-wide-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapists-australia-wide-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811511?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811509",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "gold-coast-occupational-therapists-australia-wide-482-494-sponsorship",
    "url": "jobs/gold-coast-occupational-therapists-australia-wide-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811509?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811477",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "sydney-occupational-therapists-australia-wide-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapists-australia-wide-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811477?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811479",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "perth-occupational-therapists-australia-wide-482-494-sponsorship",
    "url": "jobs/perth-occupational-therapists-australia-wide-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811479?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811497",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Wollongong, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "wollongong-occupational-therapists-australia-wide-482-186-sponsorship",
    "url": "jobs/wollongong-occupational-therapists-australia-wide-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811497?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811504",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "brisbane-occupational-therapists-australia-wide-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapists-australia-wide-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811504?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811494",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Newcastle, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "newcastle-occupational-therapists-australia-wide-482-186-sponsorship",
    "url": "jobs/newcastle-occupational-therapists-australia-wide-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811494?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945811498",
    "title": "OCCUPATIONAL THERAPISTS | AUSTRALIA-WIDE",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
    "location": "Burnie, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-30",
    "slug": "burnie-occupational-therapists-australia-wide-482-494-sponsorship",
    "url": "jobs/burnie-occupational-therapists-australia-wide-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945811498?utm_medium=api&utm_source=13c876f1",
    "description": "We are partnered with two highly regarded community-based Allied Health providers and are seeking Occupational Therapists to join their teams. These organisations are dedicated to helping individuals of all ages achieve ..."
  },
  {
    "id": "adzuna-5945489507",
    "title": "Secondary HPE Teacher",
    "company": "HARKE Recruitment",
    "logoInitial": "H",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-29",
    "slug": "darwin-secondary-hpe-teacher-482-494-sponsorship",
    "url": "jobs/darwin-secondary-hpe-teacher-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945489507?utm_medium=api&utm_source=13c876f1",
    "description": "Health & Physical Education Teacher - Years 9–12 | NT Full-Time | 12-Month Contract | January 2027 Salary increasing to $100,000–$142,000  super from March 2027 $3,000 relocation assistance plus three nights' accommodati..."
  },
  {
    "id": "adzuna-5945489501",
    "title": "Design Technology Teacher",
    "company": "HARKE Recruitment",
    "logoInitial": "H",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-29",
    "slug": "melbourne-design-technology-teacher-482-186-sponsorship",
    "url": "jobs/melbourne-design-technology-teacher-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5945489501?utm_medium=api&utm_source=13c876f1",
    "description": "Design & Technology Teacher – Woodwork & Industrial Technology | Regional VIC Full-Time, Ongoing | Term 1, 2027 | Regional Relocation Incentives up to $35,000 About the School HARKE Recruitment has partnered with a secon..."
  },
  {
    "id": "adzuna-5944678370",
    "title": "Enrolled Nurses Rehabilitation",
    "company": "SA Health",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$70,477 - $79,381 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-29",
    "slug": "adelaide-enrolled-nurses-rehabilitation-482-494-sponsorship",
    "url": "jobs/adelaide-enrolled-nurses-rehabilitation-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5944678370?utm_medium=api&utm_source=13c876f1",
    "description": "Southern Adelaide Local Health Network – Flinders Medical Centre– Rehabilitation Aged & Palliative Care Salary $70,477 - $79,381 p.a. (Pro Rata) END, $67,883 - $76,413 p.a. (Pro Rata) ENC Multiple Fulltime & Part-time Va..."
  },
  {
    "id": "adzuna-5944620838",
    "title": "Graduate/Junior Technical Engineer",
    "company": "Allan Hall HR",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-29",
    "slug": "sydney-graduatejunior-technical-engineer-482-186-sponsorship",
    "url": "jobs/sydney-graduatejunior-technical-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5944620838?utm_medium=api&utm_source=13c876f1",
    "description": "The Company: Marine & Civil Maintenance (MCM) is an established, industry-leading engineering rehabilitation business specialising in the maintenance and remediation of civil and marine infrastructure across Australia an..."
  },
  {
    "id": "adzuna-5944546312",
    "title": "Engineering Planner",
    "company": "Techforce JobAdder",
    "logoInitial": "T",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-29",
    "slug": "brisbane-engineering-planner-482-494-sponsorship",
    "url": "jobs/brisbane-engineering-planner-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5944546312?utm_medium=api&utm_source=13c876f1",
    "description": "Engineering Planner | Brisbane Join a Brisbane-based team supporting a major Queensland mining project. We are seeking an experienced Engineering Planner for an approximately five-month contract , supporting the delivery..."
  },
  {
    "id": "adzuna-5944207939",
    "title": "Enrolled Nurse",
    "company": "SA Health",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-28",
    "slug": "adelaide-enrolled-nurse-482-494-sponsorship",
    "url": "jobs/adelaide-enrolled-nurse-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5944207939?utm_medium=api&utm_source=13c876f1",
    "description": "Southern Adelaide Local Health Network – Bedford Park – Marjorie Tripp Ward Salary $70,477.00 - $79,381.00 p.a. (Pro Rata) ENDP, $67,883 - $76,413 p.a. ( Pro Rata ) ENC Ongoing Full-Time Contract Available Enrolled Nurse..."
  },
  {
    "id": "jooble-1562607534498993093",
    "title": "Charging Business Development Manager - ANZ",
    "company": "XPENG",
    "logoInitial": "X",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-28",
    "slug": "sydney-charging-business-development-manager-anz-482-186-sponsorship",
    "url": "jobs/sydney-charging-business-development-manager-anz-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1562607534498993093",
    "description": " Responsibilities: \r\n Develop partnerships with top local CPOs and eMSPs to ensure the brand network rollout plan is executed on schedule. \r\n Simultaneously drive V2G business development and deployment in both Australia..."
  },
  {
    "id": "adzuna-5941516095",
    "title": "Dental Assistants - Port Macquarie (Sponsorship available!)",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$55,000 - $78,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252312",
    "posted": "2026-10-26",
    "slug": "sydney-dental-assistants-port-macquarie-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-dental-assistants-port-macquarie-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941516095?utm_medium=api&utm_source=13c876f1",
    "description": "Dental Assistant Opportunities | Port Macquarie Key requirements: Minimum 1 year of dental assisting experience (essential) Reception experience (preferred) Certificate III in Dental Assisting (preferred) Full working ri..."
  },
  {
    "id": "adzuna-5941430374",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "melbourne-midwife-hospital-maternity-482-186-sponsorship",
    "url": "jobs/melbourne-midwife-hospital-maternity-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430374?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Metro Victoria – Expressions of Interest Location: Greater Melbourne and Geelong Employment type: Full-time, permanent Setting: Public and private hospitals – birth suites, anten..."
  },
  {
    "id": "adzuna-5941430384",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "cairns-midwife-hospital-maternity-482-494-sponsorship",
    "url": "jobs/cairns-midwife-hospital-maternity-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430384?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Regional & Remote Queensland – Expressions of Interest Location: Regional, rural and remote Queensland (e.g. Wide Bay, Bundaberg, Rockhampton, Mackay, Townsville, Cairns, Far Nor..."
  },
  {
    "id": "adzuna-5941430340",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "brisbane-midwife-hospital-maternity-482-494-sponsorship",
    "url": "jobs/brisbane-midwife-hospital-maternity-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430340?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | South East Queensland – Expressions of Interest Location: Brisbane, Gold Coast, Sunshine Coast, Ipswich and Toowoomba Employment type: Full-time, permanent Setting: Public and pr..."
  },
  {
    "id": "adzuna-5941430347",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "sydney-midwife-hospital-maternity-482-186-sponsorship",
    "url": "jobs/sydney-midwife-hospital-maternity-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430347?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Metro NSW & ACT – Expressions of Interest Location: Sydney, Newcastle, Wollongong, Central Coast and Canberra Employment type: Full-time, permanent Setting: Public and private ho..."
  },
  {
    "id": "adzuna-5941430345",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "hobart-midwife-hospital-maternity-482-494-sponsorship",
    "url": "jobs/hobart-midwife-hospital-maternity-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430345?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Regional Victoria & Tasmania – Expressions of Interest Location: Regional and rural Victoria (e.g. Ballarat, Bendigo, Gippsland, Shepparton, Mildura, Warrnambool) and Tasmania (H..."
  },
  {
    "id": "adzuna-5941430334",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "adelaide-midwife-hospital-maternity-482-494-sponsorship",
    "url": "jobs/adelaide-midwife-hospital-maternity-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430334?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | South Australia & Northern Territory – Expressions of Interest Location: Adelaide, regional South Australia (e.g. Riverland, Limestone Coast, Eyre Peninsula, Spencer Gulf), Darwi..."
  },
  {
    "id": "adzuna-5941430366",
    "title": "Midwife – Hospital & Maternity",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "perth-midwife-hospital-maternity-482-494-sponsorship",
    "url": "jobs/perth-midwife-hospital-maternity-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941430366?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Western Australia – Expressions of Interest Location: Perth and regional and remote Western Australia (e.g. South West, Great Southern, Wheatbelt, Goldfields, Pilbara, Kimberley)..."
  },
  {
    "id": "adzuna-5941268366",
    "title": "Midwife – Hospital & Maternity | Western Australia",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "perth-midwife-hospital-maternity-western-australia-482-494-sponsorship",
    "url": "jobs/perth-midwife-hospital-maternity-western-australia-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941268366?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Western Australia – Expressions of Interest Location: Perth and regional and remote Western Australia (e.g. South West, Great Southern, Wheatbelt, Goldfields, Pilbara, Kimberley)..."
  },
  {
    "id": "adzuna-5941268297",
    "title": "Midwife – Hospital & Maternity | Regional & Remote NSW",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "sydney-midwife-hospital-maternity-regional-remote-nsw-482-186-sponsorship",
    "url": "jobs/sydney-midwife-hospital-maternity-regional-remote-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941268297?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Regional & Remote NSW – Expressions of Interest Location: Regional, rural and remote New South Wales (e.g. Hunter, Northern Rivers, Mid North Coast, New England, Central West, Ri..."
  },
  {
    "id": "adzuna-5941266595",
    "title": "Midwife – Hospital & Maternity | South Australia & Northern Territory",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "adelaide-midwife-hospital-maternity-south-australia-northern-territory-482-494-sponsorship",
    "url": "jobs/adelaide-midwife-hospital-maternity-south-australia-northern-territory-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941266595?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | South Australia & Northern Territory – Expressions of Interest Location: Adelaide, regional South Australia (e.g. Riverland, Limestone Coast, Eyre Peninsula, Spencer Gulf), Darwi..."
  },
  {
    "id": "adzuna-5941266519",
    "title": "Midwife – Hospital & Maternity | Regional & Remote Queensland",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "cairns-midwife-hospital-maternity-regional-remote-queensland-482-494-sponsorship",
    "url": "jobs/cairns-midwife-hospital-maternity-regional-remote-queensland-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941266519?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Regional & Remote Queensland – Expressions of Interest Location: Regional, rural and remote Queensland (e.g. Wide Bay, Bundaberg, Rockhampton, Mackay, Townsville, Cairns, Far Nor..."
  },
  {
    "id": "adzuna-5941266422",
    "title": "Midwife – Hospital & Maternity | Regional Victoria & Tasmania",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "hobart-midwife-hospital-maternity-regional-victoria-tasmania-482-494-sponsorship",
    "url": "jobs/hobart-midwife-hospital-maternity-regional-victoria-tasmania-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941266422?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Regional Victoria & Tasmania – Expressions of Interest Location: Regional and rural Victoria (e.g. Ballarat, Bendigo, Gippsland, Shepparton, Mildura, Warrnambool) and Tasmania (H..."
  },
  {
    "id": "adzuna-5941266393",
    "title": "Midwife – Hospital & Maternity | Metro NSW & ACT",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "sydney-midwife-hospital-maternity-metro-nsw-act-482-186-sponsorship",
    "url": "jobs/sydney-midwife-hospital-maternity-metro-nsw-act-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941266393?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Metro NSW & ACT – Expressions of Interest Location: Sydney, Newcastle, Wollongong, Central Coast and Canberra Employment type: Full-time, permanent Setting: Public and private ho..."
  },
  {
    "id": "adzuna-5941266391",
    "title": "Midwife – Hospital & Maternity | Metro Victoria",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-25",
    "slug": "melbourne-midwife-hospital-maternity-metro-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-midwife-hospital-maternity-metro-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5941266391?utm_medium=api&utm_source=13c876f1",
    "description": "Midwife – Hospital & Maternity Services | Metro Victoria – Expressions of Interest Location: Greater Melbourne and Geelong Employment type: Full-time, permanent Setting: Public and private hospitals – birth suites, anten..."
  },
  {
    "id": "adzuna-5939917823",
    "title": "GENERAL HANDS & LABOURERS",
    "company": "Express Employment Professionals",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-24",
    "slug": "sydney-general-hands-labourers-482-186-sponsorship",
    "url": "jobs/sydney-general-hands-labourers-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5939917823?utm_medium=api&utm_source=13c876f1",
    "description": "NOW HIRING - GENERAL HANDS & LABOURES, LANDSCAPERS South-West Sydney | $33-$38 per hour | Monday-Friday We are currently seeking reliable and hardworking General Hands and Labourers for multiple ongoing work opportunitie..."
  },
  {
    "id": "adzuna-5939292483",
    "title": "Consultant Psychiatrist | Forensic Mental Health",
    "company": "CC Medical",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-23",
    "slug": "melbourne-consultant-psychiatrist-forensic-mental-health-482-186-sponsorship",
    "url": "jobs/melbourne-consultant-psychiatrist-forensic-mental-health-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5939292483?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant Psychiatrist | Forensic Mental Health Melbourne, Victoria Shape the future of forensic psychiatry through rewarding clinical practice, leadership and service development. Employer visa sponsorship available — ..."
  },
  {
    "id": "adzuna-5938637651",
    "title": "Assistant Restaurant Manager",
    "company": "JRM Hospitality",
    "logoInitial": "J",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 - $85,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "141111",
    "posted": "2026-10-23",
    "slug": "sydney-assistant-restaurant-manager-482-186-sponsorship",
    "url": "jobs/sydney-assistant-restaurant-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5938637651?utm_medium=api&utm_source=13c876f1",
    "description": "Assistant Restaurant Manager | Sydney | $80K-$85K  Super  Tips JRM Hospitality is partnering with one of Sydney's fastest-growing hospitality operators to recruit energetic and ambitious Assistant Restaurant Managers acr..."
  },
  {
    "id": "adzuna-5938050704",
    "title": "Community Support Workers - Sylvania",
    "company": "Just Better Care",
    "logoInitial": "J",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$79,040 - $158,080 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-23",
    "slug": "sydney-community-support-workers-sylvania-482-186-sponsorship",
    "url": "jobs/sydney-community-support-workers-sylvania-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5938050704?utm_medium=api&utm_source=13c876f1",
    "description": "Just Better Care Eastern Suburbs is seeking compassionate, reliable and dedicated female Community Support Workers to support a client living in Sylvania. The role involves providing 8 hours of support per day, helping t..."
  },
  {
    "id": "jooble-2697025880374810385",
    "title": "Lead BESS Commissioning Engineer Australia",
    "company": "NHOA Group",
    "logoInitial": "N",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-23",
    "slug": "perth-lead-bess-commissioning-engineer-australia-482-494-sponsorship",
    "url": "jobs/perth-lead-bess-commissioning-engineer-australia-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2697025880374810385",
    "description": "&nbsp;...headquarters in Perth, NHOA Energy has a global presence: operating in more than 26 countries worldwide with 39 operational sites and <b>employing </b>experts from more than 26 nationalities. \r\n Position: \r\n Con..."
  },
  {
    "id": "adzuna-5938011837",
    "title": "Stonemason",
    "company": "Atlas Talents",
    "logoInitial": "A",
    "location": "Newcastle, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "331112",
    "posted": "2026-10-23",
    "slug": "newcastle-stonemason-482-186-sponsorship",
    "url": "jobs/newcastle-stonemason-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5938011837?utm_medium=api&utm_source=13c876f1",
    "description": "Job Title: Stonemason – Full-Time (Sponsorship Available) Location: Newcastle, NSW We are seeking an experienced Stonemason to join a busy construction team in Newcastle. This is a full-time, long-term role with sponsors..."
  },
  {
    "id": "adzuna-5938010431",
    "title": "Structural Cleaner",
    "company": "Category 5 Labour Management",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "811211",
    "posted": "2026-10-23",
    "slug": "perth-structural-cleaner-482-494-sponsorship",
    "url": "jobs/perth-structural-cleaner-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5938010431?utm_medium=api&utm_source=13c876f1",
    "description": "Structural Cleaner - Port Based Roster: FIFO ex. Perth (7:7 Roster) Location: Port Hedland Employment Type: Casual Structural Cleaner • Meals and Accommodation Provided on 7/7 Roster • Location : Port Hedland • FIFO ex. ..."
  },
  {
    "id": "jooble-2450737441777880945",
    "title": "Lead BESS Commissioning Engineer Australia",
    "company": "NHOA Group",
    "logoInitial": "N",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-23",
    "slug": "sydney-lead-bess-commissioning-engineer-australia-482-186-sponsorship",
    "url": "jobs/sydney-lead-bess-commissioning-engineer-australia-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2450737441777880945",
    "description": " About NHOA Energy \r\n NHOA Energy are a pioneer of utility-scale grid-connected Battery Energy Storage Systems (BESS), granting world-class power supply of firmed renewable energy into the grid.By leveraging our technolo..."
  },
  {
    "id": "adzuna-5937877025",
    "title": "General Practitioner – Regional & Rural",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-10-22",
    "slug": "adelaide-general-practitioner-regional-rural-482-494-sponsorship",
    "url": "jobs/adelaide-general-practitioner-regional-rural-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877025?utm_medium=api&utm_source=13c876f1",
    "description": "General Practitioner – Regional & Rural | WA, SA & NT – Expressions of Interest Location: Regional, rural and remote Western Australia, South Australia and the Northern Territory Employment type: Full-time, permanent Reg..."
  },
  {
    "id": "adzuna-5937877087",
    "title": "Registered Nurse – Aged Care",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "melbourne-registered-nurse-aged-care-482-186-sponsorship",
    "url": "jobs/melbourne-registered-nurse-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877087?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Aged Care | Metro Victoria – Expressions of Interest Location: Greater Melbourne and Geelong Employment type: Full-time, permanent Setting: Residential aged care, community and home care Registration r..."
  },
  {
    "id": "adzuna-5937877028",
    "title": "Registered Nurse – Aged Care",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "perth-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877028?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Aged Care | Western Australia – Expressions of Interest Location: Perth and regional and remote Western Australia (e.g. South West, Great Southern, Wheatbelt, Goldfields, Pilbara, Kimberley) Employment..."
  },
  {
    "id": "adzuna-5937877023",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "sydney-registered-nurse-hospital-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-hospital-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877023?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | Metro NSW & ACT – Expressions of Interest Location: Sydney, Newcastle, Wollongong, Central Coast and Canberra Employment type: Full-time, permanent Setting: Public and private hospitals – me..."
  },
  {
    "id": "adzuna-5937877066",
    "title": "Registered Nurse – Aged Care",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "cairns-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/cairns-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877066?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Aged Care | Regional & Remote Queensland – Expressions of Interest Location: Regional, rural and remote Queensland (e.g. Wide Bay, Bundaberg, Rockhampton, Mackay, Townsville, Cairns, Far North and Outb..."
  },
  {
    "id": "adzuna-5937877049",
    "title": "Registered Nurse – Aged Care",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "hobart-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/hobart-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877049?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Aged Care | Regional Victoria & Tasmania – Expressions of Interest Location: Regional and rural Victoria (e.g. Ballarat, Bendigo, Gippsland, Shepparton, Mildura, Warrnambool) and Tasmania (Hobart, Laun..."
  },
  {
    "id": "adzuna-5937877015",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "brisbane-registered-nurse-hospital-482-494-sponsorship",
    "url": "jobs/brisbane-registered-nurse-hospital-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877015?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | South East Queensland – Expressions of Interest Location: Brisbane, Gold Coast, Sunshine Coast, Ipswich and Toowoomba Employment type: Full-time, permanent Setting: Public and private hospit..."
  },
  {
    "id": "adzuna-5937877068",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "perth-registered-nurse-hospital-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-hospital-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877068?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | Western Australia – Expressions of Interest Location: Perth and regional and remote Western Australia (e.g. South West, Great Southern, Wheatbelt, Goldfields, Pilbara, Kimberley) Employment ..."
  },
  {
    "id": "adzuna-5937877032",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "cairns-registered-nurse-hospital-482-494-sponsorship",
    "url": "jobs/cairns-registered-nurse-hospital-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877032?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | Regional & Remote Queensland – Expressions of Interest Location: Regional, rural and remote Queensland (e.g. Wide Bay, Bundaberg, Rockhampton, Mackay, Townsville, Cairns, Far North and Outba..."
  },
  {
    "id": "adzuna-5937877030",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "adelaide-registered-nurse-hospital-482-494-sponsorship",
    "url": "jobs/adelaide-registered-nurse-hospital-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877030?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | South Australia & Northern Territory – Expressions of Interest Location: Adelaide, regional South Australia (e.g. Riverland, Limestone Coast, Eyre Peninsula, Spencer Gulf), Darwin, Alice Spr..."
  },
  {
    "id": "adzuna-5937877006",
    "title": "General Practitioner – Regional & Rural",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-10-22",
    "slug": "sydney-general-practitioner-regional-rural-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-regional-rural-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877006?utm_medium=api&utm_source=13c876f1",
    "description": "General Practitioner – Regional & Rural | NSW & ACT – Expressions of Interest Location: Regional and rural New South Wales and the ACT surrounds Employment type: Full-time, permanent Registration required: Current AHPRA ..."
  },
  {
    "id": "adzuna-5937877004",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "melbourne-registered-nurse-hospital-482-186-sponsorship",
    "url": "jobs/melbourne-registered-nurse-hospital-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877004?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | Metro Victoria – Expressions of Interest Location: Greater Melbourne and Geelong Employment type: Full-time, permanent Setting: Public and private hospitals – medical, surgical, ICU and crit..."
  },
  {
    "id": "adzuna-5937877012",
    "title": "Registered Nurse – Aged Care",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "adelaide-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/adelaide-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937877012?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Aged Care | South Australia & Northern Territory – Expressions of Interest Location: Adelaide, regional South Australia (e.g. Riverland, Limestone Coast, Eyre Peninsula, Spencer Gulf), Darwin, Alice Sp..."
  },
  {
    "id": "adzuna-5937876996",
    "title": "Registered Nurse – Hospital",
    "company": "SOLVi Recruitment",
    "logoInitial": "S",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-22",
    "slug": "hobart-registered-nurse-hospital-482-494-sponsorship",
    "url": "jobs/hobart-registered-nurse-hospital-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937876996?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Hospital | Regional Victoria & Tasmania – Expressions of Interest Location: Regional and rural Victoria (e.g. Ballarat, Bendigo, Gippsland, Shepparton, Mildura, Warrnambool) and Tasmania (Hobart, Launc..."
  },
  {
    "id": "adzuna-5937592980",
    "title": "Product Analytics Data Scientist with Visa Sponsorship",
    "company": "Dreamerlabs",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-22",
    "slug": "sydney-product-analytics-data-scientist-with-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-product-analytics-data-scientist-with-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937592980?utm_medium=api&utm_source=13c876f1",
    "description": "Dreamerlabs, based in Sydney, Australia, is building a new category of interactive entertainment powered by AI characters and real-time experiences. We hire globally and work in-person in Sydney. You’ll own product analy..."
  },
  {
    "id": "adzuna-5937517636",
    "title": "Halal Slaughter Person",
    "company": "Australian Country Choice",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351211",
    "posted": "2026-10-22",
    "slug": "sydney-halal-slaughter-person-482-186-sponsorship",
    "url": "jobs/sydney-halal-slaughter-person-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937517636?utm_medium=api&utm_source=13c876f1",
    "description": "Description Australian Country Choice is dedicated to the best-practice supply of high-quality meat products to domestic and export markets. Our operations encompass everything from cattle breeding, backgrounding and lot..."
  },
  {
    "id": "adzuna-5937485571",
    "title": "Occupational Therapist",
    "company": "Mildura Disability Support Services",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$110,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-22",
    "slug": "sydney-occupational-therapist-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5937485571?utm_medium=api&utm_source=13c876f1",
    "description": "Occupational Therapist – Mildura Disability Support Services Location: Buronga / Mildura VIC–NSW Border About the role Mildura Disability Support Services (MDSS) is looking for an Occupational Therapist to join our growi..."
  },
  {
    "id": "adzuna-5936786331",
    "title": "Halal Slaughter Person",
    "company": "Australian Country Choice",
    "logoInitial": "A",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "hospitality",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351211",
    "posted": "2026-10-22",
    "slug": "brisbane-halal-slaughter-person-482-494-sponsorship",
    "url": "jobs/brisbane-halal-slaughter-person-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5936786331?utm_medium=api&utm_source=13c876f1",
    "description": "Description Australian Country Choice is dedicated to the best-practice supply of high-quality meat products to domestic and export markets. Our operations encompass everything from cattle breeding, backgrounding and lot..."
  },
  {
    "id": "adzuna-5936753885",
    "title": "Community Physiotherapist | Relocation Support and Sponsorship Available",
    "company": "4 Healthcare Recruitment",
    "logoInitial": "4",
    "location": "Geelong, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252511",
    "posted": "2026-10-22",
    "slug": "geelong-community-physiotherapist-relocation-support-and-sponsorship-available-482-186-sponsorship",
    "url": "jobs/geelong-community-physiotherapist-relocation-support-and-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5936753885?utm_medium=api&utm_source=13c876f1",
    "description": "Community Physiotherapist Key Points Permanent opportunity with a varied caseload and the flexibility to work across different community settings Relocation assistance and settling-in support may be available for eligibl..."
  },
  {
    "id": "adzuna-5936753857",
    "title": "Trainee Optical Dispenser | Castle Hill | No optical experience Required !",
    "company": "Eyecare Recruitment",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$54,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-22",
    "slug": "sydney-trainee-optical-dispenser-castle-hill-no-optical-experience-required-482-186-sponsorship",
    "url": "jobs/sydney-trainee-optical-dispenser-castle-hill-no-optical-experience-required-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5936753857?utm_medium=api&utm_source=13c876f1",
    "description": "Start a new career with our client, an optical practice in Castle Hill. This part-time opportunity combines reception and optical dispensing, with support to complete the Certificate IV in Optical Dispensing. Why join th..."
  },
  {
    "id": "adzuna-5936531774",
    "title": "Registered Nurse - Community Aged Care",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-21",
    "slug": "darwin-registered-nurse-community-aged-care-482-494-sponsorship",
    "url": "jobs/darwin-registered-nurse-community-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5936531774?se=ek4lQm7N8RGI54QPRiQJtQ&utm_medium=api&utm_source=13c876f1&v=5C98501977472C167F5243D7D0C9638A4C496164",
    "description": "Registered Nurse – Aged Care | Darwin, NT FREE Accommodation | Company Car Ready for a change of scenery? Relocate to sunny Darwin with FREE accommodation, a company car and excellent career opportunities! We're recruiti..."
  },
  {
    "id": "adzuna-5935475077",
    "title": "Consultant Anaesthetics",
    "company": "Connecting the Docs",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$300,000 - $500,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-21",
    "slug": "melbourne-consultant-anaesthetics-482-186-sponsorship",
    "url": "jobs/melbourne-consultant-anaesthetics-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5935475077?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant Anaesthetist Multiple Opportunities Across Victoria's Loddon Mallee Region Looking for More Than Just Another Anaesthetic Role? Connecting the Docs is partnering with several leading health services across Vic..."
  },
  {
    "id": "adzuna-5935474818",
    "title": "General Practitioner Kilmore",
    "company": "RWAV",
    "logoInitial": "R",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-10-21",
    "slug": "melbourne-general-practitioner-kilmore-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-kilmore-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5935474818?utm_medium=api&utm_source=13c876f1",
    "description": "General Practitioner Opportunity - Kilmore, Victoria An exciting opportunity is available for a General Practitioner to join Kilmore Medical Practice in Kilmore, Victoria. Located within the Mitchell Shire Council local ..."
  },
  {
    "id": "adzuna-5935262552",
    "title": "HR Admin contracts in Windsor! Immediate start till April 2027",
    "company": "Davidson",
    "logoInitial": "D",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-20",
    "slug": "brisbane-hr-admin-contracts-in-windsor-immediate-start-till-april-2027-482-494-sponsorship",
    "url": "jobs/brisbane-hr-admin-contracts-in-windsor-immediate-start-till-april-2027-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5935262552?se=nEGj963M8RGUlZcLbi9XfA&utm_medium=api&utm_source=13c876f1&v=2E8D47CA352CCC29705450E40344DAB7B1DDEB9B",
    "description": "HR Administrator | 2 Contract Opportunities Immediate Start | Windsor | Contract to April 2027 $ 43.94 - $49.90  super per hour (dependent on experience) Are you an experienced HR Administrator who enjoys being hands-on,..."
  },
  {
    "id": "adzuna-5935159254",
    "title": "Registered Nurse - St Joseph's Coffs Harbour - Sponsorship Available",
    "company": "Catholic Health Care",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-20",
    "slug": "sydney-registered-nurse-st-josephs-coffs-harbour-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-st-josephs-coffs-harbour-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5935159254?utm_medium=api&utm_source=13c876f1",
    "description": "Permanent Full-time RN position – secure hours with flexibility to suit your lifestyle $48.50 - $60.30 per hour  Super  NFP tax benefits – take home more of what you earn Make a real difference in residents’ lives – deli..."
  },
  {
    "id": "adzuna-5935131680",
    "title": "Head Chef - Clyde North Terrace Care Community",
    "company": "Opal HealthCare",
    "logoInitial": "O",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351311",
    "posted": "2026-10-20",
    "slug": "sydney-head-chef-clyde-north-terrace-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-clyde-north-terrace-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5935131680?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=A539C0DA2856E094796C3A6D773072F4E852EE1A",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\"Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hear..."
  },
  {
    "id": "adzuna-5935131266",
    "title": "Personal Care Assistant Casual - Bodington Wentworth Falls",
    "company": "Catholic Healthcare",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423313",
    "posted": "2026-10-20",
    "slug": "sydney-personal-care-assistant-casual-bodington-wentworth-falls-482-186-sponsorship",
    "url": "jobs/sydney-personal-care-assistant-casual-bodington-wentworth-falls-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5935131266?se=qnL3_63M8RGgaNNqWVqVbg&utm_medium=api&utm_source=13c876f1&v=8B39F9D1BEF0B6570F3B0694492D0956BF925CB4",
    "description": "Location - Bodington, Wentworth Falls Casual – (minimum 3 days availability preferred, AM/PM/ND) Pay rate – $38 per hour  superannuation Not for profit employer, so you pay less tax! Exciting things are happening at Cath..."
  },
  {
    "id": "adzuna-5934854870",
    "title": "Building Associate | ANZSCO 312112",
    "company": "Dust Free Concrete Cutting Pty Ltd",
    "logoInitial": "D",
    "location": "Perth, WA",
    "state": "WA",
    "category": "engineering",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$79,500 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "312112",
    "posted": "2026-10-20",
    "slug": "perth-building-associate-anzsco-312112-482-494-sponsorship",
    "url": "jobs/perth-building-associate-anzsco-312112-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5934854870?utm_medium=api&utm_source=13c876f1",
    "description": "Building Associate | ANZSCO 312112 Full Time (38 hours per week) | Perth, WA. Salary: $79,500 – $90,000 plus superannuation (commensurate with experience) About the Opportunity Dust Free Concrete Cutting is a specialist ..."
  },
  {
    "id": "adzuna-5934277678",
    "title": "Occupational Therapist - Tailored Caseload",
    "company": "Brightside Recruitment",
    "logoInitial": "B",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 - $115,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-20",
    "slug": "melbourne-occupational-therapist-tailored-caseload-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-tailored-caseload-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5934277678?utm_medium=api&utm_source=13c876f1",
    "description": "Occupational Therapist Location: Western & Northern Melbourne Employment Type: Full-Time (Part-Time Also Considered) Salary: Up to $115k  Super  bonuses  car options We’re partnering with one of our long-standing and mos..."
  },
  {
    "id": "jooble-4071010203346431105",
    "title": "SOC Monitoring and Response Analyst II",
    "company": "Mastercard",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-20",
    "slug": "sydney-soc-monitoring-and-response-analyst-ii-482-186-sponsorship",
    "url": "jobs/sydney-soc-monitoring-and-response-analyst-ii-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4071010203346431105",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "jooble-3748758234085527849",
    "title": "Manager, Payments Solutions & Commercialisation (ANZ)",
    "company": "Mastercard",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-20",
    "slug": "sydney-manager-payments-solutions-commercialisation-anz-482-186-sponsorship",
    "url": "jobs/sydney-manager-payments-solutions-commercialisation-anz-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3748758234085527849",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "adzuna-5934126270",
    "title": "Experienced Registered Migration Agent",
    "company": "Ironbrij Pty Ltd",
    "logoInitial": "I",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-19",
    "slug": "sydney-experienced-registered-migration-agent-482-186-sponsorship",
    "url": "jobs/sydney-experienced-registered-migration-agent-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5934126270?utm_medium=api&utm_source=13c876f1",
    "description": "About Sellanes Farasat Immigration Sellanes Farasat Immigration is an established Australian immigration practice providing strategic and practical immigration assistance to individuals, families, employers and major cor..."
  },
  {
    "id": "adzuna-5933863113",
    "title": "Business Development Manager NSW - Luxaflex",
    "company": "Hunter Douglas",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-19",
    "slug": "sydney-business-development-manager-nsw-luxaflex-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-nsw-luxaflex-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5933863113?se=SnLoO9PL8RGS5dXBZxj2tQ&utm_medium=api&utm_source=13c876f1&v=6B9540897BCD49356352887818AE2738FDE15793",
    "description": "Hunter Douglas is the world’s leading manufacturer of window coverings and a major manufacturer of architectural products. We are a brand that you know and trust. With more than 100 years of innovation, we’ve defined our..."
  },
  {
    "id": "jooble--1574321566576245437",
    "title": "HR Business Partner",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-19",
    "slug": "sydney-hr-business-partner-482-186-sponsorship",
    "url": "jobs/sydney-hr-business-partner-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1574321566576245437",
    "description": " About the Company:  TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and ..."
  },
  {
    "id": "adzuna-5932305356",
    "title": "Systems Engineer",
    "company": "GE Vernova",
    "logoInitial": "G",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "263111",
    "posted": "2026-10-18",
    "slug": "sydney-systems-engineer-482-186-sponsorship",
    "url": "jobs/sydney-systems-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5932305356?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Summary Your role as the Systems Engineer will be part of the multi-disciplined engineering team, that sits within the global engineering organisation and will execute technical projects of world class po..."
  },
  {
    "id": "adzuna-5931981437",
    "title": "HR Admin contracts in Milton! Immediate start till April 2027",
    "company": "Davidson",
    "logoInitial": "D",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-17",
    "slug": "brisbane-hr-admin-contracts-in-milton-immediate-start-till-april-2027-482-494-sponsorship",
    "url": "jobs/brisbane-hr-admin-contracts-in-milton-immediate-start-till-april-2027-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5931981437?utm_medium=api&utm_source=13c876f1",
    "description": "HR Administrator | 2 Contract Opportunities Immediate Start | Milton | Contract to April 2027 $ 43.94 - $49.90  super per hour (dependent on experience) Are you an experienced HR Administrator who enjoys being hands-on, ..."
  },
  {
    "id": "adzuna-5931939788",
    "title": "Senior Shotcreter",
    "company": "The Rix Group",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-17",
    "slug": "sydney-senior-shotcreter-482-186-sponsorship",
    "url": "jobs/sydney-senior-shotcreter-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5931939788?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Shotcreter Immediate Start- Sydney About Us The Rix Group is a progressive specialist contractor who leads the way in managing challenging and diverse ground engineering projects . We provide a multitude of ground..."
  },
  {
    "id": "adzuna-5931937076",
    "title": "Piling Rig Operators",
    "company": "The Rix Group",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-17",
    "slug": "sydney-piling-rig-operators-482-186-sponsorship",
    "url": "jobs/sydney-piling-rig-operators-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5931937076?utm_medium=api&utm_source=13c876f1",
    "description": "Piling Rig Operators - Immediate Start Sydney About Us The Rix Group is a progressive specialist contractor who leads the way in managing challenging and diverse ground engineering projects . We provide a multitude of gr..."
  },
  {
    "id": "adzuna-5931470328",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 - $200,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252312",
    "posted": "2026-10-17",
    "slug": "cairns-private-dentist-482-494-sponsorship",
    "url": "jobs/cairns-private-dentist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5931470328?utm_medium=api&utm_source=13c876f1",
    "description": "Private Dentist Jobs in Cairns, Queensland, Australia. Established private dental practice, excellent earning potential, busy patient base, 40% of fees less laboratory costs, visa sponsorship available, potential future ..."
  },
  {
    "id": "adzuna-5931314360",
    "title": "Home Care Worker - McLaren Vale SA",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-17",
    "slug": "adelaide-home-care-worker-mclaren-vale-sa-482-494-sponsorship",
    "url": "jobs/adelaide-home-care-worker-mclaren-vale-sa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5931314360?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=6CE6C81EDEA02EAEE5268EB3323DA352EEDAF6CF",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "jooble-8190222152388991298",
    "title": "Sales Commercial and Rebate Coordinator",
    "company": "Zeekr International",
    "logoInitial": "Z",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "511112",
    "posted": "2026-10-17",
    "slug": "sydney-sales-commercial-and-rebate-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-sales-commercial-and-rebate-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8190222152388991298",
    "description": " About ZEEKR  ZEEKR is a premium electric vehicle brand under the Geely Group, dedicated to pioneering innovation in smart, sustainable mobility. As part of Geely’s ecosystem, ZEEKR embodies cutting-edge design, advanced..."
  },
  {
    "id": "adzuna-5930952647",
    "title": "Mental Health Clinician",
    "company": "Sharp & Carter",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-17",
    "slug": "sydney-mental-health-clinician-482-186-sponsorship",
    "url": "jobs/sydney-mental-health-clinician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930952647?utm_medium=api&utm_source=13c876f1",
    "description": "Mental Health Clinicians – Community Mental Health | Regional Victoria Full-Time / Part time Permanent | 482 Visa Sponsorship Available Victorian Public health benefits  Salary packaging $7K Relocation support | Company ..."
  },
  {
    "id": "adzuna-5930721487",
    "title": "Aged Care and Disability Support Job",
    "company": "Study and Work",
    "logoInitial": "S",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-17",
    "slug": "adelaide-aged-care-and-disability-support-job-482-494-sponsorship",
    "url": "jobs/adelaide-aged-care-and-disability-support-job-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930721487?utm_medium=api&utm_source=13c876f1",
    "description": "Are you a qualified and compassionate care professional looking for an opportunity to work in Australia? STUDY AND WORK is seeking expressions of interest from experienced overseas care professionals for potential opport..."
  },
  {
    "id": "adzuna-5930721503",
    "title": "Aged Care and Disability Support Job",
    "company": "Study and Work",
    "logoInitial": "S",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-17",
    "slug": "perth-aged-care-and-disability-support-job-482-494-sponsorship",
    "url": "jobs/perth-aged-care-and-disability-support-job-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930721503?utm_medium=api&utm_source=13c876f1",
    "description": "Are you a qualified and compassionate care professional looking for an opportunity to work in Australia? STUDY AND WORK is seeking expressions of interest from experienced overseas care professionals for potential opport..."
  },
  {
    "id": "adzuna-5930721511",
    "title": "Aged Care and Disability Support Job",
    "company": "Study and Work",
    "logoInitial": "S",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-17",
    "slug": "darwin-aged-care-and-disability-support-job-482-494-sponsorship",
    "url": "jobs/darwin-aged-care-and-disability-support-job-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930721511?utm_medium=api&utm_source=13c876f1",
    "description": "Are you a qualified and compassionate care professional looking for an opportunity to work in Australia? STUDY AND WORK is seeking expressions of interest from experienced overseas care professionals for potential opport..."
  },
  {
    "id": "adzuna-5930720047",
    "title": "Occupational Therapist",
    "company": "MediRecruit",
    "logoInitial": "M",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-17",
    "slug": "brisbane-occupational-therapist-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930720047?utm_medium=api&utm_source=13c876f1",
    "description": "About the Role: We are seeking an Occupational Therapist to join a well-established national allied health group at their clinic in Maryborough, QLD. You will work within a multidisciplinary team alongside physiotherapis..."
  },
  {
    "id": "adzuna-5930720053",
    "title": "Occupational Therapist",
    "company": "MediRecruit",
    "logoInitial": "M",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-17",
    "slug": "melbourne-occupational-therapist-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930720053?utm_medium=api&utm_source=13c876f1",
    "description": "About the Role: We are seeking an Occupational Therapist to join a well-established national allied health group at their clinic in Shepparton, VIC. You will work within a multidisciplinary team alongside physiotherapist..."
  },
  {
    "id": "adzuna-5930720042",
    "title": "Occupational Therapist",
    "company": "MediRecruit",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-17",
    "slug": "perth-occupational-therapist-482-494-sponsorship",
    "url": "jobs/perth-occupational-therapist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930720042?utm_medium=api&utm_source=13c876f1",
    "description": "About the Role: We are seeking an Occupational Therapist to join a well-established national allied health group at their clinic in Kalgoorlie, WA. You will work within a multidisciplinary team alongside physiotherapists..."
  },
  {
    "id": "adzuna-5930717292",
    "title": "Certificate III and Diploma Educator Opportunities",
    "company": "Technical Focus Pty Ltd t/as Talent Focus",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$62,400 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-17",
    "slug": "sydney-certificate-iii-and-diploma-educator-opportunities-482-186-sponsorship",
    "url": "jobs/sydney-certificate-iii-and-diploma-educator-opportunities-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930717292?utm_medium=api&utm_source=13c876f1",
    "description": "Are you a passionate Early Childhood Educator looking for your next opportunity? Talent Focus Education has partnered with a well-established and recognised early learning provider that is continuing to grow its teams ac..."
  },
  {
    "id": "adzuna-5930022323",
    "title": "Home Care Worker - Greek Speaker - Cheltenham VIC",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-16",
    "slug": "melbourne-home-care-worker-greek-speaker-cheltenham-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-greek-speaker-cheltenham-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5930022323?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=EAFFCD626BEE3BCCA3A057D0240886FFD3804D39",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5930021961",
    "title": "Senior Consultant",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-16",
    "slug": "sydney-senior-consultant-482-186-sponsorship",
    "url": "jobs/sydney-senior-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5930021961?se=yKCIIFTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=051AB88F2A6A20881ED2FE325B6A5FD22523F88F",
    "description": "Line of Service Tax Industry/Sector Not Applicable Specialism International Tax Services Management Level Senior Associate Job Description & Summary Education (if blank, degree and/or field of study not specified) Degree..."
  },
  {
    "id": "adzuna-5930017431",
    "title": "Assistant Manager- Front Office",
    "company": "Accor",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-16",
    "slug": "sydney-assistant-manager-front-office-482-186-sponsorship",
    "url": "jobs/sydney-assistant-manager-front-office-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5930017431?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description Work Your Way to Pullman Sydney Hyde Park! Our 241 room, Premium Hotel is located next to the beautiful Hyde Park and on the doorstep of some of Sydney's most vibrant restaurants, bars, shopping and e..."
  },
  {
    "id": "adzuna-5930017307",
    "title": "JUNIOR PUBLICIST",
    "company": "Simone Development",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-16",
    "slug": "sydney-junior-publicist-482-186-sponsorship",
    "url": "jobs/sydney-junior-publicist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5930017307?se=yKCIIFTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=851DE6FF21F341098731B9718B2BAE557A900668",
    "description": "The Job Profile Simon & Schuster Australia are looking for a dynamic and creative Junior Publicist to join the Marketing & Publicity team. Reporting to the Publicity Manager, the Junior Publicist role will be focused on ..."
  },
  {
    "id": "adzuna-5930017072",
    "title": "Project Control Manager - New Zealand",
    "company": "ConsultANZ",
    "logoInitial": "C",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-16",
    "slug": "brisbane-project-control-manager-new-zealand-482-494-sponsorship",
    "url": "jobs/brisbane-project-control-manager-new-zealand-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5930017072?se=yKCIIFTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=43AD935933BD5C4A705C3032D5A762CC260F847B",
    "description": "About the Company ConsultANZ is seeking a Project Control Manager to join a top civil engineering and construction company in New Zealand. This role involves working across New Zealand on large and challenging civil engi..."
  },
  {
    "id": "jooble-7557463839661273902",
    "title": "Creative & Digital Project Manager",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-15",
    "slug": "sydney-creative-digital-project-manager-482-186-sponsorship",
    "url": "jobs/sydney-creative-digital-project-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7557463839661273902",
    "description": " About TMGM  TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices ..."
  },
  {
    "id": "jooble-2179717376314482115",
    "title": "Director, Specialist Sales, Transfer Solutions",
    "company": "Mastercard",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-15",
    "slug": "sydney-director-specialist-sales-transfer-solutions-482-186-sponsorship",
    "url": "jobs/sydney-director-specialist-sales-transfer-solutions-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2179717376314482115",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "jooble-5878508792206929253",
    "title": "Network Operation Manager (Automotive/OEM)",
    "company": "Zeekr International",
    "logoInitial": "Z",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-15",
    "slug": "sydney-network-operation-manager-automotiveoem-482-186-sponsorship",
    "url": "jobs/sydney-network-operation-manager-automotiveoem-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5878508792206929253",
    "description": " About ZEEKR  ZEEKR is a premium electric vehicle brand under the Geely Group, dedicated to pioneering innovation in smart, sustainable mobility. As part of Geely’s ecosystem, ZEEKR embodies cutting-edge design, advanced..."
  },
  {
    "id": "adzuna-5928503705",
    "title": "Senior Child Protection Practitioner, Bayside Peninsula Area",
    "company": "Department of Families, Fairness and Housing",
    "logoInitial": "D",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-15",
    "slug": "melbourne-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5928503705?utm_medium=api&utm_source=13c876f1",
    "description": "The Department of Families, Fairness and Housing (DFFH) works hard to create equal opportunities for all Victorians to live a safe, respected and valued life. Our areas of focus are child protection, housing, disability,..."
  },
  {
    "id": "adzuna-5928467017",
    "title": "Financial Accountant",
    "company": "Simone Development",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "finance",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "221111",
    "posted": "2026-10-15",
    "slug": "sydney-financial-accountant-482-186-sponsorship",
    "url": "jobs/sydney-financial-accountant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5928467017?utm_medium=api&utm_source=13c876f1",
    "description": "The Job Profile Reporting to the Deputy Head of Finance, the Financial Accountant is an integral part of the S&S Australia Finance team, central to our monthly financial reporting, smooth running of AP and AR processes, ..."
  },
  {
    "id": "adzuna-5928466890",
    "title": "Head Chef - Camberwell Gables",
    "company": "Opal HealthCare",
    "logoInitial": "O",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351311",
    "posted": "2026-10-15",
    "slug": "sydney-head-chef-camberwell-gables-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-camberwell-gables-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5928466890?se=_qagP1TJ8RGndsMxFMANcw&utm_medium=api&utm_source=13c876f1&v=944B7C075B086ACE19D1AA016DA9CB68AAC12C70",
    "description": "\"At Opal HealthCare, we know that companies don't succeed, people do.\"Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that C.A.R.E is at the h..."
  },
  {
    "id": "adzuna-5927590645",
    "title": "Safety Manager I Electrical Contractor",
    "company": "Powerstaff",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$120,000 - $150,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "341111",
    "posted": "2026-10-15",
    "slug": "sydney-safety-manager-i-electrical-contractor-482-186-sponsorship",
    "url": "jobs/sydney-safety-manager-i-electrical-contractor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5927590645?utm_medium=api&utm_source=13c876f1",
    "description": "YOUR NEXT COMPANY Powerstaff is partnering with an established, owner-led electrical contractor in Brentwood, California to hire a Safety Manager. Our client delivers technical electrical work across data center, life sc..."
  },
  {
    "id": "jooble--515508225448041749",
    "title": "Sales Manager/ Director - Australian Market (ESS & EV)",
    "company": "Gotion",
    "logoInitial": "G",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "131112",
    "posted": "2026-10-15",
    "slug": "sydney-sales-manager-director-australian-market-ess-ev-482-186-sponsorship",
    "url": "jobs/sydney-sales-manager-director-australian-market-ess-ev-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-515508225448041749",
    "description": " Key Responsibilities \r\n Develop and execute sales strategies for the Australian ESS & EV markets. \r\n Identify and engage new customers, distributors, and partners. \r\n Manage end-to-end sales processes including proposal..."
  },
  {
    "id": "adzuna-5927512913",
    "title": "Permanent Registered Nurse – Aged Care",
    "company": "Blu Healthcare",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-14",
    "slug": "brisbane-permanent-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/brisbane-permanent-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5927512913?se=oiAFOfjH8RGMeuQWzwoBfw&utm_medium=api&utm_source=13c876f1&v=5739799EA9BD66003F0B40B565EB4C739FF57DF8",
    "description": "About BLU Healthcare BLU Healthcare is a leading healthcare recruitment agency supporting aged care facilities, hospitals, NDIS providers and community care services across Australia. We connect healthcare professionals ..."
  },
  {
    "id": "adzuna-5927213863",
    "title": "Skilled Scaffolder – 40–60h/Wk, Visa Sponsorship",
    "company": "Employer Sponsored Jobs",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$34,440 - $55,104 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-14",
    "slug": "sydney-skilled-scaffolder-4060hwk-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-skilled-scaffolder-4060hwk-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5927213863?utm_medium=api&utm_source=13c876f1",
    "description": "Agrowingscaffoldingteam is seeking dependable Scaffolders and Scaffold Labourers who take pride in safe, quality work. This opportunity suits people who can demonstrate the right experience, practical skills and professi..."
  },
  {
    "id": "jooble--2500625842554656686",
    "title": "Project Developer, Charging",
    "company": "Tesla",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-14",
    "slug": "sydney-project-developer-charging-482-186-sponsorship",
    "url": "jobs/sydney-project-developer-charging-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2500625842554656686",
    "description": " What To Expect \r\n Tesla is looking for an excellent Project Developer to join our Charging team, to autonomously drive Tesla’s charging programs forward. This position will focus on the discovery of new charging locatio..."
  },
  {
    "id": "adzuna-5925747855",
    "title": "Melbourne - Northern Suburbs | Primary SEN Teacher | Term 1, 2027",
    "company": "AndFound",
    "logoInitial": "A",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-13",
    "slug": "melbourne-melbourne-northern-suburbs-primary-sen-teacher-term-1-2027-482-186-sponsorship",
    "url": "jobs/melbourne-melbourne-northern-suburbs-primary-sen-teacher-term-1-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5925747855?utm_medium=api&utm_source=13c876f1",
    "description": "Melbourne - Northern Suburbs | Primary SEN Teacher | Term 1, 2027 Are you ready to plan your next move? AndFound Educate is currently partnering with a specialist school in Melbourne's north to appoint multiple Primary C..."
  },
  {
    "id": "adzuna-5925702812",
    "title": "Senior Construction Project Manager",
    "company": "Hays",
    "logoInitial": "H",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "133111",
    "posted": "2026-10-13",
    "slug": "brisbane-senior-construction-project-manager-482-494-sponsorship",
    "url": "jobs/brisbane-senior-construction-project-manager-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925702812?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=8899798C3576F1BCFDEB2109B19B9B96F6CF8579",
    "description": "Lead the delivery of a landmark tourism and hospitality development project in Vanuatu. Offering a $180K base salary, 10% retention bonus, relocation support, quarterly flights and visa sponsorship, this is a rare opport..."
  },
  {
    "id": "adzuna-5925214065",
    "title": "360 Permanent Recruitment Consultant – Sydney CBD",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-13",
    "slug": "sydney-360-permanent-recruitment-consultant-sydney-cbd-482-186-sponsorship",
    "url": "jobs/sydney-360-permanent-recruitment-consultant-sydney-cbd-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925214065?se=BMg-RvjH8RGTY4AJ4znMGw&utm_medium=api&utm_source=13c876f1&v=0CD9A73158118928653C4AB48ACEEBF6AD5B5444",
    "description": "Employment Group has multiple opportunities for experienced Perm recruiters within our various Divisions based in our brand new Sydney CBD offices. We are looking for seasoned recruiters with a minimum of 2 years experie..."
  },
  {
    "id": "adzuna-5925213899",
    "title": "Team Manager, Child Protection After Hours",
    "company": "Department of Families, Fairness and Housing",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-13",
    "slug": "sydney-team-manager-child-protection-after-hours-482-186-sponsorship",
    "url": "jobs/sydney-team-manager-child-protection-after-hours-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925213899?se=6rZfegHH8RGoaItcvmTvnw&utm_medium=api&utm_source=13c876f1&v=79322F009B982D0EA0190D40E91DD0D51B5B2E89",
    "description": "The Department of Families, Fairness and Housing (DFFH) works hard to create equal opportunities for all Victorians to live a safe, respected and valued life. Our areas of focus are child protection, housing, disability,..."
  },
  {
    "id": "adzuna-5925213443",
    "title": "Accounts Payable/Receivable Administrator",
    "company": "Profile Build Group Unit Trust",
    "logoInitial": "P",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "511112",
    "posted": "2026-10-13",
    "slug": "brisbane-accounts-payablereceivable-administrator-482-494-sponsorship",
    "url": "jobs/brisbane-accounts-payablereceivable-administrator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925213443?se=FmkVOvjH8RG3cvu8UsIQxQ&utm_medium=api&utm_source=13c876f1&v=2D9407FEB69431AF15898413522768361D5A6E75",
    "description": "About the Role We’re looking for an Accounts & Administration Officer to support the financial and administrative operations of our busy insurance building company. This is a hands-on role best suited to someone with an ..."
  },
  {
    "id": "adzuna-5925213114",
    "title": "Pharmacist",
    "company": "Douglas Chemists Group",
    "logoInitial": "D",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "251513",
    "posted": "2026-10-13",
    "slug": "brisbane-pharmacist-482-494-sponsorship",
    "url": "jobs/brisbane-pharmacist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925213114?se=4qjEIVTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=1EFA5E333794156E307D676E261447B0805D4BD5",
    "description": "Full-Time Pharmacist – Glenmore Priceline Pharmacy Location: Glenmore, QLD Hours: Full-time – 38 hours per week Salary: From $50 per hour for a first-year pharmacist, more by negotiation based on experience. Join our gro..."
  },
  {
    "id": "adzuna-5925069123",
    "title": "Electric Motor Winder – Electrical Engineering Technician",
    "company": "2coms",
    "logoInitial": "2",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "engineering",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "233311",
    "posted": "2026-10-13",
    "slug": "sydney-electric-motor-winder-electrical-engineering-technician-482-186-sponsorship",
    "url": "jobs/sydney-electric-motor-winder-electrical-engineering-technician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5925069123?utm_medium=api&utm_source=13c876f1",
    "description": "About the Opportunity Skilled Electric Motor Winders are in high demand in Australia. This is an excellent opportunity for an experienced professional to build a long-term career with a well-established industrial electr..."
  },
  {
    "id": "adzuna-5924290533",
    "title": "PEP GP - $150/hr Guarantee 482 Visa Sponsorship | Level 3 Supervisor Available",
    "company": "Doctors&Co",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-10-13",
    "slug": "sydney-pep-gp-150hr-guarantee-482-visa-sponsorship-level-3-supervisor-available-482-186-sponsorship",
    "url": "jobs/sydney-pep-gp-150hr-guarantee-482-visa-sponsorship-level-3-supervisor-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5924290533?utm_medium=api&utm_source=13c876f1",
    "description": "Your Pathway to Fellowship Starts in Tumbarumba Are you on the RACGP Practice Experience Program and looking for a role where you can grow your skills, gain broad clinical experience, and become a trusted local doctor? R..."
  },
  {
    "id": "adzuna-5924094716",
    "title": "Mechanical Designer/Engineer",
    "company": "Bayside Group BH",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "321212",
    "posted": "2026-10-12",
    "slug": "sydney-mechanical-designerengineer-482-186-sponsorship",
    "url": "jobs/sydney-mechanical-designerengineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924094716?se=oiAFOfjH8RGMeuQWzwoBfw&utm_medium=api&utm_source=13c876f1&v=1698B2513CEB4B0847D5CB539A906386B19E9908",
    "description": "We're partnering with a well-established Australian engineering business seeking a Mechanical Design Engineer to join their friendly, close-knit team based in Meadowbrook. This is an excellent opportunity for an engineer..."
  },
  {
    "id": "adzuna-5924093957",
    "title": "Aged Care Registered Nurse - Central Coast, Newcastle, Hunter area NSW",
    "company": "Curamoir HR Bullhorn",
    "logoInitial": "C",
    "location": "Newcastle, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "newcastle-aged-care-registered-nurse-central-coast-newcastle-hunter-area-nsw-482-186-sponsorship",
    "url": "jobs/newcastle-aged-care-registered-nurse-central-coast-newcastle-hunter-area-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924093957?se=KgBcgQHH8RGde-6MbVqpLg&utm_medium=api&utm_source=13c876f1&v=8DE3943878F4757536DBB4287DFE72327B34CAE3",
    "description": "Join a leading Aged Care provider as a Registered Nurse in one of their facilities in NSW - positions available in Central Coast, Newcastle or the Hunter region On Offer $36.99 - $48.20 RN1-6, $53.06 NUM  Penalties  Supe..."
  },
  {
    "id": "adzuna-5924092831",
    "title": "English Teacher",
    "company": "Inspired Recruitment",
    "logoInitial": "I",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-12",
    "slug": "melbourne-english-teacher-482-186-sponsorship",
    "url": "jobs/melbourne-english-teacher-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5924092831?utm_medium=api&utm_source=13c876f1",
    "description": "English Teacher (Full-Time, Ongoing) – Great School near Morwell, VIC Are you a passionate English teacher looking for your next opportunity? We are recruiting on behalf of a fantastic school located near Morwell, in the..."
  },
  {
    "id": "adzuna-5924092100",
    "title": "Regional Registered Nurse | Aged Care | Permanent Roles",
    "company": "MyCare Talent",
    "logoInitial": "M",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "brisbane-regional-registered-nurse-aged-care-permanent-roles-482-494-sponsorship",
    "url": "jobs/brisbane-regional-registered-nurse-aged-care-permanent-roles-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924092100?se=bMp3njHK8RGjutuTSb6jOA&utm_medium=api&utm_source=13c876f1&v=58AB98AEF94A8F17D99D06123E1727E8FB01DBE2",
    "description": "Registered Nurse | Permanent Roles | Regional Aged Care Are you an Registered Nurse looking for your next opportunity? Whether you're after a stable permanent position , MyCare Talent is here to connect you with roles th..."
  },
  {
    "id": "adzuna-5924091241",
    "title": "Production Operations Engineer",
    "company": "PRA",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-12",
    "slug": "sydney-production-operations-engineer-482-186-sponsorship",
    "url": "jobs/sydney-production-operations-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5924091241?utm_medium=api&utm_source=13c876f1",
    "description": "A leading global proprietary trading firm is growing its production operations engineering team in Sydney. The firm trades its own capital and provides liquidity across listed derivatives, equities, ETFs, bonds and FX, w..."
  },
  {
    "id": "adzuna-5924090783",
    "title": "Associate Nurse Unit Manager - Relocate to Regional Victoria",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "melbourne-associate-nurse-unit-manager-relocate-to-regional-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-associate-nurse-unit-manager-relocate-to-regional-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090783?se=rqk3ggHH8RGW3rMFv5U8bA&utm_medium=api&utm_source=13c876f1&v=80E4B4F878F368F901EEAB01571F3467D8BA0482",
    "description": "Talent Quarter are proud to partner with a well established regional health service who have an exciting opportunity an experienced and motivated Associate Nurse Unit Manager (ANUM) to join their team.This role is ideal ..."
  },
  {
    "id": "adzuna-5924090775",
    "title": "Clinical Nurse Educator - Aged Care",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Newcastle, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "newcastle-clinical-nurse-educator-aged-care-482-186-sponsorship",
    "url": "jobs/newcastle-clinical-nurse-educator-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090775?se=4u67OtPL8RGS5dXBZxj2tQ&utm_medium=api&utm_source=13c876f1&v=686DC8B8375E0F0D949452D6F78BC04118E31F4A",
    "description": "Talent Quarter are proud to partner with a leading Not-for-Profit aged care provider who are seeking an experienced Clinical Nurse Educator to support the ongoing development of their nursing and care teams across multip..."
  },
  {
    "id": "adzuna-5924090683",
    "title": "Recruitment Consultant - Psychiatry",
    "company": "Sorciety",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-12",
    "slug": "sydney-recruitment-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/sydney-recruitment-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090683?se=KgBcgQHH8RGde-6MbVqpLg&utm_medium=api&utm_source=13c876f1&v=671CF64518B97461FA641EC11F8D1E969F446A4E",
    "description": "The opportunity A specialist medical recruitment agency in the Sydney CBD is adding to its psychiatry team. The role Work alongside the team lead, sharing coverage and live work from the start Build the junior psychiatry..."
  },
  {
    "id": "adzuna-5924090724",
    "title": "Head Chef - Relocate to Townsville, QLD",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351311",
    "posted": "2026-10-12",
    "slug": "sydney-head-chef-relocate-to-townsville-qld-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-relocate-to-townsville-qld-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090724?se=FmkVOvjH8RG3cvu8UsIQxQ&utm_medium=api&utm_source=13c876f1&v=6C2CC34A75C25DA1D8DFFF82374E4632DD5E56BC",
    "description": "Talent Quarter are proudly partnered with a leading NFP provider who have an opportunity for an experienced head chef to join a supportive aged care team in Townsville. This is a great opportunity to lead a kitchen where..."
  },
  {
    "id": "adzuna-5924090727",
    "title": "Clinical Nurse Educator - Aged Care",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "sydney-clinical-nurse-educator-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-clinical-nurse-educator-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090727?se=4u67OtPL8RGS5dXBZxj2tQ&utm_medium=api&utm_source=13c876f1&v=BAD4554D445ADCE7CCF1369A68A2C87399B2BEEC",
    "description": "Talent Quarter are proud to partner with a leading Not-for-Profit aged care provider who are seeking an experienced Clinical Nurse Educator to support the ongoing development of their nursing and care teams across multip..."
  },
  {
    "id": "adzuna-5924090768",
    "title": "Clinical Nurse Educator - Aged Care",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "canberra-clinical-nurse-educator-aged-care-482-186-sponsorship",
    "url": "jobs/canberra-clinical-nurse-educator-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090768?se=4u67OtPL8RGS5dXBZxj2tQ&utm_medium=api&utm_source=13c876f1&v=749BB83683087625F1BE549552232B35C357454C",
    "description": "Talent Quarter are proud to partner with a leading Not-for-Profit aged care provider who are seeking an experienced Clinical Nurse Educator to support the ongoing development of their nursing and care teams across multip..."
  },
  {
    "id": "adzuna-5924090615",
    "title": "People & Culture Advisor",
    "company": "Stellar Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-12",
    "slug": "sydney-people-culture-advisor-482-186-sponsorship",
    "url": "jobs/sydney-people-culture-advisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090615?se=4qjEIVTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=5175598C52FE159251F9994B6510DF693E609801",
    "description": "The Opportunity: An industry-leading organisation is seeking an experienced HR Advisor to join its People & Culture team. Supporting senior HR leaders, you'll provide practical HR advice across a diverse workforce while ..."
  },
  {
    "id": "adzuna-5924090536",
    "title": "Travel Nurse Opportunities Across Australia | Registered Nurses & Midwives",
    "company": "Talent Quarter Pty Limited",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "sydney-travel-nurse-opportunities-across-australia-registered-nurses-midwives-482-186-sponsorship",
    "url": "jobs/sydney-travel-nurse-opportunities-across-australia-registered-nurses-midwives-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090536?se=FmkVOvjH8RG3cvu8UsIQxQ&utm_medium=api&utm_source=13c876f1&v=E6830D781A19AEC044DD9FDB21AD77A6D8CACED7",
    "description": "Looking for your next adventure? Join Talent Quarter and explore contract opportunities across Australia. Talent Quarter is one of Australia's leading healthcare recruitment agencies, partnering with hospitals and health..."
  },
  {
    "id": "adzuna-5924090280",
    "title": "Head of Communications",
    "company": "Think Talent Bullhorn",
    "logoInitial": "T",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-12",
    "slug": "melbourne-head-of-communications-482-186-sponsorship",
    "url": "jobs/melbourne-head-of-communications-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090280?se=rqk3ggHH8RGW3rMFv5U8bA&utm_medium=api&utm_source=13c876f1&v=F36A8AD47B2D9EC5C4B96F15F99DB63C8D08EC85",
    "description": "Support a critical mission in the emerging food innovation and technology sector Engage, influence and mobilise diverse government, sector and donor audiences Work remotely and enjoy in-person collaboration and learning ..."
  },
  {
    "id": "adzuna-5924090116",
    "title": "Executive Housekeeping Manager - Crown Plaza Shell Cove Marina",
    "company": "AHS AU",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "811211",
    "posted": "2026-10-12",
    "slug": "sydney-executive-housekeeping-manager-crown-plaza-shell-cove-marina-482-186-sponsorship",
    "url": "jobs/sydney-executive-housekeeping-manager-crown-plaza-shell-cove-marina-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090116?se=rqk3ggHH8RGW3rMFv5U8bA&utm_medium=api&utm_source=13c876f1&v=7809127936EA16CE5BFE5BB14155D06C30E1E0F5",
    "description": "Executive Housekeeping Manager ahs hospitality, part of RGF Staffing ANZ, is Australia and New Zealand’s largest provider of outsourced housekeeping management services and partners with the most iconic hotel brands. We ..."
  },
  {
    "id": "adzuna-5924080201",
    "title": "Neonatal Intensive Care Nurse",
    "company": "The Hassett Group",
    "logoInitial": "T",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-12",
    "slug": "melbourne-neonatal-intensive-care-nurse-482-186-sponsorship",
    "url": "jobs/melbourne-neonatal-intensive-care-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924080201?se=oiAFOfjH8RGMeuQWzwoBfw&utm_medium=api&utm_source=13c876f1&v=7BD60FD26109159B8498AAEA5AA6097C0A07A3AB",
    "description": "REGISTERED NURSE – NICU | MELBOURNE Permanent full-time and part-time opportunities | Visa sponsorship and relocation pathways available We’re seeking experienced Neonatal Intensive Care Registered Nurses to join our cli..."
  },
  {
    "id": "jooble--5212033971521795543",
    "title": "Senior Manager, Technical Account Manager",
    "company": "Ping Identity",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225212",
    "posted": "2026-10-12",
    "slug": "sydney-senior-manager-technical-account-manager-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-technical-account-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5212033971521795543",
    "description": " About Ping Identity:  At Ping Identity, we believe in making digital experiences both secure and seamless for all users, without compromise. We call this digital freedom. And it's not just something we provide our custo..."
  },
  {
    "id": "adzuna-5923683315",
    "title": "Housekeeping Attendant",
    "company": "Minnikin & Co",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "811211",
    "posted": "2026-10-12",
    "slug": "sydney-housekeeping-attendant-482-186-sponsorship",
    "url": "jobs/sydney-housekeeping-attendant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5923683315?se=4qjEIVTJ8RGBMbk-mPfQEA&utm_medium=api&utm_source=13c876f1&v=CBFCED8C5B2DE207C6E673B2BCCFCF6315A33756",
    "description": "Work in a Beautiful Rainforest Setting Tamborine Mountain Glades is a unique rainforest retreat located within Thunderbird Park on beautiful Tamborine Mountain. Our guests visit to relax, reconnect with nature, and enjoy..."
  },
  {
    "id": "adzuna-5923682822",
    "title": "Welder",
    "company": "2coms",
    "logoInitial": "2",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "322313",
    "posted": "2026-10-12",
    "slug": "sydney-welder-482-186-sponsorship",
    "url": "jobs/sydney-welder-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5923682822?utm_medium=api&utm_source=13c876f1",
    "description": "We are actively seeking experienced Welders from Australia and around the world for long-term positions with reputable Australian employers. Our clients are looking for skilled Welders with strong experience across struc..."
  },
  {
    "id": "jooble-2768804826604169478",
    "title": "Channel Management Specialist",
    "company": "BYD",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-12",
    "slug": "sydney-channel-management-specialist-sydney-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-channel-management-specialist-sydney-melbourne-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2768804826604169478",
    "description": ""
  },
  {
    "id": "adzuna-5923054272",
    "title": "Head of Specialty Coffee - Multi-Site Leadership",
    "company": "Employer Sponsored Jobs",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "141111",
    "posted": "2026-10-11",
    "slug": "sydney-head-of-specialty-coffee-multi-site-leadership-482-186-sponsorship",
    "url": "jobs/sydney-head-of-specialty-coffee-multi-site-leadership-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5923054272?utm_medium=api&utm_source=13c876f1",
    "description": "Anexcitingopportunityisavailableforanexperiencedspecialtycoffeeleadertojoinafast-growinghospitalitygroupoperatingmultiplepremiumcafélocations.Thisseniorleadershiproleisresponsiblefordrivingtheoverallcoffeestrategy,bevera..."
  },
  {
    "id": "adzuna-5923054217",
    "title": "Head of Coffee",
    "company": "Employer Sponsored Jobs",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "141111",
    "posted": "2026-10-11",
    "slug": "sydney-head-of-coffee-482-186-sponsorship",
    "url": "jobs/sydney-head-of-coffee-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5923054217?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--8378042823875121577",
    "title": "Retail Electricity Analyst",
    "company": "Tesla",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "finance",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "222311",
    "posted": "2026-10-11",
    "slug": "sydney-retail-electricity-analyst-482-186-sponsorship",
    "url": "jobs/sydney-retail-electricity-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8378042823875121577",
    "description": ""
  },
  {
    "id": "adzuna-5922278806",
    "title": "Welder | Industrial Refrigeration & Pressure Piping",
    "company": "You Solved",
    "logoInitial": "Y",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "322313",
    "posted": "2026-10-11",
    "slug": "brisbane-welder-industrial-refrigeration-pressure-piping-482-494-sponsorship",
    "url": "jobs/brisbane-welder-industrial-refrigeration-pressure-piping-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5922278806?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5922278371",
    "title": "Residential Care Officer",
    "company": "Connectus Home Care Pty",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423313",
    "posted": "2026-10-11",
    "slug": "sydney-residential-care-officer-482-186-sponsorship",
    "url": "jobs/sydney-residential-care-officer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5922278371?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5922259517",
    "title": "General Surgery Registrar NSW",
    "company": "Sante Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$180,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-11",
    "slug": "sydney-general-surgery-registrar-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-surgery-registrar-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5922259517?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921898274",
    "title": "Manager Workplaces",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "139999",
    "posted": "2026-10-10",
    "slug": "adelaide-manager-workplaces-482-494-sponsorship",
    "url": "jobs/adelaide-manager-workplaces-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921898274?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921677775",
    "title": "Support Workers - High Care experience",
    "company": "Just Better Care",
    "logoInitial": "J",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-10",
    "slug": "sydney-support-workers-high-care-experience-482-186-sponsorship",
    "url": "jobs/sydney-support-workers-high-care-experience-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921677775?utm_medium=api&utm_source=13c876f1",
    "description": "Just Better Care Eastern Suburbs is seeking compassionate, reliable and dedicated Community Support Professionals in the Eastern Suburbs area. We provide high-quality in-home aged care and disability support services, em..."
  },
  {
    "id": "adzuna-5921676789",
    "title": "360 Permanent Recruitment Consultant – Adelaide CBD",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-10",
    "slug": "adelaide-360-permanent-recruitment-consultant-adelaide-cbd-482-494-sponsorship",
    "url": "jobs/adelaide-360-permanent-recruitment-consultant-adelaide-cbd-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921676789?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921675931",
    "title": "Child and Youth Worker – Casual",
    "company": "Rise Child and Youth Services PTY",
    "logoInitial": "R",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-10",
    "slug": "sydney-child-and-youth-worker-casual-482-186-sponsorship",
    "url": "jobs/sydney-child-and-youth-worker-casual-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921675931?se=3DZ4RtPL8RGS5dXBZxj2tQ&utm_medium=api&utm_source=13c876f1&v=165889273A887D08D0180423455A0F8672CDB89F",
    "description": "We are inviting dedicated, compassionate, and dynamic individuals to join our team in the Toowoomba area as Casual Child and Youth Workers. Who we are: At RISE Child and Youth Services, we are dedicated to making differe..."
  },
  {
    "id": "adzuna-5921674929",
    "title": "Aged Care Registered Nurse",
    "company": "Yadu Health Aboriginal Corporation",
    "logoInitial": "Y",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-10",
    "slug": "adelaide-aged-care-registered-nurse-482-494-sponsorship",
    "url": "jobs/adelaide-aged-care-registered-nurse-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921674929?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921673511",
    "title": "Travel Aged Care Registered Nurse – RN",
    "company": "Health X",
    "logoInitial": "H",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-10",
    "slug": "darwin-travel-aged-care-registered-nurse-rn-482-494-sponsorship",
    "url": "jobs/darwin-travel-aged-care-registered-nurse-rn-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921673511?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921650135",
    "title": "360 Permanent Recruitment Consultant – Auckland Airport",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-10",
    "slug": "sydney-360-permanent-recruitment-consultant-auckland-airport-482-186-sponsorship",
    "url": "jobs/sydney-360-permanent-recruitment-consultant-auckland-airport-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921650135?se=ZF8ssJ3E8RGjSfrCsBO0RQ&utm_medium=api&utm_source=13c876f1&v=BD02C3F6797FC430B029D6C0807BA6AC2A9AACCC",
    "description": ""
  },
  {
    "id": "adzuna-5921650100",
    "title": "360 Permanent Recruitment Consultant – Mulgrave",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-10",
    "slug": "sydney-360-permanent-recruitment-consultant-mulgrave-482-186-sponsorship",
    "url": "jobs/sydney-360-permanent-recruitment-consultant-mulgrave-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921650100?se=BghAsZ3E8RG_59bpLSVmjQ&utm_medium=api&utm_source=13c876f1&v=9CD7A287CC93C7162F6B786A11D010719FF460ED",
    "description": ""
  },
  {
    "id": "adzuna-5921650057",
    "title": "Account/Business Development Manager – Eight Mile Plains",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-10",
    "slug": "brisbane-accountbusiness-development-manager-eight-mile-plains-482-494-sponsorship",
    "url": "jobs/brisbane-accountbusiness-development-manager-eight-mile-plains-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921650057?se=ZF8ssJ3E8RGjSfrCsBO0RQ&utm_medium=api&utm_source=13c876f1&v=9C0942A4AEEEF01356F6E39B6D007E852A1DA093",
    "description": ""
  },
  {
    "id": "adzuna-5921649701",
    "title": "Aged Care Support Workers",
    "company": "Yadu Health Aboriginal Corporation",
    "logoInitial": "Y",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-10",
    "slug": "adelaide-aged-care-support-workers-482-494-sponsorship",
    "url": "jobs/adelaide-aged-care-support-workers-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921649701?se=fs3HpZ3E8RGg6pc98v1yfA&utm_medium=api&utm_source=13c876f1&v=F4176F21C7AFD4C99B4B17D9D7EB26E862BF099C",
    "description": ""
  },
  {
    "id": "adzuna-5921649719",
    "title": "Senior Child Protection Practitioner, Outer Gippsland Area",
    "company": "Department of Families, Fairness and Housing",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-10",
    "slug": "sydney-senior-child-protection-practitioner-outer-gippsland-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-outer-gippsland-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921649719?se=fs3HpZ3E8RGg6pc98v1yfA&utm_medium=api&utm_source=13c876f1&v=0CE4CA66A87BC0523A67436E21F5E09E9D07470F",
    "description": ""
  },
  {
    "id": "adzuna-5921649570",
    "title": "RF Engineer – Private LTE and DMR",
    "company": "Titan ICT Pty",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "engineering",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "233311",
    "posted": "2026-10-10",
    "slug": "sydney-rf-engineer-private-lte-and-dmr-482-186-sponsorship",
    "url": "jobs/sydney-rf-engineer-private-lte-and-dmr-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921649570?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=C6C75FCB9BBEFC722B4BA46C5CB3B2C264A2BD34",
    "description": ""
  },
  {
    "id": "adzuna-5921649657",
    "title": "360 Permanent Recruitment Consultant – Arndell Park",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-10",
    "slug": "sydney-360-permanent-recruitment-consultant-arndell-park-482-186-sponsorship",
    "url": "jobs/sydney-360-permanent-recruitment-consultant-arndell-park-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5921649657?se=BghAsZ3E8RG_59bpLSVmjQ&utm_medium=api&utm_source=13c876f1&v=59963CA9A3363ABD99241070D500B81BB81C08D9",
    "description": ""
  },
  {
    "id": "adzuna-5921520303",
    "title": "Registered Nurse - Community Aged Care & NDIS",
    "company": "MARS PARTNERSHIP PTY. LTD.",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$125,000 - $128,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-10",
    "slug": "sydney-registered-nurse-community-aged-care-ndis-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-community-aged-care-ndis-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921520303?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921409078",
    "title": "Welder",
    "company": "2coms",
    "logoInitial": "2",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "322313",
    "posted": "2026-10-10",
    "slug": "gold-coast-welder-482-494-sponsorship",
    "url": "jobs/gold-coast-welder-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921409078?utm_medium=api&utm_source=13c876f1",
    "description": "We are actively seeking experienced Welders from Australia and around the world for long-term positions with reputable Australian employers. Our clients are looking for skilled Welders with strong experience across struc..."
  },
  {
    "id": "adzuna-5921363849",
    "title": "Sales Executive (WHV Accepted, Sponsorship Available)",
    "company": "Business Show Media Ltd",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225412",
    "posted": "2026-10-10",
    "slug": "sydney-sales-executive-whv-accepted-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-sales-executive-whv-accepted-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921363849?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5921363850",
    "title": "Business Development Associate – Entry Level | Route To Sponsorship Available For Holiday Visas",
    "company": "Business Show Media Ltd",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-10",
    "slug": "sydney-business-development-associate-entry-level-route-to-sponsorship-available-for-holiday-visas-482-186-sponsorship",
    "url": "jobs/sydney-business-development-associate-entry-level-route-to-sponsorship-available-for-holiday-visas-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921363850?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920718484",
    "title": "Psychologist",
    "company": "Solution Psychology",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$97,760 - $139,360 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272311",
    "posted": "2026-10-10",
    "slug": "sydney-psychologist-482-186-sponsorship",
    "url": "jobs/sydney-psychologist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920718484?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920708858",
    "title": "Visa Sponsorship OFF SHORE Metal Fabricators/Welders ANSCO 322311/322313",
    "company": "Bowhill Engineering",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "322313",
    "posted": "2026-10-10",
    "slug": "sydney-visa-sponsorship-off-shore-metal-fabricatorswelders-ansco-322311322313-482-186-sponsorship",
    "url": "jobs/sydney-visa-sponsorship-off-shore-metal-fabricatorswelders-ansco-322311322313-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920708858?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920708788",
    "title": "Registered Nurse | Relocation Assistance & Sponsorship Available",
    "company": "Opal HealthCare",
    "logoInitial": "O",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$60,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-10",
    "slug": "sydney-registered-nurse-relocation-assistance-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-relocation-assistance-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920708788?utm_medium=api&utm_source=13c876f1",
    "description": "Love where you work and live. Make a meaningful impact in the lives of our residents while enjoying the lifestyle that Denhams Beach has to offer. Join Opal HealthCare as a Registered Nurse and apply today.Permanent oppo..."
  },
  {
    "id": "adzuna-5920707834",
    "title": "Autoglazier – Rydalmere",
    "company": "NWG ADAS & Windscreens",
    "logoInitial": "N",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "324311",
    "posted": "2026-10-10",
    "slug": "sydney-autoglazier-rydalmere-482-186-sponsorship",
    "url": "jobs/sydney-autoglazier-rydalmere-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920707834?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920706884",
    "title": "Metal Fabricator ANSCO 322311/322313 – ONSHORE VISA",
    "company": "Bowhill Engineering",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "322313",
    "posted": "2026-10-10",
    "slug": "sydney-metal-fabricator-ansco-322311322313-onshore-visa-482-186-sponsorship",
    "url": "jobs/sydney-metal-fabricator-ansco-322311322313-onshore-visa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920706884?utm_medium=api&utm_source=13c876f1",
    "description": "Bowhill Engineering is fortunate to be able to offer limited Visa Sponsorship opportunities to Trade Qualified Metal Fabricators looking for Visa Sponsorship in regional country, South Australia. Specialising in large he..."
  },
  {
    "id": "adzuna-5920638119",
    "title": "General Medicine Registrar.",
    "company": "Sante Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$180,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-10",
    "slug": "sydney-general-medicine-registrar-482-186-sponsorship",
    "url": "jobs/sydney-general-medicine-registrar-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920638119?utm_medium=api&utm_source=13c876f1",
    "description": "General Medicine Registrar | Multiple Locations Across NSW General Medicine Registrar | Multiple Locations Across NSW Multiple Hospital Opportunities | IMG Support | Visa Sponsorship for Eligible Candidates | Competitive..."
  },
  {
    "id": "adzuna-5920637490",
    "title": "Registered Nurse / Enrolled Nurses - 2026",
    "company": "National Health Recruitment",
    "logoInitial": "N",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-10",
    "slug": "perth-registered-nurse-enrolled-nurses-2026-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-enrolled-nurses-2026-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920637490?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920635558",
    "title": "Air Conditioning Service Technician",
    "company": "konnecting",
    "logoInitial": "K",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$80,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "342111",
    "posted": "2026-10-10",
    "slug": "sydney-air-conditioning-service-technician-482-186-sponsorship",
    "url": "jobs/sydney-air-conditioning-service-technician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920635558?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-77500802479299322",
    "title": "Research Staff, Voice AI Foundations [Remote]",
    "company": "Deepgram",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-10",
    "slug": "sydney-research-staff-voice-ai-foundations-remote-482-186-sponsorship",
    "url": "jobs/sydney-research-staff-voice-ai-foundations-remote-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/77500802479299322",
    "description": ""
  },
  {
    "id": "adzuna-5920352604",
    "title": "Senior Mechanical Services Engineer",
    "company": "Employer Sponsored Jobs",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "321212",
    "posted": "2026-10-09",
    "slug": "sydney-senior-mechanical-services-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-mechanical-services-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920352604?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920026736",
    "title": "IT Software Developer – Dynamics CRM",
    "company": "The Five Group Pty",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-09",
    "slug": "sydney-it-software-developer-dynamics-crm-482-186-sponsorship",
    "url": "jobs/sydney-it-software-developer-dynamics-crm-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920026736?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=AFA3359DCBF0188CA749BAB04DA2688377D92274",
    "description": ""
  },
  {
    "id": "adzuna-5920026117",
    "title": "Dialysis Nurse – Remote",
    "company": "Purple House WDNWPT",
    "logoInitial": "P",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-09",
    "slug": "darwin-dialysis-nurse-remote-482-494-sponsorship",
    "url": "jobs/darwin-dialysis-nurse-remote-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920026117?se=BghAsZ3E8RG_59bpLSVmjQ&utm_medium=api&utm_source=13c876f1&v=BA58A9B4840D2C7142AC40E8D904EF5A351BE377",
    "description": ""
  },
  {
    "id": "adzuna-5920025342",
    "title": "Aged / Disability Care Worker – Remote",
    "company": "Sunsouth Pty",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-09",
    "slug": "sydney-aged-disability-care-worker-remote-482-186-sponsorship",
    "url": "jobs/sydney-aged-disability-care-worker-remote-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920025342?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=5524549A80C8F7D09A49EE3EEF1A394E26207047",
    "description": ""
  },
  {
    "id": "adzuna-5920025078",
    "title": "Registered Nurse, Yutjuwala Djiwarr - Nhulunbuy",
    "company": "Australian Regional and Remote Community Services",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-09",
    "slug": "sydney-registered-nurse-yutjuwala-djiwarr-nhulunbuy-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-yutjuwala-djiwarr-nhulunbuy-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920025078?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=D5F33E229C57DE7FD072EA595E1962D34F8F0534",
    "description": "About the role ARRCS are currently sourcing a qualified and experienced Registered Nurse (RN) to support the team and residents at our Yutjuwala Djiwarr Flexible Aged Care facility located in Nhulunbuy, Northern Territor..."
  },
  {
    "id": "adzuna-5920023085",
    "title": "360 Permanent Recruitment Consultant – Cockburn",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-09",
    "slug": "sydney-360-permanent-recruitment-consultant-cockburn-482-186-sponsorship",
    "url": "jobs/sydney-360-permanent-recruitment-consultant-cockburn-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920023085?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920022369",
    "title": "360 Permanent Recruitment Consultant – Eight Mile Plains",
    "company": "Employment Group Pty",
    "logoInitial": "E",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-10-09",
    "slug": "brisbane-360-permanent-recruitment-consultant-eight-mile-plains-482-494-sponsorship",
    "url": "jobs/brisbane-360-permanent-recruitment-consultant-eight-mile-plains-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920022369?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920022257",
    "title": "Home Care Worker - Yarragon VIC",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-10-09",
    "slug": "melbourne-home-care-worker-yarragon-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-yarragon-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920022257?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=CE1D9B0F14DECE7E5813BF7811CC1697063A7550",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5920022113",
    "title": "IT Service Desk Analyst",
    "company": "Relationships Australia SA",
    "logoInitial": "R",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-09",
    "slug": "adelaide-it-service-desk-analyst-482-494-sponsorship",
    "url": "jobs/adelaide-it-service-desk-analyst-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920022113?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=0754C9D9C8BC6689AECC181D7F2F09EEEDCEE098",
    "description": ""
  },
  {
    "id": "adzuna-5920021175",
    "title": "Sous Chef",
    "company": "Eighteen Fifty & Co.",
    "logoInitial": "E",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "hospitality",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351311",
    "posted": "2026-10-09",
    "slug": "adelaide-sous-chef-482-494-sponsorship",
    "url": "jobs/adelaide-sous-chef-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920021175?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5920017941",
    "title": "Payroll Manager – Employment Hero – Expression of Interest",
    "company": "NV Employment Pty",
    "logoInitial": "N",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "finance",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "221111",
    "posted": "2026-10-09",
    "slug": "sydney-payroll-manager-employment-hero-expression-of-interest-482-186-sponsorship",
    "url": "jobs/sydney-payroll-manager-employment-hero-expression-of-interest-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920017941?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5919973190",
    "title": "Occupational Therapist (NDIS or DVA / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
    "logoInitial": "O",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-09",
    "slug": "canberra-occupational-therapist-ndis-or-dva-sponsorship-available-482-186-sponsorship",
    "url": "jobs/canberra-occupational-therapist-ndis-or-dva-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5919973190?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-2242198021460963352",
    "title": "Director, Services Business Development",
    "company": "Mastercard",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-09",
    "slug": "sydney-director-services-business-development-482-186-sponsorship",
    "url": "jobs/sydney-director-services-business-development-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2242198021460963352",
    "description": ""
  },
  {
    "id": "adzuna-5919100944",
    "title": "Automation Engineer",
    "company": "Elite Staffing Solutions Australia Pty Ltd",
    "logoInitial": "E",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$150,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-09",
    "slug": "melbourne-automation-engineer-482-186-sponsorship",
    "url": "jobs/melbourne-automation-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5919100944?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5919100439",
    "title": "Restaurant Manager | Award-Winning Gastro Pub | Newcastle$100K Super",
    "company": "Frontline Recruitment Group",
    "logoInitial": "F",
    "location": "Newcastle, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "141111",
    "posted": "2026-10-09",
    "slug": "newcastle-restaurant-manager-award-winning-gastro-pub-newcastle100k-super-482-186-sponsorship",
    "url": "jobs/newcastle-restaurant-manager-award-winning-gastro-pub-newcastle100k-super-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5919100439?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5919098616",
    "title": "Glazier Installer - Glass Shower Screens, Mirrors & Robe Doors",
    "company": "konnecting",
    "logoInitial": "K",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$76,515 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "333111",
    "posted": "2026-10-09",
    "slug": "brisbane-glazier-installer-glass-shower-screens-mirrors-robe-doors-482-494-sponsorship",
    "url": "jobs/brisbane-glazier-installer-glass-shower-screens-mirrors-robe-doors-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5919098616?utm_medium=api&utm_source=13c876f1",
    "description": "Glazier Installer – Glass Shower Screens, Mirrors & Robe Doors Location: Brisbane Annual salary: $79,499 annually plus vehicle Employment: Full-Time , Visa Sponsorship Available A leading glazing specialist in Brisbane i..."
  },
  {
    "id": "adzuna-5918561458",
    "title": "Business Operations & Office Manager",
    "company": "Hays",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "139999",
    "posted": "2026-10-08",
    "slug": "sydney-business-operations-office-manager-482-186-sponsorship",
    "url": "jobs/sydney-business-operations-office-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5918561458?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=217C700BD6D79A0287FECBBFDABB2C6B78505BA3",
    "description": ""
  },
  {
    "id": "adzuna-5918561077",
    "title": "Talent Acquisition Specialist",
    "company": "Hays",
    "logoInitial": "H",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-08",
    "slug": "brisbane-talent-acquisition-specialist-482-494-sponsorship",
    "url": "jobs/brisbane-talent-acquisition-specialist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5918561077?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=689F120F19394F25E6D0224ABB34C449F786EDB1",
    "description": ""
  },
  {
    "id": "adzuna-5917981279",
    "title": "Senior Software Developer - Front End",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-08",
    "slug": "sydney-senior-software-developer-front-end-482-186-sponsorship",
    "url": "jobs/sydney-senior-software-developer-front-end-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5917981279?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5917980085",
    "title": "Restaurant/Outlet Manager",
    "company": "Accor",
    "logoInitial": "A",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-08",
    "slug": "melbourne-restaurantoutlet-manager-482-186-sponsorship",
    "url": "jobs/melbourne-restaurantoutlet-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5917980085?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=ECDE15758A896DDC6A79823A974A6A4D0D663B66",
    "description": ""
  },
  {
    "id": "adzuna-5917979943",
    "title": "Senior Software Developer - Full Stack",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-08",
    "slug": "sydney-senior-software-developer-full-stack-482-186-sponsorship",
    "url": "jobs/sydney-senior-software-developer-full-stack-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5917979943?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5917979447",
    "title": "Sales Development Representative, ANZ",
    "company": "Harvey",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-10-08",
    "slug": "sydney-sales-development-representative-anz-482-186-sponsorship",
    "url": "jobs/sydney-sales-development-representative-anz-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5917979447?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=D3524F922E88F5BB2826E50148D3BC0CC8910EDC",
    "description": ""
  },
  {
    "id": "jooble-31133491301133625",
    "title": "Senior Business Analyst",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-10-08",
    "slug": "sydney-senior-business-analyst-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/31133491301133625",
    "description": ""
  },
  {
    "id": "jooble--1534773662634965216",
    "title": "Lead Business Analyst",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-10-08",
    "slug": "sydney-lead-business-analyst-482-186-sponsorship",
    "url": "jobs/sydney-lead-business-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1534773662634965216",
    "description": ""
  },
  {
    "id": "adzuna-5917261819",
    "title": "Remote Community Store & Takeaway Positions",
    "company": "North West Recruitment",
    "logoInitial": "N",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-08",
    "slug": "sydney-remote-community-store-takeaway-positions-482-186-sponsorship",
    "url": "jobs/sydney-remote-community-store-takeaway-positions-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5917261819?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5917192176",
    "title": "Electrical Project Manager - Commercial Projects",
    "company": "Powerstaff",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$120,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "341111",
    "posted": "2026-10-08",
    "slug": "sydney-electrical-project-manager-commercial-projects-482-186-sponsorship",
    "url": "jobs/sydney-electrical-project-manager-commercial-projects-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5917192176?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5916804533",
    "title": "Physiotherapist",
    "company": "Mediix",
    "logoInitial": "M",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252511",
    "posted": "2026-10-07",
    "slug": "melbourne-physiotherapist-full-time-15h-from-melbourne-cbd-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/melbourne-physiotherapist-full-time-15h-from-melbourne-cbd-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5916804533?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5916804534",
    "title": "Physiotherapist",
    "company": "Mediix",
    "logoInitial": "M",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252511",
    "posted": "2026-10-07",
    "slug": "adelaide-physiotherapist-full-time-sponsorship-regional-sa-482-494-sponsorship",
    "url": "jobs/adelaide-physiotherapist-full-time-sponsorship-regional-sa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5916804534?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5914924939",
    "title": "Remote Community Store & Takeaway Positions",
    "company": "North West Recruitment",
    "logoInitial": "N",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-07",
    "slug": "perth-remote-community-store-takeaway-positions-482-494-sponsorship",
    "url": "jobs/perth-remote-community-store-takeaway-positions-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5914924939?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5913903645",
    "title": "Secondary Teachers | All Subject Areas | Permanent & Fixed-Term | Queensland",
    "company": "Killeen Education Recruitment",
    "logoInitial": "K",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$86,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-10-07",
    "slug": "sydney-secondary-teachers-all-subject-areas-permanent-fixed-term-queensland-482-186-sponsorship",
    "url": "jobs/sydney-secondary-teachers-all-subject-areas-permanent-fixed-term-queensland-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913903645?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5913469135",
    "title": "Midwife | Relocate to Coastal Melbourne",
    "company": "The Hassett Group",
    "logoInitial": "T",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254111",
    "posted": "2026-10-06",
    "slug": "melbourne-midwife-relocate-to-coastal-melbourne-482-sponsorship-pr-pathway-482-186-sponsorship",
    "url": "jobs/melbourne-midwife-relocate-to-coastal-melbourne-482-sponsorship-pr-pathway-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913469135?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5913210320",
    "title": "Registered Nurse |Esperance | Accommodation Relocation Support",
    "company": "Juniper",
    "logoInitial": "J",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-06",
    "slug": "perth-registered-nurse-esperance-accommodation-relocation-support-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-esperance-accommodation-relocation-support-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913210320?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5913083508",
    "title": "NON VR General Practitioner - MM4 and DPA in City",
    "company": "ME Medical Recruitment",
    "logoInitial": "M",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-10-06",
    "slug": "canberra-non-vr-general-practitioner-mm4-and-dpa-in-city-482-186-sponsorship",
    "url": "jobs/canberra-non-vr-general-practitioner-mm4-and-dpa-in-city-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913083508?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-3070020416186341771",
    "title": "Sr. Application Engineer, Virtual Power Plants - Residential Energy",
    "company": "Tesla",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-06",
    "slug": "sydney-sr-application-engineer-virtual-power-plants-residential-energy-482-186-sponsorship",
    "url": "jobs/sydney-sr-application-engineer-virtual-power-plants-residential-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3070020416186341771",
    "description": ""
  },
  {
    "id": "adzuna-5912395207",
    "title": "Developer Programmer",
    "company": "OneStop IT Talents Pty Ltd",
    "logoInitial": "O",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-05",
    "slug": "melbourne-developer-programmer-482-186-sponsorship",
    "url": "jobs/melbourne-developer-programmer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5912395207?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5912166605",
    "title": "Community Care Enrolled Nurse – Bundaberg",
    "company": "Catholic Care Central Queensland",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-05",
    "slug": "sydney-community-care-enrolled-nurse-bundaberg-482-186-sponsorship",
    "url": "jobs/sydney-community-care-enrolled-nurse-bundaberg-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5912166605?se=1O7Z9K3M8RGK9qbcmVZkaw&utm_medium=api&utm_source=13c876f1&v=DB56E5A6A1B45F25230552F354FF2239F698060C",
    "description": "Permanent Part Time – 19 hours per week Above award wage – $42 per hour plus Superannuation and generous salary packaging options Provide compassionate care, build trust and empowering our vulnerable clients CatholicCare..."
  },
  {
    "id": "jooble-8752900059249463693",
    "title": "Environment and Delivery Manager, 12 MFTC",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-05",
    "slug": "sydney-environment-and-delivery-manager-12-mftc-482-186-sponsorship",
    "url": "jobs/sydney-environment-and-delivery-manager-12-mftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8752900059249463693",
    "description": ""
  },
  {
    "id": "adzuna-5911614950",
    "title": "Other Skills",
    "company": "PinoyPro GlobalTalent Sync",
    "logoInitial": "P",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-05",
    "slug": "adelaide-other-skills-482-494-sponsorship",
    "url": "jobs/adelaide-other-skills-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5911614950?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5911279023",
    "title": "Assistant in Nursing - Moree",
    "company": "Whiddon",
    "logoInitial": "W",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-04",
    "slug": "sydney-assistant-in-nursing-moree-482-186-sponsorship",
    "url": "jobs/sydney-assistant-in-nursing-moree-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5911279023?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=078307EC5B4D96CE03315670DC89D4D4B7F4619E",
    "description": ""
  },
  {
    "id": "adzuna-5911027130",
    "title": "Assistant in Nursing - Kyogle",
    "company": "Whiddon",
    "logoInitial": "W",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-04",
    "slug": "sydney-assistant-in-nursing-kyogle-482-186-sponsorship",
    "url": "jobs/sydney-assistant-in-nursing-kyogle-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5911027130?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=666DDD83DD3D8E707D2470B0775CE4412F12144C",
    "description": ""
  },
  {
    "id": "adzuna-5911007167",
    "title": "Head Chef - Coffs Harbour Grange Care Community",
    "company": "Opal HealthCare",
    "logoInitial": "O",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "hospitality",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "351311",
    "posted": "2026-10-04",
    "slug": "sydney-head-chef-coffs-harbour-grange-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-coffs-harbour-grange-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5911007167?se=MpL3UUXD8RGKlPimNLdoEw&utm_medium=api&utm_source=13c876f1&v=F6F3919DBA957DA160BF7BC276E6A142FA1265D8",
    "description": ""
  },
  {
    "id": "jooble-5594049704557780495",
    "title": "Network Development Manager (Automotive/OEM)",
    "company": "Zeekr International",
    "logoInitial": "Z",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-04",
    "slug": "sydney-network-development-manager-automotiveoem-482-186-sponsorship",
    "url": "jobs/sydney-network-development-manager-automotiveoem-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5594049704557780495",
    "description": ""
  },
  {
    "id": "adzuna-5909695341",
    "title": "Staff Software Engineer, Social & Store - Unpublished R&D Product ( Australia-based, Relocation and Visa Sponsorship provided)",
    "company": "Riot Games",
    "logoInitial": "R",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-10-03",
    "slug": "sydney-staff-software-engineer-social-store-unpublished-rd-product-australia-based-relocation-and-visa-sponsorship-provided-482-186-sponsorship",
    "url": "jobs/sydney-staff-software-engineer-social-store-unpublished-rd-product-australia-based-relocation-and-visa-sponsorship-provided-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909695341?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5909305682",
    "title": "Restaurant Reservations",
    "company": "Cafe Sydney",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-03",
    "slug": "sydney-restaurant-reservations-482-186-sponsorship",
    "url": "jobs/sydney-restaurant-reservations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5909305682?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=9AF0938BC210AB97CA0A02AA67DCC741EA04CCA7",
    "description": ""
  },
  {
    "id": "adzuna-5909305360",
    "title": "Deployment Lead",
    "company": "Copeland",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-03",
    "slug": "melbourne-deployment-lead-482-186-sponsorship",
    "url": "jobs/melbourne-deployment-lead-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909305360?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5909305100",
    "title": "Associate Lecturer (Level A) - Nursing",
    "company": "Griffith University",
    "logoInitial": "G",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-10-03",
    "slug": "gold-coast-associate-lecturer-level-a-nursing-482-494-sponsorship",
    "url": "jobs/gold-coast-associate-lecturer-level-a-nursing-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909305100?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description Every institution values excellence. What matters most is why. Griffith was created to be a different type of university. You’ll find we’re about leading research, academic excellence, and the transfo..."
  },
  {
    "id": "adzuna-5909098304",
    "title": "Commercial Electrical Supervisor - Perth Based",
    "company": "Core Talent",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$124,800 - $133,120 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "341111",
    "posted": "2026-10-03",
    "slug": "perth-commercial-electrical-supervisor-perth-based-482-494-sponsorship",
    "url": "jobs/perth-commercial-electrical-supervisor-perth-based-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909098304?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-5523778012256094839",
    "title": "Marketing Manager",
    "company": "Penumbra",
    "logoInitial": "P",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "131112",
    "posted": "2026-10-03",
    "slug": "sydney-marketing-manager-482-186-sponsorship",
    "url": "jobs/sydney-marketing-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5523778012256094839",
    "description": ""
  },
  {
    "id": "adzuna-5908010071",
    "title": "Blue Yonder System Functional / Technical Consultant",
    "company": "The HR Ally",
    "logoInitial": "T",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-02",
    "slug": "melbourne-blue-yonder-system-functional-technical-consultant-482-186-sponsorship",
    "url": "jobs/melbourne-blue-yonder-system-functional-technical-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5908010071?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5907792694",
    "title": "Hand Therapist (Occupational Therapist) | Perth",
    "company": "Mediix",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-10-02",
    "slug": "perth-hand-therapist-occupational-therapist-perth-482-494-sponsorship",
    "url": "jobs/perth-hand-therapist-occupational-therapist-perth-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5907792694?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5907735774",
    "title": "IT System Analyst",
    "company": "Hays",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-02",
    "slug": "sydney-it-system-analyst-482-186-sponsorship",
    "url": "jobs/sydney-it-system-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5907735774?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--6843180445478003773",
    "title": "Senior Liquidity Analyst",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-02",
    "slug": "sydney-senior-liquidity-analyst-482-186-sponsorship",
    "url": "jobs/sydney-senior-liquidity-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6843180445478003773",
    "description": ""
  },
  {
    "id": "jooble--7248750468831544848",
    "title": "Junior Client Funding Operations Specialist (12-Month Fixed Term)",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-02",
    "slug": "sydney-junior-client-funding-operations-specialist-12-month-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-junior-client-funding-operations-specialist-12-month-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7248750468831544848",
    "description": ""
  },
  {
    "id": "jooble-7852354542268900856",
    "title": "Client Funding Operations Specialist",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-02",
    "slug": "sydney-client-funding-operations-specialist-482-186-sponsorship",
    "url": "jobs/sydney-client-funding-operations-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7852354542268900856",
    "description": ""
  },
  {
    "id": "jooble-1939831225563013561",
    "title": "Third Party Risk Specialist",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-02",
    "slug": "sydney-third-party-risk-specialist-482-186-sponsorship",
    "url": "jobs/sydney-third-party-risk-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1939831225563013561",
    "description": ""
  },
  {
    "id": "adzuna-5905821042",
    "title": "Garden Labourer/General Service Officer | ACT Government",
    "company": "Charter Diligence Pty Ltd",
    "logoInitial": "C",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$91,145 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "362211",
    "posted": "2026-10-02",
    "slug": "canberra-garden-labourergeneral-service-officer-act-government-482-186-sponsorship",
    "url": "jobs/canberra-garden-labourergeneral-service-officer-act-government-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5905821042?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5905820395",
    "title": "OHT/ Hygienist - Regional Australia",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-02",
    "slug": "sydney-oht-hygienist-regional-australia-482-186-sponsorship",
    "url": "jobs/sydney-oht-hygienist-regional-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5905820395?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904773336",
    "title": "Speech Pathologist",
    "company": "Better Rehab",
    "logoInitial": "B",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-01",
    "slug": "perth-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/perth-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773336?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904773334",
    "title": "Speech Pathologist",
    "company": "Better Rehab",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-01",
    "slug": "brisbane-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773334?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904773333",
    "title": "Speech Pathologist",
    "company": "Better Rehab",
    "logoInitial": "B",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-10-01",
    "slug": "melbourne-speech-pathologist-482-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-speech-pathologist-482-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773333?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-1913775257676325605",
    "title": "Assistant Vice President, Transaction Monitoring",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "sydney-assistant-vice-president-transaction-monitoring-482-186-sponsorship",
    "url": "jobs/sydney-assistant-vice-president-transaction-monitoring-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1913775257676325605",
    "description": ""
  },
  {
    "id": "jooble-2364463742214588503",
    "title": "Analyst, Transaction Monitoring",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "sydney-analyst-transaction-monitoring-482-186-sponsorship",
    "url": "jobs/sydney-analyst-transaction-monitoring-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2364463742214588503",
    "description": ""
  },
  {
    "id": "jooble--535695097121289701",
    "title": "Senior Risk Governance Officer (2-year Max Term)",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "511112",
    "posted": "2026-10-01",
    "slug": "sydney-senior-risk-governance-officer-2-year-max-term-482-186-sponsorship",
    "url": "jobs/sydney-senior-risk-governance-officer-2-year-max-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-535695097121289701",
    "description": ""
  },
  {
    "id": "jooble--3217465336710098149",
    "title": "Senior Automation Engineer",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "sydney-senior-automation-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-automation-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3217465336710098149",
    "description": ""
  },
  {
    "id": "adzuna-5904687907",
    "title": "Dubbo Case Worker - Fixed Term",
    "company": "Westhaven",
    "logoInitial": "W",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "sydney-dubbo-case-worker-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-dubbo-case-worker-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687907?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=2D8E39EE162C1619DEDA697AE9CF077D9D7710A0",
    "description": ""
  },
  {
    "id": "adzuna-5904687649",
    "title": "Payroll Intern",
    "company": "TFE Hotels",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "finance",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "221111",
    "posted": "2026-10-01",
    "slug": "sydney-payroll-intern-482-186-sponsorship",
    "url": "jobs/sydney-payroll-intern-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687649?se=MpL3UUXD8RGKlPimNLdoEw&utm_medium=api&utm_source=13c876f1&v=A42C77A8F177EECB2464C55C976299242E8DF558",
    "description": ""
  },
  {
    "id": "adzuna-5904687359",
    "title": "Assistant Shop Manager - Camberwell",
    "company": "Scope Australia",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "sydney-assistant-shop-manager-camberwell-482-186-sponsorship",
    "url": "jobs/sydney-assistant-shop-manager-camberwell-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687359?se=KPUT-XXB8RG-V75y7ZstFQ&utm_medium=api&utm_source=13c876f1&v=8C9AA0C5D2DCD9CDF7AB24D6733AF1FF2DF3434F",
    "description": ""
  },
  {
    "id": "adzuna-5904661100",
    "title": "Senior Child Protection Practitioner, Barwon Area",
    "company": "Department of Families, Fairness and Housing",
    "logoInitial": "D",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-barwon-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-barwon-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904661100?utm_medium=api&utm_source=13c876f1",
    "description": "The Department of Families, Fairness and Housing (DFFH) works hard to create equal opportunities for all Victorians to live a safe, respected and valued life. Our areas of focus are child protection, housing, disability,..."
  },
  {
    "id": "adzuna-5904360141",
    "title": "Advanced Child Protection Practitioner",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-advanced-child-protection-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-advanced-child-protection-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360141?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360122",
    "title": "Senior Child Protection Practitioner, Mallee Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-mallee-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-mallee-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360122?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360058",
    "title": "Team Manager, Child Protection",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-team-manager-child-protection-482-186-sponsorship",
    "url": "jobs/melbourne-team-manager-child-protection-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360058?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360107",
    "title": "Team Manager, Child Protection",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-team-manager-child-protection-482-186-sponsorship",
    "url": "jobs/sydney-team-manager-child-protection-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360107?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360085",
    "title": "Senior Child Protection Practitioner, Loddon Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-loddon-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-loddon-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360085?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360013",
    "title": "Senior Child Protection Practitioner, Goulburn Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-goulburn-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-goulburn-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360013?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904360029",
    "title": "Senior Child Protection Practitioner, Bayside Peninsula Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360029?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359991",
    "title": "Senior Child Protection Practitioner, Hume Merri-Bek and North Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-senior-child-protection-practitioner-hume-merri-bek-and-north-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-hume-merri-bek-and-north-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359991?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359980",
    "title": "Senior Child Protection Practitioner, Inner Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-senior-child-protection-practitioner-inner-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-inner-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359980?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359937",
    "title": "Senior Child Protection Practitioner, Brimbank Melton Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-senior-child-protection-practitioner-brimbank-melton-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-brimbank-melton-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359937?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359933",
    "title": "Senior Child Protection Practitioner, Outer Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-senior-child-protection-practitioner-outer-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-outer-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359933?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359838",
    "title": "Senior Child Protection Practitioner, Wimmera South West Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-wimmera-south-west-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-wimmera-south-west-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359838?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359717",
    "title": "Senior Child Protection Practitioner, Western Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "melbourne-senior-child-protection-practitioner-western-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-western-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359717?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359714",
    "title": "Senior Child Protection Practitioner, Barwon Area",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Geelong, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "geelong-senior-child-protection-practitioner-barwon-area-482-186-sponsorship",
    "url": "jobs/geelong-senior-child-protection-practitioner-barwon-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359714?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5904359736",
    "title": "Senior Child Protection Practitioner",
    "company": "Victorian Government",
    "logoInitial": "V",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272511",
    "posted": "2026-10-01",
    "slug": "sydney-senior-child-protection-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359736?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903936860",
    "title": "Oral Health Therapist - Orthodontic Clinic | Warrnambool, VIC",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
    "location": "Geelong, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-10-01",
    "slug": "geelong-oral-health-therapist-orthodontic-clinic-warrnambool-vic-482-186-sponsorship",
    "url": "jobs/geelong-oral-health-therapist-orthodontic-clinic-warrnambool-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903936860?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--3333975422946487295",
    "title": "Civil Manager",
    "company": "Invictus People",
    "logoInitial": "I",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "engineering",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$200,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "233211",
    "posted": "2026-09-30",
    "slug": "adelaide-civil-manager-482-494-sponsorship",
    "url": "jobs/adelaide-civil-manager-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3333975422946487295",
    "description": ""
  },
  {
    "id": "adzuna-5903525037",
    "title": "Visa, Relocation and Global Mobility Specialist",
    "company": "Macquarie University",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-09-30",
    "slug": "sydney-visa-relocation-and-global-mobility-specialist-482-186-sponsorship",
    "url": "jobs/sydney-visa-relocation-and-global-mobility-specialist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903525037?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903436895",
    "title": "Occupational Therapist",
    "company": "Better Rehab",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-09-30",
    "slug": "sydney-occupational-therapist-482-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-482-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903436895?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903388032",
    "title": "Heavy Diesel Mechanic (Sponsorship Available)",
    "company": "Complete Tyre Solutions",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "321212",
    "posted": "2026-09-30",
    "slug": "sydney-heavy-diesel-mechanic-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-heavy-diesel-mechanic-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903388032?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903387303",
    "title": "Veterinary Associate - Greencross Robina",
    "company": "Greencross Pet Wellness Company",
    "logoInitial": "G",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "234711",
    "posted": "2026-09-30",
    "slug": "gold-coast-veterinary-associate-greencross-robina-482-494-sponsorship",
    "url": "jobs/gold-coast-veterinary-associate-greencross-robina-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903387303?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903385322",
    "title": "General Practitioner / Family Physician – Picturesque Victoria, Lifestyle & Earnings",
    "company": "Advantage Medical Staffing",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-09-30",
    "slug": "sydney-general-practitioner-family-physician-picturesque-victoria-lifestyle-earnings-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-family-physician-picturesque-victoria-lifestyle-earnings-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903385322?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903382695",
    "title": "Service Technician / Mechanic (45-ton forklifts/reach stackers)",
    "company": "Hedz Recruitment",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "321212",
    "posted": "2026-09-30",
    "slug": "sydney-service-technician-mechanic-45-ton-forkliftsreach-stackers-482-186-sponsorship",
    "url": "jobs/sydney-service-technician-mechanic-45-ton-forkliftsreach-stackers-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903382695?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903382248",
    "title": "Belt Splicer / Conveyor Technician",
    "company": "ContiTech",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-belt-splicer-conveyor-technician-482-186-sponsorship",
    "url": "jobs/sydney-belt-splicer-conveyor-technician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903382248?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903381755",
    "title": "Foreman / Supervisor (Commercial Workshop)",
    "company": "Hedz Recruitment",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-foreman-supervisor-commercial-workshop-482-186-sponsorship",
    "url": "jobs/sydney-foreman-supervisor-commercial-workshop-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903381755?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903381595",
    "title": "Belt Splicer / Conveyor Technician",
    "company": "ContiTech",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "perth-belt-splicer-conveyor-technician-482-494-sponsorship",
    "url": "jobs/perth-belt-splicer-conveyor-technician-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903381595?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903381467",
    "title": "Technology Site Consultant",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "brisbane-technology-site-consultant-482-494-sponsorship",
    "url": "jobs/brisbane-technology-site-consultant-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903381467?se=BghAsZ3E8RG_59bpLSVmjQ&utm_medium=api&utm_source=13c876f1&v=11A8B9862141FC589A646B44B29B2AF9F389FA86",
    "description": ""
  },
  {
    "id": "adzuna-5903370316",
    "title": "GTS General Adjuster",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "perth-gts-general-adjuster-482-494-sponsorship",
    "url": "jobs/perth-gts-general-adjuster-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903370316?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=1A105A85C4329CD4720CF54664AD0B6FA04ECFB9",
    "description": ""
  },
  {
    "id": "adzuna-5903369191",
    "title": "Casualty Schemes Lead, Australia",
    "company": "AIG Insurance",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-casualty-schemes-lead-australia-482-186-sponsorship",
    "url": "jobs/sydney-casualty-schemes-lead-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903369191?se=KEesR0XD8RGFeJNPAywTzg&utm_medium=api&utm_source=13c876f1&v=00AC6780CDEC33E65DF6AB8D863D3162DB8ABB58",
    "description": ""
  },
  {
    "id": "adzuna-5903366811",
    "title": "GTS General Adjuster",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-gts-general-adjuster-482-186-sponsorship",
    "url": "jobs/sydney-gts-general-adjuster-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903366811?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=714D2739653F825C31B8D907E9FF942EB1E487FD",
    "description": ""
  },
  {
    "id": "adzuna-5903366239",
    "title": "GTS General Adjuster",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "adelaide-gts-general-adjuster-482-494-sponsorship",
    "url": "jobs/adelaide-gts-general-adjuster-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903366239?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=31E3E158C16524C55F90E68AE8BCD7C6383FD821",
    "description": ""
  },
  {
    "id": "adzuna-5903365374",
    "title": "Senior Liability Adjuster",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-senior-liability-adjuster-482-186-sponsorship",
    "url": "jobs/sydney-senior-liability-adjuster-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903365374?se=YrZYQkXD8RGYlKz4wh8B5A&utm_medium=api&utm_source=13c876f1&v=EFB02896FC1CBD2029F23F44166F2B49C0D75912",
    "description": ""
  },
  {
    "id": "adzuna-5903364376",
    "title": "General Practitioner | Perth, Western Australia",
    "company": "Advantage Medical Staffing",
    "logoInitial": "A",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-09-30",
    "slug": "perth-general-practitioner-perth-western-australia-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-perth-western-australia-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903364376?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903363005",
    "title": "Auto Mechanic / Heavy Commercial Mechanic",
    "company": "Chelsea AiCademy",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "321212",
    "posted": "2026-09-30",
    "slug": "melbourne-auto-mechanic-heavy-commercial-mechanic-482-186-sponsorship",
    "url": "jobs/melbourne-auto-mechanic-heavy-commercial-mechanic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903363005?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903362017",
    "title": "General Adjuster",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-general-adjuster-482-186-sponsorship",
    "url": "jobs/sydney-general-adjuster-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903362017?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=FCE57FDED639DC49A0F5FA27FCAB8CFD0819F409",
    "description": ""
  },
  {
    "id": "adzuna-5903361600",
    "title": "Korean-Speaking Game Presenter (Visa Sponsorship & Relocation Support)",
    "company": "Cross Border Talents",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-korean-speaking-game-presenter-visa-sponsorship-relocation-support-482-186-sponsorship",
    "url": "jobs/sydney-korean-speaking-game-presenter-visa-sponsorship-relocation-support-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903361600?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903360565",
    "title": "Experienced Diploma Educator | Room Leader | Beautiful 5-Acre Setting",
    "company": "Early Years Talent",
    "logoInitial": "E",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-09-30",
    "slug": "sydney-experienced-diploma-educator-room-leader-beautiful-5-acre-setting-482-186-sponsorship",
    "url": "jobs/sydney-experienced-diploma-educator-room-leader-beautiful-5-acre-setting-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903360565?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903360192",
    "title": "Panel Beater",
    "company": "Chelsea AiCademy",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "trades",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "324311",
    "posted": "2026-09-30",
    "slug": "melbourne-panel-beater-482-186-sponsorship",
    "url": "jobs/melbourne-panel-beater-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903360192?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903359244",
    "title": "Podiatrist, Melbourne",
    "company": "Angel Assist",
    "logoInitial": "A",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252611",
    "posted": "2026-09-30",
    "slug": "melbourne-podiatrist-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-podiatrist-melbourne-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903359244?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903357974",
    "title": "Executive Liability Adjuster/NSW Liability Manager",
    "company": "Crawford",
    "logoInitial": "C",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "canberra-executive-liability-adjusternsw-liability-manager-482-186-sponsorship",
    "url": "jobs/canberra-executive-liability-adjusternsw-liability-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903357974?se=iOvMLXnF8RGEhPbAVXetLQ&utm_medium=api&utm_source=13c876f1&v=63656C87946D08A6C2BA09C35BDBD5FE9C236B09",
    "description": ""
  },
  {
    "id": "adzuna-5903357099",
    "title": "General Dentist (ADC Qualified)",
    "company": "Chelsea AiCademy",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252312",
    "posted": "2026-09-30",
    "slug": "sydney-general-dentist-adc-qualified-482-186-sponsorship",
    "url": "jobs/sydney-general-dentist-adc-qualified-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903357099?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903356260",
    "title": "Physiotherapist - Coffs Harbour",
    "company": "Javiera Ski",
    "logoInitial": "J",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252511",
    "posted": "2026-09-30",
    "slug": "melbourne-physiotherapist-coffs-harbour-482-186-sponsorship",
    "url": "jobs/melbourne-physiotherapist-coffs-harbour-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903356260?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903353263",
    "title": "Complex Claims Examiner, Business Package",
    "company": "AIG Insurance",
    "logoInitial": "A",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "melbourne-complex-claims-examiner-business-package-482-186-sponsorship",
    "url": "jobs/melbourne-complex-claims-examiner-business-package-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903353263?se=Sjc1-3XB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=9428E33E5FE979D2937AF2849C9C3ECB822010C8",
    "description": ""
  },
  {
    "id": "adzuna-5903348028",
    "title": "Fractional Senior Marketing Director",
    "company": "HelloKindred",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-09-30",
    "slug": "sydney-fractional-senior-marketing-director-482-186-sponsorship",
    "url": "jobs/sydney-fractional-senior-marketing-director-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903348028?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5903344713",
    "title": "O&G Consultant - Regional NSW",
    "company": "Mediix",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-og-consultant-regional-nsw-482-186-sponsorship",
    "url": "jobs/sydney-og-consultant-regional-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903344713?se=YrZYQkXD8RGYlKz4wh8B5A&utm_medium=api&utm_source=13c876f1&v=C325493F1ECDFA8169B51931ED865E4A4F1C48D3",
    "description": ""
  },
  {
    "id": "adzuna-5903344550",
    "title": "FY27 TEST Vacationer - Perth - Consulting",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "perth-fy27-test-vacationer-perth-consulting-482-494-sponsorship",
    "url": "jobs/perth-fy27-test-vacationer-perth-consulting-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903344550?se=ZjrrP3nC8RG_dfJx5Ytquw&utm_medium=api&utm_source=13c876f1&v=11DC68D8B558248536AE0F28CE3DC0B99E1CEE31",
    "description": ""
  },
  {
    "id": "adzuna-5903344458",
    "title": "FY27 TEST Trainee - Melbourne - Deals",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "melbourne-fy27-test-trainee-melbourne-deals-482-186-sponsorship",
    "url": "jobs/melbourne-fy27-test-trainee-melbourne-deals-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903344458?se=ZjrrP3nC8RG_dfJx5Ytquw&utm_medium=api&utm_source=13c876f1&v=3C25E34BA50EDDF54ED14CD9836CBA1DE6434311",
    "description": ""
  },
  {
    "id": "adzuna-5903344184",
    "title": "FY27 TEST Trainee - Perth - Consulting",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "perth-fy27-test-trainee-perth-consulting-482-494-sponsorship",
    "url": "jobs/perth-fy27-test-trainee-perth-consulting-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903344184?se=ZjrrP3nC8RG_dfJx5Ytquw&utm_medium=api&utm_source=13c876f1&v=D200C58EC5E65AE9272B99F3A71A266B165A9BD3",
    "description": ""
  },
  {
    "id": "adzuna-5903344051",
    "title": "One Advisory",
    "company": "Calculated Solutions",
    "logoInitial": "C",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "adelaide-one-advisory-482-494-sponsorship",
    "url": "jobs/adelaide-one-advisory-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903344051?se=YrZYQkXD8RGYlKz4wh8B5A&utm_medium=api&utm_source=13c876f1&v=824C0A740A1D2A7FF9E6FF495CF3CD2A48A5BA35",
    "description": ""
  },
  {
    "id": "adzuna-5903342767",
    "title": "Senior Recruitment Consultant",
    "company": "Red Earth Recruitment",
    "logoInitial": "R",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-09-30",
    "slug": "brisbane-senior-recruitment-consultant-482-494-sponsorship",
    "url": "jobs/brisbane-senior-recruitment-consultant-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903342767?se=Ns--AXbB8RG-V75y7ZstFQ&utm_medium=api&utm_source=13c876f1&v=E9F49418443341CCC6DBF7057DFE60A433414841",
    "description": ""
  },
  {
    "id": "adzuna-5903341536",
    "title": "HR and Recruitment Co-rdinator",
    "company": "National Health Recruitment",
    "logoInitial": "N",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-09-30",
    "slug": "perth-hr-and-recruitment-co-rdinator-482-494-sponsorship",
    "url": "jobs/perth-hr-and-recruitment-co-rdinator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903341536?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=83222F4EF92FD67F6D4D5C9099C7D4446591BDE8",
    "description": ""
  },
  {
    "id": "adzuna-5903339961",
    "title": "Senior Business Analyst (Process)",
    "company": "LVT People",
    "logoInitial": "L",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-09-30",
    "slug": "sydney-senior-business-analyst-process-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-process-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903339961?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=8304160E040584151FC8DDDDA790B5150E195E49",
    "description": ""
  },
  {
    "id": "adzuna-5903339470",
    "title": "Recruitment Consultant",
    "company": "Red Earth Recruitment",
    "logoInitial": "R",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "223112",
    "posted": "2026-09-30",
    "slug": "sydney-recruitment-consultant-482-186-sponsorship",
    "url": "jobs/sydney-recruitment-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903339470?se=ugSVUEXD8RGKlPimNLdoEw&utm_medium=api&utm_source=13c876f1&v=DA29D1A42DE9383DCC5DBA2B16DE0DB9FB75892D",
    "description": ""
  },
  {
    "id": "adzuna-5903277378",
    "title": "OPERATIONS & QUALITY CONTROL SUPERVISOR",
    "company": "CBC Staff",
    "logoInitial": "C",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "cairns-operations-quality-control-supervisor-482-494-sponsorship",
    "url": "jobs/cairns-operations-quality-control-supervisor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903277378?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-2678041044398409102",
    "title": "Education Consultant - Australian Student Admissions & Visa Processing",
    "company": "recruitometry",
    "logoInitial": "R",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-30",
    "slug": "sydney-education-consultant-australian-student-admissions-visa-processing-482-186-sponsorship",
    "url": "jobs/sydney-education-consultant-australian-student-admissions-visa-processing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/desc/2678041044398409102",
    "description": ""
  },
  {
    "id": "adzuna-5902215739",
    "title": "General Practitioner (VR) | Newstead | Launceston, TAS",
    "company": "Ochre Recruitment",
    "logoInitial": "O",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253111",
    "posted": "2026-09-29",
    "slug": "hobart-general-practitioner-vr-newstead-launceston-tas-482-494-sponsorship",
    "url": "jobs/hobart-general-practitioner-vr-newstead-launceston-tas-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5902215739?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-522675594270398885",
    "title": "Structural Manager",
    "company": "Invictus People",
    "logoInitial": "I",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "engineering",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$200,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "233211",
    "posted": "2026-09-29",
    "slug": "brisbane-structural-manager-482-494-sponsorship",
    "url": "jobs/brisbane-structural-manager-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/522675594270398885",
    "description": ""
  },
  {
    "id": "jooble--7074491833203536227",
    "title": "Senior Client Funding Operations Specialist",
    "company": "TMGM",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-09-29",
    "slug": "sydney-senior-client-funding-operations-specialist-482-186-sponsorship",
    "url": "jobs/sydney-senior-client-funding-operations-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7074491833203536227",
    "description": ""
  },
  {
    "id": "jooble-6959625611204275150",
    "title": "Reseller Sales Manager",
    "company": "Forgepoint Capital",
    "logoInitial": "F",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "131112",
    "posted": "2026-09-29",
    "slug": "sydney-reseller-sales-manager-482-186-sponsorship",
    "url": "jobs/sydney-reseller-sales-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6959625611204275150",
    "description": ""
  },
  {
    "id": "jooble-7312409301145371611",
    "title": "Senior Business Analyst - Workforce Planning (12mth FTC)",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-09-29",
    "slug": "sydney-senior-business-analyst-workforce-planning-12mth-ftc-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-workforce-planning-12mth-ftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7312409301145371611",
    "description": ""
  },
  {
    "id": "jooble-1317327881213715147",
    "title": "Senior Business Analyst - Claims & Customer Outcomes",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-09-29",
    "slug": "sydney-senior-business-analyst-claims-customer-outcomes-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-claims-customer-outcomes-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1317327881213715147",
    "description": ""
  },
  {
    "id": "jooble-805419681873982271",
    "title": "Business Analyst - Fixed Income Risk Platform",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-09-29",
    "slug": "sydney-business-analyst-fixed-income-risk-platform-482-186-sponsorship",
    "url": "jobs/sydney-business-analyst-fixed-income-risk-platform-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/805419681873982271",
    "description": ""
  },
  {
    "id": "jooble-8807814266393319490",
    "title": "Digital Business Analyst (12 Month Fixed Term Contract)",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261111",
    "posted": "2026-09-29",
    "slug": "sydney-digital-business-analyst-12-month-fixed-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-digital-business-analyst-12-month-fixed-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8807814266393319490",
    "description": ""
  },
  {
    "id": "jooble-6265564579630129658",
    "title": "Claims Governance & Risk Specialist",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-09-29",
    "slug": "sydney-claims-governance-risk-specialist-482-186-sponsorship",
    "url": "jobs/sydney-claims-governance-risk-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6265564579630129658",
    "description": ""
  },
  {
    "id": "jooble--3801283907477993987",
    "title": "Dispute Resolution Coordinator - 12-month fixed term contract",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "511112",
    "posted": "2026-09-29",
    "slug": "sydney-dispute-resolution-coordinator-12-month-fixed-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-dispute-resolution-coordinator-12-month-fixed-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3801283907477993987",
    "description": ""
  },
  {
    "id": "jooble--4203461732050595105",
    "title": "Delivery Lead, compliance and governance (12MFTC)",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-29",
    "slug": "sydney-delivery-lead-compliance-and-governance-12mftc-482-186-sponsorship",
    "url": "jobs/sydney-delivery-lead-compliance-and-governance-12mftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4203461732050595105",
    "description": ""
  },
  {
    "id": "jooble--7015965452741628787",
    "title": "Head of Data Platform Engineering & Delivery",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-29",
    "slug": "sydney-head-of-data-platform-engineering-delivery-482-186-sponsorship",
    "url": "jobs/sydney-head-of-data-platform-engineering-delivery-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7015965452741628787",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "adzuna-5901617645",
    "title": "fixed plant fitter",
    "company": "MOLMUC Integrated Engineering Pty Ltd",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$118,560 - $138,320 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "323212",
    "posted": "2026-09-28",
    "slug": "perth-fixed-plant-fitter-482-494-sponsorship",
    "url": "jobs/perth-fixed-plant-fitter-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901617645?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5901612088",
    "title": "Correctional Permanent vacancies available | Sponsorship available | RNs",
    "company": "SustainHealth Recruitment",
    "logoInitial": "S",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $114,379 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-28",
    "slug": "sydney-correctional-permanent-vacancies-available-sponsorship-available-rns-482-186-sponsorship",
    "url": "jobs/sydney-correctional-permanent-vacancies-available-sponsorship-available-rns-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901612088?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5901611859",
    "title": "Dentist - Maroubra",
    "company": "ForHealth Group",
    "logoInitial": "F",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252312",
    "posted": "2026-09-28",
    "slug": "sydney-dentist-maroubra-482-186-sponsorship",
    "url": "jobs/sydney-dentist-maroubra-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901611859?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5901243388",
    "title": "ASPIRE Associate - Sales & Commercial",
    "company": "Baker Hughes",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "225113",
    "posted": "2026-09-28",
    "slug": "sydney-aspire-associate-sales-commercial-482-186-sponsorship",
    "url": "jobs/sydney-aspire-associate-sales-commercial-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901243388?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5900652594",
    "title": "Occupational Therapist - Sponsorship available for candidates with AHPRA seeking PR",
    "company": "Catholic Healthcare",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$118,560 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252411",
    "posted": "2026-09-28",
    "slug": "sydney-occupational-therapist-sponsorship-available-for-candidates-with-ahpra-seeking-pr-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-sponsorship-available-for-candidates-with-ahpra-seeking-pr-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900652594?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5900303755",
    "title": "Regional Manager Customer Value Enablement",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-27",
    "slug": "brisbane-regional-manager-customer-value-enablement-482-494-sponsorship",
    "url": "jobs/brisbane-regional-manager-customer-value-enablement-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5900303755?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=3C7B716EDBE10C87AC1E250914D1A283B8C1FAAF",
    "description": ""
  },
  {
    "id": "adzuna-5900303441",
    "title": "Registered Nurse - Maclean",
    "company": "Whiddon",
    "logoInitial": "W",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-09-27",
    "slug": "sydney-registered-nurse-maclean-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-maclean-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5900303441?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D9F23CCC7A5989C0A96B124184015DC569EC5ECE",
    "description": ""
  },
  {
    "id": "adzuna-5900303172",
    "title": "Senior Engineer – Power Systems Integration",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Burnie, TAS",
    "state": "TAS",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-27",
    "slug": "burnie-senior-engineer-power-systems-integration-482-494-sponsorship",
    "url": "jobs/burnie-senior-engineer-power-systems-integration-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900303172?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5899229073",
    "title": "Senior Emergency Veterinarian | Greencross Veterinary Hospital - Werribee",
    "company": "Greencross Pet Wellness Company",
    "logoInitial": "G",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "234711",
    "posted": "2026-09-26",
    "slug": "sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship",
    "url": "jobs/sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899229073?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896453219",
    "title": "Registered Nurse Swansea Part Time / Casual",
    "company": "Celebrate Health Care",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-09-24",
    "slug": "sydney-registered-nurse-swansea-part-time-casual-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-swansea-part-time-casual-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5896453219?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=B7E9F08E6261A012F1EAD51F1C55280FD8E00296",
    "description": ""
  },
  {
    "id": "adzuna-5894810090",
    "title": "Category Manager",
    "company": "Likewize",
    "logoInitial": "L",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-23",
    "slug": "melbourne-category-manager-482-186-sponsorship",
    "url": "jobs/melbourne-category-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5894810090?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5893966177",
    "title": "English & Drama Teacher",
    "company": "Technical Focus Pty Ltd t/as Talent Focus",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "241411",
    "posted": "2026-09-22",
    "slug": "sydney-english-drama-teacher-482-186-sponsorship",
    "url": "jobs/sydney-english-drama-teacher-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893966177?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5893580952",
    "title": "Dental Assistant",
    "company": "Woods Co",
    "logoInitial": "W",
    "location": "Melbourne, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "252312",
    "posted": "2026-09-22",
    "slug": "melbourne-dental-assistant-482-186-sponsorship",
    "url": "jobs/melbourne-dental-assistant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893580952?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--648593985206654920",
    "title": "Manager - Enterprise Risk & Compliance (Line 2)",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-22",
    "slug": "sydney-manager-enterprise-risk-compliance-line-2-482-186-sponsorship",
    "url": "jobs/sydney-manager-enterprise-risk-compliance-line-2-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-648593985206654920",
    "description": ""
  },
  {
    "id": "jooble--5721114694026614434",
    "title": "Analyst, Treasury Settlements",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-22",
    "slug": "sydney-analyst-treasury-settlements-482-186-sponsorship",
    "url": "jobs/sydney-analyst-treasury-settlements-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5721114694026614434",
    "description": ""
  },
  {
    "id": "jooble-4791992919476454213",
    "title": "Manager - Default Management",
    "company": "ASX Limited",
    "logoInitial": "A",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-22",
    "slug": "sydney-manager-default-management-482-186-sponsorship",
    "url": "jobs/sydney-manager-default-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4791992919476454213",
    "description": ""
  },
  {
    "id": "jooble-586657431847569396",
    "title": "Correspondence Governance Manager",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-22",
    "slug": "sydney-correspondence-governance-manager-482-186-sponsorship",
    "url": "jobs/sydney-correspondence-governance-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/586657431847569396",
    "description": ""
  },
  {
    "id": "adzuna-5890046598",
    "title": "Senior Psychologist | Toowoomba QLD (10004258)",
    "company": "HEALTH WORKFORCE QUEENSLAND",
    "logoInitial": "H",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$130,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "272311",
    "posted": "2026-09-19",
    "slug": "sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship",
    "url": "jobs/sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890046598?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5890015657",
    "title": "Trainee Seafood Processor",
    "company": "Frontline Recruitment",
    "logoInitial": "F",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-19",
    "slug": "brisbane-trainee-seafood-processor-482-494-sponsorship",
    "url": "jobs/brisbane-trainee-seafood-processor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890015657?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887150593",
    "title": "Corporate After Hours Consultant",
    "company": "Flight Centre Travel Group",
    "logoInitial": "F",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-17",
    "slug": "sydney-corporate-after-hours-consultant-482-186-sponsorship",
    "url": "jobs/sydney-corporate-after-hours-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150593?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=527989DAD4A452468B73BFBBAFF544B27AF9EC19",
    "description": ""
  },
  {
    "id": "adzuna-5887140715",
    "title": "Emergency Medicine Registrar",
    "company": "ME Medical Recruitment",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-09-17",
    "slug": "perth-emergency-medicine-registrar-482-494-sponsorship",
    "url": "jobs/perth-emergency-medicine-registrar-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887140715?se=oiAFOfjH8RGMeuQWzwoBfw&utm_medium=api&utm_source=13c876f1&v=A68A701EC442FA3554D111C63933A3911DBFE01A",
    "description": "ME Medical Recruitment is currently recruiting for an Emergency Medicine Registrar – Bunbury, WA Looking for your next career move? Join a busy regional city ED in Bunbury, Western Australia and enjoy: ✅ Competitive sala..."
  },
  {
    "id": "adzuna-5887139019",
    "title": "Enrolled Nurse",
    "company": "Tallangatta Health Service",
    "logoInitial": "T",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-09-17",
    "slug": "sydney-enrolled-nurse-482-186-sponsorship",
    "url": "jobs/sydney-enrolled-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887139019?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887137933",
    "title": "Software Engineer (Model Deployment)",
    "company": "coreflow",
    "logoInitial": "C",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "261313",
    "posted": "2026-09-17",
    "slug": "sydney-software-engineer-model-deployment-482-186-sponsorship",
    "url": "jobs/sydney-software-engineer-model-deployment-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887137933?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887136141",
    "title": "Travel Operations Specialist - Content",
    "company": "Flight Centre Travel Group",
    "logoInitial": "F",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "253399",
    "posted": "2026-09-17",
    "slug": "sydney-travel-operations-specialist-content-482-186-sponsorship",
    "url": "jobs/sydney-travel-operations-specialist-content-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887136141?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=0E80BB9DABAE3F416496F2EE3AB50079C2D6E8AF",
    "description": ""
  },
  {
    "id": "adzuna-5887133926",
    "title": "Home Care Worker - Sunnybank QLD",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "423111",
    "posted": "2026-09-17",
    "slug": "brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship",
    "url": "jobs/brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887133926?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=87BB9EAF17A5B84204B80CA38A4E43069844229B",
    "description": ""
  },
  {
    "id": "adzuna-5884626470",
    "title": "Product Support Operations Representative",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "management",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-15",
    "slug": "perth-product-support-operations-representative-482-494-sponsorship",
    "url": "jobs/perth-product-support-operations-representative-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884626470?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=05C46910F744160BC88EB792E794633FE4162D73",
    "description": ""
  },
  {
    "id": "adzuna-5884506971",
    "title": "REGISTERED NURSE - RESIDENTIAL AGED CARE",
    "company": "McLean Care",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "healthcare",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "254415",
    "posted": "2026-09-15",
    "slug": "sydney-registered-nurse-residential-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-residential-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884506971?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--6741752858076328875",
    "title": "Claims Change Manager",
    "company": "BNB Chain",
    "logoInitial": "B",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "management",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": false,
    "anzsco": "",
    "posted": "2026-09-15",
    "slug": "sydney-claims-change-manager-482-186-sponsorship",
    "url": "jobs/sydney-claims-change-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6741752858076328875",
    "description": ""
  }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initJobFilters();
  initContactForm();
  initCookieConsent();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !toggleBtn.contains(e.target) && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/**
 * Job Search & Filtering Engine
 */
function initJobFilters() {
  const jobsContainer = document.getElementById('jobs-feed');
  const searchInput = document.getElementById('search-keyword');
  const stateSelect = document.getElementById('filter-state');
  const visaSelect = document.getElementById('filter-visa');
  const searchForm = document.getElementById('job-search-form');
  const jobCountEl = document.getElementById('job-count-display');
  const categoryPills = document.querySelectorAll('.pill-btn[data-category]');
  const quickTags = document.querySelectorAll('.quick-tag[data-query]');

  if (!jobsContainer) return;

  let currentFilters = {
    keyword: '',
    state: 'ALL',
    visa: 'ALL',
    category: 'all'
  };

  // Read URL query parameters for deep linking (e.g. ?visa=482, ?state=NSW, ?cat=technology)
  const urlParams = new URLSearchParams(window.location.search);
  const paramKeyword = urlParams.get('q') || urlParams.get('keyword');
  const paramState = urlParams.get('state');
  const paramVisa = urlParams.get('visa');
  const paramCategory = urlParams.get('category') || urlParams.get('cat');

  // Expired Job Redirect Banner Handler
  const noticeParam = urlParams.get('notice');
  const fromJobParam = urlParams.get('from_job') || urlParams.get('job');
  const expiredBanner = document.getElementById('job-expired-banner');
  if (expiredBanner && (noticeParam === 'expired' || urlParams.has('expired'))) {
    expiredBanner.style.display = 'block';
    const labelEl = document.getElementById('expired-job-label');
    if (labelEl && fromJobParam) {
      labelEl.textContent = `"${decodeURIComponent(fromJobParam)}"`;
    }
  }

  let hasUrlFilter = false;

  if (paramKeyword) {
    currentFilters.keyword = paramKeyword.trim().toLowerCase();
    if (searchInput) searchInput.value = paramKeyword;
    hasUrlFilter = true;
  }
  if (paramState && ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'].includes(paramState.toUpperCase())) {
    currentFilters.state = paramState.toUpperCase();
    if (stateSelect) stateSelect.value = currentFilters.state;
    hasUrlFilter = true;
  }
  if (paramVisa && ['482', '186', '494'].includes(paramVisa)) {
    currentFilters.visa = paramVisa;
    if (visaSelect) visaSelect.value = currentFilters.visa;
    hasUrlFilter = true;
  }
  if (paramCategory) {
    currentFilters.category = paramCategory.toLowerCase();
    categoryPills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-category') === currentFilters.category);
    });
    hasUrlFilter = true;
  }

  // Initial render with potential URL filters
  if (hasUrlFilter) {
    applyFilters();
    setTimeout(() => {
      document.getElementById('jobs-feed-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  } else {
    renderJobs(JOBS_DATA);
  }

  // Form submit handler
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      applyFilters();
    });
  }

  // Real-time keyword filter
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentFilters.keyword = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // State change
  if (stateSelect) {
    stateSelect.addEventListener('change', () => {
      currentFilters.state = stateSelect.value;
      applyFilters();
    });
  }

  // Visa change
  if (visaSelect) {
    visaSelect.addEventListener('change', () => {
      currentFilters.visa = visaSelect.value;
      applyFilters();
    });
  }

  // Category Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilters.category = pill.getAttribute('data-category');
      applyFilters();
    });
  });

  // Hero Quick Tags
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const query = tag.getAttribute('data-query');
      if (searchInput) {
        searchInput.value = query;
        currentFilters.keyword = query.toLowerCase();
        applyFilters();
        // Scroll smoothly to feed
        document.getElementById('jobs-feed-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function applyFilters() {
    const filtered = JOBS_DATA.filter(job => {
      // Keyword match
      const matchesKeyword = !currentFilters.keyword ||
        job.title.toLowerCase().includes(currentFilters.keyword) ||
        job.company.toLowerCase().includes(currentFilters.keyword) ||
        job.description.toLowerCase().includes(currentFilters.keyword) ||
        (job.anzsco || '').includes(currentFilters.keyword);

      // State match
      const matchesState = currentFilters.state === 'ALL' || job.state === currentFilters.state;

      // Visa match
      const matchesVisa = currentFilters.visa === 'ALL' || job.visas.includes(currentFilters.visa);

      // Category match
      const matchesCategory = currentFilters.category === 'all' || job.category === currentFilters.category;

      return matchesKeyword && matchesState && matchesVisa && matchesCategory;
    });

    renderJobs(filtered);
  }

  function renderJobs(jobs) {
    jobsContainer.innerHTML = '';

    if (jobCountEl) {
      jobCountEl.textContent = `${jobs.length} Sponsorship Jobs`;
    }

    if (jobs.length === 0) {
      jobsContainer.innerHTML = `
        <div class="empty-state">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3>No matching sponsor jobs found</h3>
          <p>Try adjusting your search criteria, selecting another visa subclass, or resetting filters to browse all Australian employers.</p>
          <button type="button" class="btn btn-primary btn-sm" id="reset-filters-btn">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          if (stateSelect) stateSelect.value = 'ALL';
          if (visaSelect) visaSelect.value = 'ALL';
          currentFilters = { keyword: '', state: 'ALL', visa: 'ALL', category: 'all' };
          categoryPills.forEach(p => p.classList.remove('active'));
          categoryPills[0]?.classList.add('active');
          renderJobs(JOBS_DATA);
        });
      }
      return;
    }

    jobs.forEach((job, index) => {
      // Fake in-feed ad placeholder REMOVED 2026-11-27: no ad renders here until real AdSense is wired.
      if (false) {
        const adWrapper = document.createElement('div');
        adWrapper.className = 'ad-slot-wrapper';
        adWrapper.innerHTML = `
          <span class="ad-label">Advertisement</span>
          <div class="ad-placeholder in-feed">
            <div style="font-size:0.85rem; color:#64748b; font-weight:500;">
              Google AdSense Native In-Feed Placement
            </div>
            <div style="font-size:0.75rem; color:#94a3b8; margin-top:0.25rem;">
              Responsive, non-intrusive ad slot optimized for job aggregator listings
            </div>
          </div>
        `;
        jobsContainer.appendChild(adWrapper);
      }

      const card = document.createElement('article');
      card.className = 'job-card';
      card.setAttribute('data-id', job.id);

      // Visa badge markup
      const visaBadges = job.visaLabels.map(label => {
        let badgeClass = 'badge-482';
        if (label.includes('186')) badgeClass = 'badge-186';
        if (label.includes('494')) badgeClass = 'badge-494';
        return `<span class="info-pill ${badgeClass}">${label}</span>`;
      }).join('');

      card.innerHTML = `
        <div class="job-card-top">
          <div class="company-logo" aria-hidden="true">${job.logoInitial}</div>
          <div class="job-meta-main">
            <div class="job-title-row">
              <h3 class="job-title"><a href="${job.url || `jobs/${job.slug}.html`}">${job.title}</a></h3>
            </div>
            <div class="company-details">
              <span><strong>${job.company}</strong></span>
              <span>&bull;</span>
              <span>${job.location}</span>
              ${job.verifiedSponsor ? `
                <span class="verified-badge" title="Visa sponsorship listing">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  Visa Sponsorship
                </span>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="job-info-pills">
          ${visaBadges}
          ${job.salary ? `<span class="info-pill badge-salary">${job.salary}</span>` : ''}
          ${job.anzsco ? `<span class="info-pill">ANZSCO: ${job.anzsco}</span>` : ''}
          <span class="info-pill">${job.type}</span>
        </div>

        <p class="job-snippet">${job.description}</p>

        <div class="job-card-bottom">
          <div class="posted-date">
            <svg style="width:15px;height:15px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${job.posted ? `Posted ${job.posted}` : 'Posted date not listed'}</span>
          </div>
          <div class="card-actions">
            <a href="${job.url || `jobs/${job.slug}.html`}" class="btn btn-primary btn-sm">View Role & Apply &rarr;</a>
          </div>
        </div>
      `;

      jobsContainer.appendChild(card);
    });
  }
}

/**
 * Contact Form Client Validation & Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#contact-name').value.trim();
      const email = form.querySelector('#contact-email').value.trim();
      const message = form.querySelector('#contact-message').value.trim();

      if (!name || !email || !message) {
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.style.backgroundColor = '#fef2f2';
          alertBox.style.color = '#991b1b';
          alertBox.style.border = '1px solid #fecaca';
          alertBox.innerHTML = '<strong>Incomplete:</strong> Please fill in all required fields before submitting.';
        }
        return;
      }

      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.style.backgroundColor = '#ecfdf5';
        alertBox.style.color = '#065f46';
        alertBox.style.border = '1px solid #a7f3d0';
        alertBox.innerHTML = `<strong>Thank you, ${name}!</strong> Your inquiry has been logged. Our team will get back to you at <strong>${email}</strong> within 1-2 business days.`;
        form.reset();
      }
    });
  }
}

/**
 * Cookie Consent Banner (Google AdSense & GDPR Compliance)
 */
function initCookieConsent() {
  const CONSENT_KEY = 'osj_cookie_consent';
  try {
    const existingConsent = localStorage.getItem(CONSENT_KEY);
    if (existingConsent) return;
  } catch (e) {
    // LocalStorage might be restricted in private browsing
  }

  // Determine relative path for privacy policy link
  const isSubdir = window.location.pathname.includes('/jobs/') || 
                   window.location.pathname.includes('/locations/') || 
                   window.location.pathname.includes('/visas/');
  const privacyUrl = isSubdir ? '../privacy-policy.html' : 'privacy-policy.html';

  const banner = document.createElement('aside');
  banner.className = 'cookie-consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent banner');
  banner.innerHTML = `
    <div class="cookie-consent-content">
      <div class="cookie-consent-icon">&#127850;</div>
      <div class="cookie-consent-text">
        <strong>We value your privacy.</strong> We and trusted partners use cookies and related technologies to personalize content, deliver relevant advertisements (including via Google AdSense), and analyze platform traffic. By clicking <strong>"Accept All"</strong>, you consent to our use of cookies as detailed in our <a href="${privacyUrl}">Privacy Policy</a>.
      </div>
    </div>
    <div class="cookie-consent-actions">
      <button type="button" class="btn-cookie-decline" id="btn-cookie-decline">Necessary Only</button>
      <button type="button" class="btn-cookie-accept" id="btn-cookie-accept">Accept All</button>
    </div>
  `;

  document.body.appendChild(banner);

  // Trigger slide-in animation smoothly
  setTimeout(() => {
    banner.classList.add('show');
  }, 600);

  const acceptBtn = document.getElementById('btn-cookie-accept');
  const declineBtn = document.getElementById('btn-cookie-decline');

  const closeBanner = (status) => {
    try {
      localStorage.setItem(CONSENT_KEY, status);
    } catch (e) {}
    banner.classList.remove('show');
    setTimeout(() => {
      banner.remove();
    }, 400);
  };

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => closeBanner('accepted'));
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => closeBanner('necessary_only'));
  }
}
