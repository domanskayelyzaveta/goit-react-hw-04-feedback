import React from 'react';
import './Section.css';

const Section = ({ title, children }) => (
  <div>
    <h2 className="title">{title}</h2>
    {children}
  </div>
);

export default Section;
