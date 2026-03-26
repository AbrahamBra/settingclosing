import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { DarkCard } from '@/components/ui/DarkCard'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Externaliser sa prospection commerciale B2B : agence, SDR, outils | Setting',
  description:
    "Externaliser sa prospection commerciale LinkedIn : agence prospection B2B, SDR externalisé vs interne, outils et coûts réels. Comparatif chiffré pour décider.",
  alternates: {
    canonical: 'https://www.setting.live/externaliser-prospection-linkedin',
    languages: {
      'fr': 'https://www.setting.live/externaliser-prospection-linkedin',
      'x-default': 'https://www.setting.live/externaliser-prospection-linkedin',
    },
  },
  openGraph: {
    title: 'Externaliser sa prospection commerciale B2B | Setting',
    description:
      'Agence prospection B2B, SDR commercial externalisé, outils setting LinkedIn : tout ce qu\'il faut savoir pour externaliser sa prospection.',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Externaliser sa prospection commerciale B2B | Setting',
    description: 'Agence prospection B2B, SDR commercial externalisé, outils setting LinkedIn : tout ce qu\'il faut savoir pour externaliser sa prospection.',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Externalisation prospection commerciale LinkedIn B2B',
  description:
    "Service d'externalisation de la prospection commerciale LinkedIn pour consultants, fondateurs et dirigeants B2B. Agence prospection B2B avec setter dédié, détection IA des signaux d'achat, RDV qualifiés dès la première semaine.",
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  serviceType: 'Prospection commerciale LinkedIn externalisée',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '[data-speakable]', '.faq-answer'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  offers: {
    '@type': 'Offer',
    price: '790',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '790',
      priceCurrency: 'EUR',
      unitText: 'MON',
      billingDuration: 'P1M',
      valueAddedTaxIncluded: false,
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de temps avant les premiers résultats ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les premiers RDV arrivent généralement dans les 7 premiers jours. On définit votre cible et vos messages en 48h, puis le setter commence à prospecter immédiatement. Si vous avez moins de 5 RDV dans le premier mois, le mois suivant est offert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un SDR commercial en France en 2026 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un SDR junior en France est rémunéré entre 30 000 et 38 000 euros brut par an. Avec les charges patronales (environ 45 %), le coût réel pour l'employeur se situe entre 43 500 et 55 000 euros. En ajoutant les outils et le management, le coût total année 1 dépasse 50 000 à 65 000 euros.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le coût comparé à un SDR interne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un SDR junior coûte 35 000 à 45 000 €/an, plus 3 à 6 mois de montée en compétence. L'externalisation démarre à 790 €/mois, sans engagement long terme. Le coût par RDV qualifié est souvent 2 à 3 fois inférieur en externalisé.",
      },
    },
    {
      '@type': 'Question',
      name: 'Agence de prospection B2B ou freelance : comment choisir ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le freelance convient si vous avez déjà un process de prospection LinkedIn qui tourne et que vous pouvez superviser 2 à 3 heures par semaine. L'agence convient si vous partez de zéro ou si vous n'avez pas le temps de piloter. L'agence fournit la méthode, les outils et la supervision. Le freelance fournit l'exécution.",
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que vous envoyez des messages sans mon accord ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Chaque message est relu et validé par un humain avant envoi. Rien ne part en automatique. Vous gardez le contrôle total sur ce qui sort sous votre nom.",
      },
    },
    {
      '@type': 'Question',
      name: 'Peut-on combiner SDR interne et prospection externalisée ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, c'est une configuration qui fonctionne bien. L'externalisé gère la prospection froide LinkedIn pendant que le SDR interne traite l'inbound et les comptes stratégiques. Cela évite de sur-solliciter l'interne sur des tâches répétitives et permet de scaler sans recruter.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels outils sont utilisés pour le setting LinkedIn ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le stack repose sur trois outils : Reactin pour détecter les signaux d'achat LinkedIn (environ 50 €/mois), Make pour automatiser le routage et le scoring (gratuit à 9 €/mois), et BreakCold pour gérer le pipeline du setter (29 €/mois). Sales Navigator complète le ciblage. Total : environ 90 à 130 €/mois hors setter.",
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il un engagement minimum ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Pas d'engagement minimum imposé. On vous demande juste de nous laisser 30 jours pour que le pipeline produise ses premiers résultats.",
      },
    },
    {
      '@type': 'Question',
      name: "Et si mon offre n'est pas encore rodée ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "C'est justement un bon moment pour prospecter. Les retours terrain vous aident à affiner votre positionnement plus vite que n'importe quelle analyse interne. On travaille avec vous sur les messages pour tester plusieurs angles.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la durée moyenne d\'un SDR commercial en poste ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durée moyenne d'un SDR en poste est de 14 à 18 mois en France. C'est l'un des postes commerciaux avec le turnover le plus élevé. Chaque départ relance le cycle recrutement-onboarding-ramp-up, soit plusieurs mois de productivité perdue.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.setting.live',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Externaliser sa prospection commerciale',
      item: 'https://www.setting.live/externaliser-prospection-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExternaliserProspectionLinkedinPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-bg-primary border-b border-white/[0.06]"
        >
          <div className="container-max py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-text-secondary">
                Externaliser sa prospection commerciale
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Externaliser sa prospection commerciale
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-6 leading-tight">
                Externaliser sa prospection commerciale B2B&nbsp;: agence, SDR, outils et co&ucirc;ts r&eacute;els
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Tu es bon pour d&eacute;livrer ton service. Mais la prospection prend du temps que tu n&apos;as pas.
                Les outils d&apos;automatisation d&eacute;&ccedil;oivent. Recruter un SDR commercial co&ucirc;te cher.
                Ici, on compare les options&nbsp;: agence, freelance, SDR interne, outils. Avec les vrais chiffres.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Discuter de mon projet
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pourquoi externaliser ────────────────────────────────────────── */}
        <section id="pourquoi" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-12">
                Pourquoi externaliser sa prospection commerciale
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Tu n&apos;as pas le temps
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Bien prospecter sur LinkedIn prend 2 &agrave; 3 heures par jour.
                    Entre la livraison, l&apos;administratif et le commercial, la plupart des fondateurs n&apos;ont pas ces heures.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    L&apos;automatisation ne suffit pas
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Des outils comme Waalaxy ou PhantomBuster envoient des messages.
                    Mais sans jugement humain sur qui cibler et quoi dire, les taux de r&eacute;ponse restent &agrave; 2&ndash;5&nbsp;%.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Recruter un SDR commercial est risqu&eacute;
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Un SDR junior co&ucirc;te 35&ndash;45&nbsp;k&euro;/an, plus 3 &agrave; 6 mois de mont&eacute;e en comp&eacute;tence.
                    Si &ccedil;a ne fonctionne pas, tu as perdu 6 mois et plus de 20&nbsp;000&nbsp;&euro;.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Pour qui c'est fait ──────────────────────────────────────────── */}
        <section id="pour-qui" className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Pour qui c&apos;est fait
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Tu vends en B2B. Tu veux des RDV qualifi&eacute;s. Mais tu ne veux pas y passer tes journ&eacute;es.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Consultants et freelances B2B
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu vends de l&apos;expertise, pas du volume.
                    Tu as besoin de 3 &agrave; 5 RDV qualifi&eacute;s par semaine, pas de 100 messages envoy&eacute;s dans le vide.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Fondateurs de startups
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu dois valider ton march&eacute; et remplir ton pipeline pendant que tu construis le produit.
                    Faire les deux en m&ecirc;me temps sans aide, c&apos;est compliqu&eacute;.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Solopreneurs et coachs B2B
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu sais d&eacute;livrer. Ce qui manque, c&apos;est les prospects.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Comment ça marche ────────────────────────────────────────────── */}
        <section id="comment-ca-marche" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Comment &ccedil;a marche
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Trois &eacute;tapes. Pas de surprise. Le d&eacute;tail est sur{' '}
                <Link href="/methode" className="text-accent hover:underline">
                  notre m&eacute;thode
                </Link>
                .
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      1
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      On d&eacute;finit ta cible
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    ICP, signaux d&apos;achat, messages. On cadre tout &ccedil;a ensemble en 48h.
                    Tu valides avant qu&apos;on commence.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      2
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      Un setter prospecte pour toi
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    L&apos;IA rep&egrave;re les signaux d&apos;achat. Un humain &eacute;crit et relit chaque message avant qu&apos;il parte.
                    Rien n&apos;est envoy&eacute; tout seul.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      3
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      Tu re&ccedil;ois des RDV qualifi&eacute;s
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Premiers RDV d&egrave;s la premi&egrave;re semaine.
                    Reporting hebdomadaire avec les stats et les &eacute;changes.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── SDR interne : le vrai coût ───────────────────────────────────── */}
        <section id="sdr-commercial" className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                SDR commercial interne&nbsp;: le vrai co&ucirc;t
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10 max-w-xl mx-auto">
                Tout le monde pense d&apos;abord &agrave; recruter. Sauf que le salaire affich&eacute; n&apos;est que la partie visible.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <DarkCard accent className="p-6 text-center">
                  <p className="font-sans font-extrabold text-2xl text-accent mb-1">50&ndash;75k&euro;</p>
                  <p className="font-sans text-text-secondary text-sm">co&ucirc;t r&eacute;el ann&eacute;e&nbsp;1</p>
                </DarkCard>
                <DarkCard accent className="p-6 text-center">
                  <p className="font-sans font-extrabold text-2xl text-accent mb-1">3&ndash;6 mois</p>
                  <p className="font-sans text-text-secondary text-sm">ramp-up avant autonomie</p>
                </DarkCard>
                <DarkCard accent className="p-6 text-center">
                  <p className="font-sans font-extrabold text-2xl text-accent mb-1">14&ndash;18 mois</p>
                  <p className="font-sans text-text-secondary text-sm">dur&eacute;e moyenne en poste</p>
                </DarkCard>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Salaire brut', desc: '30\u00a0000 \u00e0 45\u00a0000\u00a0\u20ac/an pour un profil junior \u00e0 confirm\u00e9 en France. Avec les charges patronales (~45\u00a0%), \u00e7a fait entre 43\u00a0500 et 55\u00a0000\u00a0\u20ac pour l\u2019employeur.' },
                  { title: 'P\u00e9riode de ramp-up', desc: 'Un SDR met 3 \u00e0 6 mois avant d\u2019\u00eatre autonome. Les premiers r\u00e9sultats\u00a0? Mois 4 ou 5, au mieux.' },
                  { title: 'Outils et management', desc: 'Sales Navigator, CRM, enrichissement : 200 \u00e0 300\u00a0\u20ac/mois. Plus 2 \u00e0 5 heures par semaine de supervision. Ce temps a une valeur.' },
                  { title: 'Turnover \u00e9lev\u00e9', desc: 'La dur\u00e9e moyenne d\u2019un SDR en poste est de 14 \u00e0 18 mois. Chaque d\u00e9part relance le cycle recrutement-onboarding-ramp-up.' },
                ].map(({ title, desc }) => (
                  <DarkCard key={title} className="p-6">
                    <h3 className="font-sans font-extrabold text-sm text-text-primary mb-2">{title}</h3>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </DarkCard>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <DarkCard accent className="p-6">
                <p className="font-sans text-text-primary text-sm font-semibold mb-2">
                  Le pi&egrave;ge du &laquo;&nbsp;moins cher&nbsp;&raquo;
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Un SDR interne &agrave; 40&nbsp;000&nbsp;&euro;/an qui prend 6 mois &agrave; &ecirc;tre autonome ne produit rien pendant les 6 premiers mois,
                  tout en co&ucirc;tant 20&nbsp;000&nbsp;&euro;. Un service externalis&eacute; &agrave; 1&nbsp;000&nbsp;&euro;/mois livre des RDV d&egrave;s la semaine 2.
                  La bonne m&eacute;trique, c&apos;est le co&ucirc;t par RDV qualifi&eacute;, pas le prix facial.
                </p>
              </DarkCard>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Agence prospection B2B vs freelance ─────────────────────────── */}
        <section id="agence-vs-freelance" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Agence prospection B2B vs setter freelance
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10 max-w-xl mx-auto">
                Les deux fonctionnent. Le prix n&apos;est pas le m&ecirc;me, le risque non plus.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="overflow-x-auto mb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 min-w-[140px]" />
                      <th className="px-4 py-3 min-w-[140px] text-text-muted text-sm font-semibold text-center">Freelance</th>
                      <th className="px-4 py-3 min-w-[140px] border-t-2 text-sm font-bold text-center" style={{ borderColor: '#C87533', background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>Agence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { critere: 'Co\u00fbt mensuel', freelance: '500\u20131\u00a0200\u00a0\u20ac + outils', agence: '1\u00a0000\u20133\u00a0000\u00a0\u20ac tout inclus' },
                      { critere: 'M\u00e9thode et outils', freelance: '\u00c0 votre charge', agence: 'Fournis et configur\u00e9s' },
                      { critere: 'Onboarding', freelance: '2\u20134 semaines, vous g\u00e9rez', agence: '1\u20132 semaines, g\u00e9r\u00e9 pour vous' },
                      { critere: 'Remplacement setter', freelance: 'Vous recommencez', agence: 'Backup en quelques jours' },
                      { critere: 'Scalabilit\u00e9', freelance: 'Trouver un autre freelance', agence: 'Ajouter un setter au programme' },
                      { critere: 'Garantie r\u00e9sultats', freelance: 'Rare', agence: 'Souvent incluse (5 RDV min)' },
                    ].map(({ critere, freelance, agence }, i) => (
                      <tr key={critere} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-4 py-3 text-text-primary text-sm font-semibold">{critere}</td>
                        <td className="px-4 py-3 text-center text-text-secondary text-sm">{freelance}</td>
                        <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>{agence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard className="p-6 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Choisis le freelance si&hellip;
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Tu as d\u00e9j\u00e0 un process LinkedIn qui tourne',
                      'Tu peux superviser 2\u20133h/semaine',
                      'Ton budget est sous 800\u00a0\u20ac/mois',
                      'Tu connais ton ICP sur le bout des doigts',
                    ].map((p) => (
                      <li key={p} className="flex gap-2 font-sans text-text-secondary text-sm leading-relaxed">
                        <span className="text-accent shrink-0">&rarr;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard className="p-6 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Choisis l&apos;agence si&hellip;
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Tu pars de z\u00e9ro en setting LinkedIn',
                      'Tu n\u2019as pas le temps de manager',
                      'Tu veux une garantie sur les RDV',
                      'Ton panier moyen d\u00e9passe 2\u00a0000\u00a0\u20ac',
                    ].map((p) => (
                      <li key={p} className="flex gap-2 font-sans text-text-secondary text-sm leading-relaxed">
                        <span className="text-accent shrink-0">&rarr;</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Les outils du setting LinkedIn ───────────────────────────────── */}
        <section id="outils" className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Les outils qui font tourner le syst&egrave;me
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10 max-w-xl mx-auto">
                Le setter ne travaille pas &agrave; mains nues. Reactin capte les signaux, Make trie et route, BreakCold g&egrave;re le pipeline. Trois outils, pas plus.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ScrollReveal delay={0}>
                <DarkCard hover className="p-8 h-full">
                  <p className="font-sans text-accent text-xs font-semibold uppercase tracking-widest mb-3">~50&nbsp;&euro;/mois</p>
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Reactin
                  </h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Surveille ton LinkedIn et d&eacute;tecte les interactions en temps r&eacute;el&nbsp;:
                    likes, commentaires, visites de profil, changements de poste.
                    Ce sont les{' '}
                    <Link href="/ressources/signal-achat-linkedin" className="text-accent hover:underline">
                      signaux d&apos;achat
                    </Link>
                    {' '}qui d&eacute;clenchent la prise de contact.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard hover className="p-8 h-full">
                  <p className="font-sans text-accent text-xs font-semibold uppercase tracking-widest mb-3">Gratuit &agrave; 9&nbsp;&euro;/mois</p>
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Make
                  </h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Connecte Reactin &agrave; BreakCold. Filtre les signaux (poste, taille entreprise),
                    calcule un score et envoie les bons profils dans le pipeline du setter.
                    Configuration en 20 minutes, z&eacute;ro code.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard hover className="p-8 h-full">
                  <p className="font-sans text-accent text-xs font-semibold uppercase tracking-widest mb-3">~29&nbsp;&euro;/mois</p>
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    BreakCold
                  </h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    Le CRM du setter. Pipeline visuel, notes de conversation, feed LinkedIn int&eacute;gr&eacute;,
                    suivi des relances. C&apos;est l&agrave; que le setter passe ses journ&eacute;es.
                    Le deal est transf&eacute;r&eacute; au CRM principal une fois le RDV confirm&eacute;.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <DarkCard className="p-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Le flux en 4 &eacute;tapes</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { step: '1', label: 'Signal d\u00e9tect\u00e9', tool: 'Reactin', desc: 'Un prospect interagit avec ton contenu' },
                    { step: '2', label: 'Filtre + scoring', tool: 'Make', desc: 'Poste, taille entreprise, type de signal' },
                    { step: '3', label: 'Prospect cr\u00e9\u00e9', tool: 'BreakCold', desc: 'Profil + contexte dans le pipeline' },
                    { step: '4', label: 'Message envoy\u00e9', tool: 'Setter', desc: 'Message contextuel, relu et valid\u00e9' },
                  ].map(({ step, label, tool, desc }) => (
                    <div key={step} className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm mb-2">
                        {step}
                      </span>
                      <p className="font-sans font-semibold text-text-primary text-sm">{label}</p>
                      <p className="font-sans text-accent text-xs mb-1">{tool}</p>
                      <p className="font-sans text-text-secondary text-xs leading-snug">{desc}</p>
                    </div>
                  ))}
                </div>
              </DarkCard>
            </ScrollReveal>
            <ScrollReveal>
              <p className="font-sans text-text-muted text-sm text-center mt-6">
                Total stack&nbsp;: environ 90 &agrave; 130&nbsp;&euro;/mois. D&eacute;tails sur{' '}
                <Link href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline">
                  les 3 couches du syst&egrave;me de setting
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Comparatif global ─────────────────────────────────────────────── */}
        <section id="comparatif" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Combien co&ucirc;te vraiment la prospection&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10 max-w-xl mx-auto">
                Les chiffres, c&ocirc;te &agrave; c&ocirc;te. Pas de discours marketing.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 min-w-[140px]" />
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">SDR interne</th>
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">Agence classique</th>
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">Outil automation</th>
                      <th className="px-4 py-3 min-w-[130px] border-t-2 text-sm font-bold text-center" style={{ borderColor: '#C87533', background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>Setting.live</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Co&ucirc;t mensuel</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&nbsp;000&ndash;4&nbsp;000&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&nbsp;000&ndash;5&nbsp;000&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">100&ndash;200&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>790&nbsp;&euro;</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Co&ucirc;t ann&eacute;e&nbsp;1</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">50&ndash;75&nbsp;k&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">24&ndash;60&nbsp;k&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">1&ndash;2&nbsp;k&euro;</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>~10&nbsp;k&euro;</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">D&eacute;lai premier RDV</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;6 mois</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&ndash;4 semaines</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">1&ndash;2 semaines</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>&lt;&nbsp;7 jours</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Taux de r&eacute;ponse</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">5&ndash;15&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;8&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&ndash;5&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>20&ndash;35&nbsp;%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Engagement</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">CDI / CDD</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;12 mois</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Mensuel</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>Aucun</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Personnalisation</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Variable</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Templates</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Templates</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>IA + humain</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-secondary px-4 py-3 text-text-primary text-sm font-semibold">Garantie r&eacute;sultats</td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center" style={{ background: 'rgba(200,117,51,0.04)' }}><span className="font-bold" style={{ color: '#C87533' }} aria-label="Oui">&#x2713;</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Résultats attendus ───────────────────────────────────────────── */}
        <section id="resultats" className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Ce que tu peux attendre
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Chiffres tir&eacute;s des missions en cours. Pas du vent.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <ScrollReveal delay={0}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">~3</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    RDV qualifi&eacute;s par semaine
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">20&ndash;35&nbsp;%</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    de taux de r&eacute;ponse (vs 2&ndash;5&nbsp;% en automatisation)
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">7 j</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    pour les premiers r&eacute;sultats
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">Garanti</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Moins de 5 RDV dans le mois, le suivant est offert
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <p className="font-sans text-text-muted text-sm text-center">
                La m&eacute;thode derri&egrave;re ces chiffres&nbsp;:{' '}
                <Link href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">
                  setting commercial B2B
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pricing teaser ───────────────────────────────────────────────── */}
        <section id="tarifs" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Combien &ccedil;a co&ucirc;te&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
                Le service d&eacute;marre &agrave; <strong className="text-text-primary">790&nbsp;&euro;/mois</strong>,
                sans engagement annuel ni frais cach&eacute;s.
              </p>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Toutes les formules sont d&eacute;taill&eacute;es sur{' '}
                <Link href="/tarifs" className="text-accent hover:underline">
                  la page tarifs
                </Link>
                .
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" className="bg-bg-primary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-12">
                Questions fr&eacute;quentes
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-4">

              <ScrollReveal delay={0}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Combien de temps avant les premiers r&eacute;sultats&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Les premiers RDV arrivent dans les 7 premiers jours.
                    On cale ta cible et tes messages en 48h. Le setter attaque.
                    Si tu as moins de 5 RDV dans le premier mois, le mois suivant est offert.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={50}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Combien co&ucirc;te un SDR commercial en France&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Un SDR junior co&ucirc;te entre 30&nbsp;000 et 38&nbsp;000&nbsp;&euro; brut/an.
                    Avec les charges patronales (~45&nbsp;%), le co&ucirc;t r&eacute;el employeur atteint
                    43&nbsp;500 &agrave; 55&nbsp;000&nbsp;&euro;. En ajoutant les outils et le management,
                    l&apos;ann&eacute;e&nbsp;1 d&eacute;passe 50&nbsp;000 &agrave; 65&nbsp;000&nbsp;&euro;.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Agence de prospection B2B ou freelance&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu as d&eacute;j&agrave; un process qui tourne et du temps pour superviser&nbsp;? Le freelance suffit.
                    Tu pars de z&eacute;ro ou tu n&apos;as pas le temps de piloter&nbsp;? C&apos;est l&apos;agence qu&apos;il te faut.
                    Elle fournit la m&eacute;thode, les outils, le suivi. Toi, tu re&ccedil;ois les RDV.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Est-ce que tu envoies des messages sans mon accord&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Non. Un humain relit et valide chaque message avant qu&apos;il parte.
                    Rien n&apos;est envoy&eacute; sans ton feu vert.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Peut-on combiner SDR interne et externalis&eacute;&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Oui. L&apos;externalis&eacute; g&egrave;re la prospection froide LinkedIn, le SDR interne
                    traite l&apos;inbound et les comptes strat&eacute;giques. Pas mal de bo&icirc;tes font comme &ccedil;a pour monter en volume sans recruter.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Quels outils sont utilis&eacute;s&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Le stack, c&apos;est Reactin (d&eacute;tection de signaux, ~50&nbsp;&euro;/mois),
                    Make (routage et scoring, gratuit &agrave; 9&nbsp;&euro;/mois) et BreakCold (pipeline setter, ~29&nbsp;&euro;/mois).
                    Sales Navigator compl&egrave;te le ciblage. Total&nbsp;: 90 &agrave; 130&nbsp;&euro;/mois hors setter.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Et si mon offre n&apos;est pas encore rod&eacute;e&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    C&apos;est justement un bon moment pour prospecter.
                    Les retours terrain affinent ton positionnement plus vite que n&apos;importe quelle analyse interne.
                    On travaille avec toi sur les messages pour tester plusieurs angles.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Y a-t-il un engagement minimum&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Non. Pas d&apos;engagement minimum impos&eacute;.
                    On te demande juste 30 jours pour voir les premiers r&eacute;sultats.
                  </p>
                </DarkCard>
              </ScrollReveal>

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
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">La m&eacute;thode en 9 &eacute;tapes</p>
                  <p className="font-sans text-sm text-text-muted">Du signal d&apos;achat au RDV qualifi&eacute;&nbsp;: le pipeline complet.</p>
                </a>
                <a href="/ressources/setting-commercial-b2b" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Setting commercial B2B</p>
                  <p className="font-sans text-sm text-text-muted">D&eacute;finition, m&eacute;thode et programme de setting.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">D&egrave;s 490&nbsp;&euro; de setup + 790&nbsp;&euro;/mois. Sans engagement.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA finale ───────────────────────────────────────────────────── */}
        <section id="cta" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; externaliser ta prospection&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Un appel de 30 minutes pour &eacute;valuer si ce service correspond &agrave; ta situation.
                Pas de pitch agressif. Juste une conversation franche.
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
