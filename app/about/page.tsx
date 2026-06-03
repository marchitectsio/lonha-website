import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";
import { BadgeCheck, Languages, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nicole Hodge Amey",
  description:
    "Nicole Hodge Amey is a California civil-rights attorney focused exclusively on special education. Admitted to the State Bar in 2001; member of COPAA; fully bilingual in English and Spanish.",
  alternates: { canonical: "/about", languages: { en: "/about", es: "/es/sobre-nicole" } },
};

export default function AboutPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/sobre-nicole">
      {/* Hero */}
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
          {/* TODO: Replace with Nicole's professional headshot when client provides it. */}
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
              A California civil-rights attorney whose practice has been limited to special education and disability-rights law since the year she was admitted to the bar.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
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
            {/* TODO: client to provide final bio */}
            <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)]">
              <p>
                Nicole Hodge Amey founded the Law Offices of Nicole Hodge Amey to do one thing well: represent parents of children with disabilities in their dealings with California public schools. Her practice has been limited to special education and disability-rights law since December 2001, the year she was admitted to the State Bar of California.
              </p>
              <p>
                Over more than two decades, she has handled hundreds of matters under the Individuals with Disabilities Education Act, Section 504 of the Rehabilitation Act, and Title II of the Americans with Disabilities Act. Her cases have included IEP disputes, due-process hearings, complaints to the California Department of Education and the U.S. Department of Education, expulsion and manifestation-determination hearings, and federal-court litigation.
              </p>
              <p>
                Nicole is fully bilingual in English and Spanish. Consultations, IEP-meeting attendance, and complete case representation can be conducted in Spanish, an accommodation that is often missing from California's special-education legal market and that matters enormously to families in the East Bay and Central Valley.
              </p>
              <p>
                The firm is a member of the Council of Parent Attorneys and Advocates (COPAA), the national membership organization for attorneys and advocates who represent students with disabilities. Membership in COPAA carries an explicit commitment to the rights of parents and students under federal disability law.
              </p>
            </div>

            <div className="mt-12 pl-6 border-l-4 border-[color:var(--brand-accent)] max-w-prose">
              <p
                className="font-serif italic text-[color:var(--brand-primary)]"
                style={{ fontSize: "1.375rem", lineHeight: 1.5 }}
              >
                The law is on your child's side. My job is to make sure the district remembers that.
              </p>
              <p className="mt-3 text-sm text-[color:var(--text-secondary)]">— Nicole Hodge Amey</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-cta">Schedule a consultation</Link>
              <Link href="/how-we-help" className="btn btn-secondary">See practice areas</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to talk?"
        body="If you have a specific question about your child's case, we are happy to hear it. The first call is a conversation, not a commitment."
        primaryCta={{ label: "Schedule a consultation", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
