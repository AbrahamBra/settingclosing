import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/ressources',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/ressources/:slug',
        permanent: true,
      },
      {
        source: '/setting',
        destination: '/ressources/setting-commercial-b2b',
        permanent: true,
      },
      {
        source: '/methode/nurturing',
        destination: '/methode/setting-linkedin',
        permanent: true,
      },
      {
        source: '/methode',
        destination: '/methode/setting-linkedin',
        permanent: false,
      },
      // Consolidation SEO : 4 articles fusionnés dans le pilier setting-commercial-b2b
      {
        source: '/ressources/setting-linkedin-definition',
        destination: '/ressources/setting-commercial-b2b',
        permanent: true,
      },
      {
        source: '/ressources/setter-b2b-definition',
        destination: '/ressources/setting-commercial-b2b',
        permanent: true,
      },
      {
        source: '/ressources/difference-setting-closing',
        destination: '/ressources/setting-commercial-b2b',
        permanent: true,
      },
      {
        source: '/ressources/setting-commercial-linkedin',
        destination: '/ressources/setting-commercial-b2b',
        permanent: true,
      },
      // Consolidation SEO : 4 articles fusionnés → pilier "méthodes de vente B2B"
      {
        source: '/ressources/methode-soncas',
        destination: '/ressources/methodes-vente-b2b',
        permanent: true,
      },
      {
        source: '/ressources/methode-spin-selling',
        destination: '/ressources/methodes-vente-b2b',
        permanent: true,
      },
      {
        source: '/ressources/challenger-sale-definition',
        destination: '/ressources/methodes-vente-b2b',
        permanent: true,
      },
      {
        source: '/ressources/qualification-leads-b2b',
        destination: '/ressources/methodes-vente-b2b',
        permanent: true,
      },
      // Consolidation SEO : 3 articles fusionnés → pilier "devenir setter ou closer B2B"
      {
        source: '/ressources/cout-setter-b2b-prix',
        destination: '/ressources/comment-devenir-setter-b2b',
        permanent: true,
      },
      {
        source: '/ressources/comment-choisir-setter-linkedin',
        destination: '/ressources/comment-devenir-setter-b2b',
        permanent: true,
      },
      {
        source: '/ressources/combien-coute-setting-linkedin',
        destination: '/ressources/comment-devenir-setter-b2b',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://*.calendly.com",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.calendly.com https://region1.google-analytics.com",
              "frame-src https://calendly.com https://*.calendly.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      {
        source: '/(.*)\\.(mp4|webm|jpg|jpeg|png|webp|avif|svg|ico|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
};

export default nextConfig;
