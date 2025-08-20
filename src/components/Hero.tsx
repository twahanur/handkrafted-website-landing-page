import type React from "react";
const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <img
            src="../../public/image/banner1.png"
            alt="Modern wooden chair"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-serif mb-4">
                SUPPORTING AUSTRALIA'S INDEPENDENT
                <br />
                FURNITURE MAKERS & ARTISANS
              </h2>
              <p className="text-lg mb-6">
                Discover unique, handcrafted furniture made by talented
                Australian artisans
              </p>
              <button className="border-mint border text-white px-5 py-2 hover:text-mint text-sm">
                SHOP NOW
              </button>
              <div className="mt-8 text-sm text-white hover:text-mint cursor-pointer">
                <span className=" border-b border-dotted"> How It Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
