process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

const express = require('express');
const app = express();

var pg = require('pg');
pg.defaults.ssl = true;

const dbconnection = require('../../secrets.json');

const username = dbconnection.username;
const password = dbconnection.password;

const pgp = require('pg-promise')({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },
});

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@ec2-44-199-26-122.compute-1.amazonaws.com:5432/de1jf3mgm707uv?sslmode=require`;

let db = pgp(url);

const tripRoute = express.Router();

tripRoute.route('/trip').get(async(req, res) => {
    res.json(await db.any('SELECT * FROM public."trips" ORDER BY "name" ASC;'));
});

tripRoute.route('/trips/:name').get(async (req, res) => {
    let tripPattern = '%' + req.params.name + '%';
    res.json(await db.any('SELECT * FROM public."trips" WHERE name LIKE $1 ORDER BY name ASC;', [tripPattern]));
});

tripRoute.route('/trip/:name').get(async (req, res) => {
    // for getting a single trip's information
    let tripName = req.params.name;
    res.json(await db.any('SELECT * FROM public."trips" WHERE name=$1', [tripName]));
});

tripRoute.route('/trip/:name').put( async (req, res) => {
    let lastHotelId = await db.any('SELECT MAX(id) FROM public."hotels";');
    let newHotelId = lastHotelId[0].max + 1;
    let hotelName = req.body.hotelName;
    let rating = req.body.hotelRating;
    let price = req.body.hotelPrice;
    db.none('INSERT INTO public."hotels" (id, hotel, rating, price) VALUES ($1, $2, $3, $4);', [newHotelId, hotelName, rating, price]);
    let tripName = req.body.tripName;
    let location = req.body.tripLocation;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let people = req.body.numberOfPeople;
    let arrival = req.body.arrivalTravel;
    let departure = req.body.departureTravel;
    let expenses = req.body.otherExpenses;
    let hid = newHotelId;
    let pros = req.body.proList;
    let cons = req.body.conList;
    let notes = req.body.addNotes;
    db.none('INSERT INTO public."trips"(location, startdate, enddate, people, hid, arrivaltravel, departuretravel, expenses, notes, pros, cons, name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);', [location, startDate, endDate, people, hid, arrival, departure, expenses, notes, pros, cons, tripName]);
    res.status(201);
    await db.any('SELECT * FROM public."trips" WHERE name=$1', [tripName]);
    res.json(await db.any('SELECT * FROM public."trips" WHERE name=$1', [tripName]));
});

tripRoute.route('/hotel/:id').get(async (req, res) => {
    // for getting a single hotel's information
    let hotelId = req.params.id;
    res.json(await db.any('SELECT * FROM public."hotels" WHERE id=$1;', [hotelId]));
});

tripRoute.route('/comparison').get(async (req, res) => {
    // for getting all trip comparisons
    res.json(await db.any('SELECT * FROM public."tripcomparisons" ORDER BY "compname" ASC;'));
});

tripRoute.route('/comparisons/:name').get(async (req, res) => {
    let comparisonName = '%' + req.params.name + '%';
    res.json(await db.any('SELECT * FROM public."tripcomparisons" WHERE compname LIKE $1 ORDER BY compname ASC;', [comparisonName]));
});

tripRoute.route('/comparisons/:name').put(async (req, res) => {
    // for creating a new trip comparison
    let comparisonName = req.params.name;
    let firstTrip = req.body.firstTrip;
    let secondTrip = req.body.secondTrip;
    db.none('INSERT INTO public."tripcomparisons" (compname, firsttripname, secondtripname) VALUES ($1, $2, $3);', [comparisonName, firstTrip, secondTrip]);
    res.status(201);
    await db.any('SELECT * FROM public."tripcomparisons" WHERE compname=$1', [comparisonName]);
    res.json(await db.any('SELECT * FROM public."tripcomparisons" WHERE compname=$1', [comparisonName]));
});


module.exports = tripRoute;