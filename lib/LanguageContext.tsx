"use client";
import React, { createContext, useState, useContext, useEffect, startTransition } from "react";
import type { Language } from "./translations";
import { translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)["en"]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const defaultContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: (key: keyof (typeof translations)["en"]) => {
    return translations.en[key] || "";
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always start with "en" to match SSR output
  const [language, setLanguageState] = useState<Language>("en");

  // After hydration, read from localStorage
  useEffect(() => {
    startTransition(() => {
      const savedLanguage = localStorage.getItem("language") as Language | null;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
        setLanguageState(savedLanguage);
      }
    });
  }, []);

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: keyof (typeof translations)["en"]) => {
    return translations[language][key as keyof (typeof translations)[Language]] || "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default context instead of throwing error
    // This allows the site to work during SSR/static generation
    return defaultContext;
  }
  return context;
}
