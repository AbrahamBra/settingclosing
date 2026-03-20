import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Setting — Setting commercial LinkedIn externalisé'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
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
          background: '#FAF9F6',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 60,
            height: 4,
            background: '#3B82F6',
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 400,
            color: '#1C1917',
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Setting commercial LinkedIn externalisé
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#6C6560',
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 48,
          }}
        >
          Setter dédié · Méthode signal-based · RDV qualifiés dès la semaine 1
        </div>
        {/* Brand */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#3B82F6',
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
