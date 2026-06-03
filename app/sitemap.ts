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
    "/testimonials",
    "/contact",
    "/accessibility",
    "/es",
    "/es/sobre-nicole",
    "/es/como-ayudamos",
    "/es/contacto",
  ];
  return pages.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));
}
