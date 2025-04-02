import React, { useState, useRef, useEffect } from 'react';
import './AbsencePage.css';

const AbsencePage = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [presence, setPresence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

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
      checkPresence();
      
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
      setPresence(null);
    }
  };

  const checkPresence = () => {
    // Simulation de détection de présence
    const isPresent = Math.random() > 0.5;
    setPresence({
      status: isPresent ? 'present' : 'absent',
      timestamp: new Date().toISOString(),
      confidence: isPresent ? 0.95 : 0.85
    });
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="absence-container">
      <main className="absence-main">
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
              onClick={isCameraActive ? stopCamera : startCamera}
              className={`btn ${isCameraActive ? 'btn-danger' : 'btn-primary'}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="spinner"></span>
              ) : isCameraActive ? (
                'Arrêter la caméra'
              ) : (
                'Démarrer la caméra'
              )}
            </button>
            {isCameraActive && (
              <button
                onClick={checkPresence}
                className="btn btn-primary"
              >
                Vérifier la présence
              </button>
            )}
          </div>
        </div>

        <div className="results-section">
          <h2>État de présence</h2>
          {presence ? (
            <div className={`presence-result ${presence.status}`}>
              <div className="presence-header">
                <div className="presence-icon-container">
                  <span className="presence-icon">
                    {presence.status === 'present' ? '✅' : '❌'}
                  </span>
                </div>
                <div className="presence-title">
                  <h3>{presence.status === 'present' ? 'Présent' : 'Absent'}</h3>
                  <p className="presence-description">
                    {presence.status === 'present' 
                      ? 'La personne est détectée devant la caméra'
                      : 'Aucune personne détectée devant la caméra'}
                  </p>
                </div>
              </div>
              
              <div className="presence-stats">
                <div className="stat-item">
                  <span className="stat-label">Confiance</span>
                  <div className="confidence-bar">
                    <div 
                      className="confidence-fill"
                      style={{ 
                        width: `${presence.confidence * 100}%`,
                        backgroundColor: presence.status === 'present' ? '#22c55e' : '#ef4444'
                      }}
                    ></div>
                  </div>
                  <span className="stat-value">{(presence.confidence * 100).toFixed(1)}%</span>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">Timestamp</span>
                  <span className="stat-value">
                    {new Date(presence.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-results">
              <div className="empty-state">
                <span className="empty-icon">👥</span>
                <p>Aucune vérification effectuée</p>
                <p className="empty-subtitle">
                  Démarrez la caméra et cliquez sur "Vérifier la présence" pour commencer
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AbsencePage; 