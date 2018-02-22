const mongoose = require('mongoose');
const Alpha = require('./alpha');

var Schema = mongoose.Schema;

const betaSchema = mongoose.Schema({
    name: String,
    address: String,
    alpha: {
        type: Schema.Types.ObjectId,
        ref: 'Alpha'
    }
});

module.exports = mongoose.model("Beta", betaSchema);