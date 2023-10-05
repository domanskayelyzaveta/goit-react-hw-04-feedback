import React from 'react';
import './Statistic.css';

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <div>
    <h3 className="stat-title">Statistics</h3>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positive}%</p>
  </div>
);

export default Statistics;
