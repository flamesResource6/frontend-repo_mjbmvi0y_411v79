import { motion, AnimatePresence } from 'framer-motion'

const sample = [
  { id: 'A12', status: 'new', items: ['Latte', 'Fries'] },
  { id: 'B04', status: 'progress', items: ['Burger', 'Cola'] },
  { id: 'C19', status: 'ready', items: ['Nachos'] },
]

export default function KDS(){
  const sections = [
    { key: 'new', title: 'New Orders', glow: 'from-rose-400/40 to-rose-500/20 border-rose-400/40' },
    { key: 'progress', title: 'In Progress', glow: 'from-amber-400/40 to-amber-500/20 border-amber-400/40' },
    { key: 'ready', title: 'Ready', glow: 'from-emerald-400/40 to-emerald-500/20 border-emerald-400/40' },
  ]

  return (
    <div className="px-6 py-10 grid md:grid-cols-3 gap-6">
      {sections.map((sec) => (
        <div key={sec.key} className={`rounded-2xl p-4 bg-gradient-to-br ${sec.glow} backdrop-blur-xl border`}>
          <h3 className="text-cyan-100 font-semibold mb-3">{sec.title}</h3>
          <div className="space-y-3">
            <AnimatePresence>
              {sample.filter(o=>o.status===sec.key).map((o, idx)=> (
                <motion.div key={o.id}
                  initial={{ opacity: 0, y: 16, filter:'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter:'blur(0px)' }}
                  transition={{ delay: idx*0.05 }}
                  className="rounded-xl p-3 bg-white/10 border border-white/10 text-cyan-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Order {o.id}</div>
                    <div className="text-xs text-cyan-200/70">02:35</div>
                  </div>
                  <p className="text-sm text-cyan-200/80 mt-1">{o.items.join(', ')}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  )
}
