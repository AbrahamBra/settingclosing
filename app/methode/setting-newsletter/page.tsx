import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { PipelineStep } from '@/components/PipelineStep'
import { layerConfig } from '@/lib/pipeline-data'
import { newsletterSteps } from '@/lib/methode-newsletter-data'

export const metadata: Metadata = {
  title: 'Setting Newsletter B2B : contenu expert segmenté et scoring | Setting',
  description:
    'Newsletter thought leadership opérée par IA : 4 contenus segmentés par maturité toutes les 2 semaines, scoring comportemental, routing automatique des leads chauds. 830 €/mois × 3.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.setting.live/methode/setting-newsletter',
    languages: {
      'fr': 'https://www.setting.live/methode/setting-newsletter',
      'x-default': 'https://www.setting.live/methode/setting-newsletter',
    },
  },
  openGraph: {
    title: 'Setting Newsletter B2B : contenu expert segmenté et scoring | Setting',
    description:
      'Newsletter thought leadership opérée par IA : interview voix, Skill IA sur-mesure, scoring comportemental et routing automatique des leads chauds vers un appel.',
    locale: 'fr_FR',
    type: 'website',
    url: 'https://www.setting.live/methode/setting-newsletter',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Setting Newsletter B2B : contenu expert segmenté et scoring',
  description:
    'Notre méthode newsletter B2B : interview voix du dirigeant, Skill IA sur-mesure, scoring comportemental et routing automatique des leads chauds.',
  url: 'https://www.setting.live/methode/setting-newsletter',
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Méthode', item: 'https://www.setting.live/methode' },
    { '@type': 'ListItem', position: 3, name: 'Setting Newsletter', item: 'https://www.setting.live/methode/setting-newsletter' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Setting Newsletter B2B en 7 étapes',
  description:
    'Comment transformer votre base en pipeline de RDV grâce à une newsletter thought leadership opérée par IA.',
  step: newsletterSteps.map((step) => ({
    '@type': 'HowToStep',
    name: step.label,
    text: step.desc,
  })),
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Comment fonctionne le Setting Newsletter ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Setting Newsletter suit 7 étapes : interview voix du dirigeant, nettoyage et scoring de la base, ligne éditoriale et segmentation TOFU/MOFU/BOFU, rédaction IA dans la voix du dirigeant, envoi segmenté avec triggers comportementaux, routing des leads chauds vers un appel, et optimisation continue. Le dirigeant valide les drafts en 10-15 minutes par cycle.',
      },
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que l'interview voix ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une session visio de 1h30 à 2h avec le dirigeant. On extrait sa voix, ses convictions, son vocabulaire et ses exemples. La transcription est transformée en Skill IA qui permet à Claude de rédiger dans la voix exacte du dirigeant, pas un persona inventé. Sa vraie façon de parler.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de newsletters sont produites par cycle ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'toutes les 2 semaines : une newsletter générale pour toute la base, plus une édition spécifique par segment (TOFU, MOFU, BOFU). Chaque abonné reçoit 2 emails par mois : la générale et celle de son niveau de maturité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment fonctionne le scoring comportemental ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le score combine deux dimensions : démographique (poste, entreprise, secteur, 30 % du score) et comportemental (ouvertures, clics, visites site, 70 %). Le comportemental pèse plus parce qu\'il mesure ce que les gens font, pas ce qu\'ils sont sur le papier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on combiner avec le Setting Téléphonique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Quand la newsletter détecte un lead chaud (score BOFU), le setter téléphonique prend l'appel de qualification. Le client ne fait que closer. C'est la formule full délégation : contenu + détection + qualification.",
      },
    },
  ],
}

const legendLayers = ['ia', 'methode', 'humain', 'hybrid'] as const

export default function SettingNewsletterPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C87533' }}>
                Setting Newsletter
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-5 leading-tight">
                7 &eacute;tapes pour transformer ta base en pipeline de RDV.
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                L&rsquo;IA r&eacute;dige dans la voix du dirigeant. Le scoring d&eacute;tecte les leads chauds.
                Un humain valide chaque envoi.
              </p>

              {/* Layer legend */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {legendLayers.map((layer) => {
                  const cfg = layerConfig[layer]
                  return (
                    <span
                      key={layer}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                    >
                      {cfg.label}
                    </span>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pipeline Steps ───────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
                La m&eacute;thode en 7 &eacute;tapes
              </h2>
              <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-2xl">
                De l&rsquo;interview voix &agrave; l&rsquo;optimisation continue, chaque &eacute;tape est document&eacute;e.
                Pour chacune, on montre l&rsquo;erreur classique et notre arbitrage.
              </p>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              {newsletterSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 60}>
                  <PipelineStep
                    num={step.num}
                    label={step.label}
                    layers={[...step.layers]}
                    desc={step.desc}
                    tools={[...step.tools]}
                    isLast={i === newsletterSteps.length - 1}
                    pedagogy={step.pedagogy}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting LinkedIn</p>
                  <p className="font-sans text-sm text-text-muted">Prospection outbound par signaux d&rsquo;achat en 9 &eacute;tapes.</p>
                </a>
                <a href="/methode/setting-telephonique" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting t&eacute;l&eacute;phonique</p>
                  <p className="font-sans text-sm text-text-muted">Qualification et routing de tes leads entrants.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">830&nbsp;&euro;/mois &times; 3.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="bg-bg-secondary section-padding">
          <div className="container-max text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; r&eacute;veiller ta base&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Parlons de ta base, de ton expertise et du syst&egrave;me qu&rsquo;on peut construire.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
