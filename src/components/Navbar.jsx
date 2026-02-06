import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Nicholas Tristan</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Nicholas Tristan</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                Contacts
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
