import React, { useState, useEffect } from 'react';

const BreathingCircle = ({ phase, remainingTime }) => {
  const getCircleState = () => {
    switch(phase) {
      case 'inhale':
        return {
          color: 'bg-blue-400',
          text: 'INHALA',
          instruction: 'Por la nariz (4 segundos)'
        };
      case 'hold':
        return {
          color: 'bg-teal-400',
          text: 'MANTÉN',
          instruction: 'La respiración (4 segundos)'
        };
      case 'exhale':
        return {
          color: 'bg-purple-400',
          text: 'EXHALA',
          instruction: 'Por la boca (6 segundos)'
        };
      default:
        return {
          color: 'bg-gray-200',
          text: 'PREPARADO',
          instruction: 'Comienza cuando estés listo'
        };
    }
  };

  const { color, text, instruction } = getCircleState();
  const size = phase ? 'h-64 w-64' : 'h-48 w-48';

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className={`${size} ${color} rounded-full flex items-center justify-center shadow-lg transition-all duration-1000 ease-in-out`}>
        <div className="text-center">
          <span className="text-white text-2xl font-bold block">{text}</span>
          {phase && (
            <span className="text-white text-6xl font-bold block mt-2">{remainingTime}</span>
          )}
        </div>
      </div>
      <p className="mt-4 text-lg text-gray-700">{instruction}</p>
    </div>
  );
};

export default BreathingCircle;