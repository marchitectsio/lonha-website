import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

// Self-hosted via next/font: no render-blocking Google Fonts <link> tags,
// automatic preconnect, font-display: swap, and zero layout shift.
export const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const fontVariables = `${serif.variable} ${sans.variable}`;
