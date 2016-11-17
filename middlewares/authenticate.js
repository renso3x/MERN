var jwt = require('jsonwebtoken');
const config = require('../config/config')[require('express')().get('env')];

var mongoose = require('mongoose');
var User = mongoose.model('User');

var authenticate = function(req, res, next) {
    var authenticationHeader = req.headers['authorization'];
    var token;

    if(authenticationHeader) {
        token = authenticationHeader.split(' ')[1];
    }

    if (token) {
        jwt.verify(token, config.jwtSecret, function(err, decoded) {

            if( err ) {
                res.status(401).json({error: 'failed to authenticate.'});
            } else {
                User.findOne({email: decoded.username})
                    .then(function(user) {
                        req.currentUser = user;
                        next();
                    }).catch(function(err) {
                        res.status(404).json({error: 'No such user.'});
                    })
            }
        });
    } else {
        res.status(403).json({
            error: 'No Token provided'
        })
    }

}

module.exports = authenticate;