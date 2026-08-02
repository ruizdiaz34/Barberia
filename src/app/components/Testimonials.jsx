export default function Testimonials() {
    return (
        <>
        <h2 className="text-3xl font-bold mb-4 text-center">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="p-4 bg-gray-800 text-white">
                <p className="text-gray-300">"Excelente servicio, me encantó el corte."</p>
                <p className="text-gray-500">- Juan Pérez</p>
            </div>
            <div className="p-4 bg-gray-800 text-white">
                <p className="text-gray-300">"La mejor barbería de la ciudad, definitivamente volveré."</p>
                <p className="text-gray-500">- María García</p>
            </div>
            <div className="p-4 bg-gray-800 text-white">
                <p className="text-gray-300">"Servicio excepcional y personal muy amable."</p>
                <p className="text-gray-500">- Carlos López</p>
            </div>
        </div>
        </>
    );
}