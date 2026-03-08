import React from 'react';
import '../pages/Pages.css';

const Poems = () => {
  return (
    <div className="page-container" data-testid="poems-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="poems-title">Poems</h1>
        <p className="page-subtitle">A collection of celestial verses</p>
      </div>

      <div className="empty-state" data-testid="poems-empty-state">
        <div className="empty-state-icon">✨</div>
        <h3 className="empty-state-title">Coming Soon</h3>
        <p className="empty-state-text">
          New verses are being written across the horizon.
          Check back soon for the latest poetry collection.
        </p>
      </div>
    </div>
  );
};

export default Poems;
