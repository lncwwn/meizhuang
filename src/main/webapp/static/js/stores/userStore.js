'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');

// default state
var defaultUser = {
    profile: {
        id: undefined,
        nick: null,
        name: null,
        email: null
    },
    isLoggedIn: false
};

Reflux.createStore({
    //
});
