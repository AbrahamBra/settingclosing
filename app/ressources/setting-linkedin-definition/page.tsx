import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Setting LinkedIn : le guide complet — d\u00e9finition, m\u00e9thode et exemples (2026)',
  description:
    'Setting LinkedIn : m\u00e9thode de prospection B2B par signaux d\u2019achat. D\u00e9finition, \u00e9tapes, scripts de messages, outils et KPIs cl\u00e9s.',
  openGraph: {
    title: 'Setting LinkedIn : le guide complet (2026)',
    description:
      'Qu\u2019est-ce que le setting LinkedIn ? D\u00e9finition, 5 \u00e9tapes de la m\u00e9thode, 6 scripts de messages, outils, KPIs et erreurs qui tuent votre taux de r\u00e9ponse.',
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn : le guide complet (2026)',
    description: 'D\u00e9finition du setting LinkedIn, m\u00e9thode en 5 \u00e9tapes, scripts concrets, outils et KPIs.',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin-definition',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin-definition',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin-definition',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin-definition',
  headline: 'Setting LinkedIn : le guide complet \u2014 d\u00e9finition, m\u00e9thode et exemples concrets',
  description:
    'Le setting LinkedIn est une m\u00e9thode de prospection B2B qui cible les signaux d\u2019achat pour engager des conversations qualifi\u00e9es. D\u00e9finition, \u00e9tapes, scripts de messages, outils, KPIs et erreurs \u00e0 \u00e9viter.',
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
  datePublished: '2026-03-24',
  dateModified: '2026-03-25',
  inLanguage: 'fr-FR',
  wordCount: 4800,
  articleSection: 'Setting LinkedIn',
  about: [
    'Setting LinkedIn',
    'Prospection LinkedIn B2B',
    'Signaux d\u2019achat LinkedIn',
    'Scripts de prospection',
    'Outils setting LinkedIn',
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.definition-block p', '.faq-answer'],
  },
  url: 'https://www.setting.live/ressources/setting-linkedin-definition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin-definition',
  },
  image: 'https://www.setting.live/ressources/setting-linkedin-definition/opengraph-image',
}

const faqItems = [
  {
    question: 'Qu\u2019est-ce que le setting LinkedIn ?',
    answer:
      'Le setting LinkedIn est une technique de prospection B2B qui consiste \u00e0 d\u00e9tecter les signaux d\u2019achat sur LinkedIn (r\u00e9actions \u00e0 des posts, changements de poste, visites de profil), puis \u00e0 engager une conversation personnalis\u00e9e avec le prospect. Contrairement au cold outreach, chaque message est contextualis\u00e9 et valid\u00e9 par un humain.',
  },
  {
    question: 'Quelle diff\u00e9rence entre setting LinkedIn et social selling ?',
    answer:
      'Le social selling couvre tout : contenu, engagement, personal branding sur LinkedIn. Le setting LinkedIn est plus cibl\u00e9 : il se concentre sur la prise de contact, depuis la d\u00e9tection du signal d\u2019achat jusqu\u2019au rendez-vous qualifi\u00e9. En gros, le setting est la partie ex\u00e9cution du social selling.',
  },
  {
    question: 'Le setting LinkedIn est-il l\u00e9gal ?',
    answer:
      'Oui. Le setting LinkedIn respecte les conditions d\u2019utilisation de la plateforme tant qu\u2019il reste manuel (pas d\u2019automatisation des connexions ou des messages). Chaque message est r\u00e9dig\u00e9 individuellement et envoy\u00e9 apr\u00e8s validation humaine, ce qui le diff\u00e9rencie des outils d\u2019automatisation comme Waalaxy ou PhantomBuster qui risquent le ban du compte.',
  },
  {
    question: 'Combien co\u00fbte le setting LinkedIn externalis\u00e9 ?',
    answer:
      'Comptez entre 500 et 2\u00a0000\u00a0\u20ac/mois selon le prestataire et le volume de prospection. Chez Setting, l\u2019abonnement d\u00e9marre \u00e0 790\u00a0\u20ac/mois avec un setter d\u00e9di\u00e9, le ciblage IA et la validation humaine de chaque message. Le setup est offert.',
  },
  {
    question: 'En combien de temps le setting LinkedIn donne-t-il des r\u00e9sultats ?',
    answer:
      'Les premiers RDV qualifi\u00e9s arrivent souvent d\u00e8s la premi\u00e8re semaine. Le pipeline se stabilise au bout de 6 \u00e0 8 semaines, une fois que le ciblage, les messages et le scoring sont cal\u00e9s sur les retours terrain. Comptez 8 \u00e0 15 RDV qualifi\u00e9s par mois en r\u00e9gime de croisi\u00e8re.',
  },
  {
    question: 'Setting LinkedIn ou prospection t\u00e9l\u00e9phonique : que choisir ?',
    answer:
      'Les deux sont compl\u00e9mentaires. Le setting LinkedIn g\u00e9n\u00e8re le premier contact et d\u00e9croche un rendez-vous. La qualification t\u00e9l\u00e9phonique approfondit l\u2019int\u00e9r\u00eat du prospect via la grille BANT. Chez Setting, les deux sont int\u00e9gr\u00e9s dans un pipeline unique en 9 \u00e9tapes.',
  },
  {
    question: 'Quels outils utiliser pour le setting LinkedIn ?',
    answer:
      'Les outils essentiels sont Sales Navigator (ciblage), un CRM type BreakCold ou Pipedrive (suivi), et un outil d\u2019enrichissement comme Kaspr ou Dropcontact. Chez Setting, on utilise aussi Reactin pour la veille de signaux et Claude (IA) pour le scoring et les drafts de messages.',
  },
  {
    question: 'Setting r\u00e9actif ou proactif : lequel est le plus efficace ?',
    answer:
      'Le setting r\u00e9actif (r\u00e9pondre aux signaux entrants : commentaires, likes, visites de profil) convertit mieux parce que le prospect a d\u00e9j\u00e0 montr\u00e9 un int\u00e9r\u00eat. Le setting proactif (d\u00e9clencher le contact sur un changement de poste ou une lev\u00e9e de fonds) g\u00e9n\u00e8re plus de volume. Le mieux : combiner les deux dans un pipeline unique.',
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
      name: 'Setting LinkedIn : d\u00e9finition',
      item: 'https://www.setting.live/ressources/setting-linkedin-definition',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: '1',
    title: 'D\u00e9tecter les signaux d\u2019achat',
    desc: 'R\u00e9actions \u00e0 vos posts, interactions sur les posts de concurrents, changements de poste, nouvelles lev\u00e9es de fonds. Le setting LinkedIn commence par l\u2019observation, pas par l\u2019envoi.',
  },
  {
    num: '2',
    title: 'Analyser le profil en profondeur',
    desc: 'Titre, bio, posts r\u00e9cents, connexions communes. L\u2019objectif : comprendre le contexte du prospect pour personnaliser le message. Un CEO de PME tech et un directeur commercial en industrie ne re\u00e7oivent pas le m\u00eame message.',
  },
  {
    num: '3',
    title: 'R\u00e9diger un message contextualis\u00e9',
    desc: '5 phrases maximum. La deuxi\u00e8me phrase cite un fait pr\u00e9cis tir\u00e9 du profil. Jamais de pitch dans le premier message. Le but : ouvrir une conversation, pas vendre.',
  },
  {
    num: '4',
    title: 'Valider avant d\u2019envoyer',
    desc: 'Test du t\u00e9l\u00e9phone : si le message ne sonne pas naturel dit \u00e0 voix haute, on r\u00e9\u00e9crit. Aucun message ne part sans validation humaine. C\u2019est la diff\u00e9rence entre setting et automatisation.',
  },
  {
    num: '5',
    title: 'Convertir en RDV qualifi\u00e9',
    desc: 'Quand le prospect r\u00e9pond, on poursuit la conversation jusqu\u2019au rendez-vous. Pas de pression. Les leads ti\u00e8des entrent dans un pipeline de nurturing et seront recontact\u00e9s au bon moment.',
  },
]

const mistakes = [
  {
    title: 'Pitcher dans le premier message',
    desc: 'Le prospect ne vous conna\u00eet pas. Un message qui commence par votre offre, c\u2019est du bruit. Le premier message ouvre une conversation, il ne vend rien.',
  },
  {
    title: 'Automatiser l\u2019envoi sans contr\u00f4le',
    desc: 'Les outils comme Waalaxy ou PhantomBuster envoient des messages \u00e0 la cha\u00eene. Le probl\u00e8me : un mauvais pr\u00e9nom, une r\u00e9f\u00e9rence \u00e0 un post que la personne n\u2019a pas \u00e9crit, et votre cr\u00e9dibilit\u00e9 est grill\u00e9e.',
  },
  {
    title: 'Cibler sans signal d\u2019achat',
    desc: 'Envoyer un message \u00e0 quelqu\u2019un qui n\u2019a montr\u00e9 aucun int\u00e9r\u00eat, c\u2019est de la prospection \u00e0 froid. Le setting LinkedIn repose sur la d\u00e9tection pr\u00e9alable d\u2019un signal : r\u00e9action, changement de poste, visite de profil.',
  },
  {
    title: 'Abandonner apr\u00e8s 2 messages',
    desc: 'Il faut en moyenne 8 points de contact avant qu\u2019un prospect accepte un rendez-vous. 80\u00a0% des commerciaux abandonnent apr\u00e8s 2 ou 3 tentatives. Le setting planifie la s\u00e9quence compl\u00e8te d\u00e8s le d\u00e9part.',
  },
]

const comparisons = [
  { criteria: 'Ciblage', setting: 'Signal d\u2019achat d\u00e9tect\u00e9', cold: 'Liste import\u00e9e depuis Sales Navigator' },
  { criteria: 'Message', setting: 'Personnalis\u00e9, valid\u00e9 par un humain', cold: 'Template avec variables' },
  { criteria: 'Volume', setting: '15\u201330 messages/jour (qualifi\u00e9s)', cold: '100+ messages/jour (en masse)' },
  { criteria: 'Taux de r\u00e9ponse', setting: '15\u201335\u00a0%', cold: '2\u20135\u00a0%' },
  { criteria: 'Risque de ban', setting: 'Quasi nul (tout est manuel)', cold: '\u00c9lev\u00e9 (automatisation d\u00e9tect\u00e9e)' },
  { criteria: 'RDV qualifi\u00e9s', setting: '8\u201315/mois', cold: '2\u20134/mois' },
]

const messageScripts = [
  {
    signal: 'Like sur un post concurrent',
    context: 'Le prospect a lik\u00e9 un post sur la g\u00e9n\u00e9ration de leads B2B',
    message: 'Bonjour Thomas. J\u2019ai vu que le post de [concurrent] sur l\u2019inbound B2B vous avait parl\u00e9. On bosse avec 3 boites SaaS qui font face au m\u00eame probl\u00e8me : beaucoup de leads entrants, mais peu de qualifi\u00e9s. Curieux de savoir si c\u2019est un sujet chez vous aussi.',
  },
  {
    signal: 'Changement de poste',
    context: 'Le prospect vient d\u2019\u00eatre nomm\u00e9 Head of Sales',
    message: 'Bonjour Sophie. F\u00e9licitations pour le poste de Head of Sales chez [entreprise]. Les 90 premiers jours sont souvent ceux o\u00f9 on pose les bases du pipe outbound. Est-ce que c\u2019est dans vos priorit\u00e9s du trimestre ?',
  },
  {
    signal: 'Commentaire sur votre post',
    context: 'Le prospect a comment\u00e9 votre publication LinkedIn',
    message: 'Bonjour Marc. Merci pour votre commentaire sous mon post sur les signaux d\u2019achat. Votre point sur le timing \u00e9tait tr\u00e8s juste. On a constat\u00e9 que contacter un prospect dans les 48h apr\u00e8s un signal multiplie par 3 le taux de r\u00e9ponse. C\u2019est quelque chose que vous mesurez chez [entreprise] ?',
  },
  {
    signal: 'Lev\u00e9e de fonds r\u00e9cente',
    context: 'L\u2019entreprise du prospect vient de lever des fonds',
    message: 'Bonjour Julie. J\u2019ai vu la lev\u00e9e de [entreprise]. Apr\u00e8s une S\u00e9rie A, le sujet qui revient le plus chez les fondateurs qu\u2019on accompagne, c\u2019est : comment scaler l\u2019acquisition sans recruter 5 SDR d\u2019un coup. Est-ce que c\u2019est une question qui se pose chez vous ?',
  },
  {
    signal: 'Visite de profil',
    context: 'Le prospect a visit\u00e9 votre profil LinkedIn',
    message: 'Bonjour Alex. J\u2019ai vu que vous aviez visit\u00e9 mon profil. Je me suis permis de regarder le v\u00f4tre. [Entreprise] a l\u2019air d\u2019\u00eatre sur un march\u00e9 o\u00f9 le cycle de vente est long. C\u2019est souvent l\u00e0 que le setting LinkedIn fait la plus grosse diff\u00e9rence. C\u2019est quelque chose que vous avez d\u00e9j\u00e0 test\u00e9 ?',
  },
  {
    signal: 'Relance apr\u00e8s non-r\u00e9ponse',
    context: 'Le prospect n\u2019a pas r\u00e9pondu au premier message (7 jours)',
    message: 'Bonjour Thomas. Je reviens vers vous suite \u00e0 mon message de la semaine derni\u00e8re. J\u2019ai publi\u00e9 un retour d\u2019exp\u00e9rience sur un pipeline de setting LinkedIn qui g\u00e9n\u00e8re 12 RDV/mois pour une boite SaaS de 15 personnes. \u00c7a pourrait vous parler.',
  },
]

const tools = [
  {
    name: 'Sales Navigator',
    role: 'Ciblage avanc\u00e9',
    desc: 'Filtres par taille d\u2019entreprise, secteur, poste, anciennet\u00e9. On peut faire du setting sans, mais c\u2019est beaucoup plus lent pour constituer des listes qualifi\u00e9es.',
    price: '\u00c0 partir de 80\u00a0\u20ac/mois',
  },
  {
    name: 'Reactin',
    role: 'Veille de signaux',
    desc: 'Surveille les r\u00e9actions et commentaires sur les posts de vos concurrents et de votre secteur. Vous rep\u00e9rez les prospects actifs sans scroller pendant 2 heures.',
    price: '\u00c0 partir de 49\u00a0\u20ac/mois',
  },
  {
    name: 'BreakCold',
    role: 'CRM social selling',
    desc: 'CRM pens\u00e9 pour le social selling. Conversations, signaux d\u00e9tect\u00e9s et statut de chaque prospect au m\u00eame endroit, dans un pipeline visuel.',
    price: '\u00c0 partir de 29\u00a0\u20ac/mois',
  },
  {
    name: 'Kaspr / Dropcontact',
    role: 'Enrichissement de donn\u00e9es',
    desc: 'R\u00e9cup\u00e8re l\u2019email et le t\u00e9l\u00e9phone du prospect \u00e0 partir de son profil LinkedIn. Utile pour le multicanal (setting LinkedIn + relance email).',
    price: '\u00c0 partir de 30\u00a0\u20ac/mois',
  },
  {
    name: 'Claude (IA)',
    role: 'Scoring et drafts',
    desc: 'Analyse les profils, \u00e9value la maturit\u00e9 d\u2019achat et pond des brouillons de messages. L\u2019humain relit, ajuste et valide avant envoi.',
    price: '\u00c0 partir de 18\u00a0$/mois',
  },
]

const kpis = [
  { name: 'Taux d\u2019acceptation', target: '40\u201360\u00a0%', desc: 'Pourcentage de demandes de connexion accept\u00e9es. En dessous de 30\u00a0%, le ciblage ou l\u2019accroche de connexion est \u00e0 revoir.' },
  { name: 'Taux de r\u00e9ponse', target: '15\u201335\u00a0%', desc: 'Pourcentage de prospects qui r\u00e9pondent au premier message. Si un seul chiffre doit guider vos d\u00e9cisions, c\u2019est celui-l\u00e0.' },
  { name: 'Taux de conversion en RDV', target: '8\u201315\u00a0%', desc: 'Pourcentage de conversations qui aboutissent \u00e0 un rendez-vous dans l\u2019agenda. En dessous de 5\u00a0%, le probl\u00e8me est dans le suivi.' },
  { name: 'RDV qualifi\u00e9s / mois', target: '8\u201315', desc: 'Nombre de rendez-vous o\u00f9 le prospect correspond au profil cible et a un besoin identifi\u00e9. C\u2019est la m\u00e9trique finale.' },
  { name: 'Co\u00fbt par RDV qualifi\u00e9', target: '50\u2013100\u00a0\u20ac', desc: 'Le budget mensuel divis\u00e9 par le nombre de RDV qualifi\u00e9s. Permet de comparer le setting avec d\u2019autres canaux (ads, cold email, salons).' },
  { name: 'D\u00e9lai moyen signal \u2192 RDV', target: '7\u201321 jours', desc: 'Le temps entre la d\u00e9tection du signal d\u2019achat et le rendez-vous. Plus c\u2019est court, plus le pipeline est r\u00e9actif.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInDefinitionPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide complet
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn : d&eacute;finition, m&eacute;thode et exemples concrets
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Qu&rsquo;est-ce que le setting LinkedIn, comment &ccedil;a fonctionne, et pourquoi
              de plus en plus de fondateurs B2B l&rsquo;utilisent &agrave; la place du cold outreach.
              D&eacute;finition, &eacute;tapes, scripts, outils, KPIs et erreurs &agrave; &eacute;viter.
            </p>
            <AuthorBlock date="2026-03-25" readTime="18 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p>
              Le <strong className="text-text-primary">setting LinkedIn</strong> consiste &agrave;
              d&eacute;tecter les signaux d&rsquo;achat sur LinkedIn (likes, changements de poste, commentaires),
              puis &agrave; engager le prospect avec un message personnalis&eacute; et valid&eacute; par un humain.
              Taux de r&eacute;ponse : 15&ndash;35&nbsp;% contre 2&ndash;5&nbsp;% en cold outreach.
              R&eacute;sultat : 8 &agrave; 15 RDV qualifi&eacute;s par mois en r&eacute;gime de croisi&egrave;re.
            </p>
          </TldrBox>

          {/* Definition Block */}
          <div data-speakable="true" className="definition-block border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>setting LinkedIn</strong> est une m&eacute;thode de prospection B2B qui consiste &agrave;
              d&eacute;tecter les <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signaux d&rsquo;achat</a> sur
              LinkedIn, puis &agrave; engager une conversation personnalis&eacute;e avec le prospect.
              Contrairement au cold outreach classique, le setting repose sur un &eacute;change
              progressif, une co-r&eacute;daction IA des messages et une validation humaine avant chaque envoi.
              L&rsquo;objectif : des rendez-vous qualifi&eacute;s, pas du volume.
            </p>
          </div>


          {/* Section 1 — Origines */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              D&rsquo;o&ugrave; vient le terme &laquo;&nbsp;setting&nbsp;&raquo; ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le mot vient du vocabulaire commercial anglophone : &laquo;&nbsp;to set
              an appointment&nbsp;&raquo;, c&rsquo;est-&agrave;-dire fixer un rendez-vous. Le <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter</a> est
              le commercial qui ouvre la porte. Il ne vend pas, il qualifie et d&eacute;croche le cr&eacute;neau.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Sur LinkedIn, le setting a pris une dimension sp&eacute;cifique. La plateforme concentre
              les d&eacute;cideurs B2B, les signaux d&rsquo;achat sont visibles (r&eacute;actions, changements de poste,
              publications), et la messagerie permet un contact direct sans passer par un standard
              ou un filtre email.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le <strong className="text-text-primary">setting LinkedIn</strong> d&eacute;signe donc la pratique
              de combiner l&rsquo;observation de ces signaux avec une prise de contact
              personnalis&eacute;e et progressive. C&rsquo;est la zone entre la visibilit&eacute; et la vente :
              le prospect a montr&eacute; un int&eacute;r&ecirc;t, mais il n&rsquo;est pas encore pr&ecirc;t &agrave; acheter.
              Le setting l&rsquo;accompagne jusqu&rsquo;au rendez-vous.
            </p>
          </section>


          {/* Section 2 — Setting vs Cold Outreach */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setting LinkedIn vs cold outreach : quelles diff&eacute;rences ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La confusion est fr&eacute;quente. Les deux utilisent LinkedIn pour contacter des prospects.
              Mais la logique est oppos&eacute;e.
            </p>

            {/* Comparison table */}
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
                  {comparisons.map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04]">
                      <td className="font-sans font-semibold text-text-primary py-3 pr-4">{row.criteria}</td>
                      <td className="font-sans text-text-secondary py-3 pr-4">{row.setting}</td>
                      <td className="font-sans text-text-secondary py-3">{row.cold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Le cold outreach mise sur le volume. Le setting LinkedIn mise sur la pertinence.
              Avec moins de messages, il g&eacute;n&egrave;re plus de rendez-vous qualifi&eacute;s, sans risque de ban
              et sans d&eacute;grader votre image sur la plateforme.
              Pour aller plus loin :{' '}
              <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline transition-colors">
                setting humain vs automatisation LinkedIn
              </a>.
            </p>
            <p className="text-sm text-text-muted italic mt-2">
              Pour aller plus loin : <a href="/ressources/social-selling-linkedin-b2b" className="text-accent hover:underline">Social selling LinkedIn : d&eacute;finition et m&eacute;thode</a>
            </p>
          </section>


          {/* Section 3 — Réactif vs Proactif */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setting r&eacute;actif vs setting proactif
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Tous les signaux d&rsquo;achat ne se valent pas. On distingue deux approches
              de setting LinkedIn, et les meilleurs pipelines combinent les deux.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {/* Réactif */}
              <div className="bg-emerald-400/[0.03] border border-emerald-400/10 rounded-2xl p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                  Setting r&eacute;actif
                </p>
                <p className="font-sans font-semibold text-text-primary mb-2">Le prospect vient &agrave; vous</p>
                <ul className="font-sans text-text-secondary text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Like ou commentaire sur votre post</li>
                  <li>&bull; Visite de votre profil</li>
                  <li>&bull; Demande de connexion entrante</li>
                  <li>&bull; R&eacute;action &agrave; votre article ou newsletter</li>
                </ul>
                <p className="font-sans text-emerald-400 text-sm font-semibold mt-3">
                  Taux de r&eacute;ponse : 25&ndash;40&nbsp;%
                </p>
              </div>

              {/* Proactif */}
              <div className="bg-accent/[0.03] border border-accent/10 rounded-2xl p-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent/60 mb-3">
                  Setting proactif
                </p>
                <p className="font-sans font-semibold text-text-primary mb-2">Vous allez vers le prospect</p>
                <ul className="font-sans text-text-secondary text-sm leading-relaxed space-y-1.5">
                  <li>&bull; Changement de poste d&eacute;tect&eacute;</li>
                  <li>&bull; Lev&eacute;e de fonds annonc&eacute;e</li>
                  <li>&bull; Recrutement d&rsquo;un commercial publi&eacute;</li>
                  <li>&bull; Interaction sur un post concurrent</li>
                </ul>
                <p className="font-sans text-accent/80 text-sm font-semibold mt-3">
                  Taux de r&eacute;ponse : 12&ndash;25&nbsp;%
                </p>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Le r&eacute;actif convertit mieux parce que le prospect a d&eacute;j&agrave; fait un pas vers vous.
              Le proactif g&eacute;n&egrave;re plus de volume parce que vous n&rsquo;attendez pas que le signal vienne.
              Chez Setting, chaque pipeline combine les deux : le r&eacute;actif remplit la semaine, le proactif
              comble les creux.
              Pour comprendre les signaux en d&eacute;tail :{' '}
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">
                c&rsquo;est quoi un signal d&rsquo;achat LinkedIn ?
              </a>
            </p>
          </section>


          {/* Section 4 — Les 5 étapes */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 &eacute;tapes du setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Le setting LinkedIn suit une logique pr&eacute;cise.
              Chez Setting, on le d&eacute;coupe en <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">9 &eacute;tapes d&eacute;taill&eacute;es</a>,
              mais le principe tient en 5 phases.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 font-mono text-sm font-bold text-accent shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{step.title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/[0.03] border border-accent/10 rounded-xl px-5 py-4 mt-8">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="font-semibold text-accent">En pratique :</span> ces 5 &eacute;tapes
                se r&eacute;p&egrave;tent chaque semaine. Le scoring s&rsquo;affine avec les retours terrain.
                Au bout de 2 mois, le syst&egrave;me conna&icirc;t vos prospects mieux qu&rsquo;un commercial
                qui d&eacute;barque.{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">
                  Voir notre m&eacute;thode compl&egrave;te en 9 &eacute;tapes &rarr;
                </a>
              </p>
            </div>
            <p className="text-sm text-text-muted italic mt-2">
              Pour aller plus loin : <a href="/ressources/comment-prospecter-sur-linkedin" className="text-accent hover:underline">Comment prospecter sur LinkedIn en 2026</a>
            </p>
          </section>


          {/* Section 5 — Scripts de messages */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              6 scripts de messages de setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un bon message de setting LinkedIn respecte 3 r&egrave;gles :
              5 phrases maximum, la 2e phrase cite un fait pr&eacute;cis du profil,
              et il n&rsquo;y a aucun pitch.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Ci-dessous, 6 scripts class&eacute;s par type de signal.
            </p>

            {/* Bad example first */}
            <div className="mb-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-2">
                &times; Message g&eacute;n&eacute;rique (cold outreach)
              </p>
              <div className="bg-red-400/[0.03] border border-red-400/10 rounded-xl px-5 py-4">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">
                  &laquo;&nbsp;Bonjour [Pr&eacute;nom], j&rsquo;ai vu votre profil et je pense que notre solution
                  pourrait vous int&eacute;resser. On aide les entreprises B2B &agrave; g&eacute;n&eacute;rer plus de leads.
                  Seriez-vous disponible pour un call de 15 min ?&nbsp;&raquo;
                </p>
              </div>
            </div>

            {/* 6 scripts */}
            <div className="space-y-6">
              {messageScripts.map((script, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-accent/10 font-mono text-xs font-bold text-accent shrink-0">
                      {i + 1}
                    </span>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                      {script.signal}
                    </p>
                  </div>
                  <p className="font-sans text-text-muted text-xs mb-3">{script.context}</p>
                  <div className="bg-emerald-400/[0.03] border border-emerald-400/10 rounded-xl px-4 py-3">
                    <p className="font-sans text-text-secondary text-sm leading-relaxed italic">
                      &laquo;&nbsp;{script.message}&nbsp;&raquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Le point commun : chaque message cite un signal r&eacute;el, montre que le profil a &eacute;t&eacute; lu,
              et pose une question au lieu de pitcher.
              Pour d&rsquo;autres sc&eacute;narios :{' '}
              <a href="/ressources/script-setting-linkedin" className="text-accent hover:underline transition-colors">
                scripts de setting LinkedIn complets
              </a>.
            </p>
          </section>


          {/* Section 6 — Outils */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les outils du setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Pas besoin de 15 outils. Ces 5 couvrent
              l&rsquo;essentiel du pipeline, de la d&eacute;tection du signal au rendez-vous.
            </p>

            <div className="space-y-4">
              {tools.map((tool, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-sans font-semibold text-text-primary">{tool.name}</p>
                    <span className="font-sans text-xs text-text-muted">{tool.price}</span>
                  </div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    {tool.role}
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Pour un comparatif d&eacute;taill&eacute; :{' '}
              <a href="/externaliser-prospection-linkedin#outils" className="text-accent hover:underline transition-colors">
                outils du setting LinkedIn : Reactin, Make et BreakCold
              </a>.
            </p>
          </section>


          {/* Section 7 — KPIs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment mesurer les r&eacute;sultats du setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Pas de pilotage sans chiffres. 6 KPIs &agrave; suivre
              pour savoir si &ccedil;a marche, et o&ugrave; corriger le tir.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="font-sans font-semibold text-text-muted text-left py-3 pr-4">KPI</th>
                    <th className="font-sans font-semibold text-accent text-left py-3 pr-4">Cible</th>
                    <th className="font-sans font-semibold text-text-muted text-left py-3">Que regarder</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((kpi, i) => (
                    <tr key={i} className="border-b border-white/[0.04]">
                      <td className="font-sans font-semibold text-text-primary py-3 pr-4">{kpi.name}</td>
                      <td className="font-sans text-accent py-3 pr-4 whitespace-nowrap">{kpi.target}</td>
                      <td className="font-sans text-text-secondary py-3">{kpi.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-accent/[0.03] border border-accent/10 rounded-xl px-5 py-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="font-semibold text-accent">Conseil :</span> mesurez ces KPIs chaque semaine
                pendant les 2 premiers mois. Apr&egrave;s, un suivi mensuel suffit.
                Le co&ucirc;t par RDV qualifi&eacute; est la m&eacute;trique qui permet de comparer le setting
                avec vos autres canaux (ads, cold email, salons).
                D&eacute;tail des{' '}
                <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline transition-colors">
                  guide complet du setter B2B
                </a>.
              </p>
            </div>
          </section>


          {/* Section 8 — Résultats concrets */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              R&eacute;sultats concrets : ce que donne le setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Les chiffres bougent d&rsquo;un secteur &agrave; l&rsquo;autre.
              Ce qu&rsquo;on observe en moyenne sur les campagnes
              qu&rsquo;on g&egrave;re chez Setting :
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              {[
                { value: '8\u201315', label: 'RDV qualifi\u00e9s / mois', sub: 'en r\u00e9gime de croisi\u00e8re' },
                { value: '21\u00a0j', label: 'D\u00e9lai moyen', sub: 'avant les premiers RDV' },
                { value: 'x3\u2013x5', label: 'ROI moyen', sub: 'sur 6 mois d\u2019accompagnement' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center">
                  <p className="font-mono text-2xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="font-sans text-sm font-semibold text-text-primary">{stat.label}</p>
                  <p className="font-sans text-xs text-text-muted mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un fondateur SaaS B2B avec un panier moyen de 5&nbsp;000&nbsp;&euro;/an
              qui signe 2 clients par mois via le setting LinkedIn g&eacute;n&egrave;re
              10&nbsp;000&nbsp;&euro; de MRR additionnel pour un investissement de 790&nbsp;&euro;/mois.
              C&rsquo;est un ROI de x12 sur la premi&egrave;re ann&eacute;e.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le setting LinkedIn donne ses meilleurs r&eacute;sultats
              quand le cycle de vente d&eacute;passe 30 jours et que le panier moyen d&eacute;passe 3&nbsp;000&nbsp;&euro;.
              En dessous, le cold email ou les ads sont souvent plus rentables.
            </p>
          </section>


          {/* Section 9 — Erreurs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 4 erreurs qui tuent votre setting LinkedIn
            </h2>

            <div className="space-y-4">
              {mistakes.map((mistake, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    <span className="text-red-400 mr-2">&times;</span>
                    {mistake.title}
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{mistake.desc}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Pour &eacute;viter ces pi&egrave;ges, chaque message doit passer par une relecture
              humaine avant envoi. C&rsquo;est ce qu&rsquo;on d&eacute;taille dans
              notre <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode de setting LinkedIn en 9 &eacute;tapes</a>.
            </p>
          </section>


          {/* Section 10 — Quand externaliser */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Quand externaliser son setting LinkedIn ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le setting LinkedIn prend du temps. D&eacute;tecter les signaux, analyser les profils,
              r&eacute;diger des messages personnalis&eacute;s, g&eacute;rer les relances : comptez 2 &agrave; 3 heures
              par jour pour un pipeline actif.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&rsquo;<a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">externalisation du setting LinkedIn</a> a
              du sens quand vous &ecirc;tes solopreneur, fondateur ou une &eacute;quipe sales r&eacute;duite qui pr&eacute;f&egrave;re
              se concentrer sur les appels de vente plut&ocirc;t que sur la prospection.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter externalis&eacute;</a> prend
              en charge tout le pipeline : de la d&eacute;tection du signal au rendez-vous dans votre agenda.
              Vous ne g&eacute;rez que les appels de vente.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              H&eacute;sitez entre une agence et un freelance ?{' '}
              <a href="/externaliser-prospection-linkedin#agence-vs-freelance" className="text-accent hover:underline transition-colors">
                Agence setting LinkedIn vs setter freelance
              </a>{' '}
              d&eacute;taille les crit&egrave;res de choix.
              Et si vous cherchez le bon prestataire :{' '}
              <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline transition-colors">
                devenir setter ou closer B2B
              </a>.
              Consultez nos <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs</a> pour
              en savoir plus.
            </p>
          </section>


          {/* Section 11 — FAQ */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fr&eacute;quentes sur le setting LinkedIn
            </h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    {item.question}
                  </p>
                  <p className="font-sans text-text-secondary leading-relaxed text-sm faq-answer">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>


          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/methode/setting-linkedin', label: 'Setting LinkedIn B2B : notre m\u00e9thode compl\u00e8te en 9 \u00e9tapes' },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : 6 exemples concrets' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/setting-humain-vs-automatisation-linkedin', label: 'Setting humain vs automatisation LinkedIn : le vrai comparatif' },
                { href: '/ressources/comment-devenir-setter-b2b', label: 'Devenir setter ou closer B2B : le guide complet' },
                { href: '/externaliser-prospection-linkedin#agence-vs-freelance', label: 'Agence setting LinkedIn vs setter freelance : le bon choix' },
                { href: '/externaliser-prospection-linkedin#outils', label: 'Outils du setting LinkedIn : Reactin, Make et BreakCold' },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: 'IA, m\u00e9thode et humain : les 3 couches du setting LinkedIn' },
                { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ?" },
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
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting LinkedIn
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Pr&ecirc;t &agrave; d&eacute;l&eacute;guer votre setting LinkedIn ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Setter d&eacute;di&eacute;, ciblage IA, validation humaine de chaque message.
              &Agrave; partir de 790&nbsp;&euro;/mois. Setup offert.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel d&eacute;couverte &rarr;
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
