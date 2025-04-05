"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "de" | "uz" | "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("de")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})

  useEffect(() => {
    // Lade die bevorzugte Sprache aus dem localStorage oder verwende Deutsch als Standard
    const savedLanguage = (localStorage.getItem("preferredLanguage") || "de") as Language
    setLanguageState(savedLanguage)
    document.documentElement.lang = savedLanguage

    // Lade die Übersetzungen
    import("@/translations").then((module) => {
      setTranslations(module.default)
    })
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("preferredLanguage", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    if (!translations[language]) return key
    return translations[language][key] || translations["de"][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

