export default function ServiceCard({ titulo, precio, imagen }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-black text-white flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-90 object-cover"
      />

      <div className="p-4 ">
        <h3 className="text-sm md:text-xl font-bold text-gray-300">{titulo}</h3>
        <p className="text-gray-600">{precio}</p>
      </div>
    </div>
  );
}