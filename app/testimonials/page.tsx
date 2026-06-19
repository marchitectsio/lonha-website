import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy-First Representation",
  description:
    "The Law Offices of Nicole Hodge Amey keeps the focus on education, contact, and privacy instead of publishing client stories as marketing.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Privacy first
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Your family&apos;s story is not our advertisement.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-[color:var(--text-primary)] leading-relaxed">
            Families often find the firm through referrals, search, public attorney lists, and the reputation of the work. This site is here to introduce the firm, explain the education issues we handle, and make contact simple.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              What we do not publish
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              We do not use client matters as public marketing content.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose">
            <p>
              Some education matters become public record when they proceed through formal hearing channels. Even then, each matter belongs to the family involved.
            </p>
            <p>
              Our website does not need to broadcast prior client stories to show families where to start. The first step is simple: share the basic school issue, and we will help identify the right lane.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary">Contact the firm</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="We can help"
        heading="Start with the education issue."
        body="Tell us what is happening at school. We respond within 24 business hours and can help identify whether the matter belongs with the law firm, advocacy support, or another resource."
        primaryCta={{ label: "Contact the firm", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
