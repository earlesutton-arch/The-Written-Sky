import React, { useEffect, useState } from 'react';
import '../LoadingPage.css';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 2 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-page" data-testid="loading-page">
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="loading-content">
        <h1 className="site-title" data-testid="site-title">
          The Written Sky
        </h1>
        <p className="site-subtitle" data-testid="site-subtitle">
          Lines written across the horizon
        </p>

        <div className="loader-container">
          <div className="spinner" data-testid="loading-spinner"></div>
        </div>

        <div className="progress-text" data-testid="progress-text">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
