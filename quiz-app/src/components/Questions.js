import React from 'react';

const Questions = ({ question, options, selectedAnswer, handleAnswerClick }) => {
  return (
    <div>
      <h3>{question}</h3>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={option === selectedAnswer ? styles.selected : styles.button}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    margin: '5px',
    background: '#f0f0f0',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  selected: {
    padding: '10px 20px',
    margin: '5px',
    background: '#cce5ff',
    border: '1px solid #007bff',
    cursor: 'pointer',
  },
};

export default Questions;

