import { motion } from 'framer-motion'

export default function Payments(){
  const tx = Array.from({length:6}).map((_,i)=> ({ id: `TX-${1000+i}`, amount: (5+i)*10, method: ['UPI','Cash','Razorpay'][i%3]}))
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-100">Payments</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {tx.map((t,idx)=> (
          <motion.div key={t.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:idx*0.05}}
            className="rounded-2xl p-4 bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-100">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{t.id}</div>
              <div className="text-cyan-200/70">₹{t.amount}</div>
            </div>
            <div className="mt-4 flex gap-2">
              {['Razorpay','UPI','Cash'].map((m)=> (
                <button key={m} className={`px-3 py-1.5 text-xs rounded-lg border ${m===t.method? 'bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] text-[#0b0f1a] border-transparent':'bg-white/5 border-white/10 text-cyan-100'}`}>{m}</button>
              ))}
            </div>
            <motion.button whileHover={{scale:1.02, boxShadow:'0 0 24px rgba(108,99,255,0.5)'}} className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#8A2BE2] via-[#6C63FF] to-[#00FFFF] text-[#0b0f1a] py-2 font-semibold">Pay</motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
