import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const AppPage = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [emotion, setEmotion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const emotions = [
    { label: 'Heureux', icon: '😊', confidence: 0.95, color: '#22c55e', description: 'Une expression joyeuse et positive' },
    { label: 'Triste', icon: '😢', confidence: 0.85, color: '#3b82f6', description: 'Une expression mélancolique' },
    { label: 'En colère', icon: '😠', confidence: 0.90, color: '#ef4444', description: 'Une expression de frustration' },
    { label: 'Surpris', icon: '😮', confidence: 0.88, color: '#f59e0b', description: 'Une expression d\'étonnement' },
    { label: 'Fatigué', icon: '😴', confidence: 0.82, color: '#6b7280', description: 'Une expression de lassitude' },
    { label: 'Concentré', icon: '🤔', confidence: 0.87, color: '#8b5cf6', description: 'Une expression de réflexion' },
    { label: 'Excité', icon: '🤩', confidence: 0.93, color: '#ec4899', description: 'Une expression d\'enthousiasme' },
    { label: 'Calme', icon: '😌', confidence: 0.91, color: '#10b981', description: 'Une expression sereine' }
  ];

  const getRandomEmotion = () => {
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    return {
      ...randomEmotion,
      timestamp: new Date().toISOString()
    };
  };

  const startCamera = async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      streamRef.current = stream;
      setIsCameraActive(true);
      setEmotion(getRandomEmotion());
      
    } catch (error) {
      console.error('Erreur lors de l\'accès à la caméra:', error);
      alert('Impossible d\'accéder à la caméra. Veuillez vérifier vos permissions.');
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setIsCameraActive(false);
      setEmotion(null);
    }
  };

  const analyzeEmotion = () => {
    setEmotion(getRandomEmotion());
    setShowDetails(false);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="app-container">
     
      <main className="app-main">
        <div className="camera-section">
          <div className="video-container">
            {isCameraActive ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="camera-feed"
              />
            ) : (
              <div className="camera-placeholder">
                <span className="camera-icon">📸</span>
                <p>Cliquez sur "Démarrer la caméra" pour commencer</p>
              </div>
            )}
          </div>

          <div className="controls">
            <button
              onClick={analyzeEmotion}
              className="btn btn-primary"
            >
              Analyser l'émotion
            </button>
          </div>
        </div>

        <div className="results-section">
          <h2>Résultats de l'analyse</h2>
          {emotion ? (
            <div className="emotion-result" style={{ borderColor: emotion.color }}>
              <div className="emotion-header">
                <div className="emotion-icon-container" style={{ backgroundColor: `${emotion.color}20` }}>
                  <span className="emotion-icon">{emotion.icon}</span>
                </div>
                <div className="emotion-title">
                  <h3>{emotion.label}</h3>
                  <p className="emotion-description">{emotion.description}</p>
                </div>
              </div>
              
              <div className="emotion-stats">
                <div className="stat-item">
                  <span className="stat-label">Confiance</span>
                  <div className="confidence-bar">
                    <div 
                      className="confidence-fill"
                      style={{ 
                        width: `${emotion.confidence * 100}%`,
                        backgroundColor: emotion.color
                      }}
                    ></div>
                  </div>
                  <span className="stat-value">{(emotion.confidence * 100).toFixed(1)}%</span>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">Timestamp</span>
                  <span className="stat-value">{new Date(emotion.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>

              <button 
                className="btn-details"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Masquer les détails' : 'Voir les détails'}
              </button>

              {showDetails && (
                <div className="emotion-details">
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">État émotionnel</span>
                      <span className="detail-value">{emotion.label}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Niveau de confiance</span>
                      <span className="detail-value">{(emotion.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Heure d'analyse</span>
                      <span className="detail-value">{new Date(emotion.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Description</span>
                      <span className="detail-value">{emotion.description}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="no-results">
              <div className="empty-state">
                <span className="empty-icon">📊</span>
                <p>Aucune analyse effectuée pour le moment</p>
                <p className="empty-subtitle">Démarrez la caméra et cliquez sur "Analyser l'émotion" pour commencer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AppPage; 