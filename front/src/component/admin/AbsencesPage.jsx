import React from 'react';

const AbsencesPage = () => {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Gestion des Absences</h2>
      </div>
      <div className="page-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>Absences Détectées</h3>
              <p className="stat-value">123</p>
              <span className="stat-trend negative">-3%</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <h3>Présence Aujourd'hui</h3>
              <p className="stat-value">95%</p>
              <span className="stat-trend positive">+2%</span>
            </div>
          </div>
        </div>

        <div className="data-table">
          <div className="table-header">
            <h3>Journal des Absences</h3>
            <div className="table-actions">
              <button className="btn-filter">Filtrer</button>
              <button className="btn-export">Exporter</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Étudiant</th>
                <th>Statut</th>
                <th>Justification</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td>2024-03-{item}</td>
                  <td>Étudiant {item}</td>
                  <td>Absent</td>
                  <td>Non justifié</td>
                  <td>
                    <button className="btn-action">Justifier</button>
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

export default AbsencesPage; 