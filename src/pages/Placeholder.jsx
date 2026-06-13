import { Link } from 'react-router-dom'

/**
 * Lightweight placeholder for routes whose full page hasn't been designed yet,
 * so every nav link resolves to a clean, on-brand screen.
 */
const Placeholder = ({ title }) => {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Krishna Cabs</p>
      <h1 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-slate-500">
        This page is on its way. In the meantime, head back home to book your taxi across Junagadh
        &amp; all Gujarat.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-800"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default Placeholder
