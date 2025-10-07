import { MenuHero } from "@/components/menu-hero"
import { PackSelector } from "@/components/pack-selector"
import { DailyFlavors } from "@/components/daily-flavors"
import { SeasonalFlavors } from "@/components/seasonal-flavors"
import { SpecialtyFlavors } from "@/components/specialty-flavors"
import { Header } from "@/components/header"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f5f3ed]">
      <Header />
      <main>
        <MenuHero />
        <PackSelector />
        <DailyFlavors />
        <SeasonalFlavors />
        <SpecialtyFlavors />
      </main>
    </div>
  )
}
