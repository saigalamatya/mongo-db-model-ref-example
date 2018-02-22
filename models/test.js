const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    title: String,
    description: String,
    body: String
});

module.exports = mongoose.model('Test', testSchema);

