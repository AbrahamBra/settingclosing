import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { checkAndConsume } from '../../../lib/clone/rateLimit'
import { buildSystemPrompt, buildUserPrompt } from '../../../lib/clone/prompt'
import { computeFidelity } from '../../../lib/clone/fidelity'
import { getClientIp } from '../../../lib/http'

export const runtime = 'nodejs'

// Lazy singleton so serverless warm invocations reuse the HTTP agent,
// while keeping test mocks for `@anthropic-ai/sdk` able to register before
// the client is ever constructed (vi.mock factories run before import-time
// module body execution, but local vars they reference aren't initialized
// until after imports).
let anthropicClient: Anthropic | null = null
function getAnthropic(): Anthropic {
  if (!anthropicClient) anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  return anthropicClient
}

interface Payload {
  posts?: unknown
  targetContext?: unknown
}

function validate(data: Payload): { posts: string[]; targetContext: string } | string {
  if (!Array.isArray(data.posts) || data.posts.length < 3 || data.posts.length > 5) {
    return 'Minimum 3 posts requis (max 5).'
  }
  const posts = data.posts.map((p) => (typeof p === 'string' ? p.trim() : ''))
  if (posts.some((p) => p.length < 50)) {
    return 'Chaque post doit faire au moins 50 caractères.'
  }
  if (typeof data.targetContext !== 'string' || data.targetContext.trim().length < 20) {
    return 'Contexte prospect : 20 caractères minimum.'
  }
  return { posts, targetContext: data.targetContext.trim() }
}

export async function POST(request: Request) {
  let data: Payload
  try {
    data = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const validated = validate(data)
  if (typeof validated === 'string') {
    return NextResponse.json({ error: validated }, { status: 400 })
  }

  const rl = checkAndConsume(getClientIp(request))
  if (!rl.allowed) {
    return NextResponse.json(
      { error: '3 générations par jour atteintes. Reviens demain ou rejoins la waitlist.' },
      { status: 429 },
    )
  }

  try {
    const response = await getAnthropic().messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: buildSystemPrompt(validated.posts),
      messages: [{ role: 'user', content: buildUserPrompt(validated.targetContext) }],
    })

    const text = response.content
      .flatMap((c) => (c.type === 'text' ? [c.text] : []))
      .join('\n')
      .trim()

    const fidelityScore = computeFidelity(text, validated.posts)

    return NextResponse.json({ message: text, fidelityScore, remaining: rl.remaining }, { status: 200 })
  } catch (error) {
    console.error('[CLONE_LITE] Anthropic error:', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ error: 'Notre IA est surchargée, réessaye dans quelques minutes.' }, { status: 500 })
  }
}
