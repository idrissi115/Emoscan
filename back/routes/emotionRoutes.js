const express = require("express");
const upload = require("../middlewares/upload");
const { getEmotions, addEmotion } = require("../controllers/emotionController");

const router = express.Router();

router.get("/", getEmotions);
router.post("/upload", upload.single("image"), addEmotion);

module.exports = router;
