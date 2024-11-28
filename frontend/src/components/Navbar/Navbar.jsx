import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ scrollToSection, isAuthenticated }) => {
  const { token } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          className="text-white text-2xl font-bold cursor-pointer"
          to="/home"
        >
          ChillFlixz
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex space-x-8`}>
          {/* Section Navigation */}
          <Link
            to="/home"
            className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection && scrollToSection('movies')}
            className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
          >
            Movies
          </button>
          <button
            onClick={() => scrollToSection && scrollToSection('favorites')}
            className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
          >
            Favorites
          </button>
          <button
            onClick={() => scrollToSection && scrollToSection('watchLater')}
            className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
          >
            Watch Later
          </button>

          {token ? (
            <Link
              to="/profile"
              className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
            >
              Profile
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-blue-500 transition duration-300 text-lg font-medium"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
