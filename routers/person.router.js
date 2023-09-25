const express = require('express');

const RouterPerson = express.Router();

RouterPerson.get('/get-list', (req,res,next)=> {
    // process handle get list person
    res.status(200).json({status: 'success', message: '', data: []});
});

RouterPerson.get('/get-row/:id', (req,res,next)=> {
    // process handle get row person
});

RouterPerson.post('/create', (req,res,next)=> {
    // process handle get row person
});

RouterPerson.put('/update', (req,res,next)=> {
    // process handle get row person
});

RouterPerson.delete('/delete/:id', (req,res,next)=> {
    // process handle delete person by id
});

module.exports = RouterPerson;