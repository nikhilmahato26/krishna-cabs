import { ShieldCheck } from 'lucide-react'

const FLEET_LINEUP =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=70'

/**
 * Dark "Your Safety, Our Priority" panel sitting beside the fare tables, with
 * a gold shield, supporting copy and a fleet line-up image at the base.
 */
const SafetyCard = () => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-navy text-white shadow-card">
      <div className="flex flex-1 flex-col items-center px-6 pt-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/60">
          <ShieldCheck className="h-8 w-8 text-gold" />
        </span>
        <h3 className="mt-6 text-xl font-bold">Your Safety, Our Priority</h3>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
          We follow strict safety standards and ensure a comfortable, hygienic &amp; secure journey
          for every customer.
        </p>
      </div>
      <img
        src={FLEET_LINEUP}
        alt="Krishna Cabs fleet line-up"
        loading="lazy"
        className="mt-6 h-28 w-full object-cover opacity-90"
      />
    </div>
  )
}

export default SafetyCard
