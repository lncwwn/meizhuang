'use strict';

var Reflux = require('reflux');

var actions = Reflux.createActions({
    'login': {},
    'logout': {},
    'signup': {},
    'update': {},
    'showOverlay': {},
    'works': {}
});

actions.logout.listen(function() {

});

actions.works.listen(function() {
    $.get();
});

module.exports = actions;
