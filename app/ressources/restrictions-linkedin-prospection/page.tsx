import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Restrictions LinkedIn : limites, comptes bloqués et prospection adaptée (2026)",
  description:
    "Les limites de LinkedIn, ce qui déclenche une restriction, les trois niveaux de sanction et comment débloquer un compte. Plus la méthode pour prospecter sans jamais être limité.",
  openGraph: {
    title: "Restrictions LinkedIn : limites, comptes bloqués et prospection adaptée (2026)",
    description:
      "Ce qui déclenche une restriction LinkedIn, comment débloquer un compte, et comment adapter sa prospection pour ne plus être limité.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restrictions LinkedIn : limites, comptes bloqués et prospection adaptée (2026)',
    description:
      "Ce qui déclenche une restriction LinkedIn, comment débloquer un compte, et comment adapter sa prospection pour ne plus être limité.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
    languages: {
      'fr': 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
      'x-default': 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/restrictions-linkedin-prospection#article',
  headline: 'Restrictions LinkedIn : limites, comptes bloqués et prospection adaptée (2026)',
  description:
    "Guide des restrictions LinkedIn : limites d'invitations et de recherche, facteurs déclencheurs, niveaux de sanction, procédure de déblocage et adaptation de la prospection B2B.",
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
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
  },
  image: 'https://www.setting.live/ressources/restrictions-linkedin-prospection/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Prospection LinkedIn',
  wordCount: 2800,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: {
    '@type': 'Thing',
    name: 'Restrictions LinkedIn',
    description:
      "Ensemble des limites et sanctions appliquées par LinkedIn à un compte : quotas d'invitations et de recherche, limitation temporaire des fonctionnalités, restriction du compte avec vérification d'identité, fermeture définitive.",
  },
  mentions: [
    { '@type': 'SoftwareApplication', name: 'LinkedIn', url: 'https://www.linkedin.com' },
    { '@type': 'SoftwareApplication', name: 'LinkedIn Sales Navigator', url: 'https://business.linkedin.com/sales-solutions' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Débloquer un compte LinkedIn restreint',
  description:
    "Procédure à suivre quand LinkedIn a restreint un compte à la suite d'une activité de prospection jugée anormale.",
  totalTime: 'P7D',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Arrêter toute automatisation',
      text: "Désinstallez les extensions de navigateur et coupez les séquences en cours. Une restriction levée puis re-déclenchée aboutit rarement à un second déblocage.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Suivre la procédure de vérification',
      text: "LinkedIn demande une pièce d'identité dans la plupart des restrictions temporaires. Utilisez le formulaire affiché à la connexion, pas un autre canal.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Ne pas créer de second compte',
      text: "Un compte de contournement est détecté et aggrave la sanction. LinkedIn interdit explicitement les comptes multiples.",
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Reprendre à volume réduit',
      text: "Après déblocage, reprenez avec un volume faible pendant deux à trois semaines. Le compte reste surveillé.",
    },
  ],
}

const faqItems = [
  {
    question: 'Quelle est la limite d’invitations LinkedIn par semaine ?',
    answer:
      "La limite officielle est de 200 invitations par semaine. Elle varie selon l'ancienneté du compte et le score SSI, et surtout selon le taux d'acceptation des invitations précédentes. Un compte récent dont les invitations sont peu acceptées est limité bien plus tôt qu'un compte ancien au bon taux d'acceptation.",
  },
  {
    question: 'Pourquoi mon compte LinkedIn est-il restreint ?',
    answer:
      "Trois causes dominent : un volume d'actions quotidien trop élevé, un taux d'invitations refusées ou marquées « Je ne connais pas cette personne » trop important, et l'usage d'un outil d'automatisation détecté. Les signalements pour spam de la part des destinataires accélèrent la sanction.",
  },
  {
    question: 'Combien de temps dure une restriction LinkedIn ?',
    answer:
      "Une limitation de quota se lève seule, souvent en quelques jours ou au changement de période. Une restriction de compte avec vérification d'identité dure le temps du traitement du dossier, généralement quelques jours. Une fermeture définitive n'est pas réversible dans la majorité des cas.",
  },
  {
    question: 'Comment débloquer un compte LinkedIn restreint ?',
    answer:
      "Coupez d'abord toute automatisation. Suivez ensuite la procédure de vérification affichée à la connexion, qui demande le plus souvent une pièce d'identité. Ne créez pas de second compte : LinkedIn interdit les comptes multiples et la détection aggrave la sanction. Après déblocage, reprenez à volume réduit pendant deux à trois semaines.",
  },
  {
    question: 'Sales Navigator supprime-t-il les limites de LinkedIn ?',
    answer:
      "Non, pas celles qui comptent en prospection. Sales Navigator lève la limite d'utilisation commerciale sur les recherches de profils et donne accès à des crédits InMail. Il ne lève pas le quota hebdomadaire d'invitations et ne protège pas d'une restriction pour comportement anormal.",
  },
  {
    question: 'LinkedIn détecte-t-il les outils d’automatisation ?',
    answer:
      "Oui. Les extensions de navigateur sont les plus exposées, car elles agissent directement dans la session. Les outils cloud réduisent la détection sans l'éliminer : LinkedIn analyse les motifs d'activité, pas seulement leur origine. Un volume identique chaque jour, aux mêmes heures, est un signal suffisant.",
  },
  {
    question: 'Peut-on prospecter sur LinkedIn sans se faire restreindre ?',
    answer:
      "Oui, en inversant la logique. Les restrictions sanctionnent le volume et le refus. Une prospection déclenchée par un signal d'achat obtient un taux d'acceptation élevé, ce qui éloigne mécaniquement le compte des seuils de détection. Moins de messages, mieux ciblés, ne déclenchent rien.",
  },
  {
    question: 'Que faire quand on atteint la limite d’utilisation commerciale ?',
    answer:
      "La limite d'utilisation commerciale plafonne les recherches de profils sur les comptes gratuits. Elle se réinitialise le 1er de chaque mois. Vous pouvez attendre le reset, passer à Sales Navigator, ou réduire le nombre de recherches en travaillant sur des listes préparées à l'avance.",
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
      name: 'Restrictions LinkedIn',
      item: 'https://www.setting.live/ressources/restrictions-linkedin-prospection',
    },
  ],
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'limites', label: 'Les limites que LinkedIn applique' },
  { id: 'declencheurs', label: 'Ce qui déclenche une restriction' },
  { id: 'niveaux', label: 'Les trois niveaux de sanction' },
  { id: 'debloquer', label: 'Compte restreint : la procédure' },
  { id: 'adapter', label: 'Adapter sa prospection pour ne plus être limité' },
  { id: 'sales-navigator', label: 'Sales Navigator lève-t-il les limites ?' },
  { id: 'faq', label: 'Questions fréquentes' },
]

// ─── Data ─────────────────────────────────────────────────────────────────────

const limites = [
  {
    name: 'Invitations',
    detail:
      "200 par semaine. Le plafond varie selon l’ancienneté du compte et le SSI, et surtout selon votre taux d’acceptation.",
  },
  {
    name: 'Recherche de profils',
    detail:
      "Limite d’utilisation commerciale sur les comptes gratuits. Elle se réinitialise le 1er du mois.",
  },
  {
    name: 'Invitations en attente',
    detail:
      "Le stock d’invitations non traitées est plafonné. Retirer les plus anciennes libère du quota.",
  },
  {
    name: 'Renvoi après retrait',
    detail:
      "Une invitation retirée ne peut pas être renvoyée à la même personne avant environ trois semaines.",
  },
]

const declencheurs = [
  {
    label: 'Volume quotidien',
    detail:
      "Les restrictions deviennent fréquentes au-delà de 300 actions par jour. Le seuil réel est plus bas sur un compte récent.",
  },
  {
    label: 'Taux d’acceptation faible',
    detail:
      "C’est le signal le plus lourd. Beaucoup d’invitations ignorées ou refusées indique à LinkedIn que vous contactez les mauvaises personnes.",
  },
  {
    label: '« Je ne connais pas cette personne »',
    detail:
      "Chaque clic sur cette réponse compte contre le compte émetteur. Quelques-uns suffisent à déclencher un avertissement.",
  },
  {
    label: 'Signalements pour spam',
    detail:
      "Un signalement pèse beaucoup plus lourd qu’un refus. Il accélère la sanction sans passer par les paliers intermédiaires.",
  },
  {
    label: 'Régularité des motifs',
    detail:
      "Même volume, mêmes horaires, mêmes intervalles. Un humain n’envoie pas 40 invitations chaque jour à 9 h 02.",
  },
  {
    label: 'Automatisation détectée',
    detail:
      "Les extensions de navigateur sont les plus exposées. Le cloud réduit la détection sans l’éliminer.",
  },
]

const niveaux = [
  {
    n: '01',
    name: 'Limitation de quota',
    signe: 'Aucune notification. Les invitations ne partent plus.',
    duree: 'Quelques jours, ou au changement de période.',
  },
  {
    n: '02',
    name: 'Restriction du compte',
    signe: 'Connexion bloquée. Vérification d’identité demandée.',
    duree: 'Le temps du traitement du dossier.',
  },
  {
    n: '03',
    name: 'Fermeture définitive',
    signe: 'Compte supprimé. Réseau et historique perdus.',
    duree: 'Irréversible dans la majorité des cas.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RestrictionsLinkedInPage() {
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
              <li className="text-text-primary">Restrictions LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide pratique
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Restrictions LinkedIn : les limites et comment adapter sa prospection
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              LinkedIn ne restreint pas les comptes au hasard. Il sanctionne deux choses :
              le volume, et le refus. Ce guide couvre les limites r&eacute;elles et
              ce qui d&eacute;clenche une sanction. Puis la proc&eacute;dure quand le
              compte est bloqu&eacute;, et la fa&ccedil;on de ne jamais y arriver.
            </p>
            <AuthorBlock date="2026-09-02" readTime="11 min de lecture" dateLabel="2 septembre 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              Une <strong className="text-text-primary">restriction LinkedIn</strong> sanctionne
              un volume d&apos;actions trop &eacute;lev&eacute; ou un taux d&apos;acceptation
              trop faible. Trois niveaux existent : la limitation de quota, la restriction
              de compte avec v&eacute;rification d&apos;identit&eacute;, et la fermeture
              d&eacute;finitive. Les restrictions deviennent fr&eacute;quentes au-del&agrave;
              de 300 actions par jour. Sales Navigator ne l&egrave;ve pas le quota
              d&apos;invitations. La seule protection durable est de baisser le volume
              et de monter la pertinence.
            </p>
          </TldrBox>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '200', label: 'invitations/semaine : la limite officielle' },
              { stat: '300', label: 'actions/jour : la zone rouge' },
              { stat: '3', label: 'niveaux de sanction chez LinkedIn' },
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

            {/* Section 1 — Limites */}
            <section id="limites" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les limites que LinkedIn applique
              </h2>
              <p className="mb-4" data-speakable="true">
                LinkedIn plafonne quatre choses. Les invitations, les recherches de profils,
                le stock d&apos;invitations en attente, et le renvoi apr&egrave;s retrait.
                Seul le quota d&apos;invitations a un chiffre annonc&eacute;. Les autres
                varient d&apos;un compte &agrave; l&apos;autre.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <div className="space-y-4">
                  {limites.map(({ name, detail }) => (
                    <div key={name}>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{name}</p>
                      <p className="font-sans text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Le quota d&apos;invitations est celui qui g&ecirc;ne le plus. La limite
                officielle est de 200 invitations par semaine. Elle varie selon
                l&apos;anciennet&eacute; du compte et le SSI. Surtout, elle d&eacute;pend
                de votre taux d&apos;acceptation. Deux comptes du m&ecirc;me &acirc;ge
                n&apos;ont pas le m&ecirc;me plafond. Celui dont les invitations sont
                accept&eacute;es en envoie davantage.
              </p>
              <p className="mb-4">
                C&apos;est ce qui renverse la logique de la prospection. LinkedIn ne compte
                pas vos envois, il &eacute;value vos r&eacute;sultats. Une liste mal
                cibl&eacute;e fait baisser le taux d&apos;acceptation. Le plafond baisse
                avec lui. Vous pouvez donc envoyer moins la semaine suivante, parce que
                vous avez mal cibl&eacute; la pr&eacute;c&eacute;dente. La qualit&eacute;
                de la liste ne prime pas sur le volume par principe. Elle le conditionne.
              </p>
            </section>

            {/* Section 2 — Déclencheurs */}
            <section id="declencheurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce qui d&eacute;clenche une restriction
              </h2>
              <p className="mb-4" data-speakable="true">
                Six facteurs. Le volume compte, mais il arrive rarement seul. C&apos;est
                la combinaison volume &eacute;lev&eacute; et faible acceptation qui
                d&eacute;clenche les sanctions.
              </p>

              <div className="space-y-4 my-6">
                {declencheurs.map(({ label, detail }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-2">{label}</p>
                    <p className="font-sans text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4">
                Le cas typique tient en une phrase. Un outil envoie 150 invitations par jour
                avec le m&ecirc;me message. Le taux d&apos;acceptation tombe sous 10 %.
                Trois personnes signalent le message comme ind&eacute;sirable. Le compte
                est limit&eacute; dans la semaine.
              </p>
            </section>

            {/* Section 3 — Niveaux */}
            <section id="niveaux" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les trois niveaux de sanction
              </h2>
              <p className="mb-4" data-speakable="true">
                LinkedIn ne pr&eacute;vient pas au premier palier. La limitation de quota
                arrive sans notification : vos invitations cessent simplement de partir.
                Beaucoup de comptes restent bloqu&eacute;s &agrave; ce niveau sans le savoir.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <div className="space-y-5">
                  {niveaux.map(({ n, name, signe, duree }) => (
                    <div key={n} className="flex gap-3 items-baseline">
                      <span className="font-sans text-accent text-xs tabular-nums shrink-0">{n}</span>
                      <div>
                        <p className="font-sans font-semibold text-text-primary text-sm mb-1">{name}</p>
                        <p className="font-sans text-sm">{signe}</p>
                        <p className="font-sans text-xs text-text-secondary/70 mt-1">{duree}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Le passage du niveau 2 au niveau 3 se joue souvent sur une erreur.
                Cr&eacute;er un second compte pendant une restriction. LinkedIn interdit
                les comptes multiples et les rapproche facilement. La sanction devient
                alors d&eacute;finitive.
              </p>
            </section>

            {/* Section 4 — Débloquer */}
            <section id="debloquer" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Compte restreint : la proc&eacute;dure
              </h2>
              <p className="mb-4" data-speakable="true">
                Quatre &eacute;tapes, dans cet ordre. Coupez toute automatisation avant
                m&ecirc;me de contacter LinkedIn. Une restriction lev&eacute;e puis
                re-d&eacute;clench&eacute;e aboutit rarement &agrave; un second d&eacute;blocage.
              </p>
              <ol className="space-y-3 my-6">
                {[
                  "Désinstallez les extensions et coupez les séquences en cours.",
                  "Suivez la procédure de vérification affichée à la connexion. Elle demande le plus souvent une pièce d’identité.",
                  "Ne créez pas de second compte. C’est le réflexe qui transforme une restriction temporaire en fermeture.",
                  "Reprenez à volume réduit pendant deux à trois semaines. Le compte reste surveillé.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 items-baseline">
                    <span className="font-sans text-accent text-xs tabular-nums shrink-0 w-5 text-right">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ol>
              <p className="mb-4">
                Pendant la restriction, votre pipeline est &agrave; z&eacute;ro. Pas
                ralenti : &agrave; z&eacute;ro. C&apos;est le co&ucirc;t r&eacute;el
                de l&apos;automatisation, et il n&apos;appara&icirc;t sur aucune page
                tarifaire d&apos;outil.
              </p>
            </section>

            {/* Section 5 — Adapter */}
            <section id="adapter" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Adapter sa prospection pour ne plus &ecirc;tre limit&eacute;
              </h2>
              <p className="mb-4" data-speakable="true">
                Les restrictions sanctionnent le volume et le refus. La parade n&apos;est
                donc pas de ralentir un mauvais syst&egrave;me. C&apos;est d&apos;en changer.
                Une prospection d&eacute;clench&eacute;e par un signal d&apos;achat obtient
                un taux d&apos;acceptation &eacute;lev&eacute;. Le compte s&apos;&eacute;loigne
                m&eacute;caniquement des seuils de d&eacute;tection.
              </p>
              <p className="mb-4">
                Le calcul qui compte : 200 messages automatis&eacute;s &agrave; 3 % de
                r&eacute;ponse donnent 6 r&eacute;ponses, et un compte &agrave; risque.
                60 messages cibl&eacute;s &agrave; 25 % donnent 15 r&eacute;ponses,
                et un compte tranquille. Le volume n&apos;est pas la bonne m&eacute;trique.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Les r&eacute;flexes qui protègent le compte
                </p>
                <ul className="space-y-2">
                  {[
                    "Contacter uniquement après un signal : réaction à un post, changement de poste, visite de profil.",
                    "Varier les volumes et les horaires d’un jour à l’autre.",
                    "Retirer régulièrement les invitations en attente de plus d’un mois.",
                    "Surveiller le taux d’acceptation. Sous 30 %, ralentissez avant que LinkedIn ne le fasse.",
                    "Garder un profil complet et un SSI au-dessus de 70.",
                    "Ne jamais utiliser d’extension de navigateur sur le compte principal.",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-accent shrink-0">&#x2713;</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-4">
                Cette approche a un nom. C&apos;est le{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">setting
                LinkedIn</a> : d&eacute;tecter un{' '}
                <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
                d&apos;achat</a>, &eacute;crire un message ancr&eacute; dessus, qualifier.
                Elle a &eacute;t&eacute; con&ccedil;ue pour le taux de r&eacute;ponse.
                Le fait qu&apos;elle protège aussi le compte est un effet de bord.
              </p>
            </section>

            {/* Section 6 — Sales Navigator */}
            <section id="sales-navigator" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sales Navigator l&egrave;ve-t-il les limites&nbsp;?
              </h2>
              <p className="mb-4" data-speakable="true">
                Pas celles qui comptent. Sales Navigator l&egrave;ve la limite
                d&apos;utilisation commerciale sur les recherches de profils. Il donne
                acc&egrave;s &agrave; des cr&eacute;dits InMail et &agrave; des alertes
                sur les changements de poste. Il ne l&egrave;ve pas le quota hebdomadaire
                d&apos;invitations.
              </p>
              <p className="mb-4">
                C&apos;est la confusion la plus co&ucirc;teuse du march&eacute;. Un compte
                Sales Navigator qui envoie 200 invitations par jour est restreint aussi
                vite qu&apos;un compte gratuit. L&apos;abonnement &agrave; environ 100 &euro;
                par mois achète du ciblage, pas de l&apos;immunit&eacute;.
              </p>
              <p className="mb-4">
                Son vrai int&eacute;r&ecirc;t en prospection est ailleurs. Les alertes
                sur les changements de poste et les listes de comptes surveill&eacute;s
                produisent des signaux. Et un message envoy&eacute; sur signal est
                accept&eacute;, donc il ne compte pas contre vous.
              </p>
            </section>

            <CtaArticle variant="setting" />

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes sur les restrictions LinkedIn
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
                  { href: '/ressources/chiffres-prospection-b2b-2026', label: "Les chiffres de la prospection B2B en 2026" },
                  { href: '/ressources/setting-linkedin-ia', label: "Setting LinkedIn et IA : où mettre l’humain, où laisser la machine" },
                  { href: '/ressources/setter-b2b', label: "Setter B2B : le métier, le salaire et l’évolution" },
                  { href: '/ressources/setting-definition', label: "Le setting, c'est quoi ? Définition complète" },
                  { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Comment prospecter sur LinkedIn' },
                  { href: '/ressources/parametres-linkedin', label: 'Paramètres LinkedIn : le guide complet' },
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                  { href: '/ressources/signal-achat-linkedin', label: 'Signaux d’achat LinkedIn' },
                  { href: '/ressources/message-linkedin-b2b', label: 'Messages LinkedIn B2B qui obtiennent une réponse' },
                  { href: '/ressources/inbound-setting-linkedin', label: 'Inbound setting LinkedIn' },
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
                Prospecter sans risquer le compte
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                Un setter d&eacute;di&eacute;, z&eacute;ro automatisation
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                On prospecte sur signal, &agrave; volume ma&icirc;tris&eacute;. Chaque
                message est &eacute;crit pour une personne et relu par un humain.
                Pas d&apos;extension, pas de s&eacute;quence automatis&eacute;e.
              </p>
              <ButtonGlow href="/tarifs">
                Voir nos tarifs
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/comment-prospecter-sur-linkedin', title: 'Comment prospecter sur LinkedIn en 2026', readTime: '14 min' },
              { href: '/ressources/parametres-linkedin', title: 'Paramètres LinkedIn : le guide complet', readTime: '12 min' },
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : définition, méthode et exemples concrets', readTime: '25 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
