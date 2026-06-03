import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  // Generates each route as folder/index.html — works with S3 static hosting.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
