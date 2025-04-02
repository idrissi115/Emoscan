import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import AuthPage from './component/auth/AuthPage';
import AppPage from './component/app/App';
import AbsencePage from './component/absence/AbsencePage';
import AdminDashboard from './component/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<AuthPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/absence" element={<AbsencePage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App; 