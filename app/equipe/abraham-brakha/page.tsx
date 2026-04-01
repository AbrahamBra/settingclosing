import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { DarkCard } from '@/components/ui/DarkCard'

export const metadata: Metadata = {
  title: 'Abraham Brakha — Fondateur Setting | Automatisation IA & Prospection LinkedIn B2B',
  description:
    "Abraham Brakha, fondateur de Setting. Développeur spécialisé en automatisation IA appliquée au sales B2B. Créateur du système de détection de signaux d'achat LinkedIn.",
  alternates: {
    canonical: 'https://www.setting.live/equipe/abraham-brakha',
    languages: {
      fr: 'https://www.setting.live/equipe/abraham-brakha',
      'x-default': 'https://www.setting.live/equipe/abraham-brakha',
    },
  },
  openGraph: {
    title: 'Abraham Brakha — Fondateur Setting',
    description:
      "Développeur spécialisé en automatisation IA appliquée au sales B2B. Créateur du système de détection de signaux d'achat LinkedIn.",
    locale: 'fr_FR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abraham Brakha — Fondateur Setting',
    description: "Développeur spécialisé en automatisation IA appliquée au sales B2B. Créateur du système de détection de signaux d'achat LinkedIn.",
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.setting.live/a-propos#abraham',
  name: 'Abraham Brakha',
  givenName: 'Abraham',
  familyName: 'Brakha',
  jobTitle: 'Fondateur & Automatisation IA',
  url: 'https://www.setting.live/equipe/abraham-brakha',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.setting.live/icon.png',
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://www.linkedin.com/in/abraham-brakha',
  ],
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  knowsAbout: [
    'automatisation commerciale',
    'IA appliquée au sales',
    "détection de signaux d'achat LinkedIn",
    'prospection LinkedIn B2B',
    'Next.js',
    'TypeScript',
    'SDR externalisé',
    'qualification de leads B2B',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Setting',
  },
  description:
    "Développeur spécialisé en automatisation et IA appliquée au sales B2B. Créateur du système de détection de signaux d'achat LinkedIn utilisé par Setting. Auteur de 20+ guides sur la prospection LinkedIn et les méthodes de vente B2B.",
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: '\u00c0 propos', item: 'https://www.setting.live/a-propos' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Abraham Brakha',
      item: 'https://www.setting.live/equipe/abraham-brakha',
    },
  ],
}

const expertise = [
  {
    title: "D\u00e9tection de signaux d\u2019achat",
    desc: "Syst\u00e8me qui surveille les interactions LinkedIn (r\u00e9actions, commentaires, changements de poste) pour identifier les prospects en recherche active. Utilis\u00e9 sur chaque campagne Setting.",
  },
  {
    title: 'Automatisation IA',
    desc: "Workflows qui combinent Claude, Sales Navigator et Reactin pour analyser les profils, scorer la maturit\u00e9 d\u2019achat et g\u00e9n\u00e9rer des drafts de messages. L\u2019humain valide, l\u2019IA acc\u00e9l\u00e8re.",
  },
  {
    title: 'Architecture de pipeline',
    desc: "Conception du pipeline en 9 \u00e9tapes (d\u00e9tection \u2192 qualification \u2192 conversion) avec r\u00e8gles de passage, scoring gradient et recalibration hebdomadaire.",
  },
  {
    title: 'D\u00e9veloppement full-stack',
    desc: 'Next.js, TypeScript, Tailwind, Vercel. Le site setting.live, les outils internes, les dashboards de reporting. Tout est construit en interne.',
  },
]

const articles = [
  { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B\u00a0: d\u00e9finition et m\u00e9thode' },
  { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B\u00a0: m\u00e9thode compl\u00e8te' },
  { href: '/ressources/closing-b2b', title: 'Closing B2B\u00a0: le guide complet' },
  { href: '/ressources/comment-prospecter-sur-linkedin', title: 'IA, m\u00e9thode et humain\u00a0: les 3 couches du setting' },
  { href: '/ressources/prospection-linkedin-b2b', title: 'Scripts de setting LinkedIn B2B' },
  { href: '/ressources/methodes-vente-b2b', title: "Qu\u2019est-ce que le Challenger Sale\u00a0?" },
  { href: '/ressources/methodes-vente-b2b', title: 'M\u00e9thodes de vente B2B\u00a0: Challenger, SPIN, SONCAS' },
  { href: '/ressources/closing-b2b', title: 'Discovery call B2B\u00a0: structure et questions' },
  { href: '/ressources/signal-achat-linkedin', title: "C\u2019est quoi un signal d\u2019achat LinkedIn\u00a0?" },
  { href: '/ressources/setting-commercial-b2b', title: "C\u2019est quoi un setter en B2B\u00a0?" },
  { href: '/ressources/setting-commercial-b2b', title: 'Diff\u00e9rence entre setting et closing' },
  { href: '/ressources/methodes-vente-b2b', title: 'Qualifier un lead en B2B' },
  { href: '/ressources/closing-b2b', title: 'G\u00e9rer les objections en vente B2B' },
  { href: '/ressources/closing-b2b', title: 'Scripts et phrases de closing B2B' },
  { href: '/ressources/prospection-linkedin-b2b', title: 'Relance LinkedIn B2B' },
  { href: '/ressources/closing-b2b', title: 'Closer B2B\u00a0: d\u00e9finition et comp\u00e9tences' },
  { href: '/ressources/devenir-business-developer', title: 'Devenir business developer' },
  { href: '/ressources/comment-devenir-setter-b2b', title: 'Devenir setter ou closer B2B' },
  { href: '/ressources/prospection-linkedin-b2b', title: 'Pourquoi vos messages LinkedIn restent sans r\u00e9ponse' },
  { href: '/ressources/methodes-vente-b2b', title: 'M\u00e9thode SONCAS en B2B' },
  { href: '/ressources/methodes-vente-b2b', title: 'SPIN Selling\u00a0: la m\u00e9thode' },
  { href: '/ressources/comment-prospecter-sur-linkedin', title: 'Setting humain vs automatisation' },
  { href: '/externaliser-prospection-linkedin#sdr-commercial', title: 'SDR interne vs externalis\u00e9' },
]

export default function AbrahamBrakhaPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="bg-bg-primary border-b border-white/[0.06]">
          <div className="container-max px-6 md:px-12 lg:px-20 py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li><a href="/a-propos" className="hover:text-text-primary transition-colors">&Agrave; propos</a></li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li className="text-text-primary font-medium">Abraham Brakha</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="w-20 h-20 rounded-2xl bg-bg-secondary border-2 border-dashed border-accent/30 flex items-center justify-center mx-auto mb-6">
                <span className="font-sans font-bold text-2xl text-accent">A</span>
              </div>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-3 leading-tight">
                Abraham Brakha
              </h1>
              <p className="font-sans text-accent text-sm font-semibold uppercase tracking-widest mb-5">
                Fondateur &amp; Automatisation IA
              </p>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Il a construit le syst&egrave;me de d&eacute;tection de signaux d&apos;achat qui fait tourner Setting.
                C&ocirc;t&eacute; code, il d&eacute;veloppe les outils internes, le site et les workflows IA.
                C&ocirc;t&eacute; business, il co-r&eacute;dige les s&eacute;quences et calibre les pipelines chaque semaine.
              </p>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/abraham-brakha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-muted hover:text-[#0A66C2] transition-colors text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-10 text-center">
                Ce qu&apos;il fait concr&egrave;tement
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {expertise.map(({ title, desc }, i) => (
                <ScrollReveal key={title} delay={i * 60}>
                  <DarkCard className="p-6 h-full">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">{title}</h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </DarkCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 text-center">
                Articles publi&eacute;s
              </h2>
              <p className="font-sans text-text-muted text-center mb-10">
                {articles.length} guides sur la prospection LinkedIn, les m&eacute;thodes de vente B2B et le setting.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {articles.map(({ href, title }, i) => (
                <ScrollReveal key={href} delay={Math.min(i * 20, 200)}>
                  <Link
                    href={href}
                    className="group block border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] transition-colors"
                  >
                    <p className="font-sans font-semibold text-text-primary text-sm group-hover:text-white transition-colors leading-snug">
                      {title}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Une question sur la m&eacute;thode&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                30 minutes pour comprendre ton contexte et voir si Setting peut t&apos;aider.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
