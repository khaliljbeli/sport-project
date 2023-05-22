//import mongoose module
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
//Schema
const userSchema = mongoose.Schema({
    fName:String,
    lName:String,
    email:{type:String, unique: true},
    password:String,
    role:String,
    status:String,
    tel:Number,
    img:String,
});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
//Model Name (collection 'users' will be created/generated)
const user = mongoose.model("User", userSchema);
// Make File Exportable
module.exports = user;