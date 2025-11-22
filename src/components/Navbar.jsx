import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Mundialito Logo" className="h-9 w-9" />
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white">MUNDIALITO</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <a href="#que-es" className="hover:text-emerald-600">¿Qué es?</a>
          <a href="#como-funciona" className="hover:text-emerald-600">Cómo funciona</a>
          <a href="#beneficios" className="hover:text-emerald-600">Beneficios</a>
          <a href="#fases" className="hover:text-emerald-600">Etapas</a>
          <a href="#premios" className="hover:text-emerald-600">Premios</a>
          <a href="#faq" className="hover:text-emerald-600">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="/registro" className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-700 transition">Registra a tu equipo</a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/5 dark:bg-white/10" aria-label="Abrir menú">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
