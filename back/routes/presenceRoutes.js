const express = require("express");
const { getPresence, addPresence } = require("../controllers/presenceController");

const router = express.Router();

router.get("/", getPresence);
router.post("/", addPresence);

module.exports = router;
