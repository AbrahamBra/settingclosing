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
    'Notre méthode, nos engagements et le déroulement concret d\u2019un accompagnement Setting : objectifs, métriques suivies, garantie et profils types.',
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
      'Notre méthode, nos engagements et le déroulement concret d\u2019un accompagnement Setting.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.setting.live/resultats',
    images: [{ url: 'https://www.setting.live/api/og?title=R%C3%A9sultats%20clients%20%E2%80%94%20Setting%20LinkedIn%20B2B&tag=R%C3%A9sultats', width: 1200, height: 630, alt: 'Résultats clients — Setting LinkedIn B2B — Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Résultats clients — Setting LinkedIn B2B | Setting',
    description:
      'Notre méthode, nos engagements et le déroulement concret d\u2019un accompagnement Setting.',
    images: ['https://www.setting.live/api/og?title=R%C3%A9sultats%20clients%20%E2%80%94%20Setting%20LinkedIn%20B2B&tag=R%C3%A9sultats'],
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Résultats clients — Setting LinkedIn B2B | Setting',
  description:
    'Notre méthode, nos engagements et le déroulement concret d\u2019un accompagnement Setting : objectifs, métriques suivies, garantie et profils types.',
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
    label: 'Objectif',
    description: 'C\u2019est l\u2019objectif en régime de croisière. Si on n\u2019atteint pas 5 RDV le premier mois, le mois suivant est offert.',
  },
  {
    value: 'Signal-based',
    label: 'Méthode',
    description: 'On contacte uniquement les prospects qui ont montré un signal d\u2019intérêt. Pas de cold outreach de masse.',
  },
  {
    value: '< 7 jours',
    label: 'Lancement',
    description: 'Délai entre le démarrage et les premiers messages envoyés. Setup en 48h, prospection dès le jour 3.',
  },
  {
    value: '5 clients max',
    label: 'Par mois',
    description: 'On limite le nombre de nouveaux clients pour garantir un setter dédié et des messages de qualité.',
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
                Notre méthode, nos engagements et ce que vous pouvez attendre
                d&apos;un accompagnement Setting.
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

        {/* ── Comment ça se passe concrètement ──────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Comment ça se passe concrètement
              </h2>
              <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                Voici le déroulement type d&apos;un accompagnement Setting,
                de la première semaine au régime de croisière.
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                {
                  step: 'Semaine 1',
                  title: 'Setup & premiers messages',
                  detail: 'On définit votre ICP, vos messages et vos filtres Sales Navigator. Le setter commence à prospecter. Les premiers échanges LinkedIn arrivent dans les jours qui suivent.',
                },
                {
                  step: 'Semaines 2-4',
                  title: 'Montée en charge',
                  detail: 'Le setter ajuste les messages en fonction des réponses terrain. Le taux de réponse se stabilise. Les premiers RDV qualifiés sont bookés et transférés.',
                },
                {
                  step: 'Mois 2-3',
                  title: 'Régime de croisière',
                  detail: 'Le pipe est rodé. Vous recevez un reporting hebdomadaire avec les métriques : messages envoyés, taux de réponse, RDV bookés, conversion. On recalibre chaque semaine.',
                },
              ].map((s, i) => (
                <ScrollReveal key={s.step} delay={i * 100}>
                  <DarkCard hover className="p-6">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-mono text-xs text-accent uppercase tracking-wider shrink-0">{s.step}</span>
                      <p className="font-sans font-bold text-text-primary">{s.title}</p>
                    </div>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{s.detail}</p>
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
