'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

const CONSENT_KEY = 'setting-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      // Petit délai pour ne pas bloquer le rendu initial
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
    if (consent === 'accepted') {
      enableAnalytics()
    }
  }, [])

  function enableAnalytics() {
    // Déclenche le chargement de GA/GTM si le consentement est donné
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      })
    }
  }

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    enableAnalytics()
  }

  function refuse() {
    localStorage.setItem(CONSENT_KEY, 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-2xl mx-auto bg-bg-secondary border border-white/[0.08] rounded-2xl p-5 md:p-6 shadow-2xl">
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
          Ce site utilise Google Analytics pour mesurer l&apos;audience.
          Aucune donn&eacute;e personnelle n&apos;est vendue ni partag&eacute;e avec des tiers.
          Tu peux refuser sans impact sur ta navigation.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="px-5 py-2 rounded-lg bg-accent text-bg-primary font-sans text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={refuse}
            className="px-5 py-2 rounded-lg border border-white/[0.1] text-text-muted font-sans text-sm hover:text-text-primary hover:border-white/[0.2] transition-colors"
          >
            Refuser
          </button>
          <a
            href="/politique-confidentialite"
            className="ml-auto text-text-muted font-sans text-xs hover:text-text-secondary transition-colors hidden sm:inline"
          >
            Politique de confidentialit&eacute;
          </a>
        </div>
      </div>
    </div>
  )
}
