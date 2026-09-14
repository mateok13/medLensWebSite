function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Políticas de Privacidad</h1>
      
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">1. Tratamiento de Datos</h2>
        <p className="text-gray-600">
          MedLens funciona de manera puramente local. No recolectamos, procesamos ni almacenamos datos personales ni información médica en servidores de terceros.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">2. Permisos del Dispositivo</h2>
        <p className="text-gray-600">
          La aplicación únicamente requiere permisos del sistema para programar alarmas y notificaciones locales.
        </p>
      </section>
    </div>
  );
}

export default Privacy;