const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    data.username = validText(data.username) ? data.username : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";

    // console.log(data)
    if (!Validator.isLength(data.username, {min: 2, max: 20})){
        errors.username = 'Username must be between 2 and 20 characters';
    }
    if (Validator.isEmpty(data.username)){
        errors.username = 'Username must not be empty'
    }
    if (Validator.isEmpty(data.password)){
        errors.password = 'Password is required'
    }
    if (!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Password must be at least 6 chars';
    }
    if (Validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm Password field is required';
    }
    if (!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

