# LONHA — Law Offices of Nicole Hodge Amey

Marketing website for the Law Offices of Nicole Hodge Amey, a boutique special-education civil-rights law firm in Oakland, CA.

## Stack
- Next.js 15 (App Router, static export)
- Tailwind CSS v3
- TypeScript
- WCAG 2.1 AA compliant
- Bilingual EN/ES

## Brand
- Primary: Advocacy Slate `#2C4A6E`
- Secondary: Education Sage `#4A7C6F`
- Accent: Warm Terracotta `#B05E3A`
- Surface: Sand Cream `#F5F0E8`
- Type: Libre Baskerville (headings) + Source Sans 3 (body)

## Develop

```bash
npm install
npm run dev
```

## Build static export

```bash
npm run build
python3 fix_paths.py out
find out/es -name "*.html" -exec sed -i 's/<html lang="en">/<html lang="es">/g' \{\} \;
```

The `out/` directory contains the production static site, deployable to any static host (Vercel, Netlify, S3, GitHub Pages).

## Pages
- `/` — Home (EN), `/es/` — Inicio
- `/about` — About Nicole, `/es/sobre-nicole`
- `/how-we-help` — Practice areas hub + 4 detail pages
- `/know-your-rights` — Resource hub
- `/testimonials` — Client testimonials
- `/contact` — Contact form (EN/ES)
- `/accessibility` — Accessibility statement

## Status
Production-ready scaffold. Awaiting client content (bio, testimonials, headshot, resources). All TODOs marked inline.

---
Built by Marchitects for LONHA. Documentation in `/docs/phase1_research_brief.md` and `/docs/phase2_brand_system_spec.md`.
