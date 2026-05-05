'use client'

export function Header() {
  return (
    <div className="bg-white border-b-2 border-gray-400 sticky top-0 z-50">
      {/* EU Flag and Title Bar */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-300">
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
        <div>
          <h1 className="font-bold text-sm text-primary">Official EU Portal</h1>
          <p className="text-xs text-gray-700">European Digital Infrastructure Directorate — Directorate-General for Communications Networks, Content and Technology</p>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="bg-primary text-white p-2 text-xs flex justify-between">
        <div className="space-x-4">
          <a href="#" className="text-white hover:underline">Home</a>
          <a href="#" className="text-white hover:underline">About</a>
          <a href="#" className="text-white hover:underline">Contact</a>
          <a href="#" className="text-white hover:underline">Help</a>
        </div>
        <div className="space-x-2">
          <a href="#" className="text-white hover:underline">Accessibility Statement</a>
          <a href="#" className="text-white hover:underline">Privacy</a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 bg-secondary border-b border-gray-300">
        <div className="flex gap-2 max-w-6xl mx-auto">
          <input
            type="text"
            placeholder="Search the portal..."
            className="flex-1 px-2 py-1 border border-gray-400 bg-white text-xs"
          />
          <button className="px-4 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
