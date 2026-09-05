import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { PipelineVisual } from '@/components/PipelineVisual'
import { ToolMarquee } from '@/components/ToolMarquee'
import { CombinedSimulator } from '@/components/CombinedSimulator'
import { TeamStrip } from '@/components/TeamStrip'
import { VideoBackground } from '@/components/VideoBackground'

const CursorGlowClient = dynamic(() => import('@/components/CursorGlowClient').then(m => m.CursorGlowClient))

export const metadata: Metadata = {
  title: 'Setting LinkedIn B2B | RDV qualifiés dès 7 jours, 790 €/mois',
  description:
    'Setter dédié + détection IA des signaux d\u2019achat. Des RDV qualifiés pour votre closer dès la première semaine. 790\u00a0€ HT/mois, sans engagement, setup offert.',
  alternates: {
    canonical: 'https://www.setting.live',
    languages: {
      'fr': 'https://www.setting.live',
      'x-default': 'https://www.setting.live',
    },
  },
  openGraph: {
    title: 'Setting LinkedIn B2B | Prospection externalisée — Setting.live',
    description: 'Service de setting LinkedIn pour solopreneurs B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Setting LinkedIn B2B — Prospection externalisée pour solopreneurs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setting LinkedIn B2B | RDV qualifiés dès la semaine 1',
    description: 'Prospection LinkedIn externalisée pour solopreneurs B2B. Setter dédié, IA signal-based, premiers RDV en 7 jours. À partir de 790 €/mois.',
    images: ['https://www.setting.live/opengraph-image'],
  },
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.setting.live/#website',
      url: 'https://www.setting.live',
      name: 'Setting',
      inLanguage: 'fr-FR',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.setting.live/ressources?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.setting.live/#business',
      name: 'Setting',
      // Désambiguïsation d'entité : Setting est la marque commerciale, ChallengersLab
      // reste l'identité historique (page LinkedIn, e-mails, Calendly). Déclarer le lien
      // explicitement évite que les moteurs traitent les deux noms comme des entités
      // contradictoires. Cf. GEO-AUDIT-REPORT.md § "sameAs Organisation limité".
      alternateName: ['ChallengersLab', 'Setting LinkedIn'],
      legalName: 'BRAKHA ABRAHAM',
      url: 'https://www.setting.live',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.setting.live/icon.png',
        width: 512,
        height: 512,
      },
      description: 'Prospection LinkedIn externalisée pour solopreneurs et fondateurs B2B. Méthode signal-based, setter dédié, IA + validation humaine.',
      sameAs: [
        'https://www.linkedin.com/company/challengerslab',
        'https://www.challengerslab.com',
        'https://www.linkedin.com/in/abraham-brakha',
        'https://www.societe.com/societe/brakha-abraham-902889385.html',
        'https://www.pappers.fr/entreprise/brakha-abraham-902889385',
        'https://annuaire-entreprises.data.gouv.fr/entreprise/brakha-abraham-902889385',
      ],
      taxID: 'FR09902889385',
      vatID: 'FR09902889385',
      iso6523Code: '0009:90288938500016',
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        '@id': 'https://www.setting.live/a-propos#abraham',
        name: 'Abraham Brakha',
        url: 'https://www.setting.live/equipe/abraham-brakha',
        sameAs: ['https://www.linkedin.com/in/abraham-brakha'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '50B rue Salomon Reinach',
        addressLocality: 'Lyon',
        postalCode: '69007',
        addressCountry: 'FR',
      },
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 3,
      },
      knowsAbout: [
        'prospection LinkedIn B2B',
        'setting commercial',
        'qualification de leads',
        'automatisation IA commerciale',
        'détection de signaux d\'achat LinkedIn',
        'SDR externalisé',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'a.brakha@challengerslab.com',
        contactType: 'sales',
        availableLanguage: 'French',
      },
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      priceRange: '€€',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero-description', '.faq-answer'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Setting LinkedIn — Abonnement',
            description: 'Pipeline LinkedIn clé en main : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés. Prime par RDV : 50 € (< 5k €), 150 € (5-15k €), 250 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-linkedin',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 790,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting téléphonique — Demi-journée',
            description: 'Qualification téléphonique des leads entrants : chaque lead est appelé, scoré et routé. Facturé au réel par demi-journée consacrée. Prime par RDV : 25 € (< 5k €), 100 € (5-15k €), 200 € (> 15k €).',
            url: 'https://www.setting.live/methode/setting-telephonique',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 175,
              priceCurrency: 'EUR',
              unitText: 'DAY',
              description: '175 EUR par demi-journée',
              valueAddedTaxIncluded: false,
            },
          },
        ],
      },
    },
  ],
}

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.setting.live/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: '790\u00a0€/mois c\u2019est beaucoup pour un solopreneur, non\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un service de setting LinkedIn externalisé à 790 €/mois remplace 8 à 10 heures de prospection par semaine. Si ton taux horaire dépasse 80 €, le service est rentable dès le premier mois. À titre de comparaison, un SDR interne coûte 43 500 à 55 000 € par an (charges comprises), et une agence de prospection facture entre 2 000 et 5 000 €/mois. Avec la garantie RDV (moins de 5 RDV le premier mois = mois suivant offert), le risque financier est du côté de Setting, pas du tien.',
      },
    },
    {
      '@type': 'Question',
      name: 'Je peux le faire moi-même avec Lemlist/LaGrowthMachine\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les outils d\'automatisation LinkedIn comme Lemlist ou LaGrowthMachine permettent d\'envoyer des séquences de messages en masse, mais ils atteignent en moyenne 2 à 5 % de taux de réponse. Le setting externalisé combine trois éléments que l\'automatisation seule ne peut pas reproduire : la détection de signaux d\'achat en temps réel (likes, commentaires, changements de poste), la co-rédaction IA personnalisée par profil, et la validation humaine de chaque message avant envoi. Résultat : 20 à 35 % de taux de réponse sur les prospects ciblés. L\'écart vient du fait qu\'on contacte uniquement des prospects qui ont déjà montré un signe d\'intérêt, pas une liste froide.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\u2019est quoi la différence avec une agence de prospection\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une agence de prospection B2B facture entre 2 000 et 5 000 €/mois avec un engagement de 3 à 6 mois, et utilise généralement des templates de messages envoyés en masse à des listes achetées. Le setting LinkedIn externalisé coûte 790 €/mois sans engagement (résiliable à tout moment), utilise une méthode signal-based (ciblage IA + messages personnalisés par profil + validation humaine), et aligne les intérêts avec des primes au résultat par RDV qualifié (50 à 250 € selon le ticket moyen). C\'est 3 à 5 fois moins cher qu\'une agence, avec des taux de réponse 4 à 10 fois supérieurs aux approches template-based.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps avant les premiers RDV\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les premiers RDV qualifiés arrivent en moins de 7 jours. Le processus de démarrage prend 48 heures : définition de l\'ICP (profil client idéal), configuration des outils de détection de signaux (Reactin, Spyer, Sales Navigator), et encodage de ton expertise dans l\'IA. Dès le troisième jour, le setter commence à prospecter en ciblant les prospects qui ont récemment montré un signe d\'intérêt. En régime de croisière (après 2-3 semaines), les clients obtiennent 2 à 4 RDV qualifiés par semaine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Je n\u2019ai pas de base email, je peux quand m\u00eame\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aucune base email n\'est nécessaire. Le setting LinkedIn cible directement les prospects sur LinkedIn via les signaux d\'achat (likes, commentaires, changements de poste, visites de profil). Le setter utilise Sales Navigator et des outils de monitoring comme Reactin et Spyer pour détecter ces signaux en temps réel, puis contacte chaque prospect avec un message ancré sur un fait précis de son profil. C\'est la différence fondamentale avec l\'emailing : on n\'a pas besoin d\'une liste, on contacte les personnes qui ont déjà levé la main.',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de clients tu prends par mois\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '5 clients maximum par mois. Chaque client a un setter dédié qui gère environ 100 connexions LinkedIn par semaine, personnalise chaque message, et qualifie chaque réponse individuellement. Ce plafond garantit la qualité : pas de dilution, pas de messages génériques, pas de prospects mal ciblés. C\'est aussi ce qui permet de maintenir la garantie RDV.',
      },
    },
    {
      '@type': 'Question',
      name: 'Et si ça marche pas\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zéro engagement — tu peux arrêter à tout moment, sans préavis ni frais. La garantie RDV couvre le risque : si tu obtiens moins de 5 RDV qualifiés dans le premier mois, le mois suivant est offert. Le modèle de bonus par RDV (50 à 250 € selon le ticket moyen) aligne les intérêts : Setting gagne quand tu signes des clients, pas quand tu paies un abonnement.',
      },
    },
    {
      '@type': 'Question',
      name: 'C\u2019est quoi les bonuses RDV\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les bonuses sont une prime variable versée par RDV qualifié généré, indexée sur le ticket moyen de ton offre. Trois paliers : 50 € par RDV si ton ticket est inférieur à 5 000 €, 150 € entre 5 000 et 15 000 €, et 250 € au-dessus de 15 000 €. Ce modèle de rémunération au résultat aligne les intérêts : Setting investit du temps et des ressources pour maximiser le nombre et la qualité des RDV, puisque le revenu dépend directement de la performance.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <VideoBackground />
      <CursorGlowClient />
      <Navbar />
      <main>
        <Hero />
        <noscript>
          <div className="section-padding bg-bg-primary">
            <div className="container-max max-w-3xl mx-auto text-center">
              <p className="font-sans font-extrabold text-h1 text-text-primary mb-6 leading-tight">
                Tu as une offre qui marche. Il te manque un pipeline.
              </p>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                On te trouve des clients sur LinkedIn. Setter dédié, IA signal-based, validation humaine. Premiers RDV en 7 jours.
              </p>
            </div>
          </div>
        </noscript>

        <ToolMarquee />

        {/* Showcase offre phare : pipeline visuel complet */}
        <section id="methode" className="section-padding bg-bg-primary scroll-mt-20">
          <div className="container-max max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: 'rgba(167,139,250,0.1)', color: '#B9A4FB', border: '1px solid rgba(167,139,250,0.2)' }}
              >
                Setting LinkedIn · Notre offre phare
              </span>
            </div>
            <PipelineVisual />
            <div className="mt-10 text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-bg-secondary border border-white/[0.06]">
                <span className="text-2xl font-bold text-accent tabular-nums">790&nbsp;&euro;</span>
                <span className="text-text-muted text-sm">/mois &middot; setup offert &middot; sans engagement</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B9A4FB] text-[#0D0B07] font-semibold text-sm hover:bg-[#B89CFC] transition-colors"
                >
                  D&eacute;marrer ma prospection &rarr;
                </a>
                <a
                  href="/methode/setting-linkedin"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-text-secondary text-sm hover:text-text-primary transition-colors border border-white/[0.06]"
                >
                  Voir la m&eacute;thode en d&eacute;tail
                </a>
              </div>
            </div>
          </div>
        </section>

        <CombinedSimulator />

        <TeamStrip />

        <FAQ />

        {/* Guides gratuits — maillage interne vers piliers */}
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-bg-primary border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Guides gratuits
            </p>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-text-primary mb-8">
              Approfondis ta prospection B2B
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <a
                href="/ressources/setting-commercial-b2b"
                className="group block rounded-xl p-5 border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.03] transition-all"
              >
                <p className="font-semibold text-text-primary text-sm mb-1">Setting commercial B2B</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Guide complet : d&eacute;finition, m&eacute;thode signal-based, 9 &eacute;tapes, co&ucirc;t r&eacute;el.
                </p>
              </a>
              <a
                href="/ressources/prospection-linkedin-b2b"
                className="group block rounded-xl p-5 border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.03] transition-all"
              >
                <p className="font-semibold text-text-primary text-sm mb-1">Prospection LinkedIn B2B</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Messages, scripts, relances : tout pour d&eacute;crocher des RDV sur LinkedIn.
                </p>
              </a>
              <a
                href="/ressources/closing-b2b"
                className="group block rounded-xl p-5 border border-white/[0.06] hover:border-accent/30 hover:bg-accent/[0.03] transition-all"
              >
                <p className="font-semibold text-text-primary text-sm mb-1">Closing B2B</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  Discovery call, gestion des objections, scripts de closing.
                </p>
              </a>
            </div>
          </div>
        </section>

        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
