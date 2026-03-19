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
    slug: 'methodes-vente-b2b',
    title: 'Méthodes de vente B2B : Challenger, SPIN, SONCAS',
    label: 'Guide Méthodes',
    readTime: '10 min',
    color: '#FBBF24',
    borderClass: 'border-l-4 border-[#FBBF24]',
  },
]

// ─── All articles ────────────────────────────────────────────────────────────

const articles: Article[] = [
  // Setting
  { slug: 'script-setting-linkedin', title: 'Scripts de setting LinkedIn B2B : exemples et cadre complet', readTime: '11 min', category: 'setting' },
  { slug: 'relance-linkedin-b2b', title: 'Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur', readTime: '9 min', category: 'setting' },
  { slug: 'prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : méthode complète en 2026', readTime: '13 min', category: 'setting' },
  { slug: 'comment-devenir-setter-b2b', title: 'Comment devenir setter B2B en 2026', readTime: '11 min', category: 'setting' },
  { slug: 'cout-setter-b2b-prix', title: "Coût d'un setter B2B en 2026 : les vrais chiffres", readTime: '9 min', category: 'setting' },
  { slug: 'messages-linkedin-sans-reponse', title: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses", readTime: '8 min', category: 'setting' },
  { slug: 'signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min', category: 'setting' },
  { slug: 'ia-methode-humain-setting-linkedin', title: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn", readTime: '12 min', category: 'setting' },
  { slug: 'setter-b2b-definition', title: "C'est quoi un setter en B2B ?", readTime: '8 min', category: 'setting' },
  // Closing
  { slug: 'discovery-call-b2b', title: 'Discovery call B2B : structure, questions et erreurs à éviter', readTime: '10 min', category: 'methode' },
  { slug: 'gestion-objections-b2b', title: 'Gérer les objections en vente B2B : méthode et exemples', readTime: '9 min', category: 'methode' },
  { slug: 'script-closing-b2b', title: 'Scripts et phrases de closing B2B : cadre et exemples', readTime: '10 min', category: 'methode' },
  { slug: 'challenger-sale-definition', title: "Qu'est-ce que le Challenger Sale ?", readTime: '9 min', category: 'methode' },
  { slug: 'closer-b2b', title: 'Closer B2B : définition, compétences et comment en recruter un', readTime: '11 min', category: 'methode' },
  // Méthode
  { slug: 'qualification-leads-b2b', title: 'Qualifier un lead en B2B 2026 : méthodes, critères et exemples', readTime: '8 min', category: 'methode' },
  { slug: 'methode-soncas', title: 'Méthode SONCAS en B2B 2026 : définition, 6 leviers et exemples concrets', readTime: '10 min', category: 'methode' },
  { slug: 'methode-spin-selling', title: 'SPIN Selling 2026 : la méthode pour vendre en B2B sans forcer', readTime: '9 min', category: 'methode' },
  { slug: 'difference-setting-closing', title: 'Quelle est la différence entre setting et closing ?', readTime: '7 min', category: 'methode' },
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
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
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
