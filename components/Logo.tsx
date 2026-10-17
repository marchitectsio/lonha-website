import Link from "next/link";

type Props = {
  variant?: "full" | "abbreviation";
  href?: string;
  /** "default" uses brand colors on light; "inverse" uses cream on dark. */
  tone?: "default" | "inverse";
  ariaLabel?: string;
};

/** Firm wordmark. Playfair Display for the attorney name and Source Sans 3 for the descriptor. */
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
        <span aria-hidden="true" className={`inline-flex flex-col items-start leading-none ${fullColor}`}>
          <span className="font-sans font-semibold uppercase tracking-[0.22em] text-[0.625rem] mb-1">
            Law Offices of
          </span>
          <span className="font-serif font-semibold tracking-[-0.015em] text-[1.375rem] leading-tight">
            Nicole Hodge Amey
          </span>
        </span>
      )}
    </Link>
  );
}
