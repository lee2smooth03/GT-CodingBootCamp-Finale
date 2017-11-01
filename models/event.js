const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Planner: { type: String, required: true },
  myEvent: { type: String, required: true },

  Address: { type: String, required: true },
  Scheduled: { type: Number, required: true },

  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;