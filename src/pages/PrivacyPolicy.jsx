import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Shield, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../data/siteData'

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-50 text-slate-700 font-sans"
    >
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-white md:py-24">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Ambient glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-navy/40 blur-3xl" />

        <div className="container-site relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Privacy Disclosures
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-2 text-lg text-slate-300 font-medium">
              Privacy Policy – Krishna Cabs
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <Calendar className="h-4 w-4 text-gold" />
              <span>Last Updated: June 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-site py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Policy Content Card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-10 md:p-12"
            >
              <div className="prose prose-slate max-w-none">
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  At Krishna Cabs, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
                </p>

                <hr className="my-8 border-slate-100" />

                <div className="space-y-10">
                  
                  {/* Section 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-navy">Information We Collect</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We may collect the following information to facilitate taxi services and support bookings:
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        'Full Name',
                        'Mobile Number',
                        'Email Address (if provided)',
                        'Pickup and Drop Locations',
                        'Travel and Booking Details',
                        'Any information voluntarily shared by you',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 rounded-xl border border-slate-50 bg-slate-50/50 p-3 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-navy">How We Use Your Information</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We utilize your personal information exclusively for the operational needs of our ride services:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {[
                        'Process and confirm bookings instantly',
                        'Provide customer support and dispatch updates',
                        'Communicate service updates and direct taxi routes',
                        'Improve our services, website user experience, and fares transparency',
                        'Comply with local transportation rules and legal obligations',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h3 className="text-xl font-bold text-navy">Data Protection</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We take reasonable measures and adopt secure data practices to protect your personal information from unauthorized access, disclosure, or misuse. Access to booking details is strictly limited to authorized coordinators and your designated driver during the trip.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h3 className="text-xl font-bold text-navy">Third-Party Services</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Our website may use third-party services such as Google Maps (to fetch pickup/drop directions and distance checks), WhatsApp (to share confirmation links and contact drivers), and website analytics. These services have their own privacy policies governing their interactions.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h3 className="text-xl font-bold text-navy">Your Choices &amp; Rights</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      You are always in control of your data. You may contact us at any time to request updates to your booking records, request a full copy of the travel details stored, or ask for deletion of your logs from our customer relationship databases.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Quick Contact Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 text-navy">
                <Shield className="h-5 w-5 text-gold" />
                <h4 className="font-bold uppercase tracking-wider">Privacy Contact</h4>
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                If you have queries about how we process your personal data, call or message our compliance support team:
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5 transition-all hover:border-gold hover:bg-gold/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Compliance Phone</span>
                    <span className="text-sm font-bold text-navy">{CONTACT.phoneLabel}</span>
                  </div>
                </a>

                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5 transition-all hover:border-emerald-500 hover:bg-emerald-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <FaWhatsapp className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp compliance</span>
                    <span className="text-sm font-bold text-emerald-600">Chat Instantly</span>
                  </div>
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-3.5 transition-all hover:border-gold hover:bg-gold/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Compliance Email</span>
                    <span className="block truncate text-sm font-bold text-navy">{CONTACT.email}</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* General Help Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-6 text-white shadow-soft"
            >
              <h4 className="font-bold text-white text-lg">Your Privacy is Protected</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Krishna Cabs guarantees that we do not rent, sell, or trade booking coordinates or customer directories to advertising networks or third-party telemarketers.
              </p>
              <Link
                to="/"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-gold py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-600"
              >
                Book Your Ride Safely
              </Link>
            </motion.div>
          </div>
          
        </div>
      </section>
    </motion.div>
  )
}

export default PrivacyPolicy
