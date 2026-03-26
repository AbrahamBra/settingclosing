'use client'

import { useState } from 'react'
import { DarkCard } from './ui/DarkCard'
import { ScrollReveal } from './ui/ScrollReveal'

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'setting' | 'methode'

interface Article {
  slug: string
  title: string
  readTime: string
  category: Category
  date: string
}

interface PillarGuide {
  slug: string
  title: string
  label: string
  readTime: string
  color: string
  borderClass: string
}

// ─── Category config ─────────────────────────────────────────────────────────

const categoryConfig: Record<Category, { label: string; color: string; bgTint: string }> = {
  setting: { label: 'Setting', color: '#A78BFA', bgTint: 'rgba(129, 140, 248, 0.04)' },
  methode: { label: 'Méthode', color: '#FBBF24', bgTint: 'rgba(251, 191, 36, 0.04)' },
}

type FilterKey = 'all' | Category | 'ia'

const filterPills: { key: FilterKey; label: string; color: string }[] = [
  { key: 'all', label: 'Tous', color: '#C87533' },
  { key: 'setting', label: 'Setting', color: '#A78BFA' },
  { key: 'methode', label: 'Méthode', color: '#FBBF24' },
  { key: 'ia', label: 'IA + Outils', color: '#C084FC' },
]

// ─── Pillar guides ───────────────────────────────────────────────────────────

const pillarGuides: PillarGuide[] = [
  {
    slug: 'setting-commercial-b2b',
    title: 'Setting commercial B2B : définition et méthode',
    label: 'Guide Setting',
    readTime: '14 min',
    color: '#A78BFA',
    borderClass: 'border-l-4 border-[#A78BFA]',
  },
  {
    slug: 'closing-b2b',
    title: 'Closing B2B : le guide complet pour conclure en vente',
    label: 'Guide Closing',
    readTime: '12 min',
    color: '#FBBF24',
    borderClass: 'border-l-4 border-[#FBBF24]',
  },
  {
    slug: 'prospection-linkedin-b2b',
    title: 'Prospection LinkedIn B2B : méthode complète en 2026',
    label: 'Guide Prospection',
    readTime: '13 min',
    color: '#A78BFA',
    borderClass: 'border-l-4 border-[#A78BFA]',
  },
  {
    slug: 'methodes-vente-b2b',
    title: 'Méthodes de vente B2B : Challenger, SPIN, SONCAS',
    label: 'Guide Méthodes',
    readTime: '10 min',
    color: '#FBBF24',
    borderClass: 'border-l-4 border-[#FBBF24]',
  },
  {
    slug: 'comment-devenir-setter-b2b',
    title: 'Devenir setter ou closer B2B en 2026 : le guide complet',
    label: 'Guide Carrière',
    readTime: '20 min',
    color: '#A78BFA',
    borderClass: 'border-l-4 border-[#A78BFA]',
  },
]

// ─── All articles ────────────────────────────────────────────────────────────

const articles: Article[] = [
  // Setting — articles standalone (non consolidés)
  { slug: 'signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min', category: 'setting', date: '2026-03-17' },
  { slug: 'ia-methode-humain-setting-linkedin', title: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn", readTime: '12 min', category: 'setting', date: '2026-03-17' },
  { slug: 'setting-humain-vs-automatisation-linkedin', title: 'Setting humain vs automatisation LinkedIn : le vrai comparatif', readTime: '11 min', category: 'setting', date: '2026-03-19' },
  // Méthode
  { slug: 'devenir-business-developer', title: 'Devenir business developer : parcours, compétences et salaire', readTime: '10 min', category: 'methode', date: '2026-02-26' },
  // Prospection LinkedIn — articles standalone
  { slug: 'comment-prospecter-sur-linkedin', title: 'Comment prospecter sur LinkedIn en 2026 : guide complet', readTime: '14 min', category: 'setting', date: '2026-03-25' },
  { slug: 'agence-prospection-linkedin', title: 'Agence de prospection LinkedIn : comment choisir en 2026', readTime: '13 min', category: 'setting', date: '2026-03-25' },
  { slug: 'social-selling-linkedin-b2b', title: 'Social selling LinkedIn : définition, méthode et SSI en B2B', readTime: '12 min', category: 'setting', date: '2026-03-25' },
  { slug: 'automatisation-prospection-linkedin', title: 'Automatisation de la prospection LinkedIn : limites et alternatives en 2026', readTime: '14 min', category: 'setting', date: '2026-03-25' },
  // Articles consolidés/redirigés — retirés :
  // script-setting-linkedin, relance-linkedin-b2b, messages-linkedin-sans-reponse, messages-prospection-linkedin-exemples → prospection-linkedin-b2b
  // setter-b2b-definition, setting-commercial-linkedin, difference-setting-closing → setting-commercial-b2b
  // discovery-call-b2b, gestion-objections-b2b, script-closing-b2b, closer-b2b → closing-b2b
  // challenger-sale-definition, qualification-leads-b2b, methode-soncas, methode-spin-selling → methodes-vente-b2b
  // outils-setting-linkedin, comment-choisir-setter-linkedin, combien-coute-setting-linkedin → comment-devenir-setter-b2b
  // agence-setting-linkedin-vs-freelance, sdr-interne-vs-externalise → externaliser-prospection-linkedin
]

// ─── Component ───────────────────────────────────────────────────────────────

export function BlogContent() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = filter === 'all' || filter === 'ia'
    ? articles
    : articles.filter((a) => a.category === filter)

  return (
    <div className="container-max max-w-6xl px-6 md:px-8">

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="mb-8">
        <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
          <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
          <li aria-hidden="true" className="select-none">&rsaquo;</li>
          <li className="text-text-primary">Ressources</li>
        </ol>
      </nav>

      {/* Page header */}
      <ScrollReveal>
        <header className="mb-16 max-w-2xl">
          <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-text-primary mb-4 tracking-tight">
            Ressources
          </h1>
          <p className="font-sans text-text-secondary text-lg leading-relaxed">
            Méthode, outils et retours terrain sur la prospection B2B.
          </p>
        </header>
      </ScrollReveal>

      {/* Featured article */}
      <ScrollReveal delay={50}>
        <a href="/ressources/devenir-business-developer" className="group block mb-16">
          <DarkCard hover className="relative overflow-hidden border-l-4 border-[#C87533]">
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-8">
              <div className="flex-1">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#C87533] mb-3">
                  À la une &middot; Formation &middot; 15 min
                </p>
                <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-primary mb-3 group-hover:text-[#C87533] transition-colors leading-tight">
                  Devenir Business Developer en 2026
                </h2>
                <p className="font-sans text-text-secondary leading-relaxed text-sm md:text-base max-w-xl">
                  Reconversion, alternance, salaire, compétences : tout ce qu&apos;il faut savoir sur le métier de business developer et comment s&apos;y former.
                </p>
              </div>
              <span className="font-sans text-sm text-[#C87533] group-hover:translate-x-1 transition-transform inline-block whitespace-nowrap">
                Lire l&apos;article &rarr;
              </span>
            </div>
          </DarkCard>
        </a>
      </ScrollReveal>

      {/* Pillar guides */}
      <ScrollReveal delay={100}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {pillarGuides.map((guide) => (
            <a key={guide.slug} href={`/ressources/${guide.slug}`} className="group block">
              <DarkCard hover className={`p-6 h-full flex flex-col ${guide.borderClass}`}>
                <p
                  className="font-sans text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: guide.color }}
                >
                  {guide.label} &middot; {guide.readTime}
                </p>
                <h2 className="font-sans font-semibold text-lg text-text-primary mb-4 group-hover:text-[#C87533] transition-colors leading-snug flex-1">
                  {guide.title}
                </h2>
                <span
                  className="font-sans text-sm group-hover:translate-x-1 transition-transform inline-block"
                  style={{ color: guide.color }}
                >
                  Lire le guide &rarr;
                </span>
              </DarkCard>
            </a>
          ))}
        </div>
      </ScrollReveal>

      {/* Category filter pills */}
      <ScrollReveal delay={150}>
        <div className="flex flex-wrap gap-2 mb-10">
          {filterPills.map((pill) => (
            <button
              key={pill.key}
              onClick={() => setFilter(pill.key)}
              className="font-sans text-sm px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                borderColor: filter === pill.key ? pill.color : 'rgba(255,255,255,0.06)',
                backgroundColor: filter === pill.key ? `${pill.color}15` : 'transparent',
                color: filter === pill.key ? pill.color : 'rgba(255,255,255,0.5)',
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {filtered.map((article, i) => {
          const cat = categoryConfig[article.category]
          return (
            <ScrollReveal key={article.slug} delay={50 + (i % 6) * 50}>
              <a href={`/ressources/${article.slug}`} className="group block h-full">
                <DarkCard hover className="h-full flex flex-col">
                  {/* Tinted top area */}
                  <div
                    className="h-24 flex items-center justify-center border-b border-dashed"
                    style={{
                      backgroundColor: cat.bgTint,
                      borderColor: `${cat.color}20`,
                    }}
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-widest opacity-40"
                      style={{ color: cat.color }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-sans font-semibold text-text-primary text-sm leading-snug mb-3 group-hover:text-[#C87533] transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="font-sans text-[11px] text-text-muted mb-2">
                      <a href="/equipe/abraham-brakha" className="hover:text-text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Abraham Brakha</a>
                      {' · '}
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </time>
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs text-text-muted">
                        {article.readTime} de lecture
                      </span>
                      <span
                        className="font-sans text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{
                          color: cat.color,
                          backgroundColor: `${cat.color}15`,
                        }}
                      >
                        {cat.label}
                      </span>
                    </div>
                  </div>
                </DarkCard>
              </a>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
