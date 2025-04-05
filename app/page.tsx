import HeroSection from "@/components/hero-section"
import MapSection from "@/components/map-section"
import CoursesSection from "@/components/courses-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"
import YouTubePlayer from "@/components/youtube-player"
import PhotoGallery from "@/components/photo-gallery"

export default function Home() {
  const photos = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Deutschkurs in Taschkent",
      caption: "Deutschkurs in Taschkent",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sprachzentrum in Samarkand",
      caption: "Unser neues Sprachzentrum in Samarkand",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Studenten beim Lernen",
      caption: "Unsere Studenten beim Lernen",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Kulturveranstaltung",
      caption: "Deutsche Kulturveranstaltung",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Abschlussfeier",
      caption: "Abschlussfeier des B2-Kurses",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Deutschlehrer",
      caption: "Unser Team von qualifizierten Deutschlehrern",
    },
  ]

  return (
    <>
      <HeroSection />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Willkommen in unserem Sprachzentrum
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sehen Sie sich unser Einführungsvideo an und erfahren Sie mehr über unsere Sprachkurse und Angebote.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YouTubePlayer videoId="Yw9qeR9rf4Q" title="Deutsch lernen: Die wichtigsten Sätze für Anfänger" />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container max-w-4xl mx-auto">
          <PhotoGallery photos={photos} title="Eindrücke aus unserem Sprachzentrum" />
        </div>
      </section>
      <CoursesSection />
      <MapSection />
      <BenefitsSection />
      <ContactSection />
    </>
  )
}

