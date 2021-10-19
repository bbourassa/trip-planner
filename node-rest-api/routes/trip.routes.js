const express = require('express');
const app = express();

const tripRoute = express.Router();
let TripData = require('../model/Trip');

tripRoute.route('/trip').get((req, res) => {
    // for getting all trip information
    res.json({'test': 'this is testdata'});
});

tripRoute.route('/trip/:name').get((req, res) => {
    // for getting a single trip's information
    res.json({'newtest': 'this is testdata'});
});

tripRoute.route('/trip/:name').post((req, res) => {
    // for creating a new trip
});

tripRoute.route('/trip/:name').delete((req, res) => {
    // for removing a trip
});

tripRoute.route('/hotel/:name').get((req, res) => {
    // for getting a single hotel's information
    res.json({'testhotel': 'this is testdata'});
});

tripRoute.route('/hotel/:name').post((req, res) => {
    // for creating a new hotel
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