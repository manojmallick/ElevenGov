'use client'

import { SectionDownload } from './section-download'
import { playSfx } from '@/lib/sfx'

export function Hero() {
  return (
    <div className="gov-section">
      <h1 className="text-lg font-bold text-primary mb-1">Synthetic Vocal Asset Infrastructure Initiative</h1>
      <div className="ref-number">[Ref: DG-VOICE-2026/0047/B]</div>
      <p className="text-xs mt-2 leading-tight">
        The European Digital Infrastructure Directorate administers this portal as part of the Unified Voice Technology Framework (UVTF)<sup>1</sup>. This resource provides authorized access to deploy synthetic vocal assets compliant with EU Directive 2026/1873 on Algorithmic Authenticity and Digital Voice Governance<sup>2</sup>.
      </p>
      <div className="flex gap-2 mt-3">
        <button onClick={() => playSfx('stamp')} className="px-3 py-1 bg-primary text-white font-bold border border-gray-400 hover:bg-blue-800 text-xs" data-action="submit-application">
          Submit Application (Form EUD-VA-2026)
        </button>
        <button onClick={() => playSfx('download')} className="px-3 py-1 bg-white text-primary font-bold border border-primary hover:bg-blue-50 text-xs" data-action="download-pdf">
          Download Documentation (PDF)
        </button>
      </div>
      <div className="mt-2 pt-2 border-t border-gray-300 text-xs text-gray-600">
        <p><sup>1</sup> UVTF established by Commission Decision 2023/1447 of 12 July 2023</p>
        <p><sup>2</sup> Directive applies to all EU Member States and EEA countries from 1 January 2025</p>
      </div>
      <SectionDownload sectionRef="DG-HERO-2026/0047/B" />
    </div>
  );
}
