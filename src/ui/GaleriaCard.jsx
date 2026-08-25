export default function GaleriaCard({ titulo, imagen }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-black text-white flex flex-col items-center justify-center ">
      <img
        src={imagen}
        alt={titulo}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h3 className="text-sm md:text-xl font-bold">{titulo}</h3>
      </div>
    </div>
  );
}