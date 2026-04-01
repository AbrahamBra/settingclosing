import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Messages de prospection LinkedIn : 15 exemples qui obtiennent des r\u00e9ponses | Setting',
  description:
    '15 exemples de messages de prospection LinkedIn B2B class\u00e9s par signal d\u2019achat. Mod\u00e8les de connexion, d\u2019accroche et de relance avec taux de r\u00e9ponse r\u00e9els.',
  openGraph: {
    title: 'Messages de prospection LinkedIn : 15 exemples qui obtiennent des r\u00e9ponses',
    description:
      '15 exemples de messages de prospection LinkedIn B2B class\u00e9s par signal d\u2019achat. Mod\u00e8les de connexion, d\u2019accroche et de relance avec taux de r\u00e9ponse r\u00e9els.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
    languages: {
      'fr': 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
      'x-default': 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Messages de prospection LinkedIn : 15 exemples qui obtiennent des r\u00e9ponses',
    description: '15 exemples de messages de prospection LinkedIn B2B class\u00e9s par signal d\u2019achat. Mod\u00e8les de connexion, d\u2019accroche et de relance avec taux de r\u00e9ponse r\u00e9els.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
  headline: 'Messages de prospection LinkedIn : 15 exemples qui obtiennent des r\u00e9ponses',
  description:
    '15 exemples de messages de prospection LinkedIn B2B class\u00e9s par signal d\u2019achat. Mod\u00e8les de connexion, d\u2019accroche et de relance avec taux de r\u00e9ponse r\u00e9els.',
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
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  inLanguage: 'fr-FR',
  wordCount: 3800,
  url: 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
  },
  about: [
    { '@type': 'Thing', name: 'Messages de prospection LinkedIn' },
    { '@type': 'Thing', name: 'Prospection B2B' },
    { '@type': 'Thing', name: 'Setting commercial' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#pourquoi-ignores', '#anatomie'],
  },
}

const faqItems = [
  {
    question: 'Combien de messages envoyer par jour sur LinkedIn ?',
    answer:
      'Entre 20 et 30 messages personnalis\u00e9s par jour, maximum. Au-del\u00e0, LinkedIn peut restreindre ton compte. La qualit\u00e9 prime toujours sur la quantit\u00e9 : 25 messages ancr\u00e9s sur un signal obtiennent plus de r\u00e9ponses que 200 copier-coller.',
  },
  {
    question: 'Faut-il envoyer une note avec la demande de connexion ?',
    answer:
      'Cela d\u00e9pend du signal. Si tu as un fait pr\u00e9cis \u00e0 mentionner (r\u00e9action \u00e0 un post, connexion commune, changement de poste), oui, envoie une note courte. Si tu n\u2019as pas de signal fort, une demande de connexion simple sans note a un meilleur taux d\u2019acceptation qu\u2019une note g\u00e9n\u00e9rique.',
  },
  {
    question: 'Peut-on utiliser l\u2019IA pour r\u00e9diger ses messages LinkedIn ?',
    answer:
      'Oui, comme co-r\u00e9dacteur. L\u2019IA peut t\u2019aider \u00e0 structurer un message ou trouver une accroche. Mais un message 100% g\u00e9n\u00e9r\u00e9 par IA se rep\u00e8re vite : ton g\u00e9n\u00e9rique, formules creuses, absence de d\u00e9tail sp\u00e9cifique. Relis toujours, personnalise avec un fait r\u00e9el, et signe toi-m\u00eame.',
  },
  {
    question: 'Quel taux de r\u00e9ponse viser sur ses messages LinkedIn ?',
    answer:
      'En cold outreach am\u00e9lior\u00e9 (ciblage pr\u00e9cis, message personnalis\u00e9), vise 8 \u00e0 15%. Avec la m\u00e9thode signal-based (message ancr\u00e9 sur un comportement observable du prospect), le taux monte \u00e0 20-35%. En dessous de 5%, revois ton ciblage ou tes messages.',
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
      name: 'Messages de prospection LinkedIn',
      item: 'https://www.setting.live/ressources/messages-prospection-linkedin-exemples',
    },
  ],
}

export default function MessagesProspectionLinkedInExemplesPage() {
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
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Messages de prospection LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection &middot; LinkedIn &middot; Messages
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Messages de prospection LinkedIn : 15 exemples qui obtiennent des r&eacute;ponses
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Tu envoies 50 messages LinkedIn par semaine et tu r&eacute;coltes 2 r&eacute;ponses ?
              Le probl&egrave;me n&apos;est pas LinkedIn. C&apos;est le message. Ici, tu vas trouver
              15 exemples concrets de messages class&eacute;s par situation : connexion, accroche
              apr&egrave;s connexion, relance. Chaque message est ancr&eacute; sur un signal
              d&apos;achat pr&eacute;cis, test&eacute; sur le terrain, avec les taux de r&eacute;ponse
              r&eacute;els que nous obtenons chez Setting.
            </p>
            <AuthorBlock date="2026-03-25" readTime="15 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p>Les messages LinkedIn qui obtiennent des r&eacute;ponses ont 4 points communs : 5 lignes max, un fait pr&eacute;cis sur le prospect d&egrave;s la 2e phrase, z&eacute;ro pitch, et une question ouverte &agrave; la fin. Taux de r&eacute;ponse moyen avec cette structure : 20 &agrave; 35%, contre 2-3% pour un template g&eacute;n&eacute;rique. Ce guide te donne 15 messages pr&ecirc;ts &agrave; adapter, class&eacute;s par signal d&apos;achat.</p>
          </TldrBox>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '15', label: 'exemples de messages class\u00e9s par signal' },
              { stat: '20\u201335%', label: 'taux de r\u00e9ponse signal-based' },
              { stat: '5', label: 'lignes maximum par message' },
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
                { id: 'pourquoi-ignores', label: 'Pourquoi 95% des messages LinkedIn finissent ignor\u00e9s' },
                { id: 'anatomie', label: 'L\u2019anatomie d\u2019un message qui obtient une r\u00e9ponse' },
                { id: 'connexion', label: '5 messages de connexion LinkedIn' },
                { id: 'accroche', label: '5 messages d\u2019accroche apr\u00e8s connexion' },
                { id: 'relance', label: '5 messages de relance LinkedIn' },
                { id: 'erreurs', label: 'Les erreurs qui tuent ton taux de r\u00e9ponse' },
                { id: 'telephonique', label: 'Du message au RDV : le r\u00f4le du setting t\u00e9l\u00e9phonique' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
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

            {/* Section 1 — Pourquoi 95% des messages sont ignorés */}
            <section id="pourquoi-ignores" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Pourquoi 95% des messages LinkedIn finissent ignor&eacute;s
              </h2>
              <p className="mb-4">
                Ouvre tes DM LinkedIn. Scrolle les messages re&ccedil;us de personnes que tu ne connais pas. Tu retrouves les m&ecirc;mes sch&eacute;mas : un pr&eacute;nom + un pitch, un paragraphe entier sur l&apos;entreprise de l&apos;exp&eacute;diteur, une proposition de call dans le premier message. Aucune raison de r&eacute;pondre.
              </p>
              <p className="mb-4">
                Le taux de r&eacute;ponse moyen en cold outreach sur LinkedIn tourne autour de 2 &agrave; 3%. Sur 100 messages envoy&eacute;s, 97 finissent dans le vide. Le probl&egrave;me, c&apos;est le message.
              </p>
              <p className="mb-4">
                Les erreurs principales sont toujours les m&ecirc;mes.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le template g&eacute;n&eacute;rique</h3>
              <p className="mb-4">
                Tu prends un mod&egrave;le trouv&eacute; sur un blog, tu remplaces [Pr&eacute;nom] et [Entreprise], tu envoies &agrave; 200 personnes. Le prospect le voit imm&eacute;diatement. Il re&ccedil;oit 5 messages identiques par semaine. Le sien n&apos;a rien de sp&eacute;cifique, donc il ne r&eacute;pond pas.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le pitch dans le premier message</h3>
              <p className="mb-4">
                Personne ne veut qu&apos;on lui vende quelque chose dans un premier DM. Le premier message sert &agrave; ouvrir une conversation, pas &agrave; pr&eacute;senter ton offre. Quand tu pitches d&egrave;s le d&eacute;part, tu envoies un signal clair : &laquo;&nbsp;je ne m&apos;int&eacute;resse pas &agrave; toi, je veux te vendre un truc&nbsp;&raquo;.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">L&apos;absence de contexte</h3>
              <p className="mb-4">
                Le prospect ne sait pas pourquoi tu lui &eacute;cris &agrave; lui, maintenant. Si ton message pourrait &ecirc;tre envoy&eacute; &agrave; n&apos;importe qui d&apos;autre, il n&apos;a aucune raison de te r&eacute;pondre. Ce qui manque, c&apos;est un fait pr&eacute;cis qui justifie ta prise de contact.
              </p>
              <p>
                En corrigeant ces points, tu passes de 2-3% &agrave; 20-35% de taux de r&eacute;ponse. La section suivante d&eacute;compose ce qui fonctionne.
              </p>
            </section>

            {/* Section 2 — Anatomie d'un message efficace */}
            <section id="anatomie" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                L&apos;anatomie d&apos;un message qui obtient une r&eacute;ponse
              </h2>
              <p className="mb-4">
                Tous les messages qui fonctionnent partagent la m&ecirc;me structure. Pas besoin de r&eacute;inventer &agrave; chaque fois.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">R&egrave;gle 1 : 5 lignes maximum</h3>
              <p className="mb-4">
                Sur mobile, un message de plus de 5 lignes est tronqu&eacute;. Le prospect doit cliquer pour lire la suite. La plupart ne le font pas. Garde ton message court : salutation, fait pr&eacute;cis, question.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">R&egrave;gle 2 : la 2e phrase mentionne un fait pr&eacute;cis</h3>
              <p className="mb-4">
                C&apos;est la phrase qui fait toute la diff&eacute;rence. Elle montre que tu as lu le profil ou rep&eacute;r&eacute; le changement de poste. Cette phrase ancre ton message dans la r&eacute;alit&eacute; du prospect. Sans elle, tu es un inconnu parmi d&apos;autres.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">R&egrave;gle 3 : z&eacute;ro pitch</h3>
              <p className="mb-4">
                Pas de mention de ton produit ou de ton entreprise. Le premier message n&apos;est pas un email marketing. C&apos;est une entr&eacute;e en conversation. Tu parles du prospect, pas de toi.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">R&egrave;gle 4 : une question ouverte &agrave; la fin</h3>
              <p className="mb-4">
                La question donne au prospect une raison de r&eacute;pondre. Pas une question ferm&eacute;e (&laquo;&nbsp;Est-ce que &ccedil;a vous int&eacute;resse ?&nbsp;&raquo;). Une question ouverte li&eacute;e au signal que tu as identifi&eacute; (&laquo;&nbsp;C&apos;est un sujet sur lequel vous travaillez en ce moment ?&nbsp;&raquo;).
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">R&egrave;gle 5 : pr&eacute;nom uniquement en signature</h3>
              <p className="mb-4">
                Signe avec ton pr&eacute;nom. Pas &laquo;&nbsp;Abraham Brakha, Fondateur de Setting&nbsp;&raquo;. Le prospect verra ton titre sur ton profil s&apos;il clique. La signature longue renforce l&apos;impression de message commercial.
              </p>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="font-semibold text-text-primary text-sm mb-2">Structure type</p>
                <ul className="space-y-1 text-sm">
                  <li>Ligne 1 : Salut [Pr&eacute;nom],</li>
                  <li>Ligne 2 : [Fait pr&eacute;cis observ&eacute; sur le profil / post / activit&eacute;]</li>
                  <li>Ligne 3 : [Contexte ou pont entre le signal et un sujet pertinent]</li>
                  <li>Ligne 4 : [Question ouverte]</li>
                  <li>Ligne 5 : Abraham</li>
                </ul>
              </div>

              <p>
                Avec cette structure, les messages envoy&eacute;s chez Setting obtiennent entre 20 et 35% de taux de r&eacute;ponse. La cl&eacute;, c&apos;est le signal. Pas le template.
              </p>
              <p className="text-sm text-text-muted italic mt-2">
                Pour aller plus loin : <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline">C&apos;est quoi un signal d&apos;achat LinkedIn ?</a>
              </p>
            </section>

            {/* Section 3 — 5 messages de connexion */}
            <section id="connexion" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                5 messages de connexion LinkedIn
              </h2>
              <p className="mb-6">
                La demande de connexion est le premier point de contact. Si tu as un signal fort, ajoute une note. Sinon, envoie la demande sans note (taux d&apos;acceptation souvent meilleur qu&apos;avec une note g&eacute;n&eacute;rique). Voici 5 messages de connexion ancr&eacute;s chacun sur un signal diff&eacute;rent.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">1. R&eacute;action &agrave; ton post</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu que tu avais lik&eacute; mon post sur les signaux d&apos;achat LinkedIn.<br />
                  C&apos;est un sujet sur lequel tu travailles en ce moment ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">2. Commentaire chez un concurrent</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu ton commentaire sous le post de [Concurrent] sur l&apos;externalisation commerciale.<br />
                  Tu &eacute;values des options pour structurer ta prospection chez [Entreprise] ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">3. Changement de poste</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  F&eacute;licitations pour ton nouveau r&ocirc;le de [Titre] chez [Entreprise].<br />
                  Quand on arrive sur un poste commercial, la prospec est souvent le premier chantier. C&apos;est le cas pour toi ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">4. Publication sur une probl&eacute;matique</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai lu ton post sur la difficult&eacute; &agrave; g&eacute;n&eacute;rer des leads qualifi&eacute;s en B2B.<br />
                  Tu as trouv&eacute; un canal qui fonctionne pour [Entreprise] ou c&apos;est encore en test ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">5. Connexion commune</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  On a [Connexion] en commun et je vois que tu g&egrave;res le d&eacute;veloppement commercial chez [Entreprise].<br />
                  Vous faites votre prospection en interne ou vous avez externalis&eacute; une partie ?<br /><br />
                  Abraham
                </p>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">Scripts de setting LinkedIn B2B</a>
              </p>
            </section>

            {/* Section 4 — 5 messages d'accroche après connexion */}
            <section id="accroche" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                5 messages d&apos;accroche apr&egrave;s connexion
              </h2>
              <p className="mb-6">
                Le prospect a accept&eacute; ta connexion. C&apos;est le signal qu&apos;il est ouvert &agrave; l&apos;&eacute;change. Ton prochain message doit rebondir sur un fait r&eacute;cent ou apporter quelque chose d&apos;utile.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">1. Rebond sur un signal r&eacute;cent</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  Merci pour la connexion. J&apos;ai vu que tu avais r&eacute;agi &agrave; un post sur le cold calling B2B cette semaine.<br />
                  C&apos;est un canal que vous utilisez chez [Entreprise] ou vous &ecirc;tes plut&ocirc;t LinkedIn-first ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">2. Apport de valeur direct</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  Merci d&apos;avoir accept&eacute;. J&apos;ai &eacute;crit un guide sur les messages de prospection LinkedIn qui obtiennent des r&eacute;ponses. Vu ton poste, &ccedil;a pourrait t&apos;int&eacute;resser.<br />
                  Je te l&apos;envoie ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">3. Question contextuelle</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  En regardant ton profil, j&apos;ai vu que tu avais recrut&eacute; 3 SDR en 6 mois chez [Entreprise].<br />
                  Tu arrives &agrave; les rendre autonomes sur la prospection LinkedIn ou c&apos;est encore un chantier ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">4. Cas similaire</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  On travaille avec une boite dans le [secteur] qui avait le m&ecirc;me enjeu : g&eacute;n&eacute;rer des leads sans d&eacute;pendre du paid.<br />
                  C&apos;est un sujet chez vous aussi ou vous avez trouv&eacute; votre canal principal ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">5. Observation d&apos;activit&eacute; r&eacute;cente</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai remarqu&eacute; que tu publies r&eacute;guli&egrave;rement sur le social selling. Ton dernier post sur les InMails m&apos;a parl&eacute;.<br />
                  Tu mesures l&apos;impact de tes posts sur ta g&eacute;n&eacute;ration de leads ou c&apos;est surtout du branding pour l&apos;instant ?<br /><br />
                  Abraham
                </p>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">Pourquoi tes messages LinkedIn n&apos;obtiennent pas de r&eacute;ponse</a>
              </p>
            </section>

            {/* Section 5 — 5 messages de relance */}
            <section id="relance" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                5 messages de relance LinkedIn
              </h2>
              <p className="mb-4">
                Le prospect n&apos;a pas r&eacute;pondu. Ce n&apos;est pas forc&eacute;ment un refus. Il a peut-&ecirc;tre lu ton message entre deux r&eacute;unions et oubli&eacute; de revenir dessus. La relance sert &agrave; &ccedil;a.
              </p>
              <p className="mb-6">
                R&egrave;gle absolue : maximum 2 relances, espac&eacute;es de 5 &agrave; 7 jours. Au-del&agrave;, tu passes de &laquo;&nbsp;pers&eacute;v&eacute;rant&nbsp;&raquo; &agrave; &laquo;&nbsp;insistant&nbsp;&raquo;. Et chaque relance doit apporter un angle nouveau, pas r&eacute;p&eacute;ter le premier message.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">1. J+5 : nouvel angle</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  Je reviens vers toi. J&apos;ai vu que [Entreprise] avait publi&eacute; une offre de SDR la semaine derni&egrave;re.<br />
                  Vous structurez votre prospec en interne du coup, ou vous &ecirc;tes ouverts &agrave; d&apos;autres approches ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">2. J+12 : apport de valeur</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  Je viens de publier une &eacute;tude sur les taux de r&eacute;ponse LinkedIn par secteur. Les r&eacute;sultats sur le [secteur] sont surprenants.<br />
                  Tu veux que je t&apos;envoie le r&eacute;sum&eacute; ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">3. Dernier message : permission de clore</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  Je ne veux pas encombrer tes DM. Si la prospec B2B n&apos;est pas un sujet chez toi en ce moment, dis-le-moi et je ne te rela&ncedil;e plus.<br />
                  Si &ccedil;a le devient, tu sais o&ugrave; me trouver.<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">4. Post-visite de profil</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu que tu avais visit&eacute; mon profil. Peut-&ecirc;tre suite &agrave; mon dernier message.<br />
                  Si tu as des questions sur le sujet, je suis dispo pour en discuter.<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">5. Post-&eacute;v&eacute;nement</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu que tu participais &agrave; [&Eacute;v&eacute;nement / Webinar]. Le sujet de la session sur [th&egrave;me] rejoint ce dont on avait parl&eacute;.<br />
                  Tu en as retir&eacute; des id&eacute;es actionnables pour [Entreprise] ?<br /><br />
                  Abraham
                </p>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">Relance LinkedIn B2B : m&eacute;thode et exemples</a>
              </p>
            </section>

            {/* Section 6 — Les erreurs */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les erreurs qui tuent ton taux de r&eacute;ponse
              </h2>
              <p className="mb-6">
                Tu peux avoir le bon ciblage et le bon signal. Si tu fais une de ces erreurs, ton message finira ignor&eacute; quand m&ecirc;me.
              </p>

              <div className="space-y-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Message de plus de 5 lignes</p>
                  <p className="text-sm">Sur mobile, ton message est tronqu&eacute; au-del&agrave; de 5 lignes. Le prospect doit cliquer pour lire la suite. La majorit&eacute; ne clique pas. R&eacute;sultat : ton argument principal est cach&eacute; et ta question reste invisible. Raccourcis. Chaque mot doit m&eacute;riter sa place.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Pitcher dans le premier DM</p>
                  <p className="text-sm">Le premier message sert &agrave; ouvrir une conversation. Si tu mentionnes ton produit, ton service ou ton tarif d&egrave;s le premier DM, tu perds 80% des r&eacute;ponses potentielles. Le prospect ne te conna&icirc;t pas encore. Commence par montrer que tu le connais, lui.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Copier-coller le m&ecirc;me message</p>
                  <p className="text-sm">Le prospect le sent. M&ecirc;me quand tu remplaces [Pr&eacute;nom] et [Entreprise], le ton reste g&eacute;n&eacute;rique. L&apos;absence de fait pr&eacute;cis trahit le copier-coller. Chaque message doit contenir un &eacute;l&eacute;ment que seul ce prospect peut reconna&icirc;tre comme personnel.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Relancer 4 fois ou plus</p>
                  <p className="text-sm">Apr&egrave;s 2 relances sans r&eacute;ponse, le message est pass&eacute;. Insister une 3e, 4e, 5e fois d&eacute;grade ta r&eacute;putation, augmente le risque de signalement spam, et ferme la porte d&eacute;finitivement. Deux relances max, 5 &agrave; 7 jours entre chaque.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Envoyer 200 messages avec le m&ecirc;me texte</p>
                  <p className="text-sm">C&apos;est la d&eacute;finition du spam. LinkedIn d&eacute;tecte les envois en masse et restreint ton compte. M&ecirc;me sans restriction, 200 messages identiques g&eacute;n&egrave;rent 4 r&eacute;ponses. 50 messages personnalis&eacute;s en g&eacute;n&egrave;rent 12. Le calcul est vite fait.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Demander un call dans le premier message</p>
                  <p className="text-sm">Tu ne demanderais pas un rendez-vous &agrave; quelqu&apos;un que tu croises pour la premi&egrave;re fois dans la rue. Sur LinkedIn, c&apos;est pareil. Le premier message ouvre la conversation. Le call vient apr&egrave;s que le prospect a montr&eacute; un int&eacute;r&ecirc;t. Pas avant.</p>
                </div>
              </div>
            </section>

            <CtaArticle variant="methode" />

            {/* Section 7 — Du message au RDV */}
            <section id="telephonique" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Du message au RDV : le r&ocirc;le du setting t&eacute;l&eacute;phonique
              </h2>
              <p className="mb-4">
                Tous tes prospects ne vont pas r&eacute;pondre &laquo;&nbsp;oui, prenons RDV&nbsp;&raquo; directement par message. Certains r&eacute;pondent &laquo;&nbsp;&ccedil;a m&apos;int&eacute;resse mais pas maintenant&nbsp;&raquo;. D&apos;autres posent des questions sans s&apos;engager. D&apos;autres encore lisent sans r&eacute;pondre mais reviennent visiter ton profil deux semaines plus tard.
              </p>
              <p className="mb-4">
                C&apos;est l&agrave; que le setting t&eacute;l&eacute;phonique prend le relais. Un appel de 5 &agrave; 10 minutes suffit pour qualifier le lead, comprendre son contexte et le router vers le bon parcours.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le routing apr&egrave;s qualification</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-accent font-semibold">Lead chaud</span> : besoin confirm&eacute;, budget identifi&eacute;, timing ok &rarr; RDV avec le closeur sous 48h</li>
                  <li><span className="text-[#FBBF24] font-semibold">Lead ti&egrave;de</span> : int&eacute;r&ecirc;t r&eacute;el mais timing d&eacute;cal&eacute; &rarr; rappel programm&eacute; &agrave; la date indiqu&eacute;e</li>
                  <li><span className="text-text-muted font-semibold">Lead froid</span> : curiosit&eacute; sans besoin concret &rarr; inscription newsletter et nurturing contenu</li>
                </ul>
              </div>
              <p className="mb-4">
                Sans cette &eacute;tape de qualification vocale, tu perds les leads ti&egrave;des. Ils ne sont pas assez chauds pour booker un RDV par message, mais ils ont un besoin latent qui peut se concr&eacute;tiser dans 1 &agrave; 3 mois. Le setting t&eacute;l&eacute;phonique permet de les capter &agrave; temps.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Quand mettre en place le setting t&eacute;l&eacute;phonique</h3>
              <p className="mb-4">
                D&egrave;s que tu g&eacute;n&egrave;res plus de 10 r&eacute;ponses positives par semaine sur LinkedIn. En dessous, tu peux g&eacute;rer la qualification toi-m&ecirc;me. Au-dessus, tu perds du temps &agrave; appeler des leads que tu pourrais qualifier en 5 minutes avec un setter d&eacute;di&eacute;.
              </p>
              <p className="mb-4">
                Chez <a href="https://www.setting.live" className="text-accent hover:underline">Setting</a>, le service de setting t&eacute;l&eacute;phonique est factur&eacute; 175&nbsp;&euro;/demi-journ&eacute;e, au r&eacute;el. Pas de setup fees, pas d&apos;engagement mensuel. C&apos;est le compl&eacute;ment naturel de la prospection LinkedIn : tes messages g&eacute;n&egrave;rent les conversations, le setter qualifie et route.
              </p>
              <p>
                Le sch&eacute;ma complet : message LinkedIn &rarr; r&eacute;ponse positive &rarr; appel de qualification &rarr; routing (chaud / ti&egrave;de / froid) &rarr; RDV ou nurturing. Sauter la qualification par t&eacute;l&eacute;phone revient &agrave; envoyer des leads non qualifi&eacute;s &agrave; ton closeur, ce qui fait baisser ton taux de closing.
              </p>
              <p className="text-sm text-text-muted italic mt-2">
                Pour aller plus loin : <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">Setting LinkedIn : d&eacute;finition et m&eacute;thode</a>
              </p>
            </section>

            <CtaArticle />

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="border-b border-white/[0.06] pb-6">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">
                      {item.question}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Related Articles */}
          <RelatedArticles
            articles={[
              { href: '/ressources/prospection-linkedin-b2b', title: 'Scripts de setting LinkedIn B2B', readTime: '11 min' },
              { href: '/ressources/prospection-linkedin-b2b', title: 'Relance LinkedIn B2B : m\u00e9thode et exemples', readTime: '9 min' },
              { href: '/ressources/prospection-linkedin-b2b', title: "Pourquoi tes messages LinkedIn n'obtiennent pas de r\u00e9ponse", readTime: '8 min' },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
