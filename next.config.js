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
  // No basePath needed since we're serving from docs folder
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig; 