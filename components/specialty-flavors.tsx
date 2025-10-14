import { DoughnutCard } from "@/components/doughnut-card"
import { Wheat } from "lucide-react"

const specialtyFlavors = [
  { name: "Vegan Chocolate Silk", image: 1 },
  { name: "Weekly Gluten Friendly", image: 2, isGlutenFree: true },
]

export function SpecialtyFlavors() {
  return (
    <section id="specialty-flavors" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase tracking-widest text-primary mb-12">Gluten Friendly and Vegan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {specialtyFlavors.map((flavor, index) => (
            <DoughnutCard
              key={index}
              name={flavor.name}
              image={flavor.image}
              large
              icon={flavor.isGlutenFree ? <Wheat className="w-12 h-12 text-primary" /> : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
