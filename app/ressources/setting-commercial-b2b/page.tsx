import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Setting commercial B2B : définition et rôle du setter | Setting',
  description:
    "Le setting commercial précède le closing en B2B. Rôle du setter, méthode LinkedIn signal-based et programme de 3 mois.",
  openGraph: {
    title: 'Setting commercial B2B : définition et rôle du setter | Setting',
    description:
      "Setter, setting LinkedIn, signal-based : tout sur le setting commercial en B2B. Ce que c'est, comment ça fonctionne, et pourquoi la plupart le font mal.",
    locale: 'fr_FR',
    type: 'article',
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
  '@id': 'https://www.setting.live/ressources/setting-commercial-b2b',
  headline: 'Setting commercial B2B : définition, méthode et programme complet',
  description:
    "Le setting commercial est la phase de prospection qui précède le closing en B2B. Définition exacte, rôle du setter, méthode LinkedIn signal-based, les 5 erreurs et programme des 3 mois en détail.",
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-commercial-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-commercial-b2b',
  },
  image: 'https://www.setting.live/ressources/setting-commercial-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 3500,
  about: [
    { '@type': 'Thing', name: 'Setting commercial B2B' },
    { '@type': 'Thing', name: 'Prospection LinkedIn' },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que le setting commercial ?",
    answer:
      "Le setting commercial est la phase de prospection qui précède le closing dans un cycle de vente B2B. Le setter identifie les prospects qualifiés, analyse leurs profils, rédige et envoie les premiers messages, gère les conversations jusqu'à la prise de rendez-vous, et qualifie les leads avant de les transmettre au closeur. En B2B, le setting se déploie principalement sur LinkedIn via une approche signal-based : on contacte en priorité les prospects qui ont déjà montré un signe d'intérêt.",
  },
  {
    question: "Quelle est la différence entre un setter et un closeur ?",
    answer:
      "Le setter génère les rendez-vous qualifiés. Le closeur les convertit en clients. Le setter travaille en amont : détection des signaux, analyse des profils, prospection, qualification. Le closeur travaille sur les appels : discovery, présentation de valeur, gestion des objections, signature. Séparer les deux rôles permet d'optimiser chacun. Forcer un closeur à faire son propre setting lui fait perdre son temps sur ce qui n'est pas sa compétence centrale.",
  },
  {
    question: "Le setting LinkedIn fonctionne-t-il vraiment pour les solopreneurs ?",
    answer:
      "Oui, à condition d'utiliser une approche signal-based. Le setting LinkedIn générique — envoyer des messages non personnalisés à des centaines de profils — a un taux de réponse inférieur à 3%. Le setting sur signal — contacter des prospects qui ont réagi à un contenu lié à votre offre, avec un message ancré sur ce signal précis — dépasse régulièrement 20%. La différence n'est pas la plateforme. C'est la méthode.",
  },
  {
    question: "Combien de RDV peut-on espérer avec un programme de setting B2B ?",
    answer:
      "Sur un programme calibré, avec des signaux de qualité et une bonne base de connaissance, on vise 2 à 4 RDV qualifiés par semaine en régime de croisière. Les premiers RDV arrivent dès la première semaine dans la plupart des cas. Le volume monte progressivement pendant la phase de calibration (6 à 8 semaines), puis se stabilise. Ce chiffre dépend du secteur, de la qualité de l'ICP et de la densité des signaux disponibles.",
  },
  {
    question: "Faut-il automatiser le setting ou garder un setter humain ?",
    answer:
      "L'automatisation complète du setting produit des résultats proches de zéro — les prospects détectent immédiatement les messages automatiques. L'approche qui fonctionne est hybride : l'IA détecte les signaux, analyse les profils et propose des drafts ; l'humain valide chaque message avant envoi. Ce n'est pas de l'automatisation, c'est de la co-rédaction assistée. Aucun message ne part sans validation humaine.",
  },
  {
    question: "Combien coûte un programme de setting B2B externalisé ?",
    answer:
      "Un programme de setting externalisé incluant setter dédié, outils, base de connaissance et coaching closing se situe entre 2 000 et 5 000 € par mois selon le volume et la complexité du marché. À comparer avec un commercial interne (45 000 à 70 000 € par an chargé) ou votre propre temps perdu à prospecter au lieu de facturer.",
  },
  {
    question: "Combien de temps faut-il avant d'avoir des résultats réguliers ?",
    answer:
      "Les premiers RDV arrivent généralement dès la semaine 1 à 2. Mais la régularité — 2 à 4 RDV par semaine en continu — s'installe plutôt en 6 à 8 semaines. C'est le temps nécessaire pour calibrer les signaux, identifier les angles qui fonctionnent dans votre marché et construire une base de connaissance solide. Avant ça, les résultats sont réels mais pas encore prévisibles.",
  },
  {
    question: "Est-ce que le setting B2B fonctionne dans tous les secteurs ?",
    answer:
      "Non. Le setting LinkedIn signal-based fonctionne là où les acheteurs sont actifs sur LinkedIn — c'est-à-dire la majorité des secteurs B2B de services : conseil, formation, coaching, SaaS, agences, recrutement. Il fonctionne moins bien là où les acheteurs ne sont pas sur LinkedIn (TPE artisanales, secteurs très traditionnels) ou sur des offres B2C. La densité de signaux disponibles dans votre marché est le premier critère à vérifier avant de lancer.",
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
              <li className="text-text-primary">Setting commercial B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting · Guide complet
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting commercial B2B : définition, méthode et programme complet
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La plupart des solopreneurs confondent le setting avec &ldquo;envoyer des messages LinkedIn&rdquo;.
              Ce n&apos;est pas la même chose. Le setting commercial est un processus structuré — de la
              détection du signal à la qualification du lead — qui se déploie sur 3 mois avant de
              tourner seul. Ce guide couvre tout : la méthode, les outils, les erreurs qui tuent
              les taux de réponse, et ce que ça donne semaine par semaine.
            </p>
            <AuthorBlock date="2026-03-17" readTime="25 min de lecture" dateLabel="17 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition block — GEO */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Définition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Setting commercial
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Processus de prospection B2B qui consiste à identifier des prospects qualifiés,
              à initier le contact, à gérer la conversation jusqu&apos;à la prise de rendez-vous
              et à qualifier le lead avant de le transmettre au closeur. En B2B moderne, il se déploie
              principalement sur LinkedIn via une approche basée sur les signaux d&apos;achat :
              on contacte en priorité les prospects qui ont déjà montré un signe d&apos;intérêt.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '< 3 %', label: 'taux de réponse sans méthode' },
              { stat: '> 20 %', label: 'avec signal + personnalisation' },
              { stat: '2–4', label: 'RDV qualifiés par semaine en régime de croisière' },
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
                { id: 'definition', label: "Ce que le setting commercial est — et ce qu'il n'est pas" },
                { id: 'journee', label: 'Une journée de setting B2B concrètement' },
                { id: 'linkedin', label: 'Le stack d\'outils : ce qui capte les signaux et comment ils s\'articulent' },
                { id: 'setting-closing', label: 'Setting et closing : deux rôles, un pipeline' },
                { id: 'erreurs', label: 'Les 5 erreurs qui tuent le setting — et pourquoi la plupart tombent dedans' },
                { id: 'phases', label: 'Les 3 phases du programme : semaine par semaine' },
                { id: 'resultats', label: 'La courbe de résultats : à quoi s\'attendre et quand' },
                { id: 'cas-client', label: 'Cas client : 0 à 12 RDV qualifiés par mois en 10 semaines' },
                { id: 'ia', label: "L'IA dans le setting commercial : co-rédacteur, pas automatisation" },
                { id: 'delegation', label: 'Faire soi-même ou déléguer : le vrai calcul' },
                { id: 'cout', label: 'Ce que ça coûte — et ce que ça remplace' },
                { id: 'faq', label: 'Questions fréquentes' },
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

            {/* Section 1 — Définition */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que le setting commercial est — et ce qu&apos;il n&apos;est pas
              </h2>
              <p className="mb-4">
                Le <a href="/setting" className="text-accent hover:underline transition-colors">setting commercial</a> désigne l&apos;ensemble des actions qui transforment
                un prospect inconnu en rendez-vous qualifié prêt pour un appel de vente.
                Ce n&apos;est pas de la prospection en masse. Ce n&apos;est pas de l&apos;automatisation.
                C&apos;est un processus en six étapes, conduit par un être humain, avec l&apos;IA
                comme outil de co-rédaction.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ce que le setter fait — dans l&apos;ordre
                </p>
                <div className="space-y-3">
                  {[
                    { num: '1', text: "Détecter les prospects qui ont montré un signal d'intérêt ou qui correspondent exactement à l'ICP défini" },
                    { num: '2', text: "Analyser chaque profil manuellement : lire les posts récents, comprendre le contexte, décider si le contact vaut la peine et avec quel angle" },
                    { num: '3', text: "Rédiger le premier message : ancré sur un fait précis tiré du profil ou d'un post récent, 5 phrases maximum, aucun pitch" },
                    { num: '4', text: "Gérer la conversation jusqu'à l'accord pour un appel — pas de relance automatique, réponse humaine à chaque échange" },
                    { num: '5', text: "Qualifier le prospect sur 5 niveaux de maturité : niveau 1 (froid, pas de signal) à niveau 5 (a exprimé un besoin explicite). Seuls les niveaux 4-5 passent directement en call." },
                    { num: '6', text: "Passer le lead au closeur avec le contexte complet — ce qui a été dit, ce qui a intéressé, ce qui a résisté. Jamais un RDV sans brief." },
                  ].map(({ num, text }) => (
                    <div key={num} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Ce que le setter ne fait pas : fermer des deals, envoyer des propositions commerciales,
                pitcher l&apos;offre dans le premier DM, gérer les{' '}
                <a href="/ressources/relance-linkedin-b2b" className="text-accent hover:text-text-primary transition-colors">relances</a>{' '}
                post-appel, créer du contenu.
                La séparation n&apos;est pas arbitraire — elle est fonctionnelle. Chaque rôle demande
                un profil différent.
              </p>
              <p>
                La majorité des solopreneurs mélangent setting et closing dans la même action.
                Résultat : le premier message est trop long, trop tôt, trop commercial.
                Le prospect disparaît avant d&apos;avoir jamais entendu la vraie valeur de l&apos;offre.
                Ce n&apos;est pas un problème de qualité de l&apos;offre. C&apos;est un problème de séquence.
              </p>
            </section>

            {/* Section 2 — Journée */}
            <section id="journee" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Une journée de setting B2B concrètement
              </h2>
              <p className="mb-6">
                Voici ce que fait un setter sur un programme actif en phase 2 (régime de croisière).
                Pas une description abstraite — une journée réelle.
              </p>

              <div className="space-y-5">
                {[
                  {
                    time: '8h30',
                    content: "Vérification des signaux inbound de la veille via Reactin. Qui a commenté, liké ou posé une question publique sur un contenu lié au secteur ? Sur un compte qui publie régulièrement, ça génère 15 à 40 signaux par semaine. Chaque profil est ouvert, les posts récents sont lus. Décision pour chaque profil : contacter maintenant, mettre en watchlist, ou écarter. En pratique, sur 20-30 signaux, 8 à 12 méritent un message cette semaine.",
                  },
                  {
                    time: '9h00',
                    content: "Vérification des alertes Spyer sur les comptes concurrents ou complémentaires monitorés. Qui a réagi à leurs posts récents ? Ces profils sont souvent dans l'univers exact de votre ICP mais pas encore exposés à votre contenu. Spyer remonte aussi les nouveaux posts de ces comptes — certains contiennent des commentaires de prospects qui se qualifient d'eux-mêmes en décrivant leur problème.",
                  },
                  {
                    time: '9h30',
                    content: "Rédaction des messages. Pour chaque profil retenu, un message est construit sur le signal identifié. Règle non-négociable : deuxième phrase = fait précis tiré du profil ou d'un post récent, jamais générique. Claude propose un draft depuis le skill maison. Le setter lit, ajuste si besoin, teste sur téléphone (si ça coupe sur mobile, c'est trop long), valide. Aucun message ne part sans ce regard humain. Sur 10 profils, la rédaction + validation prend 45 à 60 minutes.",
                  },
                  {
                    time: '14h00',
                    content: "Gestion des réponses en cours. Les prospects qui ont répondu depuis la veille sont traités en priorité. Qualification sur 5 niveaux. Les niveaux 4-5 reçoivent une proposition de call directe avec le lien agenda. Les niveaux 2-3 entrent dans un échange de nurturing — 1 à 2 messages supplémentaires pour approfondir le contexte avant de proposer un call ou les faire passer en newsletter.",
                  },
                  {
                    time: '16h00',
                    content: "Journal de bord. 10 minutes maximum. Ce qui a fonctionné aujourd'hui : quel angle a généré une réponse, quelle formulation a obtenu 'intéressant, dites-m'en plus'. Ce qui n'a pas marché : quel message n'a rien déclenché et pourquoi. Ces notes alimentent directement le skill Claude — le système devient plus précis chaque semaine.",
                  },
                ].map(({ time, content }) => (
                  <div key={time} className="flex gap-4">
                    <span className="font-sans font-semibold text-accent text-xs tabular-nums shrink-0 w-12 pt-0.5">{time}</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                  Ce que ça donne en chiffres
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Une journée de setting efficace en phase 2 : 20 à 30 profils analysés,
                  8 à 15 messages envoyés ou gérés, 1 à 2 RDV posés.
                  Temps total : 2 à 3 heures. Pendant la phase 1 (calibration), plus —
                  parce que chaque décision prend plus de temps quand la base de connaissance
                  n&apos;est pas encore constituée.
                </p>
              </div>
            </section>

            <CtaArticle />

            {/* Section 3 — Stack outils */}
            <section id="linkedin" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le stack d&apos;outils : ce qui capte les signaux et comment ils s&apos;articulent
              </h2>
              <p className="mb-5">
                LinkedIn est le canal principal du setting commercial B2B pour les solopreneurs
                parce que c&apos;est là que les acheteurs B2B se montrent. Mais LinkedIn seul ne suffit pas.
                Quatre outils forment le stack de base.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    tool: 'Reactin',
                    role: 'Capture les signaux inbound',
                    detail: "Connecté à votre compte LinkedIn, Reactin recense automatiquement qui a interagi avec vos posts. Like, commentaire, réaction — chaque interaction est une levée de main. Sur un compte qui publie 2-3 fois par semaine, ça génère 15 à 50 signaux par semaine selon la portée du contenu. Le setter filtre ces profils selon l'ICP : on ne contacte pas tout le monde, seulement ceux dont le profil correspond.",
                  },
                  {
                    tool: 'Spyer',
                    role: 'Surveille les comptes concurrents et complémentaires',
                    detail: "Vous définissez une liste de comptes à monitorer — concurrents, influenceurs du secteur, comptes complémentaires dont l'audience ressemble à votre ICP. Spyer vous alerte quand ces comptes publient et quand des profils intéressants interagissent avec leur contenu. C'est le canal outbound signal-based : ces prospects n'ont pas interagi avec vous, mais ils ont montré de l'intérêt pour votre thématique ailleurs.",
                  },
                  {
                    tool: 'Sales Navigator',
                    role: 'Filtre et cible avec précision',
                    detail: "L'outil LinkedIn premium (~100 €/mois) permet de construire des listes de prospects selon des dizaines de critères : fonction, secteur, taille d'entreprise, ancienneté dans le poste, signaux récents (changement de poste, nouvelle prise de fonction, entreprise dans l'actualité). Ces listes alimentent Spyer pour le monitoring continu. Sales Navigator définit qui surveiller — Spyer exécute la surveillance.",
                  },
                  {
                    tool: 'Claude (skill maison)',
                    role: 'Co-rédige les messages',
                    detail: "Un skill construit sur le contexte spécifique du client : l'offre, le marché, les objections connues, les formulations qui ont fonctionné par le passé, les règles non-négociables sur le style. Ce skill propose un premier draft pour chaque message. Le setter lit, ajuste, valide. Ce n'est pas de l'automatisation — c'est une réduction du temps de rédaction avec un humain qui reste dans la boucle. Chaque semaine, le journal de bord enrichit le skill.",
                  },
                ].map(({ tool, role, detail }) => (
                  <div key={tool} className="border border-white/[0.06] rounded-xl overflow-hidden">
                    <div className="bg-bg-secondary px-5 py-3 border-b border-white/[0.06] flex items-center justify-between gap-4">
                      <p className="font-sans font-semibold text-text-primary text-sm">{tool}</p>
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
                    Votre contenu génère des interactions → Reactin les capture →
                    l&apos;ICP filtre les profils pertinents → message ancré sur le signal.
                    Taux de réponse moyen : 20 à 35 % sur les profils bien filtrés.
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                    Flux outbound
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Sales Navigator filtre → Spyer surveille l&apos;activité →
                    signal capturé sur un compte tiers → message ancré sur cet engagement.
                    Taux de réponse moyen : 10 à 20 % selon la chaleur du signal.
                  </p>
                </div>
              </div>

              <p className="mt-5">
                La différence avec la{' '}
                <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:text-text-primary transition-colors">prospection LinkedIn classique</a>{' '}
                : le prospect n&apos;est pas froid.
                Il a déjà montré quelque chose. Le message s&apos;ancre sur cette preuve — et le taux
                de réponse change de nature. C&apos;est la raison pour laquelle{' '}
                <a href="/ressources/messages-linkedin-sans-reponse" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  les messages génériques n&apos;obtiennent pas de réponses
                </a>{' '}
                alors que les messages ancrés sur signal dépassent 20 %.
              </p>
            </section>

            {/* Section 4 — Setting et closing */}
            <section id="setting-closing" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting et closing : deux rôles, un pipeline
              </h2>
              <p className="mb-4">
                Le{' '}
                <a href="/ressources/difference-setting-closing" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  setting et le closing sont les deux moitiés d&apos;un pipeline commercial B2B
                </a>.
                Le setter travaille avant l&apos;appel. Le closeur travaille pendant et après.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Le setter
                  </p>
                  <ul className="space-y-2 font-sans text-sm text-text-secondary">
                    {[
                      'Détecte et filtre les signaux',
                      'Analyse les profils manuellement',
                      'Rédige et valide chaque message',
                      'Gère les conversations',
                      'Qualifie sur 5 niveaux avant le call',
                      'Transmet le brief complet au closeur',
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    Le closeur
                  </p>
                  <ul className="space-y-2 font-sans text-sm text-text-secondary">
                    {[
                      'Lit le brief du setter avant l\'appel',
                      'Conduit la discovery call',
                      'Présente la valeur sur le bon angle',
                      'Gère les objections',
                      'Demande une décision explicite',
                      'Documente le résultat pour le setter',
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-emerald-400 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mb-4">
                La raison pour laquelle les deux rôles sont distincts : ils demandent des compétences
                et des profils différents. Un bon setter est rigoureux, organisé, à l&apos;aise à l&apos;écrit,
                capable de lire un profil et de construire un angle en quelques minutes.
                Il n&apos;a pas besoin d&apos;être un vendeur exceptionnel.
              </p>
              <p>
                Un bon closeur est à l&apos;aise à l&apos;oral, lit les non-dits, pilote une conversation
                vers une décision. Forcer un closeur à faire son propre setting, c&apos;est lui faire
                perdre son temps sur ce qui n&apos;est pas sa compétence — et souvent brûler des leads avec
                des messages mal construits. Le setter expérimenté ne fait pas d&apos;erreurs de débutant
                sur les premiers messages. C&apos;est exactement là que les leads se perdent.
              </p>
            </section>

            {/* Section 5 — Erreurs */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 5 erreurs qui tuent le setting — et pourquoi la plupart tombent dedans
              </h2>
              <p className="mb-6">
                Ces erreurs ne viennent pas d&apos;un manque de motivation. Elles viennent d&apos;une
                mauvaise compréhension de ce que le setting est censé produire à chaque étape.
              </p>

              <div className="space-y-8">
                {[
                  {
                    num: '01',
                    titre: "Prospecter quand on a le temps",
                    texte: "Le setting irrégulier ne fonctionne pas. LinkedIn est un canal de signaux — les signaux arrivent en continu, mais ils ont une durée de vie. Un prospect qui a commenté un post hier est chaud maintenant. Dans 3 semaines, il aura oublié ce post, la fenêtre d'intention sera fermée. Les solopreneurs qui prospectent 'quand ils ont le temps' arrivent systématiquement trop tard sur les signaux les plus chauds. Le setting demande une présence quotidienne, même courte. Deux heures chaque jour valent mieux que dix heures un vendredi de temps en temps.",
                  },
                  {
                    num: '02',
                    titre: "Pitcher dans le premier message",
                    texte: "Le premier message n'est pas censé vendre. Il est censé déclencher une réponse. Tout ce qui ressemble à un pitch — description de l'offre, tarifs, résultats promis, 'est-ce que vous seriez intéressé par...' — signale au prospect qu'il est face à un template envoyé en masse. La réponse est le silence. Le premier message doit être si court et si spécifique au profil que le prospect se demande comment vous avez su. 5 phrases. Pas de pitch. Ancré sur un fait précis.",
                  },
                  {
                    num: '03',
                    titre: "Traiter tous les signaux comme équivalents",
                    texte: "Un like sur un post générique de motivation n'est pas le même signal qu'un commentaire détaillé sur un post qui décrit exactement le problème que vous résolvez. La première erreur de priorisation : contacter les profils qui ont liké sans lire ce qu'ils ont liké. La deuxième : ne pas croiser le signal avec l'ICP. Un profil qui a commenté exactement le bon post mais qui est assistant RH dans une PME de 10 personnes n'est pas un prospect. Le signal et l'ICP doivent correspondre ensemble.",
                  },
                  {
                    num: '04',
                    titre: "Ne pas noter ce qui fonctionne",
                    texte: "Le setting sans journalisation est statique. Il produit les mêmes résultats indéfiniment parce qu'il ne capitalise pas sur ce qui marche. Dans la pratique : un angle qui a décroché 4 réponses cette semaine doit être codifié et réutilisé. Une formulation qui a obtenu 'intéressant, comment vous travaillez ?' doit entrer dans la base de connaissance. Sans ça, chaque message repart de zéro. Le système n'apprend pas. C'est la différence principale entre un setter qui améliore ses résultats de mois en mois et un setter qui stagne.",
                  },
                  {
                    num: '05',
                    titre: "Automatiser avant d'avoir calibré",
                    texte: "La tentation est compréhensible : si 10 messages par jour donnent 1-2 réponses, 100 messages devraient en donner 10-20. Ce raisonnement est faux pour deux raisons. Premièrement, les messages automatiques sont détectés — le taux de réponse chute à moins de 1 %, pas 20 %. Deuxièmement, l'automatisation sans calibration multiplie les erreurs. Vous n'avez pas encore codifié ce qui fonctionne dans votre marché. Vous ne savez pas quels angles déclenchent des réponses. Automatiser à ce stade, c'est industrialiser du bruit. La séquence correcte : calibrer d'abord, industrialiser ensuite.",
                  },
                ].map(({ num, titre, texte }) => (
                  <div key={num} className="border-l-2 border-accent/30 pl-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Erreur {num} — {titre}
                    </p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{texte}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6 — Phases */}
            <section id="phases" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 3 phases du programme : semaine par semaine
              </h2>
              <p className="mb-6">
                Un programme de setting B2B efficace ne se déploie pas du premier jour.
                Il se calibre. Ce que la plupart des gens ignorent : les 6 premières semaines
                ne visent pas le volume. Elles visent la précision.
              </p>

              {/* Phase 0 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">Phase 0</span>
                  <span className="font-sans text-xs text-text-secondary">Semaine 1 — Stratégie et infrastructure</span>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-4">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">ICP précis, pas générique</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      On ne définit pas &ldquo;solopreneurs B2B&rdquo;. On définit : directeurs commerciaux
                      indépendants dans le secteur SaaS B2B en France, 5 à 50 salariés, qui publient
                      régulièrement sur LinkedIn sur des sujets liés à la prospection ou à la performance
                      commerciale. Ce niveau de précision détermine la qualité des signaux qu&apos;on va surveiller.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Comptes monitorés et filtres Sales Navigator</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      10 à 20 comptes concurrents ou complémentaires sélectionnés pour Spyer.
                      Les filtres Sales Navigator configurés avec les triggers actifs (changement de poste,
                      prise de fonction, entreprise dans l&apos;actualité). On ne commence pas à prospecter
                      avant que cette infrastructure soit en place.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Skill Claude initialisé</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Le skill maison est construit sur les informations disponibles : l&apos;offre,
                      le marché, les objections anticipées, les règles de style non-négociables.
                      Il sera enrichi chaque semaine. C&apos;est le point de départ, pas le produit fini.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">Phase 1</span>
                  <span className="font-sans text-xs text-text-secondary">Semaines 2 à 8 — Calibration</span>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-5">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 2–3 : premiers messages, premiers retours</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Volume intentionnellement bas : 5 à 8 messages par jour maximum.
                      L&apos;objectif n&apos;est pas de remplir l&apos;agenda. C&apos;est de comprendre
                      quels signaux déclenchent des réponses dans ce marché précis, et quels angles
                      résonnent. Chaque message est une expérience. Le journal de bord tourne dès le jour 1.
                      Les premiers RDV arrivent généralement entre J+4 et J+10.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 4–6 : les patterns émergent</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Après 3 à 4 semaines, on commence à voir ce qui revient. Certains types de
                      signaux génèrent systématiquement des réponses. Certaines formulations déclenchent
                      &ldquo;intéressant&rdquo;. D&apos;autres génèrent du silence. Ces patterns sont codifiés
                      dans le skill Claude. Le setter commence à valider les drafts en moins de temps
                      parce que les propositions sont plus précises.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">Semaines 7–8 : stabilisation du flux</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Le volume monte à 10–15 messages par jour. Le taux de réponse commence à se
                      stabiliser autour des benchmarks du marché (15–25 % sur inbound, 8–15 % sur
                      outbound signal). Le flux de RDV devient plus prévisible. À ce stade, la majorité
                      des clients ont 6 à 10 RDV posés par semaine — dont 4 à 6 réellement qualifiés.
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60">Phase 2</span>
                  <span className="font-sans text-xs text-text-secondary">Mois 3 et au-delà — Régime de croisière</span>
                </div>
                <div className="border-l-2 border-text-muted/20 pl-5 space-y-4">
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-secondary mb-1">Le système tourne sans intervention quotidienne lourde</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Le setter intervient 2 à 3 heures par jour. Les signaux sont traités systématiquement.
                      Le skill Claude produit des drafts proches de la cible. Le volume est régulier :
                      2 à 4 RDV qualifiés par semaine en continu, pas en pic.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-secondary mb-1">Le nurturing s&apos;active</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      Les prospects des niveaux 2–3 — intéressés mais pas prêts — entrent dans
                      une newsletter mensuelle. Ils reviennent quand leur contexte change. C&apos;est
                      un flux passif qui génère des RDV supplémentaires 3 à 6 mois plus tard,
                      sans effort supplémentaire du setter. Ce canal ne s&apos;active qu&apos;une fois
                      le flux principal stabilisé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                  Le nurturing ne s&apos;active qu&apos;en phase 2.
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Construire un système de nurturing avant d&apos;avoir un flux de RDV stable, c&apos;est
                  ajouter de la complexité sans résoudre le vrai problème. La priorité en phase 1 :
                  remplir l&apos;agenda. Le nurturing vient après.
                </p>
              </div>
            </section>

            {/* Section 7 — Courbe de résultats */}
            <section id="resultats" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                La courbe de résultats : à quoi s&apos;attendre et quand
              </h2>
              <p className="mb-6">
                La courbe n&apos;est pas linéaire. Les semaines 1–2 déçoivent souvent les clients
                qui s&apos;attendaient à un démarrage immédiat en pleine vitesse. Les semaines 5–6
                confirment que la méthode fonctionne. Le mois 3 est là où la plupart des clients
                comprennent ce qu&apos;ils ont construit.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    periode: 'J+1 à J+10',
                    titre: 'Premiers signaux et premiers RDV',
                    rdv: '0 à 2 RDV',
                    contexte: "L'infrastructure est en place, les premiers messages partent. Le taux de réponse est variable — le système ne connaît pas encore assez votre marché. Le journal de bord commence à se remplir. 1 à 2 RDV arrivent généralement dans cette période, souvent sur des signaux inbound chauds.",
                  },
                  {
                    periode: 'Semaines 3–4',
                    titre: 'Les patterns commencent',
                    rdv: '2 à 4 RDV / semaine',
                    contexte: "Les premiers angles qui fonctionnent sont identifiés. Le setter commence à les reproduire systématiquement. Le taux de réponse monte. Le volume de RDV augmente mais reste irrégulier — certaines semaines montent, d'autres descendent selon la densité des signaux disponibles.",
                  },
                  {
                    periode: 'Semaines 5–8',
                    titre: 'Régularité et montée en volume',
                    rdv: '3 à 6 RDV / semaine',
                    contexte: "Le flux se régularise. La base de connaissance est suffisamment riche pour que les drafts Claude soient moins souvent retravaillés. Les taux de réponse se stabilisent autour des benchmarks du marché. C'est souvent à ce stade que les clients voient leur premier mois 'plein' — agenda rempli à 80 % sur les créneaux disponibles.",
                  },
                  {
                    periode: 'Mois 3 et au-delà',
                    titre: 'Régime de croisière',
                    rdv: '2 à 4 RDV qualifiés / semaine en continu',
                    contexte: "Le système est calibré. Le setter travaille en mode maintenance — les patterns sont connus, le skill est précis, les taux de réponse sont stables. Le flux de RDV est prévisible. Les clients passent de 'je prospecte pour trouver des leads' à 'j'ai un agenda rempli et je choisis les leads que je veux'.  ",
                  },
                ].map(({ periode, titre, rdv, contexte }) => (
                  <div key={periode} className="flex gap-4 py-4 border-b border-white/[0.06] last:border-0">
                    <div className="shrink-0 w-28">
                      <p className="font-sans text-xs text-text-secondary/50 mb-1">{periode}</p>
                      <p className="font-sans text-sm font-semibold text-accent">{rdv}</p>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-primary mb-1">{titre}</p>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">{contexte}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Ces chiffres varient selon la densité des signaux dans le marché, la qualité
                  de l&apos;ICP et la régularité du contenu publié. Un client qui publie 3 fois par semaine
                  sur LinkedIn génère plus de signaux inbound qu&apos;un client qui ne publie pas.
                  La différence entre les deux peut être un facteur 2 sur le volume de RDV.
                </p>
              </div>
            </section>

            {/* Section 8 — Cas client */}
            <section id="cas-client" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Cas client : 0 à 12 RDV qualifiés par mois en 10 semaines
              </h2>

              <div className="border-l-2 border-accent/30 pl-5 mb-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Profil
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Consultant indépendant en stratégie commerciale, offre à 4 500 € pour un accompagnement
                  de 3 mois. Prospectait lui-même sur LinkedIn depuis 18 mois : 1 à 2 RDV par semaine
                  en période active, 0 les mois où il était chargé en mission. Aucun système structuré,
                  aucune capitalisation sur ce qui fonctionnait.
                </p>
              </div>

              <div className="space-y-5 mb-6">
                {[
                  {
                    phase: 'Semaine 1',
                    titre: 'Infrastructure',
                    detail: "ICP redéfini précisément. On a réalisé que son meilleur profil client n'était pas 'directeur commercial' mais 'directeur commercial récemment promu, dans une PME de 15 à 80 salariés qui recrutait activement'. Ce changement de précision a réduit les cibles de 60 % mais multiplié le taux de transformation par 3. Reactin connecté, Spyer configuré sur 12 comptes concurrents du secteur, Sales Navigator filtré.",
                  },
                  {
                    phase: 'Semaines 2–3',
                    titre: 'Calibration et premiers RDV',
                    detail: "5 à 7 messages par jour. Résultats très variables : certains angles ne déclenchaient rien, d'autres obtenaient des réponses enthousiastes. L'angle qui a fonctionné dès la semaine 2 : mentionner une observation précise sur le recrutement en cours de l'entreprise comme preuve que quelque chose bougeait dans l'organisation. Ce signal de changement était visible sur LinkedIn. 4 RDV posés sur les deux premières semaines.",
                  },
                  {
                    phase: 'Semaines 4–6',
                    titre: 'Codification et accélération',
                    detail: "L'angle 'recrutement en cours = signal de transformation' est entré dans le skill Claude. 8 à 12 messages par jour. Le setter passait moins de temps à valider parce que les drafts étaient proches. Les taux de réponse sur ce segment sont montés à 28 %. 3 nouvelles RDV par semaine en moyenne. Le client avait arrêté de prospecter lui-même.",
                  },
                  {
                    phase: 'Semaines 7–10',
                    titre: 'Régime de croisière',
                    detail: "12 RDV qualifiés sur le mois 2. Le client closait lui-même — son taux de transformation était de 35 % sur ces leads, contre moins de 20 % sur ses anciens leads auto-générés. Il a signé 4 clients en mois 2. L'agenda était planifié 3 semaines en avance. Il avait embauché une assistante pour la gestion administrative.",
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
                  { stat: '1–2', label: 'RDV/semaine avant programme', sub: 'irréguliers, auto-prospectés' },
                  { stat: '12', label: 'RDV qualifiés en mois 2', sub: 'via setter dédié' },
                  { stat: '35 %', label: 'taux de closing', sub: 'sur leads qualifiés par le setter' },
                ].map(({ stat, label, sub }) => (
                  <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
                    <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                    <p className="font-sans text-xs text-text-primary font-semibold mb-0.5">{label}</p>
                    <p className="font-sans text-xs text-text-secondary">{sub}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 — IA */}
            <section id="ia" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                L&apos;IA dans le setting commercial : co-rédacteur, pas automatisation
              </h2>
              <p className="mb-4">
                Coller un profil dans ChatGPT et demander un message ne fonctionne pas.
                Le résultat est toujours reconnaissable — formel, bien structuré, clairement automatique.
                Taux de réponse proche de zéro. Les prospects détectent ce style à la deuxième phrase.
              </p>
              <p className="mb-4">
                Ce qui fonctionne : former le modèle sur votre contexte spécifique. Lui donner
                vos règles non-négociables (longueur maximum, phrases interdites, ton), des exemples
                de messages qui ont obtenu des réponses dans votre secteur, les objections types
                et les angles qui marchent. L&apos;IA devient co-rédacteur.
                Elle propose un draft. L&apos;humain valide, ajuste si besoin, envoie.
              </p>
              <p className="mb-5">
                Pour les clients qui le souhaitent, on construit un{' '}
                <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  skill Claude encodé sur l&apos;expertise spécifique du client
                </a>{' '}
                : jargon métier, objections connues par nom, profils types du secteur,
                formulations qui ont fonctionné lors des 30 derniers messages. Ce skill
                s&apos;améliore en continu via le journal de bord du setter.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                    Ce que l&apos;IA fait
                  </p>
                  <ul className="space-y-2 font-sans text-xs text-text-secondary">
                    {[
                      "Propose un premier draft en 30 secondes",
                      "Applique les règles de style codifiées",
                      "Incorpore les angles qui ont fonctionné",
                      "Respecte la longueur maximum automatiquement",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-text-secondary/40 shrink-0">→</span>
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
                      "Décide si le message part",
                      "Note ce qui a fonctionné ou non",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p>
                La règle ne change pas : aucun message ne part sans validation humaine.
                L&apos;IA réduit le temps de rédaction de 70 %. Elle ne remplace pas le jugement.
                Un message validé par un humain qui a lu le profil reste fondamentalement différent
                d&apos;un message automatique — et les prospects le perçoivent.
              </p>
            </section>

            {/* Section 10 — Délégation */}
            <section id="delegation" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Faire soi-même ou déléguer : le vrai calcul
              </h2>
              <p className="mb-4">
                Le setting fonctionne en solo. La vraie question, c&apos;est le coût réel de le faire soi-même
                — et ce à quoi on renonce en le faisant.
              </p>

              <div className="space-y-5 my-6">
                {[
                  {
                    title: 'Le temps direct',
                    desc: "Un programme de setting actif prend 2 à 3 heures par jour en régime de croisière. Pendant la phase de calibration, 3 à 4 heures. Pour un consultant à 1 000 € par jour, ces 3 heures valent 375 €. Sur un mois, c'est 8 000 € de temps consacré à la prospection — sans garantie de résultat sur les premières semaines.",
                  },
                  {
                    title: 'La courbe d\'apprentissage',
                    desc: "Un setter débutant — même motivé — fait des erreurs que seule l'expérience permet d'éviter. Un message trop long. Une deuxième phrase générique. Un pitch glissé trop tôt. Ces erreurs brûlent des leads. Sur LinkedIn, un prospect qui a reçu un mauvais message se souvient de votre nom. La deuxième chance est rare.",
                  },
                  {
                    title: 'La cohérence impossible',
                    desc: "La plupart des solopreneurs qui font leur propre setting prospectent quand ils ont le temps. C'est-à-dire jamais quand ils sont chargés en mission — exactement les périodes où ils devraient préparer le pipeline suivant. Un setter dédié prospecte tous les jours, indépendamment de votre charge. Le pipeline ne se tarit plus.",
                  },
                  {
                    title: 'Le stack à configurer et maintenir',
                    desc: "Reactin, Spyer, Sales Navigator, le skill Claude — configurer cet ensemble correctement prend 2 à 3 semaines. Le maintenir, comprendre les résultats, ajuster les filtres : c'est un métier. Déléguer à un programme qui a ce stack déjà en place, c'est démarrer à l'étape 3 au lieu de l'étape 0.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Un{' '}
                <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  setter B2B
                </a>{' '}
                expérimenté évite les erreurs de débutant dès le premier message.
                Les outils sont déjà configurés. La méthode est déjà éprouvée. Les premiers RDV
                arrivent dès la première semaine parce que le système ne part pas de zéro.
              </p>
            </section>

            {/* Section 11 — Coût */}
            <section id="cout" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que ça coûte — et ce que ça remplace
              </h2>
              <p className="mb-6">
                Les chiffres à mettre en face les uns des autres.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    option: 'Programme setting externalisé Setting',
                    cost: '2 000 – 5 000 € / mois',
                    note: 'Setter dédié, outils inclus, skill maison construit sur votre marché, coaching closing selon formule. Premiers RDV dès la semaine 1.',
                    highlight: true,
                  },
                  {
                    option: 'Commercial interne',
                    cost: '45 000 – 70 000 € / an',
                    note: "Chargé. Sans méthode structurée ni garantie de résultat. Minimum 3 à 6 mois avant d'être opérationnel. Et s'il part, tout repart de zéro.",
                    highlight: false,
                  },
                  {
                    option: 'Faire soi-même',
                    cost: 'Gratuit… sur le papier',
                    note: "Coût réel : 2 à 3h/j × votre taux journalier. Pour un consultant à 1 000 €/j, c'est 250 à 375 € perdus par jour sur de la prospection au lieu de facturer.",
                    highlight: false,
                  },
                  {
                    option: 'Agence de lead generation automatisée',
                    cost: '500 – 2 000 € / mois',
                    note: "Messages automatiques envoyés en masse. Taux de réponse < 1 %. Leads peu qualifiés. Risque de bannissement du compte LinkedIn. Ce n'est pas du setting.",
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
                <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                  Programme à 3 000 € / mois → 10 RDV qualifiés par mois → taux de closing
                  de 30 % → 3 clients signés → offre à 4 000 € → 12 000 € de CA généré.
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le programme est amorti par un seul client supplémentaire. Les deux autres sont
                  du gain net. Ce calcul suppose une offre à 4 000 € — sur des offres plus élevées,
                  le ROI est encore plus rapide.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fréquentes sur le setting commercial
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map((item, i) => (
                  <div key={i} className="py-5">
                    <p className="font-sans font-semibold text-text-primary mb-2">
                      {item.question}
                    </p>
                    <p className="font-sans text-text-secondary leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Internal links block */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ? Rôle, missions et coût" },
                { href: '/ressources/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting" },
                { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : méthode complète en 2026' },
                { href: '/ressources/comment-devenir-setter-b2b', label: 'Comment devenir setter B2B en 2026' },
                { href: '/ressources/cout-setter-b2b-prix', label: "Coût d'un setter B2B en 2026 : les vrais chiffres" },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : exemples et cadre complet' },
                { href: '/ressources/relance-linkedin-b2b', label: 'Relance LinkedIn B2B : quand et comment relancer' },
                { href: '/ressources/closer-b2b', label: 'Closer B2B : définition, compétences et comment en recruter un' },
                { href: '/glossaire', label: 'Glossaire setting & closing B2B : toutes les définitions' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
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
              On construit le système complet : stratégie, ciblage, skill maison,
              setter dédié, coaching closing. Premiers RDV qualifiés dès la semaine 1.
              Un appel de 30 minutes pour voir si ça correspond à votre situation.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Setter, ICP, signal d'achat, pipeline... Un terme vous échappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              ← Retour au blog
            </a>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/setter-b2b-definition', title: "C\u2019est quoi un setter en B2B ?", readTime: '8 min' },
            { href: '/ressources/difference-setting-closing', title: 'Quelle est la diff\u00e9rence entre setting et closing en B2B ?', readTime: '7 min' },
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te en 2026', readTime: '13 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
