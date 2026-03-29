import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Agence prospection B2B vs setting LinkedIn externalis\u00e9 : comparatif 2026 | Setting',
  description:
    'Agence de prospection B2B ou setting LinkedIn externalis\u00e9 ? Prix, m\u00e9thode, engagement, taux de r\u00e9ponse : le comparatif chiffr\u00e9 pour choisir en 2026.',
  alternates: {
    canonical: 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
      'x-default': 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
    },
  },
  openGraph: {
    title: 'Agence prospection B2B vs setting LinkedIn externalis\u00e9 | Setting',
    description: 'Prix, m\u00e9thode, engagement, r\u00e9sultats : le comparatif entre agence de prospection B2B et setting LinkedIn externalis\u00e9.',
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: 'https://www.setting.live/api/og?title=Agence%20prospection%20B2B%20vs%20setting%20LinkedIn&tag=Comparatif', width: 1200, height: 630, alt: 'Agence prospection B2B vs setting LinkedIn \u2014 Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence prospection B2B vs setting LinkedIn externalis\u00e9 | Setting',
    description: 'Prix, m\u00e9thode, engagement, r\u00e9sultats : le comparatif entre agence de prospection B2B et setting LinkedIn externalis\u00e9.',
    images: ['https://www.setting.live/api/og?title=Agence%20prospection%20B2B%20vs%20setting%20LinkedIn&tag=Comparatif'],
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
  headline: 'Agence prospection B2B vs setting LinkedIn externalis\u00e9 : le comparatif chiffr\u00e9',
  description:
    'Agence de prospection B2B ou setting LinkedIn externalis\u00e9 ? Prix mensuel, m\u00e9thode, engagement, personnalisation, taux de r\u00e9ponse : le comparatif pour choisir.',
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
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
  },
  image: 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Prospection B2B',
  wordCount: 2400,
  about: [
    { '@type': 'Thing', name: 'Agence de prospection B2B' },
    { '@type': 'Thing', name: 'Setting LinkedIn externalis\u00e9' },
    { '@type': 'Thing', name: 'Externalisation prospection LinkedIn' },
  ],
}

const faqItems = [
  {
    question: 'Quelle est la diff\u00e9rence principale entre une agence de prospection B2B et le setting LinkedIn externalis\u00e9 ?',
    answer:
      'Une agence de prospection B2B utilise g\u00e9n\u00e9ralement des campagnes multicanal (email, t\u00e9l\u00e9phone, LinkedIn) avec une approche volumique : beaucoup de contacts, peu de personnalisation. Le setting LinkedIn externalis\u00e9 se concentre sur un seul canal (LinkedIn) avec une approche signal-based : chaque message est d\u00e9clench\u00e9 par un signal d\u2019achat d\u00e9tect\u00e9 sur le profil du prospect. Le r\u00e9sultat est un taux de r\u00e9ponse nettement plus \u00e9lev\u00e9 et des rendez-vous mieux qualifi\u00e9s.',
  },
  {
    question: 'Pourquoi le setting LinkedIn externalis\u00e9 co\u00fbte moins cher qu\u2019une agence de prospection ?',
    answer:
      'Le mod\u00e8le est diff\u00e9rent. Une agence de prospection emploie plusieurs profils (SDR, chef de projet, copywriter), utilise des outils multicanal co\u00fbteux et g\u00e8re un volume \u00e9lev\u00e9 de contacts. Le setting externalis\u00e9 s\u2019appuie sur un setter d\u00e9di\u00e9 \u00e9quip\u00e9 d\u2019outils IA pour d\u00e9tecter les signaux, r\u00e9diger des messages personnalis\u00e9s et qualifier les r\u00e9ponses. Moins d\u2019interm\u00e9diaires, moins d\u2019overhead, donc un prix plus bas pour un r\u00e9sultat plus cibl\u00e9.',
  },
  {
    question: 'Peut-on utiliser une agence de prospection et le setting LinkedIn en parall\u00e8le ?',
    answer:
      'Oui, mais avec une r\u00e9partition claire des canaux. L\u2019agence peut g\u00e9rer l\u2019emailing et le t\u00e9l\u00e9phone, pendant que le setter LinkedIn travaille le canal LinkedIn en signal-based. L\u2019essentiel est d\u2019\u00e9viter que les m\u00eames prospects soient contact\u00e9s par les deux canaux en m\u00eame temps. Un CRM partag\u00e9 ou un fichier de coordination suffit \u00e0 \u00e9viter les doublons.',
  },
  {
    question: 'Combien de temps avant les premiers rendez-vous avec chaque approche ?',
    answer:
      'Avec une agence de prospection B2B classique, comptez 4 \u00e0 8 semaines avant les premiers rendez-vous qualifi\u00e9s. L\u2019onboarding, la cr\u00e9ation des s\u00e9quences et la mont\u00e9e en charge prennent du temps. Avec le setting LinkedIn externalis\u00e9, les premiers rendez-vous arrivent en g\u00e9n\u00e9ral sous 7 \u00e0 14 jours. Le setter est op\u00e9rationnel d\u00e8s la deuxi\u00e8me semaine apr\u00e8s calibrage de l\u2019ICP et des messages.',
  },
  {
    question: 'Le setting LinkedIn externalis\u00e9 fonctionne-t-il pour toutes les cibles B2B ?',
    answer:
      'Le setting LinkedIn est particuli\u00e8rement efficace quand les d\u00e9cideurs cibl\u00e9s sont actifs sur LinkedIn : fondateurs, directeurs commerciaux, DG, VP Sales, responsables marketing. Si votre cible n\u2019est pas pr\u00e9sente sur LinkedIn (artisans, m\u00e9decins, profils terrain), une agence multicanal avec t\u00e9l\u00e9phone et email sera plus adapt\u00e9e. Pour le B2B tech, SaaS, conseil et services, LinkedIn est le canal le plus performant.',
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
      name: 'Agence prospection B2B vs setting LinkedIn',
      item: 'https://www.setting.live/ressources/agence-prospection-vs-setting-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgenceProspectionVsSettingLinkedinPage() {
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
              <li className="text-text-primary">Agence prospection B2B vs setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Comparatif &middot; Prospection B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Agence prospection B2B vs setting LinkedIn externalis&eacute; : le comparatif chiffr&eacute;
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Deux approches pour g&eacute;n&eacute;rer des rendez-vous qualifi&eacute;s en B2B.
              L&apos;une mise sur le volume, l&apos;autre sur la pr&eacute;cision. Voici les vraies diff&eacute;rences,
              les vrais co&ucirc;ts et les vrais r&eacute;sultats.
            </p>
            <AuthorBlock date="2026-03-29" readTime="10 min de lecture" dateLabel="29 mars 2026" updatedDate="2026-03-29" />
          </header>

          <div data-speakable="true">
            <TldrBox>
              <p>Les agences de prospection B2B facturent 2&nbsp;000 &agrave; 5&nbsp;000&nbsp;&euro;/mois avec un engagement de 3 &agrave; 6&nbsp;mois et une approche volumique multicanal.</p>
              <p>Le setting LinkedIn externalis&eacute; co&ucirc;te 790&nbsp;&euro;/mois sans engagement, avec un setter d&eacute;di&eacute; qui contacte les prospects d&eacute;tect&eacute;s par signaux d&apos;achat.</p>
              <p>Le taux de r&eacute;ponse moyen est estim&eacute; entre 3 et 8&nbsp;% en prospection classique, contre 15 &agrave; 25&nbsp;% en setting signal-based.</p>
              <p>Cet article compare les deux mod&egrave;les point par point : prix, m&eacute;thode, d&eacute;lai, personnalisation, transparence et contr&ocirc;le.</p>
            </TldrBox>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '2 000\u20135 000 \u20ac/mois', label: 'budget agence (estimation march\u00e9)' },
              { stat: '790 \u20ac/mois', label: 'setting LinkedIn externalis\u00e9' },
              { stat: '7\u201314 jours', label: 'premiers RDV (setting)' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Agence de prospection B2B */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                C&apos;est quoi une agence de prospection B2B ?
              </h2>
              <p className="mb-4">
                Une agence de prospection B2B prend en charge la g&eacute;n&eacute;ration de leads pour votre
                entreprise. Elle utilise g&eacute;n&eacute;ralement plusieurs canaux : emailing &agrave; froid,
                appels t&eacute;l&eacute;phoniques, messages LinkedIn automatis&eacute;s, et parfois de la
                publicit&eacute; cibl&eacute;e. L&apos;objectif est de remplir votre pipeline commercial avec des
                rendez-vous ou des leads qualifi&eacute;s.
              </p>
              <p className="mb-4">
                Le mod&egrave;le &eacute;conomique repose sur un forfait mensuel, g&eacute;n&eacute;ralement
                situ&eacute; entre 2&nbsp;000 et 5&nbsp;000&nbsp;&euro; par mois selon le march&eacute; fran&ccedil;ais.
                Certaines agences facturent plus, notamment si elles incluent de la cr&eacute;ation de contenu ou de la
                gestion publicitaire. La plupart imposent un engagement minimum de 3 &agrave; 6&nbsp;mois.
              </p>
              <p className="mb-4">
                L&apos;approche est volumique. L&apos;agence constitue des bases de donn&eacute;es de prospects,
                r&eacute;dige des s&eacute;quences d&apos;emails ou de messages, et les envoie en masse. La
                personnalisation est limit&eacute;e : le m&ecirc;me message peut &ecirc;tre envoy&eacute; &agrave;
                plusieurs centaines de contacts avec des variables (pr&eacute;nom, entreprise, secteur).
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Multicanal',
                    desc: 'Email, t\u00e9l\u00e9phone, LinkedIn, parfois ads. L\u2019agence g\u00e8re plusieurs canaux simultan\u00e9ment pour maximiser le volume de contacts.',
                  },
                  {
                    title: 'Engagement long',
                    desc: 'La plupart des agences demandent 3 \u00e0 6 mois d\u2019engagement minimum. C\u2019est justifi\u00e9 par le temps de calibration, mais c\u2019est un risque si les r\u00e9sultats ne suivent pas.',
                  },
                  {
                    title: 'Approche volumique',
                    desc: 'L\u2019objectif est d\u2019envoyer un maximum de messages pour g\u00e9n\u00e9rer un volume de r\u00e9ponses. Le taux de r\u00e9ponse moyen en cold email B2B est estim\u00e9 entre 3 et 8 % selon les sources.',
                  },
                  {
                    title: '\u00c9quipe d\u00e9di\u00e9e',
                    desc: 'Vous avez un chef de projet, un ou plusieurs SDR, parfois un copywriter. Le co\u00fbt refl\u00e8te cette structure. Le revers : moins de proximit\u00e9 avec l\u2019ex\u00e9cution.',
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

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  En r&eacute;sum&eacute;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  L&apos;agence de prospection est un mod&egrave;le &eacute;prouv&eacute;, mais co&ucirc;teux et
                  lent &agrave; d&eacute;marrer. Elle convient aux entreprises qui veulent d&eacute;l&eacute;guer
                  enti&egrave;rement leur acquisition et qui ont le budget pour un engagement long.
                </p>
              </div>
            </section>

            {/* Section 2 — Setting LinkedIn externalisé */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                C&apos;est quoi le setting LinkedIn externalis&eacute; ?
              </h2>
              <p className="mb-4">
                Le{' '}
                <a href="/ressources/setting-linkedin-definition" className="text-accent hover:underline transition-colors">
                  setting LinkedIn
                </a>{' '}
                externalis&eacute; est une approche de prospection B2B centr&eacute;e sur un seul canal : LinkedIn.
                Un{' '}
                <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">
                  setter d&eacute;di&eacute;
                </a>{' '}
                contacte les d&eacute;cideurs directement via des messages personnalis&eacute;s,
                d&eacute;clench&eacute;s par des{' '}
                <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">
                  signaux d&apos;achat
                </a>{' '}
                d&eacute;tect&eacute;s sur leur profil.
              </p>
              <p className="mb-4">
                Chez Setting, le programme co&ucirc;te 790&nbsp;&euro; par mois, sans engagement. Pas de contrat
                de 3 ou 6 mois. Vous pouvez arr&ecirc;ter &agrave; tout moment. Le setter est op&eacute;rationnel
                d&egrave;s la deuxi&egrave;me semaine apr&egrave;s un calibrage de votre ICP et de vos messages.
              </p>
              <p className="mb-4">
                La diff&eacute;rence fondamentale est la m&eacute;thode. Au lieu d&apos;envoyer le m&ecirc;me message
                &agrave; 500 personnes, le setter identifie 50 &agrave; 80 prospects par semaine qui montrent des
                signaux concrets : changement de poste, recrutement en cours, lev&eacute;e de fonds, publication sur
                une probl&eacute;matique li&eacute;e &agrave; votre offre. Chaque message fait r&eacute;f&eacute;rence
                au signal d&eacute;tect&eacute;.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Signal-based',
                    desc: 'Chaque prise de contact est d\u00e9clench\u00e9e par un signal d\u2019achat identifi\u00e9 sur LinkedIn. Le message est contextualis\u00e9, pas g\u00e9n\u00e9rique. Le prospect voit que vous avez fait l\u2019effort de comprendre sa situation.',
                  },
                  {
                    title: 'Sans engagement',
                    desc: '790 \u20ac/mois, r\u00e9siliation libre. Pas de contrat de 3 mois. Vous testez, vous mesurez, vous d\u00e9cidez. Si les r\u00e9sultats sont l\u00e0, vous continuez. Sinon, vous arr\u00eatez sans p\u00e9nalit\u00e9.',
                  },
                  {
                    title: 'Setter d\u00e9di\u00e9',
                    desc: 'Un setter form\u00e9 \u00e0 votre offre g\u00e8re tout : d\u00e9tection de signaux, r\u00e9daction des messages, qualification des r\u00e9ponses, booking des RDV. Vous recevez les RDV dans votre agenda.',
                  },
                  {
                    title: 'Taux de r\u00e9ponse \u00e9lev\u00e9',
                    desc: 'L\u2019approche signal-based g\u00e9n\u00e8re un taux de r\u00e9ponse estim\u00e9 entre 15 et 25 %, contre 3 \u00e0 8 % pour les campagnes de prospection classiques. La personnalisation et le timing font la diff\u00e9rence.',
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

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  En r&eacute;sum&eacute;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le setting externalis&eacute; mise sur la qualit&eacute; plut&ocirc;t que le volume. Moins de
                  contacts, mais des messages pertinents envoy&eacute;s au bon moment. Le co&ucirc;t est 3 &agrave;
                  6 fois inf&eacute;rieur &agrave; une agence, sans engagement.
                </p>
              </div>
            </section>

            <CtaArticle />

            {/* Section 3 — Comparatif point par point */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le comparatif point par point
              </h2>
              <p className="mb-6">
                Les deux approches c&ocirc;te &agrave; c&ocirc;te, sur les 8 crit&egrave;res qui comptent pour d&eacute;cider.
              </p>

              {/* Semantic HTML table */}
              <div className="overflow-x-auto my-8">
                <table className="w-full text-sm text-left font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="py-3 px-4 text-text-muted font-semibold">Agence prospection B2B</th>
                      <th className="py-3 px-4 text-[#C87533] font-semibold">Setting LinkedIn externalis&eacute;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Prix mensuel</td>
                      <td className="py-3 px-4 text-text-primary">2 000&ndash;5 000 &euro;/mois</td>
                      <td className="py-3 px-4 text-text-primary">790 &euro;/mois</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Engagement</td>
                      <td className="py-3 px-4 text-text-primary">3&ndash;6 mois minimum</td>
                      <td className="py-3 px-4 text-text-primary">Sans engagement</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">M&eacute;thode</td>
                      <td className="py-3 px-4 text-text-primary">Multicanal, volumique</td>
                      <td className="py-3 px-4 text-text-primary">Signal-based, LinkedIn uniquement</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Personnalisation</td>
                      <td className="py-3 px-4 text-text-primary">Variables basiques (pr&eacute;nom, entreprise)</td>
                      <td className="py-3 px-4 text-text-primary">Contextualis&eacute;e par signal d&apos;achat</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Taux de r&eacute;ponse (estim&eacute;)</td>
                      <td className="py-3 px-4 text-text-primary">3&ndash;8 %</td>
                      <td className="py-3 px-4 text-text-primary">15&ndash;25 %</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">D&eacute;lai premiers RDV</td>
                      <td className="py-3 px-4 text-text-primary">4&ndash;8 semaines</td>
                      <td className="py-3 px-4 text-text-primary">7&ndash;14 jours</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Transparence</td>
                      <td className="py-3 px-4 text-text-primary">Reporting mensuel, peu de visibilit&eacute; quotidienne</td>
                      <td className="py-3 px-4 text-text-primary">Acc&egrave;s temps r&eacute;el aux conversations</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 px-4 text-text-muted">Contr&ocirc;le</td>
                      <td className="py-3 px-4 text-text-primary">D&eacute;l&eacute;gu&eacute; &agrave; l&apos;agence</td>
                      <td className="py-3 px-4 text-text-primary">Vous validez les messages et le ciblage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual grid version */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-bg-secondary border-b border-white/[0.06]">
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Crit&egrave;re
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary border-l border-white/[0.06]">
                    Agence
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent border-l border-white/[0.06]">
                    Setting
                  </div>
                </div>
                {[
                  {
                    critere: 'Prix mensuel',
                    agence: '2 000\u20135 000 \u20ac',
                    setting: '790 \u20ac tout inclus',
                  },
                  {
                    critere: 'Engagement',
                    agence: '3\u20136 mois minimum',
                    setting: 'Sans engagement',
                  },
                  {
                    critere: 'M\u00e9thode',
                    agence: 'Email + t\u00e9l\u00e9phone + LinkedIn',
                    setting: 'LinkedIn signal-based',
                  },
                  {
                    critere: 'Personnalisation',
                    agence: 'Variables basiques',
                    setting: 'Contextualis\u00e9e par signal',
                  },
                  {
                    critere: 'Taux de r\u00e9ponse',
                    agence: '3\u20138 % (estim\u00e9)',
                    setting: '15\u201325 % (estim\u00e9)',
                  },
                  {
                    critere: 'Premiers RDV',
                    agence: '4\u20138 semaines',
                    setting: '7\u201314 jours',
                  },
                  {
                    critere: 'Transparence',
                    agence: 'Reporting mensuel',
                    setting: 'Acc\u00e8s temps r\u00e9el',
                  },
                  {
                    critere: 'Contr\u00f4le',
                    agence: 'D\u00e9l\u00e9gu\u00e9 \u00e0 l\u2019agence',
                    setting: 'Vous validez tout',
                  },
                ].map(({ critere, agence, setting }, i) => (
                  <div key={critere} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''} border-b border-white/[0.06] last:border-b-0`}>
                    <div className="px-4 py-3 text-sm text-text-muted">{critere}</div>
                    <div className="px-4 py-3 text-sm text-text-primary border-l border-white/[0.06]">{agence}</div>
                    <div className="px-4 py-3 text-sm text-text-primary border-l border-white/[0.06]">{setting}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 — Quand choisir une agence */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand choisir une agence de prospection B2B ?
              </h2>
              <p className="mb-4">
                L&apos;agence reste pertinente dans certains cas pr&eacute;cis. Voici les trois situations o&ugrave;
                elle a un avantage.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Votre cible n\u2019est pas sur LinkedIn',
                    desc: 'Si vos d\u00e9cideurs sont des artisans, des m\u00e9decins ou des profils terrain peu actifs sur LinkedIn, une approche multicanal (email + t\u00e9l\u00e9phone) sera plus efficace. L\u2019agence peut atteindre ces profils via d\u2019autres canaux.',
                  },
                  {
                    title: 'Vous voulez couvrir plusieurs canaux simultan\u00e9ment',
                    desc: 'Si votre strat\u00e9gie d\u2019acquisition repose sur une combinaison email, t\u00e9l\u00e9phone et LinkedIn, l\u2019agence peut orchestrer l\u2019ensemble. Le setting externalis\u00e9 se concentre uniquement sur LinkedIn.',
                  },
                  {
                    title: 'Vous avez un budget cons\u00e9quent et une cible large',
                    desc: 'Si votre march\u00e9 adressable est tr\u00e8s large (plusieurs dizaines de milliers de prospects) et que vous avez le budget pour une approche volumique, l\u2019agence peut g\u00e9n\u00e9rer un volume de leads important. Le ROI par lead sera plus faible, mais le volume compense.',
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
            </section>

            {/* Section 5 — Quand choisir le setting externalisé */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand choisir le setting LinkedIn externalis&eacute; ?
              </h2>
              <p className="mb-4">
                Le setting externalis&eacute; est le meilleur choix dans ces trois situations.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Vos d\u00e9cideurs sont actifs sur LinkedIn',
                    desc: 'Fondateurs, DG, VP Sales, directeurs marketing, heads of : ces profils sont sur LinkedIn et y r\u00e9pondent. Le setting signal-based exploite ce canal \u00e0 son plein potentiel, avec des messages qui arrivent au bon moment.',
                  },
                  {
                    title: 'Vous voulez tester sans vous engager',
                    desc: 'Pas de contrat de 3 mois. Pas de frais de setup \u00e9lev\u00e9s. \u00c0 790 \u20ac/mois sans engagement, vous pouvez tester le canal LinkedIn pendant un mois et mesurer les r\u00e9sultats avant de d\u00e9cider de continuer.',
                  },
                  {
                    title: 'Vous privil\u00e9giez la qualit\u00e9 des RDV au volume de leads',
                    desc: 'Si votre cycle de vente est long et que chaque rendez-vous compte, le setting signal-based g\u00e9n\u00e8re des RDV mieux qualifi\u00e9s. Le prospect a \u00e9t\u00e9 contact\u00e9 au bon moment, avec un message pertinent. Le taux de show-up et de conversion est plus \u00e9lev\u00e9.',
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

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Le point cl&eacute;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Le setting externalis&eacute; n&apos;est pas l&apos;oppos&eacute; d&apos;une agence. C&apos;est une
                  alternative plus l&eacute;g&egrave;re, plus rapide et plus pr&eacute;cise quand votre cible est sur
                  LinkedIn. Les deux approches peuvent coexister si les canaux sont bien r&eacute;partis.
                </p>
              </div>
            </section>

            <CtaArticle variant="methode" />

            {/* Section 6 — FAQ */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map((item, i) => (
                  <div key={i} className="py-5">
                    <p className="font-sans font-semibold text-text-primary mb-2">
                      {item.question}
                    </p>
                    <p className="faq-answer font-sans text-text-secondary leading-relaxed text-sm">
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
                { href: '/externaliser-prospection-linkedin', label: 'Externaliser sa prospection LinkedIn B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : guide complet' },
                { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : le guide pratique' },
                { href: '/tarifs', label: 'Tarifs Setting : forfaits et garantie r\u00e9sultats' },
                { href: '/methode/setting-linkedin', label: 'La m\u00e9thode Setting LinkedIn en 9 \u00e9tapes' },
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
              Tester le setting LinkedIn sans engagement
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              790&nbsp;&euro;/mois, setter d&eacute;di&eacute;, m&eacute;thode signal-based,
              premiers RDV en 7&nbsp;jours. Z&eacute;ro engagement.
              Comparez avec votre agence actuelle.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              R&eacute;server un appel d&eacute;couverte &rarr;
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

          <RelatedArticles articles={[
            { href: '/externaliser-prospection-linkedin', title: 'Externaliser sa prospection LinkedIn B2B', readTime: '8 min' },
            { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : guide complet', readTime: '20 min' },
            { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : le guide pratique', readTime: '12 min' },
          ]} />

        </div>
      </main>
      <Footer />
    </>
  )
}
