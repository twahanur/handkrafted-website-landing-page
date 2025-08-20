import type React from "react";
import { useState, useEffect } from "react";

const feedbacks = [
  {
    text: `"We turned out so beautifully. How they are with their furniture and highly recommend both work. The quality of all the detail and finish on all products. Thanks so much Rolf!"`,
    author: "VERIFIED CLIENT by Rolf Bruggink",
  },
  {
    text: `"Amazing craftsmanship and attention to detail. The delivery was smooth and professional. Absolutely love our furniture!"`,
    author: "VERIFIED CLIENT by Fanuli",
  },
  {
    text: `"Best experience ever. The team was supportive and the furniture exceeded expectations."`,
    author: "VERIFIED CLIENT by Artisan Studio",
  },
];

const ClientFeedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval); // cleanup
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-600 mb-12">
          CLIENT FEEDBACK
        </h2>

        <div className="relative">
          {/* Feedback Card */}
          <div className=" p-6 text-center transition-all duration-500">
            <p className="text-lg text-gray-600 mb-6">{feedbacks[currentIndex].text}</p>

            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mb-2">{feedbacks[currentIndex].author}</p>
            <p className="text-xs text-gray-600">Read more customer reviews on Google</p>
            <img
              src="/image/googleReview.png"
              alt="Google"
              className="mx-auto h-8 mt-3"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
