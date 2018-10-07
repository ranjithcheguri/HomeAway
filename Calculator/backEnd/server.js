var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');

const math = require('mathjs');

// if cors not used, access-cotrol-allow-origin error.
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret              : 'cmpe273_calculator_lab1',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));


app.post('/compute',function(req,res){
    var ans =0;
    console.log("Initial page");
    console.log("Expression received for evaluation : ",req.body.computeExpression);
    try{
        res.writeHead(200);
        res.end(parseFloat(math.eval(req.body.computeExpression)).toFixed(2)); 
    }
    catch(error){
        res.end("invalid input");
    }
});

app.listen(3001,()=>console.log("listeninng to port 3001"));
