export function AgentsSection() {
  return (
    <div className="p-6 m-4">
      <div className="bg-white border border-gray-400 p-6">
        <h2 className="text-xl font-bold text-primary mb-2">Conversational Intelligence Governance Framework</h2>
        <div className="ref-number">[Ref: DG-CONV-2026/0061/H]</div>

        <div className="eu-yellow-box mt-4">
          <p className="font-bold text-xs">⚠ Mandatory Compliance Requirements</p>
          <p className="text-xs mt-1">
            All deployed conversational agents must maintain audit trails, implement bias detection algorithms, and provide monthly compliance reports to the Directorate.
          </p>
        </div>

        <h3 className="font-bold text-sm text-primary mt-6 mb-3">Required Technical Specifications</h3>

        <table className="gov-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Specification</th>
              <th>Compliance Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conversation Logging</td>
              <td>100% of interactions recorded and retained 24 months minimum</td>
              <td>GDPR Article 5(1)(e)</td>
            </tr>
            <tr>
              <td>Bias Monitoring</td>
              <td>Automated detection of discriminatory responses</td>
              <td>EU AI Act Article 6</td>
            </tr>
            <tr>
              <td>Transparency Disclosure</td>
              <td>Initial statement: "You are speaking with an AI agent"</td>
              <td>Digital Services Act 2022/2065</td>
            </tr>
            <tr>
              <td>Human Escalation</td>
              <td>Human operator access within 2 minutes maximum</td>
              <td>Internal Service Quality Standards</td>
            </tr>
            <tr>
              <td>Response Verification</td>
              <td>Factual accuracy review for sensitive topics</td>
              <td>Risk Mitigation Protocol DG-RISK-2026</td>
            </tr>
          </tbody>
        </table>

        <p className="text-xs mt-6 text-gray-700">
          <a href="#" className="text-primary underline">Download Full Technical Specifications (PDF) — 847 KB</a>
        </p>
      </div>
    </div>
  );
}
