import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Vercel deployment optimization
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
