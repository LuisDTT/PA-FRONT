"use client";
import { navigate, revalidate } from "@/app/action";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { GrDocumentText } from "react-icons/gr";

const FormularioConsulta = () => {
  const searchParams = useSearchParams();

  const [tratamientos, setTratamientos] = useState<
    {
      nombre: string;
      descripcion: string;
      duracion: string;
    }[]
  >([]);
  const [medicamentos, setMedicamentos] = useState<
    {
      nombre: string;
      dosis: string;
      instrucciones: string;
    }[]
  >([]);

  const [datosVeterinario, setDatosVeterinario] = useState({
    nombre: "",
    especialidad: "",
    telefono: "",
  });

  const [datosConsulta, setDatosConsulta] = useState({
    idAnimal: searchParams.get("idAnimal"),
    motivoConsulta: "",
    diagnostico: "",
  });

  const [datosTratamiento, setDatosTratamiento] = useState({
    nombre: "",
    descripcion: "",
    duracion: "",
  });

  const [datosMedicamentos, setDatosMedicamentos] = useState({
    nombre: "",
    dosis: "",
    instrucciones: "",
  });

  const handleChangeVeterinario = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosVeterinario({ ...datosVeterinario, [name]: value });
  };

  const handleChangeConsulta = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatosConsulta({ ...datosConsulta, [name]: value });
  };

  const handleChangeTratamiento = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatosTratamiento({ ...datosTratamiento, [name]: value });
  };

  const handleChangeMedicamento = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDatosMedicamentos({ ...datosMedicamentos, [name]: value });
  };
  const agregarTratamiento = () => {
    setTratamientos([...tratamientos, datosTratamiento]);
    setDatosTratamiento({ descripcion: "", duracion: "", nombre: "" });
  };

  const agregarMedicamento = () => {
    setMedicamentos([...medicamentos, datosMedicamentos]);
    setDatosMedicamentos({ dosis: "", instrucciones: "", nombre: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = {
      datosVeterinario,
      datosConsulta,
      tratamientos,
      medicamentos,
    };
    await fetch("http://localhost:1234/ganado/registrarConsulta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    revalidate("/saludGanado");
    navigate("/saludGanado");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        Registrar Consulta - Codigo del animal: {searchParams.get("codigo")}
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Datos del Veterinario
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              required
              type="text"
              placeholder="Nombre"
              name="nombre"
              value={datosVeterinario.nombre}
              onChange={handleChangeVeterinario}
              className="border border-gray-300 rounded-lg p-3"
            />
            <input
              required
              name="especialidad"
              onChange={handleChangeVeterinario}
              value={datosVeterinario.especialidad}
              type="text"
              placeholder="Especialidad"
              className="border border-gray-300 rounded-lg p-3"
            />
            <input
              required
              name="telefono"
              value={datosVeterinario.telefono}
              onChange={handleChangeVeterinario}
              type="text"
              placeholder="Teléfono"
              className="border border-gray-300 rounded-lg p-3"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Datos de la Consulta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea
              name="motivoConsulta"
              value={datosConsulta.motivoConsulta}
              onChange={handleChangeConsulta}
              placeholder="Motivo de la consulta"
              className="border border-gray-300 rounded-lg p-3 h-24 resize-none"
            ></textarea>
            <textarea
              name="diagnostico"
              value={datosConsulta.diagnostico}
              onChange={handleChangeConsulta}
              placeholder="Diagnóstico"
              className="border border-gray-300 rounded-lg p-3 h-24 resize-none"
            ></textarea>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Tratamiento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <input
              name="nombre"
              value={datosTratamiento.nombre}
              onChange={handleChangeTratamiento}
              type="text"
              placeholder="Nombre del Tratamiento"
              className="border border-gray-300 rounded-lg p-3"
            />
            <textarea
              name="descripcion"
              value={datosTratamiento.descripcion}
              onChange={handleChangeTratamiento}
              placeholder="Descripción"
              className="border border-gray-300 rounded-lg p-3 resize-none"
            ></textarea>
            <input
              name="duracion"
              value={datosTratamiento.duracion}
              onChange={handleChangeTratamiento}
              type="text"
              placeholder="Duración (días)"
              className="border border-gray-300 rounded-lg p-3"
            />
          </div>
          <button
            type="button"
            onClick={agregarTratamiento}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Agregar Tratamiento
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Detalles de Medicamentos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <input
              name="nombre"
              value={datosMedicamentos.nombre}
              onChange={handleChangeMedicamento}
              type="text"
              placeholder="Nombre del Medicamento"
              className="border border-gray-300 rounded-lg p-3"
            />
            <input
              name="dosis"
              value={datosMedicamentos.dosis}
              onChange={handleChangeMedicamento}
              type="text"
              placeholder="Dosis"
              className="border border-gray-300 rounded-lg p-3"
            />
            <textarea
              name="instrucciones"
              value={datosMedicamentos.instrucciones}
              onChange={handleChangeMedicamento}
              placeholder="Instrucciones"
              className="border border-gray-300 rounded-lg p-3 resize-none"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={agregarMedicamento}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
          >
            Agregar Medicamento
          </button>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Resumen</h2>
          <div>
            <h3 className="font-semibold text-gray-600">Tratamientos:</h3>
            <ul className="list-disc pl-5">
              {tratamientos.map((tratamiento, index) => (
                <li key={index}>
                  {tratamiento.nombre} - {tratamiento.descripcion} (
                  {tratamiento.duracion} días)
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-600">Medicamentos:</h3>
            <ul className="list-disc pl-5">
              {medicamentos.map((medicamento, index) => (
                <li key={index}>
                  {medicamento.nombre} - {medicamento.dosis} (
                  {medicamento.instrucciones})
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="submit"
          className={`mt-3 mx-auto flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-green-600 hover:bg-green-700
          transition-all duration-300 ease-in-out transform hover:scale-105`}
          disabled={false}
        >
          Registrar Consulta
          <GrDocumentText />
        </button>
      </form>
    </div>
  );
};

export default FormularioConsulta;
