import React from 'react';
import '../pages/Pages.css';

const About = () => {
  return (
    <div className="page-container" data-testid="about-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="about-title">About the Poet</h1>
        <p className="page-subtitle">The voice behind the verses</p>
      </div>

      <div className="about-content">
        <div className="about-image" data-testid="poet-image">
          <div className="image-placeholder">
            <span>✨</span>
          </div>
        </div>

        <div className="about-text">
          <h2 className="about-section-title">Journey Through Words</h2>
          <p className="about-paragraph">
            For over two decades, I have been tracing lines across the written sky,
            seeking to capture moments of transcendence in verse. My poetry explores
            the intersection of the earthly and the eternal, finding beauty in the
            spaces between what is said and what remains silent.
          </p>

          <p className="about-paragraph">
            Drawing inspiration from the natural world and the cosmos beyond, I believe
            that poetry is humanity's attempt to speak the language of the stars. Each
            poem is a small window into the infinite, a reminder that we are all
            connected to something greater than ourselves.
          </p>

          <h2 className="about-section-title">Recognition</h2>
          <ul className="about-list">
            <li>National Poetry Award Finalist (2023)</li>
            <li>Published in numerous literary journals</li>
            <li>Featured reader at international poetry festivals</li>
            <li>Writer-in-residence at various institutions</li>
          </ul>

          <h2 className="about-section-title">Philosophy</h2>
          <p className="about-paragraph">
            "Poetry is not written with words alone, but with silence, breath, and the
            spaces between heartbeats. It is the art of making the invisible visible,
            of giving voice to the ineffable."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
