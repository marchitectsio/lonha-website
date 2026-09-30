import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { ATTORNEY_JSON_LD } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lonhaca.com"),
  title: {
    default: "Nicole Hodge Amey · Abogada de derechos civiles en educación especial",
    template: "%s · LONHA",
  },
  description:
    "Firma boutique de derechos civiles en educación especial en Oakland, California. Representamos a padres en disputas del IEP, proceso de impugnación, disciplina y Sección 504 en el Área de la Bahía, el condado de Kern y Los Ángeles.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "LONHA · Law Offices of Nicole Hodge Amey",
    locale: "es_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ATTORNEY_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
