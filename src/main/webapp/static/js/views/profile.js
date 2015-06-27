var Profile = React.createClass({

    mixins: [
        require('react-router').Navigation
    ],

    render: function() {
        return (
            <h3>profile</h3>
        );
    }
});

module.exports = Profile;
