let express = require('express'),
  path = require('path'),
  cors = require('cors'),
  bodyParser = require('body-parser')

const tripRoute = require('./node-rest-api/routes/trip.routes');

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
app.use('/api', tripRoute);

app.listen(process.env.PORT || 8000, () => {
//  console.log('Listening on port ' + port)
})

// Base Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/trip-planner'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/trip-planner'));
});

app.get('/main-menu', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
});

app.get('/trip-create', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
});

app.get('/trip-compare', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
});

app.get('/view-trip', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
});

app.get('/view-compare', (req, res) => {
    res.sendFile(path.resolve(__dirname,'dist/trip-planner/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});