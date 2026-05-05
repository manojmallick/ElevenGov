export function LanguageSelector() {
  const languages = [
    { code: 'BG', name: 'български' },
    { code: 'CS', name: 'Čeština' },
    { code: 'DA', name: 'Dansk' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'EL', name: 'Ελληνικά' },
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'ET', name: 'Eesti' },
    { code: 'FI', name: 'Suomi' },
    { code: 'FR', name: 'Français' },
    { code: 'GA', name: 'Gaeilge' },
    { code: 'HR', name: 'Hrvatski' },
    { code: 'HU', name: 'Magyar' },
    { code: 'IT', name: 'Italiano' },
    { code: 'LT', name: 'Lietuvių' },
    { code: 'LV', name: 'Latvietis' },
    { code: 'MT', name: 'Malti' },
    { code: 'NL', name: 'Nederlands' },
    { code: 'PL', name: 'Polski' },
    { code: 'PT', name: 'Português' },
    { code: 'RO', name: 'Română' },
    { code: 'SK', name: 'Slovenčina' },
    { code: 'SL', name: 'Slovenščina' },
    { code: 'SV', name: 'Svenska' },
  ];

  return (
    <div className="bg-white border border-gray-400 p-3">
      <h3 className="font-bold text-xs text-primary mb-2">Select Language</h3>
      <div className="grid grid-cols-2 gap-2 text-xs">
        {languages.map((lang) => (
          <a
            key={lang.code}
            href="#"
            className="text-primary underline hover:font-bold py-1"
          >
            {lang.name} ({lang.code})
          </a>
        ))}
      </div>
    </div>
  );
}
