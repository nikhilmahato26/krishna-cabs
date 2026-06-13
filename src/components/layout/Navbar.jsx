import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from '../ui/Logo'
import { NAV_LINKS, CONTACT } from '../../data/siteData'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isLinkActive = (to) => {
    if (to === '/') {
      return location.pathname === '/' && !location.hash
    }
    if (to.startsWith('/#')) {
      return location.pathname === '/' && location.hash === to.substring(1)
    }
    return location.pathname === to
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
      <nav className="container-site flex h-20 lg:h-24 items-center justify-between">
        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-navy lg:hidden order-3"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        <Logo className="lg:-ml-2 order-2 lg:order-1" />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 xl:gap-9 lg:flex lg:order-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`relative text-[13px] font-semibold tracking-wide transition-colors ${
                  isLinkActive(link.to) ? 'text-gold' : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
                {isLinkActive(link.to) && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-gold" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone CTA */}
        <a
          href={CONTACT.phoneHref}
          className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold-600 order-1 lg:order-3"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{CONTACT.phoneLabel}</span>
        </a>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-slate-50 last:border-b-0">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3.5 text-sm font-semibold tracking-wide ${
                    isLinkActive(link.to) ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
