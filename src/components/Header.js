import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-black to-red-900 p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-bold">
          India’s Legal Legacy
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/home" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-white transition-transform transform ${isActive ? 'bg-red-700 rounded-lg shadow-md' : 'hover:bg-red-700 hover:rounded-lg hover:shadow-md'}`
            }
          >
            Home
            {({ isActive }) => isActive && <span className="absolute inset-0 border-2 border-red-300 rounded-lg pointer-events-none" />}
          </NavLink>
          <NavLink 
            to="/games" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-white transition-transform transform ${isActive ? 'bg-red-700 rounded-lg shadow-md' : 'hover:bg-red-700 hover:rounded-lg hover:shadow-md'}`
            }
          >
            Games
            {({ isActive }) => isActive && <span className="absolute inset-0 border-2 border-red-300 rounded-lg pointer-events-none" />}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-white transition-transform transform ${isActive ? 'bg-red-700 rounded-lg shadow-md' : 'hover:bg-red-700 hover:rounded-lg hover:shadow-md'}`
            }
          >
            Contact
            {({ isActive }) => isActive && <span className="absolute inset-0 border-2 border-red-300 rounded-lg pointer-events-none" />}
          </NavLink>
          <NavLink 
            to="/ai" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-white transition-transform transform ${isActive ? 'bg-red-700 rounded-lg shadow-md' : 'hover:bg-red-700 hover:rounded-lg hover:shadow-md'}`
            }
          >
            AI
            {({ isActive }) => isActive && <span className="absolute inset-0 border-2 border-red-300 rounded-lg pointer-events-none" />}
          </NavLink>
          <NavLink 
            to="/community" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-white transition-transform transform ${isActive ? 'bg-red-700 rounded-lg shadow-md' : 'hover:bg-red-700 hover:rounded-lg hover:shadow-md'}`
            }
          >
            Community
            {({ isActive }) => isActive && <span className="absolute inset-0 border-2 border-red-300 rounded-lg pointer-events-none" />}
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button>
            {/* Simple hamburger icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
