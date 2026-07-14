import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Check } from 'lucide-react'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import Logo from '../ui/Logo'
import { CONTACT, FOOTER_LINKS } from '../../data/siteData'

const ColumnHeading = ({ children }) => (
  <div className="mb-5">
    <h3 className="text-[15px] font-bold uppercase tracking-wide text-navy">{children}</h3>
    <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
  </div>
)

const Footer = () => {
  const { quickLinks, services, whyChooseUs } = FOOTER_LINKS

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200">
      <div className="container-site grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo variant="dark" height="h-20 lg:h-24" className="items-start" />
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
            Krishna Cabs is a trusted taxi service in Junagadh providing One Way Taxi, Round Trip Taxi, Airport Transfer and Outstation Cab Service across Gujarat.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: FaWhatsapp, href: CONTACT.whatsappHref, label: 'WhatsApp' },
              { Icon: FaFacebookF, href: CONTACT.facebookHref, label: 'Facebook' },
              { Icon: FaInstagram, href: CONTACT.instagramHref, label: 'Instagram' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-gold hover:bg-gold hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <ColumnHeading>{quickLinks.title}</ColumnHeading>
          <ul className="space-y-3 text-sm">
            {quickLinks.items.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-slate-600 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <ColumnHeading>{services.title}</ColumnHeading>
          <ul className="space-y-3 text-sm">
            {services.items.map((item) => (
              <li key={item} className="text-slate-600 transition-colors hover:text-gold">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <ColumnHeading>{whyChooseUs.title}</ColumnHeading>
          <ul className="space-y-3 text-sm">
            {whyChooseUs.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-600">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <ColumnHeading>CONTACT US</ColumnHeading>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href={CONTACT.phoneHref} className="text-slate-600 hover:text-gold font-medium">
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href={CONTACT.emailHref} className="break-all text-slate-600 hover:text-gold font-medium">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span className="text-slate-600">{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="container-site flex flex-col items-center justify-center gap-3 py-5 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>© 2025 Krishna Cabs. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
