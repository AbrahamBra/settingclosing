import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Challenger Sale : définition et méthode | Setting',
  description:
    "Challenger Sale : méthode B2B issue d'une étude sur 6 000 commerciaux. Teach, Tailor, Take Control et application concrète.",
  openGraph: {
    title: 'Challenger Sale : définition et méthode | Setting',
    description:
      "Issue d'une étude sur 6 000 commerciaux, la méthode Challenger Sale identifie le profil qui surperforme et ses 3 composantes clés.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/challenger-sale-definition',
    languages: {
      'fr': 'https://www.setting.live/ressources/challenger-sale-definition',
      'x-default': 'https://www.setting.live/ressources/challenger-sale-definition',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/challenger-sale-definition',
  headline: "Qu'est-ce que le Challenger Sale ?",
  description:
    "Le Challenger Sale est une méthode de vente B2B développée par Matthew Dixon et Brent Adamson (CEB, 2011), basée sur une étude portant sur 6 000 commerciaux. Elle identifie 5 profils de vendeurs et démontre que les top performers challengent leurs prospects plutôt que de les accompagner.",
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-16',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/challenger-sale-definition',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/challenger-sale-definition',
  },
  image: 'https://www.setting.live/ressources/challenger-sale-definition/opengraph-image',
}

const faqItems = [
  {
    question: 'Le Challenger Sale fonctionne-t-il pour les petits deals ?',
    answer:
      "La méthode a été conçue pour les ventes complexes avec plusieurs interlocuteurs et des cycles longs. Sur des deals à moins de 500 €, l'approche peut être allégée — mais deux composantes restent universelles quelle que soit la taille du deal : la discovery structurée (Teach) et le travail sur la valeur perçue (Tailor).",
  },
  {
    question: 'Comment devient-on un Challenger ?',
    answer:
      "Devenir un Challenger s'apprend — mais ça ne s'improvise pas. Il faut d'abord maîtriser la discovery (poser les bonnes questions avant de pitcher), ensuite structurer son pricing pour augmenter la valeur perçue, et enfin pratiquer la tension constructive sur les objections. C'est l'objet du programme Closing de Setting, structuré sur 3 mois.",
  },
  {
    question: 'Challenger Sale vs SPIN Selling : quelles différences ?',
    answer:
      "SPIN Selling (Neil Rackham, 1988) propose un cadre de questions pour découvrir les besoins : Situation, Problème, Implication, Need-payoff. Le Challenger Sale va plus loin : au lieu de juste découvrir les besoins, le Challenger remet en question la façon dont le client perçoit son problème. Les deux méthodes sont complémentaires — SPIN travaille la discovery, Challenger travaille la posture.",
  },
  {
    question: 'Faut-il être agressif pour être un Challenger ?',
    answer:
      "Non. La tension constructive du Challenger Sale n'est pas de l'agressivité — c'est de l'assertivité. Le Challenger dit ce que le client ne veut pas forcément entendre, mais avec des données et une perspective étayée. Il ne cède pas au premier signe de résistance, mais reste dans une posture d'expert, pas de commercial pressé.",
  },
  {
    question: "Est-ce que le Challenger Sale s'applique en inbound ?",
    answer:
      "Oui, mais différemment. En inbound, le prospect est déjà en demande — il ne faut donc pas challenger sa perception du problème de la même façon qu'en outbound. L'approche s'applique surtout à la phase de discovery : structurer les bonnes questions pour faire prendre conscience au prospect de l'ampleur réelle de son problème, et calibrer la valeur perçue de la solution.",
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
      name: "Qu'est-ce que le Challenger Sale ?",
      item: 'https://www.setting.live/ressources/challenger-sale-definition',
    },
  ],
}

// ─── Content Data ─────────────────────────────────────────────────────────────

const profiles = [
  {
    name: 'Le Hard Worker',
    desc: "Travaille dur, ne compte pas ses heures, se forme continuellement. Présent dans tous les marchés, régulièrement dans la moyenne haute. Déterminé mais sans insight particulier sur le business du client.",
    top: false,
  },
  {
    name: 'Le Challenger',
    desc: "Apporte un point de vue nouveau sur le business du client. Pousse à penser différemment. À l'aise dans les tensions constructives. Remet en question les certitudes du prospect avec des données.",
    top: true,
  },
  {
    name: 'Le Relationship Builder',
    desc: "Priorité à la relation, évite les frictions, veut être apprécié. Le profil le plus courant — et le moins performant sur les ventes complexes où la complaisance ne signe pas.",
    top: false,
  },
  {
    name: 'Le Lone Wolf',
    desc: "Suit ses propres règles, très autonome. Peut sur-performer ponctuellement, mais difficile à manager et à faire évoluer.",
    top: false,
  },
  {
    name: 'Le Problem Solver',
    desc: "Très orienté service client. Excellent pour résoudre les problèmes existants, moins pour créer de nouvelles opportunités ou vendre un changement de cap.",
    top: false,
  },
]

const components = [
  {
    label: 'Teach',
    title: 'Apporter une perspective nouvelle',
    body: "Le Challenger n'arrive pas avec une liste de fonctionnalités. Il arrive avec une insight sur le business du client : quelque chose que le prospect ne sait pas encore sur son propre marché ou ses propres processus. Cette perspective crée un besoin là où il n'y en avait pas un de visible. C'est l'opposé du pitch de features.",
    example: "Plutôt que de pitcher « notre outil de prospection », le Challenger ouvre avec : « La majorité de vos concurrents perdent 30 % de leurs leads parce qu'ils n'ont pas de scoring — voici ce qu'ils ont changé. »",
  },
  {
    label: 'Tailor',
    title: 'Adapter le message à chaque interlocuteur',
    body: "Le même insight ne résonne pas de la même façon selon qu'on parle au fondateur, au directeur commercial, ou au responsable marketing. Chacun a ses priorités, ses indicateurs, ses contraintes. Le Challenger adapte son angle, son vocabulaire et ses exemples à chaque profil.",
    example: "Au fondateur : impact sur la croissance et l'autonomie. Au directeur commercial : impact sur le taux de conversion et le cycle de vente. Au marketing : impact sur la qualité des leads entrants.",
  },
  {
    label: 'Take Control',
    title: 'Prendre le contrôle de la conversation',
    body: "Les commerciaux classiques sont accommodants sur le prix et le timing. Le Challenger maintient une tension constructive. Il ne cède pas au premier signe de résistance et est à l'aise pour recadrer la conversation quand elle dérive vers le prix avant d'avoir posé les bases de la valeur.",
    example: "Face à « votre prix est trop élevé », le Relationship Builder baisse le tarif. Le Challenger répond : « Avant de parler prix, j'aimerais qu'on quantifie ce que ça vous coûte aujourd'hui de ne pas régler ce problème. »",
  },
]

export default function ChallengerSalePage() {
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
              <li className="text-text-primary">Challenger Sale</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Qu&apos;est-ce que le Challenger Sale ?
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La méthode de vente B2B issue d&apos;une étude sur 6 000 commerciaux — et pourquoi
              le profil qui surperforme n&apos;est pas celui qu&apos;on attendait.
            </p>
            <AuthorBlock date="2026-03-16" readTime="9 min de lecture" dateLabel="16 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition Block */}
          <div className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>Challenger Sale</strong> est une méthode de vente B2B développée par
              Matthew Dixon et Brent Adamson (CEB, 2011), basée sur une étude portant sur
              6 000 commerciaux. Elle identifie 5 profils de vendeurs et démontre que les
              top performers ne vendent pas en suivant le client — ils le challengent : ils apportent
              une perspective nouvelle, adaptent leur discours et prennent le contrôle de
              la conversation de vente.
            </p>
          </div>

          {/* Section 1 — L'étude */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              L&apos;étude à l&apos;origine de la méthode
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En 2009, le Corporate Executive Board (CEB) lance une étude massive pour comprendre
              ce qui différencie les meilleurs commerciaux des autres. 6 000 commerciaux.
              90 entreprises. Plusieurs secteurs B2B.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La question de départ : est-ce que les top performers ont des comportements,
              des attitudes ou des approches spécifiques — ou s&apos;agit-il juste de talent brut ?
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Résultat : oui, il existe un profil distinctif. Et ce profil
              n&apos;est pas celui que la plupart des managers auraient recruté en premier.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le profil Challenger représente 40 % des top performers commerciaux.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Le Relationship Builder — le profil le plus répandu et le plus recruté — n&apos;en
                représente que 7 % sur les ventes complexes. (Source : The Challenger Sale,
                Dixon &amp; Adamson, CEB 2011)
              </p>
            </div>
          </section>

          {/* Section 2 — Les 5 profils */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 profils de vendeurs
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              L&apos;étude CEB classe tous les commerciaux dans l&apos;un de ces 5 profils.
              Un vendeur peut avoir des traits de plusieurs profils, mais l&apos;un d&apos;eux domine toujours.
            </p>
            <div className="space-y-4">
              {profiles.map((profile, i) => (
                <div
                  key={i}
                  className={`rounded-xl px-6 py-5 border ${
                    profile.top
                      ? 'border-accent/30 bg-accent/5'
                      : 'border-white/[0.06] bg-bg-secondary'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-sans font-semibold text-text-primary">{profile.name}</p>
                    {profile.top && (
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                        Top performer
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{profile.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Les 3 composantes */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 3 composantes du Challenger Sale
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-8">
              Le profil Challenger se définit par 3 comportements distincts. Chacun s&apos;apprend
              et se pratique.
            </p>
            <div className="space-y-10">
              {components.map((comp, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 bg-accent/5 px-3 py-1 rounded-full">
                      {comp.label}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                    {comp.title}
                  </h3>
                  <p className="font-sans text-text-secondary leading-relaxed mb-4">{comp.body}</p>
                  <div className="border-l-2 border-white/[0.06] pl-4">
                    <p className="font-sans text-text-secondary text-sm italic leading-relaxed">
                      {comp.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Application solopreneur */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Comment l&apos;appliquer quand on est solopreneur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La méthode Challenger Sale a été conçue pour les grandes équipes commerciales.
              Mais ses principes s&apos;appliquent directement aux solopreneurs B2B — à condition
              d&apos;adapter le format à la réalité d&apos;un one-to-one.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                {
                  label: 'Teach →',
                  desc: "Prépare une perspective sur le problème du prospect AVANT chaque appel. Pas de pitch d'entrée de jeu. Commence par une observation sur leur business, sourcée si possible.",
                },
                {
                  label: 'Tailor →',
                  desc: "Fais 10 minutes de recherche avant chaque appel : LinkedIn, site web, dernier post, actualité du secteur. Adapte ton angle d'attaque selon le profil.",
                },
                {
                  label: 'Take Control →',
                  desc: "Prépare tes réponses aux 3 objections les plus fréquentes. La discovery doit être pilotée, pas subie. Tu poses les questions — le prospect révèle le problème.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans">
                  <span className="text-accent font-semibold shrink-0">{item.label}</span>
                  <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="font-sans text-text-secondary leading-relaxed">
              Setting applique cette méthode dans le programme Closing : un mois par composante,
              avec 2h de coaching par semaine dont une heure en situation réelle sur un appel prospect.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mt-4">
              La méthode Challenger Sale couvre la conversion — en amont, c&apos;est le <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline transition-colors">setting commercial B2B</a> qui génère les rendez-vous qualifiés sur lesquels vous l&apos;appliquez.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14" id="faq">
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
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/ressources/methodes-vente-b2b', label: 'Méthodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
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
              Appliquer la méthode Challenger à votre activité
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              3 mois. Un mois par composante. 2h de coaching par semaine dont une heure
              sur un vrai appel prospect. Vous sortez avec une méthode, pas juste des notes.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Améliorer mon closing →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
