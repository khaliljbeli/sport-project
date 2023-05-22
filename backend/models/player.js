//import mongoose module
const mongoose = require("mongoose")
//Schema
const playerSchema = mongoose.Schema({
    name: String,
    position: String,
    age: Number,
    nbr: Number,
    teamId: Number,
});
//Model Name (collection 'players' will be created/generated)
const player = mongoose.model("Player", playerSchema);
// Make File Exportable
module.exports = player;