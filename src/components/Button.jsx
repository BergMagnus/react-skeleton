var React = require('react');

var inputButton = React.createClass({
    render: function () {
       return (
            <input type="submit" value={this.props.buttonname} />
       )
    } 
});

module.exports = inputButton;