// Centralized site constants — single source of truth.

export const SITE = {
  name: "Law Offices of Nicole Hodge Amey",
  abbrev: "LONHA",
  phone: "(510) 479-0003",
  phoneRaw: "+15104790003",
  email: "nicole.amey@lonhaca.com",
  address: {
    line1: "P.O. Box 5100",
    cityStateZip: "Oakland, CA 94605",
  },
  bar: {
    state: "CA",
    number: "215157",
    admittedYear: 2001,
    admittedFull: "December 2001",
  },
  copyright: `© ${new Date().getFullYear()} Law Offices of Nicole Hodge Amey. All rights reserved.`,
};

export type Locale = "en" | "es";

// Path pairing for the language toggle. Each EN path maps to its ES counterpart (or null
// if no ES mirror yet — toggle falls back to the ES homepage).
export const PATH_PAIRS: Record<string, string> = {
  "/": "/es",
  "/about": "/es/sobre-nicole",
  "/how-we-help": "/es/como-ayudamos",
  "/contact": "/es/contacto",
};

export const REVERSE_PATH_PAIRS: Record<string, string> = Object.fromEntries(
  Object.entries(PATH_PAIRS).map(([en, es]) => [es, en])
);

// Practice areas — order and slugs are stable.
export const PRACTICE_AREAS = [
  {
    slug: "iep-disputes",
    title: "IEP Disputes & Advocacy",
    summary:
      "When the school district denies an evaluation, refuses services, or proposes a plan that does not meet your child's needs, we move the conversation onto a legal footing.",
    icon: "FileSearch",
  },
  {
    slug: "due-process",
    title: "Due Process Hearings",
    summary:
      "Due process is a formal legal proceeding with deadlines, evidence, and witnesses. We prepare your case, present it, and pursue compensatory remedies when the district has failed your child.",
    icon: "Scale",
  },
  {
    slug: "discipline-expulsion",
    title: "Discipline & Expulsion",
    summary:
      "Suspension, expulsion, and seclusion of students with disabilities are governed by specific federal protections. When a school disciplines a child for conduct related to their disability, the legal posture changes immediately.",
    icon: "ShieldAlert",
  },
  {
    slug: "section-504",
    title: "Section 504 & Discrimination",
    summary:
      "Section 504 of the Rehabilitation Act and Title II of the ADA protect students whose disabilities affect a major life activity. These claims extend beyond IDEA and reach students not covered by an IEP.",
    icon: "Gavel",
  },
] as const;

export type PracticeArea = (typeof PRACTICE_AREAS)[number];

// Featured guides for the homepage resource preview.
export const FEATURED_GUIDES = [
  {
    slug: "iep-basics",
    title: "What Belongs in Your Child's IEP",
    summary:
      "A plain-language walkthrough of the components every IEP should contain — and the questions to ask when something is missing.",
    type: "Guide",
    language: "English",
  },
  {
    slug: "due-process-timeline",
    title: "The Due Process Timeline, From Filing to Hearing",
    summary:
      "What happens after a complaint is filed, the legal deadlines on both sides, and what to expect at a California due process hearing.",
    type: "Guide",
    language: "English",
  },
  {
    slug: "derechos-iep",
    title: "Sus Derechos en el Proceso del IEP",
    summary:
      "Una guía en español que explica los derechos de los padres durante el proceso del IEP en California.",
    type: "Guía",
    language: "Español",
  },
] as const;

// Geographic coverage — one short list, used in multiple places.
export const COVERAGE_AREAS = [
  "Oakland",
  "Berkeley",
  "Alameda County",
  "Contra Costa County",
  "the East Bay",
  "Kern County",
  "Bakersfield",
  "Los Angeles County",
];
