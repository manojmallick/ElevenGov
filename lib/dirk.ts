/**
 * Dirk — Deterministic Bureaucratic Assistant
 * European Digital Infrastructure Directorate Voice Technology Portal
 */

type KeywordMap = {
  keywords: string[]
  response: string
}

const KEYWORD_RESPONSES: KeywordMap[] = [
  {
    keywords: ['clone', 'voice clone', 'replicate voice', 'voice replication', 'cloning'],
    response:
      'Distinguished User, Personal Biometric Voice Replication requires completion of Form PBV-2026 ' +
      'and submission of approved voice samples (minimum 5 minutes). Identity verification protocol ' +
      'DG-ID-2026/0044/F must be completed. Processing time: 15-20 working days. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['text to speech', 'tts', 'generate voice', 'speech synthesis', 'voice generation'],
    response:
      'Citizen, Authorised Synthetic Voice Asset Generation is governed under §4.2.1 of the Technical ' +
      'Framework. This service permits conversion of textual documentation into spoken audio across 70+ ' +
      'languages. Access requires Form EUD-VA-2026 and Directorate-General approval. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['price', 'pricing', 'cost', 'fee', 'free', 'tier', 'subscription'],
    response:
      'Distinguished User, institutional fee schedules are documented in Fee Schedule Annex D ' +
      '(last updated 2026-03-14). A Provisional Access Tier is available subject to monthly review ' +
      'and discontinuation without notice. For detailed pricing, consult the Fee Schedule section above. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['api', 'developer', 'integrate', 'integration', 'technical', 'documentation'],
    response:
      'Citizen, Technical Integration Specifications are available to registered operators only. ' +
      'You must obtain operator credentials via Form EUD-DEV-2026 and complete the certification ' +
      'process (6-8 weeks). API endpoints require OAuth 2.0 authentication per Directive 2026/1847. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['agent', 'assistant', 'conversation', 'conversational', 'chatbot', 'ai agent'],
    response:
      'Distinguished User, the Automated Citizen Interaction Module is currently in Pilot Phase 2. ' +
      'This framework enables deployment of conversational AI systems compliant with EU AI Act provisions. ' +
      'Institutional deployment requires Committee approval. Expected general availability: Q2 2025. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['music', 'song', 'musical', 'composition', 'soundtrack'],
    response:
      'Citizen, Synthetic Music Asset Generation is currently under regulatory review by the ' +
      'Cultural Heritage and Digital Arts Committee. Expected resolution: Q4 2025. Pre-registration ' +
      'for pilot access opens Q3 2025 via Form EUD-MUS-2026. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['sound effect', 'sfx', 'audio effect', 'notification sound'],
    response:
      'Distinguished User, Official Audio Event Notification Assets are available for institutional use ' +
      'under the Audio Branding Framework (Annex F). Standard library contains 847 approved sound effects. ' +
      'Custom generation requires approval from the Brand Compliance Office. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
  {
    keywords: ['help', 'commands', 'what can you do', 'topics'],
    response:
      'Available topics: TEXT-TO-SPEECH, VOICE CLONING, PRICING, API, AGENTS, MUSIC, SOUND EFFECTS. ' +
      'For queries outside this scope, submit a support ticket at support@eudid.eu with reference ' +
      'number DG-VOICE-2026/INQUIRY. ' +
      'Response times may vary during peak hours (09:00–17:00 CET).',
  },
]

const FALLBACK_RESPONSE =
  'I am unable to assist with queries outside the scope of the Voice Technology Portal. ' +
  'Please submit a support ticket at support@eudid.eu with reference number DG-VOICE-2026/INQUIRY. ' +
  'Response times may vary during peak hours (09:00–17:00 CET).'

/**
 * Returns a bureaucratic response based on keyword matching.
 * Always ends with peak hours disclaimer.
 */
export function getDirkResponse(userMessage: string): string {
  const normalizedInput = userMessage.toLowerCase().trim()

  // Check each keyword map
  for (const { keywords, response } of KEYWORD_RESPONSES) {
    for (const keyword of keywords) {
      if (normalizedInput.includes(keyword)) {
        return response
      }
    }
  }

  // No match — return fallback
  return FALLBACK_RESPONSE
}

/**
 * Manual test function — logs example queries and responses
 */
export function testDirk(): void {
  const testQueries = [
    'How do I clone my voice?',
    'What is text to speech?',
    'How much does this cost?',
    'Is there an API?',
    'Tell me about agents',
    'Can I generate music?',
    'What about sound effects?',
    'Tell me a joke',
  ]

  console.log('=== DIRK TEST SUITE ===\n')

  testQueries.forEach((query) => {
    const response = getDirkResponse(query)
    console.log(`Q: ${query}`)
    console.log(`A: ${response}\n`)
  })
}
