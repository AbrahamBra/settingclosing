export interface FidelityMetrics {
  avgWordLength: number
  questionRatio: number
  ttr: number
  corpus?: FidelityMetrics
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function metricsFor(text: string): Omit<FidelityMetrics, 'corpus'> {
  const tokens = tokenize(text)
  if (tokens.length === 0) {
    return { avgWordLength: 0, questionRatio: 0, ttr: 0 }
  }
  const avgWordLength = tokens.reduce((sum, t) => sum + t.length, 0) / tokens.length

  const sentences = splitSentences(text)
  const questions = sentences.filter((s) => s.endsWith('?')).length
  const questionRatio = sentences.length === 0 ? 0 : questions / sentences.length

  const unique = new Set(tokens)
  const ttr = unique.size / tokens.length

  return { avgWordLength, questionRatio, ttr }
}

export function computeFidelity(generated: string, sourcePosts: string[]): FidelityMetrics {
  const base = metricsFor(generated)
  if (sourcePosts.length === 0) return base
  const corpusText = sourcePosts.join('\n\n')
  return { ...base, corpus: metricsFor(corpusText) }
}
