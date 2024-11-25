import { Eliminar } from "@/components/Eliminar";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdEdit } from "react-icons/md";

export interface Animales {
  id?: number;
  codigo: string;
  nombre: string;
  especie: string;
  raza: string;
  fecha_nacimiento: Date | string;
  peso: string;
  estado_reproductivo: string;
  sexo: string;
  estado: string;
  estado_salud: string;
  ultima_consulta: Date | string;
  proxima_consulta: Date | string;
}

export const getAnimales = async () => {
  const response = await fetch("http://localhost:1234/ganado")
    .then((res) => res)
    .then((data) => data.json())
    .catch((err) => err);
  return response;
};

export const page = async () => {
  const data = (await getAnimales()) as Animales[];
  return (
    <div className="p-6 ">
      <div className="flex justify-between m-2">
        <div className="relative flex items-center ">
          <label
            htmlFor="clasificar"
            className="block text-xl font-medium text-gray-700 mr-4"
          >
            Mostrar:
          </label>
          <select
            id="clasificar"
            className="block w-full pr-7 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="todos">Todos los animales</option>
            <option value="terneros">Terneros</option>
            <option value="toros">Toros</option>
            <option value="vacas">Vacas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <MdOutlineArrowDropDown />
          </div>
        </div>

        <Link
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none transition duration-200"
          href={"/ganado/form"}
        >
          <MdAdd />
          Registrar Animal
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left font-medium">Código</th>
              <th className="py-3 px-4 text-left font-medium">Nombre</th>
              <th className="py-3 px-4 text-left font-medium">Especie</th>
              <th className="py-3 px-4 text-left font-medium">Raza</th>
              <th className="py-3 px-4 text-left font-medium">
                Fecha de Nacimiento
              </th>
              <th className="py-3 px-4 text-left font-medium">Peso (Kg)</th>
              <th className="py-3 px-4 text-left font-medium">
                Estado Reproductivo
              </th>
              <th className="py-3 px-4 text-left font-medium">Sexo</th>
              <th className="py-3 px-4 text-left font-medium">Estado</th>
              <th className="py-3 px-4 text-left font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((animal, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-3 px-4">{animal.codigo}</td>
                <td className="py-3 px-4">{animal.nombre}</td>
                <td className="py-3 px-4">{animal.especie}</td>
                <td className="py-3 px-4">{animal.raza}</td>
                <td className="py-3 px-4">
                  {new Date(animal.fecha_nacimiento).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">{animal.peso}</td>
                <td className="py-3 px-4">{animal.estado_reproductivo}</td>
                <td className="py-3 px-4">{animal.sexo}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      animal.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {animal.estado}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-3">
                  <Link
                    href={`/ganado/form/${animal.id}`}
                    className="w-20 flex items-center justify-center gap-1 py-3 bg-green-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 focus:outline-none transition duration-200"
                  >
                    <MdEdit />
                    Editar
                  </Link>
                  <Eliminar id={animal.id || null} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
