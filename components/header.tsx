"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">Deutsches Sprachzentrum</span>
              <span className="text-xs text-muted-foreground">in Usbekistan</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#kurse" className="text-sm font-medium transition-colors hover:text-primary">
            {t("courses")}
          </Link>
          <Link href="#standorte" className="text-sm font-medium transition-colors hover:text-primary">
            {t("locations")}
          </Link>
          <Link href="#vorteile" className="text-sm font-medium transition-colors hover:text-primary">
            {t("benefits")}
          </Link>
          <Link href="#kontakt" className="text-sm font-medium transition-colors hover:text-primary">
            {t("contact")}
          </Link>
          <Button>{t("register_now")}</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 bg-background">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#kurse"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("courses")}
            </Link>
            <Link
              href="#standorte"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("locations")}
            </Link>
            <Link
              href="#vorteile"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("benefits")}
            </Link>
            <Link
              href="#kontakt"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <Button onClick={() => setIsMenuOpen(false)}>{t("register_now")}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

