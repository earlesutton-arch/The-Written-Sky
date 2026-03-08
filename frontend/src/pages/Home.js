import React from 'react';
import '../pages/Pages.css';

const Home = () => {
  return (
    <div className="page-container" data-testid="home-page">
      <div className="hero-section">
        <h1 className="hero-title" data-testid="hero-title">
          The Written Sky
        </h1>
        <p className="hero-subtitle" data-testid="hero-subtitle">
          Lines written across the horizon
        </p>
        <p className="hero-description">
          A celestial collection of verses that reach beyond the ordinary,
          where every word is a star and every line traces the infinite.
        </p>
      </div>

      <div className="content-section">
        <div className="featured-grid">
          <div className="feature-card" data-testid="feature-poems">
            <div className="feature-icon">✍️</div>
            <h3>Poetry Collection</h3>
            <p>Explore verses that dance between earth and sky</p>
          </div>

          <div className="feature-card" data-testid="feature-books">
            <div className="feature-icon">📚</div>
            <h3>Published Works</h3>
            <p>Discover books that capture the essence of existence</p>
          </div>

          <div className="feature-card" data-testid="feature-about">
            <div className="feature-icon">🌟</div>
            <h3>The Journey</h3>
            <p>Learn about the poet behind the celestial words</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
