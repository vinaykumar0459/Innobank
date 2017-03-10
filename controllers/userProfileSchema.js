var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://innobank:innobank@ds123410.mlab.com:23410/userdata');
mongoose.connect('mongodb://innobank:innobank@ds121980.mlab.com:21980/innobank');
var userregisterSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
<<<<<<< HEAD
    password: String,
    mobileNumber: Number,
    gender: String,
    dob: Date,
    userID: String,
    address: String,
    pancardNumber: String,
    aadharcardNumber: Number,
    createdDate: Date,
    isRegistered: Boolean,
    isActivated: Boolean,
    transfered: [{ amount: Number, date: Date, to: Number }],
    recieved: [{ amount: Number, date: Date, from: Number }],
=======
    password:String,
    mobileNumber:Number,
    gender:String,
    dob : Date,
    userID:String,
    address:String,
    pancardNumber:String,
    aadharcardNumber:String,
    createdDate:Date,
    isRegistered:Boolean,
    isActivated:Boolean, 
    transfered:[{amount : Number, date : Date, to : Number}],
    recieved:[{amount : Number, date : Date, from : Number}],
>>>>>>> 495820de7c94e5dec65b88d73cd14d3fdf684b0e

});

var user = mongoose.model("register", userregisterSchema);
module.exports = user;