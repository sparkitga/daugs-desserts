const dailyFlavors = [
  { name: "SCREAMS BY SPRINKLES", available: true },
  { name: "WHITE CHOCOLATE BANANA BREAD", available: true },
  { name: "COOKIES & CRÈME", available: true },
  { name: "STRAWBERRY BUTTERMILK", available: true },
  { name: "BUTTER & SALT", available: true },
  { name: "OLD FASHION", available: true },
  { name: "HUCKLEBERRY", available: true },
  { name: "SAIGON CINNAMON CRUMB", available: true },
  { name: "MAPLE BACON", available: true },
  { name: "VANILLA BEAN GLAZED", available: true },
  { name: "BASIL YUZU BENEDICT", note: "(AVAILABLE IN-STORE ONLY)", available: true },
  { name: "DROPS", note: "(AVAILABLE IN-STORE ONLY)", available: true },
  { name: "CINNAMON ROLLS", note: "(AVAILABLE WEDNESDAY ONLY)", available: true },
  { name: "APPLE FRITTER", note: "(AVAILABLE FRIDAY ONLY)", available: true },
  { name: "TWISTS", note: "(AVAILABLE TUESDAY ONLY)", available: true },
]

export function DailyFlavors() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl tracking-[0.2em] text-[#a89968] font-light text-center mb-12">DAILY FLAVORS</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {dailyFlavors.map((flavor, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-4 group">
              <div className="aspect-square bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 bg-[#d4c5a0] rounded-full"></div>
              </div>
              {flavor.available && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#a89968]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <h3 className="text-xs tracking-wider text-[#a89968] font-medium">{flavor.name}</h3>
            {flavor.note && <p className="text-xs text-[#a89968] mt-1 opacity-75">{flavor.note}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
