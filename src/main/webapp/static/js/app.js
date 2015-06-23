/**
 * entry module
 *
 * @author victor li
 * @date 2015/06/22
 */

window.React = require('react');
window.$ = require('jquery');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var Link = ReactRouter.Link;
var actions = require('./actions/actions');
var Works = require('./views/works');
var Login = require('./components/login');

var WorksOfArt = React.createClass({
    render: function() {

        var overlay = <Login url='/user/login' />;

        var userArea = (
            <ul className='nav navbar-nav navbar-right'>
                <li><a href='javascript:;' onClick={actions.showOverlay.bind(this, 'login')}>登录</a></li>
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

            </div>
        );
    }
});

var routes = (
    <Route handler={WorksOfArt}>
        <Route name='login' path='/user/login/' handler={Login}></Route>
        <Route name='signup' path='/user/signup/' handler={Login}></Route>
        <Route name='none' path='none' handler={Login}></Route>
        <DefaultRoute name='home' handler={Works}></DefaultRoute>
    </Route>
);

ReactRouter.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});