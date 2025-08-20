import type React from "react"

interface Product {
  name: string
  description: string
  image: string
}

const ExploreProducts: React.FC = () => {
  const products: Product[] = [
    {
      name: "SIDE TABLE",
      description: "Handcrafted side table in American Oak - HF",
      image: "../../public/image/product1.png",
    },
    {
      name: "DESK ORGANISER",
      description: "Desk Organiser by Rolf Bruggink Made - HF",
      image: "../../public/image/product2.png",
    },
    {
      name: "HARDWOOD COFFEE TABLE",
      description: "HF table 400mm high American Oak",
      image: "../../public/image/product3.png",
    },
    {
      name: "THE EDGE DRESSER",
      description: "Handcrafted dresser by Matt Pearson - HF",
      image: "../../public/image/product4.png",
    },
    {
      name: "LIVING HARDWOOD",
      description: "Rolf Bruggink Fine Furniture - HF",
      image: "../../public/image/product5.png",
    },
    {
      name: "HARDWOOD ROUND TABLE",
      description: "Rolf Bruggink Fine Furniture - HF",
      image: "../../public/image/product6.png",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">EXPLORE PRODUCTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
              <p className="text-xs text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-mint text-white px-6 py-2 text-sm">VIEW ALL PRODUCTS</button>
        </div>
      </div>
    </section>
  )
}

export default ExploreProducts
