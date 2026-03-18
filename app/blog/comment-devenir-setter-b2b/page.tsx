import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: "Comment devenir setter B2B en 2026 | ChallengersLab",
  description: "Le métier de setter B2B en 2026 : ce que ça demande, les compétences réelles, les étapes pour démarrer et combien on peut gagner. Sans bullshit formation.",
  openGraph: {
    title: "Comment devenir setter B2B en 2026",
    description: "Compétences, parcours, outils, rémunération : le guide concret pour devenir setter B2B ou comprendre qui recruter.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
  headline: 'Comment devenir setter B2B en 2026',
  description:
    'Le métier de setter B2B en 2026 : compétences réelles, outils, rémunération et étapes pour démarrer. Guide concret sans formation bullshit.',
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
  },
}

const faqItems = [
  {
    question: "Faut-il avoir de l'expérience en vente pour devenir setter ?",
    answer:
      "Non. Le setting ne demande pas de connaître les techniques de closing — il demande de savoir lire un profil, écrire court et ne pas lâcher au troisième message. Des profils sans background commercial s'adaptent vite si la méthode est solide.",
  },
  {
    question: "Combien de temps pour être opérationnel comme setter ?",
    answer:
      "Comptez 4 à 8 semaines pour un setter compétent sur votre secteur. Les 2 premières semaines servent à calibrer les critères, les 2 suivantes à tester les messages, les 4 suivantes à affiner les relances. Les premiers RDV arrivent généralement dès la semaine 1 ou 2.",
  },
  {
    question: "Setter freelance ou setter en agence : quelle différence ?",
    answer:
      "Un setter freelance gère son propre portefeuille de clients, avec une flexibilité maximale mais sans structure. Un setter en agence (comme ChallengersLab) travaille dans un système déjà calibré — outils, méthode, skill IA — avec un onboarding structuré et des critères de performance définis.",
  },
  {
    question: "Peut-on faire du setting sans LinkedIn Sales Navigator ?",
    answer:
      "Pour les signaux inbound (réactions à vos posts), LinkedIn gratuit suffit. Pour le sourcing outbound structuré — ciblage par poste, secteur, triggers récents — Sales Navigator est difficile à contourner. Le coût (~100 €/mois) est amorti dès le premier RDV converti.",
  },
  {
    question: "Quelle est la différence entre setter et SDR ?",
    answer:
      "Un SDR (Sales Development Representative) est un rôle interne, souvent dans une équipe commerciale structurée, avec des quotas d'appels et d'emails froids. Un setter B2B moderne travaille majoritairement sur LinkedIn avec une approche signal-based — moins de volume, plus de personnalisation, meilleur taux de réponse.",
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
      name: 'Devenir setter B2B',
      item: 'https://challengerslab.fr/blog/comment-devenir-setter-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommentDevenirSetterB2BPage() {
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
              <li className="text-text-primary">Devenir setter B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Comment devenir setter B2B en 2026
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              Les compétences réelles, les outils, la rémunération et les étapes pour démarrer.
              Ce que personne ne vous dit dans les formations à 3 000 €.
            </p>
            <div className="flex items-center gap-4 font-sans text-xs text-text-muted">
              <span>Par ChallengersLab</span>
              <span aria-hidden="true">·</span>
              <time dateTime="2026-03-18">18 mars 2026</time>
              <span aria-hidden="true">·</span>
              <span>11 min de lecture</span>
            </div>
          </header>

          {/* Bloc Définition */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Un <strong>setter B2B</strong> est le commercial qui prospecte avant l&apos;appel de vente.
              Il identifie les prospects qualifiés sur LinkedIn, les contacte avec le bon angle,
              gère les conversations et décroche des rendez-vous. Il ne pitche pas. Il ne close pas.
              Il ouvre la porte — et la bonne.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '10–25 %', label: 'taux de réponse sur signal' },
              { stat: '2–4', label: 'RDV/semaine livrés par setter' },
              { stat: '2 mois', label: 'pour calibrer un système' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-muted leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que fait vraiment un setter au quotidien
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              La réalité du métier est moins glamour que ce que les posts LinkedIn veulent bien montrer.
              Un setter passe la majorité de son temps dans un CRM, dans Sales Navigator, et dans sa boîte
              de messages. Pas en train de &ldquo;closer des deals à distance&rdquo;.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Concrètement, voici ce que ressemble une journée active. Le matin : vérifier les signaux
              inbound de la veille. Qui a réagi à un post lié au secteur du client ? Qui correspond à l&apos;ICP ?
              Chaque profil est ouvert, les derniers posts lus, une décision prise — contacter, attendre,
              ou passer. Sur 30 signaux analysés, 8 à 12 méritent un message.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Ensuite : rédiger. Un message par profil. Cinq phrases maximum. La deuxième phrase ancre
              toujours un fait précis tiré du profil ou du signal. Aucun pitch. Aucune liste de bénéfices.
              Le message a un seul objectif : créer une ouverture pour une conversation.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              L&apos;après-midi, c&apos;est la gestion des réponses. Qualifier ce qui rentre.
              Planifier les relances. Mettre à jour le journal de bord avec ce qui a fonctionné,
              ce qui a raté, les objections nouvelles. Ce journal, c&apos;est la mémoire du système.
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              Le setter n&apos;est pas le closeur. Il n&apos;est pas là pour pitcher l&apos;offre dans le premier DM,
              négocier le prix ou gérer les objections post-appel. Ces rôles demandent des compétences
              différentes. Un bon setter qui essaie de closer brûle des leads. Un bon closeur qui fait
              son propre setting perd un temps qu&apos;il devrait passer à convertir.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 compétences qui comptent vraiment
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Pas le charisme. Pas la &ldquo;fibre commerciale&rdquo;. Pas la capacité à parler pendant 20 minutes.
              Le setting demande trois choses précises — et elles s&apos;apprennent toutes.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                  1
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Lire un profil vite — et bien
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Un setter qui prend 10 minutes par profil ne scale pas. Il faut apprendre à extraire
                    l&apos;information utile en 2 minutes : titre actuel, ancienneté, posts récents, interactions
                    sur des sujets proches de l&apos;offre. La question à laquelle on répond n&apos;est pas
                    &ldquo;est-ce que ce profil est intéressant ?&rdquo; — c&apos;est &ldquo;est-ce que j&apos;ai un angle précis
                    pour amorcer une conversation ?&rdquo; Si la réponse est non, on passe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                  2
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Écrire court et précis
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    La majorité des messages de prospection LinkedIn échouent parce qu&apos;ils sont trop longs
                    ou trop génériques. Cinq phrases, c&apos;est la règle. La première phrase montre qu&apos;on a
                    regardé le profil. La deuxième ancre un signal précis. Les trois suivantes créent
                    l&apos;ouverture sans pitcher. Écrire court est plus difficile qu&apos;écrire long — ça s&apos;apprend
                    par la pratique et par l&apos;analyse des réponses.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                  3
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Ne pas abandonner au 3e message
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    C&apos;est la compétence la plus sous-estimée. La discipline. Un prospect qui ne répond pas
                    après 2 messages n&apos;est pas forcément désintéressé — il est peut-être occupé, il n&apos;a pas
                    vu le message, ou le timing était mauvais. Les setters qui tiennent 5 à 6 points de contact
                    sur plusieurs semaines décrocheront des RDV que les autres ont déjà abandonnés.
                    Ce n&apos;est pas de l&apos;insistance. C&apos;est de la rigueur.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-text-muted leading-relaxed mt-6">
              Ces trois compétences n&apos;ont rien à voir avec le fait d&apos;être &ldquo;commercial dans l&apos;âme&rdquo;.
              Des profils issus de la rédaction, du marketing ou même de métiers techniques s&apos;y adaptent
              souvent mieux que d&apos;anciens vendeurs habitués à pitcher fort.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les outils du setter LinkedIn en 2026
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Voici les outils utilisés dans un programme actif — et pourquoi chacun est là.
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'LinkedIn Sales Navigator',
                  desc: "La couche de ciblage. Filtres par poste, secteur, taille d'entreprise, signaux récents (changement de poste, dans l'actualité). Indispensable pour construire des listes outbound précises. Sans lui, le sourcing est manuel et incomplet.",
                },
                {
                  name: 'Reactin',
                  desc: "Capture automatiquement les interactions sur vos posts LinkedIn — likes, commentaires, partages. Identifie les profils qui ont réagi aux contenus les plus proches de votre offre. C'est la source principale de signaux inbound.",
                },
                {
                  name: 'Spyer',
                  desc: "Monitore les comptes concurrents et complémentaires dont l'audience ressemble à votre ICP. Dès qu'un prospect interagit avec ces comptes, il remonte. Utile pour l'outbound quand votre propre contenu ne génère pas encore assez de signaux.",
                },
                {
                  name: 'BreakCold',
                  desc: "CRM conçu pour la prospection LinkedIn. Permet de suivre chaque conversation, planifier les relances, taguer les prospects selon leur niveau de maturité et éviter les doublons. Un simple Google Sheets peut suffire pour démarrer, mais BreakCold structure mieux le flux dès que le volume monte.",
                },
                {
                  name: 'Claude / GPT avec contexte',
                  desc: "Pas pour générer des messages en masse — pour co-rédiger. Le setter fournit le profil, le signal, les règles non-négociables. L'IA propose un draft. L'humain valide et ajuste. Résultat : rédaction 3x plus rapide, sans perdre la personnalisation. Aucun message ne part sans lecture humaine.",
                },
              ].map(({ name, desc }) => (
                <div key={name} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold font-sans">→</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{name}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Combien gagne un setter B2B ?
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Trois modèles coexistent sur le marché. Le choix n&apos;est pas anodin — il détermine
              si les intérêts du setter et du client sont alignés ou non.
            </p>

            <div className="space-y-5 mb-6">
              <div className="rounded-xl p-5 border border-black/8 bg-bg-secondary">
                <p className="font-sans font-semibold text-text-primary mb-1">Fixe mensuel uniquement</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">800 – 1 500 € / mois</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  Simple. Prévisible. Mais le setter est payé que les RDV arrivent ou non.
                  Sans incentive sur les résultats, le risque de décrochage progressif est réel.
                  Ce modèle fonctionne si le setter est motivé par autre chose que la rémunération variable —
                  rare sur le marché.
                </p>
              </div>

              <div className="rounded-xl p-5 border border-black/8 bg-bg-secondary">
                <p className="font-sans font-semibold text-text-primary mb-1">Prime à la performance uniquement</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">50 – 200 € / RDV</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  L&apos;incentive est bien aligné sur les résultats. Problème : sans fixe, le setter priorise
                  naturellement la quantité sur la qualité. Des RDV mal qualifiés passent parce qu&apos;ils
                  font monter le compteur. Résultat : l&apos;agenda se remplit de calls qui ne convertissent pas.
                </p>
              </div>

              <div className="rounded-xl p-5 border border-accent/30 bg-accent/5">
                <p className="font-sans font-semibold text-text-primary mb-1">Hybride : fixe bas + prime par RDV</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">Recommandé</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  Le fixe couvre l&apos;infrastructure et le travail de fond — le temps passé à analyser
                  des profils qui ne convertissent pas toujours. La prime aligne les intérêts sur
                  les résultats réels. C&apos;est le modèle ChallengersLab : fixe modéré + 25 à 150 € par RDV
                  livré selon le niveau de qualification. Le setter ne gagne pas en volume — il gagne
                  en qualité.
                </p>
              </div>
            </div>

            <p className="font-sans text-text-muted leading-relaxed">
              Pour un setter freelance expérimenté avec plusieurs clients, le revenu mensuel oscille
              entre 2 000 et 4 500 € selon le volume et la qualité des programmes. Ce n&apos;est pas
              un métier qui rend riche du jour au lendemain — c&apos;est un métier qui monte en charge
              sur 3 à 6 mois, avec un revenu stable et prévisible une fois les clients installés.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment se former : ce qui marche, ce qui ne marche pas
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Il y a beaucoup de formations &ldquo;setting&rdquo; et &ldquo;closing&rdquo; sur le marché. Certaines à 2 000 €,
              d&apos;autres à 4 000 €, beaucoup sans terrain réel. Le problème n&apos;est pas le prix.
              Le problème, c&apos;est le format.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Regarder des vidéos sur des techniques de prospection et envoyer des messages modèles
              sur de vrais profils, c&apos;est deux choses complètement différentes. Le setting se calibre
              dans le réel. Ce qui vous forme vraiment, c&apos;est d&apos;envoyer des centaines de vrais messages,
              d&apos;analyser les réponses (et les non-réponses), et de noter ce qui a fonctionné.
              Sans terrain, vous apprenez la théorie d&apos;un métier que vous ne pratiquez pas.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-black/8">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Ce qui forme vraiment un setter
              </p>
              <div className="space-y-3">
                {[
                  "Envoyer de vrais messages sur de vrais profils — pas des exercices fictifs",
                  "Tenir un journal de bord quotidien : ce qui a obtenu une réponse, ce qui a échoué, pourquoi",
                  "Itérer sur les relances avec des vrais prospects, pas des mises en situation",
                  "Recevoir du feedback sur chaque message, pas seulement sur les résultats globaux",
                  "Comprendre pourquoi un prospect a répondu — et reproduire la logique",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Le programme ChallengersLab est construit sur ce principe. Les setters qui rejoignent
              le programme travaillent sur des profils réels dès la première semaine, dans le secteur
              du client. Pas de simulation. Pas de slides sur &ldquo;les 7 étapes du closing&rdquo;.
              Un onboarding en 3 phases, un journal de bord structuré, et un feedback sur chaque
              campagne active.
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              La différence entre un setter qui décolle en 6 semaines et un qui galère pendant 6 mois
              n&apos;est pas l&apos;intelligence ni la motivation. C&apos;est la structure de feedback.
              Sans quelqu&apos;un pour lire vos messages et vous dire ce qui ne va pas, vous répétez
              les mêmes erreurs sans le savoir.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que les solopreneurs attendent d&apos;un setter
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Si vous êtes solopreneur et que vous cherchez à déléguer votre prospection, voici
              ce que vous devriez vraiment demander à un setter — pas seulement &ldquo;combien de RDV
              par mois ?&rdquo;.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Des RDV qualifiés, avec contexte. Pas un prospect qui a dit &ldquo;OK&rdquo; à un message générique
              sans vraiment comprendre ce que vous faites. Un RDV qualifié, c&apos;est un prospect qui
              correspond à votre ICP, qui a exprimé un problème précis en lien avec votre offre,
              et qui arrive à l&apos;appel avec le contexte — ce qui a été dit dans la conversation,
              ce qui l&apos;a intéressé, ce qui a résisté.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Planifiés dans votre agenda. Pas &ldquo;il sera disponible, appelez-le&rdquo;. Un RDV posé,
              confirmé, avec les informations clés dans la description de l&apos;événement.
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              Un bon setter, pour un solopreneur, c&apos;est zéro friction sur la prospection.
              Vous ne pensez plus à &ldquo;qui contacter cette semaine&rdquo;. Vous arrivez à vos appels préparés,
              face à des prospects qui vous connaissent déjà un peu. Le reste de votre énergie va
              à ce que vous faites vraiment bien : délivrer votre offre.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
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

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/blog/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/blog/setter-b2b-definition', label: "C'est quoi un setter en B2B ?" },
                { href: '/blog/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting LinkedIn" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group">
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
              Rejoindre le programme Setting
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Vous apprenez sur des profils réels dans votre secteur — pas sur des slides.
              Programme structuré en 3 phases, accompagnement terrain.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Rejoindre le programme →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
