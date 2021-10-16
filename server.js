
require('dotenv').config();

//Install express server
const express = require('express');
const path = require('path');
const app = express();

//SECRET
const dbconnection = require('./secrets.json');

const username = dbconnection.username;
const password = dbconnection.password;

const pgp = require('pg-promise')({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },
});
const url = process.env.DATABASE_URL || `postgres://${username}:${password}@ec2-44-199-26-122.compute-1.amazonaws.com:5432/de1jf3mgm707uv?sslmode=require`;

exports.db = pgp(url);

app.set('json spaces', '\t');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve only the static files form the dist directory
const dir = path.dirname(__dirname);
app.use(express.static(__dirname + '/dist/trip-planner'));

app.get('/*', function(req,res) {
    //res.sendFile(path.join(__dirname+'/src/app/app.component.html'));

    res.sendFile(path.join(__dirname+'/dist/trip-planner/index.html'));
});

app.get('/api/test', (req, res) => res.json({ user: 'geek' })); 

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on http://localhost:' + port);
});