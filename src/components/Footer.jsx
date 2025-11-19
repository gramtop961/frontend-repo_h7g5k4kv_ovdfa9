export default function Footer(){
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <p className="text-sm">© {new Date().getFullYear()} Aural. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  )
}
