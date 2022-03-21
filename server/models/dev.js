const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  nivel: { type: mongoose.Schema.Types.ObjectId, ref: "Level" },
  //   sexo: {
  //     required: true,
  //     type: String,
  //   },
  //   datanascimento: {
  //     required: true,
  //     type: Date,
  //   },
  idade: {
    required: true,
    type: Number,
  },
  hobby: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
