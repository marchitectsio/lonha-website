# LONHA — Law Offices of Nicole Hodge Amey

Marketing website for the Law Offices of Nicole Hodge Amey, a boutique special-education civil-rights law firm in Oakland, CA.

## Stack
- Next.js 15 (App Router)
- Tailwind CSS v3
- TypeScript
- Accessibility-oriented design and testing against WCAG 2.1 AA
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

## Check and build

```bash
npm run build
npm run check
```

The contact endpoint requires `CONTACT_WEBHOOK_URL`, an HTTPS endpoint that accepts JSON form submissions. Deploy as a Next.js application so `/api/contact` remains available.

## Pages
- `/` — Home (EN), `/es/` — Inicio
- `/about` — About Nicole, `/es/sobre-nicole`
- `/how-we-help` — Practice areas hub + 4 detail pages
- `/know-your-rights` — Resource hub
- `/privacy` — Privacy and website disclaimers (EN/ES)
- `/contact` — Contact form (EN/ES)
- `/accessibility` — Accessibility statement

## Deployment

Set `CONTACT_WEBHOOK_URL` in the hosting environment, deploy, and submit a non-confidential test message. The public contact details, bar number, official resource links, and privacy language should be rechecked during each launch review.

---
Built by Marchitects for LONHA. Documentation in `/docs/phase1_research_brief.md` and `/docs/phase2_brand_system_spec.md`.
