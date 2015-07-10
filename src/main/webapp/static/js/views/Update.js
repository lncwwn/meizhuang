/**
 * update password
 * @author victor li
 * @date 2015/06/24
 */

'use strict';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Update = React.createClass({
    render: function() {
        return (
            <form className='form-area'>
                <h3>更换密码</h3>
                <input type='text' className='form-control' name='email' placeholder='邮箱帐号' autofocus='true'/>
                <input type='password' className='form-control' name='password' placeholder='新密码'/>
                <input type='password' className='form-control' name='password_confirm' placeholder='再次输入新密码'/>
                <button className='btn btn-default btn-primary btn-block' type='submit'>更换密码</button>
                <div className='form-bottom'>
                    <span className='text-muted'>不，</span><Link to='login'>直接登录</Link>
                </div>
            </form>
        );
    }
});

module.exports = Update;
