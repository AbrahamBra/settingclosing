import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { PipelineVisual } from '@/components/PipelineVisual'
import { ToolMarquee } from '@/components/ToolMarquee'
import { CombinedSimulator } from '@/components/CombinedSimulator'
import { TeamStrip } from '@/components/TeamStrip'

const CursorGlowClient = dynamic(() => import('@/components/CursorGlowClient').then(m => m.CursorGlowClient))

export const metadata: Metadata = {
  title: 'Setting LinkedIn B2B | RDV qualifiés dès la semaine 1 — Setting',
  description:
    'Service de setting LinkedIn pour solopreneurs et fondateurs B2B : setter dédié, ciblage par signaux d\u2019achat IA, RDV qualifiés dès la première semaine. À partir de 790\u00a0€/mois.',
  alternates: {
    canonical: 'https://www.setting.live',
    languages: {
      'fr': 'https://www.setting.live',
      'x-default': 'https://www.setting.live',
    },
  },
  openGraph: {
    title: 'Setting LinkedIn B2B | Prospection externalisée — Setting.live',
    description: 'Service de setting LinkedIn pour solopreneurs B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Setting LinkedIn B2B — Prospection externalisée pour solopreneurs',
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
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.setting.live/icon.png',
        width: 512,
        height: 512,
      },
      description: 'Prospection LinkedIn externalisée pour solopreneurs et fondateurs B2B. Méthode signal-based, setter dédié, IA + validation humaine.',
      alternateName: 'ChallengersLab',
      sameAs: [
        'https://www.linkedin.com/company/challengerslab',
        'https://www.linkedin.com/in/abraham-brakha',
        'https://www.challengerslab.com',
      ],
      foundingDate: '2024',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 3,
      },
      knowsAbout: [
        'prospection LinkedIn B2B',
        'setting commercial',
        'qualification de leads',
        'automatisation IA commerciale',
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
              unitText: 'DAY',
              description: '175 EUR par demi-journée',
              valueAddedTaxIncluded: false,
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
      name: 'Je n\u2019ai pas de base email, je peux quand m\u00eame\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pas besoin. Le Setting LinkedIn cible directement les prospects via les signaux d\u2019achat sur LinkedIn. Aucune base email requise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de clients tu prends par mois\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5 max. Chaque client a un setter dédié, on ne dilue pas la qualité. C\u2019est pour ça qu\u2019on peut garantir les résultats.',
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
        text: 'Une prime variable par RDV g\u00e9n\u00e9r\u00e9, index\u00e9e sur ton ticket moyen. 50\u00a0\u20ac par RDV sous 5k\u00a0\u20ac, 150\u00a0\u20ac entre 5 et 15k, 250\u00a0\u20ac au-dessus. On gagne quand tu gagnes.',
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
        <noscript>
          <div className="section-padding bg-bg-primary">
            <div className="container-max max-w-3xl mx-auto text-center">
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-6 leading-tight">
                Tu as une offre qui marche. Il te manque un pipeline.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                On te trouve des clients sur LinkedIn. Setter dédié, IA signal-based, validation humaine. Premiers RDV en 7 jours.
              </p>
            </div>
          </div>
        </noscript>

        <ToolMarquee />

        {/* Showcase offre phare : pipeline visuel complet */}
        <section id="methode" className="section-padding bg-bg-primary scroll-mt-20">
          <div className="container-max max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: 'rgba(167,139,250,0.1)', color: '#A78BFA', border: '1px solid rgba(167,139,250,0.2)' }}
              >
                Setting LinkedIn · Notre offre phare
              </span>
            </div>
            <PipelineVisual />
            <div className="mt-10 text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-secondary border border-white/[0.06]">
                <span className="text-2xl font-bold text-accent tabular-nums">790&nbsp;&euro;</span>
                <span className="text-text-muted text-sm">/mois &middot; setup offert &middot; sans engagement</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A78BFA] text-[#0D0B07] font-semibold text-sm hover:bg-[#B89CFC] transition-colors"
                >
                  D&eacute;marrer ma prospection &rarr;
                </a>
                <a
                  href="/methode/setting-linkedin"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-text-secondary text-sm hover:text-text-primary transition-colors border border-white/[0.06]"
                >
                  Voir la m&eacute;thode en d&eacute;tail
                </a>
              </div>
            </div>
          </div>
        </section>

        <CombinedSimulator />

        <TeamStrip />

        <FAQ />

        {/* Cross-sell ChallengersLab */}
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#1A1714] border-t border-accent/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Le probl&egrave;me d&apos;apr&egrave;s
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
              Trop de RDV, pas assez de bras&nbsp;?
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-lg mx-auto">
              Quand le pipeline tourne, c&apos;est la delivery qui bloque. Lib&egrave;re du temps, d&eacute;l&egrave;gue, automatise. ChallengersLab t&apos;aide &agrave; scaler sans recruter.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <a
                href="https://www.challengerslab.com/ia"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl p-5 border border-[#A78BFA]/15 hover:border-[#A78BFA]/30 hover:bg-[#A78BFA]/[0.03] transition-all"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#A78BFA]/10 mb-3">
                  <span className="text-[#A78BFA] text-base">&#x26A1;</span>
                </span>
                <p className="font-semibold text-text-primary text-sm mb-1">Automatisation IA</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Tu passes plus de temps &agrave; produire qu&rsquo;&agrave; vendre. On automatise ta delivery.
                </p>
              </a>
              <a
                href="https://www.challengerslab.com/sales"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl p-5 border border-[#FBBF24]/15 hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/[0.03] transition-all"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FBBF24]/10 mb-3">
                  <span className="text-[#FBBF24] text-base">&#x1F3AF;</span>
                </span>
                <p className="font-semibold text-text-primary text-sm mb-1">Coaching closing</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Les RDV tombent mais le taux de closing stagne. 2h/semaine pour structurer ton process.
                </p>
              </a>
              <div className="rounded-xl p-5 border border-[#34D399]/15 opacity-70">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#34D399]/10 mb-3">
                  <span className="text-[#34D399] text-base">&#x1F9E0;</span>
                </span>
                <p className="font-semibold text-text-primary text-sm mb-1">Encodage expertise</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Ton savoir-faire, encod&eacute; dans un syst&egrave;me IA. D&eacute;l&egrave;gue sans perdre en qualit&eacute;.
                </p>
                <span className="inline-block mt-2 text-[10px] font-medium text-text-muted bg-white/[0.06] px-2 py-0.5 rounded-full">
                  Bient&ocirc;t
                </span>
              </div>
              <div className="rounded-xl p-5 border border-[#F87171]/15 opacity-70">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#F87171]/10 mb-3">
                  <span className="text-[#F87171] text-base">&#x1F4C8;</span>
                </span>
                <p className="font-semibold text-text-primary text-sm mb-1">Growth ops</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  CRM, reporting, dashboards. L&rsquo;infra commerciale qui manque aux solopreneurs.
                </p>
                <span className="inline-block mt-2 text-[10px] font-medium text-text-muted bg-white/[0.06] px-2 py-0.5 rounded-full">
                  Bient&ocirc;t
                </span>
              </div>
            </div>
          </div>
        </section>

        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
