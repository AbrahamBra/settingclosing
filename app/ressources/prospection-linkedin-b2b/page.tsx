import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Prospection LinkedIn B2B : guide complet (scripts, exemples, relances) | Setting",
  description: "Le guide complet de la prospection LinkedIn B2B en 2026 : signaux d'achat, scripts de messages, 15 exemples concrets, relances et IA co-r\u00e9dacteur. M\u00e9thode terrain avec taux de r\u00e9ponse vis\u00e9 de 20-35 %.",
  openGraph: {
    title: "Prospection LinkedIn B2B : guide complet (scripts, exemples, relances) | Setting",
    description: "M\u00e9thode signal-based, scripts inbound et outbound, 15 exemples de messages, s\u00e9quence de relances et IA co-r\u00e9dacteur. Le guide terrain pour d\u00e9crocher des RDV qualifi\u00e9s sur LinkedIn.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prospection LinkedIn B2B : guide complet (scripts, exemples, relances) | Setting',
    description: 'M\u00e9thode signal-based, scripts inbound et outbound, 15 exemples de messages, s\u00e9quence de relances et IA co-r\u00e9dacteur. Le guide terrain pour d\u00e9crocher des RDV qualifi\u00e9s sur LinkedIn.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  headline: 'Prospection LinkedIn B2B : le guide complet (m\u00e9thode, scripts et exemples 2026)',
  description:
    "M\u00e9thode signal-based, scripts inbound et outbound, 15 exemples de messages de prospection LinkedIn, s\u00e9quence de relances et IA co-r\u00e9dacteur.",
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-26',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/prospection-linkedin-b2b',
  },
  image: 'https://www.setting.live/ressources/prospection-linkedin-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]', 'h1'],
  },
  articleSection: 'Prospection LinkedIn',
  wordCount: 5200,
  about: [
    { '@type': 'Thing', name: 'Prospection LinkedIn B2B' },
    { '@type': 'Thing', name: 'Messages de prospection LinkedIn' },
    { '@type': 'Thing', name: 'Relance LinkedIn B2B' },
    { '@type': 'Thing', name: 'Scripts de prospection LinkedIn' },
  ],
}

const definedTerms = [
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Prospection LinkedIn B2B signal-based',
    description: "M\u00e9thode de prospection qui consiste \u00e0 d\u00e9tecter des comportements observables sur LinkedIn (likes, commentaires, changements de poste) indiquant qu\u2019un prospect explore un sujet li\u00e9 \u00e0 votre offre, puis \u00e0 utiliser ce contexte pour construire un premier message pertinent.",
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Vocabulaire du setting commercial B2B',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Script de prospection LinkedIn',
    description: "Cadre structur\u00e9 pour r\u00e9diger des messages LinkedIn B2B : positions pr\u00e9d\u00e9finies (accroche signal, fait pr\u00e9cis, pont, question ouverte) avec contenu variable selon le prospect. Se distingue du template copi\u00e9-coll\u00e9 par la personnalisation syst\u00e9matique.",
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Vocabulaire du setting commercial B2B',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: 'Relance LinkedIn B2B',
    description: "Message de suivi envoy\u00e9 apr\u00e8s un premier contact rest\u00e9 sans r\u00e9ponse. Deux relances maximum par s\u00e9quence, espac\u00e9es de 7 jours minimum, avec un angle diff\u00e9rent \u00e0 chaque fois. 70 \u00e0 80 % des r\u00e9ponses arrivent apr\u00e8s une relance.",
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Vocabulaire du setting commercial B2B',
    },
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'S\u00e9quence compl\u00e8te de prospection LinkedIn B2B',
  description: "Les 6 \u00e9tapes pour construire une s\u00e9quence de messages LinkedIn B2B qui g\u00e9n\u00e8re des RDV qualifi\u00e9s, du signal d\u2019achat au closing.",
  totalTime: 'P30D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: "D\u00e9tecter un signal d\u2019achat",
      text: "Surveillez les interactions LinkedIn (likes, commentaires, partages) sur votre contenu et sur les comptes tiers de votre secteur. Utilisez des outils comme Reactin (inbound) ou Spyer (tiers).",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Qualifier le prospect selon votre ICP',
      text: "V\u00e9rifiez 4 crit\u00e8res : correspond \u00e0 l\u2019ICP (poste, secteur, taille), d\u00e9clencheur r\u00e9cent, signes d\u2019int\u00e9r\u00eat actif, connexion commune. 2 crit\u00e8res sur 4 suffisent.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'R\u00e9diger le premier message (5 phrases max)',
      text: "Structure : accroche sur le signal, fait pr\u00e9cis tir\u00e9 du profil, pont vers votre domaine, question ouverte. Pas de pitch. Test du t\u00e9l\u00e9phone avant envoi.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Relancer \u00e0 J+3 si le message a \u00e9t\u00e9 lu',
      text: "Changez l\u2019angle. Apportez une information nouvelle : post r\u00e9cent, actualit\u00e9 du secteur, question diff\u00e9rente. 2 phrases maximum.",
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Relancer \u00e0 J+7 avec un angle diff\u00e9rent',
      text: "Nouveau signal ou question de diagnostic. Ne mentionnez pas le silence. Cette relance doit ressembler \u00e0 un nouveau message, pas \u00e0 un rappel.",
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Fermer la s\u00e9quence \u00e0 J+21',
      text: "Dernier message. Dites-le clairement. Laissez la porte ouverte sans pression. Les prospects non r\u00e9pondants passent en dormant, pas en perdu.",
    },
  ],
}

const faqItems = [
  {
    question: 'Combien de messages de prospection LinkedIn envoyer par semaine ?',
    answer:
      "En calibration (mois 1 et 2) : 20 \u00e0 40 messages par semaine, majoritairement manuels. En scaling : 50 \u00e0 100 messages calibr\u00e9s, avec un taux de r\u00e9ponse cible au-dessus de 15 %. LinkedIn limite les connexions \u00e0 environ 100 par semaine pour les comptes normaux.",
  },
  {
    question: 'Faut-il Sales Navigator pour prospecter sur LinkedIn ?',
    answer:
      "LinkedIn gratuit suffit pour les signaux inbound (r\u00e9actions \u00e0 vos posts). Sales Navigator est indispensable pour le sourcing outbound structur\u00e9 : filtres avanc\u00e9s, alertes de changement de poste, liste de comptes \u00e0 surveiller. Le co\u00fbt (environ 100 euros par mois) est rentabilis\u00e9 d\u00e8s le premier RDV sign\u00e9.",
  },
  {
    question: 'Combien de phrases doit faire un message de prospection LinkedIn ?',
    answer:
      "5 phrases maximum en outbound (premier contact). 3 phrases maximum en r\u00e9ponse inbound. Au-del\u00e0, le taux de r\u00e9ponse chute. Sur mobile, un message de 6 lignes s\u2019affiche d\u00e9j\u00e0 tronqu\u00e9. La concision est une preuve de respect du temps de l\u2019autre.",
  },
  {
    question: "C\u2019est quoi le test du t\u00e9l\u00e9phone ?",
    answer:
      "Avant d\u2019envoyer un message, lisez-le \u00e0 voix haute. Est-ce que ce message pourrait \u00eatre envoy\u00e9 depuis votre t\u00e9l\u00e9phone un mardi matin ? Si non, r\u00e9\u00e9crivez. Ce test filtre 80 % des messages qui ne re\u00e7oivent jamais de r\u00e9ponse.",
  },
  {
    question: 'Quelle est la diff\u00e9rence entre un script et un template LinkedIn ?',
    answer:
      "Un template est un texte fig\u00e9 qu\u2019on copie-colle en changeant le pr\u00e9nom. Un script est un cadre : il d\u00e9finit la structure et l\u2019objectif de chaque phrase, mais les mots changent \u00e0 chaque fois. Les templates se rep\u00e8rent imm\u00e9diatement. Les scripts, non.",
  },
  {
    question: 'Quel taux de r\u00e9ponse esp\u00e9rer avec un bon script LinkedIn ?',
    answer:
      "Entre 15 et 35 % sur des s\u00e9quences inbound (signal d\u00e9tect\u00e9 + message adapt\u00e9). En outbound sans signal : 5 \u00e0 15 %. Un taux inf\u00e9rieur \u00e0 5 % signale que le message ou le ciblage doit \u00eatre revu.",
  },
  {
    question: 'Combien de fois relancer un prospect sur LinkedIn ?',
    answer:
      "Deux relances maximum sur une s\u00e9quence initiale, espac\u00e9es d\u2019au moins 7 jours. Premier message + 2 relances = 3 prises de contact sur 30 jours. Au-del\u00e0, le risque de nuire \u00e0 l\u2019image d\u00e9passe le gain potentiel.",
  },
  {
    question: 'Quel d\u00e9lai entre le premier message et la premi\u00e8re relance LinkedIn ?',
    answer:
      "7 jours est la fen\u00eatre standard. Si le message a \u00e9t\u00e9 lu sans r\u00e9ponse, 3 jours suffisent. En dessous de 48 heures, c\u2019est trop court. La relance \u00e0 J+3 ou J+7 est per\u00e7ue comme normale. \u00c0 J+1, elle sonne comme de la pression.",
  },
  {
    question: 'La prospection LinkedIn fonctionne-t-elle pour tous les secteurs B2B ?',
    answer:
      "LinkedIn est efficace l\u00e0 o\u00f9 les d\u00e9cideurs sont actifs : tech, SaaS, conseil, formation, immobilier commercial, finance d\u2019entreprise, RH. Dans les secteurs o\u00f9 les d\u00e9cideurs ne sont pas sur LinkedIn (artisanat, petite industrie locale), l\u2019approche reste limit\u00e9e.",
  },
  {
    question: 'Quelle est la diff\u00e9rence entre prospection LinkedIn et cold email ?',
    answer:
      "LinkedIn permet d\u2019acc\u00e9der au contexte du prospect (posts, r\u00e9actions, parcours) avant de contacter, ce qui rend le premier message plus pertinent. Le cold email offre plus de volume mais moins de contexte. Les meilleurs syst\u00e8mes combinent les deux.",
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
      name: 'Prospection LinkedIn B2B',
      item: 'https://www.setting.live/ressources/prospection-linkedin-b2b',
    },
  ],
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'froid', label: 'Pourquoi la prospection \u00e0 froid ne fonctionne plus' },
  { id: 'signaux', label: 'Les deux sources de prospects chauds' },
  { id: 'sales-navigator', label: 'Sales Navigator : cibler efficacement' },
  { id: 'anatomie', label: "Anatomie d\u2019un message de prospection LinkedIn" },
  { id: 'regles', label: "5 r\u00e8gles d\u2019un message qui obtient des r\u00e9ponses" },
  { id: 'exemples-bons-mauvais', label: 'Mauvais message vs bon message : 4 exemples' },
  { id: 'scripts', label: 'Scripts de prospection LinkedIn : 6 mod\u00e8les' },
  { id: '15-exemples', label: '15 exemples de messages de prospection LinkedIn' },
  { id: 'relances', label: 'Relance LinkedIn B2B : quand et comment' },
  { id: 'modes', label: 'Mode One Shot vs Mode Conversation' },
  { id: 'ia', label: "L\u2019IA comme co-r\u00e9dacteur" },
  { id: 'systeme', label: 'Construire un syst\u00e8me, pas une tactique' },
  { id: 'faq', label: 'Questions fr\u00e9quentes' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProspectionLinkedInB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema, howToSchema, ...definedTerms]),
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
              <li className="text-text-primary">Prospection LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/ressources/setting-commercial-b2b" className="hover:underline transition-colors">Setting</a> &middot; Guide pilier
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Prospection LinkedIn B2B : le guide complet (m&eacute;thode, scripts et exemples 2026)
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Les d&eacute;cideurs B2B re&ccedil;oivent 15 messages de prospection par semaine.
              La plupart finissent ignor&eacute;s. Ce guide r&eacute;unit tout ce qu&apos;il faut pour sortir du lot :
              signaux d&apos;achat, scripts de messages, 15 exemples concrets, s&eacute;quence de relances
              et co-r&eacute;daction IA. Objectif : un syst&egrave;me qui livre des RDV qualifi&eacute;s chaque semaine.
            </p>
            <AuthorBlock date="2026-03-18" readTime="22 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-26" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">La <strong>prospection LinkedIn B2B</strong> en 2026 repose sur les signaux d&apos;achat, pas sur le volume. Ce guide couvre la m&eacute;thode signal-based en 6 &eacute;tapes : d&eacute;tection des signaux, ciblage ICP via Sales Navigator, r&eacute;daction des messages (5 phrases max), scripts inbound et outbound, s&eacute;quence de relances (J+3, J+7, J+21) et co-r&eacute;daction IA. Taux de r&eacute;ponse vis&eacute; : 20 &agrave; 35&nbsp;%. Inclut 15 exemples de <strong>messages de prospection LinkedIn</strong> pr&ecirc;ts &agrave; adapter.</p>
          </TldrBox>

          {/* D\u00e9finition */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10" data-speakable="true">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              La <strong>prospection LinkedIn B2B signal-based</strong> consiste &agrave; d&eacute;tecter
              des comportements observables sur LinkedIn (likes, commentaires, changements de poste)
              qui indiquent qu&apos;un prospect explore un sujet li&eacute; &agrave; votre offre,
              puis &agrave; utiliser ce contexte pour construire un premier message pertinent.
              Pas de froid pur. Un d&eacute;clencheur, une approche calibr&eacute;e, et une conversation qui d&eacute;marre sur de bonnes bases.
            </p>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-3 gap-4 mb-14" data-speakable="true">
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">&lt;&nbsp;3&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">Taux de r&eacute;ponse moyen sans signal</p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">20-35&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">Avec signal + message calibr&eacute;</p>
            </div>
            <div className="bg-bg-secondary rounded-xl px-5 py-5 border border-white/[0.06] text-center">
              <p className="font-serif text-3xl font-semibold text-accent mb-1">70-80&nbsp;%</p>
              <p className="font-sans text-xs text-text-secondary leading-snug">Des r&eacute;ponses arrivent apr&egrave;s relance</p>
            </div>
            <p className="col-span-3 font-sans text-xs text-text-muted text-center">
              Sources : donn&eacute;es terrain Setting (1 200+ messages analys&eacute;s, 2025-2026), donn&eacute;es agr&eacute;g&eacute;es Sales Navigator 2024
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Sommaire</p>
            <ol className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item.id} className="flex gap-3 font-sans text-sm">
                  <span className="text-accent shrink-0 font-semibold">{i + 1}.</span>
                  <a href={`#${item.id}`} className="text-text-secondary hover:text-text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ═══ SECTION 1 ═══ */}
          <section id="froid" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi la prospection LinkedIn &agrave; froid ne fonctionne plus
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Il y a cinq ans, envoyer 50 messages LinkedIn par semaine &eacute;tait viable. Les bo&icirc;tes de r&eacute;ception &eacute;taient peu encombr&eacute;es. Un message avec le pr&eacute;nom et une phrase sur le poste obtenait 8 &agrave; 10&nbsp;% de r&eacute;ponse.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce n&apos;est plus le cas. Les d&eacute;cideurs B2B re&ccedil;oivent en moyenne 15 messages de prospection par semaine. Ils ont d&eacute;velopp&eacute; un r&eacute;flexe de filtre : d&egrave;s les deux premi&egrave;res lignes, ils savent si le message a &eacute;t&eacute; envoy&eacute; &agrave; mille personnes ou &eacute;crit pour eux.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le plafond de la prospection froide sans signal est bas. Peaufinez chaque phrase. Testez dix variables. Vous resterez autour de 2 &agrave; 3&nbsp;%. Le probl&egrave;me n&apos;est pas vos mots.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Ce qui diff&eacute;rencie un message qui obtient une r&eacute;ponse, c&apos;est le contexte. Le prospect a post&eacute; sur le sujet il y a trois jours. Il a comment&eacute; le post d&apos;un concurrent. Il vient de changer de poste. Ce sont des <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signaux d&apos;achat LinkedIn</a> qui cr&eacute;ent une fen&ecirc;tre d&apos;attention. Un message qui entre par cette fen&ecirc;tre n&apos;est plus une interruption. C&apos;est une continuation.
            </p>
          </section>

          {/* ═══ SECTION 2 ═══ */}
          <section id="signaux" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Les deux sources de prospects chauds sur LinkedIn</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Un prospect chaud n&apos;est pas forc&eacute;ment quelqu&apos;un qui vous conna&icirc;t. C&apos;est quelqu&apos;un qui explore activement un sujet li&eacute; &agrave; votre offre. Sur LinkedIn, ces signaux viennent de deux endroits.
            </p>
            <div className="space-y-6">
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Signal inbound</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">Votre contenu</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect a r&eacute;agi &agrave; un de vos posts. Il a lik&eacute;, comment&eacute; ou partag&eacute;. Il vous conna&icirc;t au moins de vue. La relation de confiance est amorc&eacute;e. Ce type de signal est le plus facile &agrave; exploiter.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Outil :</strong> Des outils comme Reactin surveillent chaque interaction sur vos posts et les classent par type de signal.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <p className="font-sans font-semibold text-text-primary">Signal tiers</p>
                  <span className="font-sans text-xs text-accent font-semibold uppercase tracking-widest">Comptes surveill&eacute;s</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">
                    Le prospect ne vous conna&icirc;t pas encore. Mais il a interagi avec le contenu d&apos;un concurrent, d&apos;un expert compl&eacute;mentaire, d&apos;un cr&eacute;ateur sur votre sujet. Il a montr&eacute;, ailleurs, qu&apos;il cherche une r&eacute;ponse &agrave; un probl&egrave;me que vous r&eacute;solvez.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary font-semibold">Outil :</strong> Des outils comme Spyer automatisent la surveillance des comptes tiers. Sans outil, ces signaux disparaissent du fil en quelques heures.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Les deux flux se compl&egrave;tent. Aucun ne suffit seul.</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                L&apos;inbound d&eacute;pend de votre volume de publication. Le signal tiers fonctionne m&ecirc;me sans contenu propre, mais n&eacute;cessite une curation pr&eacute;cise des comptes &agrave; surveiller. Un syst&egrave;me mature utilise les deux.
              </p>
            </div>
          </section>

          <CtaArticle />

          {/* ═══ SECTION 3 ═══ */}
          <section id="sales-navigator" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Sales Navigator : cibler efficacement vos prospects</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Sales Navigator est un outil de ciblage, pas de <strong>prospection LinkedIn</strong> &agrave; froid. La nuance compte.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">Ce que Sales Navigator fait</p>
                <ul className="space-y-2">
                  {['Filtres avanc\u00e9s poste / secteur / taille / trigger', 'Alertes changement de poste sur vos cibles', 'Liste de comptes \u00e0 surveiller', 'Profils hors r\u00e9seau accessibles', 'Historique des contacts et notes'].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-5">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">Ce qu&apos;il ne fait pas seul</p>
                <ul className="space-y-2">
                  {["D\u00e9tecter les signaux d\u2019int\u00e9r\u00eat actif", 'Surveiller les comptes tiers', "R\u00e9diger des messages adapt\u00e9s au contexte", 'Qualifier la chaleur du prospect', 'G\u00e9rer les relances et le nurturing'].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-text-secondary/40 shrink-0 mt-0.5">&ndash;</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              La combinaison qui fonctionne : Sales Navigator pour construire une liste de profils qualifi&eacute;s selon l&apos;ICP, puis les outils de signaux pour identifier lesquels sont actifs maintenant. Vous n&apos;envoyez plus des messages &agrave; une liste. Vous contactez des profils pr&eacute;cis avec un contexte pr&eacute;cis.
            </p>
          </section>

          {/* ═══ SECTION 4 ═══ */}
          <section id="anatomie" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Anatomie d&apos;un <strong>message de prospection LinkedIn</strong></h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Voici la structure utilis&eacute;e syst&eacute;matiquement par nos setters. Cinq positions, chacune avec un r&ocirc;le pr&eacute;cis. Vous pouvez &eacute;crire des dizaines de messages diff&eacute;rents avec ce cadre. Aucun ne se ressemblera, parce que le contenu change &agrave; chaque fois.
            </p>
            <div className="space-y-5 mb-8">
              {[
                { num: '01', title: "L\u2019accroche sur le signal", body: "Pas \u00ab\u00a0j\u2019ai vu votre profil\u00a0\u00bb. Une observation pr\u00e9cise sur quelque chose qui vient de se passer : un post, un recrutement, un changement de poste." },
                { num: '02', title: 'Le fait pr\u00e9cis sur le prospect', body: "Un \u00e9l\u00e9ment tir\u00e9 directement de leur profil ou activit\u00e9 r\u00e9cente. Pas un compliment g\u00e9n\u00e9rique. Une observation concr\u00e8te." },
                { num: '03', title: 'Le pont vers ce que vous faites', body: "Vous montrez que vous comprenez leur contexte. Pas de pitch. Juste une connexion entre leur situation et votre domaine. Le pitch cr\u00e9e de la r\u00e9sistance. La connexion, de la curiosit\u00e9." },
                { num: '04', title: 'La question ouverte', body: "Une question courte qui invite \u00e0 la conversation. \u00ab\u00a0Est-ce que c\u2019est un sujet actif pour vous ?\u00a0\u00bb fonctionne mieux que \u00ab\u00a030 minutes cette semaine ?\u00a0\u00bb." },
                { num: '05', title: 'La preuve courte (optionnelle)', body: "Un r\u00e9sultat concret, un client similaire, une stat. Uniquement si \u00e7a renforce l\u2019argument. Si vous h\u00e9sitez, ne l\u2019incluez pas." },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold font-sans">{item.num}</div>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Le test du t&eacute;l&eacute;phone</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">Avant d&apos;envoyer, lisez le message sur votre t&eacute;l&eacute;phone. Si vous devez scroller pour voir la fin, il est trop long. 70&nbsp;% des messages LinkedIn sont lus sur mobile.</p>
            </div>
          </section>

          {/* ═══ SECTION 5 ═══ */}
          <section id="regles" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">5 r&egrave;gles d&apos;un <strong>message prospection LinkedIn</strong> qui convertit</h2>
            <div className="space-y-3 mb-6">
              {[
                { rule: '5 phrases maximum', detail: "Au-del\u00e0, le taux de r\u00e9ponse chute. Un message court dit \u00ab\u00a0je respecte votre temps\u00a0\u00bb." },
                { rule: 'La deuxi\u00e8me phrase est un fait pr\u00e9cis', detail: "Post r\u00e9cent, question pos\u00e9e, changement de poste. Jamais une g\u00e9n\u00e9ralit\u00e9." },
                { rule: 'Pas de pitch au premier DM', detail: "Un seul objectif : ouvrir la conversation. Le pitch vient apr\u00e8s la qualification." },
                { rule: 'Test du t\u00e9l\u00e9phone avant envoi', detail: "Ce message pourrait-il \u00eatre envoy\u00e9 depuis votre t\u00e9l\u00e9phone un mardi matin ? Si non, r\u00e9\u00e9crivez." },
                { rule: 'Pas de formule de politesse creuse', detail: "\u00ab\u00a0J\u2019esp\u00e8re que vous allez bien\u00a0\u00bb, \u00ab\u00a0je me permets\u00a0\u00bb : marqueurs d\u2019email automatique." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold">&rarr;</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{item.rule}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ SECTION 6 ═══ */}
          <section id="exemples-bons-mauvais" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Mauvais message vs bon message : 4 exemples concrets</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">M&ecirc;me profil, m&ecirc;me signal. Ce qui change : l&apos;application des r&egrave;gles.</p>

            {/* Exemple 1 */}
            <div className="mb-10">
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-5 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Contexte :</strong> DG de PME tech, 30 personnes. Post r&eacute;cent sur les difficult&eacute;s &agrave; remplir l&apos;agenda de ses commerciaux.
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">&Agrave; ne pas envoyer</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Thomas, j&apos;esp&egrave;re que vous allez bien. Je travaille avec des dirigeants de PME pour les aider &agrave; d&eacute;velopper leur pipeline commercial. Notre programme combine setting, closing et IA pour g&eacute;n&eacute;rer des RDV qualifi&eacute;s. On a aid&eacute; plus de 150 entreprises &agrave; doubler leurs RDV en 90 jours. Seriez-vous disponible pour un appel de 20 minutes cette semaine ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">Version calibr&eacute;e</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Thomas, j&apos;ai vu votre post sur les difficult&eacute;s &agrave; remplir l&apos;agenda de vos commerciaux. Ce que vous d&eacute;crivez ressemble &agrave; ce qu&apos;on voit chez nos clients avant de structurer le premier flux. Vous avez 20 min jeudi pour qu&apos;on regarde &ccedil;a ensemble ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="mb-10">
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-5 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Contexte :</strong> Directrice d&apos;agence digitale, 12 personnes. Post sur la visibilit&eacute; IA. Signal moyen/fort.
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">&Agrave; ne pas envoyer</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Sophie, j&apos;esp&egrave;re que vous allez bien. Je travaille avec des agences digitales pour les aider &agrave; d&eacute;velopper leurs offres autour de l&apos;IA. Notre solution permet de mesurer la visibilit&eacute; de vos clients sur ChatGPT, Claude et Perplexity, avec un setup en 5 minutes. Est-ce que vous auriez 20 minutes cette semaine ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">Version calibr&eacute;e</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Sophie, j&apos;ai vu votre post sur l&apos;offre visibilit&eacute; IA en construction. Ce qui manque souvent &agrave; ce stade : une m&eacute;trique pour prouver que &ccedil;a marche c&ocirc;t&eacute; client. Vous avez d&eacute;j&agrave; trouv&eacute; comment mesurer &ccedil;a concr&egrave;tement ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 3 */}
            <div className="mb-10">
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-5 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Contexte :</strong> Consultant ind&eacute;pendant B2B. Like sur une question juridique. Connexion commune avec un client existant.
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">&Agrave; ne pas envoyer</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Nicolas, je me permets de vous contacter car je travaille avec des consultants ind&eacute;pendants B2B. Mon programme aide &agrave; structurer un pipeline efficace. Rendement garanti : 5 RDV qualifi&eacute;s minimum par mois. Vous seriez disponible pour un appel ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">Version calibr&eacute;e</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Nicolas, j&apos;ai vu votre question sur la structuration juridique &agrave; l&apos;international. On a un contact en commun : Thomas travaille avec moi depuis quelques mois sur ce sujet. Ce que je fais est diff&eacute;rent du coaching classique. Vous avez 20 min cette semaine pour que je vous explique la structure ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 4 */}
            <div>
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-5 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Contexte :</strong> Directeur commercial, vient de prendre son poste chez une scale-up SaaS. Changement de poste d&eacute;tect&eacute; via Sales Navigator.
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">&Agrave; ne pas envoyer</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Julien, f&eacute;licitations pour votre nouveau poste. Je travaille avec des directeurs commerciaux pour optimiser leur pipeline. Notre approche combine prospection LinkedIn et IA. On pourrait en discuter cette semaine ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">Version calibr&eacute;e</p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &laquo;&nbsp;Bonjour Julien, j&apos;ai vu que vous venez de prendre la direction commerciale chez [Entreprise]. Ce type de prise de poste s&apos;accompagne souvent d&apos;un chantier pipeline dans les 90 premiers jours. On accompagne des directeurs commerciaux sur ce sujet. Quel est votre chantier num&eacute;ro un c&ocirc;t&eacute; prospection en ce moment ?&nbsp;&raquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* ═══ SECTION 7 ═══ */}
          <section id="scripts" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5"><strong>Scripts de prospection LinkedIn</strong> : 6 mod&egrave;les concrets</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un <strong>script prospection LinkedIn</strong> n&apos;est pas un template &agrave; copier-coller. C&apos;est un cadre : structure fixe, contenu variable. Les templates se rep&egrave;rent. Les scripts, non. Pour comprendre la diff&eacute;rence entre le r&ocirc;le du <a href="/ressources/setting-commercial-b2b#setter-definition" className="text-accent hover:underline transition-colors">setter</a> et du <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">closer</a>, voir nos guides d&eacute;di&eacute;s.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">Voici 6 scripts pour les situations les plus courantes. Trois inbound, trois outbound.</p>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Scripts inbound</p>

            <div className="mb-8">
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 1 : Like sur un post</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-red-500/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">&Agrave; &eacute;viter</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], j&apos;ai vu que vous avez lik&eacute; mon post. Je me permets de vous contacter car je pense que mon approche pourrait vous int&eacute;resser. Seriez-vous disponible pour un &eacute;change de 30 minutes ?&nbsp;&raquo;</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], vous avez lik&eacute; mon post sur les relances LinkedIn. J&apos;ai vu que vous venez de passer de salari&eacute; &agrave; consultant ind&eacute;pendant. C&apos;est souvent &agrave; ce moment que la prospection devient le probl&egrave;me num&eacute;ro un. Est-ce que c&apos;est le cas pour vous ?&nbsp;&raquo;</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 2 : Commentaire sur un post pertinent</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-red-500/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">&Agrave; &eacute;viter</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], j&apos;ai vu votre commentaire et j&apos;ai trouv&eacute; votre point de vue tr&egrave;s int&eacute;ressant. Je travaille dans un domaine qui pourrait vous apporter de la valeur. Connectons-nous ?&nbsp;&raquo;</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], votre commentaire sur le post de [Auteur] m&apos;a arr&ecirc;t&eacute;. Vous parliez de la difficult&eacute; &agrave; remplir l&apos;agenda sans passer 2h par jour sur LinkedIn. On r&eacute;sout ce probl&egrave;me avec les consultants qu&apos;on accompagne. Le contexte est similaire de votre c&ocirc;t&eacute; ?&nbsp;&raquo;</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 3 : Partage de votre contenu</p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], vous avez partag&eacute; mon post sur les s&eacute;quences de prospection. Je regarde vos posts depuis quelques semaines. Vous faites du [secteur] pour des &eacute;quipes entre 5 et 20 personnes si je ne me trompe pas. Qu&apos;est-ce qui vous a fait partager ce post ?&nbsp;&raquo;</p>
              </div>
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Scripts outbound</p>

            <div className="mb-8">
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 4 : Changement de poste r&eacute;cent</p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], j&apos;ai vu que vous venez de prendre la direction commerciale chez [Entreprise]. Ce type de prise de poste s&apos;accompagne souvent d&apos;un chantier pipeline dans les 90 premiers jours. On accompagne des directeurs commerciaux sur ce sujet. Quel est votre chantier num&eacute;ro un c&ocirc;t&eacute; prospection ?&nbsp;&raquo;</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 5 : Recrutement dans l&apos;&eacute;quipe commerciale</p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], je vois que [Entreprise] cherche un SDR. &Ccedil;a me dit que vous &ecirc;tes en train de construire ou scaler la fonction prospection. On aide des &eacute;quipes dans cette phase, souvent pour &eacute;viter les 6 mois de rampe. Vous en &ecirc;tes o&ugrave; sur le recrutement ?&nbsp;&raquo;</p>
              </div>
            </div>

            <div>
              <p className="font-sans font-semibold text-text-primary mb-3 text-sm">Script 6 : ICP pur sans signal fort</p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">&laquo;&nbsp;Bonjour [Pr&eacute;nom], votre profil m&apos;a arr&ecirc;t&eacute;. Fondateur en solo depuis 3 ans dans le [secteur], avec ce que &ccedil;a implique comme charge commerciale &agrave; c&ocirc;t&eacute; du delivery. C&apos;est le moment o&ugrave; la prospection devient soit une contrainte permanente, soit quelque chose qu&apos;on d&eacute;l&egrave;gue intelligemment. Vous &ecirc;tes plut&ocirc;t o&ugrave; sur ce sujet ?&nbsp;&raquo;</p>
              </div>
            </div>
          </section>

          {/* ═══ SECTION 8 ═══ */}
          <section id="15-exemples" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">15 exemples de <strong>messages de prospection LinkedIn</strong></h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">15 messages pr&ecirc;ts &agrave; adapter. Trois cat&eacute;gories : connexion, accroche apr&egrave;s connexion, relance. Chaque message tient en 5 lignes ou moins.</p>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">5 messages de connexion</p>
            <div className="space-y-3 mb-10">
              {[
                { signal: 'R\u00e9action \u00e0 un post', msg: "Bonjour [Pr\u00e9nom], j\u2019ai vu votre r\u00e9action sur le post de [Auteur] \u00e0 propos de [sujet]. Curieux de savoir si c\u2019est un chantier actif de votre c\u00f4t\u00e9." },
                { signal: 'Commentaire chez un concurrent', msg: "Bonjour [Pr\u00e9nom], votre commentaire chez [Concurrent] sur [probl\u00e8me] m\u2019a arr\u00eat\u00e9. On traite ce sujet avec nos clients [secteur]. \u00c7a vous parle ?" },
                { signal: 'Changement de poste', msg: "Bonjour [Pr\u00e9nom], f\u00e9licitations pour votre arriv\u00e9e chez [Entreprise]. Les 90 premiers jours sur un poste commercial, c\u2019est souvent le moment o\u00f9 tout se structure. C\u2019est le cas ?" },
                { signal: 'Publication probl\u00e9matique', msg: "Bonjour [Pr\u00e9nom], j\u2019ai lu votre post sur [probl\u00e8me]. Ce que vous d\u00e9crivez, on le voit chaque semaine. Je vous envoie un message apr\u00e8s connexion si \u00e7a vous dit." },
                { signal: 'Connexion commune', msg: "Bonjour [Pr\u00e9nom], on a [Contact] en commun. Je travaille avec lui sur [sujet] depuis quelques mois. Votre profil me dit que le contexte est proche." },
              ].map((ex, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-4">
                  <p className="font-sans text-xs font-semibold text-accent mb-2">{ex.signal}</p>
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">&laquo;&nbsp;{ex.msg}&nbsp;&raquo;</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">5 messages d&apos;accroche apr&egrave;s connexion</p>
            <div className="space-y-3 mb-10">
              {[
                { signal: 'Rebond sur signal', msg: "Merci pour la connexion [Pr\u00e9nom]. J\u2019ai vu votre post sur [sujet]. Ce que vous d\u00e9crivez, on le r\u00e9sout pour des [segment]. Est-ce un sujet actif ?" },
                { signal: 'Apport de valeur', msg: "[Pr\u00e9nom], en regardant votre profil j\u2019ai pens\u00e9 \u00e0 un article qu\u2019on a publi\u00e9 sur [sujet]. Je vous l\u2019envoie si \u00e7a vous int\u00e9resse." },
                { signal: 'Question contextuelle', msg: "[Pr\u00e9nom], vous \u00eates dans le [secteur] depuis [dur\u00e9e]. Curieux : comment vous g\u00e9rez la prospection outbound en ce moment ? Interne, externalis\u00e9, un mix ?" },
                { signal: 'Cas similaire', msg: "[Pr\u00e9nom], on a accompagn\u00e9 [type de profil similaire] le mois dernier sur [probl\u00e8me]. Le contexte ressemble au v\u00f4tre. \u00c7a vous dit que je vous montre ce qu\u2019on a fait ?" },
                { signal: 'Observation activit\u00e9', msg: "[Pr\u00e9nom], j\u2019ai vu que vous recrutez un commercial. En g\u00e9n\u00e9ral, c\u2019est le signe que le pipe est l\u00e0 mais la conversion pas encore. C\u2019est le cas ?" },
              ].map((ex, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-4">
                  <p className="font-sans text-xs font-semibold text-accent mb-2">{ex.signal}</p>
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">&laquo;&nbsp;{ex.msg}&nbsp;&raquo;</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">5 messages de <strong>relance LinkedIn</strong></p>
            <div className="space-y-3">
              {[
                { timing: 'J+5, nouvel angle', msg: "[Pr\u00e9nom], question diff\u00e9rente : le probl\u00e8me pour vous c\u2019est plut\u00f4t le volume de contacts ou la conversion une fois qu\u2019ils sont dans le pipe ?" },
                { timing: 'J+12, apport de valeur', msg: "[Pr\u00e9nom], j\u2019ai vu votre post d\u2019hier sur [sujet]. \u00c7a rejoint la question que je vous posais. Toujours int\u00e9ress\u00e9 d\u2019en discuter si c\u2019est le bon moment." },
                { timing: 'Dernier message', msg: "[Pr\u00e9nom], c\u2019est la derni\u00e8re fois que je vous contacte sur ce sujet. Si \u00e7a n\u2019est pas le bon moment, pas de probl\u00e8me. Si \u00e7a change, je suis joignable ici." },
                { timing: 'Post-visite profil', msg: "[Pr\u00e9nom], j\u2019ai vu que vous avez visit\u00e9 mon profil. S\u2019il y a un sujet qui vous a interpell\u00e9, je suis dispo pour en discuter." },
                { timing: 'Post-\u00e9v\u00e9nement', msg: "[Pr\u00e9nom], vous \u00e9tiez \u00e0 [conf\u00e9rence/webinaire]. Le sujet de [th\u00e8me] revient souvent chez nos clients en ce moment. \u00c7a vous parle ?" },
              ].map((ex, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-5 py-4">
                  <p className="font-sans text-xs font-semibold text-accent mb-2">{ex.timing}</p>
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">&laquo;&nbsp;{ex.msg}&nbsp;&raquo;</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ SECTION 9 ═══ */}
          <section id="relances" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5"><strong>Relance LinkedIn</strong> B2B : quand et comment relancer</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              80&nbsp;% des commerciaux abandonnent apr&egrave;s le premier message. Pourtant, 70 &agrave; 80&nbsp;% des r&eacute;ponses arrivent apr&egrave;s une relance. La <strong>relance LinkedIn</strong> fait partie du processus normal.
            </p>

            <h3 className="font-sans font-semibold text-text-primary mb-3 mt-8">Ce que &laquo;&nbsp;pas de r&eacute;ponse&nbsp;&raquo; signifie vraiment</h3>
            <div className="space-y-4 mb-8">
              {[
                { title: "Cas 1 : le message n\u2019a pas \u00e9t\u00e9 vu", body: "LinkedIn ne notifie pas toujours. Le message peut attendre 5 \u00e0 10 jours. Pas de rejet. Pas de contact. Relancer \u00e0 J+7 est normal." },
                { title: "Cas 2 : vu, accroche pas convaincante", body: "Il a lu, n\u2019a pas r\u00e9pondu. R\u00e9p\u00e9ter le m\u00eame message ne changera rien. Il faut changer l\u2019angle." },
                { title: "Cas 3 : vu, int\u00e9ress\u00e9, mauvais timing", body: "Le cas le plus fr\u00e9quent. Le sujet l\u2019int\u00e9resse, mais il a autre chose en t\u00eate. Une relance \u00e0 J+21 peut rouvrir la conversation." },
              ].map((c, i) => (
                <div key={i} className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-text-primary mb-2">{c.title}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary mb-3">Les fen&ecirc;tres de relance</h3>
            <div className="space-y-0 mb-8">
              {[
                { label: 'J+3', sub: 'Si le message a \u00e9t\u00e9 lu. 2 phrases max. Angle diff\u00e9rent.', color: 'bg-accent/10 border-accent/40 text-accent' },
                { label: 'J+7', sub: 'Fen\u00eatre standard. Nouveau signal ou question de diagnostic.', color: 'bg-bg-secondary border-white/[0.06] text-text-secondary' },
                { label: 'J+21', sub: 'Fin de s\u00e9quence. Dites-le clairement. Porte laiss\u00e9e ouverte.', color: 'bg-bg-secondary border-white/[0.06] text-text-secondary' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold font-sans ${step.color}`}>{i + 1}</div>
                    {i < 2 && <div className="w-px flex-1 my-1.5 bg-white/[0.06]" style={{ minHeight: '20px' }} />}
                  </div>
                  <div className="pb-5">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{step.label}</p>
                    <p className="font-sans text-text-secondary text-xs">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary mb-3">3 approches de relance</h3>
            <div className="space-y-4 mb-8">
              {[
                { label: '01 \u00b7 Angle diff\u00e9rent (J+7)', msg: "Bonjour Camille, je vous ai \u00e9crit la semaine derni\u00e8re sur votre processus de qualification. Question diff\u00e9rente : le probl\u00e8me pour vous, c\u2019est plut\u00f4t le volume de contacts ou la conversion une fois qu\u2019ils sont dans le pipe ?" },
                { label: '02 \u00b7 Nouveau signal (J+21)', msg: "Bonjour Romain, j\u2019ai vu votre post d\u2019hier sur le recrutement commercial. C\u2019est exactement ce sur quoi je vous avais \u00e9crit il y a trois semaines. \u00c7a vaut le coup qu\u2019on se parle ?" },
                { label: '03 \u00b7 Fin de s\u00e9quence (J+28)', msg: "Bonjour \u00c9lise, c\u2019est la derni\u00e8re fois que je vous contacte sur ce sujet. Si \u00e7a n\u2019est pas le bon moment, pas de probl\u00e8me. Si \u00e7a redevient d\u2019actualit\u00e9, je suis joignable ici." },
              ].map((a, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">{a.label}</p>
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">&laquo;&nbsp;{a.msg}&nbsp;&raquo;</p>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Dormant, pas perdu.</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Un prospect qui ne r&eacute;pond pas apr&egrave;s 3 prises de contact n&apos;est pas perdu. Il n&apos;est pas pr&ecirc;t maintenant. Mettez-le en dormant. Revenez dans 60 &agrave; 90 jours si vous observez un nouveau signal. Beaucoup de deals se concluent au deuxi&egrave;me cycle.
              </p>
            </div>
          </section>

          {/* ═══ SECTION 10 ═══ */}
          <section id="modes" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Mode One Shot vs Mode Conversation</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">Un signal fort et un signal faible n&apos;appellent pas la m&ecirc;me approche.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 px-5 py-5">
                <p className="font-sans text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Mode One Shot</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3"><strong className="text-text-primary font-semibold">Signal fort :</strong> commentaire direct, question li&eacute;e &agrave; votre offre, interaction r&eacute;p&eacute;t&eacute;e.</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed"><strong className="text-text-primary font-semibold">Objectif :</strong> proposer un call dans le premier message. La fen&ecirc;tre est ouverte.</p>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-5 py-5">
                <p className="font-sans text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">Mode Conversation</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-3"><strong className="text-text-primary font-semibold">Signal faible :</strong> like passif, vue de profil, interaction hors-sujet.</p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed"><strong className="text-text-primary font-semibold">Objectif :</strong> ouvrir l&apos;&eacute;change, qualifier sur 2 &agrave; 3 messages. Pas de call avant une r&eacute;ponse qualitative.</p>
              </div>
            </div>
          </section>

          <CtaArticle />

          {/* ═══ SECTION 11 ═══ */}
          <section id="ia" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">L&apos;IA comme co-r&eacute;dacteur dans la prospection LinkedIn</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">L&apos;IA sans contexte produit des messages g&eacute;n&eacute;riques. Exactement le type que les d&eacute;cideurs filtrent en deux secondes.</p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">Avec le bon contexte, l&apos;IA produit des messages personnalis&eacute;s. Le flux : collez le profil LinkedIn du prospect dans le mod&egrave;le (titre, bio, posts r&eacute;cents, connexions communes). Ajoutez vos r&egrave;gles et deux exemples de bons messages. Le mod&egrave;le propose un draft. Relisez. Corrigez si besoin. Envoyez.</p>
            <p className="font-sans text-text-secondary leading-relaxed">La r&egrave;gle finale : lisez le message &agrave; voix haute. Si vous entendez le LLM, r&eacute;&eacute;crivez. Si &ccedil;a sonne comme un humain qui conna&icirc;t le prospect, envoyez. Voir aussi notre analyse compl&egrave;te <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline transition-colors">IA, m&eacute;thode et humain</a> et le comparatif <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline transition-colors">setting humain vs automatisation</a>.</p>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]" data-speakable="true">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Les &eacute;quipes qui utilisent l&apos;IA comme co-r&eacute;dacteur (avec validation humaine) ont des taux de r&eacute;ponse 3x sup&eacute;rieurs &agrave; ceux qui g&eacute;n&egrave;rent sans relire.</p>
              <p className="font-sans text-text-secondary text-sm">Source : donn&eacute;es terrain Setting, 1 200+ messages, 2025-2026</p>
            </div>
          </section>

          {/* ═══ SECTION 12 ═══ */}
          <section id="systeme" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">Construire un syst&egrave;me, pas une tactique</h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">Envoyer des messages, ce n&apos;est pas op&eacute;rer un syst&egrave;me de <strong>prospection LinkedIn</strong>. Au bout de deux mois, la diff&eacute;rence se voit dans les chiffres. Un vrai syst&egrave;me repose sur quatre composantes :</p>
            <div className="space-y-3 mb-6">
              {['Une source de signaux (inbound + tiers)', 'Un CRM pour tracker chaque prospect et son statut', 'Un journal hebdomadaire des taux de r\u00e9ponse par message et segment', "Un flux de nurturing pour les leads pas encore en phase d\u2019achat"].map((item, i) => (
                <div key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold">{i + 1}.</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">En calibration (mois 1 et 2) : 20 &agrave; 40 messages par semaine. Vous mesurez les taux de r&eacute;ponse par type de signal, par structure de message, par segment. Vous affinez les crit&egrave;res ICP.</p>
            <p className="font-sans text-text-secondary leading-relaxed">En scaling (mois 3+) : 50 &agrave; 100 messages par semaine, taux de r&eacute;ponse stable au-dessus de 15&nbsp;%, pipeline pr&eacute;visible. La plupart abandonnent avant d&apos;y arriver.</p>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Un syst&egrave;me se calibre en 8 semaines. Il tourne seul ensuite.</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">Les premi&egrave;res semaines sont les plus chronophages. Pass&eacute; la calibration, le syst&egrave;me peut &ecirc;tre d&eacute;l&eacute;gu&eacute; ou assist&eacute; par IA.</p>
            </div>
          </section>

          {/* ═══ FAQ ═══ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fr&eacute;quentes</h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">{item.question}</p>
                  <p className="font-sans text-text-secondary leading-relaxed text-sm faq-answer">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Pour aller plus loin</p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : d\u00e9finition, m\u00e9thode et programme complet' },
                { href: '/ressources/signal-achat-linkedin', label: "C\u2019est quoi un signal d\u2019achat LinkedIn ?" },
                { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Comment prospecter sur LinkedIn en 2026' },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, m\u00e9thode et humain : les 3 couches d\u2019un syst\u00e8me de setting LinkedIn" },
                { href: '/ressources/agence-prospection-linkedin', label: 'Agence de prospection LinkedIn : comment choisir' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06] mt-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Setting</p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">Un syst&egrave;me de prospection LinkedIn op&eacute;r&eacute; pour vous</h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">Signaux d&eacute;tect&eacute;s, messages r&eacute;dig&eacute;s et valid&eacute;s, RDV livr&eacute;s dans votre agenda. Garantie 5 RDV qualifi&eacute;s minimum par mois. On d&eacute;marre en 2 semaines.</p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              D&eacute;l&eacute;guer ma prospection &rarr;
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/signal-achat-linkedin', title: "C\u2019est quoi un signal d\u2019achat LinkedIn ?", readTime: '7 min' },
            { href: '/ressources/comment-prospecter-sur-linkedin', title: 'Comment prospecter sur LinkedIn en 2026', readTime: '12 min' },
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : d\u00e9finition et programme complet', readTime: '20 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
