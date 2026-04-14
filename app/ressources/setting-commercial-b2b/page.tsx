import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Setting commercial B2B : guide complet du setter (2026)',
  description:
    "Le setting commercial est la prospection qui précède le closing. Définition du setter, méthode LinkedIn signal-based en 9 étapes, coût réel et programme 3 mois.",
  openGraph: {
    title: 'Setting commercial B2B : guide complet (2026)',
    description:
      "Setter definition, setting LinkedIn, m\u00e9thode signal-based, 9 \u00e9tapes, outils, co\u00fbt r\u00e9el et programme de 3 mois. Le guide pilier du setting commercial B2B.",
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: 'https://www.setting.live/api/og?title=Setting%20commercial%20B2B%20%3A%20guide%20complet&tag=Guide%20pilier', width: 1200, height: 630, alt: 'Setting commercial B2B : guide complet \u2014 Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting commercial B2B : guide complet (2026)',
    description: 'Setter definition, setting LinkedIn, 9 \u00e9tapes, outils et co\u00fbt r\u00e9el du setting commercial.',
    images: ['https://www.setting.live/api/og?title=Setting%20commercial%20B2B%20%3A%20guide%20complet&tag=Guide%20pilier'],
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-commercial-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-commercial-b2b',
      'x-default': 'https://www.setting.live/ressources/setting-commercial-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-commercial-b2b#article',
  headline: 'Setting commercial B2B : guide complet, setter definition et setting LinkedIn',
  description:
    "Le setting commercial est la phase de prospection qui pr\u00e9c\u00e8de le closing en B2B. Guide complet : setter definition, m\u00e9thode LinkedIn signal-based, 9 \u00e9tapes, diff\u00e9rence setting/closing, co\u00fbt et programme 3 mois.",
  author: {
    '@type': 'Person',
    '@id': 'https://www.setting.live/a-propos#abraham',
    name: 'Abraham Brakha',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    jobTitle: 'Fondateur & Automatisation IA',
    sameAs: ['https://www.linkedin.com/in/abraham-brakha'],
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.setting.live/icon.png',
      width: 512,
      height: 512,
    },
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-26',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-commercial-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-commercial-b2b',
  },
  image: 'https://www.setting.live/ressources/setting-commercial-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Setting commercial',
  wordCount: 5200,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: [
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/setting-commercial-b2b#setting-commercial',
      name: 'Setting commercial',
      description: "Phase de prospection B2B qui pr\u00e9c\u00e8de le closing. Le setter d\u00e9tecte les signaux d'achat sur LinkedIn, r\u00e9dige des messages personnalis\u00e9s, qualifie les leads et d\u00e9croche des rendez-vous qualifi\u00e9s pour le closeur.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/setting-commercial-b2b#setter-definition',
      name: 'Setter B2B',
      alternateName: ['Setter', 'SDR', 'Sales Development Representative'],
      description: "Commercial sp\u00e9cialis\u00e9 dans la prospection sortante. Il identifie les prospects, les contacte via LinkedIn, qualifie leur int\u00e9r\u00eat et d\u00e9croche des rendez-vous pour le closeur. \u00c9quivalent fran\u00e7ais du SDR.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
    {
      '@type': 'DefinedTerm',
      '@id': 'https://www.setting.live/ressources/setting-commercial-b2b#setting-linkedin',
      name: 'Setting LinkedIn',
      description: "M\u00e9thode de prospection B2B qui d\u00e9tecte les signaux d'achat sur LinkedIn (r\u00e9actions, changements de poste, visites de profil) et engage le prospect avec un message contextualis\u00e9 valid\u00e9 par un humain. Taux de r\u00e9ponse : 15-35 %.",
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'Glossaire Setting B2B',
        url: 'https://www.setting.live/glossaire',
      },
    },
  ],
  mentions: [
    { '@type': 'Thing', name: 'LinkedIn Sales Navigator', url: 'https://business.linkedin.com/sales-solutions' },
    { '@type': 'Thing', name: 'Reactin', url: 'https://www.reactin.io' },
    { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://claude.ai' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Les 9 \u00e9tapes du setting LinkedIn',
  description: "Pipeline en 9 \u00e9tapes pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s via LinkedIn, organis\u00e9 en 3 phases : D\u00e9tection, Qualification, Conversion.",
  totalTime: 'P90D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '790' },
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Monitorer les signaux inbound', text: "Identifier qui a r\u00e9agi \u00e0 vos posts LinkedIn (likes, commentaires, r\u00e9actions)." },
    { '@type': 'HowToStep', position: 2, name: 'Monitorer les signaux outbound', text: "Surveiller les interactions sur les posts de comptes concurrents ou compl\u00e9mentaires." },
    { '@type': 'HowToStep', position: 3, name: 'Rep\u00e9rer les signaux de changement', text: "D\u00e9tecter les changements de poste, lev\u00e9es de fonds et recrutements en cours." },
    { '@type': 'HowToStep', position: 4, name: 'V\u00e9rifier la correspondance ICP', text: "Confirmer que le profil correspond au client id\u00e9al : fonction, secteur, taille, ticket." },
    { '@type': 'HowToStep', position: 5, name: 'Analyser le profil en profondeur', text: "Lire les 3 \u00e0 5 derniers posts, comprendre le contexte, identifier un angle d'accroche." },
    { '@type': 'HowToStep', position: 6, name: 'Classer le prospect par maturit\u00e9', text: "Scorer de froid (\u00e9tape 1) \u00e0 chaud (\u00e9tape 5). Seuls les niveaux 4-5 passent en appel." },
    { '@type': 'HowToStep', position: 7, name: 'R\u00e9diger le premier message', text: "Ancrer sur le signal identifi\u00e9, 3 \u00e0 5 phrases max, aucun pitch. Valider avant envoi." },
    { '@type': 'HowToStep', position: 8, name: 'G\u00e9rer la conversation', text: "R\u00e9pondre humainement, qualifier progressivement, approfondir le contexte." },
    { '@type': 'HowToStep', position: 9, name: 'Proposer le rendez-vous', text: "Quand le prospect montre un int\u00e9r\u00eat explicite, proposer un cr\u00e9neau et transmettre le brief complet au closeur." },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que le setting commercial ?",
    answer:
      "Le setting commercial est la phase de prospection qui pr\u00e9c\u00e8de le closing dans un cycle de vente B2B. Le setter identifie des prospects qualifi\u00e9s sur LinkedIn, d\u00e9tecte des signaux d'achat (r\u00e9actions \u00e0 des posts, changements de poste), r\u00e9dige des messages contextualis\u00e9s, qualifie les leads et d\u00e9croche des rendez-vous pour le closeur. Chaque message est valid\u00e9 par un humain. Ce n'est ni de l'automatisation, ni de l'outreach de masse.",
  },
  {
    question: "C'est quoi un setter en B2B ? (setter definition)",
    answer:
      "Un setter B2B est un commercial sp\u00e9cialis\u00e9 dans la prospection sortante. Il identifie des prospects pertinents, les contacte via LinkedIn ou email, qualifie leur int\u00e9r\u00eat et d\u00e9croche des rendez-vous qualifi\u00e9s. Le setter ne vend pas et ne ferme pas de deals. C'est l'\u00e9quivalent fran\u00e7ais du SDR (Sales Development Representative).",
  },
  {
    question: "Quelle est la diff\u00e9rence entre un setter et un closeur ?",
    answer:
      "Le setter g\u00e9n\u00e8re les rendez-vous qualifi\u00e9s. Le closeur les convertit en clients. Le setter travaille en amont : d\u00e9tection des signaux, r\u00e9daction des messages, qualification. Le closeur travaille pendant l'appel : discovery, proposition de valeur, gestion des objections, signature. Les deux r\u00f4les demandent des comp\u00e9tences diff\u00e9rentes et s'optimisent ind\u00e9pendamment.",
  },
  {
    question: "Le setting LinkedIn fonctionne-t-il vraiment pour les solopreneurs ?",
    answer:
      "Oui, \u00e0 condition d'utiliser une approche signal-based. Le setting LinkedIn g\u00e9n\u00e9rique (messages non personnalis\u00e9s en masse) a un taux de r\u00e9ponse inf\u00e9rieur \u00e0 3 %. Le setting sur signal (contacter des prospects qui ont r\u00e9agi \u00e0 un contenu li\u00e9 \u00e0 votre offre) d\u00e9passe r\u00e9guli\u00e8rement 20 %. La diff\u00e9rence n'est pas la plateforme, c'est la m\u00e9thode.",
  },
  {
    question: "Combien de RDV par mois avec un programme de setting B2B ?",
    answer:
      "Sur un programme calibr\u00e9 avec des signaux de qualit\u00e9, on vise 8 \u00e0 15 RDV qualifi\u00e9s par mois en r\u00e9gime de croisi\u00e8re. Les premiers RDV arrivent d\u00e8s la premi\u00e8re semaine. Le volume se stabilise en 6 \u00e0 8 semaines, le temps de calibrer les signaux et de construire la base de connaissance.",
  },
  {
    question: "Faut-il automatiser le setting ou garder un setter humain ?",
    answer:
      "L'automatisation compl\u00e8te produit des r\u00e9sultats proches de z\u00e9ro. Les prospects d\u00e9tectent les messages automatiques. Ce qui fonctionne : un mod\u00e8le hybride o\u00f9 l'IA d\u00e9tecte les signaux et propose des drafts, et o\u00f9 l'humain valide chaque message avant envoi. De la co-r\u00e9daction assist\u00e9e, pas de l'automatisation.",
  },
  {
    question: "Combien co\u00fbte un programme de setting B2B externalis\u00e9 ?",
    answer:
      "Un programme complet incluant setter d\u00e9di\u00e9, outils, base de connaissance et coaching closing co\u00fbte entre 2 000 et 5 000 \u20ac par mois. \u00c0 comparer avec un commercial interne (45 000 \u00e0 70 000 \u20ac par an charg\u00e9) ou votre propre temps perdu \u00e0 prospecter au lieu de facturer.",
  },
  {
    question: "Setting LinkedIn ou prospection t\u00e9l\u00e9phonique : que choisir ?",
    answer:
      "Les deux sont compl\u00e9mentaires. Le setting LinkedIn g\u00e9n\u00e8re le premier contact et d\u00e9croche un rendez-vous. La qualification t\u00e9l\u00e9phonique approfondit l'int\u00e9r\u00eat via la grille BANT. Chez Setting, les deux sont int\u00e9gr\u00e9s dans un pipeline unique. Le choix d\u00e9pend de l'endroit o\u00f9 se trouvent vos acheteurs.",
  },
  {
    question: "Faut-il s\u00e9parer setting et closing ?",
    answer:
      "Pas forc\u00e9ment d\u00e8s le d\u00e9part. La s\u00e9paration devient pertinente quand vous avez valid\u00e9 que votre offre se vend et que vous \u00eates limit\u00e9 soit par le nombre de RDV, soit par votre taux de conversion. D\u00e9l\u00e9guer l'un des deux lib\u00e8re du volume.",
  },
  {
    question: "Est-ce que le setting B2B fonctionne dans tous les secteurs ?",
    answer:
      "Non. Le setting LinkedIn signal-based fonctionne l\u00e0 o\u00f9 les acheteurs sont actifs sur LinkedIn : conseil, SaaS, formation, coaching, agences, recrutement. Il fonctionne moins bien dans les secteurs o\u00f9 les d\u00e9cideurs ne sont pas sur LinkedIn (artisanat, B2C) ou sur des offres \u00e0 moins de 500 \u20ac.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Setting commercial B2B',
      item: 'https://www.setting.live/ressources/setting-commercial-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingCommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema, howToSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Setting commercial B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide pilier
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting commercial B2B : guide complet du setter et du setting LinkedIn
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le setting commercial, c&apos;est tout ce qui se passe avant l&apos;appel de vente.
              D&eacute;tecter un signal sur LinkedIn. Lire un profil. &Eacute;crire un message qui
              d&eacute;clenche une r&eacute;ponse. Qualifier. D&eacute;crocher le cr&eacute;neau.
              Ce guide couvre la d&eacute;finition exacte, le r&ocirc;le du setter, la m&eacute;thode
              en 9 &eacute;tapes, la diff&eacute;rence avec le closing, les erreurs, les outils,
              le co&ucirc;t r&eacute;el et le programme de 3 mois.
            </p>
            <AuthorBlock date="2026-03-17" readTime="30 min de lecture" dateLabel="17 mars 2026" updatedDate="2026-03-26" />
          </header>

          <TldrBox>
            <p data-speakable="true">
              Le <strong className="text-text-primary">setting commercial</strong> est la phase de prospection B2B
              qui pr&eacute;c&egrave;de le closing. Un <strong className="text-text-primary">setter</strong> d&eacute;tecte
              les signaux d&apos;achat sur LinkedIn, r&eacute;dige des messages personnalis&eacute;s,
              qualifie les leads et d&eacute;croche des RDV pour le closeur. Taux de r&eacute;ponse :
              15-35 % avec la m&eacute;thode signal-based, contre 2-5 % en cold outreach.
              R&eacute;sultat : 8 &agrave; 15 RDV qualifi&eacute;s par mois en r&eacute;gime de croisi&egrave;re.
              Ce guide couvre la d&eacute;finition du setter, le setting LinkedIn en 9 &eacute;tapes,
              la diff&eacute;rence setting/closing, les outils, le co&ucirc;t et le programme sur 3 mois.
            </p>
          </TldrBox>

          {/* Definition block — GEO: extractable by AI via data-speakable + itemscope */}
          <div className="definition-block bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10" itemScope itemType="https://schema.org/DefinedTerm">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2" itemProp="name">
              Setting commercial
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed" itemProp="description" data-speakable="true">
              Processus de prospection B2B o&ugrave; un setter identifie des prospects qualifi&eacute;s,
              d&eacute;tecte des signaux d&apos;achat sur LinkedIn, initie le contact avec un message
              personnalis&eacute;, g&egrave;re la conversation jusqu&apos;au rendez-vous et qualifie
              le lead avant de le transmettre au closeur. Chaque message est valid&eacute; par un
              humain. Rien &agrave; voir avec l&apos;automatisation ou le cold outreach.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '< 3 %', label: 'taux de r\u00e9ponse sans m\u00e9thode' },
              { stat: '> 20 %', label: 'avec signal + personnalisation' },
              { stat: '8\u201315', label: 'RDV qualifi\u00e9s par mois en croisi\u00e8re' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: "Ce que le setting commercial est, et ce qu'il n'est pas" },
                { id: 'setter', label: 'Setter definition : le r\u00f4le du setter B2B au quotidien' },
                { id: 'setting-linkedin', label: 'Setting LinkedIn : la m\u00e9thode signal-based' },
                { id: 'etapes', label: 'Les 9 \u00e9tapes du setting LinkedIn' },
                { id: 'setting-closing', label: 'Setting vs closing : deux r\u00f4les, un pipeline' },
                { id: 'erreurs', label: 'Les 5 erreurs qui tuent le setting' },
                { id: 'phases', label: 'Le programme de 3 mois : semaine par semaine' },
                { id: 'cas-client', label: 'Cas client : 0 \u00e0 12 RDV qualifi\u00e9s en 10 semaines' },
                { id: 'outils', label: 'Les outils du setter' },
                { id: 'ia', label: "L'IA dans le setting : co-r\u00e9dacteur, pas automatisation" },
                { id: 'cout', label: 'Combien co\u00fbte un setter B2B' },
                { id: 'delegation', label: 'Faire soi-m\u00eame ou d\u00e9l\u00e9guer' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${id}`}
                    className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 1 — D&eacute;finition */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Qu&apos;est-ce que le setting commercial en B2B&nbsp;?
              </h2>
              <p className="mb-4">
                Le setting commercial d&eacute;signe l&apos;ensemble des actions qui transforment
                un prospect inconnu en rendez-vous qualifi&eacute;. Rien &agrave; voir avec
                la prospection en masse ou l&apos;automatisation. Six &eacute;tapes, un humain
                dans la boucle, l&apos;IA en co-r&eacute;daction.
              </p>
              <p className="mb-4">
                Le mot vient de l&apos;anglais &laquo;&nbsp;to set an appointment&nbsp;&raquo; :
                fixer un rendez-vous. Le setter ouvre la porte. Il ne vend pas. Il d&eacute;tecte,
                contacte, qualifie et transmet au closeur.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ce que le setter fait, dans l&apos;ordre
                </p>
                <div className="space-y-3">
                  {[
                    "D\u00e9tecter les prospects qui ont montr\u00e9 un signal d'int\u00e9r\u00eat ou qui correspondent \u00e0 l'ICP",
                    "Analyser chaque profil : posts r\u00e9cents, contexte actuel, angle d'accroche",
                    "R\u00e9diger le premier message : ancr\u00e9 sur un fait pr\u00e9cis, 5 phrases max, aucun pitch",
                    "G\u00e9rer la conversation jusqu'\u00e0 l'accord pour un appel. R\u00e9ponse humaine \u00e0 chaque \u00e9change.",
                    "Qualifier le prospect sur 5 niveaux de maturit\u00e9. Seuls les niveaux 4-5 passent en call.",
                    "Passer le lead au closeur avec le contexte complet. Jamais un RDV sans brief.",
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{i + 1}.</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Ce que le setter ne fait pas : fermer des deals, pitcher dans le premier DM,
                envoyer des propositions commerciales, g&eacute;rer les{' '}
                <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors">relances</a>{' '}
                post-appel.
              </p>
              <p>
                La plupart des solopreneurs m&eacute;langent setting et closing dans la m&ecirc;me action.
                Le premier message est trop long, trop t&ocirc;t, trop commercial. Le prospect
                dispara&icirc;t avant d&apos;avoir entendu la vraie valeur de l&apos;offre.
                Le probl&egrave;me n&apos;est pas l&apos;offre. C&apos;est la s&eacute;quence.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 2 — Setter definition */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="setter" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quel est le r&ocirc;le du setter B2B au quotidien&nbsp;?
              </h2>

              <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" itemScope itemType="https://schema.org/DefinedTerm">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2" itemProp="name">
                  Setter definition
                </p>
                <p className="font-sans text-text-primary leading-relaxed" itemProp="description" data-speakable="true">
                  Un <strong>setter B2B</strong> est un commercial sp&eacute;cialis&eacute; dans la
                  prospection sortante. Son r&ocirc;le : identifier des prospects pertinents,
                  les contacter via{' '}
                  <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">LinkedIn</a>,{' '}
                  <a href="/ressources/methodes-vente-b2b" className="text-accent hover:underline transition-colors">qualifier leur int&eacute;r&ecirc;t</a>{' '}
                  et d&eacute;crocher un rendez-vous avec le closeur. Le setter ne vend pas.
                  Il ouvre la porte. En anglais, l&apos;&eacute;quivalent est le SDR (Sales Development Representative).
                </p>
              </div>

              <p className="mb-4">
                Concr&egrave;tement, voil&agrave; ce qu&apos;un setter fait chaque semaine :
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "D\u00e9finir les crit\u00e8res du prospect id\u00e9al (secteur, taille, poste, d\u00e9clencheurs d'achat)",
                  "Utiliser Sales Navigator pour constituer des listes qualifi\u00e9es",
                  "R\u00e9diger et envoyer les messages de prospection, tester les variantes",
                  "G\u00e9rer les relances sur plusieurs semaines sans para\u00eetre insistant",
                  "Qualifier les r\u00e9ponses avec 2 \u00e0 3 questions de pr\u00e9-qualification",
                  "Fixer le rendez-vous dans l'agenda avec le contexte complet",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-text-secondary">
                    <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Il faut en moyenne 8 points de contact avant qu&apos;un prospect accepte un rendez-vous.
                </p>
                <p className="font-sans text-text-secondary text-sm">
                  80 % des commerciaux abandonnent apr&egrave;s 2 ou 3 tentatives.
                  C&apos;est pour &ccedil;a que la majorit&eacute; des opportunit&eacute;s ne sont
                  jamais exploit&eacute;es. (Source : Marketing Donut)
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 3 — Setting LinkedIn */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="setting-linkedin" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment fonctionne le setting LinkedIn signal-based&nbsp;?
              </h2>
              <p className="mb-4">
                Sur LinkedIn, le setting a pris une dimension sp&eacute;cifique.
                La plateforme concentre les d&eacute;cideurs B2B. Les signaux d&apos;achat sont
                visibles : r&eacute;actions, changements de poste, publications. La messagerie
                permet un contact direct sans standard ni filtre email.
              </p>
              <p className="mb-6">
                Le{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors"><strong className="text-text-primary">setting LinkedIn</strong></a>{' '}
                consiste &agrave;
                combiner l&apos;observation de ces signaux avec une prise de contact personnalis&eacute;e.
                Le prospect a montr&eacute; un int&eacute;r&ecirc;t, mais il n&apos;est pas encore
                pr&ecirc;t &agrave; acheter. Le setter l&apos;accompagne jusqu&apos;au rendez-vous.
                Pour approfondir le volet r&eacute;actif, consultez notre guide sur l&apos;
                <a href="/ressources/inbound-setting-linkedin" className="text-accent hover:underline transition-colors">inbound setting LinkedIn</a>.
              </p>

              <h3 className="font-serif text-xl text-text-primary mb-4">
                Setting r&eacute;actif vs setting proactif
              </h3>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="bg-emerald-400/[0.03] border border-emerald-400/10 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    Setting r&eacute;actif
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-2">Le prospect vient &agrave; vous</p>
                  <ul className="font-sans text-text-secondary text-sm leading-relaxed space-y-1.5">
                    <li>&bull; Like ou commentaire sur votre post</li>
                    <li>&bull; Visite de votre profil</li>
                    <li>&bull; Demande de connexion entrante</li>
                  </ul>
                  <p className="font-sans text-emerald-400 text-sm font-semibold mt-3">
                    Taux de r&eacute;ponse : 25&ndash;40 %
                  </p>
                </div>
                <div className="bg-accent/[0.03] border border-accent/10 rounded-2xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent/60 mb-3">
                    Setting proactif
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-2">Vous allez vers le prospect</p>
                  <ul className="font-sans text-text-secondary text-sm leading-relaxed space-y-1.5">
                    <li>&bull; Changement de poste d&eacute;tect&eacute;</li>
                    <li>&bull; Lev&eacute;e de fonds annonc&eacute;e</li>
                    <li>&bull; Interaction sur un post concurrent</li>
                  </ul>
                  <p className="font-sans text-accent/80 text-sm font-semibold mt-3">
                    Taux de r&eacute;ponse : 12&ndash;25 %
                  </p>
                </div>
              </div>
              <p className="mb-4">
                Le r&eacute;actif convertit mieux parce que le prospect a d&eacute;j&agrave; fait un
                pas vers vous. Le proactif g&eacute;n&egrave;re plus de volume. Les meilleurs
                pipelines combinent les deux.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]" data-speakable="true">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Les messages LinkedIn personnalis&eacute;s obtiennent un taux de r&eacute;ponse
                  5 &agrave; 10 fois sup&eacute;rieur aux messages g&eacute;n&eacute;riques.
                </p>
                <p className="font-sans text-text-secondary text-sm">
                  Le facteur d&eacute;terminant n&apos;est pas le volume mais la pertinence
                  du signal d&eacute;tect&eacute; avant le premier contact.
                  (Source : LinkedIn State of Sales Report 2024)
                </p>
              </div>

              <h3 className="font-serif text-xl text-text-primary mb-4">
                Setting LinkedIn vs cold outreach
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="font-sans font-semibold text-text-muted text-left py-3 pr-4 w-1/3"></th>
                      <th className="font-sans font-semibold text-accent text-left py-3 pr-4">Setting LinkedIn</th>
                      <th className="font-sans font-semibold text-text-muted text-left py-3">Cold outreach</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Ciblage', "Signal d'achat d\u00e9tect\u00e9", 'Liste import\u00e9e depuis Sales Nav'],
                      ['Message', 'Personnalis\u00e9, valid\u00e9 par un humain', 'Template avec variables'],
                      ['Volume', '15\u201330 messages/jour (qualifi\u00e9s)', '100+ messages/jour (en masse)'],
                      ['Taux de r\u00e9ponse', '15\u201335 %', '2\u20135 %'],
                      ['Risque de ban', 'Quasi nul (tout est manuel)', '\u00c9lev\u00e9 (automatisation d\u00e9tect\u00e9e)'],
                      ['RDV qualifi\u00e9s', '8\u201315/mois', '2\u20134/mois'],
                    ].map(([criteria, setting, cold], i) => (
                      <tr key={i} className="border-b border-white/[0.04]">
                        <td className="font-sans font-semibold text-text-primary py-3 pr-4">{criteria}</td>
                        <td className="font-sans text-text-secondary py-3 pr-4">{setting}</td>
                        <td className="font-sans text-text-secondary py-3">{cold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                La diff&eacute;rence avec la{' '}
                <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors">prospection LinkedIn classique</a>{' '}
                : le prospect n&apos;est pas froid. Il a d&eacute;j&agrave; montr&eacute; quelque chose.
                Le message s&apos;ancre sur cette preuve. Voil&agrave; pourquoi les{' '}
                <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors">
                  messages g&eacute;n&eacute;riques n&apos;obtiennent pas de r&eacute;ponses
                </a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 4 — 9 &eacute;tapes */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="etapes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 9 &eacute;tapes du setting LinkedIn
              </h2>
              <p className="mb-6">
                Le setting LinkedIn suit un pipeline en 9 &eacute;tapes, organis&eacute; en trois
                phases. La{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode compl&egrave;te</a>{' '}
                d&eacute;taille chaque &eacute;tape avec des scripts.
              </p>

              {[
                {
                  phase: 'D\u00e9tection',
                  color: 'text-accent',
                  items: [
                    "Monitorer les signaux inbound : qui a r\u00e9agi \u00e0 vos posts",
                    "Monitorer les signaux outbound : interactions sur les posts de concurrents",
                    "Rep\u00e9rer les signaux de changement : nouveau poste, lev\u00e9e de fonds, recrutement",
                  ],
                },
                {
                  phase: 'Qualification',
                  color: 'text-accent',
                  items: [
                    "V\u00e9rifier la correspondance ICP : fonction, secteur, taille, ticket",
                    "Analyser le profil : 3 \u00e0 5 derniers posts, contexte actuel, angle d'accroche",
                    "Classer le prospect par niveau de maturit\u00e9 (froid \u00e0 chaud)",
                  ],
                },
                {
                  phase: 'Conversion',
                  color: 'text-accent',
                  items: [
                    "R\u00e9diger le premier message : ancr\u00e9 sur le signal, 3 \u00e0 5 phrases, aucun pitch",
                    "G\u00e9rer la conversation : r\u00e9ponses humaines, qualification progressive",
                    "Proposer le RDV au bon moment et passer le lead au closeur avec le brief complet",
                  ],
                },
              ].map(({ phase, color, items }, phaseIdx) => (
                <div key={phase} className="bg-bg-secondary rounded-xl p-6 mb-4">
                  <p className={`font-sans text-xs font-semibold uppercase tracking-widest ${color} mb-4`}>
                    Phase {phaseIdx + 1} &middot; {phase}
                  </p>
                  <div className="space-y-3">
                    {items.map((text, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">
                          {phaseIdx * 3 + i + 1}.
                        </span>
                        <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 5 — Setting vs closing */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="setting-closing" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quelle diff&eacute;rence entre setting et closing&nbsp;?
              </h2>
              <p className="mb-4">
                Le setting et le closing sont les deux moiti&eacute;s d&apos;un pipeline commercial B2B.
                Le setter travaille avant l&apos;appel. Le closeur travaille pendant et apr&egrave;s.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Setting
                  </p>
                  <p className="font-sans text-text-primary leading-relaxed text-sm">
                    La phase de <strong>prospection commerciale</strong> B2B.
                    Identifier les prospects, les contacter, qualifier leur int&eacute;r&ecirc;t et d&eacute;crocher
                    un rendez-vous. Le setter n&apos;est jamais pr&eacute;sent pendant la n&eacute;gociation.
                  </p>
                </div>
                <div className="border-l-4 border-white/[0.12] bg-bg-secondary rounded-r-xl px-6 py-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">
                    Closing
                  </p>
                  <p className="font-sans text-text-primary leading-relaxed text-sm">
                    La phase de <strong>vente</strong>. Comprendre le besoin via une discovery,
                    pr&eacute;senter la valeur, r&eacute;pondre aux objections et signer.
                    Le closer entre en jeu uniquement sur des leads qualifi&eacute;s.
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-xl text-text-primary mb-4">
                Le cycle de vente B2B en 8 &eacute;tapes
              </h3>
              <div className="space-y-0 mb-6">
                {[
                  { label: 'Ciblage', owner: 'Setting', detail: "D\u00e9finir qui contacter et pourquoi maintenant." },
                  { label: 'Approche', owner: 'Setting', detail: "Premier contact : message LinkedIn, email ou appel." },
                  { label: 'Qualification', owner: 'Setting', detail: "V\u00e9rifier l'ad\u00e9quation prospect / offre." },
                  { label: 'Prise de RDV', owner: 'Setting', detail: "Fixer le rendez-vous avec le contexte." },
                  { label: 'Discovery', owner: 'Closing', detail: "Comprendre le vrai probl\u00e8me avant de parler prix." },
                  { label: 'Proposition', owner: 'Closing', detail: "Pr\u00e9senter l'offre adapt\u00e9e au probl\u00e8me identifi\u00e9." },
                  { label: 'Objections', owner: 'Closing', detail: "R\u00e9pondre aux freins sans baisser le prix." },
                  { label: 'Signature', owner: 'Closing', detail: "Conclure et d\u00e9clencher le contrat." },
                ].map((step, i) => {
                  const isSetting = step.owner === 'Setting'
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-sans ${
                            isSetting
                              ? 'border border-accent/40 bg-accent/10 text-accent'
                              : 'border border-white/[0.08] bg-bg-secondary text-text-secondary'
                          }`}
                        >
                          {i + 1}
                        </div>
                        {i < 7 && (
                          <div
                            className={`w-px flex-1 my-1 ${isSetting ? 'bg-accent/20' : 'bg-white/[0.06]'}`}
                            style={{ minHeight: '20px' }}
                          />
                        )}
                      </div>
                      <div className="pb-5">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-sans font-semibold text-text-primary text-sm">{step.label}</p>
                          <span
                            className={`font-sans text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              isSetting ? 'text-accent bg-accent/10' : 'text-text-secondary bg-bg-secondary'
                            }`}
                          >
                            {step.owner}
                          </span>
                        </div>
                        <p className="font-sans text-text-secondary text-sm leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="mb-4">
                M&eacute;langer les deux r&ocirc;les est l&apos;erreur la plus courante en B2B.
                Un solopreneur qui prospecte ET close dans la m&ecirc;me journ&eacute;e fait deux choses
                mal plut&ocirc;t qu&apos;une seule bien. L&apos;&eacute;tat d&apos;esprit n&apos;est pas le m&ecirc;me.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-6 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Les commerciaux qui passent plus de 46 % du temps d&apos;un appel &agrave;
                  &eacute;couter ont un taux de closing 3x sup&eacute;rieur &agrave; la moyenne.
                </p>
                <p className="font-sans text-text-secondary text-sm">
                  Le discovery bien conduit commence par l&apos;&eacute;coute, pas par le pitch.
                  (Source : Gong.io, analyse de 25 000+ appels de vente)
                </p>
              </div>

              <h3 className="font-serif text-xl text-text-primary mb-4">
                Par quoi commencer selon votre situation
              </h3>
              <div className="space-y-4">
                {[
                  {
                    situation: '"Je n\'ai pas assez de RDV"',
                    verdict: 'Probl\u00e8me en amont. Investir en setting en premier.',
                    highlight: true,
                  },
                  {
                    situation: '"J\'ai des RDV mais \u00e7a ne signe pas"',
                    verdict: 'Probl\u00e8me dans la vente. Investir en closing en premier.',
                    highlight: false,
                  },
                  {
                    situation: '"J\'ai un setter mais le taux de closing reste faible"',
                    verdict: 'Aligner setting et closing sur la m\u00eame m\u00e9thode.',
                    highlight: false,
                  },
                ].map((scenario, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-6 py-5 border ${
                      scenario.highlight ? 'border-accent/30 bg-accent/5' : 'border-white/[0.06] bg-bg-secondary'
                    }`}
                  >
                    <p className="font-sans font-semibold text-text-primary mb-1">{scenario.situation}</p>
                    <p className={`font-sans text-sm font-semibold ${scenario.highlight ? 'text-accent' : 'text-text-primary'}`}>
                      {scenario.verdict}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <CtaArticle />

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 6 — 5 erreurs */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quelles sont les 5 erreurs les plus courantes en setting&nbsp;?
              </h2>
              <p className="mb-6">
                Ces erreurs ne viennent pas d&apos;un manque de motivation.
                Elles viennent d&apos;une mauvaise compr&eacute;hension de ce que le setting
                produit &agrave; chaque &eacute;tape.
              </p>

              <div className="space-y-8">
                {[
                  {
                    num: '01',
                    titre: "Prospecter quand on a le temps",
                    texte: "Le setting irr\u00e9gulier ne fonctionne pas. Les signaux ont une dur\u00e9e de vie. Un prospect qui a comment\u00e9 un post hier est chaud maintenant. Dans 3 semaines, la fen\u00eatre d'intention sera ferm\u00e9e. Deux heures chaque jour valent mieux que dix heures un vendredi de temps en temps.",
                  },
                  {
                    num: '02',
                    titre: "Pitcher dans le premier message",
                    texte: "Le premier message n'est pas cens\u00e9 vendre. Il doit d\u00e9clencher une r\u00e9ponse. Tout ce qui ressemble \u00e0 un pitch (description de l'offre, tarifs, r\u00e9sultats promis) signale un template envoy\u00e9 en masse. 5 phrases. Pas de pitch. Ancr\u00e9 sur un fait pr\u00e9cis.",
                  },
                  {
                    num: '03',
                    titre: "Traiter tous les signaux comme \u00e9quivalents",
                    texte: "Un like sur un post g\u00e9n\u00e9rique de motivation n'est pas le m\u00eame signal qu'un commentaire d\u00e9taill\u00e9 sur un post qui d\u00e9crit exactement le probl\u00e8me que vous r\u00e9solvez. Le signal ET l'ICP doivent correspondre ensemble.",
                  },
                  {
                    num: '04',
                    titre: "Ne pas noter ce qui fonctionne",
                    texte: "Le setting sans journalisation est statique. Un angle qui a d\u00e9croch\u00e9 4 r\u00e9ponses cette semaine doit \u00eatre codifi\u00e9. Une formulation qui a obtenu 'int\u00e9ressant, comment vous travaillez ?' doit entrer dans la base de connaissance. Sans \u00e7a, le syst\u00e8me n'apprend pas.",
                  },
                  {
                    num: '05',
                    titre: "Automatiser avant d'avoir calibr\u00e9",
                    texte: "Si 10 messages donnent 1-2 r\u00e9ponses, 100 messages devraient en donner 10-20 ? Non. Les messages automatiques sont d\u00e9tect\u00e9s et le taux chute \u00e0 moins de 1 %. L'automatisation sans calibration multiplie les erreurs. Calibrer d'abord, industrialiser ensuite.",
                  },
                ].map(({ num, titre, texte }) => (
                  <div key={num} className="border-l-2 border-accent/30 pl-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Erreur {num} &middot; {titre}
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{texte}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 7 — Programme 3 mois */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="phases" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le programme de 3 mois : semaine par semaine
              </h2>
              <p className="mb-6">
                Un programme de setting ne se d&eacute;ploie pas du premier jour.
                Il se calibre. Les 6 premi&egrave;res semaines ne visent pas le volume.
                Elles visent la pr&eacute;cision.
              </p>

              {/* Phase 0 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">Phase 0</span>
                  <span className="font-sans text-xs text-text-secondary">Semaine 1 &middot; Strat&eacute;gie et infrastructure</span>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-4">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">ICP pr&eacute;cis, pas g&eacute;n&eacute;rique</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      On ne d&eacute;finit pas &laquo;solopreneurs B2B&raquo;. On d&eacute;finit : directeurs commerciaux
                      ind&eacute;pendants dans le SaaS B2B en France, 5 &agrave; 50 salari&eacute;s, qui publient
                      r&eacute;guli&egrave;rement sur LinkedIn. Ce niveau de pr&eacute;cision d&eacute;termine la
                      qualit&eacute; des signaux.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Stack configur&eacute;</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      10 &agrave; 20 comptes concurrents s&eacute;lectionn&eacute;s pour Spyer.
                      Filtres Sales Navigator avec les triggers actifs. Skill Claude initialis&eacute;
                      sur l&apos;offre et le march&eacute;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">Phase 1</span>
                  <span className="font-sans text-xs text-text-secondary">Semaines 2 &agrave; 8 &middot; Calibration</span>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-5">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 2&ndash;3 : premiers messages</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      5 &agrave; 8 messages par jour. L&apos;objectif n&apos;est pas de remplir l&apos;agenda.
                      C&apos;est de comprendre quels signaux d&eacute;clenchent des r&eacute;ponses.
                      Chaque message est une exp&eacute;rience. Les premiers RDV arrivent entre J+4 et J+10.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 4&ndash;6 : les patterns &eacute;mergent</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Certains signaux g&eacute;n&egrave;rent syst&eacute;matiquement des r&eacute;ponses.
                      Certaines formulations d&eacute;clenchent &laquo;int&eacute;ressant&raquo;.
                      Ces patterns sont codifi&eacute;s dans le skill Claude. Le setter valide les
                      drafts plus vite.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 7&ndash;8 : stabilisation</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Volume &agrave; 10&ndash;15 messages par jour. Taux de r&eacute;ponse stabilis&eacute;
                      autour de 15&ndash;25 % inbound et 8&ndash;15 % outbound. Le flux de RDV devient
                      pr&eacute;visible : 2 &agrave; 4 par semaine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60">Phase 2</span>
                  <span className="font-sans text-xs text-text-secondary">Mois 3+ &middot; R&eacute;gime de croisi&egrave;re</span>
                </div>
                <div className="border-l-2 border-text-muted/20 pl-5 space-y-4">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-secondary mb-1">Le syst&egrave;me tourne</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Le setter intervient 2 &agrave; 3 heures par jour. Les signaux sont trait&eacute;s
                      syst&eacute;matiquement. Le skill Claude produit des drafts proches de la cible.
                      Volume r&eacute;gulier : 2 &agrave; 4 RDV qualifi&eacute;s par semaine en continu.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-secondary mb-1">Le nurturing s&apos;active</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Les prospects des niveaux 2&ndash;3 entrent dans une newsletter mensuelle.
                      Ils reviennent quand leur contexte change. Flux passif qui g&eacute;n&egrave;re des
                      RDV suppl&eacute;mentaires 3 &agrave; 6 mois plus tard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 8 — Cas client */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="cas-client" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Cas client : 0 &agrave; 12 RDV qualifi&eacute;s en 10 semaines
              </h2>

              <div className="border-l-2 border-accent/30 pl-5 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">Profil</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Consultant en strat&eacute;gie commerciale, offre &agrave; 4 500 &euro; pour un
                  accompagnement de 3 mois. Prospectait lui-m&ecirc;me depuis 18 mois : 1 &agrave; 2
                  RDV par semaine en p&eacute;riode active, z&eacute;ro les mois charg&eacute;s.
                </p>
              </div>

              <div className="space-y-5 mb-6">
                {[
                  {
                    phase: 'Semaine 1',
                    titre: 'Infrastructure',
                    detail: "ICP red\u00e9fini. Son meilleur profil client n'\u00e9tait pas 'directeur commercial' mais 'directeur commercial r\u00e9cemment promu, PME 15 \u00e0 80 salari\u00e9s, qui recrutait'. Ce changement a r\u00e9duit les cibles de 60 % mais multipli\u00e9 le taux de transformation par 3.",
                  },
                  {
                    phase: 'Semaines 2\u20133',
                    titre: 'Calibration',
                    detail: "5 \u00e0 7 messages par jour. L'angle qui a fonctionn\u00e9 : mentionner le recrutement en cours comme signal de transformation. 4 RDV pos\u00e9s en deux semaines.",
                  },
                  {
                    phase: 'Semaines 4\u20136',
                    titre: 'Codification',
                    detail: "L'angle 'recrutement = signal de transformation' int\u00e9gr\u00e9 dans le skill Claude. 8 \u00e0 12 messages par jour. Taux de r\u00e9ponse \u00e0 28 %. 3 RDV par semaine.",
                  },
                  {
                    phase: 'Semaines 7\u201310',
                    titre: 'R\u00e9gime de croisi\u00e8re',
                    detail: "12 RDV qualifi\u00e9s sur le mois 2. Taux de closing : 35 % sur ces leads (contre 20 % avant). 4 clients sign\u00e9s en un mois. Agenda planifi\u00e9 3 semaines en avance.",
                  },
                ].map(({ phase, titre, detail }) => (
                  <div key={phase} className="flex gap-5">
                    <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-20 pt-0.5 uppercase tracking-widest">{phase}</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{titre}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { stat: '1\u20132', label: 'RDV/semaine avant', sub: 'irr\u00e9guliers, auto-prospect\u00e9s' },
                  { stat: '12', label: 'RDV qualifi\u00e9s en mois 2', sub: 'via setter d\u00e9di\u00e9' },
                  { stat: '35 %', label: 'taux de closing', sub: 'sur leads qualifi\u00e9s' },
                ].map(({ stat, label, sub }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
                    <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                    <p className="font-sans text-xs text-text-primary font-semibold mb-0.5">{label}</p>
                    <p className="font-sans text-xs text-text-secondary">{sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 9 — Outils */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les outils du setter
              </h2>
              <p className="mb-5">
                Quatre outils forment le stack de base du setting LinkedIn.
                LinkedIn seul ne suffit pas.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    tool: 'Reactin',
                    role: 'Signaux inbound',
                    url: 'https://www.reactin.io',
                    detail: "Connect\u00e9 \u00e0 votre compte LinkedIn, Reactin recense qui a interact\u00e9 avec vos posts. Sur un compte qui publie 2-3 fois par semaine, \u00e7a g\u00e9n\u00e8re 15 \u00e0 50 signaux par semaine. Le setter filtre selon l'ICP.",
                  },
                  {
                    tool: 'Spyer',
                    role: 'Signaux concurrents',
                    url: 'https://www.spyer.io',
                    detail: "Vous d\u00e9finissez une liste de comptes \u00e0 monitorer. Spyer alerte quand des profils int\u00e9ressants interagissent avec leur contenu. Ces prospects n'ont pas interagi avec vous, mais ils ont montr\u00e9 un int\u00e9r\u00eat pour votre th\u00e9matique.",
                  },
                  {
                    tool: 'Sales Navigator',
                    role: 'Ciblage pr\u00e9cis',
                    url: 'https://business.linkedin.com/sales-solutions',
                    detail: "L'outil LinkedIn premium (~100 \u20ac/mois) pour construire des listes par fonction, secteur, taille d'entreprise, changements r\u00e9cents. Sales Navigator d\u00e9finit qui surveiller. Spyer ex\u00e9cute la surveillance.",
                  },
                  {
                    tool: 'Claude (skill maison)',
                    role: 'Co-r\u00e9daction des messages',
                    detail: "Un skill construit sur votre contexte : offre, march\u00e9, objections connues, formulations qui fonctionnent. Claude propose un draft. Le setter lit, ajuste, valide. Aucun message ne part sans regard humain.",
                  },
                ].map(({ tool, role, detail, url }: { tool: string; role: string; detail: string; url?: string }) => (
                  <div key={tool} className="border border-white/[0.06] rounded-xl overflow-hidden">
                    <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06] flex items-center justify-between gap-4">
                      <p className="font-sans font-semibold text-text-primary text-sm">
                        {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{tool} &nearr;</a> : tool}
                      </p>
                      <p className="font-sans text-xs text-accent">{role}</p>
                    </div>
                    <div className="px-5 py-4">
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                    Flux inbound
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Votre contenu g&eacute;n&egrave;re des interactions &rarr; Reactin les capture &rarr;
                    ICP filtre les profils pertinents &rarr; message ancr&eacute; sur le signal.
                    Taux de r&eacute;ponse : 20 &agrave; 35 %.
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                    Flux outbound
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Sales Navigator filtre &rarr; Spyer surveille &rarr; signal captur&eacute;
                    sur un compte tiers &rarr; message ancr&eacute; sur cet engagement.
                    Taux de r&eacute;ponse : 10 &agrave; 20 %.
                  </p>
                </div>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 10 — IA */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="ia" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quel est le r&ocirc;le de l&apos;IA dans le setting commercial&nbsp;?
              </h2>
              <p className="mb-4">
                Coller un profil dans ChatGPT et demander un message ne fonctionne pas.
                Le r&eacute;sultat est toujours reconnaissable. Formel, bien structur&eacute;,
                clairement automatique. Taux de r&eacute;ponse proche de z&eacute;ro.
              </p>
              <p className="mb-5">
                Ce qui fonctionne : former le mod&egrave;le sur votre contexte sp&eacute;cifique.
                Lui donner vos r&egrave;gles, des exemples de messages qui ont march&eacute;, les
                objections types. L&apos;IA propose un draft. L&apos;humain valide. Pour les clients
                qui le souhaitent, on construit un{' '}
                <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline transition-colors">
                  skill Claude encod&eacute; sur leur expertise
                </a>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                    Ce que l&apos;IA fait
                  </p>
                  <ul className="space-y-2 font-sans text-xs text-text-secondary">
                    {[
                      "Propose un draft en 30 secondes",
                      "Applique les r\u00e8gles de style codifi\u00e9es",
                      "Incorpore les angles qui ont fonctionn\u00e9",
                      "Respecte la longueur max automatiquement",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-text-secondary/40 shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Ce que l&apos;humain fait
                  </p>
                  <ul className="space-y-2 font-sans text-xs text-text-secondary">
                    {[
                      "Lit le profil et identifie le signal",
                      "Valide ou ajuste le draft",
                      "D\u00e9cide si le message part",
                      "Note ce qui a fonctionn\u00e9 ou non",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                R&egrave;gle non n&eacute;gociable : aucun message ne part sans validation humaine.
                L&apos;IA r&eacute;duit le temps de r&eacute;daction de 70 %. Elle ne remplace pas le jugement.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 11 — Co&ucirc;t */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="cout" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Combien co&ucirc;te un setter B2B en France&nbsp;?
              </h2>
              <p className="mb-6">
                Il existe 3 mod&egrave;les de tarification sur le march&eacute;.
                Le mod&egrave;le choisi d&eacute;termine l&apos;alignement des int&eacute;r&ecirc;ts
                entre vous et votre setter.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    label: 'Fixe mensuel uniquement',
                    desc: "800 \u00e0 1 500 \u20ac/mois selon l'exp\u00e9rience. Vous payez quoi qu'il arrive.",
                  },
                  {
                    label: 'Prime \u00e0 la performance uniquement',
                    desc: "50 \u00e0 200 \u20ac/RDV livr\u00e9. L'incentive est align\u00e9, mais sans fixe, le setter priorise la quantit\u00e9.",
                  },
                  {
                    label: 'Hybride : fixe + prime par RDV (recommand\u00e9)',
                    desc: "Un fixe couvre l'infrastructure. La prime aligne sur les r\u00e9sultats. C'est le mod\u00e8le Setting : 790 \u20ac/mois + 25 \u00e0 150 \u20ac/RDV.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent font-semibold shrink-0 font-sans mt-0.5">{i + 1}.</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary mb-1">{item.label}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-xl text-text-primary mb-4">
                Comparaison des options
              </h3>
              <div className="space-y-4 mb-6">
                {[
                  {
                    option: 'Programme setting externalis\u00e9',
                    cost: '2 000 \u2013 5 000 \u20ac / mois',
                    note: 'Setter d\u00e9di\u00e9, outils inclus, skill maison, coaching closing. Premiers RDV d\u00e8s la semaine 1.',
                    highlight: true,
                  },
                  {
                    option: 'Commercial interne',
                    cost: '45 000 \u2013 70 000 \u20ac / an',
                    note: "Charg\u00e9. Sans m\u00e9thode ni garantie. 3 \u00e0 6 mois avant d'\u00eatre op\u00e9rationnel. S'il part, tout repart de z\u00e9ro.",
                    highlight: false,
                  },
                  {
                    option: 'Faire soi-m\u00eame',
                    cost: 'Gratuit\u2026 sur le papier',
                    note: "Co\u00fbt r\u00e9el : 2 \u00e0 3h/j \u00d7 votre taux journalier. Pour un consultant \u00e0 1 000 \u20ac/j, c'est 250 \u00e0 375 \u20ac perdus par jour.",
                    highlight: false,
                  },
                  {
                    option: 'Agence de lead gen automatis\u00e9e',
                    cost: '500 \u2013 2 000 \u20ac / mois',
                    note: "Messages automatiques en masse. Taux de r\u00e9ponse < 1 %. Risque de ban LinkedIn. Ce n'est pas du setting.",
                    highlight: false,
                  },
                ].map(({ option, cost, note, highlight }) => (
                  <div
                    key={option}
                    className={`rounded-xl p-5 border ${highlight ? 'border-accent/30 bg-accent/5' : 'border-white/[0.06] bg-bg-secondary'}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <p className={`font-sans font-semibold text-sm ${highlight ? 'text-text-primary' : 'text-text-secondary'}`}>
                        {option}
                      </p>
                      <p className={`font-sans text-sm font-semibold ${highlight ? 'text-accent' : 'text-text-secondary'}`}>
                        {cost}
                      </p>
                    </div>
                    <p className="font-sans text-text-secondary text-xs leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                  Le calcul de retour sur investissement
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Programme &agrave; 3 000 &euro; / mois &rarr; 10 RDV qualifi&eacute;s &rarr;
                  30 % de closing &rarr; 3 clients &rarr; offre &agrave; 4 000 &euro; &rarr;
                  12 000 &euro; de CA. Le programme est amorti par un seul client.
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 12 — D&eacute;l&eacute;gation */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="delegation" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Faire soi-m&ecirc;me ou d&eacute;l&eacute;guer
              </h2>
              <p className="mb-4">
                Le setting fonctionne en solo. La vraie question : le co&ucirc;t r&eacute;el
                de le faire soi-m&ecirc;me. Et ce &agrave; quoi on renonce.
              </p>

              <div className="space-y-5 my-6">
                {[
                  {
                    title: 'Le temps direct',
                    desc: "2 \u00e0 3 heures par jour en r\u00e9gime de croisi\u00e8re. Pour un consultant \u00e0 1 000 \u20ac par jour, c'est 8 000 \u20ac/mois consacr\u00e9s \u00e0 la prospection.",
                  },
                  {
                    title: "La courbe d'apprentissage",
                    desc: "Un setter d\u00e9butant fait des erreurs que seule l'exp\u00e9rience \u00e9vite. Un message trop long. Une deuxi\u00e8me phrase g\u00e9n\u00e9rique. Sur LinkedIn, la deuxi\u00e8me chance est rare.",
                  },
                  {
                    title: 'La coh\u00e9rence impossible',
                    desc: "Les solopreneurs prospectent quand ils ont le temps. C'est-\u00e0-dire jamais quand ils sont charg\u00e9s. Un setter d\u00e9di\u00e9 prospecte tous les jours. Le pipeline ne se tarit plus.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Un{' '}
                <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline transition-colors">
                  setter B2B
                </a>{' '}
                exp&eacute;riment&eacute; &eacute;vite les erreurs de d&eacute;butant d&egrave;s le premier message.
                Les outils sont d&eacute;j&agrave; configur&eacute;s. La m&eacute;thode est &eacute;prouv&eacute;e.
                Les premiers RDV arrivent d&egrave;s la premi&egrave;re semaine.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* FAQ */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes sur le setting commercial
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map((item, i) => (
                  <details key={i} className="group py-5" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-sans font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45 text-lg">+</span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary leading-relaxed text-sm mt-3">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

          </article>

          {/* Internal links */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/comment-prospecter-sur-linkedin', label: "IA, m\u00e9thode et humain : les 3 couches d'un syst\u00e8me de setting" },
                { href: '/ressources/prospection-linkedin-b2b', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de r\u00e9ponses" },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026' },
                { href: '/ressources/comment-devenir-setter-b2b', label: 'Devenir setter ou closer B2B : le guide complet' },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Scripts de setting LinkedIn : exemples et cadre complet' },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Relance LinkedIn B2B : quand et comment relancer' },
                { href: '/ressources/closing-b2b', label: 'Closer B2B : d\u00e9finition et comment en recruter un' },
                { href: '/ressources/methodes-vente-b2b', label: 'Qualification des leads B2B : m\u00e9thode et crit\u00e8res' },
                { href: '/glossaire', label: 'Glossaire setting & closing B2B' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez un programme de setting qui tourne ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              On construit le syst&egrave;me complet : strat&eacute;gie, ciblage, skill maison,
              setter d&eacute;di&eacute;, coaching closing. Premiers RDV qualifi&eacute;s d&egrave;s
              la semaine 1. Un appel de 30 minutes pour voir si &ccedil;a correspond.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel gratuit &rarr;
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Setter, ICP, signal d&apos;achat, pipeline... Un terme vous &eacute;chappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Retour au blog
            </a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026', readTime: '13 min' },
            { href: '/ressources/comment-devenir-setter-b2b', title: 'Comment devenir setter B2B en 2026', readTime: '11 min' },
            { href: '/ressources/closing-b2b', title: 'Closer B2B : d\u00e9finition et comment en recruter un', readTime: '11 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
