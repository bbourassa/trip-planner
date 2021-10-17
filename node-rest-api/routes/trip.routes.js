const express = require('express');
const app = express();

const bookRoute = express.Router();
let TripData = require('../model/Trip');

bookRoute.route('/api/create').get((req, res) => {
    res.json({'test': 'this is testdata'})
});

module.exports = bookRoute;