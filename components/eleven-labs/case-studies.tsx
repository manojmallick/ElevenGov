'use client'

import { SectionDownload } from './section-download'

export function CaseStudies() {
  const implementations = [
    { ref: "DG-IMP-2026/0201/A", institution: "Ministry of Digital Affairs, Estonia", status: "Completed", date: "2026-02-14" },
    { ref: "DG-IMP-2026/0202/B", institution: "Federal Office for Information Security, Germany", status: "In Progress", date: "2026-03-22" },
    { ref: "DG-IMP-2026/0203/C", institution: "Agence Nationale de la Sécurité des Systèmes d'Information, France", status: "Completed", date: "2026-01-08" },
    { ref: "DG-IMP-2026/0204/D", institution: "Agenzia per l'Italia Digitale", status: "Under Review", date: "2026-04-30" },
    { ref: "DG-IMP-2026/0205/E", institution: "Centro Criptológico Nacional, Spain", status: "Completed", date: "2023-11-15" },
    { ref: "DG-IMP-2026/0206/F", institution: "National Cyber Security Centre, Netherlands", status: "In Progress", date: "2026-05-12" },
  ];

  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">Implementation Case Registry</h2>
      <div className="ref-number">[Ref: DG-CASE-2026/0111/K]</div>
      <p className="text-xs mt-2 text-gray-700">
        Documented deployments of synthetic voice technology across EU Member State institutions<sup>7</sup>
      </p>

      <table className="gov-table mt-4">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Institution</th>
            <th>Status</th>
            <th>Implementation Date</th>
          </tr>
        </thead>
        <tbody>
          {implementations.map((impl, i) => (
            <tr key={i}>
              <td className="font-mono text-xs">{impl.ref}</td>
              <td className="text-xs">{impl.institution}</td>
              <td className="text-xs">
                {impl.status === "Completed" && <span className="text-green-700 font-bold">COMPLETED</span>}
                {impl.status === "In Progress" && <span className="text-blue-700 font-bold">IN PROGRESS</span>}
                {impl.status === "Under Review" && <span className="text-yellow-700 font-bold">UNDER REVIEW</span>}
              </td>
              <td className="text-xs">{impl.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs mt-4 text-gray-600">
        Total implementations: 47*<sup>8</sup> | Success rate: 94.2%*<sup>9</sup> | Average deployment time: 127* days<sup>10</sup>
      </p>

      <div className="mt-4 pt-4 border-t border-gray-300 text-xs text-gray-600">
        <p><sup>7</sup> Registry includes only implementations with formal approval under Framework Agreement DG-SVTF-2026/0001/A</p>
        <p><sup>8</sup> Implementation count as of 2026-03-14; figure updated quarterly per reporting schedule DG-REP-2026/0044/Q</p>
        <p><sup>9</sup> Success rate defined as implementations achieving "Operational" status within 18 months of initiation</p>
        <p><sup>10</sup> Deployment time measured from formal application submission to operational certification; methodology per ISO 9001:2015</p>
        <p className="mt-2">* All numerical figures subject to verification by European Court of Auditors (next scheduled audit: Q2 2025)</p>
      </div>
      <SectionDownload sectionRef="DG-CASE-2026/0111/K" />
    </div>
  );
}
