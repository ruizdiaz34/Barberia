export default function Servicios() {
    return (
        <>
        <h2 className="text-3xl font-bold mb-4 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

        <div className="p-4 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-4">Corte clasico</h2>
            <p className="text-gray-300">$2000</p>
        </div>
        <div className="p-4 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-4">Barba</h2>
            <p className="text-gray-300">$1500</p>
        </div>
        <div className="p-4 bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-4">Corte + Barba</h2>
            <p className="text-gray-300">$3000</p>
        </div>
        </div>
        </>
    );
}