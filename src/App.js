import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import GamePage from './pages/GamePage';
import ConstitutionSchool from './pages/ConstitutionSchool';
import SupremeCourtGame from './pages/SupremeCourtGame';
import DailyQuest from './pages/DailyQuest';
import HighCourtGame from './pages/HighCourtGame';
import AIPage from './pages/AIPage'; // Import AIPage

function App() {
  const [webinars, setWebinars] = useState([]); // State to store webinars

  const handleCreateWebinar = (newWebinar) => {
    setWebinars((prev) => [...prev, newWebinar]);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        {/* Header component displayed on all pages */}
        <Header />
        
        <main className="flex-grow relative">
          <Routes>
            {/* General Pages */}
            <Route path="/home" element={<><Banner /><HeroSection /></>} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/world-chat" element={<WorldChat />} />
            <Route path="/webinar" element={<WebinarPage webinars={webinars} />} />
            <Route path="/create-webinar" element={<CreateWebinar onCreate={handleCreateWebinar} />} />
            <Route path="/educational-videos" element={<EducationalVideosPage />} />
            <Route path="/ai" element={<AIPage />} /> {/* AI Page */}

            {/* Games */}
            <Route path="/games" element={<GamePage />} />
            <Route path="/games/constitution-school" element={<ConstitutionSchool />} />
            <Route path="/games/supreme-court-game" element={<SupremeCourtGame />} />
            <Route path="/games/daily-quest" element={<DailyQuest />} />
            <Route path="/games/high-court-game" element={<HighCourtGame />} />
            
            {/* Default Route: Redirect to /home */}
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>

        {/* Footer component displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
