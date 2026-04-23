import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { CloneStyleForm } from '@/components/CloneStyleForm'

export const metadata: Metadata = {
  title: "G\u00e9n\u00e9rateur de message LinkedIn dans ton style \u2014 Clone IA gratuit | Setting",
  description:
    "Colle 3 de tes posts LinkedIn, d\u00e9cris ton prospect, re\u00e7ois un message de prospection r\u00e9dig\u00e9 dans ton style exact. Gratuit, sans compte, 3 g\u00e9n\u00e9rations par jour.",
  alternates: {
    canonical: 'https://www.setting.live/outils/clone-style-linkedin',
    languages: {
      fr: 'https://www.setting.live/outils/clone-style-linkedin',
      'x-default': 'https://www.setting.live/outils/clone-style-linkedin',
    },
  },
  openGraph: {
    title: "G\u00e9n\u00e9rateur de message LinkedIn dans ton style \u2014 Clone IA gratuit",
    description:
      'Colle 3 posts, d\u00e9cris ton prospect, re\u00e7ois un message de prospection LinkedIn dans ton style. Gratuit, 3 g\u00e9n\u00e9rations par jour.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.setting.live/outils/clone-style-linkedin',
  },
  twitter: {
    card: 'summary_large_image',
    title: "G\u00e9n\u00e9rateur de message LinkedIn dans ton style \u2014 Clone IA gratuit",
    description:
      'Colle 3 posts, d\u00e9cris ton prospect, re\u00e7ois un message de prospection dans ton style.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://www.setting.live/outils/clone-style-linkedin#webapp',
  name: 'G\u00e9n\u00e9rateur de message LinkedIn dans ton style',
  url: 'https://www.setting.live/outils/clone-style-linkedin',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  inLanguage: 'fr-FR',
  description:
    "Outil gratuit qui g\u00e9n\u00e8re des messages de prospection LinkedIn dans le style d'\u00e9criture de l'utilisateur, \u00e0 partir de 3 \u00e0 5 de ses propres posts.",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment g\u00e9n\u00e9rer un message LinkedIn dans ton style",
  description:
    "Trois \u00e9tapes pour obtenir un message de prospection LinkedIn r\u00e9dig\u00e9 dans ton propre style d'\u00e9criture.",
  totalTime: 'PT2M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'EUR', value: '0' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Colle 3 \u00e0 5 de tes posts LinkedIn',
      text: "S\u00e9lectionne 3 \u00e0 5 posts r\u00e9cents que tu as \u00e9crits toi-m\u00eame. Copie le texte complet dans l'outil. Plus les posts sont r\u00e9cents et vari\u00e9s, plus le clone sera fid\u00e8le \u00e0 ton style actuel.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'D\u00e9cris ton prospect',
      text: "Indique le r\u00f4le, le secteur et le signal d'achat que tu as observ\u00e9. Exemple : DG d'une PME industrielle qui a comment\u00e9 un post sur l'IA dans la production.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'G\u00e9n\u00e8re ton message',
      text: "L'outil analyse ton style \u00e0 partir de tes posts et r\u00e9dige un message de prospection de 50 \u00e0 80 mots, contextualis\u00e9 sur le signal. Tu peux copier, r\u00e9g\u00e9n\u00e9rer ou ajuster avant envoi.",
    },
  ],
}

const faqItems = [
  {
    question: "Mes posts LinkedIn sont-ils stock\u00e9s quelque part ?",
    answer:
      "Non. Les posts que tu colles passent directement \u00e0 l'API de g\u00e9n\u00e9ration sans \u00eatre sauvegard\u00e9s en base. On ne cr\u00e9e pas de compte, on ne logue pas le contenu. Le seul \u00e9l\u00e9ment qu'on garde temporairement en m\u00e9moire, c'est un compteur li\u00e9 \u00e0 ton adresse IP pour la limite quotidienne.",
  },
  {
    question: "Combien de messages puis-je g\u00e9n\u00e9rer par jour ?",
    answer:
      "Trois g\u00e9n\u00e9rations par jour et par adresse IP. La limite se remet \u00e0 z\u00e9ro toutes les 24 heures. Chaque message peut ensuite \u00eatre r\u00e9g\u00e9n\u00e9r\u00e9 deux fois sans consommer de g\u00e9n\u00e9ration suppl\u00e9mentaire, pour te laisser ajuster le ton.",
  },
  {
    question: "Est-ce que \u00e7a marche pour d'autres langues que le fran\u00e7ais ?",
    answer:
      "L'outil est cal\u00e9 sur le fran\u00e7ais professionnel. Tu peux coller des posts en anglais, mais le message final sera probablement en fran\u00e7ais, avec une fid\u00e9lit\u00e9 de style moins bonne. Pour du B2B anglophone, la version compl\u00e8te en pr\u00e9paration g\u00e9rera le bilinguisme proprement.",
  },
  {
    question: "Comment am\u00e9liorer la qualit\u00e9 du message g\u00e9n\u00e9r\u00e9 ?",
    answer:
      "Trois leviers. Premier : colle des posts longs et vari\u00e9s (tu partages plus d'\u00e9chantillons de ton style). Deuxi\u00e8me : sois pr\u00e9cis dans la description du prospect \u2014 r\u00f4le, secteur, signal observ\u00e9, \u00e9ventuel contexte de prise de poste. Troisi\u00e8me : r\u00e9g\u00e9n\u00e8re deux fois et garde la version qui sonne le plus naturel.",
  },
  {
    question: "Pourquoi le message doit-il rester relu par un humain ?",
    answer:
      "Parce que m\u00eame un clone bien calibr\u00e9 rate parfois le contexte fin : l'actualit\u00e9 r\u00e9cente du prospect, un d\u00e9tail de son dernier post, une formulation qui ne te ressemble pas ce jour-l\u00e0. Le setting LinkedIn qui fonctionne, c'est un humain qui envoie. L'outil te fait gagner 80 % du temps de r\u00e9daction, pas 100 %.",
  },
  {
    question: "Puis-je utiliser l'outil sans compte LinkedIn ?",
    answer:
      "Oui, l'outil n'est pas connect\u00e9 \u00e0 LinkedIn. Tu colles le texte des posts \u00e0 la main. C'est volontaire : pas d'automatisation, pas de risque de blocage de compte, pas de scraping. L'outil g\u00e9n\u00e8re un texte. Tu l'envoies toi-m\u00eame, depuis ton compte LinkedIn normal.",
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
    { '@type': 'ListItem', position: 2, name: 'Outils', item: 'https://www.setting.live/outils' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Clone style LinkedIn',
      item: 'https://www.setting.live/outils/clone-style-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webAppSchema, howToSchema, faqSchema, breadcrumbSchema]),
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
              <li className="text-text-primary">Clone style LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Outil gratuit
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              G&eacute;n&eacute;rateur de message LinkedIn dans ton style
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed">
              Colle 3 de tes posts, d&eacute;cris ton prospect, re&ccedil;ois un message de
              prospection LinkedIn &eacute;crit dans ton style exact. Gratuit, pas de compte,
              3 g&eacute;n&eacute;rations par jour. L&apos;outil cl&ocirc;ne ta fa&ccedil;on
              d&apos;&eacute;crire &agrave; partir de tes propres posts &mdash; pas de template,
              pas de ton g&eacute;n&eacute;rique.
            </p>
          </header>

          {/* Form */}
          <div className="mb-20">
            <CloneStyleForm />
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Section 1 — How it works */}
            <section id="comment-ca-marche" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment l&apos;outil fonctionne, en 3 &eacute;tapes
              </h2>
              <p className="mb-6">
                La plupart des g&eacute;n&eacute;rateurs de messages LinkedIn produisent
                un texte qui sonne faux d&egrave;s la premi&egrave;re ligne. Trop lisse,
                trop g&eacute;n&eacute;rique, trop &laquo;&nbsp;ChatGPT&nbsp;&raquo;. Les
                prospects le voient en trois secondes, et le message file en archive.
                L&apos;approche ici est diff&eacute;rente : l&apos;outil part de 3 &agrave; 5
                de tes propres posts pour extraire ta signature stylistique, puis r&eacute;dige
                dans ce m&ecirc;me ton.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: 'Colle 3 \u00e0 5 posts LinkedIn que tu as \u00e9crits',
                    description:
                      "S\u00e9lectionne des posts r\u00e9cents, vari\u00e9s (un post d'opinion, un retour d'exp\u00e9rience, un post technique). 50 caract\u00e8res minimum par post. Plus l'\u00e9chantillon est large, plus le clone capte tes tics, ta longueur de phrase moyenne et ta fa\u00e7on de poser les questions. C'est ton corpus d'entra\u00eenement mini.",
                  },
                  {
                    step: 2,
                    title: 'D\u00e9cris ton prospect et le signal d\u2019achat',
                    description:
                      "En deux lignes : r\u00f4le, secteur, taille d'entreprise, et surtout le signal que tu as d\u00e9tect\u00e9 (commentaire sur ton post, prise de poste, interaction avec un concurrent). C'est ce contexte qui fait la diff\u00e9rence entre un DM qui sonne juste et un DM g\u00e9n\u00e9rique.",
                  },
                  {
                    step: 3,
                    title: 'G\u00e9n\u00e8re, relis, envoie',
                    description:
                      "L'outil produit un message de 50 \u00e0 80 mots dans ton style. Tu peux le copier, le r\u00e9g\u00e9n\u00e9rer (2 essais offerts), ou l'ajuster \u00e0 la main. Un score de fid\u00e9lit\u00e9 te montre \u00e0 quel point le texte g\u00e9n\u00e9r\u00e9 ressemble statistiquement \u00e0 ton corpus.",
                  },
                ].map(({ step, title, description }) => (
                  <div key={step} className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 font-serif text-accent text-lg font-semibold">
                        {step}
                      </span>
                      <h3 className="font-serif text-lg text-text-primary font-semibold">{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 — Why human */}
            <section id="humain" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi le message doit rester relu par un humain
              </h2>
              <p className="mb-4">
                L&apos;outil g&egrave;re le style. Il ne g&egrave;re pas le contexte fin.
                Quand tu envoies un message de{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">
                  setting LinkedIn
                </a>
                , la diff&eacute;rence entre un DM qui fait mouche et un DM qui passe inaper&ccedil;u,
                c&apos;est rarement la formulation. C&apos;est le d&eacute;tail r&eacute;cent que tu as
                rep&eacute;r&eacute; dans le profil, la phrase exacte du dernier commentaire du prospect,
                l&apos;ancre qui prouve que tu as lu avant d&apos;&eacute;crire.
              </p>
              <p className="mb-4">
                L&apos;IA ne voit pas tout &ccedil;a. Elle part de ce que tu lui donnes. Si ta description
                du prospect est vague, le message sera vague. Si elle est pr&eacute;cise, le message sera
                pr&eacute;cis &mdash; mais il faudra quand m&ecirc;me ta relecture pour v&eacute;rifier que
                l&apos;angle est juste, que le ton matche la situation, que le timing est bon.
              </p>
              <p>
                C&apos;est la diff&eacute;rence de fond entre le{' '}
                <a
                  href="/ressources/setting-humain-vs-automatisation-linkedin"
                  className="text-accent hover:underline transition-colors"
                >
                  setting humain et l&apos;automatisation pure
                </a>
                . L&apos;outil acc&eacute;l&egrave;re la r&eacute;daction, il ne remplace pas le
                jugement. On consid&egrave;re que 20 % du temps restant &mdash; la relecture et
                l&apos;ajustement &mdash; fait 80 % de l&apos;&eacute;cart de taux de r&eacute;ponse.
              </p>
            </section>

            {/* Section 3 — Limits */}
            <section id="limites" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que cette version lite ne fait pas
              </h2>
              <p className="mb-6">
                Cet outil gratuit est une version all&eacute;g&eacute;e. Il prend 3 &agrave; 5 posts
                en entr&eacute;e et produit un message. C&apos;est utile pour un usage ponctuel, ou
                pour tester la m&eacute;thode. Pour un usage quotidien &agrave; volume, il manque
                plusieurs briques que la version compl&egrave;te apportera.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Version lite (ici)
                  </p>
                  <ul className="space-y-2">
                    {[
                      '3 \u00e0 5 posts par g\u00e9n\u00e9ration',
                      'Pas de m\u00e9morisation entre sessions',
                      'Pas d\u2019apprentissage des corrections',
                      '3 g\u00e9n\u00e9rations / jour / IP',
                      'Corpus r\u00e9duit : style captur\u00e9 en surface',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-text-secondary/30 shrink-0">&bull;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Version compl&egrave;te (en pr&eacute;paration)
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Indexation de tout ton historique de posts',
                      'Graphe de connaissances sur tes clients et sujets',
                      'Apprentissage des corrections que tu fais',
                      'Score de fid\u00e9lit\u00e9 par message et par batch',
                      'Corpus persistant, style qui \u00e9volue avec toi',
                    ].map((text, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-accent shrink-0">&bull;</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm">
                Si l&apos;usage quotidien t&apos;int&eacute;resse, inscris ton email dans le formulaire
                ci-dessus. Les premiers inscrits auront un acc&egrave;s anticip&eacute;.
              </p>
            </section>

            {/* Section 4 — Tips */}
            <section id="conseils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                3 conseils pour tirer le meilleur de l&apos;outil
              </h2>
              <p className="mb-6">
                Quelques r&eacute;glages simples qui changent significativement la qualit&eacute;
                du r&eacute;sultat.
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="leading-relaxed">
                  <span className="font-semibold text-text-primary">Varie tes posts d&apos;entr&eacute;e.</span>{' '}
                  Ne colle pas 3 posts d&apos;opinion ou 3 retours d&apos;exp&eacute;rience. M&eacute;lange
                  les formats. Plus la vari&eacute;t&eacute; est large, plus le clone capte ta palette compl&egrave;te.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-text-primary">Sois chirurgical sur le signal.</span>{' '}
                  &laquo;&nbsp;A lik&eacute; mon post sur les objections commerciales&nbsp;&raquo; est
                  10 fois plus utile que &laquo;&nbsp;prospect chaud&nbsp;&raquo;. L&apos;ancre du
                  message sortira naturellement bien si le signal est explicite.
                </li>
                <li className="leading-relaxed">
                  <span className="font-semibold text-text-primary">R&eacute;g&eacute;n&egrave;re au moins une fois.</span>{' '}
                  La premi&egrave;re g&eacute;n&eacute;ration est rarement la meilleure. La deuxi&egrave;me
                  ou la troisi&egrave;me sonnent souvent plus fluides. Les deux r&eacute;g&eacute;n&eacute;rations
                  ne consomment pas de quota suppl&eacute;mentaire.
                </li>
              </ol>
              <p className="mt-6">
                Besoin d&apos;exemples concrets de messages qui convertissent&nbsp;?{' '}
                <a
                  href="/ressources/messages-prospection-linkedin-exemples"
                  className="text-accent hover:underline transition-colors"
                >
                  15 exemples de messages de prospection LinkedIn
                </a>
                . Et pour construire une vraie m&eacute;thode signal-based :{' '}
                <a
                  href="/ressources/signal-achat-linkedin"
                  className="text-accent hover:underline transition-colors"
                >
                  d&eacute;tecter les signaux d&apos;achat sur LinkedIn
                </a>
                .
              </p>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map(({ question, answer }, i) => (
                  <details key={i} className="group py-5">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">
                        {question}
                      </h3>
                      <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">
                        +
                      </span>
                    </summary>
                    <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related */}
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                  {
                    href: '/ressources/setting-humain-vs-automatisation-linkedin',
                    label: 'Setting humain vs automatisation : pourquoi \u00e7a compte',
                  },
                  { href: '/ressources/signal-achat-linkedin', label: 'D\u00e9tecter les signaux d\u2019achat sur LinkedIn' },
                  {
                    href: '/ressources/messages-prospection-linkedin-exemples',
                    label: '15 exemples de messages de prospection LinkedIn',
                  },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Lire le guide</span>
                  </a>
                ))}
              </div>
            </section>

          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
