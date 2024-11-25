import NuevoAnimalForm from "@/components/NuevoAnimalForm";

const INITIAL_STATE = {
  codigo: "",
  nombre: "",
  especie: "",
  raza: "",
  fecha_nacimiento: "",
  peso: "",
  estado_reproductivo: "",
  sexo: "",
  estado: "",
};

export const page = () => {
  return (
    <>
      <NuevoAnimalForm initialState={INITIAL_STATE} />
    </>
  );
};

export default page;
