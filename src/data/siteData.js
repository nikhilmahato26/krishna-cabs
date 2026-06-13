// ---------------------------------------------------------------------------
// Single source of truth for all static content rendered across the site.
// Keeping copy/data here keeps the section components presentational & reusable.
// ---------------------------------------------------------------------------

export const CONTACT = {
  phoneLabel: '9090 10 9292',
  phoneHref: 'tel:+919090109292',
  whatsappHref: 'https://wa.me/919090109292',
  email: 'Krishnacabsofficial@gmail.com',
  emailHref: 'mailto:Krishnacabsofficial@gmail.com',
  address: 'Junagadh, Gujarat, India',
}

export const NAV_LINKS = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT US', to: '/#about' },
  { label: 'OUR FLEET', to: '/#fleet' },
  { label: 'TARIFF', to: '/#tariff' },
  { label: 'SERVICES', to: '/#services' },
  { label: 'CONTACT US', to: '/#contact' },
]

// Trust badges shown in the white bar overlapping the hero
export const FEATURES = [
  { icon: 'clock24', title: '24x7 Service', subtitle: 'Always Available' },
  { icon: 'shield', title: 'Safe & Secure', subtitle: 'Your Safety is\nOur Priority' },
  { icon: 'driver', title: 'Verified Drivers', subtitle: 'Experienced &\nCourteous' },
  { icon: 'car', title: 'Clean Cars', subtitle: 'Well Maintained\nVehicles' },
  { icon: 'timer', title: 'On Time', subtitle: 'Pickup & Drop' },
  { icon: 'tag', title: 'No Hidden Charges', subtitle: '100% Transparent\nBilling' },
]

export const ONE_WAY_FARES = [
  { route: 'Junagadh to Rajkot', dzire: 2000, ertiga: 2500 },
  { route: 'Junagadh to Ahmedabad', dzire: 4500, ertiga: 5500 },
  { route: 'Junagadh to Baroda', dzire: 5000, ertiga: 6000 },
  { route: 'Junagadh to Surat', dzire: 6500, ertiga: 7500 },
  { route: 'Junagadh to Porbandar', dzire: 2500, ertiga: 3000 },
  { route: 'Junagadh to Diu', dzire: 3000, ertiga: 4000 },
  { route: 'Junagadh to Sasan', dzire: 2000, ertiga: 2500 },
  { route: 'Junagadh to Hirasar', dzire: 2500, ertiga: 3000 },
  { route: 'Junagadh to Jamnagar', dzire: 3000, ertiga: 3500 },
]

export const ROUND_TRIP_FARES = [
  { route: 'Junagadh to Dwarka', dzire: 7000, ertiga: 8000 },
  { route: 'Junagadh to Somnath', dzire: 4000, ertiga: 4500 },
  { route: 'Junagadh to Rajkot', dzire: 3500, ertiga: 4000 },
]

export const FARE_NOTES = [
  'Toll, Parking & State Permit Charges Extra As Actual.',
  'Minimum 300 KM Applicable For Outstation Trips.',
  'Route Fare May Vary During Peak Season & Festivals.',
  'Booking Confirmation Subject To Vehicle Availability.',
]

// Image thumbnails use lightweight remote car photos as placeholders.
export const FLEET = [
  { name: 'Dzire', seats: '4 Seater', rate: 12, img: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=200&q=70' },
  { name: 'Aura', seats: '4 Seater', rate: 12, img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=200&q=70' },
  { name: 'Ertiga (SUV)', seats: '6 Seater', rate: 14, img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=200&q=70' },
  { name: 'Innova / Carens', seats: '6 Seater', rate: 17, img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=70' },
  { name: 'Innova Crysta', seats: '6 Seater', rate: 20, img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=200&q=70' },
  { name: 'Tempo Traveller', seats: '12 Seater', rate: 30, img: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=200&q=70' },
  { name: 'Urbania', seats: '17 Seater', rate: 40, img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=200&q=70' },
]

// Car options for the booking form's "Select Car" dropdown
export const CAR_OPTIONS = FLEET.map((f) => f.name)

export const FOOTER_LINKS = {
  quickLinks: {
    title: 'QUICK LINKS',
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Fleet', to: '/fleet' },
      { label: 'Tariff', to: '/tariff' },
      { label: 'Routes', to: '/routes' },
      { label: 'Services', to: '/services' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  services: {
    title: 'OUR SERVICES',
    items: [
      'One Way Taxi',
      'Round Trip Taxi',
      'Outstation Taxi',
      'Airport Transfer',
      'Corporate Travel',
    ],
  },
  whyChooseUs: {
    title: 'WHY CHOOSE US',
    items: [
      '24x7 Customer Support',
      'Well Maintained Cars',
      'GPS Enabled Vehicles',
      'Affordable Rates',
      'Professional Drivers',
    ],
  },
}
