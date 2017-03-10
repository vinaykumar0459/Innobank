var mongoose = require('mongoose');
var connection = require("./userProfileSchema");

exports.createAccount = function(req, res) {
    var data = connection({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        mobileNumber: req.body.mobile,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address,
        pancardNumber: req.body.pan,
        aadharcardNumber: req.body.aadhar,
        createdDate: '',
        isActivated: false,
    });
    data.save(function(err, data) {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("Success");
            res.json({ data: "Success" });

        }
    })
}

exports.myprofile = function(req, res) {

    var aadhar = req.params.id;
    console.log(aadhar);
    connection.find(function(err, data) {
        if (err) {
            throw err;
        } else {
            console.log(data);
        }
    });
    connection.find({ aadharcardNumber: aadhar }, function(err, docs) {
        console.log(docs[0]);
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    });

}