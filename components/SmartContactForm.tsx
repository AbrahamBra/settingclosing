'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  firstName: string
  email: string
  phone: string
  offre: string
  message: string
}

const initialForm: FormData = {
  firstName: '',
  email: '',
  phone: '',
  offre: '',
  message: '',
}

const offreOptions = [
  { value: '', label: 'Je ne sais pas encore' },
  { value: 'setting-linkedin', label: 'Setting LinkedIn' },
  { value: 'setting-telephonique', label: 'Setting Téléphonique' },
  { value: 'setting-newsletter', label: 'Setting Newsletter' },
  { value: 'bundle', label: 'Offre combinée' },
]

const placeholders: Record<string, string> = {
  'setting-linkedin':
    "Je cible [secteur/persona]. Mon ticket moyen est d'environ [X]€. Je cherche à obtenir [X] RDV/semaine.",
  'setting-telephonique':
    "Je reçois environ [X] leads/mois via [source]. Mon problème principal : [personne ne les rappelle / pas de qualification / leads perdus].",
  'setting-newsletter':
    "J'ai une base de [X] contacts sur [outil]. Aujourd'hui elle ne génère [aucun revenu / peu de RDV].",
  'bundle':
    "Je cherche une solution complète. Ma situation actuelle : [décrivez brièvement].",
  '':
    "Décrivez votre situation et vos objectifs...",
}

const inputClass =
  'w-full bg-[#1C1A16] border border-white/[0.06] rounded-lg px-4 py-3 font-sans text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors'

const labelClass = 'font-sans text-sm text-text-muted block mb-1.5'

export function SmartContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const searchParams = useSearchParams()
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com'

  useEffect(() => {
    const offreParam = searchParams.get('offre')
    if (offreParam && offreOptions.some((o) => o.value === offreParam)) {
      setForm((prev) => ({ ...prev, offre: offreParam }))
    }
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.email,
          phone: form.phone,
          offre: form.offre,
          message: form.message,
        }),
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
          lead_type: form.offre || 'non_specifie',
          method: 'smart_form',
        })
      }
    } catch {
      setState('error')
      setErrorMsg('Une erreur est survenue. Réessayez plus tard.')
    }
  }

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-max max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="font-sans text-h2 font-extrabold text-text-primary text-center mb-4">
            On en parle ?
          </h2>
          <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10">
            30 minutes pour comprendre votre situation et voir si on peut vous aider.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {state === 'success' ? (
            <p className="font-sans text-[#34D399] font-semibold text-center">
              Message reçu. On vous répond sous 24h.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              {/* Row: Prénom + Email side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
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
                    className={inputClass}
                    placeholder="Jean"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jean@example.com"
                  />
                </div>
              </div>

              {/* Téléphone - full width */}
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+33 6 00 00 00 00"
                />
              </div>

              {/* Offre intéressée - full width */}
              <div>
                <label htmlFor="offre" className={labelClass}>
                  Offre qui vous intéresse
                </label>
                <select
                  id="offre"
                  name="offre"
                  value={form.offre}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  {offreOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message with dynamic placeholder */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Votre situation (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder={placeholders[form.offre] ?? placeholders['']}
                />
              </div>

              {/* Error message */}
              {state === 'error' && (
                <p className="font-sans text-sm text-red-400">{errorMsg}</p>
              )}

              {/* Submit button */}
              <ButtonGlow type="submit" disabled={state === 'loading'} className="w-full">
                {state === 'loading' ? 'Envoi en cours...' : 'Recevoir mon estimation de pipeline'}
              </ButtonGlow>

              {/* Calendly link */}
              <p className="text-center">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-text-muted text-sm hover:text-text-primary transition-colors"
                >
                  Vous préférez réserver directement un créneau ? →
                </a>
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
