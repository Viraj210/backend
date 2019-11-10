const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const ObjectId = router ('mongoose').Types.ObjectId;
const ObjectId = mongoose.Schema.Types.ObjectId;


require('../models/Table');
const Table = mongoose.model('tables');

//get all tables
router.get('/',(req,res) =>{
    Table.find((err,docs) =>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving :' +JSON.stringify(err,undefined,2));}
    });
});

//get one table by Id
router.get('/:id',(req,res)=>{
    Table.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in Retriving :'+JSON.stringify(err,undefined,2));}
    });  
});


module.exports = router;