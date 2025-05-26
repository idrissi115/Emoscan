import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Connexion.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState(''); // 'left' or 'right'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      if (isLogin) {
        navigate('/admin');
      } else {
        setIsLogin(true);
        setFormData({ email: '', password: '', firstName: '', lastName: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Gérer la transition avec slide horizontal
  const toggleAuthMode = (toLogin) => {
    if (animating) return;

    setAnimating(true);
    setSlideDirection(toLogin ? 'right' : 'left');

    setTimeout(() => {
      setIsLogin(toLogin);
      setShowPassword(false);
      setFormData({ email: '', password: '', firstName: '', lastName: '' });
      setAnimating(false);
      setSlideDirection('');
    }, 350); // durée de l’animation CSS
  };

  return (
    <main className="auth-page">
      <section className="auth-container">
        <header className="auth-header">
          <h1>{isLogin ? 'Bon retour parmi nous!' : 'Créez votre compte Emoscan'}</h1>
          <p>{isLogin ? 'Connectez-vous pour accéder à votre espace personnel' : 'Rejoignez-nous pour découvrir toutes nos fonctionnalités'}</p>
        </header>

        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => { if (!isLogin) toggleAuthMode(true); }}
              disabled={animating}
            >
              Connexion
            </button>
            <button
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => { if (isLogin) toggleAuthMode(false); }}
              disabled={animating}
            >
              Inscription
            </button>
          </div>

          <div className="form-slider-container">
            {/* Formulaire Connexion */}
            <form
              onSubmit={handleSubmit}
              className={`auth-form form-slide ${isLogin ? 'active' : ''} ${slideDirection === 'left' ? 'slide-out-left' : ''} ${slideDirection === 'right' ? 'slide-out-right' : ''}`}
              noValidate
            >
              <label className="form-label">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </label>

              <label className="form-label password-label">
                <div className="password-header">
                  <span>Mot de passe</span>
                  <Link to="/reset-password" className="forgot-password">Mot de passe oublié ?</Link>
                </div>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </label>

              <label className="remember-me">
                <input type="checkbox" />
                Se souvenir de moi
              </label>

              <button
                type="submit"
                className="auth-button"
                disabled={isLoading || animating}
              >
                {isLoading ? 'Connexion en cours...' : 'Se connecter'}
              </button>
            </form>

            {/* Formulaire Inscription */}
            <form
              onSubmit={handleSubmit}
              className={`auth-form form-slide ${!isLogin ? 'active' : ''} ${slideDirection === 'left' ? 'slide-in-left' : ''} ${slideDirection === 'right' ? 'slide-in-right' : ''}`}
              noValidate
            >
              <div className="name-fields">
                <label className="form-label">
                  Prénom
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Votre prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Nom
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Votre nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </label>
              </div>

              <label className="form-label">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="exemple@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </label>

              <label className="form-label password-label">
                <div className="password-header">
                  <span>Mot de passe</span>
                </div>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </label>

              <p className="password-hint">Le mot de passe doit contenir au moins 8 caractères</p>

              <button
                type="submit"
                className="auth-button"
                disabled={isLoading || animating}
              >
                {isLoading ? 'Inscription en cours...' : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>

        <footer className="auth-footer">
          <p>© {new Date().getFullYear()} Emoscan • <Link to="/conditions">Conditions d'utilisation</Link> • <Link to="/confidentialite">Politique de confidentialité</Link></p>
        </footer>
      </section>
    </main>
  );
};

export default AuthPage;
