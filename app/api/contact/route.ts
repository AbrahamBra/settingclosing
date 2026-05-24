import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  firstName: string
  email: string
  phone?: string
  message?: string
  offre?: string
  _hp?: string // honeypot
}

const VALID_OFFRES = ['setting-linkedin', 'setting-telephonique', 'setting-newsletter', 'bundle', 'autre'] as const

const offreLabels: Record<string, string> = {
  'setting-linkedin': 'Setting LinkedIn',
  'setting-telephonique': 'Setting téléphonique',
  'setting-newsletter': 'Setting Newsletter',
  'bundle': 'Offre combinée',
  'autre': 'Autre besoin',
}

const ALLOWED_ORIGINS = [
  'https://settingclosing.com',
  'https://www.settingclosing.com',
  'https://setting.live',
  'https://www.setting.live',
]

// --- Simple in-memory rate limiter ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > RATE_LIMIT_MAX
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip)
  }
}, 300_000)

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.firstName || data.firstName.trim().length < 2) {
    return 'Pr\u00e9nom invalide (minimum 2 caract\u00e8res)'
  }
  if (data.firstName.length > 100) {
    return 'Pr\u00e9nom trop long (maximum 100 caract\u00e8res)'
  }
  if (!data.email || !isValidEmail(data.email)) {
    return 'Adresse email invalide'
  }
  if (data.email.length > 254) {
    return 'Adresse email trop longue'
  }
  if (data.phone && data.phone.length > 30) {
    return 'Num\u00e9ro de t\u00e9l\u00e9phone trop long'
  }
  if (data.phone && !/^[\d\s+\-().]+$/.test(data.phone)) {
    return 'Format de t\u00e9l\u00e9phone invalide'
  }
  if (data.message && data.message.length > 1000) {
    return 'Message trop long (maximum 1000 caract\u00e8res)'
  }
  if (data.offre && !VALID_OFFRES.includes(data.offre as typeof VALID_OFFRES[number])) {
    return 'Offre invalide'
  }
  return null
}

export async function POST(request: Request) {
  // --- Origin validation ---
  const origin = request.headers.get('origin')
  const isDev = process.env.NODE_ENV === 'development'
  if (!isDev && origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ success: false, error: 'Origine non autoris\u00e9e' }, { status: 403 })
  }

  // --- Rate limiting ---
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Trop de requ\u00eates. R\u00e9essayez dans une minute.' },
      { status: 429 }
    )
  }

  let data: Partial<ContactPayload>

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Corps de requ\u00eate invalide' }, { status: 422 })
  }

  // --- Honeypot: reject if filled ---
  if (data._hp) {
    // Silently accept to not tip off bots, but don't send email
    return NextResponse.json({ success: true }, { status: 200 })
  }

  const validationError = validate(data)
  if (validationError) {
    return NextResponse.json({ success: false, error: validationError }, { status: 422 })
  }

  const payload = data as ContactPayload
  const offreLabel = payload.offre ? (offreLabels[payload.offre] ?? 'setting') : 'setting'

  const recipients = (process.env.CONTACT_EMAILS ?? 'a.brakha@challengerslab.com,b.krafat@challengerslab.com,a.bekkali@challengerslab.com')
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean)

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: recipients,
      subject: `Nouvelle demande \u2014 ${offreLabel} \u2014 ${payload.firstName}`,
      text: [
        `Pr\u00e9nom : ${payload.firstName}`,
        `Email : ${payload.email}`,
        `T\u00e9l\u00e9phone : ${payload.phone ?? 'Non renseign\u00e9'}`,
        `Offre int\u00e9ress\u00e9e : ${offreLabel}`,
        `Message : ${payload.message ?? 'Aucun message'}`,
      ].join('\n'),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Resend error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
