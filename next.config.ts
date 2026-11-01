import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // All imagery is served locally from /public/media (mirrored from the reference site).
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/our-services", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contacts", permanent: true },
      { source: "/case-study", destination: "/specialty-food-brand", permanent: true },
    ];
  },
};

export default nextConfig;
