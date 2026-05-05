'use client'

import { SectionDownload } from './section-download'

export function APIStatus() {
  const endpoints = [
    { name: "/api/v1/voice/synthesis/authorized", status: "OPERATIONAL", uptime: "99.7%*" },
    { name: "/api/v1/audio/transcribe/secure", status: "OPERATIONAL", uptime: "99.8%*" },
    { name: "/api/v1/voice/clone/registered", status: "OPERATIONAL", uptime: "99.4%*" },
    { name: "/api/v1/audio/validate/compliance", status: "OPERATIONAL", uptime: "99.9%*" },
    { name: "/api/v1/user/authentication/verify", status: "OPERATIONAL", uptime: "99.6%*" },
    { name: "/api/v1/research/acoustic-analysis", status: "UNDER REVIEW", uptime: "N/A" },
    { name: "/api/v1/batch/processing/queue", status: "OPERATIONAL", uptime: "99.2%*" },
    { name: "/api/v1/metrics/usage/report", status: "OPERATIONAL", uptime: "99.5%*" },
  ];

  return (
    <div className="gov-section">
      <h2 className="text-base font-bold text-primary mb-1">API Endpoint Service Status</h2>
      <div className="ref-number">[Ref: DG-STAT-2024/0101/J]</div>
      <p className="text-xs mt-2 text-gray-700">
        Real-time<sup>3</sup> status of all authorized API endpoints. Last refresh: 14:32:17 CET<sup>4</sup>
      </p>

      <table className="gov-table mt-4">
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Status</th>
            <th>30-Day Uptime</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((ep, i) => (
            <tr key={i}>
              <td className="font-mono text-xs">{ep.name}</td>
              <td>
                {ep.status === "OPERATIONAL" ? (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 inline-block"></span>
                    <span className="text-xs text-green-700 font-bold">OPERATIONAL</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-500 inline-block"></span>
                    <span className="text-xs text-yellow-700 font-bold">UNDER REVIEW</span>
                    <span className="text-xs text-gray-600 ml-1">- Expected resolution: Q4 2025<sup>5</sup></span>
                  </span>
                )}
              </td>
              <td className="text-xs">{ep.uptime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 pt-4 border-t border-gray-300 text-xs text-gray-600">
        <p><sup>3</sup> "Real-time" defined as data refreshed at 15-minute intervals per Service Level Agreement DG-SLA-2024/0044/R</p>
        <p><sup>4</sup> Timestamps displayed in Central European Time (CET/CEST) as per EU standard timekeeping protocol</p>
        <p><sup>5</sup> Resolution timeline subject to outcome of ongoing compliance review under EU AI Act Article 6(2); formal notification will be issued via Official Journal of the European Union</p>
        <p className="mt-2">* Uptime percentages calculated using methodology defined in ISO/IEC 20000-1:2018 and verified by independent auditor (Ernst & Young, Brussels office)</p>
      </div>

      <div className="eu-yellow-box mt-4">
        <p className="font-bold text-xs">⚠ Service Degradation Notice</p>
        <p className="text-xs mt-1">
          The /api/v1/research/acoustic-analysis endpoint is currently under review following the implementation of enhanced safeguards 
          pursuant to Commission Decision 2024/1847<sup>6</sup>. Alternative manual submission process available via Form EUD-RES-2024/ALT.
        </p>
        <p className="text-xs mt-2 text-gray-700">
          <sup>6</sup> Commission Decision of 12 September 2024 concerning provisional measures for AI research endpoints
        </p>
      </div>
      <SectionDownload sectionRef="DG-STAT-2024/0101/J" />
    </div>
  );
}
