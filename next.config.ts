import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Image Optimization enabled (default): responsive sizes, modern formats
  // (AVIF/WebP), and lazy-loading served from Vercel's edge at no extra cost.
};

export default nextConfig;
