import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';
import EmotionsPage from './EmotionsPage';
import AbsencesPage from './AbsencesPage';
import ReportsPage from './ReportsPage';
import SettingsPage from './SettingsPage';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: '📊' },
    { id: 'emotions', label: 'Émotions', icon: '😊' },
    { id: 'absences', label: 'Absences', icon: '👥' },
    { id: 'reports', label: 'Rapports', icon: '📈' },
    { id: 'settings', label: 'Paramètres', icon: '⚙️' },
  ];

  const handleNavigation = (componentId) => {
    setActiveComponent(componentId);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const DashboardContent = () => (
    <div className="admin-content">
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <div className="card-content">
            <h3>Total Utilisateurs</h3>
            <p className="card-value">1,234</p>
            <span className="card-trend positive">+12%</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">😊</div>
          <div className="card-content">
            <h3>Analyses d'Émotions</h3>
            <p className="card-value">8,567</p>
            <span className="card-trend positive">+8%</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">👥</div>
          <div className="card-content">
            <h3>Absences Détectées</h3>
            <p className="card-value">123</p>
            <span className="card-trend negative">-3%</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📈</div>
          <div className="card-content">
            <h3>Taux de Précision</h3>
            <p className="card-value">99.9%</p>
            <span className="card-trend positive">+0.1%</span>
          </div>
        </div>
      </div>

      <div className="activity-section">
        <h3>Activité Récente</h3>
        <div className="activity-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="activity-item">
              <div className="activity-icon">📝</div>
              <div className="activity-content">
                <p>Nouvelle analyse d'émotion effectuée</p>
                <span className="activity-time">Il y a {item} minutes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            
          </div>
          <button 
            className="toggle-sidebar"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeComponent === item.id ? 'active' : ''}`}
              onClick={() => handleNavigation(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {isSidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            {isSidebarOpen && (
              <div className="user-details">
                <span className="user-name">Admin</span>
                <span className="user-role">Administrateur</span>
              </div>
            )}
          </div>
          <button 
            className="logout-button"
            onClick={() => navigate('/connexion')}
          >
            <span className="nav-icon">🚪</span>
            {isSidebarOpen && <span className="nav-label">Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button 
              className="mobile-menu-button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
            <h2>{menuItems.find(item => item.id === activeComponent)?.label}</h2>
          </div>
          <div className="header-right">
            <div className="header-actions">
              <button className="notification-button">
                🔔
                <span className="notification-badge">3</span>
              </button>
              <button className="profile-button">
                <div className="profile-avatar">👤</div>
                <span className="profile-name">Admin</span>
              </button>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <div style={{ display: activeComponent === 'dashboard' ? 'block' : 'none' }}>
            <DashboardContent />
          </div>
          <div style={{ display: activeComponent === 'emotions' ? 'block' : 'none' }}>
            <EmotionsPage />
          </div>
          <div style={{ display: activeComponent === 'absences' ? 'block' : 'none' }}>
            <AbsencesPage />
          </div>
          <div style={{ display: activeComponent === 'reports' ? 'block' : 'none' }}>
            <ReportsPage />
          </div>
          <div style={{ display: activeComponent === 'settings' ? 'block' : 'none' }}>
            <SettingsPage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 