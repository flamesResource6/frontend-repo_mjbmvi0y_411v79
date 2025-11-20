import { motion } from 'framer-motion'
import { Plus, Search } from 'lucide-react'

const seats = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  status: i % 3 === 0 ? 'available' : i % 3 === 1 ? 'in-use' : 'ending'
}))

export default function POSDashboard(){
  return (
    <div className="px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-100">POS Dashboard</h2>
          <p className="text-cyan-200/60">Live view of all PCs and activity</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input placeholder="Search PCs" className="pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-100 placeholder:text-cyan-200/40 focus:border-cyan-400/60 outline-none" />
            <Search className="w-4 h-4 text-cyan-200/60 absolute left-3 top-3" />
          </div>
          <button className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] text-[#0b0f1a] shadow-[0_0_30px_rgba(0,212,255,0.35)]">
            <Plus />
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
        {seats.map((s, idx) => {
          const color = s.status === 'available' ? 'from-green-400/30 to-green-500/10 border-green-400/30' : s.status === 'in-use' ? 'from-rose-400/30 to-rose-500/10 border-rose-400/30' : 'from-amber-400/30 to-amber-500/10 border-amber-400/30'
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className={`relative rounded-2xl p-4 bg-gradient-to-br ${color} border backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between">
                <div className="text-cyan-100 font-semibold">PC #{s.id}</div>
                <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-100/80">{s.status}</div>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 mt-4 overflow-hidden">
                <motion.div initial={{ width: '10%' }} animate={{ width: s.status==='in-use' ? '70%' : s.status==='ending' ? '90%' : '0%' }} className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00FFFF]" />
              </div>
              <div className="mt-4 flex gap-2">
                {['Start Session','Add Time','Pause','End'].map((b,i)=> (
                  <button key={i} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-cyan-100 hover:bg-gradient-to-r hover:from-[#8A2BE2]/30 hover:to-[#00D4FF]/30 transition" >{b}</button>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
