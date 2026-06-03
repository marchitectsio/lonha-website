type Props = {
  quote: string;
  attribution: string;
  caseType?: string;
};

export default function TestimonialCard({ quote, attribution, caseType }: Props) {
  return (
    <figure className="card flex flex-col h-full">
      <span
        aria-hidden="true"
        className="font-serif text-[color:var(--brand-secondary)] leading-none mb-2"
        style={{ fontSize: "3rem" }}
      >
        “
      </span>
      <blockquote
        className="font-serif italic text-[color:var(--text-primary)]"
        style={{ fontSize: "1.1875rem", lineHeight: 1.55 }}
      >
        {quote}
      </blockquote>
      <figcaption className="mt-5 pt-5 border-t border-[color:var(--border-subtle)]">
        {caseType && (
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--brand-secondary)] mb-1">
            {caseType}
          </p>
        )}
        <p className="text-sm text-[color:var(--text-secondary)]">— {attribution}</p>
      </figcaption>
    </figure>
  );
}
