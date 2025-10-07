export function PackSelector() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative mb-12">
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <div className="bg-black text-white px-8 py-4 relative z-10">
                <div className="text-2xl font-bold tracking-wide mb-1">MAKE YOUR OWN PERFECT PACK</div>
                <div className="text-sm tracking-wider">6 PACK $29 / 12 PACK $56</div>
              </div>
              <div className="absolute -left-12 -right-12 top-1/2 h-1 bg-black -z-0"></div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-4">
              <div className="text-4xl font-serif italic text-[#a89968] mb-2">Sidecar</div>
              <div className="text-xs tracking-[0.3em] text-[#a89968]">DOUGHNUTS & COFFEE</div>
            </div>
          </div>
        </div>

        {/* Pack Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 6 Pack */}
          <div className="border-2 border-[#d4c5a0] p-6 bg-white">
            <h3 className="text-2xl font-serif italic text-[#a89968] mb-6 text-center">6 Pack</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-[#f5f3ed] rounded-full"></div>
              ))}
            </div>
            <div className="text-xs text-center text-[#a89968] leading-relaxed">
              BUTTER & SALT • OLD FASHION • VANILLA BEAN GLAZED • HUCKLEBERRY • BOURBON PECAN PIE • MAPLE CHOCOLATE
            </div>
          </div>

          {/* 12 Pack */}
          <div className="border-2 border-[#d4c5a0] p-6 bg-white">
            <h3 className="text-2xl font-serif italic text-[#a89968] mb-6 text-center">12 Pack</h3>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="aspect-square bg-[#f5f3ed] rounded-full"></div>
              ))}
            </div>
            <div className="text-xs text-center text-[#a89968] leading-relaxed">
              BUTTER & SALT • HUCKLEBERRY • OLD FASHION • STRAWBERRY BUTTERMILK • COOKIES & CRÈME • VANILLA BEAN GLAZED
              • MAPLE BACON • BOURBON PECAN PIE • CINNAMON ROLL • PUMPKIN CHEESECAKE • SAIGON CINNAMON • TWISTS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
