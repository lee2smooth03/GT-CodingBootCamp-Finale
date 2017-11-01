const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uName: { type: String, required: true },
  pWrod: { type: String, required: true },
  uRole: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
