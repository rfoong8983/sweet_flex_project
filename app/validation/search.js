const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSearchInput(data) {
  let errors = {};
  data.searchInput = validText(data.searchInput) ? data.validateSearchInput : "";

  if (Validator.isEmpty(data.searchInput)) {
    errors.searchInput = "Search Input required";
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0,
  }

}