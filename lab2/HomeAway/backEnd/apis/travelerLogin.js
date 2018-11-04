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

router.post('/travelerLogin', function (req, res) {
    console.log("Validating Traveler Login");
    mongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('travelerLoginData').find({
                email: req.body.email,
            })
                .toArray()
                .then((result) => {
                    //console.log(result);
                    if (result && bcrypt.compareSync(req.body.password, result[0].password)) {
                        console.log("Validatiing bcrypt... ");
                        if (result.length > 0) {

                            var token = jwt.sign({ result }, config.secret, {
                                expiresIn: 10080 // in seconds
                            });
                            console.log("token generated  : ", token)
                            res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                            res.status(200).json({ success: true, token: 'JWT ' + token });
                            //res.end();

                            // console.log("login successful");
                            // res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                            // req.session.user = result;
                            // res.writeHead(200, {
                            //     'Content-Type': 'text/plain'
                            // })
                            // res.end("login successful");
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
