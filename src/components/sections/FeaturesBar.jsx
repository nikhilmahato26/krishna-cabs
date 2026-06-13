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
    <div className="flex items-center gap-3 px-2">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-navy">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold text-navy">{title}</p>
        <p className="whitespace-pre-line text-xs text-slate-500">{subtitle}</p>
      </div>
    </div>
  )
}

const FeaturesBar = () => {
  return (
    <section className="relative z-10 -mt-8">
      <div className="container-site">
        <Reveal>
          <div className="grid grid-cols-1 gap-y-6 rounded-xl bg-white px-6 py-6 shadow-card sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:divide-x xl:divide-slate-200">
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
