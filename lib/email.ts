/**
 * Basic RFC-lite email validation used across the app.
 *
 * Intentionally permissive — we only reject obvious malformed input and cap
 * length at 254 chars (RFC 5321 total address limit). Real validation happens
 * at delivery time by the email provider.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: string): boolean {
  return typeof email === 'string' && email.length <= 254 && EMAIL_RE.test(email)
}
