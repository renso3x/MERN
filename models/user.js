var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String,
});

mongoose.model('User', userSchema);