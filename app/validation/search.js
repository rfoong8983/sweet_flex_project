const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSearchInput(searchInput) {
  let errors = {};
  searchInput = validText(searchInput) ? searchInput : "";

  if (Validator.isEmpty(searchInput)) {
    errors.searchInput = "Search Input required";
  }

  return {
    errors, 
    isValid: Object.keys(errors).length === 0,
  }

}