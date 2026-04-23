import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { checkAndConsume } from '../../../lib/clone/rateLimit'
import { buildSystemPrompt, buildUserPrompt } from '../../../lib/clone/prompt'
import { computeFidelity } from '../../../lib/clone/fidelity'

export const runtime = 'nodejs'

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
  if (typeof data.targetContext !== 'string' || data.targetContext.trim().length === 0) {
    return 'Contexte prospect requis.'
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

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const rl = checkAndConsume(ip)
  if (!rl.allowed) {
    return NextResponse.json(
      { error: '3 générations par jour atteintes. Reviens demain ou rejoins la waitlist.' },
      { status: 429 },
    )
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: buildSystemPrompt(validated.posts),
      messages: [{ role: 'user', content: buildUserPrompt(validated.targetContext) }],
    })

    const text =
      response.content
        .filter((c) => c.type === 'text')
        .map((c) => (c as { type: 'text'; text: string }).text)
        .join('\n')
        .trim() || ''

    const fidelityScore = computeFidelity(text, validated.posts)

    return NextResponse.json({ message: text, fidelityScore, remaining: rl.remaining }, { status: 200 })
  } catch (error) {
    console.error('[CLONE_LITE] Anthropic error:', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ error: 'Notre IA est surchargée, réessaye dans quelques minutes.' }, { status: 500 })
  }
}
