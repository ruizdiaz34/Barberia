import ServiceCard from "../ui/ServiceCard";
import { servicios } from "../data/servicios";
import { cormorant,cinzel } from "../data/foont";

export default function Servicios() {
  return (
    <>
    <h2 className={cormorant.className + " text-2xl md:text-5xl font-bold text-center mb-6 p-9"}>Nuestros Servicios</h2>  
    <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-9">
      {servicios.map((servicio) => (
        <ServiceCard
          key={servicio.id}
          titulo={servicio.titulo}
          precio={servicio.precio}
          imagen={servicio.imagen}
        />
      ))}
    </section>
    </>
  );
}