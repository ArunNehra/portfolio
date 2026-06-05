import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-content container">
        <div className="logo">
          <a href="#">AN</a>
        </div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#cover-letter">Cover Letter</a>
          <a href="#contact" className="btn-primary hire-me-btn">Hire Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
