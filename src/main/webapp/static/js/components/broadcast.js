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
            <div className='row'>
                <ul className="list-group col-md-2">
                    <li className="list-group-item">
                        <span className="badge">6</span>
                        美桩1
                    </li>
                    <li className="list-group-item">
                        <span className="badge">2</span>
                        美桩2
                    </li>
                    <li className="list-group-item">
                        <span className="badge">3</span>
                        美桩3
                    </li>
                </ul>
                <div className="jumbotron col-md-10">
                    <div className="container">
                      ...
                    </div>
                </div>
            </div>
        );

    }

});

module.exports = Broadcast;

