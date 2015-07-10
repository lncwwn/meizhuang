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
var Header = require('./components/Header');
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
        require('react-router').Navigation
    ],

    getInitialState: function() {
        return null;
    },

    render: function() {
        return (
            <div>
                <Header />
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

