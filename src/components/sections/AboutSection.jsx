import { Check } from 'lucide-react'
import Reveal from '../ui/Reveal'

/**
 * Premium "About Us" section detailing Krishna Cabs' values,
 * commitments, and a styled callout.
 */
const AboutSection = () => {
  const points = [
    'Experienced, polite, and verified drivers who know Gujarat routes thoroughly.',
    'Clean, sanitized, and well-maintained fleet ranging from Sedan to SUVs.',
    '24/7 client support and on-time pickup and drop guarantees.',
    '100% transparent pricing with no hidden fees or charges.',
  ]

  return (
    <section id="about" className="bg-cream py-16 lg:py-20 scroll-mt-[72px]">
      <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left: Text Content */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold text-left">Who We Are</span>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl text-left">
                Your Trusted Travel Partner in Junagadh &amp; Gujarat
              </h2>
              <span className="mt-3 block h-[3px] w-12 rounded-full bg-gold text-left" />
            </div>
            
            <p className="mt-6 text-base leading-relaxed text-slate-600 text-left">
              Krishna Cabs is Junagadh's leading taxi service, dedicated to providing safe, comfortable, 
              and highly reliable travel experiences. Whether you need a quick one-way drop to Rajkot or 
              Ahmedabad, a round-trip pilgrimage to Somnath and Dwarka, or local sightseeing around the 
              historic Girnar hills, we have the perfect ride for you.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 text-left">
              We focus on passenger convenience, delivering premium fleet vehicles driven by courteous professionals 
              committed to transparent billing and prompt service.
            </p>

            <ul className="mt-8 space-y-3.5 text-left">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-navy">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: Graphic / Image */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80"
                alt="Comfortable travel with Krishna Cabs"
                className="h-[350px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-2xl font-black tracking-wide text-gold">9090 10 9292</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-200 mt-1">
                  Call us anytime for booking confirmation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
