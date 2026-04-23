import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Setting LinkedIn : prix, tarifs et coûts réels en 2026 — Setting'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
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
          Comparatif chiffré
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: '#FAF9F6',
            lineHeight: 1.15,
            marginBottom: 32,
            maxWidth: 960,
          }}
        >
          Setting LinkedIn : prix, tarifs et coûts réels en 2026
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
