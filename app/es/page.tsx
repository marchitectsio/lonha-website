import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import PracticeCard from "@/components/PracticeCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, COVERAGE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Abogada de derechos civiles en educación especial · Oakland, California",
  description:
    "Nicole Hodge Amey representa a padres de hijos con discapacidades en desacuerdos sobre el IEP, audiencias de proceso de impugnación, casos de disciplina y Sección 504 en California.",
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es" },
  },
};

// Spanish titles/summaries — translated counterparts for the homepage.
const PRACTICE_AREAS_ES: Record<string, { title: string; summary: string }> = {
  "iep-disputes": {
    title: "Desacuerdos sobre el IEP",
    summary:
      "Cuando el distrito niega una evaluación, rechaza servicios o propone un plan que no satisface las necesidades de su hijo, llevamos la conversación a un plano legal.",
  },
  "due-process": {
    title: "Audiencias de proceso de impugnación",
    summary:
      "El proceso de impugnación es un procedimiento legal formal con plazos, evidencia y testigos. Preparamos su caso, lo presentamos y buscamos compensación cuando el distrito ha fallado a su hijo.",
  },
  "discipline-expulsion": {
    title: "Disciplina y expulsión",
    summary:
      "La suspensión, la expulsión y la reclusión de estudiantes con discapacidades están regidas por protecciones federales específicas. Cuando una escuela disciplina a un niño por conducta relacionada con su discapacidad, la postura legal cambia de inmediato.",
  },
};

export default function HomePageEs() {
  const featured = PRACTICE_AREAS.slice(0, 3);

  return (
    <SiteFrame locale="es" otherLocaleHref="/">
      <Hero
        eyebrow="Derechos civiles en educación especial — Desde 2001"
        headline="Su hijo tiene derecho a una educación diseñada para él. Nosotros nos aseguramos de que la reciba."
        subheadline="La Oficina Legal de Nicole Hodge Amey representa a padres de niños con discapacidades en desacuerdos sobre el IEP, audiencias de proceso de impugnación y casos de discriminación por discapacidad. Llevamos más de veinte años haciendo esto, y solo esto, en California."
        primaryCta={{ label: "Programe una consulta", href: "/es/contacto" }}
        secondaryCta={{ label: "Conozca sus derechos", href: "/know-your-rights" }}
      />

      <CredibilityStrip
        items={[
          { icon: "Award", label: "Bufete miembro de COPAA" },
          { icon: "Scale", label: "Ejerciendo en California desde 2001" },
          { icon: "BadgeCheck", label: "Cientos de casos de educación especial" },
          { icon: "Languages", label: "Consultas en español" },
        ]}
      />

      {/* Practice Areas */}
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              Cómo ayudamos
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Tres tipos de casos que tomamos cada semana.
            </h2>
            <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose">
              Estas son las situaciones por las que los padres nos llaman con mayor frecuencia. Si la suya no aparece aquí, no significa que no podamos ayudar — significa que vale la pena una llamada.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => {
              const es = PRACTICE_AREAS_ES[p.slug] ?? { title: p.title, summary: p.summary };
              return (
                <PracticeCard
                  key={p.slug}
                  title={es.title}
                  summary={es.summary}
                  href={`/how-we-help/${p.slug}`}
                  icon={p.icon}
                  learnMoreLabel="Más información"
                />
              );
            })}
          </div>
          <div className="mt-10">
            <Link href="/es/como-ayudamos" className="btn btn-secondary">
              Ver todas las áreas de práctica
            </Link>
          </div>
        </div>
      </section>

      {/* About Nicole block */}
      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:gap-16 md:grid-cols-[minmax(0,1fr)_1.4fr] items-center">
          {/* TODO: Replace with Nicole's professional headshot when client provides it. */}
          <div
            className="portrait-placeholder w-full max-w-sm mx-auto md:mx-0"
            aria-label="Retrato de Nicole Hodge Amey, marcador de posición pendiente de fotografía final"
            style={{ fontSize: "clamp(5rem, 14vw, 9rem)" }}
          >
            N
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              Sobre Nicole
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Una abogada de derechos civiles enfocada en una sola cosa.
            </h2>
            {/* TODO: client to provide final bio */}
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              Nicole Hodge Amey ha ejercido la abogacía en derechos civiles de educación especial en California desde diciembre de 2001, el año en que fue admitida al Colegio Estatal de Abogados. A lo largo de los años ha representado a cientos de familias en desacuerdos sobre el IEP, procedimientos de proceso de impugnación, asuntos disciplinarios y casos de discriminación por discapacidad. Las consultas y la representación completa están disponibles en inglés y en español, de modo que las familias del Área de la Bahía y del Valle Central puedan trabajar con ella en el idioma que hablan en casa.
            </p>
            <div className="mt-8">
              <Link href="/es/sobre-nicole" className="btn btn-primary">
                Lea más sobre Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-section-desktop">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              De las familias que representamos
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.441rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Nombres reservados. Resultados documentados.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* TODO: client to provide final testimonials with signed consent forms */}
            <TestimonialCard
              caseType="IEP — Primaria"
              quote="Pude hablar con Nicole en español sobre cada detalle del caso de mi hija. Por primera vez sentí que entendía completamente lo que estaba pasando con su educación."
              attribution="Madre de estudiante, Condado de Kern"
            />
            <TestimonialCard
              caseType="Proceso de impugnación"
              quote="El distrito nos trataba como si estuviéramos exagerando. Nicole nos trató como si tuviéramos razón. La audiencia se resolvió antes del testimonio, con los servicios que habíamos pedido desde el principio."
              attribution="Padre de estudiante, Condado de Alameda"
            />
          </div>
        </div>
      </section>

      {/* Geographic coverage */}
      <section className="bg-[color:var(--surface)] border-y border-[color:var(--border-subtle)] py-14 md:py-20">
        <div className="container-x grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Dónde trabajamos
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Norte de California, Condado de Kern y Los Ángeles.
            </h2>
          </div>
          <div>
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              Representamos a familias en Oakland, el Área de la Bahía Este, el Condado de Alameda, el Condado de Kern y el área metropolitana de Los Ángeles. Los casos que involucran distritos escolares en condados adyacentes se aceptan caso por caso.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-[color:var(--text-secondary)]">
              {COVERAGE_AREAS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Hablemos"
        heading="Cuéntenos la situación de su hijo."
        body="Respondemos dentro de 24 horas hábiles. No hay costo por preguntar si somos el bufete adecuado para su caso."
        primaryCta={{ label: "Programe una consulta", href: "/es/contacto" }}
        secondaryCallLabel={`Llame al ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
