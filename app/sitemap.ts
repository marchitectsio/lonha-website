import type { MetadataRoute } from "next";

const BASE = "https://www.lonhaca.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/about",
    "/how-we-help",
    "/how-we-help/iep-disputes",
    "/how-we-help/due-process",
    "/how-we-help/discipline-expulsion",
    "/how-we-help/section-504",
    "/know-your-rights",
    "/privacy",
    "/contact",
    "/accessibility",
    "/es",
    "/es/sobre-nicole",
    "/es/como-ayudamos",
    "/es/recursos",
    "/es/privacidad",
    "/es/contacto",
  ];
  // No lastModified: stamping every URL with the build date on each deploy
  // dilutes crawl-priority signals. Add real per-page dates if they become
  // available; until then, omit the field entirely.
  return pages.map((p) => ({
    url: `${BASE}${p}`,
  }));
}
