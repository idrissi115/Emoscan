const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importation des routes
const authRoutes = require('./routes/userRoutes');
const detectionRoutes = require('./routes/detectionRoutes');

// Chargement des variables d'environnement
dotenv.config();

// Création de l'application Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/detect', detectionRoutes);

// Port du serveur
const PORT = process.env.PORT || 8080;

// Connexion à MongoDB (sans options obsolètes)
console.log("📡 Connexion à MongoDB en cours...");
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connexion à MongoDB réussie');
    app.listen(PORT, () => {
      console.log(`✅ Serveur backend lancé sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur lors de la connexion à MongoDB:', err.message);
  });

// Route test (optionnelle)
app.get('/', (req, res) => {
  res.send('🎉 Serveur backend EMOSCAN fonctionne !');
});
