import Image from "next/image"

export function PackBuilder() {
  return (
    <section id="pack-builder" className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              OR
            </div>
            <div className="bg-foreground text-background px-12 py-4 relative">
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">Make Your Own Perfect Pack</h2>
              <p className="text-sm mt-2">6 Pack $29 / 12 Pack $56</p>
            </div>
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-8 text-xs uppercase tracking-wider">
              <button className="hover:text-primary transition-colors">Choose Flavors</button>
              <button className="hover:text-primary transition-colors">Choose Assortment</button>
            </div>
          </div>
        </div>

        <div className="relative max-w-2xl mx-auto mt-16">
          <Image
            src="/artisanal-doughnut-box-packaging.jpg"
            alt="Doughnut box"
            width={600}
            height={300}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
            <p
              className="text-sm uppercase tracking-widest text-primary font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Doughnuts & Coffee
            </p>
          </div>
        </div>

        {/* Pack Options */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {/* 6 Pack */}
          <div className="border border-border p-8 bg-card">
            <h3 className="text-center text-lg font-serif mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              6 Pack
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-full bg-muted flex items-center justify-center">
                  <Image
                    src={`/gourmet-doughnut-flavor-.jpg?height=150&width=150&query=gourmet doughnut flavor ${i + 1}`}
                    alt={`Doughnut ${i + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-muted-foreground uppercase tracking-wider leading-relaxed">
              Butter & Salt • Old Fashion • Vanilla Bean Glazed • Huckleberry • Banana Bread Glazed • Maple Chocolate
            </p>
          </div>

          {/* 12 Pack */}
          <div className="border border-border p-8 bg-card">
            <h3 className="text-center text-lg font-serif mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              12 Pack
            </h3>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-full bg-muted flex items-center justify-center">
                  <Image
                    src={`/artisan-doughnut-variety-.jpg?height=120&width=120&query=artisan doughnut variety ${i + 1}`}
                    alt={`Doughnut ${i + 1}`}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-muted-foreground uppercase tracking-wider leading-relaxed">
              Butter & Salt • Old Fashion • Old Fashion • Strawberry Buttermilk • Cookies & Crème • Banana Bread Glazed
              • Saigon Cinnamon Crumb • Banana Bread Glazed • Huckleberry • Bourbon Pecan Pie • Vanilla Bean Glazed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
