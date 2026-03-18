'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'

const personas = ['fondateurs', 'freelances', 'solopreneurs']

export function Hero() {
  const [index, setIndex] = useState(0)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#contact'

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % personas.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

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
          Setting &amp; Closing B2B
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-extrabold tracking-tight text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.15] text-white mb-6"
        >
          Vous avez déjà l&apos;offre.{' '}
          <br className="hidden sm:block" />
          Nous avons la machine.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg text-text-secondary mb-4 max-w-xl mx-auto"
        >
          Premiers rendez-vous qualifiés dès la première semaine.{' '}
          Pipeline complet : setting délégué, closing coaché.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-text-muted font-sans text-base mb-12"
        >
          <span>Pour les</span>
          <span className="relative inline-block w-[165px] h-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={personas[index]}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center text-accent font-semibold"
              >
                {personas[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>qui veulent plus de clients.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Réserver un appel gratuit
          </ButtonGlow>
          <a
            href="#pipeline"
            className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Découvrir l&apos;offre ↓
          </a>
        </motion.div>

      </div>
    </section>
  )
}
