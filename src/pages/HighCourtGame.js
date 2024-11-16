import React, { useState, useEffect } from 'react';

const HighCourtGame = () => {
  // Define the crossword grid and questions
  const crosswordData = [
    {
      word: 'PARLIAMENT',
      clue: 'The supreme legislative body of India',
      row: 0,
      col: 0,
      direction: 'across', // across or down
    },
    {
      word: 'JUDICIARY',
      clue: 'The system of courts that interprets and applies the law in India',
      row: 2,
      col: 0,
      direction: 'down',
    },
    {
      word: 'CONSTITUTION',
      clue: 'The supreme law of India',
      row: 0,
      col: 3,
      direction: 'down',
    },
    {
      word: 'RIGHTS',
      clue: 'Fundamental rights granted to citizens under the Constitution',
      row: 3,
      col: 3,
      direction: 'across',
    },
  ];

  // Initialize grid size and the crossword grid
  const gridSize = 10; // You can adjust this based on the number of words
  const [grid, setGrid] = useState(Array(gridSize).fill().map(() => Array(gridSize).fill('')));
  const [userInput, setUserInput] = useState({});
  const [score, setScore] = useState(0);

  // Function to initialize crossword grid with word hints
  useEffect(() => {
    const updatedGrid = [...grid];
    crosswordData.forEach(({ word, row, col, direction }) => {
      for (let i = 0; i < word.length; i++) {
        if (direction === 'across') {
          updatedGrid[row][col + i] = word[i].toUpperCase();
        } else if (direction === 'down') {
          updatedGrid[row + i][col] = word[i].toUpperCase();
        }
      }
    });
    setGrid(updatedGrid);
  }, [grid]);

  // Handle user input in crossword grid
  const handleInputChange = (row, col, value) => {
    setUserInput(prevState => ({
      ...prevState,
      [`${row}-${col}`]: value.toUpperCase(),
    }));
  };

  // Check the answers and update the score
  const checkAnswers = () => {
    let newScore = 0;
    crosswordData.forEach(({ word, row, col, direction }) => {
      let correct = true;
      for (let i = 0; i < word.length; i++) {
        const userAnswer = userInput[`${row}-${col + i}`] || userInput[`${row + i}-${col}`];
        if (userAnswer !== word[i].toUpperCase()) {
          correct = false;
          break;
        }
      }
      if (correct) newScore++;
    });
    setScore(newScore);
  };

  return (
    <div className="game-container p-8">
      <h1 className="text-2xl mb-4">Indian Constitution Crossword Game</h1>

      {/* Render Crossword Grid */}
      <div className="grid-container grid grid-cols-10 gap-2 mb-4">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isEmpty = cell === '';
            const isHint = cell !== '' && !userInput[`${rowIndex}-${colIndex}`]; // Check if it's a pre-filled hint
            return (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                maxLength="1"
                value={userInput[`${rowIndex}-${colIndex}`] || (isHint ? cell : '')}
                onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                disabled={isEmpty} // Disable empty cells (non-word cells)
                className={`w-10 h-10 border text-center text-xl ${isHint ? 'bg-gray-300' : 'bg-white'}`}
              />
            );
          })
        )}
      </div>

      {/* Display Clues */}
      <div className="questions mb-4">
        <h2 className="text-xl mb-2">Clues</h2>
        {crosswordData.map((item, index) => (
          <div key={index} className="clue mb-2">
            <p><strong>{`Clue ${index + 1}:`}</strong> {item.clue}</p>
          </div>
        ))}
      </div>

      {/* Score and Check Answer */}
      <div className="score mb-4">
        <button onClick={checkAnswers} className="bg-blue-500 text-white p-2">
          Check Answers
        </button>
        <p className="mt-2">Score: {score} / {crosswordData.length}</p>
      </div>
    </div>
  );
};

export default HighCourtGame;
