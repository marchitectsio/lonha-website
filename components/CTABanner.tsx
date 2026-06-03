import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta: { label: string; href: string };
  /** Show the click-to-call as a secondary action. */
  secondaryCallLabel?: string;
};

export default function CTABanner({ eyebrow, heading, body, primaryCta, secondaryCallLabel }: Props) {
  return (
    <section className="bg-[color:var(--brand-primary)] text-white">
      <div className="container-x py-16 md:py-section-desktop">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-5">
              {eyebrow}
            </p>
          )}
          <h2
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.441rem)", lineHeight: 1.15 }}
          >
            {heading}
          </h2>
          {body && <p className="mt-5 text-white/85 max-w-prose text-lg leading-relaxed">{body}</p>}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href={primaryCta.href} className="btn btn-cta btn-large">
              {primaryCta.label}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </Link>
            {secondaryCallLabel && (
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="btn btn-large bg-transparent border-2 border-white text-white hover:bg-white hover:text-[color:var(--brand-primary)]"
                aria-label={secondaryCallLabel}
              >
                <Phone aria-hidden="true" className="h-5 w-5" />
                <span>{SITE.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
