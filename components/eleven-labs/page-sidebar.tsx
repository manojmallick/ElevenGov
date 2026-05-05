'use client'

import { useEffect, useState } from 'react'

export function PageSidebar() {
  const [activeSection, setActiveSection] = useState('')

  const sections = [
    { id: 'hero', label: '1. Portal Overview' },
    { id: 'required-reading', label: '2. Required Reading' },
    { id: 'voice-showcase', label: '3. Voice Asset Categories' },
    { id: 'api-status', label: '4. API Endpoint Status' },
    { id: 'partners', label: '5. Institutional Partners' },
    { id: 'platforms', label: '6. Service Platforms' },
    { id: 'applications', label: '7. Authorized Applications' },
    { id: 'agents', label: '8. Conversational AI Framework' },
    { id: 'api-docs', label: '9. Technical Integration' },
    { id: 'fee-schedule', label: '10. Fee Schedule' },
    { id: 'implementations', label: '11. Implementation Registry' },
    { id: 'regulations', label: '12. Regulatory Framework' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hidden lg:block w-48 shrink-0">
      <div className="sticky top-24 bg-white border border-gray-400 p-2">
        <h3 className="font-bold text-xs text-primary border-b border-gray-400 pb-1 mb-2">On this page</h3>
        <nav className="space-y-0">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-xs py-1 px-1 border-l-2 ${
                activeSection === section.id
                  ? 'border-primary bg-blue-50 text-primary font-bold'
                  : 'border-transparent text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="mt-3 pt-2 border-t border-gray-400">
          <button
            className="w-full px-2 py-1 bg-primary text-white text-xs font-bold border border-gray-400 hover:bg-blue-800 mb-2"
            data-action="ask-portal"
          >
            Ask Dirk (Portal Assistant)
          </button>
          <p className="text-xs text-gray-600">Page sections: {sections.length}</p>
          <p className="text-xs text-gray-600">Est. read time: 47 min</p>
        </div>
      </div>
    </div>
  )
}
