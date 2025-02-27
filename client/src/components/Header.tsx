import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-yellow-500">Pragya</h1>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-yellow-500 transition">Home</a>
        <a href="/courses" className="text-gray-700 hover:text-yellow-500 transition">Courses</a>
        <a href="/dashboard" className="text-gray-700 hover:text-yellow-500 transition">Dashboard</a>
        <a href="/about" className="text-gray-700 hover:text-yellow-500 transition">About</a>
      </nav>

      {/* User Profile (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="/signin" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
          Sign In
        </a>
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-4 text-center">
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition">Courses</a>
            <a href="/dashboard" className="text-gray-700 hover:text-yellow-500 transition">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 transition">About</a>
            <button className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
