import React, { useState } from 'react';
import './Connexion.css';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulation de la requête d'authentification
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (isLogin) {
        navigate('/admin');
      } else {
        // Redirection après inscription réussie
        setIsLogin(true);
        setFormData({
          email: '',
          password: '',
          firstName: '',
          lastName: ''
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-header">
          <h1>Bienvenue sur Emoscan</h1>
          <p>{isLogin ? 'Connectez-vous pour accéder à votre espace personnel' : 'Créez votre compte pour commencer'}</p>
        </div>
        
        <div className="auth-card">
          <div className="auth-card-header">
            <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
            <p>{isLogin ? 'Entrez vos identifiants pour continuer' : 'Remplissez le formulaire pour créer votre compte'}</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Nom</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span className="input-icon">✉️</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
              </div>
            )}

            <button 
              type="submit" 
              className={`auth-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  {isLogin ? 'Connexion en cours...' : 'Inscription en cours...'}
                </>
              ) : (
                isLogin ? 'Se connecter' : "S'inscrire"
              )}
            </button>
          </form>

          <div className="auth-card-footer">
            <p>{isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}</p>
            <button 
              className="auth-link-button"
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: ''
                });
              }}
            >
              {isLogin ? "Créer un compte" : "Se connecter"}
            </button>
          </div>
        </div>

        <div className="auth-footer">
          <p>En continuant, vous acceptez nos <a href="#">Conditions d'utilisation</a> et notre <a href="#">Politique de confidentialité</a></p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
