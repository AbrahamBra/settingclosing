import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Setting — Ressources'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Map slug → display title for OG images
const titles: Record<string, { title: string; category: string }> = {
  'setting-commercial-b2b': { title: 'Setting commercial LinkedIn', category: 'Guide complet' },
  'closing-b2b': { title: 'Closing B2B', category: 'Guide complet' },
  'prospection-linkedin-b2b': { title: 'Prospection LinkedIn B2B', category: 'Guide complet' },
  'discovery-call-b2b': { title: 'Discovery call B2B', category: 'Guide' },
  'gestion-objections-b2b': { title: 'Objections en vente B2B', category: 'Guide' },
  'script-closing-b2b': { title: 'Scripts de closing B2B', category: 'Scripts' },
  'script-setting-linkedin': { title: 'Scripts de setting LinkedIn', category: 'Scripts' },
  'setter-b2b-definition': { title: 'Setter B2B : définition', category: 'Définition' },
  'closer-b2b': { title: 'Closer B2B : définition', category: 'Définition' },
  'difference-setting-closing': { title: 'Setting vs Closing', category: 'Comparaison' },
  'signal-achat-linkedin': { title: 'Signaux d\'achat LinkedIn', category: 'Guide' },
  'messages-linkedin-sans-reponse': { title: 'Messages LinkedIn sans réponse', category: 'Guide' },
  'relance-linkedin-b2b': { title: 'Relance LinkedIn B2B', category: 'Guide' },
  'ia-methode-humain-setting-linkedin': { title: 'IA + humain : setting LinkedIn', category: 'Méthode' },
  'comment-devenir-setter-b2b': { title: 'Devenir setter B2B', category: 'Guide carrière' },
  'cout-setter-b2b-prix': { title: 'Prix d\'un setter B2B', category: 'Guide prix' },
  'qualification-leads-b2b': { title: 'Qualification de leads B2B', category: 'Guide' },
  'methodes-vente-b2b': { title: 'Méthodes de vente B2B', category: 'Comparaison' },
  'challenger-sale-definition': { title: 'Challenger Sale', category: 'Méthode' },
  'methode-soncas': { title: 'Méthode SONCAS', category: 'Méthode' },
  'methode-spin-selling': { title: 'SPIN Selling', category: 'Méthode' },
  'devenir-business-developer': { title: 'Devenir Business Developer', category: 'Guide carrière' },
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = titles[slug]
  const title = entry?.title ?? slug.replace(/-/g, ' ')
  const category = entry?.category ?? 'Ressource'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: '#0A0908',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Category badge */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: '#FBBF24',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {category}
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: '#FAF9F6',
            lineHeight: 1.15,
            marginBottom: 32,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        {/* Accent bar */}
        <div
          style={{
            width: 60,
            height: 3,
            background: '#C87533',
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        {/* Brand */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#C87533',
            letterSpacing: '0.05em',
          }}
        >
          Setting
        </div>
      </div>
    ),
    { ...size }
  )
}
