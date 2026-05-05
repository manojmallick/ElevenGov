// Page Narrator Service
// Routes through /api/tts — API key stays server-side only

// Fixed demo narration text for demo-safe presentation
const DEMO_NARRATION_TEXT =
  'Welcome to the Official ElevenLabs Voice Technology Portal, operated by the European Digital Infrastructure Directorate. ' +
  'This portal provides access to Authorised Synthetic Voice Asset Generation, Personal Biometric Voice Replication, ' +
  'and Automated Citizen Interaction Modules, subject to Directive 2024 EU VOICE 47. ' +
  'Please ensure you have reviewed Annex C before submitting Form EUD VA 2024. ' +
  'Thank you for your patience.'

// Calls the server-side /api/tts route — no API key in client code
export async function narratePage(text: string): Promise<void> {
  const response = await fetch('/api/tts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: text.slice(0, 5000) }),
  })

  if (!response.ok) {
    throw new Error(`TTS service error [HTTP ${response.status}]`)
  }

  const audioBlob = await response.blob()
  const audioUrl = URL.createObjectURL(audioBlob)
  const audio = new Audio(audioUrl)
  await audio.play()
}

export async function startPageNarration(): Promise<void> {
  await narratePage(DEMO_NARRATION_TEXT)
}
