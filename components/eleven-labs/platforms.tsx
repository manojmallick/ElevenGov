export function Platforms() {
  return (
    <div className="p-6 m-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ElevenCreative -> ElevenContent */}
        <div className="bg-white border border-gray-400 p-6">
          <h3 className="text-lg font-bold text-primary mb-2">Synthetic Media Generation Authority</h3>
          <div className="ref-number">[Ref: DG-SYN-2024/0052/E]</div>
          <p className="text-xs mt-3 leading-relaxed">
            Deploy authorized synthetic media assets for content production. Includes text-to-speech conversion, audio-visual synchronization, and semantic-preserving voice attribute modification.
          </p>
          <ul className="text-xs mt-3 space-y-1 pl-4">
            <li>• Advanced Voice Synthesis Module</li>
            <li>• Multimedia Synchronization Protocol</li>
            <li>• Real-time Audio Processing Engine</li>
            <li>• Compliance Verification Framework</li>
          </ul>
          <a href="#" className="text-xs text-primary underline mt-3 inline-block">
            Access Portal Documentation →
          </a>
        </div>

        {/* ElevenAgents -> ElevenDialogue */}
        <div className="bg-white border border-gray-400 p-6">
          <h3 className="text-lg font-bold text-primary mb-2">Conversational AI Agent Registry</h3>
          <div className="ref-number">[Ref: DG-AGENT-2024/0053/F]</div>
          <p className="text-xs mt-3 leading-relaxed">
            Configure, deploy, and monitor conversational artificial intelligence systems compliant with EU AI Act provisions. Includes natural language processing, dialogue management, and compliance monitoring.
          </p>
          <ul className="text-xs mt-3 space-y-1 pl-4">
            <li>• Natural Language Understanding Module</li>
            <li>• Dialogue State Management</li>
            <li>• Real-time Monitoring Dashboard</li>
            <li>• Bias Detection and Mitigation</li>
          </ul>
          <a href="#" className="text-xs text-primary underline mt-3 inline-block">
            Access Portal Documentation →
          </a>
        </div>
      </div>
    </div>
  );
}
