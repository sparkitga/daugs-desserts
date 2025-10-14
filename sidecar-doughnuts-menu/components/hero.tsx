import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Doughnuts Filter */}
          <div className="flex items-center gap-3">
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Doughnuts</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-primary" aria-label="All doughnuts" />
              <button className="w-8 h-8 rounded-full bg-muted" aria-label="Filter option" />
            </div>
            <span className="text-sm uppercase tracking-wider text-muted-foreground">Browse</span>
          </div>

          {/* Center: Title */}
          <div className="text-center">
            <h2 className="text-sm uppercase tracking-widest text-primary mb-2">Box of the Best</h2>
          </div>

          {/* Right: Order Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider px-8">
            Start Online Order
          </Button>
        </div>
      </div>
    </section>
  )
}
