/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'uniconleather.com',
          },
        ],
        destination: 'https://www.uniconleather.com/:path*',
        permanent: true,
      },
      {
        source: '/how-we-craft-premium-leather-goods-in-2026',
        destination: '/craftsmanship',
        permanent: true,
      },
      {
        source: '/how-we-craft-premium-leather-goods',
        destination: '/craftsmanship',
        permanent: true,
      },
      {
        source: '/how-we-craft',
        destination: '/craftsmanship',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/post-sitemap.xml',
        destination: '/pages-sitemap.xml',
      },
    ];
  },
};

export default nextConfig;
