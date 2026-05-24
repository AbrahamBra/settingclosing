import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Setting LinkedIn : le guide complet \u2014 d\u00e9finition, m\u00e9thode et exemples (2026)",
  description:
    "Le setting LinkedIn est une m\u00e9thode de prospection B2B qui d\u00e9tecte les signaux d'achat pour engager des conversations qualifi\u00e9es. D\u00e9finition, 5 \u00e9tapes, scripts de messages, outils et KPIs.",
  openGraph: {
    title: "Setting LinkedIn : le guide complet \u2014 d\u00e9finition, m\u00e9thode et exemples (2026)",
    description:
      "D\u00e9finition, 5 \u00e9tapes, scripts de messages, outils et KPIs du setting LinkedIn. La m\u00e9thode signal-based pour d\u00e9crocher 8 \u00e0 15 RDV qualifi\u00e9s par mois.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn : le guide complet \u2014 d\u00e9finition, m\u00e9thode et exemples (2026)',
    description:
      'D\u00e9finition, 5 \u00e9tapes, scripts de messages, outils et KPIs du setting LinkedIn. La m\u00e9thode signal-based pour d\u00e9crocher 8 \u00e0 15 RDV qualifi\u00e9s par mois.',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin#article',
  headline: 'Setting LinkedIn : le guide complet \u2014 d\u00e9finition, m\u00e9thode et exemples concrets (2026)',
  description:
    "Le setting LinkedIn est une m\u00e9thode de prospection B2B qui d\u00e9tecte les signaux d'achat sur LinkedIn pour engager des conversations qualifi\u00e9es. D\u00e9finition, 5 \u00e9tapes, scripts de messages, outils et KPIs.",
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
  datePublished: '2026-04-12',
  dateModified: '2026-04-23',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin',
  },
  image: 'https://www.setting.live/ressources/setting-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 4800,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: {
    '@type': 'DefinedTerm',
    '@id': 'https://www.setting.live/ressources/setting-linkedin#setting-linkedin',
    name: 'Setting LinkedIn',
    description:
      "M\u00e9thode de prospection B2B qui d\u00e9tecte les signaux d'achat sur LinkedIn (r\u00e9actions, changements de poste, visites de profil) et engage le prospect avec un message contextualis\u00e9 valid\u00e9 par un humain. Taux de r\u00e9ponse : 15-35 %.",
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Glossaire Setting B2B',
      url: 'https://www.setting.live/glossaire',
    },
  },
  mentions: [
    { '@type': 'SoftwareApplication', name: 'LinkedIn Sales Navigator', url: 'https://business.linkedin.com/sales-solutions' },
    { '@type': 'SoftwareApplication', name: 'Reactin', url: 'https://www.reactin.io' },
    { '@type': 'SoftwareApplication', name: 'BreakCold', url: 'https://www.breakcold.com' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Les 5 \u00e9tapes du setting LinkedIn',
  description:
    "Pipeline en 5 \u00e9tapes pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s via LinkedIn gr\u00e2ce \u00e0 la m\u00e9thode signal-based.",
  totalTime: 'P30D',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '590' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'D\u00e9tecter les signaux d\u2019achat',
      text: "Surveiller les signaux inbound (r\u00e9actions \u00e0 vos posts), outbound (interactions sur des comptes concurrents) et les changements (prise de poste, lev\u00e9e de fonds, recrutement).",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'V\u00e9rifier la correspondance ICP',
      text: "Confirmer que le prospect correspond au client id\u00e9al : fonction d\u00e9cisionnaire, secteur cible, taille d\u2019entreprise et ticket moyen suffisant.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Analyser le profil en profondeur',
      text: "Lire les 3 \u00e0 5 derniers posts du prospect, comprendre son contexte actuel et identifier un angle d\u2019accroche sp\u00e9cifique.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'R\u00e9diger le message personnalis\u00e9',
      text: "Ancrer le message sur le signal d\u00e9tect\u00e9, 3 \u00e0 5 phrases maximum, aucun pitch. Le message doit ressembler \u00e0 un DM naturel, pas \u00e0 un email commercial.",
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Qualifier et proposer le RDV',
      text: "G\u00e9rer la conversation, qualifier le prospect via 2 \u00e0 3 questions, puis proposer un cr\u00e9neau quand l\u2019int\u00e9r\u00eat est explicite. Transmettre le brief complet au closeur.",
    },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que le setting LinkedIn ?",
    answer:
      "Le setting LinkedIn est une m\u00e9thode de prospection B2B qui consiste \u00e0 d\u00e9tecter les signaux d'achat sur LinkedIn (r\u00e9actions \u00e0 des posts, changements de poste, visites de profil), puis \u00e0 envoyer un message personnalis\u00e9 ancr\u00e9 sur ce signal pour engager une conversation et d\u00e9crocher un rendez-vous qualifi\u00e9. Chaque message est valid\u00e9 par un humain. Ce n'est pas de l'automatisation.",
  },
  {
    question: "Quelle diff\u00e9rence entre setting LinkedIn et cold outreach ?",
    answer:
      "Le cold outreach envoie des messages g\u00e9n\u00e9riques en masse \u00e0 des listes de prospects froids (taux de r\u00e9ponse : 2-5 %). Le setting LinkedIn d\u00e9tecte d'abord un signal d'int\u00e9r\u00eat puis contacte le prospect avec un message contextualis\u00e9 (taux de r\u00e9ponse : 15-35 %). La diff\u00e9rence : le timing, la personnalisation et la pertinence.",
  },
  {
    question: "Le setting LinkedIn fonctionne-t-il pour le B2B ?",
    answer:
      "Oui, le setting LinkedIn est con\u00e7u pour le B2B. Il fonctionne particuli\u00e8rement bien dans les secteurs o\u00f9 les d\u00e9cideurs sont actifs sur LinkedIn : SaaS, conseil, formation, coaching, agences, recrutement et services aux entreprises. La condition : un ticket moyen sup\u00e9rieur \u00e0 500 \u20ac pour justifier le co\u00fbt d'acquisition.",
  },
  {
    question: "Quel est le taux de r\u00e9ponse en setting LinkedIn ?",
    answer:
      "Le taux de r\u00e9ponse en setting LinkedIn signal-based se situe entre 15 et 35 % sur les messages inbound (prospect ayant r\u00e9agi \u00e0 votre contenu) et entre 12 et 25 % en outbound (signal d\u00e9tect\u00e9 sur un compte tiers). \u00c0 comparer avec 2-5 % en cold outreach classique.",
  },
  {
    question: "Combien de RDV qualifi\u00e9s avec le setting LinkedIn ?",
    answer:
      "Un programme de setting LinkedIn calibr\u00e9 g\u00e9n\u00e8re 8 \u00e0 15 RDV qualifi\u00e9s par mois en r\u00e9gime de croisi\u00e8re. Les premiers rendez-vous arrivent d\u00e8s la premi\u00e8re semaine. Le volume se stabilise en 4 \u00e0 6 semaines, le temps de calibrer les signaux et d'affiner les messages.",
  },
  {
    question: "Quel est le prix du setting LinkedIn externalis\u00e9 ?",
    answer:
      "Un programme de setting LinkedIn externalis\u00e9 co\u00fbte entre 1 500 et 4 000 \u20ac par mois, incluant le setter d\u00e9di\u00e9, les outils, la base de connaissance et le coaching. \u00c0 comparer avec un commercial interne (45 000 \u00e0 70 000 \u20ac par an charg\u00e9) ou votre propre temps perdu \u00e0 prospecter.",
  },
  {
    question: "Quelle diff\u00e9rence entre setting LinkedIn et social selling ?",
    answer:
      "Le social selling construit une pr\u00e9sence sur le long terme (publication de contenu, engagement, r\u00e9seau) sans d\u00e9marche de contact direct. Le setting LinkedIn utilise les signaux g\u00e9n\u00e9r\u00e9s par cette pr\u00e9sence pour initier des conversations cibl\u00e9es. Le social selling attire. Le setting LinkedIn convertit.",
  },
  {
    question: "Le setting LinkedIn est-il l\u00e9gal ?",
    answer:
      "Oui. Le setting LinkedIn est une d\u00e9marche de prospection B2B classique, encadr\u00e9e par le RGPD. L'int\u00e9r\u00eat l\u00e9gitime permet la prospection B2B sans consentement pr\u00e9alable, \u00e0 condition de respecter le droit d'opposition et de ne pas utiliser d'outils d'automatisation qui violent les CGU de LinkedIn.",
  },
  {
    question: "Combien co\u00fbte concr\u00e8tement le setting LinkedIn en 2026 ?",
    answer:
      "Un programme externalis\u00e9 co\u00fbte 1 500 \u00e0 4 000 \u20ac/mois selon le volume (setter d\u00e9di\u00e9, outils, coaching). En interne, compter 45-70 k\u20ac/an charg\u00e9s pour un setter junior, plus 200-300 \u20ac/mois d'outils. Le d\u00e9tail des grilles de prix, ROI et comparatif setter interne vs freelance vs agence : voir le guide Setting LinkedIn prix.",
  },
  {
    question: "Peut-on remplacer le setter par de l'IA ?",
    answer:
      "Non, mais on peut l'aider. L'IA d\u00e9tecte les signaux, enrichit les donn\u00e9es, propose des premiers jets. L'humain d\u00e9cide d'envoyer, adapte le ton et qualifie la conversation. Un message 100 % IA reste reconnaissable \u00e0 son template, donc filtr\u00e9 par le prospect. La bonne combinaison IA + setter double la productivit\u00e9 sans sacrifier le taux de r\u00e9ponse.",
  },
  {
    question: "Internaliser ou externaliser son setting LinkedIn ?",
    answer:
      "Externaliser est plus rapide (1-2 semaines vs 3-6 mois pour recruter et former), co\u00fbte moins cher pour moins de 15 RDV/mois, et r\u00e9duit le risque d'\u00e9chec. Internaliser devient pertinent au-del\u00e0 de 20 RDV/mois r\u00e9currents ou si le setting est core business. La plupart des PME commencent externalis\u00e9 puis internalisent.",
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
      name: 'Setting LinkedIn',
      item: 'https://www.setting.live/ressources/setting-linkedin',
    },
  ],
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'definition', label: "Qu'est-ce que le setting LinkedIn ?" },
  { id: 'vs-cold', label: 'Setting LinkedIn vs cold outreach vs social selling' },
  { id: 'reactif-proactif', label: 'Setting r\u00e9actif (inbound) vs proactif (outbound)' },
  { id: 'etapes', label: 'Les 5 \u00e9tapes du setting LinkedIn' },
  { id: 'scripts', label: 'Scripts de messages : 3 exemples concrets' },
  { id: 'outils', label: 'Les outils indispensables' },
  { id: 'kpis', label: 'KPIs et r\u00e9sultats attendus' },
  { id: 'erreurs', label: 'Les erreurs qui tuent votre setting LinkedIn' },
  { id: 'externaliser', label: 'Quand externaliser son setting LinkedIn ?' },
  { id: 'faq', label: 'Questions fr\u00e9quentes' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInPage() {
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
              <li className="text-text-primary">Setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide pilier
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn : d&eacute;finition, m&eacute;thode et exemples concrets
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La plupart des m&eacute;thodes de prospection LinkedIn ne marchent plus.
              Trop de bruit. Trop de messages g&eacute;n&eacute;riques. Le setting LinkedIn
              prend le probl&egrave;me &agrave; l&apos;envers : on ne contacte personne sans raison.
              D&eacute;tecter un signal. Lire le contexte. &Eacute;crire un message qui fait mouche.
              Qualifier. D&eacute;crocher le RDV. Ce guide pose tout &agrave; plat : d&eacute;finition,
              m&eacute;thode en 5 &eacute;tapes, scripts, outils et erreurs &agrave; &eacute;viter.
            </p>
            <AuthorBlock date="2026-04-12" readTime="25 min de lecture" dateLabel="12 avril 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              Le <strong className="text-text-primary">setting LinkedIn</strong> est une m&eacute;thode
              de prospection B2B qui d&eacute;tecte les signaux d&apos;achat sur LinkedIn
              (r&eacute;actions, changements de poste, visites de profil) pour engager des
              conversations qualifi&eacute;es. Taux de r&eacute;ponse : 15-35&nbsp;% avec la
              m&eacute;thode signal-based, contre 2-5&nbsp;% en cold outreach.
              R&eacute;sultat : 8 &agrave; 15 RDV qualifi&eacute;s par mois. Ce guide couvre
              la d&eacute;finition, les 5 &eacute;tapes, les scripts de messages, les outils
              indispensables et les KPIs &agrave; suivre.
            </p>
          </TldrBox>

          {/* Definition block */}
          <div className="definition-block bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10" itemScope itemType="https://schema.org/DefinedTerm">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2" itemProp="name">
              Setting LinkedIn
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed" itemProp="description" data-speakable="true">
              M&eacute;thode de prospection B2B qui consiste &agrave; d&eacute;tecter les signaux
              d&apos;achat sur LinkedIn (r&eacute;actions &agrave; des posts, changements de poste,
              visites de profil), puis &agrave; envoyer un message personnalis&eacute; ancr&eacute;
              sur ce signal pour engager une conversation et d&eacute;crocher un rendez-vous
              qualifi&eacute;. Chaque message est valid&eacute; par un humain. Le setting LinkedIn
              n&apos;est ni de l&apos;automatisation, ni du cold outreach.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '15-35 %', label: 'taux de r\u00e9ponse en setting LinkedIn' },
              { stat: '8\u201315', label: 'RDV qualifi\u00e9s par mois en croisi\u00e8re' },
              { stat: '2-5 %', label: 'taux de r\u00e9ponse en cold outreach' },
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
              {tocItems.map(({ id, label }, i) => (
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
            {/* Section 1 — D\u00e9finition */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Qu&apos;est-ce que le setting LinkedIn&nbsp;?
              </h2>
              <p className="mb-4">
                Le setting LinkedIn est une m&eacute;thode de prospection B2B qui repose
                sur un principe simple : ne jamais contacter un prospect sans raison.
                Au lieu d&apos;envoyer des messages en masse &agrave; des inconnus, le setter
                d&eacute;tecte d&apos;abord un <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
                d&apos;achat</a> sur LinkedIn, puis r&eacute;dige un message ancr&eacute;
                sur ce signal.
              </p>
              <p className="mb-4">
                Le mot &laquo;&nbsp;setting&nbsp;&raquo; vient de l&apos;anglais
                &laquo;&nbsp;to set an appointment&nbsp;&raquo; : fixer un rendez-vous.
                Le setter ne vend pas. Il n&apos;envoie pas de propositions commerciales.
                Il d&eacute;tecte, contacte, qualifie et transmet le prospect au closeur.
                C&apos;est la premi&egrave;re moiti&eacute; du cycle de vente, celle qui
                d&eacute;termine le volume et la qualit&eacute; du pipeline.
              </p>
              <p className="mb-4">
                Ce qui distingue le setting LinkedIn des autres approches, c&apos;est
                le timing. Le prospect a publi&eacute; un post sur un sujet li&eacute;
                &agrave; votre offre. Il a chang&eacute; de poste. Il a comment&eacute;
                un contenu concurrent. Ce signal indique qu&apos;il explore activement
                un sujet. Le message arrive au bon moment, avec le bon contexte.
              </p>
              <p className="mb-4">
                Cinq &eacute;tapes, toujours les m&ecirc;mes : d&eacute;tecter le signal,
                v&eacute;rifier l&apos;ICP, analyser le profil, &eacute;crire le message,
                qualifier avant le RDV. Et un principe non n&eacute;gociable : chaque message
                est relu et valid&eacute; par un humain. Z&eacute;ro automatisation.
                Z&eacute;ro template. De la{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">prospection
                sur mesure</a>.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ce que le setting LinkedIn est (et n&apos;est pas)
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Le setting LinkedIn, c&apos;est :</p>
                    <ul className="space-y-2">
                      {[
                        "D\u00e9tecter un signal d'achat avant de contacter",
                        "R\u00e9diger un message personnalis\u00e9 ancr\u00e9 sur un fait pr\u00e9cis",
                        "Qualifier le prospect avant le rendez-vous",
                        "Valider chaque message par un humain",
                        "G\u00e9n\u00e9rer 8 \u00e0 15 RDV qualifi\u00e9s par mois",
                      ].map((text, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-accent shrink-0">&#x2713;</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Ce n&apos;est pas :</p>
                    <ul className="space-y-2">
                      {[
                        "De l'automatisation ou du mass DM",
                        "Des templates copi\u00e9s-coll\u00e9s avec le pr\u00e9nom",
                        "Du cold outreach sans contexte",
                        "Du spam ou de la prospection agressive",
                        "Un outil ou un logiciel",
                      ].map((text, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-red-400 shrink-0">&#x2717;</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                Pour approfondir le r&ocirc;le du setter et la diff&eacute;rence avec le
                closeur, consultez notre guide{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting
                commercial B2B</a>. Et pour comprendre la m&eacute;thode compl&egrave;te
                en 9 &eacute;tapes :{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">notre
                m&eacute;thode de setting LinkedIn</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 2 — vs cold outreach vs social selling */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="vs-cold" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting LinkedIn vs cold outreach vs social selling
              </h2>
              <p className="mb-6">
                Trois approches coexistent sur LinkedIn. Elles n&apos;ont pas le m&ecirc;me
                m&eacute;canisme, pas le m&ecirc;me co&ucirc;t, pas le m&ecirc;me ROI.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Crit&egrave;re</th>
                      <th className="text-left font-semibold text-accent py-3 pr-4">Setting LinkedIn</th>
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Cold outreach</th>
                      <th className="text-left font-semibold text-text-primary py-3">Social selling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {[
                      ['D\u00e9clencheur', 'Signal d\u2019achat d\u00e9tect\u00e9', 'Liste de prospects froids', 'Publication de contenu'],
                      ['Personnalisation', 'Message ancr\u00e9 sur un fait pr\u00e9cis', 'Template avec variable', 'Pas de message direct'],
                      ['Volume', '30-60 messages/semaine', '200-500 messages/semaine', '0 message direct'],
                      ['Taux de r\u00e9ponse', '15-35 %', '2-5 %', 'Pas mesurable directement'],
                      ['D\u00e9lai avant r\u00e9sultats', '1-2 semaines', '1-2 semaines', '3-6 mois'],
                      ['Co\u00fbt par RDV', '50-120 \u20ac', '150-400 \u20ac', 'Difficile \u00e0 calculer'],
                      ['Scalabilit\u00e9', 'Moyenne (humain dans la boucle)', '\u00c9lev\u00e9e (automatis\u00e9)', 'Faible (cr\u00e9ation de contenu)'],
                    ].map(([critere, setting, cold, social], i) => (
                      <tr key={i}>
                        <td className="py-3 pr-4 font-medium text-text-primary">{critere}</td>
                        <td className="py-3 pr-4 text-accent">{setting}</td>
                        <td className="py-3 pr-4">{cold}</td>
                        <td className="py-3">{social}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Le setting LinkedIn est entre les deux. R&eacute;sultats rapides comme le cold
                outreach (d&egrave;s la premi&egrave;re semaine), pertinence du social selling
                (contexte, personnalisation). Co&ucirc;t par RDV 3 &agrave; 4 fois
                inf&eacute;rieur au cold classique, parce que le taux de r&eacute;ponse est
                5 &agrave; 10 fois plus &eacute;lev&eacute;.
              </p>
              <p className="mb-4">
                En pratique, les meilleurs syst&egrave;mes combinent les trois. Le social
                selling g&eacute;n&egrave;re les signaux inbound. Le setting LinkedIn
                les convertit en conversations. Et quand le pipeline ne suffit pas,
                l&apos;outbound cibl&eacute; compl&egrave;te le volume.
              </p>
              <p>
                Pour aller plus loin sur le{' '}
                <a href="/ressources/social-selling-linkedin-b2b" className="text-accent hover:underline transition-colors">social
                selling LinkedIn B2B</a>, on a tout d&eacute;taill&eacute; l&agrave;-bas.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 3 — R\u00e9actif vs proactif */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="reactif-proactif" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting r&eacute;actif (inbound) vs proactif (outbound)
              </h2>
              <p className="mb-6">
                Deux modes, deux m&eacute;caniques. L&apos;un attend que le prospect
                vienne &agrave; vous. L&apos;autre va le chercher. Les taux de r&eacute;ponse
                ne sont pas les m&ecirc;mes. Le volume non plus. Un bon pipeline utilise les deux.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Setting r&eacute;actif (inbound)
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-3 text-sm">
                    Le prospect vient &agrave; vous
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "A r\u00e9agi \u00e0 l'un de vos posts (like, commentaire, partage)",
                      "A visit\u00e9 votre profil LinkedIn",
                      "A accept\u00e9 votre demande de connexion",
                      "A regard\u00e9 votre story ou votre newsletter",
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent/10 rounded-lg px-4 py-3">
                    <p className="font-sans text-sm">
                      <span className="font-semibold text-accent">Taux de r&eacute;ponse :</span>{' '}
                      <span className="text-text-primary font-semibold">25-40&nbsp;%</span>
                    </p>
                  </div>
                </div>

                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Setting proactif (outbound)
                  </p>
                  <p className="font-sans font-semibold text-text-primary mb-3 text-sm">
                    Vous d&eacute;tectez le signal
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Changement de poste d\u00e9tect\u00e9 via Sales Navigator",
                      "Interaction sur le post d'un concurrent",
                      "Lev\u00e9e de fonds ou recrutement annonc\u00e9",
                      "Commentaire sur un sujet li\u00e9 \u00e0 votre offre",
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-accent/10 rounded-lg px-4 py-3">
                    <p className="font-sans text-sm">
                      <span className="font-semibold text-accent">Taux de r&eacute;ponse :</span>{' '}
                      <span className="text-text-primary font-semibold">12-25&nbsp;%</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                L&apos;inbound est plus efficace en taux de r&eacute;ponse, mais le volume
                d&eacute;pend de votre activit&eacute; de publication. L&apos;outbound est
                scalable, mais demande plus de recherche par prospect. Un syst&egrave;me
                complet utilise les deux sources.
              </p>
              <p>
                Pour construire un syst&egrave;me inbound complet :{' '}
                <a href="/ressources/inbound-setting-linkedin" className="text-accent hover:underline transition-colors">inbound
                setting LinkedIn</a>. Pour d&eacute;tecter les signaux outbound :{' '}
                <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signaux
                d&apos;achat LinkedIn</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 4 — 5 \u00e9tapes */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="etapes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 5 &eacute;tapes du setting LinkedIn
              </h2>
              <p className="mb-8">
                Voici le pipeline, de la d&eacute;tection du signal &agrave; la prise
                de rendez-vous. Sauter une &eacute;tape et le taux de r&eacute;ponse
                chute. On l&apos;a vu des dizaines de fois.
              </p>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: 'D\u00e9tecter les signaux d\u2019achat',
                    description: "Trois cat\u00e9gories de signaux \u00e0 monitorer. Les signaux inbound : un prospect a lik\u00e9, comment\u00e9 ou partag\u00e9 l'un de vos posts. Les signaux outbound : le prospect a interagi avec le contenu d'un concurrent ou d'un compte compl\u00e9mentaire. Les signaux de changement : prise de poste, lev\u00e9e de fonds, recrutement en cours. Utilisez Reactin pour les signaux inbound et Sales Navigator pour les alertes de changement.",
                    tip: "Ne contactez jamais un prospect sans signal. M\u00eame un signal faible (visite de profil) vaut mieux que pas de signal du tout.",
                  },
                  {
                    step: 2,
                    title: 'V\u00e9rifier la correspondance ICP',
                    description: "Avant de r\u00e9diger le message, v\u00e9rifiez quatre crit\u00e8res. La fonction : le prospect est-il d\u00e9cisionnaire ou influenceur ? Le secteur : correspond-il \u00e0 vos cas clients ? La taille : l'entreprise est-elle dans votre fourchette cible ? Le ticket : votre offre est-elle adapt\u00e9e \u00e0 leur budget ?",
                    tip: "Un signal sans correspondance ICP est un signal perdu. Ne vous laissez pas distraire par un CMO qui like votre post si vous vendez du conseil RH.",
                  },
                  {
                    step: 3,
                    title: 'Analyser le profil en profondeur',
                    description: "Lisez les 3 \u00e0 5 derniers posts du prospect. Parcourez sa section \u00ab Info \u00bb. V\u00e9rifiez son exp\u00e9rience r\u00e9cente. L'objectif : trouver un angle d'accroche sp\u00e9cifique qui prouve que vous avez pris le temps de comprendre son contexte. Un post sur la difficult\u00e9 \u00e0 recruter des commerciaux, un commentaire sur l'IA dans la vente, une prise de poste r\u00e9cente.",
                    tip: "3 minutes d'analyse par profil suffisent. Au-del\u00e0, vous suroptimisez. Le message doit \u00eatre pr\u00e9cis, pas parfait.",
                  },
                  {
                    step: 4,
                    title: 'R\u00e9diger le message personnalis\u00e9',
                    description: "Le message suit une structure simple. Phrase 1 : ancre sur le signal (\u00ab J'ai vu votre commentaire sur... \u00bb). Phrase 2 : fait pr\u00e9cis tir\u00e9 du profil. Phrase 3 : pont vers votre domaine d'expertise. Phrase 4 : question ouverte. Pas de pitch. Pas de lien. Pas de pr\u00e9sentation de votre offre. 3 \u00e0 5 phrases maximum.",
                    tip: "Faites le test du t\u00e9l\u00e9phone : lisez le message \u00e0 voix haute. Est-ce que vous l'enverriez depuis votre t\u00e9l\u00e9phone un mardi matin ? Si non, r\u00e9\u00e9crivez.",
                  },
                  {
                    step: 5,
                    title: 'Qualifier et proposer le RDV',
                    description: "Quand le prospect r\u00e9pond, ne proposez pas imm\u00e9diatement un appel. Posez 2 \u00e0 3 questions de qualification : quel est le d\u00e9fi principal ? Depuis quand ? D\u00e9j\u00e0 essay\u00e9 des solutions ? Quand l'int\u00e9r\u00eat est explicite, proposez un cr\u00e9neau pr\u00e9cis. Transmettez le brief complet au closeur : signal, contexte, r\u00e9ponses aux questions.",
                    tip: "80 % des setters proposent le RDV trop t\u00f4t. La qualification cr\u00e9e la confiance et am\u00e9liore le taux de show-up.",
                  },
                ].map(({ step, title, description, tip }) => (
                  <div key={step} className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 font-serif text-accent text-lg font-semibold">
                        {step}
                      </span>
                      <h3 className="font-serif text-lg text-text-primary font-semibold">{title}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed">{description}</p>
                    <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg px-4 py-3">
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">
                        <span className="font-semibold text-accent">Conseil :</span> {tip}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8">
                Pour la m&eacute;thode compl&egrave;te en 9 &eacute;tapes (avec les phases de
                calibration et de scaling) :{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">notre
                m&eacute;thode de setting LinkedIn</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 5 — Scripts de messages */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scripts" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Scripts de messages : 3 exemples concrets
              </h2>
              <p className="mb-8">
                Trois scripts qu&apos;on utilise au quotidien. Pas des templates &agrave;
                copier-coller &mdash; des cadres. La structure reste. Les mots changent
                &agrave; chaque prospect.
              </p>

              {/* Script 1 — Inbound */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 1 &mdash; Inbound (r&eacute;action &agrave; votre post)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Bonjour [Pr&eacute;nom],</p>
                  <p className="mt-2">
                    J&apos;ai vu votre commentaire sur [sujet du post]. Vous mentionniez
                    [point pr&eacute;cis] &mdash; c&apos;est un sujet qu&apos;on rencontre
                    souvent chez nos clients [secteur].
                  </p>
                  <p className="mt-2">
                    Curiosit&eacute; : c&apos;est un d&eacute;fi actuel chez [entreprise],
                    ou vous explorez le sujet de fa&ccedil;on plus large&nbsp;?
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3">
                  Pourquoi &ccedil;a fonctionne : l&apos;ancre sur le commentaire prouve que
                  le message est humain. La question ouverte invite une r&eacute;ponse sans
                  pression.
                </p>
              </div>

              {/* Script 2 — Outbound */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 2 &mdash; Outbound (changement de poste)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Bonjour [Pr&eacute;nom],</p>
                  <p className="mt-2">
                    F&eacute;licitations pour votre prise de poste chez [entreprise].
                    Les 90 premiers jours sont souvent le moment o&ugrave; on red&eacute;finit
                    [sujet li&eacute; &agrave; votre offre].
                  </p>
                  <p className="mt-2">
                    Est-ce que [probl&egrave;me courant dans le secteur] fait partie
                    des chantiers que vous avez identifi&eacute;s&nbsp;?
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3">
                  Pourquoi &ccedil;a fonctionne : la f&eacute;licitation est sinc&egrave;re et
                  cr&eacute;e un contexte positif. La question est pertinente pour quelqu&apos;un
                  qui vient de prendre un poste.
                </p>
              </div>

              {/* Script 3 — Relance */}
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06] mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Script 3 &mdash; Relance J+7
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>[Pr&eacute;nom],</p>
                  <p className="mt-2">
                    Suite &agrave; mon message de la semaine derni&egrave;re. J&apos;ai vu
                    que [entreprise] [fait r&eacute;cent : recrutement, post, &eacute;v&eacute;nement].
                    &Ccedil;a m&apos;a confirm&eacute; que [sujet] est un enjeu actuel chez vous.
                  </p>
                  <p className="mt-2">
                    Si le timing est bon, je serais ravi d&apos;&eacute;changer 15 min
                    sur [angle pr&eacute;cis]. Sinon, pas de souci.
                  </p>
                </div>
                <p className="font-sans text-xs text-text-secondary mt-3">
                  Pourquoi &ccedil;a fonctionne : la relance apporte une information nouvelle.
                  Elle ne mentionne pas le silence. Elle laisse la porte ouverte sans pression.
                </p>
              </div>

              <p>
                Pour plus de scripts et d&apos;exemples :{' '}
                <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline transition-colors">15
                exemples de messages de prospection LinkedIn</a>. Pour 5 cas concrets
                format&eacute;s par type de signal (like passif, commentaire, changement de poste,
                visite de profil, inbound), voir{' '}
                <a href="/ressources/setting-linkedin-exemples" className="text-accent hover:underline transition-colors">5
                exemples de setting LinkedIn avec messages et r&eacute;sultats</a>.
              </p>
            </section>

            {/* Mid-article CTA */}
            <CtaArticle variant="setting" />

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 6 — Outils */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les outils indispensables du setting LinkedIn
              </h2>
              <p className="mb-8">
                Le setting LinkedIn est une m&eacute;thode, pas un outil. Mais certains
                logiciels font gagner du temps au setter.
                Voici la stack qu&apos;on utilise au quotidien.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  {
                    name: 'Reactin',
                    role: 'D\u00e9tection des signaux inbound',
                    price: '49 \u20ac/mois',
                    description: 'Identifie qui a r\u00e9agi \u00e0 vos posts LinkedIn (likes, commentaires, partages). Le point de d\u00e9part du setting r\u00e9actif.',
                  },
                  {
                    name: 'LinkedIn Sales Navigator',
                    role: 'Ciblage et alertes',
                    price: '99 \u20ac/mois',
                    description: 'Filtres avanc\u00e9s, alertes de changement de poste, listes de comptes \u00e0 surveiller. Indispensable pour le setting proactif.',
                  },
                  {
                    name: 'BreakCold',
                    role: 'CRM social selling',
                    price: '29 \u20ac/mois',
                    description: 'Centralise les conversations LinkedIn, suit le pipeline et permet de g\u00e9rer les relances sans rien oublier.',
                  },
                  {
                    name: 'Make / Zapier',
                    role: 'Automatisation des flux',
                    price: '29 \u20ac/mois',
                    description: 'Connecte les outils entre eux : signal d\u00e9tect\u00e9 \u2192 fiche cr\u00e9\u00e9e dans le CRM \u2192 notification au setter. Pas d\u2019automatisation de messages.',
                  },
                  {
                    name: 'Claude AI',
                    role: 'Co-r\u00e9daction des messages',
                    price: '20 $/mois',
                    description: 'G\u00e9n\u00e8re des drafts de messages \u00e0 partir du signal et du profil. Le setter valide et ajuste avant envoi. De la co-r\u00e9daction, pas de l\u2019automatisation.',
                  },
                ].map(({ name, role, price, description }) => (
                  <div key={name} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-sans font-semibold text-text-primary text-sm">{name}</p>
                      <span className="font-sans text-xs text-accent bg-accent/10 rounded-full px-3 py-1">{price}</span>
                    </div>
                    <p className="font-sans text-xs text-accent uppercase tracking-wide mb-2">{role}</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Budget total outils : environ 230&nbsp;&euro;/mois
                </p>
                <p className="font-sans text-text-secondary text-sm">
                  Rentabilis&eacute; d&egrave;s le premier RDV sign&eacute;. Le v&eacute;ritable
                  co&ucirc;t du setting LinkedIn, c&apos;est le temps humain, pas les outils.
                </p>
              </div>
              <p className="text-sm text-text-muted italic mt-4">
                Sur la place exacte de l&apos;IA dans la stack, ses limites et ce qu&apos;elle ne doit
                jamais faire seule :{' '}
                <a href="/ressources/setting-linkedin-ia" className="text-accent hover:underline transition-colors">Setting
                LinkedIn et IA : combiner intelligence artificielle et humain</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 7 — KPIs */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="kpis" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                KPIs et r&eacute;sultats attendus
              </h2>
              <p className="mb-8">
                Le setting LinkedIn se pilote avec six indicateurs. Ces chiffres sont
                ceux que nous observons sur nos programmes en r&eacute;gime de croisi&egrave;re,
                apr&egrave;s 4 &agrave; 6 semaines de calibration.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">KPI</th>
                      <th className="text-left font-semibold text-accent py-3 pr-4">Cible</th>
                      <th className="text-left font-semibold text-text-primary py-3">Commentaire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {[
                      ['Taux de r\u00e9ponse', '15-35 %', 'Inbound > outbound. En dessous de 10 %, revoir le ciblage ou le message.'],
                      ['Taux de RDV (sur r\u00e9ponse)', '40-60 %', 'Si inf\u00e9rieur \u00e0 30 %, la qualification est insuffisante.'],
                      ['RDV qualifi\u00e9s / mois', '8-15', 'Volume stable apr\u00e8s 6 semaines de calibration.'],
                      ['Co\u00fbt par RDV', '50-120 \u20ac', 'Inclut le temps humain et les outils. 3x moins cher que le cold outreach.'],
                      ['D\u00e9lai premier RDV', '5-7 jours', 'D\u00e8s la premi\u00e8re semaine si les signaux sont d\u00e9j\u00e0 identifi\u00e9s.'],
                      ['ROI \u00e0 3 mois', 'x3-x5', 'Sur la base d\u2019un ticket moyen > 2 000 \u20ac.'],
                    ].map(([kpi, cible, commentaire], i) => (
                      <tr key={i}>
                        <td className="py-3 pr-4 font-medium text-text-primary">{kpi}</td>
                        <td className="py-3 pr-4 text-accent font-semibold">{cible}</td>
                        <td className="py-3 text-sm">{commentaire}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Ces chiffres bougent selon le secteur, le ticket moyen et la maturit&eacute;
                du profil LinkedIn. Mais l&apos;ordre de grandeur tient :
                le setting LinkedIn signal-based se rentabilise en 2-3 mois.
              </p>
              <p>
                Le KPI qui compte vraiment, c&apos;est pas le taux de r&eacute;ponse. C&apos;est
                le nombre de RDV qui se transforment en opportunit&eacute;s.
                Un taux de r&eacute;ponse &eacute;lev&eacute; avec des RDV non qualifi&eacute;s
                fait perdre du temps au closeur. Tout se joue &agrave; la qualification.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 8 — Erreurs */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les erreurs qui tuent votre setting LinkedIn
              </h2>
              <p className="mb-8">
                Cinq erreurs qu&apos;on voit revenir en permanence. Si votre setting
                LinkedIn ne d&eacute;colle pas, y&apos;a de bonnes chances que l&apos;une
                d&apos;entre elles soit en cause.
              </p>

              <div className="space-y-4">
                {[
                  {
                    number: 1,
                    title: 'Pitcher dans le premier message',
                    description: "Le premier message sert \u00e0 ouvrir une conversation, pas \u00e0 vendre. D\u00e8s qu'un prospect lit un pitch, il classe le message comme spam. Le setting LinkedIn ne fonctionne que si le premier message ne contient aucune pr\u00e9sentation de votre offre. Z\u00e9ro lien, z\u00e9ro brochure, z\u00e9ro \u00ab on aide les entreprises \u00e0... \u00bb.",
                  },
                  {
                    number: 2,
                    title: 'Envoyer des templates non personnalis\u00e9s',
                    description: "Un template avec [Pr\u00e9nom] et [Entreprise] ne trompe personne. Les d\u00e9cideurs B2B re\u00e7oivent des dizaines de messages identiques. Ce qui fonctionne : un message qui fait r\u00e9f\u00e9rence \u00e0 un fait sp\u00e9cifique du profil du prospect. La preuve que quelqu'un a pris le temps de lire avant d'\u00e9crire.",
                  },
                  {
                    number: 3,
                    title: 'Ignorer les signaux et contacter \u00e0 froid',
                    description: "Sans signal, vous envoyez un cold DM. Le prospect n'a montr\u00e9 aucun int\u00e9r\u00eat pour votre sujet. Le taux de r\u00e9ponse tombe \u00e0 2-5 %. Le signal est le fondement du setting LinkedIn. Sans lui, c'est du cold outreach d\u00e9guis\u00e9.",
                  },
                  {
                    number: 4,
                    title: 'Ne pas relancer',
                    description: "80 % des r\u00e9ponses positives arrivent apr\u00e8s une relance. La plupart des setters abandonnent apr\u00e8s un seul message. Deux relances espac\u00e9es de 7 jours, avec un angle diff\u00e9rent \u00e0 chaque fois. La relance apporte une information nouvelle, elle ne rappelle pas le silence.",
                  },
                  {
                    number: 5,
                    title: 'M\u00e9langer setting et closing',
                    description: "Le setter d\u00e9croche le rendez-vous. Le closeur le convertit. Si vous faites les deux dans le m\u00eame message ou le m\u00eame appel, vous perdez en efficacit\u00e9 sur les deux fronts. S\u00e9parer les r\u00f4les permet d'optimiser chaque \u00e9tape ind\u00e9pendamment.",
                  },
                ].map(({ number, title, description }) => (
                  <div key={number} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 font-serif text-red-400 text-sm font-semibold">
                        {number}
                      </span>
                      <h3 className="font-sans font-semibold text-text-primary">{title}</h3>
                    </div>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8">
                Pour aller plus loin sur la diff&eacute;rence entre les deux r&ocirc;les :{' '}
                <a href="/ressources/difference-setting-closing" className="text-accent hover:underline transition-colors">setting
                vs closing</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 9 — Externaliser */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="externaliser" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand externaliser son setting LinkedIn&nbsp;?
              </h2>
              <p className="mb-4">
                Le setting LinkedIn prend du temps. D&eacute;tection, analyse des profils,
                r&eacute;daction, conversations. Comptez 2 &agrave; 3 heures par jour
                pour maintenir un flux r&eacute;gulier de RDV.
              </p>
              <p className="mb-8">
                &Agrave; un moment, le choix se pose : continuer seul ou d&eacute;l&eacute;guer.
                Voici les signaux qui indiquent qu&apos;il est temps d&apos;externaliser.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Vous passez plus de temps \u00e0 prospecter qu'\u00e0 d\u00e9livrer votre service",
                  "Votre pipeline est irr\u00e9gulier : des semaines \u00e0 15 RDV, d'autres \u00e0 z\u00e9ro",
                  "Vous savez que le setting LinkedIn fonctionne mais vous manquez de bande passante",
                  "Votre offre est valid\u00e9e (taux de conversion en appel > 20 %) et vous avez besoin de volume",
                  "Un commercial interne co\u00fbterait plus cher que le programme externalis\u00e9",
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 font-sans text-text-secondary">
                    <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Setting LinkedIn en interne
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Salaire charg\u00e9 : 45 000-70 000 \u20ac/an',
                      'Formation : 2-3 mois avant productivit\u00e9',
                      'Management : 3-5h/semaine',
                      'Risque de turnover : \u00e9lev\u00e9 (SDR)',
                      'Outils : 200-300 \u20ac/mois suppl\u00e9mentaires',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-text-secondary/30 shrink-0">&bull;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Setting LinkedIn externalis&eacute;
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Programme complet : 1 500-4 000 \u20ac/mois',
                      'Productivit\u00e9 : d\u00e8s la semaine 1',
                      'Setter d\u00e9di\u00e9 + outils inclus',
                      'Coaching closing inclus',
                      'Engagement flexible : mensuel',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0">&bull;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                Honnêtement, si vous n&apos;avez pas encore vendu votre service, ne
                d&eacute;l&eacute;guez pas encore. Faites le setting vous-m&ecirc;me d&apos;abord.
                Vous apprendrez les objections, les angles qui marchent, les signaux qui comptent
                pour votre march&eacute;. Apr&egrave;s, vous d&eacute;l&eacute;guez en sachant exactement
                ce que vous attendez.
              </p>
              <p>
                Pour d&eacute;couvrir notre programme externalis&eacute; :{' '}
                <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">externaliser
                sa prospection LinkedIn</a>. Pour conna&icirc;tre nos tarifs :{' '}
                <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs Setting</a>.
                Pour le d&eacute;tail complet des grilles de prix (interne, freelance, agence), ROI et
                benchmarks 2026 :{' '}
                <a href="/ressources/setting-linkedin-prix" className="text-accent hover:underline transition-colors">Combien
                co&ucirc;te le setting LinkedIn en 2026</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Cas concret 2026 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="cas-concret" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Cas concret 2026 : de la d&eacute;tection au RDV sign&eacute;
              </h2>

              <div className="tldr bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sum&eacute; du cas
                </p>
                <p className="font-sans text-text-primary text-sm leading-relaxed">
                  PME SaaS RH, 80 salari&eacute;s. Cible : DRH d&apos;ETI industrielles (500-2 000 personnes).
                  R&eacute;sultat en 5 semaines : 14 RDV qualifi&eacute;s, 3 opportunit&eacute;s en cycle de vente,
                  1 contrat sign&eacute; &agrave; 42 k&euro; ARR. Co&ucirc;t du programme : 2 400 &euro;.
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le prospect</h3>
              <p className="mb-4">
                Claire, DRH d&apos;un groupe industriel familial de 1 200 salari&eacute;s dans les Hauts-de-France.
                Prise de poste il y a 4 mois. Probl&eacute;matique publique : la pyramide des &acirc;ges et
                la difficult&eacute; &agrave; recruter des profils techniques junior.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le signal</h3>
              <p className="mb-4">
                Claire commente un post d&apos;un &eacute;diteur concurrent sur la marque employeur industrielle.
                Son commentaire : &laquo;&nbsp;Int&eacute;ressant. Nous cherchons justement &agrave; structurer
                notre approche pour attirer les jeunes techniciens&nbsp;&raquo;. Le setter d&eacute;tecte ce
                signal outbound via Reactin dans l&apos;heure qui suit.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le message</h3>
              <div className="bg-bg-secondary border border-white/[0.06] rounded-xl p-5 mb-4">
                <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                  Bonjour Claire, j&apos;ai vu votre commentaire chez [concurrent] sur l&apos;attractivit&eacute;
                  des techniciens. On travaille avec 3 ETI industrielles qui ont montr&eacute; +40 % de
                  candidatures qualifi&eacute;es en 6 mois en inversant leur fa&ccedil;on de raconter le m&eacute;tier.
                  Le d&eacute;clic, c&apos;est un chiffre qu&apos;ils ne publiaient pas. Vous auriez 15 min pour
                  que je vous raconte lequel ?
                </p>
              </div>
              <p className="mb-4 text-sm text-text-muted">
                4 lignes. Ancrage sur le commentaire pr&eacute;cis. Une preuve chiffr&eacute;e. Une question
                ferm&eacute;e qui facilite le oui. Pas de pitch, pas de lien Calendly dans le premier DM.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">La conversation</h3>
              <p className="mb-4">
                R&eacute;ponse de Claire 4 heures plus tard : &laquo;&nbsp;Bonjour, oui je veux bien en
                discuter&nbsp;&raquo;. Le setter pose 2 questions de qualification (volume de recrutements
                annuels, outils en place). Claire r&eacute;pond : 60 recrutements/an, pas d&apos;ATS d&eacute;di&eacute;.
                Le setter propose 3 cr&eacute;neaux. Claire prend mardi 10h.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le RDV et la suite</h3>
              <p className="mb-4">
                Brief complet transmis au closer : contexte, signal, qualification, r&eacute;ponses pr&eacute;cises.
                Le closer arrive en sachant exactement o&ugrave; appuyer. Discovery call de 35 min. Claire
                confirme le besoin. Proposition envoy&eacute;e sous 48h. Sign&eacute;e 3 semaines plus tard pour
                42 k&euro; ARR.
              </p>

              <p className="mb-4">
                Sur les 14 RDV g&eacute;n&eacute;r&eacute;s ce mois-l&agrave;, 11 venaient de signaux outbound
                (comme Claire), 3 de signaux inbound (prospects ayant r&eacute;agi aux posts du dirigeant).
                Temps setter total : 22 heures. Ratio : 1 RDV toutes les 1h35 de travail. C&apos;est ce que
                produit une m&eacute;thode signal-based vs 200 messages automatis&eacute;s qui auraient donn&eacute;
                2-3 r&eacute;ponses, aucune qualifi&eacute;e.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 10 — FAQ */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes sur le setting LinkedIn
              </h2>

              <div className="divide-y divide-white/[0.06]">
                {faqItems.map(({ question, answer }, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">{question}</h3>
                      <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Pour aller plus loin */}
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/ressources/inbound-setting-linkedin', label: 'Inbound setting LinkedIn' },
                  { href: '/methode/setting-linkedin', label: 'M\u00e9thode de setting LinkedIn en 9 \u00e9tapes' },
                  { href: '/ressources/signal-achat-linkedin', label: 'Signaux d\u2019achat LinkedIn' },
                  { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : scripts et exemples' },
                  { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : guide complet' },
                  { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Comment prospecter sur LinkedIn' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Lire le guide</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Pr&ecirc;t &agrave; passer &agrave; l&apos;action&nbsp;?
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                D&eacute;l&eacute;guez votre setting LinkedIn
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                On s&apos;occupe de tout : d&eacute;tection des signaux, r&eacute;daction des messages,
                qualification, et on livre les RDV dans votre agenda.
                Chaque message est relu par un humain. Premiers RDV en 5 jours.
              </p>
              <ButtonGlow href="/tarifs">
                Voir nos tarifs
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/inbound-setting-linkedin', title: "Inbound Setting LinkedIn : transformer l'engagement en RDV", readTime: '15 min' },
              { href: '/methode/setting-linkedin', title: 'Notre m\u00e9thode de setting LinkedIn en 9 \u00e9tapes', readTime: '12 min' },
              { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : scripts et exemples', readTime: '22 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
