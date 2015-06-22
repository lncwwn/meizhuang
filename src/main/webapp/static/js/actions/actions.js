'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'update': {},
    'showOverlay': {}
});

module.exports = actions;
