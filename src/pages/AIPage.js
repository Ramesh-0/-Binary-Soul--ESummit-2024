import React, { useState } from 'react';

function AIPage() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotLaunch = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="container mx-auto max-w-screen-lg bg-gray-100 py-10 px-4 mt-20">
      {/* Added mt-20 to push content below the fixed header */}
      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">AI in Action</h1>
      <p className="text-lg text-gray-800 text-center mb-10">
        Explore the intersection of artificial intelligence and India's legal system. Discover AI-powered tools 
        and resources designed to make learning and legal research efficient and engaging.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* AI-powered tools */}
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">AI Chatbot</h2>
          <p className="text-gray-600 mt-2">Interact with our AI to get answers about the Indian Constitution.</p>
          <button
            onClick={handleChatbotLaunch}
            className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 flex items-center gap-2"
          >
            <span>Launch Chatbot</span>
            <i className="fas fa-robot"></i>
          </button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">Legal Document Analyzer</h2>
          <p className="text-gray-600 mt-2">Upload legal documents and let AI provide detailed insights.</p>
          <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 flex items-center gap-2">
            <span>Analyze Now</span>
            <i className="fas fa-file-alt"></i>
          </button>
        </div>
      </div>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">AI Chatbot</h2>
            
            {/* Botpress Webchat iframe */}
            <div className="w-full h-96 mb-4">
              <iframe
                src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/16/23/20241116231158-X5JJZ7PH.json"
                frameBorder="0"
                className="w-full h-full rounded-lg"
                title="Botpress Chatbot"
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleCloseChatbot}
                className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIPage;
