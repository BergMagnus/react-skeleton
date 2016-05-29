var React = require('react');
var ListItem = require('./ListItem.jsx');

var testValue = [{"id":1, "text":"ham"}, {"id":2, "text":"cheese"}, {"id":3, "text":"tomato"}];

var List = React.createClass({
    render: function() {
        var listItem = testValue.map(function(item) {
            return <ListItem key={item.id} itemvalue={item.text} />;
        });
        
        return (<ul>{listItem}</ul>);
    }
});

module.exports = List;