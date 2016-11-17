var express = require('express');
var router = express.Router();
var validator = require('validator');
var _ = require('underscore');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

function validateInput(data) {
    var errors = {};

    if(validator.isEmpty(data.email)) {
        errors.email = 'The email field is required';
    }

    if(!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(validator.isEmpty(data.password)) {
        errors.password = 'The password field is required';
    }

    if(!validator.equals(data.password, data.confirm_password)) {
        errors.passwordConfirmation = 'Password mismatch'
    }

    return {
        errors: errors,
        isValid: _.isEmpty(errors)
    }
}

router.post('/', function(req, res) {
    var validation = validateInput(req.body);

    if(!validation.isValid) {
        res.status(400).json(validation.errors)
    } else {
        User.find({}).exec(function(err, collection) {
            if(err) {
                return res.status(500).json({error: err})
            }

            var user = {
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            };

            User.create(user).then(function(resp) {
                res.status(200).json(resp);
            })
            .catch(function(err) {
                res.status(500).json({error: err})
            })
        });
    }
});

module.exports = router;
