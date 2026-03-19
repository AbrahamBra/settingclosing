import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Scripts de setting LinkedIn B2B : exemples et cadre complet | ChallengersLab',
  description:
    'Les vrais scripts de setting LinkedIn : anatomie d\'un message qui obtient des réponses, 6 scripts concrets (inbound + outbound), les 4 erreurs qui tuent le taux de réponse.',
  openGraph: {
    title: 'Scripts de setting LinkedIn B2B : exemples et cadre complet',
    description:
      'Anatomie d\'un message qui obtient des réponses, 6 scripts concrets (inbound + outbound), les 4 erreurs qui tuent le taux de réponse.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/ressources/script-setting-linkedin',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/ressources/script-setting-linkedin',
  headline: 'Scripts de setting LinkedIn B2B : exemples et cadre complet',
  description:
    'Les vrais scripts de setting LinkedIn : anatomie d\'un message qui obtient des réponses, 6 scripts concrets (inbound + outbound), les 4 erreurs qui tuent le taux de réponse.',
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/ressources/script-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/ressources/script-setting-linkedin',
  },
}

const faqItems = [
  {
    question: 'Combien de phrases doit faire un message LinkedIn de prospection ?',
    answer:
      'Entre 3 et 5 phrases. Pas plus. Un premier message trop long signale que vous n\'avez pas réfléchi à ce qui est vraiment pertinent pour votre interlocuteur. Sur mobile, un message de 6 lignes s\'affiche déjà tronqué. La concision n\'est pas un signe de paresse — c\'est une preuve de respect du temps de l\'autre.',
  },
  {
    question: 'Faut-il personnaliser chaque message LinkedIn ?',
    answer:
      'Oui, mais pas de A à Z. L\'erreur est d\'opposer "personnalisation totale" et "template générique". Ce qui fonctionne, c\'est un cadre fixe (structure, ton, longueur) avec 1 ou 2 éléments vraiment spécifiques à la personne : un post récent, un changement de poste, un recrutement en cours. 80 % de structure, 20 % de personnalisation ciblée.',
  },
  {
    question: 'Quelle est la différence entre un script et un template ?',
    answer:
      'Un template est un texte figé que vous copiez-collez en changeant le prénom. Un script est un cadre : il définit la structure, le nombre de phrases, l\'objectif de chaque phrase — mais les mots changent à chaque fois. Les templates se repèrent immédiatement. Les scripts, non. C\'est pour ça que les scripts fonctionnent.',
  },
  {
    question: 'Quel taux de réponse peut-on espérer avec un bon script LinkedIn ?',
    answer:
      'Entre 15 % et 35 % sur des séquences inbound (signal détecté + message adapté). En outbound pur sans signal fort, on tourne plutôt entre 5 % et 15 %. Ces chiffres varient selon le secteur, la clarté de l\'ICP et la qualité du ciblage. Un taux inférieur à 5 % est le signe que le message ou le ciblage doit être revu.',
  },
  {
    question: 'Faut-il envoyer une note de connexion ou contacter après la connexion ?',
    answer:
      'Les deux approches fonctionnent. La note de connexion est utile si vous avez un signal fort à mentionner (post récent, événement commun). Sans signal clair, il vaut mieux connecter sans note puis envoyer un message 24 à 48 heures après l\'acceptation. Un message en DM après connexion crée moins de friction qu\'une note immédiate perçue comme un pitch déguisé.',
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
      name: 'Scripts de setting LinkedIn B2B',
      item: 'https://challengerslab.fr/ressources/script-setting-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'pourquoi', label: 'Pourquoi votre script ne fonctionne pas (encore)' },
  { id: 'anatomie', label: "L'anatomie d'un message qui obtient des réponses" },
  { id: 'scripts-inbound', label: 'Scripts inbound : ils ont réagi à votre contenu' },
  { id: 'scripts-outbound', label: 'Scripts outbound : prospection ICP ciblée' },
  { id: 'erreurs', label: 'Les 4 erreurs qui tuent le taux de réponse' },
  { id: 'suivi', label: 'Le suivi si pas de réponse : quand et comment' },
  { id: 'faq', label: 'Questions fréquentes' },
]

export default function ScriptSettingLinkedinPage() {
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
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Scripts de setting LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting · Scripts
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Scripts de setting LinkedIn B2B : anatomie, exemples et cadre complet
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              Pas de templates à copier-coller. Un cadre pour écrire des messages qui obtiennent
              vraiment des réponses, avec 6 scripts concrets pour les situations les plus courantes.
            </p>
            <AuthorBlock date="2026-03-18" readTime="11 min de lecture" dateLabel="18 mars 2026" />
          </header>

          {/* Definition Block */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Ce que vous allez trouver ici
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              L&apos;anatomie exacte d&apos;un <strong>message LinkedIn B2B</strong> qui génère des réponses,
              6 scripts pour les cas inbound et outbound les plus fréquents, les 4 erreurs qui font
              chuter le taux de réponse à moins de 5 %, et une séquence de relance qui ne ressemble
              pas à du harcèlement.
            </p>
          </div>

          {/* Stats block */}
          <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-10 border border-white/[0.06]">
            <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
            <p className="font-sans font-semibold text-text-primary mb-1">
              Le taux de réponse moyen sur LinkedIn tourne autour de 10–15 %.
            </p>
            <p className="font-sans text-text-muted text-sm">
              Les professionnels qui utilisent des messages basés sur des signaux détectés atteignent
              25 à 35 %. L&apos;écart ne vient pas du volume envoyé — il vient du message lui-même.
              (Source : données agrégées Sales Navigator 2024)
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item.id} className="flex gap-3 font-sans text-sm">
                  <span className="text-accent shrink-0 font-semibold">{i + 1}.</span>
                  <a
                    href={`#${item.id}`}
                    className="text-text-muted hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 — Pourquoi ça ne marche pas */}
          <section id="pourquoi" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi votre script LinkedIn ne fonctionne pas (encore)
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              La plupart des gens qui cherchent un &quot;script LinkedIn&quot; veulent en réalité un template.
              Un texte qu&apos;on copie, qu&apos;on colle, qu&apos;on ajuste le prénom, et qu&apos;on envoie en série.
              C&apos;est compréhensible. C&apos;est aussi la raison principale pour laquelle leurs messages
              n&apos;obtiennent pas de réponses.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Un template se voit. Pas parce que la formulation est mauvaise — parfois elle est
              irréprochable. Mais parce que le message ne contient aucune information qui prouve
              que vous avez regardé le profil de cette personne. Votre prospect le sait. Et quand
              il le sait, il ne répond pas.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Un script, c&apos;est différent. Un script, c&apos;est un <strong className="text-text-primary font-semibold">cadre</strong> :
              une structure avec des positions prédéfinies, et dans chaque position, vous mettez
              les informations spécifiques à ce prospect. Le squelette est fixe. La chair change à
              chaque fois.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20 mb-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                La règle des 5 phrases
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                Un premier message LinkedIn B2B ne doit jamais dépasser 5 phrases. Pas 6. Pas
                &quot;environ 5&quot;. Cinq. Cette contrainte est un filtre : si vous ne pouvez pas exprimer
                pourquoi vous contactez quelqu&apos;un en 5 phrases, c&apos;est que vous n&apos;avez pas encore
                assez réfléchi à votre angle d&apos;approche.
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                Elle vous oblige aussi à faire des choix — à retirer ce qui est secondaire pour
                garder ce qui est pertinent. Ce travail de sélection, c&apos;est exactement ce que
                votre prospect attend de vous.
              </p>
            </div>

            <p className="font-sans text-text-muted leading-relaxed">
              Les <a href="/ressources/messages-linkedin-sans-reponse" className="text-accent hover:underline transition-colors" target="_blank" rel="noopener noreferrer">messages LinkedIn sans réponse</a> ont
              souvent un problème commun : trop de texte, pas assez de raison spécifique de répondre.
              Corriger ça ne demande pas d&apos;être brillant. Ça demande d&apos;être précis.
            </p>
          </section>

          {/* Section 2 — Anatomie */}
          <section id="anatomie" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              L&apos;anatomie d&apos;un message LinkedIn qui obtient des réponses
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              Voici la structure que j&apos;utilise systématiquement. Cinq positions, chacune avec un
              rôle précis. Vous pouvez écrire des dizaines de messages différents avec ce cadre —
              aucun ne se ressemblera, parce que le contenu change à chaque fois.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  num: '01',
                  title: "L'accroche sur le signal",
                  body: "Pas « j'ai vu votre profil », pas « je me permets de vous contacter ». Une observation précise sur quelque chose qui vient de se passer : un post, un recrutement, un changement de poste, une actualité de leur secteur. Cette phrase dit implicitement que vous avez regardé ce qui se passe chez eux.",
                },
                {
                  num: '02',
                  title: 'Le fait précis sur le prospect',
                  body: "Un élément tiré directement de leur profil ou de leur activité récente. Pas un compliment générique (« votre parcours est impressionnant »), mais une observation concrète (« vous avez l'air de construire l'équipe commerciale de zéro en ce moment »). Cette phrase prouve que vous avez fait le travail.",
                },
                {
                  num: '03',
                  title: 'Le pont vers ce que vous faites',
                  body: "Ce n'est pas un pitch. C'est une connexion entre leur situation et votre domaine. Vous n'expliquez pas votre offre — vous montrez que vous comprenez leur contexte. La différence est importante : un pitch génère de la résistance, une connexion génère de la curiosité.",
                },
                {
                  num: '04',
                  title: 'La question ouverte ou l\'invitation légère',
                  body: "Une question courte qui invite à la conversation, pas à un engagement fort. « Est-ce que c'est quelque chose qui vous concerne en ce moment ? » fonctionne mieux que « Seriez-vous disponible pour un appel de 30 minutes ? ». Demander un call dans le premier message, c'est demander un mariage au premier rendez-vous.",
                },
                {
                  num: '05',
                  title: 'La preuve courte (optionnelle)',
                  body: "Si votre contexte le justifie, ajoutez une ligne de preuve : un résultat concret, un client similaire, une stat. Cette phrase n'est là que si elle renforce l'argument — pas pour remplir l'espace. Si vous hésitez à l'inclure, ne l'incluez pas.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold font-sans">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le test du téléphone
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                Avant d&apos;envoyer un message, lisez-le sur votre téléphone. Si vous devez scroller
                pour voir la fin, il est trop long. 70 % des messages LinkedIn sont lus sur mobile.
                Un message qui nécessite un effort de lecture ne sera souvent pas lu du tout.
              </p>
            </div>
          </section>

          {/* Section 3 — Scripts inbound */}
          <section id="scripts-inbound" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Scripts pour les signaux inbound
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Un signal inbound, c&apos;est quand quelqu&apos;un a montré de l&apos;intérêt pour votre contenu avant
              que vous les contactiez. C&apos;est la situation la plus favorable : vous avez une raison
              naturelle de vous manifester. Ce serait dommage de la gâcher avec un message générique.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              Pour comprendre comment détecter ces signaux en amont, l&apos;article sur les{' '}
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors" target="_blank" rel="noopener noreferrer">signaux d&apos;achat LinkedIn</a>{' '}
              explique la méthode en détail.
            </p>

            {/* Script 1 */}
            <div className="mb-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Script 1 — Like sur un post lié à votre offre
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-5 border border-red-500/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">À éviter</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], j&apos;ai vu que vous avez liké mon post sur la prospection LinkedIn.
                    Je me permets de vous contacter car je pense que mon approche pourrait vous intéresser.
                    Je suis spécialisé dans la génération de rendez-vous B2B pour les experts et consultants.
                    Seriez-vous disponible pour un échange de 30 minutes cette semaine ?&quot;
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], vous avez liké mon post sur les relances LinkedIn — je suppose
                    que le sujet ne vous est pas étranger. J&apos;ai vu que vous venez de passer de salarié
                    à consultant indépendant. C&apos;est souvent à ce moment que la prospection devient
                    soudainement votre problème numéro un. Est-ce que c&apos;est le cas pour vous en ce moment ?&quot;
                  </p>
                  <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                    Pourquoi ça marche : le like crée le pont, le changement de statut montre que vous avez
                    regardé leur profil, la question est spécifique à leur situation sans supposer la réponse.
                  </p>
                </div>
              </div>
            </div>

            {/* Script 2 */}
            <div className="mb-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Script 2 — Commentaire sur un post pertinent
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-5 border border-red-500/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">À éviter</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], j&apos;ai vu votre commentaire et j&apos;ai trouvé votre point de vue
                    très intéressant. Je travaille dans un domaine qui pourrait vous apporter de la
                    valeur. Connectons-nous pour en savoir plus ?&quot;
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], votre commentaire sur le post de [Auteur] m&apos;a arrêté — vous
                    parliez de la difficulté à remplir l&apos;agenda sans passer 2h par jour sur LinkedIn.
                    On a exactement ce problème à résoudre avec les consultants qu&apos;on accompagne.
                    Je ne sais pas si le contexte est similaire de votre côté. C&apos;est le cas ?&quot;
                  </p>
                  <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                    Pourquoi ça marche : vous citez leur propos précis, vous montrez que vous avez compris
                    leur problème, et la question laisse la porte ouverte sans forcer.
                  </p>
                </div>
              </div>
            </div>

            {/* Script 3 */}
            <div className="mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Script 3 — Partage d&apos;un contenu lié
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg-secondary rounded-xl p-5 border border-red-500/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">À éviter</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], merci d&apos;avoir partagé mon contenu, ça me fait vraiment plaisir !
                    Si le sujet vous intéresse, j&apos;ai d&apos;autres ressources qui pourraient vous aider.
                    N&apos;hésitez pas à me contacter pour en discuter.&quot;
                  </p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Ce qui fonctionne</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                    &quot;Bonjour [Prénom], vous avez partagé mon post sur les séquences de prospection.
                    Je regarde vos posts depuis quelques semaines — vous faites du [secteur] pour des
                    équipes entre 5 et 20 personnes si je ne me trompe pas. C&apos;est exactement là
                    que nos méthodes de setting créent le plus d&apos;impact. Qu&apos;est-ce qui vous a
                    fait partager ce post ?&quot;
                  </p>
                  <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                    Pourquoi ça marche : la question finale retourne l&apos;attention vers eux et invite
                    à une vraie conversation plutôt qu&apos;à une réponse de politesse.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Scripts outbound */}
          <section id="scripts-outbound" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Scripts pour la prospection outbound
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              L&apos;outbound, c&apos;est plus difficile. Vous n&apos;avez pas de signal fort pour créer le pont.
              Vous devez trouver une raison légitime de contacter quelqu&apos;un qui ne vous connaît pas.
              La bonne nouvelle : LinkedIn en regorge si vous savez où chercher.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              L&apos;utilisation d&apos;une{' '}
              <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline transition-colors" target="_blank" rel="noopener noreferrer">IA comme co-rédacteur</a>{' '}
              peut aider à générer des variantes rapidement, mais le signal de départ doit toujours
              venir d&apos;une vraie observation humaine.
            </p>

            {/* Script 4 */}
            <div className="mb-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                Script 4 — Changement de poste récent
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
                <strong className="text-text-primary">Structure :</strong> signal du changement → observation sur leur nouveau périmètre → connexion avec votre domaine → question sur leur priorité actuelle.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30 my-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Exemple concret</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                  &quot;Bonjour [Prénom], j&apos;ai vu que vous venez de prendre la direction commerciale chez
                  [Entreprise]. Ce type de prise de poste s&apos;accompagne souvent d&apos;un vrai travail de
                  fond sur le pipeline — surtout dans les 90 premiers jours. On accompagne des
                  directeurs commerciaux sur exactement ce sujet. Quel est votre chantier numéro
                  un en ce moment côté prospection ?&quot;
                </p>
                <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                  Le changement de poste est public et observable. Il crée une raison légitime de
                  contacter sans paraître intrusif. Les 90 premiers jours sont une réalité connue
                  des directeurs commerciaux — cette référence montre que vous connaissez leur contexte.
                </p>
              </div>
            </div>

            {/* Script 5 */}
            <div className="mb-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                Script 5 — Recrutement dans leur équipe commerciale
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
                <strong className="text-text-primary">Structure :</strong> observation du recrutement → déduction sur leur objectif → lien avec ce que vous faites → question sur leur situation actuelle.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30 my-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Exemple concret</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                  &quot;Bonjour [Prénom], je vois que [Entreprise] cherche un SDR en ce moment. Ça me
                  dit que vous êtes en train de construire ou de scaler une fonction prospection.
                  On aide des équipes dans cette phase de transition — souvent pour éviter les
                  6 mois de rampe habituelle avant que le SDR soit réellement opérationnel.
                  Vous en êtes à quelle étape sur le recrutement ?&quot;
                </p>
                <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                  Une offre d&apos;emploi sur LinkedIn est un signal fort. Elle révèle une intention
                  stratégique et un budget disponible. C&apos;est l&apos;un des meilleurs déclencheurs en outbound.
                </p>
              </div>
            </div>

            {/* Script 6 */}
            <div className="mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                Script 6 — ICP pur sans signal fort (la version la plus difficile)
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
                <strong className="text-text-primary">Structure :</strong> observation sur leur activité ou secteur → fait précis sur leur profil → connexion directe → question courte et ouverte.
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-4">
                Quand il n&apos;y a pas de signal clair, vous êtes obligé de faire le travail vous-même.
                Regardez leurs posts récents, leur secteur, leur taille d&apos;équipe, leur ancienneté
                dans le poste. Choisissez un seul angle.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/30 my-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">Exemple concret</p>
                <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                  &quot;Bonjour [Prénom], votre profil m&apos;a arrêté — fondateur en solo depuis 3 ans dans
                  le [secteur], avec ce que ça implique comme charge commerciale en parallèle du
                  delivery. C&apos;est exactement le moment où la prospection devient soit une contrainte
                  permanente, soit quelque chose qu&apos;on délègue intelligemment. Vous êtes plutôt où
                  sur ce sujet ?&quot;
                </p>
                <p className="font-sans text-xs text-text-muted/60 mt-3 leading-relaxed">
                  Sans signal fort, la seule façon de créer de la pertinence est de montrer que
                  vous comprenez leur situation spécifique mieux que n&apos;importe quel autre message
                  dans leur boîte. C&apos;est plus dur. C&apos;est aussi ce qui fonctionne.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Erreurs */}
          <section id="erreurs" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 4 erreurs qui tuent le taux de réponse
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              Ces erreurs ne viennent pas d&apos;un manque de talent. Elles viennent d&apos;habitudes prises
              sans réfléchir à ce que vit le prospect quand il reçoit le message.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm font-semibold font-sans">
                  1
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Pitcher l&apos;offre dans le premier message
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Le premier message n&apos;a qu&apos;un seul objectif : obtenir une réponse. Pas vendre.
                    Pas expliquer votre méthode. Pas lister vos résultats. Dès que vous pitchez dans le
                    premier message, vous réduisez votre interlocuteur au statut de prospect — et la
                    plupart des gens ferment immédiatement quand ils se sentent traités comme une cible.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm font-semibold font-sans">
                  2
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Commencer par &quot;Je me permets de vous contacter&quot;
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Cette phrase est un signal d&apos;alarme. Elle dit implicitement : &quot;Je sais que vous
                    ne me connaissez pas et que ce message n&apos;est peut-être pas le bienvenu.&quot; Si vous
                    avez une raison légitime de contacter quelqu&apos;un, commencez par cette raison.
                    Pas par une excuse d&apos;exister.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm font-semibold font-sans">
                  3
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Demander 30 minutes de call dès le premier DM
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    C&apos;est trop demander à quelqu&apos;un qui ne vous connaît pas. Trente minutes représentent
                    un engagement réel — et vous leur demandez de le prendre sans avoir établi aucune
                    confiance. Demandez d&apos;abord une réponse. Le call vient quand l&apos;intérêt est là.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-sm font-semibold font-sans">
                  4
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Envoyer la même version à tout le monde
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Un directeur commercial qui vient de changer de poste et un fondateur solo depuis
                    5 ans n&apos;ont pas les mêmes problèmes, même s&apos;ils appartiennent tous les deux à votre
                    ICP. Un script, ce n&apos;est pas zéro personnalisation — c&apos;est une structure stable avec
                    les éléments variables aux bons endroits. Gardez le cadre. Changez le contenu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 — Suivi */}
          <section id="suivi" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le suivi si pas de réponse : quand et comment
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              L&apos;absence de réponse ne signifie pas un refus. Ça signifie souvent que votre message
              est arrivé au mauvais moment, ou que votre prospect n&apos;a pas eu le temps de répondre.
              Deux relances bien construites peuvent doubler votre taux de réponse global.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-8">
              La règle absolue : deux relances maximum. Au-delà, vous devenez une nuisance, pas un
              interlocuteur professionnel. Et chaque relance doit apporter un angle nouveau, pas
              répéter le message précédent sous une forme différente.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">J+3</span>
                  <span className="font-sans text-sm font-semibold text-text-primary">Relance courte, angle différent</span>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                  Ne répétez pas le premier message. Apportez une information nouvelle : un post
                  récent de leur part, une actualité de leur secteur, ou une question différente
                  de la première.
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                  &quot;Bonjour [Prénom], je voulais revenir vers vous — j&apos;ai vu votre post d&apos;hier sur
                  [sujet]. Ça rejoint exactement la question que je vous posais. Toujours intéressé
                  d&apos;en discuter si c&apos;est le bon moment pour vous.&quot;
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">J+7</span>
                  <span className="font-sans text-sm font-semibold text-text-primary">Dernière tentative ou pivot</span>
                </div>
                <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                  C&apos;est votre dernier message. Dites-le clairement. Un &quot;breakup message&quot; bien
                  rédigé obtient souvent plus de réponses que les relances précédentes — parce qu&apos;il
                  crée un sentiment d&apos;urgence douce sans être agressif.
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed italic">
                  &quot;Bonjour [Prénom], je ne reviendrai pas vers vous après ce message. Si la
                  prospection qualifiée n&apos;est pas un sujet pour vous en ce moment, pas de problème.
                  Si ça change dans quelques mois, n&apos;hésitez pas à revenir vers moi.&quot;
                </p>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Ce qu&apos;il ne faut jamais écrire dans une relance
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                &quot;Je voulais juste vérifier que vous aviez bien reçu mon message.&quot; Cette phrase
                ne crée aucune valeur pour votre prospect. Elle dit seulement que vous avez besoin
                de leur réponse. Si vous relancez, apportez quelque chose de nouveau — une observation,
                une question différente, une information utile. Sinon, ne relancez pas.
              </p>
            </div>
          </section>

          {/* Section 7 — FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
            </h2>
            <div className="divide-y divide-white/[0.06]">
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
          <div className="mt-14 pt-8 border-t border-white/[0.06] mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous avez le cadre. Maintenant, déléguez l&apos;exécution.
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Écrire de bons messages, c&apos;est une chose. Les envoyer chaque jour à la bonne personne,
              au bon moment, avec les bons suivis — c&apos;est un métier. Nos setters utilisent exactement
              ces scripts, adaptés à votre offre et à votre ICP.
              Garantie 5 RDV qualifiés minimum par mois.
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
