import Link from "next/link";
import { ArrowRight, FileSearch, Scale, ShieldAlert, Gavel } from "lucide-react";

const ICONS = { FileSearch, Scale, ShieldAlert, Gavel } as const;
type IconKey = keyof typeof ICONS;

type Props = {
  title: string;
  summary: string;
  href: string;
  icon: IconKey;
  learnMoreLabel?: string;
};

export default function PracticeCard({ title, summary, href, icon, learnMoreLabel = "Learn more" }: Props) {
  const Icon = ICONS[icon];
  return (
    <article className="card card-linked relative flex flex-col h-full">
      <Icon
        aria-hidden="true"
        className="h-7 w-7 text-[color:var(--brand-secondary)] mb-5"
        strokeWidth={1.5}
      />
      <h3 className="font-serif text-[color:var(--brand-primary)] mb-3" style={{ fontSize: "1.5rem", lineHeight: 1.25, fontWeight: 700 }}>
        <Link href={href} className="unstyled before:absolute before:inset-0">
          {title}
        </Link>
      </h3>
      <p className="text-[color:var(--text-primary)] mb-5 flex-1">{summary}</p>
      <span className="inline-flex items-center gap-2 font-semibold text-[color:var(--link)] mt-auto">
        {learnMoreLabel}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </article>
  );
}
