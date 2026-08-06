export default function GaleriaCard({ titulo, imagen }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white ">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h3 className="text-sm md:text-xl font-bold">{titulo}</h3>
      </div>
    </div>
  );
}