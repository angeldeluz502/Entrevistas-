import React from 'react';

const ProgressIndicator = ({ currentCycle, totalCycles }) => {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      {Array.from({ length: totalCycles }).map((_, index) => (
        <div 
          key={index}
          className={`h-3 w-3 rounded-full ${index < currentCycle ? 'bg-green-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;