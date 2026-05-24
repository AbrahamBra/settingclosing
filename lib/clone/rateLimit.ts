const WINDOW_MS = 24 * 60 * 60 * 1000
const MAX_CALLS = 3
const SWEEP_INTERVAL_MS = 60 * 60 * 1000 // hourly cleanup of expired buckets

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

// Sweep expired entries so the Map doesn't grow unbounded on a long-lived
// serverless instance. Same pattern as app/api/contact/route.ts.
// Guarded so test environments that repeatedly re-import the module don't
// pile up timers.
declare global {
  // eslint-disable-next-line no-var
  var __cloneRateLimitSweeper: NodeJS.Timeout | undefined
}

if (!globalThis.__cloneRateLimitSweeper) {
  globalThis.__cloneRateLimitSweeper = setInterval(() => {
    const now = Date.now()
    for (const [ip, entry] of store) {
      if (now > entry.resetAt) store.delete(ip)
    }
  }, SWEEP_INTERVAL_MS)
  // Don't keep the Node process alive just for the sweeper.
  globalThis.__cloneRateLimitSweeper.unref?.()
}

export function __resetForTests() {
  store.clear()
}
