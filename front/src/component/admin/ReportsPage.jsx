import React from 'react';

const ReportsPage = () => {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Rapports et Statistiques</h2>
      </div>
      <div className="page-content">
        <div className="reports-grid">
          <div className="report-card">
            <div className="report-header">
              <h3>Rapport Mensuel</h3>
              <button className="btn-download">📥</button>
            </div>
            <div className="report-content">
              <div className="report-chart">
                <div className="chart-placeholder">📈</div>
              </div>
              <div className="report-stats">
                <div className="stat-item">
                  <span className="stat-label">Total Analyses</span>
                  <span className="stat-value">1,234</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Taux de Précision</span>
                  <span className="stat-value">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="report-card">
            <div className="report-header">
              <h3>Rapport des Absences</h3>
              <button className="btn-download">📥</button>
            </div>
            <div className="report-content">
              <div className="report-chart">
                <div className="chart-placeholder">📊</div>
              </div>
              <div className="report-stats">
                <div className="stat-item">
                  <span className="stat-label">Absences Total</span>
                  <span className="stat-value">123</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Taux de Présence</span>
                  <span className="stat-value">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="report-filters">
          <div className="filter-group">
            <label>Période</label>
            <select>
              <option>Ce mois</option>
              <option>3 derniers mois</option>
              <option>6 derniers mois</option>
              <option>Cette année</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Type de rapport</label>
            <select>
              <option>Émotions</option>
              <option>Absences</option>
              <option>Performance</option>
            </select>
          </div>
          <button className="btn-generate">Générer le rapport</button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage; 