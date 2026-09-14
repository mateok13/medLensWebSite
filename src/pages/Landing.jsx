import appIcon from '../assets/app_icon.png';
import heroPhone from '../assets/hero_phone.png';

const APK_URL = "https://github.com/mateok13/medLensWebSite/releases/download/v1.0.0/MedLens-v1.0.0.apk";

function Landing() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 text-white flex items-center py-12 ">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <img src={appIcon} alt="MedLens Logo" className="w-20 h-20 object-contain rounded-2xl shadow-md" />
              <span className="font-bold text-5xl sm:text-6xl tracking-tight">
                <span className="text-white">Med</span>
                <span className="text-blue-400">Lens</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Tu salud, mejor<br className="hidden sm:inline" /> <span className="text-blue-400">organizada.</span>
            </h1>

            <p className="text-lg sm:text-2xl text-slate-300 max-w-xl">
              Escanea tus recetas, organiza tus medicamentos y recibe recordatorios. Todo en una sola app.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-sm text-slate-200 w-full sm:w-auto">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h7v8l10-12h-7V2z" />
                  </svg>
                </div>
                <span className="font-medium">Rápido y fácil de usar</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium">Seguro y privado</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5512 0 .9997.4483.9997.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.551.4482-.9993.9993-.9993.5512 0 .9997.4483.9997.9997m11.4045-6.02l1.9973-3.4592c.1264-.219.051-.5004-.168-.6268-.219-.1263-.5004-.051-.6268.168l-2.027 3.5108C15.4674 8.3582 13.7915 8 12 8c-1.7915 0-3.4674.3582-5.057 .9141L4.916 5.4033c-.1264-.219-.4078-.2943-.6268-.168-.219.1264-.2944.4078-.168.6268l1.9973 3.4592C2.6886 11.1852.3438 14.5824.0326 18.5H23.9674c-.3112-3.9176-2.656-7.3148-6.0859-9.1786" />
                  </svg>
                </div>
                <span className="font-medium">Disponible en Android</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <img
              src={heroPhone}
              alt="MedLens App Screen"
              className="w-full max-w-[260px] sm:max-w-sm object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>

      <section id="caracteristicas" className="bg-white py-14 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-lg sm:text-xl block">
              Características principales
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950">
              Todo lo que necesitas para <span className="text-blue-500">tu tratamiento</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-lg">
              MedLens combina la potencia de la inteligencia artificial con una interfaz simple y segura, para que nunca olvides tus medicamentos y tengas el control de tu salud.
            </p>

            <div className="pt-2">
              <a
                href={APK_URL}
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Descargar ahora
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="p-6 bg-blue-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Escanea tus recetas</h3>
              <p className="text-sm text-slate-600">Extrae información automáticamente de tus fórmulas médicas.</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Recordatorios inteligentes</h3>
              <p className="text-sm text-slate-600">Alertas personalizadas para no perder ninguna toma de medicamento.</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Datos en tu dispositivo</h3>
              <p className="text-sm text-slate-600">Tu información médica almacenada de manera totalmente local y segura.</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Interfaz simple y moderna</h3>
              <p className="text-sm text-slate-600">Diseño intuitivo pensado para una experiencia de usuario fluida.</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default Landing;