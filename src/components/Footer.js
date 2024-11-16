// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-red-900 text-white py-10 px-4">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="mb-8">
          <p className="text-lg font-semibold mb-4">Connect with us</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* Facebook Button */}
            <a 
              href="https://facebook.com" 
              className="text-white hover:text-red-300 transition-transform transform hover:scale-110" 
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            {/* X (Twitter) Button */}
            <a 
              href="https://x.com" 
              className="text-white hover:text-red-300 transition-transform transform hover:scale-110" 
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            {/* Instagram Button */}
            <a 
              href="https://instagram.com" 
              className="text-white hover:text-red-300 transition-transform transform hover:scale-110" 
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            {/* LinkedIn Button */}
            <a 
              href="https://linkedin.com" 
              className="text-white hover:text-red-300 transition-transform transform hover:scale-110" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* YouTube Button */}
            <a 
              href="https://youtube.com" 
              className="text-white hover:text-red-300 transition-transform transform hover:scale-110" 
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </div>
        
        {/* About the Constitution */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is the Indian Constitution?</h2>
          <p className="text-sm md:text-base max-w-3xl mx-auto">
            The Indian Constitution is the supreme law of India, adopted on January 26, 1950. It establishes the framework for the government, defining its structure, powers, and functions. The Constitution enshrines fundamental rights, duties, and the directive principles of state policy, ensuring justice, equality, and liberty for all citizens...
          </p>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} India’s Legal Legacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
