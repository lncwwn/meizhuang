'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'changePassword': {}
});

module.exports = actions;
