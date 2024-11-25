import NuevoAnimalForm from "@/components/NuevoAnimalForm";

export const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const data = await fetch(`http://localhost:1234/ganado/${id}`)
    .then((res) => res)
    .then((data) => data.json());

  return (
    <>
      <NuevoAnimalForm
        initialState={{
          ...data,
          fecha_nacimiento: new Date(data.fecha_nacimiento)
            .toISOString()
            .split("T")[0],
        }}
        update
      />
    </>
  );
};

export default page;
