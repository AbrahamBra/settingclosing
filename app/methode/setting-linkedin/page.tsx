import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { PhaseNav } from '@/components/ui/PhaseNav'
import { layerConfig, settingSteps } from '@/lib/pipeline-data'
import { telephoniqueSteps } from '@/lib/methode-telephonique-data'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Setting LinkedIn B2B : notre méthode complète (9 étapes) | Setting',
  description:
    'Notre méthode de setting LinkedIn en 9 étapes : détection des signaux d\u2019achat, ciblage IA, messages personnalisés + qualification téléphonique BANT. Pipeline B2B complet.',
  alternates: {
    canonical: 'https://www.setting.live/methode/setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/methode/setting-linkedin',
      'x-default': 'https://www.setting.live/methode/setting-linkedin',
    },
  },
  openGraph: {
    title: 'Setting LinkedIn B2B : notre méthode complète (9 étapes) | Setting',
    description:
      'Notre méthode de setting LinkedIn : 9 étapes de prospection signal-based + qualification téléphonique BANT. IA et validation humaine.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.setting.live/methode/setting-linkedin',
    images: [{ url: 'https://www.setting.live/api/og?title=M%C3%A9thode%20Setting%20LinkedIn&tag=M%C3%A9thode', width: 1200, height: 630, alt: 'Méthode Setting LinkedIn — Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn B2B : méthode complète en 9 étapes',
    description: 'Méthode de setting LinkedIn : détection IA des signaux d\u2019achat, co-rédaction des messages et qualification téléphonique BANT.',
    images: ['https://www.setting.live/api/og?title=M%C3%A9thode%20Setting%20LinkedIn&tag=M%C3%A9thode'],
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting LinkedIn B2B : m\u00e9thode compl\u00e8te en 9 \u00e9tapes',
  description:
    'M\u00e9thode de setting LinkedIn en 9 \u00e9tapes : d\u00e9tection des signaux d\u2019achat, ciblage IA, messages personnalis\u00e9s + qualification t\u00e9l\u00e9phonique BANT. Pipeline B2B complet.',
  url: 'https://www.setting.live/methode/setting-linkedin',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'M\u00e9thode', item: 'https://www.setting.live/methode/setting-linkedin' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment g\u00e9n\u00e9rer des RDV qualifi\u00e9s via LinkedIn en 9 \u00e9tapes',
  description: 'M\u00e9thode compl\u00e8te de prospection LinkedIn signal-based : de la d\u00e9tection des signaux d\u2019achat au RDV qualifi\u00e9, avec IA et validation humaine.',
  totalTime: 'P21D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '790',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Strat\u00e9gie & ciblage',
      text: 'D\u00e9finir l\u2019ICP avec l\u2019IA, s\u00e9lectionner les comptes \u00e0 monitorer, configurer les filtres Sales Navigator (fonctions, industrie, taille, triggers r\u00e9cents).',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Signaux inbound',
      text: 'Reactin surveille chaque interaction sur vos posts et ceux de vos concurrents. L\u2019IA identifie qui a r\u00e9agi, quand, et avec quel type de contenu.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Signaux outbound',
      text: 'Spyer monitore les comptes concurrents et compl\u00e9mentaires. Sales Navigator remonte les changements de poste et signaux d\u2019achat r\u00e9cents.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Profil analys\u00e9',
      text: 'Claude analyse le profil complet : titre, bio, posts r\u00e9cents, connexions communes. R\u00e9sultat d\u00e9pos\u00e9 dans un Google Sheet avec recommandation.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Scoring & ajustement',
      text: '5 niveaux de maturit\u00e9 d\u2019achat. On valide chaque profil et on ajuste les crit\u00e8res de ciblage au fil des retours terrain, chaque semaine.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Skill maison',
      text: 'Un skill Claude encod\u00e9 sur votre expertise : jargon m\u00e9tier, objections connues, exemples de messages qui ont d\u00e9croch\u00e9 des r\u00e9ponses.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Message co-r\u00e9dig\u00e9',
      text: 'Claude propose un draft ancr\u00e9 dans le skill. La m\u00e9thode impose 5 phrases max, 2e phrase = fait pr\u00e9cis tir\u00e9 du profil, jamais de pitch dans le premier DM.',
    },
    {
      '@type': 'HowToStep',
      position: 8,
      name: 'Valid\u00e9 et envoy\u00e9',
      text: 'Test du t\u00e9l\u00e9phone appliqu\u00e9 : si \u00e7a ne sonnerait pas naturel dit \u00e0 voix haute, on r\u00e9\u00e9crit. Aucun message ne part sans validation humaine.',
    },
    {
      '@type': 'HowToStep',
      position: 9,
      name: 'RDV qualifi\u00e9',
      text: 'On convertit la conversation en rendez-vous qualifi\u00e9. Le closeur re\u00e7oit le contexte complet. Les retours recalibrent tout le pipeline.',
    },
  ],
}

const phoneHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment qualifier des leads B2B par t\u00e9l\u00e9phone en 7 \u00e9tapes (m\u00e9thode BANT + Challenger Sale)',
  description: 'M\u00e9thode de qualification t\u00e9l\u00e9phonique des leads entrants B2B : grille BANT personnalis\u00e9e, ouverture Challenger Sale, scoring par maturit\u00e9 et routing automatis\u00e9.',
  totalTime: 'PT7M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '175',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Co-construction de la grille de qualification',
      text: 'Workshop de 90 minutes pour adapter le BANT (Budget, Authority, Need, Timeline) au march\u00e9 sp\u00e9cifique du client. D\u00e9finir les crit\u00e8res \u00e9liminatoires, les crit\u00e8res pond\u00e9r\u00e9s et les seuils de passage.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Intelligence pr\u00e9-appel',
      text: 'L\u2019IA enrichit la fiche du lead avant l\u2019appel : taille d\u2019entreprise, secteur, poste exact, historique d\u2019interactions. Le setter ouvre avec du contexte, pas \u00e0 l\u2019aveugle.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Ouverture Challenger Sale',
      text: 'Les 90 premi\u00e8res secondes posent le cadre avec la m\u00e9thode Challenger Sale : Teach (apporter un insight), Tailor (adapter au contexte), Take Control (diriger vers un diagnostic).',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Discovery & qualification BANT',
      text: '7 \u00e0 12 minutes de questions structur\u00e9es. Budget : \u00ab comment fonctionne votre processus d\u2019achat ? \u00bb. Authority : \u00ab qui d\u2019autre serait impliqu\u00e9 ? \u00bb. Need : \u00ab qu\u2019est-ce que \u00e7a vous co\u00fbte de ne pas avoir r\u00e9solu ce probl\u00e8me ? \u00bb. Timeline : \u00ab pourquoi maintenant ? \u00bb.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Scoring & verdict',
      text: 'Chaque crit\u00e8re BANT scor\u00e9 sur une \u00e9chelle pond\u00e9r\u00e9e. Verdict en 3 cat\u00e9gories : lead chaud (RDV closeur), lead ti\u00e8de (nurturing actif), lead froid (s\u00e9quence longue ou disqualification propre).',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Routing par maturit\u00e9',
      text: 'Le CRM route automatiquement : leads chauds re\u00e7oivent un Calendly dans les 2 minutes, leads ti\u00e8des entrent en nurturing personnalis\u00e9 selon le crit\u00e8re manquant, leads froids re\u00e7oivent un email de courtoisie.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Feedback loop hebdomadaire',
      text: 'Analyse hebdomadaire des donn\u00e9es terrain : quels crit\u00e8res pr\u00e9disent un RDV qui signe ? Quels signaux trompent ? Les retours recalibrent la grille, le script et les seuils de routing.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu\u2019est-ce que le setting LinkedIn\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le setting LinkedIn est une m\u00e9thode de prospection B2B qui consiste \u00e0 d\u00e9tecter les signaux d\u2019achat sur LinkedIn, puis \u00e0 engager une conversation personnalis\u00e9e avec le prospect. Contrairement au cold outreach classique, le setting repose sur un \u00e9change progressif et une validation humaine de chaque message avant envoi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la diff\u00e9rence entre setting LinkedIn et cold outreach\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le cold outreach envoie des messages \u00e0 des profils sans signal d\u2019int\u00e9r\u00eat. Le setting LinkedIn cible uniquement les profils qui ont montr\u00e9 un signal d\u2019achat (r\u00e9action \u00e0 un post, changement de poste, visite de profil). Chaque message est co-r\u00e9dig\u00e9 avec l\u2019IA puis valid\u00e9 par un humain. En pratique, les taux de r\u00e9ponse sont 3 \u00e0 5 fois sup\u00e9rieurs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de RDV g\u00e9n\u00e8re le setting LinkedIn par mois\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En moyenne, notre m\u00e9thode de setting LinkedIn g\u00e9n\u00e8re entre 8 et 15 RDV qualifi\u00e9s par mois, selon le march\u00e9 et la maturit\u00e9 du profil LinkedIn. Les premiers RDV arrivent d\u00e8s la premi\u00e8re semaine de d\u00e9marrage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le setting LinkedIn fonctionne-t-il pour le B2B\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le setting LinkedIn fonctionne en B2B. La m\u00e9thode utilise Sales Navigator, les signaux d\u2019achat professionnels et la qualification BANT pour cibler les d\u00e9cideurs. \u00c7a marche bien pour les solopreneurs, fondateurs et \u00e9quipes sales qui vendent des prestations \u00e0 forte valeur ajout\u00e9e.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le prix du setting LinkedIn externalis\u00e9\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chez Setting, l\u2019abonnement de setting LinkedIn externalis\u00e9 d\u00e9marre \u00e0 790\u00a0\u20ac/mois avec un setter d\u00e9di\u00e9, le ciblage IA et la validation humaine de chaque message. Le setup initial est offert. Un simulateur ROI est disponible sur la page tarifs.',
      },
    },
  ],
}

// ─── LinkedIn Phase Definitions ──────────────────────────────────────────────

const phases = [
  {
    id: 'detection',
    phaseLabel: 'Phase 1',
    title: 'D\u00c9TECTION',
    accentText: 'text-semantic-ia',
    steps: settingSteps.slice(0, 3),
    bg: 'bg-bg-secondary',
    gradient: 'from-[#A78BFA]/[0.02]',
  },
  {
    id: 'qualification',
    phaseLabel: 'Phase 2',
    title: 'QUALIFICATION',
    accentText: 'text-semantic-methode',
    steps: settingSteps.slice(3, 6),
    bg: 'bg-bg-primary',
    gradient: 'from-[#FBBF24]/[0.02]',
  },
  {
    id: 'conversion',
    phaseLabel: 'Phase 3',
    title: 'CONVERSION',
    accentText: 'text-semantic-humain',
    steps: settingSteps.slice(6, 9),
    bg: 'bg-bg-secondary',
    gradient: 'from-[#34D399]/[0.02]',
  },
] as const

// ─── Layer Legend Keys ────────────────────────────────────────────────────────

const legendLayers = ['ia', 'methode', 'hybrid', 'humain'] as const

// ─── T\u00e9l\u00e9phonique Framework Data ────────────────────────────────────────────────

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
    bad: '\u00cates-vous le d\u00e9cideur\u00a0?',
    good: 'Qui d\u2019autre serait impliqu\u00e9 dans cette d\u00e9cision\u00a0?',
  },
  {
    letter: 'N',
    title: 'Need',
    bad: 'Avez-vous un besoin\u00a0?',
    good: 'Qu\u2019est-ce que \u00e7a vous co\u00fbte aujourd\u2019hui de ne pas avoir r\u00e9solu ce probl\u00e8me\u00a0?',
  },
  {
    letter: 'T',
    title: 'Timeline',
    bad: 'Quel est votre timing\u00a0?',
    good: 'Qu\u2019est-ce qui fait que c\u2019est un sujet maintenant plut\u00f4t qu\u2019il y a 6 mois\u00a0?',
  },
]

const challengerPillars = [
  {
    title: 'Teach',
    desc: 'Apporter une observation terrain que le prospect ne connaissait pas sur son march\u00e9. Quelque chose qui change sa fa\u00e7on de voir son probl\u00e8me.',
  },
  {
    title: 'Tailor',
    desc: 'Adapter cet insight au contexte sp\u00e9cifique du prospect. Un CEO de PME tech et un directeur commercial en industrie n\u2019entendent pas le m\u00eame discours.',
  },
  {
    title: 'Take Control',
    desc: 'Diriger la conversation vers un diagnostic structur\u00e9. Le prospect se positionne parce qu\u2019on lui a pos\u00e9 les bonnes questions.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MethodePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(phoneHowToSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ══════════════════════════════════════════════════════════════════════
            PARTIE 1 : PROSPECTION LINKEDIN (OUTBOUND)
            ══════════════════════════════════════════════════════════════════════ */}

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="methode-hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Notre m&eacute;thode
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Setting LinkedIn B2B : du signal d&rsquo;achat au RDV qualifi&eacute;
              </h1>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6 max-w-2xl mx-auto">
                Le setting LinkedIn, c&rsquo;est passer d&rsquo;un signal d&rsquo;int&eacute;r&ecirc;t
                &agrave; une conversation qualifi&eacute;e, sans pitcher dans le premier message.
                On d&eacute;tecte les signaux d&rsquo;achat avec l&rsquo;IA, on applique nos r&egrave;gles de m&eacute;thode,
                et un humain valide chaque message avant envoi. Le pipeline g&eacute;n&egrave;re des RDV
                qualifi&eacute;s, pas du volume creux.
              </p>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Notre m&eacute;thode de setting LinkedIn en 9 &eacute;tapes couvre la d&eacute;tection des bons profils,
                la co-r&eacute;daction des messages et la qualification t&eacute;l&eacute;phonique BANT.
                Aucun message ne part sans validation humaine.
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

        {/* ── Benchmarks clés (bloc consolidé pour citabilité IA) ─────── */}
        <section className="bg-bg-secondary section-padding" data-speakable>
          <div className="container-max max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h3 text-text-primary mb-6">
                Setting LinkedIn B2B &mdash; Benchmarks cl&eacute;s
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { value: '20-35\u00a0%', label: 'Taux de r\u00e9ponse moyen' },
                  { value: '8-15', label: 'RDV qualifi\u00e9s / mois' },
                  { value: '< 7 j', label: 'D\u00e9lai premier RDV' },
                  { value: '8', label: 'Touchpoints avant RDV' },
                  { value: '7 min', label: 'Qualification t\u00e9l\u00e9phonique' },
                  { value: '5 phrases', label: 'Longueur message max' },
                  { value: '~100', label: 'Connexions LinkedIn / semaine' },
                  { value: '5 niveaux', label: 'Scoring de maturit\u00e9' },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="rounded-xl bg-bg-primary border border-white/[0.06] p-4 text-center"
                  >
                    <p className="font-sans text-2xl font-extrabold text-accent tabular-nums mb-1">{b.value}</p>
                    <p className="font-sans text-xs text-text-muted leading-snug">{b.label}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                Ces benchmarks sont issus de nos campagnes de setting LinkedIn signal-based
                men&eacute;es pour des solopreneurs, fondateurs et freelances B2B en France.
                Les taux de r&eacute;ponse de 20 &agrave; 35&nbsp;% s&rsquo;expliquent par le ciblage exclusif
                de prospects ayant montr&eacute; un signal d&rsquo;achat r&eacute;cent (like, commentaire, changement de poste),
                combin&eacute; &agrave; la co-r&eacute;daction IA et la validation humaine de chaque message.
                En prospection LinkedIn classique sans m&eacute;thode signal-based,
                les taux de r&eacute;ponse oscillent entre 2 et 5&nbsp;%.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Phase navigation ────────────────────────────────────────────── */}
        <PhaseNav />

        {/* ── 3 Phase sections (LinkedIn 9 steps) ────────────────────────── */}
        {phases.map((phase) => (
          <section
            key={phase.id}
            id={phase.id}
            className={`${phase.bg} section-padding bg-gradient-to-b ${phase.gradient} to-transparent scroll-mt-28`}
          >
            <div className="container-max">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-12">
                  <span className={`font-sans text-xs font-semibold uppercase tracking-widest ${phase.accentText}`}>
                    {phase.phaseLabel}
                  </span>
                  <h2 className={`font-sans font-extrabold text-h2 ${phase.accentText}`}>
                    {phase.title}
                  </h2>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
              </ScrollReveal>

              <div className="max-w-2xl mx-auto">
                {phase.steps.map((step, i) => (
                  <ScrollReveal key={step.num} delay={i * 60}>
                    <PipelineStep
                      num={step.num}
                      label={step.label}
                      layers={[...step.layers]}
                      desc={step.desc}
                      tools={[...step.tools]}
                      isLast={i === 2}
                      pedagogy={step.pedagogy}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        ))}


        {/* ══════════════════════════════════════════════════════════════════════
            PARTIE 2 : QUALIFICATION T\u00c9L\u00c9PHONIQUE (INBOUND)
            ══════════════════════════════════════════════════════════════════════ */}

        {/* ── Transition ──────────────────────────────────────────────────── */}
        <section id="telephone" className="bg-bg-primary section-padding scroll-mt-28">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: 'rgba(251,191,36,0.1)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.2)' }}>
                Module compl&eacute;mentaire
              </div>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Et quand les leads entrent&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                LinkedIn g&eacute;n&egrave;re des RDV outbound. Mais tu re&ccedil;ois aussi des leads entrants
                (lead magnets, formulaires, DMs, contenu). Chaque lead est appel&eacute;, qualifi&eacute;
                via une grille BANT construite avec toi, et rout&eacute; selon sa maturit&eacute;.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pourquoi qualifier par t\u00e9l\u00e9phone ───────────────────────────── */}
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
                  text: 'Un email prend 24\u00a0h \u00e0 \u00eatre lu, 48\u00a0h pour une r\u00e9ponse. Un appel qualifie en 7 minutes. Sur un lead chaud, chaque heure d\u2019attente divise par deux les chances de conversion.',
                },
                {
                  title: 'Profondeur',
                  text: 'Par \u00e9crit, on contr\u00f4le son image. Au t\u00e9l\u00e9phone, l\u2019h\u00e9sitation s\u2019entend. Le non-verbal vocal r\u00e9v\u00e8le ce que le texte cache\u00a0: une h\u00e9sitation sur le prix, une objection non formul\u00e9e.',
                },
                {
                  title: 'Routing imm\u00e9diat',
                  text: '\u00c0 la fin de l\u2019appel, le lead a un prochain pas\u00a0: un RDV closeur, une s\u00e9quence de nurturing cibl\u00e9e, ou une sortie propre. Pas de limbes.',
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
                Le framework BANT, adapt&eacute; &agrave; ton march&eacute;
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-3xl">
                Le BANT (Budget, Authority, Need, Timeline) est un framework de qualification.
                Il reste utile comme grille de lecture, pas comme interrogatoire.
                Chaque crit&egrave;re est pond&eacute;r&eacute; selon ton march&eacute;.
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
                        <span className="shrink-0 mt-0.5 text-red-400/60 text-xs font-semibold">&times;</span>
                        <p className="text-red-400/60 text-xs leading-relaxed italic">{item.bad}</p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <span className="shrink-0 mt-0.5 text-emerald-400/60 text-xs font-semibold">&rarr;</span>
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
                  ne suffit pas. Authority compte triple en vente grands comptes, Timeline compte triple
                  pour un produit saisonnier. La grille est construite avec toi. Pas de template.
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
                Issue de l&rsquo;&eacute;tude de Dixon et Adamson sur 6&nbsp;000 commerciaux B2B :
                les commerciaux qui apprennent quelque chose au prospect convertissent mieux
                que ceux qui cherchent &agrave; cr&eacute;er du lien. Nos setters s&rsquo;appuient sur trois piliers.
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
                  premi&egrave;res secondes posent le cadre. Le setter ouvre avec un insight sectoriel,
                  pas avec &laquo;&nbsp;Bonjour, je vous appelle pour&hellip;&nbsp;&raquo;.
                  Le prospect &eacute;coute parce qu&rsquo;il apprend quelque chose.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pipeline t\u00e9l\u00e9phonique (7 \u00e9tapes) ────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#FBBF24]">
                  Pipeline t&eacute;l&eacute;phonique
                </span>
                <h2 className="font-sans font-extrabold text-h2 text-[#FBBF24]">
                  7 &Eacute;TAPES
                </h2>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
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


        {/* ══════════════════════════════════════════════════════════════════════
            FOOTER SECTIONS
            ══════════════════════════════════════════════════════════════════════ */}

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">&Agrave; partir de 790&nbsp;&euro;/mois. Setup offert. Simulateur ROI int&eacute;gr&eacute;.</p>
                </a>
                <a href="/resultats" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">R&eacute;sultats</p>
                  <p className="font-sans text-sm text-text-muted">Ce que nos clients obtiennent concr&egrave;tement.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; remplir ton agenda&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Ce pipeline se calibre en deux mois. Apr&egrave;s &ccedil;a, tu te concentres sur les appels.
                La prospection tourne sans toi.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
