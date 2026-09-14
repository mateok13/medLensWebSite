import { useState } from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

const APK_URL = "https://github.com/mateok13/medLensWebSite/releases/download/v1.0.0/MedLens-v1.0.0.apk";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 text-white sticky top-0 z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
          <img src={appIcon} alt="MedLens Logo" className="w-9 h-9 object-contain rounded-lg" />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-white">Med</span>
            <span className="text-blue-400">Lens</span>
          </span>
        </Link>

        {/* Navegación para pantallas medianas y grandes */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-white hover:text-blue-400 transition">
            Inicio
          </Link>

          <a href="/#caracteristicas" className="text-slate-300 hover:text-blue-400 transition">
            Características
          </a>
          
          <a
            href={APK_URL}
            download
            className="border-2 border-blue-400 hover:border-blue-300 hover:bg-blue-400/10 text-white hover:text-blue-400 px-5 py-2 rounded-full transition backdrop-blur-sm"
          >
            Descargar
          </a>
        </nav>

        {/* Botón Menú Hamburguesa para Móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-slate-200 hover:text-blue-400 py-2 text-base font-medium"
          >
            Inicio
          </Link>
          <a
            href="/#caracteristicas"
            onClick={() => setIsOpen(false)}
            className="block text-slate-300 hover:text-blue-400 py-2 text-base font-medium"
          >
            Características
          </a>
          <a
            href={APK_URL}
            download
            onClick={() => setIsOpen(false)}
            className="block text-center border-2 border-blue-400 hover:bg-blue-400/10 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            Descargar
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;