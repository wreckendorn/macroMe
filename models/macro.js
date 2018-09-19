const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const macroSchema = new Schema({
    food: { type: String, required: true },
    macro: { type: String, required: true },
    foodGroup: { type: String, required: true },
    ndbid: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const Macro = mongoose.model("Macro", macroSchema);
  
  module.exports = Macro;
  