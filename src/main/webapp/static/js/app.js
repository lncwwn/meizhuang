/**
 * entry module
 *
 * @author victor li
 * @date 2015/06/22
 */

'use strict';

window.React = require('react');
window.$ = require('jquery');

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
var UserStore = require('./stores/userStore');

var WorksOfArt = React.createClass({

    getInitialState: function() {
        return {
            user: UserStore.getUser()
        };
    },
    render: function() {
console.log(this.state.user)
        var overlay = <Login url='/user/login' />;

        var userArea = (
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
                                <ul className='nav navbar-nav'>
                                    <li><a href='javascript:;'>我的艺术馆</a></li>
                                </ul>
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
        <DefaultRoute name='home' handler={Works}></DefaultRoute>
    </Route>
);

ReactRouter.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});
