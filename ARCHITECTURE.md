# ElevenGov Architecture

## System Overview

ElevenGov is a satirical Next.js web application that reimagines ElevenLabs voice AI technology as a 2016 European bureaucratic portal. The system integrates real ElevenLabs text-to-speech capabilities while presenting them through deliberately cumbersome bureaucratic UX.

## Architecture Diagram

```mermaid
graph TB
    subgraph "Client Layer (Browser)"
        A[User Interface] --> B[React Components]
        B --> C[Page Components]
        B --> D[Interactive Features]
        
        C --> C1[Hero Section]
        C --> C2[Voice Showcase]
        C --> C3[API Status]
        C --> C4[Documentation]
        
        D --> D1[Terminal Assistant - Dirk]
        D --> D2[Audio Panel]
        D --> D3[Page Narrator]
        D --> D4[Warning Banners]
    end
    
    subgraph "Application Layer (Next.js)"
        E[Next.js App Router]
        F[API Routes]
        G[Server Components]
        
        E --> F
        E --> G
        
        F --> F1["API TTS Route"]
    end
    
    subgraph "Business Logic"
        H[Page Narrator Service]
        I[Dirk Assistant Logic]
        J[Notice Sounds System]
        K[SFX Management]
        
        H --> L[Text Processing]
        I --> M[Keyword Matching]
        I --> N[Response Templates]
    end
    
    subgraph "External Services"
        O[ElevenLabs API]
        O --> O1[Text-to-Speech Engine]
        O --> O2[Voice ID - Dirk Adam]
        O --> O3[Multilingual Model v2]
    end
    
    subgraph "Data Storage"
        P[Environment Variables]
        Q[Static Assets]
        
        P --> P1[ELEVENLABS_API_KEY]
        P --> P2[DIRK_VOICE_ID]
        P --> P3[NEXT_PUBLIC_APP_URL]
        
        Q --> Q1[Audio Files]
        Q --> Q2[Images/Icons]
    end
    
    %% Client to Server Connections
    D1 -->|User Query| I
    D2 -->|TTS Request| F1
    D3 -->|Narration Request| H
    H -->|API Call| F1
    
    %% Server to External Connections
    F1 -->|HTTPS POST| O1
    O1 -->|Audio Blob| F1
    F1 -->|Audio Stream| D2
    F1 -->|Audio Stream| D3
    
    %% Configuration
    P1 -.->|Auth| F1
    P2 -.->|Voice Config| F1
    
    %% Styling
    style A fill:#e8eaf6
    style O fill:#fff3e0
    style F1 fill:#c8e6c9
    style I fill:#f8bbd0
    style P1 fill:#ffccbc
```

## Component Architecture

```mermaid
graph LR
    subgraph "Page Structure"
        A[app/page.tsx] --> B[Layout Components]
        A --> C[Content Sections]
        A --> D[Interactive Modules]
    end
    
    subgraph "Layout Components"
        B --> B1[EUHeader]
        B --> B2[Footer]
        B --> B3[Breadcrumb]
        B --> B4[LanguageSelector]
        B --> B5[PageSidebar]
    end
    
    subgraph "Content Sections"
        C --> C1[Hero]
        C --> C2[RequiredReading]
        C --> C3[VoiceShowcase]
        C --> C4[APIStatus]
        C --> C5[LogoCloud]
        C --> C6[Platforms]
        C --> C7[CaseStudies]
        C --> C8[ResearchTimeline]
        C --> C9[FeeSchedule]
    end
    
    subgraph "Interactive Modules"
        D --> D1[TerminalAssistant]
        D --> D2[AudioPanel]
        D --> D3[WarningBanner]
        D --> D4[CookieBanner]
        D --> D5[DocumentMetadata]
    end
    
    subgraph "Shared UI Components"
        E["components/ui"] --> E1[Button]
        E --> E2[Dialog]
        E --> E3[Card]
        E --> E4[Badge]
        E --> E5[Tabs]
        E --> E6[Form Controls]
    end
    
    B1 --> E
    B2 --> E
    D1 --> E
    D2 --> E
```

## Data Flow

```mermaid
sequenceDiagram
    participant U as User
    participant UI as UI Component
    participant API as API TTS Route
    participant EL as ElevenLabs API
    participant Browser as Audio Player
    
    U->>UI: Click "Listen" or type in Dirk
    UI->>UI: Validate input text
    UI->>API: POST to API TTS endpoint
    
    API->>API: Extract text from request
    API->>API: Load API key from env
    API->>API: Get voice ID Dirk Adam
    
    API->>EL: POST to text-to-speech endpoint
    Note over API,EL: Headers xi-api-key<br/>Body with text model_id voice_settings
    
    EL->>EL: Generate TTS audio
    EL-->>API: Audio stream (MP3)
    
    alt Success
        API-->>UI: Audio blob
        UI->>Browser: Create Audio object
        Browser->>U: Play audio
    else Error
        API-->>UI: Error response
        UI->>U: Display error message
    end
```

## Technology Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React Hooks (useState, useEffect, useRef)

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes (App Router)
- **External Integration**: ElevenLabs REST API

### Development Tools
- **Package Manager**: pnpm
- **Type Checking**: TypeScript 5.x
- **Linting**: ESLint
- **Build**: Next.js built-in compiler

## Key Features Architecture

### 1. Terminal Assistant (Dirk)
- **Location**: `components/eleven-labs/terminal-assistant.tsx`
- **Logic**: `lib/dirk.ts`
- **Type**: Deterministic keyword-based chatbot
- **Features**:
  - Keyword matching for responses
  - Bureaucratic personality layer
  - TTS integration for message playback
  - Session logging UI

### 2. Text-to-Speech System
- **API Route**: `app/api/tts/route.ts`
- **Client Library**: `lib/pageNarrator.ts`
- **Flow**:
  1. Client sends text to `/api/tts`
  2. Server authenticates with ElevenLabs
  3. Server forwards to ElevenLabs API
  4. Server streams audio back to client
  5. Client plays audio in browser

### 3. Audio Panel
- **Location**: `components/eleven-labs/audio-panel.tsx`
- **Features**:
  - Waveform visualization (CSS animation)
  - Play/pause controls
  - TTS request management
  - Error handling

### 4. Page Narrator
- **Location**: `lib/pageNarrator.ts`
- **Purpose**: Read page content aloud
- **Implementation**: Routes through `/api/tts` API

### 5. Notice Sounds System
- **Location**: `lib/noticeSounds.ts`
- **Features**:
  - System notification sounds
  - Audio preloading
  - Multiple sound types (success, error, warning)

## Security Architecture

### API Key Management
- **Storage**: Server-side environment variables only
- **Never exposed**: Client never sees `ELEVENLABS_API_KEY`
- **Route**: All TTS requests proxy through `/api/tts`

### Environment Variables
```
ELEVENLABS_API_KEY       → Server-side only (required)
DIRK_VOICE_ID           → Server-side only (optional)
NEXT_PUBLIC_APP_URL     → Public (optional)
```

### Data Privacy
- No user data storage
- Session IDs are client-side only
- No cookies beyond consent banner
- GDPR compliance messaging (satirical)

## Deployment Architecture

```mermaid
graph TB
    subgraph "Production Environment"
        A[Vercel Edge Network]
        B[Next.js Server]
        C[Static Assets CDN]
    end
    
    subgraph "External Services"
        D[ElevenLabs API]
    end
    
    subgraph "Configuration"
        E[Environment Variables]
        E --> E1[ELEVENLABS_API_KEY]
        E --> E2[DIRK_VOICE_ID]
    end
    
    A --> B
    A --> C
    B --> D
    E --> B
    
    style A fill:#000,color:#fff
    style D fill:#ff6b35
    style E1 fill:#ffccbc
```

### Recommended Platforms
1. **Vercel** (Primary)
   - Native Next.js support
   - Edge functions
   - Automatic HTTPS
   - Environment variable management

2. **Alternative Platforms**
   - Netlify
   - Railway
   - AWS Amplify
   - Any Node.js hosting

## Performance Considerations

### Optimization Strategies
1. **Server-side TTS Proxy**: Keeps API keys secure
2. **Audio Streaming**: Direct blob streaming from ElevenLabs
3. **Static Assets**: Preloaded notification sounds
4. **Code Splitting**: Lazy loading of components
5. **Image Optimization**: Next.js automatic image optimization

### Limitations
- **TTS Latency**: 1-3 seconds (ElevenLabs processing time)
- **Audio File Size**: ~100KB per 10 seconds of speech
- **API Rate Limits**: Based on ElevenLabs plan

## Extension Points

### Easy to Add
1. New bureaucratic sections (components)
2. Additional Dirk keyword responses
3. New notification sounds
4. Alternative voice IDs
5. Multi-language UI support

### Requires Architecture Changes
1. User authentication system
2. Database for user sessions
3. Real-time voice cloning
4. Speech-to-text integration
5. Admin dashboard

## File Structure Overview

```
ElevenGov/
├── app/                    # Next.js App Router
│   ├── api/tts/           # TTS API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── eleven-labs/       # Custom components (bureaucratic theme)
│   │   ├── terminal-assistant.tsx
│   │   ├── audio-panel.tsx
│   │   └── [30+ components]
│   └── ui/                # shadcn/ui components
│       └── [50+ UI primitives]
├── hooks/                 # Custom React hooks
│   └── use-mobile.ts
├── lib/                   # Business logic & utilities
│   ├── dirk.ts           # Dirk assistant logic
│   ├── pageNarrator.ts   # TTS integration
│   ├── noticeSounds.ts   # Audio notifications
│   └── utils.ts          # Utility functions
├── public/
│   └── audio/            # Static audio files
└── .env.local            # Environment variables (not in repo)
```

## Satirical Design Patterns

The architecture deliberately implements "bureaucratic anti-patterns":

1. **Over-Documentation**: Excessive metadata and headers
2. **Form References**: Every action mentions a form number
3. **Processing Times**: Artificial delays mentioned everywhere
4. **Legal Disclaimers**: Warning banners and cookie notices
5. **Rigid Styling**: No rounded corners, 1px borders, system fonts
6. **Deterministic AI**: Dirk uses keyword matching, not LLMs

This creates the comedic effect of modern AI technology trapped in 2016 government web design.
