/**
 * Manual test script for Dirk assistant
 * Run: npx tsx scripts/test-dirk.ts
 * (or node --loader tsx scripts/test-dirk.ts)
 */

import { getDirkResponse, testDirk } from '../lib/dirk'

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('  DIRK ASSISTANT — MANUAL TEST SUITE')
console.log('  European Digital Infrastructure Directorate')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

// Run built-in test function
testDirk()

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('  EDGE CASE TESTS')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

const edgeCases = [
  'VOICE CLONE',
  'i want to clone voices',
  'TTS?',
  'how much $$$ ?',
  'api docs',
  'music generation',
  'make a robot that talks',
  'tell me about the weather',
]

edgeCases.forEach((query) => {
  const response = getDirkResponse(query)
  console.log(`Q: ${query}`)
  console.log(`A: ${response}\n`)
})

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('  TEST COMPLETE')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
