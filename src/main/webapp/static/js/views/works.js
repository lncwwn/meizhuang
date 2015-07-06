'use strict';

var actions = require('../actions/actions');
var workStore = require('../stores/workStore');
var MasonryMixin = require('react-masonry-mixin');
var Broadcast = require('../components/broadcast');

var masonryOptions = {
    transitionDuration: 0
};

var Works = React.createClass({
    mixins: [
        MasonryMixin('masonryContainer', masonryOptions)
    ],

    getInitialState: function() {
        return {works: [
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp10576074.jpg', description: '这是描述1'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp7887718.jpg', description: '这是描述2'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp8589861.jpg', description: '这是描述3'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp6049634.jpg', description: '这是描述4'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp8589861.jpg', description: '这是描述5'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp7887718.jpg', description: '这是描述6'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp10457336.jpg', description: '这是描述7'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp9585973.jpg', description: '这是描述8'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp13458958.jpg', description: '这是描述9'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp11461037.jpg', description: '这是描述10'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp10003072.jpg', description: '这是描述11'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp13897240.jpg', description: '这是描述11'},
                {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp13422858.jpg', description: '这是描述11'}
        ]};
    },

    render: function() {
        var childElements = this.state.works.map(function(work) {
            return (
                <div className="col-xs-6 col-md-3">
                    <div className='thumbnail'>
                        <a href="javascript:;">
                            <img src={work.href} />
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
