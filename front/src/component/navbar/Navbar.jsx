import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img className='logo' src={logo} alt=''/>
          </a>
        </div>

        {/* Menu Links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Burger Icon for mobile */}
        <div className="navbar-burger" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
