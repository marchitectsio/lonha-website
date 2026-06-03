import { Award, BadgeCheck, Languages, Scale } from "lucide-react";

type Item = { icon: "Award" | "Scale" | "BadgeCheck" | "Languages"; label: string };
const ICONS = { Award, Scale, BadgeCheck, Languages };

type Props = { items: Item[] };

export default function CredibilityStrip({ items }: Props) {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-[color:var(--border-subtle)] bg-[color:var(--surface-raised)]"
    >
      <ul className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.label} className="flex items-start gap-3">
              <Icon
                aria-hidden="true"
                className="h-5 w-5 mt-0.5 flex-shrink-0 text-[color:var(--brand-secondary)]"
                strokeWidth={1.5}
              />
              <span className="font-sans font-semibold text-[0.9375rem] text-[color:var(--text-primary)] leading-snug">
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
