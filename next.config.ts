import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",          // enables static HTML export
    images: {
        unoptimized: true,       // disables image optimization for static hosting
    },
    trailingSlash: true,       // ensures correct relative linking on GitHub Pages
};

export default nextConfig;
