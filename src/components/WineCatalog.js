// pages/index.js
import React from "react";

export default function WineCatalog() {
  const wines = [
    {
      imageSrc: "/images/malbec.jpg",
      title: "Malbec 2024",
      location: "Valle de Uco, Mendoza",
      price: "50 USD",
      harvestDate: "Abril 2024",
      badge: "PREMIUM TIER",
    },
    {
      imageSrc: "/images/cabernet.jpeg",
      title: "Cabernet Franc 2024",
      location: "Agrelo, Luján de Cuyo",
      price: "75 USD",
      harvestDate: "Mayo 2024",
      badge: "EDICIÓN LIMITADA",
    },
    {
      imageSrc: "/images/chardonnay.jpg",
      title: "Chardonnay 2024",
      location: "Gualtallary, Mendoza",
      price: "45 USD",
      harvestDate: "Marzo 2024",
      badge: "RESERVA",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-[1220] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-5xl font-bold">Cosechas Disponibles</h1>
            <p className="mt-2 text-2xl">
              Descubra activos líquidos seleccionados por expertos para su portafolio digital
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wines.map((wine, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative">
                {wine.badge && (
                  <div className="absolute top-3 left-3 bg-[#8a5a5f8c] text-[#58181F] text-xs font-bold px-3 py-1 rounded-full border">
                    {wine.badge}
                  </div>
                )}
                <img
                  className="w-full h-56 object-cover object-center"
                  src={wine.imageSrc}
                  alt={wine.title}
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{wine.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{wine.location}</p>
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold">PRECIO TOKEN</p>
                    <p className="text-[#58181F] font-bold text-lg">{wine.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold">COSECHA EST.</p>
                    <p className="text-[#58181F] font-bold text-lg">{wine.harvestDate}</p>
                  </div>
                </div>
                <button className="w-full bg-[#58181F] hover:bg-[#603d41] text-white font-bold py-2.5 px-4 rounded-lg transition duration-200 cursor-pointer">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
