import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') ?? 'Setting LinkedIn B2B'
  const subtitle = searchParams.get('subtitle') ?? ''
  const tag = searchParams.get('tag') ?? ''

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
        {/* Top: tag + title + subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {tag && (
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
              {tag}
            </div>
          )}
          {/* Accent bar */}
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
              fontSize: title.length > 60 ? 40 : title.length > 40 ? 48 : 56,
              fontWeight: 700,
              color: '#F0ECE4',
              lineHeight: 1.15,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 22,
                color: '#A09A92',
                lineHeight: 1.5,
                maxWidth: 800,
                marginTop: 20,
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Bottom: brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            {/* Logo dot */}
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
          <div
            style={{
              fontSize: 16,
              color: '#6C6560',
            }}
          >
            setting.live
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
