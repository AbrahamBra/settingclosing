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
      "L'IA et Sales Navigator repèrent les signaux d'achat — inbound (réactions à vos posts et ceux des concurrents) et outbound (changements de poste, prises de fonction). L'humain valide les cibles : c'est la fondation du reste.",
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
      "Claude analyse chaque profil (titre, bio, posts récents). 5 niveaux de maturité d'achat scorés. L'œil humain recalibre en continu. Pour les clients qui le souhaitent : un skill Claude encodé sur leur expertise — jargon métier, objections connues, messages qui ont marché.",
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
      "Claude propose un draft ancré dans le skill. 5 phrases max, jamais de pitch dans le premier DM. Test du téléphone appliqué : si ça ne sonne pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine. Le setter convertit la conversation en RDV.",
    tools: ['Claude', 'Règles méthode', 'Validation humaine', 'Setter', 'Nurturing'],
    layers: ['hybrid', 'humain'] as const,
    accentText: 'text-semantic-humain',
    accentBg: 'bg-semantic-humain/10',
    accentBorder: 'border-semantic-humain/20',
    accentBar: 'bg-semantic-humain',
  },
]

export function PipelineSection() {
  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Architecture
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-4">
              Ce que nous automatisons. Ce que nous encodons. Ce qui reste humain.
            </h2>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              L&apos;IA détecte et co-rédige. La méthode filtre et calibre. L&apos;humain valide et décide.
              Aucun message ne part sans avoir passé les trois couches.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline Setting zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-ia/20 bg-semantic-ia/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-ia">
              ⚡ Pipeline Setting
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

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

        {/* Link to /methode */}
        <div className="text-center mt-8 mb-4">
          <Link href="/methode" className="text-text-muted hover:text-accent transition-colors">
            Découvrir les 9 étapes en détail →
          </Link>
        </div>

        {/* Pipeline Closing zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8 mt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-semantic-humain/20 bg-semantic-humain/10 font-sans text-xs font-semibold uppercase tracking-widest text-semantic-humain">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

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

        {/* Closing showcase — "Concrètement" */}
        <ScrollReveal delay={100}>
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-text-primary font-semibold text-lg mb-6 text-center">
              Concrètement, ça ressemble à quoi&nbsp;?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 — Appel enregistré */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  {/* Placeholder — remplacer par <Image> quand les screenshots sont prêts */}
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">🎥</span>
                    <span className="text-text-muted text-sm">Screenshot appel à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Appel enregistré et analysé
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Chaque appel est enregistré. On le reprend ensemble pour identifier ce qui a fonctionné et ce qu&apos;on ajuste au prochain.
                  </p>
                </div>
              </div>

              {/* Card 2 — Brief PDF */}
              <div className="group relative rounded-xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                <div className="aspect-video bg-surface-hover flex items-center justify-center">
                  {/* Placeholder — remplacer par <Image> quand les screenshots sont prêts */}
                  <div className="text-center px-6">
                    <span className="text-4xl block mb-3">📄</span>
                    <span className="text-text-muted text-sm">Screenshot brief à venir</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    Brief personnalisé après chaque session
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    Un document de debrief avec les points clés, les objections rencontrées et les axes d&apos;amélioration pour le prochain appel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

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
