/**
 * Centered section heading with the recurring short gold underline.
 * `align` allows left-aligned use (e.g. footer columns).
 */
const SectionHeading = ({ children, align = 'center', className = '' }) => {
  const isCenter = align === 'center'
  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-lg font-bold uppercase tracking-wide text-navy">{children}</h2>
      <span
        className={`mt-2 block h-[3px] w-12 rounded-full bg-gold ${isCenter ? 'mx-auto' : ''}`}
      />
    </div>
  )
}

export default SectionHeading
