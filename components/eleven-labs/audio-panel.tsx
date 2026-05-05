'use client'

import { useState, useRef, useEffect } from 'react'

type PanelState = 'idle' | 'loading' | 'playing' | 'paused' | 'error'

const PAGE_SUMMARY =
  'Welcome to the Official ElevenLabs Voice Technology Portal, operated by the European Digital Infrastructure Directorate. ' +
  'This portal provides access to Authorised Synthetic Voice Asset Generation, Personal Biometric Voice Replication, ' +
  'and Automated Citizen Interaction Modules, subject to Directive 2024 EU VOICE 47. ' +
  'Please ensure you have reviewed Annex C before submitting Form EUD VA 2024. ' +
  'Thank you for your patience.'

export function AudioPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [panelState, setPanelState] = useState<PanelState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioUrlRef = useRef<string | null>(null)

  useEffect(() => {
    if (isOpen && panelState === 'idle') {
      startNarration()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
    }
  }, [])

  async function startNarration() {
    setPanelState('loading')
    setErrorMsg('')

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: PAGE_SUMMARY }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err?.error ?? `HTTP ${response.status}`)
      }

      const blob = await response.blob()
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current)
      const url = URL.createObjectURL(blob)
      audioUrlRef.current = url

      const audio = new Audio(url)
      audioRef.current = audio
      audio.onended = () => setPanelState('idle')
      audio.onerror = () => {
        setPanelState('error')
        setErrorMsg('Audio playback failed. Please try again.')
      }

      await audio.play()
      setPanelState('playing')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown error'
      setPanelState('error')
      setErrorMsg(msg)
    }
  }

  function handlePlayPause() {
    const audio = audioRef.current
    if (!audio) return
    if (panelState === 'playing') {
      audio.pause()
      setPanelState('paused')
    } else if (panelState === 'paused') {
      audio.play()
      setPanelState('playing')
    }
  }

  function handleClose() {
    audioRef.current?.pause()
    setPanelState('idle')
    onClose()
  }

  function handleRetry() {
    audioRef.current?.pause()
    audioRef.current = null
    startNarration()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-gray-400 max-w-2xl w-full shadow-lg">
        <div className="bg-primary text-white p-2 text-xs font-bold border-b border-gray-400">
          ACCESSIBILITY FEATURE: Authorised Synthetic Voice Asset Generation [Beta v0.9.2]
        </div>

        <div className="p-4">
          <div className="bg-blue-50 border border-blue-300 p-2 mb-3">
            <p className="text-xs text-blue-800">
              <span className="font-bold">📄 Demo narration:</span> official page summary
            </p>
          </div>

          {/* Status */}
          <div className="bg-gray-100 border border-gray-400 p-2 mb-3 font-mono text-xs">
            {panelState === 'loading' && (
              <span className="text-primary animate-pulse">
                ▶ Connecting to voice synthesis service... please wait
              </span>
            )}
            {panelState === 'playing' && (
              <span className="text-green-800">▶ PLAYING — Official EU narration active</span>
            )}
            {panelState === 'paused' && (
              <span className="text-yellow-800">⏸ PAUSED</span>
            )}
            {panelState === 'idle' && (
              <span className="text-gray-600">READY</span>
            )}
            {panelState === 'error' && (
              <span className="text-red-700">ERROR: {errorMsg}</span>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-2 flex-wrap">
            {(panelState === 'playing' || panelState === 'paused') && (
              <button
                onClick={handlePlayPause}
                className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800"
              >
                {panelState === 'playing' ? '⏸ Pause' : '▶ Resume'}
              </button>
            )}

            {panelState === 'error' && (
              <button
                onClick={handleRetry}
                className="px-3 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800"
              >
                ↺ Retry
              </button>
            )}

            <button
              onClick={handleClose}
              className="px-3 py-1 bg-gray-300 text-black text-xs font-bold border border-gray-400 hover:bg-gray-400"
            >
              Close
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-600 p-2 mt-3">
            <p className="text-xs text-yellow-800">
              <span className="font-bold">⚠ Beta Notice:</span> This audio service is provided
              in beta. Response times may vary during peak hours (09:00–17:00 CET). Uptime:
              99.2%*. Last updated: 14 March 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

