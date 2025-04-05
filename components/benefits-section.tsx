"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe2, BookOpen, Award, Users, Briefcase, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const BenefitsSection = () => {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: <Globe2 className="h-10 w-10 text-primary" />,
      title: t("international_recognition"),
      description:
        "Unsere Zertifikate werden international anerkannt und können für Studium und Beruf verwendet werden.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: t("modern_methods"),
      description: "Wir verwenden die neuesten Lehrmethoden und -materialien für einen effektiven Spracherwerb.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: t("qualified_teachers"),
      description: "Unsere Lehrkräfte sind hochqualifiziert und haben langjährige Erfahrung im Sprachunterricht.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t("small_learning_groups"),
      description: "Kleine Gruppen ermöglichen eine individuelle Betreuung und einen schnelleren Lernfortschritt.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: t("career_prospects"),
      description: "Deutschkenntnisse eröffnen Ihnen neue berufliche Perspektiven in Deutschland und weltweit.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: t("study_opportunities"),
      description: "Mit unseren Sprachkursen bereiten Sie sich optimal auf ein Studium in Deutschland vor.",
    },
  ]

  return (
    <section id="vorteile" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("why_learn_german")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("discover_benefits")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Deutsch ist die meistgesprochene Muttersprache in Europa</h3>
          <p className="text-lg mb-6">
            Mit über 100 Millionen Muttersprachlern ist Deutsch eine der wichtigsten Sprachen in Europa und weltweit.
            Deutschland ist zudem die größte Volkswirtschaft in Europa und bietet zahlreiche Möglichkeiten für Studium
            und Karriere.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">100+ Mio.</div>
              <div className="text-sm text-muted-foreground">Muttersprachler</div>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">#1</div>
              <div className="text-sm text-muted-foreground">Wirtschaft in Europa</div>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">400+</div>
              <div className="text-sm text-muted-foreground">Universitäten</div>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary">2000+</div>
              <div className="text-sm text-muted-foreground">Deutsche Unternehmen weltweit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

