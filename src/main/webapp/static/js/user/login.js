/**
 * Login module
 * @author victor li
 * @date 2015/06/18
 */

var $ = require('jquery');
var React = require('react');
require('../common');

var LoginForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var nick = this.refs.nick.getDOMNode().value,
            password = this.refs.password.getDOMNode().value;

        if (!nick || !password) return;

        var params = {nick: nick, password: password};
        $.post(this.props.url, 'params=' + JSON.stringify(params), function(data) {
            if (data) {
                data = JSON.parse(data);
                if (data.code === 1) {
                    //location.href = base + '/';
                } else {
                    //common.warn(data.msg);
                }
            }
        });
    },
    render: function() {
        return (
            <form className="form-area" url="${base}/user/login" method="post" onSubmit={this.handleSubmit}>
                <h3>用户登录</h3>
                <input type="text" className="form-control" ref="nick" name="nick" placeholder="用户名" autofocus="true"/>
                <input type="password" className="form-control" ref="password" name="password" placeholder="密码"/>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="remember"/> 记住我
                    </label>
                </div>
                <button className="btn btn-default btn-primary btn-block js-user-login-btn"> 登录</button>
                <div className="form-bottom">
                    <a href="${base}/user/register">注册帐号</a> 或者 <a href="${base}/user/change_password">修改密码</a>
                </div>
            </form>
        );
    }
});

React.render(<LoginForm />, document.getElementById('js-login-form'));
