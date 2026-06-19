import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import PracticeCard from "@/components/PracticeCard";
import ResourceCard from "@/components/ResourceCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, FEATURED_GUIDES, COVERAGE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Special Education Attorney · Oakland, California",
  description:
    "The Law Offices of Nicole Hodge Amey helps California families with IEP disputes, due process, school discipline, and special-education legal matters.",
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es" },
  },
};

export default function HomePage() {
  const featuredPractice = PRACTICE_AREAS.slice(0, 3);

  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <Hero
        eyebrow="Special Education Law · California"
        headline="We can help your child get the best education possible."
        subheadline="The Law Offices of Nicole Hodge Amey helps families focus the conversation on education: evaluations, IEPs, services, due process, and the support a student needs at school. The goal is to help you understand the next right step."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCta={{ label: `Call ${SITE.phone}`, href: `tel:${SITE.phoneRaw}` }}
      />

      <CredibilityStrip
        items={[
          { icon: "Award", label: "Special-education focus" },
          { icon: "Scale", label: "Practicing in California since 2001" },
          { icon: "BadgeCheck", label: "Education-first legal strategy" },
          { icon: "Languages", label: "Consultas en español" },
        ]}
      />

      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Our focus
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              The focus is education.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose">
            <p>
              Families usually come to us because something at school is not working: an evaluation was denied, an IEP does not match the student's needs, services are missing, discipline is interfering with learning, or the district is not following through.
            </p>
            <p>
              We keep the focus where it belongs: making sure the student receives the education, services, placement, and support the law requires. If your matter needs legal representation, we explain that path clearly. If the first step is advocacy, training, or consulting, we can help route you to the right place.
            </p>
          </div>
        </div>
      </section>

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
              Legal support for special-education problems.
            </h2>
            <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose">
              LONHA handles the legal side of special education: IEP disputes, due process, discipline matters, and disability-rights concerns connected to school. If your situation does not fit neatly into one category, contact us and we will help identify the right next step.
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
              See all legal services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Law firm and advocacy
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              LONHA and Amey Educational Advocates work in different lanes.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose">
            <p>
              The Law Offices of Nicole Hodge Amey handles legal representation. When a matter requires attorney involvement, that belongs with the law firm.
            </p>
            <p>
              Amey Educational Advocates focuses on advocacy, training, and consulting. If advocacy is the better fit, we can point you toward AEA so your family starts in the right place.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary">Ask where your situation fits</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1fr)_1.4fr] items-center">
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
              A California attorney focused on special education.
            </h2>
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              Nicole Hodge Amey has practiced special-education law in California since December 2001, the year she was admitted to the State Bar. Her work centers on helping families address IEP disputes, due-process matters, school discipline concerns, and education-related disability-rights issues. Consultations and full case representation are available in English and Spanish.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn btn-primary">
                Read more about Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Privacy first
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              The website is here to introduce the firm and help families make contact.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose">
            <p>
              Some legal matters become public record. Even then, the focus of this website is not to broadcast prior matters or turn family stories into marketing.
            </p>
            <p>
              The site is here to explain the kinds of education issues we handle and make it easy for families to reach the firm when they need help.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-secondary">Start with contact</Link>
            </div>
          </div>
        </div>
      </section>

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
              Basic information for parents, in English and Spanish.
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
        eyebrow="We can help"
        heading="Tell us what is happening at school."
        body="We respond within 24 business hours. The first step is helping you understand whether the matter belongs with the law firm, advocacy support, or another resource."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
