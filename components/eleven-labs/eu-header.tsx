'use client'

export function EUHeader({
  onOpenAssistant,
  onListenClick,
}: {
  onOpenAssistant: () => void
  onListenClick: () => void
}) {
  return (
    <div className="bg-white border-b-2 border-gray-400">
      {/* EU Flag and Title Bar */}
      <div className="flex flex-wrap items-start sm:items-center justify-between gap-2 p-3 sm:p-4 border-b border-gray-300">
        <div className="flex items-center gap-3 min-w-0">
          <svg width="40" height="27" viewBox="0 0 40 27" className="flex-shrink-0">
            <rect width="40" height="27" fill="#003399" />
            <circle cx="8" cy="13.5" r="2.5" fill="#FFCC00" />
            <circle cx="12" cy="5" r="2.5" fill="#FFCC00" />
            <circle cx="12" cy="22" r="2.5" fill="#FFCC00" />
            <circle cx="20" cy="3" r="2.5" fill="#FFCC00" />
            <circle cx="20" cy="24" r="2.5" fill="#FFCC00" />
            <circle cx="28" cy="5" r="2.5" fill="#FFCC00" />
            <circle cx="28" cy="22" r="2.5" fill="#FFCC00" />
            <circle cx="32" cy="13.5" r="2.5" fill="#FFCC00" />
          </svg>
          <div className="min-w-0">
            <h1 className="font-bold text-sm text-primary">Official EU Portal</h1>
            <p className="text-xs text-gray-700 hidden sm:block">European Digital Infrastructure Directorate — Directorate-General for Communications Networks, Content and Technology</p>
            <p className="text-xs text-gray-700 sm:hidden">European Digital Infrastructure Directorate</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={onListenClick}
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-200 border-2 border-gray-400 hover:bg-gray-300 transition-colors flex-shrink-0"
            title="Narrate this page using official EU voice"
            data-action="listen-page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 flex-shrink-0">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            <div className="text-left">
              <p className="text-xs font-bold text-gray-700 whitespace-nowrap">LISTEN TO PAGE</p>
              <p className="text-xs text-gray-500 hidden sm:block">ACCESSIBILITY FEATURE</p>
            </div>
          </button>
          
          <button 
            onClick={onOpenAssistant}
            className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-primary text-white border-2 border-gray-400 hover:bg-blue-800 transition-colors flex-shrink-0"
            title="Open Dirk, the official portal voice assistant"
            data-action="open-assistant"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8"/>
              <path d="M12 17v4"/>
              <path d="M7 8h.01M12 8h.01M17 8h.01"/>
            </svg>
            <div className="text-left">
              <p className="text-xs font-bold whitespace-nowrap">TERMINAL ASSISTANT</p>
              <p className="text-xs opacity-80 hidden sm:block">DIRK v0.9.2</p>
            </div>
          </button>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-primary text-white p-2 text-xs flex flex-wrap justify-between gap-1">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="#" className="text-white hover:underline">Contact</a>
          <a href="#" className="text-white hover:underline">Help</a>
        </div>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          <a href="#" className="text-white hover:underline">Accessibility</a>
          <a href="#" className="text-white hover:underline">Privacy</a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 bg-secondary border-b border-gray-300">
        <div className="flex gap-2 max-w-6xl mx-auto">
          <input
            type="text"
            defaultValue=""
            placeholder="Search the portal..."
            className="flex-1 min-w-0 px-2 py-1 border border-gray-400 bg-white text-xs"
          />
          <button className="px-3 sm:px-4 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800 whitespace-nowrap" data-action="search">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
