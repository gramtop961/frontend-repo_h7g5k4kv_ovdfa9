import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-24 md:pb-40">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Immerse in Pure Sound
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/70 max-w-xl"
            >
              A next‑gen listening experience that blends precision engineering with iconic design. Tap, drag, and explore the product in real‑time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium shadow/50 shadow-black/20 hover:shadow-black/30 hover:-translate-y-0.5 transition-all">
                Buy now
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 font-medium backdrop-blur hover:bg-white/10 transition-all">
                Learn more
              </a>
            </motion.div>
          </div>

          <div className="relative h-[420px] md:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl" />
            <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
