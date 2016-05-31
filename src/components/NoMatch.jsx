var React = require('react');

var NoMatch = React.createClass({
   render:function() {
       return (
        <div>
            <h4>No match for that page</h4>
        </div>
       );
    } 
});

module.exports = NoMatch;