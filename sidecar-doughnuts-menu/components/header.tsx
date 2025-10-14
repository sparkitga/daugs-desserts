import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left: Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop Navigation - Left */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/locations" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/menu" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Menu
            </Link>
          </nav>

          {/* Center: Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="text-center">
              <h1 className="font-serif text-3xl tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
                Sidecar
              </h1>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Doughnuts & Coffee</p>
            </div>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/rewards" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Rewards
            </Link>
            <Link href="/catering" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Catering
            </Link>
            <Link href="/gift-cards" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Gift Cards
            </Link>
            <Link href="/merch" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
              Merch
            </Link>
          </nav>

          {/* Right: Cart */}
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
