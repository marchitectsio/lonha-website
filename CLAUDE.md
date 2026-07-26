# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repository.

## What this repo is

`lonha-website` is the marketing site for the Law Offices of Nicole Hodge
Amey (LONHA), a California special-education law firm. Next.js 15 (App
Router, static export), Tailwind CSS, TypeScript, WCAG 2.1 AA, bilingual
EN/ES. See `README.md` for stack and page details.

## Context to read before marketing or copy work

This repo also serves as the working session for broader Marchitects
ecosystem documentation. Read in this order:

1. **`docs/ecosystem-constitution.md`** — the cross-brand architecture:
   how Marchitects, Social Following Studios (SFS), LINEA, AAFC, and Front
   Desk Intelligence relate. Background/orientation only — not LONHA's own
   positioning.
2. **`.agents/product-marketing.md`** — LONHA's actual product-marketing
   context (audience, positioning, differentiation, brand voice). This is
   the file the installed marketing skills (`.claude/skills/`) read when
   generating copy, running CRO audits, SEO work, etc. for **this site's
   pages**. Keep it scoped to LONHA — never overwrite it with ecosystem-level
   or SFS content.
3. **`docs/social-following-studios-context.md`** — reference on SFS, the
   email/CRM/marketing infrastructure vendor LONHA is a customer of via
   Marchitects. Background for email/CRM/analytics work only.

## Marketing skills

48 skills from `coreyhaines31/marketingskills` are installed in
`.claude/skills/`. They trigger on natural-language requests ("help me get
more signups" → `/cro`) or direct invocation (`/cro`, `/seo-audit`,
`/marketing-council`, etc.). All of them read `.agents/product-marketing.md`
first — keep that file current when LONHA's positioning changes.

## Other docs

- `docs/phase1_research_brief.md` — brand/UX/competitive research brief
- `docs/phase2_brand_system_spec.md` — visual design system spec
- `docs/ty-amey-call-notes.md`, `docs/ty-amey-call-actions.md` — client call
  notes and action items
