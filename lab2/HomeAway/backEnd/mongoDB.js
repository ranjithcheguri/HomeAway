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

/********* KAFKA ********/
var kafka = require('./kafka/client');

/********* PASSPORT ********/
var config = require('./config/settings');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var passport = require('passport');
// Set up middleware
var requireAuth = passport.authenticate('jwt', { session: false });
// Bring in defined Passport Strategy
require('./config/passport')(passport);
// Log requests to console
app.use(morgan('dev'));
app.use(passport.initialize());
/********* PASSPORT END ********/


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
var travelerSignUp = require('./apis/travelerSignUp.js');
app.use('/', travelerSignUp);

///////////////////////// TRAVELER SIGNUP END///////////////////////////


///////////////////////// TRAVELER LOGIN BEGIN ///////////////////////////

var travelerLogin = require('./apis/travelerLogin');
app.use('/',travelerLogin);

///////////////////////// TRAVELER LOGIN END ///////////////////////////

///////////////////////// OWNER SIGNUP BEGIN ///////////////////////////

var ownerSignUp = require('./apis/ownerSignUp');
app.use('/',ownerSignUp);

///////////////////////// OWNER SIGNUP END///////////////////////////


///////////////////////// OWNER LOGIN BEGIN ///////////////////////////
var ownerLogin = require('./apis/ownerLogin');
app.use('/', ownerLogin);
///////////////////////// OWNER LOGIN END /////////////////////////// 



///////////////////////// PHOTOS BEGIN /////////////////////////// 
var photos = "";
//set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
        console.log("Inside Destination");
    },
    filename: (req, file, cb) => {
        const newFilename = `image_` + Date.now() + `${(path.extname(file.originalname))}`;
        //this photo name to be inserted in database.
        //{{{ when server is countinously running, for 2nd insertion 1st insertion photos are also getting upload so...}}}
        photos = photos + "___" + newFilename;
        //const newFilename = file.originalname;
        console.log("FileName : " + newFilename);
        cb(null, newFilename);
    },
});

//Init Upload for multiple images
const upload = multer({ storage: storage }).array('photos', 5);

app.post('/listPropertyPhotos', upload, (req, res, next) => {
    console.log("Inside UploadFiles");
    console.log("uploadFiles : ", req.files);
    console.log(photos);
});

///////////////////////// PHOTOS END ///////////////////////////// 


///////////////////////// listProperty BEGIN /////////////////////////////

getNextSequenceValue = async (db, sequenceName) => {
    //make sure to sure async and await.
    var sequenceDocument = await db.collection('counters').findOneAndUpdate(
        { "_id": sequenceName },
        { $inc: { sequence_value: 1 } },
        //       new:true
    );
    console.log("Counter : sequence value", sequenceDocument.value.sequence_value)
    return sequenceDocument.value.sequence_value;
}

app.post('/listProperty', function (req, res) {
    console.log("inside List Property mongo...");
    //console.log(req.body);
    mongoClient.connect('mongodb://localhost:27017', async (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            sNo = await getNextSequenceValue(db, "propertyid")
            db.collection('listPropertyData').insertOne({
                _id: sNo,
                country: req.body.country,
                street: req.body.street,
                building: req.body.building,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                headline: req.body.headline,
                description: req.body.description,
                type: req.body.type,
                bedrooms: req.body.bedrooms,
                accomodates: req.body.accomodates,
                bathrooms: req.body.bathrooms,
                bookingoptions: req.body.bookingoptions,
                photos: photos,
                startdate: req.body.startdate,
                enddate: req.body.enddate,
                currency: req.body.currency,
                rent: req.body.rent,
                tax: req.body.tax,
                cleaningfee: req.body.cleaningfee,
                ownername: req.body.ownername

            }, (err, result) => {
                if (err) {
                    console.log("query error, may be unique key already exists.", err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Email already exists");
                } else {
                    console.log("query success");
                    photos = "";
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("updated location details successfully !");
                }
            })
            client.close();
        }
    })
});
///////////////////////// listProperty END /////////////////////////////


/******************* DISPLAY PROPERTY  BEGIN ***************************/

app.post('/displayProperty', function (req, res) {
    console.log("MongoDB : fetching display Properties...");
    console.log(req.body);
    mongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) {
            console.log("error connecting to mongodb");
        } else {
            console.log("connection successful");
            const db = client.db('homeaway');
            db.collection('listPropertyData').find({
                //if no paramaters are passed, it will fetch all documents.
                _id: req.body.id
            })
                .toArray()
                .then((result) => {
                    console.log("property downloaded", result);
                    //JSON.stringify(result, undefined, 2)
                    console.log("downloading display properties... ");
                    if (result.length > 0) {
                        console.log("display properties download successful");
                        console.log("converting photos to base64...");
                        console.log("photos", result[0].photos);
                        //
                        var base64imgObj = [];
                        console.log("photos", result);
                        file = result[0].photos.split("___");
                        file.splice(file.indexOf(''), 1);
                        console.log("images array : :", file);
                        file.forEach(element => {
                            var fileLocation = path.join(__dirname + '/uploads', element);
                            var img = fs.readFileSync(fileLocation);
                            base64imgObj.push(new Buffer(img).toString('base64'));
                        })
                        result[0].photos = base64imgObj;
                        //console.log(result);

                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        })
                        res.end(JSON.stringify(result));
                        //res.end(JSON.stringify(base64imgObj));
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

/******************* DISPLAY PROPERTY POST END ***************************/


/******************* BOOKING HOME/PROPERTY BEGIN ***************************/

app.post('/bookProperty', (req, res) => {

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

/******************* BOOKING HOME/PROPERTY END ***************************/

/******************* MESSAGES BEGIN ***************************/

app.post('/message', (req, res) => {
    console.log(req.body);
    kafka.make_request('post_message', req.body, function (err, results) {
        console.log("mongoDB.js", 'in result');
        console.log(results);
        if (err) {
            console.log("mongoDB.js", "Inside err");
            res.json({
                status: "error",
                msg: "System Error, Try Again."
            })
        } else {
            console.log("mongoDB.js", "Inside else");
            // res.json({
            //     updatedList: results
            // });
            res.end(results);
        }
    });
})
/******************* MESSAGES END***************************/



app.listen(3002);
console.log("Server running on port 3002");