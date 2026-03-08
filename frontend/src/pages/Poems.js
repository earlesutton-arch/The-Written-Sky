import React, { useState } from 'react';
import '../pages/Pages.css';

const Poems = () => {
  const [selectedPoem, setSelectedPoem] = useState(null);

  const poems = [
    {
      id: 1,
      title: 'Starlight Whispers',
      excerpt: 'In the quiet hours when darkness breathes...',
      date: '2024',
      fullText: `In the quiet hours when darkness breathes,
Stars whisper secrets the daylight conceals.
Each point of light a story untold,
Written across the heavens in letters of gold.`
    },
    {
      id: 2,
      title: 'Horizon Lines',
      excerpt: 'Where earth meets sky in endless embrace...',
      date: '2024',
      fullText: `Where earth meets sky in endless embrace,
I write my verses across that space.
Each word a bridge between here and there,
Suspended in the evening air.`
    },
    {
      id: 3,
      title: 'Midnight Canvas',
      excerpt: 'The night unfolds its velvet scroll...',
      date: '2023',
      fullText: `The night unfolds its velvet scroll,
Inviting poets to bare their soul.
With ink of starlight, pen of dreams,
I write what moonlight truly means.`
    },
  ];

  return (
    <div className="page-container" data-testid="poems-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="poems-title">Poems</h1>
        <p className="page-subtitle">A collection of celestial verses</p>
      </div>

      <div className="poems-grid">
        {poems.map((poem) => (
          <div
            key={poem.id}
            className="poem-card"
            onClick={() => setSelectedPoem(poem)}
            data-testid={`poem-card-${poem.id}`}
          >
            <h3 className="poem-title">{poem.title}</h3>
            <p className="poem-date">{poem.date}</p>
            <p className="poem-excerpt">{poem.excerpt}</p>
            <button className="read-more-btn" data-testid={`read-poem-${poem.id}`}>
              Read Full Poem
            </button>
          </div>
        ))}
      </div>

      {selectedPoem && (
        <div
          className="poem-modal"
          onClick={() => setSelectedPoem(null)}
          data-testid="poem-modal"
        >
          <div className="poem-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setSelectedPoem(null)}
              data-testid="close-modal"
            >
              ✕
            </button>
            <h2 className="modal-poem-title">{selectedPoem.title}</h2>
            <p className="modal-poem-date">{selectedPoem.date}</p>
            <div className="modal-poem-text">
              {selectedPoem.fullText.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Poems;
