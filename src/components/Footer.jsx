import { Link } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2">
            <img src={appIcon} alt="MedLens Logo" className="w-6 h-6 object-contain rounded-md" />
            <span className="font-bold text-lg tracking-tight">
              <span className="text-white">Med</span>
              <span className="text-teal-400">Lens</span>
            </span>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} MedLens. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-15 text-sm font-medium">
          <Link to="/politicas-de-privacidad" className="hover:text-teal-400 transition">
            Política de Privacidad
          </Link>
          <Link to="/terminos-y-condiciones" className="hover:text-teal-400 transition">
            Términos y Condiciones
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start text-xs">
          <span className="text-gray-400">Desarrollado por</span>
          <span className="text-white font-semibold text-sm">Pwala Tech</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;