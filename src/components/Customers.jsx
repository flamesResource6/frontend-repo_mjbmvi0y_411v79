import { motion } from 'framer-motion'

export default function Customers(){
  const data = Array.from({length:8}).map((_,i)=> ({name:`Player ${i+1}`, xp: (i+1)*120, spend: (i+2)*500, level: ['Bronze','Silver','Gold'][Math.min(2, Math.floor(i/3))]}))
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-100">Customers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
        {data.map((c,idx)=> (
          <motion.div key={c.name} initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{delay:idx*0.05}}
            className="rounded-2xl p-4 bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-100">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${c.level==='Gold'?'from-yellow-400/40 to-amber-400/20': c.level==='Silver'?'from-slate-200/40 to-slate-100/10':'from-orange-400/40 to-orange-400/10'} border border-white/20`}></div>
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-cyan-200/70">{c.level}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div initial={{width:0}} animate={{width:`${Math.min(100,c.xp/20)}%`}} className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00FFFF]"/>
              </div>
              <div className="flex justify-between text-xs text-cyan-200/70 mt-1">
                <span>XP: {c.xp}</span>
                <span>₹{c.spend}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
