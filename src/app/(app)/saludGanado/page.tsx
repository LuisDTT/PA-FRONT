import SaludGanado from "@/components/SaludGanado";
import { Animales, getAnimales } from "../ganado/page";

export const page = async () => {
  const animales = (await getAnimales()) as Animales[];

  console.log(animales);
  return (
    <>
      <SaludGanado animales={animales} />
    </>
  );
};

export default page;
