import React from 'react';
import './style.css';

const Questionnaire = ({ children }) => {
  return (
    <div className="sidebar-layout">
      <div className="sidebar"><div>guru</div></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Questionnaire;
