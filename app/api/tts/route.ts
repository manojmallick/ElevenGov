import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const text = typeof body?.text === 'string' ? body.text.trim() : ''

    if (!text) {
      return NextResponse.json({ error: 'Invalid text input' }, { status: 400 })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    const voiceId = process.env.DIRK_VOICE_ID || 'pNInz6obpgDQGcFmaJgB'

    if (!apiKey) {
      return NextResponse.json(
        { error: 'TTS service not configured. Contact digital-support@eudid.eu.' },
        { status: 503 }
      )
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: text.slice(0, 5000),
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.92,
            similarity_boost: 0.85,
            style: 0.05,
            use_speaker_boost: true,
          },
        }),
      }
    )

    if (!response.ok) {
      const errText = await response.text().catch(() => '')
      console.error('[TTS API] ElevenLabs error:', response.status, errText)
      return NextResponse.json(
        { error: `TTS generation failed [HTTP ${response.status}]` },
        { status: 502 }
      )
    }

    const audioBuffer = await response.arrayBuffer()

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
        'Content-Length': String(audioBuffer.byteLength),
      },
    })
  } catch (error) {
    console.error('[TTS API] Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
