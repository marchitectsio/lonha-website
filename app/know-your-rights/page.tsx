import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { ArrowUpRight, Landmark } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Know your rights", description: "Official California and federal special-education resources for parents and families.", alternates: { canonical: "/know-your-rights", languages: { en: "/know-your-rights", es: "/es/recursos" } } };

const RESOURCES = [
  { title: "Parents' rights in special education", source: "California Department of Education", summary: "A state overview of parental rights, notice, consent, records, evaluation, and dispute-resolution options.", href: "https://www.cde.ca.gov/sp/se/pssummary.asp" },
  { title: "Individualized Education Program resources", source: "California Department of Education", summary: "Official information about IEP development, implementation, team participation, and related California resources.", href: "https://www.cde.ca.gov/sp/se/iepresources.asp" },
  { title: "Summary of educational rights", source: "California Office of Administrative Hearings", summary: "A practical overview of special-education rights and the role of due process in California.", href: "https://www.dgs.ca.gov/OAH/Case-Types/Special-Education/Self-Help/Summary-of-Educational-Rights" },
  { title: "Due-process hearings", source: "California Office of Administrative Hearings", summary: "Official forms and guidance for mediation and special-education due-process proceedings.", href: "https://www.dgs.ca.gov/OAH/Case-Types/Special-Education/Self-Help/Due-Process-Hearings" },
  { title: "Special-education complaint process", source: "California Department of Education", summary: "How state complaints are filed, investigated, and resolved, including timelines and available forms.", href: "https://www.cde.ca.gov/sp/se/qa/cmplntproc.asp" },
  { title: "IDEA information for parents and families", source: "U.S. Department of Education", summary: "Federal resources about the Individuals with Disabilities Education Act and its protections.", href: "https://sites.ed.gov/idea/parents-families/" },
] as const;

export default function KnowYourRightsPage() {
  return <SiteFrame locale="en" otherLocaleHref="/es/recursos">
    <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop"><div className="container-x"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">Resources for parents</p><h1 className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl" style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}>Know your rights.</h1><p className="mt-6 max-w-prose text-lg leading-relaxed">Start with information published by the agencies that administer California and federal special-education law. These links open the official source.</p></div></section>
    <section className="py-12 md:py-20"><div className="container-x"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{RESOURCES.map((r) => <article key={r.href} className="card relative flex h-full flex-col"><div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--brand-secondary)]"><Landmark aria-hidden="true" className="h-4 w-4" />Official resource</div><h2 className="font-serif text-xl font-bold text-[color:var(--brand-primary)]">{r.title}</h2><p className="mt-2 text-sm font-semibold text-[color:var(--text-secondary)]">{r.source}</p><p className="my-4 flex-1 leading-relaxed">{r.summary}</p><a href={r.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold">Open official resource <ArrowUpRight aria-hidden="true" className="h-4 w-4" /><span className="sr-only"> (opens in a new tab)</span></a></article>)}</div><p className="mt-10 max-w-prose text-sm text-[color:var(--text-secondary)]">These resources provide general information, not legal advice. Agency pages and legal requirements may change; check the official page for the current version.</p></div></section>
    <CTABanner heading="Need help with your specific situation?" body="Official information is a useful start. Contact the firm to discuss the facts and possible next steps." primaryCta={{ label: "Contact the firm", href: "/contact" }} secondaryCallLabel={`Call ${SITE.phone}`} />
  </SiteFrame>;
}
