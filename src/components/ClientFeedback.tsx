import type React from "react"

const ClientFeedback: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-serif text-center text-gray-600 mb-12">CLIENT FEEDBACK</h2>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            "We turned out so beautifully. How they are with their furniture and highly recommend both work. "The
            quality of all the detail and finish on all products. Thanks so much Rolf!"
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-xl">
                ★
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-8">VERIFIED CLIENT by Rolf Bruggink</p>

          <p className="text-sm text-gray-600 mb-4">Read more customer reviews on Google</p>

          <img src="../../public/image/googleReview.png" alt="Google" className="mx-auto h-10" />
        </div>
      </div>
    </section>
  )
}

export default ClientFeedback
