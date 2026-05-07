export function CreativeSection() {
  return (
    <div className="p-6 m-4 space-y-4">
      <div className="bg-white border border-gray-400 p-6">
        <h2 className="text-xl font-bold text-primary mb-2">Authorized Applications and Deployment Scenarios</h2>
        <div className="ref-number">[Ref: DG-APP-2026/0055/G]</div>

        <div className="mt-4 space-y-4">
          <div className="bg-secondary border border-gray-400 p-3">
            <h4 className="font-bold text-xs text-primary">1. Multilingual Public Information Service</h4>
            <p className="text-xs mt-2">
              Deliver government communications, public health announcements, and legislative updates in 24 EU languages. Compliance verification required for all materials.
            </p>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">Download Implementation Guidelines (PDF)</a>
            </p>
          </div>

          <div className="bg-secondary border border-gray-400 p-3">
            <h4 className="font-bold text-xs text-primary">2. Accessibility Enhancement Protocol</h4>
            <p className="text-xs mt-2">
              Enable audio-based content access for visually impaired citizens. Must comply with WCAG 2.1 AAA standards and eAccessibility Directive 2016/2102.
            </p>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">Download Accessibility Framework (PDF)</a>
            </p>
          </div>

          <div className="bg-secondary border border-gray-400 p-3">
            <h4 className="font-bold text-xs text-primary">3. Professional Media Production</h4>
            <p className="text-xs mt-2">
              Authorized use in television, radio, podcast, and multimedia content production. Requires transparency declaration and proper synthetic media labeling.
            </p>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">Download Media Production Standards (PDF)</a>
            </p>
          </div>

          <div className="bg-secondary border border-gray-400 p-3">
            <h4 className="font-bold text-xs text-primary">4. Customer Service Automation</h4>
            <p className="text-xs mt-2">
              Deploy conversational systems for government service centers. Must maintain disclosure of synthetic nature and enable human escalation pathways.
            </p>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">Download Service Standards (PDF)</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
