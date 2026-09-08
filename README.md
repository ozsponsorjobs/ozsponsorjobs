# OZ Sponsor Jobs (ozsponsorjobs.site)

> High-performance, automated Australian Visa Sponsorship Job Aggregator hosted on GitHub Pages.
> Connecting international professionals with verified Australian Standard Business Sponsors (SBS) offering Subclass 482 (TSS), Subclass 186 (ENS), and Subclass 494 (Regional) visa opportunities.

---

## Architecture Overview

- **Core Pages**:
  - `index.html`: Real-time job search/filtering by keyword, state, visa subclass, and shortage industry. Pre-rendered for instant SEO.
  - `about.html`: Detailed breakdown of Subclass 482, 186, and 494 pathways and platform mission.
  - `contact.html`: Contact form for job seekers and Australian employers submitting sponsor listings.
  - `privacy-policy.html`: GDPR, Australian Privacy Principles (APPs), and Google AdSense compliance.
  - `terms.html`: Terms of Service, job aggregator disclaimers, and MARA regulatory notice.
- **Design System**: Zero heavy external CSS frameworks. Pure Vanilla CSS (`css/style.css`) using CSS variables and mobile-first responsive grid.
- **Programmatic Job Pages (`/jobs/`)**:
  - Static HTML files generated automatically with SEO-rich slug names.
  - Every job embeds a 100% compliant `JobPosting` and `BreadcrumbList` Schema.org JSON-LD.
- **Automated Workflow (`.github/workflows/deploy.yml`)**:
  - Runs automatically on every push to `main` and on a 12-hour cron schedule.
  - Executes `generate_jobs.py` and `test_generator.py`.
  - Commits updated jobs, `sitemap.xml`, and `index.html` directly back to `main` for instant GitHub Pages re-deployment.

---

## Automation Pipeline

### Running Locally

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the automated generator
python generate_jobs.py

# 3. Run verification test suite
python test_generator.py
```

### GitHub Actions Workflow

Located in `.github/workflows/deploy.yml`:
- **Triggers**:
  - Push to `main`
  - Cron schedule: `0 0,12 * * *` (Runs every 12 hours)
  - Manual trigger via `workflow_dispatch`
- **Actions**:
  1. Sets up Python 3.10
  2. Ingests latest sponsorship jobs
  3. Validates anti-spam rules
  4. Generates programmatic job pages (`/jobs/*.html`)
  5. Updates `sitemap.xml` with absolute URLs
  6. Pre-renders static job cards in `index.html`
  7. Commits and deploys changes to GitHub Pages
