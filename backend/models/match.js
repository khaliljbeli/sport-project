//import mongoose module
const mongoose = require("mongoose")
//Schema
const matchSchema = mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,
});
//Model Name (collection 'matches' will be created/generated)
const match = mongoose.model("Match", matchSchema);
// Make File Exportable
module.exports = match;