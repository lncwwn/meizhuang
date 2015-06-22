/**
 * Login
 *
 * @author victor li
 * @date 2015/06/22
 */

var actions = require('../actions/actions');
var userStore = require('../stores/userStore.js');

var Login = React.createClass({
    getInitialState: function() {
        return {user: null};
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nick = this.refs.nick.getDOMNode().value,
            password = this.refs.password.getDOMNode().value;

        if (!nick || !password) return;

        var params = {nick: nick, password: password}
        $.post(MZ.base + this.props.url, 'params=' + JSON.stringify(params), function(data) {
            if (data) {
                data = JSON.parse(data);
                if (data.code === 1) {
                    var user = data.data;
                    actions.login(user);
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
                        <input type='checkbox' name='remember'/> 记住我
                    </label>
                </div>
                <button className='btn btn-default btn-primary btn-block js-user-login-btn'> 登录</button>
                <div className='form-bottom'>
                    <a href='${base}/user/register'>注册帐号</a> 或者 <a href='${base}/user/change_password'>修改密码</a>
                </div>
            </form>
        );
    }
});

module.exports = Login;
