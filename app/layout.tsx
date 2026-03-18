import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
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
      className={`${instrumentSerif.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <svg
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: 0.03,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
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
