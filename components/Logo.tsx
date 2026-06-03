import Link from "next/link";

type Props = {
  variant?: "full" | "abbreviation";
  href?: string;
  /** "default" uses brand colors on light; "inverse" uses cream on dark. */
  tone?: "default" | "inverse";
  ariaLabel?: string;
};

/**
 * LONHA wordmark. Per Phase 2 §2.1: "Law Offices of Nicole Hodge Amey" in Libre
 * Baskerville Bold, with "LONHA" in Source Sans 3 SemiBold small-caps below.
 */
export default function Logo({
  variant = "full",
  href = "/",
  tone = "default",
  ariaLabel = "Law Offices of Nicole Hodge Amey — home",
}: Props) {
  const fullColor = tone === "inverse" ? "text-[color:var(--surface)]" : "text-[color:var(--brand-primary)]";
  const subColor = tone === "inverse" ? "text-[color:var(--surface)]/80" : "text-[color:var(--brand-secondary)]";

  return (
    <Link href={href} className="unstyled inline-flex items-center" aria-label={ariaLabel}>
      <span className="sr-only">{ariaLabel}</span>
      {variant === "abbreviation" ? (
        <span
          aria-hidden="true"
          className={`font-serif font-bold text-2xl tracking-tight ${fullColor}`}
        >
          LONHA
        </span>
      ) : (
        <span aria-hidden="true" className="flex flex-col leading-tight">
          <span
            className={`font-serif font-bold ${fullColor}`}
            style={{ fontSize: "1.125rem", letterSpacing: "0.01em" }}
          >
            Law Offices of Nicole Hodge Amey
          </span>
          <span
            className={`font-sans font-semibold ${subColor}`}
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: "0.125rem",
            }}
          >
            LONHA · Special Education Civil Rights
          </span>
        </span>
      )}
    </Link>
  );
}
