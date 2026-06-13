/**
 * A single row in the "Our Fleet & Per KM Rate" list: car thumbnail, name &
 * seat count on the left, navy per-km price badge on the right.
 */
const FleetItem = ({ name, seats, rate, img }) => {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 py-2.5 last:border-b-0">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="h-9 w-14 shrink-0 rounded object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-navy">{name}</p>
        <p className="text-xs text-slate-500">{seats}</p>
      </div>
      <div className="flex flex-col items-center rounded-md bg-navy px-3 py-1.5 text-center leading-tight text-white">
        <span className="text-sm font-bold text-gold">₹{rate}</span>
        <span className="text-[10px] font-medium text-slate-200">Per Km</span>
      </div>
    </div>
  )
}

export default FleetItem
