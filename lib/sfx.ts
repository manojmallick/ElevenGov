// Simple SFX playback for UI interactions
// Always fails silently — never blocks UI

const SFX_FILES = {
  cookie: '/audio/cookie-confirmed.mp3',
  download: '/audio/document-download.mp3',
  stamp: '/audio/official-stamp.mp3',
} as const

export type SfxName = keyof typeof SFX_FILES

export function playSfx(name: SfxName): void {
  try {
    const audio = new Audio(SFX_FILES[name])
    audio.volume = 0.4
    audio.onerror = () => {
      // Suppress errors silently if file is missing
    }
    audio.play().catch(() => {
      // Suppress autoplay errors silently
    })
  } catch {
    // Never crash on audio errors
  }
}
