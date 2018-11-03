var express = require('express');
var router = express.Router(); // capital R
const mongoClient = require('mongodb').MongoClient;


router.post('/bookingHistory', (req, res) => {
    console.log("Inside Booking History", req.body);
    //booking dates can be included as well here.
    mongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('listPropertyData').find({
                //if no paramaters are passed, it will fetch all documents.
                bookedUser: req.body.username
            })
                .toArray()
                .then((result) => {
                    console.log("booking details downloaded", result);
                    if (result.length > 0) {
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        })
                        res.end(JSON.stringify(result));
                    } else {
                        res.writeHead(400, {
                            'Content-Type': 'text/plain'
                        })
                        console.log("No details found");
                        res.end("No details found");
                    }
                }), (err) => {
                    console.log("Unable to fetch Documents");
                }
            client.close(); 
        }
    })
});


module.exports = router;