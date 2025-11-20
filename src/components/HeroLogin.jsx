import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function HeroLogin() {
  return (
    <div className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-[#0b0f1a]/50 to-[#0b0f1a]/90" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl bg-white/6 backdrop-blur-2xl border border-cyan-200/20 p-8 shadow-[0_0_80px_rgba(108,99,255,0.25)]">
          <motion.h1
            className="text-center text-4xl font-extrabold tracking-wide bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF00E6] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(108,99,255,0.35)]"
            initial={{ letterSpacing: '0.6em', opacity: 0 }}
            animate={{ letterSpacing: '0.05em', opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Gamifisys
          </motion.h1>
          <p className="text-center text-cyan-100/80 mt-2">Powering the Future of Gaming Cafés.</p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-cyan-100/80 text-sm mb-2">Email</label>
              <input className="w-full bg-[#0f1524]/80 border border-cyan-300/10 rounded-xl px-4 py-3 text-cyan-100 placeholder:text-cyan-200/40 outline-none focus:border-cyan-400/60 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition" placeholder="you@cafe.com" />
            </div>
            <div>
              <label className="block text-cyan-100/80 text-sm mb-2">Password</label>
              <input type="password" className="w-full bg-[#0f1524]/80 border border-cyan-300/10 rounded-xl px-4 py-3 text-cyan-100 placeholder:text-cyan-200/40 outline-none focus:border-cyan-400/60 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition" placeholder="••••••••" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.45)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-[#8A2BE2] via-[#6C63FF] to-[#00FFFF] px-4 py-3 font-semibold text-[#0b0f1a]"
            >
              <span className="relative z-10">Enter the System</span>
              <span className="absolute inset-0 bg-white/0 hover:bg-white/10 transition" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
