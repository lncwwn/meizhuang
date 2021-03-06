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
        $.get('/mz-api/category/list', function(data) {
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
                <li key={category.id}><a href="#" className='text-muted'>{category.name}</a></li>
            );
        });

        var categoriesComponent = (
            <ul className='list-unstyled'>
                {categories}
            </ul>
        );

        return (
            <div className='broadcast'>
                <div className='pull-left'>
                    {categoriesComponent}
                </div>
                <div className='pull-right '></div>
            </div>
        );

    }

});

module.exports = Broadcast;

