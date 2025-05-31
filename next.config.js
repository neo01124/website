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
  assetPrefix: '/website',
  // Ensure all assets are loaded from the correct path
  webpack: (config) => {
    // Remove the publicPath setting as it's handled by assetPrefix
    return config;
  },
};

module.exports = nextConfig; 