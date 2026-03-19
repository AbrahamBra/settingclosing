import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'

const pipelines = [
  {
    id: 'outbound',
    eyebrow: 'Outbound',
    color: '#A78BFA',
    headline: 'Vous partez de zéro. On remplit l\u2019agenda.',
    description:
      'Pas encore d\u2019audience\u00a0? On prospecte pour vous sur LinkedIn avec un ciblage par signaux d\u2019achat. M\u00eame quota d\u2019invitations, 10x plus de r\u00e9sultats.',
    features: [
      { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste\u00a0: on cible ceux qui sont pr\u00eats' },
      { title: '\u22483 RDV / semaine', detail: 'Avec les m\u00eames 100 invitations LinkedIn' },
      { title: 'Skill IA sur-mesure', detail: 'Messages calibr\u00e9s sur votre march\u00e9, pas du template' },
    ],
  },
  {
    id: 'inbound',
    eyebrow: 'Inbound',
    color: '#FBBF24',
    headline: 'Vos leads entrent. Personne ne les qualifie.',
    description:
      'Vous postez, vos lead magnets performent, les leads arrivent. On les score en temps r\u00e9el et le setter les contacte directement \u2014 sans passer par l\u2019invitation.',
    features: [
      { title: 'Conseil lead magnet', detail: 'Sujets, formats, angles\u00a0: on cadre avec vous' },
      { title: 'Scoring int\u00e9gr\u00e9', detail: 'Chaque lead entrant est qualifi\u00e9 automatiquement' },
      { title: 'Setting direct', detail: 'Z\u00e9ro invitation, z\u00e9ro plafond LinkedIn' },
    ],
  },
  {
    id: 'nurturing',
    eyebrow: 'Nurturing',
    color: '#C87533',
    headline: 'Des milliers de contacts. Z\u00e9ro syst\u00e8me.',
    description:
      'Newsletter, webinars, t\u00e9l\u00e9chargements \u2014 tout dort dans un CRM. On construit le workflow qui score, nourrit et route vos contacts vers des RDV.',
    features: [
      { title: 'Scoring comportemental', detail: 'Engagement, r\u00e9cence, intent\u00a0: chaque lead a un score' },
      { title: 'S\u00e9quences personnalis\u00e9es', detail: 'Contenu adapt\u00e9 au niveau de maturit\u00e9 du lead' },
      { title: 'Routing vers appel', detail: 'Les leads chauds arrivent directement dans l\u2019agenda' },
    ],
  },
]

export function PipelineSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pipelines.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <div id={p.id} className="scroll-mt-24 h-full">
                <div
                  className="relative rounded-xl overflow-hidden border p-6 h-full flex flex-col"
                  style={{
                    borderColor: `${p.color}33`,
                    background: `linear-gradient(135deg, ${p.color}0F 0%, ${p.color}05 100%)`,
                  }}
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-widest"
                      style={{ color: p.color }}
                    >
                      {p.eyebrow}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-text-primary font-semibold text-lg mb-3">
                    {p.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {p.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {p.features.map((f) => (
                      <div key={f.title} className="flex items-start gap-2.5">
                        <span className="text-sm mt-0.5 shrink-0" style={{ color: p.color }}>&rarr;</span>
                        <div>
                          <p className="text-text-primary text-sm font-semibold">{f.title}</p>
                          <p className="text-text-secondary text-xs">{f.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={100}>
          <div className="text-center mt-16">
            <p className="text-text-secondary text-sm mb-6 max-w-xl mx-auto">
              Quel que soit votre niveau, les premiers RDV arrivent d&egrave;s la premi&egrave;re semaine.
            </p>
            <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel d&eacute;couverte
            </ButtonGlow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
