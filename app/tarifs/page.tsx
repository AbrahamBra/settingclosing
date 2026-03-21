import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { DarkCard } from '@/components/ui/DarkCard'
import { PricingPicker } from '@/components/PricingPicker'
import { PricingComparison } from '@/components/PricingComparison'
import { SmartContactForm } from '@/components/SmartContactForm'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tarifs setting commercial externalisé | Setting',
  description:
    'Prix du setting commercial externalisé : LinkedIn 490 € + 790 €/mois, téléphonique 490 € + 350 €/jour, Newsletter 2 490 € + 990 €/mois ×3.',
  alternates: {
    canonical: 'https://www.setting.live/tarifs',
    languages: {
      'fr': 'https://www.setting.live/tarifs',
      'x-default': 'https://www.setting.live/tarifs',
    },
  },
  openGraph: {
    title: 'Tarifs setting commercial externalisé | Setting',
    description: 'Prix du setting commercial externalisé : 3 offres adaptées à votre situation. Garantie 5 RDV minimum, sans engagement.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs setting commercial externalisé | Setting',
  description:
    'Prix du setting commercial externalisé : Setting LinkedIn 490 € + 790 €/mois, Setting téléphonique 490 € + 350 €/jour, Setting Newsletter 2 490 € + 990 €/mois ×3.',
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
            price: '490',
            priceCurrency: 'EUR',
            description: 'Setup : cadrage ICP, outils, séquences',
          },
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
        name: 'Setting téléphonique',
        description: 'Qualification téléphonique des leads entrants. Routing intelligent selon niveau de maturité. Prime par RDV : 25 € (ticket < 5k €), 100 € (5-15k €), 200 € (> 15k €).',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '490',
            priceCurrency: 'EUR',
            description: 'Setup : script, formation, CRM',
          },
          {
            '@type': 'PriceSpecification',
            price: '350',
            priceCurrency: 'EUR',
            unitText: 'DAY',
            description: '350 €/jour, facturé au réel par demi-journée consacrée. Prime par RDV : 25 € (< 5k €), 100 € (5-15k €), 200 € (> 15k €).',
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
            price: '2490',
            priceCurrency: 'EUR',
            description: 'Construction : interview voix, Skill IA, scoring, config (~2 semaines)',
          },
          {
            '@type': 'PriceSpecification',
            price: '990',
            priceCurrency: 'EUR',
            unitText: 'MONTH',
            description: '3 mois d\'opération + prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €)',
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
        text: '490 € de setup, puis 790 €/mois — même tarif sur les 3 premiers mois. Prime par RDV selon votre ticket moyen : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €). Sans engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pourquoi un setup fee ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le setup couvre le travail de cadrage avant le premier message : définition de votre ICP, rédaction des séquences, paramétrage des outils et des signaux d\'achat. Ce travail est nécessaire pour démarrer vite et bien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le tarif du Setting téléphonique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '350 €/jour, facturé au réel par demi-journée consacrée. Le setup de 490 € couvre le script, la formation et la configuration CRM. Prime par RDV qualifié : 25 € (ticket < 5k €), 100 € (5-15k €), 200 € (> 15k €).',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le Setting Newsletter ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2 490 € pour construire le système (interview voix, Skill IA, scoring, segmentation), puis 990 €/mois pendant 3 mois d\'opération. 4 contenus segmentés toutes les 2 semaines, dans la voix du dirigeant. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €). Garantie proportionnelle à la taille de base.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment est calculée la prime par RDV ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La prime dépend de votre ticket moyen : moins de 5 000 € → 50 €/RDV, entre 5 000 et 15 000 € → 150 €/RDV, plus de 15 000 € → 250 €/RDV. Pour le Setting téléphonique : 25 €, 100 € et 200 € respectivement.',
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il un engagement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Le Setting LinkedIn est sans engagement, résiliable à tout moment. Si nous n'atteignons pas 5 RDV qualifiés dans le mois, le mois suivant est offert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je combiner plusieurs offres ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. La plupart de nos clients commencent par le Setting LinkedIn, ajoutent le Setting téléphonique avec le volume horaire adapté à leur flux, puis activent le Setting Newsletter pour leur base existante. La newsletter se combine aussi directement avec le Setting téléphonique pour une délégation complète.",
      },
    },
  ],
}

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Combien coûte le Setting LinkedIn\u00a0?',
    a: '490\u00a0€ de setup, puis 790\u00a0€/mois \u2014 même tarif sur les 3 premiers mois. Prime par RDV selon votre ticket moyen\u00a0: 50\u00a0€ (<\u00a05k\u00a0€), 150\u00a0€ (5-15k\u00a0€), 250\u00a0€ (>\u00a015k\u00a0€). Sans engagement.',
  },
  {
    q: 'Pourquoi un setup fee\u00a0?',
    a: 'Le setup couvre le travail de cadrage avant le premier message\u00a0: définition de votre ICP, rédaction des séquences, paramétrage des outils et des signaux d\u2019achat. Ce travail est nécessaire pour démarrer vite et bien.',
  },
  {
    q: 'Comment fonctionne le tarif du Setting téléphonique\u00a0?',
    a: '350\u00a0€/jour, facturé au réel par demi-journée consacrée. Le setup de 490\u00a0€ couvre le script, la formation et la configuration CRM. Prime par RDV qualifié\u00a0: 25\u00a0€ (ticket\u00a0<\u00a05k\u00a0€), 100\u00a0€ (5-15k\u00a0€), 200\u00a0€ (>\u00a015k\u00a0€).',
  },
  {
    q: 'Comment fonctionne le Setting Newsletter\u00a0?',
    a: '2\u00a0490\u00a0€ pour construire le système (interview voix, Skill IA, scoring, segmentation), puis 990\u00a0€/mois pendant 3 mois d\u2019opération. 4 contenus segmentés toutes les 2 semaines, dans la voix du dirigeant. Prime par RDV\u00a0: 50\u00a0€ (<\u00a05k\u00a0€), 150\u00a0€ (5-15k\u00a0€), 250\u00a0€ (>\u00a015k\u00a0€). Garantie proportionnelle à la taille de base.',
  },
  {
    q: 'Comment est calculée la prime par RDV\u00a0?',
    a: 'La prime dépend de votre ticket moyen\u00a0: moins de 5\u00a0000\u00a0€ \u2192 50\u00a0€/RDV, entre 5\u00a0000 et 15\u00a0000\u00a0€ \u2192 150\u00a0€/RDV, plus de 15\u00a0000\u00a0€ \u2192 250\u00a0€/RDV. Pour le Setting téléphonique\u00a0: 25\u00a0€, 100\u00a0€ et 200\u00a0€ respectivement.',
  },
  {
    q: 'Y a-t-il un engagement\u00a0?',
    a: 'Non. Le Setting LinkedIn est sans engagement, résiliable à tout moment. Si nous n\u2019atteignons pas 5\u00a0RDV qualifiés dans le mois, le mois suivant est offert.',
  },
  {
    q: 'Puis-je combiner plusieurs offres\u00a0?',
    a: 'Oui. La plupart de nos clients commencent par le Setting LinkedIn, ajoutent le Setting téléphonique avec le volume horaire adapté à leur flux, puis activent le Setting Newsletter pour leur base existante. La newsletter se combine aussi directement avec le Setting téléphonique pour une délégation complète.',
  },
]

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
                Un prix clair. Un ROI mesurable.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Fixe transparent + prime variable par RDV. Simulez votre retour sur investissement en 30 secondes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PricingPicker ─────────────────────────────────────────────────── */}
        <PricingPicker />

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
                Pourquoi c&apos;est moins cher qu&apos;une agence
              </h2>
              <div className="space-y-4">
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">Pas de structure lourde</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    3 personnes, pas de bureau, pas de commercial. Le budget qui irait dans des locaux et un BDR senior va directement dans votre pipeline.
                  </p>
                </DarkCard>
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">L&apos;IA réduit le travail manuel</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Le ciblage, le scoring et la détection des signaux d&apos;achat sont automatisés. Le setter passe son temps sur ce qui compte : les conversations, pas le scraping.
                  </p>
                </DarkCard>
                <DarkCard className="p-6">
                  <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">Le variable aligne nos intérêts</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    La prime par RDV fait qu&apos;on gagne plus quand vous gagnez plus. Une agence classique facture 2 000 à 4 000 €/mois quel que soit le résultat.
                  </p>
                </DarkCard>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq-tarifs" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-10 text-center">
                Questions fréquentes
              </h2>
            </ScrollReveal>
            <dl className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8">
                    <dt className="font-sans font-semibold text-text-primary text-base mb-3">{faq.q}</dt>
                    <dd className="font-sans text-text-secondary text-sm leading-relaxed m-0">{faq.a}</dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Smart Contact Form ────────────────────────────────────────────── */}
        <Suspense fallback={null}>
          <SmartContactForm />
        </Suspense>

      </main>
      <Footer />
    </>
  )
}
