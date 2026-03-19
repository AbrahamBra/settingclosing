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
      description: 'Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B — Lancement',
            description: 'Mois 1 : setter dédié, setup outils, ciblage, premiers messages et RDV. Forfait tout inclus.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 500,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B — Abonnement',
            description: 'Pipeline à plein régime : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 1000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setup Nurturing',
            description: 'Construction sur-mesure du workflow de scoring, nurturing et routing pour transformer une base de leads existante en RDV qualifiés.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 1500,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://challengerslab.fr/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien coûte le setting commercial externalisé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '500 € le premier mois (lancement), puis 1 000 €/mois + une prime par RDV livré. Sans engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quand voit-on les premiers RDV qualifiés ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dès la première semaine. Le setter envoie des messages dès le démarrage, pas après un audit de 30 jours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les messages sont-ils envoyés sans validation ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Chaque message est validé par un humain avant envoi. Aucune automatisation ne contacte vos prospects à votre place.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que se passe-t-il si le service ne fonctionne pas ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Moins de 5 RDV qualifiés livrés dans le mois ? Le mois suivant est offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence avec un freelance SDR ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un freelance SDR envoie des messages. ChallengersLab combine un setter dédié, un système IA qui détecte les signaux d'achat, et une méthode qui s'affine chaque semaine.",
          },
        },
      ],
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
