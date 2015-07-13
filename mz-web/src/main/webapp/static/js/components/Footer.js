/**
 * footer of app
 *
 * @author victor li
 * @date 2015/07/08
 */

'use strict';

var Footer = React.createClass({
    render : function() {
        return (
            <div className='footer'>
                <ul className='list-inline'>
                    <li className='text-muted'>Copyright &copy;2015, all rights reserved</li>
                    <li><a href="#" className='text-muted'>免责声明</a></li>
                    <li><a href="#" className='text-muted'>使用入门</a></li>
                    <li><a href="#" className='text-muted'>关于我们</a></li>
                    <li><a href="#" className='text-muted'>联系我们</a></li>
                    <li><a href="#" className='text-muted'>业务合作</a></li>
                    <li><a href="#" className='text-muted'>广告服务</a></li>
                </ul>
            </div>
        );

    }
});

module.exports = Footer;
