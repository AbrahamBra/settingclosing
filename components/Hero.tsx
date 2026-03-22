'use client'

import { motion } from 'framer-motion'
import { ButtonGlow } from './ui/ButtonGlow'

const personas = ['solopreneurs', 'fondateurs', 'indépendants B2B']

export function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  return (
    <section className="relative overflow-hidden section-padding pt-32 lg:pt-40 flex flex-col items-center text-center">
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none select-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(200,117,51,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="container-max max-w-3xl relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4956A]/20 bg-[#D4956A]/10 font-sans text-xs font-semibold uppercase tracking-widest text-[#D4956A] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4956A] inline-block" />
          Setting commercial B2B
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-extrabold tracking-tight text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.15] text-text-primary mb-6"
        >
          Tu as une offre qui marche.{' '}
          <br className="hidden sm:block" />
          <span className="text-accent">Il te manque un pipeline.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg text-text-secondary mb-12 max-w-xl mx-auto"
        >
          On génère tes RDV qualifiés avec l&apos;IA pour que tu te concentres sur ce que tu fais de mieux&nbsp;: closer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#methode"
            className="font-sans text-sm font-semibold text-text-muted hover:text-text-primary transition-colors"
          >
            Voir comment ça marche ↓
          </a>
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Prendre RDV
          </ButtonGlow>
        </motion.div>

      </div>
    </section>
  )
}
