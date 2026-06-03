import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import PracticeCard from "@/components/PracticeCard";
import TestimonialCard from "@/components/TestimonialCard";
import ResourceCard from "@/components/ResourceCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, FEATURED_GUIDES, COVERAGE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Education Civil Rights Attorney · Oakland, California",
  description:
    "Nicole Hodge Amey represents parents of children with disabilities in IEP disputes, due process hearings, discipline matters, and Section 504 cases across California.",
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
};

export default function HomePage() {
  // Show three primary practice areas on the homepage; Section 504 lives on the hub.
  const featuredPractice = PRACTICE_AREAS.slice(0, 3);

  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <Hero
        eyebrow="Special Education Civil Rights — Since 2001"
        headline="Your child has the right to an education designed for them. We make sure they get it."
        subheadline="The Law Offices of Nicole Hodge Amey represents parents of children with disabilities in IEP disputes, due process hearings, and disability discrimination cases. We have been doing this, and only this, in California for over twenty years."
        primaryCta={{ label: "Schedule a consultation", href: "/contact" }}
        secondaryCta={{ label: "Read your rights", href: "/know-your-rights" }}
      />

      <CredibilityStrip
        items={[
          { icon: "Award", label: "COPAA member firm" },
          { icon: "Scale", label: "Practicing in California since 2001" },
          { icon: "BadgeCheck", label: "Hundreds of special-ed cases" },
          { icon: "Languages", label: "Consultas en español" },
        ]}
      />

      {/* Practice Areas */}
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              How we help
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Three kinds of cases we take, every week.
            </h2>
            <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose">
              These are the situations parents call us about most often. If yours does not appear here, that does not mean we cannot help — it means it is worth a phone call.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPractice.map((p) => (
              <PracticeCard
                key={p.slug}
                title={p.title}
                summary={p.summary}
                href={`/how-we-help/${p.slug}`}
                icon={p.icon}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/how-we-help" className="btn btn-secondary">
              See all practice areas
            </Link>
          </div>
        </div>
      </section>

      {/* About Nicole block */}
      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1fr)_1.4fr] items-center">
          {/* TODO: Replace with Nicole's professional headshot when client provides it. */}
          <div
            className="portrait-placeholder w-full max-w-sm mx-auto md:mx-0"
            aria-label="Portrait of Nicole Hodge Amey, placeholder pending final photography"
            style={{ fontSize: "clamp(5rem, 14vw, 9rem)" }}
          >
            N
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              About Nicole
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              A California civil-rights attorney focused on one thing.
            </h2>
            {/* TODO: client to provide final bio */}
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              Nicole Hodge Amey has practiced special-education civil-rights law in California since December 2001, the year she was admitted to the State Bar. Over the years she has represented hundreds of families in IEP disputes, due-process proceedings, discipline matters, and disability-discrimination cases. Consultations and full case representation are available in English and Spanish, so families across the East Bay and the Central Valley can work with her in the language they speak at home.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-primary">
                Read more about Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-section-desktop">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              From the families we represent
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Names withheld. Outcomes documented.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* TODO: client to provide final testimonials with signed consent forms (Phase 1 §7.2) */}
            <TestimonialCard
              caseType="IEP — Elementary"
              quote="After two years of being told our son did not qualify for services, Nicole laid out the law in plain language and gave us a path forward. He has the IEP he should have had all along."
              attribution="Parent of student, Alameda County"
            />
            <TestimonialCard
              caseType="Due Process — Middle School"
              quote="The district treated us like we were exaggerating. Nicole treated us like we were correct. The hearing settled before testimony, with the services we had been asking for from the start."
              attribution="Parent of student, Kern County"
            />
          </div>
          <div className="mt-10">
            <Link href="/testimonials" className="btn btn-secondary">
              Read more testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Geographic coverage */}
      <section className="bg-[color:var(--surface)] border-y border-[color:var(--border-subtle)] py-14 md:py-20">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Where we work
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Northern California, Kern County, and Los Angeles.
            </h2>
          </div>
          <div>
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              We represent families across Oakland, the East Bay, Alameda County, Kern County, and the greater Los Angeles area. Cases involving California school districts in adjacent counties are taken on a case-by-case basis.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-[color:var(--text-secondary)]">
              {COVERAGE_AREAS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Resource preview */}
      <section className="py-16 md:py-section-desktop">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              Know your rights
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Plain-language guides for parents, in English and Spanish.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_GUIDES.map((g) => (
              <ResourceCard
                key={g.slug}
                title={g.title}
                summary={g.summary}
                href={`/know-your-rights#${g.slug}`}
                type={g.type}
                language={g.language}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Talk with us"
        heading="Tell us about your child's situation."
        body="We respond within 24 business hours. There is no cost to ask whether we are the right fit for your case."
        primaryCta={{ label: "Schedule a consultation", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
