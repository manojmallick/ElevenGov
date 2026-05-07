'use client'

import { playSfx } from '@/lib/sfx'

export function SectionDownload({ sectionRef }: { sectionRef: string }) {
  const handleDownload = () => {
    playSfx('download')
    setTimeout(() => {
      alert(`PDF generation initiated for section ${sectionRef}.\n\nDocument will be watermarked with session ID and timestamp.\nExpected processing time: 15-30 seconds.\n\n[Ref: DG-PDF-2026/AUTO]`)
    }, 300)
  }

  return (
    <div className="flex items-center gap-2 text-xs mt-2 pt-2 border-t border-gray-300">
      <button 
        onClick={handleDownload}
        className="text-primary underline hover:text-blue-800"
        data-action="download-pdf"
      >
        Download as PDF
      </button>
      <span className="text-gray-500">|</span>
      <a href="#" className="text-primary underline" data-action="print-section">Print this section</a>
      <span className="text-gray-500">|</span>
      <a href="#" className="text-primary underline" data-action="share-section">Share</a>
      <span className="text-gray-500 ml-auto">[{sectionRef}]</span>
    </div>
  )
}
