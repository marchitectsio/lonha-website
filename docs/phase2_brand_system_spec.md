# LONHA Phase 2 — Brand System & Figma Blueprint
### Law Offices of Nicole Hodge Amey — lonhaca.com

**Document version:** Phase 2 — Design System Specification
**Prepared for:** Law Offices of Nicole Hodge Amey (LONHA)
**Reads alongside:** Phase 1 Research Brief
**Intended use:** A complete, Figma-ready specification for building LONHA's design system. Every token, component, and pattern in this document is annotated for accessibility, internationalization (EN/ES), and direct translation into Tailwind CSS / Next.js code in Phase 3.

---

## How to Use This Document

This spec is structured to mirror a Figma file's left-rail organization: **Tokens → Components → Patterns → Pages**. A designer reading this from top to bottom can build the Figma library in the same order. A developer can build the Tailwind config and component library from the same source. Both stay in sync because tokens are defined once, here.

The recommended primary palette is **Advocacy Slate** with the **Libre Baskerville + Source Sans 3** type pairing, per the Phase 1 brief. All examples below assume those choices. If the client selects the Justice Teal alternate or the Playfair / Lato pairing, the structure is unchanged — only the token values shift.

---

## 1. Design Tokens

Design tokens are the atomic units of the system. They live as Figma variables (Tokens Studio plugin recommended) and as CSS custom properties / Tailwind theme keys in code. One source of truth.

### 1.1 Color Tokens

#### Brand
| Token | Hex | WCAG on `--surface` | Use |
|---|---|---|---|
| `--brand-primary` | `#2C4A6E` | 8.6:1 — AAA | Navigation, primary headers, primary buttons |
| `--brand-primary-hover` | `#243C5B` | 10.7:1 — AAA | Hover state on primary buttons |
| `--brand-secondary` | `#4A7C6F` | 4.2:1 — AA Large | Section accents, secondary buttons, pull quotes |
| `--brand-accent` | `#B05E3A` | 4.7:1 — AA | CTA buttons, urgent banners, hover highlights |
| `--brand-accent-hover` | `#933F1F` | 6.4:1 — AA+ | CTA hover state |

#### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--surface` | `#F5F0E8` | Page background (Sand Cream) |
| `--surface-raised` | `#FFFFFF` | Cards, form backgrounds, modals |
| `--surface-inverse` | `#1A1A2E` | Dark sections, footer |
| `--text-primary` | `#1A1A2E` | Body copy, headings on light backgrounds |
| `--text-secondary` | `#3D3D54` | Meta text, captions (7.1:1 on surface — AAA) |
| `--text-on-inverse` | `#F5F0E8` | Body copy on dark sections |
| `--border-subtle` | `#D9D2C5` | Card borders, dividers |
| `--border-strong` | `#8C8579` | Input borders, hover dividers |

#### Functional
| Token | Hex | Use |
|---|---|---|
| `--link` | `#8C5A00` | Inline links — 7.3:1 on surface, AAA |
| `--link-visited` | `#5E3D00` | Visited links |
| `--success` | `#2D6A4F` | Form success states, confirmations |
| `--warning` | `#B86E00` | Cautionary banners (non-error) |
| `--error` | `#9B2226` | Form validation errors — 6.8:1 on surface |
| `--focus-ring` | `#B05E3A` | Outline color for `:focus-visible` (3px solid, 2px offset) |

**Figma setup note:** Create all of the above as Figma color variables under a single `LONHA / Color` collection. Set up two modes — `Light` (current values) and future `High Contrast` (boost ratios to AAA across the board). Phase 3 ships Light only; High Contrast is a Phase 4 enhancement.

### 1.2 Typography Tokens

**Font families** (loaded via Google Fonts in code; embedded into Figma file from the Libre Baskerville and Source Sans 3 Google Fonts pages):

```
--font-serif: "Libre Baskerville", Georgia, "Times New Roman", serif;
--font-sans:  "Source Sans 3", system-ui, -apple-system, "Segoe UI", sans-serif;
```

**Type scale** — a modular 1.250 (major third) scale anchored at 16px body. All sizes use `rem` so users who set browser zoom or larger default font size are respected.

| Token | rem | px | Line height | Weight | Family | Usage |
|---|---|---|---|---|---|---|
| `--text-display` | 3.815 | 61 | 1.1 | 700 | serif | Homepage hero only |
| `--text-h1` | 3.052 | 49 | 1.15 | 700 | serif | Page H1 |
| `--text-h2` | 2.441 | 39 | 1.2 | 700 | serif | Section headers |
| `--text-h3` | 1.953 | 31 | 1.25 | 600 | sans | Subsection headers |
| `--text-h4` | 1.563 | 25 | 1.3 | 600 | sans | Card titles, eyebrows |
| `--text-lead` | 1.25 | 20 | 1.5 | 400 | sans | Lead paragraphs |
| `--text-body` | 1.0 | 16 | 1.6 | 400 | sans | Body copy (minimum) |
| `--text-small` | 0.875 | 14 | 1.5 | 400 | sans | Meta, captions, footer |
| `--text-xs` | 0.75 | 12 | 1.4 | 600 | sans | Eyebrows, tags only — never body |

**Rules:**
- Body copy minimum is 16px. Never smaller, even in footer.
- Heading line-height tightens as size increases.
- Max line length (measure): 65–75 characters for body. Enforce via `max-width: 65ch` on text containers.
- All-caps disallowed except for `text-xs` eyebrow labels.
- Bilingual: both fonts include Latin Extended sets. Test rendering of `ñ á é í ó ú ü ¡ ¿` at every size in Figma before sign-off.

### 1.3 Spacing Tokens

8px base grid. Every margin, padding, and gap snaps to this scale.

| Token | px | rem | Common use |
|---|---|---|---|
| `--space-0` | 0 | 0 | Reset |
| `--space-1` | 4 | 0.25 | Tight icon gaps |
| `--space-2` | 8 | 0.5 | Inline element spacing |
| `--space-3` | 12 | 0.75 | Form field internal padding |
| `--space-4` | 16 | 1.0 | Standard component padding |
| `--space-5` | 24 | 1.5 | Section internal spacing |
| `--space-6` | 32 | 2.0 | Card padding, button padding |
| `--space-8` | 48 | 3.0 | Between adjacent components |
| `--space-10` | 64 | 4.0 | Section vertical padding (mobile) |
| `--space-12` | 96 | 6.0 | Section vertical padding (desktop) |
| `--space-16` | 128 | 8.0 | Hero vertical breathing room |

### 1.4 Radius, Elevation, Motion

**Radius**
| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Inputs, tags |
| `--radius-md` | 8px | Buttons, cards |
| `--radius-lg` | 16px | Modal corners, hero feature cards |
| `--radius-full` | 9999px | Pills, avatar crops |

**Elevation** — restraint. Civil rights firms should not look like SaaS dashboards.
| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(26, 26, 46, 0.06)` | Hover lift on cards |
| `--shadow-md` | `0 4px 12px rgba(26, 26, 46, 0.08)` | Sticky header on scroll |
| `--shadow-lg` | `0 16px 32px rgba(26, 26, 46, 0.12)` | Modals only |

**Motion** — respect `prefers-reduced-motion`. No motion that flashes or moves more than 3× per second (WCAG 2.3.1).
| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default transitions |
| `--duration-fast` | 150ms | Hover, focus |
| `--duration-base` | 250ms | Reveals, drawer open |
| `--duration-slow` | 400ms | Page transitions |

All motion wrapped in:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

### 1.5 Breakpoints

Mobile-first. The parent searching for help is almost always on a phone.

| Token | min-width | Layout |
|---|---|---|
| `--bp-sm` | 640px | Phablets — single column persists |
| `--bp-md` | 768px | Tablets — 2-column appears |
| `--bp-lg` | 1024px | Desktop — 3-column, sidebar nav |
| `--bp-xl` | 1280px | Large desktop — max content width caps |
| `--bp-2xl` | 1536px | Very large — additional margin only |

Max content width: `--container-max: 1200px`. Reading text containers cap further at `65ch`.

---

## 2. Logo and Iconography

### 2.1 Logo System

Nicole's firm currently uses no formal mark. A minimal wordmark is recommended over a symbolic logo — symbolic legal logos (gavels, scales, Lady Justice) are clichéd and run counter to the warm-authority brand position established in Phase 1.

**Primary wordmark:**
- "Law Offices of Nicole Hodge Amey" set in Libre Baskerville Bold, `letter-spacing: 0.01em`, color `--brand-primary`
- Sub-element: "LONHA" set in Source Sans 3 SemiBold Small Caps, `letter-spacing: 0.15em`, color `--brand-secondary`

**Responsive variants:**
| Variant | Width | When |
|---|---|---|
| Horizontal full | 320px+ | Desktop header, footer |
| Stacked | 180px+ | Tablet, narrow nav |
| Abbreviation only — "LONHA" | 96px+ | Mobile header, favicon |
| Mark only — stylized "L" in serif | 32px | Favicon, app icon |

**Clear space:** Equal to the cap-height of "LONHA" on all four sides. Never less.
**Minimum legible size:** 96px wide for the abbreviation, 180px for the full wordmark.

**Optional emblem (if client wants a symbol):** A geometric, minimal mark — three ascending horizontal bars (stairs / progress) inside a thin rounded rectangle — referencing both the IEP progression and equal-access ramps. Not required for launch.

### 2.2 Icon System

Use [Lucide](https://lucide.dev) icons — open license, minimal, geometric, includes accessibility-relevant glyphs. 24px default, 1.5px stroke, `currentColor` for theming.

Required icons for v1: `phone`, `mail`, `map-pin`, `calendar`, `chevron-right`, `chevron-down`, `menu`, `x`, `check`, `alert-circle`, `info`, `globe` (language toggle), `download`, `external-link`, `search`.

Decorative icons get `aria-hidden="true"`. Functional icon-only buttons (close, menu) get a visually hidden text label via `<span class="sr-only">`.

---

## 3. Base Components

Every component below is specified with: visual states, accessibility annotations, and the Tailwind class scaffold Phase 3 will use.

### 3.1 Button

**Variants:** Primary (filled), Secondary (outline), Tertiary (ghost / text-only), CTA (accent-filled).

| State | Visual change |
|---|---|
| Default | Per variant below |
| Hover | Background or border darkens by one step; cursor pointer |
| Focus (`:focus-visible`) | 3px `--focus-ring` outline, 2px offset, retains hover bg |
| Active | Subtle scale 0.98; background darkens further |
| Disabled | 50% opacity; `cursor: not-allowed`; `aria-disabled="true"` |
| Loading | Spinner replaces label; `aria-busy="true"`; label hidden but width preserved |

**Sizing:**
- Minimum target: 44×44px (WCAG 2.5.5)
- Default: `padding: 12px 24px`, `font-size: --text-body`, `font-weight: 600`
- Large: `padding: 16px 32px`, `font-size: --text-lead`
- Small (footer only): `padding: 8px 16px`, `font-size: --text-small`

**Per variant:**
| Variant | bg | text | border |
|---|---|---|---|
| Primary | `--brand-primary` | white | none |
| Secondary | transparent | `--brand-primary` | 2px `--brand-primary` |
| Tertiary | transparent | `--brand-primary` | none; underline on hover |
| CTA | `--brand-accent` | white | none |

**ARIA:** Use `<button>` for actions; `<a>` for navigation. Never `<div role="button">`. Loading states announce via `aria-busy`.

### 3.2 Input / Form Field

Every field has four parts: **Label (always visible, above field) → Input → Help text (optional) → Error message (when applicable)**.

**Anatomy:**
```
[Label *]              ← required indicated by visible "*" + aria-required
[                  ]   ← input, 16px font minimum (prevents iOS auto-zoom)
Help text              ← --text-secondary, --text-small
Error message          ← --error color, role="alert", aria-live="polite"
```

**States:**
| State | Visual |
|---|---|
| Default | `--border-subtle` 1px, white bg |
| Hover | `--border-strong` |
| Focus | 2px `--brand-primary` border, 3px focus ring offset |
| Error | 2px `--error` border, error icon, message below |
| Disabled | `--surface` bg, 50% text opacity |
| Filled-valid | `--success` checkmark on right |

**ARIA pattern:**
```html
<label for="parent-name">Your name <span aria-hidden="true">*</span></label>
<input id="parent-name" name="parent-name" type="text"
       required aria-required="true"
       aria-describedby="parent-name-help parent-name-error" />
<p id="parent-name-help" class="help-text">As it should appear on legal documents.</p>
<p id="parent-name-error" class="error-text" role="alert" aria-live="polite"></p>
```

**Bilingual:** Every field's label, help, and error message exists in both EN and ES. Spanish placeholders test against keyboard input methods (Spanish keyboards often produce dead-keys for accents — test that flow before launch).

### 3.3 Card

**Variants:** Practice Area, Attorney Bio, Case Result, Resource (downloadable), Testimonial.

**Practice Area Card:**
- Background `--surface-raised`
- Border 1px `--border-subtle`
- Padding `--space-6`
- Radius `--radius-md`
- Icon top-left (24px, `--brand-secondary`)
- H4 title in serif, `--brand-primary`
- 2-sentence description in body
- "Learn more →" tertiary button bottom
- Entire card is one clickable target — wrap in `<a>` with the h4 as primary label
- Hover: `--shadow-md` lift + `--brand-accent` underline on title

**Case Result Card:**
- No name. No school. No identifying combination (per Phase 1 §7.2).
- Header: case type tag (`--brand-secondary` pill, `--text-xs` uppercase)
- Body: 2–3 sentence anonymized outcome
- Footer: county served + year range
- Background `--surface-raised`, border-left 4px `--brand-accent`

**Testimonial Card:**
- Pull-quote treatment: serif italic, `--text-lead` size
- Source line: "Parent of student, [County]" — never a name
- `--brand-secondary` quotation mark glyph as decoration (`aria-hidden`)

**Resource Card (downloadable):**
- Icon: `download` if PDF, `external-link` if outbound
- File type badge ("PDF, 124 KB, English") — also announces in accessible name
- Brief description below title
- Each downloadable PDF must be tagged for accessibility per Phase 1 §4.2

### 3.4 Navigation

**Desktop header:**
- Sticky on scroll. Box-shadow `--shadow-md` appears after 80px scroll.
- Left: logo (full horizontal variant)
- Center / right: 4 primary nav items (Home, About Nicole, How We Help, Know Your Rights, Contact)
- Right: phone (`--brand-accent`, click-to-call, icon + number) + EN/ES toggle
- Height 80px; logo max-height 48px

**Mobile header:**
- Logo (abbreviation variant) left, hamburger right
- Phone CTA persistent in header (44×44 tap target)
- Hamburger opens a full-screen drawer (not a partial slide-down) — easier for trembling hands or magnification users
- Drawer must trap focus and close on `Escape` key; first focused element is the close button

**Skip link** is the very first element in `<body>`:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
Visually hidden by default, becomes visible on focus, positions at top-left.

**Language toggle** (EN/ES):
- Two adjacent buttons, current language has `aria-current="true"` and bold weight
- Toggling navigates to the equivalent localized URL (not a cookie that re-renders)
- Globe icon precedes the toggle; `aria-label="Change language / Cambiar idioma"`
- Never auto-redirect based on browser language — always show the user's choice

### 3.5 Modal / Dialog

Used sparingly. Only for: consultation booking confirmation, accessibility-statement quick view, video lightbox.

- Focus trapped inside; first focusable element receives focus on open
- `Escape` closes; clicking backdrop closes; clicking close button closes
- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` referencing the title
- Background scroll is locked while open
- Returns focus to the triggering element on close

### 3.6 Banner / Alert

**Variants:** Info (informational), Warning (cautionary), Error (form-level), Success (confirmation).

- Each carries an icon, a heading, a body, and (optional) a dismiss button
- `role="status"` for info/success, `role="alert"` for error/warning
- Never rely on color alone — icon + text always present

---

## 4. Patterns (Composed Components)

### 4.1 Hero Section
Single H1, sub-headline, two CTAs, attorney portrait (right column on desktop, below text on mobile). Background `--surface` with subtle decorative element (a serif "L" glyph at 20% opacity, behind the headline — `aria-hidden`).

### 4.2 Credibility Strip
4 horizontal items below hero: COPAA member badge, "Practicing since 2001", "Hundreds of cases", "Consultas en español". On mobile becomes 2×2 grid. Each item is a small icon + label, never an image of a logo without alt text.

### 4.3 Practice Areas Grid
3 Practice Area Cards in equal columns on desktop, stacked on mobile. Cards link to `/how-we-help/[slug]`.

### 4.4 Attorney Bio Block
Photo (square crop, `--radius-lg`) on left, 3-sentence bio + button to full About page on right. Photo `alt` text per Phase 1 §4.2.

### 4.5 Geographic Coverage Block
Sentence form, not a map: "We represent families across Oakland, the East Bay, Alameda County, Kern County, and the greater Los Angeles area." Plus a small grouped list of cities for SEO crawlability. No interactive map — adds complexity, accessibility burden, and slow page weight for no real user benefit at this firm scale.

### 4.6 Intake Contact Form
Five fields plus consent checkbox:
1. Your name (text, required)
2. Best phone number (tel, required)
3. Email (email, required)
4. Preferred language (radio: English / Español)
5. Briefly, what's happening? (textarea, required, 500-char limit, with live counter)
6. Consent: "I understand this form is not a guarantee of representation and no attorney-client relationship is created by submitting it." (checkbox, required)

Submit button is full-width on mobile, auto-width on desktop, `--brand-accent` CTA variant.

After submit: success state replaces the form (does not just append below) with the 24-hour response promise restated.

### 4.7 Footer
Three columns on desktop, stacked mobile:
- **Col 1:** Logo, mailing address (PO Box 5100, Oakland, CA 94605), phone, email
- **Col 2:** Sitemap links
- **Col 3:** Bar admission (CA #215157, admitted 2001), COPAA badge, accessibility statement link, privacy policy link
- Bottom strip: copyright, "Built to WCAG 2.1 AA standards"

Footer uses `--surface-inverse` background with `--text-on-inverse` for the warm-cream-on-deep-navy effect.

---

## 5. Page Wireframe Blueprints

The following are the eight pages, with the section stack and notes for each. A designer can build the Figma frames directly from these.

### 5.1 Home (`/` and `/es/`)
1. Skip link
2. Header (sticky)
3. Hero (Pattern 4.1) — headline candidate: "Your child has the right to an education designed for them. We make sure they get it." / ES equivalent per Phase 1 §6.3
4. Credibility strip (Pattern 4.2)
5. Practice Areas grid (Pattern 4.3) — three: IEP Disputes, Due Process, Discipline/Expulsion
6. Attorney bio block (Pattern 4.4)
7. Testimonials — 2-up testimonial cards (Pattern 3.3)
8. Geographic coverage (Pattern 4.5)
9. Resource preview — three featured guides
10. Contact CTA banner — full-width `--brand-primary` background, white headline, accent CTA
11. Footer

### 5.2 About Nicole (`/about` and `/es/sobre-nicole`)
1. Header
2. Page H1: "About Nicole Hodge Amey"
3. Full-bleed portrait + 400–600 word bio (provided in Phase 1 handoff)
4. Credentials list: CA Bar #215157, admitted 2001; COPAA member; languages spoken
5. Philosophy / approach pull quote
6. Press / publications (optional)
7. Contact CTA
8. Footer

### 5.3 How We Help — Hub (`/how-we-help`)
1. Header
2. Page H1 + 2-paragraph overview of LONHA's practice
3. 4-card grid: IEP Disputes, Due Process Hearings, Discipline & Expulsion, Section 504 & Discrimination
4. "What's the difference between an advocate and an attorney?" callout (Phase 1 §7.3)
5. Contact CTA
6. Footer

### 5.4 Practice Area Detail (`/how-we-help/[slug]`)
One template, four instances. Sections:
1. Header
2. Page H1 (practice area name)
3. Lead paragraph (what this is, in plain language)
4. "When to call us about this" — 4-item bulleted list
5. "What the process looks like" — numbered steps
6. Anonymized case result example (Pattern 3.3 case-result card)
7. Related resources (links to /know-your-rights)
8. Contact CTA
9. Footer

### 5.5 Know Your Rights (`/know-your-rights`)
1. Header
2. Page H1 + intro
3. Filter chips: All / IEP Basics / Due Process / Discipline / Spanish-language
4. Grid of Resource Cards (Pattern 3.3) — each with PDF download or article link
5. "Need legal help with your situation?" CTA
6. Footer

### 5.6 Testimonials (`/testimonials`)
1. Header
2. Page H1 + brief note on privacy and FERPA compliance
3. Grid of Testimonial Cards (Pattern 3.3) — 6–10 cards
4. "Add your voice" CTA — link to a consent-and-submission form
5. Footer

### 5.7 Contact (`/contact`)
1. Header
2. Page H1 + "We respond within 24 business hours"
3. Two-column layout: form (Pattern 4.6) left, contact info + map alternative right
4. FAQ — 4 expandable questions ("What does an initial consultation cost?", "Do you take cases outside the Bay Area?", "Habla español?", "How do I prepare for our first call?")
5. Footer

### 5.8 Accessibility Statement (`/accessibility`)
1. Header
2. Page H1 "Accessibility at LONHA"
3. Conformance status: WCAG 2.1 Level AA, tested [date]
4. Testing methodology: axe-core, Lighthouse, NVDA + VoiceOver manual passes
5. Known limitations
6. Feedback contact (dedicated email or form)
7. Last updated date
8. Footer

---

## 6. Figma File Architecture

The Figma file should be organized as follows. Each section is one Figma page.

```
📄 00 — Cover & Changelog
📄 01 — Tokens (color, type, spacing, radius, motion variables)
📄 02 — Components / Atoms (buttons, inputs, icons, links, badges)
📄 03 — Components / Molecules (form fields, cards, nav items, modals)
📄 04 — Patterns (hero, footer, practice grid, contact form, etc.)
📄 05 — Pages — Desktop (8 pages, each as a frame)
📄 06 — Pages — Mobile (same 8 pages, mobile breakpoint frames)
📄 07 — Pages — Spanish (4–5 key pages localized)
📄 08 — Accessibility Annotations (focus order, skip link, ARIA notes per frame)
📄 09 — Handoff to Developer (component → code mapping, exports)
```

**Recommended Figma plugins:**
- **Tokens Studio for Figma** — sync design tokens to a JSON file Phase 3 imports into Tailwind
- **Able** — real-time contrast checking on canvas
- **A11y - Color Contrast Checker** — secondary check
- **Stark** — focus order annotations, color-blind simulation
- **Wireframe** — quick layout exploration (not for final)
- **Iconify** — direct Lucide icon import

**Component naming convention:** `Atom/ButtonPrimary`, `Molecule/InputField`, `Pattern/HeroHome`, etc. Sentence case after the slash. Variants surfaced as Figma Variant properties (state, size, language).

**Auto Layout v3** required for every component. Constraints set so components scale predictably across breakpoints.

---

## 7. Accessibility Annotations Layer

Every Figma frame in the `08 — Accessibility Annotations` page carries overlay markers describing:

1. **Heading order** — visual H1 → H2 → H3, numbered in red overlay
2. **Focus order** — numbered sequence showing keyboard tab path
3. **Landmark regions** — boxes labeling `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`
4. **Color-only information audit** — flagging any element where color alone conveys meaning (e.g., red-only error states must be remediated)
5. **Image alt-text** — every image annotated with its proposed alt text
6. **Form labels** — every input annotated with its `<label>` association and `aria-describedby` IDs
7. **Decorative vs. meaningful** — every icon marked as `aria-hidden="true"` (decorative) or labeled (meaningful)

This layer is the literal handoff document to Phase 3. The developer should not have to guess any accessibility decision.

---

## 8. Voice & Microcopy Library

Pulled forward from Phase 1 §6 for Figma reference. Each Figma text layer references one of these tokens.

**Buttons / CTAs (EN | ES):**
- `cta.consultation` — "Schedule a consultation" | "Programe una consulta"
- `cta.tell-us` — "Tell us about your child's situation" | "Cuéntenos la situación de su hijo"
- `cta.find-out` — "Find out where you stand" | "Averigüe cuáles son sus opciones"
- `cta.rights` — "Read your rights in plain English" | "Conozca sus derechos en español"
- `cta.call` — "Call (510) 479-0003" | "Llame al (510) 479-0003"

**Status messages:**
- `status.response-time` — "We respond within 24 business hours." | "Respondemos dentro de 24 horas hábiles."
- `status.form-success` — "Thank you. We'll be in touch within 24 business hours." | "Gracias. Nos comunicaremos con usted dentro de 24 horas hábiles."
- `status.form-error` — "Something didn't go through. Please check the fields below." | "Algo no se envió. Por favor revise los campos a continuación."

**Disclaimers (legally required, every form / page footer):**
- `disclaimer.not-advice` — "The information on this site is not legal advice. No attorney-client relationship is created by visiting this site or submitting this form." | Spanish equivalent (professionally translated)

---

## 9. Phase 2 → Phase 3 Handoff Checklist

Before development begins:

### Design
- [ ] Tokens Studio JSON exported from Figma
- [ ] All 8 desktop pages signed off by client
- [ ] All 8 mobile pages signed off by client
- [ ] Spanish key pages reviewed by native Spanish-speaking legal reviewer
- [ ] Accessibility annotations layer complete

### Assets
- [ ] Nicole's professional headshot (square + horizontal crops, min 1600px)
- [ ] COPAA badge in SVG
- [ ] Logo SVG exported (full, stacked, mark, favicon variants)
- [ ] All decorative imagery sourced and ready

### Content
- [ ] Final approved copy for all 8 pages in EN
- [ ] Final approved copy for all 8 pages in ES (professionally translated)
- [ ] 5+ testimonials with signed consent forms
- [ ] 3+ anonymized case results
- [ ] 6+ resource PDFs (3 EN, 3 ES) — tagged for accessibility

### Tech
- [ ] Domain DNS access confirmed
- [ ] Form submission endpoint (email or CRM) chosen
- [ ] Analytics platform decided (recommend Plausible — privacy-respecting, lighter than GA)
- [ ] CMS decision — recommend headless approach with content in MDX (no CMS) for v1 simplicity, evaluate Sanity for v2 when LONHA wants to publish resources weekly

---

*End of Phase 2 Brand System Specification. Read alongside the Phase 1 Research Brief. Phase 3 build will reference both.*
