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
