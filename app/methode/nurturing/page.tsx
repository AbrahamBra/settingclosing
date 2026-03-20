import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { nurturingSteps } from '@/lib/methode-nurturing-data'

export const metadata: Metadata = {
  title: 'Nurturing B2B — Scoring & funnel de maturité | ChallengersLab',
  description:
    'Scoring comportemental, routing automatique des leads chauds et création de revenus low ticket sur votre base existante. Exploitez enfin vos milliers de contacts.',
  alternates: {
    canonical: 'https://setting.live/methode/nurturing',
  },
  openGraph: {
    title: 'Nurturing B2B — Scoring & funnel de maturité | ChallengersLab',
    description:
      'Scoring comportemental, routing des leads chauds et création de revenus low ticket sur votre base existante.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://setting.live/methode/nurturing',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Nurturing B2B — Scoring & funnel de maturité',
  description:
    'Notre système de nurturing : scoring comportemental vs démographique, seuils calibrés, séquences TOFU/MOFU/BOFU et routing automatique.',
  url: 'https://setting.live/methode/nurturing',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://setting.live',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

/* ─── Scoring comparison data ──────────────────────────────────────────────── */

const scoringTypes = [
  {
    title: 'Scoring d\u00e9mographique',
    subtitle: 'Qui \u00eates-vous\u00a0?',
    color: '#C87533',
    items: [
      { label: 'Poste C-level', points: '+15 pts' },
      { label: 'Entreprise 50-200 pers.', points: '+10 pts' },
      { label: 'Secteur cible (SaaS, conseil)', points: '+10 pts' },
      { label: 'Localisation France', points: '+5 pts' },
    ],
    note: 'Statique. Un CEO reste un CEO. Mesure le potentiel th\u00e9orique.',
    weight: '30\u00a0%',
  },
  {
    title: 'Scoring comportemental',
    subtitle: 'Qu\u2019avez-vous fait r\u00e9cemment\u00a0?',
    color: '#C87533',
    items: [
      { label: 'Ouvre un email', points: '+1 pt' },
      { label: 'Clique un lien', points: '+3 pts' },
      { label: 'T\u00e9l\u00e9charge un cas client', points: '+5 pts' },
      { label: 'Visite la page tarifs', points: '+10 pts' },
      { label: 'Revient 3\u00d7 en une semaine', points: '+15 pts' },
    ],
    note: 'Dynamique. Mesure l\u2019intention r\u00e9elle et l\u2019engagement.',
    weight: '70\u00a0%',
  },
]

/* ─── Funnel levels ────────────────────────────────────────────────────────── */

const funnelLevels = [
  {
    label: 'TOFU',
    name: 'Top of Funnel',
    score: '0-25 pts',
    desc: 'Le contact d\u00e9couvre son probl\u00e8me. Il ne vous conna\u00eet pas encore, ou vaguement. Il a besoin de contenu \u00e9ducatif qui l\u2019aide \u00e0 comprendre sa situation.',
    content: 'Articles de blog, guides pratiques, posts LinkedIn \u00e9ducatifs',
    color: 'border-[#C87533]/20 bg-[#C87533]/[0.03]',
  },
  {
    label: 'MOFU',
    name: 'Middle of Funnel',
    score: '25-50 pts',
    desc: 'Le contact \u00e9value les solutions. Il sait qu\u2019il a un probl\u00e8me et cherche comment le r\u00e9soudre. Il compare, lit des cas clients, \u00e9value les options.',
    content: 'Comparatifs, \u00e9tudes de cas, webinars, calculateurs ROI',
    color: 'border-[#C87533]/30 bg-[#C87533]/[0.05]',
  },
  {
    label: 'BOFU',
    name: 'Bottom of Funnel',
    score: '50+ pts',
    desc: 'Le contact est pr\u00eat \u00e0 d\u00e9cider. Il conna\u00eet les options, il a besoin d\u2019un dernier \u00e9l\u00e9ment pour passer \u00e0 l\u2019action. Le routing vers un commercial se d\u00e9clenche \u00e0 ce stade.',
    content: 'Offres sp\u00e9cifiques, t\u00e9moignages clients, appel d\u00e9couverte',
    color: 'border-[#C87533]/40 bg-[#C87533]/[0.07]',
  },
]

export default function NurturingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C87533' }}>
                Setup Nurturing
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Faites remonter vos leads chauds. Mon&eacute;tisez les autres.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Vous avez des milliers de contacts — mais aucun revenu dessus.
                On pose un scoring pour identifier ceux qui sont pr&ecirc;ts &agrave; acheter maintenant,
                et on cr&eacute;e des lignes de revenus low ticket sur les autres.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {legendLayers.map((layer) => {
                  const cfg = layerConfig[layer]
                  return (
                    <span
                      key={layer}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Le nurturing, c'est quoi ─────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Le nurturing, c&rsquo;est quoi concr&egrave;tement&nbsp;?
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-6">
                <p className="text-text-secondary text-base leading-relaxed mb-4">
                  Dans votre base, <span className="text-text-primary font-semibold">environ 3&nbsp;% des contacts sont pr&ecirc;ts &agrave; acheter maintenant</span>.
                  Les 97&nbsp;% restants ont besoin de temps — quelques semaines pour certains, plusieurs mois pour d&rsquo;autres.
                </p>
                <p className="text-text-secondary text-base leading-relaxed mb-4">
                  Le nurturing, c&rsquo;est rester visible aupr&egrave;s des 97&nbsp;% jusqu&rsquo;&agrave; ce qu&rsquo;ils soient pr&ecirc;ts.
                  On leur envoie du contenu utile, pas des relances commerciales.
                  Le jour o&ugrave; le besoin se pr&eacute;cise, vous &ecirc;tes d&eacute;j&agrave; dans la shortlist.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  Mais pour que &ccedil;a fonctionne, il faut savoir <span className="text-text-primary font-semibold">qui est o&ugrave; dans sa r&eacute;flexion</span>,
                  et <span className="text-text-primary font-semibold">quel contenu envoyer &agrave; quel moment</span>.
                  D&rsquo;o&ugrave; le scoring, la segmentation et les s&eacute;quences.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Scoring : comportemental vs démographique ────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Le double scoring expliqu&eacute;
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-3xl">
                Deux types de scoring coexistent, et les confondre est une erreur courante.
                Le score final combine les deux, mais pas &agrave; parts &eacute;gales.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {scoringTypes.map((type) => (
                <ScrollReveal key={type.title}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-sans font-bold text-text-primary text-base">{type.title}</h3>
                      <span className="font-mono text-xs font-bold" style={{ color: type.color }}>{type.weight}</span>
                    </div>
                    <p className="text-text-muted text-xs mb-4 italic">{type.subtitle}</p>

                    <div className="space-y-2 mb-4 flex-1">
                      {type.items.map((item) => (
                        <div key={item.label} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary">{item.label}</span>
                          <span className="font-mono text-xs font-semibold" style={{ color: type.color }}>{item.points}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-text-muted text-xs leading-relaxed border-t border-white/[0.06] pt-3">{type.note}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-[#C87533]/[0.03] border border-[#C87533]/10 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold" style={{ color: '#C87533' }}>Pourquoi automatiser le scoring&nbsp;?</span>{' '}
                  Un humain ne peut pas surveiller 6&nbsp;500 contacts en parall&egrave;le. Le scoring automatis&eacute;
                  d&eacute;tecte les micro-signaux en temps r&eacute;el&nbsp;: un contact qui revient sur le site &agrave; 23h un dimanche
                  d&eacute;clenche la m&ecirc;me alerte que s&rsquo;il l&rsquo;avait fait &agrave; 10h un mardi. Sans automatisation,
                  ce signal passe inaper&ccedil;u. Avec, il est capt&eacute; et trait&eacute; dans l&rsquo;heure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Funnel de maturité ───────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Les 3 niveaux du funnel
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-3xl">
                Chaque contact est plac&eacute; dans un segment selon son score.
                Les seuils ne sont pas arbitraires — ils sont calibr&eacute;s sur les donn&eacute;es
                de conversion r&eacute;elles de votre activit&eacute;, et recalibr&eacute;s chaque semaine.
              </p>
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {funnelLevels.map((level, i) => (
                <ScrollReveal key={level.label} delay={i * 60}>
                  <div className={`rounded-2xl border p-6 ${level.color}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold tracking-widest" style={{ color: '#C87533' }}>
                        {level.label}
                      </span>
                      <span className="text-text-primary font-sans font-bold text-base">{level.name}</span>
                      <span className="ml-auto font-mono text-xs text-text-muted">{level.score}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-2">{level.desc}</p>
                    <p className="text-text-muted text-xs">
                      <span className="font-semibold">Contenu type&nbsp;:</span> {level.content}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-[#C87533]/[0.03] border border-[#C87533]/10 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold" style={{ color: '#C87533' }}>Adapter les seuils&nbsp;:</span>{' '}
                  les seuils 25/50 sont un point de d&eacute;part. Apr&egrave;s 4 semaines de donn&eacute;es,
                  on analyse&nbsp;: &agrave; quel score les leads qui ont sign&eacute; ont-ils &eacute;t&eacute; rout&eacute;s pour la premi&egrave;re fois&nbsp;?
                  Si c&rsquo;est 42 en moyenne, le seuil BOFU passe &agrave; 42, pas 50.
                  Les seuils bougent de 3 &agrave; 5 points par mois jusqu&rsquo;&agrave; stabilisation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Fin de boucle ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Que se passe-t-il en fin de boucle&nbsp;?
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-6">
                <p className="text-text-secondary text-base leading-relaxed mb-4">
                  Le nurturing n&rsquo;est pas lin&eacute;aire. C&rsquo;est une boucle. Quand un contact atteint le seuil BOFU,
                  il est rout&eacute; vers un commercial. Trois sc&eacute;narios possibles.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold">1</span>
                    <div>
                      <p className="text-text-primary font-semibold text-sm mb-0.5">Le contact signe.</p>
                      <p className="text-text-secondary text-sm leading-relaxed">Le nurturing a rempli son r&ocirc;le. Le contact sort du syst&egrave;me et entre dans votre base clients.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] text-xs font-bold">2</span>
                    <div>
                      <p className="text-text-primary font-semibold text-sm mb-0.5">L&rsquo;appel ne convertit pas — mais le contact reste engag&eacute;.</p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Le closeur note l&rsquo;objection (timing, budget, authority).
                        Le contact est <span className="text-text-primary font-semibold">re-scor&eacute; et repositionn&eacute; en MOFU</span> avec
                        une s&eacute;quence adapt&eacute;e &agrave; l&rsquo;objection identifi&eacute;e. Un &laquo;&nbsp;pas maintenant&nbsp;&raquo;
                        budget re&ccedil;oit du contenu ROI. Un &laquo;&nbsp;pas le bon timing&nbsp;&raquo; re&ccedil;oit une relance
                        cal&eacute;e sur son prochain trimestre. La boucle reprend.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-400/10 border border-red-400/20 text-red-400 text-xs font-bold">3</span>
                    <div>
                      <p className="text-text-primary font-semibold text-sm mb-0.5">Le contact se d&eacute;sengage compl&egrave;tement.</p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Aucune ouverture depuis 3 mois, aucune visite. Il entre dans une s&eacute;quence de r&eacute;activation
                        (3 emails espac&eacute;s sur 6 semaines). Si aucune r&eacute;action, il est archiv&eacute; proprement.
                        Mieux vaut une base propre de 4&nbsp;000 contacts engag&eacute;s qu&rsquo;une base de 10&nbsp;000 o&ugrave; 60&nbsp;%
                        ne lisent plus rien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-[#C87533]/[0.03] border border-[#C87533]/10 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold" style={{ color: '#C87533' }}>L&rsquo;essentiel&nbsp;:</span>{' '}
                  le nurturing s&rsquo;arr&ecirc;te quand le contact signe ou se d&eacute;sinscrit.
                  Tant qu&rsquo;il reste actif, la boucle tourne.
                  Un lead qui n&rsquo;a pas converti aujourd&rsquo;hui a juste besoin de plus de temps.
                  Le syst&egrave;me le lui donne, sans mobiliser vos commerciaux.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pipeline Steps ───────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Le pipeline en 7 &eacute;tapes
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-2xl">
                De l&rsquo;audit de la base au recalibrage des seuils, chaque &eacute;tape est document&eacute;e.
                Pour chacune, on montre l&rsquo;erreur classique et notre arbitrage.
              </p>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              {nurturingSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 60}>
                  <PipelineStep
                    num={step.num}
                    label={step.label}
                    layers={[...step.layers]}
                    desc={step.desc}
                    tools={[...step.tools]}
                    isLast={i === nurturingSteps.length - 1}
                    pedagogy={step.pedagogy}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting LinkedIn</p>
                  <p className="font-sans text-sm text-text-muted">Prospection outbound par signaux d'achat en 9 étapes.</p>
                </a>
                <a href="/methode/setting-telephonique" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting téléphonique</p>
                  <p className="font-sans text-sm text-text-muted">Qualification et routing de vos leads entrants.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">1\u00a0990\u00a0\u20ac de construction + 490\u00a0\u20ac/mois \u00d7 3.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Vous &ecirc;tes assis sur du revenu. On va le chercher.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                On regarde votre base et on vous dit combien elle peut rapporter.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Construire mon syst&egrave;me
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
