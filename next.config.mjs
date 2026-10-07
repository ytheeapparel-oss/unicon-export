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
      {
        source: '/export-usa',
        destination: '/en-us',
        permanent: true,
      },
      {
        source: '/export-canada',
        destination: '/en-ca',
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
