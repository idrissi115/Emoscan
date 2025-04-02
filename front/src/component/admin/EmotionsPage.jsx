import React from 'react';

const EmotionsPage = () => {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Gestion des Émotions</h2>
      </div>
      <div className="page-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">😊</div>
            <div className="stat-content">
              <h3>Émotions Détectées</h3>
              <p className="stat-value">8,567</p>
              <span className="stat-trend positive">+8%</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>Précision Moyenne</h3>
              <p className="stat-value">99.9%</p>
              <span className="stat-trend positive">+0.1%</span>
            </div>
          </div>
        </div>

        <div className="data-table">
          <div className="table-header">
            <h3>Historique des Analyses</h3>
            <div className="table-actions">
              <button className="btn-filter">Filtrer</button>
              <button className="btn-export">Exporter</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Utilisateur</th>
                <th>Émotion</th>
                <th>Confiance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td>2024-03-{item}</td>
                  <td>Utilisateur {item}</td>
                  <td>😊</td>
                  <td>98%</td>
                  <td>
                    <button className="btn-action">Voir</button>
                    <button className="btn-action">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmotionsPage; 