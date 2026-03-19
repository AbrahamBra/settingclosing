import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'Notre équipe setting et closing | ChallengersLab',
  description:
    "Trois expertises, un pipeline. Abdelhay (closing), Brahim (setting), Abraham (IA). ChallengersLab structure la prospection B2B autour de trois métiers.",
  openGraph: {
    title: 'Notre équipe setting et closing | ChallengersLab',
    description:
      "Trois expertises, un pipeline. Comment ChallengersLab structure la prospection B2B autour de trois métiers distincts.",
    locale: 'fr_FR',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/a-propos',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const foundersSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdelhay',
    jobTitle: 'Performance commerciale & Closing, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Closing B2B', 'Négociation commerciale', 'Performance commerciale'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brahim',
    jobTitle: 'Setting, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Setting commercial B2B', 'Prospection LinkedIn', 'Signaux d\'achat LinkedIn'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abraham',
    jobTitle: 'Automatisation & IA, ChallengersLab',
    url: 'https://challengerslab.fr/a-propos',
    worksFor: { '@type': 'Organization', name: 'ChallengersLab', url: 'https://challengerslab.fr' },
    knowsAbout: ['Automatisation B2B', 'IA pour la prospection', 'Systèmes de setting', 'Prospection LinkedIn'],
  },
]

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ChallengersLab',
  url: 'https://challengerslab.fr',
  description:
    "ChallengersLab construit et opère des programmes de setting commercial B2B pour fondateurs, freelances et solopreneurs B2B. Setter dédié, méthode LinkedIn signal-based, IA comme co-rédacteur, coaching closing.",
  founder: [
    { '@type': 'Person', name: 'Abdelhay' },
    { '@type': 'Person', name: 'Brahim' },
    { '@type': 'Person', name: 'Abraham' },
  ],
  areaServed: 'FR',
  serviceType: 'Setting commercial B2B externalisé',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@challengerslab.fr',
    contactType: 'customer service',
    availableLanguage: 'French',
    url: 'https://www.linkedin.com/company/challengerslab',
  },
  sameAs: [
    'https://www.linkedin.com/company/challengerslab',
  ],
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const founders = [
  {
    initials: 'AH',
    name: 'Abdelhay',
    role: 'Performance commerciale & Closing',
    bio: "Abdelhay gère le closing. Son parcours, ce qui l'a amené là, comment il aborde un deal — c'est lui qui complète cette partie. En attendant, ce qu'il faut savoir\u00a0: c'est le dernier maillon avant la signature.",
  },
  {
    initials: 'B',
    name: 'Brahim',
    role: 'Setting',
    bio: "Brahim fait le setting. Comment il détecte les bons signaux, pourquoi il contacte ces gens-là et pas d'autres, sa logique de qualification — à lui de raconter. Ce qu'on peut dire\u00a0: aucun message ne part sans son regard.",
  },
  {
    initials: 'A',
    name: 'Abraham',
    role: 'Automatisation & IA',
    bio: "Abraham construit le système. Les outils, les automatisations, l'IA qui trie et priorise — il branche tout ça ensemble. Son parcours et sa vision, il les posera ici. En attendant\u00a0: c'est lui qui fait tourner la machine.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([...foundersSchema, orgSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
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
            <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
              Trois expertises, un pipeline
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              Un setter qui ouvre les portes, un closer qui signe, un système qui fait
              tourner le tout. C&apos;est comme ça qu&apos;on remplit des agendas.
            </p>
          </header>

          {/* Fondateurs */}
          <section className="mb-16">
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-8">
              L&apos;équipe
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {founders.map(({ initials, name, role, bio }) => (
                <div key={name} className="bg-bg-secondary rounded-2xl p-6 border border-white/[0.06]">
                  <div className="flex flex-col items-center text-center gap-3 mb-5">
                    <div className="shrink-0 w-16 h-16 rounded-xl bg-bg-primary border border-accent/20 flex items-center justify-center">
                      <span className="font-sans font-extrabold text-2xl text-accent">{initials}</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-text-primary">{name}</h3>
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                        {role}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-dashed border-accent/30 bg-bg-primary p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent text-sm">&#9998;</span>
                      <span className="font-sans text-xs font-semibold text-accent">À compléter</span>
                    </div>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">
                      {bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Complémentarité */}
          <section className="mb-16">
            <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
                Pourquoi nous trois
              </p>
              <div className="space-y-4 font-sans text-text-muted text-sm leading-relaxed">
                <p>
                  En B2B, la prospection ça se fait encore souvent au feeling. Un fondateur
                  qui envoie des messages quand il a le temps, un CRM à moitié rempli, des
                  relances qui partent quand on y pense.
                </p>
                <p>
                  Ça marchait il y a cinq ans. Aujourd&apos;hui les boîtes d&apos;arrivée
                  sont saturées. Les gens ignorent les messages génériques. Et les signaux
                  d&apos;achat, un changement de poste, une interaction avec un post, une
                  levée de fonds, passent sous le radar parce que personne ne les surveille.
                </p>
                <p>
                  C&apos;est pour ça qu&apos;on a structuré ChallengersLab autour de trois
                  métiers distincts.
                </p>
                <p>
                  Le setting, c&apos;est le travail en amont&nbsp;: repérer les bons
                  signaux, contacter les bonnes personnes au bon moment, qualifier avant de
                  passer la main. Pas de volume pour le volume. Chaque message est ancré
                  sur un fait précis.
                </p>
                <p>
                  Le closing, c&apos;est ce qui se passe une fois que le prospect est
                  qualifié. Un appel, un contexte complet sur ce qui a été dit, ce qui a
                  intéressé, ce qui a coincé. Le closer ne découvre pas le lead à froid.
                </p>
                <p>
                  Et entre les deux, l&apos;automatisation et l&apos;IA. Pas pour remplacer
                  le setter ou le closer, pour leur donner les bons inputs au bon moment.
                  Trier les signaux, prioriser les profils, proposer des drafts de messages
                  que l&apos;humain valide avant envoi.
                </p>
                <p className="text-text-primary font-semibold">
                  Trois rôles, un pipeline. Chacun fait ce qu&apos;il sait faire. Le
                  système tourne parce que les pièces s&apos;emboîtent, pas parce
                  qu&apos;une seule personne essaie de tout gérer.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
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
