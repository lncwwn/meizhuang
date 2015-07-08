/**
 * Search component
 *
 * @author victor li
 * @date 2015/07/08
 */

'use strict';

var Search = React.createClass({

    getInitialState: function() {
        return {
            expanded: false
        };
    },

    expandSearch: function(e) {
        if (this.state.expanded) return;
        var currentWidthStr = $(e.target).css('width'),
            currentWidth = 1 * currentWidthStr.replace('px', ''),
            nextWidth = currentWidth * 2;
        $(e.target).animate({'width': nextWidth + 'px'});
        this.setState({
            expanded: true
        });
    },

    resetSearch: function(e) {
        if (!this.state.expanded) return;
        var currentWidthStr = $(e.target).css('width'),
            currentWidth = 1 * currentWidthStr.replace('px', ''),
            nextWidth = currentWidth / 2;
        $(e.target).animate({'width': nextWidth + 'px'});
        this.setState({
            expanded: false
        });
    },

    render: function() {
        return (
            <ul className='list-inline search-area'>
                <li>
                    <input type="text" className="form-control" placeholder="搜索词，如：山水盆景"
                    onClick={this.expandSearch} onBlur={this.resetSearch} />
                </li>
                <li>
                    <button type="button" className="btn btn-info">搜索</button>
                </li>
            </ul>
        );
    }
});

module.exports = Search;

