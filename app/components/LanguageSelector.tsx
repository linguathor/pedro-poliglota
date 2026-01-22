"use client";

import { useState, useEffect } from "react";

const languages = [
  { code: "en", flag: "🇺🇸", name: "Inglés", label: "EN", color: "from-blue-500 to-indigo-600", image: "/pedro-poliglota/images/ingles.jpeg" },
  { code: "de", flag: "🇩🇪", name: "Alemán", label: "DE", color: "from-red-500 to-yellow-500", image: "/pedro-poliglota/images/aleman.jpeg" },
  { code: "ru", flag: "🇷🇺", name: "Ruso", label: "RU", color: "from-blue-600 to-red-600", image: "/pedro-poliglota/images/ruso.jpeg" },
  { code: "it", flag: "🇮🇹", name: "Italiano", label: "IT", color: "from-green-500 to-red-500", image: "/pedro-poliglota/images/italiano.jpeg" },
  { code: "pt", flag: "🇵🇹", name: "Portugués", label: "PT", color: "from-green-600 to-red-600", image: "/pedro-poliglota/images/portugues.jpeg" },
  { code: "fr", flag: "🇫🇷", name: "Francés", label: "FR", color: "from-blue-600 to-red-500", image: "/pedro-poliglota/images/frances.jpeg" },
];

const langMeta: Record<string, { label: string; anchor: string }> = {
  en: { label: "Inglés (EN)", anchor: "#idioma-en" },
  de: { label: "Alemán (DE)", anchor: "#idioma-de" },
  fr: { label: "Francés (FR)", anchor: "#idioma-fr" },
  it: { label: "Italiano (IT)", anchor: "#idioma-it" },
  pt: { label: "Portugués (PT)", anchor: "#idioma-pt" },
  ru: { label: "Ruso (RU)", anchor: "#idioma-ru" },
};

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);

  useEffect(() => {
    // initialize from localStorage or hash
    try {
      const saved = localStorage.getItem("pedro:selectedLang");
      if (saved && langMeta[saved]) {
        setSelectedLang(saved);
        // ensure the checkout display is updated
        const selEl = document.getElementById("selected-language");
        if (selEl) selEl.textContent = `Seleccionado: ${langMeta[saved].label}`;
      } else {
        const hash = window.location.hash || "";
        const m = hash.match(/lang=(en|de|fr|it|pt|ru)/);
        if (m) {
          setSelectedLang(m[1]);
          localStorage.setItem("pedro:selectedLang", m[1]);
          window.dispatchEvent(new CustomEvent("pedro:langSelected"));
        }
      }
    } catch (e) {
      // ignore storage errors
      console.warn(e);
    }
  }, []);

  const handleSelect = (code: string) => {
    setSelectedLang(code);
    try {
      localStorage.setItem("pedro:selectedLang", code);
    } catch {}

    // update checkout display (compat)
    const selEl = document.getElementById("selected-language");
    if (selEl) selEl.textContent = `Seleccionado: ${langMeta[code].label}`;

    // dispatch cross-window event
    window.dispatchEvent(new CustomEvent("pedro:langSelected", { detail: { lang: code } }));

    // Scroll to checkout section
    const checkout = document.getElementById("checkout");
    if (checkout) {
      checkout.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Track event
    console.log("[track] language_selected", { lang: code });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {languages.map((lang) => {
          const isSelected = selectedLang === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`group relative bg-white border-2 rounded-2xl p-8 transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-105 flex flex-col items-center justify-center gap-4 ${
                isSelected
                  ? "border-green-500 ring-4 ring-green-500/30 shadow-2xl shadow-green-500/30 scale-105"
                  : "border-slate-200 hover:border-blue-300"
              }`}
              aria-label={`Elegir ${lang.name}`}
            >
              {/* Selected Badge */}
              {isSelected && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-2 shadow-lg shadow-green-500/50 animate-bounce">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Big Flag Emoji */}
              <div className="text-7xl group-hover:scale-110 transition-transform">
                {lang.flag}
              </div>

              {/* Language Name */}
              <div className="text-xl font-black text-slate-900 uppercase tracking-tight">
                {lang.name}
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <p className="inline-flex items-center gap-2 px-5 py-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-sm font-semibold text-blue-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Selecciona tu idioma para comenzar
        </p>
      </div>
    </div>
  );
}

export function SelectedLanguageDisplay() {
  const [selectedText, setSelectedText] = useState(
    "Ningún idioma seleccionado todavía."
  );
  const [selectedLang, setSelectedLangCode] = useState<string | null>(null);

  // Read from localStorage and listen for updates
  useEffect(() => {
    const read = () => {
      try {
        const saved = localStorage.getItem("pedro:selectedLang");
        if (saved && langMeta[saved]) {
          setSelectedText(`${langMeta[saved].label}`);
          setSelectedLangCode(saved);
        }
      } catch (e) {
        // ignore
      }
    };

    read();

    const handler = () => read();
    window.addEventListener("pedro:langSelected", handler);
    return () => window.removeEventListener("pedro:langSelected", handler);
  }, []);

  const langInfo = selectedLang ? languages.find(l => l.code === selectedLang) : null;

  return (
    <div className="flex items-center justify-center">
      {selectedLang && langInfo ? (
        <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-green-50 to-emerald-50 border-3 border-green-300 rounded-2xl shadow-lg">
          <div className="text-4xl">{langInfo.flag}</div>
          <div className="text-left">
            <div className="text-sm font-bold text-green-700 uppercase tracking-wide">Idioma Seleccionado</div>
            <div className="text-2xl font-black text-slate-900">{selectedText}</div>
          </div>
          <div className="bg-green-500 text-white rounded-full p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="inline-flex items-center gap-3 px-8 py-5 bg-slate-100 border-2 border-slate-300 rounded-2xl">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-semibold text-slate-600" id="selected-language">
            {selectedText}
          </p>
        </div>
      )}
    </div>
  );
}
