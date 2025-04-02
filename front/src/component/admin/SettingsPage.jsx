import React from 'react';

const SettingsPage = () => {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Paramètres</h2>
      </div>
      <div className="page-content">
        <div className="settings-grid">
          <div className="settings-card">
            <h3>Paramètres Généraux</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>Nom de l'école</label>
                <input type="text" defaultValue="ESISA" />
              </div>
              <div className="form-group">
                <label>Email de contact</label>
                <input type="email" defaultValue="emoscan@esisa.ma" />
              </div>
              <div className="form-group">
                <label>Langue</label>
                <select>
                  <option>Français</option>
                  <option>English</option>
                  <option>العربية</option>
                </select>
              </div>
            </div>
          </div>

          <div className="settings-card">
            <h3>Paramètres de Détection</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>Seuil de confiance</label>
                <input type="range" min="0" max="100" defaultValue="80" />
                <span className="range-value">80%</span>
              </div>
              <div className="form-group">
                <label>Intervalle de détection</label>
                <select>
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mode de détection</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="detection" defaultChecked />
                    Continu
                  </label>
                  <label>
                    <input type="radio" name="detection" />
                    Manuel
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-card">
            <h3>Notifications</h3>
            <div className="settings-form">
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  Notifications par email
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  Notifications push
                </label>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Rapports automatiques
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn-save">Enregistrer les modifications</button>
          <button className="btn-reset">Réinitialiser</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 