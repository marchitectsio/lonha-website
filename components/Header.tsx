"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { SITE } from "@/lib/site";

type NavItem = { href: string; label: string };
type Props = {
  locale: "en" | "es";
  navItems: NavItem[];
  otherLocaleHref: string;
};

export default function Header({ locale, navItems, otherLocaleHref }: Props) {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const openBtnRef = useRef<HTMLButtonElement | null>(null);

  // Focus management for the mobile drawer
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      openBtnRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const phoneLabel = locale === "es" ? `Llame al ${SITE.phone}` : `Call ${SITE.phone}`;
  const menuLabel = locale === "es" ? "Abrir menú" : "Open menu";
  const closeLabel = locale === "es" ? "Cerrar menú" : "Close menu";

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--surface)]/95 backdrop-blur border-b border-[color:var(--border-subtle)]">
      <div className="container-x flex items-center justify-between h-20 gap-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="hidden md:inline">
            <Logo variant="full" href={locale === "es" ? "/es" : "/"} />
          </span>
          <span className="md:hidden">
            <Logo variant="abbreviation" href={locale === "es" ? "/es" : "/"} />
          </span>
        </div>

        {/* Desktop nav */}
        <nav aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"} className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="unstyled text-[0.9375rem] font-semibold text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)] py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="unstyled hidden md:inline-flex items-center gap-2 font-semibold text-[color:var(--brand-accent)] hover:text-[color:var(--brand-accent-hover)]"
            aria-label={phoneLabel}
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            <span>{SITE.phone}</span>
          </a>
          <div className="hidden md:block">
            <LanguageToggle current={locale} otherHref={otherLocaleHref} />
          </div>

          {/* Mobile hamburger */}
          <button
            ref={openBtnRef}
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[color:var(--brand-primary)] hover:bg-[color:var(--border-subtle)]/50"
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Tap-to-call on mobile */}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="unstyled md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[color:var(--brand-accent)] hover:bg-[color:var(--border-subtle)]/50"
            aria-label={phoneLabel}
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={locale === "es" ? "Menú" : "Menu"}
          className="fixed inset-0 z-50 bg-[color:var(--surface)] flex flex-col"
        >
          <div className="container-x flex items-center justify-between h-20 border-b border-[color:var(--border-subtle)]">
            <Logo variant="abbreviation" href={locale === "es" ? "/es" : "/"} />
            <button
              ref={closeBtnRef}
              type="button"
              className="inline-flex items-center justify-center w-11 h-11 rounded-md text-[color:var(--brand-primary)] hover:bg-[color:var(--border-subtle)]/50"
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <nav
            aria-label={locale === "es" ? "Navegación móvil" : "Mobile navigation"}
            className="container-x py-8 flex-1 overflow-y-auto"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="unstyled block text-h4 font-serif font-semibold text-[color:var(--brand-primary)] py-3 border-b border-[color:var(--border-subtle)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn-cta w-full" aria-label={phoneLabel}>
                <Phone aria-hidden="true" className="h-5 w-5" />
                <span>{SITE.phone}</span>
              </a>
              <div className="pt-2">
                <LanguageToggle current={locale} otherHref={otherLocaleHref} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
