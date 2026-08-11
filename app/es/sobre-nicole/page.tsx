import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";
import { Languages, Scale } from "lucide-react";
import AttorneyProfileCard from "@/components/AttorneyProfileCard";

export const metadata: Metadata = {
  title: "Sobre Nicole Hodge Amey",
  description:
    "Nicole Hodge Amey es una abogada de California que ayuda a familias con asuntos de educación especial. Admitida al Colegio Estatal de Abogados en 2001.",
  alternates: { canonical: "/es/sobre-nicole", languages: { en: "/about", es: "/es/sobre-nicole" } },
};

export default function AboutPageEs() {
  return (
    <SiteFrame locale="es" otherLocaleHref="/about">
      <section className="bg-[color:var(--surface)] py-16 md:py-section-desktop">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16 items-start">
          <AttorneyProfileCard locale="es" className="w-full max-w-md" />
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
              Una abogada de California que ayuda a las familias a entender sus derechos y buscar la educación, los servicios y el apoyo que sus hijos necesitan en la escuela.
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
                  <dd><a href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/215157" target="_blank" rel="noreferrer">Colegio Estatal de Abogados de California #{SITE.bar.number}<span className="sr-only"> (se abre en una nueva pestaña)</span></a><br />Admitida en {SITE.bar.admittedFull}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages aria-hidden="true" className="h-5 w-5 mt-1 text-[color:var(--brand-secondary)]" strokeWidth={1.5} />
                <div>
                  <dt className="font-semibold">Idiomas</dt>
                  <dd>Inglés; asistencia disponible en español</dd>
                </div>
              </div>
            </dl>
          </aside>

          <div className="prose-x">
            <div className="space-y-5 text-lg leading-relaxed text-[color:var(--text-primary)]">
              <p>
                Nicole Hodge Amey fundó la Oficina Legal de Nicole Hodge Amey para ayudar a padres de niños con discapacidades a navegar las escuelas públicas de California cuando el proceso educativo no funciona. El bufete atiende desacuerdos sobre el IEP, asuntos de proceso debido, disciplina escolar y preguntas sobre derechos relacionados con discapacidades.
              </p>
              <p>
                El trabajo se centra en la educación: ayudar a las familias a entender qué necesita el estudiante, qué exige la ley y cuál puede ser el próximo paso apropiado con el distrito escolar.
              </p>
              <p>
                Nicole nació y creció en Oakland. Estudió en Merritt College, obtuvo una licenciatura en Ciencias Políticas de California State University, Long Beach, y su J.D. de Golden Gate University School of Law. Hay asistencia disponible en español.
              </p>
            </div>

            <div className="mt-12 pl-6 border-l-4 border-[color:var(--brand-accent)] max-w-prose">
              <p
                className="font-serif italic text-[color:var(--brand-primary)]"
                style={{ fontSize: "1.375rem", lineHeight: 1.5 }}
              >
                Podemos ayudar a su familia a mantener el enfoque en lo que su hijo necesita para recibir la mejor educación posible.
              </p>
              <p className="mt-3 text-sm text-[color:var(--text-secondary)]">Oficina Legal de Nicole Hodge Amey</p>
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
