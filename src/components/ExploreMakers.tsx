import type React from "react";

interface Maker {
  name: string;
  description: string;
  image: string;
}

const ExploreMakers: React.FC = () => {
  const makers: Maker[] = [
    { name: "ROLF BRUGGINK", description: "Handmade fine furniture and cabinetry", image: "/image/maker1.png" },
    { name: "JAMES LEAT", description: "Handmade fine furniture and cabinetry", image: "/image/maker2.png" },
    { name: "DOUGLAS SNELLING", description: "Handmade fine furniture and cabinetry", image: "/image/maker3.png" },
    { name: "MATT PEARSON", description: "Handmade fine furniture and cabinetry", image: "/image/maker4.png" },
    { name: "FAMILY WOODWORKS", description: "Handmade fine furniture and cabinetry", image: "/image/maker5.png" },
    { name: "DAVID SHAW", description: "Handmade fine furniture and cabinetry", image: "/image/maker6.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-600 mb-12">
          EXPLORE MAKERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {makers.map((maker, index) => (
            <div  key={index}>
              <div
             
              className="relative group cursor-pointer w-full aspect-square rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${maker.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{maker.name}</h3>
                <p className="text-white text-sm sm:text-base">{maker.description}</p>
              </div>
            </div>
                <h3 className="text-sm font-semibold mb-2">{maker.name}</h3>

            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-mint hover:bg-green-600 text-white px-6 py-2 text-sm sm:text-base rounded transition">
            VIEW ALL MAKERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreMakers;
