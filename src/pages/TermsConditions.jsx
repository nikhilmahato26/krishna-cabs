import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, FileText, Phone, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../data/siteData'

const TermsConditions = () => {
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
              Legal Document
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-lg text-slate-300 font-medium">
              Terms &amp; Conditions – Krishna Cabs
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
          
          {/* Terms Content Card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-10 md:p-12"
            >
              <div className="prose prose-slate max-w-none">
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  By using the services of Krishna Cabs, you agree to the following Terms &amp; Conditions:
                </p>

                <div className="mt-10 space-y-10">
                  
                  {/* Item 1 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Booking Confirmation</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        All bookings are subject to vehicle availability and confirmation by Krishna Cabs.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Fares and Charges</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Fare estimates may vary based on distance, route, tolls, parking charges, waiting time, and other applicable charges.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Cancellation Policy</h3>
                      <div className="mt-2 text-slate-600 leading-relaxed">
                        <ul className="list-none space-y-2.5 pl-0">
                          <li className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            <span>Cancellation charges may apply depending on the timing of cancellation.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            <span>Refunds, if applicable, will be processed according to company policy.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Passenger Responsibilities</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Passengers must provide accurate information and use the service lawfully and responsibly.
                      </p>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Vehicle and Driver Availability</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Krishna Cabs reserves the right to change the assigned vehicle or driver due to operational requirements or unforeseen circumstances.
                      </p>
                    </div>
                  </div>

                  {/* Item 6 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      6
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Delays and Service Interruptions</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Krishna Cabs shall not be held responsible for delays caused by traffic, weather conditions, road closures, mechanical issues, or other circumstances beyond our control.
                      </p>
                    </div>
                  </div>

                  {/* Item 7 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      7
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Liability Limitation</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Krishna Cabs is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                      </p>
                    </div>
                  </div>

                  {/* Item 8 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      8
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Lost and Found</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Passengers are responsible for their personal belongings. Krishna Cabs is not responsible for lost items left in vehicles.
                      </p>
                    </div>
                  </div>

                  {/* Item 9 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      9
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Modifications</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        Krishna Cabs reserves the right to modify these Terms &amp; Conditions at any time. Continued use of our services indicates acceptance of the updated terms.
                      </p>
                    </div>
                  </div>

                  {/* Item 10 */}
                  <div className="group flex gap-4 sm:gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold font-bold text-lg transition-colors group-hover:bg-gold group-hover:text-navy">
                      10
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy sm:text-xl">Governing Law</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Junagadh, Gujarat.
                      </p>
                    </div>
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
                <FileText className="h-5 w-5 text-gold" />
                <h4 className="font-bold uppercase tracking-wider">Contact Info</h4>
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                For any questions regarding our terms, cancellation charges, or refunds, please reach out directly:
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
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Call Support</span>
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
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">WhatsApp Us</span>
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
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">Send Email</span>
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
              <h4 className="font-bold text-white text-lg">Looking to book a cab?</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Book safe, comfortable, and affordable rides anywhere in Junagadh and Gujarat. Confirm your ride online or get a custom tariff estimate.
              </p>
              <Link
                to="/"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-gold py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-600"
              >
                Go to Booking Form
              </Link>
            </motion.div>
          </div>
          
        </div>
      </section>
    </motion.div>
  )
}

export default TermsConditions
