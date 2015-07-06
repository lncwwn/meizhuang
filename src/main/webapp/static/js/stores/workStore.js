'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');

var WorkStore = Reflux.createStore({
    listenables: actions,

    init: function() {
        this.listenTo(actions.works, this.loadWorks);
    },

    loadWorks: function() {
        var works = [
            {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp10576074.jpg'},
            {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp7887718.jpg'},
            {href: 'http://7sbncd.com1.z0.glb.clouddn.com/mzp8589861.jpg'}
        ];
        this.trigger(works);
    }
});

module.exports
