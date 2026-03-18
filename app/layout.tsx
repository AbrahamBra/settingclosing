import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description: 'ChallengersLab gère votre setting commercial LinkedIn : setter dédié, méthode signal-based, RDV qualifiés dès la première semaine. Pour fondateurs, freelances et solopreneurs.',
  openGraph: {
    title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
    description: 'ChallengersLab gère votre setting commercial LinkedIn : setter dédié, méthode signal-based, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://challengerslab.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ChallengersLab — Setting commercial LinkedIn externalisé',
      },
    ],
  },
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://challengerslab.fr/#website',
      url: 'https://challengerslab.fr',
      name: 'ChallengersLab',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://challengerslab.fr/#business',
      name: 'ChallengersLab',
      url: 'https://challengerslab.fr',
      description: 'Setting et closing LinkedIn externalisés pour fondateurs, freelances et solopreneurs.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B',
            description: 'Setting externalisé : setter dédié, méthode LinkedIn signal-based, RDV qualifiés dès la première semaine',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 2000,
              maxPrice: 5000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Coaching Closing B2B',
            description: 'Coaching closing 2h/semaine, méthode Challenger Sale, pour fondateurs, freelances et solopreneurs B2B',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 1500,
              maxPrice: 3000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Cosmic star background */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            background: [
              'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.15), transparent)',
              'radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.1), transparent)',
              'radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.12), transparent)',
              'radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.08), transparent)',
              'radial-gradient(1.5px 1.5px at 10% 80%, rgba(255,255,255,0.15), transparent)',
              'radial-gradient(1px 1px at 70% 90%, rgba(255,255,255,0.1), transparent)',
              'radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.12), transparent)',
              'radial-gradient(1.5px 1.5px at 50% 50%, rgba(255,255,255,0.08), transparent)',
              'radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.1), transparent)',
              'radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.12), transparent)',
              'radial-gradient(1.5px 1.5px at 35% 15%, rgba(255,255,255,0.08), transparent)',
              'radial-gradient(1px 1px at 55% 85%, rgba(255,255,255,0.1), transparent)',
              'radial-gradient(1px 1px at 75% 35%, rgba(255,255,255,0.15), transparent)',
              'radial-gradient(1px 1px at 25% 65%, rgba(255,255,255,0.08), transparent)',
            ].join(', '),
          }}
        />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </body>
    </html>
  )
}
