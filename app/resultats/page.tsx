import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { DarkCard } from '@/components/ui/DarkCard'
import { CtaArticle } from '@/components/CtaArticle'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Résultats clients — Setting LinkedIn B2B | Setting',
  description:
    'Découvrez les résultats prospection LinkedIn B2B de nos clients : 2-4 RDV qualifiés/semaine, 20-35 % de taux de réponse, premiers résultats en 7 jours.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.setting.live/resultats',
    languages: {
      'fr': 'https://www.setting.live/resultats',
      'x-default': 'https://www.setting.live/resultats',
    },
  },
  openGraph: {
    title: 'Résultats clients — Setting LinkedIn B2B | Setting',
    description:
      'Nos clients obtiennent 2-4 RDV qualifiés/semaine avec un taux de réponse 5 à 10x supérieur à la prospection classique.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.setting.live/resultats',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Résultats clients — Setting LinkedIn B2B | Setting',
    description:
      'Nos clients obtiennent 2-4 RDV qualifiés/semaine avec un taux de réponse 5 à 10x supérieur à la prospection classique.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Résultats clients — Setting LinkedIn B2B | Setting',
  description:
    'Découvrez les résultats prospection LinkedIn B2B de nos clients : 2-4 RDV qualifiés/semaine, 20-35 % de taux de réponse, premiers résultats en 7 jours.',
  url: 'https://www.setting.live/resultats',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]'],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
      { '@type': 'ListItem', position: 2, name: 'Résultats', item: 'https://www.setting.live/resultats' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Les chiffres sont-ils garantis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Les résultats dépendent de votre offre, votre ICP et votre marché. Notre garantie : si vous obtenez moins de 5 RDV qualifiés le premier mois, le mois suivant est offert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps avant les premiers RDV ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En moyenne, les premiers RDV arrivent dans les 7 premiers jours après le lancement de la campagne. Le setup (ciblage, messages, validation) prend 48h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Comment mesurez-vous un RDV qualifié ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un RDV qualifié est un appel ou une visio bookée avec un prospect qui correspond à votre ICP, qui a un besoin identifié et un budget potentiel. Un simple échange de messages ne compte pas.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels secteurs fonctionnent le mieux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le setting LinkedIn fonctionne pour tout service B2B avec un ticket moyen supérieur à 2 000 €. Les meilleurs résultats : SaaS, conseil, agences, formation professionnelle, services IT.",
      },
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const metrics = [
  {
    value: '2-4 RDV/semaine',
    label: '[estimation]',
    description: 'En régime de croisière, après la phase de lancement de 7 jours.',
  },
  {
    value: '20-35\u00a0% taux de réponse',
    label: '[estimation]',
    description: 'Vs 2-5\u00a0% en prospection classique (cold emailing, InMails de masse).',
  },
  {
    value: '< 7 jours',
    label: '[estimation]',
    description: 'Délai moyen pour obtenir les premiers RDV qualifiés après lancement.',
  },
  {
    value: '5 clients max/mois',
    label: '',
    description: 'Nombre de nouveaux clients acceptés chaque mois pour garantir la qualité.',
  },
]

const trackingItems = [
  { label: 'Messages envoyés', detail: 'Volume de messages personnalisés envoyés chaque semaine.' },
  { label: 'Réponses reçues', detail: 'Nombre et taux de réponses positives sur LinkedIn.' },
  { label: 'RDV qualifiés', detail: 'Rendez-vous effectivement bookés avec des prospects ICP.' },
  { label: 'Taux de conversion', detail: 'Ratio entre les RDV pris et les opportunités signées.' },
]

const profiles = [
  {
    title: 'Solopreneur B2B',
    ticket: 'Ticket moyen 2-10k\u00a0\u20ac',
    description:
      'Vous vendez un service ou un produit B2B et avez besoin d\u2019un pipeline régulier de prospects qualifiés sans y passer vos journées.',
  },
  {
    title: 'Fondateur startup early-stage',
    ticket: 'Besoin de premiers clients',
    description:
      'Vous cherchez vos 10-50 premiers clients pour valider votre offre, affiner votre ICP et générer du revenu rapidement.',
  },
  {
    title: 'Freelance / Consultant',
    ticket: 'Plus de temps pour prospecter',
    description:
      'Votre temps vaut trop cher pour prospecter manuellement. Vous déléguez la génération de leads pour vous concentrer sur vos missions.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResultatsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, faqSchema]) }}
      />

      <Navbar />

      <main className="bg-bg-primary pt-20">
        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <nav aria-label="Fil d'Ariane" className="mb-8">
                <ol className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted">
                  <li>
                    <a href="/" className="hover:text-accent transition-colors">Accueil</a>
                  </li>
                  <li aria-hidden="true" className="text-text-muted/40">/</li>
                  <li className="text-text-secondary">Résultats</li>
                </ol>
              </nav>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary leading-tight mb-6">
                Les résultats de nos clients
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p
                data-speakable
                className="font-sans text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              >
                Nos clients obtiennent en moyenne 2 à 4 RDV qualifiés par semaine
                avec un taux de réponse 5 à 10&nbsp;fois supérieur à la prospection classique.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Métriques clés ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {metrics.map((m, i) => (
                <ScrollReveal key={m.value} delay={i * 100}>
                  <DarkCard accent hover className="p-6 h-full flex flex-col">
                    <p className="font-sans font-extrabold text-xl md:text-2xl text-accent mb-1">
                      {m.value}
                    </p>
                    {m.label && (
                      <span className="font-mono text-[10px] text-text-muted/60 uppercase tracking-widest mb-2">
                        {m.label}
                      </span>
                    )}
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mt-auto">
                      {m.description}
                    </p>
                  </DarkCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comment on mesure nos résultats ─────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Comment on mesure nos résultats
              </h2>
              <p
                data-speakable
                className="font-sans text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
              >
                Chaque campagne est suivie en temps réel.
                Nous trackons 4&nbsp;indicateurs clés pour piloter la performance
                et ajuster la stratégie chaque semaine.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trackingItems.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 80}>
                  <DarkCard hover className="p-5 h-full">
                    <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.detail}
                    </p>
                  </DarkCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Profils types ──────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Profils types de nos clients
              </h2>
              <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Setting s&apos;adresse aux professionnels B2B qui veulent un pipeline
                prévisible sans y consacrer 2&nbsp;heures par jour.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {profiles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <DarkCard hover className="p-6 h-full flex flex-col">
                    <h3 className="font-sans font-bold text-lg text-text-primary mb-1">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider mb-3">
                      {p.ticket}
                    </span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed mt-auto">
                      {p.description}
                    </p>
                  </DarkCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cas clients ────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Exemples de résultats obtenus
              </h2>
              <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Chaque cas est anonymisé. Les chiffres sont issus de campagnes réelles
                menées entre 2025 et 2026.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  sector: 'SaaS B2B — logiciel de gestion',
                  ticket: 'Ticket moyen : 8 000 €',
                  before: 'Pipeline dépendant 100 % de l\u2019inbound. Zéro prospection sortante.',
                  after: '12 RDV qualifiés en 10 semaines. 3 deals signés. ROI positif dès le mois 2.',
                  method: 'Setting signal-based LinkedIn + Sales Navigator.',
                  duration: '3 mois',
                },
                {
                  sector: 'Consultant indépendant — conseil en transformation',
                  ticket: 'Ticket moyen : 5 000 €',
                  before: 'Prospection manuelle 1h/jour sur LinkedIn, 1-2 RDV/mois.',
                  after: '8 RDV qualifiés/mois en régime de croisière. Temps de prospection délégué à 100 %.',
                  method: 'Setter dédié + signaux Reactin + relances séquencées.',
                  duration: '2 mois',
                },
                {
                  sector: 'Agence marketing — prestations sur mesure',
                  ticket: 'Ticket moyen : 3 000 €/mois',
                  before: 'Bouche-à-oreille uniquement. Pipeline irrégulier.',
                  after: '6 RDV qualifiés/mois. 2 nouveaux clients récurrents signés en 6 semaines.',
                  method: 'Ciblage dirigeants PME + messages contextualisés sur signaux d\u2019achat.',
                  duration: '6 semaines',
                },
              ].map((c, i) => (
                <ScrollReveal key={c.sector} delay={i * 100}>
                  <DarkCard hover className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <p className="font-sans font-bold text-text-primary">{c.sector}</p>
                      <span className="font-mono text-xs text-accent uppercase tracking-wider">{c.ticket}</span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-mono text-[10px] text-text-muted/60 uppercase tracking-widest mb-1">Avant</p>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed">{c.before}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-1">Après</p>
                        <p className="font-sans text-sm text-text-secondary leading-relaxed">{c.after}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 text-xs text-text-muted">
                      <span>Méthode : {c.method}</span>
                      <span>Durée : {c.duration}</span>
                    </div>
                  </DarkCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Résultats ────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-8">
                Questions fréquentes sur nos résultats
              </h2>
            </ScrollReveal>
            <div className="divide-y divide-white/[0.06]">
              {[
                {
                  q: 'Les chiffres sont-ils garantis ?',
                  a: 'Non. Les résultats dépendent de votre offre, votre ICP et votre marché. Les chiffres présentés sont des fourchettes observées sur des campagnes réelles. Notre garantie : si vous obtenez moins de 5 RDV qualifiés le premier mois, le mois suivant est offert.',
                },
                {
                  q: 'Combien de temps avant les premiers RDV ?',
                  a: 'En moyenne, les premiers RDV arrivent dans les 7 premiers jours après le lancement de la campagne. Le setup (ciblage, messages, validation) prend 48h.',
                },
                {
                  q: 'Comment mesurez-vous un RDV qualifié ?',
                  a: 'Un RDV qualifié est un appel ou une visio bookée avec un prospect qui correspond à votre ICP, qui a un besoin identifié et un budget potentiel. Un simple échange de messages ne compte pas.',
                },
                {
                  q: 'Quels secteurs fonctionnent le mieux ?',
                  a: 'Le setting LinkedIn fonctionne pour tout service B2B avec un ticket moyen supérieur à 2 000 €. Les meilleurs résultats : SaaS, conseil, agences, formation professionnelle, services IT.',
                },
              ].map(({ q, a }, i) => (
                <ScrollReveal key={q} delay={i * 60}>
                  <details className="group py-5" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-sans font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45 text-lg">+</span>
                    </summary>
                    <p className="font-sans text-text-secondary leading-relaxed text-sm mt-3">{a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── La garantie Setting ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <DarkCard accent className="p-8 md:p-12">
                <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">
                  Garantie
                </span>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-4">
                  La garantie Setting
                </h2>
                <p
                  data-speakable
                  className="font-sans text-text-secondary text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto"
                >
                  Si vous obtenez moins de 5&nbsp;RDV qualifiés le premier mois,
                  le mois suivant est offert. Zéro engagement, zéro risque.
                </p>
                <ButtonGlow as="a" href="/tarifs">
                  Voir les tarifs &rarr;
                </ButtonGlow>
              </DarkCard>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal>
              <CtaArticle variant="setting" />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
