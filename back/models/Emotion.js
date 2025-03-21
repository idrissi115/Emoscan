const mongoose = require("mongoose");

const EmotionSchema = new mongoose.Schema({
  image: { type: String, required: true },
  emotion: { type: String, required: true },
  confidence: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Emotion", EmotionSchema);
