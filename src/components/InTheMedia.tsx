import type React from "react"

const InTheMedia: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">IN THE MEDIA</h2>

        <div className="flex justify-center items-center space-x-12 opacity-60">
          <img src="/image/media1.png" alt="The Australian" className="h-8" />
          <img src="/image/media2.png" alt="Vogue" className="h-8" />
          <img src="/image/media3.png" alt="Green" className="h-8" />
          <img src="/image/media4.png" alt="Peppermint" className="h-8" />
          <img src="/image/media5.png" alt="Good Weekend" className="h-8" />
        </div>
      </div>
    </section>
  )
}

export default InTheMedia
