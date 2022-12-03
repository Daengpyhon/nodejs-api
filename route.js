const express = require('express');
const route = express.Router();
const {getPersons} = require('./controller')
route.get('/', getPersons)

module.exports = route;