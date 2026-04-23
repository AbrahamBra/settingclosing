import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

interface Payload {
  email?: string
  postsSample?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let data: Payload
  try {
    data = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  if (!data.email || !EMAIL_RE.test(data.email) || data.email.length > 254) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const adminRecipient = process.env.CONTACT_EMAILS?.split(',')[0]?.trim() ?? 'a.brakha@challengerslab.com'

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: data.email,
      subject: 'Tu es sur la waitlist VoiceClone',
      text: `Merci, tu es bien inscrit à la waitlist.\n\nTu recevras un email dès que la version complète sera dispo.\n\n— Abraham`,
    })

    await resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: adminRecipient,
      subject: `[Waitlist VoiceClone] Nouveau lead : ${data.email}`,
      text: [
        `Email : ${data.email}`,
        data.postsSample ? `\nPosts envoyés dans l'outil :\n${data.postsSample.slice(0, 2000)}` : '',
      ].join('\n'),
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[WAITLIST_FALLBACK] Resend failed for', data.email, '—', error instanceof Error ? error.message : 'unknown')
    return NextResponse.json({ ok: true }, { status: 200 })
  }
}
