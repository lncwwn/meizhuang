/**
 * Notification Store
 *
 * @author victor li
 * @date 2015/07/23
 */

var Reflux = require('reflux');

var NotificationAction = require('../actions/NotificationAction');

var defaultNotification;

var NotificationStore = Reflux.createStore({

    init: function() {
        this.notification = defaultNotification;
        this.listenTo(NotificationAction.updateNotification, 'updateNotification');
    },

    updateNotification: function(notification) {
        this.notification = notification;
        this.trigger(this.notification);
    },

    getNotification: function() {
        return this.notification;
    }

});

module.exports = NotificationStore;
