import type { NextConfig } from "next";
// next.config.js
// const isGithubPages = process.env.GITHUB_ACTIONS || false;

const repoName = 'covering_jewellery'; // replace this


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
  output: 'export', // important for static export
  basePath: `/${repoName}` ,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
