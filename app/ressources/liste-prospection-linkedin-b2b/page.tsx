import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Liste de prospection LinkedIn B2B : les 4 sources qui marchent 2026',
  description:
    "Comment construire une liste outbound LinkedIn B2B en France en 2026 : les 4 sources, les outils, les critères de qualité, les anti-patterns, et la légalité RGPD. La liste fait 80 % du résultat.",
  openGraph: {
    title: 'Liste de prospection LinkedIn B2B : les 4 sources qui marchent 2026 | Setting',
    description:
      "Les 4 sources outbound LinkedIn B2B qui marchent en France en 2026 : outils, critères de qualité, anti-patterns, RGPD.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liste de prospection LinkedIn B2B : les 4 sources qui marchent 2026 | Setting',
    description: "Les 4 sources outbound LinkedIn B2B en France en 2026 : outils, qualité, RGPD.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
  headline: 'Liste de prospection LinkedIn B2B : les 4 sources qui marchent en 2026',
  description:
    "Le guide complet 2026 pour construire une liste outbound LinkedIn B2B en France : 4 sources, outils par source, critères de qualité, anti-patterns et conformité RGPD / LinkedIn TOS.",
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
  url: 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Prospection LinkedIn',
  wordCount: 4500,
  about: [
    { '@type': 'Thing', name: 'Liste de prospection LinkedIn B2B' },
    { '@type': 'Thing', name: 'Scraping LinkedIn' },
    { '@type': 'Thing', name: 'Sales Navigator' },
    { '@type': 'Thing', name: "ICP B2B" },
  ],
}

const faqItems = [
  {
    question: "Combien de leads doit faire une liste outbound LinkedIn par semaine ?",
    answer:
      "30 à 100 leads contactés par semaine, jamais plus. Au-delà, la personnalisation devient impossible et tu retombes mécaniquement sur du template. LinkedIn limite aussi techniquement les demandes de connexion à environ 100 par semaine pour les comptes normaux. Le volume ne compense jamais l'intention.",
  },
  {
    question: "Le scraping LinkedIn est-il légal en France en 2026 ?",
    answer:
      "Le cadre est complexe et évolutif. Récupérer des données publiques sur LinkedIn (profils visibles sans authentification) n'est pas en soi illégal en France, mais le traitement de ces données pour de la prospection commerciale est soumis au RGPD. En pratique, trois règles : (1) les données collectées doivent être proportionnées à la finalité (B2B ciblé, pas grand public), (2) la personne contactée doit pouvoir s'opposer facilement (droit d'opposition RGPD), (3) le scraping doit respecter les CGU LinkedIn qui interdisent l'automatisation non autorisée. La zone grise existe sur les outils tiers — la jurisprudence française tend à autoriser le B2B ciblé mais condamne le scraping de masse non qualifié.",
  },
  {
    question: "Faut-il acheter une liste B2B sur Apollo, Cognism ou ZoomInfo ?",
    answer:
      "Non, sauf cas très précis. Les bases payantes (Apollo, Cognism, ZoomInfo, Lusha) ont deux problèmes en 2026 : 30 à 50 % des profils sont inactifs depuis 12 mois (turnover B2B élevé), et les données B2C sont souvent mélangées sans tri propre. Elles peuvent servir d'enrichissement (emails, téléphones) sur une liste déjà qualifiée, mais comme source primaire elles produisent un taux de réponse inférieur à 3 %. Le scraping ciblé sur LinkedIn donne presque toujours de meilleurs résultats sur du B2B premium.",
  },
  {
    question: "Quels outils utiliser pour scraper LinkedIn en 2026 ?",
    answer:
      "Le marché compte 8 à 10 acteurs sérieux. Les plus connus : Phantombuster (le couteau suisse, ~70 €/mois), Captain Data (workflows avancés, ~150 €/mois), Evaboot (Sales Nav focused, ~40 €/mois), Reactin (monitoring de signaux inbound), Spyer (signaux outbound sur comptes tiers). Le choix dépend du volume (au-dessus de 500 leads/mois, prends Captain Data), du type de source (Sales Nav pur = Evaboot, signaux d'audience = Reactin/Spyer), et du niveau de personnalisation des workflows nécessaire. Sales Navigator reste l'outil de base — environ 100 €/mois, rentabilisé dès le premier RDV.",
  },
  {
    question: "Comment savoir si une liste outbound est bonne avant d'envoyer le premier message ?",
    answer:
      "Quatre tests à faire avant tout envoi. (1) Le test d'activité LinkedIn : ouvrir 10 profils au hasard, vérifier qu'au moins 7 ont posté ou commenté dans les 30 derniers jours. (2) Le test de cohérence ICP : vérifier que les 10 profils matchent ton ICP sur les 4 critères (poste, secteur, taille, déclencheur). (3) Le test du signal exploitable : pour chaque profil, identifier en 30 secondes un élément public sur lequel rebondir (post, produit, prise de poste). (4) Le test du fallback : compter combien de profils dans les 10 forceraient un message générique. Si plus de 2 sur 10, la liste est trop large.",
  },
  {
    question: "Combien de temps pour construire une liste outbound LinkedIn B2B utilisable ?",
    answer:
      "Pour 50 leads bien qualifiés : 3 à 5 heures de travail combinant outils et validation manuelle. C'est ce qui surprend les boîtes qui s'attaquent au sujet : 80 % du temps va à la qualification manuelle (vérifier que chaque profil a un signal exploitable), pas au scraping technique. Une liste construite en 30 minutes est presque toujours une mauvaise liste.",
  },
  {
    question: "Peut-on automatiser entièrement la construction de listes outbound ?",
    answer:
      "Non. L'extraction technique se semi-automatise via les outils mentionnés, mais la validation finale doit rester humaine. Le critère décisif — \"ce profil a-t-il un signal exploitable visible publiquement ?\" — ne peut pas être délégué à un script. Les boîtes qui tentent l'automatisation totale tombent à 2-3 % de taux de réponse et brûlent leur compte LinkedIn en 6 mois.",
  },
  {
    question: "Faut-il enrichir sa liste avec emails et téléphones ?",
    answer:
      "Optionnellement, et seulement si tu joues le canal email/tel en parallèle. Pour de la prospection LinkedIn pure, l'enrichissement est superflu et coûteux (10 à 50 centimes par profil enrichi). Pour une stratégie multi-canal (LinkedIn + email + tel), Dropcontact ou Hunter.io sur la base scrapée donnent les meilleurs résultats sur le B2B FR.",
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
      name: 'Liste de prospection LinkedIn B2B',
      item: 'https://www.setting.live/ressources/liste-prospection-linkedin-b2b',
    },
  ],
}

interface DetailedSource {
  code: string
  name: string
  maturity: string
  responseRate: string
  what: string
  why: string
  tools: string
  quality: string
  antipattern: string
}

const sources: DetailedSource[] = [
  {
    code: 'A',
    name: "Audience scrapée d'un compte concurrent",
    maturity: 'Tiède',
    responseRate: '10 à 18 %',
    what: "Followers actifs, commentateurs et personnes ayant réagi récemment aux posts d'un acteur du marché qui parle au même ICP que toi. Tu sors la liste des likers d'un post viral d'un concurrent, ou la liste de tous ceux qui ont commenté ses 10 derniers posts sur ta thématique.",
    why: "Le prospect a déjà manifesté un intérêt pour la thématique en réagissant au contenu. Tu n'as pas à lui vendre le sujet — il s'y intéresse déjà. Tu n'as plus qu'à lui proposer un angle différent, une lecture complémentaire ou un contre-argument.",
    tools: "Phantombuster (extraction likers et commentateurs d'un post, ~70 €/mois). Captain Data pour les workflows multi-posts. Evaboot pour les listes Sales Nav pures. Reactin et Spyer en option pour le monitoring continu d'audiences cibles.",
    quality: "Élevée si le compte cible parle exactement à ton ICP. Médiocre si l'audience est trop générale (un Gary Vee français suivi par tout le monde). La pré-validation manuelle du compte source est non négociable.",
    antipattern: "Scraper l'audience d'un compte généraliste (style 'business' ou 'entrepreneuriat') et croire que c'est de l'outbound qualifié. C'est de la liste tiède de masse, taux de réponse plafonné à 5 %.",
  },
  {
    code: 'B',
    name: "Commentateurs d'un post lead magnet concurrent",
    maturity: 'Chaud',
    responseRate: '15 à 25 %',
    what: "Personnes qui ont commenté un post LinkedIn d'un concurrent qui propose une ressource — PDF, audit gratuit, template à télécharger. Le commentaire est souvent \"intéressé\", \"je veux\", \"DM\" ou un prénom — chaque commentateur a explicitement levé la main pour la ressource.",
    why: "C'est la source outbound la plus chaude disponible en 2026. Le prospect ne s'est pas juste intéressé au sujet — il a manifesté un besoin précis assez fort pour demander une ressource. Maturité d'intention au moins 2× supérieure à l'audience générique.",
    tools: "Phantombuster sur l'URL du post + extraction des commentateurs. Captain Data pour automatiser la veille sur les posts lead magnet de 5-10 concurrents. Surveillance manuelle hebdomadaire des comptes cibles pour identifier les posts lead magnet (souvent reconnaissables au format \"commente XYZ pour recevoir\").",
    quality: "Très élevée. C'est souvent la meilleure source outbound disponible aujourd'hui en France. Mais le volume est limité — un bon post lead magnet sort 50 à 500 commentaires, contre 1 000 à 10 000 likers pour un post viral standard.",
    antipattern: "Mentionner dans le M1 'j'ai vu que tu avais commenté le post de X'. Le prospect comprend instantanément que sa demande de ressource est surveillée, il se braque. La source reste invisible dans le message.",
  },
  {
    code: 'C',
    name: 'Sales Navigator combiné à un trigger récent',
    maturity: 'Tiède à chaud selon trigger',
    responseRate: '12 à 30 %',
    what: "Recherche Sales Navigator filtrée sur l'ICP (poste, secteur, taille), croisée avec un déclencheur observable récent : changement de poste (alert Sales Nav natif), levée de fonds (Crunchbase, Maddyness, Frenchweb, Pappers), recrutement annoncé, prise de fonction publique, déménagement de siège.",
    why: "Le déclencheur crée une fenêtre d'achat ouverte. Quelqu'un qui vient de prendre un poste va revoir sa stack dans les 90 premiers jours. Quelqu'un qui vient de lever va scaler son acquisition dans les 60 jours suivants. Ces moments sont mécaniques, prédictibles, pas hypothétiques.",
    tools: "Sales Navigator (filtres avancés + alertes natives, ~100 €/mois). Crunchbase Pro et Pappers pour les levées FR (Pappers gratuit jusqu'à un certain volume). Evaboot pour exporter les listes Sales Nav proprement vers CSV. Captain Data pour automatiser l'enrichissement (poste + déclencheur + email + téléphone).",
    quality: "Haute pour les triggers récents (moins de 60 jours). Faible au-delà — la fenêtre se referme et la concurrence sur le prospect monte rapidement. Privilégier la fraîcheur même au prix du volume.",
    antipattern: "Recycler un trigger ancien (changement de poste de 6 mois). Le prospect a déjà été démarché 30 fois sur ce trigger, il ne lira pas. Si tu n'as pas un trigger frais, mieux vaut basculer sur la source A ou D.",
  },
  {
    code: 'D',
    name: "Participants à un événement vertical",
    maturity: 'Tiède à chaud',
    responseRate: '15 à 25 %',
    what: "Liste des inscrits ou participants à un webinar, une conférence, un meetup, ou commentateurs d'un post communautaire vertical. En France 2026, les bonnes sources incluent les inscrits aux conférences SaaS/B2B (B2B Rocks, Sales Stack Conference), les participants à des webinars sectoriels, ou les membres actifs de communautés Slack/Discord verticales (French Tech, Indie Hackers FR, etc.).",
    why: "Le prospect a consacré 30 à 90 minutes de son temps à creuser un sujet précis. Niveau d'engagement bien au-dessus du like passif. Le sujet de l'événement est aussi un déclencheur clair qui sert d'angle d'approche naturel.",
    tools: "Pages d'inscription publiques (Eventbrite, Hopin, conférences sectorielles), scraping des commentateurs de posts événementiels (Phantombuster), monitoring de communautés ouvertes. Pour les événements payants à liste fermée, l'approche reste manuelle via le réseau.",
    quality: "Haute si l'événement est vertical et récent (moins de 30 jours). Décroît vite — un participant à un événement de 6 mois est devenu un lead froid normal.",
    antipattern: "Lister tous les participants d'un événement géant non vertical (genre Vivatech) et appeler ça de l'outbound qualifié. Au-delà de 500 participants, l'événement n'est plus un signal — c'est du bruit.",
  },
]

const listErrors = [
  {
    title: "1. Confondre volume et qualité",
    why: "« 5 000 leads ce mois » sonne impressionnant en pitch interne. Sur le terrain, 5 000 leads peu qualifiés génèrent moins de RDV que 200 leads qualifiés. Le taux de réponse s'effondre à 1-2 %, le compte LinkedIn devient à risque, et la marque commerciale s'abîme sur 5 000 personnes au lieu de 200.",
    fix: "Plafond strict 30-100 leads/semaine. Si tu en veux plus, segmente en parallèle (A, B, C, D) plutôt qu'en augmentant le volume sur une seule source.",
  },
  {
    title: "2. Ne pas vérifier l'activité LinkedIn récente des profils",
    why: "30 à 50 % des bases B2B (Apollo, Cognism) contiennent des profils inactifs depuis plus de 12 mois. Tu envoies à des gens qui ont changé de poste, quitté l'entreprise ou abandonné LinkedIn. Taux de réponse mécaniquement plafonné — et tu ne comprends pas pourquoi.",
    fix: "Test rapide avant tout envoi : ouvrir 10 profils au hasard de la liste. Au moins 7 sur 10 doivent avoir posté ou commenté dans les 30 derniers jours. Sinon, la liste est cuite.",
  },
  {
    title: "3. Mélanger plusieurs sources sans segmenter",
    why: "Tu prends ta liste audience scrapée (tiède), ta liste cold Sales Nav (froide), tes commentateurs lead magnet (chauds), et tu envoies le même message à tout le monde. Le taux de réponse moyen est inférieur à celui de la source la plus froide, parce que le message est inadapté pour les 3 autres niveaux.",
    fix: "Une liste = une source = un angle de M1. Si tu travailles 4 sources, tu lances 4 séquences différentes, jamais une seule séquence mélangée.",
  },
  {
    title: "4. Croire que les outils font le tri de qualité",
    why: "Aucun outil de scraping ne valide la qualité d'un profil. Phantombuster sort les likers d'un post, mais il ne dit pas si chaque profil match ton ICP. Si tu n'ajoutes pas une étape de validation manuelle, 40 à 60 % de ta liste sera du bruit.",
    fix: "Pour chaque profil, 30 secondes de check humain : poste actuel correct, secteur cohérent, activité récente visible. Sur 100 profils, ça prend 30 minutes. Sans ça, ta liste vaut zéro.",
  },
  {
    title: "5. Ne pas séparer les leads par maturité du signal",
    why: "Un lead chaud (commentateur lead magnet) et un lead froid (cold ICP) ne se traitent pas avec la même séquence, ni le même angle de M1, ni le même rythme de relance. Les confondre = sur-prospecter les chauds et sous-engager les froids.",
    fix: "Trois paliers explicites : Froid (ICP seul), Tiède (ICP + déclencheur statique), Chaud (ICP + signal d'intérêt récent moins de 7 jours). Une séquence par palier.",
  },
  {
    title: "6. Ignorer le RGPD et les CGU LinkedIn",
    why: "Risque juridique direct (mise en demeure CNIL, suspension compte LinkedIn) si la collecte est massive et indifférenciée. Et risque commercial : un prospect qui se sent espionné met une note négative qui se diffuse dans son écosystème.",
    fix: "Trois règles de conformité : finalité proportionnée (B2B ciblé), droit d'opposition facile (mention dans le footer du M1 ou des suivants), respect des CGU LinkedIn (pas d'automatisation non autorisée des actions). Documenter ta démarche pour pouvoir la défendre si besoin.",
  },
]

const maturityLevels = [
  {
    label: 'Froid',
    color: 'text-muted',
    criteria: "ICP qui match, aucun signal d'intérêt récent.",
    responseRate: '5 à 12 %',
    sourceMix: 'Source C (Sales Nav pur sans trigger) ou élargissement quand les autres sources sont taries.',
  },
  {
    label: 'Tiède',
    color: 'yellow',
    criteria: "ICP + déclencheur statique observable (prise de poste, levée de fonds, recrutement, audience scrapée).",
    responseRate: '12 à 25 %',
    sourceMix: 'Sources A et C avec trigger, source D si événement récent.',
  },
  {
    label: 'Chaud',
    color: 'green',
    criteria: "ICP + signal d'intérêt récent (moins de 7 jours) : commentaire, demande de ressource, engagement direct sur ta thématique.",
    responseRate: '25 à 40 %',
    sourceMix: 'Source B (commentateurs lead magnet) en priorité, inbound réactif sur ton contenu.',
  },
]

export default function ListeProspectionLinkedInB2BPage() {
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
              <li className="text-text-primary">Liste de prospection LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection LinkedIn
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Liste de prospection LinkedIn B2B&nbsp;: les 4 sources qui marchent en France en 2026
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              80&nbsp;% du résultat d&apos;une séquence outbound LinkedIn vient de la liste. 20&nbsp;% du message. Voici les 4 sources qui produisent des taux de réponse exploitables en France en 2026, les outils par source, les critères de qualité, les anti-patterns et les contraintes RGPD à respecter.
            </p>
            <AuthorBlock date="2026-05-24" readTime="13 min de lecture" dateLabel="24 mai 2026" />
          </header>

          <TldrBox>
            <p className="tldr">
              <strong>La règle 80/20 de l&apos;outbound&nbsp;:</strong> une liste excellente avec un message moyen convertit mieux qu&apos;un message excellent sur une liste générique. La hiérarchie est claire — la liste d&apos;abord, le message ensuite.
            </p>
            <p className="tldr">
              <strong>Les 4 sources qui marchent en 2026&nbsp;:</strong> (A) audience scrapée d&apos;un concurrent, (B) commentateurs d&apos;un lead magnet concurrent, (C) Sales Navigator + déclencheur récent, (D) participants à un événement vertical. Hiérarchie par densité d&apos;intention&nbsp;: B &gt; C avec trigger récent &gt; D &gt; A &gt; cold pur.
            </p>
            <p className="tldr">
              <strong>Le bon volume&nbsp;:</strong> 30 à 100 leads contactés par semaine, jamais plus. La personnalisation s&apos;effondre au-delà, et LinkedIn limite techniquement les demandes de connexion à environ 100 par semaine.
            </p>
          </TldrBox>

          <article className="prose-content space-y-12">

            {/* Section 1 — Les 6 erreurs qui ruinent une liste */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 6 erreurs qui ruinent une liste outbound</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Avant de penser aux sources et aux outils, identifier ce qui invalide une liste. Sur 100 campagnes outbound LinkedIn qui plafonnent sous 5&nbsp;% de taux de réponse, 80 cumulent au moins trois des erreurs suivantes.
              </p>
              <div className="space-y-6">
                {listErrors.map((err, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <h3 className="font-sans font-bold text-text-primary text-base mb-2">{err.title}</h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                      <strong className="text-text-primary">Pourquoi ça ruine la liste&nbsp;:</strong> {err.why}
                    </p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">
                      <strong className="text-text-primary">Fix&nbsp;:</strong> {err.fix}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 — Les critères d'une bonne liste */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 4 critères qui définissent une bonne liste</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Une liste outbound n&apos;est pas évaluable à son volume. Quatre critères mesurables suffisent à savoir si une liste va convertir.
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">L&apos;ICP croisé (pas l&apos;ICP linéaire).</strong> Un ICP utilisable n&apos;est pas «&nbsp;les CEO&nbsp;» ou «&nbsp;les founders B2B&nbsp;». C&apos;est un faisceau croisé&nbsp;: rôle précis × secteur × taille d&apos;entreprise × déclencheur récent. Plus tu croises de critères, plus la liste rétrécit, plus le taux de réponse monte. Équation, pas opinion.
                </li>
                <li>
                  <strong className="text-text-primary">La densité d&apos;intention.</strong> Le pourcentage de profils dans la liste qui ont manifesté un signal d&apos;intérêt récent. Une liste à 70&nbsp;% de densité d&apos;intention (la majorité ont commenté un contenu lié à ta thématique dans les 30 derniers jours) convertit 5× mieux qu&apos;une liste à 10&nbsp;% (ICP qui match mais aucun signal).
                </li>
                <li>
                  <strong className="text-text-primary">La fraîcheur.</strong> Combien de temps depuis le signal qui a mis ce profil dans ta liste. Un lead chaud à J+3 est exploitable. Le même lead à J+30 est tiède. À J+90, il est froid. La fraîcheur n&apos;est pas optionnelle, c&apos;est un critère structurel.
                </li>
                <li>
                  <strong className="text-text-primary">La segmentabilité.</strong> Capacité à découper la liste en sous-segments cohérents (par maturité, par secteur, par déclencheur) pour calibrer la séquence. Une liste qu&apos;on ne peut pas segmenter est trop hétérogène pour produire une bonne réponse moyenne.
                </li>
              </ol>
            </section>

            <CtaArticle variant="setting" />

            {/* Section 3 — Les 3 paliers de maturité */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 3 paliers de maturité d&apos;un lead outbound</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Toute liste se segmente en trois paliers. Chaque palier appelle un angle de M1 différent et un rythme de relance différent. Mélanger les paliers dans une même séquence est l&apos;erreur la plus commune en outbound.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {maturityLevels.map((level, i) => (
                  <div
                    key={i}
                    className={
                      'rounded-lg p-4 border ' +
                      (level.color === 'green'
                        ? 'border-green-500/20 bg-green-500/[0.03]'
                        : level.color === 'yellow'
                          ? 'border-yellow-500/20 bg-yellow-500/[0.03]'
                          : 'border-text-muted/20 bg-white/[0.02]')
                    }
                  >
                    <p
                      className={
                        'font-mono text-xs uppercase tracking-widest mb-2 ' +
                        (level.color === 'green'
                          ? 'text-green-400'
                          : level.color === 'yellow'
                            ? 'text-yellow-400'
                            : 'text-text-muted')
                      }
                    >
                      {level.label}
                    </p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">{level.criteria}</p>
                    <p className="font-sans text-text-primary text-sm font-semibold mb-2">{level.responseRate}</p>
                    <p className="font-sans text-text-muted text-xs leading-relaxed">{level.sourceMix}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Règle&nbsp;: une liste de 100 leads froids produit moins de RDV qu&apos;une liste de 30 leads chauds. Le volume ne compense jamais l&apos;intention.
              </p>
            </section>

            {/* Section 4 — Les 4 sources en détail */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Les 4 sources outbound qui marchent en 2026</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-6">
                Chaque source produit un palier de maturité différent. Pour chacune&nbsp;: ce que c&apos;est, pourquoi ça marche, les outils dispo en 2026, le critère de qualité décisif, et l&apos;anti-pattern qui la tue.
              </p>
              <div className="space-y-6">
                {sources.map((s) => (
                  <div key={s.code} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <div className="mb-3 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className="inline-block font-mono text-xs font-bold text-accent mb-1">Source {s.code}</span>
                        <h3 className="font-sans font-bold text-text-primary text-base">{s.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="block font-sans text-xs text-text-muted">Maturité du signal</span>
                        <span className="font-sans font-semibold text-text-primary text-sm">{s.maturity}</span>
                      </div>
                    </div>
                    <p className="mb-4 text-xs font-sans text-text-muted">
                      <strong className="text-text-secondary">Taux de réponse moyen&nbsp;:</strong> {s.responseRate}
                    </p>
                    <div className="space-y-3 text-sm font-sans text-text-secondary leading-relaxed">
                      <p>
                        <strong className="text-text-primary">Ce que c&apos;est.</strong> {s.what}
                      </p>
                      <p>
                        <strong className="text-text-primary">Pourquoi ça marche.</strong> {s.why}
                      </p>
                      <p>
                        <strong className="text-text-primary">Outils 2026.</strong> {s.tools}
                      </p>
                      <p>
                        <strong className="text-text-primary">Le critère qualité décisif.</strong> {s.quality}
                      </p>
                      <p className="text-text-muted">
                        <strong className="text-text-secondary">L&apos;anti-pattern qui tue cette source.</strong> {s.antipattern}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 — Stratégie multi-sources */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Combiner les 4 sources dans une stratégie multi-sources</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Travailler une seule source plafonne ton pipe. Une stratégie outbound mature combine 3 à 4 sources en parallèle, chacune avec sa séquence dédiée. Voici une répartition typique pour un setter B2B qui vise 50 leads/semaine.
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-sm font-sans text-text-secondary border border-white/[0.08] rounded-lg">
                  <thead className="bg-white/[0.03]">
                    <tr>
                      <th className="text-left p-3 border-b border-white/[0.08]">Source</th>
                      <th className="text-left p-3 border-b border-white/[0.08]">Part du volume</th>
                      <th className="text-left p-3 border-b border-white/[0.08]">Rationnel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">B — Commentateurs lead magnet</td>
                      <td className="p-3 border-b border-white/[0.06]">10 à 20 % (le moins de volume disponible)</td>
                      <td className="p-3 border-b border-white/[0.06]">Maturité la plus haute, à exploiter en priorité à chaque opportunité</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">C — Sales Nav + trigger récent</td>
                      <td className="p-3 border-b border-white/[0.06]">40 à 50 % (volume principal)</td>
                      <td className="p-3 border-b border-white/[0.06]">Bonne maturité + bon volume + sourcing fiable mensuel</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-b border-white/[0.06] text-text-primary">A — Audience scrapée concurrent</td>
                      <td className="p-3 border-b border-white/[0.06]">20 à 30 %</td>
                      <td className="p-3 border-b border-white/[0.06]">Volume confortable, maturité moyenne, à varier en rotation</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-text-primary">D — Participants événement</td>
                      <td className="p-3">10 à 20 %</td>
                      <td className="p-3">Opportuniste, dépend du calendrier d&apos;événements du secteur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-sans text-text-secondary text-base leading-relaxed">
                Le cold pur (ICP qui match sans aucun signal) reste possible en filler quand les autres sources sont taries, mais ne devrait jamais dépasser 10&nbsp;% du volume total. C&apos;est la source la plus coûteuse en temps pour le moins de résultats.
              </p>
            </section>

            {/* Section 6 — Tester avant d'envoyer */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Tester une liste avant le premier envoi</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Aucune liste ne se déclenche sans validation manuelle préalable. Quatre tests à faire sur 10 profils tirés au hasard de la liste, avant tout envoi.
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">Test d&apos;activité LinkedIn.</strong> Au moins 7 profils sur 10 ont posté ou commenté dans les 30 derniers jours. Sinon, la liste est obsolète et tu vas écrire à des fantômes.
                </li>
                <li>
                  <strong className="text-text-primary">Test de cohérence ICP.</strong> Les 10 profils matchent ton ICP sur tous les critères — poste actuel correct, secteur cohérent, taille d&apos;entreprise dans la fourchette. Tolérance maximum&nbsp;: 1 hors-ICP sur 10. Au-delà, ton sourcing a un bug.
                </li>
                <li>
                  <strong className="text-text-primary">Test du signal exploitable.</strong> Pour chaque profil, peux-tu identifier en 30 secondes un élément public sur lequel rebondir (post récent, produit, prise de poste, commentaire récent) ? Au moins 8 sur 10 doivent passer ce test. En dessous, ton M1 va majoritairement tomber sur du fallback générique.
                </li>
                <li>
                  <strong className="text-text-primary">Test du fallback.</strong> Compter combien de profils dans les 10 forceraient un message générique faute d&apos;élément exploitable. Si plus de 2 sur 10, la liste est trop large — il faut la resserrer avant d&apos;envoyer.
                </li>
              </ol>
              <p className="font-sans text-text-secondary text-base leading-relaxed mt-4">
                Cette validation prend 15 à 30 minutes par lot de 50 leads. C&apos;est l&apos;étape que personne ne fait — et c&apos;est celle qui sépare une campagne à 20&nbsp;% de réponse d&apos;une à 4&nbsp;%.
              </p>
            </section>

            {/* Section 7 — RGPD et CGU */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-4">Conformité RGPD et CGU LinkedIn en France 2026</h2>
              <p className="font-sans text-text-secondary text-base leading-relaxed mb-4">
                Le scraping LinkedIn pour la prospection B2B en France évolue dans une zone partiellement codifiée. Trois principes à respecter pour rester dans le cadre.
              </p>
              <ol className="font-sans text-text-secondary text-base leading-relaxed space-y-3 list-decimal pl-5">
                <li>
                  <strong className="text-text-primary">Proportionnalité de la finalité.</strong> Les données collectées doivent être strictement proportionnées à l&apos;objectif. En clair&nbsp;: B2B ciblé sur un ICP précis = acceptable. Scraping massif indifférencié = risque CNIL avéré.
                </li>
                <li>
                  <strong className="text-text-primary">Droit d&apos;opposition.</strong> Le prospect doit pouvoir s&apos;opposer facilement au traitement de ses données. En pratique, mentionner dans le footer du M1 ou des suivants une formule courte type «&nbsp;si tu ne veux plus de message de ma part, dis-le-moi simplement&nbsp;» couvre cette obligation.
                </li>
                <li>
                  <strong className="text-text-primary">Respect des CGU LinkedIn.</strong> LinkedIn interdit l&apos;automatisation non autorisée des actions (envois en masse, scraping intensif depuis ton compte). Les outils sérieux contournent cette contrainte en passant par leur propre infrastructure plutôt que par ton compte. Quitter cette zone = risque de suspension de compte.
                </li>
              </ol>
              <p className="font-sans text-text-secondary text-base leading-relaxed mt-4">
                La jurisprudence française tend à autoriser le B2B ciblé à finalité commerciale, mais à condamner les pratiques de scraping de masse non qualifié. Documenter ta démarche (sources, finalité, traitement, sécurité) sécurise ta position en cas de contrôle.
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
                  <strong className="text-text-primary">LinkedIn Sales Solutions &mdash; State of Sales Report.</strong>{' '}
                  Données annuelles sur les pratiques de prospection LinkedIn B2B et l&apos;adoption du social selling en Europe.{' '}
                  <a href="https://www.linkedin.com/business/sales/blog/sales-strategy/state-of-sales-report" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                    linkedin.com/business/sales/blog
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">CNIL &mdash; Recommandation sur la prospection commerciale et le RGPD.</strong>{' '}
                  Cadre français sur la collecte et le traitement de données pour la prospection commerciale.{' '}
                  <a href="https://www.cnil.fr/fr/la-prospection-commerciale" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                    cnil.fr/fr/la-prospection-commerciale
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">LinkedIn &mdash; Conditions générales d&apos;utilisation.</strong>{' '}
                  Référentiel des actions autorisées et interdites côté plateforme.{' '}
                  <a href="https://www.linkedin.com/legal/user-agreement" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">
                    linkedin.com/legal/user-agreement
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
                Si tu préfères que cette liste se construise et tourne sans que tu y passes tes journées, c&apos;est exactement notre métier.
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
                href: '/ressources/message-linkedin-b2b',
                title: 'Message LinkedIn B2B : la séquence en 5 phases',
                readTime: '14 min de lecture',
              },
              {
                href: '/ressources/setting-linkedin',
                title: 'Setting LinkedIn : méthode complète',
                readTime: '18 min de lecture',
              },
              {
                href: '/ressources/prospection-linkedin-b2b',
                title: 'Prospection LinkedIn B2B 2026',
                readTime: '20 min de lecture',
              },
            ]}
          />

        </div>
      </main>
      <Footer />
    </>
  )
}
