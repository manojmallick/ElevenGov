'use client'

import { SectionDownload } from './section-download'

export function ResearchTimeline() {
  const regulations = [
    { date: "2016-04-27", ref: "2016/679", title: "General Data Protection Regulation (GDPR)", status: "In Force" },
    { date: "2019-04-17", ref: "2019/881", title: "Cybersecurity Act", status: "In Force" },
    { date: "2022-10-19", ref: "2022/2065", title: "Digital Services Act (DSA)", status: "In Force" },
    { date: "2022-12-14", ref: "2022/2555", title: "NIS2 Directive", status: "In Force" },
    { date: "2024-03-13", ref: "2024/1689", title: "Artificial Intelligence Act", status: "In Force" },
    { date: "2024-07-01", ref: "2024/1873", title: "Synthetic Voice Technology Framework Regulation", status: "In Force" },
    { date: "2025-01-15", ref: "2025/XXX", title: "AI Liability Directive (Draft)", status: "Pending" },
  ];

  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">Regulatory Framework Timeline</h2>
      <div className="ref-number">[Ref: DG-REGL-2024/0121/L]</div>
      <p className="text-xs mt-2 text-gray-700">
        Chronological overview of applicable EU legislation governing synthetic voice technology<sup>11</sup>
      </p>

      <table className="gov-table mt-4">
        <thead>
          <tr>
            <th>Adoption Date</th>
            <th>Reference</th>
            <th>Legislative Instrument</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {regulations.map((reg, i) => (
            <tr key={i}>
              <td className="text-xs">{reg.date}</td>
              <td className="font-mono text-xs">{reg.ref}</td>
              <td className="text-xs">{reg.title}</td>
              <td className="text-xs">
                {reg.status === "In Force" && <span className="text-green-700 font-bold">IN FORCE</span>}
                {reg.status === "Pending" && <span className="text-yellow-700 font-bold">PENDING</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs mt-4 text-gray-600">
        Total applicable regulations: 23*<sup>12</sup> | Delegated acts: 47*<sup>13</sup> | Implementing decisions: 89*<sup>14</sup>
      </p>

      <div className="mt-4 pt-4 border-t border-gray-300 text-xs text-gray-600">
        <p><sup>11</sup> This timeline represents primary legislation only; secondary legislation and national transposition measures listed separately in Annex VII</p>
        <p><sup>12</sup> Regulation count includes only instruments with direct applicability to synthetic voice technology; broader AI regulations counted separately</p>
        <p><sup>13</sup> Delegated acts adopted under Article 290 TFEU; full list available in EUR-Lex database under classification 13.30.18</p>
        <p><sup>14</sup> Implementing decisions per Article 291 TFEU; subject to scrutiny by European Parliament and Council</p>
        <p className="mt-2">* Figures accurate as of 2024-03-14; regulatory counts updated following each Official Journal publication cycle</p>
      </div>
      <SectionDownload sectionRef="DG-REGL-2024/0121/L" />
    </div>
  );
}
