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
  // Configure for GitHub Pages
  basePath: '/website',
  assetPrefix: '/website/',
  // Ensure all assets are loaded from the correct path
  webpack: (config) => {
    config.output.publicPath = '/website/_next/';
    return config;
  },
};

module.exports = nextConfig; 