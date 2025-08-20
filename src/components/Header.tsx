import type React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center border-b-2 space-x-3 text-sm">
          <div className="text-gray-600 cursor-pointer hover:underline hover:text-mint">Are you a maker?</div>
          <div className="text-gray-600 cursor-pointer hover:underline hover:text-mint">Login</div>
          <div className="text-gray-600 cursor-pointer hover:underline hover:text-mint">Register</div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                OUR STORY
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                WHY Lloyd brooke furniture
              </a>
            </nav>
          </div>

          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-serif italic text-gray-900">
              Lloyd brooke furniture
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              SELL WITH US
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              WHOLESALE
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
              LOGIN
            </a>
            <button className="bg-mint text-white px-4 py-2 text-sm">
              CONTACT
            </button>
            <button className="bg-mint text-white px-4 py-2 text-sm">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
