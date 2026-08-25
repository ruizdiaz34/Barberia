import Image from "next/image";
import { cormorant,cinzel } from "../data/foont";

export default function Testimonials() {
    return (
        <>
        <h2 className={cormorant.className + " text-3xl md:text-5xl font-bold mb-4 text-center p-9"}>Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
            <div className="p-4 bg-black text-white flex flex-col items-center justify-center">
                <Image src="/testi-1.jpg" alt="Testimonio 1" width={300} height={300} />
                <p className="text-gray-300">"Excelente servicio, me encantó el corte."</p>
                <p className="text-gray-500">- Juan Pérez</p>
            </div>
            <div className="p-4 bg-black text-white flex flex-col items-center justify-center">
                <Image src="/testi3.jpg" alt="Testimonio 2" width={300} height={300} />
                <p className="text-gray-300">"La mejor barbería de la ciudad, definitivamente volveré."</p>
                <p className="text-gray-500">- María García</p>
            </div>
            <div className="p-4 bg-black text-white flex flex-col items-center justify-center">
                <Image src="/testi2.jpg" alt="Testimonio 3" width={300} height={300} />
                <p className="text-gray-300">"Servicio excepcional y personal muy amable."</p>
                <p className="text-gray-500">- Carlos López</p>
            </div>
        </div>
        </>
    );
}