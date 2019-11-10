const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Menu');
const Menue = mongoose.model('menu');

//get all item
router.get('/',(req,res) =>{
    Menue.find((err,docs) =>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving :' +JSON.stringify(err,undefined,2));}
    });
});

//get one item by Id
router.get('/:id',(req,res)=>{
    Menue.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in Retriving :'+JSON.stringify(err,undefined,2));}
    });  
});


module.exports = router;