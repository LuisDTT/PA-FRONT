"use client";
import { navigate } from "@/app/action";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const FormularioVacuna = () => {
  const params = useSearchParams();
  const idAnimal = params.get("id");
  const codigoAnimal = params.get("codigo");
  const [formData, setFormData] = useState({
    idAnimal,
    nombre: "",
    fecha: "",
    dosis: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:1234/ganado/registrarVacuna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/saludGanado");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-full flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Aplicar Vacuna
          <br /> Codigo animal: {codigoAnimal}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre de la vacuna */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="nombre"
            >
              Nombre de la Vacuna
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. Fiebre Aftosa"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:border-green-500"
              required
            />
          </div>

          {/* Fecha de aplicación */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="fecha"
            >
              Fecha de Aplicación
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:border-green-500"
              required
            />
          </div>

          {/* Dosis */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="dosis"
            >
              Dosis
            </label>
            <input
              type="text"
              id="dosis"
              name="dosis"
              value={formData.dosis}
              onChange={handleChange}
              placeholder="Ej. 10 ml"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-green-300 focus:border-green-500"
              required
            />
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300"
          >
            Registrar Vacuna
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioVacuna;
