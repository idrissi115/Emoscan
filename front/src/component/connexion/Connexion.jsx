import React, { useState } from 'react';
import './Connexion.css';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.png'; // Assurez-vous que le chemin est correct

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
        <div className="auth-logo">
          <Link to="/">
            <img src={logo} alt="Emoscan Logo" className="logo-image" />
            <span className="logo-text">Emoscan</span>
          </Link>
        </div>
        
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
              <div className="name-fields">
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
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
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
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
              </div>
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
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Mot de passe</label>
                {isLogin && (
                  <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                )}
              </div>
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
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Se souvenir de moi</span>
                </label>
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
            
            {isLogin && (
              <div className="separator">
                <span>ou connectez-vous avec</span>
              </div>
            )}
            
            {isLogin && (
              <div className="social-login">
                <button type="button" className="social-button google">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                  <span>Google</span>
                </button>
                <button type="button" className="social-button microsoft">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                  </svg>
                  <span>Microsoft</span>
                </button>
              </div>
            )}
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
          <p>© {new Date().getFullYear()} Emoscan • <Link to="/conditions">Conditions d'utilisation</Link> • <Link to="/confidentialite">Politique de confidentialité</Link></p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;