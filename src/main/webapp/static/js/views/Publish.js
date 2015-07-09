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

    limitTitle: function() {
        var title = this.refs.name.getDOMNode().value,
            limitLength = 30;
        if (title && title.length > 0) {
            var currentLength = title.length,
                restLength = limitLength - currentLength;
            this.setState({
                restCount: restLength
            });
        } else {
            this.setState({
                restCount: limitLength
            });
        }
    },

    getInitialState: function() {
        return ({
            restCount: 30
        });
    },

    handleSubmit: function() {
        // todo
    },

    render: function() {
        var restCountComponent = this.state.restCount > 0 ? (
            <span>剩余<strong className='text-primary'>{this.state.restCount}</strong>个字</span>
        ) : (
            <span>已超出<strong className='text-danger'>{(-1 * this.state.restCount)}</strong>个字</span>
        );
        return (
            <div className='clearfix'>
                <form className='col-md-offset-3 col-md-6' onSubmit={this.handleSubmit}>
                    <h3>发布作品</h3>
                    <div className='form-group'>
                        <div className='input-group'>
                            <input type='text' className='form-control' ref='name' name='name' placeholder='请输入作品名称，限制30个字' autofocus='true' onInput={this.limitTitle} />
                            <span className="input-group-addon">{restCountComponent}</span>
                        </div>
                    </div>
                    <div className='form-group'>
                        <textarea ref='description' className='form-control' rows='5' placeholder='请输入作品描述，好的描述可以提高作品的排名'></textarea>
                    </div>
                    <div className='form-group'>
                        <div className='input-group'>
                            <input type='text' className='form-control' ref='price' name='price' placeholder='请输入作品价格，可选，默认为面议' />
                            <span className="input-group-addon">元</span>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='col-md-offset-10 col-md-2'>
                            <button className='btn btn-info btn-lg col-md-12' type='submit'>确认发布</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Publish;
