/**
 * Signup view
 *
 * @author victor li
 * @date 2015/06/24
 */

'use strict';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Signup = React.createClass({

    mixins: [
        require('react-router').Navigation
    ],

    handleSubmit: function(e) {
        e.preventDefault();
        var nick = this.refs.nick.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;
        var passwordConfirm = this.refs.password_confirm.getDOMNode().value;
        var email = this.refs.email.getDOMNode().value;

        if (!nick || !password || !passwordConfirm || !email) {
            return;
        }
        if (password !== passwordConfirm) {
            return;
        }
        var params = {nick: nick, password: password, email: email}, self = this;
        $.post('/mz-api/user/signup', 'params=' + JSON.stringify(params), function(data) {
            console.log(data);
            if (data) {
                data = JSON.parse(data);
                if (data.code === 1 && data.data) {
                    self.transitionTo('login');
                }
            }
        });
    },
    render: function() {
        return (
            <form className='form-area' onSubmit={this.handleSubmit}>
                <h3>用户注册</h3>
                <input type='text' className='form-control' ref='nick' name='nick' placeholder='用户名' autofocus='true'/>
                <input type='password' className='form-control' ref='password' name='password' placeholder='密码'/>
                <input type='password' className='form-control' ref='password_confirm' name='password_confirm' placeholder='再次输入密码'/>
                <input type='text' className='form-control' ref='email' name='email' placeholder='邮箱帐号'/>
                <button className='btn btn-default btn-primary btn-block js-user-register-btn'>注册</button>
                <div className='form-bottom'>
                    <span className='text-muted'>已有账户?</span> <Link to='login'>立即登录</Link>
                </div>
            </form>
        );
    }
});

module.exports = Signup;
