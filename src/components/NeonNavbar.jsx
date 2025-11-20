import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, LayoutDashboard, MonitorPlay, Clock3, Receipt, Users, Settings } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const items = [
  { to: '/', icon: Home, label: 'Login' },
  { to: '/pos', icon: LayoutDashboard, label: 'POS' },
  { to: '/booking', icon: MonitorPlay, label: 'Booking' },
  { to: '/kds', icon: Clock3, label: 'KDS' },
  { to: '/payments', icon: Receipt, label: 'Payments' },
  { to: '/customers', icon: Users, label: 'Customers' },
  { to: '/admin', icon: Settings, label: 'Admin' },
]

export default function NeonNavbar() {
  const [open, setOpen] = useState(true)
  const location = useLocation()

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_40px_rgba(0,212,255,0.25)]"
        animate={{ width: open ? 220 : 64 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-4 w-6 h-6 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(0,212,255,0.8)]"
        />
        <ul className="py-4">
          {items.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to
            return (
              <li key={to}>
                <Link to={to} className="group flex items-center gap-3 px-3 py-2.5 text-cyan-100">
                  <div className={`grid place-items-center w-9 h-9 rounded-xl border ${active ? 'border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_18px_rgba(0,212,255,0.6)]' : 'border-white/10 bg-white/5'} transition-colors`}>
                    <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : 'text-cyan-200/80'} drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]`} />
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.2 }}
                        className={`text-sm font-medium ${active ? 'text-cyan-300' : 'text-cyan-100/80'}`}
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            )
          })}
        </ul>
      </motion.div>
    </div>
  )
}
