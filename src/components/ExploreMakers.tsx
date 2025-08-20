import type React from "react"

interface Maker {
  name: string
  description: string
  image: string
}

const ExploreMakers: React.FC = () => {
  const makers: Maker[] = [
    {
      name: "ROLF BRUGGINK",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker1.png",
    },
    {
      name: "JAMES LEAT",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker2.png",
    },
    {
      name: "DOUGLAS SNELLING",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker3.png",
    },
    {
      name: "MATT PEARSON",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker4.png",
    },
    {
      name: "FAMILY WOODWORKS",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker5.png",
    },
    {
      name: "DAVID SHAW",
      description: "Handmade fine furniture and cabinetry",
      image: "../../public/image/maker6.png",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">EXPLORE MAKERS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {makers.map((maker, index) => (
            <div key={index} className="text-center">
              <img src={maker.image || "/placeholder.svg"} alt={maker.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="font-semibold text-sm mb-2">{maker.name}</h3>
              <p className="text-xs text-gray-600">{maker.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-mint text-white px-6 py-2 text-sm">VIEW ALL MAKERS</button>
        </div>
      </div>
    </section>
  )
}

export default ExploreMakers
