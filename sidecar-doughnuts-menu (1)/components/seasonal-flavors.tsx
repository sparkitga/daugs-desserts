import { DoughnutCard } from "@/components/doughnut-card"

const seasonalFlavors = [
  { name: "Lemon Meringue Macarana", note: "(Only on Mondays)", image: 1 },
  { name: "Bourbon Pecan Pie", image: 2 },
  { name: "Pumpkin Cheesecake", image: 3 },
]

export function SeasonalFlavors() {
  return (
    <section id="seasonal-flavors" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase tracking-widest text-primary mb-12">Seasonal Flavors</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {seasonalFlavors.map((flavor, index) => (
            <DoughnutCard key={index} name={flavor.name} image={flavor.image} note={flavor.note} large />
          ))}
        </div>
      </div>
    </section>
  )
}
