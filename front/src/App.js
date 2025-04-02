import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import des composants
import Navbar from './component/navbar/Navbar.jsx';
import Footer from './component/footer/Footer.jsx';
import Home from './component/home/Home.jsx';
import AboutUs from './component/aboutUs/AboutUs.jsx';
import Connexion from './component/connexion/Connexion.jsx';
import Inscription from './component/inscription/Inscription.jsx';
import ContactUs from './component/contactUs/ContactUs.jsx';
import Utilisation from './component/utilisation/Utilisation.jsx';
 // Vous devrez créer ce composant

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/utilisation" element={<Utilisation />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;