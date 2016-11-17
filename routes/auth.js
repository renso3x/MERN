var express = require('express');
var app = express();
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var config = require('../config/config')[app.get('env')];

router.post('/', function(req, res, next) {
    var user = {
        email: req.body.email,
        password: req.body.password
    };

    User.findOne({email: user.email}).exec(function(err, credential) {
        if(credential) {
            if(bcrypt.compareSync(user.password, credential.password)) {
                var token = jwt.sign({
                    id: credential.id,
                    username: credential.email
                }, config.jwtSecret);

                res.status(200).json({token: token});

            } else {
                res.status(401).json({errors: 'Invalid Credentails'});
            }
        } else {
            res.status(401).json({errors: 'Invalid Credentails'});
        }
    });
});

module.exports = router;
