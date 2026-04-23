import { describe, it, expect, beforeEach, vi } from 'vitest'

const createMock = vi.fn()
vi.mock('@anthropic-ai/sdk', () => ({
  default: class {
    messages = { create: createMock }
  },
}))

import { POST } from '../../app/api/clone-lite/route'
import { __resetForTests } from '../../lib/clone/rateLimit'

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
