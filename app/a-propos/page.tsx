import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'À propos de ChallengersLab | Setting et closing B2B',
  description:
    "ChallengersLab aide les fondateurs, freelances et solopreneurs B2B à remplir leur agenda de RDV qualifiés via une méthode de setting LinkedIn signal-based. Qui on est, d'où ça vient, et comment ça marche.",
  openGraph: {
    title: 'À propos de ChallengersLab',
    description:
      "ChallengersLab aide les fondateurs, freelances et solopreneurs B2B à remplir leur agenda de RDV qualifiés via une méthode de setting LinkedIn signal-based.",
    locale: 'fr_FR',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/a-propos',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abraham',
  jobTitle: 'Fondateur ChallengersLab',
  url: 'https://challengerslab.fr/a-propos',
  worksFor: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  knowsAbout: [
    'Setting commercial B2B',
    'Prospection LinkedIn',
    'Closing B2B',
    'Signaux d\'achat LinkedIn',
    'Vente pour solopreneurs',
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ChallengersLab',
  url: 'https://challengerslab.fr',
  description:
    "ChallengersLab construit et opère des programmes de setting commercial B2B pour fondateurs, freelances et solopreneurs B2B. Setter dédié, méthode LinkedIn signal-based, IA comme co-rédacteur, coaching closing.",
  founder: {
    '@type': 'Person',
    name: 'Abraham',
  },
  areaServed: 'FR',
  serviceType: 'Setting commercial B2B externalisé',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'À propos',
      item: 'https://challengerslab.fr/a-propos',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, orgSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">À propos</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              ChallengersLab
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Ce qu&apos;on fait, pourquoi, et comment
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              ChallengersLab aide les fondateurs, freelances et solopreneurs B2B à remplir leur agenda de RDV qualifiés
              sans passer leurs matinées sur LinkedIn. Setter dédié, méthode signal-based, IA comme
              co-rédacteur, coaching closing selon la formule.
            </p>
          </header>

          {/* Founder section */}
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Photo placeholder */}
              <div className="shrink-0 w-24 h-24 rounded-2xl bg-bg-secondary border border-black/8 flex items-center justify-center">
                <span className="font-serif text-3xl text-accent">A</span>
              </div>
              <div>
                <h2 className="font-serif text-h3 text-text-primary mb-2">Abraham</h2>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Fondateur · ChallengersLab
                </p>
                <p className="font-sans text-text-muted leading-relaxed mb-4">
                  J&apos;ai passé plusieurs années à faire de la prospection commerciale B2B — d&apos;abord pour
                  moi, ensuite pour des clients. À un moment, j&apos;ai arrêté d&apos;envoyer des messages
                  génériques et j&apos;ai commencé à construire quelque chose de plus précis : détecter
                  qui montre déjà un signe d&apos;intérêt, contacter uniquement ces personnes, valider
                  chaque message à la main avant l&apos;envoi.
                </p>
                <p className="font-sans text-text-muted leading-relaxed">
                  ChallengersLab, c&apos;est la formalisation de cette méthode. Un programme qui combine
                  un setter humain, une approche signal-based sur LinkedIn, et Claude comme
                  co-rédacteur de messages. Le résultat : des RDV qualifiés dès la première semaine,
                  sans brûler les leads avec des templates copier-coller.
                </p>
              </div>
            </div>
          </section>

          {/* Résultats */}
          <section className="mb-16">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Ce que ça donne en pratique
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { stat: '20+', label: 'clients accompagnés en 2026' },
                { stat: '2–4', label: 'RDV qualifiés par semaine en régime de croisière' },
                { stat: '> 20 %', label: 'taux de réponse sur signal vs 3% sans méthode' },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-black/8">
                  <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                  <p className="font-sans text-xs text-text-muted leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {[
                {
                  profil: 'Infopreneur · formation vente B2B',
                  resultat: '3 RDV qualifiés dès la première semaine, 2 signés dans le mois. Avant le programme : 0 à 1 RDV par semaine en prospectant lui-même.',
                },
                {
                  profil: 'Consultant indépendant · accompagnement RH',
                  resultat: "Agenda rempli à 80% en 6 semaines. Le client a arrêté de prospecter lui-même pour se concentrer sur les missions. Le setter gère l'intégralité du pipeline en amont.",
                },
                {
                  profil: 'Solopreneur · conseil en stratégie digitale',
                  resultat: "Premier RDV à J+4. 4 clients signés sur les 3 premiers mois. Avant : prospection irrégulière, pipeline à sec les mois sans contenu viral.",
                },
              ].map(({ profil, resultat }) => (
                <div key={profil} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    {profil}
                  </p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">{resultat}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Méthode */}
          <section className="mb-16">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              La méthode, concrètement
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Ce n&apos;est pas du cold email. Ce n&apos;est pas de l&apos;automatisation. Ce n&apos;est pas
              &ldquo;envoyer 200 messages par jour et voir ce qui répond&rdquo;.
            </p>

            <div className="space-y-5">
              {[
                {
                  step: '01',
                  title: 'Détection des signaux',
                  desc: "Reactin capture qui a interagi avec votre contenu. Spyer surveille les comptes de votre secteur. Sales Navigator remonte les changements de poste et signaux récents. L'IA trie et priorise. On contacte les prospects qui ont déjà levé la main, pas une liste froide.",
                },
                {
                  step: '02',
                  title: 'Messages ancrés sur un fait',
                  desc: "Chaque message est construit sur un signal précis tiré du profil ou d'un post récent. 5 phrases max. Pas de pitch. Pas de copier-coller. Claude propose un draft, le setter valide avant envoi. Aucun message ne part sans ce regard humain.",
                },
                {
                  step: '03',
                  title: 'Qualification et passage au closeur',
                  desc: "Les leads sont qualifiés sur 5 niveaux de maturité. Les niveaux 4–5 sont traités en priorité pour un appel. Le closeur reçoit le contexte complet : ce qui a été dit, ce qui a intéressé, ce qui a résisté.",
                },
                {
                  step: '04',
                  title: 'Amélioration continue',
                  desc: "Le journal de bord du setter alimente la base de connaissance Claude. Ce qui fonctionne est codifié. Ce qui rate est compris. Le système devient plus précis chaque semaine — il apprend votre marché.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-text-muted/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pour qui */}
          <section className="mb-16">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pour qui c&apos;est fait — et pour qui ce ne l&apos;est pas
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Ça marche pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    'Fondateurs de startups avec une offre B2B à 2 000 € ou plus',
                    'Freelances et consultants B2B qui n\'ont plus de temps pour prospecter',
                    'Créateurs de micro-SaaS qui lancent leur acquisition',
                    'Solopreneurs qui ont un closeur mais pas de setter',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-black/8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted/60 mb-3">
                  Ça ne marche pas pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    'Offres B2C ou grand public',
                    'Activités qui démarrent sans offre définie',
                    'Ceux qui veulent de l\'automatisation complète sans contact humain',
                    'Secteurs où LinkedIn n\'est pas le canal des acheteurs',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-muted/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Ressources */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pour comprendre la méthode en détail
            </h2>
            <div className="space-y-3">
              {[
                { href: '/blog/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/blog/setter-b2b-definition', label: "C'est quoi un setter en B2B ? Rôle, missions et coût" },
                { href: '/blog/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
                { href: '/blog/ia-methode-humain-setting-linkedin', label: "IA, méthode et humain : les 3 couches d'un système de setting" },
                { href: '/blog/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/glossaire', label: 'Glossaire setting & closing B2B : setter, closer, signal d\'achat, ICP…' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez voir si c&apos;est fait pour vous ?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Un appel de 30 minutes pour comprendre votre marché, votre offre et ce que
              le programme pourrait donner dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
