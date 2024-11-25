"use client";

import { navigate, revalidate } from "@/app/action";
import { Animales, getAnimales } from "@/app/(app)/ganado/page";
import { useState } from "react";

interface FormularioAnimalProps {
  initialState: Animales;
  update?: boolean;
}

const FormularioAnimal = ({ initialState, update }: FormularioAnimalProps) => {
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState<{ codigo: string | null }>({
    codigo: null,
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "codigo") {
      const animales = (await getAnimales()) as Animales[];

      const mismoAnimal = animales.find(
        (animal) => animal.codigo === value && animal.id !== formData.id
      );
      if (mismoAnimal) {
        setErrors({ codigo: "Ya existe un animal con este codigo" });
      } else {
        setErrors({ codigo: null });
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.codigo === null) {
      const dataToSend = { ...formData, peso: parseFloat(formData.peso) };

      try {
        if (!update) {
          await fetch("http://localhost:1234/ganado/newAnimal", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          });
        } else {
          await fetch(`http://localhost:1234/ganado/${formData.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSend),
          });
        }
      } catch (error) {
        console.log(error);
      }
      revalidate("/ganado");
      navigate("/ganado");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-full">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        Registrar Animal
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            {errors.codigo && (
              <div className="absolute -top-6 left-0 text-red-600 text-sm">
                {errors.codigo}
              </div>
            )}
            <input
              type="text"
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
              placeholder="Código"
              className="border border-gray-300 rounded-lg p-3 w-full"
              required
            />
          </div>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Especie y Raza */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="especie"
            value={formData.especie}
            onChange={handleChange}
            placeholder="Especie"
            className="border border-gray-300 rounded-lg p-3"
            required
          />
          <input
            type="text"
            name="raza"
            value={formData.raza}
            onChange={handleChange}
            placeholder="Raza"
            className="border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Fecha de Nacimiento y Peso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="date"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento.toString()}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3"
            required
          />
          <input
            type="number"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            placeholder="Peso (kg)"
            className="border border-gray-300 rounded-lg p-3"
            required
          />
        </div>

        {/* Estado Reproductivo y Sexo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            name="estado_reproductivo"
            value={formData.estado_reproductivo}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3"
            required
          >
            <option value="">Estado Reproductivo</option>
            <option value="Apto">Apto</option>
            <option value="No Apto">No Apto</option>
            <option value="Gestando">Gestando</option>
            <option value="Parido">Parido</option>
            <option value="Castrado">Castrado</option>
          </select>
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3"
            required
          >
            <option value="">Sexo</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </div>

        {/* Estado */}
        <div className="grid grid-cols-1">
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-3"
            required
          >
            <option value="">Estado</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Vendido">Vendido</option>
            <option value="Fallecido">Fallecido</option>
          </select>
        </div>

        {/* Botón de Enviar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700"
          >
            {update ? "Guardar" : "Registrar Animal"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAnimal;
