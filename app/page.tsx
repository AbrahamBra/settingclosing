import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { TeamBanner } from '@/components/TeamBanner'
import { FAQ } from '@/components/FAQ'

const SituationPicker = dynamic(() => import('@/components/SituationPicker').then(m => m.SituationPicker))
const CursorGlowClient = dynamic(() => import('@/components/CursorGlowClient').then(m => m.CursorGlowClient))

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | Setting',
  description:
    'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. Dès 490 € + 790 €/mois.',
  alternates: {
    canonical: 'https://www.setting.live',
    languages: {
      'fr': 'https://www.setting.live',
      'x-default': 'https://www.setting.live',
    },
  },
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
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.setting.live/#website',
      url: 'https://www.setting.live',
      name: 'Setting',
      inLanguage: 'fr-FR',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.setting.live/ressources?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.setting.live/#business',
      name: 'Setting',
      url: 'https://www.setting.live',
      logo: 'https://www.setting.live/opengraph-image',
      description: 'Setting LinkedIn externalisé pour fondateurs, freelances et solopreneurs B2B. Méthode signal-based, setter dédié, IA + validation humaine.',
      sameAs: [
        'https://www.linkedin.com/company/challengerslab',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'a.brakha@challengerslab.com',
        contactType: 'sales',
        availableLanguage: 'French',
      },
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero-description', '.faq-answer'],
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
            description: 'Pipeline LinkedIn clé en main : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-linkedin',
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
            name: 'Setting téléphonique — Setup',
            description: 'Script, formation, configuration CRM et routing pour la qualification téléphonique.',
            url: 'https://www.setting.live/methode/setting-telephonique',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 490,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting téléphonique — Journée',
            description: 'Qualification téléphonique des leads entrants : chaque lead est appelé, scoré et routé. Facturé au réel par demi-journée consacrée. Prime par RDV : 25 € (< 5k €), 100 € (5-15k €), 200 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-telephonique',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 350,
              priceCurrency: 'EUR',
              unitText: 'DAY',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting Newsletter',
            description: 'Newsletter thought leadership opérée par IA. 4 contenus segmentés par maturité, scoring comportemental, routing automatique. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-newsletter',
            priceSpecification: [
              {
                '@type': 'PriceSpecification',
                price: 2490,
                priceCurrency: 'EUR',
                valueAddedTaxIncluded: false,
                description: 'Construction : interview voix, Skill IA, scoring, config',
              },
              {
                '@type': 'PriceSpecification',
                price: 990,
                priceCurrency: 'EUR',
                unitText: 'MONTH',
                valueAddedTaxIncluded: false,
                description: '3 mois d\'opération',
              },
            ],
          },
        ],
      },
    },
  ],
}

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.setting.live/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le setting commercial externalisé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3 offres selon votre situation. Setting LinkedIn : 490 € de setup + 790 €/mois (même tarif sur les 3 premiers mois). Setting téléphonique : 490 € de setup + 350 €/jour (facturé au réel). Setting Newsletter : 2 490 € + 990 €/mois × 3. Prime par RDV sur chaque offre.',
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
        text: "Un freelance SDR envoie des messages. Setting combine un setter dédié, un système IA qui détecte les signaux d'achat, et une méthode qui s'affine chaque semaine.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <CursorGlowClient />
      <Navbar />
      <main>
        <Hero />
        <SituationPicker />
        <TeamBanner />
        <SocialProof />
        <FAQ />
        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
