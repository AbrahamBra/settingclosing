'use client'

import { useState } from 'react'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

type Interest = 'setting' | 'closing' | 'les_deux'
type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  firstName: string
  email: string
  phone: string
  interest: Interest | ''
  message: string
}

const initialForm: FormData = {
  firstName: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
}

// Lazy-load Calendly only when the user asks for it
function CalendlySlot({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 min-h-[260px]">
        <div className="text-center">
          <p className="font-sans font-semibold text-white mb-2">
            Vous préférez en parler directement ?
          </p>
          <p className="font-sans text-text-muted text-sm">
            Réservez un créneau de 30 minutes, sans engagement.
          </p>
        </div>
        <ButtonGlow onClick={() => setLoaded(true)}>
          Voir les créneaux disponibles →
        </ButtonGlow>
      </div>
    )
  }

  // Dynamic import on first render after click
  const { InlineWidget } = require('react-calendly')
  return <InlineWidget url={url} styles={{ height: '500px', minWidth: '280px' }} />
}

export function CTAFinale() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleInterest = (value: Interest) => {
    setForm((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()

      if (!res.ok) {
        setState('error')
        setErrorMsg(json.error ?? 'Une erreur est survenue.')
        return
      }

      setState('success')
      setForm(initialForm)

      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'generate_lead', {
          event_category: 'contact',
          lead_type: form.interest,
          method: 'form',
        })
      }
    } catch {
      setState('error')
      setErrorMsg('Une erreur est survenue. Réessayez plus tard.')
    }
  }

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-sans text-h2 font-bold text-white text-center mb-16">
            Prêt à déléguer ?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-black/8">
          {/* Left — contact form */}
          <ScrollReveal>
            <div className="bg-bg-secondary p-10 border-b md:border-b-0 md:border-r border-black/8">
              <h3 className="font-sans font-semibold text-h3 text-white mb-8">
                Nous contacter
              </h3>

              {state === 'success' ? (
                <p className="font-sans text-[#34D399] font-semibold">
                  Message reçu. On vous répond sous 24h.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <label htmlFor="firstName" className="font-sans text-sm text-text-muted block mb-1.5">
                      Prénom *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      minLength={2}
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#1C1A16] border border-white/[0.06] rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-sans text-sm text-text-muted block mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#1C1A16] border border-white/[0.06] rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="font-sans text-sm text-text-muted block mb-1.5">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[#1C1A16] border border-white/[0.06] rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>

                  <div>
                    <p className="font-sans text-sm text-text-muted mb-3">Vous intéresse * :</p>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Service souhaité">
                      {(['setting', 'closing', 'les_deux'] as Interest[]).map((value) => {
                        const labels: Record<Interest, string> = {
                          setting: 'Setting',
                          closing: 'Closing',
                          les_deux: 'Les deux',
                        }
                        return (
                          <button
                            key={value}
                            type="button"
                            role="radio"
                            aria-checked={form.interest === value}
                            onClick={() => handleInterest(value)}
                            className={`px-4 py-2 rounded-lg font-sans text-sm border transition-colors ${
                              form.interest === value
                                ? 'border-accent text-accent bg-accent/10'
                                : 'border-white/[0.06] text-text-muted hover:border-white/[0.12]'
                            }`}
                          >
                            {labels[value]}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-sans text-sm text-text-muted block mb-1.5">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#1C1A16] border border-white/[0.06] rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="Décrivez votre situation..."
                    />
                  </div>

                  {state === 'error' && (
                    <p className="font-sans text-sm text-red-400">{errorMsg}</p>
                  )}

                  <ButtonGlow
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full"
                  >
                    {state === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </ButtonGlow>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right — Calendly (lazy) */}
          <ScrollReveal delay={150}>
            <div className="bg-bg-secondary p-10 flex flex-col justify-center min-h-full">
              <CalendlySlot url={calendlyUrl} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
