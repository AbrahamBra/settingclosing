import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { PipelineSummary } from '@/components/PipelineSummary'
import { PipelineSection } from '@/components/PipelineSection'
import { PricingComparison } from '@/components/PricingComparison'
import { BlogTeaser } from '@/components/BlogTeaser'
import { SocialProof } from '@/components/SocialProof'
import { CTAFinale } from '@/components/CTAFinale'
import { Footer } from '@/components/Footer'
import { CursorGlowClient } from '@/components/CursorGlowClient'

export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description:
    'ChallengersLab gère votre setting commercial LinkedIn : setter dédié, méthode signal-based, RDV qualifiés dès la première semaine. Pour fondateurs, freelances et solopreneurs.',
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
        <PipelineSummary />
        <PipelineSection />
        <PricingComparison />
        <BlogTeaser />
        <SocialProof />
        <CTAFinale />
      </main>
      <Footer />
    </>
  )
}
