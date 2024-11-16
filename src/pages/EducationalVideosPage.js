// src/pages/EducationalVideosPage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

function EducationalVideosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Sample video data
  const fetchVideos = (pageNumber) => {
    setLoading(true);
    const newVideos = Array.from({ length: 6 }, (_, index) => ({
      title: `Video ${index + 1 + (pageNumber - 1) * 6}`,
      thumbnail: 'https://via.placeholder.com/300x200',
      description: `Description for Video ${index + 1 + (pageNumber - 1) * 6}`,
    }));
    
    setVideos((prev) => [...prev, ...newVideos]);
    setLoading(false);

    // Simulating end of data for demonstration purposes
    if (pageNumber >= 3) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchVideos(page);
  }, [page]);

  // Load more videos when scrolling to the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight && hasMore && !loading
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore]);

  // Filter videos based on the search query
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search on button click
  const handleSearch = () => {
    // Optionally, you can perform actions on search here.
    // This function can also be used to trigger additional side effects, if needed.
  };

  return (
    <div className="min-h-screen p-4 pt-24 bg-gray-100">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Educational Videos Page
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Welcome to the Educational Videos Page! Here you can watch various informative videos.
      </motion.p>

      {/* Search Box */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-red-600 text-white rounded-md">
          <FaSearch />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{video.title}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-4">
            <span className="text-gray-700">No videos found.</span>
          </div>
        )}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center py-4">
          <span className="text-gray-700">Loading more videos...</span>
        </div>
      )}

      {/* No more content */}
      {!hasMore && !loading && (
        <div className="text-center py-4">
          <span className="text-gray-700">No more videos to load.</span>
        </div>
      )}
    </div>
  );
}

export default EducationalVideosPage;
