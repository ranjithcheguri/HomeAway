var express = require('express');
var router = express.Router(); // capital R
const mongoClient = require('mongodb').MongoClient;


router.post('/bookProperty', (req, res) => {
    console.log("inside book property", req.body)
    mongoClient.connect('mongodb://localhost:27017/homeaway', { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('listPropertyData').updateOne(
                { "_id": req.body._id },
                { $set: { 'bookedUser': req.body.bookedUser } }, (err, result) => {
                    if (err) {
                        console.log("query error, may be unique key already exists.");
                        res.writeHead(400, {
                            'Content-Type': 'text/plain'
                        })
                        res.end("Query update error");
                    } else {
                        console.log("query success");
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        })
                        res.end("Successfully booked the property");
                    }
                })
            client.close();
        }
    })
});

module.exports = router;
