import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/colbyeakin.github.io",
  assetPrefix: "/colbyeakin.github.io",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
