var express = require('express');
var router = express.Router();
// vary

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


// router.post('/register', function(req, res, next) {
//     var fname = req.body.fname;
//     var lname = req.body.lname;
//     var email = req.body.email;
//     var mobile = req.body.mobile;
//     var aadhar = req.body.aadhar;
//     var pan = req.body.pan;
//     var gender = req.body.gender;
//     var dob = req.body.dob;
//     var address = req.body

// })

module.exports = router;