const express = require('express');
const router = express.Router();

const Beta = require('../models/beta');
const Alpha = require('../models/alpha');

router.post('/api/beta', (req, res) => {
    console.log(req.body);
    let beta = new Beta({
        name: req.body.name,
        address: req.body.address
    });

    beta.save((err, result) => {
        if(err) {
            return res.send(500).json({
                message: "Error"
            });
        }

        let alpha = new Alpha({
            name: "Saigal",
            address: "Anamnagar, KTM",
            beta: result._id
        })

        alpha.save((err, alpha) => {
            if(err) {
                return res.send(500).json({
                    message: "Error"
                });
            }

            res.status(200).json({
                message:"success",
                obj:result
            });
        });

        // if(result) {
        //     res.send({
        //         message: "Saved successfully!!!"
        //     });
        // }
    });
});

router.get('/api/beta', (req, res) => {
    
    Beta.findOne({name: "Sabin"})
        .populate('alpha')
        .exec((err, beta) => {
            if(err) {
                return res.send(500).json({
                    message: "Error in populating Beta"
                });
            }

            res.status(200).json({
                message: "Successfully populated",
                obj:beta
            });
        });

});

module.exports = router;