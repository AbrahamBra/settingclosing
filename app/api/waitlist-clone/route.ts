import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isValidEmail } from '../../../lib/email'

export const runtime = 'nodejs'

// Lazy singleton so serverless warm invocations reuse the HTTP agent,
// while letting test mocks for `resend` register before construction.
let resendClient: Resend | null = null
function getResend(): Resend {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY)
  return resendClient
}

interface Payload {
  email?: string
  postsSample?: string
}

export async function POST(request: Request) {
  let data: Payload
  try {
    data = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  if (!data.email || !isValidEmail(data.email)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const adminRecipient = process.env.CONTACT_EMAILS?.split(',')[0]?.trim() ?? 'a.brakha@challengerslab.com'

  // Send both emails in parallel with allSettled — a failure on one side
  // (e.g. admin bounce) shouldn't block the user confirmation. We log any
  // failure for manual follow-up and always return 200 to the client.
  const resend = getResend()
  const results = await Promise.allSettled([
    resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: data.email,
      subject: 'Tu es sur la waitlist VoiceClone',
      text: `Merci, tu es bien inscrit à la waitlist.\n\nTu recevras un email dès que la version complète sera dispo.\n\n— Abraham`,
    }),
    resend.emails.send({
      from: 'Setting <noreply@setting.live>',
      to: adminRecipient,
      subject: `[Waitlist VoiceClone] Nouveau lead : ${data.email}`,
      text: [
        `Email : ${data.email}`,
        data.postsSample ? `\nPosts envoyés dans l'outil :\n${data.postsSample.slice(0, 2000)}` : '',
      ].join('\n'),
    }),
  ])

  for (const r of results) {
    if (r.status === 'rejected') {
      console.error(
        '[WAITLIST_FALLBACK] Resend failed for',
        data.email,
        '—',
        r.reason instanceof Error ? r.reason.message : 'unknown',
      )
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
