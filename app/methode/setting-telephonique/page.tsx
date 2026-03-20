import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { telephoniqueSteps } from '@/lib/methode-telephonique-data'

export const metadata: Metadata = {
  title: 'Setting téléphonique — Qualification BANT | ChallengersLab',
  description:
    'Qualification téléphonique B2B : grille BANT co-construite, Challenger Sale, scoring pondéré et routing par maturité. Zéro lead perdu.',
  alternates: {
    canonical: 'https://setting.live/methode/setting-telephonique',
  },
  openGraph: {
    title: 'Setting téléphonique — Qualification BANT | ChallengersLab',
    description:
      'Grille BANT co-construite, Challenger Sale, scoring pondéré et routing par maturité. Chaque lead est qualifié, scoré et routé.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://setting.live/methode/setting-telephonique',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting téléphonique — Qualification BANT',
  description:
    'Notre méthode de qualification téléphonique : grille BANT co-construite, approche Challenger Sale, scoring pondéré et routing par maturité.',
  url: 'https://setting.live/methode/setting-telephonique',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ChallengersLab',
    url: 'https://setting.live',
  },
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

/* ─── Framework cards ──────────────────────────────────────────────────────── */

const bantItems = [
  {
    letter: 'B',
    title: 'Budget',
    bad: 'Avez-vous un budget\u00a0?',
    good: 'Comment fonctionne votre processus d\u2019achat pour ce type de prestation\u00a0?',
  },
  {
    letter: 'A',
    title: 'Authority',
    bad: 'Êtes-vous le décideur\u00a0?',
    good: 'Qui d\u2019autre serait impliqué dans cette décision\u00a0?',
  },
  {
    letter: 'N',
    title: 'Need',
    bad: 'Avez-vous un besoin\u00a0?',
    good: 'Qu\u2019est-ce que ça vous coûte aujourd\u2019hui de ne pas avoir résolu ce problème\u00a0?',
  },
  {
    letter: 'T',
    title: 'Timeline',
    bad: 'Quel est votre timing\u00a0?',
    good: 'Qu\u2019est-ce qui fait que c\u2019est un sujet maintenant plutôt qu\u2019il y a 6 mois\u00a0?',
  },
]

const challengerPillars = [
  {
    title: 'Teach',
    desc: 'Apporter une observation terrain que le prospect ne connaissait pas sur son marché. Quelque chose qui change sa façon de voir son problème.',
  },
  {
    title: 'Tailor',
    desc: 'Adapter cet insight au contexte spécifique du prospect. Un CEO de PME tech et un directeur commercial en industrie n\u2019entendent pas le même discours, même s\u2019ils partagent le même problème.',
  },
  {
    title: 'Take Control',
    desc: 'Diriger la conversation vers un diagnostic structuré. Le prospect se positionne parce qu\u2019on lui a posé les bonnes questions.',
  },
]

export default function SettingTelephoniquePage() {
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
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#FBBF24' }}>
                Setting t&eacute;l&eacute;phonique
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Vos leads entrent. Un sales les qualifie. Aucun ne tombe entre les mailles.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Chaque lead entrant est appel&eacute;, qualifi&eacute; via une grille BANT construite avec vous,
                et rout&eacute; selon sa maturit&eacute;. Approche Challenger Sale, scoring pond&eacute;r&eacute;, z&eacute;ro lead oubli&eacute;.
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

        {/* ── Pourquoi qualifier par téléphone ─────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Pourquoi qualifier par t&eacute;l&eacute;phone&nbsp;?
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-2xl">
                Un formulaire donne une d&eacute;claration d&rsquo;intention. Un email, une r&eacute;ponse contr&ocirc;l&eacute;e.
                Au t&eacute;l&eacute;phone, on entend ce que le prospect n&rsquo;aurait jamais &eacute;crit.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Rapidit\u00e9',
                  text: 'Un email prend 24\u00a0h \u00e0 \u00eatre lu, 48\u00a0h \u00e0 obtenir une r\u00e9ponse. Un appel qualifie en 7 minutes. Sur un lead chaud, chaque heure d\u2019attente divise par deux les chances de conversion.',
                },
                {
                  title: 'Profondeur',
                  text: 'Par \u00e9crit, on contr\u00f4le son image. Au t\u00e9l\u00e9phone, l\u2019h\u00e9sitation s\u2019entend. L\u2019enthousiasme aussi. Le non-verbal vocal r\u00e9v\u00e8le ce que le texte cache\u00a0: une h\u00e9sitation sur le prix, une objection que le prospect n\u2019aurait pas formul\u00e9e par \u00e9crit.',
                },
                {
                  title: 'Routing imm\u00e9diat',
                  text: '\u00c0 la fin de l\u2019appel, le lead a un prochain pas\u00a0: un RDV closeur, une s\u00e9quence de nurturing cibl\u00e9e, ou une sortie propre. Pas de limbes, pas de \u00ab\u00a0on vous recontacte\u00a0\u00bb flou.',
                },
              ].map((card) => (
                <ScrollReveal key={card.title}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 h-full">
                    <h3 className="font-sans font-bold text-text-primary text-base mb-2" style={{ color: '#FBBF24' }}>
                      {card.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{card.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Framework BANT ───────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Le framework BANT, adapt&eacute; &agrave; votre march&eacute;
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-3xl">
                Le BANT (Budget, Authority, Need, Timeline) est un framework de qualification
                invent&eacute; par IBM dans les ann&eacute;es 60. Il reste utile comme grille de lecture,
                pas comme interrogatoire. Une question BANT g&eacute;n&eacute;rique remplit une case.
                Une question BANT adapt&eacute;e ouvre une conversation.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {bantItems.map((item) => (
                <ScrollReveal key={item.letter}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/20 font-mono text-sm font-bold text-[#FBBF24]">
                        {item.letter}
                      </span>
                      <h3 className="font-sans font-bold text-text-primary text-base">{item.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2.5 items-start">
                        <span className="shrink-0 mt-0.5 text-red-400/60 text-xs font-semibold">✕</span>
                        <p className="text-red-400/60 text-xs leading-relaxed italic">{item.bad}</p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <span className="shrink-0 mt-0.5 text-emerald-400/60 text-xs font-semibold">→</span>
                        <p className="text-emerald-400/60 text-xs leading-relaxed italic">{item.good}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-[#FBBF24]/[0.03] border border-[#FBBF24]/10 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-[#FBBF24]">Le principe&nbsp;:</span> le BANT seul
                  ne suffit pas. C&rsquo;est une grille de lecture, pas un interrogatoire.
                  Chaque crit&egrave;re est pond&eacute;r&eacute; selon votre march&eacute;&nbsp;: Authority compte triple
                  en vente grands comptes, Timeline compte triple pour un produit saisonnier.
                  La grille est construite avec vous. Pas de template.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Approche Challenger Sale ─────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                L&rsquo;approche Challenger Sale
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-3xl">
                Issue de l&rsquo;&eacute;tude de Matthew Dixon et Brent Adamson sur 6&nbsp;000 commerciaux B2B,
                la m&eacute;thode Challenger Sale a d&eacute;montr&eacute; que les commerciaux qui apprennent quelque chose
                au prospect convertissent mieux que ceux qui cherchent &agrave; cr&eacute;er du lien.
                Nos setters s&rsquo;appuient sur trois piliers.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {challengerPillars.map((pillar, i) => (
                <ScrollReveal key={pillar.title} delay={i * 60}>
                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 h-full">
                    <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#FBBF24' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-sans font-bold text-text-primary text-base mb-2">{pillar.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="bg-[#FBBF24]/[0.03] border border-[#FBBF24]/10 rounded-xl px-5 py-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-[#FBBF24]">En pratique&nbsp;:</span> les 90
                  premi&egrave;res secondes de l&rsquo;appel posent le cadre. Le setter ouvre avec un insight sectoriel,
                  pas avec &laquo;&nbsp;Bonjour, je vous appelle pour&hellip;&nbsp;&raquo;.
                  &laquo;&nbsp;On travaille avec des entreprises de votre secteur et on observe que [observation pr&eacute;cise].
                  Est-ce que &ccedil;a r&eacute;sonne avec votre situation&nbsp;?&nbsp;&raquo;
                  Le prospect &eacute;coute parce qu&rsquo;il apprend quelque chose.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pipeline Steps ───────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                Le pipeline en 7 &eacute;tapes
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-2xl">
                De la construction de la grille au feedback loop, chaque &eacute;tape est document&eacute;e.
                Pour chacune, on montre l&rsquo;erreur classique et notre arbitrage.
              </p>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              {telephoniqueSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 60}>
                  <PipelineStep
                    num={step.num}
                    label={step.label}
                    layers={[...step.layers]}
                    desc={step.desc}
                    tools={[...step.tools]}
                    isLast={i === telephoniqueSteps.length - 1}
                    pedagogy={step.pedagogy}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting LinkedIn</p>
                  <p className="font-sans text-sm text-text-muted">Prospection outbound par signaux d'achat en 9 étapes.</p>
                </a>
                <a href="/methode/nurturing" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setup Nurturing</p>
                  <p className="font-sans text-sm text-text-muted">Scoring, séquences et routing pour votre base existante.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">D\u00e8s 290\u00a0\u20ac de setup + 690\u00a0\u20ac/mois. Sans engagement.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Des leads qui entrent, des RDV qui sortent.
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Parlons de votre volume de leads et du routing qui manque.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Discuter de mon volume
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
