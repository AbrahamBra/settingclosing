import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { TeamBanner } from '@/components/TeamBanner'
import { FAQ } from '@/components/FAQ'
import { GrowthJourney } from '@/components/GrowthJourney'
import { PipelineVisual } from '@/components/PipelineVisual'
import { OnboardingTimeline } from '@/components/OnboardingTimeline'

const CursorGlowClient = dynamic(() => import('@/components/CursorGlowClient').then(m => m.CursorGlowClient))

export const metadata: Metadata = {
  title: 'SettingClosing — Prospection LinkedIn IA pour solopreneurs',
  description:
    'Externalise ta prospection LinkedIn B2B : setter dédié, ciblage par signaux d\u2019achat IA, RDV qualifiés dès la première semaine. À partir de 790\u00a0€/mois.',
  alternates: {
    canonical: 'https://www.setting.live',
    languages: {
      'fr': 'https://www.setting.live',
      'x-default': 'https://www.setting.live',
    },
  },
  openGraph: {
    title: 'SettingClosing — Prospection LinkedIn IA pour solopreneurs',
    description: 'Externalise ta prospection LinkedIn B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SettingClosing — Prospection LinkedIn IA pour solopreneurs',
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
      description: 'Prospection LinkedIn externalisée pour solopreneurs et fondateurs B2B. Méthode signal-based, setter dédié, IA + validation humaine.',
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
            name: 'Setting téléphonique — Demi-journée',
            description: 'Qualification téléphonique des leads entrants : chaque lead est appelé, scoré et routé. Facturé au réel par demi-journée consacrée. Prime par RDV : 25 € (< 5k €), 100 € (5-15k €), 200 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-telephonique',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 175,
              priceCurrency: 'EUR',
              unitText: 'HALF_DAY',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting Newsletter',
            description: 'Newsletter thought leadership opérée par IA. 4 contenus segmentés par maturité, scoring comportemental, routing automatique. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-newsletter',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 830,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
              description: 'Construction : 830 €/mois × 3 mois',
            },
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
      name: '790\u00a0€/mois c\u2019est beaucoup pour un solopreneur, non\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C\u2019est 8-10h/semaine que tu récupères. Si ton taux horaire dépasse 80\u00a0€, c\u2019est rentable dès le premier mois. Et avec la garantie RDV, le risque est de notre côté.',
      },
    },
    {
      '@type': 'Question',
      name: 'Je peux le faire moi-même avec Lemlist/LaGrowthMachine\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, si tu as 5-8h/semaine et l\u2019expertise IA pour personnaliser chaque message. On combine détection de signaux + rédaction IA + validation humaine. C\u2019est ça qui fait la différence entre 2\u00a0% et 8\u00a0% de taux de réponse.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\u2019est quoi la différence avec une agence de prospection\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le prix (3-5× moins), l\u2019engagement (aucun), et la méthode (IA + humain vs. templates en masse). Et on est payés au résultat avec les bonuses RDV.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps avant les premiers RDV\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moins de 7 jours. On commence par tes clients idéaux et on itère chaque semaine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Je n\u2019ai pas de base email, je peux quand même\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Phase 1 (LinkedIn) ne nécessite aucune base. On cible directement les prospects via les signaux d\u2019achat. La newsletter c\u2019est pour plus tard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de clients tu prends par mois\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5 max. Chaque client a un setter dédié — on ne dilue pas la qualité. C\u2019est pour ça qu\u2019on peut garantir les résultats.',
      },
    },
    {
      '@type': 'Question',
      name: 'Et si ça marche pas\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zéro engagement. Tu peux arrêter à tout moment. Et la garantie RDV couvre ton risque\u00a0: si on ne délivre pas, on continue gratuitement.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\u2019est quoi les bonuses RDV\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un système de rémunération au résultat. Plus on génère de RDV, plus notre part variable augmente. Ça aligne nos intérêts\u00a0: on gagne quand tu gagnes.',
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
        <GrowthJourney />

        <PipelineVisual variant="homepage" />
        <OnboardingTimeline />
        <SocialProof />

        <TeamBanner />
        <FAQ />

        {/* Bandeau rareté */}
        <div className="section-padding !py-8">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center bg-accent/5 border border-accent/20 rounded-xl px-6 py-4">
              <p className="text-sm text-text-secondary">
                On accompagne 5 clients max par mois.{' '}
                <span className="font-semibold text-accent">2 places disponibles en avril.</span>
              </p>
            </div>
          </div>
        </div>

        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
