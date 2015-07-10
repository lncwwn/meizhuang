/**
 * User store
 *
 * @author victor li
 * @date 2015/07/09
 */

'use strict';

var Reflux = require('reflux');
var UserAction = require('../actions/UserAction');

// default state
var userInSession = localStorage.getItem('currentUser');
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
    listenables: UserAction,

    init: function() {
        this.user = defaultUser;
        this.listenTo(UserAction.signup, this.afterSignup),
        this.listenTo(UserAction.login, this.afterLogin),
        this.listenTo(UserAction.logout, this.afterLogout)
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
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.trigger(this.user);
    },
    afterLogout: function() {
        this.user = defaultUser;
        sessionStorage.removeItem('currentUser');
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
