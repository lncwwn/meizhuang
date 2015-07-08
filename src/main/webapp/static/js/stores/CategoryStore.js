/**
 * Category store
 *
 * @author victor li
 * @date 2015/07/08
 */

'use strict';

var Reflux = require('reflux');

var CategoryAction = require('../actions/CategoryAction');

var defaultCategories = [];

var CategoryStore = Reflux.createStore({
    listenables: CategoryAction,

    init: function() {
        this.categories = defaultCategories;
        this.listenTo(CategoryAction.categories, 'onLoadCategories');
    },

    onLoadCategories: function(categories) {console.log(categories)
        this.categories = categories;
        this.trigger(this.categories);
    },

    getCategories: function() {
        return this.categories;
    }

});

module.exports = CategoryStore;
