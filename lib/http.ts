/**
 * Extract the client IP from a Next.js Request.
 *
 * Uses the first value in the `x-forwarded-for` header (added by Vercel's proxy).
 * Returns `'unknown'` when the header is absent — callers should treat this as a
 * single bucket, which is the conservative behavior for rate-limiting.
 */
export function getClientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}
