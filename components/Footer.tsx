import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

type Props = {
  locale: "en" | "es";
};

const COL_HEADINGS = {
  en: { explore: "Explore", credentials: "Credentials & policies" },
  es: { explore: "Explorar", credentials: "Credenciales y políticas" },
};

const LINKS = {
  en: {
    explore: [
      { href: "/about", label: "About Nicole" },
      { href: "/how-we-help", label: "How we help" },
      { href: "/know-your-rights", label: "Know your rights" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
    ],
    credentials: [
      { href: "/accessibility", label: "Accessibility statement" },
      { href: "/contact", label: "Privacy & disclaimers" },
    ],
  },
  es: {
    explore: [
      { href: "/es/sobre-nicole", label: "Sobre Nicole" },
      { href: "/es/como-ayudamos", label: "Cómo ayudamos" },
      { href: "/es/contacto", label: "Contacto" },
    ],
    credentials: [
      { href: "/accessibility", label: "Declaración de accesibilidad" },
    ],
  },
};

export default function Footer({ locale }: Props) {
  const headings = COL_HEADINGS[locale];
  const links = LINKS[locale];

  const disclaimer =
    locale === "es"
      ? "La información en este sitio no constituye asesoramiento legal. No se crea una relación abogado-cliente al visitar este sitio o al enviar un formulario."
      : "The information on this site is not legal advice. No attorney-client relationship is created by visiting this site or submitting a form.";

  const builtTo =
    locale === "es"
      ? "Construido conforme a WCAG 2.1 AA."
      : "Built to WCAG 2.1 AA standards.";

  return (
    <footer className="bg-[color:var(--surface-inverse)] text-[color:var(--text-on-inverse)] mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-3">
        {/* Column 1: contact + logo */}
        <div>
          <Logo variant="full" tone="inverse" href={locale === "es" ? "/es" : "/"} />
          <address className="not-italic mt-6 space-y-2 text-[0.9375rem]">
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="h-4 w-4 mt-1 flex-shrink-0 text-[color:var(--brand-accent)]" />
              <span>
                {SITE.address.line1}
                <br />
                {SITE.address.cityStateZip}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone aria-hidden="true" className="h-4 w-4 mt-1 flex-shrink-0 text-[color:var(--brand-accent)]" />
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-[color:var(--text-on-inverse)] underline decoration-1 underline-offset-2 hover:decoration-2"
              >
                {SITE.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail aria-hidden="true" className="h-4 w-4 mt-1 flex-shrink-0 text-[color:var(--brand-accent)]" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-[color:var(--text-on-inverse)] underline decoration-1 underline-offset-2 hover:decoration-2 break-all"
              >
                {SITE.email}
              </a>
            </div>
          </address>
        </div>

        {/* Column 2: explore */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[color:var(--text-on-inverse)]/80 mb-4">
            {headings.explore}
          </h2>
          <ul className="space-y-2">
            {links.explore.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="unstyled text-[color:var(--text-on-inverse)] underline decoration-transparent underline-offset-4 hover:decoration-[color:var(--brand-accent)] hover:decoration-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: credentials */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[color:var(--text-on-inverse)]/80 mb-4">
            {headings.credentials}
          </h2>
          <dl className="space-y-3 text-[0.9375rem]">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--text-on-inverse)]/60">
                {locale === "es" ? "Admisión al Colegio de Abogados" : "Bar admission"}
              </dt>
              <dd>
                California State Bar #{SITE.bar.number}
                <br />
                {locale === "es" ? "Admitida en " : "Admitted "}
                {SITE.bar.admittedFull}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--text-on-inverse)]/60">
                {locale === "es" ? "Membresía" : "Membership"}
              </dt>
              <dd>
                {locale === "es" ? "Miembro de COPAA " : "Member, COPAA "}
                <span className="text-[color:var(--text-on-inverse)]/70">
                  (Council of Parent Attorneys and Advocates)
                </span>
              </dd>
            </div>
            <ul className="pt-2 space-y-2">
              {links.credentials.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="unstyled text-[color:var(--text-on-inverse)] underline decoration-transparent underline-offset-4 hover:decoration-[color:var(--brand-accent)] hover:decoration-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-[color:var(--text-on-inverse)]/70">
          <p>{SITE.copyright}</p>
          <p>{builtTo}</p>
        </div>
        <div className="container-x pb-8 text-xs text-[color:var(--text-on-inverse)]/60 max-w-prose">
          {disclaimer}
        </div>
      </div>
    </footer>
  );
}
