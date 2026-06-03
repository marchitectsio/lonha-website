import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";
import { BadgeCheck, Languages, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nicole Hodge Amey",
  description:
    "Nicole Hodge Amey es una abogada de derechos civiles en California enfocada exclusivamente en educación especial. Admitida al Colegio Estatal de Abogados en 2001; miembro de COPAA; completamente bilingüe en inglés y español.",
  alternates: { canonical: "/es/sobre-nicole", languages: { en: "/about", es: "/es/sobre-nicole" } },
};

export default function AboutPageEs() {
  return (
    <SiteFrame locale="es" otherLocaleHref="/about">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
          {/* TODO: Replace with Nicole's professional headshot when client provides it. */}
          <div
            className="portrait-placeholder w-full max-w-md"
            aria-label="Retrato de Nicole Hodge Amey, marcador de posición pendiente de fotografía final"
            style={{ fontSize: "clamp(6rem, 16vw, 10rem)" }}
          >
            N
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
              Sobre
            </p>
            <h1
              className="font-serif font-bold text-[color:var(--brand-primary)]"
              style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
            >
              Nicole Hodge Amey, Abogada
            </h1>
            <p
              className="mt-5 text-[color:var(--text-primary)] max-w-prose"
              style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}
            >
              Una abogada de derechos civiles en California cuya práctica se ha limitado a la ley de educación especial y derechos por discapacidad desde el año en que fue admitida al Colegio de Abogados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_2fr]">
          <aside aria-labelledby="creds-heading">
            <h2 id="creds-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-5">
              Credenciales
            </h2>
            <dl className="space-y-5 text-[0.9375rem]">
              <div className="flex items-start gap-3">
                <Scale aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Admisión al Colegio de Abogados</dt>
                  <dd>Colegio Estatal de Abogados de California #{SITE.bar.number}<br />Admitida en {SITE.bar.admittedFull}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BadgeCheck aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Membresía</dt>
                  <dd>Council of Parent Attorneys and Advocates (COPAA)</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Idiomas</dt>
                  <dd>English, Español</dd>
                </div>
              </div>
            </dl>
          </aside>

          <div className="prose-x">
            {/* TODO: client to provide final bio */}
            <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)]">
              <p>
                Nicole Hodge Amey fundó la Oficina Legal de Nicole Hodge Amey para hacer una cosa bien: representar a padres de niños con discapacidades en sus tratos con las escuelas públicas de California. Su práctica se ha limitado a la ley de educación especial y derechos por discapacidad desde diciembre de 2001, el año en que fue admitida al Colegio Estatal de Abogados de California.
              </p>
              <p>
                Durante más de dos décadas, ha manejado cientos de asuntos bajo la Ley de Educación para Individuos con Discapacidades (IDEA), la Sección 504 de la Ley de Rehabilitación y el Título II de la Ley para Estadounidenses con Discapacidades. Sus casos han incluido desacuerdos sobre el IEP, audiencias de proceso de impugnación, quejas ante el Departamento de Educación de California y el Departamento de Educación de los Estados Unidos, audiencias de expulsión y determinación de manifestación, y litigios en tribunales federales.
              </p>
              <p>
                Nicole es completamente bilingüe en inglés y español. Las consultas, la asistencia a reuniones del IEP y la representación completa del caso pueden conducirse en español. Es una adaptación que a menudo falta en el mercado legal de educación especial de California, y que importa enormemente a las familias del Área de la Bahía Este y del Valle Central.
              </p>
              <p>
                El bufete es miembro del Council of Parent Attorneys and Advocates (COPAA), la organización nacional de membresía para abogados y defensores que representan a estudiantes con discapacidades. La membresía en COPAA conlleva un compromiso explícito con los derechos de padres y estudiantes bajo la ley federal de discapacidad.
              </p>
            </div>

            <div className="mt-12 pl-6 border-l-4 border-[color:var(--brand-accent)] max-w-prose">
              <p
                className="font-serif italic text-[color:var(--brand-primary)]"
                style={{ fontSize: "1.375rem", lineHeight: 1.5 }}
              >
                La ley está del lado de su hijo. Mi trabajo es asegurarme de que el distrito lo recuerde.
              </p>
              <p className="mt-3 text-sm text-[color:var(--text-secondary)]">Nicole Hodge Amey</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/es/contacto" className="btn btn-cta">Programe una consulta</Link>
              <Link href="/es/como-ayudamos" className="btn btn-secondary">Áreas de práctica</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="¿Listo para hablar?"
        body="Si tiene una pregunta específica sobre el caso de su hijo, con gusto la escuchamos. La primera llamada es una conversación, no un compromiso."
        primaryCta={{ label: "Programe una consulta", href: "/es/contacto" }}
        secondaryCallLabel={`Llame al ${SITE.phone}`}
      />
    </SiteFrame>
  );
}
