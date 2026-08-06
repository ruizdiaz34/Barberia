import Button from "../ui/Button";

export default function Hero() {
    return (
         <>
        <div className="bg-[url('/fondo-prin.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white">Estilo que habla por vos</h2>
            <div className="flex flex-col gap-3 md:flex-row space-x-4">
            <Button className="w-40 md:w-60">
                Reserva tu turno
            </Button>
            <Button className="w-40 md:w-60" variant="secondary">
                Nuestros servicios
            </Button>
            </div>
        </div>
        </>
        
    );
}