import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue sur EmoAbsence</h1>
          <p className="hero-subtitle">
            L'application moderne pour gérer les absences et mesurer l'humeur de vos collaborateurs en temps réel.
          </p>
          <button className="cta-button">Démarrer maintenant</button>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Fonctionnalités principales</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3 className="feature-title">Gestion des absences</h3>
            <p>Suivez les absences de vos employés, visualisez les tendances et améliorez la gestion du personnel.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Suivi des émotions</h3>
            <p>Analysez les émotions des employés pour améliorer le bien-être au travail et l'engagement.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Tableau de bord intuitif</h3>
            <p>Consultez les statistiques et les rapports en temps réel grâce à un tableau de bord intuitif et dynamique.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Prêt à transformer votre gestion des absences et du bien-être ?</h2>
        <button className="cta-button">Essayez gratuitement</button>
      </section>
    </div>
  );
};

export default Home;
