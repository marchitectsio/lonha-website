import Link from "next/link";
import { Globe } from "lucide-react";

type Props = {
  /** Current locale of the page rendering this toggle. */
  current: "en" | "es";
  /** The href for the opposite-locale version of the current page. */
  otherHref: string;
  /** Optional href for the current language (defaults to "#" no-op). */
  currentHref?: string;
};

/**
 * Two adjacent links with aria-current on the active language. Clicking
 * navigates to the equivalent localized URL — never cookies (Phase 1 §5.1).
 */
export default function LanguageToggle({ current, otherHref, currentHref = "#" }: Props) {
  return (
    <div
      className="inline-flex items-center gap-2 text-sm"
      role="group"
      aria-label="Change language / Cambiar idioma"
    >
      <Globe aria-hidden="true" className="h-4 w-4 text-[color:var(--brand-primary)]" />
      {current === "en" ? (
        <>
          <Link
            href={currentHref}
            aria-current="true"
            className="unstyled font-semibold text-[color:var(--brand-primary)] underline underline-offset-4 decoration-2"
          >
            EN
          </Link>
          <span aria-hidden="true" className="text-[color:var(--border-strong)]">
            |
          </span>
          <Link
            href={otherHref}
            hrefLang="es"
            className="unstyled font-semibold text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)]"
          >
            ES
          </Link>
        </>
      ) : (
        <>
          <Link
            href={otherHref}
            hrefLang="en"
            className="unstyled font-semibold text-[color:var(--text-primary)] hover:text-[color:var(--brand-primary)]"
          >
            EN
          </Link>
          <span aria-hidden="true" className="text-[color:var(--border-strong)]">
            |
          </span>
          <Link
            href={currentHref}
            aria-current="true"
            className="unstyled font-semibold text-[color:var(--brand-primary)] underline underline-offset-4 decoration-2"
          >
            ES
          </Link>
        </>
      )}
    </div>
  );
}
