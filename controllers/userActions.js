var mongoose = require('mongoose');
var connection = require("./userProfileSchema");

// Create New Account
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
        // invalid  input data
        // if (data.firstName == "" || data.lastName == "" || data.email == "" || data.mobileNumber == "" || data.gender == "" ||
        //     data.dob == "" || data.pancardNumber == "" || data.aadharcardNumber == "" || data.address == "") {
        //     res.json({ err: 0 });
        // } else {
        // checking account exist are not
        connection.find({ $and: [{ email: req.body.email }, { aadharcardNumber: req.body.aadhar }] }, function(err, docs) {
            console.log(docs);


            if (docs[0] == null) {

                //create new bank account
                data.save(function(err, data) {

                    if (err) {
                        throw err
                    } else {

                        res.json(1);
                    }
                })
            } else {
                res.json(0);
            }



        })
    }
     // Forgot password 
exports.forgotPassword = function(req, res) {
    console.log(req.body);
    var user = connection({
        userID: req.body.UID,
        mobileNumber: req.body.mobile,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    connection.find({ $and: [{ userID: req.body.UID }, { mobileNumber: req.body.mobile }] }, function(err, data) {
        console.log(data);
        if (err) {
            throw err;
        } else if (data[0] == null) {
            console.log();
            res.json(0);
        } else {
            if (req.body.password === req.body.confirmPassword) {
                connection.update({ mobileNumber: req.body.mobile }, { $set: { password: req.body.password } }, function(err, docs) {});
                console.log("hghgsahghg");
                res.json(1);
            } else {
                console.log("Passwords Mismatched");
                res.json(2);
            }
        }
    })
}
//myprofile 
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
//fundTransfer
exports.fundTransfer = function(req,res){
     var from = req.body.fromAccount
    var to = req.body.accountnum; 
    var transferData =
        {amount : req.body.amount,date:req.body.date, to :to, currentBalance:undefined};
 var receivedData = {amount : req.body.amount,date:req.body.date, from:from, currentBalance:undefined};
   
    connection.find({ aadharcardNumber:from},function(err,docs){

       console.log(docs);
        if(err)
        throw err;
        else{
            connection.find({aadharcardNumber:to},function(err,data){
                console.log(data);
           
        if (docs[0] != null && data[0] != null ) {
            var amount = docs[0].totalAmount;
            var receiverAmount = data[0].totalAmount;
            docs[0].totalAmount = amount-req.body.amount;
             transferData.currentBalance = amount-req.body.amount;
            data[0].totalAmount =parseInt( receiverAmount)+parseInt(req.body.amount);
           // data[0].received.push(receivedData);
             receivedData.currentBalance = parseInt( receiverAmount)+parseInt(req.body.amount);
            docs[0].transfered.push(transferData);
            console.log( docs[0].transfered);
             
            data[0].received.push(receivedData);
            console.log(  data[0].received);
            data[0].save();
            docs[0].save();
            res.json("success");
            // response.json(docs[0]);
        }
        });

        }

    })
   
}
//var user = require("./userProfileSchema.js");
//var statementArray = [],
    // sortedStatement = [],
 // ministatementArray = [],
   

exports.miniStatement = function(request, response) {
  var  statementArray=[],ministatementArray = [];
  //  console.log("hello");
   // console.log(request.params.id );
    connection.find({ aadharcardNumber: request.params.id }, function(error, data) {
        if (error) {
            console.log("error while executing the query");
            throw error;
        } else if (data[0] != null) {
            // objId = data[0]._id;
            transferredArray = data[0].transfered;
            receivedArray = data[0].received;
            // console.log(objId);
            if (transferredArray[0] == null && receivedArray[0] == null) {
                console.log("no transactions done yet");
                response.json("no transactions");
            } else {
                console.log("hi");
                if (transferredArray[0] != null) {
                  //  console.log("transfer" + transferredArray.length);
                    for (var i = 0; i < transferredArray.length; i++) {
                        statementArray.push(transferredArray[i]);
                        // console.log(statementArray);
                    }
                }
                if (receivedArray[0] != null) {
                    console.log("receive");
                    for (var i = 0; i < receivedArray.length; i++) {
                        statementArray.push(receivedArray[i]);
                        // console.log(statementArray);
                    }
                    // statementArray.push(receivedArray);
                }
                // console.log(statementArray);
                var sortedStatement = statementArray.sort(function(a, b) {
                    return b.date - a.date
                });
                console.log(sortedStatement);
                length = sortedStatement.length;
                if (length > 8) {
                    ministatementArray = sortedStatement.splice(8, length - 8);
                    console.log(ministatementArray);
                    response.json(ministatementArray);
                } else {
                    console.log(sortedStatement);
                    response.json(sortedStatement);
                }
            }
        } else {
            console.log("account number is not present");
            response.json({data:"account number is not present"});
        }
    });
}

exports.detailedStatement = function(request, response) {
    var  detailedStatement = [],   statementArray=[],resultantStatement=[];
    connection.find({ aadharcardNumber: request.params.id }, function(error, data) {
        if (error) {
            console.log("error while executing the query");
            throw error;
        } else if (data[0] != null) {
           // objId = data[0]._id;
            transferredArray = data[0].transfered;
            receivedArray = data[0].received;
            //console.log(objId);
            if (transferredArray[0] == null && receivedArray[0]== null) {
                console.log("no transactions done yet");
            } else {
                if (transferredArray[0]!= null) {
                    console.log("transfer" + transferredArray.length);
                    for (var i = 0; i < transferredArray.length; i++) {
                        statementArray.push(transferredArray[i]);
                        // console.log(statementArray);
                    }
                }
                if (receivedArray[0]!= null) {
                    console.log("receive");
                    for (var i = 0; i < receivedArray.length; i++) {
                        statementArray.push(receivedArray[i]);
                        // console.log(statementArray);
                    }
                    // statementArray.push(receivedArray);
                }
                // statementArray.push(transferredArray);
                // statementArray.push(receivedArray);
                 console.log(statementArray);
             var sortedStatement =   statementArray.sort(function(a, b) {
                    return b.date - a.date;
                });
                length = sortedStatement.length;
                console.log(request.body);
                if(length !=0){
                for (var i = 0; i < length; i++) {
                    console.log(sortedStatement[i].date);
                    if (sortedStatement[i].date <= new Date (request.body.toDate)) {
                        if (sortedStatement[i].date >= new Date ( request.body.fromDate)) {
                            resultantStatement.push(sortedStatement[i]);
                            console.log(resultantStatement);
                                                   

                        }
                    }else{
                       // console.log(sortedStatement);
                      response.json({data:"No Records"});
                }
            }
         response.json(resultantStatement);
        }
                
                
                //console.log(resultantStatement);
            }
        } else {
            console.log("account number is not present");
            response.json(["account number is not present"]);
        }
    });
}

