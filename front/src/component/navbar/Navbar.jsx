import React, { useState } from 'react';
import './Navbar.css';
import logo from "../../images/logo.png"
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate

const Navbar = () => {

  const navigate = useNavigate(); // Définition de navigate

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


   // Fonction pour rediriger l'utilisateur
   const handleNavigation = (path) => {
    navigate(path); // Utilisation de navigate pour la redirection
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
            <li onClick={() => handleNavigation('/home')}>Accueil</li>
            <li onClick={() => handleNavigation('/connexion')}>Connexion</li>
            <li onClick={() => handleNavigation('/')}>Inscription</li>
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
