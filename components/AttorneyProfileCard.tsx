import { BadgeCheck, Scale } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = { locale: "en" | "es"; className?: string };

export default function AttorneyProfileCard({ locale, className = "" }: Props) {
  const spanish = locale === "es";

  return (
    <div className={`attorney-profile-card ${className}`.trim()} aria-label={spanish ? "Credenciales de Nicole Hodge Amey" : "Nicole Hodge Amey credentials"}>
      <div className="attorney-monogram" aria-hidden="true">NHA</div>
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          {spanish ? "Abogada de California" : "California attorney"}
        </p>
        <p className="mt-2 font-serif text-2xl font-bold text-white">Nicole Hodge Amey</p>
        <div className="mt-6 grid gap-3 text-sm text-white/90">
          <span className="inline-flex items-center gap-2"><BadgeCheck aria-hidden="true" className="h-4 w-4 text-[color:var(--brand-accent)]" />{spanish ? "Licencia activa" : "Active license"}</span>
          <span className="inline-flex items-center gap-2"><Scale aria-hidden="true" className="h-4 w-4 text-[color:var(--brand-accent)]" />{spanish ? `Colegio de Abogados #${SITE.bar.number}` : `State Bar #${SITE.bar.number}`}</span>
          <span>{spanish ? `Admitida en ${SITE.bar.admittedFull}` : `Admitted ${SITE.bar.admittedFull}`}</span>
        </div>
      </div>
    </div>
  );
}
