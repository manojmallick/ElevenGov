# ElevenGov

A satirical recreation of ElevenLabs.io as a 2016 EU government bureaucracy portal.

## Overview

ElevenGov reimagines modern voice AI technology through the lens of European bureaucratic aesthetics:
- Grey backgrounds, Arial font, EU blue links
- Rectangular buttons, 1px borders, no rounded corners
- Forms, reference numbers, and lengthy disclaimers
- Real ElevenLabs TTS integration via server-side API
- Deterministic "Dirk" assistant with keyword-based responses

## Setup

### Prerequisites

- Node.js 18+
- npm or pnpm
- ElevenLabs API key ([get one here](https://elevenlabs.io))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ElevenGov

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with the following:

```env
# Required: Your ElevenLabs API key
ELEVENLABS_API_KEY=your_api_key_here

# Optional: Voice ID for Dirk (defaults to Adam voice)
DIRK_VOICE_ID=pNInz6obpgDQGcFmaJgB

# Optional: Public URL for production
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

**Where to find your API key:**
1. Go to [elevenlabs.io](https://elevenlabs.io)
2. Sign up or log in
3. Navigate to your profile settings
4. Copy your API key

## How to Run

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## How to Deploy

### Vercel (Recommended)

1. Push your code to GitHub (make sure `.env.local` is in `.gitignore`)
2. Go to [vercel.com](https://vercel.com) and import your repository
3. During import or in Project Settings → Environment Variables, add:
   - **Key:** `ELEVENLABS_API_KEY` → **Value:** Your ElevenLabs API key
   - **Key:** `DIRK_VOICE_ID` → **Value:** `pNInz6obpgDQGcFmaJgB` (optional, defaults to Adam)
   - **Key:** `NEXT_PUBLIC_APP_URL` → **Value:** Your production URL (optional)
4. Click Deploy

**Important:** 
- Never commit `.env.local` to git
- Add environment variables directly in Vercel dashboard
- API keys are encrypted and only accessible server-side

### Other Platforms

The app is a standard Next.js 16 application and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- Any Node.js hosting platform

Ensure you set the required environment variables in your hosting platform's dashboard.

## Demo Flow

### 1. Landing Page
- View the bureaucratic EU portal aesthetic
- Notice forms, reference numbers, and disclaimers
- See cookie banner (required by "EU regulations")

### 2. Cookie Configuration
- **Step 0:** Initial notice with policy links
- **Step 1:** Select cookie categories (display only)
- **Step 2:** Accept mandatory agreements
- **Result:** Cookie preferences saved with SFX

### 3. Listen to This Page
- Click "LISTEN TO PAGE" button in header
- Audio panel opens with demo narration
- TTS generates official EU-style voice
- Play/pause/retry controls available

### 4. Dirk Terminal Assistant
- Click "Ask the Portal" button
- Terminal-style interface opens
- Type questions about voice technology
- Dirk responds with bureaucratic answers
- Click "Read official response aloud" to hear Dirk speak

### 5. Interactive Features
- **Download PDF buttons:** Play document download SFX
- **Submit Application:** Play official stamp SFX
- **Navigation:** Browse sections with EU-style formatting

## Features

### Text-to-Speech Integration
- Server-side ElevenLabs API proxy (`/api/tts`)
- API key never exposed to client
- Error handling with user-friendly messages
- Audio playback with loading states

### Dirk Assistant
- Deterministic keyword-based responses (no LLM required)
- Bureaucratic tone and EU jargon
- Voice playback for each response
- Terminal-style interface

### Sound Effects
- Cookie confirmation sound
- Document download sound
- Official stamp sound
- Fails silently if audio files are missing

### Mobile Responsive
- Header adapts to small screens
- Tables scroll horizontally on mobile
- Cookie modal fits mobile viewport
- Buttons stack on small screens
- Terminal assistant scales properly

## Project Structure

```
ElevenGov/
├── app/
│   ├── api/tts/route.ts          # Server-side TTS proxy
│   ├── globals.css               # EU government styling
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── eleven-labs/              # EU-styled components
│   │   ├── audio-panel.tsx       # "Listen to page" modal
│   │   ├── cookie-banner.tsx     # Multi-step cookie consent
│   │   ├── eu-header.tsx         # EU portal header
│   │   ├── terminal-assistant.tsx # Dirk assistant
│   │   └── ...                   # Other sections
│   └── ui/                       # Shadcn UI components
├── lib/
│   ├── dirk.ts                   # Deterministic assistant logic
│   ├── pageNarrator.ts           # Page narration service
│   ├── sfx.ts                    # Sound effects system
│   └── utils.ts                  # Utilities
├── public/
│   └── audio/                    # Audio files (optional)
├── .env.example                  # Environment template
└── vercel.json                   # Deployment config
```

## Audio Files (Optional)

Place MP3 files in `/public/audio/` for enhanced SFX:
- `cookie-confirmed.mp3` - Cookie preferences saved
- `document-download.mp3` - Download button clicked
- `official-stamp.mp3` - Submit application clicked

**Note:** The app works without these files. SFX playback fails silently if files are missing.

## Tech Stack

- **Framework:** Next.js 16.2.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom EU theme
- **UI Components:** Shadcn UI (heavily customized)
- **Voice API:** ElevenLabs TTS
- **Deployment:** Vercel

## License

MIT

## Credits

Built for the ElevenLabs hackathon. Inspired by early 2010s EU government web portals.
