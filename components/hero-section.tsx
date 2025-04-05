"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const HeroSection = () => {
  const { language, setLanguage, t } = useLanguage()

  return (
    <section className="relative">
      {/* Background with German flag colors as subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-red-500/5 to-yellow-500/5" />

      <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">{t("welcome")}</h1>
          <p className="text-xl text-muted-foreground">{t("discover")}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="#kurse">{t("explore_courses")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#kontakt">{t("contact_us")}</Link>
            </Button>
          </div>

          {/* Language flags */}
          <div className="flex justify-center gap-6 pt-8">
            <button
              onClick={() => setLanguage("de")}
              className={`flex flex-col items-center cursor-pointer transition-transform hover:scale-110 ${language === "de" ? "scale-110 ring-2 ring-primary rounded-full" : ""}`}
              aria-label="Auf Deutsch anzeigen"
            >
              <div className="language-flag">
                <div className="w-full h-full bg-gradient-to-b from-black via-[#DD0000] to-[#FFCE00]"></div>
              </div>
              <span className="text-sm mt-1">Deutsch</span>
            </button>
            <button
              onClick={() => setLanguage("uz")}
              className={`flex flex-col items-center cursor-pointer transition-transform hover:scale-110 ${language === "uz" ? "scale-110 ring-2 ring-primary rounded-full" : ""}`}
              aria-label="O'zbek tilida ko'rsatish"
            >
              <div className="language-flag">
                <div className="w-full h-full bg-gradient-to-b from-[#0099B5] via-white to-[#1EB53A]"></div>
              </div>
              <span className="text-sm mt-1">O'zbekcha</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`flex flex-col items-center cursor-pointer transition-transform hover:scale-110 ${language === "en" ? "scale-110 ring-2 ring-primary rounded-full" : ""}`}
              aria-label="Show in English"
            >
              <div className="language-flag">
                <div className="w-full h-full bg-[#012169]"></div>
              </div>
              <span className="text-sm mt-1">English</span>
            </button>
            <button
              onClick={() => setLanguage("ru")}
              className={`flex flex-col items-center cursor-pointer transition-transform hover:scale-110 ${language === "ru" ? "scale-110 ring-2 ring-primary rounded-full" : ""}`}
              aria-label="Показать на русском"
            >
              <div className="language-flag">
                <div className="w-full h-full bg-gradient-to-b from-white via-[#0039A6] to-[#D52B1E]"></div>
              </div>
              <span className="text-sm mt-1">Русский</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

