import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'SPIN Selling : méthode de vente B2B | Setting',
  description:
    'SPIN Selling : la méthode de vente B2B de Neil Rackham. Situation, Problème, Implication, Need-payoff avec exemples concrets.',
  openGraph: {
    title: 'SPIN Selling : méthode de vente B2B | Setting',
    description:
      'SPIN Selling : les 4 types de questions qui font avancer un deal B2B. Méthode, exemples et lien avec la discovery call et le closing.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/methode-spin-selling',
    languages: {
      'fr': 'https://www.setting.live/ressources/methode-spin-selling',
      'x-default': 'https://www.setting.live/ressources/methode-spin-selling',
    },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/methode-spin-selling',
  headline: 'SPIN Selling 2026 : la méthode pour vendre en B2B sans forcer',
  description:
    'Le SPIN Selling de Neil Rackham est la méthode de vente B2B la plus validée empiriquement. 4 types de questions qui font avancer un deal sans pression.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.setting.live/a-propos#abraham',
    name: 'Abraham Brakha',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/methode-spin-selling',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/methode-spin-selling',
  },
  image: 'https://www.setting.live/ressources/methode-spin-selling/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Méthode de vente B2B',
  wordCount: 2800,
  about: [
    { '@type': 'Thing', name: 'SPIN Selling' },
    { '@type': 'Thing', name: 'Vente consultative B2B' },
  ],
}

const faqItems = [
  {
    question: 'Qu\'est-ce que le SPIN Selling ?',
    answer:
      'Le SPIN Selling est une méthode de vente développée par Neil Rackham après 12 ans de recherches sur 35 000 appels commerciaux. Elle repose sur 4 types de questions : Situation (contexte), Problème (difficultés), Implication (conséquences du problème), Need-payoff (valeur d\'une solution). Contrairement aux techniques de vente traditionnelles, SPIN met l\'accent sur la compréhension du problème du prospect avant toute présentation de l\'offre.',
  },
  {
    question: 'SPIN Selling vs Challenger Sale : quelle différence ?',
    answer:
      'SPIN Selling place le commercial en mode écoute/questionnement — il fait exprimer le problème et sa valeur au prospect. Le Challenger Sale place le commercial en mode apport d\'insight — il challenge les hypothèses du prospect avec une perspective nouvelle. Les deux ne sont pas opposés : SPIN est plus adapté aux cycles longs et complexes, Challenger Sale aux situations où le prospect ne perçoit pas encore son problème. En pratique, les meilleurs closeurs combinent les deux.',
  },
  {
    question: 'Comment utiliser SPIN en discovery call ?',
    answer:
      'Commencez par les questions de Situation (5 minutes max — ne surchargez pas le prospect de questions factuelles). Passez rapidement aux questions Problème pour identifier les frictions. Utilisez les questions Implication pour faire prendre conscience des conséquences. Finissez par les questions Need-payoff pour faire formuler au prospect lui-même la valeur d\'une solution. Quand le prospect dit "oui, ça changerait vraiment les choses pour moi", votre pitch sera beaucoup mieux reçu.',
  },
  {
    question: 'SPIN Selling fonctionne-t-il pour les solopreneurs ?',
    answer:
      'Oui, et particulièrement bien. Les solopreneurs qui vendent des offres à haute valeur (coaching, consulting, formation) font face à des cycles de décision courts mais à des montants significatifs. SPIN permet d\'éviter le défaut le plus fréquent — pitcher l\'offre avant d\'avoir compris le problème du prospect. La transition entre les questions Problème et Implication est le moment où le prospect commence à se vendre lui-même la solution.',
  },
  {
    question: 'Quelles sont les questions SPIN à préparer avant un appel ?',
    answer:
      'Situation (2-3 questions) : "Pouvez-vous me décrire comment vous générez vos clients actuellement ?" Problème (3-4 questions) : "Qu\'est-ce qui vous pose problème dans ce processus ?" Implication (2-3 questions) : "Si ce problème persiste 6 mois, qu\'est-ce que ça vous coûte ?" Need-payoff (1-2 questions) : "Si vous résolviez ça, qu\'est-ce que ça changerait concrètement pour vous ?"',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    { '@type': 'ListItem', position: 3, name: 'SPIN Selling', item: 'https://www.setting.live/ressources/methode-spin-selling' },
  ],
}

const spinQuestions = [
  {
    lettre: 'S',
    type: 'Situation',
    objectif: 'Comprendre le contexte factuel du prospect.',
    piege: 'Trop de questions Situation = interrogatoire. Le prospect se lasse. Préparez-les en amont depuis le profil LinkedIn — n\'utilisez que 2 ou 3 pendant l\'appel.',
    exemples: [
      'Pouvez-vous me décrire comment vous générez vos clients actuellement ?',
      'Quelle est la taille de votre équipe commerciale ?',
      'Quel outil utilisez-vous pour suivre vos prospects ?',
    ],
  },
  {
    lettre: 'P',
    type: 'Problème',
    objectif: 'Identifier les frictions, difficultés et insatisfactions.',
    piege: "Les commerciaux en difficulté posent souvent une seule question Problème et passent au pitch. Trois ou quatre questions Problème bien enchaînées font émerger la vraie douleur.",
    exemples: [
      'Qu\'est-ce qui vous pose problème dans votre processus de prospection actuel ?',
      'Qu\'est-ce qui vous prend le plus de temps et donne le moins de résultats ?',
      'Dans quelles situations vous sentez-vous dépassé par le volume de travail ?',
    ],
  },
  {
    lettre: 'I',
    type: 'Implication',
    objectif: 'Faire prendre conscience des conséquences du problème non résolu.',
    piege: "C'est le type de question le plus puissant et le plus sous-utilisé. Sans Implication, le prospect perçoit son problème mais pas son urgence. Avec Implication, il le ressent.",
    exemples: [
      'Si votre pipeline reste à ce niveau les 6 prochains mois, qu\'est-ce que ça implique pour votre chiffre d\'affaires ?',
      'Combien de temps estimez-vous passer chaque semaine sur de la prospection peu qualifiée ?',
      'Qu\'est-ce que ça vous coûte en opportunités manquées de ne pas avoir de système de suivi fiable ?',
    ],
  },
  {
    lettre: 'N',
    type: 'Need-payoff',
    objectif: 'Faire formuler par le prospect lui-même la valeur d\'une solution.',
    piege: "Beaucoup sautent cette étape et vont directement au pitch. C'est une erreur. Quand le prospect dit lui-même 'si on résolvait ça, ce serait vraiment utile', il se pré-convainc. Votre pitch devient une confirmation, pas une tentative de persuasion.",
    exemples: [
      'Si vous aviez 3 rendez-vous qualifiés supplémentaires par semaine, qu\'est-ce que ça changerait pour vous ?',
      'À votre avis, si ce problème était résolu, combien ça vous permettrait de gagner par mois ?',
      'Comment est-ce que ça vous aiderait si vous n\'aviez plus à vous occuper de la prospection ?',
    ],
  },
]

export default function MethodeSpinSellingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">SPIN Selling</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Méthodes · Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              SPIN Selling 2026 : la méthode pour vendre en B2B sans forcer
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Neil Rackham a analysé 35 000 appels commerciaux sur 12 ans pour comprendre ce qui
              différenciait les meilleurs vendeurs B2B. Résultat : pas les techniques de closing
              agressives. Les meilleurs posaient de meilleures questions. SPIN Selling est le cadre
              qui en découle.
            </p>
            <AuthorBlock date="2026-03-18" readTime="9 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stat externe */}
          <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              À l&apos;origine de la méthode
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              L&apos;étude Huthwaite (Neil Rackham, 1988) a analysé <strong className="text-text-primary">35 000 appels commerciaux</strong>{' '}
              dans 23 pays sur 12 ans. Principale conclusion : les techniques de closing traditionnelles
              (assumptive close, urgence artificielle) fonctionnent sur les petites ventes mais
              <strong className="text-text-primary"> réduisent les taux de conversion sur les ventes complexes</strong>.
              Les questions sont plus efficaces que les arguments.
            </p>
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Sommaire</p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: 'Qu\'est-ce que le SPIN Selling ?' },
                { id: 'questions', label: 'Les 4 types de questions SPIN en détail' },
                { id: 'discovery', label: 'Appliquer SPIN en discovery call' },
                { id: 'vs-challenger', label: 'SPIN Selling vs Challenger Sale' },
                { id: 'erreurs', label: 'Les 3 erreurs d\'application fréquentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a href={`#${id}`} className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qu&apos;est-ce que le SPIN Selling ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              SPIN Selling est une méthode de vente publiée par Neil Rackham en 1988, issue de la
              plus grande étude empirique jamais conduite sur la performance commerciale. L&apos;acronyme
              désigne 4 catégories de questions :{' '}
              <strong className="text-text-primary">S</strong>ituation,{' '}
              <strong className="text-text-primary">P</strong>roblème,{' '}
              <strong className="text-text-primary">I</strong>mplication,{' '}
              <strong className="text-text-primary">N</strong>eed-payoff.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La logique centrale : dans les ventes complexes (offres à valeur élevée, plusieurs
              décideurs, cycle long), les prospects n&apos;achètent pas quand on leur dit quoi faire.
              Ils achètent quand ils comprennent eux-mêmes l&apos;ampleur de leur problème et la
              valeur d&apos;une solution. Le rôle du commercial est de faciliter cette prise de
              conscience — pas de pousser.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Ce que SPIN n&apos;est pas : un script à dérouler dans l&apos;ordre S→P→I→N sur
              chaque appel. C&apos;est un cadre de pensée qui guide l&apos;ordre de priorité des
              questions. Les meilleurs commerciaux n&apos;y pensent plus consciemment — ils ont
              intégré la logique.
            </p>
          </section>

          {/* Section 2 — Les 4 questions */}
          <section id="questions" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 4 types de questions SPIN en détail
            </h2>
            <div className="space-y-8">
              {spinQuestions.map(({ lettre, type, objectif, piege, exemples }) => (
                <div key={type} className="border-l-2 border-white/[0.06] pl-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl text-accent leading-none">{lettre}</span>
                    <h3 className="font-sans font-semibold text-text-primary text-base">{type}</h3>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-4">
                    <strong className="text-text-primary">Objectif :</strong> {objectif}
                  </p>
                  <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] mb-3">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Piège fréquent
                    </p>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{piege}</p>
                  </div>
                  <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                      Exemples de questions
                    </p>
                    <ul className="space-y-1">
                      {exemples.map((ex) => (
                        <li key={ex} className="font-sans text-xs text-text-secondary flex gap-2">
                          <span className="text-accent shrink-0 mt-0.5">→</span>
                          <span className="italic">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* Section 3 — Discovery */}
          <section id="discovery" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Appliquer SPIN en discovery call
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Une discovery call de 45 minutes avec SPIN se découpe en 4 phases :
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent w-1/4">Phase</th>
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent w-1/6">Durée</th>
                    <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-accent">Ce qu&apos;on fait</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    { phase: 'Ouverture', duree: '3–5 min', desc: 'Cadrer l\'appel, annoncer l\'agenda, créer un climat favorable. Ne pas commencer à questionner immédiatement.' },
                    { phase: 'S + P', duree: '15 min', desc: '2-3 questions Situation (le plus vite possible), puis transition vers les questions Problème. C\'est là que la vraie conversation commence.' },
                    { phase: 'I', duree: '10 min', desc: 'Questions Implication. Faire prendre conscience de l\'ampleur et du coût du problème. C\'est la phase la plus puissante — ne pas la raccourcir.' },
                    { phase: 'N + Pitch', duree: '15 min', desc: 'Questions Need-payoff pour faire formuler la valeur d\'une solution. Puis présentation de l\'offre ancrée sur ce qui vient d\'être dit.' },
                  ].map(({ phase, duree, desc }) => (
                    <tr key={phase}>
                      <td className="py-4 pr-4 font-semibold text-text-primary align-top">{phase}</td>
                      <td className="py-4 pr-4 text-text-secondary align-top whitespace-nowrap">{duree}</td>
                      <td className="py-4 text-text-secondary leading-relaxed">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              L&apos;article complet sur la structure d&apos;une discovery call :{' '}
              <a href="/ressources/discovery-call-b2b" className="text-accent hover:text-text-primary transition-colors">
                discovery call B2B — structure, questions et erreurs à éviter
              </a>
              .
            </p>
          </section>

          {/* Section 4 — SPIN vs Challenger */}
          <section id="vs-challenger" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              SPIN Selling vs Challenger Sale
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">SPIN Selling</p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    'Posture d\'écoute et de questionnement',
                    'Le prospect formule lui-même son problème',
                    'Efficace sur cycles longs avec problème identifié',
                    'Réduit la pression perçue',
                    'Plus adapté aux premières ventes dans un nouveau segment',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">Challenger Sale</p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    'Posture d\'apport d\'insight',
                    'Le commercial challenge les hypothèses du prospect',
                    'Efficace quand le prospect ne perçoit pas encore son problème',
                    'Crée de la crédibilité par la connaissance sectorielle',
                    'Plus adapté aux marchés matures où le prospect compare',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">→</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Les deux méthodes sont complémentaires. SPIN structure la discovery. Le Challenger Sale
              fournit les insights à apporter pendant les questions Implication. En pratique :
              utilisez SPIN pour la structure de l&apos;appel, Challenger Sale pour vous donner
              les munitions (données secteur, angles contre-intuitifs).{' '}
              <a href="/ressources/challenger-sale-definition" className="text-accent hover:text-text-primary transition-colors">
                Article complet sur le Challenger Sale
              </a>
              .
            </p>
          </section>

          {/* Section 5 — Erreurs */}
          <section id="erreurs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 erreurs d&apos;application fréquentes
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'Trop de questions Situation',
                  desc: 'Les commerciaux débutants sur SPIN posent 8 à 10 questions Situation avant de passer au Problème. Le prospect se lasse. Les questions Situation doivent se limiter à 2 ou 3 — et idéalement, les réponses sont déjà connues grâce à la préparation (profil LinkedIn, site web, news récentes).',
                },
                {
                  num: '02',
                  title: 'Sauter les questions Implication',
                  desc: "C'est la phase la plus puissante et la plus inconfortable. Demander à quelqu'un de chiffrer ce que lui coûte son problème peut sembler intrusif. Mais c'est exactement ce qui fait passer le deal de \"intéressant\" à \"urgent\". Sans Implication, le prospect remet à plus tard.",
                },
                {
                  num: '03',
                  title: 'Utiliser SPIN comme un script linéaire',
                  desc: "S → P → I → N dans cet ordre sur chaque appel. En réalité, les conversations ne fonctionnent pas comme ça. Un prospect peut amener une question Implication dès le début de l'appel sans que vous l'ayez posée. SPIN est un cadre de pensée, pas une checklist.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{num}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fréquentes sur le SPIN Selling</h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-white/[0.06] pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">Pour aller plus loin</p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : définition, méthode et programme complet' },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure et questions' },
                { href: '/ressources/challenger-sale-definition', label: 'La méthode Challenger Sale' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gérer les objections en vente B2B' },
                { href: '/ressources/methode-soncas', label: 'Méthode SONCAS : 6 leviers de motivation d\'achat' },
                { href: '/glossaire', label: 'Glossaire setting & closing B2B' },
                { href: '/ressources/methodes-vente-b2b', label: 'Méthodes de vente B2B comparées : Challenger Sale, SPIN, SONCAS' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Setting</p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">Vous voulez améliorer votre taux de closing ?</h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder votre structure d&apos;appel, identifier les
              questions manquantes et ce qui changerait dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">Réserver un appel gratuit →</ButtonGlow>
          </div>

          <div className="mt-8 text-center">
            <a href="/ressources" className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors">← Retour au blog</a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/methodes-vente-b2b', title: 'M\u00e9thodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS', readTime: '10 min' },
            { href: '/ressources/methode-soncas', title: 'M\u00e9thode SONCAS en B2B 2026 : d\u00e9finition, 6 leviers et exemples concrets', readTime: '10 min' },
            { href: '/ressources/challenger-sale-definition', title: "Qu\u2019est-ce que le Challenger Sale ?", readTime: '9 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
