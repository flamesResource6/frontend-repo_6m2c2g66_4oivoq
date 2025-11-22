export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-700 via-emerald-900 to-black text-white">
      {/* Maya-inspired soft pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" aria-hidden>
        <div className="absolute -top-40 -left-40 h-[60rem] w-[60rem] rounded-full bg-gradient-to-tr from-red-500/20 via-emerald-300/10 to-yellow-300/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[60rem] w-[60rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-emerald-200/10 to-red-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <img src="/flame-icon.svg" alt="Mundialito" className="h-16 w-16 opacity-90" />
          <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight">
            MUNDIALITO — La fiesta del balón para la niñez de México
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100/90 max-w-xl">
            Un torneo formativo donde el juego continúa y los sueños comienzan.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="/registro" className="inline-flex items-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 transition">
              Registra a tu equipo
            </a>
            <a href="#como-funciona" className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20 transition">
              Conoce cómo funciona
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl bg-white/5 backdrop-blur border border-white/10 overflow-hidden">
            <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-1 p-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-400/20 to-black/40 rounded-xl" />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <div className="px-4 py-2 rounded-full bg-emerald-600 text-white shadow">
              Sistema de visorías profesionales
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
