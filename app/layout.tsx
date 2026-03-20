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
  title: 'Setting commercial LinkedIn externalisé | Setting',
  description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. Dès 490 € + 500 €/mois.',
  openGraph: {
    title: 'Setting commercial LinkedIn externalisé | Setting',
    description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Setting — Setting commercial LinkedIn externalisé',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.setting.live',
    languages: {
      'fr': 'https://www.setting.live',
      'x-default': 'https://www.setting.live',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.setting.live/#website',
      url: 'https://www.setting.live',
      name: 'Setting',
      alternateName: 'ChallengersLab',
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.setting.live/#business',
      name: 'Setting',
      alternateName: 'ChallengersLab',
      url: 'https://www.setting.live',
      description: 'Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs.',
      sameAs: [
        'https://www.linkedin.com/company/challengerslab',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@setting.live',
        contactType: 'sales',
        availableLanguage: 'French',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting LinkedIn — Setup',
            description: 'Cadrage ICP, setup outils, rédaction des séquences de prospection.',
            url: 'https://www.setting.live/methode/setting-linkedin',
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
            description: 'Pipeline LinkedIn clé en main : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés. 500 €/mois (même tarif sur les 3 premiers mois). Prime de 50 à 250 €/RDV selon le ticket moyen.',
            url: 'https://www.setting.live/methode/setting-linkedin',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 500,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting téléphonique — Qualification de leads',
            description: 'Qualification téléphonique de vos leads entrants : chaque lead est appelé, scoré et routé. 690 €/mois standalone, 490 €/mois en bundle. Prime de 25 à 200 €/RDV selon le ticket moyen.',
            url: 'https://www.setting.live/methode/setting-telephonique',
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
            description: 'Construction sur-mesure du workflow de scoring, nurturing et routing. 1 990 € setup + 490 €/mois pendant 3 mois d\'optimisation. Prime de 50 à 250 €/RDV généré selon le ticket moyen.',
            url: 'https://www.setting.live/methode/nurturing',
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
