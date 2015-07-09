/**
 * Login
 *
 * @author victor li
 * @date 2015/06/22
 */

'use strict';

var UserAction = require('../actions/UserAction');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Login = React.createClass({
    mixins: [
        require('react-router').Navigation
    ],
    getInitialState: function() {
        return {user: null};
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nick = this.refs.nick.getDOMNode().value,
            password = this.refs.password.getDOMNode().value;

        if (!nick || !password) return;

        var params = {nick: nick, password: password}, self = this;
        $.ajaxSetup({
            contentType:"application/x-www-form-urlencoded; charset=UTF-8"
        });
        $.post(MZ.base + '/user/login', 'params=' + JSON.stringify(params), function(data) {
            if (data) {
                data = JSON.parse(data);
                if (data.code === 1) {
                    var user = data.data;
                    UserAction.login(user);
                    self.transitionTo('home');
                } else {
                    //common.warn(data.msg);
                }
            }
        });
    },
    render: function() {
        return (
            <form className='form-area' method='post' onSubmit={this.handleSubmit}>
                <h3>用户登录</h3>
                <input type='text' className='form-control' ref='nick' name='nick' placeholder='用户名' autofocus='true'/>
                <input type='password' className='form-control' ref='password' name='password' placeholder='密码'/>
                <div className='checkbox'>
                    <label>
                        <input type='checkbox' name='remember'/> <span className='text-muted'>记住我</span>
                    </label>
                </div>
                <button className='btn btn-default btn-primary btn-block js-user-login-btn'> 登录</button>
                <div className='form-bottom'>
                    <Link to='signup'>注册帐号</Link> <span className='text-muted'>或者</span> <Link to='update'>修改密码</Link>
                </div>
            </form>
        );
    }
});

module.exports = Login;
