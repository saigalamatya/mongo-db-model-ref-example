const express = require('express');
const router = express.Router();

const Alpha = require('../models/alpha');
const Beta = require('../models/beta');

router.post('/api/alpha', (req, res) => {
    // console.log(req.body);
    let alpha = new Alpha({
        name: req.body.name,
        address: req.body.address
    });

    alpha.save((err, alpha) => {
        if(err) {
            return res.send(500).json({
                message: "Error in Alpha get"
            });
        }

        let beta1 = new Beta({
            name: "Sabin",
            address: "Lubhu",
            alpha: alpha._id
        });

        beta1.save((err, beta1) => {
            if(err) {
                return res.send(500).json({
                    message: "Error in Beta1"
                });
            }

            res.status(201).json({
                message: "Beta1 created",
                obj:beta1
            });
        });

        // if(alpha) {
        //     res.send({
        //         message: "Saved successfully!!!"
        //     });
        // }
    });
});

router.get('/api/alpha', (req, res) => {
    // console.log("Student List");
    // res.json({message: "Success"});
    Alpha.find({}, (err, result) => {
        if(err) {
            return res.send(500).json({
                message: "Error!"
            });
        }

        res.status(200).json({
            message: "Success!!!",
            obj: result
        });
    });
});

module.exports = router;