import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  firstName: string
  email: string
  phone?: string
  message?: string
  offre?: string
}

const offreLabels: Record<string, string> = {
  'setting-linkedin': 'Setting LinkedIn',
  'setting-telephonique': 'Setting téléphonique',
  'setting-newsletter': 'Setting Newsletter',
  'bundle': 'Offre combinée',
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.firstName || data.firstName.trim().length < 2) {
    return 'Prénom invalide (minimum 2 caractères)'
  }
  if (!data.email || !isValidEmail(data.email)) {
    return 'Adresse email invalide'
  }
  if (data.message && data.message.length > 1000) {
    return 'Message trop long (maximum 1000 caractères)'
  }
  return null
}

export async function POST(request: Request) {
  let data: Partial<ContactPayload>

  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: 'Corps de requête invalide' }, { status: 422 })
  }

  const validationError = validate(data)
  if (validationError) {
    return NextResponse.json({ success: false, error: validationError }, { status: 422 })
  }

  const payload = data as ContactPayload
  const offreLabel = payload.offre ? offreLabels[payload.offre] ?? payload.offre : 'setting'

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: [
        'a.brakha@challengerslab.com',
        'b.krafat@challengerslab.com',
        'a.bekkali@challengerslab.com',
      ],
      subject: `Nouvelle demande — ${offreLabel} — ${payload.firstName}`,
      text: [
        `Prénom : ${payload.firstName}`,
        `Email : ${payload.email}`,
        `Téléphone : ${payload.phone ?? 'Non renseigné'}`,
        `Offre intéressée : ${offreLabel}`,
        `Message : ${payload.message ?? 'Aucun message'}`,
      ].join('\n'),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
