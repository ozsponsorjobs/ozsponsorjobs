/**
 * OZ Sponsor Jobs - Core JavaScript Application
 * High-performance search, filtering, and responsive controls
 */

// Sample verified Australian Visa Sponsorship jobs
const JOBS_DATA = [
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
    "slug": "sydney-team-manager-child-protection-after-hours-482-186-sponsorship",
    "url": "jobs/sydney-team-manager-child-protection-after-hours-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5925213899?se=6rZfegHH8RGoaItcvmTvnw&utm_medium=api&utm_source=13c876f1&v=79322F009B982D0EA0190D40E91DD0D51B5B2E89",
    "description": "The Department of Families, Fairness and Housing (DFFH) works hard to create equal opportunities for all Victorians to live a safe, respected and valued life. Our areas of focus are child protection, housing, disability,..."
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
    "salary": "$250,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-pep-gp-150hr-guarantee-482-visa-sponsorship-level-3-supervisor-available-482-186-sponsorship",
    "url": "jobs/sydney-pep-gp-150hr-guarantee-482-visa-sponsorship-level-3-supervisor-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5924290533?utm_medium=api&utm_source=13c876f1",
    "description": "Your Pathway to Fellowship Starts in Tumbarumba Are you on the RACGP Practice Experience Program and looking for a role where you can grow your skills, gain broad clinical experience, and become a trusted local doctor? R..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "melbourne-english-teacher-482-186-sponsorship",
    "url": "jobs/melbourne-english-teacher-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5924092831?utm_medium=api&utm_source=13c876f1",
    "description": "English Teacher (Full-Time, Ongoing) – Great School near Morwell, VIC Are you a passionate English teacher looking for your next opportunity? We are recruiting on behalf of a fantastic school located near Morwell, in the..."
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-associate-nurse-unit-manager-relocate-to-regional-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-associate-nurse-unit-manager-relocate-to-regional-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090783?se=rqk3ggHH8RGW3rMFv5U8bA&utm_medium=api&utm_source=13c876f1&v=80E4B4F878F368F901EEAB01571F3467D8BA0482",
    "description": "Talent Quarter are proud to partner with a well established regional health service who have an exciting opportunity an experienced and motivated Associate Nurse Unit Manager (ANUM) to join their team.This role is ideal ..."
  },
  {
    "id": "adzuna-5924090683",
    "title": "Recruitment Consultant - Psychiatry",
    "company": "Sorciety",
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
    "anzsco": "223112",
    "posted": "Recently",
    "slug": "sydney-recruitment-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/sydney-recruitment-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090683?se=KgBcgQHH8RGde-6MbVqpLg&utm_medium=api&utm_source=13c876f1&v=671CF64518B97461FA641EC11F8D1E969F446A4E",
    "description": "The opportunity A specialist medical recruitment agency in the Sydney CBD is adding to its psychiatry team. The role Work alongside the team lead, sharing coverage and live work from the start Build the junior psychiatry..."
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-executive-housekeeping-manager-crown-plaza-shell-cove-marina-482-186-sponsorship",
    "url": "jobs/sydney-executive-housekeeping-manager-crown-plaza-shell-cove-marina-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5924090116?se=rqk3ggHH8RGW3rMFv5U8bA&utm_medium=api&utm_source=13c876f1&v=7809127936EA16CE5BFE5BB14155D06C30E1E0F5",
    "description": "Executive Housekeeping Manager ahs hospitality, part of RGF Staffing ANZ, is Australia and New Zealand’s largest provider of outsourced housekeeping management services and partners with the most iconic hotel brands. We ..."
  },
  {
    "id": "jooble--5212033971521795543",
    "title": "Senior Manager, Technical Account Manager",
    "company": "Ping Identity",
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-senior-manager-technical-account-manager-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-technical-account-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5212033971521795543",
    "description": " About Ping Identity:  At Ping Identity, we believe in making digital experiences both secure and seamless for all users, without compromise. We call this digital freedom. And it's not just something we provide our custo..."
  },
  {
    "id": "jooble-2768804826604169478",
    "title": "Channel Management Specialist",
    "company": "BYD",
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-channel-management-specialist-sydney-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-channel-management-specialist-sydney-melbourne-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2768804826604169478",
    "description": ""
  },
  {
    "id": "adzuna-5923054217",
    "title": "Head of Coffee",
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
    "salary": "$180 - $240 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "222311",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "322313",
    "posted": "Recently",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "423313",
    "posted": "Recently",
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
    "salary": "$180,000 - $180,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "253399",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "139999",
    "posted": "Recently",
    "slug": "adelaide-manager-workplaces-482-494-sponsorship",
    "url": "jobs/adelaide-manager-workplaces-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921898274?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
    "slug": "adelaide-360-permanent-recruitment-consultant-adelaide-cbd-482-494-sponsorship",
    "url": "jobs/adelaide-360-permanent-recruitment-consultant-adelaide-cbd-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921676789?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "233311",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-community-aged-care-ndis-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-community-aged-care-ndis-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5921520303?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272311",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "322313",
    "posted": "Recently",
    "slug": "sydney-visa-sponsorship-off-shore-metal-fabricatorswelders-ansco-322311322313-482-186-sponsorship",
    "url": "jobs/sydney-visa-sponsorship-off-shore-metal-fabricatorswelders-ansco-322311322313-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920708858?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "324311",
    "posted": "Recently",
    "slug": "sydney-autoglazier-rydalmere-482-186-sponsorship",
    "url": "jobs/sydney-autoglazier-rydalmere-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920707834?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "salary": "$65 - $65 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "category": "management",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$180 - $230 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-aged-disability-care-worker-remote-482-186-sponsorship",
    "url": "jobs/sydney-aged-disability-care-worker-remote-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5920025342?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=5524549A80C8F7D09A49EE3EEF1A394E26207047",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
    "slug": "brisbane-360-permanent-recruitment-consultant-eight-mile-plains-482-494-sponsorship",
    "url": "jobs/brisbane-360-permanent-recruitment-consultant-eight-mile-plains-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5920022369?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$100,000 - $100,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "141111",
    "posted": "Recently",
    "slug": "newcastle-restaurant-manager-award-winning-gastro-pub-newcastle100k-super-482-186-sponsorship",
    "url": "jobs/newcastle-restaurant-manager-award-winning-gastro-pub-newcastle100k-super-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5919100439?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "341111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
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
    "salary": "$10 per day",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$90,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "melbourne-developer-programmer-482-186-sponsorship",
    "url": "jobs/melbourne-developer-programmer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5912395207?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$180 - $240 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-deployment-lead-482-186-sponsorship",
    "url": "jobs/melbourne-deployment-lead-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5909305360?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "341111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "131112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "category": "management",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$60 - $75 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "221111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-assistant-shop-manager-camberwell-482-186-sponsorship",
    "url": "jobs/sydney-assistant-shop-manager-camberwell-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5904687359?se=KPUT-XXB8RG-V75y7ZstFQ&utm_medium=api&utm_source=13c876f1&v=8C9AA0C5D2DCD9CDF7AB24D6733AF1FF2DF3434F",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
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
    "salary": "$65 - $75 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$200k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233211",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "234711",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "324311",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252511",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "223112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
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
    "salary": "$200k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "233211",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$800 per month",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "131112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-delivery-lead-compliance-and-governance-12mftc-482-186-sponsorship",
    "url": "jobs/sydney-delivery-lead-compliance-and-governance-12mftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4203461732050595105",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "323212",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "salary": "$250,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
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
    "salary": "$118,560 - $118,560 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "burnie-senior-engineer-power-systems-integration-482-494-sponsorship",
    "url": "jobs/burnie-senior-engineer-power-systems-integration-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900303172?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5900158063",
    "title": "Science teachers, Latrobe Valley",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "sydney-science-teachers-latrobe-valley-482-186-sponsorship",
    "url": "jobs/sydney-science-teachers-latrobe-valley-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5900158063?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5899904530",
    "title": "Duty Manager, $80KS, Sponsorship, Canberra Relocation, Hands-On Gaming Leader",
    "company": "Placed Recruitment",
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
    "salary": "$80,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-duty-manager-80ks-sponsorship-canberra-relocation-hands-on-gaming-leader-482-186-sponsorship",
    "url": "jobs/sydney-duty-manager-80ks-sponsorship-canberra-relocation-hands-on-gaming-leader-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899904530?utm_medium=api&utm_source=13c876f1",
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
    "verifiedSponsor": true,
    "anzsco": "234711",
    "posted": "Recently",
    "slug": "sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship",
    "url": "jobs/sydney-senior-emergency-veterinarian-greencross-veterinary-hospital-werribee-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899229073?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5899064308",
    "title": "Private Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$100,000 - $150,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "hobart-private-dentist-482-494-sponsorship",
    "url": "jobs/hobart-private-dentist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5899064308?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5898059554",
    "title": "Finance Intern - Summer 2027",
    "company": "Lenovo",
    "logoInitial": "L",
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
    "slug": "sydney-finance-intern-summer-2027-482-186-sponsorship",
    "url": "jobs/sydney-finance-intern-summer-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5898059554?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5897686784",
    "title": "Special Needs teacher, Victoria",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "melbourne-special-needs-teacher-victoria-482-186-sponsorship",
    "url": "jobs/melbourne-special-needs-teacher-victoria-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5897686784?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "sydney-dentist-maven-dental-port-lincoln-482-186-sponsorship",
    "url": "jobs/sydney-dentist-maven-dental-port-lincoln-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5897335678?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-415836267453847101",
    "title": "Director - Building Services",
    "company": "Invictus People",
    "logoInitial": "I",
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
    "salary": "$250k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "adelaide-director-building-services-482-494-sponsorship",
    "url": "jobs/adelaide-director-building-services-482-494-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/415836267453847101",
    "description": ""
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
    "anzsco": "324311",
    "posted": "Recently",
    "slug": "sydney-heavy-commercial-autoglazier-482-186-sponsorship",
    "url": "jobs/sydney-heavy-commercial-autoglazier-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953644?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896953235",
    "title": "Production Worker",
    "company": "Sensient",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-production-worker-482-186-sponsorship",
    "url": "jobs/sydney-production-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953235?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896953089",
    "title": "Autoglazier – Sumner",
    "company": "NWG ADAS & Windscreens",
    "logoInitial": "N",
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
    "salary": "$75,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "324311",
    "posted": "Recently",
    "slug": "brisbane-autoglazier-sumner-482-494-sponsorship",
    "url": "jobs/brisbane-autoglazier-sumner-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896953089?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896952069",
    "title": "Occupational Therapist - Melton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-melton-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-melton-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896952069?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5896948899",
    "title": "Autoglazier – Essendon Fields",
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
    "verifiedSponsor": true,
    "anzsco": "324311",
    "posted": "Recently",
    "slug": "sydney-autoglazier-essendon-fields-482-186-sponsorship",
    "url": "jobs/sydney-autoglazier-essendon-fields-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896948899?utm_medium=api&utm_source=13c876f1",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-swansea-part-time-casual-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-swansea-part-time-casual-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5896453219?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=B7E9F08E6261A012F1EAD51F1C55280FD8E00296",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-perinatal-psychiatry-registrar-482-186-sponsorship",
    "url": "jobs/sydney-perinatal-psychiatry-registrar-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896452854?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5896056638",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
    "logoInitial": "M",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "wollongong-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/wollongong-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056638?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896056659",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/sydney-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056659?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896056635",
    "title": "Specialist Consultant - Psychiatry",
    "company": "Medrecruit",
    "logoInitial": "M",
    "location": "Newcastle, NSW",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "newcastle-specialist-consultant-psychiatry-482-186-sponsorship",
    "url": "jobs/newcastle-specialist-consultant-psychiatry-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896056635?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5896051984",
    "title": "Clinical Director - Emergency Medicine (ED)",
    "company": "Medrecruit",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-clinical-director-emergency-medicine-ed-482-186-sponsorship",
    "url": "jobs/sydney-clinical-director-emergency-medicine-ed-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5896051984?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5895467640",
    "title": "Chef/ Cook",
    "company": "Lincy Pty Ltd",
    "logoInitial": "L",
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
    "salary": "$77,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "melbourne-chef-cook-482-186-sponsorship",
    "url": "jobs/melbourne-chef-cook-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5895467640?utm_medium=api&utm_source=13c876f1",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-category-manager-482-186-sponsorship",
    "url": "jobs/melbourne-category-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5894810090?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5894001608",
    "title": "Complex Claims Examiner, Business Package",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-complex-claims-examiner-business-package-482-186-sponsorship",
    "url": "jobs/sydney-complex-claims-examiner-business-package-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5894001608?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--1708111920967463090",
    "title": "Network Engineer (Japan / Australia), Commercial Energy Storage, APAC",
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
    "anzsco": "263111",
    "posted": "Recently",
    "slug": "sydney-network-engineer-japan-australia-commercial-energy-storage-apac-482-186-sponsorship",
    "url": "jobs/sydney-network-engineer-japan-australia-commercial-energy-storage-apac-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1708111920967463090",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-fracgp-carrum-downs-doctors-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-fracgp-carrum-downs-doctors-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893967568?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-hastings-family-medical-centre-general-practitioner-482-186-sponsorship",
    "url": "jobs/sydney-hastings-family-medical-centre-general-practitioner-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5893967575?utm_medium=api&utm_source=13c876f1",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-correspondence-governance-manager-482-186-sponsorship",
    "url": "jobs/sydney-correspondence-governance-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/586657431847569396",
    "description": ""
  },
  {
    "id": "jooble--5516667540170944609",
    "title": "Senior Growth Manager - Lifecycle & Product",
    "company": "OKX",
    "logoInitial": "O",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-growth-manager-lifecycle-product-482-186-sponsorship",
    "url": "jobs/sydney-senior-growth-manager-lifecycle-product-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5516667540170944609",
    "description": ""
  },
  {
    "id": "jooble--4609129753058659633",
    "title": "Analyst, Business Excellence",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-analyst-business-excellence-482-186-sponsorship",
    "url": "jobs/sydney-analyst-business-excellence-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4609129753058659633",
    "description": ""
  },
  {
    "id": "jooble--2357227094618648263",
    "title": "Dispute Resolution Coordinator",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-dispute-resolution-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-dispute-resolution-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2357227094618648263",
    "description": ""
  },
  {
    "id": "jooble--8391910419974907395",
    "title": "Litigation and External Dispute Resolution Coordinator",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-litigation-and-external-dispute-resolution-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-litigation-and-external-dispute-resolution-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8391910419974907395",
    "description": ""
  },
  {
    "id": "jooble--4118563257887367581",
    "title": "Digital Channel Manager",
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-digital-channel-manager-482-186-sponsorship",
    "url": "jobs/sydney-digital-channel-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4118563257887367581",
    "description": ""
  },
  {
    "id": "adzuna-5892223379",
    "title": "Head Chef | Brand-New Regional Pub Opening | Sponsorship Available",
    "company": "Frontline Recruitment",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-brand-new-regional-pub-opening-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-brand-new-regional-pub-opening-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5892223379?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5891804774",
    "title": "Technical Trainer/Solution Architect - Australia/New Zealand",
    "company": "Copeland",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-technical-trainersolution-architect-australianew-zealand-482-186-sponsorship",
    "url": "jobs/sydney-technical-trainersolution-architect-australianew-zealand-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5891804774?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5890696511",
    "title": "Radiation therapist",
    "company": "GenesisCare",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-radiation-therapist-482-186-sponsorship",
    "url": "jobs/sydney-radiation-therapist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890696511?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-operations-associate-482-186-sponsorship",
    "url": "jobs/sydney-operations-associate-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4422830714527212800",
    "description": ""
  },
  {
    "id": "adzuna-5890586630",
    "title": "Home Care Worker - Salisbury SA - Italian Speaking",
    "company": "My Guardian",
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "perth-home-care-worker-salisbury-sa-italian-speaking-482-494-sponsorship",
    "url": "jobs/perth-home-care-worker-salisbury-sa-italian-speaking-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5890586630?se=rK1MJam18RGk9fXOxIfQjQ&utm_medium=api&utm_source=13c876f1&v=1F46E3E00A0B378A5911BC9B08322DF99DD64716",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-housekeeping-supervisor-482-186-sponsorship",
    "url": "jobs/sydney-housekeeping-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5890586584?se=2paKOam18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=4834179D661EB305AD8618EBED08CE1830991FD8",
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
    "verifiedSponsor": true,
    "anzsco": "272311",
    "posted": "Recently",
    "slug": "sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship",
    "url": "jobs/sydney-senior-psychologist-toowoomba-qld-10004258-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890046598?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-queanbeyan-dpa-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-queanbeyan-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016651?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-belconnen-dpa-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-belconnen-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016557?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5890016538",
    "title": "General Practitioner - Charters Towers (DPA/MMM4)",
    "company": "DXC Medical Recruitment",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-charters-towers-dpammm4-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-charters-towers-dpammm4-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016538?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-carrum-downs-dpa-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-carrum-downs-dpa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016278?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5890016197",
    "title": "General Practitioner - Lenah Valley (DPA/MMM2)",
    "company": "DXC Medical Recruitment",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-lenah-valley-dpammm2-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-lenah-valley-dpammm2-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890016197?utm_medium=api&utm_source=13c876f1",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-trainee-seafood-processor-482-494-sponsorship",
    "url": "jobs/brisbane-trainee-seafood-processor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5890015657?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5889986899",
    "title": "Drillers - NSW & QLD",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-drillers-nsw-qld-immediate-start-482-186-sponsorship",
    "url": "jobs/sydney-drillers-nsw-qld-immediate-start-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889986899?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5889639982",
    "title": "Registered Nurse - Blakeney Lodge - Sponsorship Available",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-blakeney-lodge-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-blakeney-lodge-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889639982?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5889432152",
    "title": "Head of Operations – Manufacturing",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-head-of-operations-manufacturing-482-186-sponsorship",
    "url": "jobs/sydney-head-of-operations-manufacturing-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889432152?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5889415337",
    "title": "Oral Health Therapist - Perth, WA",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$50 - $70 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-oral-health-therapist-perth-wa-482-494-sponsorship",
    "url": "jobs/perth-oral-health-therapist-perth-wa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889415337?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "322313",
    "posted": "Recently",
    "slug": "melbourne-c1-boilermakerwelder-for-aus-based-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-c1-boilermakerwelder-for-aus-based-applicants-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889404789?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5889057868",
    "title": "Registered Nurse - Surgical",
    "company": "MaterNews",
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
    "slug": "sydney-registered-nurse-surgical-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-surgical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889057868?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-team-leader-general-administration-unsw-engineering-school-shared-services-482-186-sponsorship",
    "url": "jobs/sydney-team-leader-general-administration-unsw-engineering-school-shared-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5889057605?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5888740358",
    "title": "Home Care Worker - Tullamarine VIC",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-tullamarine-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-tullamarine-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888740358?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5888740021",
    "title": "AHS Solutions Manager",
    "company": "Caterpillar Inc.",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-ahs-solutions-manager-482-186-sponsorship",
    "url": "jobs/sydney-ahs-solutions-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888740021?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5888739973",
    "title": "Head Chef - Carlingford Greens Care Community",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-carlingford-greens-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-carlingford-greens-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888739973?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5888739664",
    "title": "Finance Analyst",
    "company": "UNSW",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "canberra-finance-analyst-482-186-sponsorship",
    "url": "jobs/canberra-finance-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5888739664?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=F8F62D99C1765AB7137AC9F3392B17CE6A955864",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5888490704",
    "title": "Electrician - Perth Based",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "341111",
    "posted": "Recently",
    "slug": "perth-electrician-perth-based-482-494-sponsorship",
    "url": "jobs/perth-electrician-perth-based-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888490704?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5888489948",
    "title": "Qualified Electrician — Brisbane North",
    "company": "ARC Staff - Australian Recruitment Company",
    "logoInitial": "A",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "341111",
    "posted": "Recently",
    "slug": "brisbane-qualified-electrician-brisbane-north-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-electrician-brisbane-north-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888489948?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5888489866",
    "title": "Primary Teacher – Central Queensland",
    "company": "Talent Focus",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "sydney-primary-teacher-central-queensland-482-186-sponsorship",
    "url": "jobs/sydney-primary-teacher-central-queensland-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5888489866?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-8932105684766992932",
    "title": "Deployment Manager, Supercharger",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-deployment-manager-supercharger-vic-482-186-sponsorship",
    "url": "jobs/sydney-deployment-manager-supercharger-vic-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8932105684766992932",
    "description": ""
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-business-development-analyst-apac-residential-energy-482-186-sponsorship",
    "url": "jobs/sydney-business-development-analyst-apac-residential-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-640062809315861748",
    "description": ""
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
    "anzsco": "351411",
    "posted": "Recently",
    "slug": "sydney-short-order-cook-all-rounder-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship",
    "url": "jobs/sydney-short-order-cook-all-rounder-charlotte-pass-snow-resort-summer-2026-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887746565?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=3292BAF8AEC82E550CF0AFC4053365666B883277",
    "description": ""
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
    "anzsco": "234711",
    "posted": "Recently",
    "slug": "canberra-emergency-critical-care-veterinarian-arh-canberra-full-time-part-time-casual-sponsorship-relocation-available-482-186-sponsorship",
    "url": "jobs/canberra-emergency-critical-care-veterinarian-arh-canberra-full-time-part-time-casual-sponsorship-relocation-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887746516?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887746180",
    "title": "Registered Nurse (Night Duty) - Unanderra - Sponsorship available",
    "company": "Catholic Healthcare",
    "logoInitial": "C",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "wollongong-registered-nurse-night-duty-unanderra-sponsorship-available-482-186-sponsorship",
    "url": "jobs/wollongong-registered-nurse-night-duty-unanderra-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887746180?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--4077524952396918529",
    "title": "Customer Communications Manager",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-communications-manager-482-186-sponsorship",
    "url": "jobs/sydney-customer-communications-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4077524952396918529",
    "description": ""
  },
  {
    "id": "adzuna-5887730523",
    "title": "Trainee Seafood Processor",
    "company": "Frontline Recruitment Group",
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
    "salary": "$70,000 - $75,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-trainee-seafood-processor-482-186-sponsorship",
    "url": "jobs/sydney-trainee-seafood-processor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887730523?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-senior-manager-apj-field-channel-marketing-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-apj-field-channel-marketing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4636715622128084076",
    "description": ""
  },
  {
    "id": "adzuna-5887434865",
    "title": "Head Chef - Kew Grove Care Community",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-kew-grove-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-kew-grove-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434865?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=CC5DBADC8CFF0EDCA3419FF3F8109A49D766A4D0",
    "description": ""
  },
  {
    "id": "adzuna-5887434768",
    "title": "Home Care Worker - Vietnamese Speaker - Keysborough VIC",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-vietnamese-speaker-keysborough-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-vietnamese-speaker-keysborough-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434768?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=62276B9B0420A6D49061AEA88445BD50AD1F64CB",
    "description": ""
  },
  {
    "id": "adzuna-5887434751",
    "title": "Head Chef - Mill Park Manor Care Community",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-mill-park-manor-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-mill-park-manor-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887434751?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=97D2BB865576D820132D7B567895CB72A71FB1A9",
    "description": ""
  },
  {
    "id": "adzuna-5887433717",
    "title": "Relief Head Chef",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-relief-head-chef-482-186-sponsorship",
    "url": "jobs/sydney-relief-head-chef-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887433717?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=5ECD25E88F50C2C0066CA991BCABFBABF71527AD",
    "description": ""
  },
  {
    "id": "adzuna-5887431701",
    "title": "Head Chef",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887431701?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=F7085B820070D752907DD1329EFED1717016A57D",
    "description": ""
  },
  {
    "id": "adzuna-5887429530",
    "title": "Registered Nurse",
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
    "slug": "sydney-registered-nurse-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887429530?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887428849",
    "title": "Family Support Worker – Rockhampton",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-family-support-worker-rockhampton-482-186-sponsorship",
    "url": "jobs/sydney-family-support-worker-rockhampton-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887428849?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887151149",
    "title": "Head Chef - Coburg North Villa Care Community",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-coburg-north-villa-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-coburg-north-villa-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887151149?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=824D140655CCB93257919B0CCFF6EE812459A693",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887150717",
    "title": "1A - Production Administrator (P3)",
    "company": "Pinoy Pro Services",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "adelaide-1a-production-administrator-p3-482-494-sponsorship",
    "url": "jobs/adelaide-1a-production-administrator-p3-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150717?se=nGYEQBu08RGSI57gYuD12g&utm_medium=api&utm_source=13c876f1&v=45B9B4FA67245ADA413BC65703D8E8F54DC499F0",
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-corporate-after-hours-consultant-482-186-sponsorship",
    "url": "jobs/sydney-corporate-after-hours-consultant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150593?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=527989DAD4A452468B73BFBBAFF544B27AF9EC19",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-housekeeper-482-186-sponsorship",
    "url": "jobs/sydney-housekeeper-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887150227?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=071FE18C3B1D14C28807AA1B1183F86FCC97DB23",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887149980",
    "title": "L2 Support Engineer",
    "company": "Solventum",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-l2-support-engineer-482-186-sponsorship",
    "url": "jobs/sydney-l2-support-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887149980?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887149813",
    "title": "Home Care Worker - Wedderburn VIC",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "melbourne-home-care-worker-wedderburn-vic-482-186-sponsorship",
    "url": "jobs/melbourne-home-care-worker-wedderburn-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887149813?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=11A61E696B56A96FB59818EAB21C7C224B70D063",
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887148637",
    "title": "Restaurant Manager",
    "company": "Guzman y Gomez",
    "logoInitial": "G",
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
    "anzsco": "141111",
    "posted": "Recently",
    "slug": "sydney-restaurant-manager-482-186-sponsorship",
    "url": "jobs/sydney-restaurant-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887148637?se=yKrVsKy28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=B1395027FA4F61CEA852608E9F25D9136E3F72E6",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-housekeeping-supervisor-qld95-482-494-sponsorship",
    "url": "jobs/brisbane-housekeeping-supervisor-qld95-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887148162?se=jDpkQ3i38RGz-cafFv7gOA&utm_medium=api&utm_source=13c876f1&v=A602313F435EE2DB2B05A812E3319F2BB62E170B",
    "description": ""
  },
  {
    "id": "adzuna-5887147703",
    "title": "Barista",
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
    "anzsco": "351411",
    "posted": "Recently",
    "slug": "perth-barista-482-494-sponsorship",
    "url": "jobs/perth-barista-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147703?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=253FA90FEA3B6C3ECA5BA97043AF09988FA6E390",
    "description": ""
  },
  {
    "id": "adzuna-5887147258",
    "title": "Senior Geotechnical Engineer",
    "company": "INAUTALENT",
    "logoInitial": "I",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-senior-geotechnical-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-geotechnical-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147258?se=huoV2Wyz8RG88uD2ohwOjw&utm_medium=api&utm_source=13c876f1&v=601BD15C22FBB1FFAE4FDE11A4467BB2749F00AE",
    "description": ""
  },
  {
    "id": "adzuna-5887147156",
    "title": "Workplace Experience Concierge",
    "company": "dentsu",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-workplace-experience-concierge-482-186-sponsorship",
    "url": "jobs/sydney-workplace-experience-concierge-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887147156?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=3FEB52A7BCFAF8394003441A94F49D5FC7E50F3B",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887146419",
    "title": "Home Care Worker - Logan Central QLD",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "brisbane-home-care-worker-logan-central-qld-482-494-sponsorship",
    "url": "jobs/brisbane-home-care-worker-logan-central-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887146419?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=03F40BC69A5415BB198C9BBA8BE0E0A71CE80BB6",
    "description": ""
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
    "anzsco": "233211",
    "posted": "Recently",
    "slug": "brisbane-experienced-civil-drafter-482-494-sponsorship",
    "url": "jobs/brisbane-experienced-civil-drafter-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887144171?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=48492351860BCF99B5A88825CCBBC39341526A5A",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887142835",
    "title": "Fire Engineer",
    "company": "Vertical Recruitment",
    "logoInitial": "V",
    "location": "Gold Coast, QLD",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "gold-coast-fire-engineer-482-494-sponsorship",
    "url": "jobs/gold-coast-fire-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887142835?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=F8668DF00FE2A21E85677839564771EB9177A292",
    "description": ""
  },
  {
    "id": "adzuna-5887140264",
    "title": "Hospitalist Position just outside Chicago!",
    "company": "In Compass Health",
    "logoInitial": "I",
    "location": "Hobart, TAS",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "hobart-hospitalist-position-just-outside-chicago-482-494-sponsorship",
    "url": "jobs/hobart-hospitalist-position-just-outside-chicago-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887140264?se=yKrVsKy28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=84ACFEA0B7394C7B10A1BA5AB4CB86576F17F4F8",
    "description": ""
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
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "brisbane-sales-representative-parts-accessories-482-494-sponsorship",
    "url": "jobs/brisbane-sales-representative-parts-accessories-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887140014?se=rs-wsay28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=E7FCA9FD448C8C539E16E2804278FCBEB5CCEC0F",
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-enrolled-nurse-482-186-sponsorship",
    "url": "jobs/sydney-enrolled-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887139019?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5887138627",
    "title": "Senior Project Engineer",
    "company": "Myne Talent",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-senior-project-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-project-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887138627?se=okrxp6y28RGv4q9XZ2bJfw&utm_medium=api&utm_source=13c876f1&v=7A324410F8D1BA4742041B6CBC2266983111730F",
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
    "verifiedSponsor": true,
    "anzsco": "261313",
    "posted": "Recently",
    "slug": "sydney-software-engineer-model-deployment-482-186-sponsorship",
    "url": "jobs/sydney-software-engineer-model-deployment-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887137933?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887136076",
    "title": "Experienced Ticketer",
    "company": "Flight Centre",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-experienced-ticketer-482-186-sponsorship",
    "url": "jobs/sydney-experienced-ticketer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887136076?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=9135670D537CC835F23A277AF3A84892B4BE5D60",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-travel-operations-specialist-content-482-186-sponsorship",
    "url": "jobs/sydney-travel-operations-specialist-content-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887136141?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=0E80BB9DABAE3F416496F2EE3AB50079C2D6E8AF",
    "description": ""
  },
  {
    "id": "adzuna-5887134968",
    "title": "Management | Cleveland Sands",
    "company": "Australian Venue",
    "logoInitial": "A",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-management-cleveland-sands-482-494-sponsorship",
    "url": "jobs/brisbane-management-cleveland-sands-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887134968?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=994FD825268DFEC7A1E8B4BB807D9A036E3F421D",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-consumer-risk-manager-482-186-sponsorship",
    "url": "jobs/sydney-consumer-risk-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887134896?se=rK1MJam18RGk9fXOxIfQjQ&utm_medium=api&utm_source=13c876f1&v=6A591F020BF197690125E6E838C9433C4145E8DE",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship",
    "url": "jobs/brisbane-home-care-worker-sunnybank-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5887133926?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=87BB9EAF17A5B84204B80CA38A4E43069844229B",
    "description": ""
  },
  {
    "id": "adzuna-5887133338",
    "title": "Vanguard Capital Management - Investment Stewardship Analyst",
    "company": "The Vanguard Group",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-vanguard-capital-management-investment-stewardship-analyst-482-186-sponsorship",
    "url": "jobs/melbourne-vanguard-capital-management-investment-stewardship-analyst-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887133338?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5887051673",
    "title": "Occupational Therapist",
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-482-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-482-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5887051673?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5886954592",
    "title": "Special Education teacher, Hoppers Crossing, Immediate start",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "melbourne-special-education-teacher-hoppers-crossing-immediate-start-482-186-sponsorship",
    "url": "jobs/melbourne-special-education-teacher-hoppers-crossing-immediate-start-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886954592?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5886949744",
    "title": "Field Senior Cost Engineer",
    "company": "Bechtel",
    "logoInitial": "B",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-field-senior-cost-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-field-senior-cost-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886949744?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-6699835679870350948",
    "title": "Project Coordinator",
    "company": "Greystar",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-project-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-project-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6699835679870350948",
    "description": ""
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-aged-or-disabled-carer-482-186-sponsorship",
    "url": "jobs/sydney-aged-or-disabled-carer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886484763?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252511",
    "posted": "Recently",
    "slug": "sydney-physiotherapist-coffs-harbour-482-186-sponsorship",
    "url": "jobs/sydney-physiotherapist-coffs-harbour-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886337826?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--5250019678247108251",
    "title": "Capital Reporting Actuary",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-capital-reporting-actuary-482-186-sponsorship",
    "url": "jobs/sydney-capital-reporting-actuary-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5250019678247108251",
    "description": ""
  },
  {
    "id": "jooble--1827890220843356322",
    "title": "Talent Acquisition Partner - Technology",
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
    "anzsco": "223112",
    "posted": "Recently",
    "slug": "sydney-talent-acquisition-partner-technology-482-186-sponsorship",
    "url": "jobs/sydney-talent-acquisition-partner-technology-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1827890220843356322",
    "description": ""
  },
  {
    "id": "adzuna-5886246905",
    "title": "Customer Service Consultant - Sydney CBD | Sponsorship Available",
    "company": "Arkadia Talent",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-service-consultant-sydney-cbd-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-consultant-sydney-cbd-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886246905?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5886245789",
    "title": "Primary Teacher - Central Queensland",
    "company": "Technical Focus Pty Ltd t/as Talent Focus",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "brisbane-primary-teacher-central-queensland-482-494-sponsorship",
    "url": "jobs/brisbane-primary-teacher-central-queensland-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886245789?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5886040536",
    "title": "Full-Time Supervisors",
    "company": "Zambrero",
    "logoInitial": "Z",
    "location": "Gold Coast, QLD",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "gold-coast-full-time-supervisors-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/gold-coast-full-time-supervisors-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5886040536?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "osj-2026-003",
    "title": "Mechanical Project Engineer (Mining & Energy)",
    "company": "WestForce Resources",
    "logoInitial": "W",
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
    "salary": "$145,000 - $180,000 AUD + FIFO Allowance",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "perth-mechanical-project-engineer-mining-energy-482-494-sponsorship",
    "url": "jobs/perth-mechanical-project-engineer-mining-energy-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Mechanical%20Project%20Engineer%20%28Mining%20%26%20Energy%29%20WestForce%20Resources%20Perth",
    "description": ""
  },
  {
    "id": "osj-2026-004",
    "title": "Head Chef - Modern Australian / European",
    "company": "Crown Culinary Group",
    "logoInitial": "C",
    "location": "Brisbane, QLD",
    "state": "QLD",
    "category": "healthcare",
    "visas": [
      "482"
    ],
    "visaLabels": [
      "Subclass 482 TSS"
    ],
    "salary": "$82,000 - $98,000 AUD + Bonus",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-head-chef-modern-australian-european-482-sponsorship",
    "url": "jobs/brisbane-head-chef-modern-australian-european-482-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Head%20Chef%20-%20Modern%20Australian%20/%20European%20Crown%20Culinary%20Group%20Brisbane",
    "description": ""
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
    "description": ""
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
    "anzsco": "263111",
    "posted": "Recently",
    "slug": "melbourne-senior-cloud-devops-architect-482-186-sponsorship",
    "url": "jobs/melbourne-senior-cloud-devops-architect-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Senior%20Cloud%20%26%20DevOps%20Architect%20Novus%20Digital%20Solutions%20Melbourne",
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "jooble--1985903431219941488",
    "title": "Business Development Manager",
    "company": "Everway",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1985903431219941488",
    "description": ""
  },
  {
    "id": "jooble-106776671626823639",
    "title": "Broker Business Development Manager",
    "company": "Skip Loans",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-broker-business-development-manager-482-186-sponsorship",
    "url": "jobs/sydney-broker-business-development-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/106776671626823639",
    "description": ""
  },
  {
    "id": "jooble-7209882490654319883",
    "title": "Business Development Manager, Residential Energy Products",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-residential-energy-products-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-residential-energy-products-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7209882490654319883",
    "description": ""
  },
  {
    "id": "jooble-4080844763084998021",
    "title": "Account Executive, Corporate Sales",
    "company": "Docker",
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
    "salary": "$30k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-account-executive-corporate-sales-482-186-sponsorship",
    "url": "jobs/sydney-account-executive-corporate-sales-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4080844763084998021",
    "description": ""
  },
  {
    "id": "jooble-2962897787007245540",
    "title": "Business Development Manager, Strategic Market Expansion, Megapack, Energy",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-business-development-manager-strategic-market-expansion-megapack-energy-482-186-sponsorship",
    "url": "jobs/sydney-business-development-manager-strategic-market-expansion-megapack-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2962897787007245540",
    "description": ""
  },
  {
    "id": "jooble-5701610638124355451",
    "title": "Senior Account Executive, Specialization",
    "company": "HUbspot",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-senior-account-executive-specialization-482-186-sponsorship",
    "url": "jobs/sydney-senior-account-executive-specialization-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5701610638124355451",
    "description": ""
  },
  {
    "id": "jooble-8080055233640225839",
    "title": "Commercial Account Executive",
    "company": "Dandy",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-commercial-account-executive-482-186-sponsorship",
    "url": "jobs/sydney-commercial-account-executive-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8080055233640225839",
    "description": ""
  },
  {
    "id": "jooble--254832315174311125",
    "title": "Commercial Account Executive - Australia",
    "company": "GitLab",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-commercial-account-executive-australia-482-186-sponsorship",
    "url": "jobs/sydney-commercial-account-executive-australia-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-254832315174311125",
    "description": ""
  },
  {
    "id": "jooble--22962822286580250",
    "title": "Immigration Lawyer",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-immigration-lawyer-482-186-sponsorship",
    "url": "jobs/sydney-immigration-lawyer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-22962822286580250",
    "description": ""
  },
  {
    "id": "jooble--4164475082732514346",
    "title": "People and Culture Business Partner",
    "company": "Teamified",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-people-and-culture-business-partner-482-186-sponsorship",
    "url": "jobs/sydney-people-and-culture-business-partner-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4164475082732514346",
    "description": ""
  },
  {
    "id": "jooble--9120292074047080003",
    "title": "Analyst, Client Onboarding Specialist",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-analyst-client-onboarding-specialist-482-186-sponsorship",
    "url": "jobs/sydney-analyst-client-onboarding-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-9120292074047080003",
    "description": ""
  },
  {
    "id": "jooble-298223164891809549",
    "title": "Senior Regional Partner Manager - Reseller, APAC",
    "company": "Lastpass",
    "logoInitial": "L",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-regional-partner-manager-reseller-apac-482-186-sponsorship",
    "url": "jobs/sydney-senior-regional-partner-manager-reseller-apac-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/298223164891809549",
    "description": ""
  },
  {
    "id": "jooble--2366484630212933888",
    "title": "Customer Service Consultant",
    "company": "Weploy",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-service-consultant-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-consultant-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2366484630212933888",
    "description": ""
  },
  {
    "id": "jooble--7396416158486951206",
    "title": "Sales Development Representative",
    "company": "Beyondtrust",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7396416158486951206",
    "description": ""
  },
  {
    "id": "jooble--2453422573400822506",
    "title": "Customer Experience Specialist",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-experience-specialist-482-186-sponsorship",
    "url": "jobs/sydney-customer-experience-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2453422573400822506",
    "description": ""
  },
  {
    "id": "jooble-8626375190431886010",
    "title": "Customer Service Representative (Fixed term 12 Months)",
    "company": "Resmed",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-service-representative-fixed-term-12-months-482-186-sponsorship",
    "url": "jobs/sydney-customer-service-representative-fixed-term-12-months-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8626375190431886010",
    "description": ""
  },
  {
    "id": "jooble--1748651098779039151",
    "title": "Customer Representative",
    "company": "Getaway",
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
    "salary": "$30k - $50k",
    "type": "Part-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-representative-482-186-sponsorship",
    "url": "jobs/sydney-customer-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1748651098779039151",
    "description": ""
  },
  {
    "id": "jooble--6467290327687843743",
    "title": "Remote Custumer Service Representative",
    "company": "Next Stop Travel",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-remote-custumer-service-representative-482-186-sponsorship",
    "url": "jobs/sydney-remote-custumer-service-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6467290327687843743",
    "description": ""
  },
  {
    "id": "jooble-8503850336727331001",
    "title": "Outbound Sales Development Representative",
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
    "salary": "$61k - $72k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-outbound-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-outbound-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8503850336727331001",
    "description": ""
  },
  {
    "id": "jooble--4228791034412867333",
    "title": "Complaints Analyst",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-complaints-analyst-482-186-sponsorship",
    "url": "jobs/sydney-complaints-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4228791034412867333",
    "description": ""
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
    "anzsco": "262112",
    "posted": "Recently",
    "slug": "sydney-soc-analyst-482-186-sponsorship",
    "url": "jobs/sydney-soc-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3064316231487687158",
    "description": ""
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
    "description": ""
  },
  {
    "id": "jooble-6434595078029081107",
    "title": "Analyst / Associate, Credit Management",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-analyst-associate-credit-management-482-186-sponsorship",
    "url": "jobs/sydney-analyst-associate-credit-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6434595078029081107",
    "description": ""
  },
  {
    "id": "jooble-1128607402377443527",
    "title": "Partner Growth Manager",
    "company": "Mx51",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-partner-growth-manager-482-186-sponsorship",
    "url": "jobs/sydney-partner-growth-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1128607402377443527",
    "description": ""
  },
  {
    "id": "jooble-6497775021491221904",
    "title": "Senior Project Engineer",
    "company": "Lendlease",
    "logoInitial": "L",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-project-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-project-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6497775021491221904",
    "description": ""
  },
  {
    "id": "jooble--238663147548115435",
    "title": "Windows System Engineer",
    "company": "IMC",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-windows-system-engineer-482-186-sponsorship",
    "url": "jobs/sydney-windows-system-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-238663147548115435",
    "description": ""
  },
  {
    "id": "jooble--7065311519419085046",
    "title": "Senior Sales Engineer",
    "company": "Commvault",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-senior-sales-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-sales-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7065311519419085046",
    "description": ""
  },
  {
    "id": "jooble-1121415002323553575",
    "title": "Associate Managing Consultant - Marketing Services (12 months fixed term)",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-associate-managing-consultant-marketing-services-12-months-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-associate-managing-consultant-marketing-services-12-months-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1121415002323553575",
    "description": ""
  },
  {
    "id": "jooble--8253399206863186905",
    "title": "Regional Partner Manager - MSP",
    "company": "Lastpass",
    "logoInitial": "L",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-regional-partner-manager-msp-482-186-sponsorship",
    "url": "jobs/sydney-regional-partner-manager-msp-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8253399206863186905",
    "description": ""
  },
  {
    "id": "jooble-8071614827880874431",
    "title": "VCE Certified Teacher - Legal Studies Content Validator & Moderator",
    "company": "Education Perfect",
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
    "salary": "$60 per hour",
    "type": "Temporary",
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "sydney-vce-certified-teacher-legal-studies-content-validator-moderator-482-186-sponsorship",
    "url": "jobs/sydney-vce-certified-teacher-legal-studies-content-validator-moderator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8071614827880874431",
    "description": ""
  },
  {
    "id": "jooble--7518171255931973860",
    "title": "Digital Education Sales Consultant",
    "company": "Peopleworth",
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
    "salary": "$95,000 - $130,000 AUD + Super",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-digital-education-sales-consultant-482-186-sponsorship",
    "url": "jobs/sydney-digital-education-sales-consultant-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7518171255931973860",
    "description": ""
  },
  {
    "id": "adzuna-5828753149",
    "title": "Clinical Nurse Specialist (Mental Health) - Permanent Contract - North West Tasmania",
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
    "description": ""
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
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "sydney-dentist-australian-visa-sponsorship-opportunities-482-186-sponsorship",
    "url": "jobs/sydney-dentist-australian-visa-sponsorship-opportunities-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Dentist%20%7C%20Australian%20Visa%20Sponsorship%20Opportunities%20Gorilla%20Jobs%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5834903573",
    "title": "GP Opportunities - Perth, WA (DPA)",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "perth-gp-opportunities-perth-wa-dpa-visa-sponsorship-482-494-sponsorship",
    "url": "jobs/perth-gp-opportunities-perth-wa-dpa-visa-sponsorship-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20Opportunities%20-%20Perth%2C%20WA%20%28DPA%29%20%7C%20Visa%20Sponsorship%20Ozhealth%20Australasia%20Perth",
    "description": ""
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
    "anzsco": "252511",
    "posted": "Recently",
    "slug": "sydney-physiotherapist-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship",
    "url": "jobs/sydney-physiotherapist-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist%20-%20Training/Visa%20Sponsorship%20-%20Regional%20NSW%20HealthcareLink%20Support%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5650855975",
    "title": "Registered Nurse (Visa Sponsorship Available) – Kimberley Region",
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
    "slug": "perth-registered-nurse-visa-sponsorship-available-kimberley-region-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-visa-sponsorship-available-kimberley-region-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Registered%20Nurse%20%28Visa%20Sponsorship%20Available%29%20%E2%80%93%20Kimberley%20Region%20Juniper%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5794408463",
    "title": "MSK Physiotherapist",
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
    "anzsco": "252511",
    "posted": "Recently",
    "slug": "sydney-msk-physiotherapist-visa-sponsorshiprelocation-assistbenefits-482-186-sponsorship",
    "url": "jobs/sydney-msk-physiotherapist-visa-sponsorshiprelocation-assistbenefits-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=MSK%20Physiotherapist%20-%20Visa%20Sponsorship/Relocation%20Assist/Benefits%20HealthcareLink%20Support%20Sydney",
    "description": ""
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
    "anzsco": "252511",
    "posted": "Recently",
    "slug": "canberra-physiotherapistot-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship",
    "url": "jobs/canberra-physiotherapistot-trainingvisa-sponsorship-regional-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist/OT%20-%20Training/Visa%20Sponsorship%20-%20Regional%20NSW%20HealthcareLink%20Canberra",
    "description": ""
  },
  {
    "id": "adzuna-5800540570",
    "title": "Lead Data Engineer",
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
    "description": ""
  },
  {
    "id": "adzuna-5757866110",
    "title": "GP needed - DPA",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-gp-needed-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-gp-needed-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20needed%20-%20DPA%20-%20Visa%20sponsorship%20-%202%20hours%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5759582413",
    "title": "Clinic/Community Physiotherapist",
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
    "anzsco": "252511",
    "posted": "Recently",
    "slug": "sydney-cliniccommunity-physiotherapist-visa-sponsorship-grafton-nsw-482-186-sponsorship",
    "url": "jobs/sydney-cliniccommunity-physiotherapist-visa-sponsorship-grafton-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Clinic/Community%20Physiotherapist%20-%20Visa%20Sponsorship%20-%20Grafton%2C%20NSW%20Healthcarelink%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5757864526",
    "title": "Community-Based Occupational Therapist",
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-community-based-occupational-therapist-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-occupational-therapist-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Occupational%20Therapist%20-%20Visa%20Sponsorship%20Available%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5718451926",
    "title": "Community-Based Speech Pathologist",
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
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "adelaide-community-based-speech-pathologist-visa-sponsorship-available-482-494-sponsorship",
    "url": "jobs/adelaide-community-based-speech-pathologist-visa-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Speech%20Pathologist%20-%20Visa%20Sponsorship%20Available%20HealthcareLink%20Support%20Adelaide",
    "description": ""
  },
  {
    "id": "adzuna-5857619060",
    "title": "Team Leader (EN Qualified)",
    "company": "Calvary Care",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-team-leader-en-qualified-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-team-leader-en-qualified-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Team%20Leader%20%28EN%20Qualified%29-%20Visa%20Sponsorship%20Available%20Calvary%20Care%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5757865234",
    "title": "GP - DPA - Gladstone",
    "company": "HealthcareLink",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-gp-dpa-gladstone-visa-sponsorship-mixed-billing-482-494-sponsorship",
    "url": "jobs/brisbane-gp-dpa-gladstone-visa-sponsorship-mixed-billing-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20Gladstone%20-%20Visa%20sponsorship%20-%20Mixed%20billing%20HealthcareLink%20Brisbane",
    "description": ""
  },
  {
    "id": "adzuna-5877491916",
    "title": "VR GP | DPA",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-dpa-482-visa-sponsorship-mixed-billing-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-dpa-482-visa-sponsorship-mixed-billing-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20%7C%20DPA%20%7C%20482%20Visa%20Sponsorship%20%7C%20Mixed%20Billing%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5877491881",
    "title": "GP role - Bathurst - PEP - DPA- MMM3",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-gp-role-bathurst-pep-dpa-mmm3-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-gp-role-bathurst-pep-dpa-mmm3-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20role%20-%20Bathurst%20-%20PEP%20-%20DPA-%20MMM3%20-%20Visa%20Sponsorship%20HealthcareLink%20Sydney",
    "description": ""
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-aged-care-physiotherapist-trainingvisa-sponsorship-parkes-nsw-482-186-sponsorship",
    "url": "jobs/sydney-aged-care-physiotherapist-trainingvisa-sponsorship-parkes-nsw-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Aged%20care%20Physiotherapist-%20Training/Visa%20Sponsorship%20-%20Parkes%2C%20NSW%20HealthcareLink%20Support%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5733234115",
    "title": "Community-Based Occupational Therapist",
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-community-based-occupational-therapist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-occupational-therapist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Occupational%20Therapist%20-%20Visa%20Sponsorship%20for%20Onshore%20Applicants%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5757864198",
    "title": "Community-Based Speech Pathologist",
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
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "melbourne-community-based-speech-pathologist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship",
    "url": "jobs/melbourne-community-based-speech-pathologist-visa-sponsorship-for-onshore-applicants-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Community-Based%20Speech%20Pathologist%20-%20Visa%20Sponsorship%20for%20Onshore%20Applicants%20HealthcareLink%20Support%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5757865384",
    "title": "GP role - Shepparton - 70% - DPA",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-gp-role-shepparton-70-dpa-visa-sponsorship-pep-482-186-sponsorship",
    "url": "jobs/melbourne-gp-role-shepparton-70-dpa-visa-sponsorship-pep-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20role%20-%20Shepparton%20-%2070%25%20-%20DPA%20-%20Visa%20sponsorship%20-%20PEP%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5877491691",
    "title": "General practitioner - FSP",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-fsp-visa-sponsorship-15-hrs-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-fsp-visa-sponsorship-15-hrs-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20practitioner%20-%20FSP%20-%20Visa%20sponsorship%20-%201.5%20hrs%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5794409049",
    "title": "GP needed - PEP transfer - DPA",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-gp-needed-pep-transfer-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-gp-needed-pep-transfer-dpa-visa-sponsorship-2-hours-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20needed%20-%20PEP%20transfer%20-%20DPA%20-%20Visa%20sponsorship%20-%202%20hours%20from%20Melbourne%20HealthcareLink%20Melbourne",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-general-medicine-phoregistrar-come-work-in-queensland-482-186-sponsorship",
    "url": "jobs/sydney-general-medicine-phoregistrar-come-work-in-queensland-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Medicine%20PHO/Registrar%20-%20come%20work%20in%20Queensland%20ME%20Medical%20Recruitment%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5757865066",
    "title": "GP - DPA - Gladstone",
    "company": "HealthcareLink",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-gp-dpa-gladstone-visa-sponsorship-70-150-retainer-for-3-months-482-494-sponsorship",
    "url": "jobs/brisbane-gp-dpa-gladstone-visa-sponsorship-70-150-retainer-for-3-months-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20Gladstone%20-%20Visa%20sponsorship%20-%2070%25%20-%24150%20retainer%20for%203%20months%20HealthcareLink%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-vr-gp-melbourne-south-east-dpa-and-visa-sponsorship-available-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-vr-gp-melbourne-south-east-dpa-and-visa-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20%28VR%20GP%29%20Melbourne%20South%20East%2C%20DPA%20and%20Visa%20Sponsorship%20Available%20WAVELENGTH%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5877491835",
    "title": "GP - DPA - PEP - MDRAP",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-gp-dpa-pep-mdrap-visa-sponsorship-rural-nsw-turning-patients-away-482-186-sponsorship",
    "url": "jobs/sydney-gp-dpa-pep-mdrap-visa-sponsorship-rural-nsw-turning-patients-away-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20DPA%20-%20PEP%20-%20MDRAP%20-%20Visa%20sponsorship%20rural%20NSW%20-%20turning%20patients%20away%20HealthcareLink%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5759582938",
    "title": "2 x VR GPs Needed",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-2-x-vr-gps-needed-visa-sponsorship-70-75-of-billings-retainer-dpa-482-186-sponsorship",
    "url": "jobs/sydney-2-x-vr-gps-needed-visa-sponsorship-70-75-of-billings-retainer-dpa-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=2%20x%20VR%20GPs%20Needed%20%7C%20Visa%20Sponsorship%20%7C%2070%20-%2075%25%20of%20Billings%20%20Retainer%20%7C%20DPA%20HealthcareLink%20Sydney",
    "description": ""
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
    "description": ""
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "darwin-international-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-494-sponsorship",
    "url": "jobs/darwin-international-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=International%20Applicants%20only%20-%20Registered%20Nurse/Midwife%20-%20All%20specialities%2C%20all%20regions%20across%20NT%20Health%20Department%20of%20Health%20Darwin",
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5839557478",
    "title": "Staff Specialist - Radiology",
    "company": "Tasmanian Health Service",
    "logoInitial": "T",
    "location": "Hobart, TAS",
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
    "salary": "$222,789 - $222,789 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "hobart-staff-specialist-radiology-482-494-sponsorship",
    "url": "jobs/hobart-staff-specialist-radiology-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Staff%20Specialist%20-%20Radiology%20Tasmanian%20Health%20Service%20Hobart",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870147131",
    "title": "FY27 TEST Vacationer - Melbourne - Deals",
    "company": "PricewaterhouseCoopers",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-fy27-test-vacationer-melbourne-deals-482-186-sponsorship",
    "url": "jobs/melbourne-fy27-test-vacationer-melbourne-deals-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=FY27%20TEST%20Vacationer%20-%20Melbourne%20-%20Deals%20PricewaterhouseCoopers%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5870144419",
    "title": "FY27 TEST Vacationer - Sydney - Risk",
    "company": "PricewaterhouseCoopers",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-fy27-test-vacationer-sydney-risk-482-186-sponsorship",
    "url": "jobs/sydney-fy27-test-vacationer-sydney-risk-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=FY27%20TEST%20Vacationer%20-%20Sydney%20-%20Risk%20PricewaterhouseCoopers%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5873279695",
    "title": "Industry Driver - Health",
    "company": "PricewaterhouseCoopers",
    "logoInitial": "P",
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
    "anzsco": "733111",
    "posted": "Recently",
    "slug": "perth-industry-driver-health-482-494-sponsorship",
    "url": "jobs/perth-industry-driver-health-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Industry%20Driver%20-%20Health%20PricewaterhouseCoopers%20Perth",
    "description": ""
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "sydney-domestic-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-186-sponsorship",
    "url": "jobs/sydney-domestic-applicants-only-registered-nursemidwife-all-specialities-all-regions-across-nt-health-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Domestic%20Applicants%20only%20-%20Registered%20Nurse/Midwife%20-%20All%20specialities%2C%20all%20regions%20across%20NT%20Health%20Department%20of%20Health%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5875678127",
    "title": "Facilities Coordinator",
    "company": "PricewaterhouseCoopers",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-facilities-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-facilities-coordinator-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Facilities%20Coordinator%20PricewaterhouseCoopers%20Sydney",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "perth-emergency-medicine-registrar-acem-assessed-please-also-apply-482-494-sponsorship",
    "url": "jobs/perth-emergency-medicine-registrar-acem-assessed-please-also-apply-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Emergency%20Medicine%20Registrar%20ACEM%20Assessed%20please%20also%20apply%20ME%20Medical%20Recruitment%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5870132489",
    "title": "Cook (Hospitality)",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "anzsco": "351411",
    "posted": "Recently",
    "slug": "perth-cook-hospitality-482-494-sponsorship",
    "url": "jobs/perth-cook-hospitality-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Cook%20%28Hospitality%29%20Worldpool%20Australia%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5870156409",
    "title": "Research Engineer – Matilda",
    "company": "Maincode",
    "logoInitial": "M",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-research-engineer-matilda-482-186-sponsorship",
    "url": "jobs/melbourne-research-engineer-matilda-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Research%20Engineer%20%E2%80%93%20Matilda%20Maincode%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5870138522",
    "title": "Hospitality Internship Trainee",
    "company": "2coms",
    "logoInitial": "2",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-hospitality-internship-trainee-482-186-sponsorship",
    "url": "jobs/sydney-hospitality-internship-trainee-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Hospitality%20Internship%20Trainee%202coms%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5870155635",
    "title": "Midwife",
    "company": "ACM Recruitment",
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "sydney-midwife-482-186-sponsorship",
    "url": "jobs/sydney-midwife-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Midwife%20ACM%20Recruitment%20Sydney",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-emergency-medicine-specialty-registrar-uk-trained-please-apply-482-186-sponsorship",
    "url": "jobs/sydney-emergency-medicine-specialty-registrar-uk-trained-please-apply-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Emergency%20Medicine%20Specialty%20Registrar%20-%20UK%20trained%20please%20apply%20ME%20Medical%20Recruitment%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5870156996",
    "title": "Remote Data Entry Operator (Entry Level)",
    "company": "Skillerszone",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-remote-data-entry-operator-entry-level-482-186-sponsorship",
    "url": "jobs/sydney-remote-data-entry-operator-entry-level-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Remote%20Data%20Entry%20Operator%20%28Entry%20Level%29%20Skillerszone%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5870140825",
    "title": "ICU Registrar / Senior Medical Officer",
    "company": "Calvary Health Care",
    "logoInitial": "C",
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "adelaide-icu-registrar-senior-medical-officer-482-494-sponsorship",
    "url": "jobs/adelaide-icu-registrar-senior-medical-officer-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=ICU%20Registrar%20/%20Senior%20Medical%20Officer%20Calvary%20Health%20Care%20Adelaide",
    "description": ""
  },
  {
    "id": "adzuna-5870155053",
    "title": "Signal Engineer",
    "company": "Maincode",
    "logoInitial": "M",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-signal-engineer-482-186-sponsorship",
    "url": "jobs/melbourne-signal-engineer-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Signal%20Engineer%20Maincode%20Melbourne",
    "description": ""
  },
  {
    "id": "jooble-3728892751639702341",
    "title": "Quality Engineer",
    "company": "Invictus People",
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
    "salary": "$110k",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-quality-engineer-482-186-sponsorship",
    "url": "jobs/sydney-quality-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3728892751639702341",
    "description": ""
  },
  {
    "id": "adzuna-5879824520",
    "title": "Speech language pathologist/therapists –Australia wants you! Visa sponsorship",
    "company": "GENXT BT Solutions Pty",
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
    "salary": "$90,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-speech-language-pathologisttherapists-australia-wants-you-visa-sponsorship-482-186-sponsorship",
    "url": "jobs/sydney-speech-language-pathologisttherapists-australia-wants-you-visa-sponsorship-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20language%20pathologist/therapists%20%E2%80%93Australia%20wants%20you%21%20Visa%20sponsorship%20GENXT%20BT%20Solutions%20Pty%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5882475727",
    "title": "Baker",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-baker-482-494-sponsorship",
    "url": "jobs/perth-baker-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Baker%20Worldpool%20Australia%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5880807271",
    "title": "Café / Restaurant Manager",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "anzsco": "141111",
    "posted": "Recently",
    "slug": "perth-cafe-restaurant-manager-482-494-sponsorship",
    "url": "jobs/perth-cafe-restaurant-manager-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Caf%C3%A9%20/%20Restaurant%20Manager%20Worldpool%20Australia%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5874046683",
    "title": "Occupational Therapist | Employer Sponsorship | 1.5h from Melbourne",
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
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-employer-sponsorship-15h-from-melbourne-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-employer-sponsorship-15h-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20%7C%20Employer%20Sponsorship%20%7C%201.5h%20from%20Melbourne%20Mediix%20Melbourne",
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-remote-community-store-duty-supervisors-couple-position-482-186-sponsorship",
    "url": "jobs/sydney-remote-community-store-duty-supervisors-couple-position-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Remote%20Community%20Store%20-%20Duty%20Supervisors%20-%20Couple%20Position%20North%20West%20Recruitment%20Sydney",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5877123800",
    "title": "Air Conditioning & Refrigeration Technician (HVAC)",
    "company": "konnecting",
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
    "salary": "$90,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-air-conditioning-refrigeration-technician-hvac-482-186-sponsorship",
    "url": "jobs/sydney-air-conditioning-refrigeration-technician-hvac-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Air%20Conditioning%20%26%20Refrigeration%20Technician%20%28HVAC%29%20konnecting%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5870137795",
    "title": "Territory Sales Executive - Electronics",
    "company": "Copeland",
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
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-territory-sales-executive-electronics-482-186-sponsorship",
    "url": "jobs/sydney-territory-sales-executive-electronics-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Territory%20Sales%20Executive%20-%20Electronics%20Copeland%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5877123801",
    "title": "Qualified Cabinet Maker - Brisbane, QLD",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-qualified-cabinet-maker-brisbane-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-cabinet-maker-brisbane-qld-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Qualified%20Cabinet%20Maker%20-%20Brisbane%2C%20QLD%20konnecting%20Brisbane",
    "description": ""
  },
  {
    "id": "adzuna-5868989661",
    "title": "Domestic Roofer | Residential Roofs | Sponsorship considered for onshore workers",
    "company": "IM Partners",
    "logoInitial": "I",
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
    "salary": "$79,040 - $89,440 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "333311",
    "posted": "Recently",
    "slug": "adelaide-domestic-roofer-residential-roofs-sponsorship-considered-for-onshore-workers-482-494-sponsorship",
    "url": "jobs/adelaide-domestic-roofer-residential-roofs-sponsorship-considered-for-onshore-workers-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Domestic%20Roofer%20%7C%20Residential%20Roofs%20%7C%20Sponsorship%20considered%20for%20onshore%20workers%20IM%20Partners%20Adelaide",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-qualified-stonemason-brisbane-qld-482-494-sponsorship",
    "url": "jobs/brisbane-qualified-stonemason-brisbane-qld-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Qualified%20Stonemason%20-%20Brisbane%2C%20QLD%20konnecting%20Brisbane",
    "description": ""
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
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "sydney-dentist-part-timefull-time-for-boyne-island-qld-482-186-sponsorship",
    "url": "jobs/sydney-dentist-part-timefull-time-for-boyne-island-qld-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Dentist%20Part%20Time/Full%20Time%20for%20Boyne%20Island%20QLD%20HealthcareLink%20Support%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5860532357",
    "title": "Private Dentist",
    "company": "Zest Business Group",
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
    "salary": "$80,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "sydney-private-dentist-482-186-sponsorship",
    "url": "jobs/sydney-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Private%20Dentist%20Zest%20Business%20Group%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5874289587",
    "title": "Educational Leader",
    "company": "Broome Out of School Care Children’s Activities",
    "logoInitial": "B",
    "location": "Gold Coast, QLD",
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
    "salary": "$80,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "gold-coast-educational-leader-482-494-sponsorship",
    "url": "jobs/gold-coast-educational-leader-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Educational%20Leader%20Broome%20Out%20of%20School%20Care%20Children%E2%80%99s%20Activities%20Gold%20Coast",
    "description": ""
  },
  {
    "id": "adzuna-5874289586",
    "title": "Educational Leader",
    "company": "Broome Out of School Care Children’s Activities",
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
    "salary": "$80,000 - $95,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-educational-leader-482-186-sponsorship",
    "url": "jobs/sydney-educational-leader-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Educational%20Leader%20Broome%20Out%20of%20School%20Care%20Children%E2%80%99s%20Activities%20Sydney",
    "description": ""
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
    "anzsco": "225412",
    "posted": "Recently",
    "slug": "sydney-account-executive-commercial-anz-482-186-sponsorship",
    "url": "jobs/sydney-account-executive-commercial-anz-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Account%20Executive%2C%20Commercial%2C%20ANZ%20Jamf%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5866916881",
    "title": "Front Office Manager",
    "company": "Alamanda Palm Cove By Lancemore",
    "logoInitial": "A",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-front-office-manager-482-494-sponsorship",
    "url": "jobs/cairns-front-office-manager-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Front%20Office%20Manager%20Alamanda%20Palm%20Cove%20By%20Lancemore%20Cairns",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-gp-melbourne-70-of-billings-400k-per-annum-dpa-available-482-186-sponsorship",
    "url": "jobs/melbourne-gp-melbourne-70-of-billings-400k-per-annum-dpa-available-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=GP%20-%20Melbourne%20-%2070%25%20of%20billings%20-%20%24400K%20per%20annum%20-%20DPA%20available%20HealthcareLink%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5880598401",
    "title": "Marketing Coordinator",
    "company": "Copeland",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-marketing-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-marketing-coordinator-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Marketing%20Coordinator%20Copeland%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5859670309",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/sydney-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Agricultural%20Spreader%20/%20Machinery%20Operators%20-%20Australia%20Staff%20360%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5877491471",
    "title": "General Practitioner - DPA - Mixed Billing - Melbourne",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-dpa-mixed-billing-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-dpa-mixed-billing-melbourne-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20-%20DPA%20-%20Mixed%20Billing%20-%20Melbourne%20HealthcareLink%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5855386968",
    "title": "Occupational Therapist - Shepparton",
    "company": "Everyday Independence",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-shepparton-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-shepparton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Shepparton%20Everyday%20Independence%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5856836828",
    "title": "Speech Pathologist - Bendigo",
    "company": "Everyday Independence",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-bendigo-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-bendigo-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Bendigo%20Everyday%20Independence%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5855386973",
    "title": "Speech Pathologist - Shepparton",
    "company": "Everyday Independence",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-shepparton-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-shepparton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Shepparton%20Everyday%20Independence%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5856836826",
    "title": "Occupational Therapist - Hobart",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "hobart-occupational-therapist-hobart-482-494-sponsorship",
    "url": "jobs/hobart-occupational-therapist-hobart-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Hobart%20Everyday%20Independence%20Hobart",
    "description": ""
  },
  {
    "id": "adzuna-5862938849",
    "title": "Occupational Therapist - Maitland",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$93,120 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "newcastle-occupational-therapist-maitland-482-186-sponsorship",
    "url": "jobs/newcastle-occupational-therapist-maitland-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Maitland%20Everyday%20Independence%20Newcastle",
    "description": ""
  },
  {
    "id": "adzuna-5878483959",
    "title": "Occupational Therapist - Western Brisbane",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-western-brisbane-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-western-brisbane-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Occupational%20Therapist%20-%20Western%20Brisbane%20Everyday%20Independence%20Brisbane",
    "description": ""
  },
  {
    "id": "adzuna-5878483940",
    "title": "Speech Pathologist - Ballarat",
    "company": "Everyday Independence",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-ballarat-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-ballarat-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Ballarat%20Everyday%20Independence%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5878483962",
    "title": "Speech Pathologist - Western Brisbane",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "brisbane-speech-pathologist-western-brisbane-482-494-sponsorship",
    "url": "jobs/brisbane-speech-pathologist-western-brisbane-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Western%20Brisbane%20Everyday%20Independence%20Brisbane",
    "description": ""
  },
  {
    "id": "adzuna-5878483967",
    "title": "Speech Pathologist - Melton",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$82,106 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "melbourne-speech-pathologist-melton-482-186-sponsorship",
    "url": "jobs/melbourne-speech-pathologist-melton-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Speech%20Pathologist%20-%20Melton%20Everyday%20Independence%20Melbourne",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-for-morayfield-qld-dpa-mm1-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-for-morayfield-qld-dpa-mm1-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Morayfield%2C%20QLD%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-for-werribee-vic-dpa-mm1-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-for-werribee-vic-dpa-mm1-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Werribee%2C%20VIC%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Sydney",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-for-williams-landing-vic-dpa-mm1-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-for-williams-landing-vic-dpa-mm1-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Williams%20Landing%2C%20VIC%20%28DPA%20%26%20MM1%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5724700596",
    "title": "Panel Beater",
    "company": "AMA Group",
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
    "verifiedSponsor": true,
    "anzsco": "324311",
    "posted": "Recently",
    "slug": "sydney-panel-beater-482-186-sponsorship",
    "url": "jobs/sydney-panel-beater-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Panel%20Beater%20AMA%20Group%20Sydney",
    "description": ""
  },
  {
    "id": "adzuna-5877491615",
    "title": "F/T P/T GP Position",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-ft-pt-gp-position-482-186-sponsorship",
    "url": "jobs/sydney-ft-pt-gp-position-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=F/T%20P/T%20GP%20Position%20HealthcareLink%20Sydney",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "canberra-general-practitioner-for-canberra-region-act-482-186-sponsorship",
    "url": "jobs/canberra-general-practitioner-for-canberra-region-act-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=General%20Practitioner%20for%20Canberra%20Region%2C%20ACT%20Trust%20Medical%20Recruitment%20Canberra",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-caroline-springs-vic-non-dpa-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-caroline-springs-vic-non-dpa-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Caroline%20Springs%2C%20VIC%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-vr-gp-williams-landing-vic-dpa-mm1-mrcgp-eligible-482-186-sponsorship",
    "url": "jobs/melbourne-vr-gp-williams-landing-vic-dpa-mm1-mrcgp-eligible-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Williams%20Landing%2C%20VIC%20%28DPA%20MM1%20-%20MRCGP%20Eligible%29%20Trust%20Medical%20Recruitment%20Melbourne",
    "description": ""
  },
  {
    "id": "adzuna-5766893756",
    "title": "Secondary Mathematics & Science Teachers, Melbourne, January 2027",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "melbourne-secondary-mathematics-science-teachers-melbourne-january-2027-482-186-sponsorship",
    "url": "jobs/melbourne-secondary-mathematics-science-teachers-melbourne-january-2027-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Secondary%20Mathematics%20%26%20Science%20Teachers%2C%20Melbourne%2C%20January%202027%20Prospero%20Teaching%20Melbourne",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-annerley-qld-non-dpa-and-mm-1-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-annerley-qld-non-dpa-and-mm-1-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Annerley%2C%20QLD%20%28Non-DPA%20and%20MM%201%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-oxenford-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-oxenford-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Oxenford%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-loganholme-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-loganholme-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Loganholme%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-ashmore-qld-non-dpa-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-ashmore-qld-non-dpa-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Ashmore%2C%20QLD%20%28Non-DPA%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-vr-gp-morayfield-qld-dpa-mm1-mrcgp-eligible-482-494-sponsorship",
    "url": "jobs/brisbane-vr-gp-morayfield-qld-dpa-mm1-mrcgp-eligible-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=VR%20GP%20-%20Morayfield%2C%20QLD%20%28DPA%20MM1%20-%20MRCGP%20Eligible%29%20Trust%20Medical%20Recruitment%20Brisbane",
    "description": ""
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "perth-physiotherapist-residential-aged-care-harris-river-area-482-494-sponsorship",
    "url": "jobs/perth-physiotherapist-residential-aged-care-harris-river-area-482-494-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Physiotherapist%20%7C%20Residential%20Aged%20Care%20%7C%20Harris%20River%20Area%20Gorilla%20Jobs%20Perth",
    "description": ""
  },
  {
    "id": "adzuna-5766893696",
    "title": "Secondary English & Humanities Teachers, Melbourne, January 2027",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "melbourne-secondary-english-humanities-teachers-melbourne-january-2027-482-186-sponsorship",
    "url": "jobs/melbourne-secondary-english-humanities-teachers-melbourne-january-2027-482-186-sponsorship.html",
    "apply_url": "https://au.indeed.com/jobs?q=Secondary%20English%20%26%20Humanities%20Teachers%2C%20Melbourne%2C%20January%202027%20Prospero%20Teaching%20Melbourne",
    "description": ""
  },
  {
    "id": "jooble--1485154227943861660",
    "title": "Service Advisor, Canberra",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-service-advisor-canberra-482-186-sponsorship",
    "url": "jobs/sydney-service-advisor-canberra-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-1485154227943861660",
    "description": ""
  },
  {
    "id": "jooble--5206331715694199174",
    "title": "Marine Engineers (3rd OOW Engineers)",
    "company": "DOF",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-marine-engineers-3rd-oow-engineers-482-186-sponsorship",
    "url": "jobs/sydney-marine-engineers-3rd-oow-engineers-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5206331715694199174",
    "description": ""
  },
  {
    "id": "jooble-6083212169568217277",
    "title": "Service Engineer",
    "company": "Solplanet",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-service-engineer-482-186-sponsorship",
    "url": "jobs/sydney-service-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6083212169568217277",
    "description": ""
  },
  {
    "id": "jooble-7968616145853497123",
    "title": "Product Engineer, Megapack, Energy",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-product-engineer-megapack-energy-482-186-sponsorship",
    "url": "jobs/sydney-product-engineer-megapack-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7968616145853497123",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-manager-contracts-management-482-186-sponsorship",
    "url": "jobs/sydney-manager-contracts-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1115644912425144039",
    "description": ""
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
    "anzsco": "263111",
    "posted": "Recently",
    "slug": "sydney-project-network-engineer-482-186-sponsorship",
    "url": "jobs/sydney-project-network-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4349871047312086193",
    "description": ""
  },
  {
    "id": "jooble--2276140358812210487",
    "title": "Finance Systems Functional/Technical Analyst",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-finance-systems-functionaltechnical-analyst-482-186-sponsorship",
    "url": "jobs/sydney-finance-systems-functionaltechnical-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2276140358812210487",
    "description": ""
  },
  {
    "id": "jooble-521594329758306698",
    "title": "Director of Acquisition Marketing",
    "company": "Who Gives A Crap",
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
    "salary": "$95,000 - $130,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-director-of-acquisition-marketing-482-186-sponsorship",
    "url": "jobs/sydney-director-of-acquisition-marketing-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/521594329758306698",
    "description": ""
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
    "description": ""
  },
  {
    "id": "jooble--3700442723270020571",
    "title": "Head of Service Management",
    "company": "Centorrino Technologies",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-head-of-service-management-482-186-sponsorship",
    "url": "jobs/sydney-head-of-service-management-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3700442723270020571",
    "description": ""
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-growth-marketing-lead-foundry-division-482-186-sponsorship",
    "url": "jobs/sydney-growth-marketing-lead-foundry-division-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5012533371506619030",
    "description": ""
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
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-sr-customer-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-sr-customer-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8261413864980289175",
    "description": ""
  },
  {
    "id": "jooble--942509607197308815",
    "title": "Senior Customer Success Manager",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-customer-success-manager-australia-482-186-sponsorship",
    "url": "jobs/sydney-senior-customer-success-manager-australia-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-942509607197308815",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-customer-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3244036111051673687",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-manager-customer-performance-fraud-and-compliance-482-186-sponsorship",
    "url": "jobs/sydney-manager-customer-performance-fraud-and-compliance-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/650005233465759857",
    "description": ""
  },
  {
    "id": "jooble--2181789796172040695",
    "title": "Supervisor, Technical Customer Support, Residential Energy",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-supervisor-technical-customer-support-residential-energy-482-186-sponsorship",
    "url": "jobs/sydney-supervisor-technical-customer-support-residential-energy-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2181789796172040695",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-product-success-manager-apac-fixed-term-482-186-sponsorship",
    "url": "jobs/sydney-product-success-manager-apac-fixed-term-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7727049227050796904",
    "description": ""
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
    "description": ""
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
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-risk-and-compliance-change-manager-12-month-max-term-contract-482-186-sponsorship",
    "url": "jobs/sydney-risk-and-compliance-change-manager-12-month-max-term-contract-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/6084220546260604731",
    "description": ""
  },
  {
    "id": "adzuna-5884352819",
    "title": "Clinical Nurse Specialist (Mental Health) - Permanent Contract - North West Tasmania",
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
    "description": ""
  },
  {
    "id": "adzuna-5884352817",
    "title": "Permanent Positions - Registered Nurses (Mental Health) - Tasmania - UK/IE Nurses Welcome to Apply!",
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
    "slug": "hobart-permanent-positions-registered-nurses-mental-health-tasmania-ukie-nurses-welcome-to-apply-482-494-sponsorship",
    "url": "jobs/hobart-permanent-positions-registered-nurses-mental-health-tasmania-ukie-nurses-welcome-to-apply-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5884352817?se=9nkiIyOx8RG81I_a4Gd-LQ&utm_medium=api&utm_source=13c876f1&v=6CE88793193CF4B962BACE74C96F8200C2899E23",
    "description": ""
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
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-bundaberg-qld-dpa-mm2-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-bundaberg-qld-dpa-mm2-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800298?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532313",
    "title": "Paediatric Dentist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$200,000 - $350,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "brisbane-paediatric-dentist-482-494-sponsorship",
    "url": "jobs/brisbane-paediatric-dentist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532313?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "perth-occupational-therapist-position-with-sponsorship-regional-wa-482-494-sponsorship",
    "url": "jobs/perth-occupational-therapist-position-with-sponsorship-regional-wa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877034064?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-for-yarram-vic-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-for-yarram-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868560526?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-for-blackbutt-qld-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-for-blackbutt-qld-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800277?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5764095244",
    "title": "Motel Manager",
    "company": "Vistaar realty pty ltd",
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
    "salary": "$76,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-motel-manager-482-186-sponsorship",
    "url": "jobs/sydney-motel-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5764095244?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "perth-general-practitioner-rockingham-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-rockingham-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5818340436?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5814106487",
    "title": "Science teacher, Regional Victoria, Sponsorship offered, January 2027",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "sydney-science-teacher-regional-victoria-sponsorship-offered-january-2027-482-186-sponsorship",
    "url": "jobs/sydney-science-teacher-regional-victoria-sponsorship-offered-january-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5814106487?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-specialist-doctor-obstetrics-gynaecology-482-186-sponsorship",
    "url": "jobs/sydney-specialist-doctor-obstetrics-gynaecology-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5855387474?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5650841031",
    "title": "General Practice Consultant - expedited Pathway UK or Ireland or NZ, please apply",
    "company": "Me Medical Recruitment",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-general-practice-consultant-expedited-pathway-uk-or-ireland-or-nz-please-apply-482-186-sponsorship",
    "url": "jobs/sydney-general-practice-consultant-expedited-pathway-uk-or-ireland-or-nz-please-apply-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650841031?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5764089671",
    "title": "Registered Midwife",
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "sydney-registered-midwife-482-186-sponsorship",
    "url": "jobs/sydney-registered-midwife-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5764089671?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5650854725",
    "title": "GP Job - 20 mins from Byron Bay",
    "company": "Alecto Australia",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-gp-job-20-mins-from-byron-bay-482-186-sponsorship",
    "url": "jobs/sydney-gp-job-20-mins-from-byron-bay-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650854725?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5859670330",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/melbourne-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670330?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "anzsco": "323212",
    "posted": "Recently",
    "slug": "sydney-fitter-turner-machinist-482-186-sponsorship",
    "url": "jobs/sydney-fitter-turner-machinist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5740974625?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5842495749",
    "title": "Registered Psychologist (Phobia Clinic / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
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
    "anzsco": "272311",
    "posted": "Recently",
    "slug": "sydney-registered-psychologist-phobia-clinic-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-registered-psychologist-phobia-clinic-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5842495749?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "sydney-occupational-therapist-mental-health-warragul-482-186-sponsorship",
    "url": "jobs/sydney-occupational-therapist-mental-health-warragul-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883631398?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-carrum-downs-doctors-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-carrum-downs-doctors-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5855386993?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5874289568",
    "title": "Community Worker",
    "company": "Austa Care",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-community-worker-482-186-sponsorship",
    "url": "jobs/sydney-community-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5874289568?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "brisbane-occupational-therapist-ndis-or-dva-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-occupational-therapist-ndis-or-dva-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5852250554?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5858277083",
    "title": "General Practitioner | VR or Non-VR",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-vr-or-non-vr-full-time-shellharbour-region-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-vr-or-non-vr-full-time-shellharbour-region-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5858277083?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5872932383",
    "title": "Duty Manager",
    "company": "Matthews Hospitality",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-duty-manager-482-186-sponsorship",
    "url": "jobs/sydney-duty-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5872932383?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-exciting-gp-opportunities-dpa-mm1-non-dpa-locations-available-across-qld-ns-482-186-sponsorship",
    "url": "jobs/sydney-exciting-gp-opportunities-dpa-mm1-non-dpa-locations-available-across-qld-ns-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877800273?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5877491885",
    "title": "Female General Practitioner - DPA - Mornington Peninsula",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-female-general-practitioner-dpa-mornington-peninsula-482-186-sponsorship",
    "url": "jobs/sydney-female-general-practitioner-dpa-mornington-peninsula-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877491885?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5862938848",
    "title": "Speech Pathologist - Maitland",
    "company": "Everyday Independence",
    "logoInitial": "E",
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
    "salary": "$93,120 - $110,143 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "newcastle-speech-pathologist-maitland-482-186-sponsorship",
    "url": "jobs/newcastle-speech-pathologist-maitland-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862938848?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5883631468",
    "title": "Occupational Therapist | Flexible Schedule | Ravenhill",
    "company": "Gorilla Jobs",
    "logoInitial": "G",
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
    "salary": "$120,000 - $120,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-flexible-schedule-ravenhill-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-flexible-schedule-ravenhill-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883631468?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--8131161650800618970",
    "title": "Senior Risk & Trading Analyst, Sportsbook",
    "company": "Magic Eden",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-risk-trading-analyst-sportsbook-482-186-sponsorship",
    "url": "jobs/sydney-senior-risk-trading-analyst-sportsbook-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8131161650800618970",
    "description": ""
  },
  {
    "id": "jooble-8659238136429355343",
    "title": "Financial Crime Operations Officer (Melbourne, AU)",
    "company": "CoinJar",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-financial-crime-operations-officer-melbourne-au-482-186-sponsorship",
    "url": "jobs/sydney-financial-crime-operations-officer-melbourne-au-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8659238136429355343",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5859670307",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-agricultural-spreader-machinery-operators-australia-482-494-sponsorship",
    "url": "jobs/perth-agricultural-spreader-machinery-operators-australia-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670307?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5859670318",
    "title": "Agricultural Spreader / Machinery Operators - Australia",
    "company": "Staff 360",
    "logoInitial": "S",
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
    "salary": "$66,560 - $83,200 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "geelong-agricultural-spreader-machinery-operators-australia-482-186-sponsorship",
    "url": "jobs/geelong-agricultural-spreader-machinery-operators-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670318?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5789999924",
    "title": "Hairdresser",
    "company": "Justcuts Booragoon",
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
    "salary": "$80,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-hairdresser-482-186-sponsorship",
    "url": "jobs/sydney-hairdresser-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5789999924?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5848185176",
    "title": "Sheetmetal Tradespeople - Cladding & Installation",
    "company": "APAC Talent Solutions",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-sheetmetal-tradespeople-cladding-installation-482-186-sponsorship",
    "url": "jobs/sydney-sheetmetal-tradespeople-cladding-installation-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5848185176?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5786941410",
    "title": "Consultant/Specialist Anaesthetist",
    "company": "CC Medical",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-consultantspecialist-anaesthetist-482-186-sponsorship",
    "url": "jobs/sydney-consultantspecialist-anaesthetist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5786941410?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5875605716",
    "title": "Sonographer | Central Coast, NSW",
    "company": "Redstone Recruitment",
    "logoInitial": "R",
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
    "salary": "$160,000 - $160,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "burnie-sonographer-central-coast-nsw-482-494-sponsorship",
    "url": "jobs/burnie-sonographer-central-coast-nsw-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875605716?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5850282692",
    "title": "HR Administrator",
    "company": "Burger Urge",
    "logoInitial": "B",
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
    "anzsco": "223112",
    "posted": "Recently",
    "slug": "brisbane-hr-administrator-482-494-sponsorship",
    "url": "jobs/brisbane-hr-administrator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5850282692?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5835374398",
    "title": "Skilled Meat Workers - Boning, Slicing, Slaughtering",
    "company": "JBS Australia",
    "logoInitial": "J",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-skilled-meat-workers-boning-slicing-slaughtering-482-186-sponsorship",
    "url": "jobs/melbourne-skilled-meat-workers-boning-slicing-slaughtering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5835374398?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5650837421",
    "title": "Hospitality Worker",
    "company": "Zest Cafe",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-hospitality-worker-482-186-sponsorship",
    "url": "jobs/sydney-hospitality-worker-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5650837421?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5884957419",
    "title": "Nightclub Positions",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
    "location": "Gold Coast, QLD",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "gold-coast-nightclub-positions-482-494-sponsorship",
    "url": "jobs/gold-coast-nightclub-positions-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884957419?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5885396356",
    "title": "Field Cost Engineer - Common Distribs",
    "company": "Bechtel",
    "logoInitial": "B",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-field-cost-engineer-common-distribs-482-494-sponsorship",
    "url": "jobs/brisbane-field-cost-engineer-common-distribs-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5885396356?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5885189555",
    "title": "Cali Beach | All Positions",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
    "location": "Gold Coast, QLD",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "gold-coast-cali-beach-all-positions-482-494-sponsorship",
    "url": "jobs/gold-coast-cali-beach-all-positions-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5885189555?se=Rr4vQsGx8RGST6GOnhWXLg&utm_medium=api&utm_source=13c876f1&v=D8E438871F43A1F54AC275E125562465B23BF650",
    "description": ""
  },
  {
    "id": "adzuna-5884705825",
    "title": "Risk Analyst, Core",
    "company": "AIG Insurance",
    "logoInitial": "A",
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
    "anzsco": "222311",
    "posted": "Recently",
    "slug": "sydney-risk-analyst-core-482-186-sponsorship",
    "url": "jobs/sydney-risk-analyst-core-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884705825?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--6316539584662801519",
    "title": "Initiatives Coordinator",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-initiatives-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-initiatives-coordinator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6316539584662801519",
    "description": ""
  },
  {
    "id": "jooble--6830564049682824429",
    "title": "Senior Growth Product Manager, AI-Native",
    "company": "Magic Eden",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-growth-product-manager-ai-native-482-186-sponsorship",
    "url": "jobs/sydney-senior-growth-product-manager-ai-native-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6830564049682824429",
    "description": ""
  },
  {
    "id": "jooble--5419038005561513909",
    "title": "Dispute Governance Specialist",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-dispute-governance-specialist-482-186-sponsorship",
    "url": "jobs/sydney-dispute-governance-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5419038005561513909",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-program-manager-cardholder-services-482-186-sponsorship",
    "url": "jobs/sydney-program-manager-cardholder-services-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/8188105828695814727",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
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
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "sydney-registered-nurse-residential-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-residential-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884506971?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5884258736",
    "title": "Head of Information Technology Operations",
    "company": "Galileo Search",
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
    "salary": "$220 - $320 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-head-of-information-technology-operations-482-186-sponsorship",
    "url": "jobs/sydney-head-of-information-technology-operations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884258736?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5884110001",
    "title": "Literacy Generalist Teacher, Gippsland, January 2027",
    "company": "Prospero Teaching",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "sydney-literacy-generalist-teacher-gippsland-january-2027-482-186-sponsorship",
    "url": "jobs/sydney-literacy-generalist-teacher-gippsland-january-2027-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5884110001?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-project-manager-remote-construction-projects-482-494-sponsorship",
    "url": "jobs/perth-project-manager-remote-construction-projects-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5883756172?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=EF13ADC31DABC26B282FBE661C72C032AC2EE0A7",
    "description": ""
  },
  {
    "id": "jooble--6407776485934683397",
    "title": "Claims Change Analyst",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-claims-change-analyst-482-186-sponsorship",
    "url": "jobs/sydney-claims-change-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6407776485934683397",
    "description": ""
  },
  {
    "id": "jooble-1972516146862399324",
    "title": "Senior Manager - Benefits Realisation",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-manager-benefits-realisation-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-benefits-realisation-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1972516146862399324",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-onboarding-delivery-manager-group-digital-482-186-sponsorship",
    "url": "jobs/sydney-onboarding-delivery-manager-group-digital-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/4442432604502586961",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-claims-change-manager-482-186-sponsorship",
    "url": "jobs/sydney-claims-change-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6741752858076328875",
    "description": ""
  },
  {
    "id": "adzuna-5883436249",
    "title": "WHS ADVISOR",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-whs-advisor-482-494-sponsorship",
    "url": "jobs/cairns-whs-advisor-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436249?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5883436108",
    "title": "GRANTS AND GOVERNANCE OFFICER",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-grants-and-governance-officer-482-494-sponsorship",
    "url": "jobs/cairns-grants-and-governance-officer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436108?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5883436122",
    "title": "PROJECT MANAGER",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-project-manager-482-494-sponsorship",
    "url": "jobs/cairns-project-manager-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436122?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5883436104",
    "title": "COMMUNITY BUSINESS SUPPORT OFFICER",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-community-business-support-officer-482-494-sponsorship",
    "url": "jobs/cairns-community-business-support-officer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883436104?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5883086845",
    "title": "O&G Registrar | Supportive Regional Hospital in NSW | Coastal Lifestyle",
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-og-registrar-supportive-regional-hospital-in-nsw-coastal-lifestyle-482-186-sponsorship",
    "url": "jobs/sydney-og-registrar-supportive-regional-hospital-in-nsw-coastal-lifestyle-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5883086845?se=TCaXScGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=5C1A9713100E161A67857F9AF2CCEE8018987086",
    "description": ""
  },
  {
    "id": "adzuna-5883074680",
    "title": "Piping Designer",
    "company": "Bechtel",
    "logoInitial": "B",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-piping-designer-482-494-sponsorship",
    "url": "jobs/brisbane-piping-designer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5883074680?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-2666171463447040535",
    "title": "Senior Internal Dispute Resolution Specialist",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-internal-dispute-resolution-specialist-482-186-sponsorship",
    "url": "jobs/sydney-senior-internal-dispute-resolution-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2666171463447040535",
    "description": ""
  },
  {
    "id": "adzuna-5882475675",
    "title": "Chef (Hospitality)",
    "company": "Worldpool Australia",
    "logoInitial": "W",
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
    "slug": "perth-chef-hospitality-482-494-sponsorship",
    "url": "jobs/perth-chef-hospitality-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5882475675?se=bsroQMGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=CB2F964996EAF82F6A893F766537392EC2C07E11",
    "description": ""
  },
  {
    "id": "adzuna-5882235124",
    "title": "Hiring Australian citizens to work in USA on E3 Visa",
    "company": "Addon Technologies",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-hiring-australian-citizens-to-work-in-usa-on-e3-visa-482-186-sponsorship",
    "url": "jobs/sydney-hiring-australian-citizens-to-work-in-usa-on-e3-visa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5882235124?se=bsroQMGx8RGB1oV7gG1NDw&utm_medium=api&utm_source=13c876f1&v=D5E43CE0450EF189EED5E1100FD0367B2087E23F",
    "description": ""
  },
  {
    "id": "adzuna-5882053955",
    "title": "General Practitioner - Macleay Island (DPA/MMM5)",
    "company": "DXC Medical Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "brisbane-general-practitioner-macleay-island-dpammm5-482-494-sponsorship",
    "url": "jobs/brisbane-general-practitioner-macleay-island-dpammm5-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5882053955?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5881083006",
    "title": "Third-Party Risk Remediation Specialist, Core",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-third-party-risk-remediation-specialist-core-482-186-sponsorship",
    "url": "jobs/sydney-third-party-risk-remediation-specialist-core-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5881083006?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5881029556",
    "title": "Associate Lecturer in IT Project Management & Lecturer in IT Project Governance and Security",
    "company": "UNSW",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "241411",
    "posted": "Recently",
    "slug": "canberra-associate-lecturer-in-it-project-management-lecturer-in-it-project-governance-and-security-482-186-sponsorship",
    "url": "jobs/canberra-associate-lecturer-in-it-project-management-lecturer-in-it-project-governance-and-security-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881029556?se=bhV-0Wyz8RGfZajoCiK01Q&utm_medium=api&utm_source=13c876f1&v=B9D3FCBC54A8E4D6C858CBB2BD4EDC2C75F00AEA",
    "description": ""
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
    "anzsco": "351411",
    "posted": "Recently",
    "slug": "adelaide-cook-apy-lands-482-494-sponsorship",
    "url": "jobs/adelaide-cook-apy-lands-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5881029553?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=10F66B6A201A16198FB923B6124E5851C5D120CE",
    "description": ""
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
    "anzsco": "234711",
    "posted": "Recently",
    "slug": "sydney-veterinarian-482-186-sponsorship",
    "url": "jobs/sydney-veterinarian-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5881013433?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5880598318",
    "title": "Theatre orderly",
    "company": "St Vincent’s Health Australia",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-theatre-orderly-482-186-sponsorship",
    "url": "jobs/sydney-theatre-orderly-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5880598318?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=522A35A74C0355073CB7D3E15175E3DCAE18BA14",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "wollongong-school-operations-assistant-engineering-482-186-sponsorship",
    "url": "jobs/wollongong-school-operations-assistant-engineering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597951?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5880597796",
    "title": "Chef Opportunities - Cibaria Noosa Restaurant",
    "company": "AccorHotel",
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
    "slug": "sydney-chef-opportunities-cibaria-noosa-restaurant-482-186-sponsorship",
    "url": "jobs/sydney-chef-opportunities-cibaria-noosa-restaurant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597796?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5880597613",
    "title": "Director of Revenue Management",
    "company": "Talent on the Move Pty",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-director-of-revenue-management-482-186-sponsorship",
    "url": "jobs/melbourne-director-of-revenue-management-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880597613?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5880591424",
    "title": "Supervisor - Aircraft Maintenance Australia",
    "company": "United Airlines",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-supervisor-aircraft-maintenance-australia-482-186-sponsorship",
    "url": "jobs/sydney-supervisor-aircraft-maintenance-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5880591424?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5879833354",
    "title": "Maintenance and Grounds Coordinator",
    "company": "UniLodge",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-maintenance-and-grounds-coordinator-482-186-sponsorship",
    "url": "jobs/sydney-maintenance-and-grounds-coordinator-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879833354?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5879755731",
    "title": "Case Worker, Children Services",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-case-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-case-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5879755731?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D81C187F42705DFF88ED29855DDA14EF09F98657",
    "description": ""
  },
  {
    "id": "adzuna-5879588072",
    "title": "Experienced Immigration Lawyer",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-experienced-immigration-lawyer-482-186-sponsorship",
    "url": "jobs/sydney-experienced-immigration-lawyer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879588072?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5879229989",
    "title": "Veterinary Criticalist (Emergency & Critical Care Specialist) BVSC - Brisbane - Days (No weekends)",
    "company": "VetPartners",
    "logoInitial": "V",
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
    "anzsco": "234711",
    "posted": "Recently",
    "slug": "brisbane-veterinary-criticalist-emergency-critical-care-specialist-bvsc-brisbane-days-no-weekends-482-494-sponsorship",
    "url": "jobs/brisbane-veterinary-criticalist-emergency-critical-care-specialist-bvsc-brisbane-days-no-weekends-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879229989?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5879229992",
    "title": "Data Support Engineer",
    "company": "Optiver",
    "logoInitial": "O",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-data-support-engineer-482-186-sponsorship",
    "url": "jobs/sydney-data-support-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5879229992?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=6BC9E25689897FF1BEE01BEF7800F00E92A8643D",
    "description": ""
  },
  {
    "id": "adzuna-5879138403",
    "title": "Occupational Therapist (Clinic based / Sponsorship Available)",
    "company": "Omega Medical Pty Ltd",
    "logoInitial": "O",
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
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "newcastle-occupational-therapist-clinic-based-sponsorship-available-482-186-sponsorship",
    "url": "jobs/newcastle-occupational-therapist-clinic-based-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879138403?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-gp-taree-pep-dpa-mixed-billings-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-gp-taree-pep-dpa-mixed-billings-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879097674?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5879097451",
    "title": "VR GP - DPA -70% of Billings - sponsorship available - 1 hour from Melbourne",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-vr-gp-dpa-70-of-billings-sponsorship-available-1-hour-from-melbourne-482-186-sponsorship",
    "url": "jobs/sydney-vr-gp-dpa-70-of-billings-sponsorship-available-1-hour-from-melbourne-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5879097451?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5878895073",
    "title": "Assistant FOH Manager",
    "company": "Talent on the Move Pty",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-assistant-foh-manager-482-186-sponsorship",
    "url": "jobs/sydney-assistant-foh-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878895073?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=CDF4814DA7BB632E2C864B2AC132F975C9257731",
    "description": ""
  },
  {
    "id": "adzuna-5878778408",
    "title": "Immigration Lawyer (2 yrs-Senior)",
    "company": "AFL Recruitment",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-immigration-lawyer-2-yrs-senior-482-186-sponsorship",
    "url": "jobs/sydney-immigration-lawyer-2-yrs-senior-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5878778408?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--457270425314709274",
    "title": "Governance Analyst",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-governance-analyst-482-186-sponsorship",
    "url": "jobs/sydney-governance-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-457270425314709274",
    "description": ""
  },
  {
    "id": "adzuna-5878483313",
    "title": "Podiatrist",
    "company": "konnecting",
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
    "salary": "$80,000 - $135,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-podiatrist-482-186-sponsorship",
    "url": "jobs/sydney-podiatrist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5878483313?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5878109900",
    "title": "Paediatrician",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-paediatrician-482-186-sponsorship",
    "url": "jobs/sydney-paediatrician-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878109900?se=uLb92Wyz8RGk6dCvHcHp9g&utm_medium=api&utm_source=13c876f1&v=4146EB73D6111EC874FADF8A3594BBB2365237D5",
    "description": ""
  },
  {
    "id": "adzuna-5878109897",
    "title": "Corporate Receptionist - Melbourne I Part-Time",
    "company": "Jarden's People System",
    "logoInitial": "J",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-corporate-receptionist-melbourne-i-part-time-482-186-sponsorship",
    "url": "jobs/melbourne-corporate-receptionist-melbourne-i-part-time-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5878109897?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=CDB7FB40EBAEC45C267356DDEE55BC46701CC7ED",
    "description": ""
  },
  {
    "id": "adzuna-5877797270",
    "title": "FIFO Chefs from Brisbane and surrounding suburbs (Sponsorship available)",
    "company": "ISS INTEGRATED SERV P/L",
    "logoInitial": "I",
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
    "slug": "sydney-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877797270?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5877183601",
    "title": "Store Person",
    "company": "Rockmount",
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
    "salary": "$10,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-store-person-482-186-sponsorship",
    "url": "jobs/sydney-store-person-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877183601?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--6357330022029076573",
    "title": "Claims Customer Solutions Specialist",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-claims-customer-solutions-specialist-482-186-sponsorship",
    "url": "jobs/sydney-claims-customer-solutions-specialist-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-6357330022029076573",
    "description": ""
  },
  {
    "id": "adzuna-5877124413",
    "title": "Maintenance and Grounds Coordinator",
    "company": "UniLodge",
    "logoInitial": "U",
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
    "salary": "$69,088 - $69,088 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "cairns-maintenance-and-grounds-coordinator-482-494-sponsorship",
    "url": "jobs/cairns-maintenance-and-grounds-coordinator-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5877124413?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5876963009",
    "title": "Graduate Internal Sales Representative - Mechanical/Engineering",
    "company": "Applied Industrial Technologies",
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
    "verifiedSponsor": true,
    "anzsco": "321212",
    "posted": "Recently",
    "slug": "sydney-graduate-internal-sales-representative-mechanicalengineering-482-186-sponsorship",
    "url": "jobs/sydney-graduate-internal-sales-representative-mechanicalengineering-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876963009?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5876427299",
    "title": "Senior Design Engineer",
    "company": "AVI-SPL",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-design-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-design-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5876427299?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=757FBCCDEA78BEA2F3666725D1893AFE29584B1A",
    "description": ""
  },
  {
    "id": "adzuna-5876426580",
    "title": "Orange Support Worker Children Services",
    "company": "Westhaven",
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-orange-support-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-orange-support-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5876426580?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=F21C7C4AD9FCADB67DF5B6BAD2BA9D2942509A5F",
    "description": ""
  },
  {
    "id": "adzuna-5876415243",
    "title": "Senior Piping Engineer",
    "company": "Bechtel",
    "logoInitial": "B",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "brisbane-senior-piping-engineer-482-494-sponsorship",
    "url": "jobs/brisbane-senior-piping-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876415243?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5876246006",
    "title": "VR GP | Whitsundays, Qld (DPA/MM5) MRCGP INT Dr Level 3 Supervision",
    "company": "Susan Hill GP Jobs",
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
    "salary": "$270,400 - $353,600 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-vr-gp-whitsundays-qld-dpamm5-mrcgp-int-dr-level-3-supervision-482-186-sponsorship",
    "url": "jobs/sydney-vr-gp-whitsundays-qld-dpamm5-mrcgp-int-dr-level-3-supervision-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5876246006?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5875762730",
    "title": "Drillers - FIFO Australia",
    "company": "GRiP",
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
    "salary": "$105,000 - $125,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-drillers-fifo-australia-482-186-sponsorship",
    "url": "jobs/sydney-drillers-fifo-australia-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875762730?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5875690547",
    "title": "Venue Manager & Assistant Venue Manager",
    "company": "Artesian Hospitality",
    "logoInitial": "A",
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
    "salary": "$75,000 - $110,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "141111",
    "posted": "Recently",
    "slug": "gold-coast-venue-manager-assistant-venue-manager-482-494-sponsorship",
    "url": "jobs/gold-coast-venue-manager-assistant-venue-manager-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5875690547?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble-3612639519514729102",
    "title": "Marketing Manager - Social Influence & Authority",
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
    "type": "Part-time",
    "verifiedSponsor": true,
    "anzsco": "131112",
    "posted": "Recently",
    "slug": "sydney-marketing-manager-social-influence-authority-482-186-sponsorship",
    "url": "jobs/sydney-marketing-manager-social-influence-authority-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/3612639519514729102",
    "description": ""
  },
  {
    "id": "adzuna-5874383661",
    "title": "YOW! Expression of Interest - Software Engineer",
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
    "slug": "sydney-yow-expression-of-interest-software-engineer-482-186-sponsorship",
    "url": "jobs/sydney-yow-expression-of-interest-software-engineer-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5874383661?se=HsNRREXD8RGRp-cPGAs4Ig&utm_medium=api&utm_source=13c876f1&v=BD1B5E8D4811C8DBF7D71111B8EA696E71E32A7B",
    "description": ""
  },
  {
    "id": "adzuna-5873713150",
    "title": "Consultant Psychiatrist",
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-consultant-psychiatrist-482-186-sponsorship",
    "url": "jobs/sydney-consultant-psychiatrist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873713150?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "darwin-general-practitioner-darwin-mmm2dpa-482-494-sponsorship",
    "url": "jobs/darwin-general-practitioner-darwin-mmm2dpa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873535799?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5873076229",
    "title": "Consultant/Specialist Anaesthetist",
    "company": "Sante Recruitment",
    "logoInitial": "S",
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
    "salary": "$450,000 - $450,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "darwin-consultantspecialist-anaesthetist-482-494-sponsorship",
    "url": "jobs/darwin-consultantspecialist-anaesthetist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5873076229?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5872260925",
    "title": "Corporate Receptionist I Sydney",
    "company": "Jarden's People System",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-corporate-receptionist-i-sydney-482-186-sponsorship",
    "url": "jobs/sydney-corporate-receptionist-i-sydney-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5872260925?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=75BCC4F75927236895B7D78F2C87DC2C983D87FB",
    "description": ""
  },
  {
    "id": "adzuna-5871270935",
    "title": "Private Dentist",
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
    "salary": "$150,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "melbourne-private-dentist-482-186-sponsorship",
    "url": "jobs/melbourne-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871270935?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5871216422",
    "title": "General Practitioner - Footscray",
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "melbourne-general-practitioner-footscray-482-186-sponsorship",
    "url": "jobs/melbourne-general-practitioner-footscray-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871216422?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5871214613",
    "title": "Technician - Electrical",
    "company": "Orica",
    "logoInitial": "O",
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
    "anzsco": "341111",
    "posted": "Recently",
    "slug": "sydney-technician-electrical-482-186-sponsorship",
    "url": "jobs/sydney-technician-electrical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5871214613?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5871080320",
    "title": "Family Dispute Resolution Advisor – Rockhampton",
    "company": "Catholic Care Central Queensland",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-family-dispute-resolution-advisor-rockhampton-482-186-sponsorship",
    "url": "jobs/sydney-family-dispute-resolution-advisor-rockhampton-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5871080320?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=7406E2515D1E3B707F6DCC74940A66EEBF0F0BC1",
    "description": ""
  },
  {
    "id": "adzuna-5870915410",
    "title": "Senior HSSE Engineer (Gas Turbines)",
    "company": "Caterpillar Inc.",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-hsse-engineer-gas-turbines-482-186-sponsorship",
    "url": "jobs/sydney-senior-hsse-engineer-gas-turbines-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915410?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870915306",
    "title": "Registered Nurse - Medical",
    "company": "MaterNews",
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
    "slug": "sydney-registered-nurse-medical-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-medical-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915306?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870915262",
    "title": "Brisbane Chefs and nearby suburbs for FIFO Central QLD mining sites (Sponsorship available)",
    "company": "ISS Facility Services",
    "logoInitial": "I",
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
    "slug": "brisbane-brisbane-chefs-and-nearby-suburbs-for-fifo-central-qld-mining-sites-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-brisbane-chefs-and-nearby-suburbs-for-fifo-central-qld-mining-sites-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915262?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "sydney-dual-degree-registered-nursemidwife-482-186-sponsorship",
    "url": "jobs/sydney-dual-degree-registered-nursemidwife-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870915130?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870912970",
    "title": "Finance Intern",
    "company": "Boeing",
    "logoInitial": "B",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-finance-intern-482-186-sponsorship",
    "url": "jobs/melbourne-finance-intern-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870912970?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870683593",
    "title": "Transmission Line Workers (Cert III)",
    "company": "GenusPlusÂ Group",
    "logoInitial": "G",
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
    "salary": "$124,800 - $145,600 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "burnie-transmission-line-workers-cert-iii-482-494-sponsorship",
    "url": "jobs/burnie-transmission-line-workers-cert-iii-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870683593?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253399",
    "posted": "Recently",
    "slug": "sydney-registrar-senior-registrar-emergency-482-186-sponsorship",
    "url": "jobs/sydney-registrar-senior-registrar-emergency-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870612539?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870158017",
    "title": "Food & Beverage Supervisor",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-food-beverage-supervisor-482-186-sponsorship",
    "url": "jobs/sydney-food-beverage-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870158017?se=2paKOam18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=D0362276A5E7B5EF931315B778777FBA0FE63AFA",
    "description": ""
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
    "anzsco": "351411",
    "posted": "Recently",
    "slug": "darwin-cook-tennant-creek-482-494-sponsorship",
    "url": "jobs/darwin-cook-tennant-creek-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870157172?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=53F672F5A81E4D215538F134670C0F099B74A2F4",
    "description": ""
  },
  {
    "id": "adzuna-5870156427",
    "title": "Chefs | DIDO | 2:1 | Chinchilla / Dalby",
    "company": "Sodexo",
    "logoInitial": "S",
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
    "slug": "sydney-chefs-dido-21-chinchilla-dalby-482-186-sponsorship",
    "url": "jobs/sydney-chefs-dido-21-chinchilla-dalby-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870156427?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=7150653EC57C9AB1A81AC6C80B97E1ABEFAF974B",
    "description": ""
  },
  {
    "id": "adzuna-5870152614",
    "title": "Food & Beverage Supervisor",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-food-beverage-supervisor-482-186-sponsorship",
    "url": "jobs/melbourne-food-beverage-supervisor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870152614?se=pA3giam18RGQT9YH7QD3rQ&utm_medium=api&utm_source=13c876f1&v=ACADC83E744C7B6BF3F04899E915BBDBD2A3B302",
    "description": ""
  },
  {
    "id": "adzuna-5870152355",
    "title": "Registered Midwife",
    "company": "Calvary Health Care",
    "logoInitial": "C",
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
    "anzsco": "254111",
    "posted": "Recently",
    "slug": "hobart-registered-midwife-482-494-sponsorship",
    "url": "jobs/hobart-registered-midwife-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152355?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870152260",
    "title": "Technical Field Engineer",
    "company": "St Vincent’s Health Australia",
    "logoInitial": "S",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-technical-field-engineer-vic-482-186-sponsorship",
    "url": "jobs/melbourne-technical-field-engineer-vic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152260?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870152177",
    "title": "Registered Nurse - Central Allocations Unit (Acute & Aged)",
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
    "slug": "sydney-registered-nurse-central-allocations-unit-acute-aged-482-186-sponsorship",
    "url": "jobs/sydney-registered-nurse-central-allocations-unit-acute-aged-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870152177?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870151537",
    "title": "Enrolled Nurse - Central Allocations Unit Horsham",
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
    "slug": "sydney-enrolled-nurse-central-allocations-unit-horsham-482-186-sponsorship",
    "url": "jobs/sydney-enrolled-nurse-central-allocations-unit-horsham-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870151537?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870148347",
    "title": "FIFO Chefs from Brisbane and nearby suburbs (Sponsorship available)",
    "company": "ISS Global",
    "logoInitial": "I",
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
    "slug": "brisbane-fifo-chefs-from-brisbane-and-nearby-suburbs-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-fifo-chefs-from-brisbane-and-nearby-suburbs-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870148347?se=yilRr6y28RG6-LerT6N-jw&utm_medium=api&utm_source=13c876f1&v=EBC81BD2EC2BF4BFFDFCCD293DEEB8303269C16C",
    "description": ""
  },
  {
    "id": "adzuna-5870148162",
    "title": "Registered Nurse – Clinical & Community Partnerships",
    "company": "Helping Solutions",
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
    "salary": "$90,000 - $140,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "254415",
    "posted": "Recently",
    "slug": "perth-registered-nurse-clinical-community-partnerships-482-494-sponsorship",
    "url": "jobs/perth-registered-nurse-clinical-community-partnerships-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870148162?se=BghAsZ3E8RG_59bpLSVmjQ&utm_medium=api&utm_source=13c876f1&v=067A3FD5857D68B9A907D72480E7AB75106FFE97",
    "description": ""
  },
  {
    "id": "adzuna-5870147260",
    "title": "FIFO Chefs from Brisbane and surrounding suburbs (Sponsorship available)",
    "company": "ISS Facility Services",
    "logoInitial": "I",
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
    "slug": "brisbane-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-fifo-chefs-from-brisbane-and-surrounding-suburbs-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870147260?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870145962",
    "title": "Casual Academic Talent Pool - Canberra - Engineering & Technology",
    "company": "UNSW",
    "logoInitial": "U",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "canberra-casual-academic-talent-pool-canberra-engineering-technology-482-186-sponsorship",
    "url": "jobs/canberra-casual-academic-talent-pool-canberra-engineering-technology-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870145962?se=tjFf0myz8RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=D58D31742CAB1627F53FAF87BBAA3EDF4F110872",
    "description": ""
  },
  {
    "id": "adzuna-5870145069",
    "title": "Development Engineer Electronics",
    "company": "Signify",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-development-engineer-electronics-482-186-sponsorship",
    "url": "jobs/sydney-development-engineer-electronics-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870145069?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=E0D2D53ED22FBEA3B2CE782C7E41043AD6FBAFA3",
    "description": ""
  },
  {
    "id": "adzuna-5870144871",
    "title": "Child and Youth Worker – PPT and Casual",
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
    "verifiedSponsor": true,
    "anzsco": "272511",
    "posted": "Recently",
    "slug": "sydney-child-and-youth-worker-ppt-and-casual-482-186-sponsorship",
    "url": "jobs/sydney-child-and-youth-worker-ppt-and-casual-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870144871?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870144802",
    "title": "Graduate Registered Nurse",
    "company": "Cobar Shire Council",
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
    "slug": "sydney-graduate-registered-nurse-482-186-sponsorship",
    "url": "jobs/sydney-graduate-registered-nurse-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870144802?se=LHn7pJ3E8RG1teJ4yz8T2A&utm_medium=api&utm_source=13c876f1&v=416226C2D3C3FC2FF6876656E3273F3820EFD12C",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870144510",
    "title": "Casual Associate",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-casual-associate-482-494-sponsorship",
    "url": "jobs/perth-casual-associate-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870144510?se=rt5gJKm18RGc5IY_8jS9tg&utm_medium=api&utm_source=13c876f1&v=471602D2ECF46510A9CB58E42936F18E5DD2B793",
    "description": ""
  },
  {
    "id": "adzuna-5870139045",
    "title": "Part-time Housekeeping Attendant",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-part-time-housekeeping-attendant-482-186-sponsorship",
    "url": "jobs/melbourne-part-time-housekeeping-attendant-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870139045?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870137786",
    "title": "Dubbo Support Worker Children Services",
    "company": "Westhaven",
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-dubbo-support-worker-children-services-482-186-sponsorship",
    "url": "jobs/sydney-dubbo-support-worker-children-services-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870137786?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=A8DDDD283E03E2BCC732500DBC9051C474444AEE",
    "description": ""
  },
  {
    "id": "adzuna-5870135057",
    "title": "Cook – Residential Aged Care",
    "company": "Yadu Health Aboriginal Corporation",
    "logoInitial": "Y",
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
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-cook-residential-aged-care-482-186-sponsorship",
    "url": "jobs/sydney-cook-residential-aged-care-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870135057?se=fs3HpZ3E8RGg6pc98v1yfA&utm_medium=api&utm_source=13c876f1&v=F092C6C2662F2B4421016EACBC9BF8EE8AE0D9A2",
    "description": ""
  },
  {
    "id": "adzuna-5870134118",
    "title": "Venue Manager",
    "company": "Beerfarm",
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
    "anzsco": "141111",
    "posted": "Recently",
    "slug": "sydney-venue-manager-482-186-sponsorship",
    "url": "jobs/sydney-venue-manager-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870134118?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5870133643",
    "title": "Family Dispute Resolution Advisor – Mackay",
    "company": "Catholic Care Central Queensland",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-family-dispute-resolution-advisor-mackay-482-186-sponsorship",
    "url": "jobs/sydney-family-dispute-resolution-advisor-mackay-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5870133643?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5870131003",
    "title": "Head Chef - Lakes Entrance Care Community",
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
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "sydney-head-chef-lakes-entrance-care-community-482-186-sponsorship",
    "url": "jobs/sydney-head-chef-lakes-entrance-care-community-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870131003?se=rt3tQBu08RGm1alvctyjWA&utm_medium=api&utm_source=13c876f1&v=69143759A5EFB43D160270AA97B1B50AAEF46413",
    "description": ""
  },
  {
    "id": "adzuna-5870130839",
    "title": "Project Engineer",
    "company": "Fugro",
    "logoInitial": "F",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-project-engineer-482-494-sponsorship",
    "url": "jobs/perth-project-engineer-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5870130839?se=VDNJ-nXB8RG6ObUVOas6lg&utm_medium=api&utm_source=13c876f1&v=D3DE3E049B70951A72498D20551DA0CB05569ACD",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-vrnon-vr-75-billings-narellan-surrounds-nsw-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-vrnon-vr-75-billings-narellan-surrounds-nsw-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868988822?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5868560001",
    "title": "Aged Carer | Sponsorship Opportunities Available in NSW and SA!",
    "company": "Roshana Care Group",
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
    "verifiedSponsor": true,
    "anzsco": "423111",
    "posted": "Recently",
    "slug": "sydney-aged-carer-sponsorship-opportunities-available-in-nsw-and-sa-482-186-sponsorship",
    "url": "jobs/sydney-aged-carer-sponsorship-opportunities-available-in-nsw-and-sa-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5868560001?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "jooble--5054508518561796816",
    "title": "Senior Business Analyst, Calypso, Eqlipse",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-business-analyst-calypso-eqlipse-482-186-sponsorship",
    "url": "jobs/sydney-senior-business-analyst-calypso-eqlipse-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5054508518561796816",
    "description": ""
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-specialist-product-and-sales-analyst-digital-product-482-186-sponsorship",
    "url": "jobs/sydney-specialist-product-and-sales-analyst-digital-product-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5583812160920551153",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-partner-success-manager-482-186-sponsorship",
    "url": "jobs/sydney-partner-success-manager-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-7978218948990326837",
    "description": ""
  },
  {
    "id": "jooble--668632767387578925",
    "title": "Customer Floor and Catering Services Coordinator (Contractor)",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-floor-and-catering-services-coordinator-contractor-482-186-sponsorship",
    "url": "jobs/sydney-customer-floor-and-catering-services-coordinator-contractor-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-668632767387578925",
    "description": ""
  },
  {
    "id": "adzuna-5867137923",
    "title": "Occupational Therapist - Tailored Caseloads",
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
    "salary": "$115,000 - $800,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "252411",
    "posted": "Recently",
    "slug": "melbourne-occupational-therapist-tailored-caseloads-482-186-sponsorship",
    "url": "jobs/melbourne-occupational-therapist-tailored-caseloads-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867137923?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-clinic-private-hospital-work-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-clinic-private-hospital-work-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867137489?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5867136633",
    "title": "Head Chef, Sous Chef & Chef de Partie - Sponsorship Available",
    "company": "Australia Chef Migration",
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
    "salary": "$75,000 - $80,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "351311",
    "posted": "Recently",
    "slug": "brisbane-head-chef-sous-chef-chef-de-partie-sponsorship-available-482-494-sponsorship",
    "url": "jobs/brisbane-head-chef-sous-chef-chef-de-partie-sponsorship-available-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5867136633?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "jooble--3487876652181029503",
    "title": "Senior Analyst - Technology Risk Transformation & Governance (Line 1 - max term 2 years)",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-analyst-technology-risk-transformation-governance-line-1-max-term-2-years-482-186-sponsorship",
    "url": "jobs/sydney-senior-analyst-technology-risk-transformation-governance-line-1-max-term-2-years-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3487876652181029503",
    "description": ""
  },
  {
    "id": "jooble-915373189732194715",
    "title": "Actuary, Strategic Capital",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-actuary-strategic-capital-482-186-sponsorship",
    "url": "jobs/sydney-actuary-strategic-capital-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/915373189732194715",
    "description": ""
  },
  {
    "id": "jooble-7303840785842415962",
    "title": "Customer Success Manager, Economics Intelligence Solutions",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-customer-success-manager-economics-intelligence-solutions-482-186-sponsorship",
    "url": "jobs/sydney-customer-success-manager-economics-intelligence-solutions-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/7303840785842415962",
    "description": ""
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
    "anzsco": "323212",
    "posted": "Recently",
    "slug": "darwin-fitter-machinist-1st-class-metal-machinist-482-494-sponsorship",
    "url": "jobs/darwin-fitter-machinist-1st-class-metal-machinist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5864347810?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5863631918",
    "title": "Remote Community Store - Duty Supervisors - Couple Position",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-remote-community-store-duty-supervisors-couple-position-482-494-sponsorship",
    "url": "jobs/perth-remote-community-store-duty-supervisors-couple-position-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5863631918?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "225113",
    "posted": "Recently",
    "slug": "sydney-evergreen-sales-development-representative-482-186-sponsorship",
    "url": "jobs/sydney-evergreen-sales-development-representative-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/1579125609709979225",
    "description": ""
  },
  {
    "id": "jooble--4349611541527147189",
    "title": "Data and Reporting Analyst",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-data-and-reporting-analyst-482-186-sponsorship",
    "url": "jobs/sydney-data-and-reporting-analyst-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-4349611541527147189",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-manager-trading-operations-482-186-sponsorship",
    "url": "jobs/sydney-manager-trading-operations-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-3844822619036675737",
    "description": ""
  },
  {
    "id": "jooble--8678721439528820713",
    "title": "Senior Test Engineer",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-test-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-test-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-8678721439528820713",
    "description": ""
  },
  {
    "id": "jooble-2786787054944422334",
    "title": "Senior Analyst - Financial Risk",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-analyst-financial-risk-482-186-sponsorship",
    "url": "jobs/sydney-senior-analyst-financial-risk-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2786787054944422334",
    "description": ""
  },
  {
    "id": "jooble--2917747428602314164",
    "title": "Senior Quality & Test Engineer",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-quality-test-engineer-482-186-sponsorship",
    "url": "jobs/sydney-senior-quality-test-engineer-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-2917747428602314164",
    "description": ""
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
    "anzsco": "263111",
    "posted": "Recently",
    "slug": "sydney-trading-systems-engineer-linux-operating-systems-12mftc-482-186-sponsorship",
    "url": "jobs/sydney-trading-systems-engineer-linux-operating-systems-12mftc-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/304905933300764271",
    "description": ""
  },
  {
    "id": "jooble--547145820006094209",
    "title": "Global Partnerships Specialist (Mandarin)",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-global-partnerships-specialist-mandarin-482-186-sponsorship",
    "url": "jobs/sydney-global-partnerships-specialist-mandarin-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-547145820006094209",
    "description": ""
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-application-support-lead-swift-482-186-sponsorship",
    "url": "jobs/sydney-application-support-lead-swift-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/2719440955017947204",
    "description": ""
  },
  {
    "id": "jooble--5902568790677314914",
    "title": "Group Administrator",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-group-administrator-482-186-sponsorship",
    "url": "jobs/sydney-group-administrator-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/-5902568790677314914",
    "description": ""
  },
  {
    "id": "jooble-5863742163043471893",
    "title": "Senior Manager - Resilience Culture & Capability lead",
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
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-senior-manager-resilience-culture-capability-lead-482-186-sponsorship",
    "url": "jobs/sydney-senior-manager-resilience-culture-capability-lead-482-186-sponsorship.html",
    "apply_url": "https://jooble.org/jdp/5863742163043471893",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "perth-general-practitioner-harvey-wa-mm5dpa-482-494-sponsorship",
    "url": "jobs/perth-general-practitioner-harvey-wa-mm5dpa-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862939147?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5862939030",
    "title": "Electrical Project Managers - Growing Electrical Contractor",
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
    "verifiedSponsor": true,
    "anzsco": "341111",
    "posted": "Recently",
    "slug": "sydney-electrical-project-managers-growing-electrical-contractor-482-186-sponsorship",
    "url": "jobs/sydney-electrical-project-managers-growing-electrical-contractor-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862939030?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "description": ""
  },
  {
    "id": "adzuna-5862222503",
    "title": "Consultant Paediatrics - Australia (NSW,Vic & Other Locations)",
    "company": "Sante Recruitment",
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
    "salary": "$480,000 - $480,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-consultant-paediatrics-australia-nswvic-other-locations-482-186-sponsorship",
    "url": "jobs/sydney-consultant-paediatrics-australia-nswvic-other-locations-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862222503?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5862222504",
    "title": "Consultant Obstetrics and Gynaecology - Australia NSW,Vic.",
    "company": "Sante Recruitment",
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
    "salary": "$480,000 - $480,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-consultant-obstetrics-and-gynaecology-australia-nswvic-482-186-sponsorship",
    "url": "jobs/sydney-consultant-obstetrics-and-gynaecology-australia-nswvic-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5862222504?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "253111",
    "posted": "Recently",
    "slug": "sydney-general-practitioner-rockingham-sign-on-incentive-482-186-sponsorship",
    "url": "jobs/sydney-general-practitioner-rockingham-sign-on-incentive-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5861362283?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860860984",
    "title": "Contract Administrator - Saltbush Contracting",
    "company": "Saltbush Contracting",
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
    "salary": "$78,000 - $90,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-contract-administrator-saltbush-contracting-482-186-sponsorship",
    "url": "jobs/sydney-contract-administrator-saltbush-contracting-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/land/ad/5860860984?se=dKhq5Wmz8RGSI57gYuD12g&utm_medium=api&utm_source=13c876f1&v=8E65DE2EF1D1BA38555F3447E058484433E202B4",
    "description": ""
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
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "newcastle-private-dentist-482-186-sponsorship",
    "url": "jobs/newcastle-private-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532301?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532330",
    "title": "Periodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $250,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-periodontist-482-186-sponsorship",
    "url": "jobs/melbourne-periodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532330?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532338",
    "title": "Endodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$150,000 - $200,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-endodontist-482-186-sponsorship",
    "url": "jobs/melbourne-endodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532338?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532335",
    "title": "Orthodontist",
    "company": "Zest Business Group",
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
    "salary": "$150,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "sydney-orthodontist-482-186-sponsorship",
    "url": "jobs/sydney-orthodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532335?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532292",
    "title": "Orthodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$400,000 - $450,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "melbourne-orthodontist-482-186-sponsorship",
    "url": "jobs/melbourne-orthodontist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532292?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252312",
    "posted": "Recently",
    "slug": "melbourne-peadiatric-dentist-482-186-sponsorship",
    "url": "jobs/melbourne-peadiatric-dentist-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532316?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5860532320",
    "title": "Periodontist",
    "company": "Zest Business Group",
    "logoInitial": "Z",
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
    "salary": "$200,000 - $300,000 AUD",
    "type": "Full-time",
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "perth-periodontist-482-494-sponsorship",
    "url": "jobs/perth-periodontist-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5860532320?utm_medium=api&utm_source=13c876f1",
    "description": ""
  },
  {
    "id": "adzuna-5859670899",
    "title": "Scrub/Scout Permanent",
    "company": "Henderson Recruitment Pty Ltd t/a Henderson Healthcare",
    "logoInitial": "H",
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
    "verifiedSponsor": true,
    "anzsco": "511112",
    "posted": "Recently",
    "slug": "adelaide-scrubscout-permanent-482-494-sponsorship",
    "url": "jobs/adelaide-scrubscout-permanent-482-494-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670899?utm_medium=api&utm_source=13c876f1",
    "description": ""
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
    "anzsco": "252712",
    "posted": "Recently",
    "slug": "sydney-speech-pathologist-new-graduate-support-program-sponsorship-available-482-186-sponsorship",
    "url": "jobs/sydney-speech-pathologist-new-graduate-support-program-sponsorship-available-482-186-sponsorship.html",
    "apply_url": "https://www.adzuna.com.au/details/5859670653?utm_medium=api&utm_source=13c876f1",
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
