import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true, // Set to false if it's a temporary redirect
      },
    ];
  },
};

export default nextConfig;
