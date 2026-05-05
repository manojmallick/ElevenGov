'use client'

import { SectionDownload } from './section-download'

export function VoiceShowcase() {
  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">Authorized Synthetic Voice Asset Categories</h2>
      <div className="ref-number">[Ref: DG-VOICE-2024/0048/A]</div>

      <table className="gov-table mt-2">
        <thead>
          <tr>
            <th>Asset Classification</th>
            <th>Permitted Applications</th>
            <th>Regulatory Compliance</th>
            <th>Access Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Multilingual Speech Synthesis (Tier 1)<sup>3</sup></td>
            <td>Public information dissemination, accessibility services</td>
            <td>GDPR, eIDAS, WCAG 2.1 AAA</td>
            <td>Standard</td>
          </tr>
          <tr>
            <td>Professional Vocal Rendering<sup>4</sup></td>
            <td>Enterprise communications, media production</td>
            <td>Full EU compliance certification required</td>
            <td>Premium</td>
          </tr>
          <tr>
            <td>Acoustic Pattern Library</td>
            <td>Research institutions, approved vendors</td>
            <td>Data processing agreement mandatory</td>
            <td>Research Only</td>
          </tr>
          <tr>
            <td>Voice Attribute Modulation</td>
            <td>Accessibility applications, demographic adaptation</td>
            <td>Non-discrimination compliance verification</td>
            <td>Conditional</td>
          </tr>
        </tbody>
      </table>

      <div className="eu-yellow-box">
        <p className="font-bold text-xs">⚠ Important Notice [Ref: DG-ADM-2024/1829/C]</p>
        <p className="text-xs mt-1">
          All deployments require compliance audit<sup>5</sup>. Unauthorized use violates EU Regulation 2024/1884. Penalties: €500,000* or 3%* annual revenue.
        </p>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-300 text-xs text-gray-600">
        <p><sup>3</sup> Tier 1 classification per Annex II of Regulation 2024/1873</p>
        <p><sup>4</sup> Professional rendering requires Form EUD-PRO-2024 and institutional verification</p>
        <p><sup>5</sup> Audit frequency: annual for Standard tier, quarterly for Premium tier</p>
        <p>* Penalty amounts subject to adjustment per ECB inflation index (base year: 2024)</p>
      </div>

      <SectionDownload sectionRef="DG-VOICE-2024/0048/A" />
    </div>
  );
}
