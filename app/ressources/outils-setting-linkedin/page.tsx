import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Outils du setting LinkedIn : Reactin, Make et BreakCold | Setting',
  description:
    'Les 3 outils qui font tourner un programme de setting LinkedIn. Reactin pour les signaux, Make pour automatiser, BreakCold pour le pipeline. Setup et integration.',
  alternates: {
    canonical: 'https://www.setting.live/ressources/outils-setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/outils-setting-linkedin',
      'x-default': 'https://www.setting.live/ressources/outils-setting-linkedin',
    },
  },
  openGraph: {
    title: 'Outils du setting LinkedIn : Reactin, Make et BreakCold | Setting',
    description: 'Le stack technique du setting LinkedIn en 2026. Comment Reactin, Make et BreakCold fonctionnent ensemble.',
    locale: 'fr_FR',
    type: 'article',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/outils-setting-linkedin',
  headline: 'Outils du setting LinkedIn : Reactin, Make et BreakCold',
  description:
    'Les 3 outils du stack setting LinkedIn. Reactin detecte les signaux inbound, Make automatise le scoring et le routage, BreakCold gere le pipeline social selling. Guide pratique.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/outils-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/outils-setting-linkedin',
  },
  image: 'https://www.setting.live/ressources/outils-setting-linkedin/opengraph-image',
}

const faqItems = [
  {
    question: 'Peut-on faire du setting LinkedIn sans ces outils ?',
    answer:
      "Oui, mais c'est lent. Sans Reactin, vous detectez les signaux manuellement en scrollant votre feed. Sans Make, vous copiez-collez entre les outils. Sans BreakCold, vous suivez vos prospects dans un tableur. Ca fonctionne pour 5 leads par semaine. Au-dela, ca ne tient pas. Les outils ne remplacent pas le setter, ils lui font gagner 2 a 3 heures par jour.",
  },
  {
    question: 'Combien coute le stack complet Reactin + Make + BreakCold ?',
    answer:
      "Reactin demarre a environ 50 \u20AC/mois. Make a un plan gratuit suffisant pour commencer (1 000 operations/mois), le plan payant demarre a 9 \u20AC/mois. BreakCold coute environ 29 \u20AC/mois par utilisateur. Total : 90 a 130 \u20AC/mois pour le stack complet. C'est le cout des outils seuls, sans le setter ni Sales Navigator.",
  },
  {
    question: 'BreakCold remplace-t-il un CRM classique comme HubSpot ?',
    answer:
      "Pour le setting LinkedIn, oui. BreakCold est concu pour le social selling : il centralise les interactions LinkedIn, les notes de conversation et le pipeline dans une seule interface. Si vous avez deja HubSpot ou Pipedrive pour votre cycle de vente complet, BreakCold s'utilise en amont comme outil du setter, et le deal est transfere au CRM principal une fois le RDV confirme.",
  },
  {
    question: 'Faut-il des competences techniques pour configurer Make ?',
    answer:
      "Non. Make fonctionne en glisser-deposer. Un scenario basique (Reactin > filtre > BreakCold) se configure en 20 minutes sans coder. Les scenarios plus avances (scoring automatique, notifications Slack, enrichissement de donnees) demandent une heure environ. La documentation de Make est claire et il y a des templates pour la plupart des cas d'usage.",
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
      name: 'Outils du setting LinkedIn',
      item: 'https://www.setting.live/ressources/outils-setting-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OutilsSettingLinkedinPage() {
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
          <nav aria-label="Fil d&apos;Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Outils du setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting &middot; Outils
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Outils du setting LinkedIn : Reactin, Make et BreakCold
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Trois outils. Un pour capter les signaux, un pour automatiser le routage,
              un pour gerer le pipeline. Le reste, c&apos;est le setter qui le fait.
            </p>
            <AuthorBlock date="2026-03-25" readTime="9 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Le stack
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Pourquoi ces 3 outils et pas d&apos;autres
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Un programme de{' '}
              <a href="/setting" className="text-accent hover:underline transition-colors">setting</a>{' '}
              LinkedIn repose sur trois fonctions : detecter les bons profils au bon moment,
              acheminer l&apos;information vers le setter, et suivre chaque conversation jusqu&apos;au RDV.
              Reactin, Make et BreakCold couvrent ces trois fonctions. Pas besoin de plus pour demarrer.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '~90 €/mois', label: 'cout du stack complet' },
              { stat: '20 min', label: 'pour tout connecter' },
              { stat: '2–3 h/jour', label: 'gagnees par le setter' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Vue d'ensemble */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment les trois outils fonctionnent ensemble
              </h2>
              <p className="mb-4">
                Le flux est simple. Reactin surveille votre activite LinkedIn et detecte
                les profils qui interagissent avec votre contenu ou montrent des signaux d&apos;achat.
                Make recupere ces signaux, les filtre et les envoie dans BreakCold.
                Le setter ouvre BreakCold, voit les profils a traiter, et commence son travail.
              </p>
              <p className="mb-4">
                Sans cette chaine, le setter passe son temps a scroller LinkedIn pour trouver
                des signaux manuellement. C&apos;est faisable pour 5 prospects par semaine.
                Au-dela, ca devient un travail a plein temps rien que pour la detection.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Le flux en 4 etapes
                </p>
                <div className="space-y-3">
                  {[
                    { step: '1. Signal detecte', tool: 'Reactin', desc: 'Un prospect like votre post, visite votre profil ou commente dans votre secteur' },
                    { step: '2. Filtre et scoring', tool: 'Make', desc: 'Le scenario verifie le poste, la taille d\'entreprise, le type de signal. Score > seuil = envoi' },
                    { step: '3. Prospect cree', tool: 'BreakCold', desc: 'Le profil arrive dans le pipeline du setter avec le contexte du signal' },
                    { step: '4. Message envoye', tool: 'Setter', desc: 'Le setter lit le profil, redige un message contextuel, valide et envoie' },
                  ].map(({ step, tool, desc }) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="text-accent shrink-0 text-sm mt-0.5 font-semibold">&rarr;</span>
                      <div>
                        <span className="font-sans text-text-primary text-sm font-medium">{step}</span>
                        <span className="font-sans text-accent text-xs ml-2">({tool})</span>
                        <p className="font-sans text-text-secondary text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Chaque outil fait une seule chose bien. C&apos;est ce qui rend le stack fiable.
                Pas de plateforme tout-en-un qui fait tout a moitie.
              </p>
            </section>

            {/* Section 2 — Reactin */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Reactin : la detection de signaux
              </h2>
              <p className="mb-4">
                Reactin surveille votre compte LinkedIn et capture les interactions en temps reel.
                Quelqu&apos;un like votre post ? Reactin le voit. Quelqu&apos;un visite votre profil ?
                Reactin l&apos;enregistre. Un prospect commente un post dans votre niche ? Idem.
              </p>
              <p className="mb-4">
                Ces interactions sont des{' '}
                <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">
                  signaux d&apos;achat
                </a>{' '}
                faibles. Pris isolement, un like ne veut rien dire. Mais un prospect qui a visite
                votre profil, like deux posts et commente chez un concurrent en une semaine, c&apos;est
                un signal fort. Reactin capture tout. Make fait le tri.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-3">
                    Ce que Reactin detecte
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Likes sur vos posts',
                      'Commentaires sur vos posts',
                      'Visites de profil',
                      'Nouveaux abonnes',
                      'Interactions sur des posts tiers',
                      'Changements de poste dans votre reseau',
                    ].map((item) => (
                      <div key={item} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0">&check;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mb-4">
                L&apos;interet de Reactin par rapport a la detection manuelle est le volume
                et la memoire. Vous ne pouvez pas retenir les 47 personnes qui ont vu votre profil
                cette semaine. Reactin les stocke, les date et les rend exploitables.
              </p>
              <p>
                Cout : environ 50 &euro;/mois. C&apos;est l&apos;outil le plus cher du stack,
                et le plus difficile a remplacer. Sans detection automatique de signaux,
                le setting perd son avantage principal sur la prospection classique.
              </p>
            </section>

            {/* Section 3 — Make */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Make : l&apos;automatisation du routage
              </h2>
              <p className="mb-4">
                Make (ex-Integromat) connecte Reactin a BreakCold. C&apos;est le lien entre la
                detection et l&apos;action. Sans Make, le setter devrait exporter les signaux de Reactin
                manuellement, les filtrer dans un tableur, et les reimporter dans BreakCold.
                Avec Make, tout passe en automatique.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Le scenario Make type pour le setting
                </p>
                <div className="space-y-3">
                  {[
                    { step: 'Declencheur', desc: 'Nouveau signal dans Reactin (webhook ou polling toutes les heures)' },
                    { step: 'Filtre 1', desc: 'Poste du prospect contient "CEO", "Fondateur", "Directeur" ou equivalent ICP' },
                    { step: 'Filtre 2', desc: 'Taille d\'entreprise entre 10 et 200 salaries (donnee LinkedIn ou enrichissement)' },
                    { step: 'Scoring', desc: 'Visite profil = 1 point, Like = 2, Commentaire = 3. Seuil a 3 pour passer' },
                    { step: 'Action', desc: 'Creation du contact dans BreakCold avec signal, score et lien profil LinkedIn' },
                    { step: 'Notification', desc: 'Message Slack ou email au setter avec le resume du prospect' },
                  ].map(({ step, desc }) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="text-accent shrink-0 text-sm mt-0.5 font-semibold">&rarr;</span>
                      <div>
                        <span className="font-sans text-text-primary text-sm font-medium">{step}</span>
                        <p className="font-sans text-text-secondary text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                Ce scenario se configure en 20 minutes. Le plan gratuit de Make offre 1 000 operations
                par mois. Pour un programme de setting avec 50 a 100 signaux par semaine, c&apos;est
                suffisant pendant les premiers mois. Au-dela, le plan a 9 &euro;/mois couvre
                jusqu&apos;a 10 000 operations.
              </p>
              <p>
                L&apos;erreur classique avec Make : construire des scenarios trop complexes au depart.
                Commencez avec le filtre minimum (poste + taille entreprise + seuil de score).
                Ajoutez de la complexite apres les 50 premiers leads, quand vous savez ce qui convertit.
              </p>
            </section>

            {/* Section 4 — BreakCold */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                BreakCold : le pipeline du setter
              </h2>
              <p className="mb-4">
                BreakCold est un CRM concu pour le social selling. Contrairement a HubSpot ou
                Pipedrive qui gerent des deals, BreakCold gere des conversations LinkedIn.
                C&apos;est la ou le setter passe ses journees.
              </p>
              <p className="mb-4">
                Chaque prospect arrive dans BreakCold avec son contexte : le signal detecte par
                Reactin, le score calcule par Make, le lien vers son profil LinkedIn.
                Le setter voit tout ca sur une seule interface. Il lit le profil, redige le
                message, et passe au suivant.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-3">
                    Ce que BreakCold apporte au setter
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Vue pipeline visuelle',
                        desc: 'Les prospects sont classes par etape : a contacter, message envoye, reponse recue, RDV fixe. Le setter sait ou il en est en un coup d\'oeil.',
                      },
                      {
                        title: 'Notes de conversation',
                        desc: 'Chaque interaction avec un prospect est documentee. Quand le closeur prend le relais pour le RDV, il a le contexte complet sans demander au setter.',
                      },
                      {
                        title: 'Feed LinkedIn integre',
                        desc: 'BreakCold affiche les derniers posts du prospect directement dans la fiche. Le setter repere un sujet de conversation sans quitter l\'outil.',
                      },
                      {
                        title: 'Suivi des relances',
                        desc: 'BreakCold rappelle les prospects a relancer apres X jours sans reponse. Pas de lead qui tombe entre les mailles.',
                      },
                    ].map(({ title, desc }) => (
                      <div key={title} className="flex gap-4">
                        <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                        <div>
                          <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{title}</p>
                          <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Cout : environ 29 &euro;/mois par utilisateur. Un setter = un utilisateur.
                Si vous voulez aussi suivre le pipeline depuis votre cote, ca fait deux licences.
              </p>
              <p>
                BreakCold ne remplace pas un CRM classique pour le cycle de vente complet.
                Il couvre l&apos;amont : de la detection du signal au RDV confirme.
                Une fois le RDV passe, le deal peut etre transfere dans votre CRM principal
                si vous en avez un.
              </p>
            </section>

            {/* Section 5 — Et les autres outils ? */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Et Sales Navigator, Spyer, Claude ?
              </h2>
              <p className="mb-4">
                Le stack Reactin + Make + BreakCold couvre la detection, le routage et le suivi.
                Mais le setter utilise d&apos;autres outils au quotidien. Ils ne font pas partie du
                stack technique a proprement parler, mais ils comptent.
              </p>

              <div className="space-y-3 my-6">
                {[
                  {
                    label: 'Sales Navigator (~100 \u20AC/mois)',
                    desc: "C'est le moteur de ciblage. Le setter y construit ses listes de prospects avec des filtres avances (poste, taille entreprise, secteur, mots-cles). Reactin detecte les signaux, Sales Navigator fournit le vivier de base.",
                  },
                  {
                    label: 'Spyer (~30\u201380 \u20AC/mois)',
                    desc: "Surveille les comptes concurrents et detecte les profils qui interagissent avec eux. Si quelqu'un commente chez votre concurrent, c'est un signal d'interet pour votre secteur. Complementaire de Reactin.",
                  },
                  {
                    label: 'Claude (IA de redaction)',
                    desc: "Le setter utilise Claude pour generer un premier draft de message a partir du contexte du prospect. Le draft est toujours relu et ajuste avant envoi. L'IA accelere la redaction, elle ne la remplace pas.",
                  },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{label}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Pour comprendre comment tous ces outils s&apos;integrent dans la methode
                complete de setting,{' '}
                <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline transition-colors">
                  lisez l&apos;article sur les 3 couches du systeme
                </a>.
              </p>
            </section>

            {/* Section 6 — Setup en 20 minutes */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Configurer le stack en 20 minutes
              </h2>
              <p className="mb-6">
                Vous n&apos;avez pas besoin de competences techniques. Tout se configure
                en glisser-deposer et en copier-coller de webhooks.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Le setup pas a pas
                </p>
                <div className="space-y-4">
                  {[
                    {
                      num: '1',
                      title: 'Creer votre compte Reactin (5 min)',
                      detail: 'Connectez votre compte LinkedIn. Activez la surveillance des interactions sur vos posts et les visites de profil. Reactin commence a collecter immediatement.',
                    },
                    {
                      num: '2',
                      title: 'Creer votre compte BreakCold (5 min)',
                      detail: 'Configurez votre pipeline avec 4 colonnes : A contacter, Message envoye, Reponse recue, RDV fixe. Ajoutez les champs personnalises : Signal source, Score, URL LinkedIn.',
                    },
                    {
                      num: '3',
                      title: 'Connecter les deux avec Make (10 min)',
                      detail: 'Creez un scenario Make. Declencheur : nouveau signal Reactin. Filtres : poste + taille entreprise. Action : creation de contact dans BreakCold. Testez avec un signal reel.',
                    },
                  ].map(({ num, title, detail }) => (
                    <div key={num} className="flex gap-4">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4 pt-0.5">{num}.</span>
                      <div>
                        <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                        <p className="font-sans text-text-secondary text-sm leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Le stack tourne. A partir de la, c&apos;est le travail du setter. La technologie
                fait le tri. L&apos;humain fait la conversation.
              </p>
            </section>

            {/* Section 7 — Erreurs */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les erreurs courantes avec ces outils
              </h2>
              <p className="mb-6">
                Les outils sont en place. Mais certaines erreurs reviennent souvent les
                premieres semaines.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Filtres Make trop larges',
                    desc: 'Vous recevez 200 signaux par semaine dont 180 ne correspondent pas a votre ICP. Le setter perd son temps a trier au lieu de prospecter. Serrez les filtres des le depart. Mieux vaut 20 bons profils que 200 inutilisables.',
                  },
                  {
                    title: 'Pas de scoring dans Make',
                    desc: 'Tous les signaux arrivent avec la meme priorite. Un like d\'un stagiaire pese autant qu\'un commentaire d\'un CEO. Ajoutez un scoring simple : visite = 1, like = 2, commentaire = 3. Le setter traite d\'abord les scores les plus hauts.',
                  },
                  {
                    title: 'BreakCold pas mis a jour',
                    desc: 'Le setter envoie les messages mais ne met pas a jour le statut dans BreakCold. Resultat : impossible de savoir ou en sont les leads. Pas de donnees fiables pour optimiser. La discipline sur le CRM est aussi importante que la qualite des messages.',
                  },
                  {
                    title: 'Reactin sur un profil sans contenu',
                    desc: 'Reactin detecte les interactions sur vos posts. Si vous ne publiez pas, il n\'y a rien a detecter. Le setter a besoin de matiere premiere. Publiez au moins 2 posts par semaine pour alimenter le flux de signaux inbound.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">&rarr;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>
                La plupart de ces erreurs se corrigent dans les deux premieres semaines.
                Le setter et vous ajustez les filtres, le scoring et le rythme de publication
                en fonction de ce qui passe dans le pipeline.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions frequentes
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

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/methode/setting-linkedin', label: 'Setting LinkedIn : la methode complete en 9 etapes' },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: 'IA, methode et humain : les 3 couches du systeme de setting' },
                { href: '/ressources/signal-achat-linkedin', label: 'Detecter les signaux d\u2019achat LinkedIn pour prospecter au bon moment' },
                { href: '/ressources/cout-setter-b2b-prix', label: 'Prix d\u2019un setter B2B en 2026 : les vrais chiffres' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
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
              Le stack est pret. Il manque le setter.
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Reactin, Make, BreakCold, Sales Navigator et Claude : tout est configure
              pendant l&apos;onboarding. Vous recevez les RDV. Le setter gere le reste.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Voir le programme &rarr;
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
