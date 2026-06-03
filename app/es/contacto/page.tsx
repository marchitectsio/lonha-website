import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comuníquese con la Oficina Legal de Nicole Hodge Amey. Respondemos a los mensajes dentro de 24 horas hábiles. Consultas disponibles en inglés y en español.",
  alternates: { canonical: "/es/contacto", languages: { en: "/contact", es: "/es/contacto" } },
};

const FAQ_ES = [
  {
    q: "¿Cuánto cuesta una consulta inicial?",
    a: "Discutimos las tarifas durante la primera conversación. La consulta inicial es una oportunidad para que ambos determinemos si somos el bufete adecuado. Bajo IDEA, los padres que prevalecen en un procedimiento de proceso de impugnación pueden recuperar honorarios de abogado del distrito escolar — esta es una disposición real de la ley federal, no una promesa de marketing.",
  },
  {
    q: "¿Toman casos fuera del Área de la Bahía?",
    a: "Sí. Representamos a familias en Oakland, el Área de la Bahía Este, el Condado de Alameda, el Condado de Kern y el área metropolitana de Los Ángeles. Los condados adyacentes se consideran caso por caso.",
  },
  {
    q: "¿Habla español?",
    a: "Sí. Nicole Hodge Amey es completamente bilingüe en inglés y español. Las consultas, la asistencia a reuniones del IEP y la representación completa del caso están todas disponibles en español.",
  },
  {
    q: "¿Cómo me preparo para nuestra primera llamada?",
    a: "Tenga a la mano el IEP más reciente de su hijo, cualquier informe de evaluación y un resumen de lo que ha sucedido con el distrito escolar. No necesita nada más para empezar.",
  },
];

export default function ContactPageEs() {
  return (
    <SiteFrame locale="es" otherLocaleHref="/contact">
      <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
            Contacto
          </p>
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl"
            style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}
          >
            Cuéntenos la situación de su hijo.
          </h1>
          <p className="mt-5 text-lg text-[color:var(--text-primary)] max-w-prose leading-relaxed">
            Respondemos a cada mensaje dentro de 24 horas hábiles. Si el asunto es urgente, por favor llámenos.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="sr-only">Formulario de contacto</h2>
            <ContactForm locale="es" />
          </div>

          <aside aria-labelledby="contact-info" className="space-y-8">
            <div>
              <h2 id="contact-info" className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">
                Contacto directo
              </h2>
              <ul className="space-y-4 text-[0.9375rem]">
                <li className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <a href={`tel:${SITE.phoneRaw}`} className="text-[color:var(--link)]">{SITE.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Correo electrónico</p>
                    <a href={`mailto:${SITE.email}`} className="text-[color:var(--link)] break-all">{SITE.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Correo postal</p>
                    <address className="not-italic text-[color:var(--text-primary)]">
                      {SITE.address.line1}<br />
                      {SITE.address.cityStateZip}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-accent)]" strokeWidth={1.5} />
                  <div>
                    <p className="font-semibold">Tiempo de respuesta</p>
                    <p>Dentro de 24 horas hábiles.</p>
                  </div>
                </li>
              </ul>
            </div>

            <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
              Enviar este formulario no crea una relación abogado-cliente. Por favor no incluya información confidencial que pueda identificar a su hijo hasta que hayamos hablado.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-[color:var(--surface-raised)] border-t border-[color:var(--border-subtle)] py-12 md:py-20">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-3">
            Antes de llamar
          </p>
          <h2
            className="font-serif text-[color:var(--brand-primary)] mb-8 max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.2, fontWeight: 700 }}
          >
            Preguntas comunes.
          </h2>
          <div className="space-y-2 max-w-3xl">
            {FAQ_ES.map((item, i) => (
              <details key={i} className="group border-b border-[color:var(--border-subtle)] py-4">
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
