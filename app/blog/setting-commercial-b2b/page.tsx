import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'Setting commercial B2B : définition, méthode et programme complet | ChallengersLab',
  description:
    "Le setting commercial est la phase de prospection qui précède le closing en B2B. Définition exacte, rôle du setter au quotidien, méthode LinkedIn signal-based et programme complet.",
  openGraph: {
    title: 'Setting commercial B2B : définition et méthode complète',
    description:
      "Setter, setting LinkedIn, signal-based : tout sur le setting commercial en B2B. Ce que c'est, comment ça fonctionne, et pourquoi la plupart le font mal.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog/setting-commercial-b2b',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/blog/setting-commercial-b2b',
  headline: 'Setting commercial B2B : définition, méthode et programme complet',
  description:
    "Le setting commercial est la phase de prospection qui précède le closing en B2B. Définition exacte, rôle du setter, méthode LinkedIn signal-based et programme de délégation.",
  author: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/blog/setting-commercial-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/blog/setting-commercial-b2b',
  },
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
      "Sur un programme calibré, avec des signaux de qualité et une bonne base de connaissance, on vise 2 à 4 RDV qualifiés par semaine. Les premiers RDV arrivent dès la première semaine dans la plupart des cas. Le volume monte progressivement pendant la phase de calibration (environ 2 mois), puis se stabilise. Ce chiffre dépend du secteur, de la qualité de l'ICP et de la densité des signaux disponibles.",
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
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://challengerslab.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Setting commercial B2B',
      item: 'https://challengerslab.fr/blog/setting-commercial-b2b',
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
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/blog" className="hover:text-text-primary transition-colors">Blog</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Setting commercial B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting · Méthode
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting commercial B2B : définition, méthode et programme complet
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              La plupart des solopreneurs confondent le setting avec &ldquo;envoyer des messages LinkedIn&rdquo;.
              Ce n&apos;est pas la même chose. Le setting commercial est un processus structuré — de la
              détection du signal à la qualification du lead. Ce que vous faites avant que le prospect
              décroche le téléphone détermine ce qui se passe pendant l&apos;appel.
            </p>
            <div className="flex items-center gap-4 font-sans text-xs text-text-muted">
              <span>Par ChallengersLab</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-03-17">17 mars 2026</time>
              <span aria-hidden="true">·</span>
              <span>14 min de lecture</span>
            </div>
          </header>

          {/* Definition block — GEO */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Définition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Setting commercial
            </p>
            <p className="font-sans text-text-muted text-sm leading-relaxed">
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
              { stat: '2–4', label: 'RDV qualifiés par semaine' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-muted leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: "Ce que le setting commercial est — et ce qu'il n'est pas" },
                { id: 'journee', label: 'Une journée de setting B2B concrètement' },
                { id: 'linkedin', label: 'Setting LinkedIn : pourquoi ce canal a changé la prospection B2B' },
                { id: 'setting-closing', label: 'Setting et closing : deux rôles, un pipeline' },
                { id: 'phases', label: "Les phases d'un programme de setting B2B" },
                { id: 'ia', label: "L'IA dans le setting commercial moderne" },
                { id: 'delegation', label: 'Pourquoi déléguer son setting plutôt que le faire soi-même' },
                { id: 'cout', label: 'Ce que ça coûte — et ce que ça remplace' },
                { id: 'faq', label: 'Questions fréquentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-muted/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${id}`}
                    className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <article className="font-sans text-text-muted leading-relaxed space-y-12">

            {/* Section 1 */}
            <section id="definition">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que le setting commercial est — et ce qu&apos;il n&apos;est pas
              </h2>
              <p className="mb-4">
                Le setting commercial désigne l&apos;ensemble des actions qui transforment
                un prospect inconnu en rendez-vous qualifié prêt pour un appel de vente.
                Ce n&apos;est pas de la prospection en masse. Ce n&apos;est pas de l&apos;automatisation.
                C&apos;est un processus en six étapes.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Ce que le setter fait
                </p>
                <div className="space-y-3">
                  {[
                    { num: '1', text: "Détecter les prospects qui ont montré un signal d'intérêt ou correspondent exactement à l'ICP" },
                    { num: '2', text: "Analyser chaque profil pour décider si ça vaut la peine de contacter — et avec quel angle" },
                    { num: '3', text: "Rédiger le premier message : personnalisé sur le signal, ancré sur un fait précis, jamais générique" },
                    { num: '4', text: "Gérer la conversation jusqu'à l'accord pour un appel" },
                    { num: '5', text: "Qualifier le prospect : est-ce qu'il correspond à l'ICP, est-ce qu'il est prêt, est-ce que le call vaut la peine des deux côtés" },
                    { num: '6', text: "Passer le lead au closeur avec le contexte complet — ce qui a été dit, ce qui a intéressé, ce qui a résisté" },
                  ].map(({ num, text }) => (
                    <div key={num} className="flex gap-3">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                      <p className="font-sans text-text-muted text-sm leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Ce que le setter ne fait pas : fermer des deals, envoyer des propositions commerciales,
                pitcher l&apos;offre dans le premier DM, gérer les relances post-appel.
                La séparation n&apos;est pas arbitraire — elle est fonctionnelle.
              </p>
              <p>
                La majorité des solopreneurs mélangent setting et closing dans la même action.
                Résultat : le premier message est trop long, trop tôt, trop commercial.
                Le prospect disparaît avant d&apos;avoir jamais entendu la vraie valeur de l&apos;offre.
              </p>
            </section>

            {/* Section 2 */}
            <section id="journee">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Une journée de setting B2B concrètement
              </h2>
              <p className="mb-6">
                Voici ce que fait un setter sur un programme actif.
                Pas une description abstraite — une journée réelle.
              </p>

              <div className="space-y-5">
                {[
                  {
                    time: 'Matin',
                    content: "Vérification des signaux inbound de la veille via Reactin. Qui a commenté, liké ou posé une question publique sur un contenu lié au secteur ? Chaque profil est ouvert, les posts récents sont lus. Décision pour chaque profil : contacter maintenant, mettre en attente, ou écarter. En pratique, sur 30 signaux, 8 à 12 méritent un message.",
                  },
                  {
                    time: 'Rédaction',
                    content: "Pour chaque profil retenu, un premier message est rédigé. Règle stricte : 5 phrases max, deuxième phrase = fait précis tiré du profil, aucun pitch, test du téléphone avant envoi. Claude propose un draft depuis le skill maison. Le setter lit, ajuste si besoin, valide. Le message ne part pas sans ce regard humain.",
                  },
                  {
                    time: 'Après-midi',
                    content: "Gestion des réponses en cours. Qualification des prospects qui ont répondu. Les leads niveau 4–5 passent en mode call rapide. Les tièdes entrent dans une séquence de nurturing. Le journal de bord est mis à jour : ce qui a fonctionné, ce qui a raté, les objections nouvelles, les formulations à retenir.",
                  },
                ].map(({ time, content }) => (
                  <div key={time} className="flex gap-4">
                    <span className="font-sans font-semibold text-accent text-sm shrink-0 w-20 pt-0.5">{time}</span>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{content}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                Une journée de setting efficace, c&apos;est 20 à 30 profils analysés, 10 à 15 messages
                envoyés ou gérés, et 1 à 2 RDV posés. Ce rythme prend 2 à 3 heures une fois le système calibré.
                Pendant la phase de calibration, c&apos;est davantage.
              </p>
            </section>

            {/* Section 3 */}
            <section id="linkedin">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting LinkedIn : pourquoi ce canal a changé la prospection B2B
              </h2>
              <p className="mb-4">
                LinkedIn est le canal principal du setting commercial B2B pour les solopreneurs
                et infopreneurs, parce que c&apos;est là que les acheteurs B2B se montrent.
              </p>
              <p className="mb-4">
                Un acheteur B2B qui like un post sur les marges, qui commente une question sur
                l&apos;acquisition ou qui partage un contenu sur l&apos;outbound ne sait souvent pas qu&apos;il
                vient de signaler quelque chose. Mais il l&apos;a fait. Ces interactions sont des{' '}
                <a href="/blog/signal-achat-linkedin" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  signaux d&apos;achat
                </a>{' '}
                — et les détecter systématiquement est la base du setting LinkedIn moderne.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-5 border border-black/5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                    Inbound
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Votre propre contenu génère des interactions. Reactin les capture.
                    L&apos;IA identifie les profils qui ont réagi aux posts les plus proches de votre offre.
                    Ce sont les prospects les plus chauds — ils ont levé la main sur votre terrain.
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-black/5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
                    Outbound
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Spyer surveille les comptes concurrents et complémentaires dont l&apos;audience
                    ressemble à votre ICP. Sales Navigator remonte les changements de poste, prises
                    de fonction et signaux d&apos;achat récents. L&apos;IA priorise les profils à contacter.
                  </p>
                </div>
              </div>

              <p className="mb-4">
                La différence avec la prospection à froid classique : le prospect n&apos;est pas froid.
                Il a déjà montré quelque chose. Le message s&apos;ancre sur cette preuve — et le taux
                de réponse change de nature. C&apos;est la raison pour laquelle{' '}
                <a href="/blog/messages-linkedin-sans-reponse" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  les messages génériques n&apos;obtiennent pas de réponses
                </a>{' '}
                alors que les messages ancrés sur signal dépassent 20%.
              </p>
              <p>
                Sales Navigator joue un rôle spécifique dans le flux outbound : il permet de
                définir des filtres précis (fonctions, industries, taille d&apos;entreprise, signaux
                récents de type &ldquo;changement de poste&rdquo; ou &ldquo;dans l&apos;actualité&rdquo;) et de construire
                des listes de prospects qui correspondent exactement à l&apos;ICP. Ces listes alimentent
                Spyer pour le monitoring continu. Sales Navigator définit qui surveiller. Spyer surveille.
              </p>
            </section>

            {/* Section 4 */}
            <section id="setting-closing">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting et closing : deux rôles, un pipeline
              </h2>
              <p className="mb-4">
                Le{' '}
                <a href="/blog/difference-setting-closing" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  setting et le closing sont les deux moitiés d&apos;un pipeline commercial B2B
                </a>.
                Le setter travaille avant l&apos;appel. Le closeur travaille pendant et après.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Le setter
                  </p>
                  <ul className="space-y-2 font-sans text-sm text-text-muted">
                    {[
                      'Détecte et filtre les signaux',
                      'Analyse les profils',
                      'Rédige et envoie les messages',
                      'Gère les conversations',
                      'Qualifie avant le call',
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
                  <ul className="space-y-2 font-sans text-sm text-text-muted">
                    {[
                      'Conduit la discovery',
                      'Présente la valeur',
                      'Gère les objections',
                      'Structure la proposition',
                      'Signe',
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
                et des profils différents. Un bon setter est organisé, rigoureux, à l&apos;aise avec les outils,
                capable de rédiger des messages courts et précis. Il n&apos;a pas besoin d&apos;être un vendeur exceptionnel.
              </p>
              <p>
                Un bon closeur est à l&apos;aise à l&apos;oral, capable de gérer des objections complexes,
                maîtrise la discovery. Forcer un closeur à faire son propre setting, c&apos;est lui faire
                perdre son temps sur ce qui n&apos;est pas sa compétence centrale — et souvent brûler des leads avec
                des messages mal construits.
              </p>
            </section>

            {/* Section 5 */}
            <section id="phases">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les phases d&apos;un programme de setting B2B
              </h2>
              <p className="mb-6">
                Un programme de setting B2B efficace ne se déploie pas du premier jour.
                Il se calibre. Trois phases distinctes.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Phase 0 — Stratégie et ciblage (semaine 1)
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Avant de prospecter, on définit à qui on parle. ICP précis : fonctions cibles,
                    industries, tailles d&apos;entreprise, signaux caractéristiques. Comptes à monitorer
                    via Spyer sélectionnés. Filtres Sales Navigator configurés avec les triggers actifs.
                    Sans cette étape, les messages peuvent être corrects mais ils touchent les mauvaises personnes.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Phase 1 — Calibration (mois 1–2)
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                    Les deux premiers mois sont intentionnellement humains. Chaque profil est évalué
                    à la main selon cinq niveaux de maturité d&apos;achat. Chaque message est validé avant
                    envoi. Les résultats — réponses, objections, angles qui ont fonctionné — sont notés
                    dans un journal de bord qui alimente directement la base de connaissance Claude.
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    C&apos;est pendant cette phase que le système apprend votre marché : quels signaux sont
                    vraiment des signaux, quelles formulations décrochent des réponses, quelles objections
                    reviennent. Sans cette phase, le scale produit du volume mais pas des résultats.
                    Les premiers RDV arrivent dès la semaine 1.
                  </p>
                </div>

                <div className="border-l-2 border-text-muted/20 pl-5">
                  <p className="font-sans font-semibold text-text-muted text-sm mb-2">
                    Phase 2 — Scale (mois 3+)
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Le système est calibré. Le setter intervient moins sur la rédaction, plus sur
                    la qualification. Les messages sortent plus proches de la cible dès le premier draft.
                    Les leads tièdes qui ne sont pas prêts entrent dans un nurturing newsletter —
                    ils reviennent quand leur contexte change. Les leads chauds (niveaux 4–5)
                    sont traités en priorité pour le call.
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-black/8">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Le nurturing ne s&apos;active qu&apos;en phase 2.
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  Construire un système de nurturing avant d&apos;avoir un flux de RDV stable, c&apos;est
                  ajouter de la complexité sans résoudre le vrai problème. La priorité en phase 1 :
                  remplir l&apos;agenda. Le nurturing vient après.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="ia">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                L&apos;IA dans le setting commercial moderne
              </h2>
              <p className="mb-4">
                Coller un profil dans ChatGPT et demander un message ne fonctionne pas.
                Le résultat est toujours le même — formel, bien structuré, clairement automatique.
                Taux de réponse proche de zéro. Les prospects détectent ce style à la première phrase.
              </p>
              <p className="mb-4">
                Ce qui fonctionne : former le modèle sur votre contexte spécifique. Lui donner
                vos règles non-négociables, des exemples de messages qui ont obtenu des réponses
                dans votre secteur, les objections types et les angles qui marchent.
                L&apos;IA devient co-rédacteur. Elle propose un draft. L&apos;humain valide,
                ajuste si besoin, envoie.
              </p>
              <p className="mb-4">
                Pour les clients qui le souhaitent, on construit un{' '}
                <a href="/blog/ia-methode-humain-setting-linkedin" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  skill maison
                </a>{' '}
                — un skill Claude encodé sur l&apos;expertise spécifique du client : jargon métier,
                objections connues par nom, profils types du secteur. Ce skill s&apos;améliore en continu
                via le journal de bord du setter. C&apos;est la différence entre un outil générique
                et un système qui connaît vraiment votre marché.
              </p>
              <p>
                La règle ne change pas : aucun message ne part sans validation humaine.
                L&apos;IA réduit le temps de rédaction. Elle ne remplace pas le jugement.
              </p>
            </section>

            {/* Section 7 */}
            <section id="delegation">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi déléguer son setting plutôt que le faire soi-même
              </h2>
              <p className="mb-4">
                Le setting fonctionne. La vraie question, c&apos;est le coût réel de le faire soi-même.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Le temps',
                    desc: "Un programme de setting actif prend 2 à 3 heures par jour en régime de croisière. Pendant la phase de calibration, plus. Si votre taux journalier est élevé, ces heures ont un coût d'opportunité réel. Chaque heure de prospection est une heure de moins sur ce qui vous rapporte.",
                  },
                  {
                    title: 'La courbe d\'apprentissage',
                    desc: "Un setter débutant fait des erreurs qui brûlent des leads. Un message trop long, une deuxième phrase générique, un pitch trop tôt — le prospect est perdu. Sur LinkedIn, un lead brûlé reste dans la mémoire du prospect. La deuxième chance est rare.",
                  },
                  {
                    title: 'Les outils et la méthode',
                    desc: "Reactin, Spyer, Sales Navigator, BreakCold, Claude — configurer et faire tourner cet ensemble prend du temps et de l'expertise. Déléguer à un programme qui les a déjà en place, c'est démarrer à l'étape 3 plutôt qu'à l'étape 0.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Un{' '}
                <a href="/blog/setter-b2b-definition" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  setter B2B
                </a>{' '}
                expérimenté évite les erreurs de débutant dès le premier message.
                Les outils sont déjà configurés. La méthode est déjà éprouvée. Les premiers RDV
                arrivent dès la première semaine parce que le système ne part pas de zéro.
              </p>
            </section>

            {/* Section 8 */}
            <section id="cout">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que ça coûte — et ce que ça remplace
              </h2>
              <p className="mb-6">
                Les chiffres à mettre en face les uns des autres.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    option: 'Programme setting externalisé',
                    cost: '2 000 – 5 000 € / mois',
                    note: 'Setter dédié, outils, skill maison, coaching closing selon formule.',
                    highlight: true,
                  },
                  {
                    option: 'Commercial interne',
                    cost: '45 000 – 70 000 € / an',
                    note: 'Chargé. Sans méthode structurée ni garantie de résultat. Minimum 6 mois avant d\'être opérationnel.',
                    highlight: false,
                  },
                  {
                    option: 'Faire soi-même',
                    cost: 'Gratuit… sur le papier',
                    note: 'Coût réel : 2–3h/j × votre taux journalier. Pour un consultant à 1 500€/j, c\'est 750€/j perdu sur de la prospection.',
                    highlight: false,
                  },
                ].map(({ option, cost, note, highlight }) => (
                  <div
                    key={option}
                    className={`rounded-xl p-5 border ${highlight ? 'border-accent/30 bg-accent/5' : 'border-black/8 bg-bg-secondary'}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <p className={`font-sans font-semibold text-sm ${highlight ? 'text-text-primary' : 'text-text-muted'}`}>
                        {option}
                      </p>
                      <p className={`font-sans text-sm font-semibold ${highlight ? 'text-accent' : 'text-text-muted'}`}>
                        {cost}
                      </p>
                    </div>
                    <p className="font-sans text-text-muted text-xs leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>

              <p>
                Le vrai calcul, c&apos;est le retour.
                Un programme à 3 000 € par mois qui génère 10 RDV qualifiés par mois,
                dont 3 se transforment en clients à 5 000 € chacun, rapporte 15 000 €
                pour 3 000 € investis.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fréquentes sur le setting commercial
              </h2>
              <div className="divide-y divide-black/8">
                {faqItems.map((item, i) => (
                  <div key={i} className="py-5">
                    <p className="font-sans font-semibold text-text-primary mb-2">
                      {item.question}
                    </p>
                    <p className="font-sans text-text-muted leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Internal links block */}
          <div className="mt-14 pt-8 border-t border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/blog/setter-b2b-definition', label: "C'est quoi un setter en B2B ? Rôle, missions et coût" },
                { href: '/blog/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/blog/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/blog/ia-methode-humain-setting-linkedin', label: 'IA, méthode et humain : les 3 couches d\'un système de setting' },
                { href: '/blog/messages-linkedin-sans-reponse', label: 'Pourquoi vos messages LinkedIn n\'obtiennent pas de réponses' },
                { href: '/blog/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : méthode complète en 2026' },
                { href: '/blog/comment-devenir-setter-b2b', label: 'Comment devenir setter B2B en 2026' },
                { href: '/blog/cout-setter-b2b-prix', label: "Coût d'un setter B2B en 2026 : les vrais chiffres" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez un programme de setting qui tourne ?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              On construit le système complet : stratégie, ciblage, skill maison,
              setter dédié, coaching closing. Premiers RDV qualifiés dès la semaine 1.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/blog"
              className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              ← Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
