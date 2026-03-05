import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import { navLinks } from '../../constants/portfolioData';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <button
          className="menu-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="nav" aria-label="Main navigation">
          <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
