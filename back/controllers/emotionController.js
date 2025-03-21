const Emotion = require("../models/Emotion");

// Obtenir toutes les émotions
exports.getEmotions = async (req, res) => {
  try {
    const emotions = await Emotion.find();
    res.status(200).json(emotions);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Ajouter une émotion avec une image
exports.addEmotion = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Aucune image fournie !" });
    }

    const { emotion, confidence } = req.body;

    const newEmotion = new Emotion({
      image: req.file.path, 
      emotion,
      confidence
    });

    await newEmotion.save();
    res.status(201).json(newEmotion);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
};
