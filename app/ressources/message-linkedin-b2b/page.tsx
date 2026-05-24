import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Message LinkedIn B2B outbound : la séquence en 5 phases (2026)',
  description:
    "Playbook outbound LinkedIn B2B : 4 sources de liste, 8 scénarios de M1, séquence chronologique en 5 phases (icebreaker, creusement, bascule call, relance, sortie propre). 80 % du résultat vient de la liste.",
  openGraph: {
    title: 'Message LinkedIn B2B outbound : la séquence en 5 phases (2026) | Setting',
    description:
      "Playbook outbound : 4 sources de liste, 8 scénarios de M1, séquence en 5 phases. La qualité de la liste fait 80 % du résultat.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/message-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/message-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/message-linkedin-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Message LinkedIn B2B outbound : la séquence en 5 phases (2026) | Setting',
    description: "4 sources de liste outbound, 8 scénarios de M1, séquence chronologique en 5 phases. La liste fait 80 % du résultat.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/message-linkedin-b2b',
  headline: 'Message LinkedIn B2B outbound : la séquence en 5 phases',
  description:
    "Playbook outbound LinkedIn B2B : 4 sources de liste, 8 scénarios de M1, séquence chronologique en 5 phases (Phase 0 liste, Phase 1 icebreaker, Phase 2 creusement, Phase 3 bascule call, Phase 4 relances, Phase 5 sortie propre).",
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
  datePublished: '2026-05-24',
  dateModified: '2026-05-24',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/message-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/message-linkedin-b2b',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Prospection LinkedIn',
  wordCount: 5400,
  about: [
    { '@type': 'Thing', name: 'Messages LinkedIn B2B' },
    { '@type': 'Thing', name: 'Prospection LinkedIn B2B' },
    { '@type': 'Thing', name: 'Modèles de messages B2B français' },
  ],
}

const faqItems = [
  {
    question: "Combien de phrases doit faire un premier message LinkedIn B2B ?",
    answer:
      "5 phrases maximum, idéalement 3 à 4. Au-delà, le prospect tronque sur mobile avant la fin. Et 60 % des messages LinkedIn sont lus sur mobile. Plus tu écris, moins on te lit.",
  },
  {
    question: "Faut-il tutoyer ou vouvoyer en prospection LinkedIn B2B ?",
    answer:
      "Tutoyer par défaut sur LinkedIn FR depuis 2024, sauf si ton offre est premium (5k€+) et ton ICP est dirigeant établi (50 ans+). Le tutoiement signale pair-à-pair, le vouvoiement signale prestataire-client. Aligne-toi sur ton positionnement, pas sur ton inconfort personnel.",
  },
  {
    question: "Quel est le bon délai entre un message LinkedIn et sa relance ?",
    answer:
      "5 à 7 jours minimum. En dessous, c'est de la pression. Au-dessus de 10 jours, le contexte est froid. Trois à sept jours est la fenêtre où le prospect se souvient de toi sans te trouver insistant.",
  },
  {
    question: "Combien de relances LinkedIn maximum sur un même prospect ?",
    answer:
      "Deux. Premier message + deux relances espacées de 5 à 7 jours = trois touches étalées sur deux à trois semaines. Plus, c'est du harcèlement et ça nuit à ta réputation LinkedIn (taux de blocage en hausse).",
  },
  {
    question: "Faut-il pitcher son offre dans le premier message LinkedIn ?",
    answer:
      "Non, jamais. Le premier message a un seul objectif : déclencher une réponse. Pas une vente. Pas un RDV. Une réponse. Le pitch vient après que le prospect ait exprimé une douleur ou demandé qui tu es.",
  },
  {
    question: "Que faire si mon message LinkedIn a été lu mais sans réponse ?",
    answer:
      "Attendre 3 à 5 jours, puis relancer avec un angle différent. Pas une reformulation du premier. Une nouvelle observation, une nouvelle question. La lecture sans réponse signifie souvent timing ou angle — rarement désintérêt total.",
  },
  {
    question: "Quel taux de réponse viser sur LinkedIn B2B en 2026 ?",
    answer:
      "15 à 35 % sur des séquences signal-based (ciblage chaud + personnalisation). 5 à 15 % en outbound froid bien ciblé. Sous 5 %, ton ciblage ou ton message est cassé. C'est le moment d'arrêter et d'auditer, pas de pousser le volume.",
  },
  {
    question: "Peut-on utiliser une IA pour rédiger des messages LinkedIn B2B ?",
    answer:
      "Oui, comme co-rédactrice. Pas comme rédactrice unique. L'IA propose une structure, l'humain valide chaque message avant envoi. L'automatisation pure (envoi sans relecture) plafonne à 2-5 % de réponse. La combinaison IA + validation humaine atteint 20-35 %.",
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
      name: 'Message LinkedIn B2B : 8 scénarios',
      item: 'https://www.setting.live/ressources/message-linkedin-b2b',
    },
  ],
}

interface Scenario {
  id: string
  number: string
  category: 'outbound' | 'warm' | 'inbound'
  sourceCode: 'A' | 'B' | 'C' | 'D' | 'cold' | 'referral' | 'inbound'
  title: string
  source: string
  responseRate: string
  angle: string
  rule: string
  pitfall: string
}

const scenarios: Scenario[] = [
  {
    id: 'audience-concurrent',
    number: '1',
    category: 'outbound',
    sourceCode: 'A',
    title: "Audience scrapée d'un compte concurrent",
    source: "Liste extraite des followers / commentateurs / réacteurs d'un compte LinkedIn qui parle au même ICP que toi. Source de liste A.",
    responseRate: '10 à 18 %',
    angle: "Rebondir uniquement sur un élément public et statique du profil (boîte, rôle, produit, post de plus de 7 jours). Jamais sur ses interactions ailleurs. Si le profil est creux et qu'il n'y a rien d'exploitable hors signal d'audience, tu sautes ce profil.",
    rule: "Le compte de référence d'où vient ta liste n'existe pas dans ton message. Ni nommé, ni allusionné. Le prospect doit pouvoir lire ton message sans deviner où tu l'as trouvé.",
    pitfall: "Mentionner 'j'ai vu que tu suivais X' ou 'on s'est croisés dans la communauté Y'. Mort immédiate du message, même si X est un compte qu'il suit légitimement.",
  },
  {
    id: 'lead-magnet-commentateur',
    number: '2',
    category: 'outbound',
    sourceCode: 'B',
    title: "Commentateur d'un lead magnet concurrent",
    source: "Liste extraite des commentateurs d'un post concurrent qui propose une ressource (PDF, audit, template). Source de liste B.",
    responseRate: '15 à 25 %',
    angle: "Reprendre l'idée qu'il a exprimée dans son commentaire et le besoin sous-jacent (s'il demande une ressource, il a une douleur précise). Proposer un angle ou une ressource complémentaire qui répond à ce besoin, pas un pitch.",
    rule: "Le post lead magnet d'où tu l'as trouvé reste invisible. Tu ne dis pas 'j'ai vu que tu avais demandé le PDF de [X]'. Tu rebondis sur la douleur révélée, pas sur l'endroit où elle a été révélée.",
    pitfall: "Mentionner le post source ou le concurrent. Le prospect comprend instantanément que sa demande de ressource est traquée, il se sent espionné.",
  },
  {
    id: 'changement-poste',
    number: '3',
    category: 'outbound',
    sourceCode: 'C',
    title: 'Trigger Sales Nav — prise de poste récente (< 60 jours)',
    source: "Recherche Sales Navigator avec filtre 'changement de poste récent', ou alerte sur bandeau LinkedIn 'New job'. Source de liste C.",
    responseRate: '20 à 30 %',
    angle: "Reconnaître la prise de fonction en une phrase, puis pivoter immédiatement vers ce que les 90 premiers jours forcent à arbitrer dans son périmètre. Question ancrée sur le sujet précis que sa fonction touche.",
    rule: "La prise de poste est une fenêtre d'achat ouverte, pas un sujet de flagornerie. Tu nommes le contexte (la phase), pas le CV. Il le connaît mieux que toi.",
    pitfall: "Lui rappeler son parcours antérieur. Aucun nouveau dirigeant n'a envie qu'un inconnu lui résume ses 10 dernières années.",
  },
  {
    id: 'levee-fonds',
    number: '4',
    category: 'outbound',
    sourceCode: 'C',
    title: "Trigger — levée de fonds récente (< 90 jours)",
    source: "Crunchbase, Maddyness, Frenchweb, Pappers, bandeau LinkedIn 'just raised', communiqué corporate. Source de liste C.",
    responseRate: '12 à 25 %',
    angle: "La levée n'est jamais le sujet du message — c'est le déclencheur. Le sujet, c'est ce que la levée force à repenser dans son périmètre (changement d'échelle des objectifs, organisation, stack d'acquisition). Tu pivotes en une phrase.",
    rule: "Tu ne félicites pas pour féliciter. Tu félicites pour transitionner vers le chantier que la levée vient d'ouvrir.",
    pitfall: "Félicitation seule sans pivot. Une félicitation isolée sonne exactement comme un commercial qui a vu passer Crunchbase ce matin.",
  },
  {
    id: 'participant-event',
    number: '5',
    category: 'outbound',
    sourceCode: 'D',
    title: "Participant à un événement vertical (webinar, conférence)",
    source: "Liste des inscrits / participants à un événement professionnel ciblé, ou commentateurs d'un post communautaire vertical. Source de liste D.",
    responseRate: '15 à 25 %',
    angle: "Rebondir sur le sujet précis de l'événement, en supposant qu'il s'y est intéressé pour une raison concrète liée à son périmètre actuel. Question qui creuse le 'pourquoi tu y étais' sans le dire frontalement.",
    rule: "L'événement est légitime à mentionner s'il était public, le sujet de l'événement est le déclencheur naturel de ta question. Mais si la liste vient d'un scraping non-public, l'événement reste invisible et tu rebondis sur autre chose.",
    pitfall: "Lui dire 'j'ai vu que tu étais inscrit à [événement]' si tu as scrapé la liste. Mentionner uniquement les événements publics et nommés.",
  },
  {
    id: 'cold-icp-fort',
    number: '6',
    category: 'outbound',
    sourceCode: 'cold',
    title: "Cold pur — ICP qui match fort mais aucun signal",
    source: "Ciblage Sales Navigator sur ICP précis (poste + secteur + taille), sans déclencheur ni signal d'intérêt. À utiliser en complément des sources signalées, pas en source principale.",
    responseRate: '8 à 15 %',
    angle: "Assumer le cold. Ouvrir par un insight contre-intuitif vérifiable sur son secteur, pas par une question ouverte vide. Mentionner explicitement 'sans pitch' ou 'pas un argumentaire' pour désamorcer l'attente.",
    rule: "Sans signal pour t'ancrer, ton seul levier est la valeur de ton observation. Si l'insight est faible ou générique, le message est mort. Mieux vaut ne pas envoyer.",
    pitfall: "Démarrer par 'quels sont tes enjeux pour 2026' ou équivalent. La question vide en cold = 0 réponse.",
  },
  {
    id: 'recommandation',
    number: '7',
    category: 'warm',
    sourceCode: 'referral',
    title: "Recommandation — présenté par une connexion commune",
    source: "Présentation par mail/Slack d'un client ou partenaire, ou intro indirecte via post LinkedIn liké des deux côtés. Le warm referral est techniquement de l'inbound — il est ici parce qu'il est rare et précieux.",
    responseRate: '35 à 50 %',
    angle: "Citer la connexion par son nom dès la première phrase, en précisant POURQUOI elle t'a recommandé. Poser l'alternative de créneau directement dans le M1 — pas un 'tu serais dispo ?' qui invite le non.",
    rule: "Le social proof par nom écrase tout le reste, ne le gaspille pas avec un message tiède. C'est le seul scénario où proposer le call dès le M1 est légitime.",
    pitfall: "Citer la connexion sans expliquer le pourquoi. La précision sur la raison de la recommandation est ce qui transforme le name-dropping en légitimité.",
  },
  {
    id: 'reaction-post',
    number: '8',
    category: 'inbound',
    sourceCode: 'inbound',
    title: "Inbound — le prospect a réagi à un de tes posts",
    source: "Notification LinkedIn directe ces 7 derniers jours : like, commentaire, partage sur ton contenu. Source inbound — pas outbound stricto sensu, mais traité ici car la mécanique de M1 reste proche.",
    responseRate: '30 à 40 %',
    angle: "Reprendre la pensée qu'il a exprimée (le fond du commentaire, l'angle du like), pas le geste. Question semi-fermée qui interroge la cohérence entre sa réaction et sa situation actuelle.",
    rule: "Tu remercies une idée précise, pas un comportement. Tu ne lui dis pas qu'il commente, qu'il like, qu'il est actif — tu rebondis sur ce qu'il pense, pas sur ce qu'il fait.",
    pitfall: "Dire 'merci pour ton like' ou 'merci d'avoir réagi'. C'est un signal voyeur sur le comportement, ça déclenche un réflexe de défense.",
  },
]

const errors = [
  {
    title: "1. Le 'Bonjour Prénom, j'espère que tu vas bien'",
    why: "Aucune information dans cette ligne. Le prospect a vu 200 fois la même ouverture. Son cerveau zappe avant même de lire la suite. Tu brûles ta première phrase — la seule qui décide si la suivante sera lue.",
    fix: "Commence par un fait précis tiré de son profil. Une phrase qui ne pourrait s'écrire qu'à propos de lui.",
  },
  {
    title: "2. Le 'J'ai vu que tu étais actif sur LinkedIn'",
    why: "Tu sonnes voyeur. Le prospect comprend que tu as scrollé son fil, peut-être stalké ses likes. Réflexe de défense immédiat. Surtout si tu l'as trouvé via une audience scrapée.",
    fix: "Rebondis sur un élément public et statique : sa boîte, son rôle, son produit, un post précis daté de moins de 7 jours.",
  },
  {
    title: "3. La double question",
    why: "Deux questions dans le même message = le prospect ne répond à aucune. C'est trop d'effort cognitif pour ouvrir un échange avec un inconnu.",
    fix: "Une seule question. Semi-fermée (oui/non/A ou B suffit pour répondre). Tu approfondiras au message suivant, pas au premier.",
  },
  {
    title: "4. Le pitch dans le premier message",
    why: "Tu mets ton offre, ton prix, ton calendly dans la première phrase. Le prospect lit 'pub' et ferme. Un premier message qui pitche convertit à 1-3 %.",
    fix: "Le premier message n'a qu'un job : déclencher une réponse. Pas un RDV. Pas une vente. Une réponse.",
  },
  {
    title: "5. Le 'N'hésite pas si tu as des questions'",
    why: "Phrase de politesse vide qui décharge le prospect de toute responsabilité. Tu lui demandes implicitement de faire l'effort. Personne ne se sent obligé d'hésiter ou de ne pas hésiter.",
    fix: "Termine par une question claire qui appelle une réponse en une phrase. Pas de portes de sortie polies.",
  },
  {
    title: "6. Trois relances ou plus",
    why: "Au-delà de deux relances après le premier message, tu passes du prospect intéressé au harceleur. Taux de blocage en hausse, réputation LinkedIn dégradée. Et tes futurs messages passent en spam pour les autres aussi.",
    fix: "Premier message + deux relances espacées de 5 à 7 jours, puis sortie propre. Total : trois touches. Jamais plus.",
  },
  {
    title: "7. Le copier-coller détectable",
    why: "Si tu peux envoyer ton message à 10 personnes en changeant juste le prénom, c'est un template. Le prospect le sent en 3 secondes. Réponse : 2 %.",
    fix: "Avant d'envoyer, fais le test : 'aurais-je pu écrire ce message sans ouvrir son profil ?' Si oui, recommence. La 2e phrase doit être impossible à recycler.",
  },
]

const mirrorArchetypes = [
  {
    label: "Fondateur dépendant de son opérationnel",
    tension: "Faire choisir entre « le business tourne autour de moi » et « le business tourne sans moi ». La douleur est la dépendance personnelle au quotidien.",
  },
  {
    label: "Phase de plateau de croissance",
    tension: "Faire choisir entre « pousser le CA » et « libérer du temps ». Ces deux objectifs sont rarement compatibles à court terme — l'arbitrage révèle où il en est mentalement.",
  },
  {
    label: "Pipeline irrégulier",
    tension: "Faire émerger la distinction entre flux d'efforts personnels (« quand je m'y mets ça marche ») et système qui produit sans intervention. La douleur est l'absence de système.",
  },
  {
    label: "Cycle de vente long et flou",
    tension: "Faire choisir entre objection « prix » et objection « gouvernance/décision interne ». Deux problèmes qui se traitent à la racine de manière opposée.",
  },
  {
    label: "Setter/SDR interne en sous-performance",
    tension: "Faire choisir entre problème de volume sortant et problème de conversion en RDV. Distinction critique parce qu'elle pointe vers deux remèdes opposés.",
  },
  {
    label: "Solo qui scale",
    tension: "Faire choisir entre « je construis l'équipe » et « je fais tout moi-même ». L'admission de l'un ou l'autre engage la conversation suivante.",
  },
]

const listSources = [
  {
    code: 'A',
    title: "Audience scrapée d'un compte concurrent",
    what: "Followers actifs, commentateurs et personnes ayant réagi récemment aux posts d'un acteur du marché qui parle au même ICP que toi.",
    why: "Le prospect a déjà manifesté un intérêt pour la thématique. Tu n'as pas à lui vendre le sujet — il s'y intéresse déjà. Tu n'as plus qu'à lui proposer un angle différent.",
    quality: "Élevée si le compte cible parle exactement à ton ICP. Médiocre si l'audience est trop générale (ex : Gary Vee suivi par tout le monde).",
    tooling: "Phantombuster, Captain Data, Evaboot — extraction des likers / commentateurs d'un post LinkedIn.",
  },
  {
    code: 'B',
    title: "Commentateurs d'un lead magnet concurrent",
    what: "Personnes qui ont commenté un post LinkedIn d'un concurrent qui propose un PDF, un audit gratuit, un template à télécharger.",
    why: "Le prospect ne s'est pas juste intéressé au sujet — il a manifesté un besoin précis assez fort pour demander une ressource. Maturité d'intention bien plus élevée que l'audience générique.",
    quality: "Très élevée. C'est souvent la meilleure source outbound disponible en 2026.",
    tooling: "Surveillance manuelle des posts lead-magnet de concurrents + scraping Phantombuster sur les commentaires.",
  },
  {
    code: 'C',
    title: "Sales Navigator + triggers",
    what: "Recherche Sales Nav croisée avec un déclencheur récent : changement de poste, levée de fonds, recrutement annoncé, prise de fonction.",
    why: "Le déclencheur crée une fenêtre d'achat ouverte. Quelqu'un qui vient de prendre un poste va revoir sa stack. Quelqu'un qui vient de lever va scaler. Ces moments sont mécaniques, pas hypothétiques.",
    quality: "Haute pour les triggers récents (< 60 jours). Faible au-delà — la fenêtre se referme.",
    tooling: "Sales Navigator filtres avancés + alertes Crunchbase / Maddyness / Frenchweb / Pappers pour les levées.",
  },
  {
    code: 'D',
    title: "Participants à un événement vertical",
    what: "Liste des participants à un webinar, une conférence, un meetup, ou commentateurs d'un post communautaire ciblé.",
    why: "Le prospect a consacré 30 à 90 minutes de son temps à creuser un sujet. Niveau d'engagement bien au-dessus du like passif. Le sujet de l'événement est aussi un déclencheur clair.",
    quality: "Haute si l'événement est vertical et récent (< 30 jours). Décroît vite.",
    tooling: "Pages d'inscription événements + scraping commentateurs de posts événementiels.",
  },
]

const listAntipatterns = [
  "« Tous les CEO ». Sans secteur, sans taille d'entreprise, sans déclencheur. La densité d'intérêt sera proche de zéro.",
  "« Toute la tech ». Sans poste précis, tu mélanges décideur et IC. Le décideur ne te lit pas si tu écris comme à un IC.",
  "Listes achetées Apollo / Cognism sans vérification d'activité LinkedIn récente. 30 à 50 % des profils sont inactifs depuis 12 mois.",
  "Profils sans activité publique visible (zéro post, zéro commentaire récent). Aucun signal exploitable = retour direct sur fallback générique.",
  "Listes scrapées sur un compte tiers que tu n'as pas validé manuellement. Le compte cible doit lui-même parler à ton ICP, sinon tu importes son bruit.",
  "Plus de 500 leads/semaine. Au-delà, tu ne peux plus personnaliser. Tu retombes sur du template, et le taux de réponse s'effondre.",
]

export default function MessageLinkedInB2BPage() {
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
              <li className="text-text-primary">Message LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection LinkedIn
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Message LinkedIn B2B outbound&nbsp;: la séquence en 5 phases (2026)
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              En outbound, 80&nbsp;% du résultat vient de la liste, 20&nbsp;% du message. Cet article donne le playbook complet&nbsp;: les 4 sources de liste qui marchent en 2026, les 8 scénarios de M1 selon la source, et la chronologie en 5 phases (icebreaker, creusement, bascule au call, relances, sortie propre).
            </p>
            <AuthorBlock date="2026-05-24" readTime="14 min de lecture" dateLabel="24 mai 2026" />
          </header>

          <TldrBox>
            <p className="tldr">
              <strong>La règle 80/20 de l&apos;outbound&nbsp;:</strong> la qualité de la liste fait 80&nbsp;% du résultat, le message les 20&nbsp;% restants. Un message parfait sur une liste générique convertit à 2&nbsp;%. Un message correct sur une liste précisément segmentée convertit à 25&nbsp;%. Avant d&apos;optimiser ton message, optimise ta liste.
            </p>
            <p className="tldr">
              <strong>Les 5 phases d&apos;une séquence&nbsp;:</strong> (0) construire la liste, (1) M1 / icebreaker, (2) lire la réponse + creuser si signal faible, (3) basculer au call si signal fort, (4) relancer si silence, (5) sortir proprement après 3 touches. C&apos;est un arbre de décision, pas une route droite.
            </p>
            <p className="tldr">
              <strong>Le test critique avant chaque envoi&nbsp;:</strong> «&nbsp;aurais-je pu écrire ce message sans ouvrir son profil&nbsp;?&nbsp;». Si oui, c&apos;est un template. Recommence. La 2<sup>e</sup> phrase doit être impossible à recycler sur quelqu&apos;un d&apos;autre.
            </p>
          </TldrBox>

          <article className="prose-content space-y-12">

            {/* Section 1 — Les 7 erreurs */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 7 erreurs qui tuent ton taux de réponse</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Avant de chercher des scripts, identifie ce qui te plombe. Sur 100 messages LinkedIn B2B qui n'obtiennent jamais de réponse, 80 cumulent au moins trois des erreurs suivantes. Si tu en élimines deux, ton taux peut doubler sans changer ton ciblage.
              </p>
              <div className="space-y-6">
                {errors.map((err, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-sans font-bold text-text-primary text-base mb-2">{err.title}</h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                      <strong className="text-text-primary">Pourquoi ça tue&nbsp;:</strong> {err.why}
                    </p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">
                      <strong className="text-text-primary">Fix&nbsp;:</strong> {err.fix}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 — Le cycle complet (chronologie visuelle) */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Le cycle complet en un coup d&apos;œil</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Une séquence outbound LinkedIn n&apos;est pas une route droite. C&apos;est un arbre de décision&nbsp;: chaque réponse du prospect ouvre une branche différente. La carte ci-dessous donne la chronologie de toutes les branches possibles, des sources de liste au RDV ou à la sortie propre.
              </p>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-5 font-sans text-sm text-text-secondary leading-relaxed">
                <div className="rounded-lg border border-accent/30 bg-accent/[0.04] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">Phase 0 &mdash; Avant tout envoi</p>
                  <p><strong className="text-text-primary">Construire la liste.</strong> 30 à 100 leads par semaine, segmentés par maturité de signal. C&apos;est ici que se joue 80&nbsp;% du résultat.</p>
                </div>
                <div className="text-center text-text-muted text-lg">&darr;</div>
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Phase 1 &mdash; J0</p>
                  <p><strong className="text-text-primary">M1 / Icebreaker.</strong> Premier message, 5 phrases max, une seule question. 8 scénarios possibles selon la source.</p>
                </div>
                <div className="text-center text-text-muted text-lg">&darr; La réponse arrive (ou pas)</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-green-500/20 bg-green-500/[0.03] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-1">Signal fort</p>
                    <p className="text-xs">Il exprime un problème concret ou ouvre une porte sur ses enjeux.</p>
                    <p className="text-xs mt-2 text-text-muted">&rarr; Phase 3 (call)</p>
                  </div>
                  <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/[0.03] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-yellow-400 mb-1">Signal faible</p>
                    <p className="text-xs">Réponse polie de surface («&nbsp;merci, intéressant&nbsp;»), pas d&apos;ouverture sur le fond.</p>
                    <p className="text-xs mt-2 text-text-muted">&rarr; Phase 2 (creuser)</p>
                  </div>
                  <div className="rounded-lg border border-text-muted/20 bg-white/[0.02] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Silence</p>
                    <p className="text-xs">Aucune réponse après 5 à 7 jours.</p>
                    <p className="text-xs mt-2 text-text-muted">&rarr; Phase 4 (relance)</p>
                  </div>
                </div>
                <div className="text-center text-text-muted text-lg">&darr;</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="rounded-lg border border-green-500/15 bg-green-500/[0.02] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Phase 3 &mdash; M3</p>
                    <p className="text-xs">Bascule au call. Reformulation avec ses mots, alternative positive.</p>
                  </div>
                  <div className="rounded-lg border border-yellow-500/15 bg-yellow-500/[0.02] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Phase 2 &mdash; M2</p>
                    <p className="text-xs">Question miroir sèche sur sa douleur dominante. Puis Phase 3 si signal fort, Phase 5 sinon.</p>
                  </div>
                  <div className="rounded-lg border border-text-muted/15 bg-white/[0.01] p-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Phase 4 &mdash; Relances</p>
                    <p className="text-xs">J+5-7 nouvel angle, J+12-14 dernière. Max 3 touches au total.</p>
                  </div>
                </div>
                <div className="text-center text-text-muted text-lg">&darr;</div>
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-1">Phase 5 &mdash; Sortie propre</p>
                  <p><strong className="text-text-primary">Fermeture sobre.</strong> L&apos;explicite, la porte ouverte, le ton calme. C&apos;est ce qui préserve la possibilité d&apos;un retour 6 mois plus tard.</p>
                </div>
              </div>
            </section>

            {/* Phase 0 — La liste */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 0 &mdash; La liste (80&nbsp;% du résultat est ici)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                En outbound, le message est la conséquence de la liste, jamais l&apos;inverse. Un message moyen sur une liste excellente convertit mieux qu&apos;un message excellent sur une liste générique. Cinq décisions à prendre <em>avant</em> de toucher au clavier.
              </p>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">1. L&apos;ICP n&apos;est pas un poste</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-2">
                Un ICP utilisable en outbound n&apos;est pas «&nbsp;les CEO&nbsp;» ou «&nbsp;les founders B2B&nbsp;». C&apos;est un faisceau croisé de critères&nbsp;:
              </p>
              <ul className="font-sans text-text-secondary text-base leading-relaxed space-y-1 list-disc pl-5 mb-4">
                <li>Rôle précis (CEO ne suffit pas&nbsp;: CEO solo, CEO d&apos;équipe 5-15, CEO d&apos;équipe 50+ sont 3 cibles différentes).</li>
                <li>Secteur d&apos;activité (B2B services, SaaS, conseil, formation, e-commerce&hellip;).</li>
                <li>Taille d&apos;entreprise (chiffre d&apos;affaires ou effectif).</li>
                <li>Un déclencheur récent ou un signe d&apos;intérêt observable (post sur la thématique, recrutement annoncé, levée).</li>
              </ul>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Plus tu croises de critères, plus ta liste rétrécit, plus ton taux de réponse monte. C&apos;est une équation. Pas une opinion.
              </p>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">2. Les 4 sources outbound qui marchent en 2026</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Toutes les sources de liste ne se valent pas. Voici les quatre qui produisent un taux de réponse exploitable aujourd&apos;hui, classées par densité d&apos;intention (la maturité du signal que la source révèle).
              </p>
              <div className="space-y-4">
                {listSources.map((s) => (
                  <div key={s.code} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="mb-2">
                      <span className="inline-block font-mono text-xs font-bold text-accent mb-1">Source {s.code}</span>
                      <h4 className="font-sans font-bold text-text-primary text-base">{s.title}</h4>
                    </div>
                    <div className="space-y-2 text-sm font-sans text-text-secondary leading-relaxed">
                      <p><strong className="text-text-primary">Ce que c&apos;est.</strong> {s.what}</p>
                      <p><strong className="text-text-primary">Pourquoi ça marche.</strong> {s.why}</p>
                      <p><strong className="text-text-primary">Qualité de la source.</strong> {s.quality}</p>
                      <p className="text-text-muted text-xs"><strong className="text-text-secondary">Outils.</strong> {s.tooling}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">3. La segmentation par maturité du signal</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Une fois la liste constituée, elle se segmente en 3 paliers de maturité. Chaque palier appelle un angle de M1 différent. Mélanger les paliers dans une même séquence est l&apos;erreur la plus commune.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                <div className="rounded-lg border border-text-muted/20 bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">Froid</p>
                  <p className="text-sm text-text-secondary leading-relaxed">ICP qui match, aucun signal récent. Taux de réponse&nbsp;: 5 à 12&nbsp;%.</p>
                </div>
                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">Tiède</p>
                  <p className="text-sm text-text-secondary leading-relaxed">ICP + déclencheur statique (prise de poste, levée, recrutement). Taux&nbsp;: 12 à 25&nbsp;%.</p>
                </div>
                <div className="rounded-lg border border-green-500/20 bg-green-500/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-2">Chaud</p>
                  <p className="text-sm text-text-secondary leading-relaxed">ICP + signal d&apos;intérêt récent (commentaire, demande de ressource, engagement &lt; 7 jours). Taux&nbsp;: 25 à 40&nbsp;%.</p>
                </div>
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Règle&nbsp;: une liste de 100 leads froids produit moins de RDV qu&apos;une liste de 30 leads chauds. Le volume ne compense jamais l&apos;intention.
              </p>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">4. Le quota qui sauve la qualité</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Plafond hebdomadaire&nbsp;: 30 à 100 leads contactés. Au-delà, la personnalisation n&apos;est plus tenable, tu retombes mécaniquement sur du template, et le taux de réponse s&apos;effondre. LinkedIn lui-même limite les demandes de connexion à environ 100 par semaine pour les comptes normaux &mdash; un plafond technique qui double le plafond qualitatif.
              </p>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">5. Les anti-patterns qui détruisent une liste</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Six erreurs récurrentes qui transforment ta liste en source de gâchis&nbsp;:
              </p>
              <ul className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-disc pl-5">
                {listAntipatterns.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <h3 className="font-sans font-bold text-text-primary text-lg mt-8 mb-3">Le test critique avant chaque envoi</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Pour chaque profil de ta liste, une seule question&nbsp;: «&nbsp;ce profil a-t-il un signal exploitable visible publiquement&nbsp;?&nbsp;». Si non &mdash; profil sans activité récente, About vide, headline générique &mdash; deux options&nbsp;:
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-decimal pl-5">
                <li><strong className="text-text-primary">Skip le profil.</strong> Préférer 30 leads exploitables à 100 leads dont 70 forceront du générique.</li>
                <li><strong className="text-text-primary">Fallback générique sous quota strict.</strong> Si tu envoies un message générique sur un profil creux, garde ce fallback sous 10&nbsp;% de ton volume hebdo. Au-delà, ta réputation LinkedIn se dégrade et ton taux de réponse global chute.</li>
              </ol>
            </section>

            <CtaArticle variant="setting" />

            {/* Phase 1 — M1 / Icebreaker */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 1 &mdash; M1 / Icebreaker (J0)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Le M1 a un seul objectif&nbsp;: déclencher une réponse. Pas un RDV, pas une vente. Une réponse. Selon la source de ta liste (Phase 0), l&apos;angle d&apos;attaque change radicalement. Voici les 8 scénarios couvrant les sources A, B, C, D, le cold pur, le warm referral et l&apos;inbound.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Pour chaque scénario&nbsp;: la source précise, le taux de réponse moyen observé, l&apos;angle d&apos;attaque, la règle invisible et le piège qui tue ce type de message. Pas de message tout rédigé &mdash; ce sont des squelettes, pas des templates. Tu écris ton contenu spécifique à chaque envoi.
              </p>
              <div className="space-y-6">
                {scenarios.map((s) => (
                  <div key={s.id} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="mb-3 flex items-start gap-3 flex-wrap">
                      <div>
                        <span className="inline-block font-mono text-xs font-bold text-accent mb-1">Scénario {s.number}</span>
                        <h3 className="font-sans font-bold text-text-primary text-base">{s.title}</h3>
                      </div>
                      <span
                        className={
                          "ml-auto inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded " +
                          (s.category === 'outbound'
                            ? 'text-accent bg-accent/10 border border-accent/20'
                            : s.category === 'warm'
                              ? 'text-yellow-400 bg-yellow-500/10 border border-yellow-500/20'
                              : 'text-green-400 bg-green-500/10 border border-green-500/20')
                        }
                      >
                        {s.category}
                        {s.sourceCode && s.sourceCode.length === 1 ? ` · source ${s.sourceCode.toUpperCase()}` : ''}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4 text-xs font-sans text-text-muted">
                      <span><strong className="text-text-secondary">Source du lead&nbsp;:</strong> {s.source}</span>
                      <span><strong className="text-text-secondary">Taux de réponse moyen&nbsp;:</strong> {s.responseRate}</span>
                    </div>
                    <div className="space-y-3 text-sm font-sans text-text-secondary leading-relaxed">
                      <p>
                        <strong className="text-text-primary">L&apos;angle d&apos;attaque.</strong> {s.angle}
                      </p>
                      <p>
                        <strong className="text-text-primary">La règle invisible.</strong> {s.rule}
                      </p>
                      <p>
                        <strong className="text-text-primary">Le piège qui tue ce scénario.</strong> {s.pitfall}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Phase 2 — Lire + creuser */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 2 &mdash; Lire la réponse et creuser (M2)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                La réponse au M1 décide tout. Trois lectures possibles, trois branches différentes.
              </p>
              <div className="space-y-3 mb-8">
                <div className="rounded-lg border border-green-500/20 bg-green-500/[0.03] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-green-400 mb-2">Signal fort</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Le prospect cite un problème concret, exprime une douleur précise, demande explicitement comment tu peux aider. Tu sautes Phase 2 et passes directement Phase 3 (bascule au call).
                  </p>
                </div>
                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/[0.03] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-yellow-400 mb-2">Signal faible</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Réponse polie de surface («&nbsp;merci, intéressant&nbsp;», «&nbsp;je développe mon réseau&nbsp;»). Pas d&apos;ouverture sur le fond. Tu enchaînes avec une question miroir (voir ci-dessous).
                  </p>
                </div>
                <div className="rounded-lg border border-text-muted/20 bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">Silence</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Aucune réponse. Tu attends 5 à 7 jours puis passes Phase 4 (relance).
                  </p>
                </div>
              </div>

              <h3 className="font-sans font-bold text-text-primary text-lg mb-3">La question miroir &mdash; pour creuser un signal faible</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Une question miroir reflète la douleur dominante du prospect &mdash; pas une douleur générique, la sienne. Elle est sèche, semi-fermée, et elle fait que le prospect se reconnaît dans la formulation. Le réflexe alors est de répondre, parce que personne ne l&apos;avait jamais formulé comme ça.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Trois règles de construction&nbsp;: (1) jamais «&nbsp;quels sont tes enjeux pour 2026&nbsp;?&nbsp;» &mdash; vide, impossible à répondre en une ligne. (2) Toujours une question A ou B qui force le choix entre deux options observables dans son quotidien. (3) La question doit lui paraître évidente à formuler pour lui-même, mais étonnante à entendre de la part d&apos;un inconnu.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Six archétypes selon le pattern dominant du prospect. Pour chacun, la <strong className="text-text-primary">tension</strong> que ta question doit faire émerger &mdash; à toi de formuler la question dans ton vocabulaire et avec le contexte précis du prospect.
              </p>
              <div className="space-y-3">
                {mirrorArchetypes.map((a, i) => (
                  <div key={i} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="font-sans text-text-muted text-xs uppercase tracking-widest mb-2">{a.label}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">
                      <strong className="text-text-primary">La tension à mettre&nbsp;:</strong> {a.tension}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed mt-4">
                Sur-expliquer une question miroir la tue. Pas de «&nbsp;n&apos;hésite pas à&nbsp;», pas de «&nbsp;si tu veux on peut creuser&nbsp;». La question pose le sujet, le silence laisse la place à la réponse.
              </p>
            </section>

            {/* Phase 3 — Basculer au call */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 3 &mdash; Basculer au call (M3)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                La bascule au call n&apos;arrive qu&apos;après un signal fort &mdash; jamais sur un signal faible, jamais en cold. La proposer trop tôt casse la dynamique et fait chuter le taux de booking.
              </p>

              <h3 className="font-sans font-bold text-text-primary text-lg mb-3">Quand basculer</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Trois conditions cumulatives doivent être présentes&nbsp;:
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-decimal pl-5 mb-6">
                <li>Le prospect a exprimé une douleur concrète, avec SES mots (pas un vague «&nbsp;ouais c&apos;est un sujet&nbsp;»).</li>
                <li>Tu peux reformuler sa douleur dans une phrase qu&apos;il pourrait reconnaître comme la sienne.</li>
                <li>Il n&apos;a pas explicitement fermé la conversation («&nbsp;pas le bon timing&nbsp;», «&nbsp;pas mon focus&nbsp;»). Une douleur exprimée + aucun signe de fermeture = feu vert.</li>
              </ol>

              <h3 className="font-sans font-bold text-text-primary text-lg mb-3">Comment poser le créneau</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Trois règles non négociables pour la proposition de call&nbsp;:
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-decimal pl-5 mb-6">
                <li><strong className="text-text-primary">Reformulation avec ses mots.</strong> Tu reprends sa douleur en une phrase. Pas la tienne. Pas un slogan d&apos;offre. La sienne. Si tu n&apos;arrives pas à la reformuler, tu n&apos;es pas prêt à proposer le call &mdash; retour Phase 2.</li>
                <li><strong className="text-text-primary">Alternative positive.</strong> Jamais «&nbsp;tu serais dispo pour un call&nbsp;?&nbsp;» (invite le non). Toujours «&nbsp;visio ou téléphone&nbsp;?&nbsp;» ou «&nbsp;lundi ou jeudi&nbsp;?&nbsp;» &mdash; l&apos;alternative force un choix entre deux options, pas un oui/non.</li>
                <li><strong className="text-text-primary">Cadre court.</strong> 20 à 30 minutes, jamais 1 heure. Le cadre court réduit le coût d&apos;entrée et augmente le taux d&apos;acceptation.</li>
              </ol>

              <h3 className="font-sans font-bold text-text-primary text-lg mb-3">Le R1 réservé (une fois le créneau bloqué)</h3>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-3">
                Après acceptation, un dernier message court avec trois éléments&nbsp;:
              </p>
              <ul className="font-sans text-text-secondary text-base leading-relaxed space-y-2 list-disc pl-5">
                <li>Confirmation enthousiaste mais sobre (pas de sur-merci, pas de longue formule).</li>
                <li>Une ressource à consulter en attendant (page méthode, étude de cas, vidéo courte) &mdash; pour qu&apos;il arrive avec un contexte minimal et que l&apos;appel commence dans le vif.</li>
                <li>Un rappel discret d&apos;accepter l&apos;invitation calendrier (Cal.com / Calendly demandent souvent une confirmation manuelle).</li>
              </ul>
            </section>

            {/* Phase 4 — Relancer */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 4 &mdash; Relancer (si silence)</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Trois touches maximum, jamais plus. La règle existe parce que la 4<sup>e</sup> touche convertit moins de 1&nbsp;% et dégrade ta réputation LinkedIn pour les centaines de prospects suivants. Au-delà, tu n&apos;es plus relanceur, tu es harceleur.
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">J+5 à J+7 &mdash; Relance 1</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Nouvelle observation, nouvel angle. Tu ne reformules pas le M1, tu ouvres une porte différente. Tu peux ajouter de la valeur (un article, une donnée, une question latérale). Tu termines par «&nbsp;pas besoin de répondre si ce n&apos;est pas le bon moment&nbsp;» &mdash; ça réduit la pression et augmente paradoxalement le taux de réponse.
                  </p>
                </div>
                <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">J+12 à J+14 &mdash; Relance finale</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Tu fermes proprement. Tu dis explicitement que tu ne reviendras plus. Tu laisses une porte ouverte pour un retour à son initiative. Le ton est calme, jamais culpabilisant. Beaucoup de réponses arrivent à ce moment-là &mdash; les prospects qui repoussaient sans oser dire stop ouvrent enfin la conversation parce que tu as enlevé la pression. Cette touche enchaîne directement avec Phase 5 (sortie propre).
                  </p>
                </div>
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed mt-4">
                Règle absolue&nbsp;: chaque relance doit apporter une <strong className="text-text-primary">nouvelle observation</strong>, jamais une reformulation du message précédent. Si tu n&apos;as rien de nouveau à dire, tu ne relances pas &mdash; tu sors proprement.
              </p>
            </section>

            {/* Phase 5 — Sortie propre */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Phase 5 &mdash; Sortie propre</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Sortir proprement est aussi important qu&apos;ouvrir bien. Une fermeture insistante détruit la possibilité d&apos;un retour 6 mois plus tard. Une fermeture sobre la préserve.
              </p>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Trois éléments à tenir dans toute sortie, peu importe le canal&nbsp;:
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">L&apos;explicite.</strong> Tu nommes la fin. «&nbsp;Dernière relance&nbsp;», «&nbsp;je ne reviendrai plus&nbsp;» &mdash; l&apos;ambiguïté entretient une pression douce qui irrite. Le prospect te lit mieux si tu fermes clairement.
                </li>
                <li>
                  <strong className="text-text-primary">La porte ouverte.</strong> Sans pression, sans condition. Une phrase qui laisse la possibilité d&apos;un retour à son initiative dans les mois suivants. C&apos;est ce qui transforme un silence d&apos;aujourd&apos;hui en lead d&apos;ici 6 mois.
                </li>
                <li>
                  <strong className="text-text-primary">Le ton calme.</strong> Pas de reproche, pas de victimisation, pas de sarcasme passif. La sortie est le seul message dont la qualité ne se mesure pas en taux de réponse, mais en réputation. Et la réputation joue sur les 500 prospects suivants.
                </li>
              </ol>
              <p className="font-sans text-text-secondary text-base leading-relaxed mt-4">
                Beaucoup de réponses arrivent exactement à ce moment-là &mdash; les prospects qui repoussaient sans oser dire stop ouvrent enfin la conversation parce que tu as enlevé la pression. C&apos;est pour ça que la dernière touche compte autant que la première.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-6">Questions fréquentes</h2>
              <div className="space-y-6">
                {faqItems.map((item, i) => (
                  <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                      <h3 className="font-sans font-semibold text-text-primary text-base">{item.question}</h3>
                      <span className="text-text-muted text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="faq-answer mt-3 font-sans text-text-secondary text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Sources */}
            <section className="mt-16 pt-10 border-t border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Sources et études citées
              </p>
              <ul className="font-sans text-sm text-text-secondary leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  <strong className="text-text-primary">LinkedIn Sales Solutions — State of Sales Report.</strong>{' '}
                  Étude annuelle sur les pratiques de prospection LinkedIn B2B et les évolutions du social selling.{' '}
                  <a href="https://www.linkedin.com/business/sales/blog/sales-strategy/state-of-sales-report" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                    linkedin.com/business/sales/blog
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">HubSpot — Sales Statistics Report.</strong>{' '}
                  Statistiques annuelles sur les taux de réponse et les comportements de prospection B2B.{' '}
                  <a href="https://www.hubspot.com/state-of-sales" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                    hubspot.com/state-of-sales
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">Données internes Setting.live.</strong>{' '}
                  Statistiques agrégées sur 20+ clients B2B accompagnés en 2026 et 500+ campagnes de setting LinkedIn 2024-2026.{' '}
                  <a href="/resultats" className="text-accent hover:underline">
                    setting.live/resultats
                  </a>
                </li>
              </ul>
            </section>

            {/* Final CTA */}
            <section className="text-center py-6">
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Si tu veux que ces scénarios tournent dans ton pipeline sans que tu les écrives toi-même, on peut s&apos;en occuper.
              </p>
              <ButtonGlow as="a" href="/methode/setting-linkedin">
                Voir comment on bosse
              </ButtonGlow>
            </section>

          </article>

          {/* Related */}
          <RelatedArticles
            articles={[
              {
                href: '/ressources/script-linkedin-prospection',
                title: '10 scripts LinkedIn de prospection B2B (copier-coller)',
                readTime: '9 min de lecture',
              },
              {
                href: '/ressources/prospection-linkedin-b2b',
                title: 'Prospection LinkedIn B2B 2026 : 20 %+ de réponse',
                readTime: '20 min de lecture',
              },
              {
                href: '/ressources/setting-definition',
                title: "C'est quoi le setting ? Définition simple",
                readTime: '5 min de lecture',
              },
            ]}
          />

        </div>
      </main>
      <Footer />
    </>
  )
}
