import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants de React Router
import Connexion from './component/connexion/Connexion';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import AppPage from './component/app/App';
import AbsencePage from './component/absence/AbsencePage';  
import AdminDashboard from './component/admin/AdminDashboard';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="/app" element={<AppPage />} /> {/* Correction ici */}
          <Route path="/absence" element={<AbsencePage />} />
          <Route path="/admin" element={< AdminDashboard/>} />


          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
