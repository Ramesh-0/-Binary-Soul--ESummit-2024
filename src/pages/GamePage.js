import React from 'react';
import { useNavigate } from 'react-router-dom';

// Example image imports (replace with actual images)
import schoolImage from '../assets/school.png';
import courtImage from '../assets/court.jpg';
import quizImage from '../assets/quiz.jpg';
import highCourtImage from '../assets/highCourt.jpeg';

function GamePage() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to a new page
  const openGamePage = (pageName) => {
    navigate(`/games/${pageName}`); // Ensure the path matches the one in App.js
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Game: Constitution</h1>
      <div className="relative w-full max-w-5xl h-[600px] bg-white border rounded-lg shadow-lg">
        
        {/* Constitution School */}
        <div className="absolute top-4 left-4 flex flex-col items-center">
          <img src={schoolImage} alt="School" className="w-32 h-32 mb-2" />
          <button 
            className="w-32 h-10 bg-green-500 text-white rounded-md"
            onClick={() => openGamePage('constitution-school')}
          >
            Constitution School
          </button>
        </div>

        {/* Supreme Court */}
        <div className="absolute top-[150px] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
          <img src={courtImage} alt="Supreme Court" className="w-32 h-32 mb-2" />
          <button 
            className="w-32 h-10 bg-red-500 text-white rounded-md"
            onClick={() => openGamePage('supreme-court-game')}
          >
            Supreme Court
          </button>
        </div>

        {/* Daily Quest */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center">
          <img src={quizImage} alt="Daily Quest" className="w-32 h-32 mb-2" />
          <button 
            className="w-32 h-10 bg-yellow-500 text-white rounded-md"
            onClick={() => openGamePage('daily-quest')}
          >
            Daily Quest
          </button>
        </div>

        {/* High Court */}
        <div className="absolute bottom-4 left-4 flex flex-col items-center">
          <img src={highCourtImage} alt="High Court" className="w-32 h-32 mb-2" />
          <button 
            className="w-32 h-10 bg-blue-500 text-white rounded-md"
            onClick={() => openGamePage('high-court-game')}
          >
            High Court
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
