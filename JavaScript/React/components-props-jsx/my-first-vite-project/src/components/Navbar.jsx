import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="text-2xl font-bold text-gray-800">
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Dashboard
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Predictions
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Simulations
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            About
          </a>
        </nav>

        {/* Button */}
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;