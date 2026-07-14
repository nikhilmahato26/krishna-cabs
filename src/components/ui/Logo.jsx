import { Link } from 'react-router-dom'

/**
 * Krishna Cabs Logo Component.
 * Displays the custom logo image. On dark backgrounds (like the footer),
 * it renders inside a clean, rounded white badge to ensure contrast and premium aesthetics.
 */
const Logo = ({ variant = 'dark', className = '', height = '' }) => {
  const isDark = variant === 'dark' // dark text on light background

  return (
    <Link
      to="/"
      aria-label="Krishna Cabs home"
      className={`inline-flex select-none items-center ${className}`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden transition-transform hover:scale-[1.02] ${
          height || (isDark ? 'h-[120px] lg:h-[150px] py-0.5' : 'h-[90px] lg:h-[110px]')
        }`}
      >
        <img
          src="/logo.png"
          alt="Krishna Cabs Logo"
          className={`h-full w-auto object-contain ${!isDark ? 'brightness-0 invert' : ''}`}
        />
      </div>
    </Link>
  )
}

export default Logo
