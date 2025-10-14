import { DoughnutCard } from "@/components/doughnut-card"

const dailyFlavors = [
  { name: "Screams N' Sprinkles", image: 1, available: true },
  { name: "White Chocolate Banana Bread", image: 2, available: true },
  { name: "Cookies & Crème", image: 3, available: true },
  { name: "Strawberry Buttermilk", image: 4, available: true },
  { name: "Butter & Salt", image: 5, available: true },
  { name: "Old Fashion", image: 6, available: true },
  { name: "Huckleberry", image: 7, available: true },
  { name: "Saigon Cinnamon Crumb", image: 8, available: true },
  { name: "Maple Bacon", image: 9, available: true },
  { name: "Vanilla Bean Glazed", image: 10, available: true },
  { name: "Basil Yuzu Benedict", image: 11, note: "(Available in-store only)" },
  { name: "Drops", image: 12, note: "(Available in-store only)" },
  { name: "Cinnamon Rolls", image: 13, note: "(Available Wednesday only)" },
  { name: "Apple Fritter", image: 14, note: "(Available Friday only)" },
  { name: "Twists", image: 15, note: "(Available Tuesday only)" },
]

export function DailyFlavors() {
  return (
    <section id="daily-flavors" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase tracking-widest text-primary mb-12">Daily Flavors</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {dailyFlavors.map((flavor, index) => (
            <DoughnutCard key={index} name={flavor.name} image={flavor.image} note={flavor.note} />
          ))}
        </div>
      </div>
    </section>
  )
}
