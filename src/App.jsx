import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from './components/PageWrapper'
import NeonNavbar from './components/NeonNavbar'
import HeroLogin from './components/HeroLogin'
import POSDashboard from './components/POSDashboard'
import KDS from './components/KDS'
import Payments from './components/Payments'
import Customers from './components/Customers'
import Admin from './components/Admin'

function Layout({ children }){
  return (
    <div className="min-h-screen bg-[#0b0f1a] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(108,99,255,0.15),transparent),radial-gradient(60%_60%_at_80%_30%,rgba(0,212,255,0.12),transparent),radial-gradient(70%_70%_at_50%_90%,rgba(255,0,230,0.08),transparent)]"/>
      <NeonNavbar />
      <div className="relative z-10 lg:ml-28">
        {children}
      </div>
    </div>
  )
}

export default function App(){
  const location = useLocation()
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HeroLogin/></PageWrapper>} />
          <Route path="/pos" element={<PageWrapper><POSDashboard/></PageWrapper>} />
          <Route path="/booking" element={<PageWrapper><POSDashboard/></PageWrapper>} />
          <Route path="/kds" element={<PageWrapper><KDS/></PageWrapper>} />
          <Route path="/payments" element={<PageWrapper><Payments/></PageWrapper>} />
          <Route path="/customers" element={<PageWrapper><Customers/></PageWrapper>} />
          <Route path="/admin" element={<PageWrapper><Admin/></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
