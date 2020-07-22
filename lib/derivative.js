'use strict';

// helper methods
const clean = require('../utils/arrayHelpers');
const isNumeric = require('../utils/stringHelpers');

function derivative(input){
  return isNumeric(input);
}

module.exports = derivative;
