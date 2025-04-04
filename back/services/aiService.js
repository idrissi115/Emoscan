const axios = require('axios');

const AI_API_URL = 'http://localhost:8000/predict-emotion'; // FastAPI endpoint

async function runEmotionModel(base64Image) {
  const response = await axios.post(AI_API_URL, {
    image: base64Image,
  });
  return response.data;
}

module.exports = runEmotionModel;
