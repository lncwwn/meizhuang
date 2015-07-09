/**
 * publish work module
 *
 * @author victor li
 * @date 2015/07/04
 *
 */

'use strict';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Publish = React.createClass({
    handleSubmit: function() {
        // todo
    },
    render: function() {
        return (
            <div className='clearfix'>
                <form className='col-md-offset-3 col-md-6' onSubmit={this.handleSubmit}>
                    <h3>发布作品</h3>
                    <div className='form-group'>
                        <input type='text' className='form-control' ref='name' name='name' placeholder='请输入作品名称' autofocus='true'/>
                    </div>
                    <div className='form-group'>
                        <textarea ref='description' className='form-control' rows='5' placeholder='请输入作品简介'></textarea>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' ref='price' name='price' placeholder='请输入作品价格，可选'/>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-offset-3 col-md-6'>
                            <button className='btn btn-primary btn-lg col-md-10' type='submit'>发布</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Publish;
