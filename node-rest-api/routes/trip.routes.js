process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

const express = require('express');
const app = express();

const dbconnection = require('../../secrets.json');

const username = dbconnection.username;
const password = dbconnection.password;

const pgp = require('pg-promise')({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },
});

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@ec2-44-199-26-122.compute-1.amazonaws.com:5432/de1jf3mgm707uv?sslmode=require`;

exports.db = pgp(url);

let db = pgp(url);

const tripRoute = express.Router();
let TripData = require('../model/Trip');

const trips = require('../trips.js');

console.log(trips);

tripRoute.route('/trip').get(trips.listAll);

tripRoute.route('/trip/:name').get(async (req, res) => {
    // for getting a single trip's information
    let tripId = req.params.name;
    res.json(await db.any('SELECT * FROM public."trips" WHERE id=$1', [tripId]));
});

tripRoute.route('/trip/:name').put( async (req, res, next) => {
    //console.log(req.body);
    let lastId = await db.any('SELECT MAX(id) FROM public."trips";');
    let newId = lastId[0].max + 1;
    let name = req.body.tripName;
    let location = req.body.tripLocation;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let people = req.body.numberOfPeople;
    let arrival = req.body.arrivalTravel;
    let departure = req.body.departureTravel;
    let expenses = req.body.otherExpenses;
    let hid = req.body.hid;
    let pros = req.body.proList;
    let cons = req.body.conList;
    let notes = req.body.addNotes;
    db.none('INSERT INTO public."trips"(id, location, startdate, enddate, people, hid, arrivaltravel, departuretravel, expenses, notes, pros, cons, name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);', [newId, location, startDate, endDate, people, hid, arrival, departure, expenses, notes, pros, cons, name]);
    res.status(201);
});

tripRoute.route('/trip/:name').delete((req, res) => {
    // for removing a trip
});

tripRoute.route('/trips/:name').get(async (req, res) => {
    let tripPattern = '%' + req.params.name + '%';
    res.json(await db.any('SELECT * FROM public."trips" WHERE name LIKE $1;', [tripPattern]));
});

tripRoute.route('/trip-max').get(async (req, res) => {
    let maxId = await db.any('SELECT MAX(id) FROM public."trips";');
    res.json(maxId);
})

tripRoute.route('/hotel-max').get( async (req, res) => {
    let maxId = await db.any('SELECT MAX(id) FROM public."hotels";');
    res.json(maxId);
})

tripRoute.route('/hotel/:name').get(async (req, res) => {
    // for getting a single hotel's information
    let hotelId = req.params.name;
    console.log(hotelId);
    res.json(await db.any('SELECT * FROM public."hotels" WHERE id=$1;', [hotelId]));
});

tripRoute.route('/hotel/:name').put(async (req, res) => {
    // for creating a new hotel
    let lastId = await db.any('SELECT MAX(id) FROM public."hotels";');
    let newId = lastId[0].max + 1;
    let name = req.body.hotelName;
    let rating = req.body.hotelRating;
    let price = req.body.hotelPrice;
    db.none('INSERT INTO public."hotels" (id, hotel, rating, price) VALUES ($1, $2, $3, $4);', [newId, name, rating, price]);
    res.status(201);
});

tripRoute.route('/pro/:name').get((req, res) => {
    // for getting a single pro's information
    res.json({'testpro': 'this is testdata'});
});

tripRoute.route('/pro/:name').post((req, res) => {
    // for creating a new pro
    res.json({'testpro': 'this is testdata'});
});

tripRoute.route('/con/:name').get((req, res) => {
    // for getting a single con's information
    res.json({'testcon': 'this is testdata'});
});

tripRoute.route('/con/:name').post((req, res) => {
    // for creating a new con
});

tripRoute.route('/comparison').get((req, res) => {
    // for getting all trip comparisons
    res.json({'testcomparison': 'this is testdata'});
});

tripRoute.route('/comparison/:name').get((req, res) => {
    // for getting a single trip comparison
    res.json({'testsinglecomparison': 'this is testdata'});
});

tripRoute.route('/comparison/:name').post((req, res) => {
    // for creating a new trip comparison
});

tripRoute.route('/comparison/:name').delete((req, res) => {
    // for removing a trip comparison
});

module.exports = tripRoute;