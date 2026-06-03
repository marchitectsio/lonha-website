import type { Metadata } from "next";
import "./globals.css";

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

// Root layout renders <html lang="en"> by default. For Spanish routes
// (/es/**), a post-build step rewrites the lang attribute to "es" in
// the generated HTML files so screen readers get the right pronunciation
// on initial render.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
