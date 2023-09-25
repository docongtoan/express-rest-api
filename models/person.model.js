const mongoose = require('mongoose');

const schemaPerson  = mongoose.Schema({
    email: String,
    name: String
});

module.exports = schemaPerson;

