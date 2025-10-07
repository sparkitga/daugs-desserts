const seasonalFlavors = [
  { name: "LEMON MERINGUE MASAZANA", note: "(ONLY ON MONDAYS!)" },
  { name: "BOURBON PECAN PIE", note: "" },
  { name: "PUMPKIN CHEESECAKE", note: "" },
]

export function SeasonalFlavors() {
  return (
    <section className="container mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl tracking-[0.2em] text-[#a89968] font-light text-center mb-12">SEASONAL FLAVORS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {seasonalFlavors.map((flavor, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-4">
              <div className="aspect-square bg-[#f5f3ed] rounded-full shadow-md flex items-center justify-center overflow-hidden mx-auto max-w-[200px]">
                <div className="w-32 h-32 bg-[#d4c5a0] rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xs tracking-wider text-[#a89968] font-medium">{flavor.name}</h3>
            {flavor.note && <p className="text-xs text-[#a89968] mt-1 opacity-75">{flavor.note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
