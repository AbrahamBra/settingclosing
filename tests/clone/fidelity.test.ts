import { describe, it, expect } from 'vitest'
import { computeFidelity } from '../../lib/clone/fidelity'

describe('computeFidelity', () => {
  it('computes avgWordLength over a simple sentence', () => {
    const r = computeFidelity('Bonjour toi', [])
    // mots : "Bonjour" (7), "toi" (3) -> avg 5
    expect(r.avgWordLength).toBe(5)
  })

  it('computes questionRatio for mixed sentences', () => {
    const r = computeFidelity('Ça va ? Bien. Et toi ?', [])
    // 3 phrases, 2 questions -> 2/3
    expect(r.questionRatio).toBeCloseTo(2 / 3, 3)
  })

  it('computes TTR (type token ratio) lowercased and depunctuated', () => {
    const r = computeFidelity('Le chat. Le Chat !', [])
    // tokens: le, chat, le, chat -> 2 uniques / 4 total = 0.5
    expect(r.ttr).toBe(0.5)
  })

  it('returns 0 for empty text without throwing', () => {
    const r = computeFidelity('', [])
    expect(r.avgWordLength).toBe(0)
    expect(r.questionRatio).toBe(0)
    expect(r.ttr).toBe(0)
  })

  it('computes corpus metrics when posts are provided', () => {
    const r = computeFidelity('Message généré.', ['Un post simple.', 'Deux phrases ici. OK.'])
    expect(r.corpus).toBeDefined()
    expect(typeof r.corpus!.avgWordLength).toBe('number')
  })
})
