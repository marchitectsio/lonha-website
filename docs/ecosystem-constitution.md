# Ecosystem Constitution

Canonical, cross-brand architectural reference for the Marchitects ecosystem.
Not a marketing brief for any single product — this is the standing
description of how the entities relate and what role each one plays.
Read this alongside (not instead of) `.agents/product-marketing.md`, which
covers LONHA specifically as the product this repository builds.

**Document version:** v1
**Last updated:** 2026-07-26

## Ecosystem Map

```
Marchitects
│
├── Trust Architecture
├── Strategic Language
├── Institutional Positioning
│
└──────────────┐
               │
               ▼
Social Following Studios
│
├── ESP
├── CRM
├── Email Automation
├── Digital Twins
├── Websites
├── Customer Funnels
├── AI Video
├── Analytics
│
└──────────────┐
               │
               ▼
Owned Audience
│
▼
Appointments
│
▼
Revenue
│
▼
Institutional Record
│
▼
LINEA Archive
```

## Entities and Roles

| Entity | Role |
|---|---|
| **Marchitects** | Designs the trust architecture and institutional positioning. Establishes trust and authority — the layer that makes everything downstream credible. |
| **Social Following Studios (SFS)** | Operates the commercial communication and transaction infrastructure. Operationalizes attention and revenue — the distribution layer that owns the path between visibility and transaction. |
| **LINEA** | Preserves cultural knowledge, records, and institutional memory. The preservation layer, not a marketing brand — where the record of what happened lives after the transaction. |
| **AAFC** | Develops the next generation of operators who execute inside the system. |
| **Front Desk Intelligence** | Sells directly to HUD property management directors under the Marchitects name. Stays outside the SFS product line — a distinct go-to-market, not part of the SFS distribution layer. |

## The Five Architectural Shifts

These are standing decisions, not observations about a single product — they
should inform how any future build in this ecosystem is scoped.

1. **SFS is an ESP, not just a marketing studio.** Email infrastructure is a
   core asset the ecosystem owns and operates, not a tactic layered on top
   of campaigns.
2. **The transaction engine is explicit.** The model is capture → identify →
   nurture → convert, not "generate leads." Every system in the ecosystem
   should be describable in those terms.
3. **The digital twin is a production channel, not a novelty.** It is one
   content-distribution channel within the larger system, on par with
   websites, email, and video — not a standalone gimmick.
4. **Marchitects and SFS have distinct roles.** Marchitects establishes
   trust and authority. SFS operationalizes attention and revenue. A build
   that blends the two (e.g. SFS messaging appearing as if it were
   Marchitects' own positioning, or vice versa) is a category error.
5. **LINEA is the preservation layer, not another marketing brand.** It
   holds institutional memory and record — it should not be treated as a
   fourth marketing product competing for the same attention SFS captures.

## The Flow

Attention → Identity → Email → Relationship → Conversion → Record →
LINEA Archive

Social Following Studios owns the middle of this flow (Identity through
Record). Marchitects makes the attention worth converting in the first
place by establishing trust before SFS ever touches the prospect. LINEA is
where the record ultimately rests once the transaction is complete.

## How to Use This Document

- **For any repo/product that is itself part of the ecosystem** (an SFS
  product, a Marchitects-branded property, LINEA, AAFC): read this file
  first for how your product's role fits the whole, then read that
  product's own `.agents/product-marketing.md` (or equivalent) for its
  specific positioning.
- **For a client site built using this infrastructure** (e.g. LONHA): this
  document is background only. LONHA is a customer of SFS's infrastructure
  via Marchitects — see `docs/social-following-studios-context.md` for what
  that vendor relationship can offer. LONHA's own positioning stays in
  `.agents/product-marketing.md` and should never be rewritten to describe
  SFS, Marchitects, or the ecosystem itself.

## Changelog
*Newest first. One line per revision: what changed and why.*
- v1 (2026-07-26) — Initial constitution, capturing the ecosystem map and
  the five architectural shifts (ESP as core asset, explicit transaction
  engine, digital twin as channel not novelty, Marchitects/SFS role split,
  LINEA as preservation layer).
