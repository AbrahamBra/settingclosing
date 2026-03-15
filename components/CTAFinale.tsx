'use client'

import { useState } from 'react'
import { InlineWidget } from 'react-calendly'
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
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Prêt à déléguer ?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
          <ScrollReveal>
            <div className="bg-bg-secondary p-10 border-b md:border-b-0 md:border-r border-white/5">
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-8">
                Nous contacter
              </h3>

              {state === 'success' ? (
                <p className="font-sans text-accent font-semibold">
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
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
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
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
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
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="+33 6 00 00 00 00"
                    />
                  </div>

                  <div>
                    <p className="font-sans text-sm text-text-muted mb-3">Vous intéresse * :</p>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Service souhaité">
                      {(['setting', 'closing', 'les_deux'] as Interest[]).map((value) => {
                        const labels: Record<Interest, string> = { setting: 'Setting', closing: 'Closing', les_deux: 'Les deux' }
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
                                : 'border-white/10 text-text-muted hover:border-white/20'
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
                      className="w-full bg-bg-primary border border-white/10 rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
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

          <ScrollReveal delay={150}>
            <div className="bg-bg-secondary p-10 flex flex-col gap-6">
              <div>
                <h3 className="font-sans font-semibold text-h3 text-text-primary mb-2">
                  Vous préférez en parler directement ?
                </h3>
                <p className="font-sans text-text-muted text-sm">
                  Réservez un créneau de 30 minutes, sans engagement.
                </p>
              </div>
              <InlineWidget
                url={calendlyUrl}
                styles={{ height: '500px', minWidth: '280px' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
