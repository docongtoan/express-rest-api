const mongoose = require('mongoose');
const personModel = require('../models/person.model');

const PersonController = {
    getList: async (req,res,next) => {
        try {
            let result = mongoose.model('user',personModel);
            result = await result.find().limit(100);
        } catch (error) {
            next(error);
        }
        res.status(200).json({status: 'success', message: '', data: result});
    },
    getRow: async(req,res,next) => {
        try {
            const id = +req.params.id || 0;
            let result = mongoose.model('user',personModel);
            result = await result.findOne({id: id});
            res.status(200).json({status: 'success', message: '', data: result});
        } catch (error) {
            next(error);
        }
    },
    processPerson: async (id , data)=> {
        return {}
    },

    create: async(req,res,next) => {
        let result = this.processPerson()
    },
    update: async(req,res,next) => {

    },
    delete: async(req,res,next) => {
        
    }
}

module.exports = PersonController;