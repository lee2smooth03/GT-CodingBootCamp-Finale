const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  STEAM: { type: String, required: true },
  Theme: { type: String, required: true },

  Submitted: { type: Boolean, required: true },
  Evaluated: { type: Boolean, required: true },
  Approved: { type: Boolean, required: true },
  date: { type: Date, default: Date.now }
});

const Assignment = mongoose.model("Assignment", workSchema);

module.exports = Assignment;
