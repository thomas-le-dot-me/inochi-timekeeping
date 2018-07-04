const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    fullname: String
});

module.exports = mongoose.model('User', UserSchema);