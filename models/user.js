var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
});

mongoose.model('User', userSchema);