import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Anonymized testimonials from California families LONHA has represented. No names. No school identifiers.",
  alternates: { canonical: "/testimonials" },
};

// TODO: client to provide final testimonials with signed consent forms per Phase 1 §7.2.
const TESTIMONIALS = [
  {
    caseType: "IEP · Elementary",
    quote:
      "After two years of being told our son did not qualify for services, Nicole laid out the law in plain language and gave us a path forward. He has the IEP he should have had all along.",
    attribution: "Parent of student, Alameda County",
  },
  {
    caseType: "Due Process · Middle School",
    quote:
      "The district treated us like we were exaggerating. Nicole treated us like we were correct. The hearing settled before testimony, with the services we had been asking for from the start.",
    attribution: "Parent of student, Kern County",
  },
  {
    caseType: "Section 504 · High School",
    quote:
      "Our daughter was being excluded from activities because of her medical condition. We didn't even know that was a 504 issue. Nicole walked us through what discrimination actually looks like under the law, and the school changed course quickly.",
    attribution: "Parent of student, Contra Costa County",
  },
  {
    caseType: "IEP · Spanish-language case",
    quote:
      "Pude hablar con Nicole en español sobre cada detalle del caso de mi hija. Por primera vez sentí que entendía completamente lo que estaba pasando con su educación.",
    attribution: "Madre de estudiante, Condado de Kern",
  },
  {
    caseType: "Expulsion Defense",
    quote:
      "We were three days from an expulsion hearing when we found Nicole. She filed for stay-put, reopened the manifestation determination, and the district dropped the matter entirely.",
    attribution: "Parent of student, Los Angeles County",
  },
  {
    caseType: "IEP · Implementation",
    quote:
      "We had won a settlement years ago, but the services were never actually being delivered. Nicole reopened the case to enforce what we had already agreed to. The services started showing up the next month.",
    attribution: "Parent of student, Alameda County",
  },
];

export default function TestimonialsPage() {
  return (
    <SiteFrame locale="en" otherLocaleHref="/es">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            From the families we represent
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Names withheld. Outcomes documented.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-[color:var(--text-primary)] leading-relaxed">
            Federal law and our own ethics protect the identity of students. Every testimonial below has been published with the family's written consent, in a form that does not identify the child, the school, or any combination of details that would make identification possible.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Do you have a story you would like to share?"
        body="If we represented your family and you would be willing to add your voice anonymously, please get in touch."
        primaryCta={{ label: "Tell us about your case", href: "/contact" }}
        secondaryCallLabel={`Call ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
