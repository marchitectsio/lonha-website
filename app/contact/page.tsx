import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach the Law Offices of Nicole Hodge Amey. We respond to messages within 24 business hours. Consultations available in English and Spanish.",
  alternates: { canonical: "/contact", languages: { en: "/contact", es: "/es/contacto" } },
};

const FAQ = [
  {
    q: "Do I need to know the exact legal issue before contacting you?",
    a: "No. You can start by explaining what is happening at school. We can help identify whether the concern involves an IEP, due process, discipline, Section 504, advocacy support, or another next step.",
  },
  {
    q: "What does an initial consultation cost?",
    a: "We discuss fees during the first conversation. The initial consultation is a chance for both of us to determine whether the firm is the right fit. Under IDEA, parents who prevail in a due-process proceeding may recover attorney fees from the school district. This is a real provision of federal law, not a marketing promise.",
  },
  {
    q: "Do you take cases outside the Bay Area?",
    a: "Yes. We represent families in Oakland, the East Bay, Alameda County, Kern County, and the greater Los Angeles area. Adjacent counties are considered case by case.",
  },
  {
    q: "Habla español?",
    a: "Yes. Nicole Hodge Amey is fully bilingual in English and Spanish. Consultations, IEP-meeting attendance, and complete case representation are all available in Spanish.",
  },
  {
    q: "How do I prepare for our first call?",
    a: "If you have them, gather your child's most recent IEP, assessment reports, and a short summary of what has happened with the school district. You do not need everything ready before you make first contact.",
  },
];

export default function ContactPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es/contacto">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Contact
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Tell us what is happening at school.
          </h1>
          <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose leading-relaxed">
            You do not need to know the exact legal language before you reach out. Share the basic situation, and we will help identify whether the matter belongs with legal representation, advocacy support, or another resource.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="sr-only">Contact form</h2>
            <ContactForm locale="en" />
          </div>

          <aside aria-labelledby="contact-info" className="space-y-8">
            <div>
              <h2 id="contact-info" className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
                Direct contact
              </h2>
              <ul className="space-y-4 text-[0.9375rem]">
                <li className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-[color:var(--link)]">{SITE.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href={`mailto:${SITE.email}`} className="text-[color:var(--link)] break-all">{SITE.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Mail</p>
                    <address className="not-italic text-[color:var(--text-primary)]">
                      {SITE.address.line1}<br />
                      {SITE.address.cityStateZip}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Response time</p>
                    <p>Within 24 business hours.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card bg-[color:var(--surface)] border-l-4 border-l-[color:var(--brand-secondary)]">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--brand-secondary)] mb-2">
                Consultas en español
              </p>
              <p className="text-[0.9375rem] text-[color:var(--text-primary)] leading-relaxed">
                Nicole Hodge Amey atiende consultas y representa familias en español. Si prefiere comunicarse en español, indíquelo en el formulario.
              </p>
            </div>

            <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
              Submitting this form does not create an attorney-client relationship. Please do not include confidential information that could identify your child until we have spoken.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-[color:var(--surface-raised)] border-t border-[color:var(--border-subtle)] py-12 md:py-20">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
            Before you call
          </p>
          <h2
            className="font-serif text-[color:var(--brand-primary)] mb-8 max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
          >
            Common questions.
          </h2>
          <div className="space-y-2 max-w-3xl">
            {FAQ.map((item, i) => (
              <details
                key={i}
                className="group border-b border-[color:var(--border-subtle)] py-4"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4 py-2 font-serif text-[color:var(--brand-primary)] text-lg font-bold">
                  {item.q}
                  <span aria-hidden="true" className="text-[color:var(--brand-secondary)] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-3 text-[color:var(--text-primary)] leading-relaxed max-w-prose">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
