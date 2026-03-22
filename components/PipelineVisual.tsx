'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface PipelineVisualProps {
  compact?: boolean
}

const PIPELINE_STEPS = [
  {
    title: 'Signaux détectés par IA',
    subtitle: 'Reactin, Spyer',
  },
  {
    title: 'Message IA personnalisé',
    subtitle: 'Angle choisi par le setter',
  },
  {
    title: 'Envoi qualifié',
    subtitle: 'Validation humaine',
  },
]

const SETTER_TAGS = ['Expertise marché', 'Data', 'Angles', 'Itération']

export function PipelineVisual({ compact = false }: PipelineVisualProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="w-full">
      {/* Section header — only in full mode */}
      {!compact && (
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              MÉTHODE
            </p>
            <h2 className="font-sans text-h2 text-text-primary">
              Comment ça marche
            </h2>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal delay={compact ? 0 : 100}>
        <div className="w-full space-y-4">

          {/* Setter banner */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 text-center">
            <p className="font-sans font-semibold text-text-primary mb-2">
              Ton setter pilote
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SETTER_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 border border-accent/20 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Down arrow from banner */}
          <div className="flex justify-center">
            <span className="text-accent text-lg leading-none">↓</span>
          </div>

          {/* Pipeline steps row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-stretch">
            {PIPELINE_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row md:items-center flex-1 min-w-0"
              >
                {/* Step card */}
                <div className="flex-1 min-w-0 bg-bg-secondary rounded-xl border border-white/[0.06] p-4 text-center">
                  <p className="font-sans font-semibold text-text-primary text-sm leading-snug mb-1">
                    {step.title}
                  </p>
                  <p className="text-text-muted text-xs leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                {/* Arrow connector between cards */}
                {i < PIPELINE_STEPS.length - 1 && (
                  <div className="flex items-center justify-center shrink-0 py-2 md:py-0 md:px-3">
                    {/* Mobile: vertical */}
                    <span className="flex md:hidden text-accent text-base leading-none">↓</span>
                    {/* Desktop: horizontal */}
                    <span className="hidden md:flex text-accent text-base leading-none">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Down arrows to feedback card */}
          <div className="flex justify-center">
            <span className="text-accent/60 text-lg leading-none">↓</span>
          </div>

          {/* Knowledge base card — centered */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-bg-secondary rounded-xl border border-white/[0.06] border-dashed p-4 text-center relative">
              {/* Feedback loop indicator */}
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent/60 mb-1">
                Boucle d'amélioration
              </p>
              <p className="font-sans font-semibold text-text-primary text-sm leading-snug">
                Base de connaissance enrichie chaque semaine
              </p>
              {/* Dashed feedback arrows on the sides */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 text-accent/40 text-xs leading-none hidden md:block">
                ↑
              </div>
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 text-xs leading-none hidden md:block">
                ↑
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-center text-text-secondary text-sm leading-relaxed max-w-xl mx-auto pt-2">
            L&rsquo;IA exécute. Ton setter pilote. Chaque semaine, l&rsquo;expertise marché s&rsquo;affine, les angles s&rsquo;aiguisent, les résultats s&rsquo;accélèrent.
          </p>

          {/* Expandable section — only in full mode */}
          {!compact && (
            <div className="pt-2">
              <div className="flex justify-center">
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="text-accent text-sm font-medium underline-offset-4 hover:underline transition-colors"
                  aria-expanded={expanded}
                >
                  {expanded ? 'Réduire ↑' : 'En savoir plus ↓'}
                </button>
              </div>

              {expanded && (
                <div className="mt-4 bg-bg-secondary rounded-xl border border-white/[0.06] p-5 text-text-secondary text-sm leading-relaxed max-w-2xl mx-auto">
                  <p>
                    Notre méthodologie combine la puissance des outils IA (Reactin, Spyer) pour la détection des signaux marché avec le jugement humain de ton setter dédié. Chaque semaine, les angles de prospection sont réévalués à partir des retours terrain, les messages affinés, et la base de connaissance mise à jour. Résultat : une prospection qui s&rsquo;améliore en continu, pas une campagne statique.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>
      </ScrollReveal>
    </div>
  )
}
