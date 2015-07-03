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
            <form className='form-area lg-form-area' onSubmit={this.handleSubmit}>
                <h3>发布作品</h3>
                <input type='text' className='form-control' ref='name' name='name' placeholder='作品名称' autofocus='true'/>
                <textarea ref='description' className='form-control' rows="3" placeholder='作品简介'></textarea>
                <input type='text' className='form-control' ref='email' name='email' placeholder=''/>
                <div className='form-group'>
                    <div className='col-md-offset-3 col-md-6'>
                        <button className='btn btn-primary btn-lg' type='submit'>发布</button>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = Publish;
