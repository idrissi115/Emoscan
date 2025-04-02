import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section principale */}
        <div className="footer-main">
          {/* Colonne de gauche - Logo et Description */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="logo-text">Emoscan</span>
              <div className="logo-glow"></div>
            </a>
            <p className="footer-description">
              Votre partenaire pour l'analyse émotionnelle et la gestion des présences en temps réel.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                <span className="social-tooltip">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                <span className="social-tooltip">GitHub</span>
              </a>
            </div>
          </div>

          {/* Colonnes de liens */}
          <div className="footer-links">
            <div className="footer-column">
              <h3 className='footertitle'>Produit</h3>
              <ul>
                <li><a href="#features" className="footer-link ">Fonctionnalités</a></li>
                <li><a href="#pricing" className="footer-link ">Tarifs</a></li>
                <li><a href="#security" className="footer-link ">Sécurité</a></li>
                <li><a href="#roadmap" className="footer-link ">Roadmap</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className='footertitle'>Entreprise</h3>
              <ul>
                <li><a href="#about" className="footer-link">À propos</a></li>
                <li><a href="#careers" className="footer-link">Carrières</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
                <li><a href="#press" className="footer-link">Presse</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className='footertitle'>Ressources</h3>
              <ul>
                <li><a href="#documentation" className="footer-link">Documentation</a></li>
                <li><a href="#api" className="footer-link">API</a></li>
                <li><a href="#support" className="footer-link">Support</a></li>
                <li><a href="#status" className="footer-link">Status</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className='footertitle'>Légal</h3>
              <ul>
                <li><a href="#privacy" className="footer-link">Confidentialité</a></li>
                <li><a href="#terms" className="footer-link">Conditions</a></li>
                <li><a href="#cookies" className="footer-link">Cookies</a></li>
                <li><a href="#compliance" className="footer-link">Conformité</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section de bas de page */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Emoscan. Tous droits réservés.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-link">Confidentialité</a>
              <a href="#terms" className="footer-link">Conditions</a>
              <a href="#cookies" className="footer-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
