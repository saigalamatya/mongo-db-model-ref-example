var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mongo-db-practice");

mongoose.connection.on("connect", () => {
    console.log("Database connection successfully!!!"); 
});

mongoose.connection.on("error",() => {
    console.log("Database connection unsuccessful!!!");
});

module.exports = mongoose;