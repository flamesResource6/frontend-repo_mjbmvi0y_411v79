import { motion } from 'framer-motion'

export default function Admin(){
  return (
    <div className="px-6 py-10">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl p-6 bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-100">
          <h3 className="font-semibold">Revenue</h3>
          <div className="mt-6 h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#6C63FF]/10 to-[#00FFFF]/5 rounded-xl" />
            <motion.div initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:2, ease:'easeInOut'}}>
              <svg viewBox="0 0 400 160" className="w-full h-full">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6C63FF"/>
                    <stop offset="100%" stopColor="#00FFFF"/>
                  </linearGradient>
                </defs>
                <path d="M0,120 C60,80 100,140 160,90 C220,40 260,120 320,70 C360,40 400,80 400,80" stroke="url(#grad)" strokeWidth="4" fill="none" />
              </svg>
            </motion.div>
          </div>
          <div className="mt-4 text-4xl font-extrabold bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]">₹ 1,24,500</div>
          <div className="text-cyan-200/70 text-sm">Revenue pulse updates live</div>
        </div>
        <div className="rounded-2xl p-6 bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-100">
          <h3 className="font-semibold">Stats</h3>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {['Sessions','Orders','Active PCs','New Users'].map((s,i)=> (
              <div key={s} className="rounded-xl p-4 bg-white/5 border border-white/10">
                <div className="text-xs text-cyan-200/70">{s}</div>
                <div className="text-2xl font-bold">{[52, 134, 18, 23][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
