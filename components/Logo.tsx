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
  ariaLabel = "Law Offices of Nicole Hodge Amey, home",
}: Props) {
  const fullColor = tone === "inverse" ? "text-[color:var(--surface)]" : "text-[color:var(--brand-primary)]";

  return (
    <Link href={href} className="unstyled inline-flex items-center" aria-label={ariaLabel}>
      {variant === "abbreviation" ? (
        <span
          aria-hidden="true"
          className={`font-serif font-bold text-2xl tracking-tight ${fullColor}`}
        >
          LONHA
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`font-serif font-bold leading-tight ${fullColor}`}
          style={{ fontSize: "1.125rem", letterSpacing: "0.01em" }}
        >
          Law Offices of Nicole Hodge Amey
        </span>
      )}
    </Link>
  );
}
