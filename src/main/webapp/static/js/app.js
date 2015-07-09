/**
 * entry module
 *
 * @author victor li
 * @date 2015/06/22
 */

'use strict';

window.React = require('react');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

var Reflux = require('reflux');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var UserAction = require('./actions/UserAction');
var Work = require('./views/Work');
var Signup = require('./views/Signup');
var Login = require('./views/Login');
var Update = require('./views/Update');
var Profile = require('./views/Profile');
var Publish = require('./views/Publish.js');
var UserStore = require('./stores/UserStore');
var Search = require('./components/Search');
var Footer = require('./components/Footer');

var WorksOfArt = React.createClass({

    mixins: [
        require('react-router').Navigation,
        Reflux.listenTo(UserStore, 'updateUser')
    ],

    getInitialState: function() {
        return {
            user: UserStore.getUser()
        };
    },

    updateUser: function(user) {
        this.setState({
            user: user
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
                <div className='main'>
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        );
    }
});

var routes = (
    <Route handler={WorksOfArt}>
        <Route name='login' path='/user/login/' handler={Login}></Route>
        <Route name='signup' path='/user/signup/' handler={Signup}></Route>
        <Route name='update' path='/user/update/' handler={Update}></Route>
        <Route name='profile' path='/user/profile/:uid' handler={Profile}></Route>
        <Route name='publish' path='/work/publish' handler={Publish}></Route>
        <DefaultRoute name='home' handler={Work}></DefaultRoute>
    </Route>
);

ReactRouter.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

