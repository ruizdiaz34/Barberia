import Button from "../ui/Button";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p>📍 Av. Siempre Viva 123, Berazategui</p>
            <p>🕒 Lun a Sáb - 10 a 20hs</p>
            <Button className="mt-4">
                Escribinos a WhatsApp
            </Button>
            <p>&copy; 2023 Barbería. Todos los derechos reservados.</p>
        </footer>
    );
}