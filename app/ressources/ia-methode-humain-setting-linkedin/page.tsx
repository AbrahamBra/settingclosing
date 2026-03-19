import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: "IA, méthode et humain : les 3 couches d'une machine à RDV LinkedIn | ChallengersLab",
  description:
    "Comment construire un système de setting LinkedIn qui combine détection IA des signaux, scoring humain de la maturité d'achat, et co-rédaction Claude. Deux phases, deux modes de message, exemples concrets.",
  openGraph: {
    title: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn",
    description:
      "L'IA détecte. La méthode filtre. L'humain valide. Pourquoi les 3 couches sont nécessaires, et comment les calibrer pour tenir sur la durée.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/ressources/ia-methode-humain-setting-linkedin',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/ressources/ia-methode-humain-setting-linkedin',
  headline: "IA, méthode et humain : les 3 couches d'une machine à RDV LinkedIn",
  description:
    "Un système de setting LinkedIn qui tient combine trois couches distinctes : l'IA pour la détection et la co-rédaction, la méthode pour le scoring et les règles non-négociables, et l'humain pour la validation et la décision. Explications et exemples.",
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://challengerslab.fr/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/ressources/ia-methode-humain-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/ressources/ia-methode-humain-setting-linkedin',
  },
}

const faqItems = [
  {
    question: "Combien de temps faut-il pour calibrer le système ?",
    answer:
      "Environ deux mois. La première phase est humaine : l'œil du setter juge chaque profil, valide ou corrige chaque message, et prend des notes dans un journal de bord. Ces notes alimentent les documents d'input en continu. Au bout de deux mois, le système est assez calibré pour tourner avec moins d'intervention manuelle. C'est ce travail de calibration qui fait la différence entre un système qui tient et un qui produit du bruit.",
  },
  {
    question: "Quelle est la différence entre le mode 'one shot' et le mode 'conversation' ?",
    answer:
      "Le mode one shot s'applique aux signaux forts et aux leads tier 1 : un seul message bien construit, qui référence le signal et propose directement le call. Le mode conversation s'applique aux signaux faibles, aux profils sur-sollicités ou aux prospects tiers sans signal récent : un premier message court pour qualifier, puis une séquence en plusieurs étapes avec des angles différents à chaque relance. Le mode est déterminé par la qualité du signal, pas par le secteur.",
  },
  {
    question: "Pourquoi l'IA seule produit-elle des messages de mauvaise qualité ?",
    answer:
      "Parce que sans base de connaissance métier ni règles explicites, un LLM produit un style formel et générique — des formules creuses, des deuxièmes phrases qui s'appliquent à des milliers de profils, des structures qui sonnent comme des emails automatiques. L'IA devient utile quand on lui a appris le contexte spécifique du client, les règles non-négociables et les exemples de messages qui ont réellement obtenu des réponses. Elle devient alors co-rédacteur, pas générateur.",
  },
  {
    question: "Le nurturing LinkedIn est-il utile dès le départ ?",
    answer:
      "Non. Le nurturing n'a de sens que quand le volume de RDV est déjà là — quand le problème devient 'comment trier les leads chauds des leads tièdes' plutôt que 'comment obtenir plus de RDV'. Pour un solopreneur qui démarre ou qui a du mal à remplir son agenda, la priorité est le setting direct. Les leads tièdes qui ne sont pas prêts rentrent en nurturing vers une newsletter — mais seulement une fois que le pipeline principal est stable.",
  },
  {
    question: "Comment améliorer la base de connaissance au fil du temps ?",
    answer:
      "Via le journal de bord du setter. À chaque échange terrain — une réponse inattendue, une objection nouvelle, un angle qui a fonctionné — le setter note ce qu'il observe. Ces notes alimentent directement les documents d'input de Claude : les exemples de bons messages, les contre-exemples, les règles sectorielles. C'est un système cyclique : plus on prospècte, meilleure devient la base, meilleurs deviennent les messages.",
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
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://challengerslab.fr/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'IA, méthode et humain : setting LinkedIn',
      item: 'https://challengerslab.fr/ressources/ia-methode-humain-setting-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <NavbarBlog />

      <main className="bg-bg-primary min-h-screen">
        <div className="container-max max-w-2xl py-16 px-4">

          {/* Breadcrumb */}
          <nav className="font-sans text-xs text-text-muted mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-text-primary transition-colors">Accueil</a>
            <span className="mx-2">/</span>
            <a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a>
            <span className="mx-2">/</span>
            <span className="text-text-primary">IA, méthode et humain</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Méthode · Setting LinkedIn
            </p>
            <h1 className="font-serif text-[2rem] sm:text-[2.5rem] leading-[1.15] text-text-primary mb-6">
              IA, méthode et humain : les 3 couches d&apos;un système de setting LinkedIn qui tient sur la durée
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              Coller un profil dans Claude ou ChatGPT et demander un message de prospection
              donne presque toujours la même chose : formel, bien structuré, clairement automatique.
              Le taux de réponse reste à 3%. La conclusion rapide : LinkedIn ne marche pas pour eux.
              La vraie raison : le modèle n&apos;a aucun contexte sur leur marché.
            </p>
            <AuthorBlock date="2026-03-17" readTime="12 min de lecture" dateLabel="17 mars 2026" />
          </header>

          {/* Definition block — GEO */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Définition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Setting LinkedIn signal-based avec co-rédaction IA
            </p>
            <p className="font-sans text-text-muted text-sm leading-relaxed">
              Un système de setting LinkedIn signal-based combine trois couches distinctes :
              l&apos;IA pour détecter les interactions et co-rédiger les messages, la méthode
              pour scorer les leads par maturité d&apos;achat et imposer les règles de rédaction,
              et l&apos;humain pour valider chaque message avant envoi et prendre les décisions
              de <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial B2B</a> et closing. Aucun message ne part sans avoir passé les trois filtres.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {[
              { stat: '< 3 %', label: 'taux de réponse sans méthode' },
              { stat: '> 20 %', label: 'avec signal + personnalisation' },
              { stat: '2 mois', label: 'pour calibrer le système' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-muted">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-muted leading-relaxed space-y-10">

            {/* Section 1 */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Pourquoi l&apos;IA seule ne suffit pas
              </h2>
              <p className="mb-4">
                Coller un profil LinkedIn dans ChatGPT et demander un message de prospection
                donne toujours le même résultat : un texte poli, bien structuré, qui commence
                par "J&apos;espère que vous allez bien" et se termine par "N&apos;hésitez pas à me
                revenir". C&apos;est exactement le style que les prospects ont appris à ignorer.
              </p>
              <p className="mb-4">
                Le problème n&apos;est pas l&apos;outil. C&apos;est que l&apos;outil n&apos;a jamais vu votre marché.
                Il ne sait pas pourquoi ce profil précis mérite d&apos;être contacté aujourd&apos;hui,
                ni quelles formulations ont obtenu des réponses dans votre secteur.
                Il n&apos;a pas le contexte. Il n&apos;a pas les règles. Il a juste du style —
                et le style sans substance produit exactement ce qu&apos;on veut éviter.
              </p>
              <p>
                Donnez-lui le contexte, les règles et deux ou trois exemples de messages
                qui ont marché dans votre secteur — les messages changent de nature.
                Ils sonnent écrits depuis un téléphone un mardi matin, parce qu&apos;ils le sont presque.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Phase 1 — La calibration : l&apos;œil avant la machine (2 mois)
              </h2>
              <p className="mb-4">
                Avant de pouvoir déléguer à un système, il faut le calibrer. Cette phase dure
                environ deux mois. Elle est intentionnellement humaine.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Le scoring à l&apos;œil
              </h3>
              <p className="mb-4">
                Chaque profil détecté par l&apos;IA est évalué manuellement selon cinq niveaux
                de maturité d&apos;achat — du like passif sur un post de découverte au signal
                fort sur un post d&apos;achat. Ce jugement ne peut pas être entièrement automatisé
                au départ : c&apos;est l&apos;œil du setter qui construit la référence.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Les 5 niveaux de maturité
                </p>
                {[
                  { level: 1, label: 'Like passif', desc: 'Intérêt latent. Qualifier avant tout. Template court, question ouverte.' },
                  { level: 2, label: 'Commentaire neutre', desc: 'Signal moyen. Lire le commentaire, adapter la réponse au contenu.' },
                  { level: 3, label: 'Commentaire précis ou question', desc: 'Signal fort. Répondre directement au fond, proposer le call.' },
                  { level: 4, label: 'Répond à un DM', desc: 'En conversation. Prompt Claude inbound. Qualifier avant call.' },
                  { level: 5, label: 'Signal sur post achat', desc: 'Phase décisionnelle. Call direct justifié. Fenêtre courte.' },
                ].map(({ level, label, desc }) => (
                  <div key={level} className="flex gap-4 mb-3 last:mb-0">
                    <span className="font-serif text-accent/50 text-lg leading-snug shrink-0 w-5">
                      {level}
                    </span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm">{label}</p>
                      <p className="font-sans text-text-muted text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Claude Code + Google Sheet
              </h3>
              <p className="mb-4">
                L&apos;analyse de chaque profil est faite via Claude Code : titre, bio, posts récents,
                connexions communes. Le résultat est déposé dans un Google Sheet structuré —
                contacter ou non, contexte clé, segment probable, ébauche du message.
                L&apos;humain consulte la feuille, valide ou corrige le jugement, note ce qui
                ne correspondait pas.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Le journal de bord : le moteur de l&apos;amélioration
              </h3>
              <p className="mb-4">
                À chaque échange terrain, le setter note ce qu&apos;il observe : un angle
                qui a déclenché une réponse, une objection qu&apos;il n&apos;avait pas anticipée,
                une formulation qui sonnait faux à la relecture. Ces notes alimentent
                directement les documents d&apos;input de Claude — les règles s&apos;affinent,
                les exemples s&apos;accumulent, les contre-exemples aussi.
              </p>
              <p>
                Deux mois de ce cycle et le système n&apos;est plus le même. Les messages sortent
                plus proches de la cible, le setter corrige moins, les réponses arrivent plus vite.
                C&apos;est itératif dans le sens littéral : chaque échange améliore le suivant.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Les 3 couches du système calibré
              </h2>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Couche 1 — L&apos;IA comme radar et co-rédacteur
              </h3>
              <p className="mb-4">
                <strong className="text-text-primary">Reactin</strong> surveille les interactions
                sur vos posts LinkedIn.{' '}
                <strong className="text-text-primary">Spyer</strong> surveille les comptes
                concurrents et complémentaires — ceux dont l&apos;audience ressemble à votre ICP.
                L&apos;IA détecte qui a interagi, quand, avec quel type de contenu.
              </p>
              <p className="mb-4">
                En phase de co-rédaction, Claude analyse le profil du prospect et propose
                un premier draft. Ce n&apos;est pas de la génération : c&apos;est de la co-rédaction.
                Claude propose. L&apos;humain valide, ajuste, envoie.
              </p>
              <p className="mb-4">
                La formation du modèle se fait une fois, en amont. On lui fournit des exemples
                de messages qui ont obtenu des réponses, des contre-exemples à éviter
                (bullets, pitch complet en DM 1, formules creuses), et les règles non-négociables.
                Une fois entraîné, il sort des messages qui sonnent écrits par une vraie personne.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Couche 2 — La méthode comme filtre
              </h3>
              <p className="mb-4">
                La méthode encode ce que le modèle ne sait pas inventer : le niveau de
                maturité qui détermine quel type de message envoyer, les règles non-négociables
                de rédaction, et le test du téléphone qui valide chaque draft.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-accent/10">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Règles non-négociables transmises au modèle
                </p>
                <ul className="space-y-2">
                  {[
                    'Commencer par "Bonjour Prénom," — jamais Madame, jamais Monsieur',
                    '2e phrase = fait précis tiré du profil LinkedIn. Jamais une généralité.',
                    '5 phrases max en outbound. 3 phrases max en réponse inbound.',
                    'Pas de tirets, pas de bullet points, pas de formules automatiques.',
                    'Jamais pitcher dans les 2 premiers messages.',
                    'Test du téléphone avant envoi. Si non : réécrire.',
                  ].map((rule) => (
                    <li key={rule} className="flex gap-3 font-sans text-sm text-text-muted">
                      <span className="text-accent shrink-0">→</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Couche 3 — L&apos;humain comme décideur
              </h3>
              <p className="mb-4">
                Aucun message ne part sans validation humaine. C&apos;est la règle la plus importante
                du système. Pas parce que l&apos;IA est mauvaise — mais parce que le risque d&apos;envoyer
                un mauvais message est asymétrique : un message raté brûle le lead,
                souvent définitivement.
              </p>
              <p>
                C&apos;est aussi l&apos;humain qui lit la conversation, sent si le prospect est prêt
                ou pas, et décide si on pousse ou si on laisse maturer. La machine ne peut pas
                faire ce jugement. Pas encore — et probablement pas pour ce type de vente.
              </p>
            </section>

            {/* Section 4 — Two modes */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Deux modes de message selon la qualité du signal
              </h2>
              <p className="mb-6">
                Tout signal ne se traite pas de la même façon. La qualité de l&apos;interaction
                détermine le mode d&apos;approche. Deux modes coexistent dans le système.
              </p>

              {/* Mode 1 */}
              <div className="bg-bg-secondary rounded-xl p-6 mb-4 border-l-2 border-accent">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Mode One Shot — Signal fort ou lead tier 1
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2 text-sm">
                  Quand l&apos;utiliser
                </p>
                <p className="font-sans text-text-muted text-sm mb-4">
                  Signal récent (moins de 2 semaines), interaction forte — commentaire précis,
                  question publique, partage avec avis. Ou lead tier 1 : connexion commune solide,
                  profil correspondant exactement à l&apos;ICP prioritaire. La fenêtre est courte.
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2 text-sm">
                  Structure
                </p>
                <ul className="space-y-1.5 font-sans text-sm text-text-muted">
                  {[
                    'Phrase 1 : Bonjour Prénom + référence directe au signal',
                    'Phrase 2 : Fait précis qui montre que vous avez lu (connexion commune, question spécifique)',
                    'Phrase 3 : Une seule phrase de différenciation, pas un pitch',
                    'Phrase 4 : Question ou proposition de call directe',
                  ].map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-text-muted text-xs mt-4 italic">
                  Objectif : call direct dans les 48h. Ne pas passer en mode conversation si le signal est fort.
                </p>
              </div>

              {/* Mode 2 */}
              <div className="bg-bg-secondary rounded-xl p-6 border-l-2 border-text-muted/30">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                  Mode Conversation — Signal faible ou profil froid
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2 text-sm">
                  Quand l&apos;utiliser
                </p>
                <p className="font-sans text-text-muted text-sm mb-4">
                  Like passif, signal ancien (plus de 2 semaines), prospect sur-sollicité,
                  lead tiers sans interaction directe récente. La fenêtre n&apos;est pas fermée,
                  mais elle n&apos;est pas ouverte non plus.
                </p>
                <p className="font-sans text-text-primary font-semibold mb-2 text-sm">
                  Structure séquentielle
                </p>
                <ul className="space-y-1.5 font-sans text-sm text-text-muted">
                  {[
                    'DM 1 : court, question ouverte pour qualifier. Pas de pitch.',
                    'Si réponse : prompt Claude inbound → qualifier → call si niveau 4–5',
                    'J+3 à J+5 sans réponse : angle différent, fait nouveau',
                    'J+8 à J+12 : dernière relance, nouvelle information',
                    'J+21 à J+28 : fermeture propre. Pas de pression.',
                  ].map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-text-muted/50 shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-text-muted text-xs mt-4 italic">
                  Jamais mentionner l&apos;absence de réponse. Apporter quelque chose de nouveau à chaque étape.
                </p>
              </div>
            </section>

            {/* Section 5 — Examples */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                En pratique : mauvais draft vs version corrigée
              </h2>
              <p className="mb-6">
                Ces exemples sont anonymisés depuis des situations réelles sur deux marchés B2B différents.
                Même logique dans les deux cas : le premier draft ignore les règles,
                la version corrigée les applique toutes. Les erreurs les plus communes — et comment les corriger — sont analysées dans <a href="/ressources/messages-linkedin-sans-reponse" className="text-accent hover:underline transition-colors">Pourquoi vos messages LinkedIn n&apos;obtiennent pas de réponses</a>.
              </p>

              {/* Example 1 */}
              <div className="mb-10">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Exemple 1 — SaaS B2B, cible agence digitale
                </p>
                <div className="bg-bg-secondary rounded-xl p-5 mb-1">
                  <p className="font-sans text-xs text-text-muted mb-2 uppercase tracking-wider">Contexte</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Profil : Camille D., fondatrice agence digitale, 12 personnes, clients PME régionaux.
                    Post récent : <em>&ldquo;Nos clients nous posent de plus en plus de questions sur la visibilité IA.
                    On réfléchit à structurer une offre.&rdquo;</em> Signal : commentaire public → mode one shot justifié.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 mb-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                    Premier draft — à ne pas envoyer
                  </p>
                  <p className="font-sans text-text-muted text-sm italic leading-relaxed mb-4">
                    &ldquo;Bonjour Camille, j&apos;espère que vous allez bien. Je travaille avec des agences digitales
                    pour les aider à proposer des offres IA à leurs clients. Notre solution mesure la
                    visibilité de vos clients sur ChatGPT et les LLM. Setup en 5 minutes, rapports automatiques.
                    Vous auriez 20 minutes cette semaine ?&rdquo;
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      '✗ "J\'espère que vous allez bien" → marqueur automatique immédiat',
                      '✗ 2e phrase = généralité sur "les agences digitales" → rien sur Camille',
                      '✗ Pitch produit dans le premier DM → trop tôt',
                      '✗ Test du téléphone : non',
                    ].map((e) => (
                      <li key={e} className="font-sans text-sm text-red-400/80">{e}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    Version corrigée — mode one shot
                  </p>
                  <p className="font-sans text-text-muted text-sm italic leading-relaxed">
                    &ldquo;Bonjour Camille, j&apos;ai vu votre post sur l&apos;offre GEO en construction.
                    Ce qui manque souvent à ce stade : une métrique pour prouver à vos clients que ça fonctionne.
                    Vous avez déjà trouvé comment mesurer la visibilité sur les LLM concrètement ?&rdquo;
                  </p>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Exemple 2 — Finance alternative, cible dirigeant
                </p>
                <div className="bg-bg-secondary rounded-xl p-5 mb-1">
                  <p className="font-sans text-xs text-text-muted mb-2 uppercase tracking-wider">Contexte</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Profil : Thomas M., directeur financier, startup parisienne. Posts récents :
                    questions sur les structures d&apos;investissement alternatif, fiscalité internationale.
                    Connexion commune avec un client existant. Signal : like + connexion commune → mode conversation.
                  </p>
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 mb-1">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                    Premier draft — à ne pas envoyer
                  </p>
                  <p className="font-sans text-text-muted text-sm italic leading-relaxed mb-4">
                    &ldquo;Bonjour Thomas, je me permets de vous contacter car je travaille avec des dirigeants
                    qui cherchent des placements à fort rendement. Mon approche combine sélection d&apos;actifs
                    et structure juridique optimisée. Rendement cible : 15% annuel. Vous seriez disponible
                    pour un appel de 20 minutes ?&rdquo;
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      '✗ "Je me permets de vous contacter" → formule automatique classique',
                      '✗ 2e phrase = généralité → aucun fait tiré du profil de Thomas',
                      '✗ Chiffre mis en avant sans contexte → sonne comme une promesse commerciale',
                      '✗ La connexion commune n\'est pas mentionnée → signal social manqué',
                    ].map((e) => (
                      <li key={e} className="font-sans text-sm text-red-400/80">{e}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
                    Version corrigée — mode conversation (DM 1 de qualification)
                  </p>
                  <p className="font-sans text-text-muted text-sm italic leading-relaxed">
                    &ldquo;Bonjour Thomas, j&apos;ai vu votre question sur les structures d&apos;investissement
                    à l&apos;international. On a un contact en commun : Marc travaille avec moi depuis quelques
                    mois sur un sujet assez proche. Ce que je fais est différent du classique —
                    vous avez 20 min cette semaine pour que je vous explique la structure ?&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 — Scale & nurturing */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Phase 2 — Le scale : quand le nurturing devient utile
              </h2>
              <p className="mb-4">
                Le nurturing LinkedIn n&apos;est pas une stratégie de départ. C&apos;est une stratégie
                de triage. Elle n&apos;a de sens que quand le problème a changé.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-sans font-semibold text-text-muted text-sm mb-2">
                    Avant le nurturing (phase 1)
                  </p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    Le problème : pas assez de RDV. La solution : setting direct,
                    signal + message + qualification. À ce stade, le nurturing ajoute
                    de la complexité sans ajouter de rendez-vous.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">
                    Quand le nurturing s&apos;active (phase 2)
                  </p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">
                    Le problème : trop de leads, comment trier. Les leads chauds (niveaux 4–5)
                    sont priorisés pour le call. Les leads tièdes (niveaux 2–3) entrent dans
                    une newsletter. Ils reviennent quand leur contexte change.
                  </p>
                </div>
              </div>
              <p className="mb-4">
                La newsletter n&apos;est pas là pour &ldquo;engager la communauté&rdquo;. Elle existe pour
                que les leads tièdes — ceux qui ne sont pas encore prêts — restent dans
                l&apos;orbite jusqu&apos;à ce que leur contexte change. Le moment où ça change,
                ils pensent à vous en premier.
              </p>
              <p>
                Ce mécanisme ne fonctionne qu&apos;une fois que le pipeline principal est stable.
                Construire le nurturing avant d&apos;avoir les 10 premiers RDV est une façon de
                ne jamais avoir les 10 premiers RDV.
              </p>
            </section>

            {/* Section 7 — Summary */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-4">
                Ce que ça change dans la pratique
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: "Semaine 1",
                    desc: "Détection des premiers signaux, analyse de profils, Google Sheet rempli. Premiers messages envoyés. Premiers retours notés dans le journal de bord.",
                  },
                  {
                    title: "Mois 1",
                    desc: "Le scoring s'affine. Les règles sectorielles se précisent. La base de connaissance s'enrichit. Les premiers RDV arrivent dès la fin de la première semaine.",
                  },
                  {
                    title: "Mois 2",
                    desc: "Le système est calibré. Les modes one shot / conversation sont appliqués automatiquement selon le signal. Le setter intervient moins sur la rédaction, plus sur la qualification.",
                  },
                  {
                    title: "Mois 3+",
                    desc: "Le nurturing s'active si le volume le justifie. Les leads tièdes rentrent dans la newsletter. Les chauds sont traités en priorité. Le closing structure les appels.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="font-sans font-semibold text-accent text-sm shrink-0 w-16">{title}</span>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-h3 text-text-primary mb-6">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                {faqItems.map(({ question, answer }) => (
                  <div key={question}>
                    <h3 className="font-sans font-semibold text-text-primary mb-2 text-base">
                      {question}
                    </h3>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">
                      {answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] text-center">
            <p className="font-serif text-xl text-text-primary mb-3">
              Vous voulez que ce système tourne pour vous ?
            </p>
            <p className="font-sans text-text-muted text-sm mb-6">
              On calibre, on construit la base de connaissance, on lance. Premiers RDV dès la première semaine.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <a
              href="/ressources"
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
