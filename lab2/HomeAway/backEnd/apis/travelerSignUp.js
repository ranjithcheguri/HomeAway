var router = require('express').Router();
var bcrypt = require('bcryptjs');
const mongoClient = require('mongodb').MongoClient;

router.post('/travelerSignUp', function (req, res) {
    console.log("Creating new Traveler");
    var salt = bcrypt.genSaltSync(10);
    // Hash the password with the salt
    var hash = bcrypt.hashSync(req.body.password, salt);

    mongoClient.connect('mongodb://localhost:27017/homeaway', { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('travelerLoginData').createIndex({ "email": 1 }, { unique: true });
            db.collection('travelerLoginData').insertOne({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            }, (err, result) => {
                if (err) {
                    console.log("query error, may be unique key already exists.");
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Email already exists");
                } else {
                    console.log("query success");
                    res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                    req.session.user = result;
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Signup of Traveler");
                }
            })
            client.close();
        }
    })
});

module.exports = router;