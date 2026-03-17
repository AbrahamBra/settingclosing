import { ScrollReveal } from './ui/ScrollReveal'

type Layer = 'ia' | 'methode' | 'hybrid' | 'humain'

const layerConfig: Record<Layer, { label: string; textClass: string; bgClass: string; borderClass: string }> = {
  ia: {
    label: 'IA',
    textClass: 'text-blue-400',
    bgClass: 'bg-blue-400/10',
    borderClass: 'border-blue-400/20',
  },
  methode: {
    label: 'Méthode',
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-400/10',
    borderClass: 'border-amber-400/20',
  },
  hybrid: {
    label: 'IA + Méthode',
    textClass: 'text-violet-400',
    bgClass: 'bg-violet-400/10',
    borderClass: 'border-violet-400/20',
  },
  humain: {
    label: 'Humain',
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400/10',
    borderClass: 'border-emerald-400/20',
  },
}

const steps = [
  {
    num: '01',
    label: 'Signal détecté',
    layer: 'ia' as Layer,
    desc: "Reactin surveille vos posts. Spyer surveille les comptes concurrents et complémentaires. L'IA identifie qui a interagi, quand, avec quel type de contenu.",
  },
  {
    num: '02',
    label: 'Profil analysé',
    layer: 'hybrid' as Layer,
    desc: "Claude analyse le profil : titre, bio, posts récents, connexions communes. Résultat déposé dans un Google Sheet — contacter ou non, contexte, segment probable.",
  },
  {
    num: '03',
    label: 'Scoring humain',
    layer: 'methode' as Layer,
    desc: "L'œil humain valide. 5 niveaux de maturité d'achat. Ce jugement s'affine en continu — c'est lui qui calibre tout le reste sur les deux premiers mois.",
  },
  {
    num: '04',
    label: 'Base de connaissance',
    layer: 'hybrid' as Layer,
    desc: "Claude est entraîné sur votre secteur : jargon, objections, exemples de messages qui ont marché. Le setter améliore la base à chaque itération via son journal de bord.",
  },
  {
    num: '05',
    label: 'Message co-rédigé',
    layer: 'hybrid' as Layer,
    desc: "Claude propose un draft. La méthode impose les règles : 5 phrases max, 2e phrase = fait précis tiré du profil, jamais de pitch dans le premier DM.",
  },
  {
    num: '06',
    label: 'Validé et envoyé',
    layer: 'humain' as Layer,
    desc: "Test du téléphone appliqué. Si ça ne sonnerait pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine.",
  },
  {
    num: '07',
    label: 'RDV qualifié',
    layer: 'humain' as Layer,
    desc: "Le setter convertit la conversation en rendez-vous. Pas de pitch — une ouverture. Les leads tièdes rentrent en nurturing vers la newsletter.",
  },
  {
    num: '08',
    label: 'Closing structuré',
    layer: 'humain' as Layer,
    desc: "Challenger Sale. Discovery structurée, valeur perçue augmentée. Vous closez plus, sans baisser le tarif.",
  },
]

const legend: { layer: Layer; label: string }[] = [
  { layer: 'ia', label: 'IA' },
  { layer: 'methode', label: 'Méthode' },
  { layer: 'hybrid', label: 'IA + Méthode' },
  { layer: 'humain', label: 'Humain' },
]

export function SectionTriptyque() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-5xl">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent text-center mb-4">
            Architecture
          </p>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-4">
            Ce que nous automatisons.<br className="hidden sm:block" /> Ce que nous encodons. Ce qui reste humain.
          </h2>
          <p className="font-sans text-text-muted text-center text-lg mb-10 max-w-2xl mx-auto">
            L&apos;IA détecte et co-rédige. La méthode filtre et calibre. L&apos;humain valide et décide.
            Aucun message ne part sans avoir passé les trois couches.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {legend.map(({ layer, label }) => {
              const cfg = layerConfig[layer]
              return (
                <span
                  key={layer}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold font-sans ${cfg.textClass} ${cfg.bgClass} ${cfg.borderClass}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${cfg.bgClass.replace('/10', '')} inline-block`} />
                  {label}
                </span>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Pipeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => {
            const cfg = layerConfig[step.layer]
            return (
              <ScrollReveal key={step.num} delay={i * 60}>
                <div className="bg-bg-secondary rounded-xl p-6 flex flex-col gap-3 h-full border border-black/5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif text-2xl text-accent/20 leading-none select-none">
                      {step.num}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider font-sans ${cfg.textClass} ${cfg.bgClass} ${cfg.borderClass}`}
                    >
                      {cfg.label}
                    </span>
                  </div>
                  <p className="font-sans font-semibold text-text-primary leading-snug">
                    {step.label}
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Note de bas */}
        <ScrollReveal delay={200}>
          <p className="font-sans text-text-muted text-sm text-center mt-10 max-w-xl mx-auto">
            La calibration de l&apos;ensemble prend environ deux mois. C&apos;est itératif — chaque échange
            terrain améliore la base de connaissance. Après ça, le système tourne.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
