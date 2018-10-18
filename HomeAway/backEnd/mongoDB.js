var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
//app.set('view engine', 'ejs');
const multer = require('multer');
//const uuidv4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');
var bcrypt = require('bcryptjs');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(session({
    secret: 'cmpe273_kafka_passport_mongo',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));


// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

const mongoClient = require('mongodb').MongoClient;

///////////////////////// TRAVELER SIGNUP BEGIN ///////////////////////////

app.post('/travelerSignUp', function (req, res) {

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
///////////////////////// TRAVELER SIGNUP END///////////////////////////


///////////////////////// TRAVELER LOGIN BEGIN ///////////////////////////
app.post('/travelerLogin', function (req, res) {
    console.log(req.body.password);
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
                    //JSON.stringify(result, undefined, 2)
                    //console.log("Document fetched :", result[0].password);
                    if (bcrypt.compareSync(req.body.password, result[0].password)) {
                        console.log("Validatiing bcrypt... ");
                        if (result.length > 0) {
                            console.log("login successful");
                            res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
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
///////////////////////// TRAVELER LOGIN END ///////////////////////////


app.listen(3002);
console.log("Server running on port 3002");