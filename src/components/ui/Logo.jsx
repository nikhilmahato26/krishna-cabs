import { Link } from 'react-router-dom'

/**
 * Krishna Cabs Logo Component.
 * Displays the custom logo image. On dark backgrounds (like the footer),
 * it renders inside a clean, rounded white badge to ensure contrast and premium aesthetics.
 */
const Logo = ({ variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark' // dark text on light background

  return (
    <Link
      to="/"
      aria-label="Krishna Cabs home"
      className={`inline-flex select-none items-center ${className}`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden rounded-lg transition-transform hover:scale-[1.02] ${
          isDark 
            ? 'h-[68px] lg:h-[84px] py-0.5' 
            : 'bg-white px-4 py-2 h-20 shadow-soft'
        }`}
      >
        <img
          src="/logo.png"
          alt="Krishna Cabs Logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  )
}

export default Logo
