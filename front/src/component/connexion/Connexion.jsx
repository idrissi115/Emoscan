import React, { useState } from 'react';
import './Connexion.css';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de la requête d'authentification
    setTimeout(() => {
      setIsLoading(false);
      alert('Authentification réussie');
    }, 2000);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="auth-actions">
            <button type="submit" className="auth-button" disabled={isLoading}>
              {isLoading ? 'Chargement...' : 'Se connecter'}
            </button>
            <a href="#" className="auth-link">Mot de passe oublié ?</a>
          </div>
        </form>
        <div className="auth-footer">
          <p>Pas encore de compte ? <a href="#">Inscrivez-vous</a></p>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
