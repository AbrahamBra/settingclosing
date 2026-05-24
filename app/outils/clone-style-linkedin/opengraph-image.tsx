import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Générateur de message LinkedIn dans ton style — Setting'
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
          Outil gratuit
        </div>
        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 400,
            color: '#FAF9F6',
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 980,
          }}
        >
          Générateur de message LinkedIn
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 300,
            color: '#C87533',
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          dans ton style · clone IA · gratuit
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
    { ...size },
  )
}
