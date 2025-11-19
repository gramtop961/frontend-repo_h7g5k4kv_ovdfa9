import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/90 to-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,.6)] flex items-center justify-center">
              <span className="text-slate-900 font-black text-lg tracking-tight">∆</span>
            </div>
            <span className="text-white/90 font-semibold tracking-tight text-lg">Aural</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#design" className="hover:text-white transition-colors">Design</a>
            <a href="#sound" className="hover:text-white transition-colors">Sound</a>
            <a href="#buy" className="hover:text-white transition-colors">Buy</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 backdrop-blur hover:bg-white/10 transition-colors">
              <Search size={18} className="text-white/70 group-hover:text-white" />
              <span className="text-sm">Search</span>
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur hover:bg-white/10 transition-colors">
              <ShoppingCart size={18} />
            </button>
          </div>

          <button className="md:hidden rounded-full border border-white/10 bg-white/5 p-2 text-white/80 backdrop-blur">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
