import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy & Disclaimers",
  description: "Privacy, confidentiality, and website disclaimers for the Law Offices of Nicole Hodge Amey.",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", es: "/es/privacidad" } },
};

export default function PrivacyPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/privacidad">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop"><div className="container-x"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">Privacy first</p><h1 className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl" style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}>Your family&apos;s story is not our advertisement.</h1><p className="mt-6 max-w-prose text-lg leading-relaxed">This website introduces the firm, explains the education issues we handle, and makes contact simple. We do not publish client stories as marketing content.</p></div></section>
      <section className="py-12 md:py-20"><div className="container-x max-w-4xl space-y-10">
        <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">Contact-form privacy</h2><p className="text-lg leading-relaxed">Information submitted through the contact form is used to respond to your inquiry and evaluate whether the firm can assist. Do not include confidential details, student records, or information that identifies your child before speaking with the firm.</p></div>
        <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">No attorney-client relationship</h2><p className="text-lg leading-relaxed">Visiting this website, sending a message, or receiving an initial response does not create an attorney-client relationship. Representation begins only after the firm confirms it in a written agreement.</p></div>
        <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">General information only</h2><p className="text-lg leading-relaxed">The content on this website is general information, not legal advice. Laws and deadlines depend on the facts of each matter and may change. External resources are provided for convenience; their publishers control their content.</p></div>
        <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">Questions</h2><p className="text-lg leading-relaxed">Questions about this notice may be sent to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or raised by calling <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>.</p><p className="mt-3 text-sm text-[color:var(--text-secondary)]">Last updated August 11, 2026.</p></div>
        <Link href="/contact" className="btn btn-primary">Contact the firm</Link>
      </div></section>
      <CTABanner heading="Start with the education issue." body="Tell us what is happening at school without including confidential student details." primaryCta={{ label: "Contact the firm", href: "/contact" }} secondaryCallLabel={`Call ${SITE.phone}`} />
    </SiteFrame>
  );
}
