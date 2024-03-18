import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
          <a href="/" className="text-white font-extrabold text-xl">
              <i className="fab fa-github mr-2"></i>
              ProjectFetch
            </a>
          </div>
          <div className="flex-shrink-0">
          <a
              href="/"
              className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
            >
              Home
            </a>
            <a
              href="/explore"
              className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
            >
              Explore
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white px-4 py-3 rounded-md text-lg font-semibold"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;