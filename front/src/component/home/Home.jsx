import React, { useEffect, useRef } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

function Home() {
  const navigate = useNavigate();
  const networkCenterRef = useRef(null);
  
  // Effet pour créer les particules de données animées
  useEffect(() => {
    if (!networkCenterRef.current) return;
    
    const createDataParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'data-particle';
      
      // Position et direction aléatoires
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 20;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      networkCenterRef.current.appendChild(particle);
      
      // Supprimer la particule après l'animation
      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.remove();
        }
      }, 3000);
    };
    
    // Créer des particules périodiquement
    const particleInterval = setInterval(createDataParticle, 300);
    
    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="home dark-theme">
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
                <h1>
                  <span className="headline-primary">AI-Powered</span><br />
                  <span className="headline-accent">Emotion & Absence</span><br />
                  <span className="headline-primary">Detection</span>
                </h1>
                <p className="hero-subtitle">
                  Transform data into actionable insights with our sophisticated AI
                  platform for precise emotion analysis and absence detection.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => navigate('/app')} className="btn btn-primary">
                    Explore Emotions <span className="icon">→</span>
                  </button>
                  <button onClick={() => navigate('/absence')} className="btn btn-secondary">
                    Track Absence <span className="icon">→</span>
                  </button>
                </div>
                <div className="hero-stats">
                  <div className="stat-box">
                    <span className="stat-number">99.8%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">50K+</span>
                    <span className="stat-label">Users</span>
                  </div>
                </div>
              </div>
              <div className="hero-visualization">
                <div className="ai-network">
                  <div className="network-center" ref={networkCenterRef}>
                    <div className="center-icon">
                      <div className="brain-icon">
                        <div className="brain-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <div className="network-nodes">
                    <div className="node node-1">
                      <div className="node-label">Real-time Analysis</div>
                    </div>
                    <div className="node node-2">
                      <div className="node-label">Secure Processing</div>
                    </div>
                    <div className="node node-3">
                      <div className="node-label">Precision Detection</div>
                    </div>
                    <div className="node node-4"></div>
                    <div className="node node-5"></div>
                    <div className="node node-6"></div>
                  </div>
                  <div className="network-lines">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                    <div className="line line-5"></div>
                    <div className="line line-6"></div>
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
              <h2>Notre Mission</h2>
              <p>Transformer l'analyse émotionnelle avec l'IA</p>
            </div>
            
            <div className="about-content">
              <p className="about-description">
                Nous révolutionnons la façon dont les entreprises comprennent et interagissent avec leur audience. 
                Notre technologie d'IA de pointe permet des analyses émotionnelles précises et une gestion efficace des présences.
              </p>
              
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">🤖</div>
                  <h3>IA Avancée</h3>
                  <p>Technologie de pointe pour une analyse précise</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🎯</div>
                  <h3>Précision</h3>
                  <p>Détection fiable avec un taux de succès de 99.8%</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <h3>Temps Réel</h3>
                  <p>Analyse instantanée pour des décisions rapides</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <h3>Sécurité</h3>
                  <p>Protection maximale des données</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Contactez-nous</h2>
              <p>Nous sommes là pour répondre à toutes vos questions</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>AbsEmo@esisa.ma</p>
                </div>
                <div className="contact-item">
                  <h3>Téléphone</h3>
                  <p>+212 612 12 14 41</p>
                </div>
                <div className="contact-item">
                  <h3>Adresse</h3>
                  <p>ESISA, 29bis avenue ibn khatib route dimmouzer</p>
                </div>
              </div>
              <form className="contact-form" onSubmit={(e) => {
                e.preventDefault();
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