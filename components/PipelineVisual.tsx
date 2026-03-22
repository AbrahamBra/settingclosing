'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface PipelineVisualProps {
  compact?: boolean
}

/* ── Outbound sources ───────────────────────────────── */
const OUTBOUND_SOURCES = [
  {
    title: 'Liste sur-mesure',
    items: ['Sales Navigator', 'Filtres ICP', 'Scraping ciblé'],
  },
  {
    title: 'Veille concurrents',
    items: ['Qui like tes concurrents', 'Qui commente chez eux', 'Leurs nouveaux followers'],
  },
]

/* ── Outbound steps ─────────────────────────────────── */
const OUTBOUND_STEPS = [
  { title: 'On trie', subtitle: 'L\u2019IA score et priorise les meilleurs profils' },
  { title: 'On écrit', subtitle: 'Message personnalisé, angle choisi par ton setter' },
  { title: 'On vérifie, on envoie', subtitle: 'Rien ne part sans validation humaine' },
]

/* ── Inbound steps ──────────────────────────────────── */
const INBOUND_SOURCES = ['DMs', 'Commentaires', 'Lead magnets', 'Formulaires']
const INBOUND_QUALIF = [
  { title: 'Qualification LinkedIn', subtitle: 'Ton setter répond en DM' },
  { title: 'Qualification téléphonique', subtitle: 'On appelle directement le lead' },
]

const SETTER_TAGS = ['Connaissance marché', 'Pilotage data', 'Choix des angles', 'Itération continue']

/* ── Arrow component ────────────────────────────────── */
function Arrow({ direction = 'down', muted = false }: { direction?: 'down' | 'right'; muted?: boolean }) {
  const color = muted ? 'text-accent/40' : 'text-accent'
  if (direction === 'right') {
    return <span className={`${color} text-base leading-none hidden md:inline`}>→</span>
  }
  return <span className={`${color} text-base leading-none`}>↓</span>
}

/* ── Small card ─────────────────────────────────────── */
function StepCard({ title, subtitle, accent }: { title: string; subtitle: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 text-center ${
      accent
        ? 'bg-accent/5 border-accent/20'
        : 'bg-bg-secondary border-white/[0.06]'
    }`}>
      <p className="font-sans font-semibold text-text-primary text-xs leading-snug mb-0.5">
        {title}
      </p>
      <p className="text-text-muted text-[11px] leading-relaxed">
        {subtitle}
      </p>
    </div>
  )
}

export function PipelineVisual({ compact = false }: PipelineVisualProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="w-full">
      {/* Section header — only in full mode */}
      {!compact && (
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              MÉTHODE
            </p>
            <h2 className="font-sans text-h2 font-extrabold text-text-primary">
              Comment ça marche
            </h2>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal delay={compact ? 0 : 100}>
        <div className="w-full space-y-5">

          {/* ── Setter + Base de connaissance (top) ─────────── */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 text-center">
            <p className="font-sans font-bold text-text-primary text-base mb-1">
              Ton setter pilote tout
            </p>
            <p className="text-text-muted text-xs mb-3">
              Il s&rsquo;appuie sur ta base de connaissance — enrichie chaque semaine
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SETTER_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent/10 border border-accent/20 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-text-muted text-[11px] mt-3 italic">
              Cette base depend du travail qu&rsquo;on fait ensemble en amont : comprendre ton offre, ton marche, ton client ideal.
            </p>
          </div>

          {/* ── Arrow down ─────────────────────────────────── */}
          <div className="flex justify-center">
            <Arrow />
          </div>

          {/* ── Two columns: Outbound | Inbound ────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── OUTBOUND column ──────────────────────────── */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#A78BFA]/10 border border-[#A78BFA]/20 text-[#A78BFA]">
                  Outbound
                </span>
              </div>

              {/* Two source cards side by side */}
              <div className="grid grid-cols-2 gap-3">
                {OUTBOUND_SOURCES.map((source) => (
                  <div
                    key={source.title}
                    className="bg-bg-secondary rounded-xl border border-white/[0.06] p-3"
                  >
                    <p className="font-sans font-semibold text-text-primary text-xs mb-2 text-center">
                      {source.title}
                    </p>
                    <ul className="space-y-1">
                      {source.items.map((item) => (
                        <li key={item} className="text-text-muted text-[11px] flex items-start gap-1.5">
                          <span className="text-accent/60 mt-0.5 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <Arrow />
              </div>

              {/* Outbound pipeline steps */}
              <div className="space-y-2">
                {OUTBOUND_STEPS.map((step, i) => (
                  <div key={step.title}>
                    <StepCard title={step.title} subtitle={step.subtitle} />
                    {i < OUTBOUND_STEPS.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <Arrow muted />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── INBOUND column ───────────────────────────── */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24]">
                  Inbound
                </span>
              </div>

              {/* Sources */}
              <div className="bg-bg-secondary rounded-xl border border-white/[0.06] p-3">
                <p className="font-sans font-semibold text-text-primary text-xs mb-2 text-center">
                  Leads entrants
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {INBOUND_SOURCES.map((source) => (
                    <span
                      key={source}
                      className="px-2 py-0.5 rounded-full text-[11px] text-text-muted bg-white/[0.04] border border-white/[0.06]"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <Arrow />
              </div>

              {/* Qualification — two options */}
              <div className="space-y-2">
                <p className="text-text-muted text-[11px] text-center uppercase tracking-wider font-semibold">
                  Qualification (selon le canal)
                </p>
                {INBOUND_QUALIF.map((step) => (
                  <StepCard key={step.title} title={step.title} subtitle={step.subtitle} />
                ))}
              </div>

              {/* Routing */}
              <div className="flex justify-center pt-1">
                <Arrow />
              </div>
              <StepCard
                title="Tri des leads"
                subtitle="Chaud → RDV · Tiède → relance · Froid → liste"
                accent
              />
            </div>
          </div>

          {/* ── Convergence → RDV qualifié ─────────────────── */}
          <div className="flex justify-center">
            <Arrow />
          </div>

          <div className="flex justify-center">
            <div className="bg-accent/10 border-2 border-accent/30 rounded-xl px-8 py-4 text-center">
              <p className="font-sans font-bold text-accent text-sm">
                RDV qualifié
              </p>
            </div>
          </div>

          {/* ── Feedback loop arrow back up ─────────────────── */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-accent/40 text-base leading-none">↓</span>
              <span className="text-text-muted text-[11px] px-4 text-center">
                Qu&rsquo;est-ce qui a marche ? Quel profil a converti ? Quel angle a accroche ?
              </span>
              <span className="text-accent/40 text-lg leading-none">↻</span>
              <span className="text-text-muted text-[11px]">
                Tout remonte dans ta base de connaissance
              </span>
            </div>
          </div>

          {/* ── Tagline ────────────────────────────────────── */}
          <p className="text-center text-text-secondary text-sm leading-relaxed max-w-xl mx-auto pt-2">
            L&rsquo;IA fait le gros du travail. Ton setter pilote tout. Et chaque semaine, le systeme s&rsquo;affine avec tes retours.
          </p>

          {/* ── Expandable section — only in full mode ─────── */}
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
                  <p className="mb-3">
                    Concretement : on construit des listes avec Sales Navigator qui ciblent exactement ton client ideal. En parallele, on surveille qui interagit avec tes concurrents pour capter les prospects deja en reflexion.
                  </p>
                  <p className="mb-3">
                    Cote inbound, chaque lead qui arrive — que ce soit un DM, un commentaire ou un formulaire — est qualifie par ton setter. Selon le canal, c&rsquo;est fait en DM LinkedIn ou par telephone.
                  </p>
                  <p>
                    Et chaque semaine, on ajuste : quels angles marchent, quels profils repondent, quels messages convertissent. C&rsquo;est ca qui fait que mois 3 n&rsquo;a rien a voir avec mois 1.
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
