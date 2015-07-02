'use strict';

var Freewall = require('freewall');

var Works = React.createClass({
    componentDidMount: function() {
        var wall = new Freewall.freewall('#js-works-list');
        wall.fitWidth(200);
    },
    render: function() {
        return (
            <div id='js-works-list'>
                <img src='http://img.alicdn.com/imgextra/i3/855442686/TB2W6FidFXXXXbRXpXXXXXXXXXX_!!855442686.jpg' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2sqAIbpXXXXbjXXXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i4/855442686/TB22DEycXXXXXXKXXXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i2/855442686/TB27q4mdFXXXXa6XpXXXXXXXXXX_!!855442686.jpg' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i3/855442686/TB2fVXKdFXXXXXtXXXXXXXXXXXX_!!855442686.jpg' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i3/855442686/TB20NBydFXXXXceXXXXXXXXXXXX_!!855442686.jpg' className='item'/>
                <img src='http://img.alicdn.com/imgextra/i1/855442686/TB2oAswbpXXXXaaXpXXXXXXXXXX_!!855442686.png' className='item'/>
            </div>
        );
    }
});

module.exports = Works;
