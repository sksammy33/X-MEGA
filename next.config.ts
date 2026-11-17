import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: let phones/laptops on the same Wi-Fi use live reload at http://192.168.1.9:3005
  allowedDevOrigins: ["192.168.1.9"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
