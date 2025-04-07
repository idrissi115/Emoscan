const runEmotionModel = require('../services/aiService');

exports.detectEmotion = async (req, res) => {
  try {
    const { base64Image } = req.body;

    if (!base64Image) {
      return res.status(400).json({ success: false, message: "image" });
    }

    const result = await runEmotionModel(base64Image);
    res.json({ success: true, result });
  } catch (err) {
    console.error('Erreur:', err.message);
    res.status(500).json({ success: false, message: "error de detection " });
  }
};
