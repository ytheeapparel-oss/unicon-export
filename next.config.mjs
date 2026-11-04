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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'myuniconcom.vercel.app',
          },
        ],
        destination: 'https://www.uniconleather.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'myunicon.com',
          },
        ],
        destination: 'https://www.uniconleather.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.myunicon.com',
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
      {
        source: '/global-export',
        destination: '/export',
        permanent: true,
      },
      // 301 Redirects for Corrected Product Slugs (Fixing Legacy Slug / Product Name Mismatches)
      {
        source: '/products/grand-tour-leather-duffel-weekender',
        destination: '/products/manhattan-executive-zippered-leather-briefcase',
        permanent: true,
      },
      {
        source: '/products/artisan-feather-edge-dress-belt',
        destination: '/products/artisan-distressed-leather-utility-belt-pouch',
        permanent: true,
      },
      {
        source: '/products/savile-lambskin-racer-leather-jacket',
        destination: '/products/heritage-bifold-leather-wallet-trio-gift-box',
        permanent: true,
      },
      {
        source: '/products/bespoke-travel-passport-folio',
        destination: '/products/cerulean-knotted-sculptural-leather-tote',
        permanent: true,
      },
      {
        source: '/products/executive-leather-desk-mat-valet-set',
        destination: '/products/sovereign-structured-pebbled-leather-satchel',
        permanent: true,
      },
      {
        source: '/products/custom-developed-oem-brand-service',
        destination: '/products/artisan-triangular-leather-desk-valet-case',
        permanent: true,
      },
      {
        source: '/products/small-leather-goods',
        destination: '/small-leather-goods-manufacturer',
        permanent: true,
      },
      {
        source: '/products/corporate-gifts',
        destination: '/leather-accessories-manufacturer-india',
        permanent: true,
      },
      // 301 Consolidation of Competing Country & Pillar Pages
      {
        source: '/private-label-leather-goods',
        destination: '/private-label',
        permanent: true,
      },
      {
        source: '/full-grain-vs-top-grain-leather',
        destination: '/leather-quality-sourcing-guide',
        permanent: true,
      },
      {
        source: '/leather-goods-supplier-usa',
        destination: '/en-us',
        permanent: true,
      },
      {
        source: '/export/usa/leather-goods-manufacturer-usa',
        destination: '/en-us',
        permanent: true,
      },
      {
        source: '/export/europe/private-label-leather-bags-uk-london',
        destination: '/en-gb',
        permanent: true,
      },
      {
        source: '/export/europe/leather-goods-manufacturer-germany',
        destination: '/de',
        permanent: true,
      },
      {
        source: '/export/europe/luxury-leather-atelier-france-paris',
        destination: '/fr',
        permanent: true,
      },
      {
        source: '/export/australia/leather-goods-manufacturer-australia',
        destination: '/en-au',
        permanent: true,
      },
      {
        source: '/request-catalogue',
        destination: '/catalogue-request',
        permanent: true,
      },
      {
        source: '/leather-handbag-manufacturer-india',
        destination: '/leather-handbags-manufacturer-india',
        permanent: true,
      },
      {
        source: '/leather-tote-bag-manufacturer',
        destination: '/products/tote-bags',
        permanent: true,
      },
      {
        source: '/custom-leather-bags-manufacturer',
        destination: '/custom-leather-goods-manufacturer',
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
