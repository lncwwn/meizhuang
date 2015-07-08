/**
 * broadcast components
 *
 * @author victor li
 * @date 2015/07/06
 */

'use strict';

var Broadcast = React.createClass({

    render: function() {
        return (
            <div className='broadcast'>
                <div className='pull-left'>
                    <ul className='list-unstyled'>
                        <li><a href="#" className='text-muted'>树木盆景</a></li>
                        <li><a href="#" className='text-muted'>山水盆景</a></li>
                        <li><a href="#" className='text-muted'>树石盆景</a></li>
                        <li><a href="#" className='text-muted'>微型盆景</a></li>
                        <li><a href="#" className='text-muted'>水旱盆景</a></li>
                        <li><a href="#" className='text-muted'>花草盆景</a></li>
                        <li><a href="#" className='text-muted'>挂壁盆景</a></li>
                        <li><a href="#" className='text-muted'>异型盆景</a></li>
                        <li><a href="#" className='text-muted'>其它盆景</a></li>
                    </ul>
                </div>
                <div className='pull-right '></div>
            </div>
        );

    }

});

module.exports = Broadcast;

