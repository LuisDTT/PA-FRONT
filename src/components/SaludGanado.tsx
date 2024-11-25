import { TbMoodSick } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import Link from "next/link";
import { Animales } from "@/app/(app)/ganado/page";

export const SaludGanado = ({ animales }: { animales: Animales[] }) => {
  return (
    <div className="p-6">
      <>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Salud del Ganado</h1>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-500 rounded-full">
              <TbMoodSick />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Animales Enfermos</p>
              <p className="text-xl font-bold text-gray-700">12</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-500 rounded-full">
              <MdHealthAndSafety />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Animales Sanos</p>
              <p className="text-xl font-bold text-gray-700">85</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-500 rounded-full">
              <MdOutlinePendingActions />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Tratamientos Pendientes</p>
              <p className="text-xl font-bold text-gray-700">7</p>
            </div>
          </div>
        </div>
      </>

      {/* Tabla de Salud */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b py-3 text-left text-gray-600">Código</th>
              <th className="border-b py-3 text-left text-gray-600">Nombre</th>
              <th className="border-b py-3 text-left text-gray-600">
                Estado de Salud
              </th>
              <th className="border-b py-3 text-left text-gray-600">
                Última Consulta
              </th>
              <th className="border-b py-3 text-left text-gray-600">
                Próximo consulta
              </th>
              <th className="border-b py-3 text-left text-gray-600">
                Historial Medico
              </th>
              <th className="border-b py-3 text-left text-gray-600">
                Vacunacion
              </th>
              <th className="border-b py-3 text-left text-gray-600">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {animales.map((animal) => {
              return (
                <tr key={animal.id}>
                  <td className="py-4 border-b text-gray-700">
                    {animal.codigo}
                  </td>
                  <td className="py-4 border-b text-gray-700">
                    {animal.nombre}
                  </td>
                  <td
                    className={`py-4 border-b ${animal.estado_salud === "Sano" ? "text-green-500" : "text-red-500"} font-semibold`}
                  >
                    {animal.estado_salud}
                  </td>
                  <td className="py-4 border-b text-gray-600">
                    {animal.ultima_consulta
                      ? new Date(animal.ultima_consulta).toLocaleDateString()
                      : "Sin informacion"}
                  </td>
                  <td className="py-4 border-b text-gray-600">
                    {animal.proxima_consulta
                      ? new Date(animal.proxima_consulta).toLocaleDateString()
                      : "Sin informacion"}
                  </td>
                  <td className="py-4 border-b">
                    <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                      Ver Detalles
                    </button>
                  </td>
                  <td className="py-4 border-b">
                    <Link
                      href={`/saludGanado/vacunacion?id=${animal.id}&codigo=${animal.codigo}`}
                      className="block px-4 py-2 w-min text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <TbVaccine />
                    </Link>
                  </td>
                  <td className="py-4 border-b">
                    <button className="mb-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700">
                      <Link
                        href={`saludGanado/registroConsulta?idAnimal=${animal.id}&codigo=${animal.codigo}`}
                      >
                        Registrar consulta
                      </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SaludGanado;
