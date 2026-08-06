import Image from "next/image";
import { cormorant,cinzel } from "../data/foont";


export default function Navbar() {
return(
    <>
    <div className="bg-gray-50 p-9">
    <nav className="bg-white text-black p-9 flex justify-between items-center rounded-lg shadow-lg">
        <Image src="/barba-logo.png" alt="Logo" width={50} height={50} />
        <h1 className={cinzel.className + " hidden md:text-2xl md:block font-bold"}>Barbería</h1>
        <div>
            <Image src="/menu.png" alt="Menu" width={30} height={30} className="md:hidden" />
        </div>
        <ul className="space-x-4 hidden md:flex">
            <li>
                <a href="#" className={cormorant.className + " hover:border-b-1"}>Inicio</a>
            </li>
            <li>
                <a href="#" className={cormorant.className + " hover:border-b-1"}>Servicios</a>
            </li>
            <li>
                <a href="#" className={cormorant.className + " hover:border-b-1"}>Galería</a>
            </li>
             <li>
                <a href="#" className={cormorant.className + " hover:border-b-1"}>Contacto</a>
            </li>
        </ul>
    </nav>
    <div/></div>
    </>
)
}