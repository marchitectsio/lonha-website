import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({ eyebrow, headline, subheadline, primaryCta, secondaryCta }: Props) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--surface)]">
      {/* Decorative serif "L" glyph behind headline */}
      <span
        aria-hidden="true"
        className="hero-glyph hidden md:block"
        style={{
          fontSize: "clamp(28rem, 50vw, 44rem)",
          top: "-4rem",
          right: "-3rem",
        }}
      >
        L
      </span>

      <div className="container-x relative py-16 md:py-section-desktop md:pt-24 md:pb-28">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)] mb-6">
              {eyebrow}
            </p>
          )}
          <h1
            className="font-serif font-bold text-[color:var(--brand-primary)] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5.2vw, 3.815rem)", lineHeight: 1.1 }}
          >
            {headline}
          </h1>
          <p
            className="mt-6 text-[color:var(--text-primary)] max-w-prose"
            style={{ fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)", lineHeight: 1.55 }}
          >
            {subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href={primaryCta.href} className="btn btn-cta btn-large">
              {primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-secondary btn-large">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
