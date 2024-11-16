// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

function HeroSection() {
  return (
    <section className="bg-gray-200 py-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12" // Adjust margin-bottom here
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover More About the Indian Constitution
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our mission is to make the Constitution accessible and understandable to everyone. Dive into detailed articles, interactive content, and educational resources.
        </motion.p>
        <Link to="/explore"> {/* Update to use Link */}
          <motion.button
            className="bg-gradient-to-r from-black to-red-900 text-white py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-red-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Explore Now
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
