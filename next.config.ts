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
