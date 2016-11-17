const mongoose = require("mongoose");

//import all models
require('../models/user');

module.exports = function(config) {
    mongoose.connect(config.db);
    mongoose.Promise = require('bluebird');//inject bluebird promise

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function() {
        console.log("connected!");
    });
}