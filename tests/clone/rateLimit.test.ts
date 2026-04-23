import { describe, it, expect, beforeEach, vi } from 'vitest'
import { checkAndConsume, __resetForTests } from '../../lib/clone/rateLimit'

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
