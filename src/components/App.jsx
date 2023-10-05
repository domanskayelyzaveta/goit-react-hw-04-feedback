import React, { useState } from 'react';
import Feedback from './Feedbacks/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import '../components/App.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positive = Math.round(total !== 0 ? (good / total) * 100 : 0);

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <div className="container">
        <Section title="Please leave your feedback">
          <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
}
