import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'rukminim2.flixcart.com',
      port: '',
      pathname: '/**',
    },]
  }
};

export default nextConfig;
