import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Combien co\u00fbte le setting LinkedIn en 2026 ? | Setting',
  description:
    'Le prix r\u00e9el d\u2019un programme de setting LinkedIn : forfait agence, freelance, pay per RDV et mod\u00e8le hybride. Co\u00fbts d\u00e9taill\u00e9s, comparatif et calcul du ROI.',
  alternates: {
    canonical: 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
      'x-default': 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
    },
  },
  openGraph: {
    title: 'Combien co\u00fbte le setting LinkedIn en 2026 ? | Setting',
    description:
      'Forfait agence, freelance, pay per RDV, hybride : ce que vous payez vraiment pour un programme de setting LinkedIn. Chiffres terrain et ROI.',
    locale: 'fr_FR',
    type: 'article',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
  headline: 'Combien co\u00fbte le setting LinkedIn en 2026 ?',
  description:
    'Le prix r\u00e9el d\u2019un programme de setting LinkedIn, poste par poste. Forfait agence, freelance, pay per RDV et mod\u00e8le hybride compar\u00e9s avec chiffres terrain.',
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
  url: 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
  },
  image: 'https://www.setting.live/ressources/combien-coute-setting-linkedin/opengraph-image',
}

const faqItems = [
  {
    question: 'Le setting LinkedIn est-il rentable pour un solopreneur ?',
    answer:
      'Oui, \u00e0 condition que votre panier moyen d\u00e9passe 2 000 \u20ac et que vous soyez capable de closer au moins 1 appel sur 4. Un solopreneur qui vend du conseil \u00e0 3 000 \u20ac ou plus par mission a un ROI positif d\u00e8s le deuxi\u00e8me mois. En dessous de 1 500 \u20ac de panier moyen, le setting co\u00fbte plus qu\u2019il ne rapporte.',
  },
  {
    question: '\u00c0 partir de quel panier moyen le setting vaut-il le coup ?',
    answer:
      'Le seuil de rentabilit\u00e9 se situe autour de 2 000 \u20ac de panier moyen. En dessous, le co\u00fbt par RDV qualifi\u00e9 (entre 120 et 250 \u20ac selon le mod\u00e8le) mange trop de marge. Au-dessus de 5 000 \u20ac, le setting est presque toujours rentable d\u00e8s le premier mois.',
  },
  {
    question: 'Les outils sont-ils inclus dans le prix ?',
    answer:
      'Cela d\u00e9pend du mod\u00e8le. Les agences au forfait incluent g\u00e9n\u00e9ralement Sales Navigator, Reactin et Spyer dans leur tarif. Un freelance facture ses outils en sus, soit 180 \u00e0 300 \u20ac/mois suppl\u00e9mentaires. Chez Setting, les outils sont inclus dans le programme.',
  },
  {
    question: 'Combien de temps avant de voir des r\u00e9sultats ?',
    answer:
      'Les premiers RDV arrivent en g\u00e9n\u00e9ral entre 14 et 21 jours apr\u00e8s le lancement. La mont\u00e9e en charge compl\u00e8te prend 6 \u00e0 8 semaines, le temps de calibrer les crit\u00e8res ICP, tester les angles de message et affiner les signaux de ciblage.',
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
      name: 'Co\u00fbt du setting LinkedIn',
      item: 'https://www.setting.live/ressources/combien-coute-setting-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CombienCouteSettingLinkedinPage() {
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
              <li className="text-text-primary">Co&ucirc;t du setting LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting &middot; Prix
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Combien co&ucirc;te le setting LinkedIn en 2026 ?
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le prix r&eacute;el d&apos;un programme de setting LinkedIn, poste par poste.
              Pas le tarif catalogue. Ce que vous payez vraiment quand tout est inclus.
            </p>
            <AuthorBlock date="2026-03-25" readTime="10 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Le setting LinkedIn, c&apos;est quoi ?
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Le <a href="/setting" className="text-accent hover:underline transition-colors">setting</a> est
              un service de prospection B2B sur LinkedIn. Un setter humain identifie vos prospects id&eacute;aux,
              les contacte avec des messages personnalis&eacute;s et d&eacute;croche des rendez-vous qualifi&eacute;s
              pour votre &eacute;quipe commerciale. Le co&ucirc;t d&apos;un programme de setting d&eacute;pend
              du mod&egrave;le tarifaire, des outils utilis&eacute;s et du niveau d&apos;accompagnement.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '790\u20132 500 \u20ac/mois', label: 'fourchette march\u00e9' },
              { stat: '3\u20138x', label: 'ROI moyen constat\u00e9' },
              { stat: '21 jours', label: 'avant premiers RDV' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Ce que vous payez réellement */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Ce que vous payez r&eacute;ellement
              </h2>
              <p className="mb-4">
                Le tarif affich&eacute; par un prestataire de setting n&apos;est jamais le co&ucirc;t complet.
                Un programme de setting LinkedIn a quatre postes de d&eacute;pense. Les voici,
                avec les montants constat&eacute;s sur le march&eacute; fran&ccedil;ais en 2026.
              </p>

              {/* Cost breakdown table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
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
                      <td className="py-3">Fixe, prime par RDV ou hybride selon le mod&egrave;le choisi</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 font-semibold text-text-primary">Outils de prospection</td>
                      <td className="py-3 pr-4">180&ndash;300 &euro;</td>
                      <td className="py-3">Sales Navigator (~100 &euro;), Reactin (~50 &euro;), Spyer (~30&ndash;80 &euro;)</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 font-semibold text-text-primary">Assistance IA</td>
                      <td className="py-3 pr-4">0&ndash;80 &euro;</td>
                      <td className="py-3">Skill IA pour les drafts de messages et le scoring. Inclus chez certaines agences.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-text-primary">Management et suivi</td>
                      <td className="py-3 pr-4">0&ndash;300 &euro;</td>
                      <td className="py-3">Sessions de calibration, reporting, ajustements ICP. Inclus en agence, &agrave; votre charge avec un freelance.</td>
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

              <p>
                La majorit&eacute; des acheteurs comparent uniquement la ligne &laquo; r&eacute;mun&eacute;ration setter &raquo;.
                C&apos;est une erreur. Un freelance &agrave; 600 &euro;/mois sans outils ni m&eacute;thode co&ucirc;te en
                r&eacute;alit&eacute; 900 &euro; une fois les outils ajout&eacute;s, plus votre temps de management.
                Une agence &agrave; 1 800 &euro;/mois qui inclut tout est souvent moins ch&egrave;re au total.
              </p>
            </section>

            {/* Section 2 — Les 4 modèles tarifaires */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 4 mod&egrave;les tarifaires du march&eacute;
              </h2>
              <p className="mb-6">
                Quatre fa&ccedil;ons d&apos;acheter du setting existent en France. Chaque mod&egrave;le
                a ses propres m&eacute;canismes d&apos;incitation. Le choix change compl&egrave;tement
                le comportement du setter et la qualit&eacute; des RDV que vous recevez.
              </p>

              <div className="space-y-4 mb-6">
                {/* Agence forfait */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Agence au forfait mensuel
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-secondary">
                      1 500&ndash;3 000 &euro;/mois
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Vous payez un montant fixe chaque mois. L&apos;agence g&egrave;re les outils, la m&eacute;thode
                    et le suivi. C&apos;est la formule la plus simple c&ocirc;t&eacute; acheteur.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Le risque : sans clause de performance, l&apos;agence n&apos;a aucune incitation &agrave; livrer
                    plus que le minimum. V&eacute;rifiez qu&apos;une garantie de RDV existe dans le contrat.
                    Le forfait est confortable pour les deux parties si les objectifs sont clairs d&egrave;s le d&eacute;part.
                  </p>
                </div>

                {/* Freelance */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Freelance setter
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-secondary">
                      500&ndash;1 200 &euro;/mois
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter freelance</a> co&ucirc;te
                    moins cher en direct. Pas de frais de structure, pas de marge agence. C&apos;est la solution
                    la moins ch&egrave;re sur le papier.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    En contrepartie, vous g&eacute;rez l&apos;onboarding, les outils, la m&eacute;thode et le
                    suivi de performance vous-m&ecirc;me. Si vous n&apos;avez pas de processus de setting rod&eacute;,
                    vous allez passer 3 &agrave; 5 heures par semaine &agrave; piloter le programme. Ce temps a un co&ucirc;t.
                  </p>
                </div>

                {/* Pay per RDV */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Pay per RDV
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-secondary">
                      100&ndash;300 &euro;/RDV
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    Vous ne payez que si un rendez-vous est d&eacute;croch&eacute;. Z&eacute;ro risque financier
                    en apparence. En r&eacute;alit&eacute;, ce mod&egrave;le pousse le setter &agrave; livrer
                    du volume, pas de la qualit&eacute;.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Un RDV mal qualifi&eacute; co&ucirc;te 30 &agrave; 60 minutes de votre temps sans rien
                    g&eacute;n&eacute;rer. Sur 10 RDV &agrave; 200 &euro;, si 6 sont hors cible, vous
                    avez d&eacute;pens&eacute; 2 000 &euro; pour 4 RDV utiles. Le co&ucirc;t r&eacute;el par
                    RDV qualifi&eacute; monte &agrave; 500 &euro;.
                  </p>
                </div>

                {/* Hybride — Setting's model */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-accent/30">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      Hybride fixe + prime
                    </p>
                    <p className="font-sans text-sm font-semibold text-accent">
                      Mod&egrave;le Setting
                    </p>
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-2">
                    790 &euro;/mois de fixe + 50 &agrave; 250 &euro; par RDV qualifi&eacute; livr&eacute;.
                    Le fixe couvre la pr&eacute;sence, les outils et la m&eacute;thode. La prime aligne les
                    int&eacute;r&ecirc;ts du setter sur vos r&eacute;sultats.
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                    Le setter a int&eacute;r&ecirc;t &agrave; bien qualifier parce que des RDV hors cible
                    d&eacute;gradent la relation et la prime future. C&apos;est le m&eacute;canisme qui
                    produit le meilleur &eacute;quilibre entre volume et qualit&eacute; sur le terrain.
                    <a href="/tarifs" className="text-accent hover:underline transition-colors ml-1">Voir les tarifs d&eacute;taill&eacute;s.</a>
                  </p>
                  <p className="font-sans text-accent text-xs font-semibold">
                    Le setter et le client ont le m&ecirc;me objectif : des RDV qualifi&eacute;s.
                  </p>
                </div>
              </div>

              <p>
                Le mod&egrave;le tarifaire n&apos;est pas un d&eacute;tail administratif. Il d&eacute;termine
                ce que votre setter va optimiser au quotidien. Un fixe seul r&eacute;compense la pr&eacute;sence.
                Une prime seule r&eacute;compense le volume. L&apos;hybride r&eacute;compense la qualit&eacute;.
              </p>
            </section>

            {/* Section 3 — Comparatif canaux */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comparatif : setting vs autres canaux de prospection
              </h2>
              <p className="mb-6">
                Le setting LinkedIn n&apos;est pas le seul canal de prospection B2B. Mais c&apos;est le
                seul qui combine ciblage pr&eacute;cis, personnalisation humaine et co&ucirc;t par RDV
                contr&ocirc;l&eacute;. Voici comment il se compare aux alternatives.
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Canal</th>
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">Co&ucirc;t / RDV qualifi&eacute;</th>
                      <th className="text-left font-semibold text-text-primary py-3 pr-4">D&eacute;lai</th>
                      <th className="text-left font-semibold text-text-primary py-3">Limite</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 font-semibold text-text-primary">Cold email</td>
                      <td className="py-3 pr-4">40&ndash;120 &euro;</td>
                      <td className="py-3 pr-4">2&ndash;4 semaines</td>
                      <td className="py-3">Taux d&apos;ouverture en chute, d&eacute;livrabilit&eacute; fragile, RGPD</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 font-semibold text-text-primary">Automation LinkedIn</td>
                      <td className="py-3 pr-4">60&ndash;200 &euro;</td>
                      <td className="py-3 pr-4">1&ndash;3 semaines</td>
                      <td className="py-3">Risque de ban, messages g&eacute;n&eacute;riques, taux de r&eacute;ponse &lt; 5 %</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="py-3 pr-4 font-semibold text-text-primary">Ads LinkedIn / Google</td>
                      <td className="py-3 pr-4">200&ndash;600 &euro;</td>
                      <td className="py-3 pr-4">4&ndash;8 semaines</td>
                      <td className="py-3">Co&ucirc;t par lead &eacute;lev&eacute;, qualification faible, budget minimum ~2 000 &euro;/mois</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-semibold text-accent">Setting humain</td>
                      <td className="py-3 pr-4 text-accent font-semibold">120&ndash;250 &euro;</td>
                      <td className="py-3 pr-4">2&ndash;3 semaines</td>
                      <td className="py-3">Scalabilit&eacute; limit&eacute;e au nombre de setters, calibration n&eacute;cessaire</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4">
                Le cold email reste le canal le moins cher par RDV, mais les taux d&apos;ouverture B2B sont
                pass&eacute;s sous la barre des 25 % en 2025. L&apos;automation LinkedIn est moins ch&egrave;re
                que le setting humain, mais le risque de ban et les messages g&eacute;n&eacute;riques plafonnent
                les r&eacute;sultats. Le d&eacute;tail complet est dans
                notre <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline transition-colors">comparatif setting humain vs automatisation</a>.
              </p>
              <p>
                Le setting humain co&ucirc;te plus que le cold email. Mais les RDV sont qualifi&eacute;s, le
                prospect sait &agrave; qui il parle, et le taux de closing est 2 &agrave; 3 fois plus &eacute;lev&eacute;.
                Sur un panier moyen au-dessus de 3 000 &euro;, la diff&eacute;rence de co&ucirc;t par RDV
                est absorb&eacute;e par la diff&eacute;rence de taux de conversion.
              </p>
            </section>

            {/* Section 4 — Calculer si ça vaut le coup */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment calculer si &ccedil;a vaut le coup pour vous
              </h2>
              <p className="mb-4">
                La formule est simple. Deux variables suffisent : votre panier moyen et votre taux de closing.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20 mb-6">
                <p className="font-sans text-text-primary text-sm font-semibold text-center leading-relaxed">
                  ROI = (panier moyen &times; taux de closing &times; RDV par mois) &divide; co&ucirc;t programme
                </p>
              </div>

              <div className="bg-bg-secondary rounded-xl p-6 my-6 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Exemple concret
                </p>
                <div className="space-y-3">
                  {[
                    { label: 'Panier moyen', value: '4 000 \u20ac' },
                    { label: 'Taux de closing', value: '30 % (1 sur 3)' },
                    { label: 'Valeur d\u2019un RDV qualifi\u00e9', value: '1 200 \u20ac' },
                    { label: 'Programme : 790 \u20ac + 150 \u20ac \u00d7 7 RDV', value: '1 840 \u20ac/mois' },
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

              <p className="mb-4">
                Si votre panier moyen d&eacute;passe 2 000 &euro; et que votre taux de closing est au-dessus
                de 25 %, le setting est rentable. En dessous de ces seuils, il vaut mieux travailler votre
                offre et votre processus de vente avant d&apos;investir dans la g&eacute;n&eacute;ration de RDV.
              </p>
              <p>
                Pour faire votre propre simulation, rendez-vous sur la page <a href="/tarifs" className="text-accent hover:underline transition-colors">tarifs</a> o&ugrave;
                vous trouverez les fourchettes exactes selon votre secteur et votre ticket moyen.
              </p>
            </section>

            {/* Section 5 — Coûts cachés */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les co&ucirc;ts cach&eacute;s &agrave; surveiller
              </h2>
              <p className="mb-4">
                Le prix affich&eacute; n&apos;est pas le co&ucirc;t r&eacute;el. Cinq postes de d&eacute;pense
                sont r&eacute;guli&egrave;rement oubli&eacute;s dans les comparatifs.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Outils factur\u00e9s en sus',
                    desc: 'Un freelance qui affiche 700 \u20ac/mois ne g\u00e8re pas vos outils. Sales Navigator (100 \u20ac), Reactin (50 \u20ac), Spyer (30\u201380 \u20ac) : ajoutez 180 \u00e0 230 \u20ac/mois \u00e0 la facture r\u00e9elle. Demandez toujours si les outils sont inclus avant de comparer les offres.',
                  },
                  {
                    title: 'Temps de calibration',
                    desc: 'Les 2 \u00e0 3 premi\u00e8res semaines servent \u00e0 affiner le ciblage ICP et les angles de message. Ce temps est n\u00e9cessaire quel que soit le prestataire. Un programme qui promet des r\u00e9sultats d\u00e8s le jour 1 ment ou a d\u00e9j\u00e0 une base de prospects pr\u00eate \u2014 v\u00e9rifiez laquelle.',
                  },
                  {
                    title: 'Taux de no-show',
                    desc: 'Entre 10 et 20 % des RDV d\u00e9croch\u00e9s ne se tiennent pas. Le prospect annule, ne se pr\u00e9sente pas ou reporte. Un bon setter rel\u00e0nce syst\u00e9matiquement. Un setter sans processus de relance laisse ces cr\u00e9neaux vides sans les rattraper.',
                  },
                  {
                    title: 'Turnover setter',
                    desc: 'Un setter qui part apr\u00e8s 3 mois emporte la connaissance accumul\u00e9e sur votre march\u00e9. Recrutement, onboarding, calibration : recommencer co\u00fbte 2 \u00e0 3 mois de retard. Privil\u00e9giez les programmes o\u00f9 la m\u00e9thode est document\u00e9e ind\u00e9pendamment du setter.',
                  },
                  {
                    title: 'Management interne',
                    desc: 'Avec un freelance, vous \u00eates le manager. Briefings hebdomadaires, revue des messages, ajustement de la cible : comptez 3 \u00e0 5 heures par semaine. Si votre heure co\u00fbte 100 \u20ac, c\u2019est 300 \u00e0 500 \u20ac/mois de co\u00fbt cach\u00e9.',
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
                  R&egrave;gle simple
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Quand vous comparez deux offres de setting, ajoutez les outils, le temps de management
                  et le co&ucirc;t du turnover. L&apos;offre la moins ch&egrave;re en surface est rarement
                  la moins ch&egrave;re en r&eacute;alit&eacute;. L&apos;article
                  sur <a href="/ressources/cout-setter-b2b-prix" className="text-accent hover:underline transition-colors">le co&ucirc;t d&apos;un setter B2B</a> d&eacute;taille
                  chaque mod&egrave;le de r&eacute;mun&eacute;ration.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes sur le prix du setting LinkedIn
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
                { href: '/tarifs', label: 'Tarifs Setting : programmes, garanties et grille de prix' },
                { href: '/ressources/cout-setter-b2b-prix', label: "Co\u00fbt d'un setter B2B en 2026 : les vrais chiffres" },
                { href: '/ressources/setting-humain-vs-automatisation-linkedin', label: 'Setting humain vs automatisation LinkedIn : le vrai comparatif' },
                { href: '/ressources/sdr-interne-vs-externalise', label: 'SDR interne vs SDR externalis\u00e9 : le comparatif co\u00fbt r\u00e9el en 2026' },
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
              Vous voulez savoir combien &ccedil;a co&ucirc;terait pour vous ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              On regarde votre ICP, votre panier moyen et votre processus de vente.
              En 20 minutes, vous saurez si le setting est rentable pour votre activit&eacute;
              et quel mod&egrave;le est adapt&eacute;. Pas d&apos;engagement, pas de pitch.
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

        </div>
      </main>
      <Footer />
    </>
  )
}
