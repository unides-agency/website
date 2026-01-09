import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unides.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "photos.app.goo.gl",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
