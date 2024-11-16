import React from "react";
import "../styles/DailyQuest.css"; // Import the custom CSS file

const DailyQuest = () => {
  return (
    <div className="daily-quest-container p-6 bg-gray-100 rounded-lg shadow-lg max-w-3xl mx-auto mt-24"> {/* Increased margin-top */}
      <h1 className="quest-title text-2xl font-bold mb-4 text-center text-blue-600">
        Today's Daily Quest: Quiz on the Indian Constitution
      </h1>
      <div className="quiz-embed-container">
        <iframe
          src="https://quizizz.com/join/quiz/6738fb4c2f8dc8dac92f1776/start?from=JoinDashboardPreviewStudent"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          title="Indian Constitution Quiz"
          className="quiz-frame rounded-lg border-2 border-gray-300 shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default DailyQuest;
