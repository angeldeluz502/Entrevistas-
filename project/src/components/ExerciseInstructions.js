import React from 'react';

const ExerciseInstructions = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Instrucciones paso a paso:</h3>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
              {index + 1}
            </span>
            <span className="text-gray-700">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExerciseInstructions;