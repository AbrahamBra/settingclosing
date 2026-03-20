import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { TeamBanner } from '@/components/TeamBanner'
import { FAQ } from '@/components/FAQ'

const SituationPicker = dynamic(() => import('@/components/SituationPicker').then(m => m.SituationPicker))
const CursorGlowClient = dynamic(() => import('@/components/CursorGlowClient').then(m => m.CursorGlowClient))

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | Setting',
  description:
    'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. Dès 490 € + 500 €/mois.',
  alternates: {
    canonical: 'https://www.setting.live',
  },
  openGraph: {
    title: 'Setting commercial LinkedIn externalisé | Setting',
    description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.setting.live/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Setting — Setting commercial LinkedIn externalisé',
      },
    ],
  },
}

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.setting.live/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le setting commercial externalisé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '490 € de setup, puis 500 €/mois — même tarif sur les 3 premiers mois. Prime de 50 à 250 €/RDV selon le ticket moyen. Sans engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quand voit-on les premiers RDV qualifiés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dès la première semaine. Le setter envoie des messages dès le démarrage, pas après un audit de 30 jours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Les messages sont-ils envoyés sans validation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Chaque message est validé par un humain avant envoi. Aucune automatisation ne contacte vos prospects à votre place.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si le service ne fonctionne pas ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moins de 5 RDV qualifiés livrés dans le mois ? Le mois suivant est offert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence avec un freelance SDR ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un freelance SDR envoie des messages. Setting combine un setter dédié, un système IA qui détecte les signaux d'achat, et une méthode qui s'affine chaque semaine.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <CursorGlowClient />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <SituationPicker />
        <TeamBanner />
        <FAQ />
        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
