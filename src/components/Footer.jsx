import Button from "../ui/Button";
import Image from "next/image";
import { cormorant,cinzel } from "../data/foont";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-10 text-center">
            <h2 className={cormorant.className + " text-2xl font-bold mb-4"}>Contacto</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 p-10">
                <div>
                    <p>📍 Av. Siempre Viva 123, Berazategui</p>
                    <p>🕒 Lun a Sáb - 10 a 20hs</p>
                    </div>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/facebook.png" alt="Logo" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.png" alt="Logo" width={30} height={30} />
                </a>
            <Button className="mt-4 p-10">
                <a href="https://wa.me/5491134567890" target="_blank" rel="noopener noreferrer">
                    Escribinos a WhatsApp
                </a>
            </Button>
            </div>
            <p className="pt-10">&copy; 2023 Barbería. Todos los derechos reservados.</p>
        </footer>
    );
}