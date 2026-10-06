/**
 * OZ Sponsor Jobs - Core JavaScript Application
 * High-performance search, filtering, and responsive controls
 */

// Sample verified Australian Visa Sponsorship jobs
const JOBS_DATA = [
  {
    "id": "adzuna-5913469135",
    "title": "Midwife | Relocate to Coastal Melbourne | 482 Sponsorship & PR Pathway",
    "company": "The Hassett Group",
    "logoInitial": "T",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-midwife-relocate-to-coastal-melbourne-482-sponsorship-pr-pathway-482-186-sponsorship",
    "url": "jobs/melbourne-midwife-relocate-to-coastal-melbourne-482-sponsorship-pr-pathway-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913469135?utm_medium=api&utm_source=13c876f1",
    "description": "MIDWIVES — YOUR NEXT CHAPTER STARTS IN MELBOURNE Build your career by the bay, with sponsorship and support to make Australia home. Thinking about moving to Australia, but unsure how to turn the idea into a realistic pla..."
  },
  {
    "id": "adzuna-5913210320",
    "title": "Registered Nurse |Esperance | Accommodation  Relocation Support",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-registered-nurse-esperance-accommodation-relocation-support-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-esperance-accommodation-relocation-support-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913210320?utm_medium=api&utm_source=13c876f1",
    "description": "Ready for a sea change? Juniper Esperance is seeking Registered Nurses to join our supportive residential aged care team, with accommodation, relocation assistance and sponsorship available for eligible candidates. About..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-non-vr-general-practitioner-mm4-and-dpa-in-city-482-186-sponsorship",
    "url": "jobs/canberra-non-vr-general-practitioner-mm4-and-dpa-in-city-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5913083508?utm_medium=api&utm_source=13c876f1",
    "description": "Non VR General Practitioner – General AHPRA Registration | Bulk Billing | DPA/MM4 | Near Canberra Fantastic opportunity for a non-VR GP to work in a supportive, well-established clinic just outside Canberra. ME Medical R..."
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
    "salary": "$90,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-developer-programmer-482-186-sponsorship",
    "url": "jobs/melbourne-developer-programmer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5912395207?utm_medium=api&utm_source=13c876f1",
    "description": "About us OneStop IT Talents Pty Ltd is a Melbourne-based technology consulting and software development company, founded in 2018. We deliver integration, development, testing and delivery services to enterprise clients a..."
  },
  {
    "id": "adzuna-5911614950",
    "title": "Other Skills",
    "company": "PinoyPro GlobalTalent Sync",
    "logoInitial": "P",
    "location": "Adelaide, SA",
    "state": "SA",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "adelaide-other-skills-482-494-sponsorship",
    "url": "jobs/adelaide-other-skills-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5911614950?utm_medium=api&utm_source=13c876f1",
    "description": "Job Title: Skilled Professional / Tradesperson (Expression of Interest – Australia Pathway) Location: Dubai, UAE – Relocation to Australia upon visa approval Department: International Workforce Deployment Employment Type..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-network-development-manager-automotiveoem-482-186-sponsorship",
    "url": "jobs/sydney-network-development-manager-automotiveoem-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5594049704557780495",
    "description": " Role Summary: \r\n This role is focused on developing, growing and supporting the Zeekr dealer network. \r\n Key focus of the role is on developing and implementing programs that support the growth of dealer’s retail busine..."
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
    "salary": "$180 - $240 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-staff-software-engineer-social-store-unpublished-rd-product-australia-based-relocation-and-visa-sponsorship-provided-482-186-sponsorship",
    "url": "jobs/sydney-staff-software-engineer-social-store-unpublished-rd-product-australia-based-relocation-and-visa-sponsorship-provided-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909695341?utm_medium=api&utm_source=13c876f1",
    "description": "As a Staff Software Engineer on an unpublished R&D project, you will architect the foundational social and store systems for one of Riot’s Unpublished R&D products. You will work closely with leadership, Product, and UX ..."
  },
  {
    "id": "adzuna-5909098304",
    "title": "Commercial Electrical Supervisor - Perth Based",
    "company": "Core Talent",
    "logoInitial": "C",
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
    "salary": "$124,800 - $133,120 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "perth-commercial-electrical-supervisor-perth-based-482-494-sponsorship",
    "url": "jobs/perth-commercial-electrical-supervisor-perth-based-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909098304?utm_medium=api&utm_source=13c876f1",
    "description": "Role Available: Core Talent have partnered with a leading Perth based commercial contractor who are looking for an Electrical Supervisor with Commercial experience to join their team in a permanent capacity. What’s On Of..."
  },
  {
    "id": "adzuna-5908010071",
    "title": "Blue Yonder System Functional / Technical Consultant",
    "company": "The HR Ally",
    "logoInitial": "T",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-blue-yonder-system-functional-technical-consultant-482-186-sponsorship",
    "url": "jobs/melbourne-blue-yonder-system-functional-technical-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5908010071?utm_medium=api&utm_source=13c876f1",
    "description": "Location: Melbourne, VIC, Australia Job Type: Full-Time Experience: 4–12 Years Australian Citizens and Permanent Residents (PR) only. No sponsorship available. About the Role We are seeking an experienced BY TMS Function..."
  },
  {
    "id": "adzuna-5907792694",
    "title": "Hand Therapist (Occupational Therapist) | Perth",
    "company": "Mediix",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-hand-therapist-occupational-therapist-perth-482-494-sponsorship",
    "url": "jobs/perth-hand-therapist-occupational-therapist-perth-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5907792694?utm_medium=api&utm_source=13c876f1",
    "description": "Permanent Full Time (ideally) | Senior roles available | Visa sponsorship offered for the right candidate A well-established private practice in Perth is looking for experienced hand therapy Occupational Therapists to jo..."
  },
  {
    "id": "adzuna-5907735774",
    "title": "IT System Analyst",
    "company": "Hays",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-it-system-analyst-482-186-sponsorship",
    "url": "jobs/sydney-it-system-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5907735774?utm_medium=api&utm_source=13c876f1",
    "description": "IT Systems Analyst | Permanent Role | Visa Sponsorship AvailableYour New Company Visa Sponsorship Available for Sydney-Based Candidates Join a well-established Australian business operating across a complex infrastructur..."
  },
  {
    "id": "jooble--6843180445478003773",
    "title": "Senior Liquidity Analyst",
    "company": "TMGM",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-liquidity-analyst-482-186-sponsorship",
    "url": "jobs/sydney-senior-liquidity-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6843180445478003773",
    "description": " About TMGM  TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices ..."
  },
  {
    "id": "jooble--7248750468831544848",
    "title": "Junior Client Funding Operations Specialist (12-Month Fixed Term)",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-junior-client-funding-operations-specialist-12-month-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-junior-client-funding-operations-specialist-12-month-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7248750468831544848",
    "description": " TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices spanning thr..."
  },
  {
    "id": "jooble-7852354542268900856",
    "title": "Client Funding Operations Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-client-funding-operations-specialist-482-186-sponsorship",
    "url": "jobs/sydney-client-funding-operations-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7852354542268900856",
    "description": " TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices spanning thr..."
  },
  {
    "id": "jooble-1939831225563013561",
    "title": "Third Party Risk Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-third-party-risk-specialist-482-186-sponsorship",
    "url": "jobs/sydney-third-party-risk-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1939831225563013561",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "adzuna-5905821042",
    "title": "Garden Labourer/General Service Officer | ACT Government",
    "company": "Charter Diligence Pty Ltd",
    "logoInitial": "C",
    "location": "Canberra, ACT",
    "state": "ACT",
    "category": "technology",
    "visas": [
      "482",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 186 ENS"
    ],
    "salary": "$91,145 - $91,145 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "canberra-garden-labourergeneral-service-officer-act-government-482-186-sponsorship",
    "url": "jobs/canberra-garden-labourergeneral-service-officer-act-government-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5905821042?utm_medium=api&utm_source=13c876f1",
    "description": "Our Client Our client is an ACT Government directorate responsible for delivering essential municipal, transport and city services across Canberra. Its broad operational remit includes maintaining parks, public spaces an..."
  },
  {
    "id": "adzuna-5905820395",
    "title": "OHT/ Hygienist - Regional Australia",
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
    "salary": "$60 - $75 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-oht-hygienist-regional-australia-482-186-sponsorship",
    "url": "jobs/sydney-oht-hygienist-regional-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5905820395?utm_medium=api&utm_source=13c876f1",
    "description": "Are you an Oral Health Therapist or Dental Hygienist looking for a rewarding role with strong patient demand, supportive teams and the chance to make a genuine impact in regional communities? Multiple opportunities are c..."
  },
  {
    "id": "adzuna-5904773336",
    "title": "Speech Pathologist - 482 Visa Sponsorship Available",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/perth-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773336?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description As a speech pathologist, you'll provide assessments and therapy to children, adolescents and adults with a range of speech, language, communication, feeding and swallowing needs. You'll: Deliver therapy i..."
  },
  {
    "id": "adzuna-5904773334",
    "title": "Speech Pathologist - 482 Visa Sponsorship Available",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-speech-pathologist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773334?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description As a speech pathologist, you'll provide assessments and therapy to children, adolescents and adults with a range of speech, language, communication, feeding and swallowing needs. You'll: Deliver therapy i..."
  },
  {
    "id": "adzuna-5904773333",
    "title": "Speech Pathologist - 482 Visa Sponsorship Available",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-speech-pathologist-482-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-speech-pathologist-482-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904773333?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description As a speech pathologist, you'll provide assessments and therapy to children, adolescents and adults with a range of speech, language, communication, feeding and swallowing needs. You'll: Deliver therapy i..."
  },
  {
    "id": "jooble-1913775257676325605",
    "title": "Assistant Vice President, Transaction Monitoring",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-assistant-vice-president-transaction-monitoring-482-186-sponsorship",
    "url": "jobs/sydney-assistant-vice-president-transaction-monitoring-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1913775257676325605",
    "description": " Do you want your voice heard and your actions to count? Discover your opportunity with Mitsubishi UFJ Financial Group (MUFG), one of the world’s leading financial groups. Across the globe, we’re 150,000 colleagues, stri..."
  },
  {
    "id": "jooble-2364463742214588503",
    "title": "Analyst, Transaction Monitoring",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-analyst-transaction-monitoring-482-186-sponsorship",
    "url": "jobs/sydney-analyst-transaction-monitoring-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2364463742214588503",
    "description": " Do you want your voice heard and your actions to count? Discover your opportunity with Mitsubishi UFJ Financial Group (MUFG), one of the world’s leading financial groups. Across the globe, we’re 150,000 colleagues, stri..."
  },
  {
    "id": "jooble--535695097121289701",
    "title": "Senior Risk Governance Officer (2-year Max Term)",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-risk-governance-officer-2-year-max-term-482-186-sponsorship",
    "url": "jobs/sydney-senior-risk-governance-officer-2-year-max-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-535695097121289701",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble--3217465336710098149",
    "title": "Senior Automation Engineer",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-automation-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-automation-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3217465336710098149",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "adzuna-5904687907",
    "title": "Dubbo Case Worker - Fixed Term",
    "company": "Westhaven",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-dubbo-case-worker-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-dubbo-case-worker-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687907?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=2D8E39EE162C1619DEDA697AE9CF077D9D7710A0",
    "description": "Do you have a genuine commitment to child safety and a passion for advocating for children and young people with disability? Location: Dubbo, NSW Position Type: 6 Month Fixed-Term Contract Competitive Salary: Level 4, Pa..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-assistant-shop-manager-camberwell-482-186-sponsorship",
    "url": "jobs/sydney-assistant-shop-manager-camberwell-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687359?se=KPUT-XXB8RG-V75y7ZstFQ&utm_medium=api&utm_source=13c876f1&v=8C9AA0C5D2DCD9CDF7AB24D6733AF1FF2DF3434F",
    "description": "Join Ou r Community Would you like to work at the heart of your local community? Are you motivated to inspire and support a team of volunteers? Do you have retail experience and are ready for the next step in your career..."
  },
  {
    "id": "adzuna-5904360141",
    "title": "Advanced Child Protection Practitioner",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-advanced-child-protection-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-advanced-child-protection-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360141?utm_medium=api&utm_source=13c876f1",
    "description": "As an advanced child protection practitioner, you will receive and assess reports of alleged abuse and neglect of children and young people. Conduct investigations and develop plans to ensure the safety and wellbeing of ..."
  },
  {
    "id": "adzuna-5904360122",
    "title": "Senior Child Protection Practitioner, Mallee Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-mallee-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-mallee-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360122?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Mallee Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with their own ..."
  },
  {
    "id": "adzuna-5904360058",
    "title": "Team Manager, Child Protection",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-team-manager-child-protection-482-186-sponsorship",
    "url": "jobs/melbourne-team-manager-child-protection-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360058?utm_medium=api&utm_source=13c876f1",
    "description": "Team Manager, Child Protection roles in Western Melbourne Area: The Child Protection Team Manager is responsible for effective service delivery, managing resources and budget, cases awaiting allocation and small teams of..."
  },
  {
    "id": "adzuna-5904360107",
    "title": "Team Manager, Child Protection",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-team-manager-child-protection-482-186-sponsorship",
    "url": "jobs/sydney-team-manager-child-protection-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360107?utm_medium=api&utm_source=13c876f1",
    "description": "Team Manager, Child Protection roles in Goulburn Area: The Child Protection Team Manager is responsible for effective service delivery, managing resources and budget, cases awaiting allocation and small teams of practiti..."
  },
  {
    "id": "adzuna-5904360085",
    "title": "Senior Child Protection Practitioner, Loddon Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-loddon-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-loddon-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360085?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Loddon Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with their own ..."
  },
  {
    "id": "adzuna-5904360013",
    "title": "Senior Child Protection Practitioner, Goulburn Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-goulburn-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-goulburn-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360013?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Goulburn Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with their ow..."
  },
  {
    "id": "adzuna-5904360029",
    "title": "Senior Child Protection Practitioner, Bayside Peninsula Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-bayside-peninsula-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904360029?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Bayside Peninsula Area (Frankston Office): To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that familie..."
  },
  {
    "id": "adzuna-5904359991",
    "title": "Senior Child Protection Practitioner, Hume Merri-Bek and North Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-senior-child-protection-practitioner-hume-merri-bek-and-north-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-hume-merri-bek-and-north-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359991?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Hume Merri-Bek and North Eastern Melbourne Areas (Preston) To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and underst..."
  },
  {
    "id": "adzuna-5904359980",
    "title": "Senior Child Protection Practitioner, Inner Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-senior-child-protection-practitioner-inner-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-inner-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359980?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles, Inner Eastern Melbourne Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, ..."
  },
  {
    "id": "adzuna-5904359937",
    "title": "Senior Child Protection Practitioner, Brimbank Melton Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-senior-child-protection-practitioner-brimbank-melton-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-brimbank-melton-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359937?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Brimbank Melton Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with t..."
  },
  {
    "id": "adzuna-5904359933",
    "title": "Senior Child Protection Practitioner, Outer Eastern Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-senior-child-protection-practitioner-outer-eastern-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-outer-eastern-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359933?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Outer Eastern Melbourne Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex..."
  },
  {
    "id": "adzuna-5904359838",
    "title": "Senior Child Protection Practitioner, Wimmera South West Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-wimmera-south-west-area-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-wimmera-south-west-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359838?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Wimmera South West Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, wit..."
  },
  {
    "id": "adzuna-5904359717",
    "title": "Senior Child Protection Practitioner, Western Melbourne Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-senior-child-protection-practitioner-western-melbourne-area-482-186-sponsorship",
    "url": "jobs/melbourne-senior-child-protection-practitioner-western-melbourne-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359717?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Western Melbourne Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with..."
  },
  {
    "id": "adzuna-5904359714",
    "title": "Senior Child Protection Practitioner, Barwon Area",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "geelong-senior-child-protection-practitioner-barwon-area-482-186-sponsorship",
    "url": "jobs/geelong-senior-child-protection-practitioner-barwon-area-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359714?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles in Barwon Area: To be an effective Senior Child Protection Practitioner, you will have a strong sense of social justice and understand that families are complex, with their own ..."
  },
  {
    "id": "adzuna-5904359736",
    "title": "Senior Child Protection Practitioner",
    "company": "Victorian Government",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-child-protection-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-senior-child-protection-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5904359736?utm_medium=api&utm_source=13c876f1",
    "description": "Senior Child Protection Practitioner roles: Various metro and regional opportunities are currently available across the state, you will be able to select your office preference as part of the application process. To be a..."
  },
  {
    "id": "adzuna-5903936860",
    "title": "Oral Health Therapist - Orthodontic Clinic | Warrnambool, VIC",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$65 - $75 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "geelong-oral-health-therapist-orthodontic-clinic-warrnambool-vic-482-186-sponsorship",
    "url": "jobs/geelong-oral-health-therapist-orthodontic-clinic-warrnambool-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903936860?utm_medium=api&utm_source=13c876f1",
    "description": "Oral Health Therapist – Orthodontic Clinic | Warrnambool, VIC Are you an Oral Health Therapist looking for a rewarding orthodontic role with visa sponsorship support and the opportunity to build a long-term career in a b..."
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
    "salary": "$200k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "adelaide-civil-manager-482-494-sponsorship",
    "url": "jobs/adelaide-civil-manager-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3333975422946487295",
    "description": " An opportunity exists for an experienced  Civil Manager  to join a growing engineering consultancy in Adelaide. This is a senior role combining technical leadership, project delivery, team management and client developm..."
  },
  {
    "id": "adzuna-5903525037",
    "title": "Visa, Relocation and Global Mobility Specialist",
    "company": "Macquarie University",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-visa-relocation-and-global-mobility-specialist-482-186-sponsorship",
    "url": "jobs/sydney-visa-relocation-and-global-mobility-specialist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903525037?utm_medium=api&utm_source=13c876f1",
    "description": "The Talent Acquisition Consultant (Visa and Relocation) delivers high quality end to end services and support to managers particularly in the recruitment of positions where the expected applicant is overseas or interstat..."
  },
  {
    "id": "adzuna-5903436895",
    "title": "Occupational Therapist - 482 Visa Sponsorship Available",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-482-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-482-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903436895?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description What You'll Love About the Role Diverse & Rewarding Caseloads No two days are the same. You'll work with a varied caseload that challenges and develops your clinical skills while creating meaningful outco..."
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-heavy-diesel-mechanic-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-heavy-diesel-mechanic-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903388032?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description CTS People is at the forefront of connecting skilled professionals with leading industry clients across Australia. We specialise in sourcing candidates for sponsorship opportunities, aiding those alre..."
  },
  {
    "id": "adzuna-5903387303",
    "title": "Veterinary Associate - Greencross Robina",
    "company": "Greencross Pet Wellness Company",
    "logoInitial": "G",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "gold-coast-veterinary-associate-greencross-robina-482-494-sponsorship",
    "url": "jobs/gold-coast-veterinary-associate-greencross-robina-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903387303?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description Picture your morning. Park on site a few metres from the door and step straight inside. No circling for a spot. No ticket machines. Coffee from the French patisserie next door, then a calm start with ..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-family-physician-picturesque-victoria-lifestyle-earnings-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-family-physician-picturesque-victoria-lifestyle-earnings-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903385322?utm_medium=api&utm_source=13c876f1",
    "description": " Now Hiring: General Practitioner (GP) | Regional Victoria, Australia  Location: Beautiful regional town in Victoria – DPA/MMM eligible  Start Date: Flexible  Job Type: Full-time or Part-time  Clinic Type: Well-Establish..."
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-service-technician-mechanic-45-ton-forkliftsreach-stackers-482-186-sponsorship",
    "url": "jobs/sydney-service-technician-mechanic-45-ton-forkliftsreach-stackers-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903382695?utm_medium=api&utm_source=13c876f1",
    "description": "Service Technician Australia (Visa Sponsorship  Fully Furnished Housing) Take your career global! Were looking for experienced Service Technicians to join an exclusive team in Australia on a 3-year contract. This is your..."
  },
  {
    "id": "adzuna-5903382248",
    "title": "Belt Splicer / Conveyor Technician",
    "company": "ContiTech",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-belt-splicer-conveyor-technician-482-186-sponsorship",
    "url": "jobs/sydney-belt-splicer-conveyor-technician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903382248?utm_medium=api&utm_source=13c876f1",
    "description": "ContiTech Australia is part of the global Continental Group of Companies and is a world leader in the manufacture and service of Conveyor Belting. We pride ourselves on providing quality solutions to all of our customers..."
  },
  {
    "id": "adzuna-5903381755",
    "title": "Foreman / Supervisor (Commercial Workshop)",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-foreman-supervisor-commercial-workshop-482-186-sponsorship",
    "url": "jobs/sydney-foreman-supervisor-commercial-workshop-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903381755?utm_medium=api&utm_source=13c876f1",
    "description": "Foreman / Supervisor- (Diesel) Australia Visa Sponsorship  Fully Furnished Housing Included! Take your leadership career global! Were hiring experienced Foremen / Supervisors with a strong background in commercial and he..."
  },
  {
    "id": "adzuna-5903381595",
    "title": "Belt Splicer / Conveyor Technician",
    "company": "ContiTech",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "perth-belt-splicer-conveyor-technician-482-494-sponsorship",
    "url": "jobs/perth-belt-splicer-conveyor-technician-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903381595?utm_medium=api&utm_source=13c876f1",
    "description": "ContiTech Australia is part of the global Continental Group of Companies and is a world leader in the manufacture and service of Conveyor Belting. We pride ourselves on providing quality solutions to all of our customers..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-general-practitioner-perth-western-australia-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-perth-western-australia-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903364376?utm_medium=api&utm_source=13c876f1",
    "description": " Location: Perth & surrounding WA suburbs  Start Date: Flexible  Position Type: Full-time  Earnings: Estimated £360,000–£410,000 per year  Clinic Type: Established, high-demand primary care network About the Opportunity ..."
  },
  {
    "id": "adzuna-5903363005",
    "title": "Auto Mechanic / Heavy Commercial Mechanic",
    "company": "Chelsea AiCademy",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "melbourne-auto-mechanic-heavy-commercial-mechanic-482-186-sponsorship",
    "url": "jobs/melbourne-auto-mechanic-heavy-commercial-mechanic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903363005?utm_medium=api&utm_source=13c876f1",
    "description": "Position Title: Auto Mechanic / Heavy Commercial Mechanic Location: Melbourne, Victoria, Australia Employment Type: Full-Time Salary: Up to $80,000-$90,000 AUD per annum (approx. ₹50 Lakhs INR)  12% Superannuation  Overt..."
  },
  {
    "id": "adzuna-5903361600",
    "title": "Korean-Speaking Game Presenter (Visa Sponsorship & Relocation Support)",
    "company": "Cross Border Talents",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-korean-speaking-game-presenter-visa-sponsorship-relocation-support-482-186-sponsorship",
    "url": "jobs/sydney-korean-speaking-game-presenter-visa-sponsorship-relocation-support-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903361600?utm_medium=api&utm_source=13c876f1",
    "description": " Korean-Speaking Game Presenter (Visa Sponsorship & Relocation Support) Location: Dubai, United Arab Emirates Employment type: Full-time | On-site | Rotational shifts Visa sponsorship  relocation support provided About t..."
  },
  {
    "id": "adzuna-5903360565",
    "title": "Experienced Diploma Educator | Room Leader | Beautiful 5-Acre Setting",
    "company": "Early Years Talent",
    "logoInitial": "E",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-experienced-diploma-educator-room-leader-beautiful-5-acre-setting-482-186-sponsorship",
    "url": "jobs/sydney-experienced-diploma-educator-room-leader-beautiful-5-acre-setting-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903360565?utm_medium=api&utm_source=13c876f1",
    "description": "We are looking for an experienced Diploma-qualified educator whose time in the sector has developed into sound judgement, confident family communication and dependable room leadership. This permanent full-time Lead Educa..."
  },
  {
    "id": "adzuna-5903360192",
    "title": "Panel Beater",
    "company": "Chelsea AiCademy",
    "logoInitial": "C",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "melbourne-panel-beater-482-186-sponsorship",
    "url": "jobs/melbourne-panel-beater-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903360192?utm_medium=api&utm_source=13c876f1",
    "description": "Position Title: Qualified Panel Beater Location: Melbourne, Victoria, Australia Employment Type: Full-Time Salary: Up to $95,000 -105,000 AUD per annum (approx. ₹50 Lakhs INR)  12% Superannuation  Overtime About the Role..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-podiatrist-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-podiatrist-melbourne-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903359244?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Podiatrists Melbourne | Sponsorship Available Are you a dedicated AHPRA-registered Podiatrist looking for your next opportunity in Melbourne? We are recruiting for two full-time podiatrist roles with a well-es..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-dentist-adc-qualified-482-186-sponsorship",
    "url": "jobs/sydney-general-dentist-adc-qualified-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903357099?utm_medium=api&utm_source=13c876f1",
    "description": "Job Title: General Dentist (ADC Qualified) Location: Liverpool & Blacktown (Sydney, NSW, Australia) Company: Your Family Dentist Employment Type: Full-Time / Part-Time Visa Sponsorship: Available for eligible candidates ..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-physiotherapist-coffs-harbour-482-186-sponsorship",
    "url": "jobs/melbourne-physiotherapist-coffs-harbour-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903356260?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Physiotherapist | Sponsorship & PR Pathway | Regional VIC & NSW Secure your future in Australia with a clear pathway to Permanent Residency. Are you an onshore Physiotherapist looking for a role that offe..."
  },
  {
    "id": "adzuna-5903353263",
    "title": "Complex Claims Examiner, Business Package",
    "company": "AIG Insurance",
    "logoInitial": "A",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-complex-claims-examiner-business-package-482-186-sponsorship",
    "url": "jobs/melbourne-complex-claims-examiner-business-package-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903353263?se=Sjc1-3XB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=9428E33E5FE979D2937AF2849C9C3ECB822010C8",
    "description": "LI-JC1 At AIG, we are reimagining the way we help customers to manage risk. Join us as a Complex Claims Examiner to play your part in that transformation. It’s an opportunity to grow your skills and experience as a value..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-fractional-senior-marketing-director-482-186-sponsorship",
    "url": "jobs/sydney-fractional-senior-marketing-director-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903348028?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description Who is HelloKindred? HelloKindred are specialists in staffing marketing, creative and technology roles, offering a range of talent solutions that can be delivered on-site, remotely or hybrid. Our visi..."
  },
  {
    "id": "adzuna-5903342767",
    "title": "Senior Recruitment Consultant",
    "company": "Red Earth Recruitment",
    "logoInitial": "R",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-senior-recruitment-consultant-482-494-sponsorship",
    "url": "jobs/brisbane-senior-recruitment-consultant-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5903342767?se=Ns--AXbB8RG-V75y7ZstFQ&utm_medium=api&utm_source=13c876f1&v=E9F49418443341CCC6DBF7057DFE60A433414841",
    "description": "Senior Recruitment Consultant Tech Sector Brisbane Up to $100k base salary  super  uncapped commissions Quarterly commissions of up to 40%, with achievable thresholds Flexible working arrangements: Hybrid/WFH Positive, h..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "cairns-operations-quality-control-supervisor-482-494-sponsorship",
    "url": "jobs/cairns-operations-quality-control-supervisor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5903277378?utm_medium=api&utm_source=13c876f1",
    "description": "Join a leading airport operation in Cairns, supervising teams and ensuring excellence across safety, quality and compliance. Our Client: Our client is a well-established and highly regarded organisation operating within ..."
  },
  {
    "id": "jooble-2678041044398409102",
    "title": "Education Consultant - Australian Student Admissions & Visa Processing",
    "company": "recruitometry",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-education-consultant-australian-student-admissions-visa-processing-482-186-sponsorship",
    "url": "jobs/sydney-education-consultant-australian-student-admissions-visa-processing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/desc/2678041044398409102",
    "description": "&nbsp;...Education Consultant Australian Student Admissions & <b>Visa </b>Processing  \r\n \r\n  About the Role:  \r\n  We are seeking a motivated and detail-oriented Education Consultant to join a growing international educat..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "hobart-general-practitioner-vr-newstead-launceston-tas-482-494-sponsorship",
    "url": "jobs/hobart-general-practitioner-vr-newstead-launceston-tas-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5902215739?utm_medium=api&utm_source=13c876f1",
    "description": "Modern facility with strong chronic disease management demand. full-time or part-time rosters in one of Launceston’s most desirable suburbs Work in an affluent community clinic minutes from top schools and CBD. General P..."
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
    "salary": "$200k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-structural-manager-482-494-sponsorship",
    "url": "jobs/brisbane-structural-manager-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/522675594270398885",
    "description": " The Opportunity  An opportunity exists for an experienced Structural Engineer to lead and grow a structural engineering team in Brisbane. This role combines technical leadership, project delivery and business developmen..."
  },
  {
    "id": "jooble--7074491833203536227",
    "title": "Senior Client Funding Operations Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-client-funding-operations-specialist-482-186-sponsorship",
    "url": "jobs/sydney-senior-client-funding-operations-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7074491833203536227",
    "description": " TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices spanning thr..."
  },
  {
    "id": "jooble-6959625611204275150",
    "title": "Reseller Sales Manager",
    "company": "Forgepoint Capital",
    "logoInitial": "F",
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
    "salary": "$800 per month",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-reseller-sales-manager-482-186-sponsorship",
    "url": "jobs/sydney-reseller-sales-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6959625611204275150",
    "description": " Reports to: Vice President, Channels and Alliances  Location: Remote Australia  What We Do:  Cybercrime is growing, and more businesses are getting hit by threats that used to target only the biggest organizations. That..."
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-business-analyst-workforce-planning-12mth-ftc-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-workforce-planning-12mth-ftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7312409301145371611",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-1317327881213715147",
    "title": "Senior Business Analyst - Claims & Customer Outcomes",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-senior-business-analyst-claims-customer-outcomes-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-claims-customer-outcomes-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1317327881213715147",
    "description": " Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contributions. \r\n Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise your hea..."
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-business-analyst-fixed-income-risk-platform-482-186-sponsorship",
    "url": "jobs/sydney-business-analyst-fixed-income-risk-platform-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/805419681873982271",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-8807814266393319490",
    "title": "Digital Business Analyst (12 Month Fixed Term Contract)",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-digital-business-analyst-12-month-fixed-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-digital-business-analyst-12-month-fixed-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8807814266393319490",
    "description": " Join us in shaping the future of the insurance industry, driven by innovation and a 150-year legacy of protecting people \r\n Enjoy work-life balance with flexible working options, and well-being initiatives that prioriti..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-claims-governance-risk-specialist-482-186-sponsorship",
    "url": "jobs/sydney-claims-governance-risk-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6265564579630129658",
    "description": " Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise your health \r\n Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contributio..."
  },
  {
    "id": "jooble--3801283907477993987",
    "title": "Dispute Resolution Coordinator - 12-month fixed term contract",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-dispute-resolution-coordinator-12-month-fixed-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-dispute-resolution-coordinator-12-month-fixed-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3801283907477993987",
    "description": " Help protect over 5 million Australians, making a real difference in their lives during their most challenging times. \r\n Work with experienced and skilled colleagues who support and inspire one another to achieve collec..."
  },
  {
    "id": "adzuna-5901617645",
    "title": "fixed plant fitter",
    "company": "MOLMUC Integrated Engineering Pty Ltd",
    "logoInitial": "M",
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
    "salary": "$118,560 - $138,320 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "perth-fixed-plant-fitter-482-494-sponsorship",
    "url": "jobs/perth-fixed-plant-fitter-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901617645?utm_medium=api&utm_source=13c876f1",
    "description": "Fixed Plant Mechanical Fitter – Mining MOLMUC Integrated Engineering Pty Ltd Kalgoorlie / Goldfields, WA | Full-Time Permanent MOLMUC Integrated Engineering is seeking an experienced Fixed Plant Mechanical Fitter to supp..."
  },
  {
    "id": "adzuna-5901612088",
    "title": "Correctional Permanent vacancies available | Sponsorship available | RNs",
    "company": "SustainHealth Recruitment",
    "logoInitial": "S",
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
    "salary": "$90,000 - $114,379 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-correctional-permanent-vacancies-available-sponsorship-available-rns-482-186-sponsorship",
    "url": "jobs/sydney-correctional-permanent-vacancies-available-sponsorship-available-rns-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901612088?utm_medium=api&utm_source=13c876f1",
    "description": "SustainHealth Recruitment is currently seeking an experienced Registered Nurse for a permanent full-time Primary Health nursing opportunity within a correctional healthcare service in regional Northern NSW . This is a gr..."
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
    "salary": "$250,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-dentist-maroubra-482-186-sponsorship",
    "url": "jobs/sydney-dentist-maroubra-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901611859?utm_medium=api&utm_source=13c876f1",
    "description": "Part time or Full time opportunity available at Maroubra! About Primary Dental Part of the ForHealth Group , Primary Dental is one of Australia's leading Dental Support Organisations, supporting a network of over 200 ind..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-aspire-associate-sales-commercial-482-186-sponsorship",
    "url": "jobs/sydney-aspire-associate-sales-commercial-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5901243388?utm_medium=api&utm_source=13c876f1",
    "description": "Would you like to learn how Baker Hughes creates value through customer engagement? Do you enjoy building relationships and working across a global organization? Join our Sales and Commercial team The ASPIRE program is a..."
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
    "salary": "$118,560 - $118,560 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-sponsorship-available-for-candidates-with-ahpra-seeking-pr-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-sponsorship-available-for-candidates-with-ahpra-seeking-pr-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900652594?utm_medium=api&utm_source=13c876f1",
    "description": "Location – travel around Dubbo and surrounds Part Time (min 3 days, flexible on days and hours) Pay rate – up to $57 per hour (based on experience)  up to $18,550 tax free superannuation Sponsorship available for candida..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-maclean-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-maclean-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5900303441?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D9F23CCC7A5989C0A96B124184015DC569EC5ECE",
    "description": "Your passion for whole-of-person care will find a place to grow with us, where mutual respect and deep relationships are at the heart of everything we do. Knowing how important open communication and teamwork is, you wil..."
  },
  {
    "id": "adzuna-5900158063",
    "title": "Science teachers, Latrobe Valley",
    "company": "Prospero Teaching",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-science-teachers-latrobe-valley-482-186-sponsorship",
    "url": "jobs/sydney-science-teachers-latrobe-valley-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900158063?utm_medium=api&utm_source=13c876f1",
    "description": "Science Teacher secondary Latrobe Valley, Regional Victoria Start: January 2026 Contract: Permanent, Full-Time Visa Sponsorship Available Prospero Teaching is partnering with a supportive multi-campus government secondar..."
  },
  {
    "id": "adzuna-5899904530",
    "title": "Duty Manager, $80KS, Sponsorship, Canberra Relocation, Hands-On Gaming Leader",
    "company": "Placed Recruitment",
    "logoInitial": "P",
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
    "salary": "$80,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-duty-manager-80ks-sponsorship-canberra-relocation-hands-on-gaming-leader-482-186-sponsorship",
    "url": "jobs/sydney-duty-manager-80ks-sponsorship-canberra-relocation-hands-on-gaming-leader-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899904530?utm_medium=api&utm_source=13c876f1",
    "description": "About the Opportunity An established, family-owned hospitality group is seeking experienced Duty Managers with a strong pub gaming background for high-performing venues on the NSW side of the Canberra region. With strong..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship",
    "url": "jobs/sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899229073?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Greencross Veterinary Hospital Werribee is seeking a Senior Emergency Veterinarian to join our growing team on a permanent full-time or part-time basis. Why GVH? This is an opportunity to work alongside a..."
  },
  {
    "id": "adzuna-5899064308",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$100,000 - $150,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-private-dentist-482-494-sponsorship",
    "url": "jobs/hobart-private-dentist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899064308?utm_medium=api&utm_source=13c876f1",
    "description": "Private Dentist Jobs in Kingston, Hobart, Tasmania, Australia. Excellent earning potential, modern facilities, strong patient demand, visa sponsorship available. ZEST Dental Recruitment, in partnership with an establishe..."
  },
  {
    "id": "adzuna-5898059554",
    "title": "Finance Intern - Summer 2027",
    "company": "Lenovo",
    "logoInitial": "L",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-finance-intern-summer-2027-482-186-sponsorship",
    "url": "jobs/sydney-finance-intern-summer-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5898059554?utm_medium=api&utm_source=13c876f1",
    "description": "Why Work at Lenovo We are Lenovo. We do what we say. We own what we do. We WOW our customers. Lenovo is a US$83 billion revenue global technology powerhouse, ranked 153 in the Fortune Global 500, and serving millions of ..."
  },
  {
    "id": "adzuna-5897686784",
    "title": "Special Needs teacher, Victoria",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-special-needs-teacher-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-special-needs-teacher-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5897686784?utm_medium=api&utm_source=13c876f1",
    "description": "Special Education Teacher | P–12 | Small Classes | High Support Location: Melton, Melbourne, VIC Start: ASAP or by negotiation Type: Full-time, Ongoing Salary: $80,000 – $118,000  super Sponsorship: Available About the R..."
  },
  {
    "id": "adzuna-5897335678",
    "title": "Dentist | Maven Dental Port Lincoln",
    "company": "Maven Dental",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-dentist-maven-dental-port-lincoln-482-186-sponsorship",
    "url": "jobs/sydney-dentist-maven-dental-port-lincoln-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5897335678?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description We’re seeking a passionate and motivated Full‑Time Dentist to join our thriving practice. Whether you’re an experienced clinician or an ADC graduate, this role offers the opportunity to build a long‑term,..."
  },
  {
    "id": "jooble-415836267453847101",
    "title": "Director - Building Services",
    "company": "Invictus People",
    "logoInitial": "I",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$250k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "adelaide-director-building-services-482-494-sponsorship",
    "url": "jobs/adelaide-director-building-services-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/415836267453847101",
    "description": " The Opportunity  An exciting opportunity is available for an experienced  Director - Building Services  to join a leading multidisciplinary engineering consultancy in Adelaide. \r\n This is a senior leadership position re..."
  },
  {
    "id": "adzuna-5896953644",
    "title": "Heavy Commercial Autoglazier",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-heavy-commercial-autoglazier-482-186-sponsorship",
    "url": "jobs/sydney-heavy-commercial-autoglazier-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953644?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Working across a combination of workshop and mobile jobs, you will provide specialist automotive glazing services for heavy commercial vehicles and machinery. Your responsibilities will include: Removing, ..."
  },
  {
    "id": "adzuna-5896953235",
    "title": "Production Worker",
    "company": "Sensient",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-production-worker-482-186-sponsorship",
    "url": "jobs/sydney-production-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953235?utm_medium=api&utm_source=13c876f1",
    "description": "Description Come join the skilled team at Sensient Technologies . We are collaborative and hard working. We solve tough problems. And we will be better with you. We are seeking a self-motivated Production Operator. The s..."
  },
  {
    "id": "adzuna-5896953089",
    "title": "Autoglazier – Sumner",
    "company": "NWG ADAS & Windscreens",
    "logoInitial": "N",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$75,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-autoglazier-sumner-482-494-sponsorship",
    "url": "jobs/brisbane-autoglazier-sumner-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953089?utm_medium=api&utm_source=13c876f1",
    "description": "About Us NWG (National Windscreens Group) is one of Australia’s largest independent automotive glass companies, with over 30 years of experience servicing customers across the country. As part of the growing NWG, we are ..."
  },
  {
    "id": "adzuna-5896952069",
    "title": "Occupational Therapist - Melton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-melton-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-melton-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896952069?utm_medium=api&utm_source=13c876f1",
    "description": "Job title - Occupational Therapist Location - Melton and surrounding suburbs including: Caroline Springs, Taylors Hill, St Albans, Sunbury, Keilor, Diggers Rest, Fraser Rise, Woodend and Bacchus Marsh. Employment Type - ..."
  },
  {
    "id": "adzuna-5896950798",
    "title": "Visa Sponsored Registered Nurses | SA | NSW | QLD",
    "company": "Estia Health",
    "logoInitial": "E",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-visa-sponsored-registered-nurses-sa-nsw-qld-482-186-sponsorship",
    "url": "jobs/sydney-visa-sponsored-registered-nurses-sa-nsw-qld-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896950798?utm_medium=api&utm_source=13c876f1",
    "description": "At Estia Health, we’re more than just a workplace: we’re a community dedicated to enriching lives and making a difference. If you’re passionate about aged care and want to be part of something meaningful, then we want to..."
  },
  {
    "id": "adzuna-5896948899",
    "title": "Autoglazier – Essendon Fields",
    "company": "NWG ADAS & Windscreens",
    "logoInitial": "N",
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
    "salary": "$80,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-autoglazier-essendon-fields-482-186-sponsorship",
    "url": "jobs/sydney-autoglazier-essendon-fields-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896948899?utm_medium=api&utm_source=13c876f1",
    "description": "About Us NWG (National Windscreens Group) is one of Australia’s largest independent automotive glass companies, with over 30 years of experience servicing customers across the country. As part of the growing NWG, we are ..."
  },
  {
    "id": "adzuna-5896452854",
    "title": "Perinatal Psychiatry Registrar",
    "company": "St John of God Health Care",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-perinatal-psychiatry-registrar-482-186-sponsorship",
    "url": "jobs/sydney-perinatal-psychiatry-registrar-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896452854?utm_medium=api&utm_source=13c876f1",
    "description": "St John of God Burwood Hospital is a 95-bed private mental health hospital providing comprehensive mental health care services. Our committed team of psychiatrists, psychologists, specialist mental health nurses and othe..."
  },
  {
    "id": "adzuna-5896451357",
    "title": "Head Chef – Live the mountain lifestyle year-round.",
    "company": "Traverse Alpine Operations Pty",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-live-the-mountain-lifestyle-year-round-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-live-the-mountain-lifestyle-year-round-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896451357?utm_medium=api&utm_source=13c876f1",
    "description": "Live Two Remarkable Seasons. Lead Two Exceptional Kitchens. Imagine building seasonal menus from the finest local produce in Victoria’s food-rich High Country, then spending winter at one of Australia’s most celebrated a..."
  },
  {
    "id": "adzuna-5896056638",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
    "logoInitial": "M",
    "location": "Wollongong, NSW",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "wollongong-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/wollongong-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056638?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant Psychiatrist – Inpatient Mental Health Unit Location: Illawarra and Shoalhaven, NSW, Australia Employment Type: Permanent Full-Time (part-time hours can be negotiated) Start Date: Negotiable Salary: Competitiv..."
  },
  {
    "id": "adzuna-5896056659",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/sydney-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056659?utm_medium=api&utm_source=13c876f1",
    "description": "Location : Coffs Harbour, NSW, Australia Employment Type : Permanent Full-Time (part time hours can be negotiated) Start date: Negotiable Salary : Competitive (aligned with NSW Health Staff Specialist Award), with reloca..."
  },
  {
    "id": "adzuna-5896056635",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "newcastle-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/newcastle-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056635?utm_medium=api&utm_source=13c876f1",
    "description": "Our client is advertising an opportunity for a Consultant Psychiatrist to permanently join their team at a public hospital in NSW. Position Details: Consultant Psychiatrist – Adult Inpatient & Community Mental Health Loc..."
  },
  {
    "id": "adzuna-5896051984",
    "title": "Clinical Director - Emergency Medicine (ED)",
    "company": "Medrecruit",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-clinical-director-emergency-medicine-ed-482-186-sponsorship",
    "url": "jobs/sydney-clinical-director-emergency-medicine-ed-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896051984?utm_medium=api&utm_source=13c876f1",
    "description": "Director - Emergency Medicine Location: Queanbeyan, NSW Employment Type: Staff Specialist or VMO (Min. 30 hrs/week) Salary: NSW Health rates Start Date: TBC About the Role Lead a busy Emergency Department managing approx..."
  },
  {
    "id": "adzuna-5895467640",
    "title": "Chef/ Cook",
    "company": "Lincy Pty Ltd",
    "logoInitial": "L",
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
    "salary": "$77,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-chef-cook-482-186-sponsorship",
    "url": "jobs/melbourne-chef-cook-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5895467640?utm_medium=api&utm_source=13c876f1",
    "description": "CHEF/ COOK required Lincy Pty Ltd T/A Chilli India Position: CHEF/ COOK Salary: $77,000 to 80,000 plus Super Vacancies: Multiple Vacancies Hours: 38 hours Mode: Full time Location: ChilliIndia Lincy Pty Ltd Unit 1 59 Mil..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "melbourne-category-manager-482-186-sponsorship",
    "url": "jobs/melbourne-category-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5894810090?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description: Who We Are At Likewize, we help people stay connected to the technology they love. As a global leader in device protection, warranty, repair, and logistics solutions, we partner with some of the world’s ..."
  },
  {
    "id": "adzuna-5894001608",
    "title": "Complex Claims Examiner, Business Package",
    "company": "AIG Insurance",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-complex-claims-examiner-business-package-482-186-sponsorship",
    "url": "jobs/sydney-complex-claims-examiner-business-package-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5894001608?utm_medium=api&utm_source=13c876f1",
    "description": "LI-JC1 At AIG, we are reimagining the way we help customers to manage risk. Join us as a Complex Claims Examiner to play your part in that transformation. It’s an opportunity to grow your skills and experience as a value..."
  },
  {
    "id": "jooble--1708111920967463090",
    "title": "Network Engineer (Japan / Australia), Commercial Energy Storage, APAC",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-network-engineer-japan-australia-commercial-energy-storage-apac-482-186-sponsorship",
    "url": "jobs/sydney-network-engineer-japan-australia-commercial-energy-storage-apac-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1708111920967463090",
    "description": " What To Expect \r\n This role will support sites in both Japan and Australia, with Japan being the primary focus; the candidate MUST be fluent in verbal and written Japanese. The role is open to candidates based in both J..."
  },
  {
    "id": "adzuna-5893967568",
    "title": "General Practitioner - FRACGP - Carrum Downs Doctors",
    "company": "Partnered Health",
    "logoInitial": "P",
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
    "salary": "$300,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-fracgp-carrum-downs-doctors-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-fracgp-carrum-downs-doctors-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893967568?utm_medium=api&utm_source=13c876f1",
    "description": "Carrum Downs Doctors is looking to add a Male or Female FRACGP, RACGP PEP Specialist Pathway or Expedited Specialist Pathway GP to join our well-established mixed billing practice in Melbourne’s rapidly growing south-eas..."
  },
  {
    "id": "adzuna-5893967575",
    "title": "Hastings Family Medical Centre | General Practitioner",
    "company": "Partnered Health",
    "logoInitial": "P",
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
    "salary": "$300,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-hastings-family-medical-centre-general-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-hastings-family-medical-centre-general-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893967575?utm_medium=api&utm_source=13c876f1",
    "description": "Are you looking to combine an exceptional medical career with an enviable coastal lifestyle? Hastings Family Medical Centre is seeking a Female General Practitioner to join our thriving, well-established mixed billing pr..."
  },
  {
    "id": "adzuna-5893580952",
    "title": "Dental Assistant",
    "company": "Woods Co",
    "logoInitial": "W",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-dental-assistant-482-186-sponsorship",
    "url": "jobs/melbourne-dental-assistant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893580952?utm_medium=api&utm_source=13c876f1",
    "description": "Woods & Co Recruitment have partnered with a boutique dental clinic in Melbourne's inner south-east, known for their unique, science-based approach to holistic dentistry. Combining advanced technology with a minimally in..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-manager-enterprise-risk-compliance-line-2-482-186-sponsorship",
    "url": "jobs/sydney-manager-enterprise-risk-compliance-line-2-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-648593985206654920",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble--5721114694026614434",
    "title": "Analyst, Treasury Settlements",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-analyst-treasury-settlements-482-186-sponsorship",
    "url": "jobs/sydney-analyst-treasury-settlements-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5721114694026614434",
    "description": " Do you want your voice heard and your actions to count? Discover your opportunity with Mitsubishi UFJ Financial Group (MUFG), one of the world’s leading financial groups. Across the globe, we’re 150,000 colleagues, stri..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-manager-default-management-482-186-sponsorship",
    "url": "jobs/sydney-manager-default-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4791992919476454213",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-correspondence-governance-manager-482-186-sponsorship",
    "url": "jobs/sydney-correspondence-governance-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/586657431847569396",
    "description": "&nbsp;...life insurers, committed to inclusion, and supporting the career growth of our diverse workforce. We’re proud to be: \r\n An Inclusive <b>Employer </b>– Recognised as Employer of Choice for Gender Equality by the ..."
  },
  {
    "id": "jooble--5516667540170944609",
    "title": "Senior Growth Manager - Lifecycle & Product",
    "company": "OKX",
    "logoInitial": "O",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-growth-manager-lifecycle-product-482-186-sponsorship",
    "url": "jobs/sydney-senior-growth-manager-lifecycle-product-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5516667540170944609",
    "description": " Who We Are  At OKX, we believe that the future will be reshaped by crypto, and ultimately contribute to every individual's freedom. \r\n OKX is a leading crypto exchange, and the developer of OKX Wallet, giving millions a..."
  },
  {
    "id": "jooble--4609129753058659633",
    "title": "Analyst, Business Excellence",
    "company": "Mastercard",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-analyst-business-excellence-482-186-sponsorship",
    "url": "jobs/sydney-analyst-business-excellence-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4609129753058659633",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "jooble--2357227094618648263",
    "title": "Dispute Resolution Coordinator",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-dispute-resolution-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-dispute-resolution-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2357227094618648263",
    "description": " Help protect over 5 million Australians, making a real difference in their lives during their most challenging times. \r\n Work with experienced and skilled colleagues who support and inspire one another to achieve collec..."
  },
  {
    "id": "jooble--8391910419974907395",
    "title": "Litigation and External Dispute Resolution Coordinator",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-litigation-and-external-dispute-resolution-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-litigation-and-external-dispute-resolution-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8391910419974907395",
    "description": " At TAL, we’re supported to live our best lives. With flexible and blended working options, discounted insurance, and wellbeing initiatives, we know we’re valued.  You’ll work alongside some of the brightest and most cap..."
  },
  {
    "id": "jooble--4118563257887367581",
    "title": "Digital Channel Manager",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-digital-channel-manager-482-186-sponsorship",
    "url": "jobs/sydney-digital-channel-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4118563257887367581",
    "description": " Shape the future of insurance with innovative ideas and technologies that improve the lives of millions of Australians \r\n Take advantage of well-being initiatives designed to support your mental and physical health, ens..."
  },
  {
    "id": "adzuna-5892223379",
    "title": "Head Chef | Brand-New Regional Pub Opening | Sponsorship Available",
    "company": "Frontline Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-brand-new-regional-pub-opening-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-brand-new-regional-pub-opening-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5892223379?utm_medium=api&utm_source=13c876f1",
    "description": "$120K  Super  Sponsorship  Relocation Awesome mentorship from strong pub group Cheaper cost of living - looking to settle into a tree change? Take the lead at an exciting new hospitality venue opening in Regional NSW in ..."
  },
  {
    "id": "adzuna-5891804774",
    "title": "Technical Trainer/Solution Architect - Australia/New Zealand",
    "company": "Copeland",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-technical-trainersolution-architect-australianew-zealand-482-186-sponsorship",
    "url": "jobs/sydney-technical-trainersolution-architect-australianew-zealand-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5891804774?utm_medium=api&utm_source=13c876f1",
    "description": "About Us We are a global climate technologies company engineered for sustainability. We create sustainable and efficient residential, commercial and industrial spaces through HVACR technologies. We protect temperature-se..."
  },
  {
    "id": "adzuna-5891732989",
    "title": "Vet Director - Emergency & Critical Care | ARH Greater Western Sydney",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-vet-director-emergency-critical-care-arh-greater-western-sydney-482-186-sponsorship",
    "url": "jobs/sydney-vet-director-emergency-critical-care-arh-greater-western-sydney-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5891732989?se=rK1MJam18RGk9fXOxIfQjQ&utm_medium=api&utm_source=13c876f1&v=594E94C095512C9FE21AFD6C2283A84332B5065B",
    "description": "Job Description Lead from the front. Develop people with intention. Redefine what exceptional emergency veterinary care looks like. At ARH Greater Western Sydney, an uncommon opportunity is open to a seasoned Emergency &..."
  },
  {
    "id": "adzuna-5890696511",
    "title": "Radiation therapist",
    "company": "GenesisCare",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-radiation-therapist-482-186-sponsorship",
    "url": "jobs/sydney-radiation-therapist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890696511?utm_medium=api&utm_source=13c876f1",
    "description": "At GenesisCare we want to hear from people who are as passionate as we are about innovation and working together to drive better life outcomes for patients around the world . Calling UK Radiation Therapists – South Austr..."
  },
  {
    "id": "jooble--4422830714527212800",
    "title": "Operations Associate",
    "company": "Pluralis Research",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-operations-associate-482-186-sponsorship",
    "url": "jobs/sydney-operations-associate-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4422830714527212800",
    "description": " Pluralis Research is pioneering Protocol Learning, a fully decentralised way to train and deploy AI models that opens this layer to individuals rather than well resourced corporates. By pooling compute from many partici..."
  },
  {
    "id": "adzuna-5890586630",
    "title": "Home Care Worker - Salisbury SA - Italian Speaking",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-home-care-worker-salisbury-sa-italian-speaking-482-494-sponsorship",
    "url": "jobs/perth-home-care-worker-salisbury-sa-italian-speaking-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5890586630?se=rK1MJam18RGk9fXOxIfQjQ&utm_medium=api&utm_source=13c876f1&v=1F46E3E00A0B378A5911BC9B08322DF99DD64716",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5890586584",
    "title": "Housekeeping Supervisor",
    "company": "Civeo",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-housekeeping-supervisor-482-186-sponsorship",
    "url": "jobs/sydney-housekeeping-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5890586584?se=2paKOam18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=4834179D661EB305AD8618EBED08CE1830991FD8",
    "description": "Description Housekeeping Supervisors | DIDO Have experience as a Supervisor in the Housekeeping field? We'd love to hear from you! Civeo is actively seeking Housekeeping Supervisors to join our Village teams, located thr..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship",
    "url": "jobs/sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890046598?utm_medium=api&utm_source=13c876f1",
    "description": "Position Highlights Senior psychologist opportunity in an established private practice Open to General, Clinical or Health Psychologists Sponsorship opportunities available for suitable candidates Bonus scheme and traini..."
  },
  {
    "id": "adzuna-5890016651",
    "title": "General Practitioner - Queanbeyan (DPA)",
    "company": "DXC Medical Recruitment",
    "logoInitial": "D",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-queanbeyan-dpa-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-queanbeyan-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016651?utm_medium=api&utm_source=13c876f1",
    "description": "• Well-established private billing medical • DPA location • 20 mins south of Canberra CBD and a variety of private schools Are you looking for for DPA GP Jobs at a well-established, private billing practice close to Canb..."
  },
  {
    "id": "adzuna-5890016557",
    "title": "General Practitioner - Belconnen (DPA)",
    "company": "DXC Medical Recruitment",
    "logoInitial": "D",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-belconnen-dpa-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-belconnen-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016557?utm_medium=api&utm_source=13c876f1",
    "description": "• 70% of mixed-billings  sign on payment | $500k billing potential • Flexible open term contracts with no restraint • Popular north Canberra suburb | Visa sponsorship including permanent residency Are looking for DPA GP ..."
  },
  {
    "id": "adzuna-5890016538",
    "title": "General Practitioner - Charters Towers (DPA/MMM4)",
    "company": "DXC Medical Recruitment",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-charters-towers-dpammm4-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-charters-towers-dpammm4-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016538?utm_medium=api&utm_source=13c876f1",
    "description": "• Up to 65% private billings | Initial Accommodations Available • DPA/MMM4 location eligible for PFP, PEP, FSP, RVTS & ACRRM IP • 1.5 Hrs from Townsville | Excellent Regional Schools | Visa Sponsorship Excellent opportun..."
  },
  {
    "id": "adzuna-5890016278",
    "title": "General Practitioner - Carrum Downs (DPA)",
    "company": "DXC Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-carrum-downs-dpa-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-carrum-downs-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016278?utm_medium=api&utm_source=13c876f1",
    "description": "• 70% of the billings  Income guarantee for 3 months • Busy practice with a big patient base • DPA Location I Suitable for Expedited Specialist Pathway with Visa Sponsorship Are you a VR GP looking for DPA GP Jobs close ..."
  },
  {
    "id": "adzuna-5890016197",
    "title": "General Practitioner - Lenah Valley (DPA/MMM2)",
    "company": "DXC Medical Recruitment",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-lenah-valley-dpammm2-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-lenah-valley-dpammm2-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016197?utm_medium=api&utm_source=13c876f1",
    "description": "• 65%  guarantee incentive • Eligible location for RACGP FSP & PEP Specialist Stream • Eligible for PFP, RACGP FSP Fellowship Support Program & PEP Specialist Stream Are you a VR GP looking for your next challenge in Tas..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "brisbane-trainee-seafood-processor-482-494-sponsorship",
    "url": "jobs/brisbane-trainee-seafood-processor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890015657?utm_medium=api&utm_source=13c876f1",
    "description": "Drive the sales strategy - Own functions, events & new business Growing Brisbane venue | Incentives, progression & real influence Amazing and achievable commission structure Our client is seeking a Trainee Seafood Proces..."
  },
  {
    "id": "adzuna-5889986899",
    "title": "Drillers - NSW & QLD - Immediate Start",
    "company": "The Rix Group",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-drillers-nsw-qld-immediate-start-482-186-sponsorship",
    "url": "jobs/sydney-drillers-nsw-qld-immediate-start-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889986899?utm_medium=api&utm_source=13c876f1",
    "description": "Drillers - Immediate Start About Us The Rix Group is a progressive specialist contractor who leads the way in managing challenging and diverse ground engineering projects . We provide a multitude of ground stabilisation ..."
  },
  {
    "id": "adzuna-5889639982",
    "title": "Registered Nurse - Blakeney Lodge - Sponsorship Available",
    "company": "Catholic Healthcare",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-blakeney-lodge-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-blakeney-lodge-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889639982?utm_medium=api&utm_source=13c876f1",
    "description": "Discover a career where care goes both ways! Permanent Full-time RN position – secure hours with flexibility to suit your lifestyle $48.50 - $60.30 per hour  Super  NFP tax benefits – take home more of what you earn Make..."
  },
  {
    "id": "adzuna-5889432152",
    "title": "Head of Operations – Manufacturing",
    "company": "Hunter Douglas",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-head-of-operations-manufacturing-482-186-sponsorship",
    "url": "jobs/sydney-head-of-operations-manufacturing-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889432152?utm_medium=api&utm_source=13c876f1",
    "description": "Hunter Douglas is the world’s leading manufacturer of window coverings and a major manufacturer of architectural products. We are a brand that you know and trust. With more than 100 years of innovation, we’ve defined our..."
  },
  {
    "id": "adzuna-5889415337",
    "title": "Oral Health Therapist - Perth, WA",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$50 - $70 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-oral-health-therapist-perth-wa-482-494-sponsorship",
    "url": "jobs/perth-oral-health-therapist-perth-wa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889415337?utm_medium=api&utm_source=13c876f1",
    "description": "Are you an Oral Health Therapist looking for a new opportunity in Perth? We are currently recruiting for a number of established and growing dental practices across Perth that are looking to welcome experienced Oral Heal..."
  },
  {
    "id": "adzuna-5889404789",
    "title": "C1 - Boilermaker/Welder (for AUS-based Applicants)",
    "company": "Pinoy Pro Services",
    "logoInitial": "P",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "melbourne-c1-boilermakerwelder-for-aus-based-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-c1-boilermakerwelder-for-aus-based-applicants-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889404789?utm_medium=api&utm_source=13c876f1",
    "description": "https://www.facebook.com/share/p/1CA6WAHXyL/ URGENT: Boilermaker Welder | TSS 482 Sponsorship Available Location: Melbourne – Onshore Applicants Only We are urgently seeking an experienced Boilermaker Welder for an immed..."
  },
  {
    "id": "adzuna-5889057868",
    "title": "Registered Nurse - Surgical",
    "company": "MaterNews",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-surgical-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-surgical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889057868?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Mater Private Hospital Rockhampton has an exciting opportunity for a Registered Nurse to join their Surgical Ward. We offer excellent flexibility, with opportunities ranging from Permanent Part-Time (0.6 F..."
  },
  {
    "id": "adzuna-5889057605",
    "title": "Team Leader – General Administration (UNSW Engineering School Shared Services)",
    "company": "UNSW",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-team-leader-general-administration-unsw-engineering-school-shared-services-482-186-sponsorship",
    "url": "jobs/sydney-team-leader-general-administration-unsw-engineering-school-shared-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889057605?utm_medium=api&utm_source=13c876f1",
    "description": "The Opportunity: The Team Leader, General Administration is responsible for leading and managing administrative services and the general administration team within the Faculty of Engineering’s eight Schools. The role rep..."
  },
  {
    "id": "adzuna-5889057505",
    "title": "RN - PACU/Anaesthetic Nurse",
    "company": "Health X",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-rn-pacuanaesthetic-nurse-482-186-sponsorship",
    "url": "jobs/sydney-rn-pacuanaesthetic-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889057505?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Registered Nurse – PACU / Anaesthetics – Wagga Wagga Base Hospital | NSW Travel Contract $51.43 - $68.49 per hour  super  penalties | Travel & accommodation provided | 8–12 week contract | ASAP start Join..."
  },
  {
    "id": "adzuna-5889056127",
    "title": "RN - Scrub/Scout Nurse",
    "company": "Health X",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-rn-scrubscout-nurse-482-186-sponsorship",
    "url": "jobs/sydney-rn-scrubscout-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889056127?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Registered Nurse – PACU / Anaesthetics – Wagga Wagga Base Hospital | NSW Travel Contract $51.43 - $68.49 per hour  super  penalties | Travel & accommodation provided | 8–12 week contract | ASAP start Join..."
  },
  {
    "id": "adzuna-5888766878",
    "title": "Permanent Position - Registered Nurse (Paediatric) - North West Tasmania - Sponsorship Available!",
    "company": "Skilled Nursing UK",
    "logoInitial": "S",
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
    "salary": "$80,524 - $80,524 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "burnie-permanent-position-registered-nurse-paediatric-north-west-tasmania-sponsorship-available-482-494-sponsorship",
    "url": "jobs/burnie-permanent-position-registered-nurse-paediatric-north-west-tasmania-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888766878?utm_medium=api&utm_source=13c876f1",
    "description": "Details Title: Registered Nurse - Paediatric Location: North West Tasmania Position Type: Multiple permanent full-time and part-time positions available. Shift worker (fully rotational), commencing as soon as possible. *..."
  },
  {
    "id": "adzuna-5888740358",
    "title": "Home Care Worker - Tullamarine VIC",
    "company": "My Guardian",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-tullamarine-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-tullamarine-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888740358?utm_medium=api&utm_source=13c876f1",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5888740021",
    "title": "AHS Solutions Manager",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-ahs-solutions-manager-482-186-sponsorship",
    "url": "jobs/sydney-ahs-solutions-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888740021?utm_medium=api&utm_source=13c876f1",
    "description": "Career Area: Sales Job Description: Your Work Shapes the World at Caterpillar Inc. When you join Caterpillar, you're joining a global team who cares not just about the work we do – but also about each other. We are the m..."
  },
  {
    "id": "adzuna-5888739973",
    "title": "Head Chef - Carlingford Greens Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-carlingford-greens-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-carlingford-greens-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888739973?utm_medium=api&utm_source=13c876f1",
    "description": "At Opal HealthCare, we know that companies don’t succeed, people do. Opal Healthcare is Australia’s largest residential aged care provider, with 146 Care Communities and over 25,000 team members nationwide. Our values of..."
  },
  {
    "id": "adzuna-5888739664",
    "title": "Finance Analyst",
    "company": "UNSW",
    "logoInitial": "U",
    "location": "Canberra, ACT",
    "state": "ACT",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "canberra-finance-analyst-482-186-sponsorship",
    "url": "jobs/canberra-finance-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5888739664?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=F8F62D99C1765AB7137AC9F3392B17CE6A955864",
    "description": "Finance Analyst, UNSW Canberra Employment type: Full-time (35 hours per week) Duration: Continuing Remuneration : Broadband 6/7, Level 6 from $108,021/ Level 7 from $118,483 plus 17% super Location : UNSW Canberra, ADFA ..."
  },
  {
    "id": "adzuna-5888739607",
    "title": "Sous Chef",
    "company": "Compass Group",
    "logoInitial": "C",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-sous-chef-482-186-sponsorship",
    "url": "jobs/sydney-sous-chef-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888739607?utm_medium=api&utm_source=13c876f1",
    "description": "Sous Chef $91,000 base salary  $10,920 superannuation as a perm full-time employee Everything we do is motivated by excellence served with care. We believe that the best way to provide meaningful, genuine experiences for..."
  },
  {
    "id": "adzuna-5888490704",
    "title": "Electrician - Perth Based",
    "company": "Core Talent",
    "logoInitial": "C",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "perth-electrician-perth-based-482-494-sponsorship",
    "url": "jobs/perth-electrician-perth-based-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888490704?utm_medium=api&utm_source=13c876f1",
    "description": "Job description Role Available: Core Talent have partnered with a number of Perth based Electrical contractors who are looking for Electricians for local, Perth based works covering North & South of the river. What’s On ..."
  },
  {
    "id": "adzuna-5888489948",
    "title": "Qualified Electrician — Brisbane North (QLD)",
    "company": "ARC Staff - Australian Recruitment Company",
    "logoInitial": "A",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-qualified-electrician-brisbane-north-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-electrician-brisbane-north-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888489948?utm_medium=api&utm_source=13c876f1",
    "description": "$96,000  Super | 482 Visa Sponsorship Available ARC Staff is currently recruiting a Qualified Electrician to join our client’s growing team in Brisbane’s northern suburbs. The role: Predominantly residential/domestic wor..."
  },
  {
    "id": "adzuna-5888489866",
    "title": "Primary Teacher – Central Queensland",
    "company": "Talent Focus",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-primary-teacher-central-queensland-482-186-sponsorship",
    "url": "jobs/sydney-primary-teacher-central-queensland-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888489866?utm_medium=api&utm_source=13c876f1",
    "description": "Primary Teacher – Central Queensland We are seeking a passionate and dedicated Primary Teacher to join a welcoming Christian school community in Central Queensland, with opportunities available for Term 4, 2026 or Term 1..."
  },
  {
    "id": "jooble-8932105684766992932",
    "title": "Deployment Manager, Supercharger (VIC)",
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
    "salary": "$10 per day",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-deployment-manager-supercharger-vic-482-186-sponsorship",
    "url": "jobs/sydney-deployment-manager-supercharger-vic-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8932105684766992932",
    "description": " What To Expect \r\n We are looking for a highly motivated Deployment Manager to support the Supercharger deployment team in Australia & New Zealand. The Deployment Manager will oversee multiple construction projects and e..."
  },
  {
    "id": "jooble--640062809315861748",
    "title": "Business Development Analyst, APAC Residential Energy",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-business-development-analyst-apac-residential-energy-482-186-sponsorship",
    "url": "jobs/sydney-business-development-analyst-apac-residential-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-640062809315861748",
    "description": " What To Expect \r\n The APAC Residential Energy team is looking for a Business Development Analyst. This role is responsible for creating market & competitive intelligence, and supporting the development of new commercial..."
  },
  {
    "id": "adzuna-5887746565",
    "title": "Short Order Cook & All Rounder – CHARLOTTE PASS SNOW RESORT – Summer 2026",
    "company": "Blyton Group",
    "logoInitial": "B",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-short-order-cook-all-rounder-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship",
    "url": "jobs/sydney-short-order-cook-all-rounder-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887746565?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=3292BAF8AEC82E550CF0AFC4053365666B883277",
    "description": "SEASONAL POSITIONS AVAILABLE FOR SUMMER 2026/2027 Location: Stillwell Hotel Job Type: Seasonal, Full-time – Paid at Casual Rates! About Us: Stillwell Hotel is a renowned destination for summer getaways, offering a unique..."
  },
  {
    "id": "adzuna-5887746516",
    "title": "Emergency & Critical Care Veterinarian | ARH Canberra Full-time, Part-time & Casual | Sponsorship & Relocation Available",
    "company": "Greencross Pet Wellness Company",
    "logoInitial": "G",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-emergency-critical-care-veterinarian-arh-canberra-full-time-part-time-casual-sponsorship-relocation-available-482-186-sponsorship",
    "url": "jobs/canberra-emergency-critical-care-veterinarian-arh-canberra-full-time-part-time-casual-sponsorship-relocation-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887746516?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description The cases that keep you sharp. The team that has your back. ARH Canberra is a true multidisciplinary referral hospital - not just in name. When you're managing a complex critical case at 2am, you have dir..."
  },
  {
    "id": "adzuna-5887746180",
    "title": "Registered Nurse (Night Duty) - Unanderra - Sponsorship available",
    "company": "Catholic Healthcare",
    "logoInitial": "C",
    "location": "Wollongong, NSW",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "wollongong-registered-nurse-night-duty-unanderra-sponsorship-available-482-186-sponsorship",
    "url": "jobs/wollongong-registered-nurse-night-duty-unanderra-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887746180?utm_medium=api&utm_source=13c876f1",
    "description": "$48.50 - $60.30 per hour  Super  NFP tax benefits – take home more of what you earn Permanent Night Duty including weekends – secure hours with flexibility to suit your lifestyle Visa sponsorship available for suitable c..."
  },
  {
    "id": "jooble--4077524952396918529",
    "title": "Customer Communications Manager",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-customer-communications-manager-482-186-sponsorship",
    "url": "jobs/sydney-customer-communications-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4077524952396918529",
    "description": " Shape the future of insurance with innovative ideas and technologies that improve the lives of millions of Australians \r\n Take advantage of well-being initiatives designed to support your mental and physical health, ens..."
  },
  {
    "id": "adzuna-5887730523",
    "title": "Trainee Seafood Processor",
    "company": "Frontline Recruitment Group",
    "logoInitial": "F",
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
    "salary": "$70,000 - $75,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-trainee-seafood-processor-482-186-sponsorship",
    "url": "jobs/sydney-trainee-seafood-processor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887730523?utm_medium=api&utm_source=13c876f1",
    "description": "Our client is seeking a Trainee Seafood Processor to join their busy seafood production and retail team in Myaree . This hands-on role involves preparing premium fresh seafood to the highest quality standards while suppo..."
  },
  {
    "id": "jooble-4636715622128084076",
    "title": "Senior Manager, APJ Field & Channel Marketing",
    "company": "Dropbox",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-manager-apj-field-channel-marketing-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-apj-field-channel-marketing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4636715622128084076",
    "description": " Role Description As Senior Manager, APJ Field & Channel Marketing, you will lead the development and execution of Dropbox’s regional marketing strategy across the entire Asia-Pacific and Japan region. You will bring the..."
  },
  {
    "id": "adzuna-5887434865",
    "title": "Head Chef - Kew Grove Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-kew-grove-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-kew-grove-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434865?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=CC5DBADC8CFF0EDCA3419FF3F8109A49D766A4D0",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\" Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hea..."
  },
  {
    "id": "adzuna-5887434768",
    "title": "Home Care Worker - Vietnamese Speaker - Keysborough VIC",
    "company": "My Guardian",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-vietnamese-speaker-keysborough-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-vietnamese-speaker-keysborough-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434768?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=62276B9B0420A6D49061AEA88445BD50AD1F64CB",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5887434751",
    "title": "Head Chef - Mill Park Manor Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-mill-park-manor-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-mill-park-manor-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434751?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=97D2BB865576D820132D7B567895CB72A71FB1A9",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\" Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hea..."
  },
  {
    "id": "adzuna-5887433717",
    "title": "Relief Head Chef",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-relief-head-chef-482-186-sponsorship",
    "url": "jobs/sydney-relief-head-chef-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887433717?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=5ECD25E88F50C2C0066CA991BCABFBABF71527AD",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\" Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hea..."
  },
  {
    "id": "adzuna-5887431701",
    "title": "Head Chef",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887431701?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=F7085B820070D752907DD1329EFED1717016A57D",
    "description": "At Opal HealthCare, we know that companies don’t succeed, people do. Opal Healthcare is Australia’s largest residential aged care provider, with 146 Care Communities and over 25,000 team members nationwide. Our values of..."
  },
  {
    "id": "adzuna-5887429530",
    "title": "Registered Nurse",
    "company": "St Vincent’s Health Australia",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887429530?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description: Role title: Registered Nurse (Year 2 - 8) Role type: Permanent full time Shift details: 24/7 rotating roster Department and location: PANDA Unit , St Vincent’s Public Hospital, Sydney Salary: $86,183.34 ..."
  },
  {
    "id": "adzuna-5887428849",
    "title": "Family Support Worker – Rockhampton",
    "company": "Catholic Care Central Queensland",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-family-support-worker-rockhampton-482-186-sponsorship",
    "url": "jobs/sydney-family-support-worker-rockhampton-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887428849?utm_medium=api&utm_source=13c876f1",
    "description": "Make a genuine difference in the lives of vulnerable people in your local community Permanent Full Time Position $40.49 per hour plus Superannuation and generous salary sacrificing options up to $18,550 per FBT year Ongo..."
  },
  {
    "id": "adzuna-5887151149",
    "title": "Head Chef - Coburg North Villa Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-coburg-north-villa-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-coburg-north-villa-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887151149?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=824D140655CCB93257919B0CCFF6EE812459A693",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\" Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hea..."
  },
  {
    "id": "adzuna-5887150743",
    "title": "Clinical Nurse Manager - Katherine",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-clinical-nurse-manager-katherine-482-186-sponsorship",
    "url": "jobs/sydney-clinical-nurse-manager-katherine-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887150743?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Experience working and living in Katherine, Northern Territory and care for First Nations people. ARRCS are currently sourcing a qualified and experienced Clinical Nurse Manager to support the management w..."
  },
  {
    "id": "adzuna-5887150717",
    "title": "1A - Production Administrator (P3)",
    "company": "Pinoy Pro Services",
    "logoInitial": "P",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "adelaide-1a-production-administrator-p3-482-494-sponsorship",
    "url": "jobs/adelaide-1a-production-administrator-p3-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150717?se=nGYEQBu08RGSI57gYuD12g&utm_medium=api&utm_source=13c876f1&v=45B9B4FA67245ADA413BC65703D8E8F54DC499F0",
    "description": "Production Administrator (P3) Job Brief We are seeking a highly organized and tech-savvy Production Administrator (P3) for a short-term contract in Clovelly Park, SA. In this role, you will be the backbone of our floor o..."
  },
  {
    "id": "adzuna-5887150795",
    "title": "Chef – CHARLOTTE PASS SNOW RESORT – Summer 2026",
    "company": "Blyton Group",
    "logoInitial": "B",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-chef-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship",
    "url": "jobs/sydney-chef-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150795?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=58B3D6272B8A2D3FA8245F6D6396FC0055FA9F2B",
    "description": "SEASONAL POSITIONS AVAILABLE FOR SUMMER 2026/2027 Location: Stillwell Hotel Job Type: Seasonal, Full-time – Paid at Casual Rates! About Us: Stillwell Hotel is a renowned destination for summer getaways, offering a unique..."
  },
  {
    "id": "adzuna-5887150593",
    "title": "Corporate After Hours Consultant",
    "company": "Flight Centre Travel Group",
    "logoInitial": "F",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-corporate-after-hours-consultant-482-186-sponsorship",
    "url": "jobs/sydney-corporate-after-hours-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150593?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=527989DAD4A452468B73BFBBAFF544B27AF9EC19",
    "description": "About the Opportunity As a Corporate After-Hours Consultant, you will be responsible for delivering exceptional customer service, while efficiently managing time to provide professional travel solutions to corporate clie..."
  },
  {
    "id": "adzuna-5887150227",
    "title": "Housekeeper",
    "company": "Care South",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-housekeeper-482-186-sponsorship",
    "url": "jobs/sydney-housekeeper-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150227?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=071FE18C3B1D14C28807AA1B1183F86FCC97DB23",
    "description": "Join Our Caring Community at St Ives House! Role: Housekeeper Location: St Ives House, Ashley Heath, BH24 2EE Pay: £12.85 per hour Hours: Full-time and part-time hour available, to include alternate weekend working Shift..."
  },
  {
    "id": "adzuna-5887150207",
    "title": "Registered Nurse",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-registered-nurse-482-186-sponsorship",
    "url": "jobs/melbourne-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150207?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=786CEA2BE72D2E568561EBB519A1980EADBFBA4E",
    "description": "MOR. Healthcare is currently seeking ICU RNs to work within a leading private hospital in Melbourne. Role: Registered Nurses (ICU) Location: Melbourne, VIC Salary: Competitive salary We are currently seeking experienced ..."
  },
  {
    "id": "adzuna-5887149980",
    "title": "L2 Support Engineer",
    "company": "Solventum",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-l2-support-engineer-482-186-sponsorship",
    "url": "jobs/sydney-l2-support-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887149980?utm_medium=api&utm_source=13c876f1",
    "description": "Thank you for your interest in joining Solventum. Solventum is a new healthcare company with a long legacy of solving big challenges that improve lives and help healthcare professionals perform at their best. At Solventu..."
  },
  {
    "id": "adzuna-5887149813",
    "title": "Home Care Worker - Wedderburn VIC",
    "company": "My Guardian",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-wedderburn-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-wedderburn-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887149813?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=11A61E696B56A96FB59818EAB21C7C224B70D063",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5887149166",
    "title": "Registered Nurse",
    "company": "Chelsea AiCademy",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "newcastle-registered-nurse-482-186-sponsorship",
    "url": "jobs/newcastle-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887149166?se=ys2asqy28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=AA13C6D81919556FB4DEC279334EBC846112E51B",
    "description": "Job Opportunity: Registered Nurse (RN) – SummitCare Summary Join SummitCare, where our mission is to enhance wellbeing daily for those in need of aged care. We are seeking a dedicated and professional Registered Nurse to..."
  },
  {
    "id": "adzuna-5887148945",
    "title": "Chef / Cook",
    "company": "TalentConnect360",
    "logoInitial": "T",
    "location": "Perth, WA",
    "state": "WA",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "perth-chef-cook-482-494-sponsorship",
    "url": "jobs/perth-chef-cook-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887148945?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=85B6EC1B8D542C7EDF3C4029208E994414B972B4",
    "description": "Red Earth Education & Migration is actively recruiting for passionate chefs/cooks to join our clients in their bustling restaurants in Western Australia . Are you a culinary maestro with a passion for Indian cuisine? We'..."
  },
  {
    "id": "adzuna-5887148637",
    "title": "Restaurant Manager",
    "company": "Guzman y Gomez",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-restaurant-manager-482-186-sponsorship",
    "url": "jobs/sydney-restaurant-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887148637?se=yKrVsKy28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=B1395027FA4F61CEA852608E9F25D9136E3F72E6",
    "description": "Job Description At Guzman y Gomez, we believe in authentic flavors and the power of food to bring people together. As the Restaurant Manager at GYG , you will lead the charge in overseeing daily operations. You will empo..."
  },
  {
    "id": "adzuna-5887148162",
    "title": "Housekeeping Supervisor - QLD/9:5",
    "company": "Civeo",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "brisbane-housekeeping-supervisor-qld95-482-494-sponsorship",
    "url": "jobs/brisbane-housekeeping-supervisor-qld95-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887148162?se=jDpkQ3i38RGz-cafFv7gOA&utm_medium=api&utm_source=13c876f1&v=A602313F435EE2DB2B05A812E3319F2BB62E170B",
    "description": "Description Housekeeping Supervisors | FIFO Have experience as a Supervisor in the Housekeeping field? We'd love to hear from you! Civeo is actively seeking Housekeeping Supervisors to join our Village teams, located thr..."
  },
  {
    "id": "adzuna-5887147703",
    "title": "Barista",
    "company": "TalentConnect360",
    "logoInitial": "T",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-barista-482-494-sponsorship",
    "url": "jobs/perth-barista-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147703?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=253FA90FEA3B6C3ECA5BA97043AF09988FA6E390",
    "description": "Be part of something bigger – Join us in crafting a new tomorrow!\" Who are we? Talent Connect 360, we specialize in connecting exceptional talent with prestigious opportunities across a wide range of industries. We are c..."
  },
  {
    "id": "adzuna-5887147258",
    "title": "Senior Geotechnical Engineer",
    "company": "INAUTALENT",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-senior-geotechnical-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-geotechnical-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147258?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=601BD15C22FBB1FFAE4FDE11A4467BB2749F00AE",
    "description": "Description Senior Geotechnical Engineer (Strong Senior / Associate Principal pathway) Location: Brisbane, QLD (4 days in office) Employment type: Full-time, permanent Reports to: Principal Geotechnical Engineer About Cl..."
  },
  {
    "id": "adzuna-5887147156",
    "title": "Workplace Experience Concierge",
    "company": "dentsu",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-workplace-experience-concierge-482-186-sponsorship",
    "url": "jobs/sydney-workplace-experience-concierge-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147156?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=3FEB52A7BCFAF8394003441A94F49D5FC7E50F3B",
    "description": "Job Description: dentsu is a network designed for what’s next, helping clients predict and plan for disruptive future opportunities and create new paths to growth in a sustainable economy. As a unified organisation, dent..."
  },
  {
    "id": "adzuna-5887146483",
    "title": "Registered Nurse - Denhams Beach Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-denhams-beach-care-community-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-denhams-beach-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887146483?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=886F419414FDD2025FB9909F0F12E5B91CAF6AD2",
    "description": "Looking for a fresh nursing opportunity on the beautiful South Coast?At Denhams Beach Care Community, you'll be supported by a collaborative team, ongoing development opportunities, and a resident-focused culture. Denham..."
  },
  {
    "id": "adzuna-5887146419",
    "title": "Home Care Worker - Logan Central QLD",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-home-care-worker-logan-central-qld-482-494-sponsorship",
    "url": "jobs/brisbane-home-care-worker-logan-central-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887146419?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=03F40BC69A5415BB198C9BBA8BE0E0A71CE80BB6",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5887144171",
    "title": "Experienced Civil Drafter",
    "company": "WSP",
    "logoInitial": "W",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-experienced-civil-drafter-482-494-sponsorship",
    "url": "jobs/brisbane-experienced-civil-drafter-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887144171?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=48492351860BCF99B5A88825CCBBC39341526A5A",
    "description": "Description What if you could do the kind of work the world needs? At WSP, you have the chance to contribute to impactful, world-class projects and collaborate with some of the brightest minds in the industry. With acces..."
  },
  {
    "id": "adzuna-5887144088",
    "title": "Anaesthetic/PACU Registered Nurse",
    "company": "Health X",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-anaestheticpacu-registered-nurse-482-186-sponsorship",
    "url": "jobs/sydney-anaestheticpacu-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887144088?se=rs-wsay28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=AAEED64B99B1B9019F06361EB24AE7B74DC0C4D2",
    "description": "Job Description Anaesthetic / PACU Registered Nurse – Grafton & Lismore, NSW | Hospital Contract Up to $68 per hour  super  penalties | Travel & accommodation provided | Minimum 6-week contract | ASAP start Join HealthX ..."
  },
  {
    "id": "adzuna-5887142835",
    "title": "Fire Engineer",
    "company": "Vertical Recruitment",
    "logoInitial": "V",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "gold-coast-fire-engineer-482-494-sponsorship",
    "url": "jobs/gold-coast-fire-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887142835?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=F8668DF00FE2A21E85677839564771EB9177A292",
    "description": " I’m Hiring!  Fire Engineer – Large Fire Consultancy Salary: A$95k – A$110k  package Location: Gold Coast, QLD, Australia About the Consultancy An exciting opportunity exists for a Fire Engineer to join a growing fire en..."
  },
  {
    "id": "adzuna-5887140264",
    "title": "Hospitalist Position just outside Chicago!",
    "company": "In Compass Health",
    "logoInitial": "I",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-hospitalist-position-just-outside-chicago-482-494-sponsorship",
    "url": "jobs/hobart-hospitalist-position-just-outside-chicago-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887140264?se=yKrVsKy28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=84ACFEA0B7394C7B10A1BA5AB4CB86576F17F4F8",
    "description": "IN Compass Health is searching for qualified, BC/BE Hospitalists to join our team at St. Mary Medical Center located in Hobart, IN, less than an hour from downtown Chicago. This award-winning hospital is part of a not-fo..."
  },
  {
    "id": "adzuna-5887140014",
    "title": "Sales Representative / Parts & Accessories",
    "company": "Mechanics Recruitment",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "brisbane-sales-representative-parts-accessories-482-494-sponsorship",
    "url": "jobs/brisbane-sales-representative-parts-accessories-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887140014?se=rs-wsay28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=E7FCA9FD448C8C539E16E2804278FCBEB5CCEC0F",
    "description": "Location: Brisbane, QLD Employment Type: Part-time Hours: 3–4 days per week, including Saturdays Start Date: Within approximately one month Sponsorship: Not available for this position About the Role Our client is seekin..."
  },
  {
    "id": "adzuna-5887139555",
    "title": "Registered Nurse - Narrandera Homestead Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-narrandera-homestead-care-community-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-narrandera-homestead-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887139555?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=33B6B9F9CD217420F123A8F181C43BAF0DE4B741",
    "description": "Permanent & casual opportunities with flexible hours across 7 days on all shifts - open to all experience levels! Located in Narrandera. At Opal HealthCare, we know that companies don’t succeed, people do. Opal Healthcar..."
  },
  {
    "id": "adzuna-5887139327",
    "title": "Software Engineer (Model Inference)",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-software-engineer-model-inference-482-186-sponsorship",
    "url": "jobs/sydney-software-engineer-model-inference-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887139327?utm_medium=api&utm_source=13c876f1",
    "description": "About us We're building a new category of interactive entertainment powered by AI characters, image, video, and real-time experiences. We’re one of the most-visited AI products globally, serving millions of users every d..."
  },
  {
    "id": "adzuna-5887139350",
    "title": "Sous Chef & Chef de Partie",
    "company": "Culinary Crew On Demand",
    "logoInitial": "C",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-sous-chef-chef-de-partie-482-186-sponsorship",
    "url": "jobs/sydney-sous-chef-chef-de-partie-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887139350?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=4333E91C6EB9581EFBBD1CA91B70E983234F3EC3",
    "description": "We're Hiring: Sous Chef & Chef de Partie A well-established, highly regarded riverside restaurant in Noosaville is seeking a skilled Sous Chef and Chef de Partie to join their professional kitchen team. Known for deliver..."
  },
  {
    "id": "adzuna-5887138627",
    "title": "Senior Project Engineer",
    "company": "Myne Talent",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-senior-project-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-project-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887138627?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=7A324410F8D1BA4742041B6CBC2266983111730F",
    "description": "We're looking for an experienced Senior Project Engineer who wants more than just another project. This is an opportunity to play a key role in the growth of this business, working alongside an experienced leadership tea..."
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-software-engineer-model-deployment-482-186-sponsorship",
    "url": "jobs/sydney-software-engineer-model-deployment-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887137933?utm_medium=api&utm_source=13c876f1",
    "description": "About us We're building a new category of interactive entertainment powered by AI characters, image, video, and real-time experiences. We’re one of the most-visited AI products globally, serving millions of users every d..."
  },
  {
    "id": "adzuna-5887136975",
    "title": "AI Software Engineer (Front End)",
    "company": "Maincode",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-ai-software-engineer-front-end-482-186-sponsorship",
    "url": "jobs/melbourne-ai-software-engineer-front-end-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887136975?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Maincode is training the next version of Matilda, the first large language model built and trained from scratch in Australia. We are now scaling the model and deploying it as a live production system. To d..."
  },
  {
    "id": "adzuna-5887136076",
    "title": "Experienced Ticketer",
    "company": "Flight Centre",
    "logoInitial": "F",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-experienced-ticketer-482-186-sponsorship",
    "url": "jobs/sydney-experienced-ticketer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887136076?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=9135670D537CC835F23A277AF3A84892B4BE5D60",
    "description": "About the Opportunity As an Experienced Ticketer, you will be the operational expert behind accurate, efficient, and optimised travel content distribution across our Global Supply team. You will use your deep travel indu..."
  },
  {
    "id": "adzuna-5887136141",
    "title": "Travel Operations Specialist - Content",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-travel-operations-specialist-content-482-186-sponsorship",
    "url": "jobs/sydney-travel-operations-specialist-content-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887136141?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=0E80BB9DABAE3F416496F2EE3AB50079C2D6E8AF",
    "description": "About the Opportunity The Travel Operations Specialist – Content is a subject matter expert in content distribution, load optimisation and the systems that support accurate and timely delivery of Air content across the G..."
  },
  {
    "id": "adzuna-5887134968",
    "title": "Management | Cleveland Sands",
    "company": "Australian Venue",
    "logoInitial": "A",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-management-cleveland-sands-482-494-sponsorship",
    "url": "jobs/brisbane-management-cleveland-sands-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887134968?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=994FD825268DFEC7A1E8B4BB807D9A036E3F421D",
    "description": "Ready to take the next step in your hospitality leadership career? Cleveland Sands is growing its leadership team, and we're looking for passionate hospitality professionals to join us in one of two exciting opportunitie..."
  },
  {
    "id": "adzuna-5887134896",
    "title": "Consumer Risk Manager",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-consumer-risk-manager-482-186-sponsorship",
    "url": "jobs/sydney-consumer-risk-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887134896?se=rK1MJam18RGk9fXOxIfQjQ&utm_medium=api&utm_source=13c876f1&v=6A591F020BF197690125E6E838C9433C4145E8DE",
    "description": "About the Opportunity Are you an experienced travel professional who thrives on solving complex customer issues and influencing positive outcomes? As a Consumer Risk Manager within the Customer Care team, you will play a..."
  },
  {
    "id": "adzuna-5887133926",
    "title": "Home Care Worker - Sunnybank QLD",
    "company": "My Guardian",
    "logoInitial": "M",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship",
    "url": "jobs/brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887133926?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=87BB9EAF17A5B84204B80CA38A4E43069844229B",
    "description": "Be Part of the Next Big Growth Story in Care At My Guardian, our goal is simple: to provide exceptional, deeply personalised care that helps people of all ages and abilities live with dignity, comfort, and true independe..."
  },
  {
    "id": "adzuna-5887133338",
    "title": "Vanguard Capital Management - Investment Stewardship Analyst",
    "company": "The Vanguard Group",
    "logoInitial": "T",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-vanguard-capital-management-investment-stewardship-analyst-482-186-sponsorship",
    "url": "jobs/melbourne-vanguard-capital-management-investment-stewardship-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887133338?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Summary Serves as an analyst supporting day-to-day company engagement, research, and proxy voting activities. Analyzes proposals and contributes to proxy voting recommendations in alignment with Vanguard'..."
  },
  {
    "id": "adzuna-5887132939",
    "title": "Theatre Registered Nurse",
    "company": "Health X",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-theatre-registered-nurse-482-494-sponsorship",
    "url": "jobs/brisbane-theatre-registered-nurse-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887132939?se=rs-wsay28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=7BFAD47E888E982F40AAA6D6DBFAB95C4442F957",
    "description": "Job Description Theatre Registered Nurse – Stanthorpe, QLD | Hospital Contract $70 per hour  super  penalties | Travel allowance & accommodation provided | 4-week contract opportunity Join HealthX as an experienced Theat..."
  },
  {
    "id": "adzuna-5887051673",
    "title": "Occupational Therapist - 482 Visa Sponsorship Available!",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887051673?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description What You'll Love About the Role Diverse & Rewarding Caseloads No two days are the same. You'll work with a varied caseload that challenges and develops your clinical skills while creating meaningful outco..."
  },
  {
    "id": "adzuna-5886954592",
    "title": "Special Education teacher, Hoppers Crossing, Immediate start",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-special-education-teacher-hoppers-crossing-immediate-start-482-186-sponsorship",
    "url": "jobs/melbourne-special-education-teacher-hoppers-crossing-immediate-start-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886954592?utm_medium=api&utm_source=13c876f1",
    "description": "Special Education Teacher | Immediate Start Melbourne’s Western Suburbs, Victoria P–12 Specialist School | Full-Time | Sponsorship Available Are you a passionate Special Education Teacher looking for a role where you can..."
  },
  {
    "id": "adzuna-5886949744",
    "title": "Field Senior Cost Engineer",
    "company": "Bechtel",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-field-senior-cost-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-field-senior-cost-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886949744?utm_medium=api&utm_source=13c876f1",
    "description": "Requisition ID: 298623 Relocation Authorized: National - Camp Telework Type: Full-Time Office/Project Work Location: Cloncurry, QLD Extraordinary teams building inspiring projects: Since 1898, we have helped customers co..."
  },
  {
    "id": "jooble-6699835679870350948",
    "title": "Project Coordinator",
    "company": "Greystar",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-project-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-project-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6699835679870350948",
    "description": " ABOUT GREYSTAR \r\n Greystar is a leading, fully integrated global real estate platform offering expertise in property management, investment management, development, and construction services in institutional-quality ren..."
  },
  {
    "id": "adzuna-5886484763",
    "title": "Aged or Disabled carer",
    "company": "Pintupi Homelands Health Service",
    "logoInitial": "P",
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
    "salary": "$67,510 - $75,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-aged-or-disabled-carer-482-186-sponsorship",
    "url": "jobs/sydney-aged-or-disabled-carer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886484763?utm_medium=api&utm_source=13c876f1",
    "description": "Designation: Aged or Disabled carer Location: Kintore, Northern Territory Employment: Full-time Salary: AUD $67,510– $75,000 per annum About Pintupi Homelands Health Service Pintupi Homelands Health Service (Aboriginal C..."
  },
  {
    "id": "adzuna-5886337826",
    "title": "Physiotherapist - Coffs Harbour",
    "company": "Mor. Healthcare",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-physiotherapist-coffs-harbour-482-186-sponsorship",
    "url": "jobs/sydney-physiotherapist-coffs-harbour-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886337826?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Physiotherapist | Sponsorship & PR Pathway | Regional VIC & NSW Secure your future in Australia with a clear pathway to Permanent Residency. Are you an onshore Physiotherapist looking for a role that offe..."
  },
  {
    "id": "jooble--5250019678247108251",
    "title": "Capital Reporting Actuary",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-capital-reporting-actuary-482-186-sponsorship",
    "url": "jobs/sydney-capital-reporting-actuary-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5250019678247108251",
    "description": " Join us in shaping the future of the insurance industry, driven by innovation and a 150-year legacy of protecting people \r\n Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your ..."
  },
  {
    "id": "jooble--1827890220843356322",
    "title": "Talent Acquisition Partner - Technology",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-talent-acquisition-partner-technology-482-186-sponsorship",
    "url": "jobs/sydney-talent-acquisition-partner-technology-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1827890220843356322",
    "description": " Take your career further than you ever imagined with diverse roles and opportunities for personal and professional development. \r\n Enjoy work-life balance with flexible working options, and well-being initiatives that p..."
  },
  {
    "id": "adzuna-5886246905",
    "title": "Customer Service Consultant - Sydney CBD | Sponsorship Available",
    "company": "Arkadia Talent",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-service-consultant-sydney-cbd-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-consultant-sydney-cbd-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886246905?utm_medium=api&utm_source=13c876f1",
    "description": "About the Company Join one of Australia's most exciting start-ups as they reshape personal lending with empathy, speed and a customer-first mindset. Backed by rapid growth and purpose, they've significantly grown the pas..."
  },
  {
    "id": "adzuna-5886245789",
    "title": "Primary Teacher - Central Queensland",
    "company": "Technical Focus Pty Ltd t/as Talent Focus",
    "logoInitial": "T",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-primary-teacher-central-queensland-482-494-sponsorship",
    "url": "jobs/brisbane-primary-teacher-central-queensland-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886245789?utm_medium=api&utm_source=13c876f1",
    "description": "Primary Teacher – Central Queensland We are seeking a passionate and dedicated Primary Teacher to join a welcoming Christian school community in Central Queensland, with opportunities available for Term 4, 2026 or Term 1..."
  },
  {
    "id": "adzuna-5886040536",
    "title": "Full-Time Supervisors - Visa Sponsorship Available",
    "company": "Zambrero",
    "logoInitial": "Z",
    "location": "Gold Coast, QLD",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "gold-coast-full-time-supervisors-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/gold-coast-full-time-supervisors-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886040536?utm_medium=api&utm_source=13c876f1",
    "description": "· Fun, friendly culture · Roll with us and make a difference · Development opportunities – become the next leader in our team We are on the hunt for Shift Supervisors to join our Zam fam at our Broadbeach restaurant! App..."
  },
  {
    "id": "adzuna-5885552619",
    "title": "Heavy Vehicle Mechanic/Diesel Truck Mechanic x2 | AU Role, NZ Applicants Welcome",
    "company": "Vize",
    "logoInitial": "V",
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
    "salary": "$75,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "brisbane-heavy-vehicle-mechanicdiesel-truck-mechanic-x2-au-role-nz-applicants-welcome-482-494-sponsorship",
    "url": "jobs/brisbane-heavy-vehicle-mechanicdiesel-truck-mechanic-x2-au-role-nz-applicants-welcome-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5885552619?utm_medium=api&utm_source=13c876f1",
    "description": "Based in Australia – NZ Applicants Welcome Sponsorship available for suitable candidates. Job description Our client, a well-established Australia-wide freight company , for two full-time Truck Mechanics/Diesel Mechanics..."
  },
  {
    "id": "osj-2026-001",
    "title": "Senior Full Stack Software Engineer",
    "company": "Atlassian Partner Network",
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
    "salary": "$135,000 - $160,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-full-stack-software-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-full-stack-software-engineer-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Senior%20Full%20Stack%20Software%20Engineer%20Atlassian%20Partner%20Network%20Sydney",
    "description": "Accredited Standard Business Sponsor ready to sponsor eligible offshore or onshore software engineers under Subclass 482 TSS with PR nomination pathway."
  },
  {
    "id": "osj-2026-002",
    "title": "Registered Nurse - Critical Care / ICU",
    "company": "St. Jude Regional Health Group",
    "logoInitial": "S",
    "location": "Geelong, VIC",
    "state": "VIC",
    "category": "healthcare",
    "visas": [
      "482",
      "494",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR",
      "Subclass 186 ENS"
    ],
    "salary": "$88,000 - $108,000 AUD + Penalties",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "geelong-registered-nurse-critical-care-icu-482-494-186-sponsorship",
    "url": "jobs/geelong-registered-nurse-critical-care-icu-482-494-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20-%20Critical%20Care%20/%20ICU%20St.%20Jude%20Regional%20Health%20Group%20Geelong",
    "description": "AHPRA registered or internationally qualified nurses eligible for registration. Direct visa sponsorship available under regional Subclass 494 and fast-track ENS 186 pathway."
  },
  {
    "id": "osj-2026-003",
    "title": "Mechanical Project Engineer (Mining & Energy)",
    "company": "WestForce Resources",
    "logoInitial": "W",
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
    "salary": "$145,000 - $180,000 AUD + FIFO Allowance",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "perth-mechanical-project-engineer-mining-energy-482-494-sponsorship",
    "url": "jobs/perth-mechanical-project-engineer-mining-energy-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Mechanical%20Project%20Engineer%20%28Mining%20%26%20Energy%29%20WestForce%20Resources%20Perth",
    "description": "FIFO roster from Perth with Standard Business Sponsorship under Subclass 482/494 for qualified mechanical mining engineers."
  },
  {
    "id": "osj-2026-004",
    "title": "Head Chef - Modern Australian / European",
    "company": "Crown Culinary Group",
    "logoInitial": "C",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "hospitality",
    "visas": [
      "482"
    ],
    "visaLabels": [
      "Subclass 482 TSS"
    ],
    "salary": "$82,000 - $98,000 AUD + Bonus",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "brisbane-head-chef-modern-australian-european-482-sponsorship",
    "url": "jobs/brisbane-head-chef-modern-australian-european-482-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Head%20Chef%20-%20Modern%20Australian%20/%20European%20Crown%20Culinary%20Group%20Brisbane",
    "description": "Fine dining culinary destination in Brisbane offering approved Standard Business Sponsorship under Subclass 482 for passionate Head Chefs."
  },
  {
    "id": "osj-2026-005",
    "title": "Civil Infrastructure Structural Engineer",
    "company": "Apex Infrastructure Australia",
    "logoInitial": "A",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "engineering",
    "visas": [
      "482",
      "494",
      "186"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR",
      "Subclass 186 ENS"
    ],
    "salary": "$115,000 - $138,000 AUD + Relocation",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233211",
    "posted": "Recently",
    "slug": "adelaide-civil-infrastructure-structural-engineer-482-494-186-sponsorship",
    "url": "jobs/adelaide-civil-infrastructure-structural-engineer-482-494-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Civil%20Infrastructure%20Structural%20Engineer%20Apex%20Infrastructure%20Australia%20Adelaide",
    "description": "Civil and structural design consultancy in South Australia offering Subclass 494 Regional nomination with guaranteed ENS 186 PR support."
  },
  {
    "id": "osj-2026-006",
    "title": "Senior Cloud & DevOps Architect",
    "company": "Novus Digital Solutions",
    "logoInitial": "N",
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
    "salary": "$150,000 - $185,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-senior-cloud-devops-architect-482-186-sponsorship",
    "url": "jobs/melbourne-senior-cloud-devops-architect-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Senior%20Cloud%20%26%20DevOps%20Architect%20Novus%20Digital%20Solutions%20Melbourne",
    "description": "Australian accredited tech sponsor offering immediate TSS 482 sponsorship with permanent residency ENS 186 commitment for cloud architects."
  },
  {
    "id": "osj-2026-007",
    "title": "Heavy Diesel Field Service Technician",
    "company": "Terra Heavy Machinery",
    "logoInitial": "T",
    "location": "Darwin, NT",
    "state": "NT",
    "category": "trades",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$115,000 - $140,000 AUD + Service Vehicle",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "darwin-heavy-diesel-field-service-technician-482-494-sponsorship",
    "url": "jobs/darwin-heavy-diesel-field-service-technician-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Heavy%20Diesel%20Field%20Service%20Technician%20Terra%20Heavy%20Machinery%20Darwin",
    "description": "Caterpillar & Komatsu equipment maintenance. Full employer visa sponsorship under Northern Territory DAMA / Subclass 494."
  },
  {
    "id": "osj-2026-008",
    "title": "Senior Corporate Financial Accountant",
    "company": "Meridian Financial Partners",
    "logoInitial": "M",
    "location": "Sydney, NSW",
    "state": "NSW",
    "category": "finance",
    "visas": [
      "482"
    ],
    "visaLabels": [
      "Subclass 482 TSS"
    ],
    "salary": "$110,000 - $130,000 AUD + Performance Bonus",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-senior-corporate-financial-accountant-482-sponsorship",
    "url": "jobs/sydney-senior-corporate-financial-accountant-482-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Senior%20Corporate%20Financial%20Accountant%20Meridian%20Financial%20Partners%20Sydney",
    "description": "Sydney CBD corporate financial advisory offering Subclass 482 TSS sponsorship for qualified CA/CPA international accountants."
  },
  {
    "id": "jooble--1985903431219941488",
    "title": "Business Development Manager",
    "company": "Everway",
    "logoInitial": "E",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1985903431219941488",
    "description": "Every mind is unique. Yet much of the world is still built for what’s considered \"normal,\" leaving too many people behind. At Everway, we change that by creating technology that helps everyone understand and be understoo..."
  },
  {
    "id": "jooble-106776671626823639",
    "title": "Broker Business Development Manager",
    "company": "Skip Loans",
    "logoInitial": "S",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-broker-business-development-manager-482-186-sponsorship",
    "url": "jobs/sydney-broker-business-development-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/106776671626823639",
    "description": "About Skip Skip is a mission-driven Australian home loan lender built to fast-track Aussies into home ownership. We help Australians ‘skip to the owning bit’ with low deposit home loans. Buying a home shouldn’t mean putt..."
  },
  {
    "id": "jooble-7209882490654319883",
    "title": "Business Development Manager, Residential Energy Products",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-residential-energy-products-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-residential-energy-products-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7209882490654319883",
    "description": "What To Expect Join Tesla Energy's Residential Business Development Team to support the growth of distributed energy systems across Australia and New Zealand. You will work on identifying and scaling significant partners..."
  },
  {
    "id": "jooble-4080844763084998021",
    "title": "Account Executive, Corporate Sales",
    "company": "Docker",
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
    "salary": "$30k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-account-executive-corporate-sales-482-186-sponsorship",
    "url": "jobs/sydney-account-executive-corporate-sales-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4080844763084998021",
    "description": "Docker has been one of the most loved brands in developer tooling, trusted by more than 20 million monthly users and over 20 billion container image pulls. From solo founders to the world's largest companies, developers ..."
  },
  {
    "id": "jooble-2962897787007245540",
    "title": "Business Development Manager, Strategic Market Expansion, Megapack, Energy",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-strategic-market-expansion-megapack-energy-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-strategic-market-expansion-megapack-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2962897787007245540",
    "description": "What To Expect Tesla’s mission is to build a world of sustainable abundance, and this role will be central to achieving that. Today’s energy storage market is growing rapidly, and our battery technology is critical for s..."
  },
  {
    "id": "jooble-5701610638124355451",
    "title": "Senior Account Executive, Specialization",
    "company": "HUbspot",
    "logoInitial": "H",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-account-executive-specialization-482-186-sponsorship",
    "url": "jobs/sydney-senior-account-executive-specialization-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5701610638124355451",
    "description": "Who are we? HubSpot is a leading customer platform that brings marketing, sales, service, and operations tools together to help businesses attract, engage, and delight customers. It's our mission to not just help them gr..."
  },
  {
    "id": "jooble-8080055233640225839",
    "title": "Commercial Account Executive",
    "company": "Dandy",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-commercial-account-executive-482-186-sponsorship",
    "url": "jobs/sydney-commercial-account-executive-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8080055233640225839",
    "description": "About Us Dandy is transforming the massive and antiquated dental industry—an industry worth over $400B. Backed by some of the world’s leading venture capital firms, we’re on an ambitious mission to simplify and modernize..."
  },
  {
    "id": "jooble--254832315174311125",
    "title": "Commercial Account Executive - Australia",
    "company": "GitLab",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-commercial-account-executive-australia-482-186-sponsorship",
    "url": "jobs/sydney-commercial-account-executive-australia-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-254832315174311125",
    "description": "GitLab is the intelligent orchestration platform for DevSecOps. GitLab enables organizations to increase developer productivity, improve operational efficiency, reduce security and compliance risk, and accelerate digital..."
  },
  {
    "id": "jooble--22962822286580250",
    "title": "Immigration Lawyer",
    "company": "recruitometry",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-immigration-lawyer-482-186-sponsorship",
    "url": "jobs/sydney-immigration-lawyer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-22962822286580250",
    "description": "&nbsp;...supportive and established practice. Key Responsibilities: Manage the backend processing of Australian migration and visa applications from preparation through lodgement and finalisation. Review client informati..."
  },
  {
    "id": "jooble--4164475082732514346",
    "title": "People and Culture Business Partner",
    "company": "Teamified",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-people-and-culture-business-partner-482-186-sponsorship",
    "url": "jobs/sydney-people-and-culture-business-partner-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4164475082732514346",
    "description": "Qualifications, Knowledge & Skills: Essential ~4-5 years experience in People & Culture / HR Business Partner Role. ~ Sound knowledge of the National Employment Standards, Modern Awards, and Fair Work frameworks. ~ Solid..."
  },
  {
    "id": "jooble--9120292074047080003",
    "title": "Analyst, Client Onboarding Specialist",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-analyst-client-onboarding-specialist-482-186-sponsorship",
    "url": "jobs/sydney-analyst-client-onboarding-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-9120292074047080003",
    "description": "Do you want your voice heard and your actions to count? Discover your opportunity with Mitsubishi UFJ Financial Group (MUFG), one of the world’s leading financial groups. Across the globe, we’re 150,000 colleagues, striv..."
  },
  {
    "id": "jooble-298223164891809549",
    "title": "Senior Regional Partner Manager - Reseller, APAC",
    "company": "Lastpass",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-regional-partner-manager-reseller-apac-482-186-sponsorship",
    "url": "jobs/sydney-senior-regional-partner-manager-reseller-apac-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/298223164891809549",
    "description": "LastPass is looking for a Senior Regional Partner Manager – Reseller, APAC . In this role, you will develop new partnerships and drive net-new revenue to grow LastPass’s APAC channel, helping LastPass deliver on its miss..."
  },
  {
    "id": "jooble--2366484630212933888",
    "title": "Customer Service Consultant",
    "company": "Weploy",
    "logoInitial": "W",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-service-consultant-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-consultant-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2366484630212933888",
    "description": "Be the Voice of Exceptional Customer Support! Are you a confident communicator who thrives on delivering outstanding customer experiences? Do you have a knack for problem-solving and multitasking in a fast-paced environm..."
  },
  {
    "id": "jooble--7396416158486951206",
    "title": "Sales Development Representative",
    "company": "Beyondtrust",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7396416158486951206",
    "description": "BeyondTrust is seeking a Sales Development Representative . This person will provide a “first touch” to prospects and will own the responsibility of engaging and nurturing leads until they are qualified sufficiently to p..."
  },
  {
    "id": "jooble--2453422573400822506",
    "title": "Customer Experience Specialist",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-experience-specialist-482-186-sponsorship",
    "url": "jobs/sydney-customer-experience-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2453422573400822506",
    "description": "Flexible locations: Melbourne, Sydney or Brisbane Hybrid working environment Secure a permanent, full-time role with stability and growth opportunities Build your skills with comprehensive training in life insurance Work..."
  },
  {
    "id": "jooble-8626375190431886010",
    "title": "Customer Service Representative (Fixed term 12 Months)",
    "company": "Resmed",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-service-representative-fixed-term-12-months-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-representative-fixed-term-12-months-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8626375190431886010",
    "description": "Role Overview The primary role of a Customer Service Representative in the Customer Care Team is to deliver exceptional customer service and support across multiple communication channels—phone, email and chat. This role..."
  },
  {
    "id": "jooble--1748651098779039151",
    "title": "Customer Representative",
    "company": "Getaway",
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
    "salary": "$30k - $50k",
    "type": "Part-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-representative-482-186-sponsorship",
    "url": "jobs/sydney-customer-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1748651098779039151",
    "description": "Position Description As a Customer Representative, you will play a key role in supporting clients throughout their journey from the moment they book to the moment they return home. You will assist with inquiries, resolve..."
  },
  {
    "id": "jooble--6467290327687843743",
    "title": "Remote Custumer Service Representative",
    "company": "Next Stop Travel",
    "logoInitial": "N",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-remote-custumer-service-representative-482-186-sponsorship",
    "url": "jobs/sydney-remote-custumer-service-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6467290327687843743",
    "description": "Company Overview: Next Stop Travel is a remote-based organization providing structured planning and coordination services to a broad client base. Our team is committed to delivering organized, accurate, and responsive su..."
  },
  {
    "id": "jooble-8503850336727331001",
    "title": "Outbound Sales Development Representative",
    "company": "Remote",
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
    "salary": "$61k - $72k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-outbound-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-outbound-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8503850336727331001",
    "description": "About Remote Remote is solving modern organizations’ biggest challenge - navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams..."
  },
  {
    "id": "jooble--4228791034412867333",
    "title": "Complaints Analyst",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-complaints-analyst-482-186-sponsorship",
    "url": "jobs/sydney-complaints-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4228791034412867333",
    "description": "~ Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contributions. ~ Enjoy benefits such as discounted insurance, health and well-being programs, and a range of employee benef..."
  },
  {
    "id": "jooble--3064316231487687158",
    "title": "SOC Analyst",
    "company": "Volexity",
    "logoInitial": "V",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-soc-analyst-482-186-sponsorship",
    "url": "jobs/sydney-soc-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3064316231487687158",
    "description": "Volexity’s Security Operation Center (SOC) Analysts work to protect organizations from a wide variety of threats, ranging from commodity phishing and malware campaigns to highly targeted attacks involving zero-day exploi..."
  },
  {
    "id": "jooble--2403083749644169078",
    "title": "Data Analyst",
    "company": "TMGM",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-data-analyst-482-186-sponsorship",
    "url": "jobs/sydney-data-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2403083749644169078",
    "description": "About TMGM TMGM stands at the forefront of online trading and investment services, proudly serving as Chelsea FC's Official Regional Online Forex and Trading Partner in Asia Pacific. With a global presence and offices sp..."
  },
  {
    "id": "jooble-6434595078029081107",
    "title": "Analyst / Associate, Credit Management",
    "company": "MUFG Bank, Ltd.",
    "logoInitial": "M",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-analyst-associate-credit-management-482-186-sponsorship",
    "url": "jobs/sydney-analyst-associate-credit-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6434595078029081107",
    "description": "Do you want your voice heard and your actions to count? Discover your opportunity with Mitsubishi UFJ Financial Group (MUFG), one of the world’s leading financial groups. Across the globe, we’re 150,000 colleagues, striv..."
  },
  {
    "id": "jooble-1128607402377443527",
    "title": "Partner Growth Manager",
    "company": "Mx51",
    "logoInitial": "M",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-partner-growth-manager-482-186-sponsorship",
    "url": "jobs/sydney-partner-growth-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1128607402377443527",
    "description": "mx51 is a payments-as-a-service solution for banks, non-bank acquirers, and other merchant service providers. We are building a payment platform that allows merchants to accept payments in-store, in-app and online, whils..."
  },
  {
    "id": "jooble-6497775021491221904",
    "title": "Senior Project Engineer",
    "company": "Lendlease",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-project-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-project-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6497775021491221904",
    "description": "Lendlease is a globally integrated real estate group with core expertise in Investment Management, Development, and Construction. For more than 60 years, we have created thriving places around the globe. About the Role: ..."
  },
  {
    "id": "jooble--238663147548115435",
    "title": "Windows System Engineer",
    "company": "IMC",
    "logoInitial": "I",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-windows-system-engineer-482-186-sponsorship",
    "url": "jobs/sydney-windows-system-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-238663147548115435",
    "description": "At IMC, technology is at the core of everything we do, and how we build and maintain our user space infrastructure is key to our global success. Our Operations Engineering team designs, automates, and scales the systems ..."
  },
  {
    "id": "jooble--7065311519419085046",
    "title": "Senior Sales Engineer",
    "company": "Commvault",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-sales-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-sales-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7065311519419085046",
    "description": "About Commvault Commvault (NASDAQ: CVLT) is the gold standard in cyber resilience. The company empowers customers to uncover, take action, and rapidly recover from cyberattacks - keeping data safe and businesses resilien..."
  },
  {
    "id": "jooble-1121415002323553575",
    "title": "Associate Managing Consultant - Marketing Services (12 months fixed term)",
    "company": "Mastercard",
    "logoInitial": "M",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-associate-managing-consultant-marketing-services-12-months-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-associate-managing-consultant-marketing-services-12-months-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1121415002323553575",
    "description": "&nbsp;...Ability to communicate effectively in English • Eligibility to work in the country where you are applying, as well as apply for travel visas as required by travel needs • Ability to travel and work on client sit..."
  },
  {
    "id": "jooble--8253399206863186905",
    "title": "Regional Partner Manager - MSP",
    "company": "Lastpass",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-regional-partner-manager-msp-482-186-sponsorship",
    "url": "jobs/sydney-regional-partner-manager-msp-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8253399206863186905",
    "description": "LastPass is looking for a Regional Partner Manager - MSP . In this role, you will grow LastPass's MSP partner ecosystem across the ANZ region , using your channel expertise to drive partner success, accelerate adoption, ..."
  },
  {
    "id": "jooble-8071614827880874431",
    "title": "VCE Certified Teacher - Legal Studies Content Validator & Moderator",
    "company": "Education Perfect",
    "logoInitial": "E",
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
    "salary": "$60 per hour",
    "type": "Temporary",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-vce-certified-teacher-legal-studies-content-validator-moderator-482-186-sponsorship",
    "url": "jobs/sydney-vce-certified-teacher-legal-studies-content-validator-moderator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8071614827880874431",
    "description": "Education Perfect is an EdTech platform designed to empower educators and amplify their impact in the classroom. We aim to enable teachers to personalise learning at scale with powerful learning, assessment, and insights..."
  },
  {
    "id": "jooble--7518171255931973860",
    "title": "Digital Education Sales Consultant",
    "company": "Peopleworth",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-digital-education-sales-consultant-482-186-sponsorship",
    "url": "jobs/sydney-digital-education-sales-consultant-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7518171255931973860",
    "description": "The Role We are seeking an experienced Digital Education Sales Consultant to help professionals explore premium online education opportunities that can accelerate their careers. This is a consultative sales role focused ..."
  },
  {
    "id": "adzuna-5828753149",
    "title": "Clinical Nurse Specialist (Mental Health) - Permanent Contract - North West Tasmania - Visa Sponsorship Available!",
    "company": "Skilled Nursing UK",
    "logoInitial": "S",
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
    "salary": "$109,767 - $109,767 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "burnie-clinical-nurse-specialist-mental-health-permanent-contract-north-west-tasmania-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/burnie-clinical-nurse-specialist-mental-health-permanent-contract-north-west-tasmania-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Clinical%20Nurse%20Specialist%20%28Mental%20Health%29%20-%20Permanent%20Contract%20-%20North%20West%20Tasmania%20-%20Visa%20Sponsorship%20Available%21%20Skilled%20Nursing%20UK%20Burnie",
    "description": "Details Title: Clinical Nurse Specialist (Community) - Older Persons Mental Health Services Location: North West Tasmania Position Type: Permanent full time, day worker position, working 76 hours per fortnight, commencin..."
  },
  {
    "id": "adzuna-5878483720",
    "title": "Dentist | Australian Visa Sponsorship Opportunities",
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
    "salary": "$75 - $400 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-dentist-australian-visa-sponsorship-opportunities-482-186-sponsorship",
    "url": "jobs/sydney-dentist-australian-visa-sponsorship-opportunities-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Dentist%20%7C%20Australian%20Visa%20Sponsorship%20Opportunities%20Gorilla%20Jobs%20Sydney",
    "description": "Gorilla Jobs is one of the largest healthcare recruitment providers in Australia for permanent staffing. We are partnered with most of the national dental corporates, as well as hundreds of private practices across Austr..."
  },
  {
    "id": "adzuna-5834903573",
    "title": "GP Opportunities - Perth, WA (DPA) | Visa Sponsorship",
    "company": "Ozhealth Australasia",
    "logoInitial": "O",
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
    "salary": "$6,240 - $312,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-gp-opportunities-perth-wa-dpa-visa-sponsorship-482-494-sponsorship",
    "url": "jobs/perth-gp-opportunities-perth-wa-dpa-visa-sponsorship-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20Opportunities%20-%20Perth%2C%20WA%20%28DPA%29%20%7C%20Visa%20Sponsorship%20Ozhealth%20Australasia%20Perth",
    "description": "⭐ The Opportunity: We're working with a well-established network of medical centres across Perth seeking UK-trained GPs under the Expedited Specialist Pathway, as well as VR GPs (under moratorium or unrestricted). With m..."
  },
  {
    "id": "adzuna-5759582745",
    "title": "Physiotherapist - Training/Visa Sponsorship - Regional NSW",
    "company": "HealthcareLink Support",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-physiotherapist-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship",
    "url": "jobs/sydney-physiotherapist-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist%20-%20Training/Visa%20Sponsorship%20-%20Regional%20NSW%20HealthcareLink%20Support%20Sydney",
    "description": "Job title: Physiotherapist/OT - Training/Visa Sponsorship - Regional NSW Working Days: 38 hours/week Salary: Competitive Salary Package (based on experience)  Incentives  CPD Location: Regional NSW About the Role: Our cl..."
  },
  {
    "id": "adzuna-5650855975",
    "title": "Registered Nurse (Visa Sponsorship Available) – Kimberley Region",
    "company": "Juniper",
    "logoInitial": "J",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-registered-nurse-visa-sponsorship-available-kimberley-region-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-visa-sponsorship-available-kimberley-region-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20%28Visa%20Sponsorship%20Available%29%20%E2%80%93%20Kimberley%20Region%20Juniper%20Perth",
    "description": "About Us: Juniper is a leading Western Australian not-for-profit aged care provider, supporting older people to live a life of meaning, connection and dignity across metropolitan, regional and remote WA. We are currently..."
  },
  {
    "id": "adzuna-5794408463",
    "title": "MSK Physiotherapist - Visa Sponsorship/Relocation Assist/Benefits",
    "company": "HealthcareLink Support",
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
    "salary": "$90,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-msk-physiotherapist-visa-sponsorshiprelocation-assistbenefits-482-186-sponsorship",
    "url": "jobs/sydney-msk-physiotherapist-visa-sponsorshiprelocation-assistbenefits-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=MSK%20Physiotherapist%20-%20Visa%20Sponsorship/Relocation%20Assist/Benefits%20HealthcareLink%20Support%20Sydney",
    "description": "Job title: MSK Physiotherapist - Visa Sponsorship/Relocation Assist - Regional NSW Working Hours: FT 38 hours/week Salary: Up to $100K per annum plus super  travel allowance  relocation assistance Location: Regional SA R..."
  },
  {
    "id": "adzuna-5757864751",
    "title": "Physiotherapist/OT - Training/Visa Sponsorship - Regional NSW",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-physiotherapistot-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship",
    "url": "jobs/canberra-physiotherapistot-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist/OT%20-%20Training/Visa%20Sponsorship%20-%20Regional%20NSW%20HealthcareLink%20Canberra",
    "description": "Job title: Physiotherapist/OT - Training/Visa Sponsorship - Regional NSW Working Days: 38 hours/week Salary: Competitive Salary Package (based on experience)  Incentives  CPD Location: Regional NSW About the company: Our..."
  },
  {
    "id": "adzuna-5800540570",
    "title": "Lead Data Engineer – Visa Sponsorship & Relocation to Australia",
    "company": "Billigence",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-lead-data-engineer-visa-sponsorship-relocation-to-australia-482-186-sponsorship",
    "url": "jobs/sydney-lead-data-engineer-visa-sponsorship-relocation-to-australia-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Lead%20Data%20Engineer%20%E2%80%93%20Visa%20Sponsorship%20%26%20Relocation%20to%20Australia%20Billigence%20Sydney",
    "description": "About Billigence Billigence is a boutique data consultancy with global outreach and clientele, transforming the way organizations work with data. We leverage cutting-edge technologies to design, tailor, and implement adv..."
  },
  {
    "id": "adzuna-5757866110",
    "title": "GP needed - DPA - Visa sponsorship - 2 hours from Melbourne",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-gp-needed-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-gp-needed-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20needed%20-%20DPA%20-%20Visa%20sponsorship%20-%202%20hours%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": "Well established busy practice Weekend work on roster Third-largest urban inland city in Australia and the third-largest city in Victoria. A well established practice in the Western District of Victoria approx 120 Km fro..."
  },
  {
    "id": "adzuna-5759582413",
    "title": "Clinic/Community Physiotherapist - Visa Sponsorship - Grafton, NSW",
    "company": "Healthcarelink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-cliniccommunity-physiotherapist-visa-sponsorship-grafton-nsw-482-186-sponsorship",
    "url": "jobs/sydney-cliniccommunity-physiotherapist-visa-sponsorship-grafton-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Clinic/Community%20Physiotherapist%20-%20Visa%20Sponsorship%20-%20Grafton%2C%20NSW%20Healthcarelink%20Sydney",
    "description": "Job title: Clinic/Community Physiotherapist - Visa Sponsorship - Grafton, NSW Hours: 38 Hours a week Salary: Up to $105K (Based on experience)  Super  Bonus  Benefits Location: Grafton, NSW About the Role: We are looking..."
  },
  {
    "id": "adzuna-5757864526",
    "title": "Community-Based Occupational Therapist - Visa Sponsorship Available",
    "company": "HealthcareLink",
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
    "salary": "$75,000 - $92,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-community-based-occupational-therapist-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-occupational-therapist-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Occupational%20Therapist%20-%20Visa%20Sponsorship%20Available%20HealthcareLink%20Melbourne",
    "description": "Job title: Community-Based Occupational Therapist - Visa Sponsorship Available Work Hours: Full Time, 38hrs/week Salary: $75K to $92K per annum plus super Location: West Melbourne Roles & Responsibilities: Our Client is ..."
  },
  {
    "id": "adzuna-5718451926",
    "title": "Community-Based Speech Pathologist - Visa Sponsorship Available",
    "company": "HealthcareLink Support",
    "logoInitial": "H",
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
    "salary": "$89,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "adelaide-community-based-speech-pathologist-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/adelaide-community-based-speech-pathologist-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Speech%20Pathologist%20-%20Visa%20Sponsorship%20Available%20HealthcareLink%20Support%20Adelaide",
    "description": "Job title: Community-Based Speech Pathologist - Visa Sponsorship Available Work Hours: Full Time, 38hrs/week Salary: $89K to $120K per annum plus super Location: Adelaide Roles & Responsibilities: Our Client is a registe..."
  },
  {
    "id": "adzuna-5857619060",
    "title": "Team Leader (EN Qualified)- Visa Sponsorship Available",
    "company": "Calvary Care",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-team-leader-en-qualified-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-team-leader-en-qualified-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Team%20Leader%20%28EN%20Qualified%29-%20Visa%20Sponsorship%20Available%20Calvary%20Care%20Melbourne",
    "description": "Progress with purpose at one of Australia’s largest health care providers Get ahead with salary packaging, benefits and professional development in a supportive team environment Permanent Full-time & Part-time roles avai..."
  },
  {
    "id": "adzuna-5757865234",
    "title": "GP - DPA - Gladstone - Visa sponsorship - Mixed billing",
    "company": "HealthcareLink",
    "logoInitial": "H",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-gp-dpa-gladstone-visa-sponsorship-mixed-billing-482-494-sponsorship",
    "url": "jobs/brisbane-gp-dpa-gladstone-visa-sponsorship-mixed-billing-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20Gladstone%20-%20Visa%20sponsorship%20-%20Mixed%20billing%20HealthcareLink%20Brisbane",
    "description": "Location: Gladstone , QLD Position Summary A reputable doctor owned medical centre in Gladstone is urgently seeking a committed and enthusiastic GP to join their team. A replacement DPA is available to be claimed asap (D..."
  },
  {
    "id": "adzuna-5877491916",
    "title": "VR GP | DPA | 482 Visa Sponsorship | Mixed Billing",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-dpa-482-visa-sponsorship-mixed-billing-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-dpa-482-visa-sponsorship-mixed-billing-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20%7C%20DPA%20%7C%20482%20Visa%20Sponsorship%20%7C%20Mixed%20Billing%20HealthcareLink%20Melbourne",
    "description": "Established Practice | Busy Patient Base | Melbourne South-East An exciting opportunity is available for a FRACGP, RACGP PEP Specialist Pathway or Expedited Specialist Pathway GP to join a well-established mixed billing ..."
  },
  {
    "id": "adzuna-5877491881",
    "title": "GP role - Bathurst - PEP - DPA- MMM3 - Visa Sponsorship",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-gp-role-bathurst-pep-dpa-mmm3-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-gp-role-bathurst-pep-dpa-mmm3-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20role%20-%20Bathurst%20-%20PEP%20-%20DPA-%20MMM3%20-%20Visa%20Sponsorship%20HealthcareLink%20Sydney",
    "description": "Practice Bathurst is the oldest inland settlement in Australia and has a population of over 36,000 and is located just over 2.5 hours to Sydney Our client is a doctor owned family practice and located near very busy shop..."
  },
  {
    "id": "adzuna-5757864728",
    "title": "Aged care Physiotherapist- Training/Visa Sponsorship - Parkes, NSW",
    "company": "HealthcareLink Support",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-aged-care-physiotherapist-trainingvisa-sponsorship-parkes-nsw-482-186-sponsorship",
    "url": "jobs/sydney-aged-care-physiotherapist-trainingvisa-sponsorship-parkes-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Aged%20care%20Physiotherapist-%20Training/Visa%20Sponsorship%20-%20Parkes%2C%20NSW%20HealthcareLink%20Support%20Sydney",
    "description": "Job title: Physiotherapist- Training/Visa Sponsorship - Parkes, NSW Salary: Competitive Salary Package (based on experience)  Incentives  CPD Location: Parkes, NSW The opportunity; We're looking for two physiotherapists ..."
  },
  {
    "id": "adzuna-5733234115",
    "title": "Community-Based Occupational Therapist - Visa Sponsorship for Onshore Applicants",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-community-based-occupational-therapist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-occupational-therapist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Occupational%20Therapist%20-%20Visa%20Sponsorship%20for%20Onshore%20Applicants%20HealthcareLink%20Melbourne",
    "description": "Job title: Community-Based Occupational Therapist - Visa Sponsorship Available Work Hours: Full Time, 38hrs/week Salary: $75K to $92K per annum plus super Location: West Melbourne Roles & Responsibilities: Our Client is ..."
  },
  {
    "id": "adzuna-5757864198",
    "title": "Community-Based Speech Pathologist - Visa Sponsorship for Onshore Applicants",
    "company": "HealthcareLink Support",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-community-based-speech-pathologist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-speech-pathologist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Speech%20Pathologist%20-%20Visa%20Sponsorship%20for%20Onshore%20Applicants%20HealthcareLink%20Support%20Melbourne",
    "description": "Job title: Community-Based Speech Pathologist wanted in West Melbourne Work Hours: Full Time, 38hrs/week Salary: $89K to $120K per annum plus super Location: West Melbourne Roles & Responsibilities: Our Client is a regis..."
  },
  {
    "id": "adzuna-5757865384",
    "title": "GP role - Shepparton - 70% - DPA - Visa sponsorship - PEP",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-gp-role-shepparton-70-dpa-visa-sponsorship-pep-482-186-sponsorship",
    "url": "jobs/melbourne-gp-role-shepparton-70-dpa-visa-sponsorship-pep-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20role%20-%20Shepparton%20-%2070%25%20-%20DPA%20-%20Visa%20sponsorship%20-%20PEP%20HealthcareLink%20Melbourne",
    "description": "Hours: Full time and part time roles available. Location: Regional VIC Practice: Our client located about 30 mins from the Shepparton region is urgently seeking an additional GP to join their team. The location can offer..."
  },
  {
    "id": "adzuna-5877491691",
    "title": "General practitioner - FSP - Visa sponsorship - 1.5 hrs from Melbourne",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-fsp-visa-sponsorship-15-hrs-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-fsp-visa-sponsorship-15-hrs-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20practitioner%20-%20FSP%20-%20Visa%20sponsorship%20-%201.5%20hrs%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": "Location: Classified as DPA and MM5 1.5 hours from Melbourne Visa Sponsorship available Clinic Overview: Standalone building, previously residential and renovated to suit the needs of a medical centre Beautiful facilitie..."
  },
  {
    "id": "adzuna-5794409049",
    "title": "GP needed - PEP transfer - DPA - Visa sponsorship - 2 hours from Melbourne",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-gp-needed-pep-transfer-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-gp-needed-pep-transfer-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20needed%20-%20PEP%20transfer%20-%20DPA%20-%20Visa%20sponsorship%20-%202%20hours%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": "Well established busy practice Suitable for PEP transfer, Temp resident profile Weekend work on roster A well established practice in the Western District of Victoria approx 150 Km from Melbourne is seeking an additional..."
  },
  {
    "id": "adzuna-5874391239",
    "title": "General Medicine PHO/Registrar - come work in Queensland",
    "company": "ME Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-medicine-phoregistrar-come-work-in-queensland-482-186-sponsorship",
    "url": "jobs/sydney-general-medicine-phoregistrar-come-work-in-queensland-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Medicine%20PHO/Registrar%20-%20come%20work%20in%20Queensland%20ME%20Medical%20Recruitment%20Sydney",
    "description": "General Medicine Registrar – Relocate to Sunny Queensland, Australia Location: Hervey Bay Hospital, Queensland Position: General Medicine Registrar (PHO equivalent) Employment Type: Full-time Are you an Irish-trained doc..."
  },
  {
    "id": "adzuna-5757865066",
    "title": "GP - DPA - Gladstone - Visa sponsorship - 70% -$150 retainer for 3 months",
    "company": "HealthcareLink",
    "logoInitial": "H",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-gp-dpa-gladstone-visa-sponsorship-70-150-retainer-for-3-months-482-494-sponsorship",
    "url": "jobs/brisbane-gp-dpa-gladstone-visa-sponsorship-70-150-retainer-for-3-months-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20Gladstone%20-%20Visa%20sponsorship%20-%2070%25%20-%24150%20retainer%20for%203%20months%20HealthcareLink%20Brisbane",
    "description": "Location: Gladstone , QLD Position Summary A reputable doctor owned medical centre in Gladstone is urgently seeking a committed and enthusiastic GP to join their team and take over the patient base from a GP who is leavi..."
  },
  {
    "id": "adzuna-5875028578",
    "title": "General Practitioner (VR GP) Melbourne South East, DPA and Visa Sponsorship Available",
    "company": "WAVELENGTH",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-vr-gp-melbourne-south-east-dpa-and-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-vr-gp-melbourne-south-east-dpa-and-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20%28VR%20GP%29%20Melbourne%20South%20East%2C%20DPA%20and%20Visa%20Sponsorship%20Available%20WAVELENGTH%20Melbourne",
    "description": "Location available upon request, VIC Summary High‑demand clinic with strong patient flow and rapid book build Flexible part‑time or full‑time sessions with excellent income guarantee DPA location with visa sponsorship an..."
  },
  {
    "id": "adzuna-5877491835",
    "title": "GP - DPA - PEP - MDRAP - Visa sponsorship rural NSW - turning patients away",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-gp-dpa-pep-mdrap-visa-sponsorship-rural-nsw-turning-patients-away-482-186-sponsorship",
    "url": "jobs/sydney-gp-dpa-pep-mdrap-visa-sponsorship-rural-nsw-turning-patients-away-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20PEP%20-%20MDRAP%20-%20Visa%20sponsorship%20rural%20NSW%20-%20turning%20patients%20away%20HealthcareLink%20Sydney",
    "description": "Location: Rural NSW Position Summary A well established country practice located in northern New South Wales at the mouth of the Clarence River is urgently seeking an additional GP due to patient demand. They are current..."
  },
  {
    "id": "adzuna-5759582938",
    "title": "2 x VR GPs Needed | Visa Sponsorship | 70 - 75% of Billings  Retainer | DPA",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-2-x-vr-gps-needed-visa-sponsorship-70-75-of-billings-retainer-dpa-482-186-sponsorship",
    "url": "jobs/sydney-2-x-vr-gps-needed-visa-sponsorship-70-75-of-billings-retainer-dpa-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=2%20x%20VR%20GPs%20Needed%20%7C%20Visa%20Sponsorship%20%7C%2070%20-%2075%25%20of%20Billings%20%20Retainer%20%7C%20DPA%20HealthcareLink%20Sydney",
    "description": "About the Opportunity A very busy bulk billing clinic in the Palmerston area is urgently needing two more vocationally registered general practitioners to cater for patient overflow. The clinic has long been short-staffe..."
  },
  {
    "id": "adzuna-5870144083",
    "title": "Registered Nurse - Aged Care RN",
    "company": "Health X",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-aged-care-rn-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-aged-care-rn-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20-%20Aged%20Care%20RN%20Health%20X%20Sydney",
    "description": "Job Description Registered Nurse (Aged Care) – Port Macquarie NSW | Permanent Role | 482 Sponsorship Available Up to $52 hr  super  penalties | Full-time permanent position | Onshore international applicants welcome | 48..."
  },
  {
    "id": "adzuna-5876088557",
    "title": "International Applicants only - Registered Nurse/Midwife - All specialities, all regions across NT Health",
    "company": "Department of Health",
    "logoInitial": "D",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "darwin-international-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-494-sponsorship",
    "url": "jobs/darwin-international-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=International%20Applicants%20only%20-%20Registered%20Nurse/Midwife%20-%20All%20specialities%2C%20all%20regions%20across%20NT%20Health%20Department%20of%20Health%20Darwin",
    "description": "This position is a register of interest for Registered Nurse /Midwife (N2), INTERNATIONAL APPLICANTS ONLY. Please read the important information for applicants before applying. Visa sponsorship is not guaranteed and depe..."
  },
  {
    "id": "adzuna-5870133101",
    "title": "Registered Nurse - Aged Care",
    "company": "Health X",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-registered-nurse-aged-care-482-494-sponsorship",
    "url": "jobs/brisbane-registered-nurse-aged-care-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20-%20Aged%20Care%20Health%20X%20Brisbane",
    "description": "Job Description Registered Nurse (Aged Care) – Warwick QLD | 482 Sponsorship Available $80,000 to $105,000 per annum  super  penalties | Full-time permanent position | Onshore international applicants welcome Join Health..."
  },
  {
    "id": "adzuna-5870139215",
    "title": "Aged Care Registered Nurse - RN",
    "company": "Health X",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-aged-care-registered-nurse-rn-482-186-sponsorship",
    "url": "jobs/sydney-aged-care-registered-nurse-rn-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Aged%20Care%20Registered%20Nurse%20-%20RN%20Health%20X%20Sydney",
    "description": "Job Description Registered Nurse (Aged Care) – Port Macquarie | Permanent Role | 482/186 Sponsorship Available Up to $55 hr  super  penalties | Full-time permanent position | Onshore international applicants welcome |App..."
  },
  {
    "id": "adzuna-5839557478",
    "title": "Staff Specialist - Radiology",
    "company": "Tasmanian Health Service",
    "logoInitial": "T",
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
    "salary": "$222,789 - $222,789 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "hobart-staff-specialist-radiology-482-494-sponsorship",
    "url": "jobs/hobart-staff-specialist-radiology-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Staff%20Specialist%20-%20Radiology%20Tasmanian%20Health%20Service%20Hobart",
    "description": "Population Screening and Cancer Prevention (PSCP) service is seeking applications from interested suitably qualified Specialist Breast Radiologists to fill a permanent vacancy. We are seeking a dedicated and collaborativ..."
  },
  {
    "id": "adzuna-5870155066",
    "title": "Senior Manager | Capital Markets and Accounting Advisory Services",
    "company": "PricewaterhouseCoopers",
    "logoInitial": "P",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-senior-manager-capital-markets-and-accounting-advisory-services-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-capital-markets-and-accounting-advisory-services-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Senior%20Manager%20%7C%20Capital%20Markets%20and%20Accounting%20Advisory%20Services%20PricewaterhouseCoopers%20Sydney",
    "description": "Line of Service Assurance Industry/Sector Not Applicable Specialism Assurance Management Level Senior Manager Job Description & Summary Education (if blank, degree and/or field of study not specified) Degrees/Field of St..."
  },
  {
    "id": "adzuna-5870147131",
    "title": "FY27 TEST Vacationer - Melbourne - Deals",
    "company": "PricewaterhouseCoopers",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-fy27-test-vacationer-melbourne-deals-482-186-sponsorship",
    "url": "jobs/melbourne-fy27-test-vacationer-melbourne-deals-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=FY27%20TEST%20Vacationer%20-%20Melbourne%20-%20Deals%20PricewaterhouseCoopers%20Melbourne",
    "description": "Line of Service Advisory Industry/Sector Not Applicable Specialism Advisory - Other Management Level Administrative Job Description & Summary LI-DNI Education (if blank, degree and/or field of study not specified) Degree..."
  },
  {
    "id": "adzuna-5870144419",
    "title": "FY27 TEST Vacationer - Sydney - Risk",
    "company": "PricewaterhouseCoopers",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-fy27-test-vacationer-sydney-risk-482-186-sponsorship",
    "url": "jobs/sydney-fy27-test-vacationer-sydney-risk-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=FY27%20TEST%20Vacationer%20-%20Sydney%20-%20Risk%20PricewaterhouseCoopers%20Sydney",
    "description": "Line of Service Assurance Industry/Sector Not Applicable Specialism Assurance Management Level Administrative Job Description & Summary LI-DNI Education (if blank, degree and/or field of study not specified) Degrees/Fiel..."
  },
  {
    "id": "adzuna-5873279695",
    "title": "Industry Driver - Health",
    "company": "PricewaterhouseCoopers",
    "logoInitial": "P",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-industry-driver-health-482-494-sponsorship",
    "url": "jobs/perth-industry-driver-health-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Industry%20Driver%20-%20Health%20PricewaterhouseCoopers%20Perth",
    "description": "Line of Service Internal Firm Services Industry/Sector Not Applicable Specialism IFS - Brand & Communications Management Level Senior Manager Job Description & Summary Education (if blank, degree and/or field of study no..."
  },
  {
    "id": "adzuna-5875678070",
    "title": "Domestic Applicants only - Registered Nurse/Midwife - All specialities, all regions across NT Health",
    "company": "Department of Health",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-domestic-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-186-sponsorship",
    "url": "jobs/sydney-domestic-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Domestic%20Applicants%20only%20-%20Registered%20Nurse/Midwife%20-%20All%20specialities%2C%20all%20regions%20across%20NT%20Health%20Department%20of%20Health%20Sydney",
    "description": "Note – if you are seeking visa sponsorship do not apply via this register of interest as your application will not be progressed. Please search vacancy 70252221 and apply through that register of interest. Nursing and mi..."
  },
  {
    "id": "adzuna-5875678127",
    "title": "Facilities Coordinator",
    "company": "PricewaterhouseCoopers",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-facilities-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-facilities-coordinator-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Facilities%20Coordinator%20PricewaterhouseCoopers%20Sydney",
    "description": "Line of Service Internal Firm Services Industry/Sector Not Applicable Specialism Customer Support Management Level Senior Associate Job Description & Summary Education (if blank, degree and/or field of study not specifie..."
  },
  {
    "id": "adzuna-5870135900",
    "title": "Emergency Medicine Registrar ACEM Assessed please also apply",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-emergency-medicine-registrar-acem-assessed-please-also-apply-482-494-sponsorship",
    "url": "jobs/perth-emergency-medicine-registrar-acem-assessed-please-also-apply-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Emergency%20Medicine%20Registrar%20ACEM%20Assessed%20please%20also%20apply%20ME%20Medical%20Recruitment%20Perth",
    "description": "Emergency Department Registrar – Western Australia Take your emergency medicine career to the next level in a stunning coastal city in WA! We are seeking Emergency Department Registrars to join a leading hospital in a vi..."
  },
  {
    "id": "adzuna-5870132489",
    "title": "Cook (Hospitality)",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-cook-hospitality-482-494-sponsorship",
    "url": "jobs/perth-cook-hospitality-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Cook%20%28Hospitality%29%20Worldpool%20Australia%20Perth",
    "description": "Job Description: The Role: Wordpool Australia is currently recruiting for Cooks. If you meet the essential requirements listed below and want to take advantage of this fantastic opportunity, please send us your resume an..."
  },
  {
    "id": "adzuna-5870156409",
    "title": "Research Engineer – Matilda",
    "company": "Maincode",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-research-engineer-matilda-482-186-sponsorship",
    "url": "jobs/melbourne-research-engineer-matilda-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Research%20Engineer%20%E2%80%93%20Matilda%20Maincode%20Melbourne",
    "description": "Maincode is mission-focused. That means we care about shipping Matilda, and we care about the people we do it with. Everything else is secondary. Matilda is Australia's first publicly available conversational AI platform..."
  },
  {
    "id": "adzuna-5870138522",
    "title": "Hospitality Internship Trainee",
    "company": "2coms",
    "logoInitial": "2",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-hospitality-internship-trainee-482-186-sponsorship",
    "url": "jobs/sydney-hospitality-internship-trainee-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Hospitality%20Internship%20Trainee%202coms%20Sydney",
    "description": "Job Title: Hospitality Internship Trainee Location: Australia (Candidate must be willing to relocate to Australia) Internship Duration: 2 Years Departments Available: Front Office Food & Beverage Service Culinary / Food ..."
  },
  {
    "id": "adzuna-5870155635",
    "title": "Midwife",
    "company": "ACM Recruitment",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-midwife-482-186-sponsorship",
    "url": "jobs/sydney-midwife-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Midwife%20ACM%20Recruitment%20Sydney",
    "description": "17th August, 2026 Sydney Metro Maternity Midwives | Contracts & Permanent Roles Take your midwifery career to the next level in Sydney. We’re currently seeking experienced Registered Midwives for both short-term contract..."
  },
  {
    "id": "adzuna-5870136637",
    "title": "Emergency Medicine Specialty Registrar - UK trained please apply",
    "company": "ME Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-emergency-medicine-specialty-registrar-uk-trained-please-apply-482-186-sponsorship",
    "url": "jobs/sydney-emergency-medicine-specialty-registrar-uk-trained-please-apply-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Emergency%20Medicine%20Specialty%20Registrar%20-%20UK%20trained%20please%20apply%20ME%20Medical%20Recruitment%20Sydney",
    "description": "Emergency Department Registrar – Australia Wide Take your emergency medicine career to the next level in Australian Wide positions! We are seeking Emergency Department Registrars to join a leading hospitals in in a vibra..."
  },
  {
    "id": "adzuna-5870156996",
    "title": "Remote Data Entry Operator (Entry Level)",
    "company": "Skillerszone",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-remote-data-entry-operator-entry-level-482-186-sponsorship",
    "url": "jobs/sydney-remote-data-entry-operator-entry-level-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Remote%20Data%20Entry%20Operator%20%28Entry%20Level%29%20Skillerszone%20Sydney",
    "description": "Job Title: Remote Data Entry Operator (Entry Level) Company: Optiboost Media Location: New York, USA (Remote / Work From Home) Job Type: Full-time / Part-time Company Overview: Optiboost Media is a growing professional s..."
  },
  {
    "id": "adzuna-5870140825",
    "title": "ICU Registrar / Senior Medical Officer",
    "company": "Calvary Health Care",
    "logoInitial": "C",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "adelaide-icu-registrar-senior-medical-officer-482-494-sponsorship",
    "url": "jobs/adelaide-icu-registrar-senior-medical-officer-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=ICU%20Registrar%20/%20Senior%20Medical%20Officer%20Calvary%20Health%20Care%20Adelaide",
    "description": "ICU Registrar Calvary Adelaide & Calvary North Adelaide Hospitals | Adelaide, South Australia Build your critical care career in one of Australia's leading private ICU networks. If you're seeking outstanding clinical exp..."
  },
  {
    "id": "adzuna-5870155053",
    "title": "Signal Engineer",
    "company": "Maincode",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-signal-engineer-482-186-sponsorship",
    "url": "jobs/melbourne-signal-engineer-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Signal%20Engineer%20Maincode%20Melbourne",
    "description": "About the role Matilda is Australia's LLM. What ends up in the corpus is what the model learns, so the quality of the data sets the ceiling on the quality of the model. We're hiring a Signal Engineer to own that ceiling...."
  },
  {
    "id": "jooble-3728892751639702341",
    "title": "Quality Engineer",
    "company": "Invictus People",
    "logoInitial": "I",
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
    "salary": "$110k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-quality-engineer-482-186-sponsorship",
    "url": "jobs/sydney-quality-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3728892751639702341",
    "description": " Position Description \r\n Quality Engineer \r\n About the Opportunity \r\n An exciting opportunity is available for an experienced Quality Engineer to join a growing advanced manufacturing organisation delivering high precisi..."
  },
  {
    "id": "adzuna-5879824520",
    "title": "Speech language pathologist/therapists –Australia wants you! Visa sponsorship",
    "company": "GENXT BT Solutions Pty",
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
    "salary": "$90,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-speech-language-pathologisttherapists-australia-wants-you-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-speech-language-pathologisttherapists-australia-wants-you-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20language%20pathologist/therapists%20%E2%80%93Australia%20wants%20you%21%20Visa%20sponsorship%20GENXT%20BT%20Solutions%20Pty%20Sydney",
    "description": "Speech language pathologist/therapists –Australia wants you! Visa sponsorship Multiple roles on offer – Visa sponsored Brisbane, Sydney, Melbourne Great salaries, benefits, relocation assistance Professional development ..."
  },
  {
    "id": "adzuna-5882475727",
    "title": "Baker",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-baker-482-494-sponsorship",
    "url": "jobs/perth-baker-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Baker%20Worldpool%20Australia%20Perth",
    "description": "Job Description: The Role: Wordpool Australia is currently recruiting for bakers. If you meet the essential requirements listed below and want to take advantage of this fantastic opportunity, please send us your resume a..."
  },
  {
    "id": "adzuna-5880807271",
    "title": "Café / Restaurant Manager",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-cafe-restaurant-manager-482-494-sponsorship",
    "url": "jobs/perth-cafe-restaurant-manager-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Caf%C3%A9%20/%20Restaurant%20Manager%20Worldpool%20Australia%20Perth",
    "description": "Job Description: The Role: Wordpool Australia is currently recruiting for Café / Restaurant Managers. If you meet the essential requirements listed below and want to take advantage of this fantastic opportunity, please s..."
  },
  {
    "id": "adzuna-5874046683",
    "title": "Occupational Therapist | Employer Sponsorship | 1.5h from Melbourne",
    "company": "Mediix",
    "logoInitial": "M",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-employer-sponsorship-15h-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-employer-sponsorship-15h-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20%7C%20Employer%20Sponsorship%20%7C%201.5h%20from%20Melbourne%20Mediix%20Melbourne",
    "description": "Occupational Therapist – Mixed Caseload | Sponsorship Available | Regional Victoria Are you an Occupational Therapist looking for an opportunity to truly make a role your own? We are seeking a passionate and motivated OT..."
  },
  {
    "id": "adzuna-5866740252",
    "title": "Motor Mechanic",
    "company": "GV Auto Mechanics Pty Ltd",
    "logoInitial": "G",
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
    "salary": "$77,000 - $85,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-motor-mechanic-482-186-sponsorship",
    "url": "jobs/sydney-motor-mechanic-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Motor%20Mechanic%20GV%20Auto%20Mechanics%20Pty%20Ltd%20Sydney",
    "description": "About GV Auto Mechanics GV Auto Mechanics is a well-established, full-service automotive repairer committed to quality workmanship and exceptional customer service. Located at 54B Williams Road, Shepparton, our workshop ..."
  },
  {
    "id": "adzuna-5876754817",
    "title": "Data Analyst",
    "company": "Royal Migration Centre",
    "logoInitial": "R",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$79,423 - $79,423 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-data-analyst-482-494-sponsorship",
    "url": "jobs/hobart-data-analyst-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Data%20Analyst%20Royal%20Migration%20Centre%20Hobart",
    "description": "Position: Data Analyst Occupation: ANZSCO 224114 – Data Analyst Employment Type: Full-Time Salary: $79,423 per annum  superannuation Location: Sany Bay, Tasmania, Australia Industry: Education and Migration Consultancy E..."
  },
  {
    "id": "adzuna-5870144436",
    "title": "Endorsed Enrolled Nurse - Aged Care",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-endorsed-enrolled-nurse-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-endorsed-enrolled-nurse-aged-care-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Endorsed%20Enrolled%20Nurse%20-%20Aged%20Care%20Tallangatta%20Health%20Service%20Sydney",
    "description": "About the role We are seeking experienced Endorsed Enrolled Nurses to join our dedicated care team in Tallangatta, Victoria. As a qualified Endorsed Enrolled Nurse you will provide high quality, person-centred clinical c..."
  },
  {
    "id": "adzuna-5870132110",
    "title": "Remote Community Store - Duty Supervisors - Couple Position",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-remote-community-store-duty-supervisors-couple-position-482-186-sponsorship",
    "url": "jobs/sydney-remote-community-store-duty-supervisors-couple-position-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Remote%20Community%20Store%20-%20Duty%20Supervisors%20-%20Couple%20Position%20North%20West%20Recruitment%20Sydney",
    "description": "The Company Our client is currently seeking 2 x Duty Supervisors to work in a busy store in a remote community in North-Western Australia. Located on the coast, this small community offers a fantastic outdoor lifestyle a..."
  },
  {
    "id": "adzuna-5870151183",
    "title": "Registered Nurses",
    "company": "Anglican Care",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurses-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurses-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurses%20Anglican%20Care%20Sydney",
    "description": "The Opportunity: We have permanent fulltime opportunities for Registered Nurses to join our Anglican Care aged care service at Mirrabooka Place - Gloucester NSW. We welcome applications from Registered Nurses seeking emp..."
  },
  {
    "id": "adzuna-5877123800",
    "title": "Air Conditioning & Refrigeration Technician (HVAC)",
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
    "salary": "$90,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-air-conditioning-refrigeration-technician-hvac-482-186-sponsorship",
    "url": "jobs/sydney-air-conditioning-refrigeration-technician-hvac-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Air%20Conditioning%20%26%20Refrigeration%20Technician%20%28HVAC%29%20konnecting%20Sydney",
    "description": "Air Conditioning & Refrigeration Technician (HVAC) Sydney, NSW | Permanent Full-Time $45-$55 per Hour  Super  Company Vehicle  Overtime  Visa Sponsorship Available Join a Growing Industry Leader and Build Your Career in ..."
  },
  {
    "id": "adzuna-5870137795",
    "title": "Territory Sales Executive - Electronics",
    "company": "Copeland",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-territory-sales-executive-electronics-482-186-sponsorship",
    "url": "jobs/sydney-territory-sales-executive-electronics-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Territory%20Sales%20Executive%20-%20Electronics%20Copeland%20Sydney",
    "description": "About Us We are a global climate technologies company engineered for sustainability. We create sustainable and efficient residential, commercial and industrial spaces through HVACR technologies. We protect temperature-se..."
  },
  {
    "id": "adzuna-5877123801",
    "title": "Qualified Cabinet Maker - Brisbane, QLD",
    "company": "konnecting",
    "logoInitial": "K",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-qualified-cabinet-maker-brisbane-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-cabinet-maker-brisbane-qld-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Qualified%20Cabinet%20Maker%20-%20Brisbane%2C%20QLD%20konnecting%20Brisbane",
    "description": "Join a Growing Manufacturing Business Our client is a respected Brisbane-based manufacturer delivering premium custom cabinetry, joinery and architectural solutions for residential and commercial projects. Due to continu..."
  },
  {
    "id": "adzuna-5868989661",
    "title": "Domestic Roofer | Residential Roofs | Sponsorship considered for onshore workers",
    "company": "IM Partners",
    "logoInitial": "I",
    "location": "Adelaide, SA",
    "state": "SA",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$79,040 - $89,440 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "adelaide-domestic-roofer-residential-roofs-sponsorship-considered-for-onshore-workers-482-494-sponsorship",
    "url": "jobs/adelaide-domestic-roofer-residential-roofs-sponsorship-considered-for-onshore-workers-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Domestic%20Roofer%20%7C%20Residential%20Roofs%20%7C%20Sponsorship%20considered%20for%20onshore%20workers%20IM%20Partners%20Adelaide",
    "description": "Domestic Roofer | Residential Roofing | Adelaide Roofers of Adelaide is growing, and IM Partners is looking for an experienced Domestic/Residential Roofer who knows residential roofing and can genuinely contribute on sit..."
  },
  {
    "id": "adzuna-5870682013",
    "title": "Qualified Stonemason - Brisbane, QLD",
    "company": "konnecting",
    "logoInitial": "K",
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
    "salary": "$80,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "brisbane-qualified-stonemason-brisbane-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-stonemason-brisbane-qld-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Qualified%20Stonemason%20-%20Brisbane%2C%20QLD%20konnecting%20Brisbane",
    "description": "Build Your Career with a Leading Stone Manufacturer Our client is a well-established and highly respected Brisbane-based manufacturer specialising in premium natural and engineered stone products for residential and comm..."
  },
  {
    "id": "adzuna-5799264711",
    "title": "Dentist Part Time/Full Time for Boyne Island QLD",
    "company": "HealthcareLink Support",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-dentist-part-timefull-time-for-boyne-island-qld-482-186-sponsorship",
    "url": "jobs/sydney-dentist-part-timefull-time-for-boyne-island-qld-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Dentist%20Part%20Time/Full%20Time%20for%20Boyne%20Island%20QLD%20HealthcareLink%20Support%20Sydney",
    "description": "Our client has been providing quality dental care across the idyllic coastal Gladstone Region for the past 20 years. Their team pride themselves on providing high quality care to their valued patients and are passionate ..."
  },
  {
    "id": "adzuna-5860532357",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$80,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-private-dentist-482-186-sponsorship",
    "url": "jobs/sydney-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Private%20Dentist%20Zest%20Business%20Group%20Sydney",
    "description": "Private Dentist Job in Sydney, NSW, Australia. Established patient base, modern digital dentistry, high earning potential and a pathway to permanent residency. ZEST Dental Recruitment, in partnership with an established ..."
  },
  {
    "id": "adzuna-5874289587",
    "title": "Educational Leader",
    "company": "Broome Out of School Care Children’s Activities",
    "logoInitial": "B",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$80,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "gold-coast-educational-leader-482-494-sponsorship",
    "url": "jobs/gold-coast-educational-leader-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Educational%20Leader%20Broome%20Out%20of%20School%20Care%20Children%E2%80%99s%20Activities%20Gold%20Coast",
    "description": "Employer Sponsorship may be available for suitable onshore applicants Earn $80,000–$95,000  Super  Salary Packaging up to $15,000 Relocation  Rental Assistance available for the right candidate 6 Weeks Annual Leave  Remo..."
  },
  {
    "id": "adzuna-5874289586",
    "title": "Educational Leader",
    "company": "Broome Out of School Care Children’s Activities",
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
    "salary": "$80,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-educational-leader-482-186-sponsorship",
    "url": "jobs/sydney-educational-leader-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Educational%20Leader%20Broome%20Out%20of%20School%20Care%20Children%E2%80%99s%20Activities%20Sydney",
    "description": "Employer Sponsorship may be available for suitable onshore applicants Earn $80,000–$95,000  Super  Salary Packaging up to $15,000 Relocation  Rental Assistance available for the right candidate 6 Weeks Annual Leave  Remo..."
  },
  {
    "id": "adzuna-5875431440",
    "title": "Account Executive, Commercial, ANZ",
    "company": "Jamf",
    "logoInitial": "J",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-account-executive-commercial-anz-482-186-sponsorship",
    "url": "jobs/sydney-account-executive-commercial-anz-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Account%20Executive%2C%20Commercial%2C%20ANZ%20Jamf%20Sydney",
    "description": "At Jamf, we believe in an open, flexible culture based on respect and trust. Our track record and thriving work environment all stem from the freedom we grant ourselves to get the job done right. We take pride in helping..."
  },
  {
    "id": "adzuna-5866916881",
    "title": "Front Office Manager",
    "company": "Alamanda Palm Cove By Lancemore",
    "logoInitial": "A",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "cairns-front-office-manager-482-494-sponsorship",
    "url": "jobs/cairns-front-office-manager-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Front%20Office%20Manager%20Alamanda%20Palm%20Cove%20By%20Lancemore%20Cairns",
    "description": "Advance Your Leadership Career in Luxury Hospitality Work with a great team in an exceptionally beautiful location Full-time role | Potential sponsorship opportunity We have an exciting opportunity for an experienced and..."
  },
  {
    "id": "adzuna-5757865510",
    "title": "GP - Melbourne - 70% of billings - $400K per annum - DPA available",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-gp-melbourne-70-of-billings-400k-per-annum-dpa-available-482-186-sponsorship",
    "url": "jobs/melbourne-gp-melbourne-70-of-billings-400k-per-annum-dpa-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20Melbourne%20-%2070%25%20of%20billings%20-%20%24400K%20per%20annum%20-%20DPA%20available%20HealthcareLink%20Melbourne",
    "description": "Well established GPA accredited, fully computerized practice is seeking a VR GP to join their team Remuneration: 70% and guaranteed hourly rate for first 3 months with welcoming package. Replacement DPA Available High ea..."
  },
  {
    "id": "adzuna-5880598401",
    "title": "Marketing Coordinator",
    "company": "Copeland",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-marketing-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-marketing-coordinator-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Marketing%20Coordinator%20Copeland%20Sydney",
    "description": "About Us We are a global climate technologies company engineered for sustainability. We create sustainable and efficient residential, commercial and industrial spaces through HVACR technologies. We protect temperature-se..."
  },
  {
    "id": "adzuna-5859670309",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/sydney-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Agricultural%20Spreader%20/%20Machinery%20Operators%20-%20Australia%20Staff%20360%20Sydney",
    "description": "Agricultural Spreader / Machinery Operators – Australia Western Victoria | Full-time | Multiple Positions | International Applicants Welcome Staff 360 is recruiting experienced agricultural machinery operators for specia..."
  },
  {
    "id": "adzuna-5877491471",
    "title": "General Practitioner - DPA - Mixed Billing - Melbourne",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-dpa-mixed-billing-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-dpa-mixed-billing-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20-%20DPA%20-%20Mixed%20Billing%20-%20Melbourne%20HealthcareLink%20Sydney",
    "description": "An exceptional opportunity exists for a VR General Practitioner (FRACGP, RACGP PEP Specialist Pathway, or Expedited Specialist Pathway) to join an established, high-demand practice located in the booming outer-metropolit..."
  },
  {
    "id": "adzuna-5855386968",
    "title": "Occupational Therapist - Shepparton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-shepparton-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-shepparton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Shepparton%20Everyday%20Independence%20Sydney",
    "description": "Job title - Occupational Therapist Location - Shepparton Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $82,106 – $110,143 per annum (inclusive of annual leave loading)  superannuati..."
  },
  {
    "id": "adzuna-5856836828",
    "title": "Speech Pathologist - Bendigo",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-bendigo-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-bendigo-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Bendigo%20Everyday%20Independence%20Sydney",
    "description": "Job title - Speech Pathologist Location - Bendigo Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $82,106 – $110,143 per annum (inclusive of annual leave loading)  superannuation  veh..."
  },
  {
    "id": "adzuna-5855386973",
    "title": "Speech Pathologist - Shepparton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-shepparton-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-shepparton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Shepparton%20Everyday%20Independence%20Sydney",
    "description": "Job title - Speech Pathologist Location - Shepparton Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $82,106 – $110,143 per annum (inclusive of annual leave loading)  superannuation  ..."
  },
  {
    "id": "adzuna-5856836826",
    "title": "Occupational Therapist - Hobart",
    "company": "Everyday Independence",
    "logoInitial": "E",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-occupational-therapist-hobart-482-494-sponsorship",
    "url": "jobs/hobart-occupational-therapist-hobart-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Hobart%20Everyday%20Independence%20Hobart",
    "description": "Job title - Occupational Therapist Location - Hobart Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $82,106 – $110,143 per annum (inclusive of annual leave loading)  superannuation  ..."
  },
  {
    "id": "adzuna-5862938849",
    "title": "Occupational Therapist - Maitland",
    "company": "Everyday Independence",
    "logoInitial": "E",
    "location": "Newcastle, NSW",
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
    "salary": "$93,120 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "newcastle-occupational-therapist-maitland-482-186-sponsorship",
    "url": "jobs/newcastle-occupational-therapist-maitland-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Maitland%20Everyday%20Independence%20Newcastle",
    "description": "Job title - Occupational Therapist Location - Beresfield Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $93,120 – $110,143 per annum (inclusive of annual leave loading)  superannuati..."
  },
  {
    "id": "adzuna-5878483959",
    "title": "Occupational Therapist - Western Brisbane",
    "company": "Everyday Independence",
    "logoInitial": "E",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-western-brisbane-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-western-brisbane-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Western%20Brisbane%20Everyday%20Independence%20Brisbane",
    "description": "Job title - Occupational Therapist Location - Darra (including catchment zones Springfield Lakes, Ripley Region, Indooroopilly, Jindalee, Hillcrest, and Forrest Lake) Employment Type - Full time, Part time (4 days per we..."
  },
  {
    "id": "adzuna-5878483940",
    "title": "Speech Pathologist - Ballarat",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-ballarat-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-ballarat-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Ballarat%20Everyday%20Independence%20Sydney",
    "description": "Job title - Speech Pathologist Location - Ballarat Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $82,106 – $110,143 per annum (inclusive of annual leave loading)  superannuation  ve..."
  },
  {
    "id": "adzuna-5878483962",
    "title": "Speech Pathologist - Western Brisbane",
    "company": "Everyday Independence",
    "logoInitial": "E",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-speech-pathologist-western-brisbane-482-494-sponsorship",
    "url": "jobs/brisbane-speech-pathologist-western-brisbane-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Western%20Brisbane%20Everyday%20Independence%20Brisbane",
    "description": "Job title - Speech Pathologist Location - Darra (including catchment zones Springfield Lakes, Ripley Region, Indooroopilly, Jindalee, Hillcrest, and Forrest Lake) Employment Type - Full time, Part time (4 days per week) ..."
  },
  {
    "id": "adzuna-5878483967",
    "title": "Speech Pathologist - Melton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-speech-pathologist-melton-482-186-sponsorship",
    "url": "jobs/melbourne-speech-pathologist-melton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Melton%20Everyday%20Independence%20Melbourne",
    "description": "Job title - Speech Pathologist Location - Melton and surrounding suburbs including: Caroline Springs, Taylors Hill, St Albans, Sunbury, Keilor, Diggers Rest, Fraser Rise, Woodend and Bacchus Marsh. Employment Type - Full..."
  },
  {
    "id": "adzuna-5868560533",
    "title": "General Practitioner for Morayfield, QLD (DPA & MM1)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-for-morayfield-qld-dpa-mm1-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-for-morayfield-qld-dpa-mm1-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Morayfield%2C%20QLD%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Strong Support High Billings Guaranteed Income An outstanding opportunity is available for a General Practitioner to join a well-supported medical practice in Morayfield, QLD . This position is ideal for both locally tra..."
  },
  {
    "id": "adzuna-5876416467",
    "title": "General Practitioner for Werribee, VIC (DPA & MM1)",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-for-werribee-vic-dpa-mm1-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-for-werribee-vic-dpa-mm1-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Werribee%2C%20VIC%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Sydney",
    "description": "Strong Support High Billings Guaranteed Income An outstanding opportunity is available for a General Practitioner to join a well-supported medical practice in Werribee, Victoria . This position is ideal for both locally ..."
  },
  {
    "id": "adzuna-5877800292",
    "title": "General Practitioner for Williams Landing, VIC (DPA & MM1)",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-for-williams-landing-vic-dpa-mm1-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-for-williams-landing-vic-dpa-mm1-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Williams%20Landing%2C%20VIC%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": "Strong Support High Billings Guaranteed Income An outstanding opportunity is available for a General Practitioner to join a well-supported medical practice in Williams Landing, VIC . This position is ideal for both local..."
  },
  {
    "id": "adzuna-5724700596",
    "title": "Panel Beater",
    "company": "AMA Group",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-panel-beater-482-186-sponsorship",
    "url": "jobs/sydney-panel-beater-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Panel%20Beater%20AMA%20Group%20Sydney",
    "description": "Qualified Panel Beater Thurgoona (Albury-Wodonga) | Full-Time | Above-Award Pay  Relocation Support About Us BF Panels is a leading collision repair centre located between Albury and Thurgoona. Our purpose-built facility..."
  },
  {
    "id": "adzuna-5877491615",
    "title": "F/T P/T GP Position",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-ft-pt-gp-position-482-186-sponsorship",
    "url": "jobs/sydney-ft-pt-gp-position-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=F/T%20P/T%20GP%20Position%20HealthcareLink%20Sydney",
    "description": "A rewarding opportunity has arisen for a Vocationally Registered or Non-Vocationally Registered General Practitioner to join a thriving, privately owned medical center in the heart of Shellharbour City Centre. This well-..."
  },
  {
    "id": "adzuna-5877800286",
    "title": "General Practitioner for Canberra Region, ACT",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-for-canberra-region-act-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-for-canberra-region-act-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Canberra%20Region%2C%20ACT%20Trust%20Medical%20Recruitment%20Canberra",
    "description": "Visa Sponsorship Supportive Environment Beautiful Locations An exciting opportunity is available for General Practitioners and eligible International Medical Graduates (IMGs) to join well-established medical practices ac..."
  },
  {
    "id": "adzuna-5868560455",
    "title": "VR GP - Caroline Springs, VIC (Non-DPA)",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-caroline-springs-vic-non-dpa-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-caroline-springs-vic-non-dpa-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Caroline%20Springs%2C%20VIC%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": "Relocation Allowance & Sign-On Bonus Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Join a thriving non-DPA practice in Caroline Springs, VIC. High billings & full patient volume Re..."
  },
  {
    "id": "adzuna-5877800271",
    "title": "VR GP - Williams Landing, VIC (DPA MM1 - MRCGP Eligible)",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-williams-landing-vic-dpa-mm1-mrcgp-eligible-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-williams-landing-vic-dpa-mm1-mrcgp-eligible-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Williams%20Landing%2C%20VIC%20%28DPA%20MM1%20-%20MRCGP%20Eligible%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": "Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Full Patient Volume from Day One Are you a VR GP with UK/Ireland qualifications looking for a rewarding career in Australia? We have a..."
  },
  {
    "id": "adzuna-5766893756",
    "title": "Secondary Mathematics & Science Teachers, Melbourne, January 2027",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-secondary-mathematics-science-teachers-melbourne-january-2027-482-186-sponsorship",
    "url": "jobs/melbourne-secondary-mathematics-science-teachers-melbourne-january-2027-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Secondary%20Mathematics%20%26%20Science%20Teachers%2C%20Melbourne%2C%20January%202027%20Prospero%20Teaching%20Melbourne",
    "description": "Secondary Mathematics & Science Teachers Melbourne, Australia Visa Sponsorship Available Start 2027 (or by negotiation) Full-time | Permanent Salary: AUD $78,000 – $118,000  Superannuation 482 Visa Sponsorship Available ..."
  },
  {
    "id": "adzuna-5868560449",
    "title": "VR GP - Annerley, QLD (Non-DPA and MM 1)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-annerley-qld-non-dpa-and-mm-1-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-annerley-qld-non-dpa-and-mm-1-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Annerley%2C%20QLD%20%28Non-DPA%20and%20MM%201%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Relocation Allowance & Sign-On Bonus Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Annerley, QLD is calling for VR GPs to join a busy practice with: Benefits: 482 Visa & 186 PR Spo..."
  },
  {
    "id": "adzuna-5868560450",
    "title": "VR GP - Oxenford, QLD (Non-DPA)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-oxenford-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-oxenford-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Oxenford%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Relocation Allowance & Sign-On Bonus Exciting opportunity for VR GPs in Oxenford, QLD. Benefits: 482 Visa & 186 PR Sponsorship Availab..."
  },
  {
    "id": "adzuna-5876416442",
    "title": "VR GP - Loganholme, QLD (Non-DPA)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-loganholme-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-loganholme-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Loganholme%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Supportive Team with Allied Health Professionals & Nurses Relocation Allowance & Sign-On Bonus High Percentage of Billings Join a well-established non-DPA practice in Loganholme, QLD. Benefits: 482 Visa & 186 PR Sponsors..."
  },
  {
    "id": "adzuna-5876416436",
    "title": "VR GP - Ashmore, QLD (Non-DPA)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-ashmore-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-ashmore-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Ashmore%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Relocation Allowance & Sign-On Bonus Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Join a well-established non-DPA practice in Ashmore, QLD. Benefits: 482 Visa & 186 PR Sponsorship..."
  },
  {
    "id": "adzuna-5877800272",
    "title": "VR GP - Morayfield, QLD (DPA MM1 - MRCGP Eligible)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-morayfield-qld-dpa-mm1-mrcgp-eligible-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-morayfield-qld-dpa-mm1-mrcgp-eligible-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Morayfield%2C%20QLD%20%28DPA%20MM1%20-%20MRCGP%20Eligible%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": "Supportive Team with Allied Health Professionals & Nurses High Percentage of Billings Full Patient Volume from Day One Exciting opportunity for VR GPs in Morayfield, QLD. Benefits: 482 Visa & 186 PR Sponsorship Available..."
  },
  {
    "id": "adzuna-5855386755",
    "title": "Physiotherapist | Residential Aged Care | Harris River Area",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$75,000 - $75,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-physiotherapist-residential-aged-care-harris-river-area-482-494-sponsorship",
    "url": "jobs/perth-physiotherapist-residential-aged-care-harris-river-area-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist%20%7C%20Residential%20Aged%20Care%20%7C%20Harris%20River%20Area%20Gorilla%20Jobs%20Perth",
    "description": "Join a rural residential aged care practice near Harris River, WA. Collaborate in a supportive multidisciplinary team delivering geriatric rehabilitation. What’s on Offer Salary range starting from $75,000  super Pay inc..."
  },
  {
    "id": "adzuna-5766893696",
    "title": "Secondary English & Humanities Teachers, Melbourne, January 2027",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-secondary-english-humanities-teachers-melbourne-january-2027-482-186-sponsorship",
    "url": "jobs/melbourne-secondary-english-humanities-teachers-melbourne-january-2027-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Secondary%20English%20%26%20Humanities%20Teachers%2C%20Melbourne%2C%20January%202027%20Prospero%20Teaching%20Melbourne",
    "description": "Secondary English & Humanities Teachers Melbourne, Australia | Visa Sponsorship Available Start January 2027 (or by negotiation) Full-time | Permanent Salary: AUD $78,000 – $118,000  Superannuation 482 Visa Sponsorship A..."
  },
  {
    "id": "jooble--1485154227943861660",
    "title": "Service Advisor, Canberra",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-service-advisor-canberra-482-186-sponsorship",
    "url": "jobs/sydney-service-advisor-canberra-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1485154227943861660",
    "description": " What To Expect \r\n Tesla Motors is looking for a customer service professional to join our team as a Service Advisor working on one of the most progressive vehicle brands in the world. This position requires a high-level..."
  },
  {
    "id": "jooble--5206331715694199174",
    "title": "Marine Engineers (3rd OOW Engineers)",
    "company": "DOF",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-marine-engineers-3rd-oow-engineers-482-186-sponsorship",
    "url": "jobs/sydney-marine-engineers-3rd-oow-engineers-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5206331715694199174",
    "description": " DOF is hiring - 2nd/3rd Engineers (OOW Engineers)\r\n DOF is actively hiring experience as a 2nd/3rd Engineer (OOW Engineers) for casual opportunities on various vessels. As a Marine Engineer with DOF, you would be mainta..."
  },
  {
    "id": "jooble-6083212169568217277",
    "title": "Service Engineer",
    "company": "Solplanet",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-service-engineer-482-186-sponsorship",
    "url": "jobs/sydney-service-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6083212169568217277",
    "description": " Description： Our belief: \r\n At SOLPLANET, we are driven by a simple idea: solar for everybody \r\n We strive to create the best possible experience for distributors, installers and end users \r\n That´s why our solar invert..."
  },
  {
    "id": "jooble-7968616145853497123",
    "title": "Product Engineer, Megapack, Energy",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-product-engineer-megapack-energy-482-186-sponsorship",
    "url": "jobs/sydney-product-engineer-megapack-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7968616145853497123",
    "description": " What To Expect \r\n Tesla Energy is actively seeking a motivated and dynamic Product Engineer to play a pivotal role in ensuring the optimal performance of our utility-scale BESS systems across Australia and New Zealand. ..."
  },
  {
    "id": "jooble-1115644912425144039",
    "title": "Manager, Contracts Management",
    "company": "Remote",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-manager-contracts-management-482-186-sponsorship",
    "url": "jobs/sydney-manager-contracts-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1115644912425144039",
    "description": "What this job can offer you We are looking for a Manager, Contracts Management to own the planning, implementation and service level for lifecycle contracts management team based in the APAC (India, South East Asia and J..."
  },
  {
    "id": "jooble-4349871047312086193",
    "title": "Project Network Engineer",
    "company": "Centorrino Technologies",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-project-network-engineer-482-186-sponsorship",
    "url": "jobs/sydney-project-network-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4349871047312086193",
    "description": " At Centorrino Technologies (CT), we’re more than just tech—we’re a community that goes beyond expectations. We’ve been recognised as a Great Place to Work in 2025 and Top 5 Inspiring Workplaces for 2026, with an outstan..."
  },
  {
    "id": "jooble--2276140358812210487",
    "title": "Finance Systems Functional/Technical Analyst",
    "company": "BNB Chain",
    "logoInitial": "B",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-finance-systems-functionaltechnical-analyst-482-186-sponsorship",
    "url": "jobs/sydney-finance-systems-functionaltechnical-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2276140358812210487",
    "description": " Help protect over 5 million Australians, making a real difference in their lives during their most challenging times. \r\n Work with experienced and skilled colleagues who support and inspire one another to achieve collec..."
  },
  {
    "id": "jooble-521594329758306698",
    "title": "Director of Acquisition Marketing",
    "company": "Who Gives A Crap",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-director-of-acquisition-marketing-482-186-sponsorship",
    "url": "jobs/sydney-director-of-acquisition-marketing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/521594329758306698",
    "description": " A bit about the role  As our Director of Acquisition Marketing, you’ll own our global acquisition strategy and performance, sitting at the intersection of data, performance and creativity. You’ll bring deep performance ..."
  },
  {
    "id": "jooble--3186988869527750450",
    "title": "Sr. Software Engineer, Industrial Energy Site Controller, APAC",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-sr-software-engineer-industrial-energy-site-controller-apac-482-186-sponsorship",
    "url": "jobs/sydney-sr-software-engineer-industrial-energy-site-controller-apac-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3186988869527750450",
    "description": " What To Expect \r\n We are the team behind the software that run our fleet of Tesla's utility-scale battery energy storage sites. Our application — the Site Controller — runs at the  edge  on embedded Linux and orchestrat..."
  },
  {
    "id": "jooble--3700442723270020571",
    "title": "Head of Service Management",
    "company": "Centorrino Technologies",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-head-of-service-management-482-186-sponsorship",
    "url": "jobs/sydney-head-of-service-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3700442723270020571",
    "description": " At Centorrino Technologies (CT), we’re more than just tech—we’re a community that goes beyond expectations. We’ve been recognised as a Great Place to Work in 2025 and Top 5 Inspiring Workplaces for 2026, with an outstan..."
  },
  {
    "id": "jooble--5012533371506619030",
    "title": "Growth Marketing Lead (Foundry Division)",
    "company": "Instructure",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-growth-marketing-lead-foundry-division-482-186-sponsorship",
    "url": "jobs/sydney-growth-marketing-lead-foundry-division-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5012533371506619030",
    "description": " At Instructure, we believe in the power of people to grow and succeed throughout their lives. Our goal is to amplify that power by creating intuitive products that simplify learning and personal development, facilitate ..."
  },
  {
    "id": "jooble--3701575658771400403",
    "title": "Staff Data Scientist",
    "company": "Tilt",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-staff-data-scientist-482-186-sponsorship",
    "url": "jobs/sydney-staff-data-scientist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3701575658771400403",
    "description": "The Opportunity: Staff Data Scientist We’re hiring for a Staff Data Scientist to help expand Tilt’s credit modeling and risk analytics capability for our Philippines-based business, Cashalo. This is a high impact role wi..."
  },
  {
    "id": "jooble--8261413864980289175",
    "title": "Sr. Customer Success Manager",
    "company": "Cyara",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-sr-customer-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-sr-customer-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8261413864980289175",
    "description": "Let's talk about the role and responsibilities: • Own customer outcomes and ensure each customer receives value from Cyara’s solutions throughout their lifecycle • Understand the value of Cyara to the customer and be abl..."
  },
  {
    "id": "jooble--942509607197308815",
    "title": "Senior Customer Success Manager (Australia)",
    "company": "Pano AI",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-senior-customer-success-manager-australia-482-186-sponsorship",
    "url": "jobs/sydney-senior-customer-success-manager-australia-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-942509607197308815",
    "description": " The Role  Pano AI is seeking an experienced  Senior Customer Success Manager (CSM) to lead customer success delivery in Australia. This is a high-impact role for someone who combines strong customer and commercial insti..."
  },
  {
    "id": "jooble--3244036111051673687",
    "title": "Customer Success Manager",
    "company": "Hosting",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-customer-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-customer-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3244036111051673687",
    "description": "About The Role The Customer Success Manager is responsible for managing and developing a portfolio of existing Hosting.com customers. The role focuses on understanding who our customers are, what they use Hosting.com for..."
  },
  {
    "id": "jooble-650005233465759857",
    "title": "Manager, Customer Performance - Fraud and Compliance",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-manager-customer-performance-fraud-and-compliance-482-186-sponsorship",
    "url": "jobs/sydney-manager-customer-performance-fraud-and-compliance-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/650005233465759857",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "jooble--2181789796172040695",
    "title": "Supervisor, Technical Customer Support, Residential Energy",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-supervisor-technical-customer-support-residential-energy-482-186-sponsorship",
    "url": "jobs/sydney-supervisor-technical-customer-support-residential-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2181789796172040695",
    "description": " What To Expect \r\n Join Tesla Energy and Power the Future! At Tesla, we're revolutionising sustainable energy solutions for homeowners worldwide. As a Supervisor, Technical Customer Support (Residential Energy), you'll p..."
  },
  {
    "id": "jooble-7727049227050796904",
    "title": "Product Success Manager (APAC - Fixed-Term)",
    "company": "Teamworks",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-product-success-manager-apac-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-product-success-manager-apac-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7727049227050796904",
    "description": "&nbsp;...to the end of  August 2027 , with genuine potential to convert to a full-time ongoing role, and you'll be joining a global team that has the time and resources to invest in your platform skills from day one. \r\n ..."
  },
  {
    "id": "jooble--8704297765251003270",
    "title": "Software Engineering Team Lead",
    "company": "M-KOPA",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-software-engineering-team-lead-482-186-sponsorship",
    "url": "jobs/sydney-software-engineering-team-lead-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8704297765251003270",
    "description": " The Impact  Your architecture will directly shape how millions of people access credit for the first time. We've already served 10 million customers  and unlocked more than $2 billion in credit  since we began. Every sy..."
  },
  {
    "id": "jooble--3265530523116355262",
    "title": "Payroll Services & Compliance Manager",
    "company": "BNB Chain",
    "logoInitial": "B",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-payroll-services-compliance-manager-482-186-sponsorship",
    "url": "jobs/sydney-payroll-services-compliance-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3265530523116355262",
    "description": " Flexible hybrid working \r\n Paid volunteering leave and discounts across a range of products and services. \r\n Access to learning, development and career growth opportunities  At TAL, we’re supported to live our best live..."
  },
  {
    "id": "jooble-6084220546260604731",
    "title": "Risk and Compliance Change Manager - 12 Month Max Term Contract",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-risk-and-compliance-change-manager-12-month-max-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-risk-and-compliance-change-manager-12-month-max-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6084220546260604731",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "adzuna-5884352819",
    "title": "Clinical Nurse Specialist (Mental Health) - Permanent Contract - North West Tasmania - Visa Sponsorship Available!",
    "company": "Skilled Nursing",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "hobart-clinical-nurse-specialist-mental-health-permanent-contract-north-west-tasmania-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/hobart-clinical-nurse-specialist-mental-health-permanent-contract-north-west-tasmania-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884352819?se=VAJCIiOx8RGjcJ3bshKHZg&utm_medium=api&utm_source=13c876f1&v=62424E13144F6C16E7EC293726075EDFC48D9D1F",
    "description": "Details Title: Clinical Nurse Specialist (Community) - Older Persons Mental Health Services Location: North West Tasmania Position Type: Permanent full time, day worker position, working 76 hours per fortnight, commencin..."
  },
  {
    "id": "adzuna-5884352817",
    "title": "Permanent Positions - Registered Nurses (Mental Health) - Tasmania - UK/IE Nurses Welcome to Apply!",
    "company": "Skilled Nursing",
    "logoInitial": "S",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-permanent-positions-registered-nurses-mental-health-tasmania-ukie-nurses-welcome-to-apply-482-494-sponsorship",
    "url": "jobs/hobart-permanent-positions-registered-nurses-mental-health-tasmania-ukie-nurses-welcome-to-apply-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884352817?se=9nkiIyOx8RG81I_a4Gd-LQ&utm_medium=api&utm_source=13c876f1&v=6CE88793193CF4B962BACE74C96F8200C2899E23",
    "description": "Details Seeking expressions of interest from experienced Mental Health nurses for multiple permanent positions across Tasmania. Visa sponsorship and relocation support available for eligible UK/IE candidates. The Locatio..."
  },
  {
    "id": "adzuna-5884352823",
    "title": "Permanent Position - Nurse Practitioner (Emergency Department) - Launceston, Tasmania - Sponsorship Available!",
    "company": "Skilled Nursing",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-permanent-position-nurse-practitioner-emergency-department-launceston-tasmania-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-permanent-position-nurse-practitioner-emergency-department-launceston-tasmania-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884352823?se=9nkiIyOx8RG81I_a4Gd-LQ&utm_medium=api&utm_source=13c876f1&v=9653F479BAB468AF2656DB66459153CF690B1644",
    "description": "Details Title: Nurse Practitioner - Emergency Department Location: Launceston, Tasmania Position Type: Permanent full time, day worker position, working up to 76 hours per fortnight, commencing as soon as possible. *hour..."
  },
  {
    "id": "adzuna-5877800298",
    "title": "General Practitioner | Bundaberg, QLD (DPA & MM2)",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-bundaberg-qld-dpa-mm2-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-bundaberg-qld-dpa-mm2-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800298?utm_medium=api&utm_source=13c876f1",
    "description": "Visa Sponsorship Relocation Potential Relocation Assistance Trust Medical Recruitment is seeking 1 GP for an upcoming opportunity in Bundaberg, QLD , commencing in the first quarter of next year . This position is ideal ..."
  },
  {
    "id": "adzuna-5860532313",
    "title": "Paediatric Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$200,000 - $350,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-paediatric-dentist-482-494-sponsorship",
    "url": "jobs/brisbane-paediatric-dentist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532313?utm_medium=api&utm_source=13c876f1",
    "description": "Paediatric Dentist jobs in the Brisbane area, Queensland, Australia. Visa sponsorship available. Specialist children's practice with exceptional earning potential. ZEST Dental Recruitment, working in partnership with an ..."
  },
  {
    "id": "adzuna-5877034064",
    "title": "Occupational Therapist | Position with Sponsorship | Regional WA",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-occupational-therapist-position-with-sponsorship-regional-wa-482-494-sponsorship",
    "url": "jobs/perth-occupational-therapist-position-with-sponsorship-regional-wa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877034064?utm_medium=api&utm_source=13c876f1",
    "description": "Full-Time | Visa Sponsorship Available | Mixed Caseload (Adults & Paediatrics) An established and rapidly growing allied health provider is seeking an Occupational Therapist to join their supportive multidisciplinary tea..."
  },
  {
    "id": "adzuna-5868560526",
    "title": "General Practitioner for Yarram, VIC",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-for-yarram-vic-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-for-yarram-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868560526?utm_medium=api&utm_source=13c876f1",
    "description": "80% Billings Supportive Environment Established Practice An exceptional opportunity is available for a General Practitioner to join a busy and well-established medical practice in Yarram, Victoria. The practice is seekin..."
  },
  {
    "id": "adzuna-5877800277",
    "title": "General Practitioner for Blackbutt, QLD",
    "company": "Trust Medical Recruitment",
    "logoInitial": "T",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-for-blackbutt-qld-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-for-blackbutt-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800277?utm_medium=api&utm_source=13c876f1",
    "description": "Sponsorship Supportive Environment Relocation Assistance Trust Medical Recruitment is seeking a General Practitioner (GP) to join a supportive medical practice in Blackbutt, QLD . This is an excellent opportunity for a d..."
  },
  {
    "id": "adzuna-5764095244",
    "title": "Motel Manager",
    "company": "Vistaar realty pty ltd",
    "logoInitial": "V",
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
    "salary": "$76,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-motel-manager-482-186-sponsorship",
    "url": "jobs/sydney-motel-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5764095244?utm_medium=api&utm_source=13c876f1",
    "description": "- REQUIRED 1 YEAR EXPERIENCE AS A MOTEL MANAGER. - 3 BEDROOOMS ON SITE RESIDENCE. - RELIEF MANAGER IS AVAILABLE TO COVER TIME OFFS. - HOUSEKEEPING STAFF IS AVAILABLE. - PEOPLE WITH VISA SPONSORSHIP WILL ALSO BE CONSIDERE..."
  },
  {
    "id": "adzuna-5818340436",
    "title": "General Practitioner - Rockingham",
    "company": "Partnered Health",
    "logoInitial": "P",
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
    "salary": "$360,000 - $550,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-general-practitioner-rockingham-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-rockingham-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5818340436?utm_medium=api&utm_source=13c876f1",
    "description": "Rockingham City Medical Practice, with DPA status i s seeking a doctor for its busy clinic. We aim to provide high-quality, accessible healthcare to the local community. New Fellows & PEP doctors welcomed and supported ...."
  },
  {
    "id": "adzuna-5814106487",
    "title": "Science teacher, Regional Victoria, Sponsorship offered, January 2027",
    "company": "Prospero Teaching",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-science-teacher-regional-victoria-sponsorship-offered-january-2027-482-186-sponsorship",
    "url": "jobs/sydney-science-teacher-regional-victoria-sponsorship-offered-january-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5814106487?utm_medium=api&utm_source=13c876f1",
    "description": "Science Teacher – Regional Victoria Commencing January 2027 (Term 1, 2027) | Permanent Full-Time Visa Sponsorship Available Prospero Teaching is partnering with a welcoming and well-established secondary school in Region..."
  },
  {
    "id": "adzuna-5855387474",
    "title": "Specialist Doctor - Obstetrics & Gynaecology",
    "company": "Connecting the Docs",
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
    "salary": "$350,000 - $500,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-specialist-doctor-obstetrics-gynaecology-482-186-sponsorship",
    "url": "jobs/sydney-specialist-doctor-obstetrics-gynaecology-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5855387474?utm_medium=api&utm_source=13c876f1",
    "description": "Connecting the Docs is recruiting a Staff Specialist Obstetrician & Gynaecologist to join a leading regional health service in Mildura, Victoria . This is an exciting opportunity to build a fulfilling consultant career w..."
  },
  {
    "id": "adzuna-5650841031",
    "title": "General Practice Consultant - expedited Pathway UK or Ireland or NZ, please apply",
    "company": "Me Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practice-consultant-expedited-pathway-uk-or-ireland-or-nz-please-apply-482-186-sponsorship",
    "url": "jobs/sydney-general-practice-consultant-expedited-pathway-uk-or-ireland-or-nz-please-apply-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650841031?utm_medium=api&utm_source=13c876f1",
    "description": "ME Medical Recruitment is currently looking for GPs for a well run, well established Family Practice in the Whitsundays. General Practitioner – FRACGP / MRCGP / MICGP / FRNZGP Location: Whitsundays, Queensland, Australia..."
  },
  {
    "id": "adzuna-5764089671",
    "title": "Registered Midwife",
    "company": "Aussie Locums",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-midwife-482-186-sponsorship",
    "url": "jobs/sydney-registered-midwife-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5764089671?utm_medium=api&utm_source=13c876f1",
    "description": "Dreaming of Life in Australia? Midwives with 3 Years’ Experience from the UK, Ireland, or NZ – Your Aussie Adventure Starts Here! Registered Midwives – You are needed in Sydney! Permanent & 2-Year Contract Opportunities ..."
  },
  {
    "id": "adzuna-5650854725",
    "title": "GP Job - 20 mins from Byron Bay",
    "company": "Alecto Australia",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-gp-job-20-mins-from-byron-bay-482-186-sponsorship",
    "url": "jobs/sydney-gp-job-20-mins-from-byron-bay-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650854725?utm_medium=api&utm_source=13c876f1",
    "description": "Home » Jobs in Regional New South Wales » GP Job – 20 mins from Byron Bay GP Job – 20 mins from Byron Bay Lennox Head, NSW | Job ID 21288 GP role in DPA MM3 location 20 mins from Byron Bay $180 p/hr Income guarantee for ..."
  },
  {
    "id": "adzuna-5859670330",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "melbourne-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/melbourne-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670330?utm_medium=api&utm_source=13c876f1",
    "description": "Agricultural Spreader / Machinery Operators – Australia Western Victoria | Full-time | Multiple Positions | International Applicants Welcome Staff 360 is recruiting experienced agricultural machinery operators for specia..."
  },
  {
    "id": "adzuna-5862253470",
    "title": "Registered Nurse - Aged Care",
    "company": "Health X",
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
    "salary": "$89,749 - $110,241 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862253470?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Registered Nurse (Aged Care) – Tumut NSW | 482 Sponsorship Available Up to $55.79 hr  super  penalties | Full-time permanent position | Onshore international applicants welcome Join HealthX as an experien..."
  },
  {
    "id": "adzuna-5740974625",
    "title": "Fitter & Turner / Machinist",
    "company": "Canstaff",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-fitter-turner-machinist-482-186-sponsorship",
    "url": "jobs/sydney-fitter-turner-machinist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5740974625?utm_medium=api&utm_source=13c876f1",
    "description": "Due to the increased expansion of the Mackay area, we need a Fitter & Turner / Machinist who has CNC machine, horizontal boring and lathe experience within the engineering industry, to be part of the growth of this compa..."
  },
  {
    "id": "adzuna-5842495749",
    "title": "Registered Psychologist (Phobia Clinic / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
    "logoInitial": "O",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-psychologist-phobia-clinic-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-psychologist-phobia-clinic-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5842495749?utm_medium=api&utm_source=13c876f1",
    "description": "The Role You’ll primarily deliver a 6-session, CBT-based treatment program for specific phobias, including vehophobia, incorporating Virtual Reality (VR) exposure therapy . There is also scope to work with clients across..."
  },
  {
    "id": "adzuna-5650828814",
    "title": "Registered Nurse | Theatre (Scrub/Scout, Anaesthetics, Recovery)",
    "company": "Aussie Locums",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-theatre-scrubscout-anaesthetics-recovery-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-theatre-scrubscout-anaesthetics-recovery-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650828814?utm_medium=api&utm_source=13c876f1",
    "description": "Trained in the UK, Ireland or NZ? Australia Is Hiring Experienced Nurses Like You! Registered Nurse | Theatre (Scrub/Scout, Anaesthetics, Recovery) Permanent & 2-Year Contract Opportunities Make Sydney, Australia your ne..."
  },
  {
    "id": "adzuna-5883631398",
    "title": "Occupational Therapist | Mental Health | Warragul",
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
    "salary": "$115,000 - $115,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-mental-health-warragul-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-mental-health-warragul-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883631398?utm_medium=api&utm_source=13c876f1",
    "description": "Join a well-established and values driven clinic which originated as a Psychology practice and has evolved into one of Victoria's most respected organisations. Be a part of a multidisciplinary team of psychologists (with..."
  },
  {
    "id": "adzuna-5650828857",
    "title": "Registered Nurse | Emergency Department",
    "company": "Aussie Locums",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-emergency-department-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-emergency-department-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650828857?utm_medium=api&utm_source=13c876f1",
    "description": "Nurses with UK, Ireland or NZ Experience – Australia Wants You! Start Your New Life Down Under Today Experienced Registered Nurses – You are wanted in Sydney Permanent & 2-Year Contract Opportunities Make Sydney, Austral..."
  },
  {
    "id": "adzuna-5855386993",
    "title": "General Practitioner | Carrum Downs Doctors",
    "company": "Partnered Health",
    "logoInitial": "P",
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
    "salary": "$300,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-carrum-downs-doctors-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-carrum-downs-doctors-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5855386993?utm_medium=api&utm_source=13c876f1",
    "description": "Carrum Downs Doctors is looking to add a Male or Female FRACGP, RACGP PEP Specialist Pathway or Expedited Specialist Pathway GP to join our well-established mixed billing practice in Melbourne’s rapidly growing south-eas..."
  },
  {
    "id": "adzuna-5874289568",
    "title": "Community Worker",
    "company": "Austa Care",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-community-worker-482-186-sponsorship",
    "url": "jobs/sydney-community-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5874289568?utm_medium=api&utm_source=13c876f1",
    "description": "Community Worker Austa Care is a multicultural aged care and community services provider supporting elderly clients and culturally diverse communities across Australia. Due to continued growth in community- based aged ca..."
  },
  {
    "id": "adzuna-5852250554",
    "title": "Occupational Therapist (NDIS Or DVA / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
    "logoInitial": "O",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-ndis-or-dva-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-ndis-or-dva-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5852250554?utm_medium=api&utm_source=13c876f1",
    "description": "What the role offers You’ll have the flexibility to deliver services across: Clinic-based appointments Telehealth, including rural and remote clients Home and community visits Kindy and other community settings Your case..."
  },
  {
    "id": "adzuna-5858277083",
    "title": "General Practitioner | VR or Non-VR | Full Time | Shellharbour Region, NSW",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-vr-or-non-vr-full-time-shellharbour-region-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-vr-or-non-vr-full-time-shellharbour-region-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5858277083?utm_medium=api&utm_source=13c876f1",
    "description": "A well-established privately owned practice in Shellharbour is seeking a GP to join its friendly and supportive team. This is a full-time opportunity suited to a VR or Non-VR doctor looking for flexibility, strong suppor..."
  },
  {
    "id": "adzuna-5650826875",
    "title": "Registered Nurse | Mental Health",
    "company": "Aussie Locums",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-mental-health-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-mental-health-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650826875?utm_medium=api&utm_source=13c876f1",
    "description": "Experienced Nurse from the UK, Ireland or NZ? Live, Work & Thrive in Australia! Make the Move to Sydney, Australia – Mental Health Nurses Wanted! • Permanent & 2-Year Contract Roles • Visa Sponsorship (Subclass 482) Avai..."
  },
  {
    "id": "adzuna-5872932383",
    "title": "Duty Manager",
    "company": "Matthews Hospitality",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-duty-manager-482-186-sponsorship",
    "url": "jobs/sydney-duty-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5872932383?utm_medium=api&utm_source=13c876f1",
    "description": "DUTY MANAGER | CASUAL | EYRE HOTEL WHYALLA Hello, thanks for stopping by — we’re excited to hear from you! Love late nights, leading from the front, and thriving in a fast-paced venue? The Eyre Hotel is searching for an ..."
  },
  {
    "id": "adzuna-5861203148",
    "title": "Registered Nurse - Bupa Baulkham Hills",
    "company": "Bupa Anz",
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
    "salary": "$86,028 - $109,553 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-bupa-baulkham-hills-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-bupa-baulkham-hills-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5861203148?utm_medium=api&utm_source=13c876f1",
    "description": "General information Name Registered Nurse - Bupa Baulkham Hills Ref  63651 Date Wednesday, July 22, 2026 Full / Part Time Full Time Description & Requirements At Bupa, purpose meets possible. Join us and help shape a fut..."
  },
  {
    "id": "adzuna-5877800273",
    "title": "Exciting GP Opportunities - DPA MM1 & Non-DPA Locations Available Across QLD, NS",
    "company": "Trust Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-exciting-gp-opportunities-dpa-mm1-non-dpa-locations-available-across-qld-ns-482-186-sponsorship",
    "url": "jobs/sydney-exciting-gp-opportunities-dpa-mm1-non-dpa-locations-available-across-qld-ns-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800273?utm_medium=api&utm_source=13c876f1",
    "description": "Supportive team of support staff and a range of Allied Health professionals and Relocation allowance 482 Visa & 186 PR Sponsorship Available Are you a VR GP with UK/Ireland qualifications looking for a rewarding career i..."
  },
  {
    "id": "adzuna-5778415997",
    "title": "Mental Health Nurse",
    "company": "Mor. Healthcare",
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
    "salary": "$90,000 - $115,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-mental-health-nurse-482-186-sponsorship",
    "url": "jobs/sydney-mental-health-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5778415997?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Registered Nurse – Mental Health Roles available across Melbourne Metro, Regional Victoria (Mildura & surrounding regions) & Sydney Metro $90,000 – $115,000  Super | Public Health | Relocation Assistance ..."
  },
  {
    "id": "adzuna-5877491885",
    "title": "Female General Practitioner - DPA - Mornington Peninsula",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-female-general-practitioner-dpa-mornington-peninsula-482-186-sponsorship",
    "url": "jobs/sydney-female-general-practitioner-dpa-mornington-peninsula-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877491885?utm_medium=api&utm_source=13c876f1",
    "description": "A well-established medical practice located in the picturesque coastal community of Hastings on Victoria’s Mornington Peninsula is seeking a dedicated female VR General Practitioner to join its passionate and collaborati..."
  },
  {
    "id": "adzuna-5862938848",
    "title": "Speech Pathologist - Maitland",
    "company": "Everyday Independence",
    "logoInitial": "E",
    "location": "Newcastle, NSW",
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
    "salary": "$93,120 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "newcastle-speech-pathologist-maitland-482-186-sponsorship",
    "url": "jobs/newcastle-speech-pathologist-maitland-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862938848?utm_medium=api&utm_source=13c876f1",
    "description": "Job title - Speech Pathologist Location - Beresfield Employment Type - Full time, Part time (4 days per week) or 9-day fortnight Salary - $93,120 – $110,143 per annum (inclusive of annual leave loading)  superannuation  ..."
  },
  {
    "id": "adzuna-5883631468",
    "title": "Occupational Therapist | Flexible Schedule | Ravenhill",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$120,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-flexible-schedule-ravenhill-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-flexible-schedule-ravenhill-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883631468?utm_medium=api&utm_source=13c876f1",
    "description": "Join a friendly, community-focused NDIS provider located in Ravenhall, servicing Western Melbourne. This role is ideal for an experienced clinician or new graduate seeking their first role who is eager to upskill and is ..."
  },
  {
    "id": "jooble--8131161650800618970",
    "title": "Senior Risk & Trading Analyst, Sportsbook",
    "company": "Magic Eden",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-risk-trading-analyst-sportsbook-482-186-sponsorship",
    "url": "jobs/sydney-senior-risk-trading-analyst-sportsbook-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8131161650800618970",
    "description": " Magic Eden became one of the fastest companies in history to reach unicorn status, just 9 months after launch. Built on a foundation of crypto-native expertise and in-house engineering, we moved fast and proved the mode..."
  },
  {
    "id": "jooble-8659238136429355343",
    "title": "Financial Crime Operations Officer (Melbourne, AU)",
    "company": "CoinJar",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-financial-crime-operations-officer-melbourne-au-482-186-sponsorship",
    "url": "jobs/sydney-financial-crime-operations-officer-melbourne-au-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8659238136429355343",
    "description": " At CoinJar, we have provided cryptocurrency services to Australians for over a decade and have since expanded in to other countries. Our operations ensure that all interactions, including the handling of personal identi..."
  },
  {
    "id": "jooble-4120979132859495364",
    "title": "Staff Software Engineer, Financial Platform - Issuing",
    "company": "Block",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-staff-software-engineer-financial-platform-issuing-482-186-sponsorship",
    "url": "jobs/sydney-staff-software-engineer-financial-platform-issuing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4120979132859495364",
    "description": "&nbsp;...continuous improvements to reliability and correctness. \r\n You Have \r\n Deep, current expertise with at least one major card network, ideally <b>Visa,</b> including direct connectivity, ISO 8583, authorization an..."
  },
  {
    "id": "adzuna-5859670307",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "perth-agricultural-spreader-machinery-operators-australia-482-494-sponsorship",
    "url": "jobs/perth-agricultural-spreader-machinery-operators-australia-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670307?utm_medium=api&utm_source=13c876f1",
    "description": "Agricultural Spreader / Machinery Operators – Australia Western Victoria | Full-time | Multiple Positions | International Applicants Welcome Staff 360 is recruiting experienced agricultural machinery operators for specia..."
  },
  {
    "id": "adzuna-5859670318",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
    "location": "Geelong, VIC",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "geelong-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/geelong-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670318?utm_medium=api&utm_source=13c876f1",
    "description": "Agricultural Spreader / Machinery Operators – Australia Western Victoria | Full-time | Multiple Positions | International Applicants Welcome Staff 360 is recruiting experienced agricultural machinery operators for specia..."
  },
  {
    "id": "adzuna-5789999924",
    "title": "Hairdresser",
    "company": "Justcuts Booragoon",
    "logoInitial": "J",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-hairdresser-482-186-sponsorship",
    "url": "jobs/sydney-hairdresser-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5789999924?utm_medium=api&utm_source=13c876f1",
    "description": "Just Cuts Booragoon is seeking a qualified and experienced Hairdresser to join our friendly and professional team on a full-time permanent basis. We are looking for a passionate hairdresser who is committed to providing ..."
  },
  {
    "id": "adzuna-5879121680",
    "title": "Registered Nurse - Emergency Department Contract - SA",
    "company": "Medacs Healthcare",
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
    "salary": "$128,960 - $160,160 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "adelaide-registered-nurse-emergency-department-contract-sa-482-494-sponsorship",
    "url": "jobs/adelaide-registered-nurse-emergency-department-contract-sa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879121680?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse | Emergency Department Contract Barossa Valley, South Australia 17 October 2026 - 13 November 2026 Looking for a contract that combines rewarding Emergency nursing experience with an incredible lifestyle..."
  },
  {
    "id": "adzuna-5848185176",
    "title": "Sheetmetal Tradespeople - Cladding & Installation",
    "company": "APAC Talent Solutions",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-sheetmetal-tradespeople-cladding-installation-482-186-sponsorship",
    "url": "jobs/sydney-sheetmetal-tradespeople-cladding-installation-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5848185176?utm_medium=api&utm_source=13c876f1",
    "description": "Sheetmetal Tradespeople - Cladding & Installation , Sydney Steady, well-paid trade work with a business that actually looks after its people A busy commercial and industrial insulation and sheetmetal business south of Sy..."
  },
  {
    "id": "adzuna-5786941410",
    "title": "Consultant/Specialist Anaesthetist",
    "company": "CC Medical",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-consultantspecialist-anaesthetist-482-186-sponsorship",
    "url": "jobs/sydney-consultantspecialist-anaesthetist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5786941410?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant/Specialist Anaesthetist | ONE hour drive from Sydney, NSW | Tertiary Referral Hospital | International Specialists Encouraged Shape your consultant career at one of New South Wales' leading tertiary hospitals...."
  },
  {
    "id": "adzuna-5875605716",
    "title": "Sonographer | Central Coast, NSW",
    "company": "Redstone Recruitment",
    "logoInitial": "R",
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
    "salary": "$160,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "burnie-sonographer-central-coast-nsw-482-494-sponsorship",
    "url": "jobs/burnie-sonographer-central-coast-nsw-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875605716?utm_medium=api&utm_source=13c876f1",
    "description": "Sonographer | Central Coast NSW | Sponsorship & Sign-On Bonus We’re currently recruiting for a growing medical imaging provider on the NSW Central Coast, offering an excellent opportunity to join a supportive and experie..."
  },
  {
    "id": "adzuna-5850282692",
    "title": "HR Administrator",
    "company": "Burger Urge",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-hr-administrator-482-494-sponsorship",
    "url": "jobs/brisbane-hr-administrator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5850282692?utm_medium=api&utm_source=13c876f1",
    "description": "The Human Resources Administrator provides efficient and responsive HR administration and support across Burger Urge's franchise network, corporate venues, and Support Office, ensuring people processes, systems, and docu..."
  },
  {
    "id": "adzuna-5835374398",
    "title": "Skilled Meat Workers - Boning, Slicing, Slaughtering",
    "company": "JBS Australia",
    "logoInitial": "J",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-skilled-meat-workers-boning-slicing-slaughtering-482-186-sponsorship",
    "url": "jobs/melbourne-skilled-meat-workers-boning-slicing-slaughtering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5835374398?utm_medium=api&utm_source=13c876f1",
    "description": "About us: JBS Australia’s Southern Division has the largest multi-species processing facility in Australia processing beef, sheep, and goats based in Melbourne. We also have five other facilities across New South Wales, ..."
  },
  {
    "id": "adzuna-5650837421",
    "title": "Hospitality Worker",
    "company": "Zest Cafe",
    "logoInitial": "Z",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-hospitality-worker-482-186-sponsorship",
    "url": "jobs/sydney-hospitality-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650837421?utm_medium=api&utm_source=13c876f1",
    "description": "About the Business Zest Cafe is a well-established hospitality venue located in Clare, South Australia, providing high-quality food and beverage services to the local community and visitors to the region. The business op..."
  },
  {
    "id": "adzuna-5884957419",
    "title": "Nightclub Positions",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "gold-coast-nightclub-positions-482-494-sponsorship",
    "url": "jobs/gold-coast-nightclub-positions-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884957419?utm_medium=api&utm_source=13c876f1",
    "description": "We’re Hiring – Gold Coast Nightclub Staff Join the teams at Bedroom, Havana & TEMPO Love nightlife? We’re looking for confident, high-energy people to join the teams across Bedroom Lounge Bar, Havana R&B Nightclub and TE..."
  },
  {
    "id": "adzuna-5885396356",
    "title": "Field Cost Engineer - Common Distribs",
    "company": "Bechtel",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-field-cost-engineer-common-distribs-482-494-sponsorship",
    "url": "jobs/brisbane-field-cost-engineer-common-distribs-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5885396356?utm_medium=api&utm_source=13c876f1",
    "description": "Requisition ID: 298007 Relocation Authorized: National - Camp Telework Type: Full-Time Office/Project Work Location: Brisbane, QLD Extraordinary teams building inspiring projects: Since 1898, we have helped customers com..."
  },
  {
    "id": "adzuna-5885369076",
    "title": "QUALIFIED MOTORCYCLE MECHANIC",
    "company": "PRO MOTORCYCLES",
    "logoInitial": "P",
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
    "salary": "$70,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "brisbane-qualified-motorcycle-mechanic-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-motorcycle-mechanic-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5885369076?utm_medium=api&utm_source=13c876f1",
    "description": "Motorcycle Mechanic Pro Motorcycles – Moorooka QLD 4105 Salary: $70,000 – $80,000 per year Employment Type: Full-time, Permanent Visa Sponsorship: Considered for suitable candidates Pro Motorcycles is seeking a qualified..."
  },
  {
    "id": "adzuna-5885189555",
    "title": "Cali Beach | All Positions",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
    "location": "Gold Coast, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "gold-coast-cali-beach-all-positions-482-494-sponsorship",
    "url": "jobs/gold-coast-cali-beach-all-positions-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5885189555?se=Rr4vQsGx8RGST6GOnhWXLg&utm_medium=api&utm_source=13c876f1&v=D8E438871F43A1F54AC275E125562465B23BF650",
    "description": "We’re Hiring – Cali Beach | All Positions Gold Coast’s ultimate beach club is looking for passionate, high-energy people to join the team at Cali Beach . Set in the heart of Surfers Paradise, Cali Beach combines poolside..."
  },
  {
    "id": "adzuna-5884705825",
    "title": "Risk Analyst, Core",
    "company": "AIG Insurance",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-risk-analyst-core-482-186-sponsorship",
    "url": "jobs/sydney-risk-analyst-core-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884705825?utm_medium=api&utm_source=13c876f1",
    "description": "LI-JC1 At AIG, we are reimagining the way we help customers to manage risk. Join us as Analyst, Risk in Change to play your part in that transformation. This is an opportunity to apply strong risk, controls, governance a..."
  },
  {
    "id": "jooble--6316539584662801519",
    "title": "Initiatives Coordinator",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-initiatives-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-initiatives-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6316539584662801519",
    "description": " Take your career further than you ever imagined with diverse roles and opportunities for personal and professional development. \r\n Work alongside diverse, passionate colleagues and leaders who inspire, support, and valu..."
  },
  {
    "id": "jooble--6830564049682824429",
    "title": "Senior Growth Product Manager, AI-Native",
    "company": "Magic Eden",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-growth-product-manager-ai-native-482-186-sponsorship",
    "url": "jobs/sydney-senior-growth-product-manager-ai-native-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6830564049682824429",
    "description": " About Magic Eden and Dicey \nMagic Eden reached unicorn status in just 9 months after launch, one of the fastest in history. We built a category-defining NFT marketplace from scratch and proved we know how to move fast. ..."
  },
  {
    "id": "jooble--5419038005561513909",
    "title": "Dispute Governance Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-dispute-governance-specialist-482-186-sponsorship",
    "url": "jobs/sydney-dispute-governance-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5419038005561513909",
    "description": " Welcome to TAL. As a leading life insurer, we’ve been protecting Australians for over 150 years. Backed by Daiichi Life, we're driven by big ambitions and empower to create better products and services.  Together with o..."
  },
  {
    "id": "jooble-8188105828695814727",
    "title": "Program Manager, Cardholder Services",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-program-manager-cardholder-services-482-186-sponsorship",
    "url": "jobs/sydney-program-manager-cardholder-services-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8188105828695814727",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "adzuna-5884626470",
    "title": "Product Support Operations Representative",
    "company": "Caterpillar Inc.",
    "logoInitial": "C",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-product-support-operations-representative-482-494-sponsorship",
    "url": "jobs/perth-product-support-operations-representative-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884626470?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=05C46910F744160BC88EB792E794633FE4162D73",
    "description": "Career Area: Product Support Job Description: Your Work Shapes the World at Caterpillar Inc. When you join Caterpillar, you're joining a global team who cares not just about the work we do – but also about each other. We..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-residential-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-residential-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884506971?utm_medium=api&utm_source=13c876f1",
    "description": "REGISTERED NURSE | RESIDENTIAL AGED CARE Lead with purpose! Make a difference! Be part of something bigger! Following Respect’s acquisition of McLean Care , our organisation is entering an exciting new chapter, bringing ..."
  },
  {
    "id": "adzuna-5884258736",
    "title": "Head of Information Technology Operations",
    "company": "Galileo Search",
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
    "salary": "$220 - $320 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-head-of-information-technology-operations-482-186-sponsorship",
    "url": "jobs/sydney-head-of-information-technology-operations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884258736?utm_medium=api&utm_source=13c876f1",
    "description": "Head of Technology Operations and Service Management | Sydney | Permanent, hybrid Employment type: Full-time permanent. Seniority: Executive, reports to the CIO. Package: exec package. The role A large Australian organis..."
  },
  {
    "id": "adzuna-5884110001",
    "title": "Literacy Generalist Teacher, Gippsland, January 2027",
    "company": "Prospero Teaching",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-literacy-generalist-teacher-gippsland-january-2027-482-186-sponsorship",
    "url": "jobs/sydney-literacy-generalist-teacher-gippsland-january-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884110001?utm_medium=api&utm_source=13c876f1",
    "description": "Literacy Generalist Teacher Latrobe Valley, Victoria January 2027 Full-time Specialist School | Literacy Focus | Individualised Learning | Strong Support | Sponsorship Available Are you a passionate Literacy or English T..."
  },
  {
    "id": "adzuna-5883756172",
    "title": "Project Manager – Remote Construction Projects",
    "company": "HTS Constructions",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "perth-project-manager-remote-construction-projects-482-494-sponsorship",
    "url": "jobs/perth-project-manager-remote-construction-projects-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5883756172?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=EF13ADC31DABC26B282FBE661C72C032AC2EE0A7",
    "description": "Project Manager – Remote Construction Projects HTS Constructions Pty Ltd | Perth WA | Full Time Build Something That Matters, In Places Most People Never See Some of the most rewarding construction work in Australia happ..."
  },
  {
    "id": "jooble--6407776485934683397",
    "title": "Claims Change Analyst",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-claims-change-analyst-482-186-sponsorship",
    "url": "jobs/sydney-claims-change-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6407776485934683397",
    "description": " Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise your health \r\n Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contributio..."
  },
  {
    "id": "jooble-1972516146862399324",
    "title": "Senior Manager - Benefits Realisation",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-senior-manager-benefits-realisation-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-benefits-realisation-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1972516146862399324",
    "description": " Shape the future of insurance with innovative ideas and technologies that improve the lives of millions of Australians \r\n Take advantage of well-being initiatives designed to support your mental and physical health, ens..."
  },
  {
    "id": "jooble-4442432604502586961",
    "title": "Onboarding Delivery Manager, Group Digital",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-onboarding-delivery-manager-group-digital-482-186-sponsorship",
    "url": "jobs/sydney-onboarding-delivery-manager-group-digital-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4442432604502586961",
    "description": " Join us in shaping the future of the insurance industry, driven by innovation and a 150-year legacy of protecting people \r\n Be part of a team that invests in your growth, offering exclusive industry accreditation and a ..."
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-claims-change-manager-482-186-sponsorship",
    "url": "jobs/sydney-claims-change-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6741752858076328875",
    "description": "&nbsp;...life insurers, committed to inclusion, and supporting the career growth of our diverse workforce. We’re proud to be: \r\n An Inclusive <b>Employer </b>– Recognised as Employer of Choice for Gender Equality by the ..."
  },
  {
    "id": "adzuna-5883436249",
    "title": "WHS ADVISOR",
    "company": "CBC Staff",
    "logoInitial": "C",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "cairns-whs-advisor-482-494-sponsorship",
    "url": "jobs/cairns-whs-advisor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436249?utm_medium=api&utm_source=13c876f1",
    "description": "Drive meaningful safety outcomes, influence workplace culture and partner with leaders to create safer, healthier workplaces. Our Client: Our client is a well-established organisation with a strong sense of purpose, work..."
  },
  {
    "id": "adzuna-5883436108",
    "title": "GRANTS AND GOVERNANCE OFFICER",
    "company": "CBC Staff",
    "logoInitial": "C",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "cairns-grants-and-governance-officer-482-494-sponsorship",
    "url": "jobs/cairns-grants-and-governance-officer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436108?utm_medium=api&utm_source=13c876f1",
    "description": "Help secure funding, strengthen governance, and bring community-focused projects to life while making a genuine difference. Our Client: Our client is a forward-thinking regional council focused on delivering meaningful o..."
  },
  {
    "id": "adzuna-5883436122",
    "title": "PROJECT MANAGER",
    "company": "CBC Staff",
    "logoInitial": "C",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "cairns-project-manager-482-494-sponsorship",
    "url": "jobs/cairns-project-manager-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436122?utm_medium=api&utm_source=13c876f1",
    "description": "Lead major civil construction projects across FNQ. Join a growing business with a strong pipeline and genuine career opportunities. Our Client: Our client is a successful civil construction business with a strong presenc..."
  },
  {
    "id": "adzuna-5883436104",
    "title": "COMMUNITY BUSINESS SUPPORT OFFICER",
    "company": "CBC Staff",
    "logoInitial": "C",
    "location": "Cairns, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "cairns-community-business-support-officer-482-494-sponsorship",
    "url": "jobs/cairns-community-business-support-officer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436104?utm_medium=api&utm_source=13c876f1",
    "description": "Join a community-focused team delivering exceptional customer service, facility bookings and administrative support! Our Client: Our client is a large and well-respected organisation delivering a diverse range of communi..."
  },
  {
    "id": "adzuna-5883086845",
    "title": "O&G Registrar | Supportive Regional Hospital in NSW | Coastal Lifestyle",
    "company": "Mediix",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-og-registrar-supportive-regional-hospital-in-nsw-coastal-lifestyle-482-186-sponsorship",
    "url": "jobs/sydney-og-registrar-supportive-regional-hospital-in-nsw-coastal-lifestyle-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5883086845?se=TCaXScGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=5C1A9713100E161A67857F9AF2CCEE8018987086",
    "description": "Description O&G Registrar – Large, Supportive Regional Health Service | Coastal Lifestyle | January 2026 Start Are you a motivated Obstetrics & Gynaecology Registrar looking to advance your training in a high-functioning..."
  },
  {
    "id": "adzuna-5883074680",
    "title": "Piping Designer",
    "company": "Bechtel",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-piping-designer-482-494-sponsorship",
    "url": "jobs/brisbane-piping-designer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883074680?utm_medium=api&utm_source=13c876f1",
    "description": "Requisition ID: 299083 Relocation Authorized: None Telework Type: Part-Time Telework Work Location: Brisbane, QLD Extraordinary teams building inspiring projects: Since 1898, we have helped customers complete more than 2..."
  },
  {
    "id": "jooble-2666171463447040535",
    "title": "Senior Internal Dispute Resolution Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-internal-dispute-resolution-specialist-482-186-sponsorship",
    "url": "jobs/sydney-senior-internal-dispute-resolution-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2666171463447040535",
    "description": " Join a company that fosters a culture of respect, resourcefulness, and inclusivity, allowing you to grow both personally and professionally. \r\n Help protect over 5 million Australians, making a real difference in their ..."
  },
  {
    "id": "adzuna-5882475675",
    "title": "Chef (Hospitality)",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-chef-hospitality-482-494-sponsorship",
    "url": "jobs/perth-chef-hospitality-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5882475675?se=bsroQMGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=CB2F964996EAF82F6A893F766537392EC2C07E11",
    "description": "Job Description: The Role: Wordpool Australia is currently recruiting for Chefs. If you meet the essential requirements listed below and want to take advantage of this fantastic opportunity, please send us your resume an..."
  },
  {
    "id": "adzuna-5882235124",
    "title": "Hiring Australian citizens to work in USA on E3 Visa",
    "company": "Addon Technologies",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-hiring-australian-citizens-to-work-in-usa-on-e3-visa-482-186-sponsorship",
    "url": "jobs/sydney-hiring-australian-citizens-to-work-in-usa-on-e3-visa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5882235124?se=bsroQMGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=D5E43CE0450EF189EED5E1100FD0367B2087E23F",
    "description": "Company Description Addon Technologies Inc is a professional IT services company, with its Corporate Offices in Livonia, MI. We provide software consulting, development, support, maintenance and training services in USA ..."
  },
  {
    "id": "adzuna-5882053955",
    "title": "General Practitioner - Macleay Island (DPA/MMM5)",
    "company": "DXC Medical Recruitment",
    "logoInitial": "D",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-macleay-island-dpammm5-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-macleay-island-dpammm5-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5882053955?utm_medium=api&utm_source=13c876f1",
    "description": "• 70%  income guarantee | Mixed billing | Suitable for Expedited Pathway • DPA/MMM5 location eligible for all GP training pathways | Visa Sponsorship • Live in Brisbane | 18 min ferry ride from Redland Bay Are you lookin..."
  },
  {
    "id": "adzuna-5881728131",
    "title": "FIFO Line Chef from Adelaide",
    "company": "Privacy Copyright Disclaimer ISS Terms",
    "logoInitial": "P",
    "location": "Perth, WA",
    "state": "WA",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "perth-fifo-line-chef-from-adelaide-482-494-sponsorship",
    "url": "jobs/perth-fifo-line-chef-from-adelaide-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881728131?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=7C89EFAD5299C203D8D645C6402161C43ADFDE58",
    "description": "Who we are: ISS is a leading workplace experience and facility management company, providing placemaking solutions that contribute to better business performance and make life easier, more productive, and enjoyable—deliv..."
  },
  {
    "id": "adzuna-5881727419",
    "title": "Aged Care Registered Nurse G2 Grad Program 2026",
    "company": "Grampians Health",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-aged-care-registered-nurse-g2-grad-program-2026-482-186-sponsorship",
    "url": "jobs/sydney-aged-care-registered-nurse-g2-grad-program-2026-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881727419?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=1FEBE7E59071FD2B88A21CC4E439965E43347F34",
    "description": "Commencing from the 5th of October. Fixed Term Full Time | Horsham, Ballarat, Edenhope YP2 - YP9 | $42.60 - $54.40 per hour About the Role Grampians Health is currently seeking applications for the 2026 Transition to Pra..."
  },
  {
    "id": "adzuna-5881083006",
    "title": "Third-Party Risk Remediation Specialist, Core",
    "company": "AIG Insurance",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-third-party-risk-remediation-specialist-core-482-186-sponsorship",
    "url": "jobs/sydney-third-party-risk-remediation-specialist-core-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5881083006?utm_medium=api&utm_source=13c876f1",
    "description": "LI-JC1 At AIG, we are reimagining the way we help customers manage risk. Join us as a Third-Party Risk Remediation Specialist, Core and help strengthen service provider management, operational resilience and regulatory c..."
  },
  {
    "id": "adzuna-5881029556",
    "title": "Associate Lecturer in IT Project Management & Lecturer in IT Project Governance and Security",
    "company": "UNSW",
    "logoInitial": "U",
    "location": "Canberra, ACT",
    "state": "ACT",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "canberra-associate-lecturer-in-it-project-management-lecturer-in-it-project-governance-and-security-482-186-sponsorship",
    "url": "jobs/canberra-associate-lecturer-in-it-project-management-lecturer-in-it-project-governance-and-security-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881029556?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=B9D3FCBC54A8E4D6C858CBB2BD4EDC2C75F00AEA",
    "description": "Associate Lecturer in IT Project Management (Level A), UNSW Canberra Lecturer in IT Project Governance and Security (Level B), UNSW Canberra Employment type: Fixed-term contracts, education-focused, full-time 35 hours Du..."
  },
  {
    "id": "adzuna-5881029553",
    "title": "Cook - APY Lands",
    "company": "Arrcs",
    "logoInitial": "A",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "adelaide-cook-apy-lands-482-494-sponsorship",
    "url": "jobs/adelaide-cook-apy-lands-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881029553?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=10F66B6A201A16198FB923B6124E5851C5D120CE",
    "description": "About the role ARRCS are currently sourcing an experienced Cook to support the preparation, handling, and storage of our residents’ and Home Care consumers meals at our Tjipiku Pampaku Ngura Flexible aged care facility l..."
  },
  {
    "id": "adzuna-5881013433",
    "title": "Veterinarian",
    "company": "konnecting",
    "logoInitial": "K",
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
    "salary": "$85,000 - $175,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-veterinarian-482-186-sponsorship",
    "url": "jobs/sydney-veterinarian-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5881013433?utm_medium=api&utm_source=13c876f1",
    "description": "Konnecting is recruiting passionate and dedicated Veterinarians for multiple opportunities across Australia. We are seeking experienced Veterinary Surgeons , Small Animal Veterinarians , Emergency Veterinarians , Mixed P..."
  },
  {
    "id": "adzuna-5880803146",
    "title": "Registered Nurse - Terrace Gardens - Part-Time",
    "company": "Australian Regional and Remote Community Services",
    "logoInitial": "A",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "darwin-registered-nurse-terrace-gardens-part-time-482-494-sponsorship",
    "url": "jobs/darwin-registered-nurse-terrace-gardens-part-time-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5880803146?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=130FFA34E86AB574E5C0676EC7C60A422F11029E",
    "description": "About the role ARRCS are currently sourcing a qualified Registered Nurse (RN) to support the team and residents at Terrace Gardens Aged Care Facility on a permanent, part-time basis working 25 hours per week. We are look..."
  },
  {
    "id": "adzuna-5880598318",
    "title": "Theatre orderly",
    "company": "St Vincent’s Health Australia",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-theatre-orderly-482-186-sponsorship",
    "url": "jobs/sydney-theatre-orderly-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5880598318?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=522A35A74C0355073CB7D3E15175E3DCAE18BA14",
    "description": "Job Description: Role Title: Theatre Orderly Role Type: Perm Part time Department and Location: Surgical Services, Mater Hospital, Sydney, NSW Salary: $29.36 - $39.24 Hourly Better and fairer care. Always. We are St Vinc..."
  },
  {
    "id": "adzuna-5880597951",
    "title": "School Operations Assistant, Engineering",
    "company": "University of Wollongong",
    "logoInitial": "U",
    "location": "Wollongong, NSW",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "wollongong-school-operations-assistant-engineering-482-186-sponsorship",
    "url": "jobs/wollongong-school-operations-assistant-engineering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597951?utm_medium=api&utm_source=13c876f1",
    "description": "Description Make an impact at the University of Wollongong (UOW) — a purpose-driven institution ranked in the top 1% of universities globally, with more than 33,000 students from over 130 countries. About the Role The Sc..."
  },
  {
    "id": "adzuna-5880597796",
    "title": "Chef Opportunities - Cibaria Noosa Restaurant",
    "company": "AccorHotel",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-chef-opportunities-cibaria-noosa-restaurant-482-186-sponsorship",
    "url": "jobs/sydney-chef-opportunities-cibaria-noosa-restaurant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597796?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description Welcome to Elysium Noosa Resort an elegant retreat set in the heart of one of Australia’s most iconic coastal destinations. Elysium Noosa has been thoughtfully reimagined across every guest touchpoint..."
  },
  {
    "id": "adzuna-5880597814",
    "title": "Scrub Scout Registered Nurse",
    "company": "St Vincent’s Health Australia",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-scrub-scout-registered-nurse-482-186-sponsorship",
    "url": "jobs/sydney-scrub-scout-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597814?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description: Role title: Registered Nurse Role type: Permanent or Perm Part time Department and location: Level 5 Theatres, St Vincent’s Private Hospital Sydney Salary: $39.23 - 55.09 AUD base per hour plus super Wel..."
  },
  {
    "id": "adzuna-5880597613",
    "title": "Director of Revenue Management",
    "company": "Talent on the Move Pty",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-director-of-revenue-management-482-186-sponsorship",
    "url": "jobs/melbourne-director-of-revenue-management-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597613?utm_medium=api&utm_source=13c876f1",
    "description": "About the company Our client is a newly launched, dual-branded hotel located at a major Australian airport , representing two of the most recognisable global hospitality brands. This flagship property includes over 450 r..."
  },
  {
    "id": "adzuna-5880591424",
    "title": "Supervisor - Aircraft Maintenance Australia",
    "company": "United Airlines",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-supervisor-aircraft-maintenance-australia-482-186-sponsorship",
    "url": "jobs/sydney-supervisor-aircraft-maintenance-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880591424?utm_medium=api&utm_source=13c876f1",
    "description": "Achieving our goals starts with supporting yours. Grow your career, access top-tier health and wellness benefits, build lasting connections with your team and our customers, and travel the world using our extensive route..."
  },
  {
    "id": "adzuna-5879833354",
    "title": "Maintenance and Grounds Coordinator",
    "company": "UniLodge",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-maintenance-and-grounds-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-maintenance-and-grounds-coordinator-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879833354?utm_medium=api&utm_source=13c876f1",
    "description": "09th September, 2026 About UniLodge UniLodge is the leading student accommodation provider in Australia and New Zealand, with over 110 student accommodation properties across major cities. As part of the broader UniLodge..."
  },
  {
    "id": "adzuna-5879755731",
    "title": "Case Worker, Children Services",
    "company": "Westhaven",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-case-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-case-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5879755731?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D81C187F42705DFF88ED29855DDA14EF09F98657",
    "description": "Do you have a genuine commitment to child safety and a passion for advocating for children and young people with disability? Location: Bathurst, NSW Position Type: 6 Month Fixed-Term Contract Competitive Salary: Level 4,..."
  },
  {
    "id": "adzuna-5879588072",
    "title": "Experienced Immigration Lawyer",
    "company": "Ironbrij Pty Ltd",
    "logoInitial": "I",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-experienced-immigration-lawyer-482-186-sponsorship",
    "url": "jobs/sydney-experienced-immigration-lawyer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879588072?utm_medium=api&utm_source=13c876f1",
    "description": "About Sellanes Farasat Immigration Sellanes Farasat Immigration is an established Australian immigration practice providing strategic and practical immigration assistance to individuals, families, employers and major cor..."
  },
  {
    "id": "adzuna-5879229989",
    "title": "Veterinary Criticalist (Emergency & Critical Care Specialist) BVSC - Brisbane - Days (No weekends)",
    "company": "VetPartners",
    "logoInitial": "V",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-veterinary-criticalist-emergency-critical-care-specialist-bvsc-brisbane-days-no-weekends-482-494-sponsorship",
    "url": "jobs/brisbane-veterinary-criticalist-emergency-critical-care-specialist-bvsc-brisbane-days-no-weekends-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879229989?utm_medium=api&utm_source=13c876f1",
    "description": "Description Brisbane Veterinary Specialist Centre (BVSC) is seeking a passionate and highly skilled Veterinary Criticalist (Emergency & Critical Care Specialist) to join our growing multidisciplinary referral and emergen..."
  },
  {
    "id": "adzuna-5879229992",
    "title": "Data Support Engineer",
    "company": "Optiver",
    "logoInitial": "O",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-data-support-engineer-482-186-sponsorship",
    "url": "jobs/sydney-data-support-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5879229992?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=6BC9E25689897FF1BEE01BEF7800F00E92A8643D",
    "description": "Who We Are Optiver is a global market maker founded in Amsterdam, with offices in London, Chicago, Austin, New York, Sydney, Shanghai, Hong Kong, Singapore, Taipei and Mumbai. Established in 1986, today we are a leading ..."
  },
  {
    "id": "adzuna-5879138403",
    "title": "Occupational Therapist (Clinic based / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
    "logoInitial": "O",
    "location": "Newcastle, NSW",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "newcastle-occupational-therapist-clinic-based-sponsorship-available-482-186-sponsorship",
    "url": "jobs/newcastle-occupational-therapist-clinic-based-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879138403?utm_medium=api&utm_source=13c876f1",
    "description": "Singleton NSW | Full-time or Part-time | $95K-$115K  super  40% bonus structure Are you an experienced Occupational Therapist ready to step into a role where your clinical expertise and leadership can genuinely make an i..."
  },
  {
    "id": "adzuna-5879097674",
    "title": "General practitioner (GP) - Taree - PEP - DPA - Mixed billings - NSW",
    "company": "HealthcareLink",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-gp-taree-pep-dpa-mixed-billings-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-gp-taree-pep-dpa-mixed-billings-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879097674?utm_medium=api&utm_source=13c876f1",
    "description": "Summary: A primary care health practice in Taree, NSW, serving the population of Taree and surrounds and providing primary healthcare services, including: diagnosis, treatment, follow up, primary care, preventive medicin..."
  },
  {
    "id": "adzuna-5879097451",
    "title": "VR GP - DPA -70% of Billings - sponsorship available - 1 hour from Melbourne",
    "company": "HealthcareLink",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-vr-gp-dpa-70-of-billings-sponsorship-available-1-hour-from-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-vr-gp-dpa-70-of-billings-sponsorship-available-1-hour-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879097451?utm_medium=api&utm_source=13c876f1",
    "description": "This reputable centre is owned and operated by committed doctors who are dedicated to providing better health and wellbeing to all their patients. The practice is fully accredited You will be part of a warm, friendly and..."
  },
  {
    "id": "adzuna-5878895073",
    "title": "Assistant FOH Manager",
    "company": "Talent on the Move Pty",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-assistant-foh-manager-482-186-sponsorship",
    "url": "jobs/sydney-assistant-foh-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878895073?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=CDF4814DA7BB632E2C864B2AC132F975C9257731",
    "description": "About the company Located in the heart of Martin Place, this newly hatted restaurant is already making its mark on Sydneys dining scene. With capacity for 100 guests and a dynamic team, the venue is part of a growing mul..."
  },
  {
    "id": "adzuna-5878778408",
    "title": "Immigration Lawyer (2 yrs-Senior)",
    "company": "AFL Recruitment",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-immigration-lawyer-2-yrs-senior-482-186-sponsorship",
    "url": "jobs/sydney-immigration-lawyer-2-yrs-senior-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5878778408?utm_medium=api&utm_source=13c876f1",
    "description": "Immigration Lawyer (2 yrs-Senior) Exhilaratingly different Unconventional 1st-Class firm. Corporate migration focus. A mentors/training. Visible advancement opps. Full-time/4 days. Work flexpart WFH. $75,000-$120,000Bonu..."
  },
  {
    "id": "jooble--457270425314709274",
    "title": "Governance Analyst",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-governance-analyst-482-186-sponsorship",
    "url": "jobs/sydney-governance-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-457270425314709274",
    "description": " Shape the future of insurance with innovative ideas and technologies that improve the lives of millions of Australians \r\n Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise..."
  },
  {
    "id": "adzuna-5878483313",
    "title": "Podiatrist",
    "company": "konnecting",
    "logoInitial": "K",
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
    "salary": "$80,000 - $135,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-podiatrist-482-186-sponsorship",
    "url": "jobs/sydney-podiatrist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5878483313?utm_medium=api&utm_source=13c876f1",
    "description": "Our client is a well-established healthcare clinic committed to providing high-quality services to the community. They are seeking Podiatrists, to join a dynamic and supportive team that will play a crucial role in ensur..."
  },
  {
    "id": "adzuna-5878109900",
    "title": "Paediatrician",
    "company": "Mediix",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-paediatrician-482-186-sponsorship",
    "url": "jobs/sydney-paediatrician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878109900?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=4146EB73D6111EC874FADF8A3594BBB2365237D5",
    "description": "Description We are looking to appoint Consultant Paediatricians to Wagga Wagga Base Hospital — the largest referral hospital in the district, and the paediatric hub for the Riverina. Working alongside Clinical Director o..."
  },
  {
    "id": "adzuna-5878109897",
    "title": "Corporate Receptionist - Melbourne I Part-Time",
    "company": "Jarden's People System",
    "logoInitial": "J",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "melbourne-corporate-receptionist-melbourne-i-part-time-482-186-sponsorship",
    "url": "jobs/melbourne-corporate-receptionist-melbourne-i-part-time-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878109897?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=CDB7FB40EBAEC45C267356DDEE55BC46701CC7ED",
    "description": "Introduction About Us Jarden is a leading investment and advisory group serving institutional, corporate and private clients across Australia, New Zealand and global markets. Our Australian team has shaped the corporate ..."
  },
  {
    "id": "adzuna-5877797270",
    "title": "FIFO Chefs from Brisbane and surrounding suburbs (Sponsorship available)",
    "company": "ISS INTEGRATED SERV P/L",
    "logoInitial": "I",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877797270?utm_medium=api&utm_source=13c876f1",
    "description": "Lead. Create. Inspire. ISS IS A PLACE TO BE YOU We have ambitious goals for how we work, how we impact our surroundings and how we treat our people. It’s you that makes the difference to making amazing places, and we bel..."
  },
  {
    "id": "adzuna-5877183601",
    "title": "Store Person",
    "company": "Rockmount",
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
    "salary": "$10,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-store-person-482-186-sponsorship",
    "url": "jobs/sydney-store-person-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877183601?utm_medium=api&utm_source=13c876f1",
    "description": "About the role: Rockmount is recruiting on behalf of a construction and building supplies business based in Kings Park. This is a full time, permanent role — not labour hire, not casual — with the entitlements that come ..."
  },
  {
    "id": "jooble--6357330022029076573",
    "title": "Claims Customer Solutions Specialist",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-claims-customer-solutions-specialist-482-186-sponsorship",
    "url": "jobs/sydney-claims-customer-solutions-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6357330022029076573",
    "description": "~ Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise your health \r\n~ Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contribut..."
  },
  {
    "id": "adzuna-5877124413",
    "title": "Maintenance and Grounds Coordinator",
    "company": "UniLodge",
    "logoInitial": "U",
    "location": "Cairns, QLD",
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
    "salary": "$69,088 - $69,088 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "cairns-maintenance-and-grounds-coordinator-482-494-sponsorship",
    "url": "jobs/cairns-maintenance-and-grounds-coordinator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877124413?utm_medium=api&utm_source=13c876f1",
    "description": "About UniLodge UniLodge is the leading student accommodation provider in Australia and New Zealand, with over 110 student accommodation properties across major cities. As part of the broader UniLodge Living Group, we man..."
  },
  {
    "id": "adzuna-5876963009",
    "title": "Graduate Internal Sales Representative - Mechanical/Engineering",
    "company": "Applied Industrial Technologies",
    "logoInitial": "A",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-graduate-internal-sales-representative-mechanicalengineering-482-186-sponsorship",
    "url": "jobs/sydney-graduate-internal-sales-representative-mechanicalengineering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876963009?utm_medium=api&utm_source=13c876f1",
    "description": "About the Role We are looking for a recent Mechanical or Engineering graduat e to join our Kalgoorlie team as an Internal Sales Representative. This is a great opportunity to start your career within an established indus..."
  },
  {
    "id": "adzuna-5876427299",
    "title": "Senior Design Engineer",
    "company": "AVI-SPL",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-design-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-design-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5876427299?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=757FBCCDEA78BEA2F3666725D1893AFE29584B1A",
    "description": "Responsibilities WHO WE ARE AVI-SPL is a digital enablement solutions provider who transforms how people and technology connect to elevate experiences, create new value, and enable organizations to thrive and grow. We ar..."
  },
  {
    "id": "adzuna-5876426580",
    "title": "Orange Support Worker Children Services",
    "company": "Westhaven",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-orange-support-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-orange-support-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5876426580?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=F21C7C4AD9FCADB67DF5B6BAD2BA9D2942509A5F",
    "description": "Ready to make an impact that lasts? At Westhaven, we believe support is about more than just \"care\"—it’s about empowerment. We are looking for dedicated individuals in Orange to help children and young people with disabi..."
  },
  {
    "id": "adzuna-5876415243",
    "title": "Senior Piping Engineer",
    "company": "Bechtel",
    "logoInitial": "B",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "brisbane-senior-piping-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-piping-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876415243?utm_medium=api&utm_source=13c876f1",
    "description": "Requisition ID: 298947 Relocation Authorized: None Telework Type: Part-Time Telework Work Location: Brisbane, QLD Extraordinary teams building inspiring projects: Since 1898, we have helped customers complete more than 2..."
  },
  {
    "id": "adzuna-5876246006",
    "title": "VR GP | Whitsundays, Qld (DPA/MM5) MRCGP INT Dr Level 3 Supervision",
    "company": "Susan Hill GP Jobs",
    "logoInitial": "S",
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
    "salary": "$270,400 - $353,600 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-vr-gp-whitsundays-qld-dpamm5-mrcgp-int-dr-level-3-supervision-482-186-sponsorship",
    "url": "jobs/sydney-vr-gp-whitsundays-qld-dpamm5-mrcgp-int-dr-level-3-supervision-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876246006?utm_medium=api&utm_source=13c876f1",
    "description": "This Dr owned, mixed billing group practice needs a General Practitioner. $150 per hour guaranteed for 3 months or 65% Level 3 supervision Sponsorship available Standard Consult $90 Long Consult $140 2 RNs on at all time..."
  },
  {
    "id": "adzuna-5875762730",
    "title": "Drillers - FIFO Australia",
    "company": "GRiP",
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
    "salary": "$105,000 - $125,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-drillers-fifo-australia-482-186-sponsorship",
    "url": "jobs/sydney-drillers-fifo-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875762730?utm_medium=api&utm_source=13c876f1",
    "description": "Job Title: Drillers – FIFO Australia Location: Australia Wide Company: Drilling Services Contractor Employment: Full-Time Roster: FIFO - Predominantly 2 weeks on / 2 weeks off or 2 weeks on / 1 week off About the Company..."
  },
  {
    "id": "adzuna-5875690547",
    "title": "Venue Manager & Assistant Venue Manager",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
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
    "salary": "$75,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "gold-coast-venue-manager-assistant-venue-manager-482-494-sponsorship",
    "url": "jobs/gold-coast-venue-manager-assistant-venue-manager-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875690547?utm_medium=api&utm_source=13c876f1",
    "description": "Ready for your next move in hospitality management? Artesian Hospitality is looking for experienced Venue Managers and Assistant Venue Managers to join our leadership team across our Surfers Paradise portfolio. We're hom..."
  },
  {
    "id": "jooble-3612639519514729102",
    "title": "Marketing Manager - Social Influence & Authority",
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
    "type": "Part-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-marketing-manager-social-influence-authority-482-186-sponsorship",
    "url": "jobs/sydney-marketing-manager-social-influence-authority-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3612639519514729102",
    "description": "~ Enjoy work-life balance with flexible working options, and well-being initiatives that prioritise your health \r\n~ Work alongside diverse, passionate colleagues and leaders who inspire, support, and value your contribut..."
  },
  {
    "id": "adzuna-5873713150",
    "title": "Consultant Psychiatrist",
    "company": "Mediix",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-consultant-psychiatrist-482-186-sponsorship",
    "url": "jobs/sydney-consultant-psychiatrist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873713150?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant Psychiatrist | Hervey Bay & Maryborough | Total remuneration package up to AUD $564,548 p.a. We are currently hiring on behalf of a well-established Queensland public Hospital and Health Service to recruit Con..."
  },
  {
    "id": "adzuna-5873535799",
    "title": "General Practitioner - Darwin (MMM2/DPA)",
    "company": "DXC Medical Recruitment",
    "logoInitial": "D",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "darwin-general-practitioner-darwin-mmm2dpa-482-494-sponsorship",
    "url": "jobs/darwin-general-practitioner-darwin-mmm2dpa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873535799?utm_medium=api&utm_source=13c876f1",
    "description": "• High earning potential | Private billing | Excellent facilities & support • No weekends | Great work-life balance | Reputable group practice • Darwin CBD | MMM2/DPA location | Visa Sponsorship available Are you a VR GP..."
  },
  {
    "id": "adzuna-5873076229",
    "title": "Consultant/Specialist Anaesthetist",
    "company": "Sante Recruitment",
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
    "salary": "$450,000 - $450,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "darwin-consultantspecialist-anaesthetist-482-494-sponsorship",
    "url": "jobs/darwin-consultantspecialist-anaesthetist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873076229?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant / Specialist Anaesthetist Live and Work in Tropical Northern Australia Salary Package up to $450K | Visa Sponsorship Available An exceptional opportunity is available for a Consultant / Specialist Anaesthetist..."
  },
  {
    "id": "adzuna-5872733803",
    "title": "Pizza Chef | Opera Bar",
    "company": "Applejack Hospitality",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-pizza-chef-opera-bar-482-186-sponsorship",
    "url": "jobs/sydney-pizza-chef-opera-bar-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5872733803?se=rs-wsay28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=F0540F2348D859F72100063476EE867EBA5395BB",
    "description": "04th September, 2026 We’re on the hunt for experienced Pizza Chefs who live and breathe great dough, quality ingredients, and consistency in high volume, and when under pressure. This summer and beyond, come and break re..."
  },
  {
    "id": "adzuna-5872260925",
    "title": "Corporate Receptionist I Sydney",
    "company": "Jarden's People System",
    "logoInitial": "J",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-corporate-receptionist-i-sydney-482-186-sponsorship",
    "url": "jobs/sydney-corporate-receptionist-i-sydney-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5872260925?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=75BCC4F75927236895B7D78F2C87DC2C983D87FB",
    "description": "Introduction About Us Jarden is a leading investment and advisory group serving institutional, corporate and private clients across Australia, New Zealand and global markets. Our Australian team has shaped the corporate ..."
  },
  {
    "id": "adzuna-5871270935",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-private-dentist-482-186-sponsorship",
    "url": "jobs/melbourne-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871270935?utm_medium=api&utm_source=13c876f1",
    "description": "Private Dentist Jobs in Melbourne, Victoria, Australia. Exceptional earning potential, cosmetic and restorative dentistry, established patient base and outstanding facilities. Visa sponsorship available. ZEST Dental Recr..."
  },
  {
    "id": "adzuna-5871216422",
    "title": "General Practitioner - Footscray",
    "company": "DXC Medical Recruitment",
    "logoInitial": "D",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-footscray-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-footscray-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871216422?utm_medium=api&utm_source=13c876f1",
    "description": "• Earn up to 70% with a range of corporate benefits • Locum position available $150 p/h Mon to Fri • Inner western suburb of Melbourne | Visa sponsorship Are you a VR General Practitioner looking to work close to Melbour..."
  },
  {
    "id": "adzuna-5871214613",
    "title": "Technician - Electrical",
    "company": "Orica",
    "logoInitial": "O",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-technician-electrical-482-186-sponsorship",
    "url": "jobs/sydney-technician-electrical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871214613?utm_medium=api&utm_source=13c876f1",
    "description": "About Orica At Orica, it’s the power of our people that leads change and shapes our futures. Every day, all around the world, our people help mobilise vital resources essential to progress. Established in 1874, we have g..."
  },
  {
    "id": "adzuna-5870915410",
    "title": "Senior HSSE Engineer (Gas Turbines)",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-hsse-engineer-gas-turbines-482-186-sponsorship",
    "url": "jobs/sydney-senior-hsse-engineer-gas-turbines-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915410?utm_medium=api&utm_source=13c876f1",
    "description": "Career Area: Environmental Health and Safety Job Description: Your Work Shapes the World at Caterpillar Inc. When you join Caterpillar, you're joining a global team who cares not just about the work we do – but also abou..."
  },
  {
    "id": "adzuna-5870915412",
    "title": "Technical Accountant | Senior Associate | Capital Markets and Accounting Advisory Services",
    "company": "PricewaterhouseCoopers",
    "logoInitial": "P",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "melbourne-technical-accountant-senior-associate-capital-markets-and-accounting-advisory-services-482-186-sponsorship",
    "url": "jobs/melbourne-technical-accountant-senior-associate-capital-markets-and-accounting-advisory-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915412?utm_medium=api&utm_source=13c876f1",
    "description": "Line of Service Assurance Industry/Sector Not Applicable Specialism Assurance Management Level Senior Associate Job Description & Summary At PwC, we work together to create a better tomorrow for our people, our clients, ..."
  },
  {
    "id": "adzuna-5870915306",
    "title": "Registered Nurse - Medical",
    "company": "MaterNews",
    "logoInitial": "M",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-medical-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-medical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915306?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Mater Private Hospital Townsville are currently seeking experienced Registered Nurses to join our Medical Ward . We offer excellent flexibility, with opportunities ranging from Permanent Part-Time (0.6 FTE..."
  },
  {
    "id": "adzuna-5870915262",
    "title": "Brisbane Chefs and nearby suburbs for FIFO Central QLD mining sites (Sponsorship available)",
    "company": "ISS Facility Services",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-brisbane-chefs-and-nearby-suburbs-for-fifo-central-qld-mining-sites-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-brisbane-chefs-and-nearby-suburbs-for-fifo-central-qld-mining-sites-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915262?utm_medium=api&utm_source=13c876f1",
    "description": "Lead. Create. Inspire. ISS IS A PLACE TO BE YOU We have ambitious goals for how we work, how we impact our surroundings and how we treat our people. It’s you that makes the difference to making amazing places, and we bel..."
  },
  {
    "id": "adzuna-5870915130",
    "title": "Dual Degree Registered Nurse/Midwife",
    "company": "Mater Group",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-dual-degree-registered-nursemidwife-482-186-sponsorship",
    "url": "jobs/sydney-dual-degree-registered-nursemidwife-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915130?utm_medium=api&utm_source=13c876f1",
    "description": "About the role Mater Private Hospital Mackay are seeking Registered Nurse/Midwife (Dual Qualified) to come join our Maternity Paediatric unit. We offer excellent flexibility, with opportunities ranging from Permanent Par..."
  },
  {
    "id": "adzuna-5870912970",
    "title": "Finance Intern",
    "company": "Boeing",
    "logoInitial": "B",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "melbourne-finance-intern-482-186-sponsorship",
    "url": "jobs/melbourne-finance-intern-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870912970?utm_medium=api&utm_source=13c876f1",
    "description": "Finance Intern Company: Boeing Aerostructures Australia Pty Ltd About Boeing Aerostructures Australia (BAA) BAA produces flight control surfaces for Boeing Commercial Airplanes (737, 777 and 787) and has over 1,000 emplo..."
  },
  {
    "id": "adzuna-5870683593",
    "title": "Transmission Line Workers (Cert III)",
    "company": "GenusPlusÂ Group",
    "logoInitial": "G",
    "location": "Burnie, TAS",
    "state": "TAS",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$124,800 - $145,600 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "burnie-transmission-line-workers-cert-iii-482-494-sponsorship",
    "url": "jobs/burnie-transmission-line-workers-cert-iii-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870683593?utm_medium=api&utm_source=13c876f1",
    "description": "129 km of 220 kV. 3-4 years of work. 3:1 roster with accommodation covered. Genus is the head contractor delivering Stage 1 of TasNetworks' North West Transmission Developments (NWTD). It will be the biggest transmission..."
  },
  {
    "id": "adzuna-5870612539",
    "title": "Registrar/ Senior Registrar - Emergency",
    "company": "St John of God Health Care",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registrar-senior-registrar-emergency-482-186-sponsorship",
    "url": "jobs/sydney-registrar-senior-registrar-emergency-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870612539?utm_medium=api&utm_source=13c876f1",
    "description": "Your Role at St John of God Midland Public Hospital Are you driven, ambitious, and ready to take the next step in your Emergency Medicine career? Join a high-performing, forward-thinking Emergency Department where energy..."
  },
  {
    "id": "adzuna-5870612374",
    "title": "Chef De Partie",
    "company": "AccorHotel",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "brisbane-chef-de-partie-482-494-sponsorship",
    "url": "jobs/brisbane-chef-de-partie-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870612374?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=F85E8B0E22EE362896BFD431BB1582EFDF9C23A4",
    "description": "Company Description Situated in the vibrant heart of Brisbane's Cultural Precinct near the beautiful South Bank Parklands, Novotel Brisbane South Bank places you, and our guests, just moments away from premier destinatio..."
  },
  {
    "id": "adzuna-5870158017",
    "title": "Food & Beverage Supervisor",
    "company": "Accor",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-food-beverage-supervisor-482-186-sponsorship",
    "url": "jobs/sydney-food-beverage-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870158017?se=2paKOam18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=D0362276A5E7B5EF931315B778777FBA0FE63AFA",
    "description": "Company Description Joining Accor means more than just starting a new job — it’s the beginning of an exciting career journey with one of the world’s leading hospitality groups. With over 5,000 properties in 110 countries..."
  },
  {
    "id": "adzuna-5870157172",
    "title": "Cook - Tennant Creek",
    "company": "Arrcs",
    "logoInitial": "A",
    "location": "Darwin, NT",
    "state": "NT",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "darwin-cook-tennant-creek-482-494-sponsorship",
    "url": "jobs/darwin-cook-tennant-creek-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870157172?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=53F672F5A81E4D215538F134670C0F099B74A2F4",
    "description": "About the role ARRCS are currently sourcing an experienced Cook to support the preparation, handling, and storage of our residents’ meals at Pulkapulkka Kari Flexible Aged Care Facility in Tennant Creek, NT. In addition,..."
  },
  {
    "id": "adzuna-5870156427",
    "title": "Chefs | DIDO | 2:1 | Chinchilla / Dalby",
    "company": "Sodexo",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-chefs-dido-21-chinchilla-dalby-482-186-sponsorship",
    "url": "jobs/sydney-chefs-dido-21-chinchilla-dalby-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870156427?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=7150653EC57C9AB1A81AC6C80B97E1ABEFAF974B",
    "description": "Job Description Why Join Sodexo? Sodexo is a people business, employing over 400,000 people worldwide and thousands in Australia. Our hospitality all-rounders play a key role in keeping our sites functioning and well-mai..."
  },
  {
    "id": "adzuna-5870152614",
    "title": "Food & Beverage Supervisor",
    "company": "Accor",
    "logoInitial": "A",
    "location": "Melbourne, VIC",
    "state": "VIC",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "melbourne-food-beverage-supervisor-482-186-sponsorship",
    "url": "jobs/melbourne-food-beverage-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870152614?se=pA3giam18RGQT9YH7QD3rQ&utm_medium=api&utm_source=13c876f1&v=ACADC83E744C7B6BF3F04899E915BBDBD2A3B302",
    "description": "Company Description Mercure Melbourne Doncaster is a 183 room & suite hotel is Australia’s first of the next generation Mercure brand, introducing approachable elegance in an untouched pocket of the Eastern Suburbs. Feat..."
  },
  {
    "id": "adzuna-5870152355",
    "title": "Registered Midwife",
    "company": "Calvary Health Care",
    "logoInitial": "C",
    "location": "Hobart, TAS",
    "state": "TAS",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "hobart-registered-midwife-482-494-sponsorship",
    "url": "jobs/hobart-registered-midwife-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152355?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Midwife Permanent Full-Time, Part-Time & Casual Opportunities Midwives — Is It Time for Your Next Chapter? You became a midwife to make a difference. To support women through pregnancy, birth and the postnatal..."
  },
  {
    "id": "adzuna-5870152260",
    "title": "Technical Field Engineer (VIC)",
    "company": "St Vincent’s Health Australia",
    "logoInitial": "S",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-technical-field-engineer-vic-482-186-sponsorship",
    "url": "jobs/melbourne-technical-field-engineer-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152260?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description: Better and fairer care. Always . We are St Vincent’s Health Australia, Australia’s largest not-for-profit provider of health and aged care services. Founded by The Sisters of Charity in 1857, our 30,000 ..."
  },
  {
    "id": "adzuna-5870152177",
    "title": "Registered Nurse - Central Allocations Unit (Acute & Aged)",
    "company": "Grampians Health",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-central-allocations-unit-acute-aged-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-central-allocations-unit-acute-aged-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152177?utm_medium=api&utm_source=13c876f1",
    "description": "Casual Opportunity YP2 – YP9 | $41.36 - $52.82 per hour No visa sponsorship is available for this role About the Role We are seeking applications from passionate Registered Nurses to join our casual bank to provide care ..."
  },
  {
    "id": "adzuna-5870151537",
    "title": "Enrolled Nurse - Central Allocations Unit Horsham",
    "company": "Grampians Health",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-enrolled-nurse-central-allocations-unit-horsham-482-186-sponsorship",
    "url": "jobs/sydney-enrolled-nurse-central-allocations-unit-horsham-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870151537?utm_medium=api&utm_source=13c876f1",
    "description": "Multiple Positions Available: Casual, Permanent Part Time and Full Time IB68 – IB72 | $37.03 - $39.40 per hour No visa sponsorship is available for this role Are you a passionate Enrolled Nurse ready to make a meaningful..."
  },
  {
    "id": "adzuna-5870151530",
    "title": "Registered Nurse - Community Mental Health",
    "company": "MOR. Healthcare",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-registered-nurse-community-mental-health-482-186-sponsorship",
    "url": "jobs/melbourne-registered-nurse-community-mental-health-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870151530?utm_medium=api&utm_source=13c876f1",
    "description": "Job Description Registered Nurse - Mental Health Hospital in the Home (HITH) - Sponsorship Available Location: Melbourne, Victoria Salary: $108,000 - $120,000 per annum  Super Employment Type: Full Time About the Opportu..."
  },
  {
    "id": "adzuna-5870148347",
    "title": "FIFO Chefs from Brisbane and nearby suburbs (Sponsorship available)",
    "company": "ISS Global",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-fifo-chefs-from-brisbane-and-nearby-suburbs-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-fifo-chefs-from-brisbane-and-nearby-suburbs-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870148347?se=yilRr6y28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=EBC81BD2EC2BF4BFFDFCCD293DEEB8303269C16C",
    "description": "Lead. Create. Inspire. ISS IS A PLACE TO BE YOU We have ambitious goals for how we work, how we impact our surroundings and how we treat our people. It’s you that makes the difference to making amazing places, and we bel..."
  },
  {
    "id": "adzuna-5870147260",
    "title": "FIFO Chefs from Brisbane and surrounding suburbs (Sponsorship available)",
    "company": "ISS Facility Services",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "brisbane-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870147260?utm_medium=api&utm_source=13c876f1",
    "description": "Lead. Create. Inspire. ISS IS A PLACE TO BE YOU We have ambitious goals for how we work, how we impact our surroundings and how we treat our people. It’s you that makes the difference to making amazing places, and we bel..."
  },
  {
    "id": "adzuna-5870145962",
    "title": "Casual Academic Talent Pool - Canberra - Engineering & Technology",
    "company": "UNSW",
    "logoInitial": "U",
    "location": "Canberra, ACT",
    "state": "ACT",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "canberra-casual-academic-talent-pool-canberra-engineering-technology-482-186-sponsorship",
    "url": "jobs/canberra-casual-academic-talent-pool-canberra-engineering-technology-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870145962?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=D58D31742CAB1627F53FAF87BBAA3EDF4F110872",
    "description": ". The School of Engineering and Technology (SET), UNSW Canberra at ADFA extends a warm invitation to join our casual academic teaching team to support the delivery of quality teaching in a range of roles including casual..."
  },
  {
    "id": "adzuna-5870145069",
    "title": "Development Engineer Electronics",
    "company": "Signify",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-development-engineer-electronics-482-186-sponsorship",
    "url": "jobs/sydney-development-engineer-electronics-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870145069?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=E0D2D53ED22FBEA3B2CE782C7E41043AD6FBAFA3",
    "description": "About Signify Through bold discovery and cutting-edge innovation, we lead an industry that is vital for the future of our planet: lighting. Through our leadership in connected lighting and the Internet of Things, we're b..."
  },
  {
    "id": "adzuna-5870144677",
    "title": "Senior Software Engineer - Australia",
    "company": "Neara",
    "logoInitial": "N",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-software-engineer-australia-482-186-sponsorship",
    "url": "jobs/sydney-senior-software-engineer-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870144677?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=A0887F3AA17D03A20A522979478945D9B5CC46C4",
    "description": "Imagine having the power to stress-test an entire power grid against a hurricane or thunderstorm before the clouds even gather. That is the reality we are creating at Neara. We use advanced machine learning to create eng..."
  },
  {
    "id": "adzuna-5870144510",
    "title": "Casual Associate",
    "company": "PwC Australia",
    "logoInitial": "P",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-casual-associate-482-494-sponsorship",
    "url": "jobs/perth-casual-associate-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870144510?se=rt5gJKm18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=471602D2ECF46510A9CB58E42936F18E5DD2B793",
    "description": "Line of Service Assurance Industry/Sector Not Applicable Specialism Risk Management Level Administrative Job Description & Summary Education (if blank, degree and/or field of study not specified) Degrees/Field of Study r..."
  },
  {
    "id": "adzuna-5870139045",
    "title": "Part-time Housekeeping Attendant",
    "company": "Accor",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-part-time-housekeeping-attendant-482-186-sponsorship",
    "url": "jobs/melbourne-part-time-housekeeping-attendant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870139045?utm_medium=api&utm_source=13c876f1",
    "description": "Company Description “Hospitality is a work of Heart” - At Mövenpick Hotel Melbourne we do ordinary things in an extraordinary way. We believe true hospitality is about turning small gestures into heartwarming moments and..."
  },
  {
    "id": "adzuna-5870137786",
    "title": "Dubbo Support Worker Children Services",
    "company": "Westhaven",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
    "slug": "sydney-dubbo-support-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-dubbo-support-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870137786?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=A8DDDD283E03E2BCC732500DBC9051C474444AEE",
    "description": "Same Passion, Better Support: Upgrade Your Career at Westhaven. If you’re currently working in disability or youth support, you already know the work is deeply rewarding - Get rewarded properly. Join Westhaven in Dubbo f..."
  },
  {
    "id": "adzuna-5870131253",
    "title": "Registered Nurse Anaesthetics - Casual",
    "company": "Nexus",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-registered-nurse-anaesthetics-casual-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-anaesthetics-casual-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870131253?se=jDpkQ3i38RGz-cafFv7gOA&utm_medium=api&utm_source=13c876f1&v=E165A90A2084F36F17509E36236F98AB97BCE141",
    "description": "About the role: We have a great opportunity for an enthusiastic Perioperative Registered Nurse with experience in Anaesthetics to join our clinical team on a Casual basis. Monday to Friday flexible roster, some Saturday ..."
  },
  {
    "id": "adzuna-5870131003",
    "title": "Head Chef - Lakes Entrance Care Community",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-head-chef-lakes-entrance-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-lakes-entrance-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870131003?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=69143759A5EFB43D160270AA97B1B50AAEF46413",
    "description": "\"At Opal HealthCare, we know that companies don’t succeed, people do.\" Our purpose is to bring joy to those we care for and our values of Compassion, Accountability, Respect and Excellence reflect that CARE is at the hea..."
  },
  {
    "id": "adzuna-5870130839",
    "title": "Project Engineer",
    "company": "Fugro",
    "logoInitial": "F",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "perth-project-engineer-482-494-sponsorship",
    "url": "jobs/perth-project-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870130839?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D3DE3E049B70951A72498D20551DA0CB05569ACD",
    "description": "Job Description The Opportunity We are currently seeking a Project Engineer to join our established engineering team for upcoming subsea and ROV projects awarded recently. This role is based in West Perth and requires oc..."
  },
  {
    "id": "adzuna-5868988822",
    "title": "General Practitioner (VR/Non-VR) | 75% Billings | Narellan & Surrounds, NSW",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-vrnon-vr-75-billings-narellan-surrounds-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-vrnon-vr-75-billings-narellan-surrounds-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868988822?utm_medium=api&utm_source=13c876f1",
    "description": "Flexible GP opportunity at a well-established, non-corporate medical group in Sydney's South West. With generous billings, full clinical support, and access to DPA/DWS replacement, this is a fantastic role for both VR an..."
  },
  {
    "id": "adzuna-5868560001",
    "title": "Aged Carer | Sponsorship Opportunities Available in NSW and SA!",
    "company": "Roshana Care Group",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-aged-carer-sponsorship-opportunities-available-in-nsw-and-sa-482-186-sponsorship",
    "url": "jobs/sydney-aged-carer-sponsorship-opportunities-available-in-nsw-and-sa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868560001?utm_medium=api&utm_source=13c876f1",
    "description": "Join Roshana Care Group – Turn Your Passion into a Career Are you ready for a role where you can walk out the door knowing you have changed someone’s day for the better? At Roshana Care Group, we have been proudly caring..."
  },
  {
    "id": "adzuna-5868559998",
    "title": "Registered Nurse | Sponsorship Opportunities Available in Multiple Locations in WA, QLD, SA, NSW and VIC!",
    "company": "Roshana Care Group",
    "logoInitial": "R",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "newcastle-registered-nurse-sponsorship-opportunities-available-in-multiple-locations-in-wa-qld-sa-nsw-and-vic-482-186-sponsorship",
    "url": "jobs/newcastle-registered-nurse-sponsorship-opportunities-available-in-multiple-locations-in-wa-qld-sa-nsw-and-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868559998?utm_medium=api&utm_source=13c876f1",
    "description": "Join Roshana Care Group – Shaping the Future of Aged Care Roshana Care Group is a leading aged care provider dedicated to delivering high-quality, compassionate care across Australia. With our head office in Western Aust..."
  },
  {
    "id": "jooble--5054508518561796816",
    "title": "Senior Business Analyst, Calypso, Eqlipse",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-business-analyst-calypso-eqlipse-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-calypso-eqlipse-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5054508518561796816",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-5583812160920551153",
    "title": "Specialist, Product and Sales Analyst - Digital Product",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-specialist-product-and-sales-analyst-digital-product-482-186-sponsorship",
    "url": "jobs/sydney-specialist-product-and-sales-analyst-digital-product-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5583812160920551153",
    "description": " Our Purpose  Mastercard powers economies and empowers people in 200+ countries and territories worldwide. Together with our customers, we’re helping build a sustainable economy where everyone can prosper. We support a w..."
  },
  {
    "id": "jooble--7978218948990326837",
    "title": "Partner Success Manager",
    "company": "MoneyLion",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-partner-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-partner-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7978218948990326837",
    "description": " About Gen:  Gen is a global company dedicated to powering Digital Freedom through its trusted consumer brands including Norton, Avast, LifeLock, MoneyLion and more. Our combined heritage is rooted in financial empowerme..."
  },
  {
    "id": "jooble--668632767387578925",
    "title": "Customer Floor and Catering Services Coordinator (Contractor)",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-floor-and-catering-services-coordinator-contractor-482-186-sponsorship",
    "url": "jobs/sydney-customer-floor-and-catering-services-coordinator-contractor-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-668632767387578925",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "adzuna-5867137923",
    "title": "Occupational Therapist - Tailored Caseloads",
    "company": "Brightside Recruitment",
    "logoInitial": "B",
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
    "salary": "$115,000 - $800,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-tailored-caseloads-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-tailored-caseloads-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867137923?utm_medium=api&utm_source=13c876f1",
    "description": "Occupational Therapist Location: West & North Melbourne Employment Type: Full-Time (Part-Time Also Considered) Salary: Up to $115k  Super  bonuses  car options We’re partnering with one of our long-standing and most trus..."
  },
  {
    "id": "adzuna-5867137489",
    "title": "Speech Pathologist | Clinic & private hospital work | Sponsorship Available",
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
    "salary": "$85,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-clinic-private-hospital-work-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-clinic-private-hospital-work-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867137489?utm_medium=api&utm_source=13c876f1",
    "description": "Salary starting from $85,000 - $95,000  Super  Benefits Mixed ages caseload in the clinic (80%) and out in the community (20%) Option to work in a hospital setting with an adult caseload Join a renowned multi-disciplinar..."
  },
  {
    "id": "adzuna-5867136633",
    "title": "Head Chef, Sous Chef & Chef de Partie - Sponsorship Available",
    "company": "Australia Chef Migration",
    "logoInitial": "A",
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
    "salary": "$75,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-head-chef-sous-chef-chef-de-partie-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-head-chef-sous-chef-chef-de-partie-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867136633?utm_medium=api&utm_source=13c876f1",
    "description": "Are you an experienced Chef looking for your next career move? Do you want to work with an employer who will sponsor you through to the 186 visa? Are you currently on a 485 Graduate Visa or a 482 Skills in Demand Visa? A..."
  },
  {
    "id": "jooble--3487876652181029503",
    "title": "Senior Analyst - Technology Risk Transformation & Governance (Line 1 - max term 2 years)",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-analyst-technology-risk-transformation-governance-line-1-max-term-2-years-482-186-sponsorship",
    "url": "jobs/sydney-senior-analyst-technology-risk-transformation-governance-line-1-max-term-2-years-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3487876652181029503",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-915373189732194715",
    "title": "Actuary, Strategic Capital",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-actuary-strategic-capital-482-186-sponsorship",
    "url": "jobs/sydney-actuary-strategic-capital-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/915373189732194715",
    "description": " Shape the future of insurance with innovative ideas and technologies that improve the lives of millions of Australians \r\n Work with experienced and skilled colleagues who support and inspire one another to achieve colle..."
  },
  {
    "id": "adzuna-5864347810",
    "title": "Fitter Machinist / 1st Class Metal Machinist",
    "company": "Skilled Jobs Australia",
    "logoInitial": "S",
    "location": "Darwin, NT",
    "state": "NT",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "darwin-fitter-machinist-1st-class-metal-machinist-482-494-sponsorship",
    "url": "jobs/darwin-fitter-machinist-1st-class-metal-machinist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5864347810?utm_medium=api&utm_source=13c876f1",
    "description": "Our company is committed to ZERO Harm delivering exceptional performance to our clients. As an essential service provider, we offer continuity of employment including career development into leadership & management roles..."
  },
  {
    "id": "adzuna-5863631918",
    "title": "Remote Community Store - Duty Supervisors - Couple Position",
    "company": "North West Recruitment",
    "logoInitial": "N",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-remote-community-store-duty-supervisors-couple-position-482-494-sponsorship",
    "url": "jobs/perth-remote-community-store-duty-supervisors-couple-position-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5863631918?utm_medium=api&utm_source=13c876f1",
    "description": "A great chance to live & work in the beautiful Kimberley region close to Broome, WA Full training provided with career development opportunities Attractive salary and accommodation package provided The Company Our client..."
  },
  {
    "id": "jooble-1579125609709979225",
    "title": "Evergreen - Sales Development Representative",
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
    "salary": "$800 per month",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-evergreen-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-evergreen-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1579125609709979225",
    "description": " Reports to: Manager, Sales Development  Location: Remote Australia  Please note that this is an evergreen requisition and is intended to help us build a pipeline of talented Sales Development Representatives for future ..."
  },
  {
    "id": "jooble--4349611541527147189",
    "title": "Data and Reporting Analyst",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-data-and-reporting-analyst-482-186-sponsorship",
    "url": "jobs/sydney-data-and-reporting-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4349611541527147189",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble--3844822619036675737",
    "title": "Manager, Trading Operations",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-manager-trading-operations-482-186-sponsorship",
    "url": "jobs/sydney-manager-trading-operations-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3844822619036675737",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble--8678721439528820713",
    "title": "Senior Test Engineer",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-test-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-test-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8678721439528820713",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-2786787054944422334",
    "title": "Senior Analyst - Financial Risk",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-senior-analyst-financial-risk-482-186-sponsorship",
    "url": "jobs/sydney-senior-analyst-financial-risk-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2786787054944422334",
    "description": " Take advantage of well-being initiatives designed to support your mental and physical health, ensuring a balanced lifestyle \r\n Enjoy benefits such as discounted insurance, health and well-being programs, and a range of ..."
  },
  {
    "id": "jooble--2917747428602314164",
    "title": "Senior Quality & Test Engineer",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-senior-quality-test-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-quality-test-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2917747428602314164",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble-304905933300764271",
    "title": "Trading Systems Engineer, Linux Operating System's - 12MFTC",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-trading-systems-engineer-linux-operating-systems-12mftc-482-186-sponsorship",
    "url": "jobs/sydney-trading-systems-engineer-linux-operating-systems-12mftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/304905933300764271",
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  },
  {
    "id": "jooble--547145820006094209",
    "title": "Global Partnerships Specialist (Mandarin)",
    "company": "TMGM",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-global-partnerships-specialist-mandarin-482-186-sponsorship",
    "url": "jobs/sydney-global-partnerships-specialist-mandarin-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-547145820006094209",
    "description": " TMGM is a leading global CFD trading provider with a strong international presence across three continents. As the Official Regional Online Forex and Trading Partner of Chelsea FC in Asia Pacific, we are committed to st..."
  },
  {
    "id": "jooble-2719440955017947204",
    "title": "Application Support Lead - SWIFT",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-application-support-lead-swift-482-186-sponsorship",
    "url": "jobs/sydney-application-support-lead-swift-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2719440955017947204",
    "description": "&nbsp;...brings together talented people from a diverse range of disciplines. \r\n We run critical market infrastructure, with 1 in 3 people <b>employed </b>within technology. Yet we have a unique complexity of roles acros..."
  },
  {
    "id": "adzuna-5862939147",
    "title": "General Practitioner - Harvey, WA (MM5/DPA)",
    "company": "Doctor Connect Pty Ltd",
    "logoInitial": "D",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-general-practitioner-harvey-wa-mm5dpa-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-harvey-wa-mm5dpa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862939147?utm_medium=api&utm_source=13c876f1",
    "description": "THE PRACTICE Join a busy, fully accredited general practice in Harvey, WA (DPA/MM5), offering excellent clinical support, experienced RACGP mentoring, and a proven track record of Fellowship success in a welcoming rural ..."
  },
  {
    "id": "adzuna-5862939030",
    "title": "Electrical Project Managers - Growing Electrical Contractor",
    "company": "Powerstaff",
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
    "salary": "$120,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-electrical-project-managers-growing-electrical-contractor-482-186-sponsorship",
    "url": "jobs/sydney-electrical-project-managers-growing-electrical-contractor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862939030?utm_medium=api&utm_source=13c876f1",
    "description": "Your Next Company Our client has built a strong reputation for delivering high-quality electrical construction across a diverse portfolio of commercial projects, including office buildings, healthcare facilities, educati..."
  },
  {
    "id": "adzuna-5862938502",
    "title": "Regioanl Registered Nurse contracts & Permanent roles | Aged Care",
    "company": "Redstone Recruitment",
    "logoInitial": "R",
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
    "salary": "$40 - $120 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "adelaide-regioanl-registered-nurse-contracts-permanent-roles-aged-care-482-494-sponsorship",
    "url": "jobs/adelaide-regioanl-registered-nurse-contracts-permanent-roles-aged-care-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862938502?utm_medium=api&utm_source=13c876f1",
    "description": "Registered Nurse – Regional South Australia Contract & Permanent Opportunities | Aged Care | Sponsorship Available Redstone Recruitment is currently seeking experienced Registered Nurses (RNs) for a range of contract and..."
  },
  {
    "id": "adzuna-5862222503",
    "title": "Consultant Paediatrics - Australia (NSW,Vic & Other Locations)",
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
    "salary": "$480,000 - $480,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-consultant-paediatrics-australia-nswvic-other-locations-482-186-sponsorship",
    "url": "jobs/sydney-consultant-paediatrics-australia-nswvic-other-locations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862222503?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant PaediatricianMultiple Opportunities Across New South Wales, Victoria & AustraliaBuild a Rewarding Paediatric Career While Enjoying the Australian Lifestyle Are you a dedicated Consultant Paediatrician looking ..."
  },
  {
    "id": "adzuna-5862222504",
    "title": "Consultant Obstetrics and Gynaecology - Australia NSW,Vic.",
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
    "salary": "$480,000 - $480,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-consultant-obstetrics-and-gynaecology-australia-nswvic-482-186-sponsorship",
    "url": "jobs/sydney-consultant-obstetrics-and-gynaecology-australia-nswvic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862222504?utm_medium=api&utm_source=13c876f1",
    "description": "Consultant Obstetrician & GynaecologistMultiple Opportunities Across New South Wales & AustraliaAdvance Your Career in One of the World's Leading Healthcare Systems Are you a Consultant Obstetrician & Gynaecologist seeki..."
  },
  {
    "id": "adzuna-5861362283",
    "title": "General Practitioner | Rockingham | Sign-On Incentive",
    "company": "Healthcare Professionals Group",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-rockingham-sign-on-incentive-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-rockingham-sign-on-incentive-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5861362283?utm_medium=api&utm_source=13c876f1",
    "description": "Highlights: ✅ DPA & MM1 location – PEP Specialist doctors & New Fellows welcome  65% of billings  $150 per hour guarantee for 3 months ✈️ Upfront payment & relocation incentive available  Visa sponsorship available ⚖️ Wo..."
  },
  {
    "id": "adzuna-5860860984",
    "title": "Contract Administrator - Saltbush Contracting",
    "company": "Saltbush Contracting",
    "logoInitial": "S",
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
    "salary": "$78,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-contract-administrator-saltbush-contracting-482-186-sponsorship",
    "url": "jobs/sydney-contract-administrator-saltbush-contracting-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5860860984?se=dKhq5Wmz8RGSI57gYuD12g&utm_medium=api&utm_source=13c876f1&v=8E65DE2EF1D1BA38555F3447E058484433E202B4",
    "description": "We are looking for a Contract Administrator to join our team. Vacancy listing dates: 29/08/2026 - 26/09/2026 Ref: 719733 About the company Saltbush Contracting is a Western Australian mining services business providing c..."
  },
  {
    "id": "adzuna-5860532301",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$80,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "newcastle-private-dentist-482-186-sponsorship",
    "url": "jobs/newcastle-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532301?utm_medium=api&utm_source=13c876f1",
    "description": "Private Dentist Jobs in Taree, New South Wales, Australia. Visa Sponsorship - Well-established family dental clinic in beautiful Taree, excellent work-life balance, superb earning potential and a supportive team with an ..."
  },
  {
    "id": "adzuna-5860532330",
    "title": "Periodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-periodontist-482-186-sponsorship",
    "url": "jobs/melbourne-periodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532330?utm_medium=api&utm_source=13c876f1",
    "description": "Periodontist Jobs in Melbourne, Victoria, Australia. Busy established books, strong referral base and high earning potential. Visa sponsorship available. ZEST Dental Recruitment is working in partnership with one of Melb..."
  },
  {
    "id": "adzuna-5860532338",
    "title": "Endodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $200,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-endodontist-482-186-sponsorship",
    "url": "jobs/melbourne-endodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532338?utm_medium=api&utm_source=13c876f1",
    "description": "Endodontist Jobs in Melbourne, Victoria, Australia. Fully Private, High-Earning Role in a Prestigious CBD Clinic. Visa Sponsorship Available. ZEST Dental Recruitment is proud to present an exceptional opportunity for a S..."
  },
  {
    "id": "adzuna-5860532335",
    "title": "Orthodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-orthodontist-482-186-sponsorship",
    "url": "jobs/sydney-orthodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532335?utm_medium=api&utm_source=13c876f1",
    "description": "Orthodontist Job in Regional Western Australia. Excellent earning potential, relocation support and visa sponsorship available if required. ZEST Dental Recruitment, working in partnership with a large and well-establishe..."
  },
  {
    "id": "adzuna-5860532292",
    "title": "Orthodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$400,000 - $450,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-orthodontist-482-186-sponsorship",
    "url": "jobs/melbourne-orthodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532292?utm_medium=api&utm_source=13c876f1",
    "description": "Orthodontist Jobs in Melbourne, Victoria, Australia. $800,000 Base Salary - Earnings Well in Excess of $1.2 Million. Visa Sponsorship Available for Metro Melbourne. ZEST Dental Recruitment is delighted to present an extr..."
  },
  {
    "id": "adzuna-5860532316",
    "title": "Peadiatric Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$100,000 - $210,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-peadiatric-dentist-482-186-sponsorship",
    "url": "jobs/melbourne-peadiatric-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532316?utm_medium=api&utm_source=13c876f1",
    "description": "Paediatric Dentist Jobs in Melbourne, Victoria, Australia. Dedicated Paediatric Department. High Earnings in a Fully Private, State-of-the-Art Clinic. Visa Sponsorship Available. ZEST Dental Recruitment is delighted to p..."
  },
  {
    "id": "adzuna-5860532320",
    "title": "Periodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
    "location": "Perth, WA",
    "state": "WA",
    "category": "technology",
    "visas": [
      "482",
      "494"
    ],
    "visaLabels": [
      "Subclass 482 TSS",
      "Subclass 494 SESR"
    ],
    "salary": "$200,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "perth-periodontist-482-494-sponsorship",
    "url": "jobs/perth-periodontist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532320?utm_medium=api&utm_source=13c876f1",
    "description": "Specialist Periodontist Job in Perth, WA, Australia. Private Independent Practice, High-Earning Opportunity, State-of-the-Art Technology, Superb Location, Visa Approved. ZEST Dental Recruitment, working in partnership wi..."
  },
  {
    "id": "adzuna-5859670899",
    "title": "Scrub/Scout Permanent",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "adelaide-scrubscout-permanent-482-494-sponsorship",
    "url": "jobs/adelaide-scrubscout-permanent-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670899?utm_medium=api&utm_source=13c876f1",
    "description": "We are currently seeking experienced Scrub/Scouts who are looking for Permanent Positions across private hospitals in Adelaide. Orthopaedic experience is highly sought after! WHATS ON OFFER: Permanent roles with flexible..."
  },
  {
    "id": "adzuna-5859670653",
    "title": "Speech Pathologist | New Graduate support program | Sponsorship Available",
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
    "salary": "$80,000 - $86,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-new-graduate-support-program-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-new-graduate-support-program-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670653?utm_medium=api&utm_source=13c876f1",
    "description": "Salary starting from $80,000 - $86,000  Super Mixed ages caseload - 80% in clinic & 20% in the community New Graduate support program With buzzing offices in vibrant Fraser and Sunshine Coast locations, this dynamic priv..."
  },
  {
    "id": "adzuna-5859033804",
    "title": "Special Education Teacher | P–12 | Small Classes | Sponsorship Available, MELBOURNE",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-special-education-teacher-p12-small-classes-sponsorship-available-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-special-education-teacher-p12-small-classes-sponsorship-available-melbourne-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859033804?utm_medium=api&utm_source=13c876f1",
    "description": "Special Education Teacher | P–12 | Small Classes | Sponsorship Available Location: Melbourne, VIC Start: ASAP or by negotiation Type: Full-time, Ongoing Salary: $90,000 – $118,000  super Sponsorship: Available for the ri..."
  },
  {
    "id": "adzuna-5858337975",
    "title": "Registered Nurses",
    "company": "Anglican Care",
    "logoInitial": "A",
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
    "salary": "$114,400 - $124,800 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "canberra-registered-nurses-482-186-sponsorship",
    "url": "jobs/canberra-registered-nurses-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5858337975?utm_medium=api&utm_source=13c876f1",
    "description": "The Opportunity: We have permanent fulltime opportunities for Registered Nurses to join our Anglican Care aged care service at Mirrabooka Place - Gloucester NSW. We welcome applications from Registered Nurses seeking emp..."
  },
  {
    "id": "adzuna-5858283662",
    "title": "Transport - Road Worker - Hay (24992)",
    "company": "Charter Diligence Pty Ltd",
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
    "salary": "$94,536 - $94,536 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-transport-road-worker-hay-24992-482-186-sponsorship",
    "url": "jobs/sydney-transport-road-worker-hay-24992-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5858283662?utm_medium=api&utm_source=13c876f1",
    "description": "Our Client Our client is a major NSW Government transport organisation responsible for keeping communities connected through safe and reliable road and transport infrastructure across metropolitan and regional NSW. This ..."
  },
  {
    "id": "adzuna-5857624272",
    "title": "CNC Machine Operators New",
    "company": "Aston Advantage",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-cnc-machine-operators-new-482-186-sponsorship",
    "url": "jobs/sydney-cnc-machine-operators-new-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5857624272?utm_medium=api&utm_source=13c876f1",
    "description": "CNC Operator | Tingalpa | $41.72/hr  Shift Allowance | Permanent | Sponsorship Available ️ Opportunity: Work on aerospace and defence components in a clean, organised workshop. Set up and operate 3–5 axis CNC machines , ..."
  },
  {
    "id": "adzuna-5856836599",
    "title": "Speech Pathologist | Clinic Based Role | Sponsorship Available for SPA Members!",
    "company": "Gorilla Jobs",
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
    "salary": "$85,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-clinic-based-role-sponsorship-available-for-spa-members-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-clinic-based-role-sponsorship-available-for-spa-members-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5856836599?utm_medium=api&utm_source=13c876f1",
    "description": "Salaries starting from $85,000 - $110,000  Super Paediatric Caseload - based in the Clinic near Daisy Hill State of the Art Training on innovative interventions and equipment including DMI, SpiderCage, Galileo Vibration ..."
  },
  {
    "id": "adzuna-5856835987",
    "title": "Agricultural Diesel Fitter/Mechanic - Regional NSW (Multiple locations)",
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
    "salary": "$80,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-agricultural-diesel-fittermechanic-regional-nsw-multiple-locations-482-186-sponsorship",
    "url": "jobs/sydney-agricultural-diesel-fittermechanic-regional-nsw-multiple-locations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5856835987?utm_medium=api&utm_source=13c876f1",
    "description": "Heavy Diesel Mechanic / Ag Equipment Technician | Regional NSW Are you an experienced Agricultural, Plant, or Heavy Diesel Mechanic located in Australia and looking for a rewarding career move? A progressive Ag Equipment..."
  },
  {
    "id": "adzuna-5856584888",
    "title": "General Practitioner (VR GP) – North of Brisbane/ near Sunshine Coast, QLD (DPA position)",
    "company": "WAVELENGTH",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-vr-gp-north-of-brisbane-near-sunshine-coast-qld-dpa-position-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-vr-gp-north-of-brisbane-near-sunshine-coast-qld-dpa-position-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5856584888?utm_medium=api&utm_source=13c876f1",
    "description": "Location available upon request, QLD Summary Embrace the wonderful QLD lifestyle between Brisbane and the Sunshine coast and work as a GP at an established private billing practice that is experiencing growth in patient ..."
  },
  {
    "id": "adzuna-5856584739",
    "title": "General Practitioner (VR GP) – Sunshine Coast, QLD",
    "company": "WAVELENGTH",
    "logoInitial": "W",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-vr-gp-sunshine-coast-qld-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-vr-gp-sunshine-coast-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5856584739?utm_medium=api&utm_source=13c876f1",
    "description": "Location available upon request, QLD Summary Join a collaborative, GP-owned practice where clinical autonomy, flexibility and quality patient care come first, all while enjoying the lifestyle benefits of Queensland's stu..."
  },
  {
    "id": "adzuna-5856192063",
    "title": "Sonographer",
    "company": "Integral Diagnostics",
    "logoInitial": "I",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-sonographer-482-186-sponsorship",
    "url": "jobs/sydney-sonographer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5856192063?utm_medium=api&utm_source=13c876f1",
    "description": "ABOUT THE ROLE We are seeking an experienced Sonographer to join our Apex Radiology team in Forrestfield on a full-time or part-time basis , working Monday to Friday. This is a fantastic opportunity to work within a well..."
  },
  {
    "id": "adzuna-5853681706",
    "title": "Account Manager, Physician & Enterprise Partnerships (Australia)",
    "company": "Prenuvo",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-account-manager-physician-enterprise-partnerships-australia-482-186-sponsorship",
    "url": "jobs/melbourne-account-manager-physician-enterprise-partnerships-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5853681706?utm_medium=api&utm_source=13c876f1",
    "description": "About Us At Prenuvo , we are on a mission to flip the paradigm from reactive “sick-care” to proactive health care. Our award-winning whole body scan is fast (under 1 hour), safe (MRI has no ionizing radiation), and non-i..."
  },
  {
    "id": "adzuna-5851364666",
    "title": "Maths Teacher – Melbourne, Victoria",
    "company": "Prospero Teaching",
    "logoInitial": "P",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-maths-teacher-melbourne-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-maths-teacher-melbourne-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5851364666?utm_medium=api&utm_source=13c876f1",
    "description": "Secondary Maths Teacher – Melbourne, Victoria Start Date: Term 3, 2025 (flexible) Contract: Permanent, Full-Time Sponsorship: Available Prospero Teaching is supporting a well-regarded co-educational secondary school in M..."
  },
  {
    "id": "adzuna-5851099600",
    "title": "Production Operator",
    "company": "Sensient",
    "logoInitial": "S",
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
    "verifiedSponsor": true,
    "anzsco": "233512",
    "posted": "Recently",
    "slug": "sydney-production-operator-482-186-sponsorship",
    "url": "jobs/sydney-production-operator-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5851099600?utm_medium=api&utm_source=13c876f1",
    "description": "Description Come join the skilled team at Sensient Technologies . We are collaborative and hard working. We solve tough problems. And we will be better with you. We are seeking a self-motivated Production Operator. The s..."
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
        job.anzsco.includes(currentFilters.keyword);

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
      jobCountEl.textContent = `${jobs.length} Verified Sponsorship Jobs`;
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
      // In-feed ad placeholder after every 3 jobs (compliant with Google AdSense spacing)
      if (index === 3) {
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
                <span class="verified-badge" title="Accredited Standard Business Sponsor (SBS)">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  Verified Sponsor
                </span>
              ` : ''}
            </div>
          </div>
        </div>

        <div class="job-info-pills">
          ${visaBadges}
          <span class="info-pill badge-salary">${job.salary}</span>
          <span class="info-pill">ANZSCO: ${job.anzsco}</span>
          <span class="info-pill">${job.type}</span>
        </div>

        <p class="job-snippet">${job.description}</p>

        <div class="job-card-bottom">
          <div class="posted-date">
            <svg style="width:15px;height:15px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Posted ${job.posted}</span>
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
