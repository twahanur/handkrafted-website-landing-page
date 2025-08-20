import type React from "react";

interface Product {
  name: string;
  description: string;
  image: string;
}

const ExploreProducts: React.FC = () => {
  const products: Product[] = [
    { name: "SIDE TABLE", description: "Handcrafted side table in American Oak - HF", image: "/image/product1.png" },
    { name: "DESK ORGANISER", description: "Desk Organiser by Rolf Bruggink Made - HF", image: "/image/product2.png" },
    { name: "HARDWOOD COFFEE TABLE", description: "HF table 400mm high American Oak", image: "/image/product3.png" },
    { name: "THE EDGE DRESSER", description: "Handcrafted dresser by Matt Pearson - HF", image: "/image/product4.png" },
    { name: "LIVING HARDWOOD", description: "Rolf Bruggink Fine Furniture - HF", image: "/image/product5.png" },
    { name: "HARDWOOD ROUND TABLE", description: "Rolf Bruggink Fine Furniture - HF", image: "/image/product6.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-600 mb-12">
          EXPLORE PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group cursor-pointer w-full aspect-square rounded-lg overflow-hidden shadow-md"
              style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-white text-sm sm:text-base">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-mint hover:bg-green-600 text-white px-6 py-2 text-sm sm:text-base rounded transition">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
