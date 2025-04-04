const express = require('express');
const router = express.Router();
const { detectEmotion } = require('../controllers/detectionController');

router.post('/emotion', detectEmotion);

module.exports = router;
