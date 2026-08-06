export default function ServiceCard({ titulo, precio, imagen }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white ">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-sm md:text-xl font-bold">{titulo}</h3>
        <p className="text-gray-600">{precio}</p>
      </div>
    </div>
  );
}