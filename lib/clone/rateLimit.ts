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
