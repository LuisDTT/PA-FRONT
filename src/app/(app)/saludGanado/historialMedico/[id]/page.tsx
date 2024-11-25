const HistorialMedico = () => {
  const datosAnimal = {
    codigo: "A123",
    nombre: "Bessie",
    especie: "Bovino",
    raza: "Holstein",
    fechaNacimiento: "2022-03-01",
    peso: "450 kg",
    estadoReproductivo: "Apto",
    sexo: "Hembra",
    estado: "Sano",
    estadoSalud: "Estable",
  };

  const historialConsultas = [
    {
      fechaConsulta: "2024-11-15",
      ultimaConsulta: true,
      motivo: "Chequeo general",
      diagnostico: "Buen estado general",
      medicamentos: ["Vitaminas A+D", "Antiparasitario"],
      tratamiento: "Revisión mensual",
    },
    {
      fechaConsulta: "2024-10-05",
      ultimaConsulta: false,
      motivo: "Tos persistente",
      diagnostico: "Infección respiratoria leve",
      medicamentos: ["Antibiótico XYZ"],
      tratamiento: "Antibiótico por 7 días",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Encabezado */}
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        Historial Médico del Animal
      </h1>

      {/* Datos generales del animal */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Datos del Animal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(datosAnimal).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-sm text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="text-gray-700 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Historial Médico */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Historial Médico
        </h2>
        {historialConsultas.map((consulta, index) => (
          <div
            key={index}
            className={`border-l-4 pl-4 mb-6 ${
              consulta.ultimaConsulta ? "border-green-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Consulta del {consulta.fechaConsulta}
              {consulta.ultimaConsulta && (
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Última Consulta
                </span>
              )}
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">Motivo: </span>
                {consulta.motivo}
              </p>
              <p>
                <span className="font-semibold">Diagnóstico: </span>
                {consulta.diagnostico}
              </p>
              <p>
                <span className="font-semibold">Medicamentos: </span>
                {consulta.medicamentos.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Tratamiento: </span>
                {consulta.tratamiento}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorialMedico;
