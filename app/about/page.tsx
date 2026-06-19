import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";
import { BadgeCheck, Languages, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nicole Hodge Amey",
  description:
    "Nicole Hodge Amey is a California special-education attorney helping families with IEP disputes, due process, discipline matters, and education-related disability-rights concerns.",
  alternates: { canonical: "/about", languages: { en: "/about", es: "/es/sobre-nicole" } },
};

export default function AboutPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/sobre-nicole">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
          <div
            className="portrait-placeholder w-full max-w-md"
            aria-label="Portrait of Nicole Hodge Amey, placeholder pending final photography"
            style={{ fontSize: "clamp(6rem, 16vw, 10rem)" }}
          >
            N
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              About
            </p>
            <h1
              className="font-serif font-bold text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
            >
              Nicole Hodge Amey, Esq.
            </h1>
            <p
              className="mt-5 text-[color:var(--text-primary)] max-w-prose"
              style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}
            >
              A California special-education attorney focused on helping families understand their rights and pursue the education, services, and support their children need at school.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside aria-labelledby="creds-heading">
            <h2 id="creds-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-5">
              Credentials
            </h2>
            <dl className="space-y-5 text-[0.9375rem]">
              <div className="flex items-start gap-3">
                <Scale aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Bar admission</dt>
                  <dd>California State Bar #{SITE.bar.number}<br />Admitted {SITE.bar.admittedFull}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Membership</dt>
                  <dd>Council of Parent Attorneys and Advocates (COPAA)</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Languages</dt>
                  <dd>English, Español</dd>
                </div>
              </div>
            </dl>
          </aside>

          <div className="prose-x">
            <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)]">
              <p>
                Nicole Hodge Amey founded the Law Offices of Nicole Hodge Amey to help parents of children with disabilities navigate California public schools when the education process breaks down. The firm focuses on special-education legal issues, including IEP disputes, due-process matters, school discipline concerns, and education-related disability-rights questions.
              </p>
              <p>
                The work is not centered on promising large settlements. The focus is educational: helping families understand what their child needs, what the law requires, and what next step may move the school district toward an appropriate plan.
              </p>
              <p>
                Nicole is fully bilingual in English and Spanish. Consultations, IEP-meeting attendance, and complete case representation can be conducted in Spanish, which allows more families to understand the process in the language they use at home.
              </p>
              <p>
                The firm is a member of the Council of Parent Attorneys and Advocates (COPAA), the national membership organization for attorneys and advocates who represent students with disabilities.
              </p>
            </div>

            <div className="mt-12 pl-6 border-l-4 border-[color:var(--brand-accent)] max-w-prose">
              <p
                className="font-serif italic text-[color:var(--brand-primary)]"
                style={{ fontSize: "1.375rem", lineHeight: 1.5 }}
              >
                We can help your family focus on what your child needs to receive the best education possible.
              </p>
              <p className="mt-3 text-sm text-[color:var(--text-secondary)]">Law Offices of Nicole Hodge Amey</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-cta">Contact the firm</Link>
              <Link href="/how-we-help" className="btn btn-secondary">See legal services</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="We can help"
        heading="Ready to talk?"
        body="Tell us what is happening at school. The first call is a conversation about whether the matter belongs with the law firm, advocacy support, or another resource."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
