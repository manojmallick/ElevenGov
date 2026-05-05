// EU Portal Notice Sound Effects
// Uses local files in /public/audio/ — falls back to Web Audio API silently

const LOCAL_SOUND_FILES: Partial<Record<string, string>> = {
  cookie_accept: '/audio/cookie-confirmed.mp3',
  document_download: '/audio/document-download.mp3',
  form_submission: '/audio/official-stamp.mp3',
}

export type NoticeSoundType =
  | 'maintenance_warning'
  | 'document_download'
  | 'form_submission'
  | 'cookie_accept'
  | 'error'
  | 'session_start'
  | 'assistant_response'

export async function playNoticeSound(type: NoticeSoundType): Promise<void> {
  // Try local file first — fail silently if missing or blocked
  const localFile = LOCAL_SOUND_FILES[type]
  if (localFile) {
    try {
      const audio = new Audio(localFile)
      audio.onerror = () => {
        // Suppress 404 errors for missing audio files
        playFallbackSound(type)
      }
      await audio.play()
      return
    } catch {
      // File missing or autoplay blocked — fall through to Web Audio
    }
  }

  // Web Audio API fallback — never throws, never blocks UI
  playFallbackSound(type)
}

// Fallback sounds using Web Audio API
function playFallbackSound(type: NoticeSoundType): void {
  try {
    const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    // Different sounds for different notice types
    switch (type) {
      case 'maintenance_warning':
        oscillator.frequency.value = 440
        oscillator.type = 'square'
        gainNode.gain.value = 0.1
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.3)
        break
        
      case 'document_download':
        oscillator.frequency.value = 800
        oscillator.type = 'sine'
        gainNode.gain.value = 0.05
        oscillator.start()
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
        oscillator.stop(audioContext.currentTime + 0.2)
        break
        
      case 'form_submission':
        // Three quick beeps
        playMultipleBeeps(audioContext, [600, 700, 800], 0.1)
        return
        
      case 'cookie_accept':
        oscillator.frequency.value = 1200
        oscillator.type = 'sine'
        gainNode.gain.value = 0.03
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.1)
        break
        
      case 'error':
        oscillator.frequency.value = 200
        oscillator.type = 'sawtooth'
        gainNode.gain.value = 0.08
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.15)
        break
        
      case 'session_start':
        playMultipleBeeps(audioContext, [400, 500, 600, 800], 0.08)
        return
        
      case 'assistant_response':
        oscillator.frequency.value = 1000
        oscillator.type = 'sine'
        gainNode.gain.value = 0.02
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.05)
        break
        
      default:
        oscillator.frequency.value = 440
        oscillator.type = 'sine'
        gainNode.gain.value = 0.05
        oscillator.start()
        oscillator.stop(audioContext.currentTime + 0.1)
    }
  } catch (e) {
    console.log('[v0] Web Audio fallback failed:', e)
  }
}

function playMultipleBeeps(audioContext: AudioContext, frequencies: number[], duration: number): void {
  frequencies.forEach((freq, index) => {
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()
    osc.connect(gain)
    gain.connect(audioContext.destination)
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.value = 0.05
    const startTime = audioContext.currentTime + (index * (duration + 0.05))
    osc.start(startTime)
    osc.stop(startTime + duration)
  })
}

// Preload common sounds
export function preloadNoticeSounds(): void {
  const commonSounds: NoticeSoundType[] = ['cookie_accept', 'document_download', 'error']
  commonSounds.forEach(type => {
    // Just initialize the fallback audio context
    // Real preloading would require API calls which we avoid until needed
  })
}
