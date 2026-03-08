import React from 'react';
import '../pages/Pages.css';

const About = () => {
  return (
    <div className="page-container" data-testid="about-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="about-title">About the Poet</h1>
        <p className="page-subtitle">The voice behind the verses</p>
      </div>

      <div className="empty-state" data-testid="about-empty-state">
        <div className="empty-state-icon">✨</div>
        <h3 className="empty-state-title">Coming Soon</h3>
        <p className="empty-state-text">
          The story behind the verses is being written.
          Return soon to discover the journey of the poet.
        </p>
      </div>
    </div>
  );
};

export default About;
