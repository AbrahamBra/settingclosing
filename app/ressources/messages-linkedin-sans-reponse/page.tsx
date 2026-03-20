import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: "Messages LinkedIn sans réponse | Setting",
  description:
    "5 erreurs qui tuent vos taux de réponse LinkedIn et comment les corriger. Exemples réels de mauvais messages et versions corrigées.",
  openGraph: {
    title: "Messages LinkedIn sans réponse | Setting",
    description:
      "Pitch trop tôt, deuxième phrase générique, test du téléphone raté. Les 5 erreurs de prospection LinkedIn les plus courantes — avec corrections.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/messages-linkedin-sans-reponse',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/messages-linkedin-sans-reponse',
  headline: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses",
  description:
    "Les 5 erreurs qui tuent les taux de réponse LinkedIn : pitch trop tôt, deuxième phrase générique, formules automatiques, longueur excessive et test du téléphone raté.",
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/messages-linkedin-sans-reponse',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/messages-linkedin-sans-reponse',
  },
  image: 'https://www.setting.live/ressources/messages-linkedin-sans-reponse/opengraph-image',
}

const faqItems = [
  {
    question: 'Combien de phrases doit faire un bon message de prospection LinkedIn ?',
    answer:
      "5 phrases maximum en outbound (premier contact à froid). 3 phrases maximum en inbound (réponse à un prospect qui a réagi). Au-delà, le taux de réponse chute. La longueur est un signal involontaire : un message court dit \"je respecte votre temps\". Un message long dit \"j'ai besoin de vous convaincre\".",
  },
  {
    question: "Faut-il personnaliser chaque message manuellement ?",
    answer:
      "La deuxième phrase doit être personnalisée — un fait précis tiré du profil LinkedIn du prospect. Le reste peut suivre une structure. L'IA (Claude, par exemple) peut analyser un profil et proposer cette deuxième phrase. Vous validez, vous ajustez. Ce n'est pas de la génération automatique : c'est de la co-rédaction assistée.",
  },
  {
    question: "C'est quoi le test du téléphone ?",
    answer:
      "Avant d'envoyer un message, posez-vous cette question : est-ce que ce message pourrait être envoyé tel quel depuis mon téléphone un mardi matin ? Si la réponse est non — si ça sonne trop formel, trop structuré, trop \"email automatique\" — réécrivez. Ce test filtre 80 % des messages qui n'obtiendront jamais de réponse.",
  },
  {
    question: "Quand peut-on pitcher l'offre dans la conversation ?",
    answer:
      "Jamais dans le premier message. L'objectif du premier DM est unique : ouvrir la conversation. La qualification vient après la réponse. Le pitch vient après la qualification. Compresser ces étapes en un seul message fait chuter le taux de réponse et brûle le lead.",
  },
  {
    question: "Les formules de politesse sont-elles vraiment un problème ?",
    answer:
      "\"J'espère que vous allez bien\", \"je me permets de vous contacter\", \"n'hésitez pas à revenir vers moi\" : ces formules sont identifiées comme des marqueurs d'email automatique. Le prospect les voit et sait immédiatement que ce message a été envoyé à des centaines d'autres. L'effet est l'opposé de la personnalisation.",
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
      name: "Messages LinkedIn sans réponse",
      item: 'https://www.setting.live/ressources/messages-linkedin-sans-reponse',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const errors = [
  {
    number: '01',
    title: 'Le pitch produit au premier message',
    body: "L'erreur la plus courante. Le premier DM présente l'offre, les avantages, parfois même le prix. Le prospect n'a pas demandé à être pitché — il a juste réagi à un contenu. La transition de \"intérêt passif\" à \"pitch commercial\" est trop brutale. Le prospect décroche.",
    rule: "Le premier message n'a qu'un objectif : ouvrir la conversation. Pas vendre.",
  },
  {
    number: '02',
    title: 'La deuxième phrase est une généralité',
    body: "\"Je travaille avec des solopreneurs qui veulent développer leur activité.\" Cette phrase s'applique à des milliers de personnes. Elle ne dit rien sur le prospect spécifiquement. La deuxième phrase doit être un fait précis tiré du profil LinkedIn de la personne — un post récent, une question posée, une expérience particulière.",
    rule: "Deuxième phrase = fait précis tiré du profil. Jamais une généralité.",
  },
  {
    number: '03',
    title: 'Les formules automatiques',
    body: "\"J'espère que vous allez bien.\" \"Je me permets de vous contacter.\" \"N'hésitez pas à revenir vers moi.\" Ces formules sont des marqueurs d'email automatique. Dès que le prospect les voit, il sait que ce message a été envoyé à des centaines d'autres. L'effet de personnalisation disparaît immédiatement.",
    rule: "Pas de formule de politesse creuse. Aller droit au sujet.",
  },
  {
    number: '04',
    title: 'Le message est trop long',
    body: "Un message de 8 phrases en prospection froide est un monologue. Le prospect n'a pas demandé à lire un argumentaire. Un message court dit \"je respecte votre temps\". Un message long dit \"j'ai besoin de vous convaincre\". La longueur est un signal involontaire — et il travaille contre vous.",
    rule: "5 phrases max en outbound. 3 phrases max en réponse inbound.",
  },
  {
    number: '05',
    title: 'Le message échoue le test du téléphone',
    body: "Lisez votre message à voix haute. Si ça sonne comme un email corporate, si vous entendez \"le LLM\", si aucun être humain ne parlerait comme ça dans une vraie conversation — réécrivez. Le test est simple : est-ce que ce message pourrait être envoyé depuis mon téléphone un mardi matin ?",
    rule: "Si la réponse est non, réécrivez. Pas d'exception.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MessagesLinkedInSansReponsePage() {
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
              <li className="text-text-primary">Messages sans réponse</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/setting" className="hover:underline transition-colors">Setting</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Pourquoi vos messages LinkedIn n&apos;obtiennent pas de réponses
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Ce n&apos;est pas LinkedIn qui ne fonctionne pas. Ce sont 5 erreurs précises
              qui tuent les taux de réponse — et qui se corrigent avec une règle simple à chaque fois.
            </p>
            <AuthorBlock date="2026-03-17" readTime="8 min de lecture" dateLabel="17 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stat block */}
          <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
            <p className="font-sans font-semibold text-text-primary mb-1">
              Le taux de réponse moyen sur les messages LinkedIn non personnalisés est inférieur à 3&nbsp;%.
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Sur des messages construits sur signal d&apos;achat, avec une deuxième phrase personnalisée
              et le bon niveau d&apos;intensité selon le signal — ce taux dépasse régulièrement 20&nbsp;%.
              La différence n&apos;est pas la plateforme. C&apos;est la méthode.
              (Source : données terrain Setting, 2025–2026)
            </p>
          </div>

          {/* Les 5 erreurs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-8">
              Les 5 erreurs qui tuent vos taux de réponse
            </h2>

            <div className="space-y-8">
              {errors.map((e) => (
                <div key={e.number} className="flex gap-5">
                  <div className="shrink-0 pt-1">
                    <span className="font-serif text-2xl text-accent/30 font-semibold leading-none">
                      {e.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-text-primary mb-2">{e.title}</h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">{e.body}</p>
                    <div className="flex gap-2 items-start">
                      <span className="text-accent shrink-0 mt-0.5 text-xs font-semibold font-sans">→</span>
                      <p className="font-sans text-sm font-semibold text-text-primary">{e.rule}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bad draft vs good draft — Exemple 1 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              En pratique : mauvais draft vs version corrigée
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Ces exemples sont anonymisés et généralisés depuis des situations réelles.
              Même structure, même secteur fictif. Ce qui change : l&apos;application des règles.
            </p>

            {/* Exemple 1 */}
            <div className="mb-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                Contexte
              </p>
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-6 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Profil :</strong> Directrice d&apos;agence digitale, 12 personnes, clients PME.
                Post récent : &quot;Nos clients nous posent de plus en plus de questions sur la visibilité IA. On réfléchit à structurer une offre.&quot;
                Signal : commentaire public → signal moyen/fort.
              </div>

              {/* Mauvais draft */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">
                    Premier draft — à ne pas envoyer
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Sophie, j&apos;espère que vous allez bien. Je travaille avec des agences digitales
                    pour les aider à développer leurs offres autour de l&apos;IA. Notre solution permet de mesurer
                    la visibilité de vos clients sur ChatGPT, Claude et Perplexity, avec un setup en 5 minutes
                    et des rapports automatiques. Est-ce que vous auriez 20 minutes cette semaine pour qu&apos;on
                    en discute ?&quot;
                  </p>
                </div>
              </div>

              {/* Analyse */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5 mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">
                  Pourquoi c&apos;est faux
                </p>
                <ul className="space-y-2">
                  {[
                    "\"J'espère que vous allez bien\" → marqueur automatique, supprime immédiatement l'effet de personnalisation",
                    "Deuxième phrase = généralité sur \"les agences digitales\" → ne dit rien sur Sophie spécifiquement",
                    "Pitch complet dans le premier message → trop tôt, le prospect n'a pas encore exprimé de besoin",
                    "Test du téléphone : non. Personne n'écrit comme ça depuis son téléphone un mardi matin",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Version corrigée */}
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">
                    Version corrigée — à envoyer
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Sophie, j&apos;ai vu votre post sur l&apos;offre visibilité IA en construction.
                    Ce qui manque souvent à ce stade : une métrique pour prouver que ça marche côté client.
                    Vous avez déjà trouvé comment mesurer ça concrètement ?&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
                Contexte
              </p>
              <div className="bg-bg-secondary rounded-xl px-6 py-4 border border-white/[0.06] mb-6 font-sans text-sm text-text-secondary leading-relaxed">
                <strong className="text-text-primary font-semibold">Profil :</strong> Consultant indépendant, spécialisé B2B.
                Post récent liké : question sur les LLC et la structuration juridique à l&apos;international.
                Connexion commune avec un client existant.
                Signal : like + connexion commune → signal inbound moyen.
              </div>

              {/* Mauvais draft */}
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden mb-4">
                <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">
                    Premier draft — à ne pas envoyer
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Nicolas, je me permets de vous contacter car je travaille avec des consultants
                    indépendants B2B. Mon programme aide à structurer un pipeline de prospection efficace,
                    avec un système de setting et closing éprouvé. Rendement garanti : 5 RDV qualifiés
                    minimum par mois. Vous seriez disponible pour un appel de 20 minutes ?&quot;
                  </p>
                </div>
              </div>

              {/* Analyse */}
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5 mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">
                  Pourquoi c&apos;est faux
                </p>
                <ul className="space-y-2">
                  {[
                    "\"Je me permets de vous contacter\" → formule automatique, signe d'un message générique",
                    "Deuxième phrase = généralité sur \"les consultants indépendants\" → aucun signal terrain utilisé",
                    "Chiffre mis en avant (5 RDV) sans contexte → sonne comme une promesse commerciale, pas un échange",
                    "La connexion commune n'est pas mentionnée → signal social ignoré, accroché manqué",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                      <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Version corrigée */}
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                <div className="px-6 py-3 border-b border-green-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-green-400 uppercase tracking-widest">
                    Version corrigée — à envoyer
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Nicolas, j&apos;ai vu votre question sur la structuration juridique à l&apos;international.
                    On a un contact en commun : Thomas travaille avec moi depuis quelques mois sur exactement
                    ce sujet. Ce que je fais est différent du coaching classique — vous avez 20 min
                    cette semaine pour que je vous explique la structure ?&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section — Deux modes de message */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Deux modes de message selon le signal
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Un signal fort et un signal faible n&apos;appellent pas la même approche.
              Appliquer la même structure à tout le monde revient à traiter un prospect chaud
              comme un contact froid — et à brûler les meilleures opportunités.
              Il existe deux modes, avec des objectifs distincts.
            </p>

            {/* Comparison cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* Mode One Shot */}
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 overflow-hidden">
                <div className="px-5 py-3 border-b border-blue-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-blue-400 uppercase tracking-widest">
                    Mode One Shot — Tier 1
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-semibold">Signal fort :</strong>{' '}
                    commentaire direct sur votre sujet, question publique liée à votre offre,
                    interaction répétée sur plusieurs posts, a mentionné un problème que vous résolvez.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-semibold">Objectif :</strong>{' '}
                    décrocher un rendez-vous dans le premier échange. Pas de nurturing,
                    pas de phase de découverte en DM. Un message, une question de qualification directe,
                    un appel proposé.
                  </p>
                  <div className="rounded-lg border border-blue-500/15 bg-white/[0.03] px-4 py-4">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">
                      Structure
                    </p>
                    <ol className="space-y-1.5">
                      {[
                        'Observation précise du signal (1 phrase)',
                        'Ce que ce signal dit de leur situation (1 phrase)',
                        'Question de qualification directe ou proposition d\'appel',
                      ].map((s, i) => (
                        <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                          <span className="text-blue-400 font-semibold shrink-0">{i + 1}.</span>
                          <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* Mode Conversation */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 overflow-hidden">
                <div className="px-5 py-3 border-b border-amber-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    Mode Conversation — Tier 2 / 3
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-semibold">Signal faible ou indirect :</strong>{' '}
                    like passif, commentaire hors-sujet, vue de profil, demande de connexion sans message,
                    monitoring de compte concurrent ou complémentaire.
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-semibold">Objectif :</strong>{' '}
                    ouvrir la conversation, qualifier sur 2 à 3 échanges. Pas de rendez-vous
                    dans le premier message — ce serait aller trop vite. On teste l&apos;intérêt
                    avant de proposer quoi que ce soit.
                  </p>
                  <div className="rounded-lg border border-amber-500/15 bg-white/[0.03] px-4 py-4">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-2">
                      Structure
                    </p>
                    <ol className="space-y-1.5">
                      {[
                        'Fait précis tiré du profil (1 phrase)',
                        'Micro-question ouverte — pas de pitch (1 phrase)',
                        'Attendre la réponse → qualifier en étape 2',
                      ].map((s, i) => (
                        <li key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                          <span className="text-amber-400 font-semibold shrink-0">{i + 1}.</span>
                          <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemples des deux modes */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-5">
              Même profil, deux intensités de signal — deux messages différents
            </p>

            <div className="space-y-4 mb-6">
              {/* One Shot example */}
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 overflow-hidden">
                <div className="px-5 py-3 border-b border-blue-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-blue-400 uppercase tracking-widest">
                    One Shot — Signal fort (a commenté : &quot;on cherche exactement ça&quot;)
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Marc, votre commentaire sur le post de Jean — &quot;on cherche exactement ça&quot; —
                    c&apos;est le signe que vous avez déjà identifié le problème. La question c&apos;est si vous avez
                    encore la bande passante pour construire le système vous-même.
                    Vous avez 20 min jeudi pour qu&apos;on regarde ça ensemble ?&quot;
                  </p>
                </div>
              </div>

              {/* Conversation example */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 overflow-hidden">
                <div className="px-5 py-3 border-b border-amber-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <p className="font-sans text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    Conversation — Signal faible (like sur un post, pas de commentaire)
                  </p>
                </div>
                <div className="px-5 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed">
                    &quot;Bonjour Marc, j&apos;ai vu que vous avez liké le post sur la prospection outbound
                    sans outil tiers. Curieux de savoir si c&apos;est un sujet actif pour vous en ce moment
                    ou plutôt une veille ?&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le mode détermine aussi la suite de la conversation.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                En mode One Shot, si pas de réponse au bout de 5 jours, une seule relance courte.
                En mode Conversation, chaque échange affine le scoring : tier 2 peut monter en tier 1
                après deux réponses qualitatives. Les leads qui ne qualifient pas dans les 3 échanges
                rentrent en nurturing newsletter — pas de DM supplémentaire.
              </p>
            </div>
          </section>

          {/* Section — Les règles résumées */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Les règles non-négociables en résumé
            </h2>
            <div className="space-y-3">
              {[
                { rule: 'Commencer par "Bonjour Prénom,"', detail: 'Pas de "Madame", pas de "Monsieur". Prénom uniquement.' },
                { rule: 'Deuxième phrase = fait précis tiré du profil', detail: "Post récent, question posée, connexion commune, expérience spécifique. Jamais une généralité." },
                { rule: 'Pas de tirets, pas de bullet points', detail: "Un message LinkedIn est une conversation, pas un email structuré." },
                { rule: '5 phrases max en outbound, 3 en inbound', detail: "Au-delà, le taux de réponse chute mécaniquement." },
                { rule: 'Test du téléphone avant envoi', detail: "Ce message pourrait-il être envoyé depuis mon téléphone un mardi matin ? Si non, réécrivez." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold">→</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{item.rule}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section — L'IA comme co-rédacteur */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              L&apos;IA comme co-rédacteur, pas comme générateur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              La plupart des solopreneurs qui utilisent ChatGPT ou Claude pour rédiger leurs messages
              obtiennent exactement le type de texte décrit ci-dessus : formel, structuré, clairement automatique.
              Le problème n&apos;est pas l&apos;outil — c&apos;est l&apos;usage.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              L&apos;IA utilisée correctement ne génère pas le message. Elle l&apos;analyse.
              Vous collez le profil LinkedIn du prospect — titre, bio, posts récents, connexions communes.
              Le modèle identifie le segment probable, repère 1 à 3 signaux précis, et propose un premier draft.
              Vous lisez. Vous corrigez. Vous envoyez.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La règle de vérification finale reste la même : lisez à voix haute.
              Si vous entendez le LLM, réécrivez.
              C&apos;est vous qui validez — pas l&apos;algorithme. C&apos;est le principe de base d&apos;un <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">programme de setting commercial B2B</a> : IA co-rédige, setter valide, prospect reçoit quelque chose de vrai.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mt-4">
              Pour comprendre comment les trois couches s&apos;articulent — détection des signaux, scoring, phases de calibration et de scaling — voir <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline transition-colors">IA, méthode et humain : les 3 couches d&apos;un système de setting LinkedIn</a>.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Les équipes qui utilisent l&apos;IA comme co-rédacteur (avec validation humaine)
                ont des taux de réponse 3× supérieurs à ceux qui génèrent sans relire.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Source : données terrain Setting, analyse de 1 200+ messages envoyés, 2025–2026
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
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

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
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
              Vous voulez des messages qui décrochent des RDV qualifiés ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Setting construit et opère le système complet : signaux, rédaction assistée par IA,
              relances calibrées. Vous recevez les RDV. Garantie 5 minimum par mois.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Déléguer mon setting →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
