# SEO Setting LinkedIn + VoiceClone Lite — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Améliorer le positionnement SEO sur « setting linkedin » via 3 pages longue-traîne + refresh du pilier + lancement d'un outil gratuit générateur de messages LinkedIn qui sert de lead magnet et bridge vers le futur SaaS AhmetA/VoiceClone.

**Architecture:** Three independent deliverables shippable séparément. Next.js 16 App Router. (1) Pure content pages with full JSON-LD. (2) Interactive tool using Claude Haiku 4.5 via a Next.js route handler with in-memory rate limiting. (3) Lead capture through Resend (already installed) — no database, no auth.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind, `@anthropic-ai/sdk` (à ajouter), `resend` (existant), Vitest (existant), Resend email, Anthropic Claude Haiku 4.5 (`claude-haiku-4-5-20251001`).

**Spec reference:** [docs/superpowers/specs/2026-04-23-seo-setting-linkedin-voiceclone-design.md](../specs/2026-04-23-seo-setting-linkedin-voiceclone-design.md)

---

## File Structure

### Created files

```
app/
├── ressources/
│   ├── setting-linkedin-exemples/
│   │   ├── page.tsx                                  # Longue-traîne "exemples"
│   │   └── opengraph-image.tsx                       # OG auto Next.js
│   ├── setting-linkedin-prix/
│   │   ├── page.tsx                                  # Longue-traîne "prix"
│   │   └── opengraph-image.tsx
│   └── setting-linkedin-ia/
│       ├── page.tsx                                  # Longue-traîne "ia"
│       └── opengraph-image.tsx
├── outils/
│   └── clone-style-linkedin/
│       ├── page.tsx                                  # Landing + outil SSR
│       └── opengraph-image.tsx
└── api/
    ├── clone-lite/
    │   └── route.ts                                  # Claude Haiku endpoint
    └── waitlist-clone/
        └── route.ts                                  # Resend waitlist endpoint

components/
└── CloneStyleForm.tsx                                # Client component (use client)

lib/
├── clone/
│   ├── prompt.ts                                     # System prompt builder
│   ├── fidelity.ts                                   # Metrics (avgWordLength, questionRatio, TTR)
│   └── rateLimit.ts                                  # In-memory Map rate limiter

tests/
├── clone/
│   ├── fidelity.test.ts                              # Unit tests metrics
│   ├── prompt.test.ts                                # System prompt builder
│   └── rateLimit.test.ts                             # Rate limiter logic
├── api/
│   ├── clone-lite.test.ts                            # Route handler integration
│   └── waitlist-clone.test.ts                        # Route handler integration
```

### Modified files

```
package.json                                          # Add @anthropic-ai/sdk
.env.example                                          # Add ANTHROPIC_API_KEY (créer si absent)
app/sitemap.ts                                        # +4 URLs
app/ressources/setting-linkedin/page.tsx              # Refresh additif (dates, FAQ+3, HowTo, liens)
app/ressources/ia-methode-humain-setting-linkedin/page.tsx  # +1 lien sortant
app/ressources/outils-setting-linkedin/page.tsx       # +1 lien sortant
SEO-DASHBOARD.md                                      # Note consolidation
```

---

## Chunk 1: Infrastructure and shared utilities

Installation des dépendances, scaffold des modules `lib/clone/`, tests unitaires déterministes. Aucune route réseau. Tout ce chunk doit passer en vert avant d'entamer les routes API.

### Task 1: Install Anthropic SDK and prepare env

**Files:**
- Modify: `package.json`
- Create: `.env.example`

- [ ] **Step 1: Install the SDK**

Run: `npm install @anthropic-ai/sdk`
Expected: `@anthropic-ai/sdk` ajouté dans `dependencies`, pas d'erreur, `package-lock.json` mis à jour.

- [ ] **Step 2: Create `.env.example` with required keys**

Content:

```
# Anthropic API — used by /api/clone-lite
ANTHROPIC_API_KEY=

# Resend (already used elsewhere) — used by /api/waitlist-clone and /api/contact
RESEND_API_KEY=

# Comma-separated recipients for contact and waitlist notifications
CONTACT_EMAILS=a.brakha@challengerslab.com
```

- [ ] **Step 3: Confirm `.env.local` is gitignored**

Run: `grep -q '^\.env' .gitignore && echo OK || echo MISSING`
Expected: `OK`. Si `MISSING`, ajouter `.env*.local` et `.env` à `.gitignore`.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json .env.example
git commit -m "chore(deps): add @anthropic-ai/sdk + env.example"
```

### Task 2: Fidelity metrics module (TDD)

**Files:**
- Create: `lib/clone/fidelity.ts`
- Test: `tests/clone/fidelity.test.ts`

- [ ] **Step 1: Write failing tests**

Fichier `tests/clone/fidelity.test.ts` :

```typescript
import { describe, it, expect } from 'vitest'
import { computeFidelity } from '@/lib/clone/fidelity'

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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/clone/fidelity.test.ts`
Expected: FAIL with module not found.

- [ ] **Step 3: Implement `lib/clone/fidelity.ts`**

```typescript
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
    .split(/[.!?]+/)
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
  const rawSentences = text.match(/[^.!?]+[.!?]*/g) ?? []
  const questions = rawSentences.filter((s) => /\?/.test(s)).length
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/clone/fidelity.test.ts`
Expected: 5 passed.

- [ ] **Step 5: Commit**

```bash
git add lib/clone/fidelity.ts tests/clone/fidelity.test.ts
git commit -m "feat(clone): fidelity metrics (avgWordLength, questionRatio, TTR)"
```

### Task 3: System prompt builder (TDD)

**Files:**
- Create: `lib/clone/prompt.ts`
- Test: `tests/clone/prompt.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
import { describe, it, expect } from 'vitest'
import { buildSystemPrompt, buildUserPrompt } from '@/lib/clone/prompt'

describe('buildSystemPrompt', () => {
  it('includes all provided posts as few-shot examples', () => {
    const posts = ['Post A contenu.', 'Post B contenu différent.']
    const prompt = buildSystemPrompt(posts)
    expect(prompt).toContain('Post A contenu.')
    expect(prompt).toContain('Post B contenu différent.')
  })

  it('asks for a 50 to 80 words LinkedIn prospection message', () => {
    const prompt = buildSystemPrompt(['x'])
    expect(prompt).toMatch(/50.*80.*mots/i)
    expect(prompt).toMatch(/linkedin/i)
  })

  it('forbids AI tell-tale patterns explicitly', () => {
    const prompt = buildSystemPrompt(['x'])
    expect(prompt.toLowerCase()).toMatch(/sans (signaux|patterns) (ia|ai)|éviter.*(ia|ai)/i)
  })
})

describe('buildUserPrompt', () => {
  it('wraps the target context into a message request', () => {
    const user = buildUserPrompt('Prospect DG PME industrielle 50-200 pers qui a réagi à un post sur la RSE')
    expect(user).toContain('DG PME industrielle')
    expect(user.toLowerCase()).toContain('prospect')
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/clone/prompt.test.ts`
Expected: FAIL with module not found.

- [ ] **Step 3: Implement `lib/clone/prompt.ts`**

```typescript
export function buildSystemPrompt(posts: string[]): string {
  const examples = posts
    .map((p, i) => `<example index="${i + 1}">\n${p.trim()}\n</example>`)
    .join('\n\n')

  return `Tu es un assistant qui écrit des messages de prospection LinkedIn B2B en français, dans le style exact de l'utilisateur.

Voici des exemples de posts écrits par l'utilisateur. Analyse le rythme, la longueur de phrase, le vocabulaire, les tics de langage, l'usage de questions, la ponctuation.

${examples}

Règles strictes :
- Produis UN SEUL message LinkedIn de prospection (setting) entre 50 et 80 mots.
- Reprends exactement le style de l'utilisateur (longueur de phrases, rythme, vocabulaire).
- Sans signaux IA : évite "Dans le monde de", "il est important de", "n'hésitez pas", formules vagues, superlatifs non justifiés.
- Sans emoji sauf si l'utilisateur en utilise.
- Pas de signature, pas de salutation finale formelle.
- Accroche contextuelle précise basée sur le contexte prospect fourni.
- Français.

Rends uniquement le message, sans préambule ni explication.`
}

export function buildUserPrompt(targetContext: string): string {
  return `Contexte du prospect à contacter :

${targetContext.trim()}

Écris le message.`
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/clone/prompt.test.ts`
Expected: 4 passed.

- [ ] **Step 5: Commit**

```bash
git add lib/clone/prompt.ts tests/clone/prompt.test.ts
git commit -m "feat(clone): system prompt builder with few-shot examples"
```

### Task 4: Rate limiter module (TDD)

**Files:**
- Create: `lib/clone/rateLimit.ts`
- Test: `tests/clone/rateLimit.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { checkAndConsume, __resetForTests } from '@/lib/clone/rateLimit'

describe('clone rate limiter', () => {
  beforeEach(() => {
    __resetForTests()
    vi.useRealTimers()
  })

  it('allows the first 3 calls from the same IP', () => {
    expect(checkAndConsume('1.2.3.4')).toEqual({ allowed: true, remaining: 2 })
    expect(checkAndConsume('1.2.3.4')).toEqual({ allowed: true, remaining: 1 })
    expect(checkAndConsume('1.2.3.4')).toEqual({ allowed: true, remaining: 0 })
  })

  it('blocks the 4th call from the same IP', () => {
    checkAndConsume('1.2.3.4')
    checkAndConsume('1.2.3.4')
    checkAndConsume('1.2.3.4')
    const r = checkAndConsume('1.2.3.4')
    expect(r.allowed).toBe(false)
  })

  it('tracks IPs independently', () => {
    checkAndConsume('1.1.1.1')
    checkAndConsume('1.1.1.1')
    checkAndConsume('1.1.1.1')
    expect(checkAndConsume('2.2.2.2').allowed).toBe(true)
  })

  it('resets after 24h', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-04-23T10:00:00Z'))
    checkAndConsume('1.2.3.4')
    checkAndConsume('1.2.3.4')
    checkAndConsume('1.2.3.4')
    vi.setSystemTime(new Date('2026-04-24T10:00:01Z'))
    expect(checkAndConsume('1.2.3.4').allowed).toBe(true)
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/clone/rateLimit.test.ts`
Expected: FAIL with module not found.

- [ ] **Step 3: Implement `lib/clone/rateLimit.ts`**

```typescript
const WINDOW_MS = 24 * 60 * 60 * 1000
const MAX_CALLS = 3

interface Entry {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()

export interface RateLimitResult {
  allowed: boolean
  remaining: number
}

export function checkAndConsume(ip: string): RateLimitResult {
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_CALLS - 1 }
  }

  if (entry.count >= MAX_CALLS) {
    return { allowed: false, remaining: 0 }
  }

  entry.count += 1
  return { allowed: true, remaining: MAX_CALLS - entry.count }
}

export function __resetForTests() {
  store.clear()
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/clone/rateLimit.test.ts`
Expected: 4 passed.

- [ ] **Step 5: Commit**

```bash
git add lib/clone/rateLimit.ts tests/clone/rateLimit.test.ts
git commit -m "feat(clone): in-memory rate limiter (3/24h/IP)"
```

---

## Chunk 2: API routes

Cette chunk assume que Chunk 1 est vert. Chaque route handler est testé en isolation avec un client Anthropic mocké.

### Task 5: `/api/clone-lite` route handler (TDD)

**Files:**
- Create: `app/api/clone-lite/route.ts`
- Test: `tests/api/clone-lite.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

const createMock = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: class {
    messages = { create: createMock }
  },
}))
vi.mock('@/lib/clone/rateLimit', async () => {
  const actual = await vi.importActual<typeof import('@/lib/clone/rateLimit')>('@/lib/clone/rateLimit')
  return actual
})

import { POST } from '@/app/api/clone-lite/route'
import { __resetForTests } from '@/lib/clone/rateLimit'

function makeReq(body: unknown, ip = '9.9.9.9'): Request {
  return new Request('http://localhost/api/clone-lite', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': ip },
    body: JSON.stringify(body),
  })
}

describe('/api/clone-lite', () => {
  beforeEach(() => {
    createMock.mockReset()
    __resetForTests()
  })

  it('returns 400 when fewer than 3 posts are provided', async () => {
    const res = await POST(makeReq({ posts: ['a', 'b'], targetContext: 'contexte valide assez long' }))
    expect(res.status).toBe(400)
  })

  it('returns 400 when a post is shorter than 50 chars', async () => {
    const shortPost = 'trop court'
    const res = await POST(makeReq({ posts: [shortPost, 'x'.repeat(60), 'y'.repeat(60)], targetContext: 'contexte valide' }))
    expect(res.status).toBe(400)
  })

  it('returns 200 with message and fidelityScore on success', async () => {
    createMock.mockResolvedValue({
      content: [{ type: 'text', text: 'Bonjour, message généré pour le test, assez long pour passer les metrics.' }],
    })
    const longPost = 'Contenu de post long pour dépasser 50 caractères facilement dans ce test.'
    const res = await POST(
      makeReq({
        posts: [longPost, longPost + ' b', longPost + ' c'],
        targetContext: 'Prospect DG PME industrielle 50-200 personnes',
      }),
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(typeof json.message).toBe('string')
    expect(json.fidelityScore).toBeDefined()
    expect(typeof json.fidelityScore.avgWordLength).toBe('number')
  })

  it('returns 429 when rate limit exhausted', async () => {
    createMock.mockResolvedValue({ content: [{ type: 'text', text: 'ok ok ok ok ok' }] })
    const longPost = 'x'.repeat(60)
    const body = { posts: [longPost, longPost, longPost], targetContext: 'contexte' }
    await POST(makeReq(body, '7.7.7.7'))
    await POST(makeReq(body, '7.7.7.7'))
    await POST(makeReq(body, '7.7.7.7'))
    const res = await POST(makeReq(body, '7.7.7.7'))
    expect(res.status).toBe(429)
  })

  it('returns 500 on Anthropic failure with generic message', async () => {
    createMock.mockRejectedValue(new Error('API down'))
    const longPost = 'x'.repeat(60)
    const res = await POST(makeReq({ posts: [longPost, longPost, longPost], targetContext: 'contexte' }, '8.8.8.8'))
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toBeDefined()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/api/clone-lite.test.ts`
Expected: FAIL (module not found).

- [ ] **Step 3: Implement the route handler**

```typescript
import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { checkAndConsume } from '@/lib/clone/rateLimit'
import { buildSystemPrompt, buildUserPrompt } from '@/lib/clone/prompt'
import { computeFidelity } from '@/lib/clone/fidelity'

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
        .filter((c): c is { type: 'text'; text: string } => c.type === 'text')
        .map((c) => c.text)
        .join('\n')
        .trim() || ''

    const fidelityScore = computeFidelity(text, validated.posts)

    return NextResponse.json({ message: text, fidelityScore, remaining: rl.remaining }, { status: 200 })
  } catch (error) {
    console.error('[CLONE_LITE] Anthropic error:', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ error: 'Notre IA est surchargée, réessaye dans quelques minutes.' }, { status: 500 })
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/api/clone-lite.test.ts`
Expected: 5 passed.

- [ ] **Step 5: Commit**

```bash
git add app/api/clone-lite/route.ts tests/api/clone-lite.test.ts
git commit -m "feat(api): /api/clone-lite endpoint with Haiku 4.5 + rate limit"
```

### Task 6: `/api/waitlist-clone` route handler (TDD)

**Files:**
- Create: `app/api/waitlist-clone/route.ts`
- Test: `tests/api/waitlist-clone.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest'

const sendMock = vi.fn()
vi.mock('resend', () => ({
  Resend: class {
    emails = { send: sendMock }
  },
}))

import { POST } from '@/app/api/waitlist-clone/route'

function makeReq(body: unknown): Request {
  return new Request('http://localhost/api/waitlist-clone', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('/api/waitlist-clone', () => {
  beforeEach(() => {
    sendMock.mockReset()
    sendMock.mockResolvedValue({ id: 'fake-id' })
  })

  it('returns 400 on invalid email', async () => {
    const res = await POST(makeReq({ email: 'not-an-email' }))
    expect(res.status).toBe(400)
  })

  it('calls resend twice on valid submission (user + admin)', async () => {
    const res = await POST(makeReq({ email: 'user@example.com' }))
    expect(res.status).toBe(200)
    expect(sendMock).toHaveBeenCalledTimes(2)
  })

  it('logs and returns 200 when Resend fails (fallback)', async () => {
    sendMock.mockRejectedValue(new Error('Resend down'))
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const res = await POST(makeReq({ email: 'user@example.com' }))
    expect(res.status).toBe(200)
    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0]).toMatch(/\[WAITLIST_FALLBACK\]/)
    spy.mockRestore()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/api/waitlist-clone.test.ts`
Expected: FAIL.

- [ ] **Step 3: Implement the route handler**

```typescript
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

interface Payload {
  email?: string
  postsSample?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let data: Payload
  try {
    data = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  if (!data.email || !EMAIL_RE.test(data.email) || data.email.length > 254) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const adminRecipient = process.env.CONTACT_EMAILS?.split(',')[0]?.trim() ?? 'a.brakha@challengerslab.com'

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: data.email,
      subject: 'Tu es sur la waitlist VoiceClone',
      text: `Merci, tu es bien inscrit à la waitlist.\n\nTu recevras un email dès que la version complète sera dispo.\n\n— Abraham`,
    })

    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: adminRecipient,
      subject: `[Waitlist VoiceClone] Nouveau lead : ${data.email}`,
      text: [
        `Email : ${data.email}`,
        data.postsSample ? `\nPosts envoyés dans l'outil :\n${data.postsSample.slice(0, 2000)}` : '',
      ].join('\n'),
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[WAITLIST_FALLBACK] Resend failed for', data.email, '—', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ ok: true }, { status: 200 })
  }
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/api/waitlist-clone.test.ts`
Expected: 3 passed.

- [ ] **Step 5: Commit**

```bash
git add app/api/waitlist-clone/route.ts tests/api/waitlist-clone.test.ts
git commit -m "feat(api): /api/waitlist-clone — Resend notifs, no DB fallback"
```

---

## Chunk 3: Free tool UI and landing page

### Task 7: `CloneStyleForm` client component

**Files:**
- Create: `components/CloneStyleForm.tsx`

*Pas de test unitaire React pour ce composant — vérification manuelle en preview. (Justification : composant présentation + fetch direct, pas de logique métier isolable. Coût bénéfice défavorable.)*

- [ ] **Step 1: Create the component**

```tsx
'use client'

import { useState } from 'react'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

interface FidelityScore {
  avgWordLength: number
  questionRatio: number
  ttr: number
  corpus?: FidelityScore
}

export function CloneStyleForm() {
  const [posts, setPosts] = useState<string[]>(['', '', ''])
  const [context, setContext] = useState('')
  const [result, setResult] = useState<{ message: string; score: FidelityScore } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [regenCount, setRegenCount] = useState(0)
  const [waitlistEmail, setWaitlistEmail] = useState('')
  const [waitlistDone, setWaitlistDone] = useState(false)

  const addPost = () => {
    if (posts.length < 5) setPosts([...posts, ''])
  }

  const updatePost = (i: number, value: string) => {
    const next = [...posts]
    next[i] = value
    setPosts(next)
  }

  const canSubmit =
    posts.filter((p) => p.trim().length >= 50).length >= 3 && context.trim().length >= 20 && !loading

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
        setResult({ message: json.message, score: json.fidelityScore })
      }
    } catch {
      setError('Erreur réseau. Réessaye.')
    } finally {
      setLoading(false)
    }
  }

  const regenerate = async () => {
    if (regenCount >= 2) return
    setRegenCount(regenCount + 1)
    await submit()
  }

  const joinWaitlist = async () => {
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
      /* silencieux */
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {posts.map((p, i) => (
          <textarea
            key={i}
            value={p}
            onChange={(e) => updatePost(i, e.target.value)}
            placeholder={`Post LinkedIn ${i + 1} (copie-colle le texte complet)`}
            rows={4}
            className="w-full rounded border border-zinc-300 p-3 text-sm"
          />
        ))}
        {posts.length < 5 && (
          <button type="button" onClick={addPost} className="text-sm text-blue-600 hover:underline">
            + Ajouter un post
          </button>
        )}
      </div>

      <textarea
        value={context}
        onChange={(e) => setContext(e.target.value)}
        placeholder="Décris ton prospect : rôle, secteur, signal d'achat observé…"
        rows={3}
        className="w-full rounded border border-zinc-300 p-3 text-sm"
      />

      <ButtonGlow onClick={submit} disabled={!canSubmit}>
        {loading ? 'Génération…' : 'Générer mon message'}
      </ButtonGlow>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {result && (
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
          <pre className="whitespace-pre-wrap text-sm">{result.message}</pre>
          <p className="mt-3 text-xs text-zinc-500">
            Fidélité stylistique — TTR {result.score.ttr.toFixed(2)} · mots moyens {result.score.avgWordLength.toFixed(1)} · questions {(result.score.questionRatio * 100).toFixed(0)}%
          </p>
          {regenCount < 2 && (
            <button onClick={regenerate} className="mt-2 text-sm text-blue-600 hover:underline">
              Régénérer ({2 - regenCount} restant{2 - regenCount > 1 ? 's' : ''})
            </button>
          )}
        </div>
      )}

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold">Version longue avec apprentissage continu — bientôt dispo</p>
        <p className="mt-1 text-xs text-zinc-700">
          Graphe de connaissances, correction par feedback, fidelity score batch. Réserve ta place.
        </p>
        {waitlistDone ? (
          <p className="mt-3 text-sm text-green-700">Merci, check ton email ✉</p>
        ) : (
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="ton@email.com"
              className="flex-1 rounded border border-zinc-300 p-2 text-sm"
            />
            <button
              onClick={joinWaitlist}
              disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waitlistEmail)}
              className="rounded bg-zinc-900 px-3 py-2 text-sm text-white disabled:opacity-50"
            >
              Rejoindre
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/CloneStyleForm.tsx
git commit -m "feat(clone): CloneStyleForm client component"
```

### Task 8: `/outils/clone-style-linkedin` landing page

**Files:**
- Create: `app/outils/clone-style-linkedin/page.tsx`
- Create: `app/outils/clone-style-linkedin/opengraph-image.tsx`

- [ ] **Step 1: Inspect an existing `opengraph-image.tsx` for the visual template**

Run: `ls app/**/opengraph-image.tsx 2>/dev/null | head -5`

Si un fichier existe (très probable vu l'état du repo), ouvrir et reproduire la convention (1200x630, police, style).

**Fallback si aucun fichier existant** — utiliser ce template minimal :

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7 }}>setting.live</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Générateur de message LinkedIn
        </div>
        <div style={{ fontSize: 36, marginTop: 16, opacity: 0.85 }}>
          Dans ton style · Gratuit
        </div>
      </div>
    ),
    size,
  )
}
```

- [ ] **Step 2: Create the page with full metadata, JSON-LD WebApplication + HowTo, and rich content**

Structure attendue (squelette, à compléter avec ~800 mots de contenu éditorial) :

```tsx
import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { CloneStyleForm } from '@/components/CloneStyleForm'

export const metadata: Metadata = {
  title: 'Générateur de message LinkedIn dans ton style — Clone IA gratuit',
  description: 'Colle 3 posts, décris ton prospect, reçois un message de prospection LinkedIn écrit dans ton style. Gratuit, 3 générations par jour.',
  alternates: {
    canonical: 'https://www.setting.live/outils/clone-style-linkedin',
  },
  openGraph: {
    title: 'Générateur de message LinkedIn dans ton style',
    description: 'Clone IA gratuit : 3 posts → 1 message de prospection dans ton style.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: { card: 'summary_large_image' },
}

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Clone style LinkedIn',
  url: 'https://www.setting.live/outils/clone-style-linkedin',
  applicationCategory: 'BusinessApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Générateur de messages LinkedIn de prospection dans ton style d\'écriture.',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment utiliser le générateur',
  step: [
    { '@type': 'HowToStep', name: 'Colle 3 posts LinkedIn', text: 'Sélectionne 3 posts récents que tu as écrits.' },
    { '@type': 'HowToStep', name: 'Décris ton prospect', text: 'Rôle, secteur, signal observé.' },
    { '@type': 'HowToStep', name: 'Génère', text: 'Reçois un message dans ton style en quelques secondes.' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <NavbarBlog />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Générateur de message LinkedIn dans ton style</h1>
        <p className="mt-3 text-zinc-600">
          Colle 3 de tes posts, décris ton prospect, reçois un message de setting LinkedIn rédigé dans ton style exact. Gratuit, pas de compte.
        </p>
        <div className="mt-8">
          <CloneStyleForm />
        </div>
        <section className="prose prose-zinc mt-16 max-w-none">
          {/* TODO chunk 3 : 800 mots de rich content SEO :
              - Comment ça marche (+ HowTo schema)
              - Pourquoi un humain reste nécessaire
              - Limites de cette version lite (vs AhmetA complet)
              - FAQ */}
        </section>
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Fill the rich content section (~800 mots FR)**

Sections à rédiger (garder un ton humain, passer par le skill `humanizer` après premier jet) :

1. `Comment ça marche en 3 étapes` — reprendre les HowTo steps en prose.
2. `Pourquoi le message doit rester humain` — différence setting humain vs automatisation pure, lien vers `/ressources/setting-humain-vs-automatisation-linkedin`.
3. `Ce que cet outil ne fait pas (vs version pro)` — pas de graphe, pas de RAG, pas de consolidation des feedbacks, pas de corpus persistant. Teasing waitlist.
4. `FAQ` — 4-5 questions minimum (ex. « Mes posts sont-ils stockés ? », « Combien de messages par jour ? », « Ça marche pour d'autres langues que le FR ? », « Comment améliorer le résultat ? »).

- [ ] **Step 4: Create `opengraph-image.tsx`**

Suivre la convention des autres pages (1200x630, ImageResponse). Titre : « Générateur de message LinkedIn — dans ton style ».

- [ ] **Step 5: Verify no TODO markers remain in the page**

Run: `grep -n 'TODO' app/outils/clone-style-linkedin/page.tsx || echo "no TODOs"`
Expected: `no TODOs`. Si des TODO restent, les compléter avant commit.

- [ ] **Step 6: Run the build**

Run: `npm run build`
Expected: build pass, no TypeScript errors on the new files.

- [ ] **Step 7: Dev server + manual smoke**

Run: `npm run dev` (laisser tourner)
Ouvre `http://localhost:3000/outils/clone-style-linkedin` : vérifier H1, form s'affiche, ButtonGlow cliquable (même si API pas configurée sans clé Anthropic locale → on teste juste l'UI ici).

- [ ] **Step 8: Commit**

```bash
git add app/outils/clone-style-linkedin/
git commit -m "feat(outils): /outils/clone-style-linkedin landing + rich content SEO"
```

---

## Chunk 4: SEO content pages, pillar refresh, sitemap, and internal linking

Pour les pages SEO, pas de TDD au sens unit test — les pages sont des composants React statiques. Gate : build Next.js + typecheck + humanizer pass. Chaque page suit le template de `app/ressources/setting-linkedin/page.tsx` (lire en référence avant de commencer).

### Task 9: Longue-traîne `/ressources/setting-linkedin-exemples`

**Files:**
- Create: `app/ressources/setting-linkedin-exemples/page.tsx`
- Create: `app/ressources/setting-linkedin-exemples/opengraph-image.tsx`

- [ ] **Step 1: Read the pillar page as structural reference**

Read in full : `app/ressources/setting-linkedin/page.tsx` (ouvrir le fichier entier pour capter metadata + tous les blocs JSON-LD). Les 3 nouvelles pages longue-traîne DOIVENT partager exactement la même forme de schema (Article + FAQPage + BreadcrumbList + speakable + author Abraham) pour éviter la drift. Copier-adapter, ne pas inventer.

- [ ] **Step 2: Draft the page**

Contenu :
- Metadata complète (title « Setting LinkedIn : 5 exemples concrets (messages + résultats) — 2026 », canonical `https://www.setting.live/ressources/setting-linkedin-exemples`, OG, Twitter, languages fr + x-default).
- JSON-LD Article + FAQPage + BreadcrumbList, speakable, author Abraham, dates `datePublished: '2026-04-23'`.
- NavbarBlog + TldrBox + contenu + AuthorBlock + CtaArticle + RelatedArticles + Footer (même pattern que `/ressources/setting-linkedin`).
- 5 scénarios concrets en H2 (signal réaction post, changement de poste, visite profil, post viral, commentaire). Pour chaque : `Contexte du prospect`, `Message exact envoyé`, `Pourquoi ça a marché`, `Résultat chiffré`.
- FAQ finale (5-6 questions).
- Maillage sortant : vers pilier `/ressources/setting-linkedin`, vers `/ressources/setting-linkedin-prix` et `/ressources/setting-linkedin-ia`, vers `/outils/clone-style-linkedin` (CTA natif après les exemples).
- Cible ~2500 mots.

- [ ] **Step 3: Pass through humanizer skill**

Run manuellement dans la conversation : le skill `humanizer` doit être invoqué sur le texte de la page pour retirer les patterns IA.

- [ ] **Step 4: Create OG image**

Suivre le template des autres pages `ressources/*/opengraph-image.tsx`.

- [ ] **Step 5: Build check**

Run: `npm run build`
Expected: pass, aucune erreur sur la nouvelle page.

- [ ] **Step 6: Commit**

```bash
git add app/ressources/setting-linkedin-exemples/
git commit -m "feat(seo): longue-trainee setting-linkedin-exemples (5 scenarios)"
```

### Task 10: Longue-traîne `/ressources/setting-linkedin-prix`

**Files:**
- Create: `app/ressources/setting-linkedin-prix/page.tsx`
- Create: `app/ressources/setting-linkedin-prix/opengraph-image.tsx`

- [ ] **Step 1: Draft the page following the same template**

Spécificités :
- Title : « Setting LinkedIn : prix, tarifs et coûts réels en 2026 ».
- 3 blocs de comparatif chiffré : interne (SDR salaire + charges + ramp-up + turnover), agence (fourchette mensuelle 2026), freelance (tj et engagement moyen).
- Tableau statique React (pas de JS interactif) : colonnes `Option | Coût initial | Coût récurrent | Temps avant ROI | Risques`.
- FAQ bottom-funnel (6-8 questions prix).
- Maillage sortant : vers `/tarifs`, `/externaliser-prospection-linkedin`, pilier, autres longue-traîne, outil.
- Cible ~2500 mots.

- [ ] **Step 2: Humanizer pass**

- [ ] **Step 3: OG image**

- [ ] **Step 4: Build check**

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add app/ressources/setting-linkedin-prix/
git commit -m "feat(seo): longue-trainee setting-linkedin-prix (comparatif chiffre)"
```

### Task 11: Longue-traîne `/ressources/setting-linkedin-ia`

**Files:**
- Create: `app/ressources/setting-linkedin-ia/page.tsx`
- Create: `app/ressources/setting-linkedin-ia/opengraph-image.tsx`

- [ ] **Step 1: Draft the page**

Spécificités :
- Title : « Setting LinkedIn et IA : où mettre l'humain, où laisser la machine (2026) ».
- H2s : « Pourquoi 100% IA ne marche pas », « Là où l'IA est efficace (clone de style, détection signal, priorisation) », « Là où l'humain reste indispensable (jugement, contexte fin, qualification) », « Le bon équilibre en 2026 », « Cas pratique : clone de style appliqué au setting ».
- CTA dominant vers `/outils/clone-style-linkedin` (c'est la page la plus connectée à l'outil).
- FAQ.
- Maillage : pilier, les 2 autres longue-traîne, `/ressources/setting-humain-vs-automatisation-linkedin`, `/ressources/ia-methode-humain-setting-linkedin`, outil.

- [ ] **Step 2: Humanizer pass**

- [ ] **Step 3: OG image**

- [ ] **Step 4: Build check**

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add app/ressources/setting-linkedin-ia/
git commit -m "feat(seo): longue-trainee setting-linkedin-ia (equilibre humain/machine)"
```

### Task 12: Refresh pilier `/ressources/setting-linkedin`

**Files:**
- Modify: `app/ressources/setting-linkedin/page.tsx`

Approche strictement additive. Pas de réécriture des sections existantes.

- [ ] **Step 1: Update dates in the article schema**

Dans le JSON-LD `articleSchema`, passer `dateModified: '2026-04-23'`. Ne pas toucher `datePublished`.

- [ ] **Step 2: Extend speakable cssSelector**

De `['h1', '[data-speakable]', '.faq-answer']` à `['h1', '[data-speakable]', '.faq-answer', '.tldr', 'h2']`.

- [ ] **Step 3: Add HowTo JSON-LD alongside existing Article schema**

```typescript
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment faire du setting LinkedIn en 5 étapes',
  description: 'Méthode signal-based pour décrocher des RDV qualifiés sur LinkedIn.',
  step: [
    { '@type': 'HowToStep', name: 'Détecter les signaux d\'achat', text: '…' },
    { '@type': 'HowToStep', name: 'Qualifier le prospect', text: '…' },
    { '@type': 'HowToStep', name: 'Personnaliser le message', text: '…' },
    { '@type': 'HowToStep', name: 'Engager la conversation', text: '…' },
    { '@type': 'HowToStep', name: 'Passer le relais au closer', text: '…' },
  ],
}
```

Chaque `text` reprend un résumé fidèle de la section correspondante déjà dans la page. Injecter le script JSON-LD après celui de l'Article.

- [ ] **Step 4: Add the "Cas concret 2026" block (~400 mots)**

Nouveau H2 inséré après la section méthode, avant la FAQ. Structure :
- Prospect (qui, secteur, taille)
- Signal détecté (précis, daté, source)
- Message envoyé (exact)
- Conversation (résumée)
- RDV obtenu + résultat de la closing call

Passer par skill `humanizer` après rédaction.

- [ ] **Step 5: Add 3 FAQ questions at the end of the existing FAQ**

```markdown
Q: Combien coûte le setting LinkedIn ?
A: [50 mots] → lien /ressources/setting-linkedin-prix

Q: Peut-on automatiser complètement le setting LinkedIn ?
A: [50 mots] → lien /ressources/setting-linkedin-ia

Q: Setting LinkedIn vs SDR classique, quelle différence ?
A: [50 mots] → lien /externaliser-prospection-linkedin
```

Mettre à jour aussi l'objet `faqSchema` JSON-LD existant pour refléter ces 3 nouvelles entrées.

- [ ] **Step 6: Add 3 contextual outbound links within the article body**

Insérer dans le corps de l'article (pas juste dans la FAQ) des liens sortants vers les 3 nouvelles pages longue-traîne, avec ancres sémantiques variées (pas « cliquez ici »).

- [ ] **Step 7: Build check**

Run: `npm run build`
Expected: pass.

- [ ] **Step 8: Commit**

```bash
git add app/ressources/setting-linkedin/page.tsx
git commit -m "feat(seo): refresh pilier setting-linkedin (dateModified, HowTo schema, cas concret, FAQ+3)"
```

### Task 13: Update `sitemap.ts`

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Add the 4 new URLs**

Insérer dans l'array retourné par `sitemap()` :

```typescript
{
  url: 'https://www.setting.live/ressources/setting-linkedin-exemples',
  lastModified: new Date('2026-04-23'),
  changeFrequency: 'monthly',
  priority: 0.7,
},
{
  url: 'https://www.setting.live/ressources/setting-linkedin-prix',
  lastModified: new Date('2026-04-23'),
  changeFrequency: 'monthly',
  priority: 0.7,
},
{
  url: 'https://www.setting.live/ressources/setting-linkedin-ia',
  lastModified: new Date('2026-04-23'),
  changeFrequency: 'monthly',
  priority: 0.7,
},
{
  url: 'https://www.setting.live/outils/clone-style-linkedin',
  lastModified: new Date('2026-04-23'),
  changeFrequency: 'weekly',
  priority: 0.8,
},
```

Mettre aussi à jour l'entrée existante du pilier pour refléter `lastModified: new Date('2026-04-23')`.

- [ ] **Step 2: Build check**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts
git commit -m "chore(seo): add 4 new URLs to sitemap + bump pilier lastModified"
```

### Task 14: Update internal linking on existing pages

**Files:**
- Modify: `app/ressources/ia-methode-humain-setting-linkedin/page.tsx`
- Modify: `app/ressources/outils-setting-linkedin/page.tsx`

- [ ] **Step 1: Add outbound link to the new tool in `ia-methode-humain-setting-linkedin`**

Insérer un lien contextuel dans le corps (pas en FAQ) vers `/outils/clone-style-linkedin`. Ancre sémantique (ex. « générateur de messages dans ton style »).

- [ ] **Step 2: Add outbound link to the new tool in `outils-setting-linkedin`**

Ajouter à la liste des outils mentionnés : « Clone style LinkedIn — outil gratuit » avec lien interne.

- [ ] **Step 3: Build check**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add app/ressources/ia-methode-humain-setting-linkedin/page.tsx app/ressources/outils-setting-linkedin/page.tsx
git commit -m "chore(seo): maillage interne vers /outils/clone-style-linkedin"
```

### Task 15: IndexNow ping and SEO-DASHBOARD update

**Files:**
- Modify: `SEO-DASHBOARD.md`

- [ ] **Step 1: Add a new entry in SEO-DASHBOARD.md under a new section "Cycle avril 2026 — setting linkedin + clone lite"**

Lister les 4 URLs créées, le refresh du pilier, la waitlist VoiceClone, les métriques à suivre.

- [ ] **Step 2: Commit**

```bash
git add SEO-DASHBOARD.md
git commit -m "docs(seo): cycle avril 2026 - setting-linkedin + clone lite"
```

- [ ] **Step 3: After deploy, ping IndexNow manually (Abraham, post-deploy)**

Responsabilité : Abraham, après merge sur main et déploiement Vercel automatique.
Déclencher un ping pour chaque nouvelle URL via `/api/indexnow` (endpoint existant). Cette étape est hors scope repo et hors scope agent — à faire manuellement en prod. Noter la date d'exécution dans `SEO-DASHBOARD.md` après coup.

---

## Post-implementation checks

- [ ] `npm run build` passe sans erreur ni warning TypeScript
- [ ] `npx vitest run` tous tests verts
- [ ] `npm run lint` passe
- [ ] Preview Vercel : vérifier les 4 nouvelles URLs (200, contenu affiché, JSON-LD visible via View Source)
- [ ] Preview Vercel : tester l'outil `/outils/clone-style-linkedin` avec clé Anthropic en env → génération OK, rate limit fonctionne après 3 appels, waitlist reçoit l'email
- [ ] Google Rich Results Test sur chaque nouvelle URL (vérifier Article + FAQ + HowTo éligibles)
- [ ] Vérifier `sitemap.xml` expose les 4 nouvelles URLs
- [ ] Après merge sur main : ping IndexNow, soumettre sitemap dans Google Search Console

## Risques / pièges connus

- **Secret leak.** Ne jamais commit `.env.local`. `ANTHROPIC_API_KEY` vit uniquement en Vercel env + `.env.local` non tracké.
- **Rate limit cold start.** Sur Vercel, la Map in-memory se reset à chaque cold start. Volume attendu < 1000 req/jour, impact marginal. Si abus observé, migrer vers Upstash Redis (hors scope MVP).
- **Coût Anthropic.** Haiku 4.5 est cheap (~0,25$/M input, 1,25$/M output en sortie). 1000 req/jour avec ~2000 tokens each = ~3$/jour max. Tolérable.
- **Humanizer.** Passer CHAQUE nouvelle page créée par ce skill avant commit pour éviter la pénalité « contenu IA détecté » (le site a déjà subi 3 passes historiques, précédent établi).
- **Keyword cannibalization.** Pilier reste la cible pour la requête mère « setting linkedin ». Les longue-traîne visent uniquement « setting linkedin exemples/prix/ia ». Vérifier qu'aucun H1 de longue-traîne ne duplique exactement le H1 du pilier.

## Hors scope (rappel)

- Pipeline AhmetA complet (RAG, graphe, consolidation)
- Auth, compte utilisateur, billing
- Dashboard back-office waitlist
- Refonte design
- Migration vers Upstash Redis
- Déploiement réel (géré par le workflow Vercel existant après merge)
