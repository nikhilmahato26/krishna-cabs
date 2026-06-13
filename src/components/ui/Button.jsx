import { motion } from 'framer-motion'

/**
 * Reusable pill button. Renders as <a> when `href` is given, otherwise <button>.
 * Variants mirror the gold / whatsapp-green / outline styles in the design.
 */
const VARIANTS = {
  gold: 'bg-gold text-navy hover:bg-gold-600',
  whatsapp: 'bg-[#1FA855] text-white hover:bg-[#188647]',
  navy: 'bg-navy text-white hover:bg-navy-800',
  outline: 'border border-white/70 text-white hover:bg-white/10',
}

const Button = ({
  children,
  variant = 'gold',
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-sm font-bold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60'
  const classes = `${base} ${VARIANTS[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
      {children}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...rest}>
      {content}
    </motion.button>
  )
}

export default Button
