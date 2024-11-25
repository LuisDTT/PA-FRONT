"use client";

import { navigate, revalidate } from "@/app/action";
import { MdDelete } from "react-icons/md";

export const Eliminar = ({ id }: { id: string | null | number }) => {
  const handleDelete = async () => {
    if (id) {
      await fetch(`http://localhost:1234/ganado/${id}`, { method: "DELETE" })
        .then((res) => res)
        .then((res) => res.json());
      revalidate("/ganado");
      navigate("/ganado");
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="w-20 flex items-center justify-center gap-1 py-3 bg-red-600 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none transition duration-200"
    >
      <MdDelete />
      Eliminar
    </button>
  );
};
