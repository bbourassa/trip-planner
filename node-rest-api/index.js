//require('dotenv').config();

let express = require('express'),
  path = require('path'),
  cors = require('cors'),
  bodyParser = require('body-parser')

  //SECRET
const dbconnection = require('../secrets.json');

const username = dbconnection.username;
const password = dbconnection.password;

//const pgp = require('pg-promise')({
//    connect(client) {
//        console.log('Connected to database:', client.connectionParameters.database);
//    },
//});
const url = process.env.DATABASE_URL || `postgres://${username}:${password}@ec2-44-199-26-122.compute-1.amazonaws.com:5432/de1jf3mgm707uv?sslmode=require`;

exports.db = pgp(url);

const tripRoute = require('./routes/trip.routes');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

app.use(allowCrossDomain);

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/trip-planner')));


// API root
app.use('/api', tripRoute)

app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on port ' + port)
})

// 404 Handler
//app.use((req, res, next) => {
//  next(createError(404));
//});

// Base Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/trip-planner'));
});

app.get('/api/trip/:trip', (req, res) => {
    // for getting all trip information
});

app.get('/api/trip/:name', (req, res) => {
    // for getting a single trip's information
});

app.post('/api/trip/:name', (req, res) => {
    // for creating a new trip
});

app.delete('/api/trip/:name', (req, res) => {
    // for removing a trip
});

app.get('/api/hotel/:name', (req, res) => {
    // for getting a single hotel's information
})

app.post('/api/hotel/:name', (req, res) => {
    // for creating a new hotel
});

app.get('/api/pro/:name', (req, res) => {
    // for getting a single pro's information
});

app.post('/api/pro/:name', (req, res) => {
    // for creating a new pro
});

app.get('/api/con/:name', (req, res) => {
    // for getting a single con's information
});

app.post('/api/con/:name', (req, res) => {
    // for creating a new con
});

app.get('/api/comparison', (req, res) => {
    // for getting all trip comparisons
});

app.get('/api/comparison/:name', (req, res) => {
    // for getting a single trip comparison
});

app.post('/api/comparison/:name', (req, res) => {
    // for creating a new trip comparison
});

app.delete('/api/comparison/:name', (req, res) => {
    // for removing a trip comparison
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/trip-planner'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});