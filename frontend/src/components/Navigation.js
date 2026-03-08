import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/poems', label: 'Poems' },
    { path: '/books', label: 'Books' },
    { path: '/about', label: 'About the Poet' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation" data-testid="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" data-testid="nav-logo">
          The Written Sky
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} data-testid="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
