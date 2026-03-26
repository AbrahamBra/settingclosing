import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Devenir setter ou closer B2B en 2026 | Formation, prix, guide | Setting",
  description: "Comment devenir setter ou closer B2B en 2026. Formation, comp\u00e9tences r\u00e9elles, prix du march\u00e9, outils et crit\u00e8res pour choisir un setter. Guide terrain complet.",
  openGraph: {
    title: "Devenir setter ou closer B2B en 2026 | Formation, prix, guide | Setting",
    description: "Comment devenir setter ou closer B2B en 2026. Formation, comp\u00e9tences r\u00e9elles, prix du march\u00e9, outils et crit\u00e8res pour choisir un setter. Guide terrain complet.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
      'x-default': 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
  headline: 'Devenir setter ou closer B2B en 2026 : le guide complet',
  description:
    'Comment devenir setter ou closer B2B en 2026. Formation, comp\u00e9tences r\u00e9elles, prix du march\u00e9, outils et crit\u00e8res pour choisir un setter. Guide terrain complet.',
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
  datePublished: '2026-03-26',
  dateModified: '2026-03-26',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
  },
  image: 'https://www.setting.live/ressources/comment-devenir-setter-b2b/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'article > p:first-of-type', '.faq-answer'],
  },
  articleSection: 'M\u00e9tiers B2B',
  wordCount: 5000,
  about: [
    { '@type': 'Thing', name: 'Devenir setter B2B' },
    { '@type': 'Thing', name: 'Devenir closer B2B' },
    { '@type': 'Thing', name: 'Formation closer' },
    { '@type': 'Thing', name: 'Carri\u00e8re commerciale B2B' },
  ],
}

const faqItems = [
  {
    question: "Quelle formation pour devenir closer B2B en 2026 ?",
    answer:
      "Pas de dipl\u00f4me reconnu. Ce qui forme un closer, c\u2019est la pratique terrain : conduire de vrais appels de d\u00e9couverte, g\u00e9rer des objections r\u00e9elles, r\u00e9\u00e9couter ses enregistrements et comprendre o\u00f9 \u00e7a a d\u00e9raill\u00e9. Les formations \u00e0 2 000\u20134 000 \u20ac qui se limitent \u00e0 des slides ne remplacent pas \u00e7a. Cherchez un programme qui vous met face \u00e0 des vrais prospects d\u00e8s la premi\u00e8re semaine.",
  },
  {
    question: "Peut-on devenir closer sans exp\u00e9rience commerciale ?",
    answer:
      "Oui. Le chemin le plus court passe par le setting d\u2019abord. Qualifier des prospects, comprendre les signaux d\u2019achat, ma\u00eetriser la conversation \u00e9crite : c\u2019est une base concr\u00e8te avant de passer aux appels. Des profils issus du marketing, de la r\u00e9daction ou du consulting s\u2019adaptent bien au closing une fois qu\u2019ils ont compris comment fonctionne un pipeline.",
  },
  {
    question: "Faut-il avoir de l\u2019exp\u00e9rience en vente pour devenir setter ?",
    answer:
      "Non. Le setting ne demande pas de conna\u00eetre les techniques de closing \u2014 il demande de savoir lire un profil, \u00e9crire court et ne pas l\u00e2cher au troisi\u00e8me message. Des profils sans background commercial s\u2019adaptent vite si la m\u00e9thode est solide.",
  },
  {
    question: "Combien de temps pour \u00eatre op\u00e9rationnel ?",
    answer:
      "Comptez 4 \u00e0 8 semaines pour un setter comp\u00e9tent sur votre secteur. Les 2 premi\u00e8res semaines servent \u00e0 calibrer les crit\u00e8res, les 2 suivantes \u00e0 tester les messages, les 4 suivantes \u00e0 affiner les relances. Les premiers RDV arrivent g\u00e9n\u00e9ralement d\u00e8s la semaine 1 ou 2. Pour un closer, comptez 2 \u00e0 3 mois de pratique r\u00e9guli\u00e8re avant de ma\u00eetriser la structure d\u2019appel.",
  },
  {
    question: "Quelle est la diff\u00e9rence entre setter, closer et SDR ?",
    answer:
      "Le setter prospecte sur LinkedIn avant l\u2019appel. Le closer prend le rendez-vous et signe le client pendant l\u2019appel. Le SDR est un r\u00f4le interne, souvent avec des quotas d\u2019appels et d\u2019emails froids. Setter et closer forment un binome dans un pipeline B2B. Le SDR, lui, travaille en volume au sein d\u2019une \u00e9quipe structur\u00e9e.",
  },
  {
    question: "Combien co\u00fbte un setter B2B en moyenne ?",
    answer:
      "Trois mod\u00e8les. Fixe seul : 800\u20131 500 \u20ac/mois, mais aucune incitation \u00e0 performer. Prime seule : 50\u2013200 \u20ac par RDV, mais le setter pousse au volume. Hybride (c\u2019est ce qu\u2019on recommande) : fixe bas (790 \u20ac) + prime par RDV qualifi\u00e9 (50\u2013250 \u20ac). Ajoutez les outils (180\u2013300 \u20ac/mois) et le co\u00fbt r\u00e9el va de 790 \u00e0 3 180 \u20ac/mois.",
  },
  {
    question: "Le setting LinkedIn est-il rentable pour un solopreneur ?",
    answer:
      "Oui, \u00e0 condition que votre panier moyen d\u00e9passe 2 000 \u20ac et que vous soyez capable de closer au moins 1 appel sur 4. Un solopreneur qui vend du conseil \u00e0 3 000 \u20ac ou plus par mission a un ROI positif d\u00e8s le deuxi\u00e8me mois. En dessous de 1 500 \u20ac de panier moyen, le setting co\u00fbte plus qu\u2019il ne rapporte.",
  },
  {
    question: "\u00c0 partir de quel panier moyen le setting vaut-il le coup ?",
    answer:
      "Le seuil de rentabilit\u00e9 se situe autour de 2 000 \u20ac de panier moyen. En dessous, le co\u00fbt par RDV qualifi\u00e9 (entre 120 et 250 \u20ac selon le mod\u00e8le) mange trop de marge. Au-dessus de 5 000 \u20ac, le setting est presque toujours rentable d\u00e8s le premier mois.",
  },
  {
    question: "Qu\u2019est-ce qu\u2019une garantie de RDV concr\u00e8tement ?",
    answer:
      "Une garantie sur le nombre de RDV livr\u00e9s signifie que si le setter ne livre pas le minimum convenu sur un mois, le surplus est d\u00e9duit de la prochaine facture ou rembours\u00e9. Chez Setting, la garantie est de 5 RDV qualifi\u00e9s minimum par mois. Si ce seuil n\u2019est pas atteint, on ne facture pas la diff\u00e9rence.",
  },
  {
    question: "Freelance, agence ou interne : quelle option ?",
    answer:
      "Freelance : 500\u2013900 \u20ac/mois, mais c\u2019est \u00e0 vous de fournir les outils et de piloter le programme. Agence (comme Setting) : 790\u20131 500 \u20ac/mois, m\u00e9thode et outils inclus, d\u00e9marrage en 2 semaines. Interne : 2 500\u20134 000 \u20ac/mois, ne vaut le coup que si vous avez un volume de leads r\u00e9current sur 6 mois. Si vous \u00eates fondateur B2B et que vous voulez des r\u00e9sultats sans devenir chef de projet prospection, l\u2019agence est le chemin le plus court.",
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
      name: 'Devenir setter ou closer B2B',
      item: 'https://www.setting.live/ressources/comment-devenir-setter-b2b',
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment devenir setter B2B en 2026',
  description:
    'Les étapes pour devenir setter B2B : comprendre le métier, développer les compétences clés (lecture de profil, écriture concise, discipline de relance), se former sur le terrain, maîtriser les outils et choisir le bon cadre (freelance, agence ou interne).',
  totalTime: 'P2M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Comprendre le métier de setter au quotidien',
      text: 'Apprenez ce que fait réellement un setter : analyser les signaux inbound, lire les profils LinkedIn rapidement, rédiger des messages personnalisés (5 phrases max), gérer les réponses et qualifier les prospects. Le setter ne pitche pas et ne close pas.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Développer les 3 compétences clés',
      text: 'Travaillez les compétences fondamentales : lire un profil en 2 minutes pour extraire un angle de conversation, écrire court et précis (5 phrases maximum), et ne pas abandonner au 3e message — la discipline de relance est la compétence la plus sous-estimée.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Se former sur le terrain, pas en théorie',
      text: 'Envoyez de vrais messages sur de vrais profils dès la première semaine. Tenez un journal de bord quotidien de ce qui fonctionne et ce qui échoue. Recevez du feedback sur chaque message. Les formations vidéo sans pratique ne forment pas un setter.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Maîtriser les outils de prospection',
      text: 'Apprenez à utiliser Sales Navigator pour le ciblage, Reactin pour les signaux inbound, Spyer pour la surveillance des comptes tiers, un CRM dédié pour le suivi des conversations, et l\'IA comme co-rédacteur de messages.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Choisir le bon cadre : freelance, agence ou interne',
      text: 'Évaluez les trois options selon votre situation. Freelance (500-900 euros/mois) pour démarrer léger, agence (790-1 500 euros/mois) pour une méthode et des outils inclus, ou interne (2 500-4 000 euros/mois) si le volume de leads est récurrent sur 6 mois minimum.',
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
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema, howToSchema]),
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
              <li className="text-text-primary">Devenir setter ou closer B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting &middot; Guide complet
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Devenir setter ou closer B2B en 2026 : le guide complet
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Ce que personne ne vous dit dans les formations &agrave; 3 000 &euro;.
              Le m&eacute;tier tel qu&apos;il est vraiment, combien &ccedil;a co&ucirc;te, et comment ne pas se planter en recrutant.
            </p>
            <AuthorBlock date="2026-03-26" readTime="20 min de lecture" dateLabel="26 mars 2026" />
          </header>

          {/* Bloc D&eacute;finition */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              <strong><a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">Setter</a></strong> = prospection avant l&apos;appel.
              Il identifie les prospects sur LinkedIn, les contacte et d&eacute;croche des rendez-vous qualifi&eacute;s.{' '}
              <strong><a href="/ressources/closer-b2b" className="text-accent hover:underline transition-colors">Closer</a></strong> = conversion pendant l&apos;appel.
              Il prend le RDV, conduit la <a href="/ressources/discovery-call-b2b" className="text-accent hover:underline transition-colors">d&eacute;couverte</a>, g&egrave;re les objections et signe.
              Deux r&ocirc;les compl&eacute;mentaires dans un pipeline B2B.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '10\u201325 %', label: 'taux de r\u00e9ponse sur signal' },
              { stat: '2\u20134', label: 'RDV/semaine livr\u00e9s par setter' },
              { stat: '2 mois', label: 'pour calibrer un syst\u00e8me' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* ─── Section 1 : Quotidien du setter ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que fait vraiment un setter au quotidien
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La r&eacute;alit&eacute; du m&eacute;tier est moins glamour que ce que les posts LinkedIn veulent bien montrer.
              Un setter passe la majorit&eacute; de son temps dans un CRM, dans Sales Navigator et dans sa bo&icirc;te
              de messages. Pas en train de &ldquo;closer des deals &agrave; distance&rdquo;.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Concr&egrave;tement, voici ce que ressemble une journ&eacute;e active. Le matin : v&eacute;rifier les signaux
              inbound de la veille. Qui a r&eacute;agi &agrave; un post li&eacute; au secteur du client ? Qui correspond &agrave; l&apos;ICP ?
              Chaque profil est ouvert, les derniers posts lus, une d&eacute;cision prise : contacter, attendre,
              ou passer. Sur 30 signaux analys&eacute;s, 8 &agrave; 12 m&eacute;ritent un message.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ensuite : r&eacute;diger. Un message par profil. Cinq phrases maximum. La deuxi&egrave;me phrase ancre
              toujours un fait pr&eacute;cis tir&eacute; du profil ou du signal. Aucun pitch. Aucune liste de b&eacute;n&eacute;fices.
              Le message a un seul objectif : cr&eacute;er une ouverture pour une conversation.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;apr&egrave;s-midi, c&apos;est la gestion des r&eacute;ponses. Qualifier ce qui rentre.
              Planifier les relances. Mettre &agrave; jour le journal de bord avec ce qui a fonctionn&eacute;,
              ce qui a rat&eacute;, les objections nouvelles. Ce journal, c&apos;est la m&eacute;moire du syst&egrave;me.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le setter n&apos;est pas le closeur. Il n&apos;est pas l&agrave; pour pitcher l&apos;offre dans le premier DM,
              n&eacute;gocier le prix ou g&eacute;rer les <a href="/ressources/gestion-objections-b2b" className="text-accent hover:underline transition-colors">objections</a> post-appel.
              Ces r&ocirc;les demandent des comp&eacute;tences diff&eacute;rentes. Un bon setter qui essaie de closer br&ucirc;le des leads.
              Un bon closeur qui fait son propre <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> perd un temps qu&apos;il devrait passer &agrave; convertir.
            </p>
          </section>

          {/* ─── Section 2 : Devenir closer B2B ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Devenir closer B2B : un m&eacute;tier compl&eacute;mentaire
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le setter d&eacute;croche le rendez-vous. Le <a href="/ressources/closer-b2b" className="text-accent hover:underline transition-colors">closer B2B</a>, lui,
              prend ce rendez-vous et le transforme en client sign&eacute;.
              Concr&egrave;tement, le closer conduit la <a href="/ressources/discovery-call-b2b" className="text-accent hover:underline transition-colors">discovery call</a>,
              pose les bonnes questions pour comprendre le vrai besoin, g&egrave;re
              les <a href="/ressources/gestion-objections-b2b" className="text-accent hover:underline transition-colors">objections</a> en direct
              et am&egrave;ne le prospect &agrave; d&eacute;cider.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le m&eacute;tier demande des qualit&eacute;s diff&eacute;rentes du setting : &eacute;coute active,
              structuration d&apos;appel, capacit&eacute; &agrave; reformuler le besoin
              mieux que le prospect lui-m&ecirc;me. Un bon closer ne &ldquo;force&rdquo; rien. Il am&egrave;ne le prospect
              &agrave; une d&eacute;cision qu&apos;il &eacute;tait d&eacute;j&agrave; pr&ecirc;t &agrave; prendre.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">closing B2B</a> n&apos;a rien &agrave; voir avec les techniques de pression
              que vendent certaines formations. En B2B, le cycle de d&eacute;cision est plus long, les enjeux plus &eacute;lev&eacute;s,
              et un closer qui pousse trop fort perd la confiance du prospect. La confiance, c&apos;est le seul levier qui tient.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Si vous voulez devenir closer, commencez par le setting.
              Comprendre la prospection, le ciblage et la qualification change la donne
              quand on passe de l&apos;autre c&ocirc;t&eacute; du t&eacute;l&eacute;phone. Les closers qui connaissent le pipeline depuis l&apos;amont
              savent exactement ce que le prospect a d&eacute;j&agrave; vu, lu et dit avant l&apos;appel.
            </p>
          </section>

          {/* ─── Section 3 : Comp&eacute;tences ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les comp&eacute;tences qui comptent pour devenir setter ou closer
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Pas le charisme. Pas la &ldquo;fibre commerciale&rdquo;. Le <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> et
              le closing demandent trois choses pr&eacute;cises, et elles s&apos;apprennent toutes sur le terrain.
            </p>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comp&eacute;tences setter
            </p>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                  1
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    Lire un profil vite, et bien
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Un setter qui prend 10 minutes par profil ne scale pas. Il faut apprendre &agrave; extraire
                    l&apos;information utile en 2 minutes : titre actuel, anciennet&eacute;, posts r&eacute;cents, interactions
                    sur des sujets proches de l&apos;offre. La seule question qui compte :
                    &ldquo;est-ce que j&apos;ai un angle pr&eacute;cis
                    pour amorcer une conversation ?&rdquo; Si non, on passe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                  2
                </div>
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    &Eacute;crire court et pr&eacute;cis
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    La majorit&eacute; des messages de prospection LinkedIn &eacute;chouent parce qu&apos;ils sont trop longs
                    ou trop g&eacute;n&eacute;riques. Cinq phrases, c&apos;est la r&egrave;gle. La premi&egrave;re phrase montre qu&apos;on a
                    regard&eacute; le profil. La deuxi&egrave;me ancre un signal pr&eacute;cis. Les trois suivantes cr&eacute;ent
                    l&apos;ouverture sans pitcher. &Eacute;crire court est plus difficile qu&apos;&eacute;crire long. &Ccedil;a s&apos;apprend
                    par la pratique et par l&apos;analyse des r&eacute;ponses.
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
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    C&apos;est la comp&eacute;tence la plus sous-estim&eacute;e. La discipline. Un prospect qui ne r&eacute;pond pas
                    apr&egrave;s 2 messages n&apos;est pas forc&eacute;ment d&eacute;sint&eacute;ress&eacute;. Il est peut-&ecirc;tre occup&eacute;, il n&apos;a pas
                    vu le message, ou le timing &eacute;tait mauvais. Les setters qui tiennent 5 &agrave; 6 points de contact
                    sur plusieurs semaines d&eacute;crocheront des RDV que les autres ont d&eacute;j&agrave; abandonn&eacute;s.
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comp&eacute;tences closer
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  name: '\u00c9coute active',
                  desc: "Laisser le prospect parler, reformuler ce qu\u2019il dit avec pr\u00e9cision, d\u00e9tecter ce qu\u2019il ne dit pas. Le closer qui parle plus que le prospect rate l\u2019essentiel.",
                },
                {
                  name: 'Gestion des objections',
                  desc: "Pas les contourner \u2014 les comprendre. Chaque objection est un signal sur ce qui bloque la d\u00e9cision. Guide complet dans notre article sur la gestion des objections B2B.",
                },
                {
                  name: "Structuration de l\u2019appel",
                  desc: "Un appel de closing suit un cadre : contexte, d\u00e9couverte, r\u00e9cap, proposition, d\u00e9cision. Sans structure, l\u2019appel d\u00e9rive et le prospect repart sans d\u00e9cider.",
                },
              ].map(({ name, desc }) => (
                <div key={name} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold font-sans">&rarr;</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{name}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Ces comp&eacute;tences n&apos;ont rien &agrave; voir avec le fait d&apos;&ecirc;tre &ldquo;commercial dans l&apos;&acirc;me&rdquo;.
              Des profils issus de la r&eacute;daction, du marketing ou m&ecirc;me de m&eacute;tiers techniques s&apos;y adaptent
              souvent mieux que d&apos;anciens vendeurs habitu&eacute;s &agrave; pitcher fort.
            </p>
          </section>

          {/* ─── Section 4 : Se former ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Se former au setting et au closing B2B
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Il y a beaucoup de formations &ldquo;setting&rdquo; et &ldquo;<a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">closing</a>&rdquo; sur le march&eacute;.
              Certaines &agrave; 2 000 &euro;, d&apos;autres &agrave; 4 000 &euro;, beaucoup sans terrain r&eacute;el. Le probl&egrave;me
              n&apos;est pas le prix. Le probl&egrave;me, c&apos;est le format.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Regarder des vid&eacute;os sur des techniques de prospection et envoyer des messages sur de vrais profils,
              c&apos;est deux choses compl&egrave;tement diff&eacute;rentes. Le setting se calibre dans le r&eacute;el. Le closing aussi.
              Ce qui vous forme vraiment, c&apos;est de pratiquer sur des vrais appels, d&apos;analyser les r&eacute;ponses
              (et les non-r&eacute;ponses), et de noter ce qui a fonctionn&eacute;. Sans terrain, vous apprenez la th&eacute;orie
              d&apos;un m&eacute;tier que vous ne pratiquez pas.
            </p>

            <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Ce qui forme vraiment
              </p>
              <div className="space-y-3">
                {[
                  "Envoyer de vrais messages sur de vrais profils \u2014 pas des exercices fictifs",
                  "Tenir un journal de bord quotidien : ce qui a obtenu une r\u00e9ponse, ce qui a \u00e9chou\u00e9, pourquoi",
                  "It\u00e9rer sur les relances avec des vrais prospects, pas des mises en situation",
                  "Recevoir du feedback sur chaque message ou chaque appel, pas seulement sur les r\u00e9sultats globaux",
                  "Comprendre pourquoi un prospect a r\u00e9pondu ou sign\u00e9 \u2014 et reproduire la logique",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le programme Setting est construit sur ce principe. Les setters qui rejoignent
              le programme travaillent sur des profils r&eacute;els d&egrave;s la premi&egrave;re semaine, dans le secteur
              du client. Pas de simulation. Pas de slides sur &ldquo;les 7 &eacute;tapes du closing&rdquo;.
              Un onboarding en 3 phases, un journal de bord structur&eacute; et un feedback sur chaque campagne active.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Pour le closing, la logique est la m&ecirc;me : les meilleures &ldquo;formations closer&rdquo; ne sont pas
              des cours th&eacute;oriques. Ce sont des programmes o&ugrave; vous conduisez de vrais appels,
              o&ugrave; vos enregistrements sont analys&eacute;s, et o&ugrave; vous recevez un retour actionnable.
              Le guide complet du <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">closing B2B</a> d&eacute;taille
              la m&eacute;thode et les &eacute;tapes.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              La diff&eacute;rence entre un setter qui d&eacute;colle en 6 semaines et un qui gal&egrave;re pendant 6 mois
              n&apos;est pas l&apos;intelligence ni la motivation. C&apos;est la structure de feedback.
              Sans quelqu&apos;un pour lire vos messages et vous dire ce qui ne va pas, vous r&eacute;p&eacute;tez
              les m&ecirc;mes erreurs sans le savoir.
            </p>
          </section>

          <CtaArticle />

          {/* ─── Section 5 : Outils ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les outils du setter LinkedIn en 2026
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Chaque outil a une raison d&apos;&ecirc;tre pr&eacute;cise dans le syst&egrave;me. Pas de gadgets.
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'LinkedIn Sales Navigator',
                  desc: "Filtres par poste, secteur, taille d\u2019entreprise, changements de poste r\u00e9cents. C\u2019est avec \u00e7a qu\u2019on construit des listes outbound qui tiennent la route. Sans lui, le sourcing est manuel et incomplet. ~100 \u20ac/mois.",
                },
                {
                  name: 'Reactin',
                  desc: "Capture les likes, commentaires et partages sur vos posts LinkedIn. Vous voyez qui a r\u00e9agi \u00e0 quoi, et vous contactez ceux dont le profil colle \u00e0 votre ICP. C\u2019est la premi\u00e8re source de signaux inbound. ~50 \u20ac/mois.",
                },
                {
                  name: 'Spyer',
                  desc: "Surveille les comptes concurrents dont l\u2019audience ressemble \u00e0 votre ICP. Quand un prospect interagit avec ces comptes, il remonte dans votre flux. Surtout utile quand votre propre contenu ne g\u00e9n\u00e8re pas encore assez de signaux. ~30\u201380 \u20ac/mois.",
                },
                {
                  name: 'BreakCold',
                  desc: "CRM con\u00e7u pour la prospection LinkedIn. Permet de suivre chaque conversation, planifier les relances, taguer les prospects selon leur niveau de maturit\u00e9 et \u00e9viter les doublons. Un Google Sheets peut suffire pour d\u00e9marrer, mais BreakCold structure mieux le flux d\u00e8s que le volume monte.",
                },
                {
                  name: 'Claude / GPT avec contexte',
                  desc: "Pas pour g\u00e9n\u00e9rer des messages en masse. Le setter fournit le profil, le signal, les r\u00e8gles. L\u2019IA propose un draft. L\u2019humain relit, ajuste, valide. La r\u00e9daction va 3x plus vite, et aucun message ne part sans qu\u2019un humain l\u2019ait lu \u00e0 voix haute.",
                },
              ].map(({ name, desc }) => (
                <div key={name} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-0.5 font-semibold font-sans">&rarr;</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{name}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary text-sm mt-6 leading-relaxed">
              D&eacute;tail complet dans notre article sur
              les <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline transition-colors">outils et le comparatif setting humain vs automatisation</a>.
            </p>
          </section>

          {/* ─── Section 6 : Co&ucirc;t d&apos;un setter ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Combien co&ucirc;te un setter B2B : les vrais chiffres
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Trois mod&egrave;les de r&eacute;mun&eacute;ration existent. Ils ne produisent pas les m&ecirc;mes comportements
              chez le setter, et donc pas les m&ecirc;mes r&eacute;sultats pour vous.
            </p>

            {/* Les 3 mod&egrave;les */}
            <div className="space-y-5 mb-8">
              <div className="rounded-xl p-5 border border-white/[0.06] bg-bg-secondary">
                <p className="font-sans font-semibold text-text-primary mb-1">Fixe mensuel uniquement</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">800 &ndash; 1 500 &euro; / mois</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Simple et pr&eacute;visible. Mais le setter est pay&eacute; que les RDV arrivent ou non.
                  Sans incentive sur les r&eacute;sultats, le risque de d&eacute;crochage progressif est r&eacute;el.
                  Ce mod&egrave;le fonctionne si le setter est motiv&eacute; par autre chose que la r&eacute;mun&eacute;ration variable.
                </p>
              </div>

              <div className="rounded-xl p-5 border border-white/[0.06] bg-bg-secondary">
                <p className="font-sans font-semibold text-text-primary mb-1">Prime &agrave; la performance uniquement</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">50 &ndash; 200 &euro; / RDV</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  En surface, le setter est motiv&eacute; par les r&eacute;sultats. Probl&egrave;me : sans fixe, il priorise
                  la quantit&eacute; sur la qualit&eacute;. Des RDV mal qualifi&eacute;s passent parce qu&apos;ils
                  font monter le compteur. R&eacute;sultat : l&apos;agenda se remplit de calls qui ne convertissent pas.
                </p>
              </div>

              <div className="rounded-xl p-5 border border-accent/30 bg-accent/5">
                <p className="font-sans font-semibold text-text-primary mb-1">Hybride : fixe bas + prime par RDV</p>
                <p className="font-sans text-accent text-sm font-semibold mb-2">Recommand&eacute;</p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le fixe couvre l&apos;infrastructure et le travail de fond. La prime pousse le setter &agrave; livrer
                  des RDV qui convertissent vraiment. C&apos;est le mod&egrave;le Setting : 790 &euro;/mois de fixe
                  + 50 &agrave; 250 &euro;/RDV livr&eacute; selon le ticket moyen du client.
                  Le setter gagne quand vous gagnez.{' '}
                  <a href="/tarifs" className="text-accent hover:underline transition-colors">Voir les tarifs d&eacute;taill&eacute;s.</a>
                </p>
              </div>
            </div>

            {/* Tableau r&eacute;capitulatif des co&ucirc;ts */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              D&eacute;composition du co&ucirc;t r&eacute;el
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse font-sans">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left font-semibold text-text-primary py-3 pr-4">Poste de co&ucirc;t</th>
                    <th className="text-left font-semibold text-text-primary py-3 pr-4">Fourchette mensuelle</th>
                    <th className="text-left font-semibold text-text-primary py-3">D&eacute;tail</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4 font-semibold text-text-primary">R&eacute;mun&eacute;ration setter</td>
                    <td className="py-3 pr-4">500&ndash;2 500 &euro;</td>
                    <td className="py-3">Fixe, prime par RDV ou hybride selon le mod&egrave;le</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4 font-semibold text-text-primary">Outils de prospection</td>
                    <td className="py-3 pr-4">180&ndash;300 &euro;</td>
                    <td className="py-3">Sales Navigator, Reactin, Spyer</td>
                  </tr>
                  <tr className="border-b border-white/[0.06]">
                    <td className="py-3 pr-4 font-semibold text-text-primary">Assistance IA</td>
                    <td className="py-3 pr-4">0&ndash;80 &euro;</td>
                    <td className="py-3">Skill IA pour drafts et scoring. Inclus chez certaines agences.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-text-primary">Management et suivi</td>
                    <td className="py-3 pr-4">0&ndash;300 &euro;</td>
                    <td className="py-3">Calibration, reporting, ajustements ICP. Inclus en agence.</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t border-accent/30">
                    <td className="py-3 pr-4 font-semibold text-accent">Total r&eacute;el</td>
                    <td className="py-3 pr-4 font-semibold text-accent">680&ndash;3 180 &euro;/mois</td>
                    <td className="py-3 text-text-secondary">Selon le mod&egrave;le et le niveau d&apos;accompagnement</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Ce qui justifie le prix */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Ce qui justifie le prix
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Les outils",
                  desc: "Sales Navigator, Reactin, Spyer \u2014 200 \u00e0 300 \u20ac/mois d\u2019infrastructure avant m\u00eame de payer le setter. Ces outils ne sont pas optionnels : sans eux, la d\u00e9tection de signaux est manuelle et incompl\u00e8te.",
                },
                {
                  title: "La calibration",
                  desc: "Les deux premiers mois servent \u00e0 affiner l\u2019ICP, tester les angles de message, identifier les signaux qui g\u00e9n\u00e8rent vraiment des r\u00e9ponses. Ce temps est incompressible. Un setter qui d\u00e9marre sans cette phase livre du volume sans pertinence.",
                },
                {
                  title: "Le journal de bord",
                  desc: "Un setter structur\u00e9 documente tout : messages, r\u00e9ponses, objections, angles qui ont fonctionn\u00e9. Ce journal alimente la base de connaissance qui am\u00e9liore les drafts IA au fil du temps. Sans cette documentation, chaque semaine repart de z\u00e9ro.",
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

            {/* Co&ucirc;ts cach&eacute;s */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Les co&ucirc;ts cach&eacute;s d&apos;un programme mal ex&eacute;cut&eacute;
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "RDV mal qualifi\u00e9s",
                  desc: "Chaque appel avec un prospect hors ICP co\u00fbte 30 \u00e0 60 minutes. Sur un mois avec 8 RDV dont 5 mal qualifi\u00e9s, c\u2019est 3 \u00e0 5 heures perdues \u2014 plus la frustration et le signal n\u00e9gatif envoy\u00e9 au march\u00e9.",
                },
                {
                  title: "Leads br\u00fbl\u00e9s",
                  desc: "Un prospect contact\u00e9 avec un mauvais message se souvient de l\u2019approche. Sur LinkedIn, relancer un profil d\u00e9j\u00e0 br\u00fbl\u00e9 est tr\u00e8s difficile. Un setter qui masse des messages g\u00e9n\u00e9riques ferme d\u00e9finitivement des portes.",
                },
                {
                  title: "R\u00e9putation LinkedIn d\u00e9grad\u00e9e",
                  desc: "Des messages trop commerciaux ou mal cibl\u00e9s g\u00e9n\u00e8rent des signalements. Un compte signal\u00e9 perd en port\u00e9e organique \u2014 et la r\u00e9putation personnelle du fondateur en prend un coup.",
                },
                {
                  title: "Turnover setter",
                  desc: "Un setter qui part apr\u00e8s 3 mois emporte la connaissance accumul\u00e9e. Recrutement, onboarding, calibration : recommencer co\u00fbte 2 \u00e0 3 mois de retard et plusieurs milliers d\u2019euros.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <span className="text-red-400 shrink-0 mt-0.5 font-semibold text-sm">&times;</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Section 7 : Choisir son setter ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment choisir son setter : les crit&egrave;res qui comptent
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Avant de signer avec un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter B2B</a> ou une agence, v&eacute;rifiez ces 7 points.
              Ils s&eacute;parent un programme qui livre de celui qui br&ucirc;le vos leads.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  num: '1',
                  title: 'M\u00e9thode de qualification',
                  good: 'Syst\u00e8me de scoring explicite (fonction, taille, signal d\u2019achat, budget). Chaque lead a un score avant d\u2019\u00eatre contact\u00e9.',
                  bad: 'Pas de grille document\u00e9e. Le setter \u00ab\u00a0sent\u00a0\u00bb si un prospect est bon.',
                },
                {
                  num: '2',
                  title: 'Connaissance de votre march\u00e9',
                  good: 'Onboarding de 1\u20132 semaines : interview fondateur, \u00e9tude des clients, analyse concurrents.',
                  bad: 'D\u00e9marrage imm\u00e9diat sans poser de questions sur votre offre ou votre ICP.',
                },
                {
                  num: '3',
                  title: 'Outils utilis\u00e9s',
                  good: 'Sales Navigator, Reactin, Spyer, CRM d\u00e9di\u00e9. Le setter sait expliquer \u00e0 quoi sert chaque outil.',
                  bad: 'Recherche manuelle sur LinkedIn gratuit. Pas de d\u00e9tection de signaux.',
                },
                {
                  num: '4',
                  title: 'Mod\u00e8le de r\u00e9mun\u00e9ration',
                  good: 'Hybride fixe bas + prime par RDV qualifi\u00e9. Le setter gagne quand vous gagnez.',
                  bad: 'Fixe \u00e9lev\u00e9 sans engagement ou prime seule qui pousse au volume.',
                },
                {
                  num: '5',
                  title: 'Volume vs qualit\u00e9',
                  good: '20\u201350 profils/semaine, chacun avec un message adapt\u00e9. Taux de r\u00e9ponse 15\u201330 %.',
                  bad: '500 profils/semaine avec des messages identiques. Taux de r\u00e9ponse < 5 %.',
                },
                {
                  num: '6',
                  title: 'Reporting et journal de bord',
                  good: 'Journal document\u00e9 chaque semaine. Messages, taux de r\u00e9ponse, objections, ajustements.',
                  bad: 'Aucun reporting. Vous ne savez pas combien de messages sont envoy\u00e9s.',
                },
                {
                  num: '7',
                  title: 'Garantie sur les r\u00e9sultats',
                  good: 'Minimum garanti (ex : 5 RDV qualifi\u00e9s/mois). Pas de facturation si le seuil n\u2019est pas atteint.',
                  bad: 'Aucun engagement chiffr\u00e9. \u00ab\u00a0On va faire de notre mieux\u00a0\u00bb.',
                },
              ].map(({ num, title, good, bad }) => (
                <div key={num} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-3">
                    {num}. {title}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1">&check; Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{good}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1">&times; Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{bad}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Red flags */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
              Red flags &mdash; ne signez pas
            </p>
            <div className="space-y-3 mb-8">
              {[
                "Pas de m\u00e9thode document\u00e9e \u2014 le setter improvise",
                "Promesse de 50+ RDV par mois \u2014 c\u2019est de l\u2019automatisation d\u00e9guis\u00e9e",
                "Aucun outil professionnel \u2014 prospection \u00e0 l\u2019aveugle",
                "Pas de p\u00e9riode de calibration \u2014 le setter ne comprend pas le m\u00e9tier",
                "Refuse la transparence sur le process \u2014 pas de journal de bord partag\u00e9",
              ].map((flag, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-red-400 shrink-0 mt-0.5 font-semibold text-sm">&times;</span>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>

            {/* Tableau comparatif freelance/agence/interne */}
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Freelance, agence ou interne
            </p>
            <div className="overflow-x-auto">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary w-1/4" />
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Freelance</th>
                    <th className="text-left py-3 pr-6 font-semibold text-text-primary">Agence</th>
                    <th className="text-left py-3 font-semibold text-text-primary">Interne</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  {[
                    ['Co\u00fbt mensuel', '500\u2013900\u00a0\u20ac', '790\u20131\u00a0500\u00a0\u20ac', '2\u00a0500\u20134\u00a0000\u00a0\u20ac'],
                    ['D\u00e9marrage', '1\u20132 semaines', '2\u20133 semaines', '2\u20134 mois'],
                    ['M\u00e9thode fournie', 'Rarement', 'Oui', '\u00c0 construire'],
                    ['Outils inclus', 'Non', 'Souvent', '\u00c0 acheter'],
                    ['Continuit\u00e9', 'Fragile', 'Assur\u00e9e', 'D\u00e9pend du turnover'],
                    ['Calibration', 'Seul', 'Accompagn\u00e9e', 'Seul'],
                  ].map(([label, freelance, agence, interne], i) => (
                    <tr key={i} className="border-b border-white/[0.06]">
                      <td className="py-3 pr-6 font-medium text-text-primary">{label}</td>
                      <td className="py-3 pr-6">{freelance}</td>
                      <td className="py-3 pr-6">{agence}</td>
                      <td className="py-3">{interne}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-secondary text-sm mt-4 leading-relaxed">
              Pour aller plus loin : <a href="/ressources/sdr-interne-vs-externalise" className="text-accent hover:underline transition-colors">SDR interne vs externalis&eacute;</a>.
            </p>
          </section>

          {/* ─── Section 8 : ROI ─── */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Calculer le ROI d&apos;un programme de setting
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Avant de comparer les prix, calculez ce que chaque RDV vous rapporte concr&egrave;tement.
              Deux variables suffisent : votre panier moyen et votre taux de closing.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20 mb-6">
              <p className="font-sans text-text-primary text-sm font-semibold text-center leading-relaxed">
                ROI = (panier moyen &times; taux de closing &times; RDV par mois) &divide; co&ucirc;t programme
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Exemple de calcul
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Panier moyen de votre offre', value: '4 000 \u20ac' },
                  { label: 'Taux de closing sur un appel qualifi\u00e9', value: '30 % (1 sur 3)' },
                  { label: 'Valeur d\u2019un RDV qualifi\u00e9', value: '1 200 \u20ac' },
                  { label: 'Programme : 790 \u20ac + 150 \u20ac \u00d7 7 RDV/mois', value: '1 840 \u20ac/mois' },
                  { label: 'Valeur g\u00e9n\u00e9r\u00e9e (7 RDV \u00d7 1 200 \u20ac)', value: '8 400 \u20ac/mois' },
                  { label: 'ROI', value: '~4,6x', highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <p className="font-sans text-sm text-text-secondary leading-snug">{label}</p>
                    <p className={`font-sans text-sm font-semibold shrink-0 ${highlight ? 'text-accent' : 'text-text-primary'}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Si le r&eacute;sultat est inf&eacute;rieur &agrave; 3, le programme est mal calibr&eacute; ou votre taux de
              closing est &agrave; travailler en priorit&eacute;. Si le r&eacute;sultat est sup&eacute;rieur &agrave; 5, chaque
              euro investi dans le <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> rapporte cinq fois sa valeur.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                Seuils de rentabilit&eacute;
              </p>
              <div className="space-y-2">
                {[
                  { seuil: 'Panier moyen < 1 500 \u20ac', verdict: 'Le setting co\u00fbte plus qu\u2019il ne rapporte.' },
                  { seuil: 'Panier moyen 2 000\u20135 000 \u20ac', verdict: 'Rentable d\u00e8s le 2e mois si le closing est au-dessus de 25 %.' },
                  { seuil: 'Panier moyen > 5 000 \u20ac', verdict: 'Presque toujours rentable d\u00e8s le premier mois.' },
                ].map(({ seuil, verdict }) => (
                  <div key={seuil} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5">&rarr;</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">
                      <span className="font-semibold text-text-primary">{seuil}</span> &mdash; {verdict}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-sans text-text-secondary text-sm mt-4 leading-relaxed">
              Pour faire votre propre simulation, rendez-vous sur la page <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs</a>.
            </p>
          </section>

          {/* ─── Section 9 : FAQ ─── */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fr&eacute;quentes
            </h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map((item, i) => (
                <div key={i} className="py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    {item.question}
                  </p>
                  <p className="font-sans text-text-secondary leading-relaxed text-sm faq-answer">
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
                { href: '/ressources/closing-b2b', label: 'Closing B2B : le guide complet' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : le guide complet' },
                { href: '/ressources/setter-b2b-definition', label: "C\u2019est quoi un setter en B2B ?" },
                { href: '/ressources/sdr-interne-vs-externalise', label: 'SDR interne vs externalis\u00e9 : le comparatif' },
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
              Rejoindre le programme Setting
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Vous apprenez sur des profils r&eacute;els dans votre secteur, pas sur des slides.
              Programme structur&eacute; en 3 phases, accompagnement terrain, garantie 5 RDV qualifi&eacute;s par mois.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Rejoindre le programme &rarr;
            </ButtonGlow>
          </div>

          <RelatedArticles articles={[
            { href: '/ressources/closing-b2b', title: 'Closing B2B : le guide complet', readTime: '15 min' },
            { href: '/ressources/setter-b2b-definition', title: "C\u2019est quoi un setter en B2B ?", readTime: '8 min' },
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : d\u00e9finition, m\u00e9thode et programme complet', readTime: '25 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
