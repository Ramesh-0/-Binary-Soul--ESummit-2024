import React, { useState, useEffect } from 'react';
import { wordList } from '../components/words'; // Correct the path to words.js file

const HighCourtGame = () => {
  const [scrambledWord, setScrambledWord] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); // Set initial timer to 60 seconds
  const [gameStatus, setGameStatus] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(''); // Store correct answer

  // Function to start the game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimer(60); // 1-minute timer
    scrambleWord(); // Scramble the first word
    setGameStatus('');
    setCorrectAnswer(''); // Reset correct answer
  };

  // Function to restart the game after losing
  const restartGame = () => {
    setGameStarted(false);
    setScore(0);
    setTimer(60);
    setGameStatus('');
  };

  useEffect(() => {
    if (gameStarted) {
      // Timer logic
      const interval = setInterval(() => {
        setTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setGameStatus('Time\'s up! You lost.');
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const scrambleWord = () => {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
    setScrambledWord(scrambled);
    setCorrectAnswer(word); // Store the correct word from wordList, not scrambled
  };

  const handleGuess = () => {
    // Directly compare user guess with correctAnswer
    if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
      setScore(score + 1);
      setGameStatus('Correct! Great job.');

      // Increase timer by 10 seconds when guessed correctly
      setTimer((prevTimer) => prevTimer + 10);
      
      scrambleWord(); // Scramble a new word
      setUserGuess('');
    } else {
      setGameStatus('Incorrect. Try again.');

      // Decrease timer by 5 seconds when guessed incorrectly
      setTimer((prevTimer) => prevTimer - 5);
    }
  };

  const handleSkip = () => {
    setScore(score - 1); // Lose 1 point for skipping
    setGameStatus('You skipped this word.');

    // Move to the next word
    scrambleWord();
  };

  // Handle Enter key press to check the answer
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className="game-container pt-24 px-4">
      <div className="text-center mb-6">
        {!gameStarted ? (
          <button
            onClick={startGame}
            className="bg-blue-500 text-white p-4 rounded-lg text-xl hover:bg-blue-600 transition duration-300"
          >
            Start Game
          </button>
        ) : (
          <>
            <h1 className="text-3xl mb-4">Word Scramble Game</h1>
            <p className="mb-4">Unscramble the word: <span className="font-bold">{scrambledWord}</span></p>
          </>
        )}
      </div>

      {gameStarted && (
        <>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              onKeyDown={handleKeyPress} // Listen for the Enter key
              placeholder="Your guess"
              className="p-3 border border-gray-300 rounded-lg w-1/2 text-center"
            />
          </div>
          
          <div className="flex justify-center mb-4 space-x-4">
            <button
              onClick={handleGuess}
              className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Check Answer
            </button>
            <button
              onClick={handleSkip}
              className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Skip
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Score: {score}</p>
            <p className="text-lg font-semibold">Time left: {timer}s</p>
            {gameStatus && <p className="mt-2 text-xl font-medium">{gameStatus}</p>}
          </div>
        </>
      )}

      {/* Display Restart button only when the game has ended */}
      {gameStatus && !gameStarted && (
        <div className="text-center mt-4">
          <button
            onClick={restartGame}
            className="bg-red-500 text-white p-4 rounded-lg text-xl hover:bg-red-600 transition duration-300"
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default HighCourtGame;
