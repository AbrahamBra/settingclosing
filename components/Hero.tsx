'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'

const personas = ['solopreneur', 'infopreneur']

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
    <section className="section-padding flex flex-col items-center text-center min-h-screen justify-center">
      <div className="container-max max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-h1 md:text-display text-text-primary mb-6"
        >
          Vous avez une offre qui cartonne.{' '}
          <br className="hidden md:block" />
          Arrêtez de perdre du temps à la vendre.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-lg text-text-muted mb-4 max-w-xl mx-auto"
        >
          ChallengersLab prend en charge votre setting et votre closing — avec les méthodes qui font la différence en B2B.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 text-text-muted font-sans text-base mb-12"
        >
          <span>Pour le</span>
          <span className="relative inline-block w-36 h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={personas[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center text-accent font-semibold"
              >
                {personas[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>qui veut déléguer.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Réserver un appel gratuit
          </ButtonGlow>
          <a
            href="#setting"
            className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            Découvrir l&apos;offre ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
