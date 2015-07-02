'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'update': {},
    'showOverlay': {}
});

actions.logout.listen(function() {

});

module.exports = actions;
