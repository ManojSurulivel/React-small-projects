import React, { useState } from 'react';
import Question from './Questions';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswerClick = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    quizData.forEach((q, index) => {
      if (q.correctAnswer === selectedAnswers[index]) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setScore(null);
  };

  return (
    <div style={styles.quizContainer}>
      {score === null ? (
        <div>
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selectedAnswer={selectedAnswers[currentQuestion]}
            handleAnswerClick={handleAnswerClick}
          />
          <button
            onClick={handleNextQuestion}
            style={styles.nextButton}
            disabled={selectedAnswers[currentQuestion] == null}
          >
            {currentQuestion < quizData.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          <button onClick={handleRestartQuiz} style={styles.restartButton}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  quizContainer: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  nextButton: {
    marginTop: '20px',
    padding: '10px 20px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  restartButton: {
    padding: '10px 20px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Quiz;
