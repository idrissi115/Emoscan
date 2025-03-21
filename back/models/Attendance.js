const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Present", "Absent"], required: true }
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
