const specialtyFlavors = [
  { name: "VEGAN CHOCOLATE SILK", icon: true },
  { name: "WEEKLY GLUTEN FRIENDLY", icon: true },
]

export function SpecialtyFlavors() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl tracking-[0.2em] text-[#a89968] font-light text-center mb-12">
        GLUTEN FRIENDLY AND VEGAN
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {specialtyFlavors.map((flavor, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-4">
              <div className="aspect-square bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden mx-auto max-w-[200px]">
                {flavor.icon ? (
                  <div className="w-32 h-32 bg-[#d4c5a0] rounded-full"></div>
                ) : (
                  <svg className="w-24 h-24 text-[#a89968]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="text-xs tracking-wider text-[#a89968] font-medium">{flavor.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
