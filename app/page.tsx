import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description:
    'ChallengersLab gère votre setting commercial LinkedIn : setter dédié, méthode signal-based, RDV qualifiés dès la première semaine. Pour fondateurs, freelances et solopreneurs.',
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}
import { Hero } from '@/components/Hero'
import { Probleme } from '@/components/Probleme'
import { Philosophie } from '@/components/Philosophie'
import { SectionSetting } from '@/components/SectionSetting'
import { SectionClosing } from '@/components/SectionClosing'
import { SectionTriptyque } from '@/components/SectionTriptyque'
import { SectionComplementarite } from '@/components/SectionComplementarite'
import { Preuves } from '@/components/Preuves'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { CursorGlowClient } from '@/components/CursorGlowClient'

export default function Home() {
  return (
    <>
      <CursorGlowClient />
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Philosophie />
        <SectionTriptyque />
        <SectionSetting />
        <SectionClosing />
        <SectionComplementarite />
        <Preuves />
        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
