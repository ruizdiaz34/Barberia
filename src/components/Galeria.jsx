import GaleriaCard from "../ui/GaleriaCard";
import { galeria } from "../data/galeria";

export default function Galeria() {
    return (
       <>
        <section>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 p-9">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-9">
                {galeria.map((item) => (
                    <GaleriaCard
                        key={item.id}
                        titulo={item.titulo}
                        imagen={item.imagen}
                    />
                ))}
            </div>
        </section>
       </>
    );
}