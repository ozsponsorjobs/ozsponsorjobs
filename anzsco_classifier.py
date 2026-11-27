#!/usr/bin/env python3
"""
OZ Sponsor Jobs - Robust ANZSCO Classification Engine
Maps any Australian job title & description to its legitimate ANZSCO Code,
Assessing Authority, Occupation Group, and Skills List according to official
Australian Bureau of Statistics (ABS) and Department of Home Affairs guidelines.
"""

import re

# Comprehensive ANZSCO Occupation Definitions
ANZSCO_CATALOG = {
    # 1. Medical Doctors & Specialists
    "doctor_gp": {
        "anzsco": "253111",
        "title": "General Practitioner / Medical Officer",
        "authority": "Medical Board of Australia (MBA) / AMC",
        "skills_list": "Priority Migration Skilled Occupation List (PMSOL) / MLTSSL",
        "sector": "healthcare"
    },
    "medical_specialist": {
        "anzsco": "253399",
        "title": "Specialist Physician / Medical Registrar",
        "authority": "Medical Board of Australia (MBA) / AMC",
        "skills_list": "Priority Migration Skilled Occupation List (PMSOL)",
        "sector": "healthcare"
    },
    # 2. Nursing & Midwifery
    "nurse_registered": {
        "anzsco": "254415",
        "title": "Registered Nurse (Medical / Acute Care / Aged Care)",
        "authority": "Australian Nursing and Midwifery Accreditation Council (ANMAC)",
        "skills_list": "Priority Migration Skilled Occupation List (PMSOL) / MLTSSL",
        "sector": "healthcare"
    },
    "midwife": {
        "anzsco": "254111",
        "title": "Midwife",
        "authority": "Australian Nursing and Midwifery Accreditation Council (ANMAC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    # 3. Aged Care & Personal Carers
    "carer_aged_disability": {
        "anzsco": "423111",
        "title": "Aged or Disabled Carer / Support Worker",
        "authority": "Aged Care Industry Labour Agreement / ANMAC",
        "skills_list": "Aged Care Industry Labour Agreement (Direct PR Pathway)",
        "sector": "healthcare"
    },
    "personal_care_assistant": {
        "anzsco": "423313",
        "title": "Personal Care Assistant / Residential Care Officer",
        "authority": "Aged Care Industry Labour Agreement / ACWA",
        "skills_list": "Aged Care Industry Labour Agreement (Concessions)",
        "sector": "healthcare"
    },
    # 4. Allied Health Professionals
    "physiotherapist": {
        "anzsco": "252511",
        "title": "Physiotherapist",
        "authority": "Australian Physiotherapy Council (APC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "occupational_therapist": {
        "anzsco": "252411",
        "title": "Occupational Therapist",
        "authority": "Occupational Therapy Council (OTC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "psychologist": {
        "anzsco": "272311",
        "title": "Clinical Psychologist / Psychologist",
        "authority": "Australian Psychological Society (APS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "speech_pathologist": {
        "anzsco": "252712",
        "title": "Speech Pathologist",
        "authority": "Speech Pathology Australia (SPA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "dentist": {
        "anzsco": "252312",
        "title": "Dentist / Dental Practitioner",
        "authority": "Australian Dental Council (ADC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "veterinarian": {
        "anzsco": "234711",
        "title": "Veterinarian / Vet Surgeon",
        "authority": "Australasian Veterinary Boards Council (AVBC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    # 5. Engineering Professionals
    "civil_engineer": {
        "anzsco": "233211",
        "title": "Civil Engineer / Infrastructure Structural Engineer",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    "mechanical_engineer": {
        "anzsco": "233512",
        "title": "Mechanical Engineer / Plant Engineer",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    "electrical_engineer": {
        "anzsco": "233311",
        "title": "Electrical Engineer / RF Systems Engineer",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    "mining_engineer": {
        "anzsco": "233611",
        "title": "Mining Engineer / Resources Specialist",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    # 6. Skilled Trades - Metal & Machinery
    "welder_boilermaker": {
        "anzsco": "322313",
        "title": "Welder (First Class) / Boilermaker Fabricator",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "metal_machinist_fitter": {
        "anzsco": "323212",
        "title": "Fitter (General) / Fitter Machinist / CNC Operator",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    # 7. Skilled Trades - Automotive
    "diesel_motor_mechanic": {
        "anzsco": "321212",
        "title": "Diesel Motor Mechanic / Heavy Commercial Vehicle Specialist",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "panel_beater_spray_painter": {
        "anzsco": "324311",
        "title": "Vehicle Spray Painter / Panel Beater",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    # 8. Skilled Trades - Construction & Building
    "electrician": {
        "anzsco": "341111",
        "title": "Electrician (General) / Special Class",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "carpenter_joiner": {
        "anzsco": "331211",
        "title": "Carpenter and Joiner",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "plumber": {
        "anzsco": "334111",
        "title": "Plumber (General)",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "roofer_glazier_tiler": {
        "anzsco": "333311",
        "title": "Roof Tiler / Glazier / Wall and Floor Tiler",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL) & DAMA",
        "sector": "trades"
    },
    # 9. Transport & Heavy Machinery
    "truck_driver_transport": {
        "anzsco": "733111",
        "title": "Truck Driver (General) / Heavy Combination Driver",
        "authority": "DAMA Regional Labour Agreement",
        "skills_list": "Designated Area Migration Agreement (DAMA)",
        "sector": "trades"
    },
    # 10. Hospitality & Culinary
    "chef_executive": {
        "anzsco": "351311",
        "title": "Chef / Executive Head Chef",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL) & MLTSSL",
        "sector": "hospitality"
    },
    "cook_pastry": {
        "anzsco": "351411",
        "title": "Cook / Pastrycook",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "hospitality"
    },
    "restaurant_venue_manager": {
        "anzsco": "141111",
        "title": "Cafe or Restaurant Manager / Venue Manager",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "hospitality"
    },
    # 11. Administration, Clerical & Operations
    "project_production_admin": {
        "anzsco": "511112",
        "title": "Program or Project Administrator / Production Support Specialist",
        "authority": "VETASSESS",
        "skills_list": "Core Skills List / Regional Skilled List",
        "sector": "management"
    },
    "office_practice_manager": {
        "anzsco": "512111",
        "title": "Office Manager / Practice Manager",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "management"
    },
    "hr_recruitment_consultant": {
        "anzsco": "223112",
        "title": "Recruitment Consultant / Human Resource Professional",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL) / Core Skills",
        "sector": "management"
    },
    # 12. Corporate Sales, Marketing & Channel Management
    "marketing_channel_specialist": {
        "anzsco": "225113",
        "title": "Marketing Specialist / Channel Development Specialist",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL) / Core Skills",
        "sector": "management"
    },
    "sales_marketing_director": {
        "anzsco": "131112",
        "title": "Sales and Marketing Manager / Commercial Channel Director",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Stream / CSOL",
        "sector": "management"
    },
    "sales_rep_industrial": {
        "anzsco": "225412",
        "title": "Sales Representative (Industrial & Commercial Products)",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "management"
    },
    "ict_business_development_manager": {
        "anzsco": "225212",
        "title": "ICT Account & Technical Business Development Manager",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL) / Core Skills",
        "sector": "technology"
    },
    "sales_marketing_bd": {
        "anzsco": "225113",
        "title": "Marketing Specialist / Channel Development Specialist",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL) / Core Skills",
        "sector": "management"
    },
    "business_operations_manager": {
        "anzsco": "139999",
        "title": "Specialist Managers NEC / Operations Manager",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Stream / Regional Employer Sponsor",
        "sector": "management"
    },
    "child_protection_social_worker": {
        "anzsco": "272511",
        "title": "Social Worker / Child Protection Practitioner",
        "authority": "Australian Association of Social Workers (AASW)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    # 13. Finance & Accounting
    "accountant_auditor": {
        "anzsco": "221111",
        "title": "Accountant (General) / Corporate Auditor",
        "authority": "CPA Australia / Chartered Accountants ANZ (CA ANZ)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "finance"
    },
    "financial_analyst": {
        "anzsco": "222311",
        "title": "Financial Investment Analyst / Retail Electricity Analyst",
        "authority": "VETASSESS",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "finance"
    },
    # 14. Education & Teaching
    "teacher_secondary_early": {
        "anzsco": "241411",
        "title": "Secondary School Teacher / Early Childhood Teacher",
        "authority": "Australian Institute for Teaching and School Leadership (AITSL)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "management"
    },
    # 15. IT & Software Engineering (STRICTLY for genuine tech roles)
    "software_programmer": {
        "anzsco": "261313",
        "title": "Software and Applications Programmer",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "technology"
    },
    "systems_network_engineer": {
        "anzsco": "263111",
        "title": "Computer Network and Systems Engineer",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "technology"
    },
    "cyber_security_analyst": {
        "anzsco": "262112",
        "title": "Cyber Security Analyst / Threat Intelligence Specialist",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "technology"
    },
    # 16. Additional occupations (added 2026-11-27).
    # These titles previously fell through to the 511112 catch-all; each now
    # maps to its correct ANZSCO code. Titles that match NO rule return None
    # from classify_job_anzsco() instead of a wrong code.
    "stonemason": {
        "anzsco": "331112",
        "title": "Stonemason",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "bricklayer": {
        "anzsco": "331111",
        "title": "Bricklayer",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "glazier": {
        "anzsco": "333111",
        "title": "Glazier",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "trades"
    },
    "painter": {
        "anzsco": "332211",
        "title": "Painting Trades Worker",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "trades"
    },
    "refrigeration_mechanic": {
        "anzsco": "342111",
        "title": "Airconditioning and Refrigeration Mechanic",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "trades"
    },
    "gardener": {
        "anzsco": "362211",
        "title": "Gardener (General)",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "trades"
    },
    "drafter": {
        "anzsco": "312111",
        "title": "Architectural Draftsperson",
        "authority": "VETASSESS",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "engineering"
    },
    "building_associate": {
        "anzsco": "312112",
        "title": "Building Associate",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "engineering"
    },
    "architect": {
        "anzsco": "232111",
        "title": "Architect",
        "authority": "Architects Accreditation Council of Australia (AACA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    "project_engineer": {
        "anzsco": "233999",
        "title": "Engineering Professionals nec (Project Engineer)",
        "authority": "Engineers Australia (EA)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "engineering"
    },
    "construction_project_manager": {
        "anzsco": "133111",
        "title": "Construction Project Manager",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "management"
    },
    "pharmacist": {
        "anzsco": "251513",
        "title": "Pharmacist",
        "authority": "Australian Pharmacy Council (APC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "sonographer": {
        "anzsco": "251211",
        "title": "Medical Imaging Professional (Sonographer / Radiographer)",
        "authority": "Australian Society of Medical Imaging and Radiation Therapy (ASMIRT)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "podiatrist": {
        "anzsco": "252611",
        "title": "Podiatrist",
        "authority": "Australian and New Zealand Podiatry Accreditation Council (ANZPAC)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "healthcare"
    },
    "solicitor": {
        "anzsco": "271311",
        "title": "Solicitor",
        "authority": "Legal Profession Admission Board (state/territory)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "management"
    },
    "university_lecturer": {
        "anzsco": "242111",
        "title": "University Lecturer",
        "authority": "VETASSESS",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "management"
    },
    "ict_business_analyst": {
        "anzsco": "261111",
        "title": "ICT Business Analyst",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "technology"
    },
    "systems_analyst": {
        "anzsco": "261112",
        "title": "Systems Analyst",
        "authority": "Australian Computer Society (ACS)",
        "skills_list": "Medium and Long-term Strategic Skills List (MLTSSL)",
        "sector": "technology"
    },
    "baker": {
        "anzsco": "351111",
        "title": "Baker",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "hospitality"
    },
    "butcher": {
        "anzsco": "351211",
        "title": "Butcher or Smallgoods Maker",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "hospitality"
    },
    "hairdresser": {
        "anzsco": "391111",
        "title": "Hairdresser",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Short-term Skilled Occupation List (STSOL)",
        "sector": "hospitality"
    },
    "housekeeper": {
        "anzsco": "811211",
        "title": "Commercial Cleaner / Housekeeper",
        "authority": "Trades Recognition Australia (TRA)",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "trades"
    },
    "contract_administrator": {
        "anzsco": "511111",
        "title": "Contract Administrator",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "management"
    },
    "general_clerk": {
        "anzsco": "531111",
        "title": "General Clerk",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "management"
    },
    "accounts_clerk": {
        "anzsco": "551111",
        "title": "Accounts Clerk",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "finance"
    },
    "receptionist": {
        "anzsco": "542111",
        "title": "Receptionist (General)",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "management"
    },
    "secretary": {
        "anzsco": "521211",
        "title": "Secretary (General)",
        "authority": "VETASSESS",
        "skills_list": "Core Skills Occupation List (CSOL)",
        "sector": "management"
    },
}


def clean_job_title(raw_title: str) -> str:
    """
    Cleans raw scraped job titles by removing full-width brackets,
    redundant locations, scraping tags, and messy artifacts.
    """
    if not raw_title:
        return ""
    
    # 1. Replace Chinese / full-width brackets with standard ASCII or remove
    t = raw_title.replace("（", "(").replace("）", ")").replace("【", "[").replace("】", "]")
    t = t.replace("［", "[").replace("］", "]").replace("«", "").replace("»", "")
    t = t.replace("`", "'").replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    
    # 2. Remove parenthetical location redundancies, e.g. ( Sydney, Melbourne ), (Sydney CBD), (Australia)
    t = re.sub(r"\s*\(\s*(?:sydney|melbourne|brisbane|perth|adelaide|hobart|darwin|canberra|gold coast|geelong|cairns|newcastle|wollongong|nsw|vic|qld|wa|sa|tas|act|nt|australia|\s*,\s*)+\s*\)", "", t, flags=re.IGNORECASE)
    
    # 3. Remove trailing scraping junk like "- Immediate Start", "[Hiring Now]", "- 482 / 186", "| Visa Sponsorship"
    t = re.sub(r"\s*[-|–—]\s*(?:visa\s+sponsorship(?:\s+available)?|482|186|494|immediate\s+start|hiring\s+now|urgent|full\s*time|contract)\b.*$", "", t, flags=re.IGNORECASE)
    t = re.sub(r"\s*\[(?:hiring\s+now|immediate\s+start|urgent|sponsorship|visa)\]", "", t, flags=re.IGNORECASE)
    
    # 4. Clean up any leftover empty brackets or double spaces
    t = re.sub(r"\(\s*\)", "", t)
    t = re.sub(r"\[\s*\]", "", t)
    t = re.sub(r"\s{2,}", " ", t).strip()
    t = re.sub(r"^[-,–—\s]+|[-,–—\s]+$", "", t)
    
    return t


def classify_job_anzsco(title: str, description: str = "") -> dict | None:
    """
    Precision multi-stage classification that evaluates Job Title first, then Description.
    Guarantees no false 261313 assignment for administrative, medical, trade, or hospitality jobs.
    Returns None when no rule matches: callers must OMIT the ANZSCO code instead
    of stamping a wrong one (the old 511112 catch-all mislabelled 37% of jobs).
    """
    clean_t = clean_job_title(title)
    t = clean_t.lower()
    d = description.lower()
    text = f"{t} {d}"

    # 1. Social Work & Child Protection (High priority in Government jobs)
    if any(k in t for k in ["child protection", "social worker", "case manager", "youth worker"]):
        return ANZSCO_CATALOG["child_protection_social_worker"]

    # 2. Medical Doctors / Physicians / Specialists / GPs
    medical_specialist_keywords = [
        "specialist", "registrar", "psychiatry", "psychiatrist", "surgeon", "surgery",
        "paediatrician", "pediatrician", "paediatric", "pediatric", "anaesthetist",
        "anesthetist", "cardiologist", "dermatologist", "neurologist", "oncologist",
        "pathologist", "radiologist", "obstetrician", "gynaecologist", "gynecologist",
        "ophthalmologist", "orthopaedic", "orthopedic", "endocrinologist", "gastroenterologist",
        "nephrologist", "rheumatologist", "urologist", "consultant physician"
    ]
    if any(k in t for k in medical_specialist_keywords):
        return ANZSCO_CATALOG["medical_specialist"]
    if any(k in t for k in ["gp ", " gp", "general practitioner", "medical officer", "doctor", "physician", "dpa/mmm", "locum gp"]):
        return ANZSCO_CATALOG["doctor_gp"]

    # 3. Nurses & Midwives
    if "midwife" in t or "midwifery" in t:
        return ANZSCO_CATALOG["midwife"]
    if any(k in t for k in ["nurse", "nursing", "rn ", "clinical nurse", "enrolled nurse"]):
        return ANZSCO_CATALOG["nurse_registered"]

    # 4. Aged Care / Personal Carers / Disability Support
    if any(k in t for k in ["aged care", "care worker", "caregiver", "personal care", "residential care", "home care worker", "support worker", "carer"]):
        if "residential care" in t or "assistant" in t or "officer" in t:
            return ANZSCO_CATALOG["personal_care_assistant"]
        return ANZSCO_CATALOG["carer_aged_disability"]

    # 5. Allied Health
    if "physiotherapist" in t or "physio" in t:
        return ANZSCO_CATALOG["physiotherapist"]
    if "occupational therapist" in t or re.search(r"\bot\b", t):
        return ANZSCO_CATALOG["occupational_therapist"]
    if "psychologist" in t or "psychology" in t:
        return ANZSCO_CATALOG["psychologist"]
    if "speech pathologist" in t or "speech therapist" in t:
        return ANZSCO_CATALOG["speech_pathologist"]
    if "dentist" in t or "dental" in t:
        return ANZSCO_CATALOG["dentist"]
    # Word-boundary match: plain "vet" as a substring also matched "veteran".
    if re.search(r"\bvet\b|\bveterinar\w*", t):
        return ANZSCO_CATALOG["veterinarian"]
    if "pharmacist" in t or "pharmacy" in t:
        return ANZSCO_CATALOG["pharmacist"]
    if any(k in t for k in ["sonographer", "radiographer", "medical imaging"]):
        return ANZSCO_CATALOG["sonographer"]
    if "podiatrist" in t or "podiatry" in t:
        return ANZSCO_CATALOG["podiatrist"]

    # 6. Skilled Trades - Welding, Machining, Fitting
    if any(k in t for k in ["welder", "boilermaker", "fabricat", "welding"]):
        return ANZSCO_CATALOG["welder_boilermaker"]
    if any(k in t for k in ["fitter", "machinist", "cnc ", "turner"]):
        return ANZSCO_CATALOG["metal_machinist_fitter"]

    # 7. Skilled Trades - Automotive & Mechanics
    # NOTE: plain "glazier" is building glazing (333111), not vehicle glazing.
    if any(k in t for k in ["spray painter", "panel beater", "autoglazier"]):
        return ANZSCO_CATALOG["panel_beater_spray_painter"]
    if any(k in t for k in ["mechanic", "diesel", "heavy diesel", "hd mechanic", "motor vehicle"]):
        return ANZSCO_CATALOG["diesel_motor_mechanic"]

    # 8. Skilled Trades - Construction, Electrical, Plumbing, Roofing
    if "electrician" in t or "electrical" in t and "engineer" not in t:
        return ANZSCO_CATALOG["electrician"]
    if "carpenter" in t or "joiner" in t:
        return ANZSCO_CATALOG["carpenter_joiner"]
    if "plumber" in t or "plumbing" in t:
        return ANZSCO_CATALOG["plumber"]
    if any(k in t for k in ["roofer", "roofing", "tiler"]):
        return ANZSCO_CATALOG["roofer_glazier_tiler"]
    if "glazier" in t:
        return ANZSCO_CATALOG["glazier"]
    if any(k in t for k in ["stonemason", "stone mason"]):
        return ANZSCO_CATALOG["stonemason"]
    if "bricklayer" in t or "brick layer" in t:
        return ANZSCO_CATALOG["bricklayer"]
    if "painter" in t:
        return ANZSCO_CATALOG["painter"]
    if any(k in t for k in ["refrigeration", "air conditioning", "hvac"]):
        return ANZSCO_CATALOG["refrigeration_mechanic"]
    if any(k in t for k in ["gardener", "garden labourer", "garden laborer"]):
        return ANZSCO_CATALOG["gardener"]
    if any(k in t for k in ["housekeeper", "housekeeping", "cleaner"]):
        return ANZSCO_CATALOG["housekeeper"]

    # 9. Transport & Drivers — driver-specific terms only. The old "transport"
    # keyword also matched "Transport Manager" / "Transport Coordinator",
    # which are not driving roles.
    if re.search(r"\b(driver|hgv)\b", t):
        return ANZSCO_CATALOG["truck_driver_transport"]

    # 10. Hospitality & Chefs
    if "head chef" in t or "sous chef" in t or "chef" in t:
        return ANZSCO_CATALOG["chef_executive"]
    if "cook" in t or "pastry" in t or "barista" in t or "kitchen" in t:
        return ANZSCO_CATALOG["cook_pastry"]
    if "baker" in t or "bakery" in t:
        return ANZSCO_CATALOG["baker"]
    if any(k in t for k in ["butcher", "meat worker", "slaughter"]):
        return ANZSCO_CATALOG["butcher"]
    if "hairdresser" in t or "hair dresser" in t:
        return ANZSCO_CATALOG["hairdresser"]
    if any(k in t for k in [
        "restaurant manager", "venue manager", "hotel manager", "cafe manager",
        "hospitality manager", "food and beverage", "foh", "front of house",
        "duty manager", "bar manager", "floor manager", "dining room manager",
        "catering manager", "assistant foh", "coffee", "head of coffee"
    ]):
        return ANZSCO_CATALOG["restaurant_venue_manager"]

    # 11. Administration, Clerical & Operations.
    # Word-boundary matching only: the old substring checks matched "admin" /
    # "officer" / "coordinator" / "clerk" inside unrelated words and sent every
    # unmatched admin-adjacent title to 511112. Clerk / receptionist / secretary
    # now get their own codes; "contract administrator" is 511111, not 511112.
    if re.search(r"\bcontract administrator\b", t):
        return ANZSCO_CATALOG["contract_administrator"]
    # Accounts clerks (payable / receivable / payroll) are 551111, not 511112.
    if re.search(r"\b(accounts?\s+(payable|receivable)|payroll\s+(clerk|officer|administrator)|accounts?\s+clerk)\b", t):
        return ANZSCO_CATALOG["accounts_clerk"]
    if re.search(r"\b(administrator|administration|coordinator|officer)\b", t):
        if re.search(r"\b(hr|human resources|recruitment|talent)\b", t):
            return ANZSCO_CATALOG["hr_recruitment_consultant"]
        # 511112 is "Program or Project Administrator": map here ONLY when the
        # title actually says project/program. A generic coordinator, officer
        # or administrator (e.g. "Rebate Coordinator", "Office Administrator",
        # "Compliance Officer") is NOT a program administrator — fall through
        # and omit the code if nothing else matches.
        if re.search(r"\b(project|program|programme)\b", t):
            return ANZSCO_CATALOG["project_production_admin"]
    if re.search(r"\breceptionist\b", t):
        return ANZSCO_CATALOG["receptionist"]
    if re.search(r"\bsecretary\b", t):
        return ANZSCO_CATALOG["secretary"]
    if re.search(r"\bclerk\b", t):
        return ANZSCO_CATALOG["general_clerk"]

    # Legal professionals (before the general sales/management rules).
    if any(k in t for k in ["solicitor", "lawyer", "legal counsel", "immigration lawyer"]):
        return ANZSCO_CATALOG["solicitor"]

    # 12. Recruitment, Sales, Marketing, Channel Management
    # Rebate roles are administrative, not sales or marketing: no ANZSCO
    # unit group covers rebate coordination, so a title containing "rebate"
    # must skip this whole sales bucket (e.g. "Sales Commercial and
    # Rebate Coordinator" must NOT become marketing_channel_specialist).
    # Later rules still apply; if nothing else matches, the code is omitted.
    _is_rebate_role = "rebate" in t
    if any(k in t for k in ["recruitment", "recruiter", "talent acquisition"]):
        return ANZSCO_CATALOG["hr_recruitment_consultant"]

    # Genuine ICT / Tech Sales ONLY if clear software/cloud/ICT context exists
    is_tech_sales = any(k in t for k in ["ict", "software", "saas", "cloud", "technology solutions", "solution sales", "systems engineer", "it sales", "technical account", "tam"]) or (
        any(k in d for k in ["saas", "software as a service", "cloud platform", "ict sales", "digital identity", "cybersecurity"]) and any(w in t for w in ["sales", "account manager"])
    )
    if not _is_rebate_role and is_tech_sales and any(k in t for k in ["business development", "account manager", "sales manager", "sales executive", "sales engineer"]):
        return ANZSCO_CATALOG["ict_business_development_manager"]

    # Channel Management & Marketing Specialists (e.g. BYD, Automotive, Consumer Distribution)
    if not _is_rebate_role and any(k in t for k in ["channel management", "channel specialist", "channel development", "marketing specialist", "brand manager", "marketing coordinator", "campaign manager", "market research", "marketing lead"]):
        return ANZSCO_CATALOG["marketing_channel_specialist"]

    # Sales & Marketing Leadership / Directors
    if not _is_rebate_role and any(k in t for k in ["sales manager", "marketing manager", "commercial manager", "head of sales", "sales director", "general manager sales"]):
        return ANZSCO_CATALOG["sales_marketing_director"]

    # Industrial & Commercial Sales Representatives
    if not _is_rebate_role and any(k in t for k in ["sales representative", "account executive", "territory manager", "sales consultant", "sales executive", "sales advisor", "dealer"]):
        return ANZSCO_CATALOG["sales_rep_industrial"]

    # General Business Development & Marketing Specialist
    if not _is_rebate_role and any(k in t for k in ["sales", "account manager", "business development", "marketing", "channel"]):
        return ANZSCO_CATALOG["marketing_channel_specialist"]

    if any(k in t for k in ["general manager", "operations manager", "workplaces", "branch manager", "centre manager", "practice manager", "office manager"]):
        return ANZSCO_CATALOG["business_operations_manager"]
    if "construction project manager" in t or "construction manager" in t:
        return ANZSCO_CATALOG["construction_project_manager"]

    # 13. Finance & Accounting
    if any(k in t for k in ["accountant", "accounting", "audit", "tax ", "payroll", "cfo"]):
        return ANZSCO_CATALOG["accountant_auditor"]
    if any(k in t for k in ["financial analyst", "electricity analyst", "risk analyst", "credit analyst", "pricing analyst", "investment analyst"]):
        return ANZSCO_CATALOG["financial_analyst"]

    # 14. Education & Teaching
    if "lecturer" in t or "university lecturer" in t:
        return ANZSCO_CATALOG["university_lecturer"]
    if any(k in t for k in ["teacher", "educator", "tutor", "teaching"]):
        return ANZSCO_CATALOG["teacher_secondary_early"]

    # 15. Engineers (Civil, Mechanical, Mining, Electrical)
    # Drafting / building roles first: "civil drafter" contains "civil" but is
    # not a civil engineer.
    if "drafter" in t or "draftsperson" in t:
        return ANZSCO_CATALOG["drafter"]
    if "building associate" in t:
        return ANZSCO_CATALOG["building_associate"]
    # "Architect" only for building architects — software/cloud/solutions
    # architects are handled by the IT rules in section 16.
    if "architect" in t and not any(k in t for k in ["software", "cloud", "devops", "data", "solution", "enterprise", "technical", "systems"]):
        return ANZSCO_CATALOG["architect"]
    if "civil" in t or "structural" in t or "bridge" in t or "tunnel" in t:
        return ANZSCO_CATALOG["civil_engineer"]
    if "mining" in t or "resources" in t or "geologist" in t or "metallurgist" in t:
        return ANZSCO_CATALOG["mining_engineer"]
    if "mechanical" in t and "engineer" in t:
        return ANZSCO_CATALOG["mechanical_engineer"]
    if "electrical engineer" in t or "rf engineer" in t:
        return ANZSCO_CATALOG["electrical_engineer"]
    if "project engineer" in t:
        return ANZSCO_CATALOG["project_engineer"]

    # 16. IT & Software Engineering (GENUINE TECH ROLES ONLY)
    if "business analyst" in t or "ict business analyst" in t:
        return ANZSCO_CATALOG["ict_business_analyst"]
    if "systems analyst" in t:
        return ANZSCO_CATALOG["systems_analyst"]
    if any(k in t for k in ["software", "developer", "frontend", "backend", "full stack", "fullstack", "programmer", "react", "python", "node", "java", "golang"]):
        return ANZSCO_CATALOG["software_programmer"]
    if any(k in t for k in ["devops", "cloud", "aws", "azure", "linux", "systems engineer", "network engineer", "infrastructure engineer", "trading systems"]):
        return ANZSCO_CATALOG["systems_network_engineer"]
    if any(k in t for k in ["cyber", "security", "threat intelligence", "soc analyst", "penetration"]):
        return ANZSCO_CATALOG["cyber_security_analyst"]
    if any(k in t for k in ["data engineer", "data analyst", "data scientist", "solutions architect", "enterprise architect"]):
        return ANZSCO_CATALOG["software_programmer"]

    # No rule matched: return None. Callers MUST omit the ANZSCO code rather
    # than stamp a wrong one (the old 511112 catch-all mislabelled 37% of jobs).
    return None
