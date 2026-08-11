import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import PracticeCard from "@/components/PracticeCard";
import CTABanner from "@/components/CTABanner";
import AttorneyProfileCard from "@/components/AttorneyProfileCard";
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
        eyebrow="Ley de educación especial · California"
        headline="Podemos ayudar a que su hijo reciba la mejor educación posible."
        subheadline="La Oficina Legal de Nicole Hodge Amey ayuda a las familias con evaluaciones, IEP, servicios, proceso debido y otros apoyos escolares. El primer paso es entender qué camino corresponde a su situación."
        primaryCta={{ label: "Contacte al bufete", href: "/es/contacto" }}
        secondaryCta={{ label: "Conozca sus derechos", href: "/es/recursos" }}
      />

      <CredibilityStrip
        items={[
          { icon: "Award", label: "Enfoque en educación especial" },
          { icon: "Scale", label: "Ejerciendo en California desde 2001" },
          { icon: "BadgeCheck", label: "Estrategia centrada en la educación" },
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
              Apoyo legal para problemas de educación especial.
            </h2>
            <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose">
              Estas son las situaciones por las que los padres nos llaman con mayor frecuencia. Si la suya no aparece aquí, llámenos. Su situación aún puede caer dentro de nuestra práctica.
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
          <AttorneyProfileCard locale="es" className="w-full max-w-sm mx-auto md:mx-0" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              Sobre Nicole
            </p>
            <h2
              className="font-serif text-[color:var(--brand-primary)] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.2, fontWeight: 700 }}
            >
              Una abogada de California enfocada en la educación especial.
            </h2>
            <p className="text-lg text-[color:var(--text-primary)] leading-relaxed max-w-prose">
              Nicole Hodge Amey ejerce la abogacía en California desde diciembre de 2001. Su trabajo ayuda a familias con desacuerdos sobre el IEP, asuntos de proceso debido, disciplina escolar y derechos relacionados con discapacidades en la educación. Hay asistencia disponible en español.
            </p>
            <div className="mt-8">
              <Link href="/es/sobre-nicole" className="btn btn-primary">
                Lea más sobre Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">Privacidad primero</p><h2 className="font-serif text-[color:var(--brand-primary)]" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}>La historia de su familia no es publicidad.</h2></div>
          <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)] max-w-prose"><p>Este sitio explica los asuntos educativos que maneja el bufete y facilita el contacto. No publica historias de clientes como contenido de mercadeo.</p><Link href="/es/privacidad" className="btn btn-secondary">Lea nuestra política de privacidad</Link></div>
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
        body="Respondemos dentro de 24 horas hábiles. El primer paso es identificar si su asunto corresponde al bufete, a apoyo de defensa educativa o a otro recurso."
        primaryCta={{ label: "Contacte al bufete", href: "/es/contacto" }}
        secondaryCallLabel={`Llame al ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
