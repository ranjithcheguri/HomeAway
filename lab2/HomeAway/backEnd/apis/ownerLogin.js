var express = require('express');
var router = express.Router(); // capital R
var app = express();
const mongoClient = require('mongodb').MongoClient;
var bcrypt = require('bcryptjs');

var config = require('../config/settings');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var passport = require('passport');
// Set up middleware
var requireAuth = passport.authenticate('jwt', { session: false });
// Bring in defined Passport Strategy
require('../config/passport')(passport);
// Log requests to console
app.use(morgan('dev'));
app.use(passport.initialize());


router.post('/ownerLogin', function (req, res) {
    console.log("Validating Owner Login");
    mongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('ownerLoginData').find({
                email: req.body.email,
            })
                .toArray()
                .then((result) => {
                    if (bcrypt.compareSync(req.body.password, result[0].password)) {
                        console.log("Validatiing bcrypt... ");
                        if (result.length > 0) {
                            console.log("login successful");
                            res.cookie('OwnerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                            req.session.user = result;
                            res.writeHead(200, {
                                'Content-Type': 'text/plain'
                            })
                            res.end("login successful");
                        } else {
                            res.writeHead(400, {
                                'Content-Type': 'text/plain'
                            })
                            console.log("No details found");
                            res.end("No details found");
                        }
                    } else {
                        res.writeHead(400, {
                            'Content-Type': 'text/plain'
                        })
                        console.log("Invalid Username/Password");
                        res.end("Invalid Username/Password");
                    }
                }), (err) => {
                    console.log("Unable to fetch Documents");
                }
            client.close();
        }
    })
});

module.exports = router;