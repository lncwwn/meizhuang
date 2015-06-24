/**
 * signup
 * @author victor li
 * @date 2015/06/24
 */

'use strict';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Signup = React.createClass({
    render: function() {
        return (
            <form className='form-area'>
                <h3>用户注册</h3>
                <input type='text' className='form-control' name='nick' placeholder='用户名' autofocus='true'/>
                <input type='password' className='form-control' name='password' placeholder='密码'/>
                <input type='password' className='form-control' name='password_confirm' placeholder='再次输入密码'/>
                <input type='text' className='form-control' name='email' placeholder='邮箱帐号'/>
                <button className='btn btn-default btn-primary btn-block js-user-register-btn'>注册</button>
                <div className='form-bottom'>
                    已有账户? <Link to='login'>立即登录</Link>
                </div>
            </form>
        );
    }
});

module.exports = Signup;