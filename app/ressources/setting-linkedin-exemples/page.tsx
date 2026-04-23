import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: 'Setting LinkedIn : 5 exemples concrets (messages + r\u00e9sultats) \u2014 2026 | Setting',
  description:
    '5 cas concrets de setting LinkedIn : signal d\u00e9tect\u00e9, message exact envoy\u00e9, pourquoi \u00e7a a march\u00e9, r\u00e9sultat chiffr\u00e9. Mod\u00e8les \u00e0 adapter.',
  openGraph: {
    title: 'Setting LinkedIn : 5 exemples concrets (messages + r\u00e9sultats) \u2014 2026 | Setting',
    description:
      '5 cas concrets de setting LinkedIn : signal d\u00e9tect\u00e9, message exact envoy\u00e9, pourquoi \u00e7a a march\u00e9, r\u00e9sultat chiffr\u00e9. Mod\u00e8les \u00e0 adapter.',
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn : 5 exemples concrets (messages + r\u00e9sultats) \u2014 2026 | Setting',
    description:
      '5 cas concrets de setting LinkedIn : signal d\u00e9tect\u00e9, message exact envoy\u00e9, pourquoi \u00e7a a march\u00e9, r\u00e9sultat chiffr\u00e9. Mod\u00e8les \u00e0 adapter.',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin-exemples',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin-exemples',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin-exemples',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin-exemples#article',
  headline: 'Setting LinkedIn : 5 exemples concrets pour inspirer tes messages (2026)',
  description:
    '5 cas concrets de setting LinkedIn : signal d\u00e9tect\u00e9, message exact envoy\u00e9, pourquoi \u00e7a a march\u00e9, r\u00e9sultat chiffr\u00e9. Mod\u00e8les \u00e0 adapter, pas templates \u00e0 copier.',
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
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-linkedin-exemples',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin-exemples',
  },
  image: 'https://www.setting.live/ressources/setting-linkedin-exemples/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Setting LinkedIn',
  wordCount: 2500,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const faqItems = [
  {
    question: 'Comment trouver des signaux inbound quand on publie peu ?',
    answer:
      "Sans publication r\u00e9guli\u00e8re, les signaux inbound sont rares. Trois pistes : rebondir sur les visites de profil (un outil comme Reactin ou Sales Navigator les remonte), utiliser les commentaires laiss\u00e9s par ta cible sur des posts d'autres cr\u00e9ateurs B2B du m\u00eame univers, et exploiter les acceptations de demandes de connexion comme signal d'ouverture. L'id\u00e9al reste de publier 2 posts par semaine pour g\u00e9n\u00e9rer un flux r\u00e9gulier.",
  },
  {
    question: 'Faut-il toujours r\u00e9pondre au signal le jour m\u00eame ?',
    answer:
      "Non. Sur un signal inbound fort (commentaire sur un post), r\u00e9pondre dans les 24 heures maximise le taux de r\u00e9ponse (32 % contre 18 % apr\u00e8s 72 h selon nos donn\u00e9es internes). Sur un signal outbound comme une prise de poste, attendre 2 \u00e0 3 semaines est souvent plus malin : la personne a eu le temps d'identifier ses chantiers et est plus r\u00e9ceptive. Le bon timing d\u00e9pend du signal, pas d'une r\u00e8gle g\u00e9n\u00e9rale.",
  },
  {
    question: 'Quelle longueur id\u00e9ale pour un premier message ?',
    answer:
      "Entre 280 et 400 caract\u00e8res pour un premier message. Au-del\u00e0, le taux de lecture chute. Plus court que 200 caract\u00e8res, \u00e7a fait automatis\u00e9. La structure qui marche : une phrase d'ancre sur le signal, une phrase qui prouve le contexte, une question ouverte. Trois phrases. Pas de pitch. Pas de lien.",
  },
  {
    question: "Combien de relances avant d'abandonner ?",
    answer:
      "Deux relances espac\u00e9es de 7 puis 14 jours. 80 % des r\u00e9ponses positives arrivent dans les deux premi\u00e8res relances. Au-del\u00e0 de 3 messages sans r\u00e9ponse, on passe \u00e0 un statut dormant : pas d'insistance, mais on remet le prospect dans le radar 3 mois plus tard si un nouveau signal appara\u00eet.",
  },
  {
    question: 'Peut-on utiliser ces exemples comme templates ?',
    answer:
      "Non. Ces 5 exemples sont des cadres, pas des scripts \u00e0 copier. Chaque message est ancr\u00e9 sur un fait pr\u00e9cis du prospect. Si tu copies la phrase exacte en rempla\u00e7ant juste le pr\u00e9nom, \u00e7a se voit et \u00e7a tue le taux de r\u00e9ponse. Utilise la structure (ancre \u2192 contexte \u2192 question ouverte), pas les mots.",
  },
  {
    question: 'Quel est le pire type de message en setting LinkedIn ?',
    answer:
      "Le message qui commence par un pitch. Exemple : \u00ab Bonjour, je suis fondateur de X et on aide les entreprises comme la v\u00f4tre \u00e0 g\u00e9n\u00e9rer plus de leads. \u00bb Ce format descend \u00e0 2 % de r\u00e9ponse. Le prospect d\u00e9tecte l'intention de vente en 3 secondes et archive. Un bon setting LinkedIn n'a jamais de pitch dans le premier message.",
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
      name: 'Setting LinkedIn exemples',
      item: 'https://www.setting.live/ressources/setting-linkedin-exemples',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInExemplesPage() {
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
              <li className="text-text-primary">Setting LinkedIn exemples</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Exemples concrets
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn : 5 exemples concrets pour inspirer tes messages
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6" data-speakable="true">
              Les templates g&eacute;n&eacute;riques ne marchent plus. Ce qui marche, c&apos;est un message
              ancr&eacute; sur un signal pr&eacute;cis, &eacute;crit pour une personne pr&eacute;cise,
              &agrave; un moment pr&eacute;cis. Voici 5 cas r&eacute;els tir&eacute;s de nos programmes :
              le signal d&eacute;tect&eacute;, le message exact envoy&eacute;, pourquoi &ccedil;a a
              march&eacute;, le r&eacute;sultat chiffr&eacute;. &Agrave; adapter, pas &agrave; copier.
            </p>
            <AuthorBlock date="2026-04-23" readTime="14 min de lecture" dateLabel="23 avril 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              Cinq sc&eacute;narios de <strong className="text-text-primary">setting LinkedIn</strong>
              {' '}qui ont g&eacute;n&eacute;r&eacute; un RDV qualifi&eacute; : r&eacute;action sur un post,
              prise de poste r&eacute;cente, visite de profil r&eacute;p&eacute;t&eacute;e, post viral
              du prospect, commentaire sur un post concurrent. Taux de r&eacute;ponse observ&eacute; :
              22 &agrave; 38&nbsp;%. Point commun : aucun pitch, une ancre factuelle, une question ouverte,
              moins de 400 caract&egrave;res. Chaque exemple d&eacute;taille le signal, le message mot
              pour mot, l&apos;analyse et le r&eacute;sultat chiffr&eacute;.
            </p>
          </TldrBox>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* ──────────────────────────────────────────────────── */}
            {/* Intro */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="intro" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi les templates ne marchent plus
              </h2>
              <p className="mb-4">
                Un d&eacute;cideur B2B re&ccedil;oit entre 15 et 40 DM LinkedIn par semaine. La
                plupart commencent pareil : &laquo;&nbsp;Bonjour [Pr&eacute;nom], j&apos;ai vu votre
                profil et je pense que ma solution pourrait vous int&eacute;resser.&nbsp;&raquo; Il
                les archive en trois secondes. Toi aussi, quand tu les re&ccedil;ois.
              </p>
              <p className="mb-4">
                Le setting LinkedIn prend le probl&egrave;me &agrave; l&apos;envers. On ne contacte
                pas une liste. On contacte une personne qui vient de faire quelque chose de pr&eacute;cis :
                r&eacute;agir &agrave; un post, changer de poste, visiter un profil, publier une prise
                de parole. Ce fait devient l&apos;ancre du message. Le message ne ressemble plus &agrave;
                un template, parce qu&apos;il ne peut pas &ecirc;tre envoy&eacute; &agrave; quelqu&apos;un
                d&apos;autre.
              </p>
              <p className="mb-4">
                Les 5 sc&eacute;narios qui suivent sont tir&eacute;s de campagnes r&eacute;elles
                men&eacute;es entre octobre 2025 et mars 2026. Noms anonymis&eacute;s, chiffres
                non arrang&eacute;s. Pour chacun, tu trouveras le contexte du prospect, le signal
                pr&eacute;cis qu&apos;on a capt&eacute;, le message envoy&eacute; mot pour mot,
                l&apos;analyse de ce qui a d&eacute;clench&eacute; la r&eacute;ponse, et le r&eacute;sultat
                chiffr&eacute;.
              </p>
              <p>
                Avant de rentrer dedans, un rappel : ces messages s&apos;appuient sur la m&eacute;thode
                d&eacute;taill&eacute;e dans notre{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">guide pilier du setting LinkedIn</a>.
                Si la m&eacute;canique de base (ICP, signal, ancre, question) n&apos;est pas claire,
                commence par l&agrave;.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Scenario 1 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scenario-1" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sc&eacute;nario 1 : r&eacute;action sur un de tes posts
              </h2>
              <p className="mb-6">
                Le signal inbound le plus puissant qu&apos;on peut recevoir. Un d&eacute;cideur
                s&apos;arr&ecirc;te sur ton contenu, prend 30 secondes pour commenter. Il a d&eacute;j&agrave;
                donn&eacute; son autorisation implicite &agrave; la conversation.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Contexte du prospect
                </p>
                <p className="text-sm leading-relaxed">
                  Th&eacute;o, DG d&apos;une PME industrielle fran&ccedil;aise, 85 salari&eacute;s,
                  secteur de la plasturgie, ticket annuel cible sup&eacute;rieur &agrave; 30&nbsp;k&euro;.
                  Pr&eacute;sent sur LinkedIn mais ne publie pas. Lit, commente rarement.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Signal d&eacute;tect&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Le 11 mars 2026 &agrave; 9h42, Th&eacute;o commente un post qu&apos;on a publi&eacute;
                  sur l&apos;int&eacute;gration de l&apos;IA dans les lignes de production. Son
                  commentaire, en une phrase&nbsp;: &laquo;&nbsp;On y pense depuis 6 mois, mais on
                  ne sait pas par o&ugrave; commencer.&nbsp;&raquo; 14 likes sur le commentaire,
                  dont 2 de ses concurrents directs.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Message envoy&eacute; (le 11 mars &agrave; 14h17)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Bonjour Th&eacute;o,</p>
                  <p className="mt-2">
                    Merci pour votre commentaire. &laquo;&nbsp;On ne sait pas par o&ugrave;
                    commencer&nbsp;&raquo; &mdash; c&apos;est exactement ce qu&apos;on entend chez
                    la plupart des dirigeants industriels qu&apos;on accompagne sur ce sujet.
                  </p>
                  <p className="mt-2">
                    Curiosit&eacute; : c&apos;est plut&ocirc;t le p&eacute;rim&egrave;tre qui vous
                    bloque, ou la question du retour sur investissement&nbsp;?
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Pourquoi &ccedil;a a march&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Le message reprend ses mots exacts (&laquo;&nbsp;on ne sait pas par o&ugrave;
                  commencer&nbsp;&raquo;). Impossible de confondre avec un template. La question
                  ferm&eacute;e &agrave; deux options lui donne un cadre pour r&eacute;pondre sans
                  r&eacute;fl&eacute;chir trop longtemps. Aucun pitch, aucun lien.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sultat
                </p>
                <p className="text-sm leading-relaxed text-text-primary">
                  R&eacute;ponse en 47 minutes. Conversation de 6 messages sur 2 jours. RDV
                  cal&eacute; le 17 mars, 6 jours apr&egrave;s le premier message. Deal sign&eacute;
                  en mai : 42&nbsp;k&euro; annuels.
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Scenario 2 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scenario-2" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sc&eacute;nario 2 : prise de poste r&eacute;cente
              </h2>
              <p className="mb-6">
                Un classique de l&apos;outbound. Les 90 premiers jours d&apos;un nouveau poste
                sont le moment o&ugrave; tout est red&eacute;fini : priorit&eacute;s, outils,
                budgets, fournisseurs. La fen&ecirc;tre d&apos;attention est maximale.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Contexte du prospect
                </p>
                <p className="text-sm leading-relaxed">
                  Camille, nomm&eacute;e Head of Sales dans une scale-up SaaS RH parisienne,
                  44 collaborateurs, s&eacute;rie A boucl&eacute;e 5 mois avant. Avant &ccedil;a,
                  Sales Manager chez un &eacute;diteur concurrent. Pr&eacute;sente mais discr&egrave;te
                  sur LinkedIn.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Signal d&eacute;tect&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Alerte Sales Navigator : changement de poste rep&eacute;r&eacute; le 4 f&eacute;vrier.
                  On attend trois semaines avant de contacter. Pendant ce temps, on v&eacute;rifie
                  la fiche entreprise : l&apos;offre d&apos;emploi publi&eacute;e 8 jours apr&egrave;s
                  sa nomination recherche deux SDR &mdash; signal fort qu&apos;elle structure son
                  &eacute;quipe.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Message envoy&eacute; (le 25 f&eacute;vrier)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Bonjour Camille,</p>
                  <p className="mt-2">
                    F&eacute;licitations pour votre prise de poste. J&apos;ai vu que vous
                    recrutez 2 SDR en parall&egrave;le &mdash; construction d&apos;&eacute;quipe
                    en mode acc&eacute;l&eacute;r&eacute;.
                  </p>
                  <p className="mt-2">
                    Question rapide : vous comptez leur confier l&apos;outbound from scratch,
                    ou vous pr&eacute;voyez d&apos;alimenter leur pipeline avec des leads
                    pr&eacute;qualifi&eacute;s pendant la mont&eacute;e en comp&eacute;tence&nbsp;?
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Pourquoi &ccedil;a a march&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Deux signaux crois&eacute;s : prise de poste + recrutement SDR. Le message
                  prouve qu&apos;on a lu l&apos;offre d&apos;emploi. La question parle de son
                  probl&egrave;me op&eacute;rationnel imm&eacute;diat (comment faire monter
                  des juniors), pas de notre offre. Ton direct, vocabulaire m&eacute;tier.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sultat
                </p>
                <p className="text-sm leading-relaxed text-text-primary">
                  R&eacute;ponse le lendemain matin. RDV de 30 min cal&eacute; 9 jours plus
                  tard. Pas de deal imm&eacute;diat &mdash; budget 2026 d&eacute;j&agrave; boucl&eacute;
                  &mdash; mais POC cadr&eacute; pour septembre, 18&nbsp;k&euro; sur le 1er semestre
                  post-lancement.
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Scenario 3 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scenario-3" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sc&eacute;nario 3 : visite de profil r&eacute;p&eacute;t&eacute;e
              </h2>
              <p className="mb-6">
                Signal faible en apparence, mais puissant quand il se r&eacute;p&egrave;te. Une
                visite unique peut &ecirc;tre accidentelle. Trois visites en dix jours, c&apos;est
                une curiosit&eacute; active.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Contexte du prospect
                </p>
                <p className="text-sm leading-relaxed">
                  Marc-Antoine, COO d&apos;un cabinet de conseil en strat&eacute;gie IT, 22
                  consultants, clients ETI fran&ccedil;aises. Abonn&eacute; depuis 4 mois &agrave;
                  notre newsletter, mais aucune interaction publique.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Signal d&eacute;tect&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  3 visites de profil en 11 jours selon les notifications LinkedIn Premium&nbsp;:
                  6, 10 et 17 janvier. Aucun like, aucun commentaire. Entre les deux derni&egrave;res
                  visites, il a commenc&eacute; &agrave; regarder la page &laquo;&nbsp;activit&eacute;
                  r&eacute;cente&nbsp;&raquo; de deux de nos collaborateurs.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Message envoy&eacute; (le 18 janvier, lendemain de la 3e visite)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Bonjour Marc-Antoine,</p>
                  <p className="mt-2">
                    On ne se conna&icirc;t pas, mais j&apos;ai remarqu&eacute; qu&apos;on a
                    plusieurs connexions en commun dans le conseil ETI. Plut&ocirc;t que de laisser
                    LinkedIn deviner si on devrait se parler, je pr&eacute;f&egrave;re poser la
                    question directement.
                  </p>
                  <p className="mt-2">
                    La prospection B2B fait partie de vos sujets du moment, ou vous regardiez
                    mon profil pour une autre raison&nbsp;?
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Pourquoi &ccedil;a a march&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Le message assume la visite sans la d&eacute;noncer (&laquo;&nbsp;LinkedIn
                  devine&nbsp;&raquo;). L&apos;humour d&eacute;samorce la g&ecirc;ne d&apos;&ecirc;tre
                  rep&eacute;r&eacute;. La question ouverte permet au prospect de dire non sans
                  se sentir jug&eacute;, et d&apos;ouvrir sinon.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sultat
                </p>
                <p className="text-sm leading-relaxed text-text-primary">
                  R&eacute;ponse en 3 heures : &laquo;&nbsp;Bien vu. On pense &agrave; structurer
                  un canal LinkedIn pour nos consultants.&nbsp;&raquo; RDV cal&eacute; 4 jours
                  plus tard. Signature d&apos;un accompagnement &agrave; 22&nbsp;k&euro; sur 6 mois
                  trois semaines apr&egrave;s le premier message.
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Scenario 4 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scenario-4" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sc&eacute;nario 4 : post viral du prospect
              </h2>
              <p className="mb-6">
                Quand un d&eacute;cideur publie un post qui d&eacute;colle (1&nbsp;000+ likes,
                100+ commentaires), sa bo&icirc;te &agrave; DM est satur&eacute;e. Le challenge&nbsp;:
                faire un message qui sort du lot sans &ecirc;tre un flatteur ou un opportuniste.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Contexte du prospect
                </p>
                <p className="text-sm leading-relaxed">
                  Sophie, VP Marketing d&apos;un &eacute;diteur SaaS B2B de 140 salari&eacute;s,
                  ARR &agrave; 14&nbsp;M&euro;. Publie r&eacute;guli&egrave;rement sur le marketing
                  op&eacute;rationnel. 8&nbsp;400 abonn&eacute;s.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Signal d&eacute;tect&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Post publi&eacute; le 3 avril sur le sujet &laquo;&nbsp;pourquoi on a arr&ecirc;t&eacute;
                  le cold email en 2026&nbsp;&raquo;. 2&nbsp;100 r&eacute;actions, 340 commentaires,
                  87 reposts en 72 heures. Tout l&apos;&eacute;cosyst&egrave;me SaaS B2B en parle. On
                  attend 5 jours que la vague retombe avant de contacter.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Message envoy&eacute; (le 8 avril)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Sophie,</p>
                  <p className="mt-2">
                    Votre post sur le cold email a d&eacute;clench&eacute; pas mal de d&eacute;bats
                    internes chez nos clients SaaS. Un point m&apos;a manqu&eacute; dans les
                    commentaires&nbsp;: ce que vous avez mis &agrave; la place, concr&egrave;tement,
                    c&ocirc;t&eacute; pipeline outbound.
                  </p>
                  <p className="mt-2">
                    Vous avez bascul&eacute; sur du signal-based pur, ou vous avez gard&eacute;
                    un fond de liste pour les comptes strat&eacute;giques&nbsp;?
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Pourquoi &ccedil;a a march&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  D&eacute;lai de 5 jours : le message arrive quand le flux des DM flatteurs
                  s&apos;est tari. La question &eacute;voque un angle qu&apos;elle n&apos;a pas
                  trait&eacute; dans le post &mdash; donc un prolongement intellectuel, pas un
                  rappel de ce qu&apos;elle a dit. Pas un mot sur notre offre.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sultat
                </p>
                <p className="text-sm leading-relaxed text-text-primary">
                  R&eacute;ponse le jour m&ecirc;me : elle d&eacute;taille sa r&eacute;organisation
                  sur 4 messages. RDV propos&eacute; par elle, tenu 11 jours apr&egrave;s. Pas
                  de fit commercial direct &mdash; elle a sa propre solution &mdash; mais deux
                  r&eacute;f&eacute;rencements aupr&egrave;s de clients qui ont ensuite sign&eacute;
                  (cumul : 34&nbsp;k&euro;).
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Scenario 5 */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="scenario-5" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Sc&eacute;nario 5 : commentaire sur un post concurrent
              </h2>
              <p className="mb-6">
                L&apos;outbound chirurgical. Quelqu&apos;un commente le post d&apos;un concurrent
                direct &agrave; toi. Le signal est doublement qualifi&eacute; : il est actif sur
                le sujet, et il appara&icirc;t dans un univers o&ugrave; ta valeur se compare.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Contexte du prospect
                </p>
                <p className="text-sm leading-relaxed">
                  Yanis, fondateur d&apos;une agence d&apos;acquisition digitale de 11 personnes,
                  clients e-commerce et SaaS, CA estim&eacute; autour de 1,2&nbsp;M&euro;. Actif
                  sur LinkedIn, commente souvent des cr&eacute;ateurs B2B.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Signal d&eacute;tect&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  Le 22 d&eacute;cembre, Yanis commente le post d&apos;un concurrent direct sur
                  le sujet &laquo;&nbsp;comment structurer la prospection LinkedIn d&apos;une
                  agence&nbsp;&raquo;. Commentaire critique mais constructif&nbsp;: il pointe
                  un angle mort de l&apos;argumentaire du concurrent sur la question du temps
                  pass&eacute; par les fondateurs.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Message envoy&eacute; (le 23 d&eacute;cembre)
                </p>
                <div className="bg-bg-primary/50 rounded-lg p-4 font-mono text-sm text-text-primary leading-relaxed">
                  <p>Yanis,</p>
                  <p className="mt-2">
                    J&apos;ai vu votre commentaire sous le post de [concurrent]. Le point sur
                    le temps fondateur est celui qu&apos;on entend le plus chez les agences
                    qui essaient de scaler la prospection sans perdre la qualit&eacute;
                    d&apos;ex&eacute;cution.
                  </p>
                  <p className="mt-2">
                    C&apos;est un probl&egrave;me actuel chez vous, ou vous l&apos;aviez r&eacute;gl&eacute;
                    et vous commentiez sur la base de votre exp&eacute;rience pass&eacute;e&nbsp;?
                  </p>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06] mb-4">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Pourquoi &ccedil;a a march&eacute;
                </p>
                <p className="text-sm leading-relaxed">
                  On cite le concurrent sans le d&eacute;nigrer. On valide l&apos;intuition de
                  Yanis (&laquo;&nbsp;celui qu&apos;on entend le plus&nbsp;&raquo;) sans flatterie.
                  La question binaire le force &agrave; se positionner&nbsp;: s&apos;il dit
                  &laquo;&nbsp;actuel&nbsp;&raquo;, le RDV suit naturellement.
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  R&eacute;sultat
                </p>
                <p className="text-sm leading-relaxed text-text-primary">
                  R&eacute;ponse en 4 heures : &laquo;&nbsp;Actuel, oui. C&apos;est exactement
                  le probl&egrave;me que j&apos;essaie de r&eacute;soudre pour l&apos;ann&eacute;e
                  prochaine.&nbsp;&raquo; RDV cal&eacute; en janvier. Contrat sign&eacute; en
                  f&eacute;vrier sur un pilote &agrave; 8&nbsp;k&euro;, &eacute;tendu depuis
                  &agrave; 19&nbsp;k&euro; annuels.
                </p>
              </div>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* CTA outil */}
            {/* ──────────────────────────────────────────────────── */}
            <section>
              <div className="bg-bg-secondary rounded-xl p-6 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Outil gratuit
                </p>
                <h3 className="font-serif text-xl text-text-primary mb-3">
                  Essaie le g&eacute;n&eacute;rateur de message dans ton style
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                  Colle 2-3 de tes posts LinkedIn, d&eacute;cris le signal, laisse le g&eacute;n&eacute;rateur
                  proposer un message qui garde ta voix. Pas un template &mdash; un draft
                  personnalis&eacute; que tu ajustes avant d&apos;envoyer.
                </p>
                <ButtonGlow href="/outils/clone-style-linkedin">
                  Essayer le g&eacute;n&eacute;rateur
                </ButtonGlow>
              </div>
            </section>

            {/* Mid-article CTA */}
            <CtaArticle variant="setting" />

            {/* ──────────────────────────────────────────────────── */}
            {/* Patterns recurrents */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="patterns" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce qui fait qu&apos;un message marche
              </h2>
              <p className="mb-4">
                Cinq sc&eacute;narios, cinq secteurs, cinq profils. Quand on met les messages
                c&ocirc;te &agrave; c&ocirc;te, quatre patterns reviennent.
              </p>
              <p className="mb-4">
                Aucun message ne pitche. Z&eacute;ro mention de notre offre, z&eacute;ro lien,
                z&eacute;ro verbe d&apos;action commercial dans le premier &eacute;change. Le but
                du premier message n&apos;est pas de vendre, c&apos;est d&apos;obtenir une r&eacute;ponse.
                Le pitch vient &agrave; l&apos;appel, jamais avant.
              </p>
              <p className="mb-4">
                Chaque message a une ancre factuelle. Un commentaire, une prise de poste, une
                visite rep&eacute;r&eacute;e, un post viral. Le prospect sait pourquoi on le
                contacte et pourquoi maintenant. Sans cette ancre, le message glisse dans la
                cat&eacute;gorie spam.
              </p>
              <p className="mb-4">
                La derni&egrave;re phrase est une question ouverte ou binaire. Jamais une
                proposition de RDV directe. Demander un RDV au premier message fait chuter
                le taux de r&eacute;ponse de moiti&eacute; (nos donn&eacute;es&nbsp;: 22&nbsp;% vs 11&nbsp;%).
                Ce qu&apos;on veut, c&apos;est lancer la conversation. Le RDV vient au message
                3 ou 4.
              </p>
              <p>
                La longueur reste sous 400 caract&egrave;res. Trois phrases, parfois quatre.
                Au-del&agrave;, le d&eacute;cideur d&eacute;croche. Les messages les plus courts sont
                souvent les plus puissants, parce qu&apos;ils exigent le plus de pr&eacute;cision
                pour tenir.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* FAQ */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>

              <div className="divide-y divide-white/[0.06]">
                {faqItems.map(({ question, answer }, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">{question}</h3>
                      <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Pour aller plus loin */}
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide pilier' },
                  { href: '/ressources/setting-linkedin-prix', label: 'Setting LinkedIn : combien \u00e7a co\u00fbte ?' },
                  { href: '/ressources/setting-linkedin-ia', label: 'Setting LinkedIn et IA : ce qui marche (ou pas)' },
                  { href: '/outils/clone-style-linkedin', label: 'G\u00e9n\u00e9rateur de message dans ton style' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Ouvrir</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Pr&ecirc;t &agrave; passer &agrave; l&apos;action&nbsp;?
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                On s&apos;occupe de ton setting LinkedIn
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                D&eacute;tection des signaux, r&eacute;daction des messages, qualification,
                RDV pos&eacute;s dans ton agenda. Chaque message est relu par un humain.
                Premiers RDV en 7 jours.
              </p>
              <ButtonGlow href="/tarifs">
                Voir nos tarifs
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : le guide complet', readTime: '25 min' },
              { href: '/ressources/signal-achat-linkedin', title: "Signaux d'achat LinkedIn : comment les d\u00e9tecter", readTime: '14 min' },
              { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : scripts et exemples', readTime: '22 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
