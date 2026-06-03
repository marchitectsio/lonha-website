import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { FileText, ArrowRight, Languages } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Know your rights",
  description:
    "Plain-language guides for California parents on the IEP process, due process, school discipline, and Section 504 — in English and Spanish.",
  alternates: { canonical: "/know-your-rights" },
};

// TODO: client to confirm final resource list. Stub items below.
const RESOURCES = [
  {
    id: "iep-basics",
    category: "IEP Basics",
    language: "English",
    title: "What belongs in your child's IEP",
    summary:
      "A walkthrough of the legally required components of an IEP — present levels, goals, services, placement — and the questions to ask when one is missing.",
  },
  {
    id: "due-process-timeline",
    category: "Due Process",
    language: "English",
    title: "The due-process timeline, from filing to hearing",
    summary:
      "What happens after a complaint is filed, the deadlines on both sides, and what to expect at a California due-process hearing.",
  },
  {
    id: "discipline",
    category: "Discipline",
    language: "English",
    title: "Suspension, expulsion, and manifestation determination",
    summary:
      "The specific federal protections that apply when a school disciplines a student with a disability — and the timelines that govern each step.",
  },
  {
    id: "derechos-iep",
    category: "Conceptos básicos del IEP",
    language: "Español",
    title: "Sus derechos en el proceso del IEP",
    summary:
      "Una explicación en español de los derechos de los padres durante el proceso del IEP en California, incluyendo el derecho a recibir documentos en su idioma.",
  },
  {
    id: "504-vs-iep",
    category: "Section 504",
    language: "English",
    title: "Is your child a 504 or an IEP student?",
    summary:
      "The legal distinction between Section 504 plans and IEPs, who qualifies for which, and why this matters for your child's accommodations.",
  },
  {
    id: "preparing-iep-meeting",
    category: "IEP Basics",
    language: "English",
    title: "Preparing for an IEP meeting",
    summary:
      "A pre-meeting checklist: what to bring, what to ask, and what you do not have to sign before you leave.",
  },
];

const CATEGORIES = ["All", "IEP Basics", "Due Process", "Discipline", "Section 504", "Español"];

export default function KnowYourRightsPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Resources for parents
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Know your rights.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-[color:var(--text-primary)] leading-relaxed">
            Reading the law is not a substitute for representation, but it can change the conversation. These guides explain what federal law actually says about your child's rights, in language designed to be read by a parent, not a lawyer.
          </p>
        </div>
      </section>

      {/* Filter chips — non-interactive in v1, present for structure */}
      <section className="border-y border-[color:var(--border-subtle)] bg-[color:var(--surface-raised)]">
        <div className="container-x py-5 overflow-x-auto">
          <ul aria-label="Filter resources by topic" className="flex gap-2 flex-nowrap whitespace-nowrap">
            {CATEGORIES.map((cat, i) => (
              <li key={cat}>
                <button
                  type="button"
                  className={`inline-flex items-center min-h-[44px] px-4 rounded-full border text-sm font-semibold transition-colors ${
                    i === 0
                      ? "bg-[color:var(--brand-primary)] text-white border-[color:var(--brand-primary)]"
                      : "bg-transparent text-[color:var(--text-primary)] border-[color:var(--border-subtle)] hover:border-[color:var(--brand-primary)]"
                  }`}
                  aria-pressed={i === 0}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <article key={r.id} id={r.id} className="card card-linked relative flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--brand-secondary)]">
                  {r.language === "Español" ? (
                    <Languages aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                  )}
                  <span>{r.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{r.language}</span>
                </div>
                <h2
                  className="font-serif text-[color:var(--brand-primary)] mb-3"
                  style={{ fontSize: "1.375rem", lineHeight: 1.3, fontWeight: 700 }}
                >
                  <Link href={`#${r.id}`} className="unstyled before:absolute before:inset-0">
                    {r.title}
                  </Link>
                </h2>
                <p className="text-[color:var(--text-primary)] mb-5 flex-1">{r.summary}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-[color:var(--link)] mt-auto">
                  Read the guide
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </article>
            ))}
          </div>
          {/* TODO: client to provide downloadable PDFs (tagged for accessibility) per Phase 2 §3.3 */}
          <p className="mt-12 max-w-prose text-sm text-[color:var(--text-secondary)]">
            Downloadable versions of these guides are in preparation. Each will be published as a tagged PDF that screen-reader software can read aloud.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Need help with your specific situation?"
        body="Reading is a start. When you are ready to talk to an attorney, we are here."
        primaryCta={{ label: "Schedule a consultation", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
