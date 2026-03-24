import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Setting LinkedIn : définition, méthode et exemples (2026) | Setting',
  description:
    'Le setting LinkedIn est une méthode de prospection B2B qui cible les signaux d\u2019achat pour engager des conversations qualifiées. Définition, étapes, exemples de messages et erreurs à éviter.',
  openGraph: {
    title: 'Setting LinkedIn : définition, méthode et exemples concrets',
    description:
      'Qu\u2019est-ce que le setting LinkedIn ? Définition complète, les 5 étapes de la méthode, exemples de messages et les erreurs qui tuent votre taux de réponse.',
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn : définition et méthode complète (2026)',
    description: 'Définition du setting LinkedIn, différences avec le cold outreach, étapes de la méthode et exemples concrets.',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setting-linkedin-definition',
    languages: {
      'fr': 'https://www.setting.live/ressources/setting-linkedin-definition',
      'x-default': 'https://www.setting.live/ressources/setting-linkedin-definition',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setting-linkedin-definition',
  headline: 'Setting LinkedIn : définition, méthode et exemples concrets',
  description:
    'Le setting LinkedIn est une méthode de prospection B2B qui cible les signaux d\u2019achat pour engager des conversations qualifiées. Définition, étapes, exemples de messages et erreurs à éviter.',
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
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/setting-linkedin-definition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/setting-linkedin-definition',
  },
  image: 'https://www.setting.live/opengraph-image',
}

const faqItems = [
  {
    question: 'Qu\u2019est-ce que le setting LinkedIn ?',
    answer:
      'Le setting LinkedIn est une technique de prospection B2B qui consiste \u00e0 d\u00e9tecter les signaux d\u2019achat sur LinkedIn (r\u00e9actions \u00e0 des posts, changements de poste, visites de profil), puis \u00e0 engager une conversation personnalis\u00e9e avec le prospect. Contrairement au cold outreach, chaque message est contextualis\u00e9 et valid\u00e9 par un humain.',
  },
  {
    question: 'Quelle diff\u00e9rence entre setting LinkedIn et social selling ?',
    answer:
      'Le social selling couvre tout : contenu, engagement, personal branding sur LinkedIn. Le setting LinkedIn est plus cibl\u00e9 : il se concentre sur la prise de contact, depuis la d\u00e9tection du signal d\u2019achat jusqu\u2019au rendez-vous qualifi\u00e9. En gros, le setting est la partie ex\u00e9cution du social selling.',
  },
  {
    question: 'Le setting LinkedIn est-il l\u00e9gal ?',
    answer:
      'Oui. Le setting LinkedIn respecte les conditions d\u2019utilisation de la plateforme tant qu\u2019il reste manuel (pas d\u2019automatisation des connexions ou des messages). Chaque message est r\u00e9dig\u00e9 individuellement et envoy\u00e9 apr\u00e8s validation humaine, ce qui le diff\u00e9rencie des outils d\u2019automatisation comme Waalaxy ou PhantomBuster qui risquent le ban du compte.',
  },
  {
    question: 'Combien co\u00fbte le setting LinkedIn externalis\u00e9 ?',
    answer:
      'Comptez entre 500 et 2\u00a0000\u00a0\u20ac/mois selon le prestataire et le volume de prospection. Chez Setting, l\u2019abonnement d\u00e9marre \u00e0 790\u00a0\u20ac/mois avec un setter d\u00e9di\u00e9, le ciblage IA et la validation humaine de chaque message. Le setup est offert.',
  },
  {
    question: 'En combien de temps le setting LinkedIn donne-t-il des r\u00e9sultats ?',
    answer:
      'Les premiers RDV qualifi\u00e9s arrivent souvent d\u00e8s la premi\u00e8re semaine. Le pipeline se stabilise au bout de 6 \u00e0 8 semaines, une fois que le ciblage, les messages et le scoring sont cal\u00e9s sur les retours terrain. Comptez 8 \u00e0 15 RDV qualifi\u00e9s par mois en r\u00e9gime de croisi\u00e8re.',
  },
  {
    question: 'Setting LinkedIn ou prospection t\u00e9l\u00e9phonique : que choisir ?',
    answer:
      'Les deux sont compl\u00e9mentaires. Le setting LinkedIn g\u00e9n\u00e8re le premier contact et d\u00e9croche un rendez-vous. La qualification t\u00e9l\u00e9phonique approfondit l\u2019int\u00e9r\u00eat du prospect via la grille BANT. Chez Setting, les deux sont int\u00e9gr\u00e9s dans un pipeline unique en 9 \u00e9tapes.',
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
      name: 'Setting LinkedIn : d\u00e9finition',
      item: 'https://www.setting.live/ressources/setting-linkedin-definition',
    },
  ],
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    num: '1',
    title: 'D\u00e9tecter les signaux d\u2019achat',
    desc: 'R\u00e9actions \u00e0 vos posts, interactions sur les posts de concurrents, changements de poste, nouvelles lev\u00e9es de fonds. Le setting LinkedIn commence par l\u2019observation, pas par l\u2019envoi.',
  },
  {
    num: '2',
    title: 'Analyser le profil en profondeur',
    desc: 'Titre, bio, posts r\u00e9cents, connexions communes. L\u2019objectif : comprendre le contexte du prospect pour personnaliser le message. Un CEO de PME tech et un directeur commercial en industrie ne re\u00e7oivent pas le m\u00eame message.',
  },
  {
    num: '3',
    title: 'R\u00e9diger un message contextualis\u00e9',
    desc: '5 phrases maximum. La deuxi\u00e8me phrase cite un fait pr\u00e9cis tir\u00e9 du profil. Jamais de pitch dans le premier message. Le but : ouvrir une conversation, pas vendre.',
  },
  {
    num: '4',
    title: 'Valider avant d\u2019envoyer',
    desc: 'Test du t\u00e9l\u00e9phone : si le message ne sonne pas naturel dit \u00e0 voix haute, on r\u00e9\u00e9crit. Aucun message ne part sans validation humaine. C\u2019est la diff\u00e9rence entre setting et automatisation.',
  },
  {
    num: '5',
    title: 'Convertir en RDV qualifi\u00e9',
    desc: 'Quand le prospect r\u00e9pond, on poursuit la conversation jusqu\u2019au rendez-vous. Pas de pression. Les leads ti\u00e8des entrent dans un pipeline de nurturing et seront recontact\u00e9s au bon moment.',
  },
]

const mistakes = [
  {
    title: 'Pitcher dans le premier message',
    desc: 'Le prospect ne vous conna\u00eet pas. Un message qui commence par votre offre, c\u2019est du bruit. Le premier message ouvre une conversation, il ne vend rien.',
  },
  {
    title: 'Automatiser l\u2019envoi sans contr\u00f4le',
    desc: 'Les outils comme Waalaxy ou PhantomBuster envoient des messages \u00e0 la cha\u00eene. Le probl\u00e8me : un mauvais pr\u00e9nom, une r\u00e9f\u00e9rence \u00e0 un post que la personne n\u2019a pas \u00e9crit, et votre cr\u00e9dibilit\u00e9 est grill\u00e9e.',
  },
  {
    title: 'Cibler sans signal d\u2019achat',
    desc: 'Envoyer un message \u00e0 quelqu\u2019un qui n\u2019a montr\u00e9 aucun int\u00e9r\u00eat, c\u2019est de la prospection \u00e0 froid. Le setting LinkedIn repose sur la d\u00e9tection pr\u00e9alable d\u2019un signal : r\u00e9action, changement de poste, visite de profil.',
  },
  {
    title: 'Abandonner apr\u00e8s 2 messages',
    desc: 'Il faut en moyenne 8 points de contact avant qu\u2019un prospect accepte un rendez-vous. 80 % des commerciaux abandonnent apr\u00e8s 2 ou 3 tentatives. Le setting planifie la s\u00e9quence compl\u00e8te d\u00e8s le d\u00e9part.',
  },
]

const comparisons = [
  { criteria: 'Ciblage', setting: 'Signal d\u2019achat d\u00e9tect\u00e9', cold: 'Liste import\u00e9e depuis Sales Navigator' },
  { criteria: 'Message', setting: 'Personnalis\u00e9, valid\u00e9 par un humain', cold: 'Template avec variables' },
  { criteria: 'Volume', setting: '15\u201330 messages/jour (qualifi\u00e9s)', cold: '100+ messages/jour (en masse)' },
  { criteria: 'Taux de r\u00e9ponse', setting: '15\u201335 %', cold: '2\u20135 %' },
  { criteria: 'Risque de ban', setting: 'Quasi nul (tout est manuel)', cold: '\u00c9lev\u00e9 (automatisation d\u00e9tect\u00e9e)' },
  { criteria: 'RDV qualifi\u00e9s', setting: '8\u201315/mois', cold: '2\u20134/mois' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingLinkedInDefinitionPage() {
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
              <li className="text-text-primary">Setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting LinkedIn
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting LinkedIn : d&eacute;finition, m&eacute;thode et exemples concrets
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Qu&rsquo;est-ce que le setting LinkedIn, comment &ccedil;a fonctionne, et pourquoi
              de plus en plus de fondateurs B2B l&rsquo;utilisent &agrave; la place du cold outreach.
              D&eacute;finition, &eacute;tapes, comparatif et erreurs &agrave; &eacute;viter.
            </p>
            <AuthorBlock date="2026-03-24" readTime="10 min de lecture" dateLabel="24 mars 2026" />
          </header>

          {/* Definition Block */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>setting LinkedIn</strong> est une m&eacute;thode de prospection B2B qui consiste &agrave;
              d&eacute;tecter les <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signaux d&rsquo;achat</a> sur
              LinkedIn, puis &agrave; engager une conversation personnalis&eacute;e avec le prospect.
              Contrairement au cold outreach classique, le setting repose sur un &eacute;change
              progressif, une co-r&eacute;daction IA des messages et une validation humaine avant chaque envoi.
              L&rsquo;objectif : des rendez-vous qualifi&eacute;s, pas du volume.
            </p>
          </div>


          {/* Section 1 — Origines */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              D&rsquo;o&ugrave; vient le terme &laquo;&nbsp;setting&nbsp;&raquo; ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le mot &laquo;&nbsp;setting&nbsp;&raquo; vient du vocabulaire commercial anglophone : &laquo;&nbsp;to set
              an appointment&nbsp;&raquo;, c&rsquo;est-&agrave;-dire fixer un rendez-vous. Le <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter</a> est
              le commercial qui ouvre la porte. Il ne vend pas, il qualifie et d&eacute;croche le cr&eacute;neau.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Sur LinkedIn, le setting a pris une dimension sp&eacute;cifique. La plateforme concentre
              les d&eacute;cideurs B2B, les signaux d&rsquo;achat sont visibles (r&eacute;actions, changements de poste,
              publications), et la messagerie permet un contact direct sans passer par un standard
              ou un filtre email.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le <strong className="text-text-primary">setting LinkedIn</strong> d&eacute;signe donc la pratique
              de combiner l&rsquo;observation de ces signaux avec une prise de contact
              personnalis&eacute;e et progressive. C&rsquo;est la zone grise entre la visibilit&eacute; et la vente :
              le prospect a montr&eacute; un int&eacute;r&ecirc;t, mais il n&rsquo;est pas encore pr&ecirc;t &agrave; acheter.
              Le setting l&rsquo;accompagne jusqu&rsquo;au rendez-vous.
            </p>
          </section>


          {/* Section 2 — Setting vs Cold Outreach */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setting LinkedIn vs cold outreach : quelles diff&eacute;rences ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              La confusion est fr&eacute;quente. Les deux utilisent LinkedIn pour contacter des prospects.
              Mais la logique est oppos&eacute;e.
            </p>

            {/* Comparison table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="font-sans font-semibold text-text-muted text-left py-3 pr-4 w-1/3"></th>
                    <th className="font-sans font-semibold text-accent text-left py-3 pr-4">Setting LinkedIn</th>
                    <th className="font-sans font-semibold text-text-muted text-left py-3">Cold outreach</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04]">
                      <td className="font-sans font-semibold text-text-primary py-3 pr-4">{row.criteria}</td>
                      <td className="font-sans text-text-secondary py-3 pr-4">{row.setting}</td>
                      <td className="font-sans text-text-secondary py-3">{row.cold}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Le cold outreach mise sur le volume. Le setting LinkedIn mise sur la pertinence.
              Avec moins de messages, il g&eacute;n&egrave;re plus de rendez-vous qualifi&eacute;s, sans risque de ban
              et sans d&eacute;grader votre image sur la plateforme.
            </p>
          </section>


          {/* Section 3 — Les 5 étapes */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 &eacute;tapes du setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Le setting LinkedIn suit une logique pr&eacute;cise.
              Chez Setting, on le d&eacute;coupe en <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">9 &eacute;tapes d&eacute;taill&eacute;es</a>,
              mais le principe tient en 5 phases.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 font-mono text-sm font-bold text-accent shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary mb-1">{step.title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/[0.03] border border-accent/10 rounded-xl px-5 py-4 mt-8">
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="font-semibold text-accent">En pratique :</span> ces 5 &eacute;tapes
                se r&eacute;p&egrave;tent chaque semaine. Le scoring s&rsquo;affine avec les retours terrain.
                Au bout de 2 mois, le syst&egrave;me conna&icirc;t vos prospects mieux qu&rsquo;un commercial
                qui d&eacute;barque.{' '}
                <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">
                  Voir notre m&eacute;thode compl&egrave;te en 9 &eacute;tapes &rarr;
                </a>
              </p>
            </div>
          </section>


          {/* Section 4 — Exemple de message */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Exemple de message de setting LinkedIn
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un bon message de setting LinkedIn respecte 3 r&egrave;gles :
              5 phrases maximum, la 2e phrase cite un fait pr&eacute;cis du profil,
              et il n&rsquo;y a aucun pitch.
            </p>

            {/* Bad example */}
            <div className="mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-red-400/60 mb-2">
                &times; Message g&eacute;n&eacute;rique (cold outreach)
              </p>
              <div className="bg-red-400/[0.03] border border-red-400/10 rounded-xl px-5 py-4">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">
                  &laquo;&nbsp;Bonjour [Pr&eacute;nom], j&rsquo;ai vu votre profil et je pense que notre solution
                  pourrait vous int&eacute;resser. On aide les entreprises B2B &agrave; g&eacute;n&eacute;rer plus de leads.
                  Seriez-vous disponible pour un call de 15 min ?&nbsp;&raquo;
                </p>
              </div>
            </div>

            {/* Good example */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400/60 mb-2">
                &rarr; Message de setting (signal-based)
              </p>
              <div className="bg-emerald-400/[0.03] border border-emerald-400/10 rounded-xl px-5 py-4">
                <p className="font-sans text-text-secondary text-sm leading-relaxed italic">
                  &laquo;&nbsp;Bonjour Marie. J&rsquo;ai lu votre commentaire sous le post de [concurrent]
                  sur la gestion des leads entrants. Vous mentionniez que votre &eacute;quipe passe
                  2h/jour &agrave; trier les demandes non qualifi&eacute;es. On observe le m&ecirc;me probl&egrave;me
                  chez 3 autres boites de votre taille dans le SaaS RH. Curieux de savoir
                  comment vous g&eacute;rez &ccedil;a aujourd&rsquo;hui.&nbsp;&raquo;
                </p>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              La diff&eacute;rence : le deuxi&egrave;me message r&eacute;f&eacute;rence un signal r&eacute;el,
              montre que vous avez lu le profil, et pose une question ouverte
              au lieu de pitcher. C&rsquo;est &ccedil;a, le setting LinkedIn.
              Pour plus d&rsquo;exemples, consultez nos{' '}
              <a href="/ressources/script-setting-linkedin" className="text-accent hover:underline transition-colors">
                scripts de setting LinkedIn
              </a>.
            </p>
          </section>


          {/* Section 5 — Erreurs */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 4 erreurs qui tuent votre setting LinkedIn
            </h2>

            <div className="space-y-4">
              {mistakes.map((mistake, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">
                    <span className="text-red-400/60 mr-2">&times;</span>
                    {mistake.title}
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{mistake.desc}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Pour &eacute;viter ces pi&egrave;ges, chaque message doit passer par une relecture
              humaine avant envoi. C&rsquo;est ce qu&rsquo;on d&eacute;taille dans
              notre <a href="/methode/setting-linkedin" className="text-accent hover:underline transition-colors">m&eacute;thode de setting LinkedIn en 9 &eacute;tapes</a>.
            </p>
          </section>


          {/* Section 6 — Quand externaliser */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Quand externaliser son setting LinkedIn ?
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le setting LinkedIn prend du temps. D&eacute;tecter les signaux, analyser les profils,
              r&eacute;diger des messages personnalis&eacute;s, g&eacute;rer les relances : comptez 2 &agrave; 3 heures
              par jour pour un pipeline actif.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&rsquo;<a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">externalisation du setting LinkedIn</a> a
              du sens quand vous &ecirc;tes solopreneur, fondateur ou une &eacute;quipe sales r&eacute;duite qui pr&eacute;f&egrave;re
              se concentrer sur les appels de vente plut&ocirc;t que sur la prospection.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter externalis&eacute;</a> prend
              en charge tout le pipeline : de la d&eacute;tection du signal au rendez-vous dans votre agenda.
              Vous ne g&eacute;rez que les appels de vente.
              Consultez nos <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs</a> pour
              en savoir plus.
            </p>
          </section>


          {/* Section 7 — FAQ */}
          <section className="mb-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fr&eacute;quentes sur le setting LinkedIn
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
                { href: '/methode/setting-linkedin', label: 'Setting LinkedIn B2B : notre m\u00e9thode compl\u00e8te en 9 \u00e9tapes' },
                { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : 6 exemples concrets' },
                { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/ressources/setting-humain-vs-automatisation-linkedin', label: 'Setting humain vs automatisation LinkedIn : le vrai comparatif' },
                { href: '/ressources/ia-methode-humain-setting-linkedin', label: 'IA, m\u00e9thode et humain : les 3 couches du setting LinkedIn' },
                { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ?" },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>


          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06] mt-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting LinkedIn
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Pr&ecirc;t &agrave; d&eacute;l&eacute;guer votre setting LinkedIn ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Setter d&eacute;di&eacute;, ciblage IA, validation humaine de chaque message.
              &Agrave; partir de 790&nbsp;&euro;/mois. Setup offert.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel d&eacute;couverte &rarr;
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
