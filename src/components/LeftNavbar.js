// src/components/LeftNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function LeftNavbar() {
  return (
    <nav className="w-64 bg-white shadow-lg h-full p-4 mt-24"> {/* Add mt-24 to ensure visibility below the header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Community Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/world-chat" 
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded transition duration-200"
          >
            World Chat
          </Link>
        </li>
        <li>
          <Link 
            to="/webinar" 
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded transition duration-200"
          >
            Webinar
          </Link>
        </li>
        <li>
          <Link 
            to="/educational-videos" 
            className="block text-gray-700 hover:bg-gray-200 px-3 py-2 rounded transition duration-200"
          >
            Educational Videos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LeftNavbar;
