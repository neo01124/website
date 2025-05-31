/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/7.x/avataaars/**',
      },
    ],
  },
  // Make all paths relative to the repository root
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website/' : '',
};

module.exports = nextConfig; 