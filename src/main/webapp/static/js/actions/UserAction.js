'use strict';

var Reflux = require('reflux');

var UserAction = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'update': {}
});

module.exports = UserAction;
