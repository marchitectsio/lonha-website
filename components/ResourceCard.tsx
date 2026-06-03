import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

type Props = {
  title: string;
  summary: string;
  href: string;
  type: string;
  language: string;
  readMoreLabel?: string;
};

export default function ResourceCard({ title, summary, href, type, language, readMoreLabel = "Read the guide" }: Props) {
  return (
    <article className="card card-linked relative flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[color:var(--brand-secondary)]">
        <FileText aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
        <span>{type}</span>
        <span aria-hidden="true">·</span>
        <span>{language}</span>
      </div>
      <h3 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.375rem", lineHeight: 1.3, fontWeight: 700 }}>
        <Link href={href} className="unstyled before:absolute before:inset-0">
          {title}
        </Link>
      </h3>
      <p className="text-[color:var(--text-primary)] mb-5 flex-1">{summary}</p>
      <span className="inline-flex items-center gap-2 font-semibold text-[color:var(--link)] mt-auto">
        {readMoreLabel}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </article>
  );
}
