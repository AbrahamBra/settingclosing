import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tarifs setting commercial externalisé | Setting.live',
  description:
    'Prix du setting commercial externalisé : LinkedIn dès 490 € + 500 €/mois, téléphonique dès 690 €/mois, Nurturing 1 990 €. Sans engagement.',
  alternates: {
    canonical: 'https://www.setting.live/tarifs',
  },
  openGraph: {
    title: 'Tarifs setting commercial externalisé | Setting.live',
    description: 'Prix du setting commercial externalisé : 3 offres adaptées à votre situation. Garantie 5 RDV minimum, sans engagement.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs setting commercial externalisé | Setting.live',
  description:
    'Prix du setting commercial externalisé : Setting LinkedIn dès 490 € + 500 €/mois, Setting téléphonique dès 690 €/mois, Setup Nurturing 1 990 €. Garantie 5 RDV minimum.',
  url: 'https://www.setting.live/tarifs',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting.live',
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
        description: 'Votre pipeline LinkedIn, clé en main. Setter dédié, ciblage ICP, messages co-rédigés avec IA, validation humaine. Prime de 50 à 250 €/RDV selon le ticket moyen.',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '490',
            priceCurrency: 'EUR',
            description: 'Setup : cadrage ICP, outils, séquences',
          },
          {
            '@type': 'PriceSpecification',
            price: '500',
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
        description: 'Qualification téléphonique des leads entrants. Routing intelligent selon niveau de maturité. Prime de 25 à 200 €/RDV selon le ticket moyen.',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '290',
            priceCurrency: 'EUR',
            description: 'Setup : script, formation, CRM',
          },
          {
            '@type': 'PriceSpecification',
            price: '690',
            priceCurrency: 'EUR',
            unitText: 'MONTH',
            description: 'Standalone — ou 490 €/mois en complément du Setting LinkedIn. Prime de 25 à 200 €/RDV selon le ticket moyen.',
          },
        ],
      },
      {
        '@type': 'Offer',
        position: 3,
        name: 'Setup Nurturing',
        description: 'Faites remonter vos leads chauds et créez des revenus low ticket sur votre base existante. Scoring comportemental, séquences email/LinkedIn, workflow automatisé. Prime de 50 à 250 €/RDV généré selon le ticket moyen.',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '1990',
            priceCurrency: 'EUR',
            description: 'Construction du système (~4 semaines)',
          },
          {
            '@type': 'PriceSpecification',
            price: '490',
            priceCurrency: 'EUR',
            unitText: 'MONTH',
            description: '3 mois d\'optimisation + prime de 50 à 250 €/RDV généré selon le ticket moyen',
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
        text: '490 € de setup initial, puis 500 €/mois — le même tarif sur les 3 premiers mois, sans augmentation. Une prime de 50 à 250 €/RDV s\'applique selon votre ticket moyen. Sans engagement.',
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
      name: 'Le Setting téléphonique est-il moins cher en bundle ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. En standalone, le Setting téléphonique est à 690 €/mois. En complément du Setting LinkedIn, il passe à 490 €/mois. Le setup de 290 € s\'applique dans les deux cas. Une prime de 25 à 200 €/RDV qualifié s\'ajoute selon votre ticket moyen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le Setup Nurturing ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1 990 € pour construire le système (scoring, séquences, workflows), puis 490 €/mois pendant 3 mois d\'optimisation avec une prime de 50 à 250 € par RDV généré selon votre ticket moyen. Après 3 mois, le système tourne en autonomie.',
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
        text: "Oui. La plupart de nos clients commencent par le Setting LinkedIn, ajoutent le Setting téléphonique en bundle à tarif réduit, puis activent le Nurturing pour leur base existante. On construit le dispositif adapté à votre situation.",
      },
    },
  ],
}

// ─── Offers Data ──────────────────────────────────────────────────────────────

const offers = [
  {
    id: 'setting-linkedin',
    color: '#A78BFA',
    colorRgb: '167,139,250',
    eyebrow: 'Setting LinkedIn',
    headline: 'Votre pipeline LinkedIn, cl\u00e9 en main',
    pricingPhases: [
      { label: 'Setup', amount: '490\u00a0\u20ac', suffix: 'one-shot', detail: 'Cadrage ICP, setup outils, r\u00e9daction s\u00e9quences' },
      { label: 'Mois 1 \u00e0 3', amount: '500\u00a0\u20ac', suffix: '/ mois', detail: 'M\u00eame tarif sur toute la dur\u00e9e' },
    ],
    bonus: 'Prime de 50 \u00e0 250\u00a0\u20ac/RDV selon le ticket moyen',
    features: [
      'Setter d\u00e9di\u00e9 \u00e0 votre compte',
      'Ciblage ICP + signaux d\u2019achat',
      'Messages co-r\u00e9dig\u00e9s avec IA',
      'Validation humaine avant chaque envoi',
      'Reporting hebdomadaire',
    ],
    guarantee: 'Moins de 5\u00a0RDV qualifi\u00e9s\u00a0? Le mois suivant est offert.',
    cta: 'D\u00e9marrer le setting',
    highlight: true,
  },
  {
    id: 'setting-telephonique',
    color: '#FBBF24',
    colorRgb: '251,191,36',
    eyebrow: 'Setting t\u00e9l\u00e9phonique',
    headline: 'Vos leads qualifi\u00e9s par t\u00e9l\u00e9phone',
    pricingPhases: [
      { label: 'Setup', amount: '290\u00a0\u20ac', suffix: 'one-shot', detail: 'Script, formation, config CRM' },
      { label: 'Standalone', amount: '690\u00a0\u20ac', suffix: '/ mois', detail: 'Qualification de vos leads entrants. 490\u00a0\u20ac/mois en bundle.' },
    ],
    bonus: 'Prime de 25 \u00e0 200\u00a0\u20ac/RDV qualifi\u00e9 selon le ticket moyen',
    features: [
      'Qualification t\u00e9l\u00e9phonique de chaque lead',
      'Routing : chaud \u2192 RDV / ti\u00e8de \u2192 newsletter / froid \u2192 nurturing',
      'Script co-construit avec votre \u00e9quipe',
      'Reporting par lead avec scoring',
    ],
    guarantee: null,
    cta: 'Obtenir un devis',
    highlight: false,
  },
  {
    id: 'setup-nurturing',
    color: '#C87533',
    colorRgb: '200,117,51',
    eyebrow: 'Setup Nurturing',
    headline: 'Vos leads chauds en priorité. Des revenus sur le reste.',
    pricingPhases: [
      { label: 'Construction', amount: '1\u00a0990\u00a0\u20ac', suffix: 'one-shot', detail: 'Scoring, s\u00e9quences, workflows. ~4 semaines.' },
      { label: 'Optimisation', amount: '490\u00a0\u20ac', suffix: '/ mois \u00d7 3', detail: 'Affinage continu, autonomie apr\u00e8s M3' },
    ],
    bonus: 'Prime de 50 \u00e0 250\u00a0\u20ac/RDV g\u00e9n\u00e9r\u00e9 selon le ticket moyen',
    features: [
      'Scoring comportemental de votre base',
      'S\u00e9quences email/LinkedIn personnalis\u00e9es',
      'Workflow automatis\u00e9 de routing',
      'Le syst\u00e8me s\u2019affine sur 3 mois',
    ],
    guarantee: null,
    cta: 'Construire mon syst\u00e8me',
    highlight: false,
  },
]

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Combien co\u00fbte le Setting LinkedIn\u00a0?',
    a: '490\u00a0\u20ac de setup, puis 500\u00a0\u20ac/mois \u2014 le m\u00eame tarif sur les 3 premiers mois, sans augmentation. Une prime de 50 \u00e0 250\u00a0\u20ac/RDV s\u2019applique selon votre ticket moyen. Sans engagement.',
  },
  {
    q: 'Pourquoi un setup fee\u00a0?',
    a: 'Le setup couvre le travail de cadrage avant le premier message\u00a0: d\u00e9finition de votre ICP, r\u00e9daction des s\u00e9quences, param\u00e9trage des outils et des signaux d\u2019achat. Ce travail est n\u00e9cessaire pour d\u00e9marrer vite et bien.',
  },
  {
    q: 'Le Setting t\u00e9l\u00e9phonique est-il moins cher en bundle\u00a0?',
    a: 'Oui. En standalone, il est \u00e0 690\u00a0\u20ac/mois. En compl\u00e9ment du Setting LinkedIn, il passe \u00e0 490\u00a0\u20ac/mois. Le setup de 290\u00a0\u20ac s\u2019applique dans les deux cas. Une prime de 25 \u00e0 200\u00a0\u20ac/RDV qualifi\u00e9 s\u2019ajoute selon votre ticket moyen.',
  },
  {
    q: 'Comment fonctionne le Setup Nurturing\u00a0?',
    a: '1\u00a0990\u00a0\u20ac pour construire le syst\u00e8me (scoring, s\u00e9quences, workflows), puis 490\u00a0\u20ac/mois pendant 3 mois d\u2019optimisation avec une prime de 50 \u00e0 250\u00a0\u20ac par RDV g\u00e9n\u00e9r\u00e9 selon votre ticket moyen. Apr\u00e8s 3 mois, le syst\u00e8me tourne en autonomie.',
  },
  {
    q: 'Comment est calcul\u00e9e la prime par RDV\u00a0?',
    a: 'La prime d\u00e9pend de votre ticket moyen\u00a0: plus votre panier moyen est \u00e9lev\u00e9, plus la prime par RDV est haute. Le montant exact varie aussi selon la pr\u00e9sence de lead magnets actifs et d\u2019une strat\u00e9gie de contenu \u2014 un contexte favorable g\u00e9n\u00e8re plus de volume, ce qui influence la fourchette.',
  },
  {
    q: 'Y a-t-il un engagement\u00a0?',
    a: 'Non. Le Setting LinkedIn est sans engagement, r\u00e9siliable \u00e0 tout moment. Si nous n\u2019atteignons pas 5\u00a0RDV qualifi\u00e9s dans le mois, le mois suivant est offert.',
  },
  {
    q: 'Puis-je combiner plusieurs offres\u00a0?',
    a: 'Oui. La plupart de nos clients commencent par le Setting LinkedIn, ajoutent le Setting t\u00e9l\u00e9phonique en bundle \u00e0 tarif r\u00e9duit, puis activent le Nurturing pour leur base existante.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TarifsPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/#contact'

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
                Des prix progressifs, z&eacute;ro surprise
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Setup fee transparent, tarif fixe identique sur toute la dur&eacute;e, prime variable selon votre ticket moyen.
                Le montant de la prime d&eacute;pend aussi de la pr&eacute;sence de lead magnets actifs et d&apos;une strat&eacute;gie de contenu.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pricing Cards ────────────────────────────────────────────────── */}
        <section id="offres" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {offers.map((offer, i) => (
                <ScrollReveal key={offer.id} delay={i * 80}>
                  <div
                    className={`relative bg-bg-secondary rounded-2xl border p-8 flex flex-col h-full ${
                      offer.highlight
                        ? 'border-[#A78BFA]/40 ring-1 ring-[#A78BFA]/20'
                        : 'border-white/[0.06]'
                    }`}
                    style={
                      offer.highlight
                        ? { boxShadow: '0 0 40px rgba(167,139,250,0.08)' }
                        : undefined
                    }
                  >
                    {/* Colored top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: offer.color }}
                    />

                    {/* Eyebrow */}
                    <p
                      className="font-sans text-xs font-semibold uppercase tracking-widest mb-3 mt-2"
                      style={{ color: offer.color }}
                    >
                      {offer.eyebrow}
                    </p>

                    {/* Headline */}
                    <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-5 leading-snug">
                      {offer.headline}
                    </h2>

                    {/* Pricing phases */}
                    <div className="mb-6 space-y-3">
                      {offer.pricingPhases.map((phase, pi) => (
                        <div key={pi}>
                          <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-0.5">
                            {phase.label}
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span
                              className={`font-sans font-extrabold ${pi === 0 ? 'text-2xl' : 'text-xl'}`}
                              style={{ color: offer.color }}
                            >
                              {phase.amount}
                            </span>
                            <span className="font-sans text-text-muted text-xs">
                              {phase.suffix}
                            </span>
                          </div>
                          <p className="font-sans text-text-muted text-[11px] mt-0.5">
                            {phase.detail}
                          </p>
                        </div>
                      ))}
                      {offer.bonus && (
                        <p
                          className="font-sans text-xs font-semibold"
                          style={{ color: offer.color }}
                        >
                          {offer.bonus}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 mb-6 flex-1">
                      {offer.features.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                            className="shrink-0 mt-0.5"
                          >
                            <circle cx="8" cy="8" r="8" fill={offer.color} fillOpacity="0.15" />
                            <path
                              d="M5 8l2 2 4-4"
                              stroke={offer.color}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-sans text-text-secondary text-sm leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Guarantee badge */}
                    {offer.guarantee && (
                      <div
                        className="rounded-xl px-4 py-3 mb-6 text-xs font-sans leading-relaxed"
                        style={{
                          background: `rgba(${offer.colorRgb},0.08)`,
                          border: `1px solid rgba(${offer.colorRgb},0.18)`,
                          color: offer.color,
                        }}
                      >
                        {offer.guarantee}
                      </div>
                    )}

                    {/* CTA */}
                    <ButtonGlow
                      as="a"
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center"
                    >
                      {offer.cta}
                    </ButtonGlow>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* No commitment note */}
            <ScrollReveal delay={240}>
              <p className="font-sans text-text-muted text-sm text-center mt-8">
                Sans engagement &bull; R&eacute;siliable \u00e0 tout moment &bull; Tarif r&eacute;duit en bundle
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Guarantee Section ────────────────────────────────────────────── */}
        <section id="garantie" className="bg-bg-primary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="rounded-2xl border border-[#A78BFA]/30 p-10 text-center"
                style={{ background: 'rgba(167,139,250,0.04)' }}>
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6"
                  style={{ background: 'rgba(167,139,250,0.12)' }}
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
                      stroke="#A78BFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#A78BFA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 leading-tight">
                  Moins de 5\u00a0RDV qualifi&eacute;s dans le mois\u00a0?
                </h2>
                <p className="font-sans text-text-secondary text-lg leading-relaxed mb-2">
                  Le mois suivant est offert.
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  Pas une clause en petits caract\u00e8res. C\u2019est notre engagement de base.
                  Le fixe reste identique &mdash; la prime par RDV est le seul variable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq-tarifs" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-10 text-center">
                Questions fr&eacute;quentes
              </h2>
            </ScrollReveal>

            <dl className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8">
                    <dt className="font-sans font-semibold text-text-primary text-base mb-3">
                      {faq.q}
                    </dt>
                    <dd className="font-sans text-text-secondary text-sm leading-relaxed m-0">
                      {faq.a}
                    </dd>
                  </div>
                </ScrollReveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/resultats" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Résultats clients</p>
                  <p className="font-sans text-sm text-text-muted">3+ RDV qualifiés par semaine, premiers résultats en 7 jours.</p>
                </a>
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">La méthode en 9 étapes</p>
                  <p className="font-sans text-sm text-text-muted">Du signal d'achat au RDV qualifié : comment fonctionne le pipeline.</p>
                </a>
                <a href="/externaliser-prospection-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Externaliser sa prospection</p>
                  <p className="font-sans text-sm text-text-muted">Pour qui, quand et comment externaliser votre prospection LinkedIn.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                On en parle\u00a0?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                30 minutes pour comprendre votre situation et voir si on peut vous aider.
                Pas de pitch, pas de pression.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
