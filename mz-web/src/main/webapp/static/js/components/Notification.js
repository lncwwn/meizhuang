/**
 * Notification component
 *
 * @author victor li
 * @date 2015/07/21
 */

'use strict';

var Reflux = require('reflux');

var NotificationStore = require('../stores/NotificationStore');

var Notification = React.createClass({

    mixins: [
        Reflux.listenTo(NotificationStore, 'updateStatus')
    ],

    getInitialState: function() {
        return {
            notification: NotificationStore.getNotification()
        };
    },

    updateStatus: function(notification) {
        this.setState({
            notification: notification
        });
    },

    render: function() {
        var notificationComponent;
        switch(this.state.notification.status) {
            case 'success':
                notificationComponent = (
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        {this.state.notification.msg}
                    </div>
                );
                break;
            case 'warning':
                notificationComponent = (
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        {this.state.notification.msg}
                    </div>
                );
                break;
            case 'error':
                notificationComponent = (
                    <div className="alert alert-danger alert-dismissible" role="alert">
                        {this.state.notification.msg}
                    </div>
                );
                break;
            default:
                notificationComponent = (
                    <div className="alert alert-danger alert-dismissible" role="alert">
                        {this.state.notification.msg}
                    </div>
                );
                break;
        }

        return this.state.notification.status ? (
            <div className="col-md-4 col-md-offset-4" style={{position: 'fixed', zIndex: '999', marginTop: '-25px'}}>
                {notificationComponent}
            </div>
        ) : (
            <div className="hidden col-md-4 col-md-offset-4" style={{position: 'fixed', zIndex: '999', marginTop: '-25px'}}>
                {notificationComponent}
            </div>
        );
    }

});

module.exports = Notification;
