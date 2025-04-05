"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Deutsches Sprachzentrum</h3>
            <p className="text-sm text-muted-foreground mb-4">{t("about_us")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("links")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#kurse" className="text-muted-foreground hover:text-foreground">
                  {t("courses")}
                </Link>
              </li>
              <li>
                <Link href="#standorte" className="text-muted-foreground hover:text-foreground">
                  {t("locations")}
                </Link>
              </li>
              <li>
                <Link href="#vorteile" className="text-muted-foreground hover:text-foreground">
                  {t("benefits")}
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-muted-foreground hover:text-foreground">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Amir Temur Straße 107A</p>
              <p>Taschkent, Usbekistan</p>
              <p>Telefon: +998 71 123 4567</p>
              <p>E-Mail: info@deutsch-usbekistan.uz</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Deutsches Sprachzentrum in Usbekistan. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

