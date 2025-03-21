const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Servir les images

// Importer les routes
const emotionRoutes = require("./routes/emotionRoutes");
const presenceRoutes = require("./routes/presenceRoutes");

app.use("/api/emotions", emotionRoutes);
app.use("/api/presence", presenceRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));
