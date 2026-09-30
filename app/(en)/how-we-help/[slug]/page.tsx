import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_CONTENT, PRACTICE_SLUGS } from "@/lib/practice-content";
import { SITE } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";

export function generateStaticParams() {
  return PRACTICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const c = PRACTICE_CONTENT[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: { canonical: `/how-we-help/${slug}` },
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = PRACTICE_CONTENT[slug];
  if (!content) notFound();

  return (
    <SiteFrame locale="en" otherLocaleHref="/es/como-ayudamos">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-[color:var(--text-secondary)]">
              <li>
                <Link href="/how-we-help" className="text-[color:var(--link)]">
                  How we help
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{content.title}</li>
            </ol>
          </nav>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            {content.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-[color:var(--text-primary)]">
            {content.lead}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 border-t border-[color:var(--border-subtle)]">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Indicators
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              When to call us about this.
            </h2>
          </div>
          <ul className="space-y-4 max-w-prose">
            {content.whenToCall.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-[color:var(--text-primary)]">
                <Check
                  aria-hidden="true"
                  className="h-5 w-5 mt-1.5 flex-shrink-0 text-[color:var(--brand-secondary)]"
                  strokeWidth={2}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-12 md:py-20">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
            How it works
          </p>
          <h2
            className="font-serif text-[color:var(--brand-primary)] mb-10 max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
          >
            What the process looks like.
          </h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {content.process.map((step) => (
              <li key={step.heading} className="card">
                <h3
                  className="font-serif font-bold text-[color:var(--brand-primary)] mb-3"
                  style={{ fontSize: "1.25rem", lineHeight: 1.3 }}
                >
                  {step.heading}
                </h3>
                <p className="text-[color:var(--text-primary)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Privacy first
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Start with basic information.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose">
            <p>
              You do not need to know the legal language before you contact the firm. Tell us what is happening at school, and we can help identify whether the issue belongs with legal representation, advocacy support, or another resource.
            </p>
            <p>
              Please avoid sending private student details through the form. We can ask for documents and additional information after the first contact.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact the firm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] border-y border-[color:var(--border-subtle)] py-12 md:py-20">
        <div className="container-x">
          <h2
            className="font-serif text-[color:var(--brand-primary)] mb-8"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
          >
            Related reading.
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 max-w-3xl">
            {content.relatedResources.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="unstyled card card-linked flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[color:var(--brand-primary)]">{r.title}</span>
                  <ArrowRight aria-hidden="true" className="h-5 w-5 text-[color:var(--link)] flex-shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Think this matches your situation?"
        body="Tell us briefly what is happening. We respond within 24 business hours."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
