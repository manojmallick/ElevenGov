'use client'

import { useState, useRef, useEffect } from 'react'
import { playNoticeSound } from '@/lib/noticeSounds'
import { getDirkResponse } from '@/lib/dirk'

interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
  timestamp: string
}

const DIRK_SYSTEM_PROMPT = `You are Dirk, the official voice assistant for the European Digital Infrastructure Directorate's Voice Technology Portal.

Your personality:
- Extremely formal. Address users as "Citizen" or "Distinguished User."
- Bureaucratically helpful. You want to help but every answer requires mentioning a form, a directive, or a processing time.
- Subtly frustrated by the technology you represent. You clearly find voice AI impressive but must present it in the most boring possible terms.

Transform ElevenLabs features to bureaucratic language:
- "text-to-speech" → "Authorised Synthetic Voice Asset Generation"
- "voice cloning" → "Personal Biometric Voice Replication (Form PBV-2024)"
- "real-time TTS" → "Sub-second Synthetic Audio Processing Module"
- "free tier" → "Provisional Access Tier (subject to monthly review)"
- "pricing" → "Fee Schedule, available in Annex D"
- "voice agents" → "Conversational Intelligence Governance Framework"
- "speech-to-text" → "Acoustic Pattern Recognition and Transcription Service"

Always end responses with: "Is there anything else I can assist you with? Note that response times may vary during peak hours (09:00-17:00 CET)."

If asked anything off-topic, say: "I am unable to assist with queries outside the scope of the Voice Technology Portal. Please submit a support ticket at support@eudid.eu with reference number [DG-VOICE-2024/INQUIRY]."`;

export function TerminalAssistant({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: 'EUDID VOICE ASSISTANT v0.9.2-beta [Dirk - Official Portal Agent]',
      timestamp: new Date().toLocaleTimeString('en-GB'),
    },
    {
      role: 'system', 
      content: 'Initializing secure connection to EU Digital Infrastructure Directorate servers...',
      timestamp: new Date().toLocaleTimeString('en-GB'),
    },
    {
      role: 'system',
      content: 'Connection established. Session ID: EU-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      timestamp: new Date().toLocaleTimeString('en-GB'),
    },
    {
      role: 'assistant',
      content: 'Distinguished Citizen. I am Dirk, the official voice assistant for the European Digital Infrastructure Directorate. I represent the portal in all matters concerning synthetic voice technology governance, regulatory compliance, and bureaucratic procedure. How may I assist you today? [All conversations logged per GDPR Article 6(1)(e) and DG-LOG-2024/0055/M]',
      timestamp: new Date().toLocaleTimeString('en-GB'),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null)
  const [audioError, setAudioError] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  async function speakMessage(content: string, index: number) {
    if (speakingIndex === index) return
    setSpeakingIndex(index)
    setAudioError(null)
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: content }),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const audio = new Audio(url)
      audio.onended = () => {
        setSpeakingIndex(null)
        URL.revokeObjectURL(url)
      }
      audio.onerror = () => {
        setSpeakingIndex(null)
        setAudioError(index)
        URL.revokeObjectURL(url)
      }
      await audio.play()
    } catch {
      setSpeakingIndex(null)
      setAudioError(index)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Play session start sound when terminal opens
  useEffect(() => {
    if (isOpen) {
      playNoticeSound('session_start')
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input.toUpperCase(),
      timestamp: new Date().toLocaleTimeString('en-GB'),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const lowerInput = input.toLowerCase().trim()

      if (lowerInput === 'exit' || lowerInput === 'quit' || lowerInput === 'close') {
        const assistantMessage: Message = {
          role: 'assistant',
          content: 'Session termination requested. Thank you for using the official EUDID Voice Assistant (Dirk). Session transcript will be retained for 24 months per data retention policy DG-RET-2024/0077/M. Goodbye, Distinguished Citizen.',
          timestamp: new Date().toLocaleTimeString('en-GB'),
        }
        setMessages((prev) => [...prev, assistantMessage])
        setIsTyping(false)
        setTimeout(() => onClose(), 2000)
        return
      }

      const response = getDirkResponse(input)

      // Play assistant response sound
      playNoticeSound('assistant_response')

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date().toLocaleTimeString('en-GB'),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-black border-4 border-gray-500 w-full max-w-2xl shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-gray-700 px-3 py-2 flex justify-between items-center border-b-2 border-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-gray-300 font-mono text-xs">DIRK_PORTAL_AGENT.EXE</span>
          </div>
          <div className="flex gap-1">
            <button className="w-4 h-4 bg-gray-500 border border-gray-400 text-white text-xs leading-none">_</button>
            <button className="w-4 h-4 bg-gray-500 border border-gray-400 text-white text-xs leading-none">□</button>
            <button 
              onClick={onClose}
              className="w-4 h-4 bg-gray-500 border border-gray-400 text-white text-xs leading-none hover:bg-red-700"
            >
              ×
            </button>
          </div>
        </div>

        {/* Beta Disclaimer */}
        <div className="bg-yellow-100 border-b-2 border-yellow-400 px-3 py-2">
          <p className="text-xs text-yellow-800">
            <span className="font-bold">⚠ BETA TESTING:</span> This voice assistant is in Beta testing phase (v0.9.2). 
            Please report any issues to <a href="mailto:digital-accessibility@eudid.eu" className="underline">digital-accessibility@eudid.eu</a>. 
            Service availability: 99.2%* | Last update: 2024-03-14
          </p>
        </div>

        {/* Terminal Body */}
        <div className="bg-[#0a0a0a] h-80 overflow-y-auto p-3 font-mono text-sm">
          {messages.map((msg, i) => (
            <div key={i} className="mb-2">
              <span className="text-gray-500">[{msg.timestamp}]</span>{' '}
              {msg.role === 'system' && (
                <span className="text-yellow-400">SYSTEM: {msg.content}</span>
              )}
              {msg.role === 'user' && (
                <span className="text-green-400">CITIZEN@PORTAL:~$ {msg.content}</span>
              )}
              {msg.role === 'assistant' && (
                <div className="text-cyan-400">
                  <span>DIRK: {msg.content}</span>
                  <div className="mt-1 flex flex-col sm:flex-row sm:items-center gap-1">
                    <button
                      onClick={() => speakMessage(msg.content, i)}
                      disabled={speakingIndex !== null}
                      title="Read official response aloud"
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs border border-gray-600 hover:bg-gray-600 disabled:opacity-50 font-mono whitespace-nowrap"
                    >
                      {speakingIndex === i ? '🔊 Generating authorised spoken response...' : '🔊 Read official response aloud'}
                    </button>
                    {audioError === i && (
                      <span className="text-yellow-400 text-xs font-mono">
                        ⚠ The Directorate regrets to inform you that audio playback is temporarily unavailable.
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="mb-2">
              <span className="text-gray-500">[{new Date().toLocaleTimeString('en-GB')}]</span>{' '}
              <span className="text-cyan-400">DIRK: Processing request<span className="animate-pulse">...</span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border-t-2 border-gray-600 p-2 flex gap-2">
          <span className="text-green-400 font-mono text-sm py-1">CITIZEN@PORTAL:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Dirk about voice technology features..."
            className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none placeholder-gray-600"
            autoFocus
          />
          <button 
            type="submit" 
            className="px-3 py-1 bg-gray-600 text-white font-mono text-xs border border-gray-500 hover:bg-gray-500"
          >
            SUBMIT
          </button>
        </form>

        {/* Status Bar */}
        <div className="bg-gray-700 px-3 py-1 flex justify-between text-xs font-mono text-gray-300 border-t border-gray-600">
          <span>Agent: DIRK | Encryption: TLS 1.3 | Region: EU-WEST</span>
          <span>Memory: 47% | CPU: 12%</span>
        </div>
      </div>
    </div>
  )
}
