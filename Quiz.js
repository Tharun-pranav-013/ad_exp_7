import React, { useState } from 'react';
import Question from './Question';

const quizQuestions = [
  { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Lisbon"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p className="score">Your Score: {score}/{quizQuestions.length}</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <Question
          question={quizQuestions[currentQuestion].question}
          options={quizQuestions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default Quiz;
