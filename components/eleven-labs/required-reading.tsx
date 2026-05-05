'use client'

import { playNoticeSound } from '@/lib/noticeSounds';
import { SectionDownload } from './section-download';

export function RequiredReading() {
  const documents = [
    { title: "Synthetic Voice Technology Framework Agreement", ref: "DG-SVTF-2024/0001/A", size: "2.4 MB", pages: 147 },
    { title: "EU AI Act Compliance Guidelines for Voice Synthesis", ref: "DG-AICG-2024/0012/B", size: "1.8 MB", pages: 89 },
    { title: "Data Protection Impact Assessment Template", ref: "DG-DPIA-2024/0023/C", size: "892 KB", pages: 34 },
    { title: "Accessibility Standards for Synthetic Audio (WCAG 2.1 AAA)", ref: "DG-ACCS-2024/0034/D", size: "1.2 MB", pages: 56 },
    { title: "Terms of Service and Acceptable Use Policy", ref: "DG-TAUP-2024/0045/E", size: "3.1 MB", pages: 203 },
    { title: "Technical Integration Manual (API v2.3.1)", ref: "DG-TIMA-2024/0056/F", size: "4.7 MB", pages: 312 },
    { title: "Incident Reporting and Escalation Procedures", ref: "DG-IREP-2024/0067/G", size: "756 KB", pages: 28 },
    { title: "Annual Compliance Certification Requirements", ref: "DG-ACCR-2024/0078/H", size: "1.5 MB", pages: 67 },
  ];

  const handleDownload = (e: React.MouseEvent, docRef: string) => {
    e.preventDefault()
    playNoticeSound('document_download')
    // Simulate download delay then show alert
    setTimeout(() => {
      alert(`Document ${docRef} download initiated.\n\nNote: Document will be watermarked with your session ID for tracking purposes per DG-TRACK-2024/0044/W.`)
    }, 300)
  }

  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">Required Reading Before Portal Access</h2>
      <div className="ref-number">[Ref: DG-MAND-2024/0099/I]</div>
      
      <div className="eu-yellow-box">
        <p className="font-bold text-xs">⚠ MANDATORY DOCUMENTATION</p>
        <p className="text-xs mt-1">
          Users must acknowledge familiarity with the following documents prior to submitting any application. 
          Failure to comply may result in application rejection under Article 14(3) of Regulation 2024/1873.
        </p>
      </div>

      <table className="gov-table mt-4">
        <thead>
          <tr>
            <th>Document Title</th>
            <th>Reference</th>
            <th>Size</th>
            <th>Pages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, i) => (
            <tr key={i}>
              <td className="text-xs">{doc.title}</td>
              <td className="text-xs font-mono">{doc.ref}</td>
              <td className="text-xs">{doc.size}</td>
              <td className="text-xs">{doc.pages}*</td>
              <td>
                <button 
                  onClick={(e) => handleDownload(e, doc.ref)}
                  className="text-xs text-primary underline hover:text-blue-800 cursor-pointer bg-transparent border-none p-0"
                >
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs mt-4 text-gray-600">
        * Page counts are approximate and may vary depending on language version. All documents available in 24 official EU languages.
      </p>
      <p className="text-xs mt-2 text-gray-600">
        Total estimated reading time: 47 hours<sup>1</sup> (based on average reading speed of 200 words per minute<sup>2</sup>)
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-600">
          <sup>1</sup> Reading time calculation methodology defined in Annex IV of Document DG-METH-2024/0088/X<br/>
          <sup>2</sup> Average reading speed derived from EU-wide literacy assessment study (N=47,892*, 2019)
        </p>
      </div>
      <SectionDownload sectionRef="DG-MAND-2024/0099/I" />
    </div>
  );
}
