// src/pages/WebinarPage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WebinarPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [webinars, setWebinars] = useState([
    {
      title: 'Webinar 1',
      date: '2024-10-15',
      description: 'Description for Webinar 1',
      thumbnail: 'https://via.placeholder.com/300x200?text=Webinar+1',
    },
    {
      title: 'Webinar 2',
      date: '2024-10-20',
      description: 'Description for Webinar 2',
      thumbnail: 'https://via.placeholder.com/300x200?text=Webinar+2',
    },
    {
      title: 'Webinar 3',
      date: '2024-10-25',
      description: 'Description for Webinar 3',
      thumbnail: 'https://via.placeholder.com/300x200?text=Webinar+3',
    },
  ]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to load more webinars
  const loadMoreWebinars = () => {
    const newWebinars = Array.from({ length: 3 }, (_, index) => ({
      title: `Webinar ${index + 4 + (page - 1) * 3}`,
      date: `2024-10-${25 + index}`,
      description: `Description for Webinar ${index + 4 + (page - 1) * 3}`,
      thumbnail: `https://via.placeholder.com/300x200?text=Webinar+${index + 4 + (page - 1) * 3}`,
    }));

    setWebinars((prev) => [...prev, ...newWebinars]);
    setPage((prev) => prev + 1);

    // Simulate end of data after 5 pages for demonstration purposes
    if (page >= 5) {
      setHasMore(false);
    }
  };

  // Filter webinars based on the search query
  const filteredWebinars = webinars.filter(webinar =>
    webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 pt-24 bg-gray-100">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Webinar Page
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Welcome to the Webinar Page! Here you can join live sessions and view past webinars.
      </motion.p>

      {/* Search Box */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search webinars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button className="ml-2 p-2 bg-red-600 text-white rounded-md">
          <FaSearch />
        </button>
      </div>

      {/* Webinar List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebinars.map((webinar, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={webinar.thumbnail} alt={webinar.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{webinar.title}</h2>
              <p className="text-gray-600">Date: {webinar.date}</p>
              <p className="text-gray-600">{webinar.description}</p>
              <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md">Join Webinar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreWebinars}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Load More
          </button>
        </div>
      )}

      {/* No more webinars message */}
      {!hasMore && (
        <div className="text-center py-4">
          <span className="text-gray-700">No more webinars to load.</span>
        </div>
      )}

      {/* Create Your Own Webinar Button */}
      <div className="mt-8 text-center">
        <Link to="/create-webinar">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md">
            Create Your Own Webinar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WebinarPage;
