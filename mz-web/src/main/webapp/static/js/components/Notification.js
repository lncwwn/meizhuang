/**
 * Notification component
 *
 * @author victor li
 * @date 2015/07/21
 */

'use strict';

var Reflux = require('reflux');

var Notification = React.createClass({

    getInitialState: function() {
        return {
            status: ''
        };
    },

    render: function() {
        var notificationComponent;
        switch(this.state.status) {
            case 'success':
                notificationComponent = (
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        this.props.notification
                    </div>
                );
                break;
            case 'warning':
                notificationComponent = (
                    <div className="alert alert-warning alert-dismissible" role="alert">
                        this.props.notification
                    </div>
                );
                break;
            case 'error':
                notificationComponent = (
                    <div className="alert alert-error alert-dismissible" role="alert">
                        this.props.notification
                    </div>
                );
                break;
            default:
                notificationComponent = (
                    <div className="alert alert-error alert-dismissible" role="alert">
                        this.props.notification
                    </div>
                );
                break;
        }

        return this.state.status ? (
            <div>
                {notificationComponent}
            </div>
        ) : (
            <div className="hidden">
                {notificationComponent}
            </div>
        );
    }

});

