/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand gold / amber used for CTAs, accents and price badges
        gold: {
          DEFAULT: '#F5A623',
          50: '#FEF6E7',
          100: '#FCE9C2',
          400: '#F8B83A',
          500: '#F5A623',
          600: '#E0940F',
        },
        // Deep navy used for the booking card, footer and dark panels
        navy: {
          DEFAULT: '#0E2747',
          800: '#102A4C',
          900: '#0B1E38',
          950: '#081730',
        },
        cream: '#FBF4E6',
        ink: '#1F2937',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(16, 42, 76, 0.18)',
        soft: '0 6px 24px -8px rgba(16, 42, 76, 0.12)',
        booking: '0 24px 60px -20px rgba(0, 0, 0, 0.55)',
      },
      maxWidth: {
        site: '1440px',
      },
    },
  },
  plugins: [],
}
