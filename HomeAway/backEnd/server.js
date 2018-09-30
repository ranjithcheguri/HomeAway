var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');
var mysql = require('mysql');
var pool = require('./pool');
const multer = require('multer');
//const uuidv4 = require('uuid/v4');
const path = require('path');
const fs = require('fs');

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

/******************* TRAVELER SIGN UP POST ***************************/

app.post('/signup', function (req, res) {

    console.log("server side : Inside /signup");

    // var firstName = req.body.firstName;
    // var lastName = req.body.lastName;
    // var email = req.body.email;
    // var password = req.body.password;

    var sql = "INSERT INTO travelerdata VALUES ( " +
        mysql.escape(req.body.firstName) + " , " + mysql.escape(req.body.lastName) + " , " +
        mysql.escape(req.body.email) + " , " + mysql.escape(req.body.password) + " );";

    console.log(sql);

    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                    req.session.user = result;
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Login");
                }
            });
        }
    })
});

/******************* TRAVELER LOGIN POST ***************************/

app.post('/login', function (req, res) {

    console.log("server side : Login Verification started");


    var email = req.body.email;
    var password = req.body.password;

    var sql = "SELECT *  FROM travelerdata WHERE email = " +
        mysql.escape(email) + "and password = " + mysql.escape(password);

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
                    console.log("******** User not found ******");
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    console.log(result);
                    res.cookie('TravelerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                    req.session.user = result;
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Login");
                }
            });
        }
    })
});

/******************* OWNER LOGIN POST ***************************/
app.post('/ownerlogin', function (req, res) {

    console.log("server side : Owner Login Verification started");


    var email = req.body.email;
    var password = req.body.password;

    var sql = "SELECT *  FROM ownerdata WHERE email = " +
        mysql.escape(email) + "and password = " + mysql.escape(password);

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
                    console.log("******** Owner not found ******");
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    console.log(result);
                    res.cookie('OwnerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                    req.session.user = result;
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Login");
                }
            });
        }
    })
});

/******************* OWNER SIGN UP POST ***************************/

app.post('/ownerSignUp', function (req, res) {

    console.log("server side : Inside Owner signup");

    // var firstName = req.body.firstName;
    // var lastName = req.body.lastName;
    // var email = req.body.email;
    // var password = req.body.password;

    var sql = "INSERT INTO ownerdata VALUES ( " +
        mysql.escape(req.body.firstName) + " , " + mysql.escape(req.body.lastName) + " , " +
        mysql.escape(req.body.email) + " , " + mysql.escape(req.body.password) + " );";

    console.log(sql);

    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    res.cookie('OwnerCookie', req.body.email, { maxAge: 900000, httpOnly: false, path: '/' });
                    req.session.user = result;
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Login");
                }
            });
        }
    })
});

/******************* LIST PROPERTY POSTS ***************************/
var photos = "";

/******************* PHOTOS POST ***************************/

//set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
        console.log("Inside Destination");
    },
    filename: (req, file, cb) => {
        const newFilename = `image_` + Date.now() + `${(path.extname(file.originalname))}`;
        //this photo name to be inserted in database.
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



/******************* PHOTOS POST END ***************************/

/******************* OTHER DETAILS POST ***************************/

app.post('/listProperty', (req, res) => {
    console.log("Inside Listproperty");
    console.log("Property details : ", req.body);
    //insert image names in database.
    var sql = "INSERT INTO ownerprofile(`country`, `street`, `building`, `city`, `state`, `zipcode`, `headline`, `description`, `type`, `bedrooms`, `accomodates`, `bathrooms`, `bookingoptions`, `photos`, `startdate`, `enddate`, `currency`, `rent`, `tax`, `cleaningfee`) VALUES (" +
        mysql.escape(req.body.country) + " , " +
        mysql.escape(req.body.street) + " , " +
        mysql.escape(req.body.building) + " , " +
        mysql.escape(req.body.city) + " , " +
        mysql.escape(req.body.state) + " , " +
        mysql.escape(req.body.zipcode) + " , " +
        mysql.escape(req.body.headline) + " , " +
        mysql.escape(req.body.description) + " , " +
        mysql.escape(req.body.type) + " , " +
        mysql.escape(req.body.bedrooms) + " , " +
        mysql.escape(req.body.accomodates) + " , " +
        mysql.escape(req.body.bathrooms) + " , " +
        mysql.escape(req.body.bookingoptions) + " , " +
        mysql.escape(photos) + " , " +
        mysql.escape(req.body.startdate) + " , " +
        mysql.escape(req.body.enddate) + " , " +
        mysql.escape(req.body.currency) + " , " +
        mysql.escape(req.body.rent) + " , " +
        mysql.escape(req.body.tax) + " , " +
        mysql.escape(req.body.cleaningfee) + ");";

    console.log("SQL QUERY: ", sql);

    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    console.log(result);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Successful Insertion into database");
                }
            });
        }
    })
});

/******************* OTHER DETAILS POST END***************************/

/******************* LIST PROPERTY POSTS END ***************************/

/******************* DISPLAY PROPERTY POST BEGIN ***************************/


app.post('/displayProperty', (req, res) => {
    console.log("Server side : Inside display Property");

    var sql = "select * from ownerprofile";
    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    //console.log(result);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })

                    console.log("photos", result);
                    res.end(JSON.stringify(result));
                }
            });
        }
    })
});




//get file name required from DB
//   var file=["android_mountains-3840x2160.jpg","beach_4k-3840x2160.jpg"];
//   var base64img = [];
//     file.forEach(element=>{
//       var fileLocation = path.join(__dirname + '/uploads',element);
//       var img = fs.readFileSync(fileLocation);
//       base64img.push(new Buffer(img).toString('base64'));
//     })
//   res.writeHead(200, {'Content-Type': 'image/jpg' });
//    res.end(JSON.stringify(base64img));
//    console.log("Download Completed, response sent");    


/******************* DISPLAY PROPERTY POST END ***************************/

/******************* DISPLAY PHOTOS POST BEGIN ***************************/


app.post('/downloadPhotos', (req, res) => {
    console.log("Inside download file");

    /////////get photos//////////
    var sql = "select photos from ownerprofile";

    pool.getConnection(function (err, con) {
        if (err) {
            console.log("connection error");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Could Not Get Connection Object");
        } else {
            con.query(sql, function (err, result) {
                if (err) {
                    console.log(err);
                    res.writeHead(400, {
                        'Content-Type': 'text/plain'
                    })
                    res.end("Invalid Credentials");
                } else {
                    //console.log(result);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    })
                    var base64imgObj=[];
                    console.log("photos", result);
                    result.forEach(element1 => {
                        var file = element1['photos'];
                        file = file.split("___");
                        console.log("file : :",file);
                        file.splice( file.indexOf(''), 1 );
                        console.log("file2 : :",file);
                        var base64img = [];
                        file.forEach(element2 => {
                            var fileLocation = path.join(__dirname + '/uploads', element2);
                            var img = fs.readFileSync(fileLocation);
                            base64img.push(new Buffer(img).toString('base64'));
                        })
                        base64imgObj.push(base64img);
                    });
                    res.end(JSON.stringify(base64imgObj));
                }
            });
        }
    })
    /////////get photos end//////////

    //get file name required from DB
    //   var file=["android_mountains-3840x2160.jpg","beach_4k-3840x2160.jpg"];
    //   var base64img = [];
    //     file.forEach(element=>{
    //       var fileLocation = path.join(__dirname + '/uploads',element);
    //       var img = fs.readFileSync(fileLocation);
    //       base64img.push(new Buffer(img).toString('base64'));
    //     })
    //   res.writeHead(200, {'Content-Type': 'image/jpg' });
    //    res.end(JSON.stringify(base64img));
    //    console.log("Download Completed, response sent");    
});

/******************* DISPLAY PHOTOS POST END ***************************/






/******************* LISTEN PORT ***************************/
app.listen(3001);
console.log("Server running on port 3001");