// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://innobank:innobank@ds123410.mlab.com:23410/userdata');
var express = require("express");
var router = express.Router();
// var userregisterSchema = mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     email: String,
//     password: String,
//     mobileNumber: Number,
//     gender: String,
//     dob: Date,
//     userID: String,
//     address: String,
//     pancardNumber: String,
//     aadharcardNumber: Number,
//     createdDate: Date,
//     isRegistered: Boolean,
//     isActivated: Boolean,
//     transfered: [{ amount: Number, date: Date, to: Number }],
//     recieved: [{ amount: Number, date: Date, from: Number }],

// });
router.get('/:id', function(req, res, next) {

    // controller.myprofile(req, res);
});
//var user = mongoose.model("register", userregisterSchema);
//module.exports =router;