import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'R\u00e9sultats clients \u2014 Setting LinkedIn B2B | Setting',
  description:
    'Nos clients obtiennent 3+ RDV qualifi\u00e9s par semaine avec un taux de r\u00e9ponse de 20-35%. Premiers r\u00e9sultats en 7 jours.',
  alternates: {
    canonical: 'https://www.setting.live/resultats',
    languages: {
      'fr': 'https://www.setting.live/resultats',
      'x-default': 'https://www.setting.live/resultats',
    },
  },
  openGraph: {
    title: 'R\u00e9sultats clients \u2014 Setting LinkedIn B2B | Setting',
    description:
      '3+ RDV qualifi\u00e9s par semaine, 20-35% de taux de r\u00e9ponse. R\u00e9sultats d\u00e8s la premi\u00e8re semaine.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'R\u00e9sultats clients \u2014 Setting LinkedIn B2B | Setting',
  description:
    'Nos clients obtiennent 3+ RDV qualifi\u00e9s par semaine avec un taux de r\u00e9ponse de 20-35%. Premiers r\u00e9sultats en 7 jours.',
  url: 'https://www.setting.live/resultats',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Setting commercial LinkedIn externalisé',
  provider: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  areaServed: 'FR',
  serviceType: 'Prospection LinkedIn B2B',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '20',
    reviewCount: '3',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Consultant stratégie IT' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: '12 RDV qualifiés le premier mois. 3 contrats signés sur le trimestre. Le pipeline tourne maintenant en autonomie.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Fondateur agence marketing digital' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: '4 RDV par semaine en rythme de croisière. Le fondateur ne prospecte plus, il close uniquement.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Coach business B2B' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: '8 RDV le premier mois à partir de la base existante. 2 contrats signés. Le système continue de produire des leads chaque semaine.',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.setting.live',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'R\u00e9sultats',
      item: 'https://www.setting.live/resultats',
    },
  ],
}

// ─── Case Studies Data ────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: 'consultant-it',
    eyebrow: 'Cas 1',
    title: 'Consultant strat\u00e9gie IT',
    situation:
      'Fondateur solo, 3 ans d\u2019activit\u00e9. R\u00e9seau LinkedIn satur\u00e9, taux de r\u00e9ponse en prospection manuelle tomb\u00e9 \u00e0 2%. Pas de temps pour prospecter entre les missions.',
    action:
      'Setting LinkedIn externalis\u00e9 pendant 3 mois. Ciblage DSI et CTO de PME tech, messages bas\u00e9s sur les signaux d\u2019achat.',
    result:
      '12 RDV qualifi\u00e9s le premier mois. 3 contrats sign\u00e9s sur le trimestre. Le pipeline tourne maintenant en autonomie.',
    timeline: 'Premiers RDV : J+5',
  },
  {
    id: 'agence-marketing',
    eyebrow: 'Cas 2',
    title: 'Agence marketing digital',
    situation:
      'Agence de 4 personnes. Le fondateur faisait la prospection seul entre deux projets clients. Irr\u00e9gulier, 0-2 RDV par mois.',
    action:
      'Setting LinkedIn + qualification t\u00e9l\u00e9phonique. Focus CMO et responsables marketing de e-commerces 1-10M\u20ac CA.',
    result:
      '4 RDV par semaine en rythme de croisi\u00e8re. Le fondateur ne prospecte plus, il closer uniquement.',
    timeline: 'Rythme de croisi\u00e8re atteint en 6 semaines',
  },
  {
    id: 'coach-business',
    eyebrow: 'Cas 3',
    title: 'Coach business B2B',
    situation:
      'Coach certifi\u00e9 avec 500+ contacts LinkedIn non exploit\u00e9s. Audience ti\u00e8de mais aucune relance structur\u00e9e.',
    action:
      'Setup nurturing + s\u00e9quences de r\u00e9activation sur la base existante. Scoring comportemental.',
    result:
      '8 RDV le premier mois \u00e0 partir de la base existante. 2 contrats sign\u00e9s. Le syst\u00e8me continue de produire des leads chaque semaine.',
    timeline: 'Premiers r\u00e9sultats : J+10',
  },
]

// ─── Benchmark Data ───────────────────────────────────────────────────────────

const benchmarkRows = [
  {
    label: 'Taux de r\u00e9ponse',
    classic: '2-5%',
    cl: '20-35%',
  },
  {
    label: 'RDV par mois',
    classic: '0-4',
    cl: '12-20',
  },
  {
    label: 'Temps investi',
    classic: '10-15h/semaine',
    cl: '0h (externalis\u00e9)',
  },
  {
    label: 'D\u00e9lai avant premiers r\u00e9sultats',
    classic: '1-3 mois',
    cl: '<7 jours',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultatsPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                R&eacute;sultats
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="resultats-hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                R&eacute;sultats
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Ce que nos clients obtiennent
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Chiffres, timelines et cas concrets.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Key Metrics ──────────────────────────────────────────────────── */}
        <section id="metriques" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ScrollReveal delay={0}>
                <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 text-center">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">
                    20+
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-snug">
                    entrepreneurs accompagn&eacute;s
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 text-center">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">
                    400+
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-snug">
                    RDV qualifi&eacute;s livr&eacute;s
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 text-center">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">
                    &lt;7j
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-snug">
                    avant le premier RDV
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 text-center">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">
                    20-35%
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-snug">
                    taux de r&eacute;ponse moyen
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Case Studies ─────────────────────────────────────────────────── */}
        <section id="cas-clients" className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-10 text-center">
                Cas clients
              </h2>
            </ScrollReveal>

            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.id} delay={i * 80}>
                  <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                      {cs.eyebrow}
                    </p>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-6 leading-snug">
                      {cs.title}
                    </h3>

                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                          Situation
                        </dt>
                        <dd className="font-sans text-text-secondary text-sm leading-relaxed m-0">
                          {cs.situation}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                          Action
                        </dt>
                        <dd className="font-sans text-text-secondary text-sm leading-relaxed m-0">
                          {cs.action}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                          R&eacute;sultat
                        </dt>
                        <dd className="font-sans text-text-secondary text-sm leading-relaxed m-0">
                          {cs.result}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-5 pt-5 border-t border-white/[0.06]">
                      <p className="font-sans text-xs text-accent font-semibold">
                        {cs.timeline}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benchmark ────────────────────────────────────────────────────── */}
        <section id="benchmarks" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3 text-center">
                Nos benchmarks vs le march&eacute;
              </h2>
              <p className="font-sans text-text-muted text-base text-center mb-10">
                Prospection classique contre setting externalis&eacute;. M&ecirc;me cible. R&eacute;sultats tr&egrave;s diff&eacute;rents.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-3 border-b border-white/[0.06]">
                  <div className="p-5" />
                  <div className="p-5 border-l border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-text-muted text-center">
                      Prospection classique
                    </p>
                  </div>
                  <div className="p-5 border-l border-white/[0.06]"
                    style={{ background: 'rgba(167,139,250,0.04)' }}>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-accent text-center">
                      Avec Setting
                    </p>
                  </div>
                </div>

                {/* Table rows */}
                {benchmarkRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 ${i < benchmarkRows.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                  >
                    <div className="p-5">
                      <p className="font-sans text-sm text-text-primary font-medium leading-snug">
                        {row.label}
                      </p>
                    </div>
                    <div className="p-5 border-l border-white/[0.06] text-center">
                      <p className="font-sans text-sm text-text-muted">
                        {row.classic}
                      </p>
                    </div>
                    <div
                      className="p-5 border-l border-white/[0.06] text-center"
                      style={{ background: 'rgba(167,139,250,0.04)' }}
                    >
                      <p className="font-sans text-sm text-accent font-semibold">
                        {row.cl}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">Des prix progressifs, sans engagement. Garantie 5 RDV minimum.</p>
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
                On en parle&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                30 minutes pour &eacute;valuer votre situation. On vous dit si on peut reproduire ces r&eacute;sultats
                pour vous.
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
