export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p>📍 Av. Siempre Viva 123, Berazategui</p>
            <p>🕒 Lun a Sáb - 10 a 20hs</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                Escribinos a WhatsApp
            </button>
            <p>&copy; 2023 Barbería. Todos los derechos reservados.</p>
        </footer>
    );
}