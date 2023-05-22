//import mongoose module
const mongoose = require("mongoose")
//Schema
const teamSchema = mongoose.Schema({
    name: String,
    owner: String,
    foundation: Number,
    studiumId: Number,
});
//Model Name (collection 'teams' will be created/generated)
const team = mongoose.model("Team", teamSchema);
// Make File Exportable
module.exports = team;