'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollReveal } from './ui/ScrollReveal'
import { layerConfig, closingTiers } from '@/lib/pipeline-data'

const settingPhases = [
  {
    phase: '01 – 03',
    phaseLabel: 'Phase 1',
    title: 'Détection',
    stepNums: '01 → 03',
    steps: ['Stratégie & ciblage', 'Signaux inbound', 'Signaux outbound'],
    summary:
      "L'IA et Sales Navigator repèrent les signaux d'achat — inbound (réactions à vos posts et ceux des concurrents) et outbound (changements de poste, prises de fonction). On valide chaque cible : c'est la fondation du reste.",
    tools: ['Sales Navigator', 'Reactin', 'Spyer', 'ICP', 'Lead magnets', 'Scoring'],
    layers: ['ia', 'hybrid'] as const,
    accentText: 'text-semantic-ia',
    accentBg: 'bg-semantic-ia/10',
    accentBorder: 'border-semantic-ia/20',
    accentBar: 'bg-semantic-ia',
  },
  {
    phase: '04 – 06',
    phaseLabel: 'Phase 2',
    title: 'Qualification',
    stepNums: '04 → 06',
    steps: ['Profil analysé', 'Scoring & ajustement', 'Skill maison'],
    summary:
      "Claude analyse chaque profil (titre, bio, posts récents). 5 niveaux de maturité d'achat scorés. On recalibre en continu. Si vous le souhaitez : un skill Claude encodé sur votre expertise — jargon métier, objections connues, messages qui ont marché.",
    tools: ['Claude', 'Google Sheet', 'Scoring', 'Feedback loop', 'Claude Skill', 'Journal de bord'],
    layers: ['hybrid', 'methode'] as const,
    accentText: 'text-semantic-methode',
    accentBg: 'bg-semantic-methode/10',
    accentBorder: 'border-semantic-methode/20',
    accentBar: 'bg-semantic-methode',
  },
  {
    phase: '07 – 09',
    phaseLabel: 'Phase 3',
    title: 'Conversion',
    stepNums: '07 → 09',
    steps: ['Message co-rédigé', 'Validé et envoyé', 'RDV qualifié'],
    summary:
      "Claude propose un draft ancré dans le skill. 5 phrases max, jamais de pitch dans le premier DM. Test du téléphone : si ça ne sonne pas naturel à voix haute, on réécrit. Aucun message ne part sans validation. On convertit la conversation en RDV.",
    tools: ['Claude', 'Règles méthode', 'Validation humaine', 'Setter', 'Nurturing'],
    layers: ['hybrid', 'humain'] as const,
    accentText: 'text-semantic-humain',
    accentBg: 'bg-semantic-humain/10',
    accentBorder: 'border-semantic-humain/20',
    accentBar: 'bg-semantic-humain',
  },
]

export function PipelineSection() {
  const [settingOpen, setSettingOpen] = useState(true)
  const [closingOpen, setClosingOpen] = useState(true)

  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Notre approche
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-4">
              On combine IA, méthode structurée et validation humaine.
            </h2>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Chaque lead passe par trois filtres avant qu&apos;un message parte :
              détection IA, calibrage méthode, validation humaine.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline Setting zone label — clickable */}
        <ScrollReveal>
          <button
            type="button"
            onClick={() => setSettingOpen((v) => !v)}
            className="flex items-center gap-3 mb-8 w-full group cursor-pointer"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-ia/20 bg-semantic-ia/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-ia">
              ⚡ Pipeline Setting
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span
              className={`text-text-muted text-sm transition-transform duration-300 ${
                settingOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
        </ScrollReveal>

        {/* Setting collapsible content */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: settingOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            {/* 3 phase cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {settingPhases.map((phase, i) => (
                <ScrollReveal key={phase.phase} delay={i * 100}>
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 ${phase.accentBar}`} />

                    {/* Phase label + step numbers */}
                    <div className="flex items-center justify-between mb-3 mt-1">
                      <span className={`text-xs font-semibold uppercase tracking-widest ${phase.accentText}`}>
                        {phase.phaseLabel}
                      </span>
                      <span className={`font-mono text-xs font-bold ${phase.accentText} ${phase.accentBg} px-2 py-0.5 rounded`}>
                        {phase.stepNums}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-base mb-2">{phase.title}</h3>

                    {/* Layer tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {phase.layers.map((layer) => {
                        const cfg = layerConfig[layer]
                        return (
                          <span
                            key={layer}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                          >
                            {cfg.label}
                          </span>
                        )
                      })}
                    </div>

                    {/* Step names list */}
                    <ul className="mb-3 space-y-1">
                      {phase.steps.map((step) => (
                        <li key={step} className={`text-xs font-mono ${phase.accentText}`}>
                          {step}
                        </li>
                      ))}
                    </ul>

                    {/* Summary */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{phase.summary}</p>

                    {/* Tool pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {phase.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`font-mono text-[10px] px-2 py-0.5 rounded border ${phase.accentText} ${phase.accentBg} ${phase.accentBorder}`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Setting showcase — "Concrètement" */}
            <ScrollReveal delay={100}>
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-text-primary font-semibold text-lg mb-6 text-center">
                  Concrètement, ça ressemble à quoi&nbsp;?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 — Ciblage Sales Navigator */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">🎯</span>
                        <span className="text-text-muted text-sm">Screenshot Sales Navigator à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        Ciblage Sales Navigator
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        On configure vos filtres pour capter les signaux d&apos;achat : changements de poste, interactions concurrents, levées de fonds.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 — Scoring Google Sheet + Cowork */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">📊</span>
                        <span className="text-text-muted text-sm">Screenshot scoring à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        Scoring automatisé sur Google Sheet
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        Chaque prospect est scoré automatiquement sur 5 niveaux de maturité. On recalibre en continu via Cowork.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 — Messages qui convertissent */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">💬</span>
                        <span className="text-text-muted text-sm">Screenshot messages à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        Des messages qui prennent des RDV
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        5 phrases max, jamais de pitch en premier DM. Co-rédigés par Claude, validés avant envoi. Des conversations qui débouchent sur des appels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Link to /methode */}
            <div className="text-center mt-8 mb-4">
              <Link href="/methode" className="text-text-muted hover:text-accent transition-colors">
                Découvrir les 9 étapes en détail →
              </Link>
            </div>
          </div>
        </div>

        {/* Pipeline Closing zone label — clickable */}
        <ScrollReveal>
          <button
            type="button"
            onClick={() => setClosingOpen((v) => !v)}
            className="flex items-center gap-3 mb-8 mt-4 w-full group cursor-pointer"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span
              className={`text-text-muted text-sm transition-transform duration-300 ${
                closingOpen ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
        </ScrollReveal>

        {/* Closing collapsible content */}
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: closingOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            {/* Closing tiers — horizontal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {closingTiers.map((tier, i) => (
                <ScrollReveal key={tier.level} delay={i * 100}>
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03] p-5 h-full">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-semantic-humain" />

                    {/* Level + threshold */}
                    <div className="flex items-center justify-between mb-3 mt-1">
                      <span className="text-semantic-humain text-xs font-semibold uppercase tracking-widest">
                        {tier.level}
                      </span>
                      <span className="font-mono text-xs font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded">
                        {tier.threshold}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-base mb-2">{tier.label}</h3>

                    {/* Layer tags */}
                    <div className="flex gap-1.5 mb-3">
                      {tier.layers.map((layer) => {
                        const cfg = layerConfig[layer]
                        return (
                          <span
                            key={layer}
                            className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                          >
                            {cfg.label}
                          </span>
                        )
                      })}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{tier.desc}</p>

                    {/* Tool pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {tier.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border text-semantic-humain bg-semantic-humain/10 border-semantic-humain/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Closing showcase */}
            <ScrollReveal delay={100}>
              <div className="mt-12 max-w-4xl mx-auto">
                <h3 className="text-text-primary font-semibold text-lg mb-6 text-center">
                  En pratique, c&ocirc;té closing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 — On assiste au RDV */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">🎥</span>
                        <span className="text-text-muted text-sm">Screenshot appel à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        On assiste à votre appel
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        On observe votre discovery en direct, ou on mène l&apos;appel de A à Z pendant que vous êtes en second. Débrief juste après pour ajuster.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 — Coaching en visio */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">🖥️</span>
                        <span className="text-text-muted text-sm">Extrait vidéo coaching à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        Coaching en visio, chaque semaine
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        1h en face à face. On décortique vos appels, on travaille le pricing, on répète jusqu&apos;à ce que ça devienne naturel.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 — On forme vos closers */}
                  <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                    <div className="aspect-video bg-surface-hover flex items-center justify-center">
                      <div className="text-center px-6">
                        <span className="text-4xl block mb-3">🎓</span>
                        <span className="text-text-muted text-sm">Vidéo formation closers à venir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-text-primary font-semibold text-sm mb-1">
                        On forme vos closers
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        Une fois la discovery et le pricing maîtrisés, on forme des closers dans votre équipe pour prendre le relais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={100}>
          <p className="text-center text-text-muted text-sm mt-12 max-w-xl mx-auto">
            Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels — pas sur la prospection.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
