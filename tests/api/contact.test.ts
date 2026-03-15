import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('resend', () => {
  const mockSend = vi.fn().mockResolvedValue({ data: { id: 'email-id' }, error: null })
  function MockResend() {
    return { emails: { send: mockSend } }
  }
  return { Resend: vi.fn().mockImplementation(MockResend) }
})

vi.stubEnv('RESEND_API_KEY', 're_test_key')
vi.stubEnv('CONTACT_EMAIL', 'test@example.com')

async function callRoute(body: object): Promise<Response> {
  const { POST } = await import('../../app/api/contact/route')
  const request = new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return POST(request)
}

describe('POST /api/contact', () => {
  beforeEach(() => vi.resetModules())

  it('returns 422 when required fields are missing', async () => {
    const res = await callRoute({ email: 'test@test.com' })
    expect(res.status).toBe(422)
    const json = await res.json()
    expect(json.success).toBe(false)
  })

  it('returns 200 on valid submission', async () => {
    const res = await callRoute({
      firstName: 'Jean',
      email: 'jean@example.com',
      interest: 'setting',
    })
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 422 for invalid email format', async () => {
    const res = await callRoute({
      firstName: 'Jean',
      email: 'not-an-email',
      interest: 'setting',
    })
    expect(res.status).toBe(422)
  })
})
