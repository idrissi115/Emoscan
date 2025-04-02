import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../images/logo.png"
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Fermer le menu mobile si on passe en mode desktop
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Fonction pour rediriger l'utilisateur
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/');
            }}
            aria-label="Accueil"
          >
            <img className='logo' src={logo} alt='Emoscan Logo'/>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          <ul>
            <li className={isActive('/home') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/home')}>Accueil</a>
            </li>
            <li className={isActive('/app') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/app')}>Emotions</a>
            </li>
            <li className={isActive('/absence') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/absence')}>Absence</a>
            </li>
            <li className={isActive('/connexion') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/connexion')}>Connexion</a>
            </li>
          
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="mobile-menu-header">
            <img className='mobile-logo' src={logo} alt='Emoscan Logo'/>
            <button 
              className="close-menu"
              onClick={toggleMenu}
              aria-label="Fermer le menu"
            >
              <span>×</span>
            </button>
          </div>
          <ul className="mobile-menu-links">
            <li className={isActive('/home') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/home')}>Accueil</a>
            </li>
            <li className={isActive('/app') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/app')}>Emotions</a>
            </li>
            <li className={isActive('/absence') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/absence')}>Absence</a>
            </li>
            <li className={isActive('/connexion') ? 'active' : ''}>
              <a onClick={() => handleNavigation('/connexion')}>Connexion</a>
            </li>
            <li>
              <button onClick={() => handleNavigation('/')} className="btn-register-mobile">
                Inscription
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
