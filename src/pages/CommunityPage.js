// src/pages/CommunityPage.js
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header'; // Import Header component
import LeftNavbar from '../components/LeftNavbar'; // Import LeftNavbar component

function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <LeftNavbar /> {/* Include the left navbar */}
        <main className="ml-24 group-hover:ml-64 p-4 flex-grow bg-gray-100 transition-all duration-300 ease-in-out mt-16"> {/* Add mt-16 to create space for the header */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Community Page
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to the Community Page! Here you can find various sections such as World Chat, Webinar, and Educational Videos.
          </motion.p>
          {/* Content sections can be added here */}
        </main>
      </div>
    </div>
  );
}

export default CommunityPage;
