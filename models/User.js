var mongoose = require('mongoose');
var moment = require('moment');
var passportLocalMongoose = require('passport-local-mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true, required: true, default: ''},
    password: {type: String, required: true, default: ''},
    createdTimeStamp: {type: String, default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} 
});

var options = {
    usernameField: 'email'
}

//if I were to use both email and username log in I will have to use the code below
// var options = {
//     usernameQueryFields: ['email', 'username']
// }

userSchema.plugin(passportLocalMongoose, options);
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);