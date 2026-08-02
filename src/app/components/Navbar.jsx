export default function Navbar() {
return(
    <>
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Barbería El Estilo</h1>
        <ul className="flex space-x-4">
            <li>
                <a href="#" className="hover:text-gray-300">Inicio</a>
            </li>
            <li>
                <a href="#" className="hover:text-gray-300">Servicios</a>
            </li>
            <li>
                <a href="#" className="hover:text-gray-300">Contacto</a>
            </li>
        </ul>
    </nav>
    </>
)
}