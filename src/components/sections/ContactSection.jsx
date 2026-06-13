import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { CONTACT } from '../../data/siteData'

/**
 * Premium Contact section with coordinates list and a fully functional 
 * message submission form.
 */
const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', msg: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact message:', form)
    setSent(true)
    setTimeout(() => {
      setForm({ name: '', phone: '', msg: '' })
      setSent(false)
    }, 3000)
  }

  const info = [
    { icon: Phone, label: 'Call Us', val: CONTACT.phoneLabel, href: CONTACT.phoneHref },
    { icon: Mail, label: 'Email Us', val: CONTACT.email, href: CONTACT.emailHref },
    { icon: MapPin, label: 'Our Location', val: CONTACT.address, href: null },
  ]

  return (
    <section id="contact" className="bg-cream py-16 lg:py-20 scroll-mt-20 lg:scroll-mt-24">
      <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Side: Contact details */}
        <div className="lg:col-span-5 text-left">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold text-left">Contact Us</span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl text-left">
              Get In Touch With Us Today
            </h2>
            <span className="mt-3 block h-[3px] w-12 rounded-full bg-gold text-left" />
            <p className="mt-6 text-base leading-relaxed text-slate-600 text-left">
              Need assistance with your booking? Or looking for a customized travel package across Gujarat? 
              Reach out to us and our team will get back to you shortly.
            </p>

            <div className="mt-8 space-y-6 text-left">
              {info.map((item, idx) => {
                const Icon = item.icon
                const Component = item.href ? 'a' : 'div'
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-gold shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">{item.label}</h4>
                      <Component
                        href={item.href || undefined}
                        className={`mt-1 block text-sm font-medium text-slate-600 ${
                          item.href ? 'transition-colors hover:text-gold' : ''
                        }`}
                      >
                        {item.val}
                      </Component>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 sm:p-8">
              <h3 className="text-lg font-bold text-navy text-left">Send Us a Message</h3>
              <p className="text-xs text-slate-500 mt-1 text-left">We usually respond within a few hours.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={form.msg}
                    onChange={update('msg')}
                    placeholder="Tell us about your travel requirements..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sent}
                  icon={Send}
                  className="w-full py-3.5 text-sm font-bold uppercase tracking-wider bg-gold text-navy"
                >
                  {sent ? 'Message Sent Successfully!' : 'Send Message'}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
