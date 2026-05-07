export function APISection() {
  return (
    <div className="p-6 m-4">
      <div className="bg-white border border-gray-400 p-6">
        <h2 className="text-xl font-bold text-primary mb-2">Technical Integration Protocol</h2>
        <div className="ref-number">[Ref: DG-API-2026/0068/I]</div>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-bold text-xs text-primary mb-2">▪ Audio Synthesis Endpoint</h3>
            <div className="bg-gray-100 border border-gray-400 p-3 font-mono text-xs">
              <p>POST /api/v1/voice/synthesis/authorized</p>
              <p className="mt-2 text-gray-600">Request authentication: OAuth 2.0 + institutional signing certificate</p>
              <p className="text-gray-600">Response format: WAV (44.1kHz, PCM 16-bit)</p>
            </div>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">View Endpoint Documentation</a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xs text-primary mb-2">▪ Speech-to-Text Transcription Service</h3>
            <div className="bg-gray-100 border border-gray-400 p-3 font-mono text-xs">
              <p>POST /api/v1/audio/transcribe/secure</p>
              <p className="mt-2 text-gray-600">Supported formats: WAV, MP3, FLAC</p>
              <p className="text-gray-600">Response includes confidence scores and compliance metadata</p>
            </div>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">View Endpoint Documentation</a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xs text-primary mb-2">▪ Acoustic Feature Extraction</h3>
            <div className="bg-gray-100 border border-gray-400 p-3 font-mono text-xs">
              <p>POST /api/v1/research/acoustic-analysis</p>
              <p className="mt-2 text-gray-600">Research institutions only — requires verified institutional account</p>
              <p className="text-gray-600">Data processing agreement mandatory per GDPR Article 28</p>
            </div>
            <p className="text-xs mt-2 text-gray-700">
              <a href="#" className="text-primary underline">View Endpoint Documentation</a>
            </p>
          </div>
        </div>

        <div className="eu-yellow-box mt-6">
          <p className="font-bold text-xs">Rate Limiting Notice</p>
          <p className="text-xs mt-1">
            Standard tier: 1,000 requests/day | Premium tier: 50,000 requests/day | Emergency access available through formal request process
          </p>
        </div>

        <p className="text-xs mt-4 text-gray-700">
          <a href="#" className="text-primary underline">Download Complete API Reference (PDF)</a> | 
          <a href="#" className="text-primary underline ml-2">View Integration Examples</a>
        </p>
      </div>
    </div>
  );
}
