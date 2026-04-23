import { describe, it, expect, beforeEach, vi } from 'vitest'

const sendMock = vi.fn()
vi.mock('resend', () => ({
  Resend: class {
    emails = { send: sendMock }
  },
}))

import { POST } from '../../app/api/waitlist-clone/route'

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

  it('sends user confirmation and admin notification with correct recipients & subjects', async () => {
    const res = await POST(makeReq({ email: 'user@example.com', postsSample: 'mon post linkedin' }))
    expect(res.status).toBe(200)
    expect(sendMock).toHaveBeenCalledTimes(2)

    const calls = sendMock.mock.calls.map((c) => c[0])
    const userCall = calls.find((c) => c.to === 'user@example.com')
    const adminCall = calls.find((c) => c.to !== 'user@example.com')

    expect(userCall).toBeDefined()
    expect(userCall.subject).toMatch(/waitlist/i)
    expect(userCall.from).toMatch(/@setting\.live/)

    expect(adminCall).toBeDefined()
    expect(adminCall.subject).toContain('user@example.com')
    expect(adminCall.text).toContain('user@example.com')
    expect(adminCall.text).toContain('mon post linkedin')
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
