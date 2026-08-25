import Image from "next/image";
import { cormorant,cinzel } from "../data/foont";
import Button from "../ui/Button";


export default function Navbar() {
return(
    <>
    <div className="bg-gray-50 p-9">
    <nav className="bg-gray-50 text-black p-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-10">
        <Image src="/barba-logo.png" alt="Logo" width={60} height={60} />
        <h1 className={cinzel.className + " hidden md:text-2xl md:block font-bold"}>Barbería</h1>
        </div>
        <div>
            <Image src="/menu.png" alt="Menu" width={30} height={30} className="lg:hidden" />
        </div>
        <ul className="space-x-10 hidden lg:flex items-center">
            <li>
                <a href="#" className={cormorant.className + " hover:text-yellow-500 transition-all duration-300"}>Inicio</a>
            </li>
            <li>
                <a href="#" className={cormorant.className + " hover:text-yellow-500 transition-all duration-300"}>Servicios</a>
            </li>
            <li>
                <a href="#" className={cormorant.className + " hover:text-yellow-500 transition-all duration-300"}>Galería</a>
            </li>
             <li>
                <a href="#" className={cormorant.className + " hover:text-yellow-500 transition-all duration-300"}>Contacto</a>
            </li>
            <Button>Reservar turno</Button>
        </ul>
    </nav>
    </div>
    </>
)
}