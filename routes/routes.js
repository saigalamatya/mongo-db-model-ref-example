const express = require('express');
const mongoose = require('../db/db');
const router = express.Router();

const Test = require('../models/test');
const Alpha = require('../models/alpha');
const Beta = require('../models/beta');

router.post('/api', (req, res) => {
    // console.log(req.body);
    // if no body parser is used req.body sends back undefined
    let test = new Test({
        title:req.body.title,
        description: "Test Description",
        body: "Test Body"
    });

    test.save((err, result) =>{
        if(err) {
           return console.log("Cannot save!");
            
        }
        res.send({
            message: "successful"
        })
    });
    // res.send({
    //     message: "askjdgasjdgsa"
    // })    
});

module.exports = router;