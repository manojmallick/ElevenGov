'use client'

import { useState } from 'react'
import { EUHeader } from "@/components/eleven-labs/eu-header"
import { Hero } from "@/components/eleven-labs/hero"
import { VoiceShowcase } from "@/components/eleven-labs/voice-showcase"
import { LogoCloud } from "@/components/eleven-labs/logo-cloud"
import { Platforms } from "@/components/eleven-labs/platforms"
import { CreativeSection } from "@/components/eleven-labs/creative-section"
import { AgentsSection } from "@/components/eleven-labs/agents-section"
import { APISection } from "@/components/eleven-labs/api-section"
import { CaseStudies } from "@/components/eleven-labs/case-studies"
import { ResearchTimeline } from "@/components/eleven-labs/research-timeline"
import { CookieBanner } from "@/components/eleven-labs/cookie-banner"
import { Breadcrumb } from "@/components/eleven-labs/breadcrumb"
import { LanguageSelector } from "@/components/eleven-labs/language-selector"
import { Footer } from "@/components/eleven-labs/footer"
import { WarningBanner } from "@/components/eleven-labs/warning-banner"
import { RequiredReading } from "@/components/eleven-labs/required-reading"
import { APIStatus } from "@/components/eleven-labs/api-status"
import { TerminalAssistant } from "@/components/eleven-labs/terminal-assistant"
import { FeeSchedule } from "@/components/eleven-labs/fee-schedule"
import { PageSidebar } from "@/components/eleven-labs/page-sidebar"
import { DocumentMetadata } from "@/components/eleven-labs/document-metadata"
import { AudioPanel } from "@/components/eleven-labs/audio-panel"

export default function ElevenLabsHomePage() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false)
  const [isAudioPanelOpen, setIsAudioPanelOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <WarningBanner />
      <EUHeader onOpenAssistant={() => setIsAssistantOpen(true)} onListenClick={() => setIsAudioPanelOpen(true)} />
      <Breadcrumb />
      
      <div className="max-w-6xl mx-auto px-2 py-1">
        <LanguageSelector />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-2 px-2">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <DocumentMetadata />
          <div id="hero"><Hero /></div>
          <div id="required-reading"><RequiredReading /></div>
          <div id="voice-showcase"><VoiceShowcase /></div>
          <div id="api-status"><APIStatus /></div>
          <div id="partners"><LogoCloud /></div>
          <div id="platforms"><Platforms /></div>
          <div id="applications"><CreativeSection /></div>
          <div id="agents"><AgentsSection /></div>
          <div id="api-docs"><APISection /></div>
          <div id="fee-schedule"><FeeSchedule /></div>
          <div id="implementations"><CaseStudies /></div>
          <div id="regulations"><ResearchTimeline /></div>
        </div>
        
        {/* Right sidebar */}
        <PageSidebar onOpenAssistant={() => setIsAssistantOpen(true)} />
      </div>
      
      <Footer />
      
      <CookieBanner />
      <TerminalAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} />
      <AudioPanel isOpen={isAudioPanelOpen} onClose={() => setIsAudioPanelOpen(false)} />
    </main>
  )
}
