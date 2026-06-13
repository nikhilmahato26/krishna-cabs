import { Clock, ShieldCheck, UserRound, Car, Timer, BadgePercent } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { FEATURES } from '../../data/siteData'

// Map data keys to lucide icons so the data file stays serialisable.
const ICONS = {
  clock24: Clock,
  shield: ShieldCheck,
  driver: UserRound,
  car: Car,
  timer: Timer,
  tag: BadgePercent,
}

const FeatureItem = ({ icon, title, subtitle }) => {
  const Icon = ICONS[icon]
  return (
    <div className="flex flex-col items-center text-center gap-1.5 px-0.5 sm:flex-row sm:text-left sm:gap-3 sm:px-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-navy sm:h-12 sm:w-12">
        <Icon className="h-4 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
      </span>
      <div className="leading-tight">
        <p className="text-[10px] font-bold text-navy sm:text-sm">{title}</p>
        <p className="whitespace-pre-line text-[9px] text-slate-500 sm:text-xs">{subtitle}</p>
      </div>
    </div>
  )
}

const FeaturesBar = () => {
  return (
    <section className="relative z-10 -mt-8">
      <div className="container-site">
        <Reveal>
          <div className="grid grid-cols-3 gap-x-1 gap-y-5 rounded-xl bg-white px-3 py-4 shadow-card sm:grid-cols-3 sm:px-6 sm:py-6 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 xl:grid-cols-6 xl:divide-x xl:divide-slate-200">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="xl:px-2 xl:first:pl-0 xl:last:pr-0">
                <FeatureItem {...feature} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FeaturesBar
