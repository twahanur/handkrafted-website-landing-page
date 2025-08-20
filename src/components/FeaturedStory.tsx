import type React from "react"

const FeaturedStory: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">FEATURED STORY</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="../../public/image/features.png"
              alt="Wooden dining table"
              className="w-full h-80 object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-serif mb-4">FAVOURITE PRODUCTS OF 2024</h3>
            <p className="text-gray-600 mb-4">
              It's a tradition of ours to reflect on our year by telling a selection of our heart's favourite
              handcrafted furniture pieces.
            </p>
            <p className="text-gray-600 mb-6">
              "Each project tells a story - and that's ultimately what we're proud of. Handkrafted connects consumers
              through the creation of beautiful and high quality pieces."
            </p>
            <p className="text-sm text-gray-500 mb-6">- Rolf Bruggink, Founder</p>
            <button className="text-mint text-sm underline">Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedStory
