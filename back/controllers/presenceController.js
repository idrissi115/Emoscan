const Attendance = require("../models/Attendance");

// Obtenir la liste des présences
exports.getPresence = async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Ajouter une présence
exports.addPresence = async (req, res) => {
  try {
    const { userId, status } = req.body;

    const newAttendance = new Attendance({ userId, status });
    await newAttendance.save();

    res.status(201).json(newAttendance);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
