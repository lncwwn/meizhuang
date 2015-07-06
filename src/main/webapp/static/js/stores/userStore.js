'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');

// default state
var userInSession = sessionStorage.getItem('currentUser');
if (userInSession) {
    userInSession = JSON.parse(userInSession);
}
var defaultUser = userInSession || {
    profile: {
        id: undefined,
        nick: null,
        name: null,
        email: null
    },
    isLoggedIn: false
};

var UserStore = Reflux.createStore({
    listenables: actions,

    init: function() {
        this.user = defaultUser;
        this.listenTo(actions.signup, this.afterSignup),
        this.listenTo(actions.login, this.afterLogin),
        this.listenTo(actions.logout, this.afterLogout)
    },
    afterSignup: function() {
        // TODO
    },
    afterLogin: function(profile) {
        this.user.isLoggedIn = true;
        this.user.profile.id = profile.id;
        this.user.profile.nick = profile.nick;
        this.user.profile.name = profile.name;
        this.user.profile.email = profile.email;
        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        this.trigger(this.user);
    },
    afterLogout: function() {
        this.user = defaultUser;
        this.trigger(this.user);
    },
    afterUpdate: function() {
        // TODO
    },
    getUser: function() {
        return this.user;
    }
});

module.exports = UserStore;
