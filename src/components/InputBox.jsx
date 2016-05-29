var React = require('react');

var inputText = React.createClass({
    render: function () {
       return (
            <input type="text"name={this.props.inputname} value={this.props.inoutvalue}/>
       )
    } 
});

module.exports = inputText;