import React from 'react';
import './Feedback.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div className="btn-container">
    {options.map(option => (
      <button
        className="feedback-btn"
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default Feedback;
