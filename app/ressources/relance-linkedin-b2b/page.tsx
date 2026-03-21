import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: "Relance LinkedIn B2B : quand et comment | Setting",
  description:
    "Pas de réponse sur LinkedIn ? Quand relancer, quel message envoyer et combien de fois. Le cadre complet pour des follow-ups efficaces.",
  openGraph: {
    title: "Relance LinkedIn B2B : quand et comment | Setting",
    description:
      "Pas de réponse à votre message LinkedIn ? Quand relancer, avec quel message et combien de fois : le cadre complet pour des follow-ups qui obtiennent des réponses.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/relance-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/relance-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/relance-linkedin-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/relance-linkedin-b2b',
  headline: 'Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur',
  description:
    "Pas de réponse à votre message LinkedIn ? Quand relancer, avec quel message et combien de fois : le cadre complet pour des follow-ups qui obtiennent des réponses.",
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/relance-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/relance-linkedin-b2b',
  },
  image: 'https://www.setting.live/ressources/relance-linkedin-b2b/opengraph-image',
}

const faqItems = [
  {
    question: 'Combien de fois peut-on relancer un prospect sur LinkedIn ?',
    answer:
      "Deux relances maximum sur une séquence initiale, espacées d'au moins 7 jours. Au-delà, le rapport effort/résultat s'effondre et le risque de nuire à l'image augmente. Si deux relances bien construites n'ont pas obtenu de réponse, le prospect n'est pas prêt. Il rentre en dormant, pas en perdu.",
  },
  {
    question: "Faut-il dire dans la relance qu'on a déjà envoyé un message ?",
    answer:
      "Non, sauf dans la relance de fin de séquence. Mentionner \"suite à mon message précédent\" dans la première relance met le prospect en position de dette — il sait qu'il n'a pas répondu et le sentiment associé est négatif. Abordez la relance comme un nouveau message avec un angle différent.",
  },
  {
    question: "Quel délai entre le premier message et la première relance ?",
    answer:
      "7 jours est la fenêtre standard. Si vous avez vu que le message a été lu, 3 jours suffisent. En dessous de 48 heures, c'est trop court : le prospect n'a pas eu le temps de traiter, et vous semblez pressé. La relance à J+3 ou J+7 est perçue comme normale. À J+1, elle sonne comme de la pression.",
  },
  {
    question: "Comment relancer quelqu'un qui a vu le message mais n'a pas répondu ?",
    answer:
      "Changez d'angle plutôt que de répéter. Le prospect a vu, il n'a pas été convaincu par l'accroche ou ce n'était pas le bon moment. Apportez quelque chose de nouveau : un contenu pertinent, une observation fraîche sur leur activité, ou une formulation plus directe de ce que vous proposez. Ne parlez pas du silence.",
  },
  {
    question: "La relance doit-elle être plus courte que le message initial ?",
    answer:
      "Oui, systématiquement. Le premier message peut aller jusqu'à 5 phrases. La relance doit tenir en 2 à 3 phrases. La brièveté dans la relance signale la confiance : vous n'avez pas besoin de vous justifier. Un long message de relance ressemble à une explication du silence — et ça ne fonctionne pas.",
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
      name: 'Relance LinkedIn B2B',
      item: 'https://www.setting.live/ressources/relance-linkedin-b2b',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const badRelances = [
  {
    text: '"Bonjour Thomas, je voulais juste vérifier si vous aviez eu le temps de regarder mon message précédent. N\'hésitez pas à revenir vers moi si vous souhaitez en discuter."',
    annotation: "\"Je voulais juste vérifier\" minimise la relance avant même qu'elle commence. \"Si vous souhaitez\" donne une porte de sortie immédiate. Ce message est conçu pour ne pas déranger — il ne dérange pas, et il n'obtient pas de réponse non plus.",
  },
  {
    text: '"Suite à mon message du 10 mars, je me permets de vous relancer concernant ma proposition. Notre offre permet de [bénéfice 1], [bénéfice 2] et [bénéfice 3]. Seriez-vous disponible pour un appel ?"',
    annotation: "\"Suite à mon message\" rappelle au prospect qu'il a ignoré la première tentative. Répéter les bénéfices dans la relance suppose que c'était le contenu le problème — ce n'est presque jamais le cas.",
  },
  {
    text: '"Bonjour, je reviens vers vous car je pense vraiment que notre solution pourrait vous convenir. Beaucoup de profils comme le vôtre ont déjà fait confiance à [nom de l\'outil]. Qu\'est-ce qui vous retient ?"',
    annotation: "\"Qu'est-ce qui vous retient\" est une reformulation implicite de reproche. La phrase \"profils comme le vôtre\" est une généralité — exactement ce qu'on évite dans le premier message, et encore plus dans la relance.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RelanceLinkedInB2BPage() {
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
              <li className="text-text-primary">Relance LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/setting" className="hover:underline transition-colors">Setting</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Relance LinkedIn B2B : quand et comment relancer sans passer pour un spammeur
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Vous avez envoyé un premier message. Pas de réponse. Que faire maintenant — relancer, attendre,
              ou classer le prospect comme perdu ? Ce guide répond à ces trois questions avec des exemples
              de messages réels et un cadre applicable dès aujourd&apos;hui.
            </p>
            <AuthorBlock date="2026-03-18" readTime="9 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stat block */}
          <div className="bg-bg-secondary rounded-xl px-6 py-5 mb-10 border border-white/[0.06]">
            <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
            <p className="font-sans font-semibold text-text-primary mb-1">
              Entre 70 et 80&nbsp;% des réponses obtenues sur LinkedIn arrivent après une relance — pas après le premier message.
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Ce n&apos;est pas que le premier message ne fonctionne pas. C&apos;est que la relance fait partie du processus normal.
              Le problème n&apos;est pas de relancer. C&apos;est comment on le fait.
              (Source : données terrain Setting, 2025–2026)
            </p>
          </div>

          {/* TOC */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl px-6 py-5 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { href: '#realite', label: 'Ce que "pas de réponse" signifie vraiment' },
                { href: '#quand', label: 'Quand relancer : les fenêtres qui fonctionnent' },
                { href: '#comment', label: 'Comment relancer : les 3 approches' },
                { href: '#erreurs', label: 'Ce que la plupart font (et qui ne fonctionne pas)' },
                { href: '#crm', label: 'Organiser ses relances sans perdre la tête' },
                { href: '#faq', label: 'Questions fréquentes' },
              ].map(({ href, label }, i) => (
                <li key={href} className="flex gap-2.5">
                  <span className="font-sans text-sm text-accent font-semibold shrink-0">{i + 1}.</span>
                  <a href={href} className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-relaxed">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 — Ce que "pas de réponse" signifie vraiment */}
          <section id="realite" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que &quot;pas de réponse&quot; signifie vraiment
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Avant de décider quoi faire, il faut comprendre ce qui s&apos;est passé. &quot;Pas de réponse&quot; n&apos;est pas un signal uniforme.
              Il y a trois situations distinctes, et elles n&apos;appellent pas la même réaction.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2">Cas 1 — Le message n&apos;a pas été vu</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  LinkedIn ne notifie pas toujours immédiatement. Si le prospect n&apos;est pas très actif sur la plateforme,
                  votre message peut attendre 5 à 10 jours dans sa boîte avant d&apos;être ouvert.
                  Dans ce cas, il n&apos;y a pas de rejet — il n&apos;y a pas eu de contact.
                  Relancer à J+7 est parfaitement normal.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2">Cas 2 — Vu, mais l&apos;accroche n&apos;a pas convaincu</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le prospect a lu, n&apos;a pas répondu, et a passé à autre chose. Répéter le même message ne changera rien.
                  Ce qu&apos;il faut : changer l&apos;angle, apporter quelque chose de nouveau.
                  La relance doit ressembler à un deuxième essai — pas à un rappel que vous existez.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2">Cas 3 — Vu, intéressé, mais pas le bon moment</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  C&apos;est le cas le plus fréquent et le plus sous-estimé. Le prospect a lu, le sujet l&apos;intéresse,
                  mais il a autre chose en tête ce jour-là. Il s&apos;est dit &quot;je répondrai plus tard&quot; — et plus tard n&apos;est jamais venu.
                  Une relance bien placée à J+21 ou J+30 peut rouvrir la conversation au bon moment.
                </p>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La majorité des non-réponses rentrent dans le cas 3. Ce n&apos;est pas un rejet — c&apos;est un mauvais timing.
              C&apos;est pourquoi relancer n&apos;est pas du harcèlement : c&apos;est de la présence au bon moment.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La frontière entre relance utile et spam tient à deux choses : la fréquence et le contenu.
              Deux relances espacées, avec un angle différent à chaque fois, ne sont jamais du spam.
              Cinq messages identiques en quinze jours, oui. La différence est dans la méthode, pas dans le principe de relancer.
              Pour aller plus loin sur les raisons structurelles derrière les&nbsp;
              <a href="/ressources/messages-linkedin-sans-reponse" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">
                messages qui n&apos;obtiennent pas de réponse
              </a>, un article dédié couvre les erreurs de premier message qui rendent la relance encore plus difficile.
            </p>
          </section>

          {/* Section 2 — Quand relancer */}
          <section id="quand" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Quand relancer : les fenêtres qui fonctionnent
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Le timing de la relance n&apos;est pas une préférence personnelle. Il y a des fenêtres qui produisent des résultats,
              et des délais qui signalent soit de l&apos;impatience, soit de la négligence.
            </p>

            <div className="space-y-6 mb-8">
              {/* J+3 */}
              <div className="flex gap-5">
                <div className="shrink-0 pt-1">
                  <span className="font-serif text-2xl text-accent/30 font-semibold leading-none">J+3</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">La fenêtre courte — si le message a été vu</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Si vous savez (via les indicateurs de lecture LinkedIn) que le message a été ouvert mais n&apos;a pas obtenu de réponse,
                    trois jours est un délai raisonnable. Assez court pour rester dans la fenêtre d&apos;attention du prospect,
                    assez long pour ne pas sembler pressé. Cette relance doit être courte — 2 phrases maximum —
                    et changer l&apos;angle par rapport au premier message.
                  </p>
                </div>
              </div>

              {/* J+7 */}
              <div className="flex gap-5">
                <div className="shrink-0 pt-1">
                  <span className="font-serif text-2xl text-accent/30 font-semibold leading-none">J+7</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">La fenêtre standard — dans la majorité des cas</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Sept jours est le délai par défaut quand vous n&apos;avez pas d&apos;information sur la lecture du message.
                    Une semaine est une unité de temps naturelle pour les décideurs B2B : les sujets s&apos;organisent par semaine,
                    les priorités changent à la semaine. Relancer au bout d&apos;une semaine s&apos;inscrit dans ce rythme
                    sans paraître hors-sol.
                  </p>
                </div>
              </div>

              {/* J+21 à J+30 */}
              <div className="flex gap-5">
                <div className="shrink-0 pt-1">
                  <span className="font-serif text-2xl text-accent/30 font-semibold leading-none">J+21</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">La relance longue — le contexte a peut-être changé</h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Trois à quatre semaines après le premier message, la situation du prospect a pu évoluer.
                    Un projet qui n&apos;était pas prioritaire est peut-être devenu urgent. Un budget s&apos;est libéré.
                    Une contrainte a sauté. Cette relance longue fonctionne mieux si elle est accompagnée d&apos;un nouveau signal :
                    un post récent du prospect, un changement dans son titre, un contenu qu&apos;il a partagé.
                    Elle est souvent plus efficace que la relance à J+7.
                  </p>
                </div>
              </div>
            </div>

            {/* Ce qu'il ne faut pas faire */}
            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-3">Ce qu&apos;il ne faut pas faire</p>
              <div className="space-y-2">
                {[
                  "Relancer à J+1 ou J+2 : le prospect n'a pas eu le temps de traiter. Ça sonne comme de la pression.",
                  "Faire 4 relances sur 3 semaines : au bout de la troisième, le prospect associe votre nom à du spam, pas à une offre.",
                  "Relancer le vendredi après-midi ou le lundi matin : deux moments où les boîtes de réception sont au pic.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 font-sans text-sm text-text-secondary">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Comment relancer */}
          <section id="comment" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment relancer : les 3 approches
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Il n&apos;y a pas une façon unique de relancer. Le bon angle dépend du profil du prospect,
              de ce qui s&apos;est passé depuis le premier message, et du délai écoulé.
              Voici les trois approches qui fonctionnent — avec un exemple de message pour chacune.
            </p>

            {/* Approche 1 — Angle différent */}
            <div className="mb-10">
              <div className="flex gap-3 items-center mb-4">
                <span className="font-serif text-xl text-accent/40 font-semibold">01</span>
                <h3 className="font-sans font-semibold text-text-primary">Angle différent — on change le cadre, pas juste la formulation</h3>
              </div>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-5">
                Le prospect n&apos;a pas répondu au premier angle. Répéter la même chose avec d&apos;autres mots ne changera pas le résultat.
                Cette approche consiste à entrer par une autre porte : une question différente, un aspect de leur activité
                que vous n&apos;aviez pas mentionné, ou une formulation qui s&apos;adresse directement à leur situation actuelle plutôt
                qu&apos;à leur rôle générique. Le cadre de{' '}
                <a href="/ressources/setting-commercial-b2b" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">
                  setting commercial B2B
                </a>{' '}
                place cette approche dans la phase de qualification : on ne cherche pas à vendre, on cherche à savoir si c&apos;est le bon moment.
              </p>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-3 border-b border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Exemple — Relance angle différent (J+7)
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed mb-4">
                    &quot;Bonjour Camille, je vous ai écrit la semaine dernière sur votre processus de qualification leads.
                    Question différente : est-ce que le problème pour vous c&apos;est plutôt le volume de contacts
                    ou la conversion une fois qu&apos;ils sont dans le pipe ?&quot;
                  </p>
                  <div className="flex gap-2 items-start">
                    <span className="text-accent shrink-0 mt-0.5 text-xs font-semibold font-sans">→</span>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      On mentionne le premier message sans s&apos;en excuser. On bascule vers une question de diagnostic — pas un pitch.
                      La réponse, quelle qu&apos;elle soit, ouvre la qualification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approche 2 — Nouveau signal */}
            <div className="mb-10">
              <div className="flex gap-3 items-center mb-4">
                <span className="font-serif text-xl text-accent/40 font-semibold">02</span>
                <h3 className="font-sans font-semibold text-text-primary">Nouveau signal — il a posté ou interagi depuis le premier message</h3>
              </div>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-5">
                Si le prospect a publié un post, commenté quelque chose, ou changé son titre entre le premier message et la relance,
                vous avez une raison naturelle de revenir. Cette approche transforme la relance en réaction à un événement récent —
                elle ne ressemble plus à une relance.
                C&apos;est la même logique que la prospection sur{' '}
                <a href="/ressources/signal-achat-linkedin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">
                  signal d&apos;achat
                </a>{' '}
                : on répond à quelque chose de concret, on n&apos;arrive pas dans le vide.
              </p>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-3 border-b border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Exemple — Relance sur nouveau signal (J+21)
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed mb-4">
                    &quot;Bonjour Romain, j&apos;ai vu votre post d&apos;hier sur le recrutement commercial — vous cherchez quelqu&apos;un
                    pour structurer la prospection outbound. C&apos;est exactement ce sur quoi je vous avais écrit il y a trois semaines.
                    Ça vaut le coup qu&apos;on se parle ?&quot;
                  </p>
                  <div className="flex gap-2 items-start">
                    <span className="text-accent shrink-0 mt-0.5 text-xs font-semibold font-sans">→</span>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      Le premier message est mentionné comme preuve de cohérence, pas comme reproche.
                      La relance est motivée par un événement réel — elle n&apos;arrive pas par hasard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approche 3 — Fin de séquence */}
            <div className="mb-6">
              <div className="flex gap-3 items-center mb-4">
                <span className="font-serif text-xl text-accent/40 font-semibold">03</span>
                <h3 className="font-sans font-semibold text-text-primary">Fin de séquence — la dernière prise de contact sur ce sujet</h3>
              </div>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-5">
                C&apos;est la seule relance où vous mentionnez explicitement que c&apos;est la dernière.
                Cette formulation fonctionne parce qu&apos;elle lève la pression : le prospect sait que vous ne reviendrez pas,
                ce qui réduit le sentiment de dette. Paradoxalement, certains prospects répondent à cette relance
                précisément parce qu&apos;ils sentent que la fenêtre se ferme.
                Pour des exemples complets de séquences, l&apos;article sur les{' '}
                <a href="/ressources/script-setting-linkedin" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors">
                  scripts de setting LinkedIn
                </a>{' '}
                couvre la structure complète du premier message jusqu&apos;à la sortie.
              </p>
              <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
                <div className="px-6 py-3 border-b border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Exemple — Relance fin de séquence (J+28)
                  </p>
                </div>
                <div className="px-6 py-5">
                  <p className="font-sans text-sm text-text-secondary italic leading-relaxed mb-4">
                    &quot;Bonjour Élise, c&apos;est la dernière fois que je vous contacte sur ce sujet.
                    Si ça n&apos;est pas le bon moment, pas de problème — je comprends.
                    Si ça redevient d&apos;actualité, je suis joignable ici.&quot;
                  </p>
                  <div className="flex gap-2 items-start">
                    <span className="text-accent shrink-0 mt-0.5 text-xs font-semibold font-sans">→</span>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">
                      Pas d&apos;explication, pas de bénéfice rappelé, pas de CTA direct. La porte est laissée ouverte sans pression.
                      C&apos;est la seule relance où &quot;pas de réponse&quot; est une réponse acceptable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 — Ce que la plupart font */}
          <section id="erreurs" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que la plupart font — et qui ne fonctionne pas
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Ces erreurs ne sont pas des caricatures. Ce sont des messages réels, envoyés par des gens sérieux
              qui prospectent avec de bonnes intentions. Le problème n&apos;est pas la volonté — c&apos;est la formulation,
              qui envoie exactement le mauvais signal.
            </p>

            <div className="space-y-6">
              {badRelances.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-red-500/20 bg-red-500/5">
                  <div className="px-6 py-3 border-b border-red-500/20 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400 shrink-0" />
                    <p className="font-sans text-xs font-semibold text-red-400 uppercase tracking-widest">
                      Message à ne pas envoyer — exemple {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="font-sans text-sm text-text-secondary italic leading-relaxed mb-4">
                      {item.text}
                    </p>
                    <div className="flex gap-2 items-start">
                      <span className="text-red-400 shrink-0 mt-0.5 text-xs font-semibold font-sans">✗</span>
                      <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.annotation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-8 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                La relance qui fonctionne ne parle pas du silence — elle apporte quelque chose de nouveau.
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Le prospect sait qu&apos;il n&apos;a pas répondu. Lui rappeler ne sert à rien et crée un sentiment négatif.
                La bonne relance arrive comme si le premier message n&apos;avait pas existé — avec un contenu différent,
                un angle différent, une raison de répondre qui n&apos;était pas là avant.
              </p>
            </div>
          </section>

          {/* Section 5 — Organiser ses relances */}
          <section id="crm" className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Organiser ses relances sans perdre la tête
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La relance isolée se gère seule. Mais dès qu&apos;on prospecte 20 à 30 personnes par semaine,
              sans système de suivi, les relances tombent à l&apos;eau ou arrivent en double.
              Voici comment poser un cadre minimal sans passer sa vie dans un tableur.
            </p>

            <h3 className="font-sans font-semibold text-text-primary mb-3">Suivre ses relances — pourquoi et avec quoi</h3>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-6">
              BreakCold est l&apos;outil de référence pour les setters LinkedIn : il centralise les conversations,
              permet de planifier les relances et de suivre où en est chaque prospect dans la séquence.
              Mais un tableau simple avec quatre colonnes — Nom / Date du premier message / Date relance prévue / Statut —
              suffit pour moins de 50 prospects actifs. L&apos;outil importe moins que l&apos;habitude de l&apos;alimenter.
            </p>

            <h3 className="font-sans font-semibold text-text-primary mb-3">La règle des 2 relances maximum par séquence initiale</h3>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-6">
              Premier message + 2 relances = 3 prises de contact maximum sur une fenêtre de 30 jours.
              C&apos;est assez pour qu&apos;un prospect prêt réagisse. C&apos;est peu assez pour ne pas brûler la relation.
              Si trois contacts espacés sur un mois n&apos;ont pas produit de réponse, la séquence est terminée pour ce cycle.
            </p>

            <h3 className="font-sans font-semibold text-text-primary mb-3">Dormant vs perdu — une distinction qui compte</h3>
            <p className="font-sans text-text-secondary text-sm leading-relaxed mb-6">
              Un prospect qui ne répond pas après 3 prises de contact n&apos;est pas perdu — il n&apos;est pas prêt maintenant.
              Le mettre en &quot;perdu&quot; dans votre CRM, c&apos;est le fermer définitivement. Le mettre en &quot;dormant&quot;,
              c&apos;est prévoir de revenir dans 60 à 90 jours si vous observez un nouveau signal sur son profil.
              Beaucoup de deals se concluent sur un deuxième cycle, 3 à 6 mois après le premier contact.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-2">
                Les 4 statuts à avoir dans son pipeline de relances
              </p>
              <div className="space-y-2 mt-1">
                {[
                  { label: 'En cours', detail: 'Séquence active — premier message envoyé, relances planifiées.' },
                  { label: 'En attente de réponse', detail: 'Relance envoyée, délai pas encore écoulé pour la suivante.' },
                  { label: 'Dormant', detail: 'Séquence terminée sans réponse — à réactiver sur nouveau signal dans 60–90 jours.' },
                  { label: 'Qualifié', detail: 'Réponse obtenue, prospect en conversation active.' },
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 py-2 border-b border-white/[0.06] last:border-0">
                    <span className="font-sans text-xs font-semibold text-accent shrink-0 mt-0.5 w-28">{s.label}</span>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
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
                  <p className="font-sans text-text-secondary leading-relaxed text-sm">
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
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de réponses" },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn B2B : exemples et cadre complet' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
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
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez un système de relances qui tourne sans y penser ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Setting opère le système complet : premier message, relances calibrées, gestion du pipeline.
              Vous vous concentrez sur les RDV qualifiés. Garantie 5 minimum par mois.
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
