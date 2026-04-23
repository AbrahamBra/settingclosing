'use client'

import { useState } from 'react'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

interface FidelityScore {
  avgWordLength: number
  questionRatio: number
  ttr: number
  corpus?: FidelityScore
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function CloneStyleForm() {
  const [posts, setPosts] = useState<string[]>(['', '', ''])
  const [context, setContext] = useState('')
  const [result, setResult] = useState<{ message: string; score: FidelityScore; remaining?: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [regenCount, setRegenCount] = useState(0)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistDone, setWaitlistDone] = useState(false)
  const [copied, setCopied] = useState(false)

  const addPost = () => {
    if (posts.length < 5) setPosts([...posts, ''])
  }

  const removePost = (i: number) => {
    if (posts.length > 3) setPosts(posts.filter((_, idx) => idx !== i))
  }

  const updatePost = (i: number, value: string) => {
    const next = [...posts]
    next[i] = value
    setPosts(next)
  }

  const validPostCount = posts.filter((p) => p.trim().length >= 50).length
  const contextOk = context.trim().length >= 20
  const canSubmit = validPostCount >= 3 && contextOk && !loading

  const submit = async () => {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/clone-lite', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          posts: posts.map((p) => p.trim()).filter((p) => p.length >= 50),
          targetContext: context.trim(),
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error ?? 'Erreur inconnue')
      } else {
        setResult({ message: json.message, score: json.fidelityScore, remaining: json.remaining })
      }
    } catch {
      setError('Erreur réseau. Réessaye dans quelques secondes.')
    } finally {
      setLoading(false)
    }
  }

  const regenerate = async () => {
    if (regenCount >= 2) return
    setRegenCount(regenCount + 1)
    await submit()
  }

  const copy = async () => {
    if (!result) return
    try {
      await navigator.clipboard.writeText(result.message)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard indispo */
    }
  }

  const joinWaitlist = async () => {
    if (!EMAIL_RE.test(waitlistEmail)) return
    try {
      const res = await fetch('/api/waitlist-clone', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: waitlistEmail,
          postsSample: posts.filter((p) => p.trim()).join('\n---\n'),
        }),
      })
      if (res.ok) setWaitlistDone(true)
    } catch {
      /* silencieux — best effort */
    }
  }

  return (
    <div className="space-y-8">
      {/* Posts */}
      <div>
        <label className="font-sans text-sm font-semibold text-text-primary block mb-3">
          Étape 1 — Colle 3 à 5 de tes posts LinkedIn
          <span className="ml-2 font-normal text-text-secondary text-xs">
            ({validPostCount}/3 posts ≥ 50 caractères)
          </span>
        </label>
        <div className="space-y-3">
          {posts.map((p, i) => (
            <div key={i} className="relative">
              <textarea
                value={p}
                onChange={(e) => updatePost(i, e.target.value)}
                placeholder={`Post LinkedIn ${i + 1} — copie-colle le texte complet (50 caractères minimum)`}
                rows={4}
                className="w-full rounded-xl border border-white/[0.08] bg-bg-secondary/60 p-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent/40 focus:outline-none transition-colors"
              />
              {posts.length > 3 && (
                <button
                  type="button"
                  onClick={() => removePost(i)}
                  className="absolute top-2 right-2 text-xs text-text-secondary hover:text-red-400 transition-colors"
                  aria-label={`Supprimer le post ${i + 1}`}
                >
                  &#x2715;
                </button>
              )}
            </div>
          ))}
          {posts.length < 5 && (
            <button
              type="button"
              onClick={addPost}
              className="font-sans text-sm text-accent hover:underline"
            >
              + Ajouter un post ({posts.length}/5)
            </button>
          )}
        </div>
      </div>

      {/* Context */}
      <div>
        <label className="font-sans text-sm font-semibold text-text-primary block mb-3">
          Étape 2 — Décris ton prospect
          <span className="ml-2 font-normal text-text-secondary text-xs">
            ({context.trim().length}/20 caractères minimum)
          </span>
        </label>
        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Ex : DG d'une PME industrielle 50-200 personnes. A commenté un post sur l'IA dans la production. Prise de poste il y a 6 mois."
          rows={3}
          className="w-full rounded-xl border border-white/[0.08] bg-bg-secondary/60 p-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent/40 focus:outline-none transition-colors"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 flex-wrap">
        <ButtonGlow onClick={submit} disabled={!canSubmit}>
          {loading ? 'Génération…' : 'Générer mon message'}
        </ButtonGlow>
        {!canSubmit && !loading && (
          <p className="font-sans text-xs text-text-secondary">
            {validPostCount < 3 && 'Il te faut 3 posts ≥ 50 caractères. '}
            {!contextOk && 'Décris ton prospect (20 caractères minimum).'}
          </p>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
          <p className="font-sans text-sm text-red-300">{error}</p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="rounded-xl border border-accent/20 bg-bg-secondary p-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Message généré dans ton style
          </p>
          <pre className="whitespace-pre-wrap font-sans text-sm text-text-primary leading-relaxed">
            {result.message}
          </pre>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={copy}
              className="rounded-lg border border-white/[0.08] bg-bg-primary/50 px-4 py-2 text-xs text-text-primary hover:border-accent/30 transition-colors"
            >
              {copied ? '✓ Copié' : 'Copier'}
            </button>
            {regenCount < 2 && (
              <button
                type="button"
                onClick={regenerate}
                className="font-sans text-xs text-accent hover:underline"
              >
                Régénérer ({2 - regenCount} restant{2 - regenCount > 1 ? 's' : ''})
              </button>
            )}
            {typeof result.remaining === 'number' && (
              <span className="font-sans text-xs text-text-secondary">
                {result.remaining} génération{result.remaining > 1 ? 's' : ''} restante{result.remaining > 1 ? 's' : ''} aujourd&apos;hui
              </span>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <p className="font-sans text-xs text-text-secondary">
              <span className="font-semibold text-text-primary">Fidélité stylistique</span> —
              {' '}TTR {result.score.ttr.toFixed(2)} ·
              {' '}mot moyen {result.score.avgWordLength.toFixed(1)} car. ·
              {' '}questions {(result.score.questionRatio * 100).toFixed(0)}%
              {result.score.corpus && (
                <>
                  {' '}· <span className="text-text-secondary/60">ton corpus : TTR {result.score.corpus.ttr.toFixed(2)}, mot moyen {result.score.corpus.avgWordLength.toFixed(1)}, questions {(result.score.corpus.questionRatio * 100).toFixed(0)}%</span>
                </>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Waitlist */}
      <div className="rounded-xl border border-white/[0.06] bg-bg-secondary/80 p-6">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          Version complète — bientôt
        </p>
        <p className="font-sans text-sm font-semibold text-text-primary mb-2">
          Graphe de connaissances, apprentissage continu, corpus persistant
        </p>
        <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
          Cette version lite travaille à partir de 3-5 posts. La version complète indexe ton historique,
          apprend de tes corrections et maintient ton style à travers le temps. Réserve ta place —
          accès anticipé pour les inscrits.
        </p>
        {waitlistDone ? (
          <p className="font-sans text-sm text-accent">
            Merci, tu es sur la liste. On t&apos;écrit dès que c&apos;est prêt. ✉
          </p>
        ) : (
          <div className="flex gap-2 flex-wrap">
            <input
              type="email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="ton@email.com"
              className="flex-1 min-w-[220px] rounded-lg border border-white/[0.08] bg-bg-primary/50 p-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent/40 focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={joinWaitlist}
              disabled={!EMAIL_RE.test(waitlistEmail)}
              className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all"
            >
              Rejoindre
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
