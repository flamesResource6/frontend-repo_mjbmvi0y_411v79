import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(6px)',
    transition: { duration: 0.35, ease: 'easeInOut' }
  }
}

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  )
}
