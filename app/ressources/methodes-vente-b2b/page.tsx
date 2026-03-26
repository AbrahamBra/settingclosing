import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Méthodes de vente B2B (2026) : SONCAS, SPIN Selling, Challenger Sale, qualification leads | Setting',
  description:
    'Méthodes de vente B2B : SONCAS, SPIN Selling, Challenger Sale et qualification leads (BANT, MEDDIC). Comparatif et exemples.',
  openGraph: {
    title: 'Méthodes de vente B2B : SONCAS, SPIN Selling, Challenger Sale | Setting',
    description:
      'Les 4 méthodes de vente B2B qui structurent un cycle de vente. Méthode SONCAS, SPIN Selling, Challenger Sale et qualification de leads. Comparatif, exemples concrets et pipeline complet.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/methodes-vente-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/methodes-vente-b2b',
      'x-default': 'https://www.setting.live/ressources/methodes-vente-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M\u00e9thodes de vente B2B : SONCAS, SPIN Selling, Challenger Sale | Setting',
    description: 'Les 4 m\u00e9thodes de vente B2B qui structurent un cycle de vente. M\u00e9thode SONCAS, SPIN Selling, Challenger Sale et qualification de leads. Comparatif, exemples concrets et pipeline complet.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/methodes-vente-b2b',
  headline: 'Méthodes de vente B2B (2026) : SONCAS, SPIN Selling, Challenger Sale, qualification leads',
  description:
    'Guide complet des méthodes de vente B2B les plus utilisées en France. Méthode SONCAS, SPIN Selling, Challenger Sale et qualification de leads avec BANT et MEDDIC. Comparatif, exemples concrets et pipeline.',
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
  url: 'https://www.setting.live/ressources/methodes-vente-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/methodes-vente-b2b',
  },
  image: 'https://www.setting.live/ressources/methodes-vente-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable]', 'h1', '.tldr-box'],
  },
  articleSection: 'Méthode de vente B2B',
  wordCount: 5200,
  about: [
    { '@type': 'Thing', name: 'Méthode de vente B2B' },
    { '@type': 'Thing', name: 'Méthode SONCAS' },
    { '@type': 'Thing', name: 'SPIN Selling' },
    { '@type': 'Thing', name: 'Challenger Sale' },
    { '@type': 'Thing', name: 'Qualification de leads B2B' },
  ],
}

const faqItems = [
  {
    question: 'Quelle est la meilleure méthode de vente B2B ?',
    answer:
      'Il n\'existe pas de méthode universelle. Le Challenger Sale convient aux cycles longs avec plusieurs décideurs. Le SPIN Selling structure la discovery. La méthode SONCAS personnalise l\'argumentaire selon les motivations de l\'acheteur. Le plus efficace : combiner les trois selon les étapes de votre pipeline.',
  },
  {
    question: 'Qu\'est-ce que la méthode SONCAS ?',
    answer:
      'La méthode SONCAS identifie 6 motivations d\'achat universelles : Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie. Créée par Jean-Denis Larradet dans les années 1990, elle permet d\'adapter son discours commercial au profil psychologique du prospect. Chaque acheteur a 2 ou 3 leviers dominants que le commercial détecte pendant la discovery call.',
  },
  {
    question: 'Qu\'est-ce que le SPIN Selling ?',
    answer:
      'Le SPIN Selling est une méthode de vente développée par Neil Rackham après 12 ans de recherche sur 35 000 appels commerciaux. Elle repose sur 4 types de questions : Situation (contexte), Problème (difficultés), Implication (conséquences), Need-payoff (valeur d\'une solution). Le prospect formule lui-même son besoin au lieu de subir un pitch.',
  },
  {
    question: 'Qu\'est-ce que le Challenger Sale ?',
    answer:
      'Le Challenger Sale est une méthode B2B développée par Matthew Dixon et Brent Adamson (CEB, 2011) après une étude sur 6 000 commerciaux. Elle identifie 5 profils de vendeurs et démontre que les top performers challengent leurs prospects avec 3 comportements : Teach (apporter un insight), Tailor (adapter à l\'interlocuteur), Take Control (maintenir le cadre).',
  },
  {
    question: 'Peut-on combiner plusieurs méthodes de vente B2B ?',
    answer:
      'Oui. Un pipeline B2B complet utilise SONCAS pour le profilage du prospect, SPIN Selling pour la discovery, et le Challenger Sale pour la présentation de valeur et le closing. La qualification de leads (BANT ou MEDDIC) intervient en amont pour filtrer les prospects avant de leur consacrer du temps commercial.',
  },
  {
    question: 'Quelle est la différence entre BANT et MEDDIC ?',
    answer:
      'BANT (Budget, Authority, Need, Timeline) qualifie le prospect de façon statique. MEDDIC (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion) qualifie le processus de décision de façon dynamique. BANT convient aux leads entrants. MEDDIC est plus adapté aux cycles longs avec plusieurs décideurs.',
  },
  {
    question: 'La méthode SONCAS fonctionne-t-elle en B2B ?',
    answer:
      'Oui. Les 6 leviers SONCAS s\'appliquent aux décideurs B2B. En B2B, Sécurité et Argent sont souvent dominants : le décideur veut minimiser le risque et justifier le ROI. SONCAS permet de personnaliser l\'argumentaire selon le profil psychologique de l\'interlocuteur, ce qui augmente le taux de closing.',
  },
  {
    question: 'Comment qualifier un lead LinkedIn sans appel ?',
    answer:
      'La qualification LinkedIn pré-appel repose sur 4 données : le profil (poste, taille d\'entreprise, secteur), l\'activité récente (publications, commentaires), le signal d\'achat (réaction à un post, changement de poste), et les échanges de prospection. Ces éléments permettent d\'attribuer un niveau de maturité de N1 (curiosité froide) à N5 (deal chaud).',
  },
  {
    question: 'Combien de temps faut-il pour maîtriser une méthode de vente B2B ?',
    answer:
      'Comptez 4 à 8 semaines de pratique régulière pour intégrer les bases, et 3 à 6 mois pour que la méthode devienne naturelle sur vos appels. Enregistrez vos appels, réécoutez-les, identifiez les moments où vous avez dévié du cadre. La progression vient du feedback répété, pas de la théorie seule.',
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
    { '@type': 'ListItem', position: 3, name: 'Méthodes de vente B2B', item: 'https://www.setting.live/ressources/methodes-vente-b2b' },
  ],
}

// ─── DefinedTerm Schemas (GEO) ───────────────────────────────────────────────

const soncasDefinedTerm = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Méthode SONCAS',
  description: 'Cadre commercial identifiant 6 motivations d\'achat universelles (Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie) pour adapter le discours de vente au profil psychologique du prospect.',
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'Méthodes de vente B2B',
  },
}

const spinDefinedTerm = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'SPIN Selling',
  description: 'Méthode de vente B2B développée par Neil Rackham (1988) structurée autour de 4 types de questions : Situation, Problème, Implication, Need-payoff. Validée empiriquement sur 35 000 appels commerciaux.',
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'Méthodes de vente B2B',
  },
}

const challengerDefinedTerm = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Challenger Sale',
  description: 'Méthode de vente B2B développée par Matthew Dixon et Brent Adamson (CEB, 2011) basée sur une étude de 6 000 commerciaux. Les top performers challengent leurs prospects via 3 comportements : Teach, Tailor, Take Control.',
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'Méthodes de vente B2B',
  },
}

// ─── HowTo Schemas (GEO) ─────────────────────────────────────────────────────

const soncasHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment appliquer la méthode SONCAS en discovery call B2B',
  description: 'Identifier les motivations d\'achat du prospect et adapter le discours commercial.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Écouter le contexte', text: 'Posez des questions ouvertes sur la situation du prospect. Ne cherchez pas encore à identifier les leviers SONCAS.' },
    { '@type': 'HowToStep', position: 2, name: 'Repérer les signaux', text: 'Le prospect parle de risques → Sécurité. Il mentionne un concurrent → Orgueil. Il veut simplifier → Confort. Notez les 2-3 leviers dominants.' },
    { '@type': 'HowToStep', position: 3, name: 'Valider avec une question directe', text: 'Demandez : "Qu\'est-ce qui est le plus important pour vous dans ce type de décision ?" La réponse confirme les leviers.' },
    { '@type': 'HowToStep', position: 4, name: 'Construire le pitch sur ces leviers', text: 'Ancrez votre offre sur les 2-3 motivations identifiées. Ne présentez pas tout.' },
  ],
}

const spinHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment structurer une discovery call avec le SPIN Selling',
  description: 'Utiliser les 4 types de questions SPIN pour faire émerger le besoin du prospect.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Questions Situation (3-5 min)', text: 'Posez 2-3 questions factuelles sur le contexte du prospect. Préparez-les en amont depuis LinkedIn.' },
    { '@type': 'HowToStep', position: 2, name: 'Questions Problème (15 min)', text: 'Identifiez les frictions et insatisfactions. Posez 3-4 questions pour faire émerger la vraie douleur.' },
    { '@type': 'HowToStep', position: 3, name: 'Questions Implication (10 min)', text: 'Faites chiffrer les conséquences du problème non résolu. Phase la plus puissante et la plus sous-utilisée.' },
    { '@type': 'HowToStep', position: 4, name: 'Questions Need-payoff + Pitch (15 min)', text: 'Faites formuler au prospect la valeur d\'une solution. Puis présentez votre offre ancrée sur ce qui vient d\'être dit.' },
  ],
}

const challengerHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment appliquer la méthode Challenger Sale en B2B',
  description: 'Les 3 comportements du profil Challenger pour surperformer en vente complexe.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Teach : apporter un insight', text: 'Préparez une perspective sur le business du prospect. Montrez un angle qu\'il n\'avait pas vu sur son propre marché.' },
    { '@type': 'HowToStep', position: 2, name: 'Tailor : adapter le message', text: 'Adaptez votre angle selon l\'interlocuteur. Au fondateur : impact croissance. Au directeur commercial : taux de conversion.' },
    { '@type': 'HowToStep', position: 3, name: 'Take Control : maintenir le cadre', text: 'Ne cédez pas au premier signe de résistance sur le prix. Revenez à la valeur avant de discuter le tarif.' },
  ],
}

// ─── Content Data ─────────────────────────────────────────────────────────────

const leviersData = [
  {
    lettre: 'S',
    nom: 'Sécurité',
    def: 'Le prospect veut minimiser les risques. Il a peur de se tromper, de devoir justifier une mauvaise décision.',
    signaux: ['Pose beaucoup de questions sur les garanties', 'Demande des références clients', 'Hésite sans "test" préalable', 'Mentionne des expériences passées difficiles'],
    discours: 'Garanties, cas clients détaillés, progressivité de l\'engagement. Ne pas brusquer la décision.',
    exemple: '"Vous nous parlez d\'une expérience difficile avec une agence précédente. C\'est exactement pourquoi on démarre avec une phase de calibration de 4 semaines."',
  },
  {
    lettre: 'O',
    nom: 'Orgueil',
    def: 'Le prospect veut être reconnu, valorisé, se distinguer. Sensible au statut que confère la décision.',
    signaux: ['Parle de ses résultats et réussites', 'Mentionne des concurrents à dépasser', 'Attentif à qui d\'autre utilise le service'],
    discours: 'Valoriser son positionnement. Le qualifier comme le profil type qui réussit avec la méthode.',
    exemple: '"Les clients qui tirent le plus de valeur du programme sont des consultants qui ont déjà une offre premium."',
  },
  {
    lettre: 'N',
    nom: 'Nouveauté',
    def: 'Attiré par l\'innovation, les approches différentes, les méthodes récentes.',
    signaux: ['Demande comment vous vous différenciez', 'Utilise du vocabulaire tech/IA', 'Mentionne ce qu\'il veut tester'],
    discours: 'Mettre en avant l\'approche signal-based, les outils, la méthode différente du cold email.',
    exemple: '"La méthode qu\'on utilise n\'existait pas il y a 2 ans. On ne prospecte que les personnes qui ont montré un signal."',
  },
  {
    lettre: 'C',
    nom: 'Confort',
    def: 'Veut simplifier sa vie, réduire les frictions, ne pas gérer la complexité.',
    signaux: ['Parle de surcharge, manque de temps', 'Veut que ce soit simple à mettre en place', 'N\'a pas envie de former quelqu\'un'],
    discours: 'Insister sur le fait que le setter gère tout : détection des signaux, prise de RDV, briefing.',
    exemple: '"Vous n\'avez rien à gérer. Vous recevez des rendez-vous dans votre agenda. Le setter s\'occupe du reste."',
  },
  {
    lettre: 'A',
    nom: 'Argent',
    def: 'Sensible au ROI, au rapport coût/valeur, à la rentabilité de la décision.',
    signaux: ['Demande le prix tôt', 'Compare avec d\'autres solutions', 'Parle de budget, de coût d\'acquisition'],
    discours: 'Ancrer le prix sur le ROI. Combien vaut un RDV qualifié ? Combien coûte le temps de prospection actuel ?',
    exemple: '"Un client signé représente combien pour vous ? Si le programme génère 3 clients de plus par mois, ça représente quoi ?"',
  },
  {
    lettre: 'S',
    nom: 'Sympathie',
    def: 'Décide en fonction de la relation. Veut travailler avec des personnes de confiance.',
    signaux: ['Questions personnelles sur l\'équipe', 'Parle d\'alignement de valeurs', 'La relation prime sur les arguments rationnels'],
    discours: 'Être authentique, montrer de l\'intérêt pour son contexte. Les cas clients créent l\'identification.',
    exemple: '"Je vous pose ces questions parce que le programme est différent selon le marché et le profil."',
  },
]

const spinQuestions = [
  {
    lettre: 'S',
    type: 'Situation',
    objectif: 'Comprendre le contexte factuel du prospect.',
    piege: 'Trop de questions Situation = interrogatoire. Le prospect se lasse. Préparez-les en amont depuis LinkedIn. 2 ou 3 pendant l\'appel, pas plus.',
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
    piege: 'Les commerciaux en difficulté posent une seule question Problème et passent au pitch. Trois ou quatre questions Problème bien enchaînées font émerger la vraie douleur.',
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
    piege: 'Le type de question le plus puissant et le plus sous-utilisé. Sans Implication, le prospect perçoit son problème mais pas son urgence. Avec Implication, il le ressent.',
    exemples: [
      'Si votre pipeline reste à ce niveau les 6 prochains mois, qu\'est-ce que ça implique pour votre CA ?',
      'Combien de temps passez-vous chaque semaine sur de la prospection peu qualifiée ?',
      'Qu\'est-ce que ça vous coûte en opportunités manquées ?',
    ],
  },
  {
    lettre: 'N',
    type: 'Need-payoff',
    objectif: 'Faire formuler par le prospect lui-même la valeur d\'une solution.',
    piege: 'Beaucoup sautent cette étape et vont directement au pitch. Quand le prospect dit "si on résolvait ça, ce serait vraiment utile", il se pré-convainc. Votre pitch devient une confirmation.',
    exemples: [
      'Si vous aviez 3 rendez-vous qualifiés supplémentaires par semaine, qu\'est-ce que ça changerait ?',
      'À votre avis, si ce problème était résolu, combien ça vous permettrait de gagner par mois ?',
      'Comment ça vous aiderait si vous n\'aviez plus à vous occuper de la prospection ?',
    ],
  },
]

const profiles = [
  { name: 'Le Hard Worker', desc: 'Travaille dur, ne compte pas ses heures, se forme continuellement. Régulièrement dans la moyenne haute.', top: false },
  { name: 'Le Challenger', desc: 'Apporte un point de vue nouveau sur le business du client. Pousse à penser différemment. Remet en question les certitudes du prospect avec des données.', top: true },
  { name: 'Le Relationship Builder', desc: 'Priorité à la relation, évite les frictions. Le plus courant et le moins performant sur les ventes complexes.', top: false },
  { name: 'Le Lone Wolf', desc: 'Suit ses propres règles, très autonome. Peut surperformer ponctuellement, mais difficile à manager.', top: false },
  { name: 'Le Problem Solver', desc: 'Orienté service client. Excellent pour résoudre les problèmes existants, moins pour créer de nouvelles opportunités.', top: false },
]

const challengerComponents = [
  {
    label: 'Teach',
    title: 'Apporter une perspective nouvelle',
    body: 'Le Challenger arrive avec un insight sur le business du client : quelque chose que le prospect ne sait pas encore sur son marché ou ses processus. Cette perspective crée un besoin là où il n\'y en avait pas de visible.',
    example: 'Plutôt que pitcher "notre outil de prospection", le Challenger ouvre avec : "La majorité de vos concurrents perdent 30 % de leurs leads parce qu\'ils n\'ont pas de scoring."',
  },
  {
    label: 'Tailor',
    title: 'Adapter le message à chaque interlocuteur',
    body: 'Le même insight ne résonne pas de la même façon selon qu\'on parle au fondateur, au directeur commercial, ou au responsable marketing. Chacun a ses priorités. Le Challenger adapte son angle et son vocabulaire.',
    example: 'Au fondateur : impact sur la croissance. Au directeur commercial : impact sur le taux de conversion. Au marketing : impact sur la qualité des leads.',
  },
  {
    label: 'Take Control',
    title: 'Garder le contrôle de la conversation',
    body: 'Les commerciaux classiques sont accommodants sur le prix et le timing. Le Challenger maintient une tension constructive. Il ne cède pas au premier signe de résistance. Il recadre quand la conversation dérive vers le prix avant les bases de valeur.',
    example: 'Face à "votre prix est trop élevé", le Challenger répond : "Avant de parler prix, quantifions ce que ça vous coûte aujourd\'hui de ne pas régler ce problème."',
  },
]

const comparatif = [
  { critere: 'Phase du cycle', challenger: 'Pitch et closing', spin: 'Discovery', soncas: 'Profilage et argumentaire' },
  { critere: 'Complexité d\'apprentissage', challenger: 'Élevée', spin: 'Moyenne', soncas: 'Faible' },
  { critere: 'Cycle de vente idéal', challenger: 'Long (multi-appels)', spin: 'Moyen à long', soncas: 'Court à moyen' },
  { critere: 'Valeur d\'offre', challenger: '> 3 000 €', spin: 'Toutes valeurs', soncas: 'Toutes valeurs' },
  { critere: 'Posture du vendeur', challenger: 'Expert provocateur', spin: 'Consultant à l\'écoute', soncas: 'Lecteur de motivations' },
  { critere: 'Force principale', challenger: 'Différenciation', spin: 'Compréhension du besoin', soncas: 'Personnalisation' },
]

const niveauxQualif = [
  { niveau: 'N1', label: 'Curiosité froide', desc: 'A réagi à un post générique. Aucun signal d\'intention. Garder en liste de nurturing.' },
  { niveau: 'N2', label: 'Intérêt visible', desc: 'A commenté un contenu lié au problème que vous résolvez, ou visité votre profil. Premier message de prospection justifié.' },
  { niveau: 'N3', label: 'Signal qualifié', desc: 'A engagé une conversation sur son problème dans les échanges LinkedIn. Prêt pour une qualification rapide par message.' },
  { niveau: 'N4', label: 'Acheteur potentiel', desc: 'Confirme le problème, le budget approximatif et son rôle de décideur. Prêt pour un appel de discovery.' },
  { niveau: 'N5', label: 'Deal chaud', desc: 'Intention d\'achat explicite ou urgence ("on doit régler ça avant fin de trimestre"). Priorité absolue.' },
]

const pipelineSteps = [
  { etape: '1. Qualification', methode: 'BANT / MEDDIC', detail: 'Le setter évalue chaque lead entrant ou outbound sur les critères BANT ou MEDDIC. Seuls les prospects N4-N5 passent en appel. Les autres restent en nurturing.' },
  { etape: '2. Profilage', methode: 'SONCAS', detail: 'Avant la discovery, identifiez le levier dominant. Un directeur financier sera sensible à Argent et Sécurité. Un fondateur de startup répondra à Nouveauté et Orgueil.' },
  { etape: '3. Discovery', methode: 'SPIN Selling', detail: 'Utilisez la structure SPIN pour creuser le contexte et les douleurs. Les questions d\'Implication sont les plus puissantes : elles révèlent ce que le prospect perd à ne pas agir.' },
  { etape: '4. Présentation', methode: 'Challenger Sale', detail: 'Avec la matière de la discovery, construisez un insight. Ne répétez pas ce que le prospect sait déjà. Montrez un angle qu\'il n\'avait pas vu. Adaptez à son contexte (Tailor).' },
  { etape: '5. Closing', methode: 'Challenger + SONCAS', detail: 'Au moment de conclure, appuyez sur le levier SONCAS dominant. La posture Challenger maintient le cadre et évite les négociations inutiles sur le prix.' },
]

export default function MethodesVenteB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema,
            faqSchema,
            breadcrumbSchema,
            soncasDefinedTerm,
            spinDefinedTerm,
            challengerDefinedTerm,
            soncasHowTo,
            spinHowTo,
            challengerHowTo,
          ]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <article className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Méthodes de vente B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide complet · Méthodes de vente
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Méthodes de vente B2B (2026) : SONCAS, SPIN Selling, Challenger Sale et qualification leads
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6" data-speakable="true">
              Une méthode de vente n&apos;est pas un script. C&apos;est un cadre qui structure la façon
              dont vous menez un appel commercial. Ce guide couvre les 4 approches les plus efficaces
              en B2B : la méthode SONCAS, le SPIN Selling, le Challenger Sale et la qualification
              de leads. Pour chacune : comment ça marche, quand l&apos;utiliser, les erreurs courantes,
              et comment les combiner dans un pipeline concret.
            </p>
            <AuthorBlock date="2026-03-18" readTime="25 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-26" />
          </header>

          {/* TL;DR */}
          <div className="tldr-box" data-speakable="true">
            <TldrBox>
              <p>
                Quatre méthodes de vente B2B passées au crible. La <strong className="text-text-primary">méthode SONCAS</strong> identifie
                6 motivations d&apos;achat (Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie). Le{' '}
                <strong className="text-text-primary">SPIN Selling</strong> structure la discovery avec 4 types
                de questions (Situation, Problème, Implication, Need-payoff). Le{' '}
                <strong className="text-text-primary">Challenger Sale</strong> pose le commercial en expert
                qui challenge le prospect (Teach, Tailor, Take Control). La{' '}
                <strong className="text-text-primary">qualification de leads</strong> filtre les prospects avec
                BANT ou MEDDIC avant d&apos;allouer du temps commercial. Combinées dans un pipeline,
                ces méthodes couvrent chaque étape du cycle de vente B2B.
              </p>
            </TldrBox>
          </div>

          {/* Stat block */}
          <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20 mb-10" data-speakable="true">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Chiffres clés
            </p>
            <ul className="space-y-2 font-sans text-sm text-text-secondary leading-relaxed">
              <li>
                <strong className="text-text-primary">77 % des acheteurs B2B</strong> décrivent
                leur dernier achat comme complexe ou difficile (Gartner, 2023)
              </li>
              <li>
                <strong className="text-text-primary">35 000 appels</strong> analysés par Neil Rackham
                sur 12 ans pour développer le SPIN Selling (Huthwaite, 1988)
              </li>
              <li>
                Le profil Challenger représente <strong className="text-text-primary">40 % des top performers</strong> commerciaux (CEB, 2011)
              </li>
              <li>
                Seuls <strong className="text-text-primary">27 % des leads</strong> transmis aux commerciaux
                sont réellement qualifiés (HubSpot State of Sales, 2024)
              </li>
            </ul>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { num: '01', label: 'La méthode SONCAS : 6 leviers de motivation', anchor: 'soncas' },
                { num: '02', label: 'Le SPIN Selling : 4 questions pour la discovery', anchor: 'spin-selling' },
                { num: '03', label: 'Le Challenger Sale : enseigner, adapter, contrôler', anchor: 'challenger-sale' },
                { num: '04', label: 'Qualification de leads B2B : BANT et MEDDIC', anchor: 'qualification' },
                { num: '05', label: 'Comparatif des méthodes de vente', anchor: 'comparatif' },
                { num: '06', label: 'Combiner les méthodes dans un pipeline', anchor: 'pipeline' },
                { num: '07', label: 'Les erreurs qui plombent vos résultats', anchor: 'erreurs' },
                { num: '08', label: 'Questions fréquentes', anchor: 'faq' },
              ].map(({ num, label, anchor }) => (
                <li key={anchor} className="flex items-start gap-3 font-sans text-sm">
                  <span className="text-accent font-semibold shrink-0 w-6">{num}</span>
                  <a href={`#${anchor}`} className="text-text-secondary hover:text-text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Intro */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi adopter une méthode de vente en B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un commercial qui improvise chaque appel finit par reproduire les mêmes erreurs
              sans les identifier. Il pitche trop tôt. Il ne creuse pas les objections. Il perd
              des deals qu&apos;il aurait signés avec une structure.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Une méthode de vente pose un cadre. À quel moment poser les questions.
              Quand présenter la valeur. Comment gérer les objections. La différence entre un
              cuisinier qui suit une recette et un qui improvise. Le premier est reproductible.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              En B2B, chaque prospect perdu représente des semaines de travail. Les cycles sont
              longs. Les montants sont significatifs. Quatre méthodes se sont imposées en France
              et à l&apos;international. Aucune ne fait tout. Chacune couvre un angle précis.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 1 — MÉTHODE SONCAS                                        */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="soncas" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-2">
              La méthode SONCAS : 6 leviers de motivation d&apos;achat
            </h2>
            <p className="font-sans text-accent font-semibold text-sm mb-5">
              Sécurité, Orgueil, Nouveauté, Confort, Argent, Sympathie
            </p>

            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Définition
              </p>
              <p className="font-sans text-text-primary leading-relaxed">
                La <strong>méthode SONCAS</strong> est un cadre commercial créé par Jean-Denis Larradet dans
                les années 1990. Elle identifie 6 motivations d&apos;achat universelles : Sécurité, Orgueil,
                Nouveauté, Confort, Argent, Sympathie. En détectant le profil motivationnel d&apos;un prospect
                pendant la discovery call, le commercial adapte son discours à ce qui compte vraiment.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Tout le monde n&apos;achète pas pour les mêmes raisons. Dérouler les mêmes arguments
              dans le même ordre à chaque prospect, c&apos;est le moyen le plus sûr de rater un closing.
              Celui qui est motivé par la Sécurité veut des garanties. Celui qui est motivé par
              l&apos;Argent veut un ROI chiffré. Même offre, deux discours différents.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              En pratique, chaque prospect a 2 ou 3 motivations dominantes. Votre rôle pendant la discovery :
              les identifier, puis construire votre présentation autour de ces leviers.
            </p>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-5">
              Les 6 leviers SONCAS : définition, signaux et exemples
            </h3>
            <div className="space-y-8 mb-8">
              {leviersData.map(({ lettre, nom, def, signaux, discours, exemple }) => (
                <div key={nom} className="border-l-2 border-white/[0.06] pl-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl text-accent leading-none">{lettre}</span>
                    <h4 className="font-sans font-semibold text-text-primary text-base">{nom}</h4>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-4">{def}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                        Signaux pendant l&apos;appel
                      </p>
                      <ul className="space-y-1">
                        {signaux.map((s) => (
                          <li key={s} className="font-sans text-xs text-text-secondary flex gap-2">
                            <span className="text-accent shrink-0">→</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        Comment adapter son discours
                      </p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">{discours}</p>
                    </div>
                  </div>
                  <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06]">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                      Exemple
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed italic">{exemple}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              Comment appliquer SONCAS en discovery call
            </h3>
            <div className="space-y-4 mb-6">
              {[
                { step: '01', title: 'Écouter le contexte', desc: 'Questions ouvertes sur la situation. Ne cherchez pas encore à identifier les leviers SONCAS.' },
                { step: '02', title: 'Repérer les motivations', desc: 'Le prospect parle de risques → Sécurité. Il mentionne un concurrent → Orgueil. Il dit qu\'il n\'a plus le temps → Confort.' },
                { step: '03', title: 'Valider avec une question directe', desc: '"Qu\'est-ce qui est le plus important pour vous dans ce type de décision ?" La réponse confirme tout.' },
                { step: '04', title: 'Construire le pitch sur 2-3 leviers', desc: 'Ne présentez pas tout. Ancrez votre offre sur les motivations identifiées. Un prospect Argent + Sécurité : chiffrez le ROI et rassurez sur la progressivité.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                SONCASE ajoute un 7e levier : <strong className="text-text-primary">Environnement/Éthique</strong>.
                Pertinent dans les secteurs où la RSE pèse. En B2B services et conseil, les 6 leviers de
                SONCAS couvrent la grande majorité des situations.
              </p>
            </div>
          </section>

          <CtaArticle variant="methode" />

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 2 — SPIN SELLING                                          */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="spin-selling" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-2">
              Le SPIN Selling : 4 questions pour structurer la discovery
            </h2>
            <p className="font-sans text-accent font-semibold text-sm mb-5">
              Situation, Problème, Implication, Need-payoff
            </p>

            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Définition
              </p>
              <p className="font-sans text-text-primary leading-relaxed">
                Le <strong>SPIN Selling</strong> est une méthode de vente publiée par Neil Rackham en 1988,
                issue de la plus grande étude empirique sur la performance commerciale : 35 000 appels dans
                23 pays sur 12 ans. L&apos;acronyme désigne 4 catégories de questions :
                Situation, Problème, Implication, Need-payoff. Le prospect construit lui-même
                sa conviction au lieu de subir un pitch.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Dans les ventes complexes, les prospects n&apos;achètent pas quand on leur dit quoi
              faire. Ils achètent quand ils comprennent eux-mêmes l&apos;ampleur de leur problème.
              Le commercial facilite cette prise de conscience. Il ne pousse pas.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              SPIN n&apos;est pas un script à dérouler dans l&apos;ordre S→P→I→N à chaque appel.
              C&apos;est un cadre de pensée. Les meilleurs commerciaux n&apos;y pensent plus
              consciemment. Ils ont intégré la logique.
            </p>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-5">
              Les 4 types de questions SPIN en détail
            </h3>
            <div className="space-y-8 mb-8">
              {spinQuestions.map(({ lettre, type, objectif, piege, exemples }) => (
                <div key={type} className="border-l-2 border-white/[0.06] pl-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl text-accent leading-none">{lettre}</span>
                    <h4 className="font-sans font-semibold text-text-primary text-base">{type}</h4>
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

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              Appliquer SPIN en discovery call (45 min)
            </h3>
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
                    { phase: 'Ouverture', duree: '3-5 min', desc: 'Cadrer l\'appel, annoncer l\'agenda, créer un climat favorable.' },
                    { phase: 'S + P', duree: '15 min', desc: '2-3 questions Situation, puis transition vers les questions Problème. C\'est là que la vraie conversation commence.' },
                    { phase: 'I', duree: '10 min', desc: 'Questions Implication. Faire prendre conscience de l\'ampleur et du coût du problème. Ne pas raccourcir.' },
                    { phase: 'N + Pitch', duree: '15 min', desc: 'Questions Need-payoff pour faire formuler la valeur d\'une solution. Puis présentation ancrée sur ce qui vient d\'être dit.' },
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
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 3 — CHALLENGER SALE                                       */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="challenger-sale" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-2">
              Le Challenger Sale : enseigner, adapter, contrôler
            </h2>
            <p className="font-sans text-accent font-semibold text-sm mb-5">
              Teach, Tailor, Take Control
            </p>

            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Définition
              </p>
              <p className="font-sans text-text-primary leading-relaxed">
                Le <strong>Challenger Sale</strong> est une méthode de vente B2B développée par Matthew Dixon
                et Brent Adamson (CEB, 2011), basée sur une étude portant sur 6 000 commerciaux dans
                90 entreprises. Le profil Challenger représente 40 % des top performers. Il ne vend
                pas en suivant le client. Il le challenge : il apporte une perspective nouvelle,
                adapte son discours et prend le contrôle de la conversation.
              </p>
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              Les 5 profils de vendeurs
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              L&apos;étude CEB classe les commerciaux dans 5 profils. Devinez lequel surperforme.
              Pas celui que les managers recrutent en priorité.
            </p>
            <div className="space-y-3 mb-10">
              {profiles.map((profile, i) => (
                <div
                  key={i}
                  className={`rounded-xl px-6 py-4 border ${
                    profile.top ? 'border-accent/30 bg-accent/5' : 'border-white/[0.06] bg-bg-secondary'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-sans font-semibold text-text-primary text-sm">{profile.name}</p>
                    {profile.top && (
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                        Top performer
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{profile.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-5">
              Les 3 composantes du Challenger Sale
            </h3>
            <div className="space-y-8 mb-8">
              {challengerComponents.map((comp, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full">
                      {comp.label}
                    </span>
                  </div>
                  <h4 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                    {comp.title}
                  </h4>
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">{comp.body}</p>
                  <div className="border-l-2 border-white/[0.06] pl-4">
                    <p className="font-sans text-text-secondary text-sm italic leading-relaxed">
                      {comp.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              SPIN Selling vs Challenger Sale
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">SPIN Selling</p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    'Posture d\'écoute et de questionnement',
                    'Le prospect formule lui-même son problème',
                    'Efficace sur cycles longs avec problème identifié',
                    'Réduit la pression perçue',
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
                    'Efficace quand le prospect ne perçoit pas son problème',
                    'Crée de la crédibilité par la connaissance sectorielle',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">→</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Les deux fonctionnent bien ensemble. SPIN structure la discovery. Challenger fournit
              les insights à glisser pendant les questions Implication. En pratique : SPIN pour la
              structure de l&apos;appel, Challenger pour les munitions (données secteur, angles
              que le prospect n&apos;a pas vus).
            </p>
          </section>

          <CtaArticle variant="methode" />

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 4 — QUALIFICATION                                         */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="qualification" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qualification de leads B2B : BANT et MEDDIC
            </h2>

            <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8" data-speakable="true">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Définition
              </p>
              <p className="font-sans text-text-primary leading-relaxed">
                <strong>Qualifier un lead en B2B</strong> signifie évaluer sa probabilité de devenir client
                avant de lui consacrer du temps commercial. Un lead qualifié a le bon profil (ICP),
                un problème que vous résolvez, les moyens d&apos;acheter et une maturité suffisante.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un appel de discovery dure entre 30 et 60 minutes. Multipliez ça par tous les leads
              non qualifiés dans l&apos;agenda de votre closeur. Le temps perdu s&apos;accumule vite.
              La qualification filtre en amont : seuls les prospects avec une probabilité réelle de
              signer passent en appel.
            </p>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              La méthode BANT
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              BANT (Budget, Authority, Need, Timeline) est le cadre de qualification le plus ancien.
              Créé par IBM dans les années 1960, il reste une bonne checklist pour les leads entrants.
            </p>
            <div className="space-y-3 mb-5">
              {[
                { lettre: 'B', nom: 'Budget', question: 'Le prospect peut-il financer votre offre ?', limite: 'En outbound, le budget est rarement défini à l\'avance.' },
                { lettre: 'A', nom: 'Authority', question: 'Est-il décideur ou co-décideur ?', limite: 'Difficile à évaluer par message. À confirmer en début d\'appel.' },
                { lettre: 'N', nom: 'Need', question: 'A-t-il un problème que vous résolvez ?', limite: 'Le critère le plus important et le plus évaluable via les signaux LinkedIn.' },
                { lettre: 'T', nom: 'Timeline', question: 'Dans quel délai décide-t-il ?', limite: 'Un prospect sans urgence immédiate peut devenir un deal dans 3 mois.' },
              ].map(({ lettre, nom, question, limite }) => (
                <div key={nom} className="flex gap-4 border-l-2 border-white/[0.06] pl-5">
                  <span className="font-serif text-xl text-accent shrink-0 leading-none pt-0.5">{lettre}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm">{nom}</p>
                    <p className="font-sans text-xs text-text-secondary mb-1">{question}</p>
                    <p className="font-sans text-xs text-text-secondary/70 italic">{limite}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              La méthode MEDDIC
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              MEDDIC est un cadre plus complet, adapté aux cycles de vente longs avec plusieurs décideurs.
              Il qualifie le prospect ET le processus de décision.
            </p>
            <div className="space-y-3 mb-5">
              {[
                { lettre: 'M', nom: 'Metrics', desc: 'Quels résultats chiffrés le prospect attend-il ?' },
                { lettre: 'E', nom: 'Economic Buyer', desc: 'Qui signe le contrat ? Pas toujours la personne avec qui vous parlez.' },
                { lettre: 'D', nom: 'Decision Criteria', desc: 'Sur quels critères il décide : prix, références, méthode, résultats ?' },
                { lettre: 'D', nom: 'Decision Process', desc: 'Comment la décision est prise. Qui valide. Quel délai.' },
                { lettre: 'I', nom: 'Identify Pain', desc: 'Le problème précis que vous résolvez pour cette personne.' },
                { lettre: 'C', nom: 'Champion', desc: 'Quelqu\'un en interne défend votre solution auprès des décideurs ?' },
              ].map(({ lettre, nom, desc }) => (
                <div key={nom} className="flex gap-4 border-l-2 border-white/[0.06] pl-5">
                  <span className="font-serif text-xl text-accent shrink-0 leading-none pt-0.5">{lettre}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm">{nom}</p>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-sans font-semibold text-text-primary text-lg mb-4">
              Qualification en 5 niveaux par signal LinkedIn
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Dans un système de{' '}
              <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial</a>,
              la qualification commence avant le premier message. Le setter attribue un niveau de 1 à 5
              selon la nature du signal et la qualité des échanges.
            </p>
            <div className="overflow-x-auto mb-5">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent w-16">Niveau</th>
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent">Label</th>
                    <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-accent">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {niveauxQualif.map(({ niveau, label, desc }) => (
                    <tr key={niveau}>
                      <td className="py-4 pr-4">
                        <span className={`font-serif text-base ${['N4', 'N5'].includes(niveau) ? 'text-accent' : 'text-text-secondary/50'}`}>
                          {niveau}
                        </span>
                      </td>
                      <td className="py-4 pr-4 font-semibold text-text-primary align-top whitespace-nowrap">{label}</td>
                      <td className="py-4 text-text-secondary leading-relaxed">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Les leads N1 et N2 restent en nurturing. Les N3 passent en qualification approfondie
              par message. Seuls les N4 et N5 sont envoyés en appel de closing.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 5 — COMPARATIF                                            */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="comparatif" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comparatif des méthodes de vente B2B
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b-2 border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-text-primary font-semibold">Critère</th>
                    <th className="text-left py-3 px-4 text-text-primary font-semibold">Challenger Sale</th>
                    <th className="text-left py-3 px-4 text-text-primary font-semibold">SPIN Selling</th>
                    <th className="text-left py-3 pl-4 text-text-primary font-semibold">SONCAS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparatif.map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 text-text-primary font-medium">{row.critere}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.challenger}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.spin}</td>
                      <td className="py-3 pl-4 text-text-secondary">{row.soncas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">Règle pratique</p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Si vous ne savez pas par où commencer, partez du SPIN Selling. C&apos;est la méthode
                la plus polyvalente et la plus facile à intégrer dans des{' '}
                <a href="/ressources/discovery-call-b2b" className="text-accent hover:underline transition-colors">
                  discovery calls B2B
                </a> existantes. Une fois que vos questions sont solides, ajoutez SONCAS pour affiner
                votre lecture du prospect, puis Challenger pour muscler votre présentation de valeur.
              </p>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 6 — PIPELINE                                              */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="pipeline" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Combiner les méthodes dans un pipeline B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ces quatre méthodes ne se concurrencent pas. Elles couvrent des moments différents.
              La qualification filtre. SONCAS profile. SPIN creuse. Challenger conclut.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Voici comment les assembler du premier contact à la signature.
            </p>

            <div className="space-y-4 mb-8">
              {pipelineSteps.map((step, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-accent font-semibold text-sm">{step.etape}</span>
                    <span className="font-sans text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-md font-medium">
                      {step.methode}
                    </span>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-white/[0.06] pl-4 mb-6">
              <p className="font-sans text-text-secondary text-sm italic leading-relaxed">
                Ce cadre n&apos;est pas rigide. Sur un cycle court (une seule conversation), vous
                compressez les cinq étapes en un seul appel. Sur un cycle long, chaque étape peut
                correspondre à un rendez-vous distinct. L&apos;important : qualification avant discovery,
                discovery avant pitch.
              </p>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le{' '}
              <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">
                setting commercial B2B
              </a>{' '}
              prépare le terrain en amont. Le{' '}
              <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">
                closing B2B
              </a>{' '}
              finalise ce que les méthodes ont construit.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La{' '}
              <a href="/ressources/gestion-objections-b2b" className="text-accent hover:underline transition-colors">
                gestion des objections
              </a>{' '}
              traverse toutes les étapes. SONCAS identifie la motivation derrière l&apos;objection.
              SPIN la creuse avec des questions. Challenger la recadre avec un insight.
            </p>
          </section>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 7 — ERREURS                                               */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="erreurs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les erreurs qui plombent vos résultats
            </h2>
            <div className="space-y-4">
              {[
                { num: '01', title: 'Pitcher avant de comprendre', desc: 'Le réflexe le plus répandu. Présenter l\'offre dans les 5 premières minutes, avant d\'avoir identifié le problème du prospect. SPIN existe pour ça : les questions d\'abord, le pitch après.' },
                { num: '02', title: 'Utiliser les 6 leviers SONCAS dans le même pitch', desc: '"C\'est sécurisé, innovant, simple, et vous ferez des économies." Ça ne convainc personne. SONCAS sert à choisir 2 ou 3 leviers, pas à tout couvrir.' },
                { num: '03', title: 'Sauter les questions Implication', desc: 'La phase la plus puissante du SPIN et la plus inconfortable. Demander à quelqu\'un de chiffrer ce que lui coûte son problème peut sembler intrusif. Mais c\'est ce qui fait passer le deal de "intéressant" à "urgent".' },
                { num: '04', title: 'Confondre être Challenger et être agressif', desc: 'La tension constructive du Challenger Sale n\'est pas de l\'agressivité. Le Challenger dit ce que le client ne veut pas entendre, avec des données et une perspective étayée. Pas avec du bluff.' },
                { num: '05', title: 'Ne pas qualifier avant d\'appeler', desc: 'Un lead non qualifié dans l\'agenda du closeur, c\'est 30 à 60 minutes perdues. La qualification (BANT ou MEDDIC) intervient en amont. Le setter filtre. Le closeur ferme.' },
                { num: '06', title: 'Appliquer les méthodes comme des scripts', desc: 'SONCAS, SPIN, Challenger : ce sont des cadres de réflexion. Si vous dites au prospect "je vois que vous êtes sensible à l\'Orgueil", vous avez raté le point. L\'intégration doit être invisible.' },
                { num: '07', title: 'Supposer les motivations sans vérifier', desc: 'Un prospect dans la finance → "probable Argent". Ce n\'est pas une règle. Certains CFO sont plus sensibles à la Sécurité qu\'au ROI. Vérifiez toujours avec une question directe.' },
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

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* FAQ                                                               */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes sur les méthodes de vente B2B
            </h2>
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
          <div className="mt-14 pt-8 border-t border-white/[0.06] mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme' },
                { href: '/ressources/closing-b2b', label: 'Closing B2B : guide complet pour conclure vos ventes' },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure, questions et erreurs à éviter' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gestion des objections B2B : méthode et exemples concrets' },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : le guide complet' },
                { href: '/ressources/script-closing-b2b', label: 'Script de closing B2B : exemples et modèles' },
                { href: '/glossaire', label: 'Glossaire : ICP, qualification, pipeline, closing' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Structurer votre méthode de vente B2B
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Choisir la bonne méthode ne suffit pas. Il faut l&apos;intégrer dans un pipeline qui
              fonctionne. Discovery, qualification, closing : on construit avec vous le processus
              commercial qui transforme vos leads en clients.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Structurer mon pipeline de vente →
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : définition, méthode et programme complet', readTime: '25 min' },
            { href: '/ressources/closing-b2b', title: 'Closing B2B : guide complet pour conclure vos ventes', readTime: '25 min' },
            { href: '/ressources/discovery-call-b2b', title: 'Discovery call B2B : structure, questions et erreurs à éviter', readTime: '10 min' },
          ]} />

        </article>
      </main>
      <Footer />
    </>
  )
}
