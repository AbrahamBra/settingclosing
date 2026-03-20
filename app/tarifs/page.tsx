import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tarifs setting LinkedIn externalisé | ChallengersLab',
  description:
    'Prix du setting commercial LinkedIn externalisé : 500 € le premier mois, 1 000 €/mois ensuite. Garantie 5 RDV minimum. Sans engagement.',
  alternates: {
    canonical: 'https://challengerslab.fr/tarifs',
  },
  openGraph: {
    title: 'Tarifs setting LinkedIn externalisé | ChallengersLab',
    description: 'Prix du setting LinkedIn externalisé : 500 € le premier mois, 1 000 €/mois ensuite. Garantie 5 RDV minimum, sans engagement.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Tarifs setting LinkedIn externalisé | ChallengersLab',
  description:
    'Prix du setting commercial LinkedIn externalisé : 500 € le premier mois, 1 000 €/mois ensuite. Garantie 5 RDV minimum. Sans engagement.',
  url: 'https://challengerslab.fr/tarifs',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
      { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://challengerslab.fr/tarifs' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Offer',
        position: 1,
        name: 'Setting LinkedIn',
        description: 'Votre pipeline LinkedIn, clé en main. Setter dédié, ciblage ICP, messages co-rédigés avec IA, validation humaine.',
        priceSpecification: [
          {
            '@type': 'PriceSpecification',
            price: '500',
            priceCurrency: 'EUR',
            description: 'Mois de lancement',
          },
          {
            '@type': 'PriceSpecification',
            price: '1000',
            priceCurrency: 'EUR',
            description: 'À partir du deuxième mois',
          },
        ],
      },
      {
        '@type': 'Offer',
        position: 2,
        name: 'Setting téléphonique',
        description: 'Qualification téléphonique des leads LinkedIn. Routing intelligent selon niveau de maturité.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: 'Sur devis, adapté au volume de leads',
        },
      },
      {
        '@type': 'Offer',
        position: 3,
        name: 'Setup Nurturing',
        description: 'Transformez votre base existante en RDV. Scoring comportemental, séquences email/LinkedIn, workflow automatisé.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1500',
          priceCurrency: 'EUR',
          description: 'Setup unique + prime par RDV généré',
        },
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
      name: 'Combien ça coûte au total ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Setting LinkedIn commence à 500 € le premier mois, puis 1 000 €/mois à partir du deuxième. Pas de frais cachés, pas de setup supplémentaire. Le Setup Nurturing est facturé 1 500 € en une fois, plus une prime par RDV généré. Le Setting téléphonique est sur devis selon le volume.',
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il un engagement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Le Setting LinkedIn est sans engagement. Vous pouvez arrêter à tout moment. Si nous n'atteignons pas 5 RDV qualifiés dans le mois, le mois suivant est offert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Que comprend le premier mois à 500 € ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le premier mois couvre le cadrage : définition de votre ICP, co-rédaction des séquences de messages, paramétrage des signaux d'achat, et premiers envois. C'est le mois de calibration. On part plus vite dès le deuxième mois.",
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il après le premier mois ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "À partir du deuxième mois, le tarif passe à 1 000 €/mois. Le setter continue à prospecter sur votre compte, affine les messages selon les retours, et vous livre un reporting hebdomadaire.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne la prime par RDV ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La prime par RDV s'applique uniquement au Setup Nurturing. Elle est définie à l'avance avec vous. Vous ne payez que pour les résultats concrets, pas pour l'activité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je combiner plusieurs offres ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. La plupart de nos clients commencent par le Setting LinkedIn, puis ajoutent le Setting téléphonique pour qualifier les leads chauds, et enfin le Setup Nurturing pour activer leur base existante. On construit le dispositif adapté à votre situation.",
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
    price: '500\u00a0\u20ac',
    priceSuffix: 'le premier mois',
    priceNote: 'puis 1\u00a0000\u00a0\u20ac\u002fmois',
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
    headline: 'Vos leads LinkedIn qualifi\u00e9s par t\u00e9l\u00e9phone',
    price: 'Sur devis',
    priceSuffix: null,
    priceNote: 'adapt\u00e9 au volume de leads',
    features: [
      'Qualification t\u00e9l\u00e9phonique des leads LinkedIn',
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
    headline: 'Transformez votre base existante en RDV',
    price: '1\u00a0500\u00a0\u20ac',
    priceSuffix: 'setup unique',
    priceNote: '+ prime par RDV g\u00e9n\u00e9r\u00e9',
    features: [
      'Scoring comportemental de votre base',
      'S\u00e9quences email/LinkedIn personnalis\u00e9es',
      'Workflow automatis\u00e9 de routing',
      'Le syst\u00e8me s\u2019affine sur 3 mois',
    ],
    guarantee: null,
    cta: 'En savoir plus',
    highlight: false,
  },
]

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Combien \u00e7a co\u00fbte au total\u00a0?',
    a: 'Le Setting LinkedIn commence \u00e0 500\u00a0\u20ac le premier mois, puis 1\u00a0000\u00a0\u20ac/mois \u00e0 partir du deuxi\u00e8me. Pas de frais cach\u00e9s, pas de setup suppl\u00e9mentaire. Le Setup Nurturing est factur\u00e9 1\u00a0500\u00a0\u20ac en une fois, plus une prime par RDV g\u00e9n\u00e9r\u00e9. Le Setting t\u00e9l\u00e9phonique est sur devis selon le volume.',
  },
  {
    q: 'Y a-t-il un engagement\u00a0?',
    a: "Non. Le Setting LinkedIn est sans engagement. Vous pouvez arr\u00eater \u00e0 tout moment. Si nous n\u2019atteignons pas 5\u00a0RDV qualifi\u00e9s dans le mois, le mois suivant est offert.",
  },
  {
    q: 'Que comprend le premier mois \u00e0 500\u00a0\u20ac\u00a0?',
    a: "Le premier mois couvre le cadrage : d\u00e9finition de votre ICP, co-r\u00e9daction des s\u00e9quences de messages, param\u00e9trage des signaux d\u2019achat, et premiers envois. C\u2019est le mois de calibration. On part plus vite d\u00e8s le deuxi\u00e8me mois.",
  },
  {
    q: 'Que se passe-t-il apr\u00e8s le premier mois\u00a0?',
    a: '\u00c0 partir du deuxi\u00e8me mois, le tarif passe \u00e0 1\u00a0000\u00a0\u20ac/mois. Le setter continue \u00e0 prospecter sur votre compte, affine les messages selon les retours, et vous livre un reporting hebdomadaire.',
  },
  {
    q: 'Comment fonctionne la prime par RDV\u00a0?',
    a: 'La prime par RDV s\u2019applique uniquement au Setup Nurturing. Elle est d\u00e9finie \u00e0 l\u2019avance avec vous. Vous ne payez que pour les r\u00e9sultats concrets, pas pour l\u2019activit\u00e9.',
  },
  {
    q: 'Puis-je combiner plusieurs offres\u00a0?',
    a: 'Oui. La plupart de nos clients commencent par le Setting LinkedIn, puis ajoutent le Setting t\u00e9l\u00e9phonique pour qualifier les leads chauds, et enfin le Setup Nurturing pour activer leur base existante. On construit le dispositif adapt\u00e9 \u00e0 votre situation.',
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
                Des prix simples, un engagement clair
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Pas de frais cach&eacute;s. Pas de forfait annuel. Vous savez ce que vous payez et ce que vous
                obtenez. Si les r&eacute;sultats ne sont pas l&agrave;, vous ne payez pas.
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

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span
                          className="font-sans font-extrabold text-3xl"
                          style={{ color: offer.color }}
                        >
                          {offer.price}
                        </span>
                        {offer.priceSuffix && (
                          <span className="font-sans text-text-muted text-sm">
                            {offer.priceSuffix}
                          </span>
                        )}
                      </div>
                      {offer.priceNote && (
                        <p className="font-sans text-text-muted text-xs mt-1">
                          {offer.priceNote}
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
                Sans engagement &bull; R&eacute;siliable \u00e0 tout moment &bull; Premier mois \u00e0 500\u00a0\u20ac
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
                  Ce n&apos;est pas une clause en petits caract\u00e8res. C\u2019est notre engagement de base.
                  Vous payez pour des r&eacute;sultats, pas pour de l&apos;activit&eacute;.
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
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/resultats" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Résultats clients</p>
                  <p className="font-sans text-sm text-text-muted">3+ RDV qualifiés par semaine, premiers résultats en 7 jours.</p>
                </a>
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">La méthode en 9 étapes</p>
                  <p className="font-sans text-sm text-text-muted">Du signal d'achat au RDV qualifié : comment fonctionne le pipeline.</p>
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
