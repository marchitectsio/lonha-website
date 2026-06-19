import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import PracticeCard from "@/components/PracticeCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we help",
  description:
    "LONHA helps California families with IEP disputes, due process, school discipline matters, and education-related disability-rights concerns.",
  alternates: { canonical: "/how-we-help", languages: { en: "/how-we-help", es: "/es/como-ayudamos" } },
};

export default function HowWeHelpPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/como-ayudamos">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Legal services
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            We can help families focus on the education issue.
          </h1>
          <div className="mt-6 max-w-prose space-y-5 text-lg text-[color:var(--text-primary)] leading-relaxed">
            <p>
              The Law Offices of Nicole Hodge Amey helps families when a school issue needs legal attention: an IEP dispute, due-process matter, discipline concern, Section 504 issue, or another education-related disability-rights question.
            </p>
            <p>
              The goal is to understand what is happening at school, identify the right lane, and help move the student toward the education and support they need.
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

      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              LONHA and AEA
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Legal representation and educational advocacy are connected, but not identical.
            </h2>
          </div>
          <div className="prose-x space-y-5 text-[color:var(--text-primary)] text-lg leading-relaxed">
            <p>
              LONHA is the law firm. If the matter requires attorney involvement, due process, or legal representation, it belongs with the Law Offices of Nicole Hodge Amey.
            </p>
            <p>
              Amey Educational Advocates focuses on advocacy, training, and consulting. If the issue is better suited for advocacy support, the site should route the family toward AEA once that website link is ready.
            </p>
            <p>
              If you are not sure which path fits, start with contact. We can help identify whether the matter belongs with LONHA, AEA, or another resource.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary">Ask where your situation fits</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="We can help"
        heading="Not sure which path applies?"
        body="Tell us what is happening at school, and we will help identify whether the matter belongs with the law firm, advocacy support, or another resource."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
