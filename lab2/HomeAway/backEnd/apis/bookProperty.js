var express = require('express');
var router = express.Router(); // capital R
const mongoClient = require('mongodb').MongoClient;


router.post('/bookProperty', (req, res) => {

    console.log("Inside Booking Property");
    //booking dates can be included as well here.
    var sql = "UPDATE ownerprofile SET `booked` = " + mysql.escape(1) + ", `bookedBy` = " + mysql.escape(req.body.bookedUser) + " WHERE `key` = " + parseInt(mysql.escape(req.body.bookedKey)) + ";";
    //var sql = 'UPDATE ownerprofile SET booked = 1, bookedBy = \'rky@123.com\' WHERE key = 11';
    console.log(sql);

    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            console.log("connection to db successfull");
            con.query(sql, function (err, result) {
                if (err) {
                    console.log("******** Error in bookingProperty ******");
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    console.log(result);
                    //play with result here.
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successfully Booked Property");
                }
            });
        }
    })
});

module.exports = router;
