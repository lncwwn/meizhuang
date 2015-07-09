/**
 * work store
 *
 * @author victor li
 * @date 2015/07/07
 */

'use strict';

var Reflux = require('reflux');
var WorkAction = require('../actions/WorkAction');

var WorkStore = Reflux.createStore({

    init: function() {
        this.listenTo(WorkAction.works, this.afterWorksLoaded);
    },

    afterWorksLoaded: function(works) {
        this.works = works;
        this.trigger(this.works);
    }

});

module.exports = WorkStore;
