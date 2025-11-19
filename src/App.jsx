import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-white/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />

        <section id="buy" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 md:p-12 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Make it yours today</h3>
                <p className="mt-3 text-white/70">Choose a finish and get fast, free delivery. 14‑day returns.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:-translate-y-0.5 transition-transform">Buy now</button>
                <button className="rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 font-medium hover:bg-white/10 transition-colors">Compare</button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default App
