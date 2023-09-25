const express = require('express');
const PersonController = require('../controllers/person.controller');

const RouterPerson = express.Router();

RouterPerson.get('/get-list', PersonController.getList);

RouterPerson.get('/get-row/:id',PersonController.getRow);

RouterPerson.post('/create', (req,res,next)=> {
    // process handle get row person
    res.status(200).json({status: 'success', message: '', data: []});
});

RouterPerson.put('/update', (req,res,next)=> {
    // process handle get row person
});

RouterPerson.delete('/delete/:id', (req,res,next)=> {
    // process handle delete person by id
});

module.exports = RouterPerson;