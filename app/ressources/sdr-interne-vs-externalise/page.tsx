import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'SDR interne vs externalisé : coût réel et ROI | ChallengersLab',
  description:
    'Recruter un SDR ou externaliser ? Salaire, charges, ramp-up, turnover : le comparatif honnête avec les vrais chiffres.',
  alternates: {
    canonical: 'https://setting.live/ressources/sdr-interne-vs-externalise',
  },
  openGraph: {
    title: 'SDR interne vs SDR externalisé | ChallengersLab',
    description: 'Le comparatif coût réel entre recruter un SDR et externaliser sa prospection B2B.',
    locale: 'fr_FR',
    type: 'article',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://setting.live/ressources/sdr-interne-vs-externalise',
  headline: 'SDR interne vs SDR externalisé : le comparatif coût réel en 2026',
  description:
    'Recruter un SDR ou externaliser sa prospection B2B ? Salaire, charges patronales, ramp-up, turnover : les vrais chiffres côte à côte.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://setting.live',
  },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://setting.live/ressources/sdr-interne-vs-externalise',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://setting.live/ressources/sdr-interne-vs-externalise',
  },
}

const faqItems = [
  {
    question: 'Combien coûte un SDR en France en 2026 ?',
    answer:
      'Un SDR junior en France est rémunéré entre 30 000 et 38 000 euros brut par an. Avec les charges patronales (environ 45 %), le coût réel pour l\'employeur se situe entre 43 500 et 55 000 euros. En ajoutant les outils (Sales Navigator, CRM, enrichissement) et le temps de management, le coût total année 1 dépasse facilement 50 000 à 65 000 euros — sans compter la période de ramp-up de 3 à 6 mois.',
  },
  {
    question: 'Quelle est la durée moyenne d\'un SDR en poste ?',
    answer:
      'La durée moyenne d\'un SDR en poste est de 14 à 18 mois en France. C\'est l\'un des postes commerciaux avec le turnover le plus élevé. Quand le SDR part, vous recommencez le recrutement, l\'onboarding et la période de ramp-up. Ce cycle coûte plusieurs mois de productivité à chaque fois.',
  },
  {
    question: 'Peut-on combiner SDR interne et SDR externalisé ?',
    answer:
      'Oui, c\'est une configuration qui fonctionne bien pour les entreprises en croissance. L\'externalisé gère la prospection froide LinkedIn pendant que le SDR interne traite l\'inbound et les comptes stratégiques. Cela évite de sur-solliciter l\'interne sur des tâches répétitives et permet de scaler la prospection sans recruter immédiatement.',
  },
  {
    question: 'L\'externalisé connaît-il assez bien mon produit ?',
    answer:
      'Un bon prestataire calibre son approche sur votre offre lors des deux premières semaines : ICP, arguments, objections fréquentes, ton. La connaissance produit est suffisante pour qualifier et booker des RDV. Elle ne sera pas aussi profonde qu\'un SDR interne formé depuis 6 mois, mais elle est largement suffisante pour les étapes de prospection et de prise de contact initiale.',
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
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://setting.live/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'SDR interne vs externalisé',
      item: 'https://setting.live/ressources/sdr-interne-vs-externalise',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SdrInterneVsExternalisePage() {
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
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">SDR interne vs externalisé</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              SDR interne vs SDR externalisé : le comparatif coût réel
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Recruter un SDR ou externaliser sa prospection ? Ce n&apos;est pas une question
              idéologique. C&apos;est une question de chiffres. Voici le comparatif honnête,
              avec les vrais coûts des deux côtés.
            </p>
            <AuthorBlock date="2026-03-19" readTime="8 min de lecture" dateLabel="19 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Définition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              C&apos;est quoi un SDR ?
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              SDR signifie Sales Development Representative. Le rôle : prospecter, qualifier des leads et
              booker des rendez-vous pour les commerciaux qui closent. En France, le titre est moins répandu
              que &ldquo;commercial&rdquo; ou &ldquo;setter&rdquo;, mais la mission est identique. C&apos;est
              la première étape du pipeline commercial.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '50–75k€', label: 'coût réel SDR interne année 1' },
              { stat: '3–6 mois', label: 'ramp-up avant autonomie' },
              { stat: '14–18 mois', label: 'durée moyenne en poste SDR' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Recruter un SDR interne */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Option 1 — Recruter un SDR interne
              </h2>
              <p className="mb-4">
                Le recrutement d&apos;un SDR en interne est souvent la première chose à laquelle on pense
                quand on veut structurer sa prospection. C&apos;est légitime. Mais le coût réel dépasse
                largement le salaire affiché.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Salaire brut',
                    desc: '30 000 à 45 000 €/an pour un profil junior à confirmé en France. La fourchette basse correspond à un premier poste SDR. La fourchette haute, à un profil avec 2 à 3 ans d\'expérience.',
                  },
                  {
                    title: 'Charges patronales',
                    desc: 'Environ 45 % en plus. Un salaire brut de 35 000 € coûte réellement 50 750 € à l\'employeur avant tout autre frais.',
                  },
                  {
                    title: 'Période de ramp-up',
                    desc: 'Un SDR met 3 à 6 mois avant d\'être vraiment autonome. Pendant cette période, il travaille, apprend, fait des erreurs. Les premiers résultats arrivent au mois 4 ou 5 dans le meilleur des cas.',
                  },
                  {
                    title: 'Outils',
                    desc: 'Sales Navigator (100 €/mois), CRM, outils d\'enrichissement et de recherche de leads. Comptez environ 200 à 300 €/mois d\'infrastructure minimum.',
                  },
                  {
                    title: 'Management',
                    desc: 'Former, suivre les KPIs, corriger les messages, retravailler les scripts : 2 à 5 heures par semaine du fondateur ou du manager commercial. Ce temps a une valeur, même s\'il ne figure pas sur la facture.',
                  },
                  {
                    title: 'Turnover',
                    desc: 'La durée moyenne d\'un SDR en poste en France est de 14 à 18 mois. Quand il part, vous recommencez : recrutement, onboarding, ramp-up. Chaque départ coûte plusieurs mois de productivité.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
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
                  Total réel année 1
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Entre 50 000 et 75 000 € tout compris (salaire chargé, outils, management),
                  avec des résultats attendus à partir du mois 4 à 6. Ce n&apos;est pas un mauvais
                  investissement sur 3 ans. Mais c&apos;est un engagement lourd dès le départ.
                </p>
              </div>
            </section>

            {/* Section 2 — Externaliser */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Option 2 — Externaliser (SDR as a Service)
              </h2>
              <p className="mb-4">
                L&apos;externalisation de la prospection repose sur un modèle simple : vous payez un
                forfait mensuel pour obtenir des rendez-vous qualifiés, sans recruter ni gérer.
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Forfait mensuel',
                    desc: 'Entre 500 et 2 000 €/mois selon le prestataire, le volume de prospection et le niveau de qualification attendu. Certains modèles incluent une prime par RDV livré.',
                  },
                  {
                    title: 'Pas de charges sociales',
                    desc: 'Vous payez une prestation, pas un salaire. Pas de charges patronales, pas de mutuelle, pas de congés payés à provisionner.',
                  },
                  {
                    title: 'Opérationnel en 1 à 2 semaines',
                    desc: 'Le calibrage initial prend quelques jours : ICP, arguments, messages. Les premières prises de contact partent dans la semaine qui suit. Les premiers RDV arrivent dans les 2 à 3 semaines.',
                  },
                  {
                    title: 'Résiliation simple',
                    desc: 'Si les résultats ne sont pas au rendez-vous, vous arrêtez le mois suivant. Pas de procédure de licenciement, pas de préavis de 3 mois, pas d\'indemnités.',
                  },
                  {
                    title: 'Management minimal',
                    desc: 'Un briefing hebdomadaire ou bimensuel suffit. 1 heure par semaine au maximum, contre 2 à 5 heures pour un SDR interne à former.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="text-accent shrink-0 mt-0.5 font-semibold text-sm">→</span>
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
                  Total année 1
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Entre 6 000 et 24 000 € selon le forfait choisi. Les résultats arrivent dès
                  les premières semaines, pas après 6 mois de ramp-up.
                </p>
              </div>
            </section>

            {/* Section 3 — Comparatif chiffré */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comparatif chiffré
              </h2>
              <p className="mb-6">
                Voici les deux options côte à côte sur les critères qui comptent vraiment.
              </p>

              <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-bg-secondary border-b border-white/[0.06]">
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary">
                    Critère
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary border-l border-white/[0.06]">
                    SDR interne
                  </div>
                  <div className="px-4 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-accent border-l border-white/[0.06]">
                    SDR externalisé
                  </div>
                </div>
                {[
                  {
                    critere: 'Coût année 1',
                    interne: '50–75 k€',
                    externe: '6–24 k€',
                  },
                  {
                    critere: 'Premiers résultats',
                    interne: 'Mois 4–6',
                    externe: 'Semaine 1–2',
                  },
                  {
                    critere: 'Risque si ça ne marche pas',
                    interne: 'Licenciement coûteux',
                    externe: 'On arrête le mois suivant',
                  },
                  {
                    critere: 'Management requis',
                    interne: '2–5 h/semaine',
                    externe: '1 h/semaine max',
                  },
                  {
                    critere: 'Connaissance produit',
                    interne: 'Profonde (avantage)',
                    externe: 'Suffisante pour prospecter',
                  },
                  {
                    critere: 'Pour monter en volume',
                    interne: 'Recruter un 2e SDR',
                    externe: 'Augmenter le forfait',
                  },
                ].map(({ critere, interne, externe }, i) => (
                  <div
                    key={critere}
                    className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-bg-primary' : 'bg-bg-secondary/40'}`}
                  >
                    <div className="px-4 py-4 font-sans text-sm text-text-secondary leading-snug">
                      {critere}
                    </div>
                    <div className="px-4 py-4 font-sans text-sm text-text-secondary leading-snug border-l border-white/[0.06]">
                      {interne}
                    </div>
                    <div className="px-4 py-4 font-sans text-sm text-text-primary leading-snug border-l border-white/[0.06]">
                      {externe}
                    </div>
                  </div>
                ))}
              </div>

              <p>
                Ce tableau résume les chiffres, mais il faut lire ce qui se passe vraiment à l&apos;usage.
                Voici dans quels cas chaque option s&apos;impose.
              </p>
            </section>

            {/* Section 4 — Quand recruter en interne */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand recruter un SDR en interne
              </h2>
              <p className="mb-4">
                Le recrutement en interne est pertinent dans des situations précises.
                Ce n&apos;est pas la mauvaise option. C&apos;est simplement une option qui demande
                certaines conditions pour fonctionner.
              </p>

              <div className="space-y-3 my-6">
                {[
                  'Vous avez un sales manager capable de former et suivre un junior au quotidien.',
                  'Vous traitez plus de 50 leads inbound par mois et avez besoin de quelqu\'un à temps plein pour les qualifier.',
                  'Votre cycle de vente est long et complexe : le SDR doit connaître le produit en profondeur pour avoir des conversations techniques.',
                  'Vous pouvez absorber 6 mois de ramp-up sans pression sur les résultats immédiats.',
                  'Vous voulez un contrôle total sur les messages envoyés, la cadence et la représentation de votre marque.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5 text-sm font-semibold">→</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <p>
                Si toutes ces conditions sont réunies, un SDR interne sur 3 ans est probablement
                la meilleure décision que vous prendrez. Le coût se lisse, la connaissance s&apos;accumule,
                et vous construisez une vraie compétence commerciale en interne.
              </p>
            </section>

            {/* Section 5 — Quand externaliser */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quand externaliser sa prospection
              </h2>
              <p className="mb-4">
                L&apos;externalisation répond à des situations différentes. Elle n&apos;est pas
                un choix par défaut. C&apos;est le bon choix dans ces cas précis.
              </p>

              <div className="space-y-3 my-6">
                {[
                  'Vous êtes fondateur ou freelance et vous n\'avez pas le temps de manager quelqu\'un. La prospection doit tourner sans vous.',
                  'Vous avez besoin de résultats dans les 30 prochains jours, pas dans 6 mois.',
                  'Votre budget mensuel est sous les 3 000 €. Un SDR interne n\'est pas finançable à ce stade.',
                  'Vous voulez tester un marché ou un segment avant de vous engager sur un recrutement.',
                  'Votre offre B2B se vend entre 2 000 et 50 000 €. Le ticket justifie la prospection directe, sans nécessiter un SDR ultra-spécialisé.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-accent shrink-0 mt-0.5 text-sm font-semibold">→</span>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <p>
                L&apos;externalisation est aussi pertinente comme transition : vous externalisez
                en attendant d&apos;avoir le volume et la structure pour recruter. Beaucoup
                d&apos;entreprises démarrent ainsi, puis internalisent quand la maturité est là.
              </p>
            </section>

            {/* Section 6 — Le piège du moins cher */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le piège du &ldquo;moins cher&rdquo;
              </h2>
              <p className="mb-4">
                On compare souvent le coût affiché d&apos;un SDR interne au coût affiché d&apos;un service
                externalisé, et on conclut que l&apos;interne coûte plus cher. C&apos;est parfois vrai.
                Mais la comparaison pertinente n&apos;est pas celle-là.
              </p>
              <p className="mb-4">
                Un SDR interne à 40 000 €/an qui prend 6 mois à être autonome ne produit rien pendant
                les 6 premiers mois, tout en coûtant 20 000 € de salaire chargé. Un service externalisé
                à 1 000 €/mois qui livre des rendez-vous dès la semaine 2 a déjà généré 5 000 € de
                valeur potentielle en pipeline pendant cette même période.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-accent/20 my-6">
                <p className="font-sans text-text-primary text-sm font-semibold text-center leading-relaxed">
                  La vraie métrique : coût par rendez-vous qualifié livré.
                </p>
              </div>

              <p className="mb-4">
                Si un programme externalisé à 1 500 €/mois livre 8 RDV qualifiés, le coût par RDV
                est de 187 €. Si un SDR interne coûte 5 000 €/mois (salaire chargé + outils) et livre
                10 RDV qualifiés après ramp-up, le coût par RDV est de 500 €. Le moins cher à l&apos;embauche
                n&apos;est pas le moins cher à l&apos;usage.
              </p>
              <p>
                Ce calcul ne plaide pas systématiquement pour l&apos;externalisation. Il plaide pour
                comparer ce qui est comparable : le coût par RDV qualifié, pas le prix facial de chaque option.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
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

          </article>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/ressources/cout-setter-b2b-prix', label: "Coût d'un setter B2B en 2026 : les vrais chiffres" },
                { href: '/tarifs', label: 'Tarifs ChallengersLab : forfaits et garantie résultats' },
                { href: '/externaliser-prospection-linkedin', label: 'Externaliser sa prospection LinkedIn B2B' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Tester l&apos;externalisé sans engagement long terme
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Programme de setting LinkedIn externalisé. Opérationnel en 2 semaines.
              Garantie 5 RDV qualifiés minimum par mois. Résiliation libre sans préavis.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Voir le programme et les tarifs →
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              ← Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
