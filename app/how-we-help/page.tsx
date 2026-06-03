import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import PracticeCard from "@/components/PracticeCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we help",
  description:
    "LONHA represents California parents in IEP disputes, due-process hearings, school discipline and expulsion matters, and Section 504 disability-discrimination cases.",
  alternates: { canonical: "/how-we-help", languages: { en: "/how-we-help", es: "/es/como-ayudamos" } },
};

export default function HowWeHelpPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/como-ayudamos">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Practice areas
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            How we help families across California.
          </h1>
          <div className="mt-6 max-w-prose space-y-5 text-lg text-[color:var(--text-primary)] leading-relaxed">
            <p>
              The Law Offices of Nicole Hodge Amey handles four kinds of cases. Each is grounded in a different part of federal disability-rights law. Each comes with its own deadlines, process, and remedies.
            </p>
            <p>
              If your child's situation does not fit neatly into one of these, that does not mean we cannot help. Many cases involve more than one of these legal frameworks at the same time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((p) => (
            <PracticeCard
              key={p.slug}
              title={p.title}
              summary={p.summary}
              href={`/how-we-help/${p.slug}`}
              icon={p.icon}
            />
          ))}
        </div>
      </section>

      {/* Advocate vs. attorney callout — Phase 1 §7.3 */}
      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Common question
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              What is the difference between an advocate and an attorney?
            </h2>
          </div>
          <div className="prose-x space-y-5 text-[color:var(--text-primary)] text-lg leading-relaxed">
            <p>
              Many families work with IEP advocates — experienced non-attorney professionals who can attend meetings, review records, and help navigate the school district. Advocates are a legitimate and often valuable part of the special-education landscape.
            </p>
            <p>
              When a dispute escalates to a due-process hearing, a state compliance complaint, or federal-court litigation, the work has to be done by an attorney who is licensed to represent you in those proceedings. Nicole Hodge Amey has been doing exactly that, in California, for more than twenty years.
            </p>
            <p>
              If you already work with an advocate and are unsure whether you also need an attorney, that question is itself a good reason to schedule a consultation.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary">Schedule a consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not sure which of these applies to your situation?"
        body="Tell us what is happening at the school district, and we will tell you which legal framework fits."
        primaryCta={{ label: "Tell us what's happening", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
