// src/pages/GamePage.js
import React from 'react';

// Example image imports (replace with actual images)
import schoolImage from '../assets/school.png';
import courtImage from '../assets/court.jpg';
import quizImage from '../assets/quiz.jpg';
import highCourtImage from '../assets/highCourt.jpeg';

function GamePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Game: Constitution</h1>
      <div className="relative w-full max-w-5xl h-[600px] bg-white border rounded-lg shadow-lg">
        {/* Constitution School */}
        <div className="absolute top-4 left-4 flex flex-col items-center">
          <img src={schoolImage} alt="School" className="w-32 h-32 mb-2" /> {/* Enlarged image */}
          <p className="mt-2 text-sm text-gray-600">Constitution School</p>
        </div>

        {/* Supreme Court */}
        <div className="absolute top-[150px] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
          <img src={courtImage} alt="Supreme Court" className="w-32 h-32 mb-2" /> {/* Enlarged image */}
          <p className="mt-2 text-sm text-gray-600">Supreme Court</p>
        </div>

        {/* Daily Quest */}
        <div className="absolute bottom-4 right-4 flex flex-col items-center">
          <img src={quizImage} alt="Daily Quest" className="w-32 h-32 mb-2" /> {/* Enlarged image */}
          <p className="mt-2 text-sm text-gray-600">Quizzes</p>
        </div>

        {/* High Court */}
        <div className="absolute bottom-4 left-4 flex flex-col items-center">
          <img src={highCourtImage} alt="High Court" className="w-32 h-32 mb-2" /> {/* Enlarged image */}
          <p className="mt-2 text-sm text-gray-600">High Court</p>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
