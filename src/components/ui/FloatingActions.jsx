import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../../data/siteData'

/**
 * Premium floating WhatsApp action pinned to the bottom right corner.
 * Features subtle entry animations, hover effects, and pulsing ring indicators.
 */
const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* WhatsApp Button */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/20 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/30 opacity-75 group-hover:hidden" style={{ animationDuration: '2s' }} />
        <FaWhatsapp className="h-7 w-7 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  )
}

export default FloatingActions
