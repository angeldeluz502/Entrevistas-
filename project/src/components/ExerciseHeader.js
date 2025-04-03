import React from 'react';

const ExerciseHeader = ({ title, description, onBack }) => {
  return (
    <div className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center">
        <button 
          onClick={onBack}
          className="mr-4 text-gray-600 hover:text-gray-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseHeader;