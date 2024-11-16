// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ExplorePage from './pages/ExplorePage';
import CommunityPage from './pages/CommunityPage';
import WebinarPage from './pages/WebinarPage';
import EducationalVideosPage from './pages/EducationalVideosPage';
import WorldChat from './pages/WorldChat';
import CreateWebinar from './pages/CreateWebinar';
import ScrollToTop from './components/ScrollToTop';
import GamePage from './pages/GamePage'; // Import GamePage

function App() {
  const [webinars, setWebinars] = useState([]); // State to store webinars

  const handleCreateWebinar = (newWebinar) => {
    setWebinars((prev) => [...prev, newWebinar]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/home" element={<><Banner /><HeroSection /></>} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/world-chat" element={<WorldChat />} />
            <Route path="/webinar" element={<WebinarPage webinars={webinars} />} />
            <Route path="/create-webinar" element={<CreateWebinar onCreate={handleCreateWebinar} />} />
            <Route path="/educational-videos" element={<EducationalVideosPage />} />
            <Route path="/games" element={<GamePage />} /> {/* Updated with GamePage */}
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/ai" element={<div>AI Page</div>} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
