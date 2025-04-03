import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseFloat(userAnswer) === question.correctAnswer;
    setFeedback(isCorrect ? '¡Correcto!' : 'Incorrecto, intenta de nuevo');
    onAnswer(isCorrect);
    if (isCorrect) {
      setUserAnswer('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-800">Problema de Dosificación</h3>
      </div>
      
      <p className="text-gray-700 mb-4">{question.text}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
            Tu respuesta (mg/ml):
          </label>
          <input
            type="number"
            id="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            step="0.01"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Verificar
        </button>
      </form>
      
      {feedback && (
        <div className={`mt-4 p-3 rounded-lg ${feedback.includes('Correcto') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;