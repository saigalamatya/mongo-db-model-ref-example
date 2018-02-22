const mongoose = require('mongoose');
const Beta = require('./beta');

var Schema = mongoose.Schema;

const alphaSchema = mongoose.Schema({
    name: String,
    address: String,
    beta: {
        type: Schema.Types.ObjectId, ref: 'Beta'
    }
});

module.exports = mongoose.model("Alpha", alphaSchema);