import { Header } from "@/components/header"
import { MenuIndex } from "@/components/menu-index"
import { Hero } from "@/components/hero"
import { PackBuilder } from "@/components/pack-builder"
import { DailyFlavors } from "@/components/daily-flavors"
import { SeasonalFlavors } from "@/components/seasonal-flavors"
import { SpecialtyFlavors } from "@/components/specialty-flavors"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MenuIndex />
      <Hero />
      <PackBuilder />
      <DailyFlavors />
      <SeasonalFlavors />
      <SpecialtyFlavors />
    </main>
  )
}
