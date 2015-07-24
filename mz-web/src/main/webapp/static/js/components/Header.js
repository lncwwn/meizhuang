/**
 * Header component
 *
 * @author victor li
 * @date 2015/07/10
 */

'use strict';

var Reflux = require('reflux');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Search = require('../components/Search');
var Signup = require('../views/Signup');
var Login = require('../views/Login');
var Notification = require('../components/Notification');
var UserStore = require('../stores/UserStore');
var UserAction = require('../actions/UserAction');
var NotificationAction = require('../actions/NotificationAction');
var NotificationStore = require('../stores/NotificationStore');

var Header = React.createClass({

    mixins: [
        Reflux.listenTo(UserStore, 'updateUser'),
        Reflux.listenTo(NotificationStore, 'updateNotification')
    ],

    getInitialState: function() {
        return {
            user: UserStore.getUser(),
            notification: NotificationStore.getNotification()
        };
    },

    updateUser: function(user) {
        this.setState({
            user: user
        });
        var notification = {status: false, msg: ''};
        if (typeof user.id !== 'undefined') {
            notification.status
        }
        NotificationAction.updateNotification('kkkkkkkkkkkkkkk');
    },

    updateNotification: function(notification) {
        this.setState({
            notification: notification
        });
    },

    showUser: function(user) {
        if (user.profile.nick.length > 6) {
            return user.profile.nick.substr(0, 6) + '...';
        }

        return user.profile.nick;
    },

    render: function() {
        var user = this.state.user;
        var userArea = user.isLoggedIn ? (
            <ul className='nav navbar-nav navbar-right'>
                <li className='dropdown'>
                    <a href='javascript:;' className='dropdown-toggle' data-toggle='dropdown'
                    role='button' aria-haspopup='true' aria-expanded='false' title={user.profile.nick}>
                        <span className='glyphicon glyphicon-user' aria-hidden='true'></span> {this.showUser(user)}
                        <span className="caret"></span>
                    </a>
                    <ul className='dropdown-menu dropdown-menu-right'>
                        <li><Link to='profile' params={{uid: user.profile.id}}>我的主页</Link></li>
                        <li role='separator' className='divider'></li>
                        <li><Link to='publish'>发布作品</Link></li>
                        <li role='separator' className='divider'></li>
                        <li><a href='#'>我的艺术馆</a></li>
                        <li role='separator' className='divider'></li>
                        <li><a href='javascript:;' onClick={UserAction.logout}>退出登录</a></li>
                    </ul>
                </li>
            </ul>
        ) : (
            <ul className='nav navbar-nav navbar-right'>
                <li><Link to='signup'>用户注册</Link></li>
                <li><Link to='login'>登录</Link></li>
            </ul>
        );

        return (
            <div>
                <Notification notification={this.state.notification} />
                <div className='header'>
                    <div className='navbar min-height mz-navbar navbar-fixed-top' role='navigation'>
                        <div className='container-fluid'>
                            <div className='navbar-header'>
                                <Link to='home'>
                                    <a className='navbar-brand' href='javascript:;'>美桩网</a>
                                </Link>
                            </div>
                            <div className='nav navbar-nav'>
                                <Search />
                            </div>
                            <div className='collapse navbar-collapse'>
                                {userArea}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = Header;
