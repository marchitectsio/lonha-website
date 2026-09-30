import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import PracticeCard from "@/components/PracticeCard";
import CTABanner from "@/components/CTABanner";
import { PRACTICE_AREAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cómo ayudamos",
  description:
    "LONHA representa a padres en California en desacuerdos sobre el IEP, audiencias de proceso de impugnación, disciplina y expulsión escolar, y casos de discriminación bajo la Sección 504.",
  alternates: { canonical: "/es/como-ayudamos", languages: { en: "/how-we-help", es: "/es/como-ayudamos" } },
};

const PRACTICE_ES: Record<string, { title: string; summary: string }> = {
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
  "section-504": {
    title: "Sección 504 y discriminación",
    summary:
      "La Sección 504 de la Ley de Rehabilitación y el Título II de la ADA protegen a estudiantes cuyas discapacidades afectan una actividad principal de la vida. Estos reclamos van más allá de IDEA y alcanzan a estudiantes que no están cubiertos por un IEP.",
  },
};

export default function HowWeHelpPageEs() {
  return (
    <SiteFrame locale="es" otherLocaleHref="/how-we-help">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Áreas de práctica
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Cómo ayudamos a las familias en California.
          </h1>
          <div className="mt-6 max-w-prose space-y-5 text-lg text-[color:var(--text-primary)] leading-relaxed">
            <p>
              La Oficina Legal de Nicole Hodge Amey atiende cuatro tipos de casos. Cada uno se basa en una parte distinta de la ley federal de derechos por discapacidad. Cada uno tiene sus propios plazos, procesos y remedios.
            </p>
            <p>
              Si la situación de su hijo no encaja perfectamente en una de estas categorías, eso no significa que no podamos ayudar. Muchos casos involucran más de uno de estos marcos legales al mismo tiempo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {PRACTICE_AREAS.map((p) => {
            const es = PRACTICE_ES[p.slug] ?? { title: p.title, summary: p.summary };
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
      </section>

      <section className="bg-[color:var(--surface-raised)] border-y border-[color:var(--border-subtle)] py-16 md:py-20">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
              Pregunta común
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              ¿Cuál es la diferencia entre un defensor y un abogado?
            </h2>
          </div>
          <div className="prose-x space-y-5 text-[color:var(--text-primary)] text-lg leading-relaxed">
            <p>
              Muchas familias trabajan con defensores del IEP. Los defensores son profesionales experimentados que no son abogados. Asisten a reuniones, revisan registros y ayudan a las familias a navegar el distrito escolar. Son una parte legítima y a menudo valiosa de la educación especial.
            </p>
            <p>
              Cuando un desacuerdo se escala a una audiencia de proceso de impugnación, a una queja estatal de cumplimiento o a un litigio en tribunal federal, el trabajo debe ser realizado por un abogado con licencia para representarlo en esos procedimientos. Nicole Hodge Amey ha estado haciendo exactamente eso, en California, durante más de veinte años.
            </p>
            <p>
              Si ya trabaja con un defensor y no está seguro de si también necesita un abogado, esa pregunta en sí misma es una buena razón para programar una consulta.
            </p>
            <div className="pt-2">
              <Link href="/es/contacto" className="btn btn-primary">Programe una consulta</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿No está seguro de cuál de estas aplica a su situación?"
        body="Cuéntenos qué está pasando con el distrito escolar y le diremos qué marco legal corresponde."
        primaryCta={{ label: "Cuéntenos qué está pasando", href: "/es/contacto" }}
        secondaryCallLabel={`Llame al ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
