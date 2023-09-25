const express = require('express');

const Router = express.Router();

const RouterPerson = require('./person.router');

Router.use('/person', RouterPerson);

module.exports = Router;