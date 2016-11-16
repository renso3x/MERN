var express = require('express');
var router = express.Router();
var validator = require('validator');
var _ = require('underscore');

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
        return res.status(500).json({errors: validation.errors})
    }

    res.status(200).json({success: 'Successfully sign up!'});
});

module.exports = router;
