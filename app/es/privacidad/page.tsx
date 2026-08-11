import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import CTABanner from "@/components/CTABanner";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacidad y avisos", description: "Privacidad, confidencialidad y avisos del sitio web de la Oficina Legal de Nicole Hodge Amey.", alternates: { canonical: "/es/privacidad", languages: { en: "/privacy", es: "/es/privacidad" } } };

export default function PrivacyPageEs() {
  return <SiteFrame locale="es" otherLocaleHref="/privacy">
    <section className="bg-[color:var(--surface)] py-14 md:py-section-desktop"><div className="container-x"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-4">Privacidad primero</p><h1 className="font-serif font-bold text-[color:var(--brand-primary)] max-w-3xl" style={{ fontSize: "clamp(2rem, 4.4vw, 3.052rem)", lineHeight: 1.15 }}>La historia de su familia no es publicidad.</h1><p className="mt-6 max-w-prose text-lg leading-relaxed">Este sitio presenta al bufete, explica los asuntos educativos que atendemos y facilita el contacto. No publicamos historias de clientes como mercadeo.</p></div></section>
    <section className="py-12 md:py-20"><div className="container-x max-w-4xl space-y-10">
      <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">Privacidad del formulario</h2><p className="text-lg leading-relaxed">La información enviada se utiliza para responder a su consulta y evaluar si el bufete puede ayudar. No incluya detalles confidenciales, expedientes estudiantiles ni información que identifique a su hijo antes de hablar con el bufete.</p></div>
      <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">No se crea una relación abogado-cliente</h2><p className="text-lg leading-relaxed">Visitar este sitio, enviar un mensaje o recibir una respuesta inicial no crea una relación abogado-cliente. La representación comienza solamente cuando el bufete la confirma en un acuerdo escrito.</p></div>
      <div><h2 className="font-serif text-2xl font-bold text-[color:var(--brand-primary)] mb-3">Información general</h2><p className="text-lg leading-relaxed">El contenido es información general, no asesoramiento legal. Las leyes y los plazos dependen de los hechos de cada asunto y pueden cambiar.</p></div>
      <p className="text-sm text-[color:var(--text-secondary)]">Actualizado el 11 de agosto de 2026.</p><Link href="/es/contacto" className="btn btn-primary">Contacte al bufete</Link>
    </div></section>
    <CTABanner heading="Comience con el asunto educativo." body="Cuéntenos qué sucede en la escuela sin incluir detalles confidenciales del estudiante." primaryCta={{ label: "Contacte al bufete", href: "/es/contacto" }} secondaryCallLabel={`Llame al ${SITE.phone}`} />
  </SiteFrame>;
}
