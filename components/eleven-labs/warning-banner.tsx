'use client'

import { useEffect, useState } from 'react'
import { playNoticeSound } from '@/lib/noticeSounds'

export function WarningBanner() {
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    // Play maintenance warning sound once on first user interaction
    const handleFirstInteraction = () => {
      if (!hasPlayed) {
        playNoticeSound('maintenance_warning')
        setHasPlayed(true)
        document.removeEventListener('click', handleFirstInteraction)
      }
    }
    document.addEventListener('click', handleFirstInteraction, { once: true })
    return () => document.removeEventListener('click', handleFirstInteraction)
  }, [hasPlayed])

  const handlePlaySound = () => {
    playNoticeSound('maintenance_warning')
  }

  return (
    <div className="bg-[#CC0000] text-white p-3 text-center border-b-2 border-[#990000]">
      <p className="text-xs font-bold">
        <button 
          onClick={handlePlaySound}
          className="mr-2 hover:scale-110 transition-transform inline-block"
          title="Play audio alert"
        >
          🔊
        </button>
        NOTICE: This portal will be unavailable for scheduled maintenance from 23:00 to 06:00 CET on the third Thursday of each month. 
        <span className="ml-2">[Ref: DG-MAINT-2026/0892/Z]</span>
      </p>
      <p className="text-xs mt-1">
        For urgent enquiries during maintenance windows, contact the 24-hour helpline: +32 2 299 11 11 (standard call charges apply)
      </p>
    </div>
  );
}
