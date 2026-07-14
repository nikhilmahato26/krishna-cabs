import { useState } from 'react'
import { MapPin, ChevronDown, Calendar, Clock } from 'lucide-react'
import Button from '../ui/Button'
import { CAR_OPTIONS, CONTACT } from '../../data/siteData'

/**
 * "Book Your Taxi" card shown on the right of the hero. Self-contained,
 * controlled form — wiring to a backend is a drop-in via the onSubmit handler.
 */
const Field = ({ label, children }) => (
  <div className="mb-3.5">
    <label className="mb-1.5 block text-xs font-medium text-slate-300">{label}</label>
    {children}
  </div>
)

const inputBase =
  'w-full rounded-md border border-white/15 bg-white/95 px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

const BookingForm = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    car: '',
    journey: 'oneway',
    pickupDate: '',
    pickupTime: '',
    dropDate: '',
    dropTime: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.from || !form.to || !form.pickupDate || !form.pickupTime) {
      alert('Please fill out all pickup details: location, date, and time.')
      return
    }

    if (form.journey === 'roundtrip' && (!form.dropDate || !form.dropTime)) {
      alert('Please fill out return details (date and time) for a Round Trip booking.')
      return
    }

    let message = `Hello Krishna Cabs, I would like to book a taxi.

*Booking Details:*
• *Pickup Location:* ${form.from}
• *Drop Location:* ${form.to}
• *Selected Car:* ${form.car || 'Any Available Car'}
• *Journey Type:* ${form.journey === 'oneway' ? 'One Way' : 'Round Trip'}
• *Pickup Date:* ${form.pickupDate}
• *Pickup Time:* ${form.pickupTime}`

    if (form.journey === 'roundtrip') {
      message += `
• *Drop Date:* ${form.dropDate}
• *Drop Time:* ${form.dropTime}`
    }

    const encodedText = encodeURIComponent(message)
    const whatsappUrl = `${CONTACT.whatsappHref}?text=${encodedText}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="w-full rounded-xl bg-navy/95 p-6 shadow-booking ring-1 ring-white/10 backdrop-blur-sm sm:p-7">
      <div className="mb-5 text-center">
        <h3 className="text-xl font-bold uppercase tracking-wide text-white">Book Your Taxi</h3>
        <span className="mx-auto mt-2 block h-[3px] w-12 rounded-full bg-gold" />
      </div>

      <form onSubmit={handleSubmit}>
        <Field label="From">
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
            <input
              type="text"
              required
              value={form.from}
              onChange={update('from')}
              placeholder="Enter pickup location"
              className={`${inputBase} pl-9`}
            />
          </div>
        </Field>

        <Field label="To">
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
            <input
              type="text"
              required
              value={form.to}
              onChange={update('to')}
              placeholder="Enter drop location"
              className={`${inputBase} pl-9`}
            />
          </div>
        </Field>

        <Field label="Select Car">
          <div className="relative">
            <select
              value={form.car}
              onChange={update('car')}
              className={`${inputBase} appearance-none pr-9 ${
                form.car ? 'text-slate-700' : 'text-slate-400'
              }`}
            >
              <option value="">Select Car</option>
              {CAR_OPTIONS.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>
        </Field>

        {/* Journey type */}
        <div className="mb-4">
          <label className="mb-2 block text-xs font-medium text-slate-300">Journey Type</label>
          <div className="flex items-center gap-8">
            {[
              { value: 'oneway', label: 'One Way' },
              { value: 'roundtrip', label: 'Round Trip' },
            ].map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 text-sm text-white"
              >
                <input
                  type="radio"
                  name="journey"
                  value={opt.value}
                  checked={form.journey === opt.value}
                  onChange={update('journey')}
                  className="h-4 w-4 accent-gold"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5 mb-3.5">
          <Field label="Pickup Date">
            <div className="relative">
              <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
              <input
                type="date"
                required
                value={form.pickupDate}
                onChange={update('pickupDate')}
                className={`${inputBase} pl-9 pr-2`}
              />
            </div>
          </Field>

          <Field label="Pickup Time">
            <div className="relative">
              <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
              <input
                type="time"
                required
                value={form.pickupTime}
                onChange={update('pickupTime')}
                className={`${inputBase} pl-9 pr-2`}
              />
            </div>
          </Field>
        </div>

        {form.journey === 'roundtrip' && (
          <div className="grid grid-cols-2 gap-3.5 mb-3.5">
            <Field label="Drop Date">
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                <input
                  type="date"
                  required
                  value={form.dropDate}
                  onChange={update('dropDate')}
                  className={`${inputBase} pl-9 pr-2`}
                />
              </div>
            </Field>

            <Field label="Drop Time">
              <div className="relative">
                <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold" />
                <input
                  type="time"
                  required
                  value={form.dropTime}
                  onChange={update('dropTime')}
                  className={`${inputBase} pl-9 pr-2`}
                />
              </div>
            </Field>
          </div>
        )}

        <Button type="submit" variant="gold" className="w-full mt-2 py-3 text-base">
          Book Now
        </Button>
      </form>
    </div>
  )
}

export default BookingForm
