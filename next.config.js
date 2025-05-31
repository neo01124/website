/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
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
};

module.exports = nextConfig; 