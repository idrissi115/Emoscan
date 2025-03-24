import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants de React Router
import Connexion from './component/connexion/Connexion';
import Footer from './component/footer/Footer';
import Inscription from './component/inscription/Inscription';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Inscription />} />
          <Route path="/home" element={<Home />} />

          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
