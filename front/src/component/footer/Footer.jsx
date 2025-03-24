import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section de gauche - Logo et Informations */}
        <div className="footer-left">
          <a href="/" className="footer-logo">
            MyLogo
          </a>
          <p className="footer-description">
            Votre source pour des solutions modernes et innovantes dans le domaine de la technologie.
          </p>
        </div>

        {/* Section centrale - Liens importants */}
        <div className="footer-center">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Section de droite - Réseaux sociaux */}
        <div className="footer-right">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyCompany. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
