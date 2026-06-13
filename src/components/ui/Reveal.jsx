import { motion } from 'framer-motion'

/**
 * Subtle scroll-reveal wrapper. Fades + lifts its children into view once,
 * keeping animations restrained so they enhance rather than alter the design.
 */
const Reveal = ({ children, delay = 0, y = 24, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
