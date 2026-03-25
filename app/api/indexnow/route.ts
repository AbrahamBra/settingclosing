import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4'
const HOST = 'https://www.setting.live'

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls array required' }, { status: 400 })
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.setting.live',
        key: INDEXNOW_KEY,
        keyLocation: `${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map((u: string) => u.startsWith('http') ? u : `${HOST}${u}`),
      }),
    })

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submitted: urls.length,
    })
  } catch (error) {
    return NextResponse.json({ error: 'IndexNow submission failed' }, { status: 500 })
  }
}
