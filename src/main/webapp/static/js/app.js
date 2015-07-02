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
var actions = require('./actions/actions');
var Works = require('./views/works');
var Signup = require('./views/signup');
var Login = require('./views/login');
var Update = require('./views/update');
var Profile = require('./views/profile');
var UserStore = require('./stores/userStore');

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
    render: function() {

        var user = this.state.user;
        var overlay = <Login url='/user/login' />;
        var userArea = user.isLoggedIn ? (
            <ul className='nav navbar-nav navbar-right'>
                <li className='dropdown'>
                    <a href='javascript:;' className='dropdown-toggle' data-toggle='dropdown'
                     role='button' aria-haspopup='true' aria-expanded='false' title={user.profile.nick}>{user.profile.nick.substr(0, 6)}...</a>
                    <ul className='dropdown-menu dropdown-menu-right'>
                        <li><Link to='profile' params={{uid: user.profile.id}}>主页</Link></li>
                        <li role='separator' className='divider'></li>
                        <li><a href='#'>发布作品</a></li>
                        <li><a href='#'>我的艺术馆</a></li>
                    </ul>
                </li>
            </ul>
        ) : (
            <ul className='nav navbar-nav navbar-right'>
                <li><Link to='login'>登录</Link></li>
            </ul>
        );

        return (
            <div>
                <div className='header'>
                    <div className='navbar min-height mz-navbar' role='navigation'>
                        <div className='container-fluid'>
                            <div className='navbar-header'>
                                <Link to='home'>
                                    <a className='navbar-brand' href='javascript:;'>美桩网</a>
                                </Link>
                            </div>
                            <div className='collapse navbar-collapse'>
                                {userArea}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <RouteHandler/>
                </div>
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
        <DefaultRoute name='home' handler={Works}></DefaultRoute>
    </Route>
);

ReactRouter.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});

