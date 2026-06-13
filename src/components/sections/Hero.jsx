import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Button from '../ui/Button'
import BookingForm from './BookingForm'
import { CONTACT } from '../../data/siteData'

// Scenic sunset highway backdrop (placeholder for the supplied hero artwork)
const HERO_BG =
  'https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Dwarka_tv_destination_img_1_l_766_1147.jpg'
const CAR_IMG =
  'https://acko-cms.ackoassets.com/1_10650055cf.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      {/* Background image + dark gradient overlay */}
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-navy-950/60" />
      </div>

      <div className="container-site relative grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
        {/* Left: headline + CTAs */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            JUNAGADH &amp;
            <br />
            ALL GUJARAT
            <br />
            <span className="text-gold">TAXI SERVICE</span>
          </h1>

          <p className="mt-5 max-w-md text-lg font-medium text-slate-200">
            Safe, Comfortable &amp; Reliable Journey Anywhere in Gujarat
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={CONTACT.phoneHref} variant="gold" icon={Phone} className="px-7 py-3.5">
              {CONTACT.phoneLabel}
            </Button>
            <Button
              href={CONTACT.whatsappHref}
              variant="whatsapp"
              icon={FaWhatsapp}
              className="px-7 py-3.5"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Car image, anchored bottom-right of the headline block on large screens */}
          {/* <motion.img
            src={CAR_IMG}
            alt="Krishna Cabs white sedan"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="pointer-events-none mt-10 w-full max-w-xl rounded-lg object-contain drop-shadow-2xl lg:absolute lg:bottom-6 lg:right-[-4rem] lg:mt-0 lg:max-w-2xl"
          /> */}
        </motion.div>

        {/* Right: booking form */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
