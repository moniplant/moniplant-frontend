/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
