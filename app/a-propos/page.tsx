import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'À propos de Setting | Setting LinkedIn B2B',
  description:
    'Setting externalise la prospection LinkedIn pour fondateurs, freelances et solopreneurs B2B. Découvrez l\'équipe et notre approche.',
  alternates: {
    canonical: 'https://www.setting.live/a-propos',
  },
  openGraph: {
    title: 'À propos de Setting | Setting LinkedIn B2B',
    description: 'Setting externalise la prospection LinkedIn pour fondateurs, freelances et solopreneurs B2B. Découvrez l\'équipe et notre approche.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'À propos de Setting',
  description:
    'Setting externalise la prospection LinkedIn pour fondateurs, freelances et solopreneurs B2B.',
  url: 'https://www.setting.live/a-propos',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Setting',
  url: 'https://www.setting.live',
  description:
    'Service de prospection LinkedIn externalisée pour fondateurs, freelances et solopreneurs B2B.',
  employee: [
    {
      '@type': 'Person',
      name: 'Brahim',
      jobTitle: 'Setting',
      description:
        'Envoie les messages, qualifie les prospects et décroche les RDV.',
    },
    {
      '@type': 'Person',
      name: 'Abraham',
      jobTitle: 'IA & Automatisation',
      description:
        'Construit les outils de ciblage et les automatisations qui font gagner du temps à l\'équipe.',
    },
    {
      '@type': 'Person',
      name: 'Abdelhay',
      jobTitle: 'Stratégie commerciale',
      description:
        'Définit l\'angle commercial, les scripts et la stratégie de conversion.',
    },
  ],
}

// ─── Team data ────────────────────────────────────────────────────────────────

const members = [
  {
    name: 'Brahim',
    role: 'Setting',
    desc: 'C\u2019est lui qui envoie les messages, qualifie les prospects et vous décroche des RDV.',
    bio: 'Plusieurs années à gérer des séquences d\u2019outreach LinkedIn sur des marchés B2B variés. Il sait lire une conversation et savoir si le prospect est chaud ou pas.',
  },
  {
    name: 'Abraham',
    role: 'IA & Automatisation',
    desc: 'Il construit les outils de ciblage et les automatisations qui font gagner du temps au reste de l\u2019équipe.',
    bio: 'Développeur et passionné d\u2019automatisation. Il transforme les tâches répétitives en systèmes qui tournent seuls, pour que Brahim passe son temps sur ce qui compte.',
  },
  {
    name: 'Abdelhay',
    role: 'Stratégie commerciale',
    desc: 'Il définit l\u2019angle commercial, les scripts et la stratégie de conversion.',
    bio: 'Expérience en closing et en copywriting B2B. Il conçoit les messages qui déclenchent des réponses, et affine les scripts chaque semaine en fonction des résultats.',
  },
]

// ─── Approach data ────────────────────────────────────────────────────────────

const approachPoints = [
  {
    eyebrow: 'IA pour la détection',
    title: 'On repère les bons signaux, pas les bons mots-clés',
    desc: 'L\u2019IA analyse les comportements LinkedIn pour identifier les prospects qui sont actuellement en recherche active. On ne cherche pas à automatiser les messages. On cherche à ne jamais prospecter les mauvaises personnes.',
  },
  {
    eyebrow: 'Méthode pour le cadrage',
    title: 'Chaque étape suit des règles précises',
    desc: 'Le pipeline a des critères clairs à chaque étape : qui on contacte, quand on relance, quand on arrête. Ces règles s\u2019affinent chaque semaine. Rien n\u2019est laissé à l\u2019appréciation du moment.',
  },
  {
    eyebrow: 'Humain pour la validation',
    title: 'Aucun message ne part sans relecture',
    desc: 'Avant chaque envoi, un humain vérifie le message, le contexte et le profil. C\u2019est ce qui nous empêche d\u2019envoyer des âneries automatisées au nom de vos clients.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AProposPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '/#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Breadcrumb ───────────────────────────────────────────────────── */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-bg-primary border-b border-white/[0.06]"
        >
          <div className="container-max px-6 md:px-12 lg:px-20 py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li>
                <a href="/" className="hover:text-text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li aria-hidden="true" className="text-white/20">/</li>
              <li className="text-text-primary font-medium">À propos</li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="apropos-hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                À propos
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                Trois personnes, un pipeline
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                Chacun a un rôle précis. Brahim prospecte, Abraham automatise, Abdelhay cadre la
                stratégie. On n&apos;essaie pas de tout faire. On fait bien ce qu&apos;on a décidé de faire.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Notre mission ─────────────────────────────────────────────────── */}
        <section id="mission" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Notre mission
              </p>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-6">
                Pourquoi on a créé Setting
              </h2>
              <div className="font-sans text-text-secondary text-lg leading-relaxed space-y-4">
                <p>
                  La plupart des fondateurs et freelances B2B savent faire leur métier. Ce qu&apos;ils ne
                  savent pas faire, c&apos;est prospecter. Ou plutôt, ils savent, mais ça leur prend un
                  temps fou pour des résultats décevants.
                </p>
                <p>
                  Deux heures sur LinkedIn chaque matin. Des messages qui restent sans réponse. Des
                  profils mal ciblés. Un pipeline vide à la fin du mois. On a vu ça trop souvent.
                </p>
                <p>
                  Setting prend cette tâche en charge. Pas avec des outils en self-service. Pas
                  avec de l&apos;automatisation à l&apos;aveugle. Avec une équipe qui gère votre prospection comme
                  si c&apos;était la sienne.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── L'équipe ──────────────────────────────────────────────────────── */}
        <section id="equipe" className="bg-bg-primary section-padding">
          <div className="container-max px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 text-center">
                L&apos;équipe
              </p>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 text-center">
                Qui fait quoi
              </h2>
              <p className="font-sans text-text-muted text-center max-w-xl mx-auto mb-14">
                Trois personnes, trois compétences distinctes. Le système fonctionne parce que les
                rôles ne se chevauchent pas.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {members.map(({ name, role, desc, bio }, i) => (
                <ScrollReveal key={name} delay={i * 60}>
                  <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 flex flex-col items-center text-center h-full">
                    {/* Photo placeholder */}
                    <div className="w-28 h-28 rounded-2xl bg-bg-primary border-2 border-dashed border-accent/30 flex items-center justify-center mb-5 shrink-0">
                      <svg
                        className="w-10 h-10 text-accent/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </div>

                    <h3 className="font-sans font-extrabold text-lg text-text-primary">
                      {name}
                    </h3>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mt-1 mb-3">
                      {role}
                    </p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed mb-3">
                      {desc}
                    </p>
                    <p className="font-sans text-text-muted/70 text-xs leading-relaxed mt-auto pt-3 border-t border-white/[0.06] w-full">
                      {bio}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Notre approche en 3 points ────────────────────────────────────── */}
        <section id="approche" className="bg-bg-secondary section-padding">
          <div className="container-max px-6 md:px-12 lg:px-20">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 text-center">
                Notre approche
              </p>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 text-center">
                Comment on travaille
              </h2>
              <p className="font-sans text-text-muted text-center max-w-xl mx-auto mb-14">
                Trois principes qui guident chaque campagne. Pas des valeurs affichées. Des règles
                de fonctionnement.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {approachPoints.map(({ eyebrow, title, desc }, i) => (
                <ScrollReveal key={eyebrow} delay={i * 80}>
                  <div className="bg-bg-primary rounded-2xl border border-white/[0.06] p-6 h-full flex flex-col">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                      {eyebrow}
                    </p>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed mt-auto">
                      {desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Vous voulez qu&apos;on s&apos;en occupe ?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Un appel de 30 minutes pour comprendre votre contexte et voir si on peut vous aider.
                Sans engagement.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Réserver un appel découverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
