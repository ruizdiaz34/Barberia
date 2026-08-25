import Button from "../ui/Button";
export default function Hero() {
    return (
         <>
        <div className="bg-[url('/fondo-prin.jpg')] bg-cover bg-center min-h-screen min-w-screen text-white flex flex-col justify-center lg:items-start gap-10 px-10    ">
             <div className="flex flex-col items-start flex-wrap gap-4">
            <p>sharp looks strong confidence</p>
            <h2 className="text-4xl md:text-8xl font-bold mb-4">More Than A Haircut,
                It's An Experience.</h2>
            <p>Premium grooming services crafted fom modern gentlemen. Look great, fell confident, every single day.</p>

             </div>
            <div className="flex flex-wrap gap-5 lg:gap-10 space-x-10">
            <Button className="w-30 h-15 md:w-60 text-1xl">
                Reserva tu turno
            </Button>
            <Button className="w-30 h-15 md:w-60 text-1xl" variant="secondary">
                Nuestros servicios
            </Button>
            </div>
        </div>
        </>
        
    );
}