import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Setting — Prospection LinkedIn B2B externalisée'
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
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0A0908',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: '#C87533',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Prospection LinkedIn B2B
          </div>
          <div
            style={{
              width: 56,
              height: 3,
              background: '#C87533',
              borderRadius: 2,
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#F0ECE4',
              lineHeight: 1.15,
              maxWidth: 960,
            }}
          >
            On te construit un pipeline de RDV qualifiés
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#A09A92',
              lineHeight: 1.5,
              maxWidth: 800,
              marginTop: 20,
            }}
          >
            Setter dédié · Méthode signal-based · RDV dès la semaine 1
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#C87533',
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#F0ECE4',
                letterSpacing: '0.04em',
              }}
            >
              Setting
            </div>
          </div>
          <div style={{ fontSize: 16, color: '#6C6560' }}>
            setting.live
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
