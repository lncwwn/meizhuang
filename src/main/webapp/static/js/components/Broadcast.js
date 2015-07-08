/**
 * broadcast components
 *
 * @author victor li
 * @date 2015/07/06
 */

'use strict';

var Reflux = require('reflux');

var CategoryStore = require('../stores/CategoryStore');
var CategoryAction = require('../actions/CategoryAction');

var Broadcast = React.createClass({

    mixins: [
        Reflux.listenTo(CategoryStore, 'updateCategories')
    ],

    getInitialState: function() {
        return {
            categories: CategoryStore.getCategories()
        };
    },

    componentDidMount: function() {
        $.get(MZ.base + '/category/list', function(data) {
            if (data) {
                data = JSON.parse(data);
                data = data.data;
                CategoryAction.categories(data);
            }
        });
    },

    updateCategories: function(categories) {
        this.setState({
            categories: categories
        });
    },

    render: function() {

        var categories = this.state.categories.map(function(category) {
            return (
                <li><a href="#" className='text-muted'>{category.name}</a></li>
            );
        });

        return (
            <div className='broadcast'>
                <div className='pull-left'>
                    <ul className='list-unstyled'>
                    {categories}
                    </ul>
                </div>
                <div className='pull-right '></div>
            </div>
        );

    }

});

module.exports = Broadcast;

