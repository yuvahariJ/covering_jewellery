import type { NextConfig } from "next";
// next.config.js
// const isGithubPages = process.env.GITHUB_ACTIONS || false;



const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[{
      protocol: 'https',
      hostname: 'rukminim2.flixcart.com',
      port: '',
      pathname: '/**',
    },]
  },
  output: 'export',
  basePath: '/covering_jewellery',  // repo name
  assetPrefix: '/covering_jewellery',
};

export default nextConfig;
