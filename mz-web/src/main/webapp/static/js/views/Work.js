/**
 * Works view
 *
 * @author victor li
 * @date 2015/07/09
 */
'use strict';

var Reflux = require('reflux');

var WorkAction = require('../actions/WorkAction');
var WorkStore = require('../stores/WorkStore');
var MasonryMixin = require('react-masonry-mixin');
var Broadcast = require('../components/Broadcast');

var masonryOptions = {
    transitionDuration: 0
};

var Works = React.createClass({
    mixins: [
        MasonryMixin('masonryContainer', masonryOptions),
        Reflux.listenTo(WorkStore, 'updateWorks')
    ],

    getInitialState: function() {
        return {works: []};
    },

    componentDidMount: function() {
        $.get(MZ.base + '/work/list?offset=0&limit=100', function(data) {
            if (data) {
                data = JSON.parse(data);
                data = data.data;
                WorkAction.works(data);
            }
        });
    },

    updateWorks: function(works) {
        this.setState({
            works: works
        });
    },

    render: function() {
        var childElements = this.state.works.map(function(work) {
            return (
                <div className="col-xs-6 col-md-3" key={work.id}>
                    <div className='thumbnail'>
                        <a href="javascript:;">
                            <img src={work.uri} />
                        </a>
                        <div className="caption">
                            {work.description}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <Broadcast />
                <div className='row'>
                    <div ref="masonryContainer" className='grid'>
                        {childElements}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Works;
