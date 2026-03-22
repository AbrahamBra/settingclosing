import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { DarkCard } from '@/components/ui/DarkCard'
import { GrowthLadder } from '@/components/GrowthLadder'
import { PipelineVisual } from '@/components/PipelineVisual'
import { PricingComparison } from '@/components/PricingComparison'
import { FAQ } from '@/components/FAQ'
import { SmartContactForm } from '@/components/SmartContactForm'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tarifs — Prospection LinkedIn B2B à partir de 790\u00a0€/mois | SettingClosing',
  description:
    'Tarifs prospection LinkedIn externalisée pour solopreneurs : à partir de 790\u00a0€/mois, setup offert, zéro engagement. Simulez votre ROI.',
  alternates: {
    canonical: 'https://www.setting.live/tarifs',
    languages: {
      'fr': 'https://www.setting.live/tarifs',
      'x-default': 'https://www.setting.live/tarifs',
    },
  },
  openGraph: {
    title: 'Tarifs — Prospection LinkedIn B2B à partir de 790\u00a0€/mois | SettingClosing',
    description: 'Tarifs prospection LinkedIn externalisée : setup offert, à partir de 790\u00a0€/mois, zéro engagement.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs — Prospection LinkedIn B2B à partir de 790\u00a0€/mois | SettingClosing',
  description:
    'Tarifs prospection LinkedIn externalisée pour solopreneurs : à partir de 790\u00a0€/mois, setup offert, zéro engagement. Simulez votre ROI.',
  url: 'https://www.setting.live/tarifs',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
      { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://www.setting.live/tarifs' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Offer',
        position: 1,
        name: 'Setting LinkedIn',
        description: 'Votre pipeline LinkedIn, clé en main. Setter dédié, ciblage ICP, messages co-rédigés avec IA, validation humaine. Prime par RDV : 50 € (ticket < 5k €), 150 € (5-15k €), 250 € (> 15k €).',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '790',
            priceCurrency: 'EUR',
            unitText: 'MONTH',
            description: 'Mois 1 à 3 : même tarif sur toute la durée',
          },
        ],
      },
      {
        '@type': 'Offer',
        position: 2,
        name: 'Setting téléphonique — Demi-journée',
        description: 'Qualification téléphonique des leads entrants. Routing intelligent selon niveau de maturité. Prime par RDV : 25 € (ticket < 5k €), 100 € (5-15k €), 200 € (> 15k €).',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '175',
            priceCurrency: 'EUR',
            unitText: 'HALF_DAY',
            description: '175 €/demi-journée, facturé au réel.',
          },
        ],
      },
      {
        '@type': 'Offer',
        position: 3,
        name: 'Setting Newsletter',
        description: 'Newsletter thought leadership opérée par IA. 4 contenus segmentés par maturité toutes les 2 semaines, scoring comportemental, routing automatique des leads chauds. Prime par RDV : 50 € (ticket < 5k €), 150 € (5-15k €), 250 € (> 15k €).',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '830',
            priceCurrency: 'EUR',
            unitText: 'MONTH',
            description: '830 €/mois × 3 mois',
          },
        ],
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le Setting LinkedIn ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '790 €/mois, setup offert. Même tarif sur les 3 premiers mois. Sans engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le setup est vraiment offert ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Le cadrage ICP, la rédaction des séquences et le paramétrage des outils sont inclus dans le premier mois. Vous ne payez que l\'abonnement mensuel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le tarif du Setting téléphonique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '175 €/demi-journée, facturé au réel selon votre flux de leads entrants. Zéro setup fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le Setting Newsletter ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '830 €/mois × 3 mois, tout inclus. Conception, rédaction IA dans votre voix, envoi, scoring comportemental et routing automatique des leads chauds.',
      },
    },
    {
      '@type': 'Question',
      name: 'Y a-t-il un engagement ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Chaque offre est résiliable à tout moment. Garantie RDV sur chaque phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je combiner plusieurs phases ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. La plupart de nos clients commencent par LinkedIn, ajoutent le téléphonique quand le flux monte, puis activent la newsletter pour leur base existante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel ROI puis-je attendre ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avec un ticket moyen de 5 000 € et 8 RDV/mois, le ROI dépasse 5× dès le 2e mois. Simulez votre pipeline directement sur la page.',
      },
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TarifsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav
          aria-label="Fil d&apos;Ariane"
          className="bg-bg-primary border-b border-white/[0.06]"
        >
          <div className="container-max py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-text-primary font-medium" aria-current="page">
                Tarifs
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="tarifs-hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Tarifs
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Choisis ton niveau de croissance
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Chaque phase se débloque quand ton business est prêt. Commence par LinkedIn, ajoute le reste quand tu en as besoin.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── GrowthLadder ─────────────────────────────────────────────────── */}
        <GrowthLadder />

        {/* ── PipelineVisual ───────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto">
            <PipelineVisual />
          </div>
        </section>

        {/* ── PricingComparison ─────────────────────────────────────────────── */}
        <PricingComparison />

        {/* ── Pourquoi ce prix ──────────────────────────────────────────────── */}
        <section id="pourquoi-ce-prix" className="bg-bg-primary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 text-center">
                Transparence
              </p>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-6 text-center">
                Pourquoi ce prix
              </h2>
              <div className="space-y-4">
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">Un système qui s&apos;améliore</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Base de connaissance dédiée, feedback setter, expertise marché enrichie chaque semaine. Mois 3 n&apos;a rien à voir avec mois 1.
                  </p>
                </DarkCard>
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">IA + humain, pas IA toute seule</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    L&apos;IA détecte et rédige. Ton setter pilote par la data, choisit les angles, et itère le système chaque semaine.
                  </p>
                </DarkCard>
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">Zéro engagement, zéro risque</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Garantie RDV sur chaque offre. Tu peux arrêter à tout moment. On gagne quand tu gagnes.
                  </p>
                </DarkCard>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <FAQ />

        {/* ── Smart Contact Form ────────────────────────────────────────────── */}
        <Suspense fallback={null}>
          <SmartContactForm />
        </Suspense>

      </main>
      <Footer />
    </>
  )
}
