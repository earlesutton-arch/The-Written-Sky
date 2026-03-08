import React from 'react';
import '../pages/Pages.css';

const Books = () => {
  return (
    <div className="page-container" data-testid="books-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="books-title">Books</h1>
        <p className="page-subtitle">Published collections of poetry</p>
      </div>

      <div className="empty-state" data-testid="books-empty-state">
        <div className="empty-state-icon">📚</div>
        <h3 className="empty-state-title">Coming Soon</h3>
        <p className="empty-state-text">
          New collections are being prepared for publication.
          Stay tuned for upcoming releases.
        </p>
      </div>
    </div>
  );
};

export default Books;
