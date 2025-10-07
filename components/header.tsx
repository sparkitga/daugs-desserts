import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#f5f3ed] border-b border-[#d4c5a0]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Online Order button */}
          <div className="flex-1">
            <button className="bg-[#a89968] text-white px-6 py-2 text-sm font-medium tracking-wider hover:bg-[#968a5e] transition-colors">
              ONLINE ORDER
            </button>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex flex-col items-center">
              <div className="text-4xl font-serif italic text-[#a89968] mb-1">Sidecar</div>
              <div className="text-xs tracking-[0.3em] text-[#a89968]">DOUGHNUTS & COFFEE</div>
            </Link>
          </div>

          {/* Right side - Navigation */}
          <nav className="flex-1 flex justify-end gap-6">
            <Link href="#" className="text-xs tracking-wider text-[#a89968] hover:text-[#968a5e] transition-colors">
              LOCATIONS
            </Link>
            <Link href="#" className="text-xs tracking-wider text-[#a89968] hover:text-[#968a5e] transition-colors">
              ABOUT
            </Link>
            <Link href="#" className="text-xs tracking-wider text-[#a89968] hover:text-[#968a5e] transition-colors">
              MENU
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
