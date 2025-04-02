import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Section Héro */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Détection d'émotions et d'absence en temps réel</h1>
          <p className="hero-subtitle">
            EmoAbs transforme la gestion des ressources humaines et l'engagement des élèves grâce à une technologie avancée de reconnaissance faciale et d'analyse des émotions.
          </p>
          <div className="hero-buttons">
            <Link to="/inscription" className="btn btn-primary">
              Commencer gratuitement
            </Link>
            <Link to="/utilisation" className="btn btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="placeholder-text">EmoAbs</div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="features-section">
        <h2 className="section-title">Caractéristiques principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">😊</div>
            </div>
            <h3>Détection d'émotions</h3>
            <p>
              Analyse des expressions faciales pour identifier les émotions comme la joie, la tristesse, la colère, la surprise et plus encore.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">✓</div>
            </div>
            <h3>Suivi de présence</h3>
            <p>
              Détection automatique des présences et absences sans besoin d'appel manuel ou de badges.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <div className="icon-placeholder">📊</div>
            </div>
            <h3>Analyse en temps réel</h3>
            <p>
              Traitement instantané des données avec tableaux de bord interactifs et alertes personnalisables.
            </p>
          </div>
        </div>
      </section>

      {/* Le reste du contenu reste identique */}
    </div>
  );
};

export default Home;