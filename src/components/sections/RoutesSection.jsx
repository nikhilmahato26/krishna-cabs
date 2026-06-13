import Reveal from '../ui/Reveal'

const POPULAR_ROUTES = [
  {
    title: 'Junagadh to Dwarka',
    img: 'https://www.indiantempletour.com/wp-content/uploads/2018/12/Dwarka-Tour-Package.webp',
  },
  {
    title: 'Junagadh to Somnath',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Somanath_Temple.jpg/500px-Somanath_Temple.jpg',
  },
  {
    title: 'Junagadh to Sasan (Gir)',
    img: 'https://www.girnationalpark.in/uploads/about-sasan-gir.jpg',
  },
  {
    title: 'Junagadh to Diu',
    img: 'https://media.istockphoto.com/id/1268472719/photo/india.jpg?s=612x612&w=0&k=20&c=DdP4gE2z7R8u1bjTarTnEeTEx4ulRCXTQQ-W-FLxrx8=',
  },
  {
    title: 'Junagadh to Ahmedabad',
    img: 'https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_1248%2Ff_auto%2Fv1560260650%2Fkiomoi%2FAhmedabad%2Fkankaria%20Lake%20%20(1).webp&w=3840&q=75',
  },
  {
    title: 'Junagadh to Rajkot',
    img: 'https://www.trawell.in/admin/images/upload/670516333Rajkot_Main.jpg',
  },
]

const RoutesSection = () => {
  return (
    <section id="routes" className="bg-white py-16 lg:py-20 scroll-mt-20 lg:scroll-mt-24">
      <div className="container-site text-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Intercity Travel</span>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
            Popular Routes
          </h2>
          <span className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Enjoy reliable and premium travel between Junagadh and these top cities across Gujarat.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card aspect-[4/3] sm:aspect-[16/10]">
                {/* Image background with zoom effect */}
                <img
                  src={route.img}
                  alt={route.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/45" />

                {/* Label centered at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                  <h3 className="text-lg font-bold tracking-wide text-white md:text-xl drop-shadow-md">
                    {route.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoutesSection
