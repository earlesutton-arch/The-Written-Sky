import React from 'react';
import '../pages/Pages.css';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Celestial Ink',
      year: '2024',
      description: 'A journey through the cosmos told in verse, where each poem is a constellation of emotions.',
      pages: '156 pages',
    },
    {
      id: 2,
      title: 'Horizons Unwritten',
      year: '2023',
      description: 'Exploring the liminal spaces between earth and sky, reality and dreams.',
      pages: '203 pages',
    },
    {
      id: 3,
      title: 'The Midnight Collection',
      year: '2022',
      description: 'Poetry born in the darkest hours, when truth speaks loudest.',
      pages: '184 pages',
    },
  ];

  return (
    <div className="page-container" data-testid="books-page">
      <div className="page-header">
        <h1 className="page-title" data-testid="books-title">Books</h1>
        <p className="page-subtitle">Published collections of poetry</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card" data-testid={`book-card-${book.id}`}>
            <div className="book-cover" data-testid={`book-cover-${book.id}`}>
              <div className="book-cover-inner">
                <h3>{book.title}</h3>
              </div>
            </div>
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-year">{book.year}</p>
              <p className="book-pages">{book.pages}</p>
              <p className="book-description">{book.description}</p>
              <button className="book-btn" data-testid={`order-book-${book.id}`}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
