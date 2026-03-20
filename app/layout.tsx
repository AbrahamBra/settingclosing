import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { VideoBackground } from '@/components/VideoBackground'
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
  description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. Dès 490 € + 790 €/mois.',
  openGraph: {
    title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
    description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ChallengersLab — Setting commercial LinkedIn externalisé',
      },
    ],
  },
  alternates: {
    canonical: 'https://setting.live',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://setting.live/#website',
      url: 'https://setting.live',
      name: 'ChallengersLab',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://setting.live/#business',
      name: 'ChallengersLab',
      url: 'https://setting.live',
      description: 'Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting LinkedIn — Setup',
            description: 'Cadrage ICP, setup outils, rédaction des séquences de prospection.',
            url: 'https://setting.live/methode/setting-linkedin',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 490,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting LinkedIn — Abonnement',
            description: 'Pipeline à plein régime : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés. 790 €/mois les 2 premiers mois, puis 1 290 €/mois. +50 €/RDV au-delà de 8.',
            url: 'https://setting.live/methode/setting-linkedin',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 790,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting téléphonique — Qualification de leads',
            description: 'Qualification téléphonique de vos leads entrants : chaque lead est appelé, scoré et routé. 690 €/mois standalone, 490 €/mois en bundle. +35 €/RDV au-delà de 10.',
            url: 'https://setting.live/methode/setting-telephonique',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 690,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setup Nurturing',
            description: 'Construction sur-mesure du workflow de scoring, nurturing et routing. 1 990 € setup + 490 €/mois pendant 3 mois d\'optimisation. +80-100 €/RDV généré.',
            url: 'https://setting.live/methode/nurturing',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 1990,
              priceCurrency: 'EUR',
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
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJX37RXX');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJX37RXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <VideoBackground />
        {children}
      </body>
    </html>
  )
}
