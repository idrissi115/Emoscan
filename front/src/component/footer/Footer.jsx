import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section de gauche - Logo et Informations */}
        <div className="footer-left">
          <a href="/" className="footer-logo">
            AbsEmo
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
          <ul className="social-media">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
          
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AbsEmo. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
