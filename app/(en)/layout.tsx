import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "@/lib/fonts";
import { ATTORNEY_JSON_LD } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lonhaca.com"),
  title: {
    default: "Law Offices of Nicole Hodge Amey · Special Education Civil Rights",
    template: "%s · LONHA",
  },
  description:
    "Boutique special-education civil-rights law firm in Oakland, California. Representing parents in IEP disputes, due process, discipline and Section 504 matters across the Bay Area, Kern County, and Los Angeles.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "LONHA · Law Offices of Nicole Hodge Amey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
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
