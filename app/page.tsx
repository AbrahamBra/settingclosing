import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SituationPicker } from '@/components/SituationPicker'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { CursorGlowClient } from '@/components/CursorGlowClient'
import { TeamBanner } from '@/components/TeamBanner'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description:
    'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. 500 € le premier mois.',
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}

export default function Home() {
  return (
    <>
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
