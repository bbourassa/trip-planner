'use strict';

const db = require('./routes/trip.routes.js').db;

exports.listAll = async function(req, res) {
    //console.log('hello');
    res.json(await db.any('SELECT * FROM public."trips";'));
};

exports.create = async function(req, res) {
    let result = await db.any('SELECT * FROM public."trips";');
};

exports.testing = async function(req, res) {
    console.log('hit testing');
    let lastId = await db.any('SELECT MAX(id) FROM public."trips";');
    let newId = lastId[0].max + 1;
    db.none('INSERT INTO public."hotels"(id, hotel, rating, price) VALUES ($1, $2, $3, $4);', [newId, 'name', 3.5, 100]);
    res.status(201);
};