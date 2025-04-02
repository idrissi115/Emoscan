import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo.png"
import './Navbar.css';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté (à adapter selon votre logique d'authentification)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="EmoAbs Logo" className="logo-image" />
          <span className="logo-text">AbsEmo</span>
        </Link>

        <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/utilisation' ? 'active' : ''}`}>
            <Link to="/utilisation" className="nav-link" onClick={() => setMenuOpen(false)}>
              Guide d'utilisation
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              À propos
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="dashboard-btn">
                Dashboard
              </Link>
              <button 
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem('token');
                  setIsLoggedIn(false);
                }}
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link to="/connexion" className="login-btn">
                Connexion
              </Link>
              <Link to="/inscription" className="signup-btn">
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;