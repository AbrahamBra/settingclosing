import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Probleme } from '@/components/Probleme'
import { Philosophie } from '@/components/Philosophie'
import { SectionSetting } from '@/components/SectionSetting'
import { SectionClosing } from '@/components/SectionClosing'
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
