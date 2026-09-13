/**
 * OZ Sponsor Jobs - Core JavaScript Application
 * High-performance search, filtering, and responsive controls
 */

// Sample verified Australian Visa Sponsorship jobs
const JOBS_DATA = [
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
    "description": "Company Overview: Next Stop Travel is a remote-based organization providing structured planning and coordination services to a broad client base. Our team is committed to delivering organized, accurate, and responsive su..."
  },
  {
    "id": "jooble-5780457250463978761",
    "title": "Customer Experience Specialist",
    "company": "Aphex",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-customer-experience-specialist-482-186-sponsorship",
    "url": "jobs/sydney-customer-experience-specialist-482-186-sponsorship.html",
    "description": "Our customers are the largest construction contractors, responsible for the tunnels, roads, bridges, and buildings we use daily. Our users are the engineers managing and planning these incredible projects. Instead of jug..."
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
    "description": " ASX: Powering Australia's financial markets  Why join the ASX?\r\n When you join ASX, you’re joining a company with a strong purpose – to power a stronger economic future by enabling a fair and dynamic marketplace for all..."
  }
];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initJobFilters();
  initContactForm();
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
            <button type="button" class="btn btn-outline btn-sm" onclick="alert('Bookmark saved to local storage.')">Save</button>
            <a href="${job.url || `jobs/${job.slug}.html`}" class="btn btn-primary btn-sm">View & Apply &rarr;</a>
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
