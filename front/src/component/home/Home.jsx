import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import imagesection from '../../images/imagesection.png';
import logo from '../../images/logo.png'; // Assurez-vous que le chemin est correct

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <div className="container">
          <div className="logo">
          <img src={logo} alt="AbsEmo Logo" className="logo-image" />
            <h1>AbsEmo</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button onClick={() => navigate('/connexion')} className="btn-login">Connexion</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h2 style={{color:"#1d4ed8"}}>Détection d'Émotions et d'Absences en Temps Réel</h2>
                <p className="hero-subtitle">Transformez vos données en insights avec notre plateforme d'analyse avancée</p>
                <div className="hero-buttons">
                  <button onClick={() => navigate('/app')} className="btn btn-primary yasmine">Emotions</button>
                  <button onClick={() => navigate('/absence')} className="btn btn-zineb">Absence</button>
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Précision</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>
              <div className="hero-animation">
                <div className="ai-head-container">
                  <img 
                    src={imagesection} 
                    alt="AI Head" 
                    className="ai-head-image"
                  />
                  <div className="ai-head-overlay">
                    <div className="ai-head-glow"></div>
                    <div className="ai-head-particles"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Fonctionnalités Avancées</h2>
              <p>Découvrez comment notre plateforme peut transformer votre entreprise</p>
            </div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Détection d'Absence</h3>
                <p>Surveillez les présences et absences avec une précision inégalée grâce à notre IA de pointe.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">😊</div>
                <h3>Analyse d'Émotions</h3>
                <p>Analysez les émotions en temps réel pour des insights actionables sur l'engagement.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Rapports Détaillés</h3>
                <p>Générez des rapports personnalisés avec des visualisations interactives.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Sécurité Maximale</h3>
                <p>Protection des données de niveau entreprise avec chiffrement de bout en bout.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">À propos</span>
              <h2>Notre Mission</h2>
              <p className="section-subtitle">Transformer l'analyse émotionnelle avec l'IA</p>
            </div>
            
            <div className="about-grid">
              <div className="about-content">
                <div className="about-text">
                  <p className="about-description" style={{textAlign:"center", color:"gray", fontFamily:"Arial"}}>
                    Nous révolutionnons la façon dont les entreprises comprennent et interagissent avec leur audience. Notre technologie d'IA de pointe permet des analyses émotionnelles précises et une gestion efficace des présences.
                  </p>
                  
                  <div className="features-grid">
                    <div className="feature-card">
                      <div className="feature-icon">
                        <span className="icon">🤖</span>
                      </div>
                      <h3>IA Avancée</h3>
                      <p>Technologie de pointe pour une analyse précise des émotions</p>
                    </div>
                    
                    <div className="feature-card">
                      <div className="feature-icon">
                        <span className="icon">🎯</span>
                      </div>
                      <h3>Précision</h3>
                      <p>Détection fiable avec un taux de succès de 99.9%</p>
                    </div>
                    
                    <div className="feature-card">
                      <div className="feature-icon">
                        <span className="icon">⚡</span>
                      </div>
                      <h3>Temps Réel</h3>
                      <p>Analyse instantanée pour des décisions rapides</p>
                    </div>
                    
                    <div className="feature-card">
                      <div className="feature-icon">
                        <span className="icon">🔒</span>
                      </div>
                      <h3>Sécurité</h3>
                      <p>Protection maximale des données</p>
                    </div>
                  </div>

                  <div className="stats-container">
                    <div className="stat-card">
                      <span className="stat-number">50k+</span>
                      <span className="stat-label">Utilisateurs Actifs</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">24/7</span>
                      <span className="stat-label">Support Disponible</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-number">99.9%</span>
                      <span className="stat-label">Précision</span>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2 style={{color:"#3b82f6"}}>Contactez-nous</h2>
              <p>Nous sommes là pour répondre à toutes vos questions</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>emoscan@esisa.ma</p>
                </div>
                <div className="contact-item">
                  <h3>Téléphone</h3>
                  <p>+212 6XX-XXXXXX</p>
                </div>
                <div className="contact-item">
                  <h3>Adresse</h3>
                  <p>ESISA, 29bis avenue ibn khatib route dimmouzer</p>
                </div>
              </div>
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
                // Ajoutez ici la logique d'envoi du formulaire
                alert('Message envoyé avec succès !');
                e.target.reset();
              }}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Votre nom"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="votre@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Votre message..."
                    autoComplete="off"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                  <span className="btn-shine"></span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

   
    </div>
  );
}

export default Home;