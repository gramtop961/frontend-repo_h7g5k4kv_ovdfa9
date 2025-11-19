import { Battery, Bluetooth, Waves, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Battery,
    title: '40‑hour battery',
    desc: 'Adaptive power management keeps you listening longer with fast USB‑C charging.'
  },
  {
    icon: Bluetooth,
    title: 'Seamless pairing',
    desc: 'Instantly connects across your devices with ultra‑low latency and lossless quality.'
  },
  {
    icon: Waves,
    title: 'Spatial audio',
    desc: 'Head‑tracking 3D sound places you inside the music for total immersion.'
  },
  {
    icon: ShieldCheck,
    title: 'Active noise canceling',
    desc: 'Block out the world with precision ANC and transparency modes.'
  }
]

export default function Features(){
  return (
    <section id="features" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight text-center"
        >
          Designed to disappear. Built to thrill.
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({icon:Icon,title,desc},i)=> (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i*0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl hover:bg-white/[0.06] transition-colors"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-medium text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
