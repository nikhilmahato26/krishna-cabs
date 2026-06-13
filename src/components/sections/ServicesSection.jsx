import { MapPin, RotateCcw, Compass, Plane } from 'lucide-react'
import Reveal from '../ui/Reveal'

/**
 * Clean grid displaying the core transit services offered by Krishna Cabs.
 */
const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: 'One-Way Outstation',
      desc: 'Book intercity cabs across Gujarat and pay only for the distance traveled. Ideal for hassle-free one-way travel.',
    },
    {
      icon: RotateCcw,
      title: 'Round Trip Cabs',
      desc: 'Planning a weekend getaway or a pilgrimage? Get affordable round-trip rates with flexible itineraries.',
    },
    {
      icon: Compass,
      title: 'Local Sightseeing',
      desc: 'Explore historical sites in Junagadh, scale the Girnar hills, visit Somnath temple, or ride through Sasan Gir.',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      desc: 'Punctual pickup and drop-off services connecting Junagadh with Rajkot, Hirasar, and Ahmedabad airports.',
    },
  ]

  return (
    <section id="services" className="bg-white py-16 lg:py-20 scroll-mt-[72px]">
      <div className="container-site text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our Services</span>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Reliable Cab Services Tailored For You
          </h2>
          <span className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            From quick business commutes to long pilgrimage tours, we ensure your journey is safe, timely, 
            and perfectly comfortable.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((srv, i) => {
            const Icon = srv.icon
            return (
              <Reveal key={srv.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{srv.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{srv.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
