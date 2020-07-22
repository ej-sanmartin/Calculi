'use strict';

const derivative = require('./lib/derivative');
const integral = require('./lib/integral');
const limit = require('./lib/limit');

derivative();
integral();
limit();

module.exports = { derivative, limit, integral };
