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
            <a href="${job.url || `jobs/${job.slug}.html`}" class="btn btn-outline btn-sm">Details & PR</a>
            <a href="${job.apply_url || job.url || `jobs/${job.slug}.html`}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">Apply &rarr;</a>
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
