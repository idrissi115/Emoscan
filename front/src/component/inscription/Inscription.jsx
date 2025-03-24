import React, { useState } from 'react';
import './Inscription.css';

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setname] = useState('');
  const [prénom, setprénom] = useState('');

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
        <h2 className="auth-title">Inscription</h2>
        <form onSubmit={handleSubmit}>
        

          <div className="input-group">
            <label htmlFor="Prénom">Prénom</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre Prénom"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Nom</label>
            <input
              type="name"
              id="name"
              placeholder="Entrez votre Nom"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>


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
              {isLoading ? 'Chargement...' : "S'inscrire"}
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Inscription;
