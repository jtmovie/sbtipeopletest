import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sbti.unun.dev',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
