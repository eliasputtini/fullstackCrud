const mongoose = require("mongoose");

const levelSchema = new mongoose.Schema({
  level: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Level", levelSchema);
