import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import FareTable from '../ui/FareTable'
import FleetItem from '../ui/FleetItem'
import Reveal from '../ui/Reveal'
import SafetyCard from './SafetyCard'
import { ONE_WAY_FARES, ROUND_TRIP_FARES, FARE_NOTES, FLEET } from '../../data/siteData'

const Panel = ({ children, className = '', ...props }) => (
  <div className={`rounded-xl bg-white p-5 shadow-soft ${className}`} {...props}>
    {children}
  </div>
)

const FaresSection = () => {
  return (
    <section id="tariff" className="py-14 lg:py-16 scroll-mt-[72px]">
      <div className="container-site grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {/* One Way Fares */}
        <Reveal>
          <Panel className="h-full">
            <SectionHeading className="mb-5">One Way Fares</SectionHeading>
            <FareTable rows={ONE_WAY_FARES} />
          </Panel>
        </Reveal>

        {/* Round Trip Fares + Note */}
        <Reveal delay={0.05}>
          <Panel className="h-full">
            <SectionHeading className="mb-5">Round Trip Fares</SectionHeading>
            <FareTable rows={ROUND_TRIP_FARES} />

            <div className="mt-5 rounded-lg bg-cream p-4">
              <p className="mb-3 text-sm font-bold text-navy">Note:</p>
              <ul className="space-y-2.5">
                {FARE_NOTES.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </Reveal>

        {/* Our Fleet & Per KM Rate */}
        <Reveal delay={0.1}>
          <Panel id="fleet" className="h-full scroll-mt-[90px]">
            <SectionHeading className="mb-4">Our Fleet &amp; Per KM Rate</SectionHeading>
            <div>
              {FLEET.map((car) => (
                <FleetItem key={car.name} {...car} />
              ))}
            </div>
          </Panel>
        </Reveal>

        {/* Safety card */}
        <Reveal delay={0.15}>
          <div className="h-full">
            <SafetyCard />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FaresSection
