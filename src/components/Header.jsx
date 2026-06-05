import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header glass-panel">
      <div className="header-content container">
        <div className="logo">
          <a href="#">AN</a>
        </div>
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-expanded={isOpen}
          aria-label="toggle navigation"
        >
          <span className="hamburger"></span>
        </button>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#cover-letter" onClick={() => setIsOpen(false)}>Cover Letter</a>
          <a href="#contact" className="btn-primary hire-me-btn" onClick={() => setIsOpen(false)}>Hire Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
