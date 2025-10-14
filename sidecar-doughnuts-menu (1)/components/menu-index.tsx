"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const menuSections = [
  { id: "pack-builder", label: "Pack Builder" },
  { id: "daily-flavors", label: "Daily Flavors" },
  { id: "seasonal-flavors", label: "Seasonal Flavors" },
  { id: "specialty-flavors", label: "Specialty Flavors" },
]

export function MenuIndex() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )

    menuSections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4 overflow-x-auto">
          {menuSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "text-sm uppercase tracking-wider whitespace-nowrap px-4 py-2 rounded-full transition-all",
                activeSection === id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
