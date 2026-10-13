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
    }
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


def classify_job_anzsco(title: str, description: str = "") -> dict:
    """
    Precision multi-stage classification that evaluates Job Title first, then Description.
    Guarantees no false 261313 assignment for administrative, medical, trade, or hospitality jobs.
    """
    clean_t = clean_job_title(title)
    t = clean_t.lower()
    d = description.lower()
    text = f"{t} {d}"

    # 1. Social Work & Child Protection (High priority in Government jobs)
    if any(k in t for k in ["child protection", "social worker", "case manager", "youth worker"]):
        return ANZSCO_CATALOG["child_protection_social_worker"]

    # 2. Medical Doctors / Physicians / GPs
    if any(k in t for k in ["gp ", " gp", "general practitioner", "medical officer", "doctor", "registrar", "psychiatrist", "physician", "dpa/mmm"]):
        if any(k in t for k in ["specialist", "registrar", "psychiatry", "consultant", "surgeon", "director"]):
            return ANZSCO_CATALOG["medical_specialist"]
        return ANZSCO_CATALOG["doctor_gp"]

    # 3. Nurses & Midwives
    if "midwife" in t or "midwifery" in t:
        return ANZSCO_CATALOG["midwife"]
    if any(k in t for k in ["nurse", "nursing", "rn ", "clinical nurse"]):
        return ANZSCO_CATALOG["nurse_registered"]

    # 4. Aged Care / Personal Carers / Disability Support
    if any(k in t for k in ["aged care", "care worker", "caregiver", "personal care", "residential care", "home care worker", "support worker", "carer"]):
        if "residential care" in t or "assistant" in t or "officer" in t:
            return ANZSCO_CATALOG["personal_care_assistant"]
        return ANZSCO_CATALOG["carer_aged_disability"]

    # 5. Allied Health
    if "physiotherapist" in t or "physio" in t:
        return ANZSCO_CATALOG["physiotherapist"]
    if "occupational therapist" in t or "ot " in t:
        return ANZSCO_CATALOG["occupational_therapist"]
    if "psychologist" in t or "psychology" in t:
        return ANZSCO_CATALOG["psychologist"]
    if "speech pathologist" in t or "speech therapist" in t:
        return ANZSCO_CATALOG["speech_pathologist"]
    if "dentist" in t or "dental" in t:
        return ANZSCO_CATALOG["dentist"]
    if "vet" in t or "veterinarian" in t:
        return ANZSCO_CATALOG["veterinarian"]

    # 6. Skilled Trades - Welding, Machining, Fitting
    if any(k in t for k in ["welder", "boilermaker", "fabricat", "welding"]):
        return ANZSCO_CATALOG["welder_boilermaker"]
    if any(k in t for k in ["fitter", "machinist", "cnc ", "turner"]):
        return ANZSCO_CATALOG["metal_machinist_fitter"]

    # 7. Skilled Trades - Automotive & Mechanics
    if any(k in t for k in ["spray painter", "panel beater", "glazier", "autoglazier"]):
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
    if any(k in t for k in ["roofer", "roofing", "tiler", "glazier"]):
        return ANZSCO_CATALOG["roofer_glazier_tiler"]

    # 9. Transport & Drivers
    if any(k in t for k in ["truck driver", "driver", "transport", "hgv", "mc driver", "hc driver"]):
        return ANZSCO_CATALOG["truck_driver_transport"]

    # 10. Hospitality & Chefs
    if "head chef" in t or "sous chef" in t or "chef" in t:
        return ANZSCO_CATALOG["chef_executive"]
    if "cook" in t or "pastry" in t or "barista" in t or "kitchen" in t:
        return ANZSCO_CATALOG["cook_pastry"]
    if any(k in t for k in ["restaurant manager", "venue manager", "hotel manager", "cafe manager", "hospitality manager", "food and beverage"]):
        return ANZSCO_CATALOG["restaurant_venue_manager"]

    # 11. Administration, Clerical & Operations (PREVENTS 1A - Production Administrator bug!)
    if any(k in t for k in ["administrator", "administration", "admin", "clerk", "coordinator", "officer", "receptionist", "secretary"]):
        if any(k in t for k in ["hr", "human resources", "recruitment", "talent"]):
            return ANZSCO_CATALOG["hr_recruitment_consultant"]
        return ANZSCO_CATALOG["project_production_admin"]

    # 12. Recruitment, Sales, Marketing, Channel Management
    if any(k in t for k in ["recruitment", "recruiter", "talent acquisition"]):
        return ANZSCO_CATALOG["hr_recruitment_consultant"]

    # Genuine ICT / Tech Sales ONLY if clear software/cloud/ICT context exists
    is_tech_sales = any(k in t for k in ["ict", "software", "saas", "cloud", "technology solutions", "solution sales", "systems engineer", "it sales", "technical account", "tam"]) or (
        any(k in d for k in ["saas", "software as a service", "cloud platform", "ict sales", "digital identity", "cybersecurity"]) and any(w in t for w in ["sales", "account manager"])
    )
    if is_tech_sales and any(k in t for k in ["business development", "account manager", "sales manager", "sales executive", "sales engineer"]):
        return ANZSCO_CATALOG["ict_business_development_manager"]

    # Channel Management & Marketing Specialists (e.g. BYD, Automotive, Consumer Distribution)
    if any(k in t for k in ["channel management", "channel specialist", "channel development", "marketing specialist", "brand manager", "marketing coordinator", "campaign manager", "market research", "marketing lead"]):
        return ANZSCO_CATALOG["marketing_channel_specialist"]

    # Sales & Marketing Leadership / Directors
    if any(k in t for k in ["sales manager", "marketing manager", "commercial manager", "head of sales", "sales director", "general manager sales"]):
        return ANZSCO_CATALOG["sales_marketing_director"]

    # Industrial & Commercial Sales Representatives
    if any(k in t for k in ["sales representative", "account executive", "territory manager", "sales consultant", "sales executive", "sales advisor", "dealer"]):
        return ANZSCO_CATALOG["sales_rep_industrial"]

    # General Business Development & Marketing Specialist
    if any(k in t for k in ["sales", "account manager", "business development", "marketing", "channel"]):
        return ANZSCO_CATALOG["marketing_channel_specialist"]

    if any(k in t for k in ["general manager", "operations manager", "workplaces", "branch manager", "centre manager", "practice manager"]):
        return ANZSCO_CATALOG["business_operations_manager"]

    # 13. Finance & Accounting
    if any(k in t for k in ["accountant", "accounting", "audit", "tax ", "payroll", "cfo"]):
        return ANZSCO_CATALOG["accountant_auditor"]
    if any(k in t for k in ["financial analyst", "electricity analyst", "risk analyst", "credit analyst", "pricing analyst"]):
        return ANZSCO_CATALOG["financial_analyst"]

    # 14. Education & Teaching
    if any(k in t for k in ["teacher", "educator", "tutor", "lecturer", "teaching"]):
        return ANZSCO_CATALOG["teacher_secondary_early"]

    # 15. Engineers (Civil, Mechanical, Mining, Electrical)
    if "civil" in t or "structural" in t or "bridge" in t or "tunnel" in t:
        return ANZSCO_CATALOG["civil_engineer"]
    if "mining" in t or "resources" in t or "geologist" in t or "metallurgist" in t:
        return ANZSCO_CATALOG["mining_engineer"]
    if "mechanical" in t and "engineer" in t:
        return ANZSCO_CATALOG["mechanical_engineer"]
    if "electrical engineer" in t or "rf engineer" in t:
        return ANZSCO_CATALOG["electrical_engineer"]

    # 16. IT & Software Engineering (GENUINE TECH ROLES ONLY)
    if any(k in t for k in ["software", "developer", "frontend", "backend", "full stack", "fullstack", "programmer", "react", "python", "node", "java", "golang"]):
        return ANZSCO_CATALOG["software_programmer"]
    if any(k in t for k in ["devops", "cloud", "aws", "azure", "linux", "systems engineer", "network engineer", "infrastructure engineer", "trading systems"]):
        return ANZSCO_CATALOG["systems_network_engineer"]
    if any(k in t for k in ["cyber", "security", "threat intelligence", "soc analyst", "penetration"]):
        return ANZSCO_CATALOG["cyber_security_analyst"]
    if any(k in t for k in ["data engineer", "data analyst", "data scientist", "solutions architect", "enterprise architect"]):
        return ANZSCO_CATALOG["software_programmer"]

    # Fallback to Administration/Management if non-tech, NOT Software Programmer!
    return ANZSCO_CATALOG["project_production_admin"]
