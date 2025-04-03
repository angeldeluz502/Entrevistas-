import React, { useState, useEffect } from 'react';

const ExerciseTimer = ({ duration, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      onComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
  };

  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-gray-800 mb-4">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className={`px-6 py-2 rounded-lg font-medium ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
        >
          {isActive ? 'Pausar' : 'Comenzar'}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default ExerciseTimer;