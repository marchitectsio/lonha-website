import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

type NavItem = { href: string; label: string };

type Props = {
  locale: "en" | "es";
  children: ReactNode;
  otherLocaleHref: string;
};

const NAV_EN: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/how-we-help", label: "How we help" },
  { href: "/know-your-rights", label: "Know your rights" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const NAV_ES: NavItem[] = [
  { href: "/es/sobre-nicole", label: "Sobre Nicole" },
  { href: "/es/como-ayudamos", label: "Cómo ayudamos" },
  { href: "/es/contacto", label: "Contacto" },
];

export default function SiteFrame({ locale, otherLocaleHref, children }: Props) {
  const navItems = locale === "es" ? NAV_ES : NAV_EN;
  return (
    <>
      <SkipLink label={locale === "es" ? "Saltar al contenido principal" : "Skip to main content"} />
      <Header locale={locale} navItems={navItems} otherLocaleHref={otherLocaleHref} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
