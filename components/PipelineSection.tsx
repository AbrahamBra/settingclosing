import { ScrollReveal } from './ui/ScrollReveal'
import { ButtonGlow } from './ui/ButtonGlow'

const pipelines = [
  {
    id: 'setting-linkedin',
    eyebrow: 'Setting LinkedIn',
    color: '#A78BFA',
    headline: 'Vous partez de z\u00e9ro. On remplit l\u2019agenda.',
    description:
      'Pas encore de leads\u00a0? On prospecte pour vous sur LinkedIn avec un ciblage par signaux d\u2019achat. M\u00eame quota d\u2019invitations, 10x plus de r\u00e9sultats.',
    features: [
      { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste\u00a0: on cible ceux qui sont pr\u00eats' },
      { title: '\u22483 RDV / semaine', detail: 'Avec les m\u00eames 100 invitations LinkedIn' },
      { title: 'Skill IA sur-mesure', detail: 'Messages calibr\u00e9s sur votre march\u00e9, pas du template' },
    ],
  },
  {
    id: 'setting-telephone',
    eyebrow: 'Setting t\u00e9l\u00e9phonique',
    color: '#FBBF24',
    headline: 'Vos leads entrent. Personne ne d\u00e9croche.',
    description:
      'Vos lead magnets g\u00e9n\u00e8rent des leads, vos formulaires se remplissent. Le sales appelle, qualifie, et route\u00a0: RDV si chaud, newsletter si ti\u00e8de, boucle nurturing si froid.',
    features: [
      { title: 'Qualification t\u00e9l\u00e9phonique', detail: 'Un sales d\u00e9di\u00e9 appelle chaque lead entrant' },
      { title: 'Tri intelligent', detail: 'Chaud \u2192 RDV, ti\u00e8de \u2192 newsletter, froid \u2192 nurturing' },
      { title: 'Z\u00e9ro lead perdu', detail: 'Chaque contact est rout\u00e9, rien ne tombe dans l\u2019oubli' },
    ],
  },
  {
    id: 'nurturing',
    eyebrow: 'Nurturing',
    color: '#C87533',
    headline: 'Des milliers de contacts. Z\u00e9ro syst\u00e8me.',
    description:
      'Base dormante ou active \u2014 newsletter, webinars, t\u00e9l\u00e9chargements. On construit le workflow qui score, nourrit et route vos contacts vers des RDV.',
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
