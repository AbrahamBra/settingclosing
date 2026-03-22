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
    title: 'Spyers concurrents',
    items: ['Audiences engagées', 'Likes, commentaires', 'Followers concurrents'],
  },
]

/* ── Outbound steps ─────────────────────────────────── */
const OUTBOUND_STEPS = [
  { title: 'Scoring IA', subtitle: 'Priorisation des prospects' },
  { title: 'Message personnalisé', subtitle: 'Angle choisi par le setter' },
  { title: 'Validation + envoi', subtitle: 'Humain avant chaque message' },
]

/* ── Inbound steps ──────────────────────────────────── */
const INBOUND_SOURCES = ['DMs', 'Commentaires', 'Lead magnets', 'Formulaires']
const INBOUND_QUALIF = [
  { title: 'Qualification LinkedIn', subtitle: 'Par le setter en DM' },
  { title: 'Qualification téléphonique', subtitle: 'Appel direct du lead' },
]

const SETTER_TAGS = ['Expertise marché', 'Data', 'Angles', 'Itération']

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
              Ton setter pilote
            </p>
            <p className="text-text-muted text-xs mb-3">
              + ta base de connaissance, enrichie chaque semaine
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
              La base de connaissance dépend du travail fait en amont avec toi : ton offre, ton marché, tes retours terrain.
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
                title="Routing intelligent"
                subtitle="Chaud → RDV · Tiède → nurturing · Froid → liste"
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
                Feedback : quel angle a marché, quel profil a converti
              </span>
              <span className="text-accent/40 text-lg leading-none">↻</span>
              <span className="text-text-muted text-[11px]">
                Remonte dans la base de connaissance
              </span>
            </div>
          </div>

          {/* ── Tagline ────────────────────────────────────── */}
          <p className="text-center text-text-secondary text-sm leading-relaxed max-w-xl mx-auto pt-2">
            L&rsquo;IA exécute. Ton setter pilote. Chaque semaine, l&rsquo;expertise marché s&rsquo;affine, les angles s&rsquo;aiguisent, les résultats s&rsquo;accélèrent.
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
                  <p>
                    Notre méthodologie combine la puissance des outils IA (Reactin, Spyer, Sales Navigator) pour la détection des signaux marché avec le jugement humain de ton setter dédié. Les listes sur-mesure ciblent ton ICP exact, les spyers surveillent les audiences de tes concurrents, et l&rsquo;inbound est qualifié en temps réel — par LinkedIn ou par téléphone selon le canal d&rsquo;entrée. Chaque semaine, les angles de prospection sont réévalués à partir des retours terrain, les messages affinés, et la base de connaissance mise à jour. Résultat : une prospection qui s&rsquo;améliore en continu, pas une campagne statique.
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
