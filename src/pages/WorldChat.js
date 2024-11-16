// src/pages/WorldChat.js
import React from 'react';
import { motion } from 'framer-motion';

function WorldChat() {
  return (
    <div className="min-h-screen p-4 pt-24 bg-gray-100"> {/* min-h-screen to ensure page takes full height */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        World Chat
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Welcome to the World Chat! Connect with others and engage in global conversations.
      </motion.p>
      {/* Additional content for World Chat can be added here */}
    </div>
  );
}

export default WorldChat;
