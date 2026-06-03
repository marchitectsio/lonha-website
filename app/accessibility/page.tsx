import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility statement",
  description:
    "The Law Offices of Nicole Hodge Amey is committed to WCAG 2.1 Level AA conformance. This statement describes our standards, testing, and feedback process.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Accessibility
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Accessibility at LONHA.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-[color:var(--text-primary)] leading-relaxed">
            A law firm that represents children with disabilities cannot present a website that excludes the population it serves. Web accessibility is not a feature we plan to add — it is the floor.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x prose-x space-y-10">
          <div>
            <h2 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Conformance status
            </h2>
            <p className="leading-relaxed">
              This site is designed and built to conform with{" "}
              <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </a>
              . Several elements — color contrast for body text, error identification on forms, link purpose — meet the higher AAA standard.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Testing methodology
            </h2>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>Manual keyboard-only navigation on every interactive component.</li>
              <li>Screen-reader testing with NVDA on Windows and VoiceOver on macOS and iOS.</li>
              <li>Automated checks with axe-core and Lighthouse on every page.</li>
              <li>Color-contrast verification of every text-and-background pairing in the design system, recorded in our brand specification.</li>
              <li>Browser-zoom testing up to 200% on all primary pages.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              What we do not do
            </h2>
            <p className="leading-relaxed">
              We do not use accessibility-overlay widgets such as UserWay, AudioEye, or accessiBe. These plug-ins do not remediate underlying code issues and have been condemned by national disability-rights organizations. We address accessibility in the HTML, CSS, and JavaScript of the site itself.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Known limitations
            </h2>
            <p className="leading-relaxed">
              Some downloadable PDF resources are still being remediated. Where a PDF is not yet tagged for screen-reader access, an equivalent HTML version of the content is provided on the site. If you encounter a document that is not accessible to you, please tell us and we will provide an alternative.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Feedback
            </h2>
            <p className="leading-relaxed">
              If you encounter an accessibility barrier on this site, please tell us. We commit to responding within five business days and to providing the requested information in an accessible format.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                Email:{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                Phone: <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
              </li>
              <li>
                Web: <Link href="/contact">contact form</Link>
              </li>
            </ul>
          </div>

          <p className="text-sm text-[color:var(--text-secondary)] pt-4 border-t border-[color:var(--border-subtle)]">
            This statement was last updated when the site launched. We review it whenever the site changes substantially.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
}
